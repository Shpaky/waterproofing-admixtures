// Sums first-party JS referenced by each built HTML page; fails above LIMIT_KB.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const LIMIT_KB = 50;
const DIST = new URL('../dist/', import.meta.url).pathname;
const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) pages.push(p);
  }
})(DIST);

let failed = false;
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const srcs = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  const inline = [...html.matchAll(/<script(?![^>]*src=)([^>]*)>([\s\S]*?)<\/script>/g)]
    .filter((m) => !/application\/ld\+json/.test(m[1])) // structured data is not JS
    .map((m) => m[2]);
  let bytes = inline.reduce((n, s) => n + Buffer.byteLength(s), 0);
  for (const src of srcs) {
    if (/^https?:/.test(src)) continue; // third-party scripts are not budgeted
    const file = join(DIST, src.replace(/^\/waterproofing-admixtures\//, ''));
    try {
      bytes += statSync(file).size;
    } catch {
      console.warn(`  missing ${src}`);
    }
  }
  const kb = (bytes / 1024).toFixed(1);
  const ok = bytes / 1024 <= LIMIT_KB;
  if (!ok) failed = true;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${kb.padStart(6)} KB  ${relative(DIST, page)}`);
}
if (failed) {
  console.error(`check:budget: pages above ${LIMIT_KB} KB`);
  process.exit(1);
}
console.log(`check:budget: all pages within ${LIMIT_KB} KB`);
