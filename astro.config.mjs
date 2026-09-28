import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// The repo root is what GitHub Pages serves, so the build goes to dist/
// and `npm run deploy` copies it up to the root. See scripts/deploy.mjs.
export default defineConfig({
  site: 'https://achrafbitar.github.io',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
