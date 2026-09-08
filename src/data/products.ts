import type { Locale } from '@/i18n';

/**
 * Product catalogue. Every text field is localized; numeric specs are shared.
 * TODO(client): replace placeholder specs marked `verify: true` with real TDS data.
 */
export type Localized = Record<Locale, string>;

export interface Spec {
  label: Localized;
  value: Localized;
  verify?: boolean;
}

export interface Product {
  id: 'd5' | 'd5-aqua-stop';
  name: string;
  kind: Localized;
  tagline: Localized;
  description: Localized;
  bullets: Localized[];
  specs: Spec[];
  icon: 'crystal' | 'drop';
}

export const products: Product[] = [
  {
    id: 'd5',
    name: 'D5',
    icon: 'crystal',
    kind: {
      en: 'Crystalline waterproofing admixture',
      ru: 'Кристаллизующая гидроизоляционная добавка',
      hi: 'क्रिस्टलाइन वॉटरप्रूफिंग एडमिक्सचर',
    },
    tagline: {
      en: 'Added to the mix. Waterproofs the whole concrete body, not just the surface.',
      ru: 'Вводится в бетонную смесь. Гидроизолирует весь массив бетона, а не только поверхность.',
      hi: 'मिक्स में मिलाया जाता है। सिर्फ सतह नहीं, पूरे कंक्रीट को वॉटरप्रूफ बनाता है।',
    },
    description: {
      en: 'Active components react with cement hydration products and form insoluble crystals inside pores and micro-cracks. The concrete becomes its own waterproofing layer for the life of the structure.',
      ru: 'Активные компоненты реагируют с продуктами гидратации цемента и образуют нерастворимые кристаллы в порах и микротрещинах. Бетон сам становится гидроизоляционным слоем на весь срок службы.',
      hi: 'सक्रिय घटक सीमेंट हाइड्रेशन उत्पादों के साथ प्रतिक्रिया करके छिद्रों और सूक्ष्म दरारों में अघुलनशील क्रिस्टल बनाते हैं। कंक्रीट संरचना के पूरे जीवनकाल के लिए स्वयं वॉटरप्रूफिंग परत बन जाता है।',
    },
    bullets: [
      {
        en: 'Self-healing of hairline cracks',
        ru: 'Самозалечивание волосяных трещин',
        hi: 'बारीक दरारों का स्व-उपचार',
      },
      {
        en: 'Resists positive and negative water pressure',
        ru: 'Работает при прямом и обратном давлении воды',
        hi: 'सकारात्मक और नकारात्मक जल दबाव का प्रतिरोध',
      },
      {
        en: 'No membranes, no extra work stages',
        ru: 'Без мембран и дополнительных этапов работ',
        hi: 'न मेम्ब्रेन, न अतिरिक्त कार्य चरण',
      },
    ],
    specs: [
      {
        label: { en: 'Dosage', ru: 'Дозировка', hi: 'मात्रा' },
        value: { en: '1% of cement weight', ru: '1% от массы цемента', hi: 'सीमेंट के वज़न का 1%' },
        verify: true,
      },
      {
        label: { en: 'Packaging', ru: 'Фасовка', hi: 'पैकेजिंग' },
        value: { en: '25 kg bag', ru: 'Мешок 25 кг', hi: '25 किग्रा बैग' },
        verify: true,
      },
      {
        label: { en: 'Shelf life', ru: 'Срок хранения', hi: 'शेल्फ लाइफ' },
        value: { en: '12 months', ru: '12 месяцев', hi: '12 महीने' },
        verify: true,
      },
    ],
  },
  {
    id: 'd5-aqua-stop',
    name: 'D5 Aqua Stop',
    icon: 'drop',
    kind: {
      en: 'Fast-setting water-stop repair mix',
      ru: 'Быстротвердеющая смесь для остановки протечек',
      hi: 'तेज़ी से जमने वाला वॉटर-स्टॉप रिपेयर मिक्स',
    },
    tagline: {
      en: 'Stops active leaks in minutes. For joints, cracks and cold seams.',
      ru: 'Останавливает активные протечки за минуты. Для стыков, трещин и холодных швов.',
      hi: 'सक्रिय रिसाव को मिनटों में रोकता है। जोड़ों, दरारों और कोल्ड सीम के लिए।',
    },
    description: {
      en: 'A dry mix that sets under running water. Mix with water, press into the leak, hold. Used together with D5 for a complete waterproofing system.',
      ru: 'Сухая смесь, схватывающаяся под напором воды. Затворить водой, вдавить в место протечки, удержать. Вместе с D5 образует полную систему гидроизоляции.',
      hi: 'सूखा मिश्रण जो बहते पानी में भी जम जाता है। पानी में मिलाएँ, रिसाव में दबाएँ, पकड़े रहें। D5 के साथ मिलकर संपूर्ण वॉटरप्रूफिंग प्रणाली बनाता है।',
    },
    bullets: [
      { en: 'Sets in 3–5 minutes', ru: 'Схватывание за 3–5 минут', hi: '3–5 मिनट में जम जाता है' },
      {
        en: 'Works on wet and leaking surfaces',
        ru: 'Работает на мокрых и текущих поверхностях',
        hi: 'गीली और रिसती सतहों पर काम करता है',
      },
      {
        en: 'Chloride-free, safe for reinforcement',
        ru: 'Без хлоридов, безопасна для арматуры',
        hi: 'क्लोराइड-मुक्त, सरिया के लिए सुरक्षित',
      },
    ],
    specs: [
      {
        label: { en: 'Setting time', ru: 'Время схватывания', hi: 'जमने का समय' },
        value: { en: '3–5 min', ru: '3–5 мин', hi: '3–5 मिनट' },
        verify: true,
      },
      {
        label: { en: 'Packaging', ru: 'Фасовка', hi: 'पैकेजिंग' },
        value: { en: '5 kg pail', ru: 'Ведро 5 кг', hi: '5 किग्रा बाल्टी' },
        verify: true,
      },
      {
        label: { en: 'Shelf life', ru: 'Срок хранения', hi: 'शेल्फ लाइफ' },
        value: { en: '6 months', ru: '6 месяцев', hi: '6 महीने' },
        verify: true,
      },
    ],
  },
];
