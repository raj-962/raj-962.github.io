// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The address of your site. Change it only if you move to a custom domain.
export default defineConfig({
  site: 'https://raj-962.github.io',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
