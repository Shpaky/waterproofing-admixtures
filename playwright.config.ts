import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  reporter: 'list',
  use: { baseURL: 'http://localhost:4321/waterproofing-admixtures/' },
  webServer: {
    command: 'node scripts/serve.mjs',
    url: 'http://localhost:4321/waterproofing-admixtures/',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 800 } } },
    { name: 'mobile', use: { viewport: { width: 360, height: 740 } } },
    // Optional cross-browser run: PW_FIREFOX=1 npm run test:a11y (needs `npx playwright install firefox`)
    ...(process.env.PW_FIREFOX
      ? [
          {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'], viewport: { width: 1280, height: 800 } },
          },
        ]
      : []),
  ],
});
