# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md
Keep fonts consistent throughout the project.

## Commands

```bash
npm run dev      # start dev server (Next.js with Turbopack)
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) — see AGENTS.md; this version has breaking changes
- **React 19**
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `globals.css`, not a config file
- **TypeScript**
- **lucide-react** for icons
- **shadcn/ui** pattern (CVA + Radix Slot) for `components/ui/`

## Architecture

Single-page marketing site for Denlux Dental Clinic. All sections are assembled in [app/page.tsx](app/page.tsx) in order: Header → Hero → Features → Services → Team → Testimonials → Pricing → CTA → Footer.

**Page sections** live in `components/` (one file per section). **Reusable UI primitives** live in `components/ui/` (Button, CTA-4, bg-pattern).

## Theming & Design

Colors are defined as CSS custom properties in [app/globals.css](app/globals.css) and exposed to Tailwind via `@theme inline`. Key tokens:

| Token | Value | Usage |
|---|---|---|
| `--accent-blue` | `#1bc3ea` | Primary CTA color |
| `--foreground` | `#0a0a0a` | Default text |
| `--background` | `#ffffff` | Page background |

**Fonts** (defined in [app/layout.tsx](app/layout.tsx)):
- `--font-sans` → Geist Sans (body text, `font-sans`)
- `--font-display` → Playfair Display (headings that need serif/display styling, `font-display`)

Use `font-sans` for body/UI copy and `font-display` for editorial headings. Do not introduce additional font families.

**Button variants** (from `components/ui/button.tsx`): `default`, `outline`, `secondary`, `accent` (accent-blue fill), `ghost`, `link`, `destructive`.

## Utilities

- `cn()` in [lib/utils.ts](lib/utils.ts) — merges Tailwind classes (clsx + tailwind-merge)
- `.section-padding` utility class in globals.css for consistent vertical/horizontal section spacing
- `.animate-fade-in-up` + `.animate-delay-{100–400}` for staggered entrance animations
- `.animate-marquee` for the horizontal info strip in Hero
- `.reveal` / `.reveal.visible` for IntersectionObserver-driven scroll reveals


