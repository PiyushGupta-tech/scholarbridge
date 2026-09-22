import { Link } from 'react-router-dom';
import { InfoCardGrid, InfoLayout } from '../components/InfoLayout';

export function TermsPage() {
  return (
    <InfoLayout
      eyebrow="Policies · Terms"
      title="Clear rules. Fair learning."
      subtitle="These Terms keep Scholarship fair for every learner who browses, carts, buys, and places an order on this site."
    >
      <p className="info-updated">Last updated: September 18, 2026</p>

      <InfoCardGrid
        cards={[
          {
            icon: '✅',
            title: 'Agreement',
            text: 'Using Scholarship means you accept these Terms and our Privacy Policy.',
          },
          {
            icon: '📚',
            title: 'Enrollment',
            text: 'Prices and durations are on each course card. Orders confirm after Place Order.',
          },
          {
            icon: '💳',
            title: 'Payments',
            text: 'Listed in INR unless noted. Refunds follow our Refund Policy.',
          },
          {
            icon: '©️',
            title: 'Content rights',
            text: 'Materials are licensed for your personal learning — not for resale or leaks.',
          },
        ]}
      />

      <section>
        <h2>Acceptable use</h2>
        <ul>
          <li>Don’t misuse cart, checkout, or other learners’ data</li>
          <li>Don’t redistribute course materials beyond your license</li>
          <li>Don’t attempt unauthorized access to Scholarship systems</li>
          <li>Don’t use the platform for unlawful or harmful purposes</li>
        </ul>
      </section>

      <section>
        <h2>Outcomes</h2>
        <p>
          Programs are educational. We don’t guarantee specific jobs, exam scores,
          or career results — we give you the tools to compete.
        </p>
      </section>

      <section>
        <h2>Questions?</h2>
        <p>
          Reach us on <Link to="/contact">Contact</Link> or read{' '}
          <Link to="/refund">Refunds</Link> and <Link to="/privacy">Privacy</Link>.
        </p>
      </section>
    </InfoLayout>
  );
}
