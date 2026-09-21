// @ts-check
import { defineConfig } from 'astro/config';

// `site` se usa para las URL absolutas de las metaetiquetas y el sitemap.
// Al publicar en Vercel con dominio propio, reemplazar por el dominio final.
export default defineConfig({
  site: 'https://carla-franco.vercel.app',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
