# Phenomenal Tailoring — Docs

Project documentation for the Phenomenal Tailoring & Alteration website redesign.

## Files

| File | Purpose |
|------|---------|
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Brand tokens, colors, typography, Tailwind config, component patterns |
| [SPRINT_PLAN.md](./SPRINT_PLAN.md) | Full sprint breakdown (Waves 0–8) with detailed acceptance criteria |
| [TASKS.md](./TASKS.md) | Atomic task checklist for tracking progress |

## Quick Start

1. Reference `DESIGN_SYSTEM.md` before writing any HTML/CSS
2. Start every new page or section from `SPRINT_PLAN.md` acceptance criteria
3. Check off tasks in `TASKS.md` as you complete them
4. Deploy to GitHub Pages (see root `README.md`)

## Stack

- **HTML5** — semantic markup
- **Tailwind CSS CDN** — utility-first styling
- **Google Fonts** — Playfair Display (serif) + Inter (sans)
- **Vanilla JS** — minimal, only for nav toggle + scroll animations
- **Formspree** — contact form backend (no server needed)

## Design Alignment

This project aligns with the `5s3s-ai-happy` design system (Open Design):
- 4px base spacing unit → mapped to Tailwind's default scale
- Breakpoints: 640 / 768 / 1024 / 1280px
- Numeric spacing tokens → Tailwind `p-1` through `p-24`
- Dark-first color system with warm gold accent
