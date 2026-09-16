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

- The contact form is front-end only. It validates and acknowledges, but there
  is no backend yet — wire `onSubmit` in `ContactSection.jsx` to an endpoint.
- `public/brand-reference.pdf` is the approved design, kept in the repo so the
  build can be checked against it.
