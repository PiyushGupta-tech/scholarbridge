export const COMPANY = {
  legalName: 'SCHOLARBRIDGE PRIVATE LIMITED',
  tradeName: 'SCHOLARBRIDGE PRIVATE LIMITED',
  constitution: 'Private Limited Company',
  email: 'scholarbridge416@gmail.com',
  phone: {
    display: '+91 96436 12811',
    href: 'tel:+919643612811',
  },
  address: {
    building: 'OFFICE-NO-421, TOWER- T- 3',
    street: 'TECHZONE 4, GREATER NOIDA WEST, I.A. SURAJPUR',
    city: 'Noida',
    district: 'Gautambuddha Nagar',
    state: 'Uttar Pradesh',
    pin: '201306',
  },
} as const;

export const COMPANY_ADDRESS_FIELDS = [
  {
    label: 'Building No./Flat No.',
    lines: [COMPANY.address.building, COMPANY.address.street],
  },
  { label: 'City/Town/Village', lines: [COMPANY.address.city] },
  { label: 'District', lines: [COMPANY.address.district] },
  { label: 'State', lines: [COMPANY.address.state] },
  { label: 'PIN Code', lines: [COMPANY.address.pin] },
];
