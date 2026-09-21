# Portfolio de Carla Franco

**En línea: https://carlafranco.vercel.app**

Sitio bilingüe (inglés / español) que presenta el trabajo de Carla Franco como copywriter de respuesta directa.

- `/` — pantalla para elegir idioma
- `/en/` — portfolio en inglés
- `/es/` — portfolio en español

Hecho con [Astro](https://astro.build) (HTML estático, sin framework de interfaz). Se publica en Vercel.

## Cómo trabajar con el proyecto

Todo el sitio vive en la carpeta `web/`.

```bash
cd web
npm install      # la primera vez
npm run dev      # abre el sitio en http://localhost:4321 mientras editás
npm run build    # genera la versión final en web/dist
npm run preview  # mira la versión final antes de publicar
```

## Dónde se edita cada cosa

| Qué querés cambiar | Archivo |
|---|---|
| Copy de cualquier ejemplo, agregar o quitar proyectos | `web/src/data/content.js` |
| Textos de portada, "¿Por qué yo?" y contacto | `web/src/data/content.js` (objeto `UI`) |
| Tarjetas de formatos (nombre, sector, clientes) | `web/src/data/content.js` (objeto `CARDS`) |
| Colores, tipografías y espaciados | `web/src/styles/global.css` |
| Comportamiento (abrir formatos, pestañas, zoom) | `web/src/scripts/site.js` |
| Imágenes | `web/public/assets/` |

### Agregar un proyecto nuevo

1. Optimizá la imagen o captura y guardala en `web/public/assets/`.
2. En `content.js`, sumá el proyecto dentro del servicio que corresponda.
3. Si es un servicio nuevo, agregá su tarjeta en `CARDS` y su función en `RENDER`.
4. `npm run build` para comprobar que todo compila, y subí el cambio a GitHub: Vercel publica solo.

## Imágenes

Las que están en `web/public/assets/` ya están optimizadas (WebP, varios anchos). Los archivos originales
(fotos, capturas, Word y video) quedan fuera del repositorio por peso: están en la carpeta del proyecto,
en la computadora de Carla.

Para regenerarlas hace falta [ffmpeg](https://ffmpeg.org). Ejemplo:

```bash
ffmpeg -i "captura.png" -vf "scale='min(1500,iw)':-2:flags=lanczos" -c:v libwebp -quality 82 captura-1500.webp
```

## Publicar en Vercel

El proyecto de Vercel tiene que apuntar a la subcarpeta `web`:

- **Framework preset:** Astro
- **Root Directory:** `web`
- **Build command:** `npm run build`
- **Output directory:** `dist`

Cada vez que se sube un cambio a la rama principal, Vercel publica la nueva versión.

## Documentos de trabajo

- [CLAUDE.md](CLAUDE.md) — cómo está pensado el sitio y las reglas de contenido.
- [MEMORY.md](MEMORY.md) — historial de decisiones, fases y pendientes.
