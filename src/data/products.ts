import type { Locale } from '@/i18n';

/**
 * Product catalogue. Every text field is localized; numeric specs are shared.
 * D5 data comes from the manufacturer's Technical Data Sheet dated 2026-01-16 and the
 * Safety Data Sheet dated 2026-04-28 (public/docs). Specs marked `verify: true` are
 * still placeholders (D5 Aqua Stop, until its datasheet arrives).
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
  manufacturer?: { name: string; address: string };
}

export const products: Product[] = [
  {
    id: 'd5',
    name: 'D5',
    icon: 'crystal',
    manufacturer: {
      name: 'Scientific and Production Enterprise TOKAR Co. Ltd',
      address:
        '19A Pozharskogo str., Vladikavkaz, 362002, Republic of North Ossetia-Alania, Russia',
    },
    kind: {
      en: 'Complex multifunctional admixture for concrete',
      ru: 'Комплексная полифункциональная добавка к бетонам',
      hi: 'कंक्रीट के लिए कॉम्प्लेक्स बहुउद्देश्यीय एडमिक्सचर',
    },
    tagline: {
      en: 'One powder admixture: waterproof, high-strength, sulphate- and frost-resistant concrete.',
      ru: 'Одна порошковая добавка: водонепроницаемый, высокопрочный, сульфато- и морозостойкий бетон.',
      hi: 'एक पाउडर एडमिक्सचर: वॉटरप्रूफ, उच्च-शक्ति, सल्फेट- और फ्रॉस्ट-प्रतिरोधी कंक्रीट।',
    },
    description: {
      en: 'A finely milled beige powder made from natural mineral raw materials: active pozzolans, specially selected finely ground rocks and a superplasticizer. Dosed dry into the mixer, it gives the concrete the highest water resistance grade for the whole service life, so no extra waterproofing is needed in water-saturated soil or directly in water.',
      ru: 'Тонкомолотый порошок бежевого цвета на основе природного минерального сырья: активные пуццоланы, специально подобранные тонкомолотые горные породы и суперпластификатор. Вводится в смеситель в сухом виде и даёт бетону максимальную марку по водонепроницаемости на весь срок службы, поэтому дополнительная гидроизоляция в водонасыщенных грунтах и непосредственно в воде не нужна.',
      hi: 'प्राकृतिक खनिज कच्चे माल से बना बारीक पिसा हुआ बेज पाउडर: सक्रिय पोज़ोलान, विशेष रूप से चुनी गई बारीक पिसी चट्टानें और एक सुपरप्लास्टिसाइज़र। मिक्सर में सूखा डाला जाता है और कंक्रीट को पूरे सेवा जीवन के लिए उच्चतम जल-प्रतिरोध ग्रेड देता है, इसलिए जल-संतृप्त मिट्टी या सीधे पानी में अतिरिक्त वॉटरप्रूफिंग की ज़रूरत नहीं।',
    },
    bullets: [
      {
        en: 'Water resistance grade W20 and above, for the life of the structure',
        ru: 'Водонепроницаемость W20 и выше на весь срок службы',
        hi: 'जल-प्रतिरोध ग्रेड W20 और उससे ऊपर, संरचना के पूरे जीवन के लिए',
      },
      {
        en: '28-day strength up by ~30%, or 15–20% less cement',
        ru: 'Прочность в 28 суток выше в среднем на 30% или на 15–20% меньше цемента',
        hi: '28-दिन की मज़बूती ~30% अधिक, या 15–20% कम सीमेंट',
      },
      {
        en: 'Self-seals through cracks up to 0.5 mm',
        ru: 'Самозалечивание сквозных трещин шириной до 0,5 мм',
        hi: '0.5 मिमी तक की आर-पार दरारों को स्वयं सील करता है',
      },
      {
        en: 'Sulphate resistance with ordinary Portland cement, frost resistance F400+',
        ru: 'Сульфатостойкость на обычном портландцементе, морозостойкость F400 и выше',
        hi: 'साधारण पोर्टलैंड सीमेंट के साथ सल्फेट प्रतिरोध, फ्रॉस्ट प्रतिरोध F400+',
      },
      {
        en: 'Built-in superplasticizer: 15–25% less water, no separate plasticizer',
        ru: 'Встроенный суперпластификатор: на 15–25% меньше воды, отдельный пластификатор не нужен',
        hi: 'अंतर्निहित सुपरप्लास्टिसाइज़र: 15–25% कम पानी, अलग प्लास्टिसाइज़र नहीं चाहिए',
      },
      {
        en: 'Approved for structures in contact with drinking water',
        ru: 'Допущена для конструкций, контактирующих с питьевой водой',
        hi: 'पेयजल के संपर्क में आने वाली संरचनाओं के लिए अनुमोदित',
      },
    ],
    specs: [
      {
        label: { en: 'Dosage', ru: 'Дозировка', hi: 'मात्रा' },
        value: {
          en: '2–3% of cement weight',
          ru: '2–3% от массы цемента',
          hi: 'सीमेंट के वज़न का 2–3%',
        },
      },
      {
        label: { en: 'Form', ru: 'Форма выпуска', hi: 'रूप' },
        value: {
          en: 'Powder, bulk density 750–800 kg/m³',
          ru: 'Порошок, насыпная плотность 750–800 кг/м³',
          hi: 'पाउडर, बल्क घनत्व 750–800 किग्रा/मी³',
        },
      },
      {
        label: { en: 'Packaging', ru: 'Фасовка', hi: 'पैकेजिंग' },
        value: {
          en: '15 kg paper bags, 1000 kg big bags',
          ru: 'Бумажные мешки 15 кг, биг-бэги 1000 кг',
          hi: '15 किग्रा पेपर बैग, 1000 किग्रा बिग बैग',
        },
      },
      {
        label: { en: 'Shelf life', ru: 'Срок хранения', hi: 'शेल्फ लाइफ' },
        value: { en: '36 months', ru: '36 месяцев', hi: '36 महीने' },
      },
      {
        label: { en: 'Standards', ru: 'Стандарты', hi: 'मानक' },
        value: {
          en: 'BS EN 934-2, BS EN 480-1, BS EN 12390-8',
          ru: 'BS EN 934-2, BS EN 480-1, BS EN 12390-8; ТУ 5745-002-37415339-2015',
          hi: 'BS EN 934-2, BS EN 480-1, BS EN 12390-8',
        },
      },
      {
        label: { en: 'Chloride ion', ru: 'Хлор-ион', hi: 'क्लोराइड आयन' },
        value: { en: '0.065%', ru: '0,065%', hi: '0.065%' },
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
