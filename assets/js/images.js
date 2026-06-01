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
    id: 'photo-1416339306562-f3d12fefd36f',
    w: 1600, h: 900,
    alt: 'Sewing machine and fabric in a tailor\'s workshop',
    credit: 'Karly Santiago on Unsplash',
  },

  /* ── About page — Lisa portrait placeholder ──────────────────────────── */
  'about-portrait': {
    id: 'photo-1594938298603-c8148c4b4c9c',
    w: 600, h: 750,
    alt: 'Seamstress carefully hand-stitching a garment',
    credit: 'Theme Photos on Unsplash',
  },
  'about-story': {
    id: 'photo-1441986300917-64674bd600d8',
    w: 800, h: 600,
    alt: 'Tailor measuring fabric on a worktable',
    credit: 'Annie Spratt on Unsplash',
  },

  /* ── Gallery — Bridal ────────────────────────────────────────────────── */
  'gallery-bridal-1': {
    id: 'photo-1519741497674-611481863552',
    w: 600, h: 600,
    alt: 'Wedding gown hem alteration',
    credit: 'Photos by Lanty on Unsplash',
  },
  'gallery-bridal-2': {
    id: 'photo-1596902852634-2cc9b2b8ee99',
    w: 600, h: 600,
    alt: 'Bridal bustle detail',
    credit: 'Asad Photo Maldives on Unsplash',
  },
  'gallery-bridal-3': {
    id: 'photo-1525258801814-0399f80b0b6a',
    w: 600, h: 600,
    alt: 'Bridesmaid fitting session',
    credit: 'Jennifer Pallian on Unsplash',
  },

  /* ── Gallery — Suits ─────────────────────────────────────────────────── */
  'gallery-suits-1': {
    id: 'photo-1507679799987-c73779587ccf',
    w: 600, h: 600,
    alt: 'Tailored jacket being adjusted',
    credit: 'Ruthson Zimmerman on Unsplash',
  },
  'gallery-suits-2': {
    id: 'photo-1617127365659-c47fa864d8bc',
    w: 600, h: 600,
    alt: 'Trouser hem being measured',
    credit: 'Terricks Noah on Unsplash',
  },
  'gallery-suits-3': {
    id: 'photo-1490481651871-ab68de25d43d',
    w: 600, h: 600,
    alt: 'Formal suit resize and fitting',
    credit: 'Jennifer Burk on Unsplash',
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
    alt: 'Summer dress hem adjustment',
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
    id: 'photo-1541961017774-22349e4a1262',
    w: 600, h: 600,
    alt: 'Fabric selection and custom garment measuring',
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
    id: 'photo-1545291730-faff8ca1d4b0',
    w: 600, h: 600,
    alt: 'Zipper replacement on a garment',
    credit: 'NordWood Themes on Unsplash',
  },
  'gallery-repairs-2': {
    id: 'photo-1509631179647-0177331693ae',
    w: 600, h: 600,
    alt: 'Seam restoration in progress',
    credit: 'Annie Spratt on Unsplash',
  },
  'gallery-repairs-3': {
    id: 'photo-1558618047-3c8c76ca7d13',
    w: 600, h: 600,
    alt: 'Vintage garment repair',
    credit: 'Waldemar Brandt on Unsplash',
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
