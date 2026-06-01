# Sprint Plan — Phenomenal Tailoring Website
## "Make It Modern & Stunning"

**Stack:** Pure HTML5 + Tailwind CSS CDN  
**Deploy:** GitHub Pages  
**Design ref:** `docs/DESIGN_SYSTEM.md`  

### Real Business Info (from live site)
| Field | Value |
|-------|-------|
| Tailor | **Lisa** (lead artisan — always use her name) |
| Address | 280 Guelph St, Unit 19, Georgetown, Ontario L7G 4B1 |
| Phone | 905-877-6747 (main) · 647-502-6193 (mobile) |
| Email | info@phenomenalalteration.com · nglethuy30@gmail.com |
| Key USP | **"Same Day Service Available"** — feature prominently |

---

## Sprint Overview

| Wave | Theme | Files | Est. |
|------|-------|-------|------|
| W0 | Foundation & Tailwind Setup | All 5 pages | 1h |
| W1 | Shared Nav & Footer | All 5 pages | 2h |
| W2 | Home Page | `index.html` | 3h |
| W3 | Services Page | `services.html` | 2h |
| W4 | Gallery Page | `gallery.html` | 2h |
| W5 | About Page | `about.html` | 2h |
| W6 | Contact Page | `contact.html` | 1.5h |
| W7 | Polish, Animations & Responsive | All | 2h |
| W8 | SEO, Accessibility & Meta | All | 1h |
| **Total** | | | **~16.5h** |

---

## Wave 0 — Foundation & Tailwind Setup
> **Goal:** Every page gets the correct `<head>` scaffold — Tailwind CDN, viewport meta, Google Fonts, Tailwind config.

### T0.1 — Scaffold HTML `<head>` on all pages
**Files:** `index.html`, `services.html`, `gallery.html`, `about.html`, `contact.html`  
**Acceptance criteria:**
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` present
- [ ] Tailwind CDN `<script src="https://cdn.tailwindcss.com">` loaded
- [ ] `tailwind.config` inline script sets `fontFamily.serif = ['Playfair Display']`, `fontFamily.sans = ['Inter']`, and `brand.gold` color extension
- [ ] Google Fonts CDN link for Playfair Display + Inter loaded with `preconnect`
- [ ] `<body>` has base classes: `bg-gray-950 text-gray-300 font-sans antialiased`
- [ ] Each page has a unique, descriptive `<title>` tag
- [ ] Favicon placeholder `<link rel="icon">` added

### T0.2 — Add Open Graph & canonical meta
**Files:** All 5 pages  
**Acceptance criteria:**
- [ ] `<meta name="description">` per page (≤160 chars)
- [ ] `og:title`, `og:description`, `og:type`, `og:url` on each page
- [ ] `og:image` placeholder set (1200×630 recommended)
- [ ] `<link rel="canonical">` pointing to GitHub Pages URL

### T0.3 — Create `/assets/` Directory Structure
**Files:** `/assets/images/gallery/.gitkeep`, `/assets/images/team/.gitkeep`, `/assets/images/og/.gitkeep`
**Acceptance criteria:**
- [ ] `/assets/images/gallery/` — placeholder for gallery photos
- [ ] `/assets/images/team/` — placeholder for Lisa's profile photo
- [ ] `/assets/images/og/` — placeholder for 1200×630 OG cover image
- [ ] Each directory has a `.gitkeep` so it's tracked in git
- [ ] `og-cover.jpg` placeholder noted in T0.2 OG meta points to this path

---

## Wave 1 — Shared Navigation & Footer
> **Goal:** Consistent, sticky dark nav with mobile hamburger; elegant footer with links and contact info.

### T1.1 — Build Sticky Navigation Component
**Files:** All 5 pages  
**Sections:** Logo left, nav links center/right, CTA button  
**Acceptance criteria:**
- [ ] Nav is `position: sticky top-0 z-50` with backdrop blur: `backdrop-blur-md bg-gray-950/90 border-b border-gray-800`
- [ ] Logo: "Phenomenal" in Playfair Display serif + gold accent on "Tailoring"
- [ ] Nav links: Home, Services, Gallery, About, Contact — styled `text-gray-300 hover:text-amber-400 transition-colors`
- [ ] Active page link highlighted with `text-amber-400`
- [ ] CTA "Book Now" button: gold filled, `rounded-full`
- [ ] Mobile hamburger button: `w-12 h-12` (48px touch target), hidden on `md:` breakpoint
- [ ] Mobile menu: **full-screen overlay** `fixed inset-0 z-50 bg-gray-950/98 backdrop-blur-md` — not a dropdown
- [ ] Overlay: flex column, items centered, large link text `text-2xl font-serif`
- [ ] Hamburger bars animate to X on open (CSS `transform` on 3 `<span>` bars)
- [ ] Body scroll locked when menu open (`document.body.classList.add('overflow-hidden')`)
- [ ] Smooth enter/exit: overlay fades in/out with `transition-opacity duration-300`

### T1.2 — Build Footer Component
**Files:** All 5 pages  
**Sections:** Logo + tagline | Quick links | Services | Contact info  
**Acceptance criteria:**
- [ ] `bg-gray-900 border-t border-gray-800` styling
- [ ] 3-column grid on desktop (`md:grid-cols-3`), stacked on mobile
- [ ] Column 1: Logo, 1-line tagline, social icons (Facebook, Instagram placeholders)
- [ ] Column 2: Quick links (Home, Services, Gallery, About, Contact)
- [ ] Column 3: Address/hours placeholder, phone `905-877-6747`, email `info@phenomenalalteration.com`
- [ ] Bottom bar: copyright line + "Powered by craftsmanship" tagline
- [ ] All footer links have `hover:text-amber-400 transition-colors`

### T1.3 — Nav Hamburger JavaScript
**Files:** All 5 pages (inline `<script>` at bottom, or shared `assets/js/nav.js` included)
**Acceptance criteria:**
- [ ] Button click toggles overlay visibility + adds `open` class to button for X morph
- [ ] `aria-expanded` attribute flips `"false"` → `"true"` on toggle
- [ ] Clicking any nav link in overlay closes menu + removes scroll lock
- [ ] Pressing `Escape` key closes menu + removes scroll lock
- [ ] Body scroll lock: `document.body.classList.toggle('overflow-hidden')` on toggle
- [ ] ~25 lines of vanilla JS, no jQuery or framework
- [ ] CSS for X morph: `.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }`

---

## Wave 2 — Home Page (`index.html`)
> **Goal:** Compelling first impression — full-screen hero, value props, services preview, testimonials, CTA.

### T2.1 — Hero Section
**Section:** Full-viewport hero above the fold  
**Acceptance criteria:**
- [ ] Full viewport height (`min-h-screen`) with dark gradient overlay
- [ ] Background: dark fabric texture via CSS `bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950` (image can be added later)
- [ ] Eyebrow label: `"CRAFTED FOR YOU"` in amber, uppercase tracking-widest
- [ ] H1: "Perfect Fit." in Playfair Display, `text-fluid-hero font-bold text-gray-50 text-balance` (fluid clamp 32→72px)
- [ ] H1 second line: "Exceptional Craftsmanship." with `text-amber-400` accent on "Exceptional"
- [ ] Sub-copy: 1–2 sentences, `text-lg text-gray-400 max-w-xl`
- [ ] Two CTAs: "Book Appointment" (primary gold) + "View Services" (ghost)
- [ ] Decorative element: thin gold horizontal rule or scissors icon above eyebrow
- [ ] Animated entrance: `opacity-0` → `opacity-100` fade-in on load (CSS `@keyframes`)
- [ ] Hero is fully responsive; text scales down gracefully on mobile

### T2.2 — Why Choose Us (Feature Grid)
**Section:** 4-feature grid below hero  
**Acceptance criteria:**
- [ ] Section title with eyebrow + h2 in Playfair Display
- [ ] 4 feature cards in `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- [ ] Each card: icon (SVG or emoji tasteful), short title, 1-line description
- [ ] Features: "Expert Craftsmanship", "Personalized Fit", "Fast Turnaround", "Quality Guarantee"
- [ ] Cards: `bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-amber-400/40` with smooth hover
- [ ] Icons use amber color

### T2.3 — Services Preview Section
**Section:** 4 service tiles linking to services.html  
**Acceptance criteria:**
- [ ] Section has dark alt background (`bg-gray-900`)
- [ ] 4 service cards: Bridal & Wedding, Suit Alterations, Dress Alterations, Repairs & Restoration
- [ ] Each card: top image placeholder (gradient/pattern), title, 1-line desc, "Learn More →" link in amber
- [ ] Cards in `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- [ ] Hover: scale-up transform + border glow `hover:shadow-amber-400/10`
- [ ] Section ends with "View All Services →" CTA

### T2.4 — Testimonials Section
**Section:** 2 real client testimonials + placeholder for more  
**Real content (use verbatim):**
- **Nicodemo & Mary Fuda:** "The attention to detail and commitment to quality at Phenomenal are evident in every aspect of their work. The skilled artisan, Lisa, possesses an extraordinary level of expertise, transforming garments into bespoke pieces that fit like a glove…"
- **Mina Melvin:** "I brought my grandson to Lisa, he needed his suit pants altered … She literally had to remake the pants … He was beyond thrilled … Thank you Lisa, you saved the day."
**Acceptance criteria:**
- [ ] 2 real testimonial cards (full quotes from above), 1 placeholder "Leave a review" card
- [ ] Cards: `bg-gray-900 rounded-2xl p-8 border border-gray-800`
- [ ] Each: quote icon (amber), quote text, client name, 5 gold stars
- [ ] Section title + eyebrow label pattern

### T2.5 — Final CTA Banner
**Section:** Full-width CTA before footer  
**Acceptance criteria:**
- [ ] Dark rich background with gold accent border/gradient
- [ ] Bold headline: "Ready for the Perfect Fit?"
- [ ] Sub-copy + "Book Your Appointment" gold button
- [ ] **"Same Day Service Available"** badge displayed prominently (amber pill)
- [ ] Both phone numbers displayed: 905-877-6747 + 647-502-6193

---

## Wave 3 — Services Page (`services.html`)
> **Goal:** Clear, scannable service offerings with details and pricing structure.

### T3.1 — Services Hero + Breadcrumb
**Acceptance criteria:**
- [ ] Compact page hero (50vh or less): dark bg, "Our Services" heading, 1-line description
- [ ] Breadcrumb: `Home / Services` with amber link
- [ ] No full-screen height (save that for home)

### T3.2 — Service Category Cards
**Acceptance criteria:**
- [ ] 4 main service categories as large cards:
  1. Bridal & Wedding Alterations
  2. Suit & Formal Wear Alterations
  3. Dress & Everyday Clothing
  4. Repairs & Restoration
- [ ] Each card: icon, heading, bulleted list of specific services, "starting from" price placeholder
- [ ] Cards in `grid-cols-1 lg:grid-cols-2 gap-8`
- [ ] Each card has unique amber-accent icon
- [ ] Section: "How It Works" — 3-step process (Book → Fitting → Pickup) in horizontal steps with numbered circles in gold

---

## Wave 4 — Gallery Page (`gallery.html`)
> **Goal:** Visual showcase of work using a responsive masonry-style or CSS grid layout.

### T4.1 — Gallery Hero + Filter Bar
**Acceptance criteria:**
- [ ] Page hero with "Our Work" heading
- [ ] Filter pills: All | Bridal | Suits | Dresses | Repairs — styled as amber pill buttons
- [ ] Active filter highlighted with `bg-amber-400 text-gray-900`

### T4.2 — Gallery Grid
**Acceptance criteria:**
- [ ] CSS grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`
- [ ] 12+ placeholder image tiles using aspect-ratio `aspect-square` or `aspect-[4/5]`
- [ ] Placeholder tiles: dark gradient fills with category label centered
- [ ] On hover: overlay with title + category in amber fades in (`opacity-0 group-hover:opacity-100`)
- [ ] Tiles have `rounded-xl overflow-hidden` for clean edges
- [ ] "Images coming soon" banner at bottom for empties
- [ ] Mobile: 2-col grid

### T4.3 — Gallery Filter JavaScript
**Files:** `gallery.html` (inline `<script>` or `assets/js/gallery.js`)
**Acceptance criteria:**
- [ ] Each gallery tile has `data-category="bridal|suits|dresses|repairs"` attribute
- [ ] Filter pill buttons have `data-filter="all|bridal|suits|dresses|repairs"`
- [ ] Clicking a filter shows only tiles matching that category (`display: none` on non-matches)
- [ ] "All" filter shows all tiles
- [ ] Active filter pill gets `bg-amber-400 text-gray-900` class; others revert to ghost style
- [ ] ~15–20 lines vanilla JS

---

## Wave 5 — About Page (`about.html`)
> **Goal:** Build trust — brand story, mission, team introduction.

### T5.1 — Brand Story Section
**Acceptance criteria:**
- [ ] Page hero with "About Us" heading
- [ ] 2-column layout on desktop: large text block left, decorative image placeholder right
- [ ] Story text: 2–3 paragraphs about mission, values, craftsmanship philosophy
- [ ] Pull quote in Playfair Display italic with gold left-border: `"Clothing should fit the individual—not the other way around."`

### T5.2 — Values & Team
**Acceptance criteria:**
- [ ] 3 brand values in icon + title + text card format
- [ ] Values: "Precision", "Trust", "Passion"
- [ ] Team section: **Lisa** — Lead Artisan (profile card with `rounded-full` avatar placeholder)
- [ ] Stat badges: "Same Day Service", "Georgetown, ON", "500+ Happy Clients" — amber, large Playfair Display numbers

---

## Wave 6 — Contact Page (`contact.html`)
> **Goal:** Easy, professional contact form and business info.

### T6.1 — Contact Layout & Business Info
**Acceptance criteria:**
- [ ] 2-column layout: form left (60%), business info right (40%) on `lg:` breakpoint
- [ ] Business info card: `bg-gray-900 rounded-2xl p-8 border border-gray-800`
- [ ] **Address:** 280 Guelph St, Unit 19, Georgetown, Ontario, Canada L7G 4B1
- [ ] **Phone 1:** 905-877-6747 → `href="tel:9058776747"`
- [ ] **Phone 2:** 647-502-6193 → `href="tel:6475026193"` (Mobile)
- [ ] **Email 1:** info@phenomenalalteration.com → `href="mailto:info@phenomenalalteration.com"`
- [ ] **Email 2:** nglethuy30@gmail.com → `href="mailto:nglethuy30@gmail.com"`
- [ ] Hours placeholder: Mon–Sat 9am–6pm (verify with client)
- [ ] **"Same Day Service Available"** amber badge in info card
- [ ] Social links (Facebook, Instagram icons — SVG inline)

### T6.2 — Contact Form
**Acceptance criteria:**
- [ ] Fields: Name, Email, Phone (optional), Service type (select dropdown), Message (textarea)
- [ ] All inputs: dark styled `bg-gray-900 border border-gray-700 rounded-xl text-gray-100 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30`
- [ ] Labels: `text-sm text-gray-400 font-medium uppercase tracking-wide`
- [ ] Submit button: full-width gold `bg-amber-400 text-gray-900 hover:bg-amber-300`
- [ ] HTML5 `required` validation on Name, Email, Message
- [ ] Form `action` set to Formspree endpoint placeholder (comment in HTML)
- [ ] Success/error state feedback via CSS `:valid`/`:invalid` or `aria-describedby`

### T6.3 — Formspree Integration
**Files:** `contact.html`
**Acceptance criteria:**
- [ ] Go to [formspree.io](https://formspree.io) and create a free account for `info@phenomenalalteration.com`
- [ ] Create a new form → copy the endpoint URL (format: `https://formspree.io/f/XXXXXXXX`)
- [ ] Replace `action="#"` placeholder on `<form>` with the real Formspree URL
- [ ] Add `method="POST"` on the form element
- [ ] Test submission — email should arrive at `info@phenomenalalteration.com`
- [ ] Add `_next` hidden input to redirect after submission (optional thank-you page)

---

## Wave 7 — Polish, Animations & Responsive Audit
> **Goal:** Elevate the design with subtle motion, consistent spacing, mobile audit.

### T7.1 — CSS Animation Layer
**Acceptance criteria:**
- [ ] Fade-in on scroll: use `IntersectionObserver` (minimal vanilla JS, ~20 lines) to add `animate-in` class when element enters viewport
- [ ] CSS: `.animate-in { animation: fadeInUp 0.6s ease forwards; }`
- [ ] Applied to: section headings, cards, hero content
- [ ] Staggered card animations using `animation-delay`
- [ ] Nav scroll shadow: adds `shadow-lg` class when `scrollY > 10`
- [ ] Smooth scroll: `html { scroll-behavior: smooth; }`

### T7.2 — Responsive Audit & Mobile Polish
**Acceptance criteria:**
- [ ] All pages verified at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1280px (desktop)
- [ ] No horizontal overflow at any breakpoint (verified — `overflow-x-hidden` on `<html>` + `<body>`)
- [ ] Touch targets ≥ **48px** on all interactive elements (Material + Apple HIG spec)
- [ ] Nav mobile overlay: closes on link click, Escape key, scroll lock removed on close
- [ ] iOS input auto-zoom: all `<input>`, `<textarea>`, `<select>` use minimum `text-base` (16px)
- [ ] Primary CTA buttons: `w-full sm:w-auto` (full-width on mobile)
- [ ] Gallery 2-col on mobile confirmed
- [ ] Contact form full-width on mobile
- [ ] `[touch-action:manipulation]` on all interactive cards (no double-tap zoom)
- [ ] `text-balance` on all `<h1>` and `<h2>` headings (no widowed words)

### T7.3 — Animate Attribute Pass
**Files:** All 5 pages
**Acceptance criteria:**
- [ ] All section headings (`<h2>`) marked with `data-animate="fadeInUp"`
- [ ] All card grids: each card has `data-animate="fadeInUp"` + `data-delay="0|100|200|300"ms`
- [ ] Hero content block marked `data-animate="fadeIn"`
- [ ] Pass is done after W2–W6 content is complete but before T7.1 observer script runs
- [ ] `data-delay` values create stagger effect across grid children

---

## Wave 8 — SEO, Accessibility & Final QA
> **Goal:** Production-ready with proper semantics and search optimization.

### T8.1 — Semantic HTML & Accessibility
**Acceptance criteria:**
- [ ] Landmark elements: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>` used correctly
- [ ] `<h1>` appears exactly once per page
- [ ] All images have `alt` attributes (even placeholders: `alt=""` or descriptive)
- [ ] Form inputs have associated `<label>` via `for`/`id` pairing
- [ ] Color contrast: amber `#fbbf24` on dark `#111827` passes WCAG AA (4.5:1 ratio)
- [ ] Nav has `aria-label="Main navigation"`
- [ ] Mobile menu button has `aria-expanded` and `aria-controls`
- [ ] Skip-to-content link at top of each page

### T8.2 — SEO & Performance
**Acceptance criteria:**
- [ ] Each page: unique `<title>` (format: `{Page} — Phenomenal Tailoring & Alteration`)
- [ ] Meta descriptions on all pages (≤160 chars, include "Georgetown" and "Ontario")
- [ ] Open Graph tags complete on all pages
- [ ] `robots.txt` file added to root
- [ ] `sitemap.xml` added to root (5 URLs)
- [ ] No render-blocking resources beyond Tailwind CDN and Fonts
- [ ] Fonts use `display=swap` (already in Google Fonts URL)
- [ ] README updated with deployment instructions

### T8.3 — Custom 404 Page
**Files:** `404.html` (GitHub Pages auto-serves this on missing URLs)
**Acceptance criteria:**
- [ ] Same `<head>` scaffold as all other pages (Tailwind, fonts, config)
- [ ] Same nav and footer as other pages
- [ ] Centered content: large "404" in Playfair Display with amber accent
- [ ] Sub-heading: "Page Not Found" and a 1-line message
- [ ] Gold CTA button: "Return Home" → `href="index.html"`
- [ ] Dark luxury design consistent with rest of site

---

## Execution Order & Dependencies

```
W0 (Foundation) 
  └─→ W1 (Nav + Footer) 
        └─→ W2 (Home)
        └─→ W3 (Services)
        └─→ W4 (Gallery)
        └─→ W5 (About)
        └─→ W6 (Contact)
              └─→ W7 (Polish)
                    └─→ W8 (SEO + QA)
```

W0 and W1 are **blockers** — all page waves (W2–W6) depend on them.  
W2–W6 are **parallelizable** once W1 is done.

---

## Definition of Done

A task is **DONE** when:
1. All acceptance criteria checkboxes are ✅
2. Page opens without console errors
3. Responsive at 375px, 768px, 1280px
4. Passes a visual spot-check in Chrome + Safari
5. Linked correctly in nav (all pages reachable from homepage)
