# AGENTS.md

This document orients developers and AI agents working on this codebase.

## Project Overview

A Spanish-language landing page for **Property Advisers Real Estate**, a Puerto Rico real estate advisory firm. The site presents the firm's services and captures leads through a Netlify Forms contact form. Successful submissions redirect to a thank-you page.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes + arbitrary brand colors) |
| Forms | Netlify Forms |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   ├── favicon.ico
│   └── form-survey.html        # Static skeleton form for Netlify build-time detection (form name: "contacto")
├── src/
│   ├── components/
│   │   └── SurveyForm.tsx      # Contact form: AJAX POST to /form-survey.html, navigates to /gracias on success
│   ├── routes/
│   │   ├── __root.tsx          # Root layout, head metadata (es lang), HTML shell
│   │   ├── index.tsx           # Landing page: hero, embedded form, services grid, footer, floating WhatsApp button
│   │   └── gracias.tsx         # Thank-you page reached after form submission
│   ├── router.tsx              # TanStack Router setup
│   └── styles.css              # Tailwind import + global body/code font styling
├── netlify.toml                # Build command (vite build), publish dir (dist/client), dev server config
├── package.json
├── tsconfig.json               # Strict TS, @/* alias for src/*
└── vite.config.ts              # TanStack Start, React, Tailwind, Netlify plugin
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are derived from files in `src/routes/`:

- `__root.tsx` — root layout
- `index.tsx` — `/`
- `gracias.tsx` — `/gracias` (post-submission confirmation)

### Netlify Forms Integration

The `contacto` form is rendered by React (`SurveyForm.tsx`), but Netlify only scans **static HTML at build time** to register forms. To make this work:

1. `public/form-survey.html` declares a hidden form named `contacto` with every field the React form submits (`nombre`, `telefono`, `email`, `interes`, `mensaje`, `bot-field`). This is what Netlify registers.
2. `SurveyForm.tsx` posts via `fetch` to `/form-survey.html` with `Content-Type: application/x-www-form-urlencoded` and a `form-name=contacto` body field. Posting to `/` would be intercepted by the SSR catch-all and never reach the Forms processor — the path **must** be the static skeleton file.
3. After a successful POST, the component calls TanStack Router's `navigate({ to: '/gracias' })` instead of letting the browser do a full-page redirect.

If you add a field to the React form, you must add it to `public/form-survey.html` too. Netlify validates field names against the registered form.

### Branding

| Token | Value | Usage |
|-------|-------|-------|
| Primary green | `#0f3d2e` | Hero background, primary buttons, headings |
| Gold accent | `#c9a646` | Secondary CTA, accent borders, highlights |
| WhatsApp green | `#25D366` | WhatsApp CTA + floating button |
| Surface | `#f5f5f5` | Page background |
| Footer | `#111` | Footer background |

These are referenced as Tailwind arbitrary values (`bg-[#0f3d2e]` etc.). If the palette grows, consider promoting them to CSS custom properties in `styles.css`.

## Conventions

### Naming
- Components: PascalCase (`SurveyForm.tsx`)
- Routes: lowercase file names

### Styling
- Tailwind utility classes only; no CSS modules
- Arbitrary value syntax (`bg-[#0f3d2e]`) for brand colors
- Spanish copy throughout the UI; root `<html lang="es">`

### TypeScript
- Strict mode
- `@/*` alias maps to `src/*`

## Development Commands

```bash
npm run dev      # Vite dev server on port 3000
npm run build    # Production build (dist/client)
netlify dev      # Full Netlify emulation on port 8888
```

## Non-Obvious Decisions

- **Form file naming.** The static skeleton is named `form-survey.html` (inherited from the survey starter template) but declares the `contacto` form. The filename is just a path; what matters is the `name` attribute inside.
- **Client-side navigation after submit.** The original handwritten HTML used `action="/gracias.html"` which would trigger a full reload. The React version submits via `fetch` and uses TanStack Router navigation, preserving SPA behavior.
- **No global state library.** All state is local to `SurveyForm`; Zustand or similar is not needed.
- **Spanish locale.** All user-facing copy is Spanish; `<html lang="es">` is set in `__root.tsx` for accessibility/SEO.
