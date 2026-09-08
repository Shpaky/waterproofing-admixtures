// Screenshots of every locale at 360/768/1280 from the preview server.
// Usage: npm run shots            -> full pages
//        npm run shots -- --section benefits  -> only the element with that id
import { mkdirSync } from 'node:fs';
import { chromium } from '@playwright/test';
import { preview } from 'astro';

const widths = [360, 768, 1280];
const routes = { en: '/', ru: '/ru/', hi: '/hi/' };
const OUT = new URL('../shots/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });
const sectionArg = process.argv.indexOf('--section');
const section = sectionArg > -1 ? process.argv[sectionArg + 1] : null;

const server = await preview({ root: new URL('..', import.meta.url).pathname, logLevel: 'error' });
const origin = `http://localhost:${server.port}`;
const browser = await chromium.launch();
try {
  for (const [locale, route] of Object.entries(routes)) {
    for (const width of widths) {
      const page = await browser.newPage({ viewport: { width, height: 800 } });
      await page.goto(`${origin}/waterproofing-admixtures${route}`, { waitUntil: 'networkidle' });
      const file = `${OUT}${locale}-${width}${section ? `-${section}` : ''}.png`;
      if (section) {
        await page.addStyleTag({ content: 'header { position: static !important; }' });
        await page.locator(`#${section}`).screenshot({ path: file });
      } else {
        await page.screenshot({ path: file, fullPage: true });
      }
      console.log(`shot ${file}`);
      await page.close();
    }
  }
} finally {
  await browser.close();
  await server.stop();
}
