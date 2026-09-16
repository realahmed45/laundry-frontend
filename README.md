# Bersih Clean — Frontend

Marketing site for Bersih Clean, a B2B villa linen laundry partner in Kuta, Bali.

## Stack

React 19 + Vite 5, Tailwind CSS 3, React Router 7.

> Vite is pinned to 5.x on purpose. Vite 8 ships the rolldown bundler, whose
> native binary fails to install on this Windows toolchain (`Cannot find native
> binding`). Pin stays until that is resolved upstream.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
```

## Layout

```
src/
  components/    Navbar, Footer, ContactSection, PageHero, Icon
  pages/         Home, Profile, Contact
  data/          content.js — all marketing copy, kept in one place
  assets/        logo.png (transparent), five-star.jpg
```

Page copy lives in `src/data/content.js` rather than inline in the JSX, so the
services and advantages lists can be edited without touching layout code.

## Notes

## Contact form

The form posts to [Formspree](https://formspree.io). To switch it on:

1. Create a form at formspree.io and copy its id (the part after `/f/` in the
   endpoint it gives you).
2. `cp .env.example .env` and set `VITE_FORMSPREE_ID=<your id>`.
3. Restart the dev server — Vite only reads `.env` at startup.

Until an id is set the form deliberately refuses to submit and says it is not
connected, rather than posting into the void and reporting a false success.

Note that `VITE_`-prefixed vars are compiled into the client bundle, so the id
is public. That is expected for Formspree: the id only permits posting to your
form, and spam filtering is handled on their side.
- `public/brand-reference.pdf` is the approved design, kept in the repo so the
  build can be checked against it.

## Deploying to Vercel

Import the repo, then set one environment variable:

| Name | Value | Environments |
|---|---|---|
| `VITE_FORMSPREE_ID` | `movavgrb` | Production, Preview, Development |

Build settings are detected automatically (Vite → `npm run build` → `dist`).

Two things to know:

- Vite reads `VITE_*` vars **at build time**, not runtime. Changing the value in
  Vercel requires a redeploy to take effect.
- `vercel.json` rewrites all paths to `index.html`. Without it, React Router's
  `/profile` and `/contact` return 404 on a hard refresh or a shared link,
  because no such file exists on disk.
