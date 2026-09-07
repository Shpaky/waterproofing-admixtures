// Fails on arbitrary Tailwind values and hex colors in markup/SVG.
// Tokens live only in src/styles/global.css.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SCAN = ['src', 'public'];
const ALLOW = new Set(['src/styles/global.css', 'public/favicon.svg']);
const EXT = /\.(astro|ts|tsx|js|mjs|css|svg|html)$/;
const RULES = [
  { name: 'arbitrary Tailwind value', re: /\b[a-z-]+-\[[^\]]+\]/g },
  { name: 'hex color', re: /#(?:[0-9a-fA-F]{3}){1,2}\b/g },
];

const problems = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (EXT.test(name)) check(p);
  }
}
function check(file) {
  const rel = relative(ROOT, file);
  if (ALLOW.has(rel)) return;
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (line.includes('tokens-ignore')) return;
    for (const { name, re } of RULES) {
      const m = line.match(re);
      if (m) problems.push(`${rel}:${i + 1}: ${name}: ${m.join(', ')}`);
    }
  });
}
for (const d of SCAN) walk(join(ROOT, d));
if (problems.length) {
  console.error(`lint:tokens found ${problems.length} problem(s):\n` + problems.join('\n'));
  process.exit(1);
}
console.log('lint:tokens: ok');
