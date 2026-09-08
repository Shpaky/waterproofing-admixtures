import type { Localized } from './products';

/**
 * Documents shown in the "Documents" section.
 * `href` is a path under public/docs (base-aware, e.g. 'docs/d5-tds-en.pdf').
 * Leave `href` undefined until the file exists: the card then offers "request via WhatsApp".
 * TODO(client): drop PDFs into public/docs and fill in href/size.
 */
export interface DocumentItem {
  id: string;
  title: Localized;
  kind: Localized;
  href?: string;
  size?: string;
}

export const documents: DocumentItem[] = [
  {
    id: 'd5-tds',
    title: { en: 'D5 technical datasheet', ru: 'Технический лист D5', hi: 'D5 तकनीकी डेटाशीट' },
    kind: { en: 'TDS · PDF', ru: 'TDS · PDF', hi: 'TDS · PDF' },
  },
  {
    id: 'aqua-stop-tds',
    title: {
      en: 'D5 Aqua Stop technical datasheet',
      ru: 'Технический лист D5 Aqua Stop',
      hi: 'D5 Aqua Stop तकनीकी डेटाशीट',
    },
    kind: { en: 'TDS · PDF', ru: 'TDS · PDF', hi: 'TDS · PDF' },
  },
  {
    id: 'sds',
    title: { en: 'Safety data sheets', ru: 'Паспорта безопасности', hi: 'सुरक्षा डेटाशीट' },
    kind: { en: 'SDS · PDF', ru: 'SDS · PDF', hi: 'SDS · PDF' },
  },
  {
    id: 'test-report',
    title: {
      en: 'Water permeability test report',
      ru: 'Протокол испытаний на водонепроницаемость',
      hi: 'जल पारगम्यता परीक्षण रिपोर्ट',
    },
    kind: { en: 'Laboratory report', ru: 'Лабораторный протокол', hi: 'प्रयोगशाला रिपोर्ट' },
  },
  {
    id: 'conformity',
    title: {
      en: 'Certificate of conformity',
      ru: 'Сертификат соответствия',
      hi: 'अनुरूपता प्रमाणपत्र',
    },
    kind: { en: 'Certificate', ru: 'Сертификат', hi: 'प्रमाणपत्र' },
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
