import { readFileSync } from 'node:fs';
import { test, expect } from '@playwright/test';

const BASE = '/waterproofing-admixtures/';
const routes = ['./', 'ru/', 'hi/'];

test.describe('layout', () => {
  for (const width of [320, 360, 768, 1280]) {
    test(`no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      for (const route of routes) {
        await page.goto(route);
        await page.addStyleTag({ content: '.section-lazy{content-visibility:visible!important}' });
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow, `${route} overflows by ${overflow}px`).toBeLessThanOrEqual(0);
      }
    });
  }
});

test.describe('links', () => {
  for (const route of routes) {
    test(`anchors, base and rel on ${route}`, async ({ page }) => {
      await page.goto(route);
      const report = await page.evaluate((base) => {
        const problems: string[] = [];
        for (const a of Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))) {
          const href = a.getAttribute('href') ?? '';
          if (href.startsWith('#')) {
            if (href.length > 1 && !document.getElementById(href.slice(1)))
              problems.push(`dangling anchor ${href}`);
          } else if (href.startsWith('/')) {
            if (!href.startsWith(base)) problems.push(`link ignores base: ${href}`);
          } else if (/^https?:/.test(href)) {
            if (!(a.rel || '').includes('noopener')) problems.push(`no noopener: ${href}`);
          } else if (!/^(tel|mailto):/.test(href)) {
            problems.push(`unexpected href ${href}`);
          }
        }
        for (const el of Array.from(document.querySelectorAll<HTMLElement>('[src],[href]'))) {
          const v = el.getAttribute('src') ?? el.getAttribute('href') ?? '';
          if (v.startsWith('/') && !v.startsWith(base)) problems.push(`asset ignores base: ${v}`);
        }
        return problems;
      }, BASE);
      expect(report).toEqual([]);
    });
  }
});

test.describe('head', () => {
  for (const route of routes) {
    test(`hreflang, canonical and og on ${route}`, async ({ page }) => {
      await page.goto(route);
      const langs = await page
        .locator('link[rel="alternate"][hreflang]')
        .evaluateAll((els) => els.map((e) => e.getAttribute('hreflang')));
      expect(langs.sort()).toEqual(['en', 'hi', 'ru', 'x-default']);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toMatch(
        /^https:\/\/shpaky\.github\.io\/waterproofing-admixtures\/(ru\/|hi\/)?$/,
      );
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        'content',
        /\/og\/(en|ru|hi)\.png$/,
      );
      const lang = await page.locator('html').getAttribute('lang');
      expect(canonical).toContain(lang === 'en' ? 'admixtures/' : `/${lang}/`);
    });
  }
});

test('skip link moves focus to main content', async ({ page }) => {
  await page.goto('./');
  await page.keyboard.press('Tab');
  await expect(page.locator('a[href="#main"]')).toBeFocused();
  await page.keyboard.press('Enter');
  const inMain = await page.evaluate(() => {
    const a = document.activeElement;
    return a?.id === 'main' || Boolean(a?.closest('#main')) || location.hash === '#main';
  });
  expect(inMain).toBe(true);
});

test('reduced motion disables transitions and smooth scroll', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  const { transition, scroll } = await page.evaluate(() => {
    const btn = document.querySelector('main a[href^="https://wa.me"]') as HTMLElement;
    return {
      transition: getComputedStyle(btn).transitionDuration,
      scroll: getComputedStyle(document.documentElement).scrollBehavior,
    };
  });
  expect(parseFloat(transition)).toBeLessThanOrEqual(0.001);
  expect(scroll).toBe('auto');
});

test('sitemap lists the three locales with alternates', () => {
  const index = readFileSync('dist/sitemap-index.xml', 'utf8');
  expect(index).toContain('sitemap-0.xml');
  const map = readFileSync('dist/sitemap-0.xml', 'utf8');
  for (const path of [
    '/waterproofing-admixtures/',
    '/waterproofing-admixtures/ru/',
    '/waterproofing-admixtures/hi/',
  ]) {
    expect(map).toContain(`<loc>https://shpaky.github.io${path}</loc>`);
  }
  expect(map).toContain('hreflang="hi"');
  expect(map).not.toContain('404');
});

test('404 page is built and marked noindex', () => {
  const html = readFileSync('dist/404.html', 'utf8');
  expect(html).toContain('name="robots" content="noindex"');
  expect(html).toContain('href="/waterproofing-admixtures/"');
});
