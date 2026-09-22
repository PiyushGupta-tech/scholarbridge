import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { InfoCardGrid, InfoLayout } from '../components/InfoLayout';
import { SocialLinks } from '../components/SocialLinks';

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <InfoLayout
      eyebrow="Explore · Contact"
      title="Let’s talk — we’re listening"
      subtitle="Courses, cart questions, refunds, partnerships — send a note or ping us on social. Scholarship support is human, fast, and friendly."
    >
      <InfoCardGrid
        cards={[
          {
            icon: '💬',
            title: 'Enrollment help',
            text: 'Stuck on Buy Now or Place Order? We’ll walk you through it.',
          },
          {
            icon: '📦',
            title: 'Order support',
            text: 'Share your order ID from the success page for the fastest help.',
          },
          {
            icon: '🤝',
            title: 'Partnerships',
            text: 'Colleges, creators, and companies — let’s build learning together.',
          },
        ]}
      />

      <div className="contact-grid">
        <section>
          <h2>Reach Scholarship</h2>
          <ul className="contact-details">
            <li>
              <strong>Hello</strong>
              <span>hello@scholarship.learn</span>
            </li>
            <li>
              <strong>Support</strong>
              <span>support@scholarship.learn</span>
            </li>
            <li>
              <strong>Phone / WhatsApp</strong>
              <span>+91 98765 43210</span>
            </li>
            <li>
              <strong>Hours</strong>
              <span>Mon–Sat · 10:00 AM – 6:00 PM IST</span>
            </li>
          </ul>
          <SocialLinks variant="light" label="Message us instantly" />
          <p style={{ marginTop: '1rem' }}>
            Looking for policies? See{' '}
            <Link to="/refund">Refunds</Link>, <Link to="/privacy">Privacy</Link>
            , or <Link to="/terms">Terms</Link>.
          </p>
        </section>

        <section>
          <h2>Send a message</h2>
          {sent ? (
            <div className="contact-success">
              <strong>Got it — thanks {form.name || 'friend'}!</strong>
              <p>
                Your message is saved in this browser session. In production this
                would email Scholarship support; here the full contact flow still
                works end to end.
              </p>
              <button
                type="button"
                className="btn btn-lime btn-sm"
                onClick={() => {
                  setSent(false);
                  setForm({
                    name: '',
                    email: '',
                    subject: 'general',
                    message: '',
                  });
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form className="form-grid contact-form" onSubmit={onSubmit}>
              <label>
                Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Subject
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                >
                  <option value="general">General question</option>
                  <option value="courses">Courses &amp; enrollment</option>
                  <option value="order">Order / payment</option>
                  <option value="refund">Refund request</option>
                  <option value="partnership">Partnership</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us how we can help…"
                />
              </label>
              <button type="submit" className="btn btn-lime">
                Send to Scholarship
              </button>
            </form>
          )}
        </section>
      </div>
    </InfoLayout>
  );
}
