# Task Tracker — Phenomenal Tailoring Sprint

> Atomic task list. Reference `SPRINT_PLAN.md` for full acceptance criteria.

## Status Legend
- `[ ]` — todo
- `[~]` — in progress
- `[x]` — done
- `[!]` — blocked

---

## Wave 0 — Foundation

- [x] **T0.1** Scaffold `<head>` on all 5 pages (Tailwind CDN, viewport, fonts, tailwind.config)
- [x] **T0.2** Add Open Graph + canonical meta tags to all pages
- [x] **T0.3** Create `/assets/` directory structure (images/gallery/, images/team/, images/og/) with .gitkeep placeholders

## Wave 1 — Nav & Footer

- [x] **T1.1** Build sticky nav with logo, links, gold CTA, mobile hamburger
- [x] **T1.2** Build 3-column footer with links, contact info, copyright
- [x] **T1.3** Nav hamburger JS (classList toggle, aria-expanded update, close-on-link-click)

## Wave 2 — Home Page

- [x] **T2.1** Hero section (full-viewport, H1, sub-copy, dual CTAs, fade-in animation)
- [x] **T2.2** "Why Choose Us" 4-feature grid
- [x] **T2.3** Services preview (4 cards → services.html)
- [x] **T2.4** Testimonials (3 cards)
- [x] **T2.5** Final CTA banner (bold headline + gold button)

## Wave 3 — Services Page

- [x] **T3.1** Page hero + breadcrumb
- [x] **T3.2** 4 service category cards + "How It Works" 3-step process

## Wave 4 — Gallery Page

- [x] **T4.1** Gallery hero + filter pills (All / Bridal / Suits / Dresses / Repairs)
- [x] **T4.2** Responsive grid (12+ tiles, hover overlay, placeholder fills)
- [x] **T4.3** Gallery filter JS (data-category attr + show/hide logic, ~15 lines vanilla)

## Wave 5 — About Page

- [x] **T5.1** Brand story (2-col layout, pull quote in Playfair italic)
- [x] **T5.2** Values (3 cards) + team placeholders + stat badges

## Wave 6 — Contact Page

- [x] **T6.1** 2-col layout + business info card (phone, email, hours)
- [x] **T6.2** Styled contact form (5 fields, dark inputs, gold submit)
- [x] **T6.3** Register Formspree account + wire real `action` URL into form

## Wave 7 — Polish & Responsive

- [x] **T7.1** Scroll-triggered fade-in animations (IntersectionObserver)
- [x] **T7.2** Full responsive audit at 375px / 768px / 1280px
- [x] **T7.3** Annotate all scroll-animated elements with `data-animate="fadeInUp"` attribute pass across all pages

## Wave 8 — SEO & Accessibility

- [x] **T8.1** Create `robots.txt`
- [x] **T8.2** Create `sitemap.xml`
- [x] **T8.3** Add custom `404.html` page (dark themed, gold CTA back to home)
- [x] **T8.4** Add/update meta descriptions and `robots` tags on all 5 HTML pages

## Wave 9 — Stock Image Loader

> Goal: replace all placeholder/blank image slots with curated free stock photos
> loaded dynamically via a lightweight JS module (`assets/js/images.js`).
> No build step — pure ES module, tree-shaken inline on each page.

- [ ] **T9.1** Design `images.js` — define image manifest (JSON map of `section → { url, alt, credit }`)
  - Sections: `hero`, `hero-bg`, `services-alteration`, `services-bridal`, `services-suit`,
    `services-dress`, `services-repair`, `gallery-1…12`, `about-story`, `about-team`
  - Source: [Unsplash Source API](https://source.unsplash.com/) — no API key needed, CDN-hosted
  - Fallback: local `assets/images/placeholder.jpg` if network fails (`onerror` handler)

- [ ] **T9.2** Implement lazy-load injector
  - Query all `[data-stock-img]` attributes on page load
  - Set `src` + `alt` from manifest, add `loading="lazy"` and `decoding="async"`
  - Apply smooth fade-in on load via CSS transition (`opacity: 0 → 1`)

- [ ] **T9.3** Tag all image slots across 5 pages with `data-stock-img="<key>"` attribute
  - `index.html` — hero background, services preview cards (4), CTA banner
  - `services.html` — service category hero, 6 service illustration thumbnails
  - `gallery.html` — 12 gallery tiles (replace coloured placeholders)
  - `about.html` — story image, Lisa team photo placeholder
  - `contact.html` — top hero banner

- [ ] **T9.4** Add Unsplash attribution block (required by Unsplash license)
  - Render small `Photo by [name] on Unsplash` credit in image `title` attribute
  - Optionally render credits in footer or a hidden `#credits` section

- [ ] **T9.5** Test & QA
  - Verify all images load at 375px / 768px / 1280px
  - Test offline fallback (DevTools → offline mode)
  - Confirm no layout shift (set explicit `width`/`height` or `aspect-ratio` on all img slots)
