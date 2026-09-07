import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = ['./', 'ru/', 'hi/'];

for (const route of routes) {
  test(`no axe violations on ${route}`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });

  test(`keyboard reaches all links on ${route}`, async ({ page }) => {
    await page.goto(route);
    const count = await page.locator('a[href], button').count();
    const seen = new Set<string>();
    for (let i = 0; i < count + 2; i++) {
      await page.keyboard.press('Tab');
      const id = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        return el ? `${el.tagName}:${el.getAttribute('href') ?? el.textContent?.trim()}` : '';
      });
      if (id) seen.add(id);
    }
    expect(seen.size).toBeGreaterThanOrEqual(count);
  });
}
