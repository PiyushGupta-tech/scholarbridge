import { useMemo, useState, type CSSProperties } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CATEGORIES, COURSES } from '../data/courses';
import { formatINR, useCart } from '../context/CartContext';
import type { Course } from '../types';
import { ProductModal } from './ProductModal';
import { Reveal } from './Reveal';

const PAGE_SIZE = 12;

type CatTheme = {
  accent: string;
  deep: string;
  soft: string;
  glow: string;
  gloss: string;
  text: string;
};

/** Royal glossy themes — deep jewels + frosted glass softs */
const CATEGORY_THEMES: Record<string, CatTheme> = {
  all: {
    accent: '#0f766e',
    deep: '#115e59',
    soft: 'rgba(15, 118, 110, 0.14)',
    glow: 'rgba(45, 212, 191, 0.45)',
    gloss: 'linear-gradient(135deg, #2dd4bf 0%, #0f766e 45%, #134e4a 100%)',
    text: '#ffffff',
  },
  'ai-ml': {
    accent: '#7e22ce',
    deep: '#581c87',
    soft: 'rgba(126, 34, 206, 0.16)',
    glow: 'rgba(192, 132, 252, 0.55)',
    gloss: 'linear-gradient(135deg, #e9d5ff 0%, #a855f7 35%, #6b21a8 70%, #3b0764 100%)',
    text: '#ffffff',
  },
  'web-development': {
    accent: '#1d4ed8',
    deep: '#1e3a8a',
    soft: 'rgba(29, 78, 216, 0.15)',
    glow: 'rgba(96, 165, 250, 0.55)',
    gloss: 'linear-gradient(135deg, #bfdbfe 0%, #3b82f6 38%, #1d4ed8 72%, #172554 100%)',
    text: '#ffffff',
  },
  'data-science': {
    accent: '#0e7490',
    deep: '#164e63',
    soft: 'rgba(14, 116, 144, 0.15)',
    glow: 'rgba(34, 211, 238, 0.5)',
    gloss: 'linear-gradient(135deg, #a5f3fc 0%, #22d3ee 32%, #0891b2 68%, #083344 100%)',
    text: '#ffffff',
  },
  cloud: {
    accent: '#c2410c',
    deep: '#7c2d12',
    soft: 'rgba(194, 65, 12, 0.15)',
    glow: 'rgba(251, 146, 60, 0.55)',
    gloss: 'linear-gradient(135deg, #fed7aa 0%, #fb923c 34%, #ea580c 68%, #7c2d12 100%)',
    text: '#ffffff',
  },
  'music-creative': {
    accent: '#be185d',
    deep: '#831843',
    soft: 'rgba(190, 24, 93, 0.15)',
    glow: 'rgba(244, 114, 182, 0.55)',
    gloss: 'linear-gradient(135deg, #fbcfe8 0%, #f472b6 34%, #db2777 68%, #500724 100%)',
    text: '#ffffff',
  },
  'social-humanities': {
    accent: '#a16207',
    deep: '#713f12',
    soft: 'rgba(161, 98, 7, 0.16)',
    glow: 'rgba(250, 204, 21, 0.5)',
    gloss: 'linear-gradient(135deg, #fef08a 0%, #facc15 32%, #ca8a04 66%, #422006 100%)',
    text: '#1a1205',
  },
  'pure-sciences': {
    accent: '#047857',
    deep: '#064e3b',
    soft: 'rgba(4, 120, 87, 0.15)',
    glow: 'rgba(52, 211, 153, 0.5)',
    gloss: 'linear-gradient(135deg, #a7f3d0 0%, #34d399 34%, #059669 68%, #022c22 100%)',
    text: '#ffffff',
  },
  'mathematics-logic': {
    accent: '#4338ca',
    deep: '#312e81',
    soft: 'rgba(67, 56, 202, 0.16)',
    glow: 'rgba(129, 140, 248, 0.55)',
    gloss: 'linear-gradient(135deg, #c7d2fe 0%, #818cf8 34%, #4f46e5 68%, #1e1b4b 100%)',
    text: '#ffffff',
  },
  'liberal-arts': {
    accent: '#be123c',
    deep: '#881337',
    soft: 'rgba(190, 18, 60, 0.15)',
    glow: 'rgba(251, 113, 133, 0.55)',
    gloss: 'linear-gradient(135deg, #fecdd3 0%, #fb7185 34%, #e11d48 68%, #4c0519 100%)',
    text: '#ffffff',
  },
};

function categoryLabel(id: string) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

function themeFor(id: string) {
  return CATEGORY_THEMES[id] ?? CATEGORY_THEMES.all;
}

export function Products({
  onToast,
}: {
  onToast: (msg: string) => void;
}) {
  const { addToCart, buyNow } = useCart();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const catFromUrl = searchParams.get('cat');

  const filter =
    catFromUrl && CATEGORIES.some((c) => c.id === catFromUrl)
      ? catFromUrl
      : 'all';

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Course | null>(null);

  const activeTheme = themeFor(filter);

  const selectCategory = (catId: string) => {
    setPage(1);
    const next = new URLSearchParams(searchParams);
    if (catId === 'all') {
      next.delete('cat');
    } else {
      next.set('cat', catId);
    }
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter((c) => {
      const catOk = filter === 'all' || c.category === filter;
      const qOk =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [filter, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (pageSafe - 1) * PAGE_SIZE,
    pageSafe * PAGE_SIZE,
  );

  const handleAdd = (course: Course) => {
    addToCart(course);
    onToast(`Added “${course.title}” to cart`);
  };

  const handleBuy = (course: Course) => {
    buyNow(course);
    onToast(`Ready to checkout: ${course.title}`);
    navigate('/checkout', { state: { buyNowId: course._id } });
  };

  const sectionStyle = {
    '--cat-accent': activeTheme.accent,
    '--cat-glow': activeTheme.glow,
    background: `
      radial-gradient(ellipse 70% 50% at 50% -10%, ${activeTheme.glow}, transparent 55%),
      linear-gradient(180deg, ${activeTheme.soft} 0%, rgba(255,255,255,0.92) 48%, #ffffff 100%)
    `,
    transition: 'background 0.5s ease',
  } as CSSProperties;

  return (
    <section className="section products-section" id="courses" style={sectionStyle}>
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2>All Programs</h2>
            <p>
              {COURSES.length} programs across tech, sciences & humanities —
              add to cart, buy now, and place orders without leaving this site.
            </p>
          </div>
        </Reveal>

        <div className="filters">
          {CATEGORIES.map((cat) => {
            const theme = themeFor(cat.id);
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn filter-btn-glossy ${isActive ? 'active' : ''}`}
                style={
                  {
                    '--g-accent': theme.accent,
                    '--g-deep': theme.deep,
                    '--g-soft': theme.soft,
                    '--g-glow': theme.glow,
                    '--g-gloss': theme.gloss,
                    '--g-text': theme.text,
                    borderColor: isActive ? theme.deep : `${theme.accent}88`,
                    background: isActive ? theme.deep : '#ffffff',
                    color: isActive ? '#ffffff' : theme.deep,
                    boxShadow: isActive
                      ? `0 12px 32px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,0.35)`
                      : `0 2px 10px ${theme.soft}`,
                    fontWeight: 700,
                  } as CSSProperties
                }
                onClick={() => selectCategory(cat.id)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div
          className="search-bar search-bar-glass"
          style={{
            background: '#ffffff',
            borderColor: `${activeTheme.accent}66`,
            boxShadow: `0 8px 28px ${activeTheme.glow}`,
          }}
        >
          <input
            type="search"
            placeholder="Search courses..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            aria-label="Search courses"
          />
        </div>

        <div className="courses-grid">
          {pageItems.map((course) => {
            const theme = themeFor(course.category);
            return (
              <article
                className="course-card course-card-themed course-card-glossy"
                key={course._id}
                style={
                  {
                    '--card-accent': theme.accent,
                    '--card-deep': theme.deep,
                    '--card-glow': theme.glow,
                    '--card-gloss': theme.gloss,
                    background: `linear-gradient(160deg, #ffffff 0%, #ffffff 38%, ${theme.soft} 100%)`,
                    borderColor: `${theme.accent}55`,
                    boxShadow: `
                      0 14px 36px ${theme.glow},
                      inset 0 1px 0 rgba(255,255,255,0.9)
                    `,
                  } as CSSProperties
                }
              >
                <div
                  className="course-card-accent course-card-accent-gloss"
                  style={{ background: theme.gloss }}
                  aria-hidden="true"
                />
                <div className="course-card-shine" aria-hidden="true" />
                <div className="course-body">
                  <span
                    className="course-cat course-cat-inline course-cat-gloss"
                    style={{
                      background: theme.deep,
                      color: '#ffffff',
                      boxShadow: `0 6px 16px ${theme.glow}`,
                    }}
                  >
                    {categoryLabel(course.category)}
                  </span>
                  <h3 onClick={() => setSelected(course)}>{course.title}</h3>
                  <div className="course-meta">
                    <span>{course.duration}</span>
                    <span>{course.students} learners</span>
                  </div>
                  <p className="course-desc">{course.description}</p>
                  <div className="course-price" style={{ color: theme.deep }}>
                    {formatINR(course.price)}
                  </div>
                  <div className="course-actions">
                    <button
                      type="button"
                      className="btn btn-outline btn-sm btn-glass"
                      style={{
                        borderColor: theme.deep,
                        color: theme.deep,
                        background: '#ffffff',
                        fontWeight: 700,
                      }}
                      onClick={() => handleAdd(course)}
                    >
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-royal"
                      style={{
                        background: theme.deep,
                        color: '#ffffff',
                        boxShadow: `0 10px 24px ${theme.glow}`,
                        fontWeight: 800,
                      }}
                      onClick={() => handleBuy(course)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state" style={{ marginTop: '1.5rem' }}>
            <p>No courses match your search.</p>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="pagination">
            <button
              type="button"
              className="btn btn-outline btn-sm btn-glass"
              disabled={pageSafe <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              style={{
                borderColor: `${activeTheme.accent}55`,
                color: activeTheme.deep,
              }}
            >
              Previous
            </button>
            <span style={{ fontWeight: 700, color: activeTheme.deep }}>
              Page {pageSafe} / {totalPages} · {filtered.length} programs
            </span>
            <button
              type="button"
              className="btn btn-outline btn-sm btn-glass"
              disabled={pageSafe >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              style={{
                borderColor: `${activeTheme.accent}55`,
                color: activeTheme.deep,
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {selected && (
        <ProductModal
          course={selected}
          onClose={() => setSelected(null)}
          onAdd={() => {
            handleAdd(selected);
            setSelected(null);
          }}
          onBuy={() => {
            handleBuy(selected);
            setSelected(null);
          }}
        />
      )}
    </section>
  );
}
