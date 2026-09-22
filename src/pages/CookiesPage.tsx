import { Link } from 'react-router-dom';
import { InfoCardGrid, InfoLayout } from '../components/InfoLayout';

export function CookiesPage() {
  return (
    <InfoLayout
      eyebrow="Policies · Cookies"
      title="Small files. Big smoothness."
      subtitle="Scholarship uses cookies and local storage so your cart, orders, and preferences feel seamless while you learn."
    >
      <p className="info-updated">Last updated: September 18, 2026</p>

      <InfoCardGrid
        cards={[
          {
            icon: '⚙️',
            title: 'Essential',
            text: 'Keep cart items, checkout state, and local order history working.',
          },
          {
            icon: '✨',
            title: 'Preferences',
            text: 'Remember simple UI choices when available for a smoother return visit.',
          },
          {
            icon: '📊',
            title: 'Analytics',
            text: 'If enabled, help us see which pages help learners most — never for creepy ads.',
          },
          {
            icon: '🧹',
            title: 'Your control',
            text: 'Clear site data in your browser anytime. That also clears local cart history.',
          },
        ]}
      />

      <section>
        <h2>Third parties</h2>
        <p>
          Fonts or images from third-party hosts may set their own cookies under
          their policies. For personal data rules, see{' '}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </section>
    </InfoLayout>
  );
}
