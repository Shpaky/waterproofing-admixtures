# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Правила проекта

Контекст продукта, аудитория и структура лендинга: `docs/brief.md`.

## Стек
Astro 7 (Node >= 22.12), TypeScript strict, Tailwind 4 (`@tailwindcss/vite`).
Статическая сборка, клиентских фреймворков нет.
Никаких новых зависимостей без явного согласования. Утверждённый набор
dev-зависимостей — см. `package.json` (astro, sitemap, check, sharp,
tailwind, eslint/prettier с astro-плагинами, playwright + axe, lhci).

## Локализация
- Три локали: `en` (основная, без префикса), `ru` (`/ru/`), `hi` (`/hi/`).
- Встроенный i18n Astro (`i18n` в `astro.config`), hreflang в `<head>`,
  переключатель языка доступен с клавиатуры.
- Все тексты в `src/i18n/<locale>.ts`, в компонентах строк нет.
- Шрифты самохостятся (`public/fonts`), субсеты latin+cyrillic и devanagari,
  `font-display: swap`.

## Жёсткие ограничения
- Бюджет JS: <= 50 КБ собственного JS на страницу (`npm run check:budget`);
  сторонние счётчики в бюджет не входят и подключаются отложенно.
- Lighthouse: Perf/A11y/BP >= 95, SEO = 100 (`npm run lighthouse`)
- Только токены из `@theme` в `src/styles/global.css`. Произвольные значения
  (`text-[13px]`, `bg-[#a3a3a3]`, hex в разметке/SVG) запрещены — `npm run lint:tokens`.
  В инлайн-SVG использовать `currentColor` и классы.
- Ссылки и ассеты учитывают `base` (`import.meta.env.BASE_URL`). Сайт живёт
  на `https://shpaky.github.io/waterproofing-admixtures/`
  (`site: 'https://shpaky.github.io'`, `base: '/waterproofing-admixtures'`).
- На сайте нет собственных контактов: ни `tel:`, ни `mailto:`, ни мессенджеров. Все
  контактные ссылки ведут на хаб-сайт оператора `https://shpaky.github.io/rai-family-corp/`
  (раздел `#contacts`) через `contactsUrl(locale)` из `src/data/contacts.ts`, с сохранением
  локали (`/ru/`, `/hi/`). Форм и бэкенда нет.
- Семантический HTML. Каждая интерактивная сущность доступна с клавиатуры.
  Компилятор Astro 7 строгий: все не-void теги закрываются.
- Все анимации отключаются при prefers-reduced-motion
- Изображения только через `<Image />`/`<Picture />` из astro:assets, avif/webp

## Процесс
- Одна секция лендинга = один коммит (`feat(<section>): ...`), push после коммита.
- Перед коммитом: `npm run build && npm run lint && npm run test:a11y`
- После каждой секции сделать скриншоты на 360/768/1280 (`npm run shots`) и показать.
