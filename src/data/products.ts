import type { Locale } from '@/i18n';

/**
 * Product catalogue. Every text field is localized; numeric specs are shared.
 * D5 data comes from the manufacturer's Technical Data Sheet dated 2026-01-16 and the
 * Safety Data Sheet dated 2026-04-28 (public/docs). D5 Aqua Stop data comes from the
 * registered Safety Data Sheet (RSDS 37415339, valid to 2027-01-10: name, composition, packaging,
 * shelf life, GOST R 56378-2015) and from the manufacturer's DRAFT technical datasheet
 * (2026-09-11) for application data, which still awaits plant test reports, hence `verify: true`.
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
    manufacturer: {
      name: 'Scientific and Production Enterprise TOKAR Co. Ltd',
      address:
        '19A Pozharskogo str., Vladikavkaz, 362002, Republic of North Ossetia-Alania, Russia',
    },
    kind: {
      en: 'Universal waterproofing dry mix for repair and protection of concrete',
      ru: 'Универсальная гидроизоляционная сухая смесь для ремонта и защиты бетона',
      hi: 'कंक्रीट की मरम्मत और सुरक्षा के लिए यूनिवर्सल वॉटरप्रूफिंग ड्राई मिक्स',
    },
    tagline: {
      en: 'Waterproofs existing concrete and masonry from either side of the water. Coat 2–5 mm, brush or spray.',
      ru: 'Гидроизолирует существующий бетон и кладку с любой стороны воды. Слой 2–5 мм, кистью или торкретом.',
      hi: 'मौजूदा कंक्रीट और चिनाई को पानी की किसी भी ओर से वॉटरप्रूफ करता है। 2–5 मिमी परत, ब्रश या स्प्रे से।',
    },
    description: {
      en: 'A one-component dry mix of high-strength cement, fine quartz sand, the D5 admixture, polypropylene fibre and modifying admixtures that raise adhesion and compensate shrinkage. Made to GOST R 56378-2015 for repair and protection of concrete, reinforced concrete and masonry. Mixed with water on site and worked into a pre-wetted substrate in two or more coats; the coating holds positive and negative water pressure.',
      ru: 'Однокомпонентная сухая смесь высокопрочного цемента, мелкого кварцевого песка, добавки D5, полипропиленовой фибры и модифицирующих добавок, повышающих адгезию и компенсирующих усадку. Выпускается по ГОСТ Р 56378-2015 для ремонта и защиты бетонных, железобетонных и каменных конструкций. Затворяется водой на объекте и втирается в увлажнённое основание в два и более слоя; покрытие держит прямое и обратное давление воды.',
      hi: 'उच्च-शक्ति सीमेंट, बारीक क्वार्ट्ज़ रेत, D5 एडमिक्सचर, पॉलीप्रोपिलीन फ़ाइबर और आसंजन बढ़ाने व सिकुड़न की भरपाई करने वाले संशोधक एडमिक्सचर का एक-घटक सूखा मिश्रण। कंक्रीट, RCC और चिनाई की मरम्मत और सुरक्षा के लिए GOST R 56378-2015 के अनुसार निर्मित। साइट पर पानी में मिलाकर पहले से गीली सतह पर दो या अधिक कोट में रगड़ा जाता है; कोटिंग सकारात्मक और नकारात्मक जल दबाव झेलती है।',
    },
    bullets: [
      {
        en: 'Positive pressure W12, negative pressure W8',
        ru: 'Прямое давление W12, обратное W8',
        hi: 'सकारात्मक दबाव W12, नकारात्मक दबाव W8',
      },
      {
        en: 'Basements from the inside, tanks, pools, wet rooms, old waterproofing repair',
        ru: 'Подвалы изнутри, резервуары, бассейны, санузлы, ремонт старой гидроизоляции',
        hi: 'अंदर से बेसमेंट, टैंक, पूल, गीले कमरे, पुरानी वॉटरप्रूफिंग की मरम्मत',
      },
      {
        en: 'Adhesion to concrete at least 1 MPa, frost resistance F100',
        ru: 'Адгезия к бетону не менее 1 МПа, морозостойкость F100',
        hi: 'कंक्रीट से आसंजन कम से कम 1 MPa, फ्रॉस्ट प्रतिरोध F100',
      },
      {
        en: 'About 60 minutes pot life, next coat after 4–5 hours',
        ru: 'Около 60 минут жизнеспособности, следующий слой через 4–5 часов',
        hi: 'लगभग 60 मिनट पॉट लाइफ, अगला कोट 4–5 घंटे बाद',
      },
    ],
    specs: [
      {
        label: { en: 'Water tightness', ru: 'Водонепроницаемость', hi: 'जल-रोधकता' },
        value: {
          en: 'W12 positive, W8 negative',
          ru: 'W12 прямое, W8 обратное',
          hi: 'W12 सकारात्मक, W8 नकारात्मक',
        },
        verify: true,
      },
      {
        label: { en: 'Coating thickness', ru: 'Толщина покрытия', hi: 'कोटिंग की मोटाई' },
        value: {
          en: '2–5 mm in 2 or more coats',
          ru: '2–5 мм за 2 и более слоя',
          hi: '2 या अधिक कोट में 2–5 मिमी',
        },
        verify: true,
      },
      {
        label: { en: 'Consumption', ru: 'Расход', hi: 'खपत' },
        value: {
          en: 'approx. 1.5 kg/m² per 1 mm',
          ru: 'около 1,5 кг/м² на 1 мм',
          hi: 'लगभग 1.5 किग्रा/मी² प्रति 1 मिमी',
        },
        verify: true,
      },
      {
        label: {
          en: 'Application temperature',
          ru: 'Температура применения',
          hi: 'लगाने का तापमान',
        },
        value: { en: '+5 to +30 °C', ru: 'от +5 до +30 °C', hi: '+5 से +30 °C' },
        verify: true,
      },
      {
        label: { en: 'Packaging', ru: 'Фасовка', hi: 'पैकेजिंग' },
        value: {
          en: '25–30 kg paper bags, 1000 kg big bags',
          ru: 'Бумажные мешки 25–30 кг, биг-бэги 1000 кг',
          hi: '25–30 किग्रा पेपर बैग, 1000 किग्रा बिग बैग',
        },
      },
      {
        label: { en: 'Shelf life', ru: 'Срок хранения', hi: 'शेल्फ लाइफ' },
        value: {
          en: '6 months, dry, above +10 °C',
          ru: '6 месяцев, в сухом месте при температуре от +10 °C',
          hi: '6 महीने, सूखी जगह, +10 °C से ऊपर',
        },
      },
      {
        label: { en: 'Standard', ru: 'Стандарт', hi: 'मानक' },
        value: { en: 'GOST R 56378-2015', ru: 'ГОСТ Р 56378-2015', hi: 'GOST R 56378-2015' },
      },
    ],
  },
];
