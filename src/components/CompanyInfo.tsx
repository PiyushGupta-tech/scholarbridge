import { COMPANY, COMPANY_ADDRESS_FIELDS } from '../data/company';

type Props = {
  variant?: 'light' | 'dark';
  className?: string;
  showContact?: boolean;
};

export function CompanyInfo({
  variant = 'light',
  className = '',
  showContact = true,
}: Props) {
  return (
    <dl className={`company-info company-info--${variant} ${className}`.trim()}>
      <div className="company-info-row">
        <dt>Legal name</dt>
        <dd>{COMPANY.legalName}</dd>
      </div>
      <div className="company-info-row">
        <dt>Trade name</dt>
        <dd>{COMPANY.tradeName}</dd>
      </div>
      <div className="company-info-row">
        <dt>Constitution of business</dt>
        <dd>{COMPANY.constitution}</dd>
      </div>
      {showContact && (
        <>
          <div className="company-info-row company-info-row--half">
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </dd>
          </div>
          <div className="company-info-row company-info-row--half">
            <dt>Phone</dt>
            <dd>
              <a href={COMPANY.phone.href}>{COMPANY.phone.display}</a>
            </dd>
          </div>
        </>
      )}
      <div className="company-info-row company-info-row--wide">
        <dt>Principal place of business</dt>
        <dd>
          <CompanyAddress />
        </dd>
      </div>
    </dl>
  );
}

export function CompanyAddress({ className = '' }: { className?: string }) {
  return (
    <address className={`company-address ${className}`.trim()}>
      {COMPANY_ADDRESS_FIELDS.map((field) => (
        <span className="company-address-row" key={field.label}>
          <span className="company-address-label">{field.label}:</span>
          <span className="company-address-value">
            {field.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        </span>
      ))}
    </address>
  );
}
