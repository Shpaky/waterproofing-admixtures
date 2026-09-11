// Design review screenshots: hero, technical band, footer at 390 and 1440.
// Usage: node scripts/shots-design.mjs before|after
import { mkdirSync } from 'node:fs';
import { chromium } from '@playwright/test';
import { preview } from 'astro';

const tag = process.argv[2] ?? 'after';
const OUT = new URL('../docs/design/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });
const targets = [
  ['hero', '#hero'],
  ['tech', '#benefits'],
  ['footer', 'footer'],
];
const server = await preview({ root: new URL('..', import.meta.url).pathname, logLevel: 'error' });
const browser = await chromium.launch();
try {
  for (const width of [390, 1440]) {
    for (const [route, locale] of [
      ['', 'en'],
      ['hi/', 'hi'],
    ]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.goto(`http://localhost:${server.port}/waterproofing-admixtures/${route}`, {
        waitUntil: 'networkidle',
      });
      await page.addStyleTag({
        content:
          'header{position:static!important} .section-lazy{content-visibility:visible!important}',
      });
      for (const [name, sel] of targets) {
        const file = `${OUT}${tag}-${name}-${locale}-${width}.png`;
        const el = page.locator(sel).first();
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(150);
        await el.screenshot({ path: file });
        console.log(`shot ${file.split('/').pop()}`);
      }
      await page.close();
    }
  }
} finally {
  await browser.close();
  await server.stop();
}
