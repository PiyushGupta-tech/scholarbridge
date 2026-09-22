import { Link } from 'react-router-dom';
import { InfoCardGrid, InfoLayout, InfoStatRow } from '../components/InfoLayout';

export function RefundPage() {
  return (
    <InfoLayout
      eyebrow="Policies · Refunds"
      title="Enroll with confidence"
      subtitle="Scholarship keeps refunds simple: a clear window, honest eligibility, and human support when you need to cancel."
    >
      <p className="info-updated">Last updated: September 18, 2026</p>

      <InfoStatRow
        items={[
          { value: '7 days', label: 'Request window' },
          { value: '5–10', label: 'Business days to process' },
          { value: 'ID', label: 'Helps us move faster' },
        ]}
      />

      <InfoCardGrid
        cards={[
          {
            icon: '🗓️',
            title: 'Within 7 days',
            text: 'Request a refund if you haven’t heavily consumed materials yet.',
          },
          {
            icon: '🚫',
            title: 'Not refundable',
            text: 'After the window, completed certificate tracks, or marked non-refundable offers.',
          },
          {
            icon: '📨',
            title: 'How to ask',
            text: 'Message Contact with your order ID, course name, and reason.',
          },
          {
            icon: '⏳',
            title: 'Processing',
            text: 'Approved refunds usually land in 5–10 business days via your method.',
          },
        ]}
      />

      <section>
        <h2>Cancellations</h2>
        <p>
          If access hasn’t started, contact us quickly so we can cancel before
          materials unlock. Start here: <Link to="/contact">Contact Scholarship</Link>.
        </p>
      </section>
    </InfoLayout>
  );
}
