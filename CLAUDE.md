# Portfolio de Carla Franco — Copywriter de respuesta directa

Sitio web portfolio bilingüe (inglés / español) para presentar el trabajo de copywriting de Carla Franco.
Leer también [MEMORY.md](MEMORY.md): historial de decisiones, estado actual y próximos pasos.

## Objetivo

- Página dinámica e interactiva: el visitante navega y descubre los trabajos; no debe parecer un PDF.
- Animaciones sutiles entre secciones y dentro de cada sección (respetar `prefers-reduced-motion`).
- Muy rápida: todo asset optimizado al máximo sin perder calidad.
- 100 % responsive (PC y mobile con el mismo cuidado).
- Fácil de mantener: agregar/quitar proyectos editando contenido, sin tocar componentes.

## Estructura del sitio

1. **`/` — Selección de idioma**
   - Referencia: `Ejemplo alternativa inicial.png`.
   - "Carla Franco" en **Newsreader 300** (misma serif de los botones, peso fino), como en la referencia; dos flechas curvas finas; botones oscuros **English** / **Spanish** con tipografía **serif**.
   - Fondo liso lino con halo cálido, contenido centrado. **Sin video** (decisión de Carla, 2026-09-18; `Video car señalando.mp4` queda sin uso).
   - Cada botón abre `/en` o `/es` en la **misma pestaña**.
2. **`/en` y `/es` — Landings** (diseño idéntico; solo cambian copy y ejemplos)
   - Barra superior con botón para volver a elegir idioma.
   - **Portada**: referencia `Ejemplo de Portada.png`. Copy de `Copy Ingles para la portada.docx` / `Copy Español para la portada.docx`. Donde el ejemplo tiene la laptop va `Foto perfil car copy.jpg`. El nombre y el rol van **solo** en la barra fija; el bloque de la IA va debajo del copy del funnel, con su frase clave destacada en serif itálica.
   - **Elegí un formato**: tarjetas de servicio con botón "See example" / "Ver ejemplo".
   - **Visor de servicio**: se abre el servicio elegido; al elegir otro, el anterior se oculta con transición y aparece el nuevo.
   - **¿Por qué yo? / Why me?**: foto `Foto car 2.jpg` + texto.
   - **Contacto** (bloque oscuro): email scfrancocarla@gmail.com · LinkedIn linkedin.com/in/carla-franco/

### Servicios EN (orden) — copy en `Portfolio ingles OK.docx`
Paid Social Ads (Patchy) · Email Marketing (AREA Beach, Ruiloba) · Landing Page (Thesis Clarity) · Homepage (Thesis) · VSL Script (Tawkify) · Selected Real Client Results

### Servicios ES (orden) — copy en `Portfolio Español OK.docx`
Anuncios en redes · Email Marketing Evergreen · Emails Lanzamiento · Landing Page (OGA) · Guión de VSL (One Trade) · Webinars · Dossieres comerciales · Métricas / Resultados

## Formato visual de cada servicio (replicar las referencias con nuestra paleta)

| Servicio | Referencia | Claves |
|---|---|---|
| Ads | `Ejemplo de Paid Social Ad Campaign.png` | Columnas por etapa de conciencia con color suave; tarjetas FORMAT / ANGLE / guion |
| Email | `Ejemplo de Email.png` | Email maquetado a la izquierda; "libreta" manuscrita a la derecha (Proyecto / Audiencia / Approach) |
| Landing / Homepage | `Ejemplo de Landing.png` | Índice de secciones a la izquierda, copy al centro con subrayados, notas manuscritas + flechas a la derecha |
| VSL | `Ejemplo de VSL.png` | Guion en hoja central, resaltado amarillo, notas manuscritas con flechas curvas a ambos lados |
| Landing OGA (ES) | — | Captura larga (`Copy Landing Page OGA.png`) en marco de navegador con scroll |
| Webinars / Dossieres (ES) | — | Capturas + flecha + copy indicado en los comentarios del Word |
| Resultados | — | Benchmarks de industria + tarjetas por cliente con la métrica y la captura real |

- Las líneas "Strategy note:" (EN) y los "Comentario:" / "Poner esta imagen…" (ES) son **directrices**, no copy: se muestran como notas/flechas o se ejecutan.

## Reglas de contenido (decididas con la usuaria)

- **No inventar logos** ni **generar imágenes** que no se pidan (nada de laptops, mockups fotográficos, etc.).
- Erratas en inglés: **corregirlas todas** (ej.: "Carla franco", "Remainder", "Sequencies", "Hope to hearing", "Patch is a fictional brand").
- Placeholders del Word (`[____]%`, `XX%`, `-imagen del dossier-`, `-imagen de render-`): **dejarlos tal cual**, como texto.
- Lista de clientes del Word de portada ES: dejarla como está.
- Capturas de métricas de GoHighLevel: **mantener la barra del navegador con URLs** (prueba de captura real).

## Sistema visual (aprobado)

Paleta y tipografías completas en MEMORY.md. Resumen: fondo lino `#F7F3EE`, tinta `#1E1C1B`, rosa antiguo `#C27C77` (solo títulos grandes), rosa profundo `#9E5550` (texto/botones), marcador `#F7E48B`, notas `#4A3F8C`.
Fuentes: Newsreader (títulos, botones de idioma y nombre en la pantalla de idioma, en peso 300) · Hanken Grotesk (texto) · Kalam (notas manuscritas).
El mockup aprobado es la referencia visual de implementación: https://claude.ai/artifact/9YcbbajfqEexuFEK3PdJSW

## Stack técnico (propuesto)

- **Astro** (sitio estático, cero JS por defecto) — rutas `/`, `/en`, `/es`.
- Contenido separado de los componentes (`src/content/en`, `src/content/es`) para agregar proyectos fácilmente.
- CSS con tokens (variables) propios; animaciones con **GSAP + ScrollTrigger** (o CSS nativo donde alcance).
- Imágenes: `astro:assets` / sharp → AVIF/WebP, `srcset`, lazy loading.
- Video: ffmpeg → WebM (VP9) + MP4 (H.264), 720p, sin audio, + poster.
- Versionado en **GitHub**; deploy en **Vercel**.

## Convenciones de trabajo

- Idioma de trabajo con la usuaria: español rioplatense.
- **Confirmar antes de avanzar de fase** (entendimiento → paleta/tipografía → plan → mockup → código → deploy).
- Registrar decisiones y avances en `MEMORY.md`.
- Los archivos originales de la carpeta raíz son la fuente; los assets optimizados van al proyecto web, nunca se sobrescriben los originales.
