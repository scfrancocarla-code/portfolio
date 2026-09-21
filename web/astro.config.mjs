// @ts-check
import { defineConfig } from 'astro/config';

// `site` se usa para las URL absolutas de las metaetiquetas (canonical y vista previa
// al compartir el enlace). Si algún día se conecta un dominio propio, cambiar esta línea.
export default defineConfig({
  site: 'https://carlafranco.vercel.app',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
