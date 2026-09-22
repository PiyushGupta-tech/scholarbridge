import { Link } from 'react-router-dom';

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
];

export function Hero() {
  return (
    <section className="hero hero-epic" id="home">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-orb hero-orb-1" />
        <span className="hero-orb hero-orb-2" />
        <span className="hero-orb hero-orb-3" />
        <div className="hero-mesh" />
        <div className="hero-sparkles">
          <i style={{ left: '12%', top: '18%' }} />
          <i style={{ left: '55%', top: '12%' }} />
          <i style={{ left: '88%', top: '28%' }} />
          <i style={{ left: '70%', top: '55%' }} />
        </div>
      </div>

      <div className="container hero-epic-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="trust-row hero-trust">
              <div className="avatar-stack">
                {avatars.map((src) => (
                  <img key={src} src={src} alt="" />
                ))}
                <span className="avatar-badge">10k</span>
              </div>
              <div className="trust-pill">
                <span className="pulse-dot" />
                Trusted by 10k Learners
              </div>
            </div>

            <p className="hero-kicker">Scholarship · Future-ready skills</p>

            <h1>
              Your Journey To{' '}
              <span className="accent">Lifelong Learning</span> Starts Here.
            </h1>

            <p className="hero-lead">
              Empowering students and professionals through high-quality online
              programs — the Scholarship way. Browse courses, add to cart, and
              place orders right here.
            </p>

            <div className="hero-ctas">
              <a href="#courses" className="btn btn-lime hero-btn-primary">
                Get Started
              </a>
              <a href="#showcase" className="btn btn-ghost hero-btn-secondary">
                7 Days Free Trial
              </a>
            </div>

            <div className="metric-row">
              <div className="metric-card mint metric-card-epic">
                <div className="metric-icon" aria-hidden="true">
                  📚
                </div>
                <div>
                  <div className="label">Learning Resource</div>
                  <strong>2000+</strong>
                </div>
                <span className="metric-glow" aria-hidden="true" />
              </div>
              <div className="metric-card sky metric-card-epic">
                <div className="metric-icon" aria-hidden="true">
                  🗓️
                </div>
                <div>
                  <div className="label">Personal Module</div>
                  <strong>Weekly</strong>
                </div>
                <span className="metric-glow" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="teacher-card glass-card teacher-card-epic">
              <div className="teacher-ring" aria-hidden="true" />
              <div className="teacher-glow" aria-hidden="true" />
              <img
                src="/images/instructor-hero.jpg"
                alt="Instructor Ishita Bhardwaj with laptop"
              />
              <div className="teacher-meta">
                <div>
                  <strong>Ishita Bhardwaj</strong>
                  <span>Data Science Professor</span>
                </div>
                <a
                  href="#courses"
                  className="icon-circle"
                  aria-label="Browse courses"
                >
                  ↗
                </a>
              </div>
              <span className="teacher-live">
                <span className="pulse-dot" /> Live mentor
              </span>
            </div>

            <div className="stat-card stat-card-epic">
              <div className="stars">
                {avatars.map((src) => (
                  <img key={src} src={src} alt="" />
                ))}
              </div>
              <strong>200+</strong>
              <p>Daily New Course Listing</p>
              <div className="stat-spark" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <article className="success-card success-card-epic">
            <div className="success-copy">
              <span className="success-chip">Scholarship Path</span>
              <h3>Graduate To Success Path</h3>
              <p>Building brighter futures through learning</p>
              <a href="#courses" className="success-link">
                Start your path →
              </a>
            </div>
            <div className="success-visual">
              <img
                src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=500&h=500&fit=crop&auto=format"
                alt="Graduate celebrating success"
              />
              <div className="success-orb" aria-hidden="true" />
              <div className="success-badge">
                <span>🎓</span>
                <strong>Certified</strong>
              </div>
            </div>
          </article>

          <article className="enroll-banner glass-card enroll-banner-epic">
            <div className="enroll-banner-shine" aria-hidden="true" />
            <div className="top">
              <div className="big">10k+</div>
              <div className="dot-label">Enrolled Every Day</div>
            </div>
            <h3>Learn New Skills, Shape Your Future.</h3>
            <p className="sub">
              Every lesson brings you one step closer to your goals.
            </p>
            <div className="enroll-actions">
              <Link to="/cart" className="btn btn-lime btn-sm">
                View Cart
              </Link>
              <a href="#courses" className="enroll-ghost-link">
                See programs →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
