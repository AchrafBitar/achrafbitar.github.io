// Copies the Astro build in dist/ up to the repo root, which is what GitHub
// Pages serves for a <user>.github.io repository. Old hashed _astro assets are
// cleared first so they don't pile up commit after commit.
import { rm, cp, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

if (!existsSync(dist)) {
  console.error('No dist/ found. Run `npm run build` first.');
  process.exit(1);
}

await rm(join(root, '_astro'), { recursive: true, force: true });

for (const entry of await readdir(dist, { withFileTypes: true })) {
  await cp(join(dist, entry.name), join(root, entry.name), {
    recursive: true,
    force: true,
  });
}

console.log('Deployed dist/ to repo root. Commit and push to publish.');
