/**
 * Company data. Phone, WhatsApp, Telegram, e-mail and street address are still placeholders.
 * TODO(client): replace them before launch.
 * `phoneHref` must be E.164 (tel:+91XXXXXXXXXX); `whatsapp` uses the same digits without '+'.
 */
export const contacts = {
  company: 'RAI FAMILY CORP LLP',
  legalName: 'RAI FAMILY CORP LLP',
  phoneDisplay: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  whatsapp: 'https://wa.me/910000000000',
  telegram: 'https://t.me/username',
  email: 'info@example.com',
  address: {
    en: 'Russian national pavilion Made in Russia, Navi Mumbai, Maharashtra, India',
    ru: 'Российский национальный павильон Made in Russia, Нави-Мумбаи, Махараштра, Индия',
    hi: 'रूसी राष्ट्रीय पवेलियन Made in Russia, नवी मुंबई, महाराष्ट्र, भारत',
  },
  hours: {
    en: 'Mon–Sat, 9:00–19:00 IST',
    ru: 'Пн–Сб, 9:00–19:00 IST',
    hi: 'सोम–शनि, 9:00–19:00 IST',
  },
  /** ISO 8601 opening hours for JSON-LD */
  openingHours: 'Mo-Sa 09:00-19:00',
} as const;
