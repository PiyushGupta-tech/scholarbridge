/** Official-style brand SVG logos for Instagram, Facebook, WhatsApp */

import { useId } from 'react';

const LINKS = {
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  whatsapp: 'https://wa.me/919876543210',
} as const;

function InstagramIcon() {
  // Unique IDs so multiple icons on the page don't break the gradient
  const uid = useId().replace(/:/g, '');
  const g1 = `ig-a-${uid}`;
  const g2 = `ig-b-${uid}`;

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
      <defs>
        {/* Official Instagram app-icon gradient */}
        <radialGradient id={g1} cx="0.3" cy="1.1" r="1.2">
          <stop offset="0" stopColor="#fdf497" />
          <stop offset="0.1" stopColor="#fdf497" />
          <stop offset="0.5" stopColor="#fd5949" />
          <stop offset="1" stopColor="#d6249f" />
        </radialGradient>
        <linearGradient id={g2} x1="0.2" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#515bd4" stopOpacity="0" />
          <stop offset="0.1" stopColor="#515bd4" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#8134af" />
          <stop offset="1" stopColor="#dd2a7b" />
        </linearGradient>
      </defs>
      {/* Rounded square body */}
      <rect x="1" y="1" width="22" height="22" rx="6.2" fill={`url(#${g1})`} />
      <rect x="1" y="1" width="22" height="22" rx="6.2" fill={`url(#${g2})`} />
      {/* Camera ring */}
      <rect
        x="5.4"
        y="5.4"
        width="13.2"
        height="13.2"
        rx="4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.85"
      />
      {/* Lens */}
      <circle
        cx="12"
        cy="12"
        r="3.35"
        fill="none"
        stroke="#fff"
        strokeWidth="1.85"
      />
      {/* Flash dot */}
      <circle cx="16.55" cy="7.55" r="1.2" fill="#fff" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        fill="#fff"
        d="M13.5 19.5v-6.2h2.1l.3-2.4h-2.4V9.4c0-.7.2-1.2 1.2-1.2h1.3V6.1c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.8H8.6v2.4h2.3v6.2h2.6z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        fill="#fff"
        d="M12.04 6.2a5.6 5.6 0 0 0-5.58 5.6c0 .98.26 1.94.75 2.78L6.2 17.8l3.32-.97a5.56 5.56 0 0 0 2.52.6h.01a5.6 5.6 0 0 0 5.58-5.6 5.6 5.6 0 0 0-5.59-5.63zm3.28 8.02c-.14.39-.8.74-1.12.79-.29.04-.65.06-1.05-.07-.24-.07-.55-.18-.95-.35-1.67-.72-2.76-2.4-2.84-2.51-.08-.12-.67-.89-.67-1.7 0-.8.42-1.2.57-1.36.14-.16.32-.2.42-.2h.3c.1 0 .23-.04.36.27.14.33.47 1.15.51 1.23.04.08.07.18.01.29-.06.12-.1.19-.19.29-.1.1-.2.22-.28.3-.1.08-.2.17-.09.33.12.16.51.84 1.1 1.36.76.67 1.4.88 1.6.98.2.1.31.08.43-.05.12-.12.5-.58.63-.78.14-.2.27-.16.45-.1.19.07 1.18.56 1.38.66.2.1.33.15.38.23.05.08.05.47-.09.86z"
      />
    </svg>
  );
}

const ITEMS = [
  {
    key: 'instagram',
    label: 'Instagram',
    href: LINKS.instagram,
    Icon: InstagramIcon,
    className: 'social-ig',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    href: LINKS.facebook,
    Icon: FacebookIcon,
    className: 'social-fb',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: LINKS.whatsapp,
    Icon: WhatsAppIcon,
    className: 'social-wa',
  },
] as const;

export function SocialLinks({
  variant = 'default',
  label,
}: {
  variant?: 'default' | 'light' | 'compact';
  label?: string;
}) {
  return (
    <div className={`social-links social-links--${variant}`}>
      {label && <p className="social-label">{label}</p>}
      <div className="social-row">
        {ITEMS.map(({ key, label: name, href, Icon, className }) => (
          <a
            key={key}
            href={href}
            className={`social-btn ${className}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
          >
            <Icon />
            {variant !== 'compact' && (
              <span className="social-name">{name}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
