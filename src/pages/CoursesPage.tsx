import { Link } from 'react-router-dom';
import { InfoCardGrid, InfoLayout, InfoStatRow } from '../components/InfoLayout';
import { CATEGORIES, COURSES } from '../data/courses';
import { Reveal } from '../components/Reveal';

export function CoursesPage() {
  const cats = CATEGORIES.filter((c) => c.id !== 'all');

  return (
    <InfoLayout
      eyebrow="Explore · Courses"
      title="Programs built for real careers"
      subtitle="Browse Scholarbridge’s full catalog — AI, web, cloud, sciences, creative arts, and more. Filter by path, add to cart, and enroll without leaving the site."
    >
      <InfoStatRow
        items={[
          { value: `${COURSES.length}+`, label: 'Live programs' },
          { value: '9', label: 'Learning paths' },
          { value: '50K+', label: 'Learners trust us' },
          { value: '4.8★', label: 'Avg. rating' },
        ]}
      />

      <Reveal>
        <section>
          <h2>Find your next skill</h2>
          <p>
            Every Scholarbridge program is designed around practice — projects,
            certification prep, and clear outcomes. Pick a path below or open the
            full animated catalog on the homepage.
          </p>
        </section>
      </Reveal>

      <div className="path-grid">
        {cats.map((cat) => {
          const count = COURSES.filter((c) => c.category === cat.id).length;
          return (
            <Link
              key={cat.id}
              to={`/?cat=${cat.id}#courses`}
              className={`path-card path-card--${cat.id}`}
            >
              <span className="path-count">{count} courses</span>
              <strong>{cat.label}</strong>
              <span className="path-cta">Explore →</span>
            </Link>
          );
        })}
      </div>

      <InfoCardGrid
        cards={[
          {
            icon: '🛒',
            title: 'Add to cart anytime',
            text: 'Build your learning stack — multiple programs, one checkout.',
          },
          {
            icon: '⚡',
            title: 'Buy now in seconds',
            text: 'Skip the wait. Instant local checkout with Place Order.',
          },
          {
            icon: '🎓',
            title: 'Career-ready outcomes',
            text: 'From Generative AI to Cloud & DevOps — skills employers hire for.',
          },
          {
            icon: '🌈',
            title: 'Color-coded paths',
            text: 'Each category lights up in its own royal theme so browsing feels clear.',
          },
        ]}
      />

      <Reveal variant="up">
        <section className="info-cta-block">
          <h2>Ready to enroll?</h2>
          <p>
            Open the full Scholarbridge catalog, filter by category, and start your
            journey today.
          </p>
          <div className="info-cta-actions">
            <Link to="/#courses" className="btn btn-lime">
              View all programs
            </Link>
            <Link to="/why-us" className="btn btn-outline">
              Why Scholarbridge
            </Link>
          </div>
        </section>
      </Reveal>
    </InfoLayout>
  );
}
