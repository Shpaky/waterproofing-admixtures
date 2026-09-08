# План работ и статус

Обновлено: 2026-09-08 (этап 2 закрыт). Легенда: ✅ готово · 🔄 в работе · ⏳ не начато · ⛔ ждёт данных.

## Этап 0. Контекст и бриф — ✅
- ✅ Интервью: аудитория, конверсия, языки, продукты, стиль, аналитика.
- ✅ `docs/brief.md`, `CLAUDE.md` актуализирован, палитра Made in Russia снята с madeinrussia.com.
- ⛔ Открытые вопросы (см. бриф): название компании, контакты, сертификат Made in Russia,
  техданные D5 / D5 Aqua Stop, фото.

## Этап 1. Каркас проекта — ✅ (`73caa18`)
- ✅ Astro 7.3 + Tailwind 4, TS strict, `site`/`base` для GitHub Pages, sitemap на 3 локали.
- ✅ i18n: словари `src/i18n/{en,ru,hi}.ts`, `localePath()`, hreflang, переключатель языка.
- ✅ Base layout с SEO-head (canonical, OG, hreflang), 404, robots, favicon.
- ✅ Токены в `@theme`, prefers-reduced-motion, skip-link.
- ✅ Проверки: `lint:tokens`, `check:budget`, `test:a11y` (Playwright + axe), `lighthouse`, `shots`.
- ✅ CI на `devel`/PR, деплой на Pages из `master`.
- ✅ Метрики: Lighthouse 100/100/100/100 на трёх локалях, JS 0 КБ.

## Этап 2. Дизайн-система — ✅
- ✅ Самохостинг шрифтов: Manrope (latin, latin-ext, cyrillic) и Noto Sans Devanagari, unicode-range, preload по локали, swap.
- ✅ Типографическая шкала (display/h2/h3/lead/eyebrow, fluid), отступы секций, тени, радиусы в `@theme`.
- ✅ Примитивы в `src/components/ui`: `Container`, `Section`, `Button` (primary/secondary/ghost/inverse), `Card`, `Icon` (16 иконок на currentColor).
- ✅ `src/data/products.ts`: D5 и D5 Aqua Stop, локализованные поля, спеки помечены `verify: true` до получения TDS.
- ✅ Lighthouse 98–100 / 100 / 100 / 100, axe чисто, JS 0 КБ.

## Этап 3. Секции лендинга — ⏳ (одна секция = один коммит + скриншоты 360/768/1280)
| # | Секция | Статус | Примечание |
|---|--------|--------|------------|
| 1 | Header: логотип, навигация по якорям, переключатель языка, кнопка связи, мобильное меню | ⏳ | меню на `<details>` или ≤ 3 КБ JS |
| 2 | Hero: оффер, УТП, CTA «Позвонить» и «WhatsApp» | 🔄 | черновик на примитивах есть, нужна иллюстрация и доверие-блок |
| 3 | Проблема и решение: почему бетон течёт, как работает кристаллизация | ⏳ | иллюстрация инлайн-SVG на `currentColor` |
| 4 | Продукты: D5 и D5 Aqua Stop | 🔄 | карточки есть, добавить спеки и документы; техданные ⛔ |
| 5 | Преимущества и сравнение с обмазочной/рулонной гидроизоляцией | ⏳ | таблица с `<caption>` и `scope` |
| 6 | Области применения: фундаменты, подвалы, резервуары, ЖБИ, бассейны | ⏳ | |
| 7 | Для кого: подрядчики, частные застройщики, дилеры | ⏳ | три сценария, у дилеров свой CTA |
| 8 | Документы и сертификаты | ⛔ | заглушки до получения PDF |
| 9 | FAQ | ⏳ | `<details>/<summary>`, без JS, FAQPage JSON-LD |
| 10 | Контакты и футер: телефон, WhatsApp, Telegram, адрес, Made in Russia | ⛔ | нужны контакты и подтверждение права на знак |

## Этап 4. Контент и ассеты — ⏳
- ⏳ Тексты на трёх языках вычитаны, единая терминология (admixture / добавка / एडमिक्सचर).
- ⏳ Изображения через `astro:assets` (avif/webp), alt-тексты, OG-картинка 1200×630.
- ⏳ JSON-LD: Organization, Product ×2, FAQPage.
- ⛔ Замена плейсхолдеров на реальные фото и документы.

## Этап 5. Приёмка — ⏳
- ⏳ `npm run build && npm run lint && npm run test:a11y && npm run check:budget && npm run lighthouse` на финальной версии.
- ⏳ Ручная проверка клавиатурной навигации и prefers-reduced-motion.
- ⏳ Проверка на реальных телефонах (Android Chrome — основной для Индии).

## Этап 6. Деплой и передача — ⏳
- ⛔ Включить Pages в настройках репозитория (Source = GitHub Actions).
- ⏳ PR `devel` → `master`, первый деплой, проверка `base`, sitemap, hreflang в проде.
- ⏳ README: как править тексты, контакты, продукты; как запускать проверки.
- ⏳ Задел под аналитику: отложенный загрузчик счётчика (не подключён).

## Отклонения от исходных требований
- `eslint-plugin-jsx-a11y` не совместим с ESLint 10 и не установлен; a11y покрыта axe и `eslint-plugin-astro`.
- Проп с именем `as` ломает вывод типов Props в Astro 7 (`Astro.props` становится `any`); в примитивах используется `tag`.
- Astro 7 в агентном окружении уводит `astro preview` в фон, поэтому Playwright и Lighthouse
  используют `scripts/serve.mjs` (программный `preview()`).
