import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = ['./', 'ru/', 'hi/'];
const FOCUSABLE = 'a[href], button, summary, [tabindex="0"]';

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
    const count = await page
      .locator(
        `${FOCUSABLE.split(', ')
          .map((s) => `${s}:visible`)
          .join(', ')}`,
      )
      .count();
    const seen = new Set<number>();
    for (let i = 0; i < count + 2; i++) {
      await page.keyboard.press('Tab');
      const index = await page.evaluate(() =>
        Array.from(document.querySelectorAll('a[href], button, summary, [tabindex="0"]'))
          .filter((el) => el.getClientRects().length > 0)
          .indexOf(document.activeElement as Element),
      );
      if (index >= 0) seen.add(index);
    }
    expect(seen.size).toBe(count);
  });
}

test('mobile menu opens and closes from the keyboard', async ({ page, isMobile, viewport }) => {
  test.skip(!!viewport && viewport.width >= 1024, 'desktop shows inline nav');
  void isMobile;
  await page.goto('./');
  const toggle = page.locator('[data-menu-toggle]');
  const panel = page.locator('#mobile-menu');
  await expect(panel).toBeHidden();
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(panel).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(panel).toBeHidden();
  await expect(toggle).toBeFocused();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
