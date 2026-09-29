import { Link } from 'react-router-dom';
import { CompanyInfo } from '../components/CompanyInfo';
import { InfoCardGrid, InfoLayout, InfoStatRow } from '../components/InfoLayout';
import { COMPANY } from '../data/company';

export function AboutPage() {
  return (
    <InfoLayout
      eyebrow="Explore · About Us"
      title="Scholarbridge is where ambition meets craft"
      subtitle="We’re building a learning home for students and professionals who want skills that travel — into jobs, projects, and the next chapter of their career."
    >
      <InfoStatRow
        items={[
          { value: '50K+', label: 'Students enrolled' },
          { value: '100+', label: 'Courses available' },
          { value: '4.8/5', label: 'Average rating' },
          { value: '9', label: 'Discipline paths' },
        ]}
      />

      <section>
        <h2>Who we are</h2>
        <p>
          Scholarbridge is an online learning platform focused on real-world
          competence. From Generative AI and full-stack web to cloud, pure
          sciences, mathematics, and the liberal arts — we teach with clarity,
          practice, and respect for your time.
        </p>
        <p>
          Our north star is simple: every lesson should move you closer to
          something you can build, explain, or ship.
        </p>
      </section>

      <section>
        <h2>Our mission</h2>
        <p>
          Make premium learning feel accessible — not exclusive. We believe
          great education should be visual, personalised, and honest about what
          employers actually look for.
        </p>
      </section>

      <InfoCardGrid
        cards={[
          {
            icon: '🌱',
            title: 'Grow with intent',
            text: 'Paths designed for outcomes, not endless scroll.',
          },
          {
            icon: '🔬',
            title: 'Learn by doing',
            text: 'Projects and practice tests sit beside every major track.',
          },
          {
            icon: '🌏',
            title: 'Wide, not shallow',
            text: 'Tech, creative, sciences, and humanities — under one brand.',
          },
          {
            icon: '💛',
            title: 'Human brand',
            text: 'Real people answer via our contact page, email, and phone.',
          },
        ]}
      />

      <section>
        <h2>What makes Scholarbridge different</h2>
        <ul>
          <li>Industry-minded instructors and career-shaped curricula</li>
          <li>Colorful, modern browsing so finding the right course feels effortless</li>
          <li>Cart, Buy Now, and Place Order — a complete flow on this site</li>
          <li>Policies written for learners: privacy, refunds, terms, cookies</li>
        </ul>
      </section>

      <section>
        <h2>Company information</h2>
        <p>
          Scholarbridge is a brand of {COMPANY.legalName}, a{' '}
          {COMPANY.constitution.toLowerCase()} headquartered in Greater Noida
          West, Uttar Pradesh.
        </p>
        <CompanyInfo />
      </section>

      <section className="info-cta-block">
        <h2>Join the Scholarbridge story</h2>
        <p>
          Whether you’re switching careers or sharpening a craft, we’re glad
          you’re here.
        </p>
        <div className="info-cta-actions">
          <Link to="/courses" className="btn btn-lime">
            Explore courses
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact us
          </Link>
        </div>
      </section>
    </InfoLayout>
  );
}
