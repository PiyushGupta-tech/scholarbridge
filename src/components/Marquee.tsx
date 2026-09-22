import type { ReactNode } from 'react';

function IconExplore() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M14.5 9.5 10 10l-.5 4.5 4.5-.5.5-4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconVoice() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="9"
        y="3.5"
        width="6"
        height="11"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6.5 11.5a5.5 5.5 0 0 0 11 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 17v3.5M9.5 20.5h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCreative() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5c1.2 2.4 2.2 3.4 4.6 4.6C14.2 9.3 13.2 10.3 12 12.7c-1.2-2.4-2.2-3.4-4.6-4.6C9.8 6.9 10.8 5.9 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 14.5c.7 1.4 1.3 2 2.7 2.7-1.4.7-2 1.3-2.7 2.7-.7-1.4-1.3-2-2.7-2.7 1.4-.7 2-1.3 2.7-2.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M17.2 15c.55 1.1 1 1.55 2.1 2.1-1.1.55-1.55 1-2.1 2.1-.55-1.1-1-1.55-2.1-2.1 1.1-.55 1.55-1 2.1-2.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDaily() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5.5h10.5A2.5 2.5 0 0 1 18 8v11.5H7.5A2.5 2.5 0 0 1 5 17V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5 5.5A2.5 2.5 0 0 1 7.5 3H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 10h6.5M8.5 13.5H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.2 17.5h8.1a3.7 3.7 0 0 0 .4-7.38 4.6 4.6 0 0 0-8.85 1.35A3.25 3.25 0 0 0 8.2 17.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.2h4M11 15.5h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4.5"
        y="7"
        width="15"
        height="11"
        rx="3.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="9.2" cy="12.5" r="1.35" fill="currentColor" />
      <circle cx="14.8" cy="12.5" r="1.35" fill="currentColor" />
      <path
        d="M9 4.8v2.2M15 4.8v2.2M12 3.5v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 16h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

type MarqueeItem = {
  label: string;
  tone: string;
  icon: ReactNode;
};

const ITEMS: MarqueeItem[] = [
  { label: 'Explore Cool Topics', tone: 'mint', icon: <IconExplore /> },
  { label: 'Voice-Assisted Learning', tone: 'sky', icon: <IconVoice /> },
  { label: 'Creative Activities', tone: 'rose', icon: <IconCreative /> },
  { label: 'Daily Learning', tone: 'amber', icon: <IconDaily /> },
  { label: 'Cloud & DevOps', tone: 'indigo', icon: <IconCloud /> },
  { label: 'AI & Machine Learning', tone: 'lime', icon: <IconAI /> },
];

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <div className="marquee-item" key={`${item.label}-${i}`}>
            <span className={`marquee-blob marquee-blob--${item.tone}`}>
              {item.icon}
            </span>
            <span className="marquee-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
