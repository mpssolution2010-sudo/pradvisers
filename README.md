# Property Advisers Real Estate

A bilingual (Spanish) landing page for Property Advisers Real Estate, a Puerto Rico real estate advisory service. The site offers free orientation for selling, buying, renting, inheritance/succession matters, and short sales, and captures leads via a Netlify-handled contact form.

## Tech Stack

- **Framework:** TanStack Start (React 19, TanStack Router v1)
- **Build:** Vite 7
- **Styling:** Tailwind CSS 4
- **Forms:** Netlify Forms
- **Hosting:** Netlify
- **Language:** TypeScript 5.7 (strict mode)

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs on port 3000 by default. To run with the full Netlify environment (including Forms emulation), use:

```bash
netlify dev
```

This proxies the Vite server through `http://localhost:8888`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Produce a production build |

## Deployment

Push to the connected Netlify site. The contact form (`contacto`) is registered at build time via the static skeleton in `public/form-survey.html`, so submissions are captured by Netlify Forms automatically. Form submissions are visible in the Netlify dashboard under **Forms**.

## Contact Configuration

| Item | Value |
|------|-------|
| Phone / WhatsApp | 787-393-5871 |
| Email | jmlpropertyadviserspr@gmail.com |

To change these values, search the codebase for the phone number, the WhatsApp link, and the email address.
