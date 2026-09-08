// Generates Open Graph images (1200x630) per locale and PNG icons from favicon.svg.
// Run: node scripts/og.mjs  (sharp is a dev dependency). Output is committed to public/.
// Text is rendered with system fonts: install Manrope and Noto Sans Devanagari TTFs
// (or point FONTCONFIG_FILE at a fonts.conf that lists them) before regenerating.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = `${ROOT}public/og/`;
mkdirSync(OUT, { recursive: true });

// Brand tokens (mirrors src/styles/global.css). Hex is allowed here: this is a build script.
const c = { bg: '#0b1a44', bg2: '#203b80', brand: '#085cd6', light: '#bcd7f1', white: '#ffffff' };

const copy = {
  en: {
    eyebrow: 'MADE IN RUSSIA · SUPPLIED IN INDIA',
    title: ['Concrete that stays dry', 'for the life of the structure'],
    sub: 'D5 crystalline admixture · D5 Aqua Stop repair mix',
    font: 'Manrope',
  },
  ru: {
    eyebrow: 'СДЕЛАНО В РОССИИ · ПОСТАВКИ В ИНДИЮ',
    title: ['Бетон, который остаётся', 'сухим весь срок службы'],
    sub: 'Добавка D5 · Ремонтная смесь D5 Aqua Stop',
    font: 'Manrope',
  },
  hi: {
    eyebrow: 'रूस में निर्मित · भारत में आपूर्ति',
    title: ['ऐसा कंक्रीट जो पूरे जीवनकाल', 'तक सूखा रहे'],
    sub: 'D5 क्रिस्टलाइन एडमिक्सचर · D5 Aqua Stop रिपेयर मिक्स',
    font: 'Noto Sans Devanagari',
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function svg(locale) {
  const t = copy[locale];
  const titleSize = locale === 'hi' ? 52 : 56;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c.bg}"/><stop offset="1" stop-color="${c.bg2}"/>
    </linearGradient>
    <pattern id="agg" width="48" height="48" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="12" r="5" fill="${c.brand}" opacity="0.35"/>
      <circle cx="34" cy="30" r="7" fill="${c.brand}" opacity="0.35"/>
      <circle cx="22" cy="40" r="3" fill="${c.brand}" opacity="0.35"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <!-- right-side concrete cross-section -->
  <g transform="translate(880 120)">
    <rect x="0" y="0" width="240" height="130" rx="20" fill="${c.brand}" opacity="0.45"/>
    <path d="M0 95c30-14 60-14 90 0s60 14 90 0 30-8 60 0v21H0z" fill="${c.light}" opacity="0.7"/>
    <rect x="0" y="130" width="240" height="270" rx="20" fill="${c.bg2}"/>
    <rect x="0" y="130" width="240" height="270" rx="20" fill="url(#agg)"/>
    <line x1="0" y1="130" x2="240" y2="130" stroke="${c.light}" stroke-width="4"/>
    <path d="M120 130l-12 40 16 30-10 36 14 34-8 40" stroke="${c.light}" stroke-opacity="0.5" stroke-width="3" fill="none" stroke-linecap="round"/>
    <g fill="${c.light}">
      <path d="M108 174l8-10 8 10-8 10z"/><path d="M120 206l7-9 7 9-7 9z"/>
      <path d="M110 242l8-10 8 10-8 10z"/><path d="M122 278l7-9 7 9-7 9z"/><path d="M116 316l7-9 7 9-7 9z"/>
    </g>
    <g stroke="${c.light}" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M40 30v56M30 76l10 10 10-10"/><path d="M120 30v56M110 76l10 10 10-10"/><path d="M200 30v56M190 76l10 10 10-10"/>
    </g>
  </g>
  <!-- logo -->
  <rect x="80" y="80" width="56" height="56" rx="12" fill="${c.brand}"/>
  <path d="M108 92s14 15 14 25a14 14 0 0 1-28 0c0-10 14-25 14-25z" fill="${c.white}"/>
  <text x="152" y="105" font-family="Manrope, sans-serif" font-size="30" font-weight="800" fill="${c.white}">D5</text>
  <text x="152" y="128" font-family="${t.font}, sans-serif" font-size="16" letter-spacing="2" fill="${c.light}">${esc(t.eyebrow)}</text>
  <!-- title -->
  <text x="80" y="300" font-family="${t.font}, sans-serif" font-size="${titleSize}" font-weight="800" fill="${c.white}">
    <tspan x="80" dy="0">${esc(t.title[0])}</tspan>
    <tspan x="80" dy="${titleSize * 1.15}">${esc(t.title[1])}</tspan>
  </text>
  <text x="80" y="450" font-family="${t.font}, sans-serif" font-size="28" fill="${c.light}">${esc(t.sub)}</text>
  <rect x="80" y="500" width="220" height="60" rx="12" fill="${c.brand}"/>
  <text x="190" y="539" text-anchor="middle" font-family="Manrope, sans-serif" font-size="24" font-weight="700" fill="${c.white}">WhatsApp</text>
  <text x="80" y="600" font-family="Manrope, sans-serif" font-size="18" fill="${c.light}" opacity="0.8">shpaky.github.io/waterproofing-admixtures</text>
</svg>`;
}

for (const locale of Object.keys(copy)) {
  const png = await sharp(Buffer.from(svg(locale)))
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();
  writeFileSync(`${OUT}${locale}.png`, png);
  console.log(`og ${locale}.png ${(png.length / 1024).toFixed(0)} KB`);
}

const favicon = readFileSync(`${ROOT}public/favicon.svg`);
for (const [name, size] of [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]) {
  await sharp(favicon, { density: 300 }).resize(size, size).png().toFile(`${ROOT}public/${name}`);
  console.log(`icon ${name}`);
}
