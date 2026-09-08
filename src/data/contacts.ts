/**
 * Placeholder contacts. TODO(client): replace with real values before launch.
 * `phoneHref` must be E.164 (tel:+91XXXXXXXXXX); `whatsapp` uses the same digits without '+'.
 */
export const contacts = {
  company: 'Company name',
  legalName: 'Company legal name Pvt. Ltd.',
  phoneDisplay: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  whatsapp: 'https://wa.me/910000000000',
  telegram: 'https://t.me/username',
  email: 'info@example.com',
  address: {
    en: 'Office address, City, State, India',
    ru: 'Адрес офиса, город, штат, Индия',
    hi: 'कार्यालय का पता, शहर, राज्य, भारत',
  },
  hours: {
    en: 'Mon–Sat, 9:00–19:00 IST',
    ru: 'Пн–Сб, 9:00–19:00 IST',
    hi: 'सोम–शनि, 9:00–19:00 IST',
  },
  /** ISO 8601 opening hours for JSON-LD */
  openingHours: 'Mo-Sa 09:00-19:00',
} as const;
