import type { Locale } from '@/i18n';
import type { Localized } from './products';

/**
 * Documents shown in the "Documents" section. Files live in public/docs.
 * `files` maps a locale to a path under public/ (base-aware); a locale without its own
 * file falls back to `en`. Leave `files` undefined until a document exists: the card then
 * offers "request via WhatsApp".
 */
export interface DocumentItem {
  id: string;
  title: Localized;
  kind: Localized;
  files?: Partial<Record<Locale, { href: string; size: string }>>;
}

export const documents: DocumentItem[] = [
  {
    id: 'd5-tds',
    title: { en: 'D5 technical datasheet', ru: 'Технический паспорт D5', hi: 'D5 तकनीकी डेटाशीट' },
    kind: { en: 'TDS · PDF, 16.01.2026', ru: 'TDS · PDF, 16.01.2026', hi: 'TDS · PDF, 16.01.2026' },
    files: {
      en: { href: 'docs/D5-TDS-en.pdf', size: '2.8 MB' },
      ru: { href: 'docs/D5-TDS-ru.pdf', size: '2.5 MB' },
    },
  },
  {
    id: 'd5-sds',
    title: { en: 'D5 safety data sheet', ru: 'Паспорт безопасности D5', hi: 'D5 सुरक्षा डेटाशीट' },
    kind: {
      en: 'SDS (REACH/CLP) · PDF, 28.04.2026',
      ru: 'SDS (REACH/CLP) · PDF, 28.04.2026',
      hi: 'SDS (REACH/CLP) · PDF, 28.04.2026',
    },
    files: {
      en: { href: 'docs/D5-SDS-en.pdf', size: '0.7 MB' },
      ru: { href: 'docs/D5-SDS-ru.pdf', size: '1.2 MB' },
    },
  },
  {
    id: 'aqua-stop-tds',
    title: {
      en: 'D5 Aqua Stop technical datasheet',
      ru: 'Технический паспорт D5 Aqua Stop',
      hi: 'D5 Aqua Stop तकनीकी डेटाशीट',
    },
    kind: { en: 'TDS · PDF', ru: 'TDS · PDF', hi: 'TDS · PDF' },
  },
  {
    id: 'aqua-stop-sds',
    title: {
      en: 'D5 Aqua Stop safety data sheet',
      ru: 'Паспорт безопасности D5 Aqua Stop',
      hi: 'D5 Aqua Stop सुरक्षा डेटाशीट',
    },
    kind: {
      en: 'SDS (GOST R 56378-2015, RSDS 37415339) · PDF, valid to 10.01.2027',
      ru: 'SDS (ГОСТ Р 56378-2015, РПБ 37415339) · PDF, действует до 10.01.2027',
      hi: 'SDS (GOST R 56378-2015, RSDS 37415339) · PDF, 10.01.2027 तक वैध',
    },
    files: {
      en: { href: 'docs/D5-AquaStop-SDS-en.pdf', size: '2.5 MB' },
      ru: { href: 'docs/D5-AquaStop-SDS-ru.pdf', size: '2.8 MB' },
    },
  },
  {
    id: 'conformity',
    title: {
      en: 'Certificates of conformity (Russia, New Zealand, ISO)',
      ru: 'Сертификаты соответствия (РФ, Новая Зеландия, ISO)',
      hi: 'अनुरूपता प्रमाणपत्र (रूस, न्यूज़ीलैंड, ISO)',
    },
    kind: { en: 'Certificates', ru: 'Сертификаты', hi: 'प्रमाणपत्र' },
  },
  {
    id: 'made-in-russia',
    title: {
      en: 'Made in Russia certificate',
      ru: 'Сертификат «Сделано в России»',
      hi: 'Made in Russia प्रमाणपत्र',
    },
    kind: { en: 'Certificate', ru: 'Сертификат', hi: 'प्रमाणपत्र' },
  },
];
