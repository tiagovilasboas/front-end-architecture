// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://o-guia-do-arquiteto-front-end.vercel.app/',
  integrations: [
    mdx(),
    sitemap(),
    vercel({
      webAnalytics: {
        enabled: true,
      },
    }),
  ],
});