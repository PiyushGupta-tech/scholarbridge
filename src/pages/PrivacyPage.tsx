import { Link } from 'react-router-dom';
import { CompanyInfo } from '../components/CompanyInfo';
import { InfoCardGrid, InfoLayout, InfoStatRow } from '../components/InfoLayout';
import { COMPANY } from '../data/company';

export function PrivacyPage() {
  return (
    <InfoLayout
      eyebrow="Policies · Privacy"
      title="Your data, protected with care"
      subtitle="Scholarbridge collects only what we need to enroll you, support you, and improve learning — never to sell your story."
    >
      <p className="info-updated">Last updated: September 18, 2026</p>

      <InfoStatRow
        items={[
          { value: 'No sell', label: 'Of personal data' },
          { value: 'Local', label: 'Cart & orders' },
          { value: 'You', label: 'Stay in control' },
        ]}
      />

      <InfoCardGrid
        cards={[
          {
            icon: '🪪',
            title: 'What we collect',
            text: 'Name, email, phone, address at checkout, plus cart and order history in your browser.',
          },
          {
            icon: '🎯',
            title: 'Why we use it',
            text: 'Fulfill enrollments, answer support, improve courses, and send purchase updates.',
          },
          {
            icon: '🍪',
            title: 'Cookies & storage',
            text: 'Essential storage keeps your cart alive. See Cookie Policy for the full picture.',
          },
          {
            icon: '🛡️',
            title: 'Your choices',
            text: 'Ask to access, correct, or delete info via Contact — we’ll respond with care.',
          },
        ]}
      />

      <section>
        <h2>Sharing & security</h2>
        <p>
          We do not sell personal information. Data may be shared only with
          providers who help run payments or messaging, or when the law requires
          it. No method online is perfect — use strong habits and share only what
          enrollment needs.
        </p>
      </section>

      <section>
        <h2>Who is responsible for your data</h2>
        <p>
          Scholarbridge is operated by {COMPANY.legalName}, a{' '}
          {COMPANY.constitution.toLowerCase()} based in Uttar Pradesh, India. Privacy
          requests can be sent via <Link to="/contact">Contact</Link> or by post
          to our principal place of business below.
        </p>
        <CompanyInfo />
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Programs are for learners and professionals. If a child shared data
          without consent, <Link to="/contact">contact us</Link> and we’ll act.
        </p>
      </section>
    </InfoLayout>
  );
}
