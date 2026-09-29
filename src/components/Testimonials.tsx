import { useEffect, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { CompanyInfo } from './CompanyInfo';
import { ContactChips } from './ContactChips';
import { Reveal } from './Reveal';
const quotes = [
  {
    text: 'The course did a great job explaining AI—from development through application. Helpful for using AI responsibly as a tool.',
    name: 'Chitra Mehta',
    role: 'Generative AI & ML graduate',
    program: 'AI & ML',
    accent: '#c8f560',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&auto=format',
  },
  {
    text: 'Scholarbridge was truly a game-changer and a great guide as we brought our product to life with modern web and mobile skills.',
    name: 'Arjun Kapoor',
    role: 'Technical Co-Founder, CTO',
    program: 'Web & Mobile',
    accent: '#f5e74a',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&auto=format',
  },
  {
    text: 'Scholarbridge gives you the ability to be persistent. I learned exactly what I needed to know to get a new role.',
    name: 'Rohan Verma',
    role: 'Cloud & DevOps professional',
    program: 'Cloud & DevOps',
    accent: '#7dd3fc',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&auto=format',
  },
];

const FLOAT_CHIPS = [
  { label: '4.8★ average', x: '6%', y: '18%', delay: '0s' },
  { label: '50K+ learners', x: '78%', y: '14%', delay: '0.7s' },
  { label: 'Career-ready', x: '10%', y: '72%', delay: '1.2s' },
  { label: 'Real outcomes', x: '74%', y: '68%', delay: '1.8s' },
];

export function Testimonials() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % quotes.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="testimonials testimonials-epic">
      <div className="t-atmosphere" aria-hidden="true">
        <span className="t-orb t-orb-a" />
        <span className="t-orb t-orb-b" />
        <span className="t-orb t-orb-c" />
        <div className="t-grid-lines" />
        {FLOAT_CHIPS.map((chip) => (
          <span
            key={chip.label}
            className="t-float-chip"
            style={{
              left: chip.x,
              top: chip.y,
              animationDelay: chip.delay,
            }}
          >
            {chip.label}
          </span>
        ))}
      </div>

      <div className="container t-inner">
        <Reveal variant="up">
          <div className="t-intro">
            <span className="t-kicker">Learner Voices</span>
            <h2>
              Learning made fun — <em>what learners say</em>
            </h2>
            <p>
              A trusted space where professionals explore, build, and grow with
              industry-ready programs.
            </p>
          </div>
        </Reveal>

        <div className="t-rating-row" aria-hidden="true">
          <div className="t-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="t-star" style={{ animationDelay: `${i * 0.12}s` }}>
                ★
              </span>
            ))}
          </div>
          <span>Trusted by professionals worldwide</span>
        </div>

        <div className="testimonial-grid testimonial-grid-epic">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 120} variant={i === 1 ? 'scale' : 'tilt'}>
              <article
                className={`testimonial-card testimonial-card-epic${active === i ? ' is-active' : ''}`}
                style={{ '--t-accent': q.accent } as CSSProperties}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
              >
                <div className="t-card-glow" aria-hidden="true" />
                <div className="t-card-top">
                  <span className="t-program">{q.program}</span>
                  <span className="t-quote-mark" aria-hidden="true">
                    ”
                  </span>
                </div>
                <p className="t-quote">“{q.text}”</p>
                <div className="t-author">
                  <img src={q.avatar} alt="" loading="lazy" />
                  <div>
                    <strong>{q.name}</strong>
                    <span>{q.role}</span>
                  </div>
                </div>
                <div className="t-card-bar" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280} variant="up">
          <div className="t-dots" role="tablist" aria-label="Testimonials">
            {quotes.map((q, i) => (
              <button
                key={q.name}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`t-dot${active === i ? ' is-on' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="sr-only">{q.name}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={320} variant="scale">
          <div className="t-cta-band">
            <div>
              <strong>Join the next wave of learners</strong>
              <p>Explore programs built for real careers — enroll right here.</p>
            </div>
            <div className="t-cta-actions">
              <a href="#courses" className="btn btn-lime">
                Browse courses
              </a>
              <Link to="/why-us" className="btn btn-outline t-btn-light">
                Why Scholarbridge
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CTA_LEFT = [
  {
    title: 'Learn on your clock',
    text: 'Evening cohorts, weekend labs, and self-paced modules that flex around work and life.',
  },
  {
    title: 'Mentors who ship',
    text: 'Guidance from practitioners building products — not generic lecture recaps.',
  },
  {
    title: 'Enroll right here',
    text: 'Add to cart, buy now, and place your order on Scholarbridge without leaving the page.',
  },
];

const CTA_RIGHT = [
  {
    title: 'AI & Machine Learning',
    text: 'From generative tools to responsible deployment — career-ready AI paths.',
  },
  {
    title: 'Web, Cloud & DevOps',
    text: 'Modern stacks, containers, and cloud fluency employers actually hire for.',
  },
  {
    title: 'Sciences & Creative',
    text: 'Data, pure sciences, music, and liberal arts — depth beyond coding alone.',
  },
];

export function CTABand() {
  return (
    <section className="cta-band cta-band-epic">
      <div className="cta-ambient" aria-hidden="true">
        <span className="cta-orb cta-orb-a" />
        <span className="cta-orb cta-orb-b" />
      </div>

      <div className="container cta-inner">
        <div className="cta-layout">
          <aside className="cta-rail cta-rail-left">
            <p className="cta-rail-kicker">Why start now</p>
            <h3>Built for real schedules</h3>
            <ul className="cta-rail-list">
              {CTA_LEFT.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="cta-rail-note">
              83+ programs · 4.8★ rated · trusted by professionals worldwide
            </p>
          </aside>

          <Reveal variant="scale">
            <div className="cta-panel">
              <div className="cta-panel-media" aria-hidden="true">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&h=900&fit=crop&auto=format"
                  alt=""
                />
              </div>
              <div className="cta-panel-frost" aria-hidden="true" />
              <div className="cta-panel-shine" aria-hidden="true" />

              <div className="cta-panel-content">
                <span className="cta-kicker">Start today</span>
                <h2>
                  Don&apos;t delay — <em>start learning</em> today!
                </h2>
                <p>
                  Programs for every stage: AI, web, cloud, sciences, and more.
                  Enroll locally with add to cart, buy now, and place order.
                </p>

                <div className="cta-row cta-row-epic">
                  <a href="#courses" className="btn btn-yellow cta-enroll-btn">
                    Enroll Now
                  </a>
                  <Link to="/courses" className="btn btn-outline cta-browse-btn">
                    Browse all programs
                  </Link>
                </div>

                <div className="cta-trust">
                  <div className="avatar-stack cta-avatars">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop"
                      alt=""
                    />
                    <span className="avatar-badge">50K+</span>
                  </div>
                  <span className="cta-trust-text">
                    Already joined by <strong>50,000+</strong> students
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <aside className="cta-rail cta-rail-right">
            <p className="cta-rail-kicker">What you unlock</p>
            <h3>Paths that lead somewhere</h3>
            <ul className="cta-rail-list">
              {CTA_RIGHT.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="cta-rail-note">
              Cart · Buy now · Place order — all on Scholarbridge
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer footer-epic">
      <div className="footer-atmosphere" aria-hidden="true">
        <span className="footer-orb footer-orb-a" />
        <span className="footer-orb footer-orb-b" />
        <span className="footer-orb footer-orb-c" />
        <div className="footer-grid-lines" />
      </div>

      <div className="container footer-inner">
        <div className="footer-banner">
          <div>
            <span className="footer-banner-kicker">Scholarbridge</span>
            <strong>Ready for your next skill leap?</strong>
            <p>Browse programs, add to cart, and place your order — all right here.</p>
          </div>
          <div className="footer-banner-actions">
            <Link to="/courses" className="btn btn-lime">
              Browse courses
            </Link>
            <Link to="/why-us" className="btn btn-outline footer-banner-ghost">
              Why Us
            </Link>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo">
              Scholar<span>bridge</span>
            </Link>
            <p>
              Learn from the best — build real-world skills with career-ready
              programs in AI, web, cloud, sciences, and more.
            </p>
            <ContactChips variant="dark" />
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <Link to="/courses">Courses</Link>
            <Link to="/why-us">Why Us</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Policies</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/refund">Refund Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>

          <div className="footer-cta">
            <span className="footer-cta-kicker">Newsletter</span>
            <h4>Stay ahead</h4>
            <p>New programs, tips, and enrollment updates — straight to your inbox.</p>
            <form
              className="footer-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email for updates"
              />
              <button type="submit" className="btn btn-lime btn-sm">
                Join
              </button>
            </form>
            <div className="footer-mini-stats">
              <span>
                <b>50K+</b> learners
              </span>
              <span>
                <b>83+</b> programs
              </span>
              <span>
                <b>4.8★</b> rating
              </span>
            </div>
          </div>
        </div>

        <div className="footer-company">
          <span className="footer-cta-kicker">Company details</span>
          <CompanyInfo variant="dark" showContact={false} />
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} SCHOLARBRIDGE. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/cart">Cart</Link>
            <Link to="/#courses">All Programs</Link>
            <Link to="/contact">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
