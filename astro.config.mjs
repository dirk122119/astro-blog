import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from 'remark-toc';
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkToc]
  },
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    }),
    react()
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  legacy:{
    collections: true
  }
});