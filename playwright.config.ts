import { defineConfig } from '@playwright/test';

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
  ],
});
