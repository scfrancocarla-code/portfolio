# MEMORY — Portfolio Carla Franco

Registro vivo del proyecto: decisiones, avances y pendientes. Lo más reciente arriba en cada sección.

## Estado actual

**Fase:** 4 de 9 — Mockup v5 aprobado (2026-09-21). Empieza el desarrollo del sitio real en `web/`, tomando el mockup v5 como referencia exacta.

- Sistema visual + plan: https://claude.ai/artifact/UX84ipB5RKFa78NKomhrFp
- Mockup v1 (navegable, escritorio/celular): https://claude.ai/artifact/9YcbbajfqEexuFEK3PdJSW

## Fases (plan aprobado 2026-09-16)

1. ✅ Entendimiento del proyecto
2. ✅ Sistema visual (colores y tipografía)
3. ✅ Mockup navegable (v5 aprobado el 2026-09-21)
4. ⏳ Base del proyecto web (Astro, rutas, tokens, contenido por idioma, git init)
5. ⬜ Optimización de assets (versión final)
6. ⬜ Desarrollo por secciones
7. ⬜ Control de calidad (Playwright, Lighthouse, metadatos)
8. ⬜ GitHub
9. ⬜ Publicación en Vercel

## Sistema visual aprobado (2026-09-16)

| Token | Hex | Uso |
|---|---|---|
| Lino | #F7F3EE | fondo |
| Arena | #EFE7DF | bandas alternas, "¿Por qué yo?" |
| Papel | #FFFDFA | tarjetas |
| Tinta | #1E1C1B | texto, botones oscuros, contacto |
| Grafito | #5E5854 | texto secundario |
| Línea | #E2D9D0 | bordes |
| Rosa antiguo | #C27C77 | acento en títulos grandes / íconos (no para texto chico: 3,0:1) |
| Rosa profundo | #9E5550 | botones rosa, links, etiquetas (4,9:1) |
| Rosa claro | #F0DCD7 | formas detrás de fotos |
| Marcador | #F7E48B | resaltado (VSL) |
| Tinta violeta | #4A3F8C | notas manuscritas y flechas |
| Azul enlace | #1F5FBF | solo CTAs dentro de emails |
| Tintes etapas Ads | #ECE8F4 · #F8E6DC · #E4EDE3 · #E3EAF3 | columnas de etapas |

Tipografías: **Newsreader** (títulos y botones de idioma) · **Hanken Grotesk** (texto) · **Kalam** (notas) · **Allura** (nombre en la pantalla de idioma, opción A).

## Mockup v1 — decisiones de diseño (2026-09-16)

- Pantalla de idioma: en el video Carla señala hacia abajo a izquierda y derecha → cara despejada arriba; nombre + flechas + botones en la mitad inferior; velo claro que se intensifica hacia abajo.
- Landing: barra fija con "← Language/Idioma", portada con H1 = propuesta de valor (palabras clave en itálica rosa), foto en arco, tarjeta "Do I use AI?/¿Uso la IA?" sobre la foto.
- Tarjetas de formato con miniaturas dibujadas en CSS (no son imágenes). Al elegir un servicio se abre el visor debajo, con pestañas fijas para saltar entre formatos; el cambio es un fundido.
- Resultados: se agrega "▲ N× vs. benchmark" calculado con los promedios del Word (dato derivado, confirmar si gusta).
- En el mockup, los servicios ES Anuncios, Email evergreen, Email lanzamientos y VSL muestran una nota "mismo diseño que su par EN"; el copy real se carga en desarrollo.
- Descripción del proyecto OGA terminaba cortada ("…en pozo. tanto para generar"): en el mockup se muestra hasta "en pozo." — confirmar con Carla.

## Cambios pedidos por Carla sobre el mockup v1 (2026-09-18) → v2

- Pantalla de idioma: **sin video**. Fondo lino con un halo cálido, contenido centrado como en "Ejemplo alternativa inicial". El nombre va en **Kalam** (la misma letra de las notas), ya no en Allura.
- Portada: se elimina el nombre y el rol repetidos arriba del H1; quedan solo en la barra fija (en celular la barra ahora muestra también el rol).
- Bloque de la IA: pasa a la columna de texto, **debajo** del copy del funnel y arriba del CTA, a 0,97 rem (0,93 en celular), con filete rosa a la izquierda.
- Frase destacada de la IA en serif itálica y color tinta: en español "Porque aburrir a quien quiero transformar en tu cliente no es una buena estrategia."; en inglés no existe esa frase, así que se destacó "the final copy you get is always written by me" (confirmar).
- Fotos más chicas: portada en celular 215 px; "¿Por qué yo?" 290 px en escritorio y 230 px en celular, con el texto a 0,95 rem.
- Inglés, sección de contacto: "We need something like this" → **"We need this copywriter on the team"**.
- OGA: descripción completada → "…con departamentos para invertir en pozo, tanto para generar rentabilidad anual como plusvalía."
- Corregido: en español la grilla de tarjetas forzaba 4 columnas por JS y desbordaba en celular.
- El indicador "× vs. benchmark" en Resultados queda aprobado.
- Los assets de video (hero.webm/mp4/poster) se quitaron del artifact; los originales siguen en la carpeta.

## Cambios pedidos por Carla sobre el mockup v2 (2026-09-18) → v3

- Pantalla de idioma: el nombre pasa a **Newsreader 300** (la misma serif de los botones, en peso fino), como en "Ejemplo alternativa inicial". Se quitó Allura del proyecto; la animación es un fundido suave hacia arriba.
- Copy IA en español: se elimina "para que no suene como otros cien textos más que hay en internet."
- Copy IA en inglés: se agrega, después de "written by me.", la frase **"Because boring your next customer is a pretty bad strategy."**, que ahora es la frase destacada en serif itálica (equivalente a la española).

## Mockup v4 (2026-09-18) — sección de trabajo destacada

- La sección "Elige un formato / Pick a format" pasa a ser una **banda completa en rosa antiguo `#C27C77`** (el color del acento), en ambos idiomas y en escritorio y celular.
- Texto de la sección en **tinta `#1E1C1B`** sobre el rosa (5,1:1). El blanco sobre ese rosa da 3,3:1 y no alcanza para texto chico; solo la palabra destacada en itálica va en crema, porque es tipografía grande.
- Tarjetas en crema `#FFFDFA` con sombra en vez de borde marcado; círculo del ícono en tinta con anillo crema; tarjeta activa con borde tinta.
- La flecha circular del final de la portada pasa de rosa a tinta, porque sobre la banda rosa se perdía.

## Mockup v5 (2026-09-21) — visor con color propio y ficha compacta

- El visor de ejemplos tiene fondo propio **lila claro `#F0EFF6`** con línea `#DFDCEA`, derivado del violeta de las notas. Secuencia de bandas: portada clara → formatos en rosa → ejemplos en lila → "¿Por qué yo?" en beige → contacto oscuro.
- Bordes y fondos internos del visor pasaron a la línea lila; el marco de las capturas de métricas usa `#ECEAF4` en lugar de arena.
- Ficha del proyecto rediseñada y achicada: Project/Industry/Work/Brand como **chips** (0,79 rem) y Overview/Challenge/Audience/Approach/Research como **cuadrantes** con separadores de 1 px (título 0,57 rem, texto 0,785 rem en gris). Se adapta solo: 4 columnas en escritorio, 2 en tablet, 1 en celular.
- Objetivo: que la explicación no compita con el ejemplo de copy.

## Assets optimizados (mockup)

Generados con ffmpeg 9.0.1 en la carpeta temporal del mockup (se regeneran en la fase 5):
- Video: 5,2 MB (HEVC 1080p) → hero.webm 108 KB (VP9 720p) + hero.mp4 196 KB (H.264) + poster 14 KB.
- Fotos: portada 1000 px (35 KB), por qué yo 900 px (146 KB).
- Capturas → WebP 1600 px (30–75 KB c/u). Landing OGA 9 MB → 1000×7592 WebP (510 KB).
- Total ≈ 1,6 MB (originales ≈ 30 MB).

## Correcciones de erratas aplicadas al inglés

"Carla franco" → "Carla Franco" · "#Remainder Email" → "#Reminder Email" · "Sequencies" → "Sequences" · "Emails Campaigns" → "Email Campaigns" · "Hope to hearing" → "Hope to hear" · "Patch is a fictional brand" → "Patchy…" · "helps you to support what your mind needs most" (repetido) → "helps you support it" · nota de garantía "without feeling less risky" → "by making the decision feel less risky" · espacios faltantes ("done.But", "OWNER:It's") · "Cancun" → "Cancún".

## Decisiones tomadas

### 2026-09-16
- Paleta aprobada; manuscrita **A (Allura)**; serif **1 (Newsreader)**; plan de 9 fases aprobado.
- Pantalla de idioma: nombre "Carla Franco" en **manuscrita**; botones con tipografía **serif**; video de fondo en loop.
- Portada: `Foto perfil car copy.jpg` reemplaza la laptop del ejemplo.
- "¿Por qué yo?": `Foto car 2.jpg`.
- Webinars **sí** se incluye como servicio en español.
- Placeholders (`[____]%`, `XX%`, `-imagen del dossier-`, `-imagen de render-`) se dejan como texto.
- Lista de clientes del Word de portada ES se deja como está (aunque Ruiloba no tenga ad y Foresta/Globalitae no figuren).
- Corregir **todas** las erratas del inglés.
- Capturas GoHighLevel: se mantiene la barra del navegador con URLs.
- No inventar logos ni generar imágenes no solicitadas.

### 2026-09-15
- Entorno: se instalaron Node.js 24.19.0, Git 2.55.0.3, ffmpeg 9.0.1 (2026-09-16), skills `ui-ux-pro-max` (+ design, brand, banner-design, design-system, slides, ui-styling), `web-artifacts-builder` y MCP de Playwright (con Chromium).

## Inventario de assets (originales)

| Archivo | Uso | Notas |
|---|---|---|
| Video car señalando.mp4 | Fondo pantalla idioma | 4 s, 5,2 MB → comprimir |
| Foto perfil car copy.jpg | Portada | 4624×3468, 3,6 MB |
| Foto car 2.jpg | ¿Por qué yo? | 1836×3264, 1,6 MB |
| Copy Landing Page OGA.png | Landing OGA (ES) | 1796×13636, 9 MB → partir y optimizar |
| Superlativo / Ruiloba / Grupo OGA conv lp | Resultados landing | capturas GHL con barra de navegador |
| Revalio ×2 / Quarto / Area promotora metricas | Resultados email | capturas GHL |
| Vierci / Ibiza / Superlativo anclaje | Webinars (ES) | + flecha y copy |
| Pagina Dossier - Unreal / Paginas dossier One Trade | Dossieres (ES) | + flechas y copy (One Trade: 2 flechas) |
| Ejemplo *.png | Solo referencia de diseño | no se publican |

## Datos de contacto
- Email: scfrancocarla@gmail.com
- LinkedIn: https://www.linkedin.com/in/carla-franco/

## Estructura del repositorio (fase 4)

```
Portfolio ingles Carla/        ← repositorio git (raíz)
├─ CLAUDE.md, MEMORY.md        ← versionados
├─ .gitignore                  ← excluye los originales pesados y node_modules
├─ web/                        ← sitio Astro (lo que se publica en Vercel)
│  ├─ src/pages/index.astro (idioma), en/index.astro, es/index.astro
│  ├─ src/components/…         ← Nav, Hero, Formats, Viewer y un componente por tipo de servicio
│  ├─ src/data/en.js · es.js   ← TODO el copy, separado por idioma (acá se agregan proyectos nuevos)
│  ├─ src/styles/global.css    ← tokens de color y tipografía
│  └─ public/assets/…          ← imágenes optimizadas (varios anchos)
└─ (docx, png, jpg, mp4 originales: quedan fuera del repo)
```

## Pendientes / preguntas abiertas
- Revisión del mockup v1 por parte de Carla.
- Confirmar: indicador "× vs. benchmark" en resultados; texto cortado de la descripción de OGA.
