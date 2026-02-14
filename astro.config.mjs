// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://isidoko.github.io',
  base: '/bible-gacha-site/',
  integrations: [tailwind()],
});