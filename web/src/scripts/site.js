/* Comportamiento del portfolio: elegir formato, animaciones, pestañas y zoom de imágenes.
   Todo el contenido ya viene en el HTML; este archivo solo muestra, oculta y anima. */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
const L = {
  en: { see: 'See example', viewing: 'Viewing', more: 'Read full script', less: 'Show less' },
  es: { see: 'Ver ejemplo', viewing: 'Viendo', more: 'Leer guion completo', less: 'Ver menos' },
}[lang];

const reduced = matchMedia('(prefers-reduced-motion: reduce)');

/* ───── Animaciones de entrada ─────
   Lo que ya está a la vista al cargar se queda quieto: solo se anima lo que aparece al bajar. */
const io =
  'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.remove('pre');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      )
    : null;

function reveal(root, force) {
  const els = $$('.rv, .draw, mark.hl', root);
  if (!io || reduced.matches) {
    els.forEach((el) => el.classList.remove('pre'));
    return;
  }
  const bottom = window.innerHeight;
  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (!force && r.top < bottom - 20 && r.bottom > 0) return;
    el.classList.add('pre');
    io.observe(el);
  });
}

/* ───── Barra superior ───── */
const nav = $('#nav');
const onScroll = () => nav && nav.classList.toggle('stuck', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ───── Elegir formato ───── */
const viewer = $('#viewer');
const vbody = $('#vbody');
let current = null;

function setLabels(key) {
  $$('.card').forEach((c) => {
    const on = c.dataset.svc === key;
    c.classList.toggle('active', on);
    c.setAttribute('aria-expanded', String(on));
    const lt = $('.lt', c);
    if (lt) lt.textContent = on ? L.viewing : L.see;
  });
  $$('#pills .pill').forEach((p) => {
    const on = p.dataset.svc === key;
    p.setAttribute('aria-selected', String(on));
    if (on) p.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduced.matches ? 'auto' : 'smooth' });
  });
}

function show(key, scroll = true) {
  const target = $(`.svc[data-svc="${key}"]`, vbody);
  if (!target) return;
  const first = viewer.hidden;
  viewer.hidden = false;
  setLabels(key);

  const paint = () => {
    $$('.svc', vbody).forEach((s) => (s.hidden = s !== target));
    vbody.classList.remove('out');
    reveal(target, true);
  };

  if (first || current === null || reduced.matches) paint();
  else {
    vbody.classList.add('out');
    setTimeout(paint, 280);
  }

  current = key;
  history.replaceState(null, '', '#' + key);
  if (scroll) viewer.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'start' });
}

/* ───── Interacciones dentro de un ejemplo ───── */
document.addEventListener('click', (ev) => {
  const t = ev.target.closest('[data-svc],[data-more],[data-stage-tab],[data-email],[data-zoom]');
  if (!t) return;

  if (t.hasAttribute('data-svc')) {
    ev.preventDefault();
    show(t.dataset.svc);
    return;
  }

  // "Leer guion completo" en los anuncios
  if (t.hasAttribute('data-more')) {
    const ad = t.closest('.ad');
    const open = ad.classList.toggle('open');
    t.innerHTML = open
      ? `${L.less} <span class="ar" aria-hidden="true">↑</span>`
      : `${L.more} <span class="ar" aria-hidden="true">↓</span>`;
    return;
  }

  // Etapas de conciencia (en pantallas angostas)
  if (t.hasAttribute('data-stage-tab')) {
    const root = t.closest('.svc');
    const i = t.dataset.stageTab;
    $$('[data-stage-tab]', root).forEach((x) => x.setAttribute('aria-selected', String(x === t)));
    $$('[data-stage]', root).forEach((el) => {
      const on = el.dataset.stage === i;
      el.classList.toggle('show', on);
      if (on && !reduced.matches) {
        el.classList.add('pre');
        requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('pre')));
      }
    });
    return;
  }

  // Pestañas de emails: cambia el email y su libreta
  if (t.hasAttribute('data-email')) {
    const root = t.closest('.svc');
    const i = t.dataset.email;
    $$('[data-email]', root).forEach((x) => x.setAttribute('aria-selected', String(x === t)));
    $$('[data-mail]', root).forEach((m) => (m.hidden = m.dataset.mail !== i));
    $$('[data-nb]', root).forEach((n) => (n.hidden = n.dataset.nb !== t.dataset.proj));
    return;
  }

  // Ampliar una captura
  if (t.hasAttribute('data-zoom')) {
    const d = $('#lb');
    const img = $('#lbImg');
    img.src = t.currentSrc || t.src;
    img.alt = t.alt;
    if (d.showModal) d.showModal();
  }
});

const lb = $('#lb');
if (lb) {
  $('#lbClose').addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => {
    if (e.target === lb) lb.close();
  });
}

/* ───── Arranque ───── */
reveal(document);
const fromHash = location.hash.replace('#', '');
if (fromHash && $(`.svc[data-svc="${fromHash}"]`)) {
  show(fromHash, false);
  requestAnimationFrame(() => viewer.scrollIntoView({ block: 'start' }));
}
