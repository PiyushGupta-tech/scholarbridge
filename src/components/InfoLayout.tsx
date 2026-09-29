import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Footer } from './Testimonials';
import { Reveal } from './Reveal';

const MARQUEE = [
  'Scholarbridge Learning',
  'Career-Ready Skills',
  'Add to Cart',
  'Place Order',
  'AI · Web · Cloud',
  'Learn Without Limits',
];

export function InfoLayout({
  title,
  subtitle,
  eyebrow = 'Scholarbridge',
  children,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  const loop = [...MARQUEE, ...MARQUEE];

  return (
    <>
      <div className="page info-page">
        <div className="info-glow" aria-hidden="true" />
        <span className="info-doodle info-doodle-1" aria-hidden="true">
          ✦
        </span>
        <span className="info-doodle info-doodle-2" aria-hidden="true">
          ◐
        </span>
        <span className="info-doodle info-doodle-3" aria-hidden="true">
          ✧
        </span>

        <div className="container">
          <Reveal variant="up">
            <div className="info-hero">
              <p className="info-eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              {subtitle && <p className="info-subtitle">{subtitle}</p>}
            </div>
          </Reveal>

          <div className="info-marquee" aria-hidden="true">
            <div className="info-marquee-track">
              {loop.map((item, i) => (
                <span key={`${item}-${i}`}>
                  <i /> {item}
                </span>
              ))}
            </div>
          </div>

          <article className="info-content info-content-animated">{children}</article>

          <Reveal delay={120}>
            <nav className="info-links" aria-label="Related pages">
              <Link to="/courses">Courses</Link>
              <Link to="/why-us">Why Us</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/refund">Refunds</Link>
              <Link to="/cookies">Cookies</Link>
            </nav>
          </Reveal>
        </div>

        <div className="info-torn" aria-hidden="true" />
      </div>
      <Footer />
    </>
  );
}

export function InfoStatRow({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="info-stats">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 70} variant="tilt">
          <div className="info-stat">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function InfoCardGrid({
  cards,
}: {
  cards: { icon: string; title: string; text: string }[];
}) {
  return (
    <div className="info-card-grid">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={i * 60} variant={i % 2 ? 'left' : 'right'}>
          <article className="info-mini-card">
            <span className="info-mini-icon" aria-hidden="true">
              {card.icon}
            </span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
