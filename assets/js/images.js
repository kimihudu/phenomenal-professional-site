/**
 * images.js — Stock image loader for Phenomenal Tailoring & Alteration
 *
 * Usage: add data-stock-img="<key>" to any element.
 *   - <img> elements: src + alt injected directly
 *   - <div> / other elements: background-image CSS injected (bg cover)
 *
 * Source: Unsplash CDN (specific photo IDs — stable permanent URLs, no API key)
 * Fallback: local placeholder when image fails to load
 */

const BASE = 'https://images.unsplash.com/';
const PARAMS = '&auto=format&fit=crop&q=80';

/* ─── Image Manifest ───────────────────────────────────────────────────────
 * Format: key → { id, w, h, alt, credit }
 * id = Unsplash photo ID (the "photo-XXXX" part after /photo-)
 * w/h = requested dimensions (px)
 */
const MANIFEST = {

  /* ── Hero ─────────────────────────────────────────────────────────────── */
  'hero-bg': {
    id: 'photo-1620799140188-3b2a02fd9a77',
    w: 1600, h: 900,
    alt: 'Thread through a sewing machine needle in a tailor\'s workshop',
    credit: 'Unsplash',
  },

  /* ── Services page hero ──────────────────────────────────────────────── */
  'services-hero': {
    id: 'photo-1558618666-fcd25c85cd64',
    w: 1600, h: 700,
    alt: 'Tailor measuring fabric with a tape measure — professional alterations',
    credit: 'Unsplash',
  },

  'gallery-hero': {
    id: 'photo-1558769132-cb1aea458c5e',
    w: 1600, h: 700,
    alt: 'Tailor\'s workshop — thread, fabric and craftsmanship',
    credit: 'Unsplash',
  },

  'about-hero': {
    id: 'photo-1537832816519-689ad163238b',
    w: 1600, h: 700,
    alt: 'Sewing workshop with fabric and tools — tailoring studio',
    credit: 'Unsplash',
  },

  'contact-hero': {
    id: 'photo-1507679799987-c73779587ccf',
    w: 1600, h: 700,
    alt: 'Professional fitting consultation — tailored suit',
    credit: 'Unsplash',
  },

  /* ── About page — Lisa portrait placeholder ──────────────────────────── */
  'about-portrait': {
    id: 'photo-1467043153537-a4fba2cd39ef',
    w: 600, h: 750,
    alt: 'Tailor carefully working on a garment',
    credit: 'Unsplash',
  },
  'about-story': {
    id: 'photo-1441986300917-64674bd600d8',
    w: 800, h: 600,
    alt: 'Tailor measuring fabric on a worktable',
    credit: 'Annie Spratt on Unsplash',
  },

  /* ── Gallery — Bridal ────────────────────────────────────────────────── */
  'gallery-bridal-1': {
    id: 'photo-1583939003579-730e3918a45a',
    w: 600, h: 600,
    alt: 'Bridal gown fitting session',
    credit: 'Unsplash',
  },
  'gallery-bridal-2': {
    id: 'photo-1595777457583-95e059d581b8',
    w: 600, h: 600,
    alt: 'Wedding gown detail and fabric',
    credit: 'Unsplash',
  },
  'gallery-bridal-3': {
    id: 'photo-1550399105-c4db5fb85c18',
    w: 600, h: 600,
    alt: 'Bridal dress close-up detail',
    credit: 'Unsplash',
  },

  /* ── Gallery — Suits ─────────────────────────────────────────────────── */
  'gallery-suits-1': {
    id: 'photo-1535572290543-960a8046f5af',
    w: 600, h: 600,
    alt: 'Tailor fitting a suit jacket on a client',
    credit: 'Unsplash',
  },
  'gallery-suits-2': {
    id: 'photo-1617127365659-c47fa864d8bc',
    w: 600, h: 600,
    alt: 'Trouser hem being measured',
    credit: 'Terricks Noah on Unsplash',
  },
  'gallery-suits-3': {
    id: 'photo-1507679799987-c73779587ccf',
    w: 600, h: 600,
    alt: 'Tailored jacket adjustment',
    credit: 'Ruthson Zimmerman on Unsplash',
  },

  /* ── Gallery — Dresses ───────────────────────────────────────────────── */
  'gallery-dresses-1': {
    id: 'photo-1515886657613-9f3515b0c78f',
    w: 600, h: 600,
    alt: 'Evening gown alteration',
    credit: 'Roberto Nickson on Unsplash',
  },
  'gallery-dresses-2': {
    id: 'photo-1512436991641-6745cdb1723f',
    w: 600, h: 600,
    alt: 'Dress hem adjustment',
    credit: 'Dan Gold on Unsplash',
  },
  'gallery-dresses-3': {
    id: 'photo-1469334031218-e382a71b716b',
    w: 600, h: 600,
    alt: 'Cocktail dress alteration',
    credit: 'Hannah Morgan on Unsplash',
  },

  /* ── Gallery — Custom & Bespoke ─────────────────────────────────────── */
  'gallery-custom-1': {
    id: 'photo-1547949003-9792a18a2601',
    w: 600, h: 600,
    alt: 'Industrial sewing machine for custom garments',
    credit: 'Unsplash',
  },
  'gallery-custom-2': {
    id: 'photo-1434389677669-e08b4cac3105',
    w: 600, h: 600,
    alt: 'Bespoke tailoring — fabric and pattern layout',
    credit: 'Unsplash',
  },
  'gallery-custom-3': {
    id: 'photo-1503341338985-c0477be52513',
    w: 600, h: 600,
    alt: 'Tailor taking measurements for a custom-made garment',
    credit: 'Unsplash',
  },

  /* ── Gallery — Repairs ───────────────────────────────────────────────── */
  'gallery-repairs-1': {
    id: 'photo-1558769132-cb1aea458c5e',
    w: 600, h: 600,
    alt: 'Tailor work table with pins and fabric for repairs',
    credit: 'Unsplash',
  },
  'gallery-repairs-2': {
    id: 'photo-1524234107056-1c1f48f64ab8',
    w: 600, h: 600,
    alt: 'Needle and thread close-up — hand stitching repair',
    credit: 'Unsplash',
  },
  'gallery-repairs-3': {
    id: 'photo-1585386959984-a4155224a1ad',
    w: 600, h: 600,
    alt: 'Fabric swatches and textile details',
    credit: 'Unsplash',
  },
};

/* ─── Loader ────────────────────────────────────────────────────────────── */

function buildUrl(item) {
  return `${BASE}${item.id}?w=${item.w}&h=${item.h}${PARAMS}`;
}

function applyToImg(el, item) {
  el.src = buildUrl(item);
  el.alt = item.alt;
  el.title = `Photo credit: ${item.credit}`;
  el.loading = 'lazy';
  el.decoding = 'async';
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.5s ease';
  el.addEventListener('load', () => { el.style.opacity = '1'; }, { once: true });
  el.addEventListener('error', () => {
    el.src = 'assets/images/placeholder.jpg';
    el.style.opacity = '1';
  }, { once: true });
}

function applyToBg(el, item) {
  const url = buildUrl(item);
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url('${url}')`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = '0';
    // Small rAF so transition fires
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = '';
    }));
  };
  img.onerror = () => {
    el.style.backgroundImage = "url('assets/images/placeholder.jpg')";
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  };
  img.src = url;
  el.setAttribute('title', `Photo credit: ${item.credit}`);
}

function loadAll() {
  document.querySelectorAll('[data-stock-img]').forEach(el => {
    const key = el.dataset.stockImg;
    const item = MANIFEST[key];
    if (!item) {
      console.warn(`[images.js] No manifest entry for key: "${key}"`);
      return;
    }
    if (el.tagName === 'IMG') {
      applyToImg(el, item);
    } else {
      applyToBg(el, item);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadAll);
} else {
  loadAll();
}
