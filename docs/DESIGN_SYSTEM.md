# Phenomenal Tailoring — Design System

> Aligned with `5s3s-ai-happy` DS principles: 4px base unit, numeric spacing scale, semantic color tokens.

---

## Brand Identity

**Business:** Phenomenal Tailoring & Alteration  
**Positioning:** Premium luxury tailoring studio — precision, confidence, craftsmanship  
**Tone:** Elegant, warm, trustworthy, artisanal  

---

## Color Palette (Tailwind Tokens)

### Primary Surface (Dark Luxury Base)
| Token | Tailwind Class | Hex | Use |
|-------|---------------|-----|-----|
| `bg-primary` | `bg-gray-950` | `#030712` | Page background |
| `bg-surface` | `bg-gray-900` | `#111827` | Cards, sections |
| `bg-elevated` | `bg-gray-800` | `#1f2937` | Elevated cards, hover states |
| `bg-muted` | `bg-gray-700` | `#374151` | Dividers, subtle fills |

### Accent — Warm Gold (Thread / Needle motif)
| Token | Tailwind Class | Hex | Use |
|-------|---------------|-----|-----|
| `accent-primary` | `text-amber-400` | `#fbbf24` | Primary accent, headings highlight |
| `accent-hover` | `text-amber-300` | `#fcd34d` | Hover state |
| `accent-muted` | `text-amber-600` | `#d97706` | Secondary accent, borders |

### Typography
| Token | Tailwind Class | Use |
|-------|---------------|-----|
| `text-primary` | `text-gray-50` | Headings |
| `text-secondary` | `text-gray-300` | Body copy |
| `text-muted` | `text-gray-400` | Captions, meta |
| `text-inverse` | `text-gray-900` | Text on light/gold bg |

### Status Colors
| Use | Tailwind Class |
|-----|---------------|
| Success | `text-emerald-400` |
| Error | `text-red-400` |
| Warning | `text-amber-400` |

---

## Typography

### Font Stack (Google Fonts CDN)
```html
<!-- In <head> of every page -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

| Role | Font | Tailwind |
|------|------|---------|
| Display headings (h1, hero) | Playfair Display 700 | `font-serif` + custom |
| Section headings (h2, h3) | Playfair Display 600 | `font-serif` |
| Body / UI | Inter 400 | `font-sans` |
| Labels / caps | Inter 500 uppercase | `font-sans uppercase tracking-widest` |

### Type Scale (maps to 4px base × Tailwind)
| Step | Size | Tailwind | Use |
|------|------|---------|-----|
| xs | 12px | `text-xs` | Captions, meta |
| sm | 14px | `text-sm` | Labels, small body |
| base | 16px | `text-base` | Body copy |
| lg | 18px | `text-lg` | Lead text |
| xl | 20px | `text-xl` | Sub-headings |
| 2xl | 24px | `text-2xl` | Section headings |
| 3xl | 30px | `text-3xl` | Page headings |
| 4xl | 36px | `text-4xl` | Section hero titles |
| 5xl | 48px | `text-5xl` | Hero heading |
| 6xl | 60px | `text-6xl` | Display hero (desktop) |

---

## Spacing Scale (4px base — mirrors DS_SPACING_LAYOUT_ARCH.md)

| Step | px | Tailwind |
|------|----|---------|
| 1 | 4px | `p-1`, `m-1`, `gap-1` |
| 2 | 8px | `p-2`, `m-2`, `gap-2` |
| 3 | 12px | `p-3`, `m-3` |
| 4 | 16px | `p-4`, `m-4`, `gap-4` |
| 6 | 24px | `p-6`, `m-6`, `gap-6` |
| 8 | 32px | `p-8`, `m-8`, `gap-8` |
| 10 | 40px | `p-10`, `gap-10` |
| 12 | 48px | `p-12`, `py-12` |
| 16 | 64px | `py-16`, `gap-16` |
| 20 | 80px | `py-20` |
| 24 | 96px | `py-24` |

---

## Breakpoints (matches DS breakpoints)

| Name | px | Tailwind prefix |
|------|----|----------------|
| sm | 640px | `sm:` |
| md | 768px | `md:` |
| lg | 1024px | `lg:` |
| xl | 1280px | `xl:` |
| 2xl | 1536px | `2xl:` |

---

## Mobile Design Rules

> Mobile is the **primary viewport**. Apply these rules on every wave — never as an afterthought.

### Fluid Typography (clamp-based tokens — in every page's `tailwind.config`)
```js
fontSize: {
  'fluid-hero': ['clamp(2rem, 8vw, 4.5rem)', { lineHeight: '1.1' }],  // 32px → 72px
  'fluid-h2':   ['clamp(1.5rem, 5vw, 3rem)',  { lineHeight: '1.2' }], // 24px → 48px
},
```

| Token | CSS | Min → Max |
|-------|-----|-----------|
| `text-fluid-hero` | `clamp(2rem, 8vw, 4.5rem)` | 32px → 72px |
| `text-fluid-h2` | `clamp(1.5rem, 5vw, 3rem)` | 24px → 48px |

Always add `text-balance` to headings (prevents widowed words):
```html
<h1 class="text-fluid-hero font-serif font-bold text-balance">
<h2 class="text-fluid-h2 font-serif font-semibold text-balance">
```

### Overflow Guard (every page `<html>` and `<body>`)
```html
<html class="scroll-smooth overflow-x-hidden">
<body class="bg-gray-950 text-gray-300 font-sans antialiased overflow-x-hidden">
```

### iOS Input Auto-Zoom Prevention
All `<input>`, `<textarea>`, `<select>` must use **minimum `text-base` (16px)** — iOS Safari auto-zooms on anything smaller:
```html
<input class="text-base bg-gray-900 ..." ...>
<textarea class="text-base bg-gray-900 ..." ...>
```

### Touch Targets
- Minimum **48×48px** (Google Material Design + Apple HIG)
- Hamburger button: `w-12 h-12` (48×48px)
- Nav links: `py-3 px-4` minimum
- CTA buttons: `py-4 px-8` minimum

### Disable Double-Tap Zoom on Cards
```html
<div class="group ... [touch-action:manipulation]">
```

### Mobile Navigation — Full-Screen Overlay
Luxury pattern: **not a dropdown** — full-screen overlay:
```html
<div id="mobile-menu"
  class="fixed inset-0 z-50 bg-gray-950/98 backdrop-blur-md
         flex flex-col items-center justify-center gap-8 hidden
         transition-opacity duration-300">
  <!-- Large centered links: text-2xl font-serif text-gray-50 -->
</div>
```

### Hamburger → X Morph (3-bar CSS animation)
```html
<button id="menu-btn" class="relative w-12 h-12 flex flex-col
  justify-center items-center gap-[5px] md:hidden" aria-expanded="false">
  <span class="w-6 h-0.5 bg-gray-300 transition-all duration-300 origin-center block"></span>
  <span class="w-6 h-0.5 bg-gray-300 transition-all duration-300 block"></span>
  <span class="w-6 h-0.5 bg-gray-300 transition-all duration-300 origin-center block"></span>
</button>
```
```css
#menu-btn.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
#menu-btn.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
#menu-btn.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
```

### Body Scroll Lock
```js
// Open menu
menuBtn.classList.add('open');
document.body.classList.add('overflow-hidden');
// Close menu
menuBtn.classList.remove('open');
document.body.classList.remove('overflow-hidden');
```

### Mobile CTA Buttons (full-width on mobile)
```html
<a href="#" class="w-full sm:w-auto inline-flex justify-center items-center
  bg-amber-400 text-gray-900 font-semibold px-8 py-4 rounded-full ...">
  Book Appointment
</a>
```

### Viewport Breakpoint Audit Matrix
| Viewport | Device | Key checks |
|----------|--------|------------|
| 375px | iPhone SE | No h-overflow, h1 ≤ 2 lines, tap ≥ 48px |
| 390px | iPhone 14 | Full-screen nav, full-width CTAs |
| 768px | iPad | 2-col grids start, side-by-side layouts |
| 1280px | Desktop | 4-col grids, full horizontal nav |

---

## Layout Primitives

```html
<!-- Container -->
<div class="max-w-7xl mx-auto px-6 lg:px-8">

<!-- Section vertical rhythm -->
<section class="py-20 lg:py-24">

<!-- Card -->
<div class="bg-gray-900 rounded-2xl p-8 border border-gray-800">

<!-- Grid: 3-col services -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- Stack: vertical content -->
<div class="flex flex-col gap-4">

<!-- Inline: horizontal items -->
<div class="flex items-center gap-3">
```

---

## Component Patterns

### Button — Primary (Gold CTA)
```html
<a href="#" class="inline-flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-400/25">
  Book Appointment
</a>
```

### Button — Ghost
```html
<a href="#" class="inline-flex items-center gap-2 border border-amber-400 text-amber-400 font-semibold px-8 py-4 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-all duration-300">
  Learn More
</a>
```

### Section Eyebrow Label
```html
<span class="text-amber-400 text-sm font-semibold uppercase tracking-widest">Our Services</span>
```

### Card
```html
<div class="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-amber-400/40 hover:bg-gray-800 transition-all duration-300">
```

---

## Real Business Data (from phenomenalalteration.com)

```
Business:  Phenomenal Tailoring & Alteration
Tailor:    Lisa (lead artisan — use her name in copy!)
Address:   280 Guelph St, Unit 19, Georgetown, Ontario, Canada  L7G 4B1
Phone 1:   905-877-6747
Phone 2:   647-502-6193  (mobile)
Email 1:   info@phenomenalalteration.com
Email 2:   nglethuy30@gmail.com
USP:       "Same Day Service Available"
```

### Real Testimonials (use verbatim)

> "The attention to detail and commitment to quality at Phenomenal are evident in every aspect of their work. The skilled artisan, Lisa, possesses an extraordinary level of expertise, transforming garments into bespoke pieces that fit like a glove."
> — Nicodemo and Mary Fuda

> "I brought my grandson to Lisa, he needed his suit pants altered … She literally had to remake the pants … He was beyond thrilled … Thank you Lisa, you saved the day."
> — Mina Melvin

---

## Tailwind CDN Setup

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Phenomenal Tailoring & Alteration</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['Playfair Display', 'Georgia', 'serif'],
            sans:  ['Inter', 'system-ui', 'sans-serif'],
          },
          colors: {
            brand: {
              gold:  '#fbbf24',
              'gold-light': '#fcd34d',
              'gold-dark':  '#d97706',
            }
          }
        }
      }
    }
  </script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="bg-gray-950 text-gray-300 font-sans antialiased">
```
