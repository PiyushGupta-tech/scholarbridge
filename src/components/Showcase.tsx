import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

const FLOAT_CHIPS = [
  { label: 'AI Paths', x: '8%', y: '22%', delay: '0s' },
  { label: 'Live Cart', x: '78%', y: '18%', delay: '0.6s' },
  { label: '83+ Programs', x: '12%', y: '68%', delay: '1.1s' },
  { label: '4.8★ Rated', x: '72%', y: '72%', delay: '1.7s' },
];

export function Showcase() {
  return (
    <section className="showcase showcase-epic" id="showcase">
      <div className="showcase-bg" aria-hidden="true">
        <span className="showcase-orb showcase-orb-a" />
        <span className="showcase-orb showcase-orb-b" />
        <span className="showcase-orb showcase-orb-c" />
        <div className="showcase-grid-lines" />
      </div>

      <div className="container showcase-inner">
        <Reveal variant="up">
          <div className="showcase-intro">
            <div className="showcase-intro-copy">
              <span className="showcase-kicker">Scholarship Experience</span>
              <h2>
                Designed for <em>modern</em> learners
              </h2>
            </div>
            <p>
              Bold visuals. Clear paths. Courses you enroll in right here —
              cart, buy now, place order — all on Scholarship.
            </p>
          </div>
        </Reveal>

        <div className="showcase-stage">
          {FLOAT_CHIPS.map((chip) => (
            <span
              key={chip.label}
              className="showcase-chip"
              style={{
                left: chip.x,
                top: chip.y,
                animationDelay: chip.delay,
              }}
            >
              {chip.label}
            </span>
          ))}

          <Reveal variant="scale" delay={100}>
            <div className="showcase-frame">
              <div className="showcase-frame-shine" aria-hidden="true" />
              <span className="showcase-badge">Scholarship Featured</span>
              <div className="showcase-frame-media">
                <img
                  src="/images/scholarship-hero.jpg"
                  alt="Scholarship lifelong learning platform"
                />
                <div className="showcase-img-fx" aria-hidden="true">
                  <span className="showcase-brand-mask" />
                  <span className="showcase-brand-patch">
                    Scholar<span>ship</span>
                  </span>
                </div>
              </div>
              <div className="showcase-overlay">
                <div className="showcase-overlay-copy">
                  <h3>Your Scholarship journey starts here</h3>
                  <p>
                    Discover programs, add to cart, and place orders — all on
                    the Scholarship platform.
                  </p>
                </div>
                <div className="showcase-overlay-actions">
                  <a href="#courses" className="btn btn-yellow">
                    Browse Programs
                  </a>
                  <Link to="/courses" className="btn btn-ghost">
                    Explore Paths
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="tilt" delay={180}>
            <aside className="showcase-side-card">
              <div className="showcase-side-top">
                <span className="pulse-dot" />
                Learning live
              </div>
              <strong>10k+</strong>
              <p>learners leveling up this month on Scholarship</p>
              <div className="showcase-side-bar">
                <i style={{ width: '78%' }} />
              </div>
              <span className="showcase-side-meta">78% weekly goal crush</span>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="showcase-strip">
            <div className="showcase-strip-track">
              {[
                'Scholarship Learning',
                'Career-Ready Skills',
                'Add to Cart',
                'Buy Now',
                'Place Order',
                'AI · Web · Cloud',
                'Sciences · Arts',
                'Scholarship Learning',
                'Career-Ready Skills',
                'Add to Cart',
                'Buy Now',
                'Place Order',
                'AI · Web · Cloud',
                'Sciences · Arts',
              ].map((item, i) => (
                <span key={`${item}-${i}`}>
                  <b>✦</b> {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="showcase-stats">
            <div>
              <strong>83+</strong>
              <span>Programs</span>
            </div>
            <div>
              <strong>9</strong>
              <span>Learning paths</span>
            </div>
            <div>
              <strong>50K+</strong>
              <span>Students</span>
            </div>
            <div>
              <strong>4.8★</strong>
              <span>Avg rating</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
