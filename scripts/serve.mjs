// Foreground preview server for Playwright/Lighthouse (astro preview daemonizes in agent shells).
import { preview } from 'astro';

const port = Number(process.env.PORT ?? 4321);
const server = await preview({
  root: new URL('..', import.meta.url).pathname,
  server: { port },
  logLevel: 'error',
});
console.log(`serving dist on http://localhost:${server.port}`);
const stop = () => server.stop().then(() => process.exit(0));
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
