import { Link } from 'react-router-dom';
import { InfoCardGrid, InfoLayout, InfoStatRow } from '../components/InfoLayout';
import { Reveal } from '../components/Reveal';

export function WhyUsPage() {
  return (
    <InfoLayout
      eyebrow="Explore · Why Us"
      title="Why learners choose Scholarbridge"
      subtitle="Clarity, practice, and personal attention — the Scholarbridge advantage that turns curiosity into career momentum."
    >
      <InfoStatRow
        items={[
          { value: '62+', label: 'Topics covered' },
          { value: '1:1', label: 'Attention mindset' },
          { value: '∞', label: 'Lifetime access feel' },
          { value: '₹', label: 'Honest pricing' },
        ]}
      />

      <Reveal>
        <section>
          <h2>The Scholarbridge edge</h2>
          <p>
            Crowded classrooms leave gaps. Scholarbridge closes them with visual
            teaching, personalised paths, and instructors who’ve shipped real work
            in industry — so you learn what actually matters.
          </p>
        </section>
      </Reveal>

      <InfoCardGrid
        cards={[
          {
            icon: '🧠',
            title: 'Conceptual clarity',
            text: 'Visual explanations that make hard ideas click — not just slide decks.',
          },
          {
            icon: '🎯',
            title: 'Personalised paths',
            text: 'Programs that flex around your goals: AI, web, cloud, sciences, arts.',
          },
          {
            icon: '🤝',
            title: 'Human attention',
            text: 'Guidance that feels individual — the opposite of a faceless mega-course.',
          },
          {
            icon: '🛠️',
            title: 'Practice first',
            text: 'Projects, labs, and certification prep woven into every serious track.',
          },
          {
            icon: '🏆',
            title: 'Proof of progress',
            text: 'Certificates and tangible skills you can show in interviews and portfolios.',
          },
          {
            icon: '🔒',
            title: 'Checkout you control',
            text: 'Cart, buy now, and place order stay on Scholarbridge — clean and local.',
          },
        ]}
      />

      <Reveal variant="left">
        <section>
          <h2>How learning feels here</h2>
          <ol className="info-steps">
            <li>
              <strong>Discover</strong> — browse color-coded categories that match
              your ambition.
            </li>
            <li>
              <strong>Decide</strong> — compare duration, learners, and price with
              full details.
            </li>
            <li>
              <strong>Enroll</strong> — add to cart or buy now, then place your
              order in minutes.
            </li>
            <li>
              <strong>Grow</strong> — learn with structure, practice, and support
              that sticks.
            </li>
          </ol>
        </section>
      </Reveal>

      <Reveal variant="scale">
        <section className="info-cta-block">
          <h2>See the advantage in action</h2>
          <p>Jump into programs or talk to us — we’re ready when you are.</p>
          <div className="info-cta-actions">
            <Link to="/#courses" className="btn btn-lime">
              Browse courses
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Talk to Scholarbridge
            </Link>
          </div>
        </section>
      </Reveal>
    </InfoLayout>
  );
}
