import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { Reveal } from './Reveal';

const advantages = [
  {
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop&auto=format',
    caption: 'Conceptual clarity through visualisation',
    text: 'Hard ideas become clear with visual teaching that sticks.',
    tag: 'See it',
    num: '01',
    accent: '#0d4a36',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop&auto=format',
    caption: 'Personalised learning programs',
    text: 'Paths that flex around your goals — AI, web, cloud, and more.',
    tag: 'Your path',
    num: '02',
    accent: '#1d4ed8',
  },
  {
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=1000&fit=crop&auto=format',
    caption: 'Unmatched individual attention',
    text: 'Guidance that feels human — never a faceless mega-course.',
    tag: 'Human',
    num: '03',
    accent: '#be185d',
  },
];

export function Advantage() {
  return (
    <section className="why-section why-epic" id="why-us">
      <div className="why-atmosphere" aria-hidden="true">
        <span className="why-orb why-orb-a" />
        <span className="why-orb why-orb-b" />
        <div className="why-grid-lines" />
      </div>

      <div className="container why-inner">
        <Reveal variant="up">
          <div className="why-intro">
            <span className="why-kicker">Scholarship Advantage</span>
            <h2>
              Get the <em>Scholarship</em> advantage
            </h2>
            <p>
              Visual teaching, personalised paths, and human attention — motion,
              clarity, and craft in every Scholarship experience.
            </p>
          </div>
        </Reveal>

        <div className="advantage-grid advantage-grid-epic">
          {advantages.map((a, i) => (
            <Reveal key={a.caption} delay={i * 110} variant="tilt">
              <article
                className="advantage-card advantage-card-epic"
                style={{ '--adv-accent': a.accent } as CSSProperties}
              >
                <div className="advantage-media">
                  <img src={a.img} alt="" loading="lazy" />
                  <div className="advantage-media-shade" />
                  <span className="advantage-num">{a.num}</span>
                  <span className="advantage-tag">{a.tag}</span>
                </div>
                <div className="advantage-body">
                  <h3>{a.caption}</h3>
                  <p>{a.text}</p>
                  <Link to="/why-us" className="advantage-link">
                    Learn more →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240} variant="scale">
          <div className="why-cta-band">
            <div>
              <strong>Ready to feel the difference?</strong>
              <p>Dive deeper into why learners choose Scholarship.</p>
            </div>
            <div className="why-more">
              <Link to="/why-us" className="btn btn-lime">
                Explore Why Us
              </Link>
              <Link to="/courses" className="btn btn-outline why-btn-light">
                Browse courses
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
