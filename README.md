# D5 waterproofing admixtures — landing

Static landing for D5 concrete admixtures supplied to India under the Made in Russia brand.
Astro 7 + Tailwind 4, three locales (`/`, `/ru/`, `/hi/`), no backend: every contact link
leads to the operator's hub site (Rai Family Corp, `#contacts`) in the matching locale.

Live: https://shpaky.github.io/waterproofing-admixtures/

## Editing content

Nothing in the markup needs to change for routine updates.

| What | Where |
|---|---|
| Company name, hub site URL and contacts anchor | `src/data/contacts.ts` |
| Products, taglines, key data (`verify: true` shows an asterisk) | `src/data/products.ts` |
| Documents list; add `href: 'docs/<file>.pdf'` once the PDF is in `public/docs/` | `src/data/documents.ts` |
| All page copy per language | `src/i18n/en.ts`, `ru.ts`, `hi.ts` |
| Colours, fonts, spacing tokens | `src/styles/global.css` (`@theme`) |
| Open Graph images and icons | regenerate with `node scripts/og.mjs` |

`en.ts` defines the shape; `ru.ts` and `hi.ts` are type-checked against it, so a missing
key fails `npm run build`.

## Commands

```bash
npm install
npm run dev            # http://localhost:4321/waterproofing-admixtures/
npm run build          # astro check + static build to dist/
npm run lint           # eslint, prettier, design-token lint
npm run check:budget   # first-party JS per page <= 50 KB
npm run test:a11y      # Playwright + axe, desktop and mobile
npm run lighthouse     # Lighthouse CI: Perf/A11y/BP >= 95, SEO = 100
npm run shots          # screenshots at 360/768/1280 into shots/
npm run shots -- --section faq   # one section only
```

Playwright needs Chromium once: `npx playwright install chromium`. Lighthouse reuses it via
`CHROME_PATH=~/.cache/ms-playwright/chromium-*/chrome-linux*/chrome`.

## Deploy

`devel` is the working branch; CI runs build, lint, budget and a11y on every push.
Merging into `master` triggers the GitHub Pages workflow (`.github/workflows/deploy.yml`).
Repository setting required once: Settings → Pages → Source = GitHub Actions.

## Conventions

See `CLAUDE.md` for the hard limits (JS budget, tokens only, base-aware links, a11y) and
`docs/plan.md` for the work plan and status.
