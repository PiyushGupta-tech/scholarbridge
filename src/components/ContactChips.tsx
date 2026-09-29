import { COMPANY } from '../data/company';

type Props = {
  variant?: 'light' | 'dark';
  className?: string;
  tabIndex?: number;
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M6.6 3.5h2.7l1.4 4.1-2 1.4a12 12 0 0 0 6.3 6.3l1.4-2 4.1 1.4v2.7a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactChips({ variant = 'dark', className = '', tabIndex }: Props) {
  return (
    <div className={`contact-chips contact-chips--${variant} ${className}`.trim()}>
      <a className="contact-chip" href={`mailto:${COMPANY.email}`} tabIndex={tabIndex}>
        <span className="contact-chip-icon">
          <MailIcon />
        </span>
        <span className="contact-chip-text">
          <small>Email us</small>
          <strong>{COMPANY.email}</strong>
        </span>
      </a>
      <a className="contact-chip" href={COMPANY.phone.href} tabIndex={tabIndex}>
        <span className="contact-chip-icon">
          <PhoneIcon />
        </span>
        <span className="contact-chip-text">
          <small>Call us</small>
          <strong>{COMPANY.phone.display}</strong>
        </span>
      </a>
    </div>
  );
}
