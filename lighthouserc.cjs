module.exports = {
  ci: {
    collect: {
      startServerCommand: 'node scripts/serve.mjs',
      startServerReadyPattern: 'serving dist',
      url: [
        'http://localhost:4321/waterproofing-admixtures/',
        'http://localhost:4321/waterproofing-admixtures/ru/',
        'http://localhost:4321/waterproofing-admixtures/hi/',
      ],
      numberOfRuns: 1,
      settings: { chromeFlags: '--no-sandbox --headless=new' },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1 }],
      },
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci/out' },
  },
};
