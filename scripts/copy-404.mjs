import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'dist', 'sundorf-me', 'browser');
copyFileSync(join(dir, 'index.csr.html'), join(dir, '404.html'));
console.log('Copied index.csr.html -> 404.html (custom 404 for Cloudflare Pages)');
