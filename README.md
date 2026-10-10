# Musab Ben Jadi — Portfolio

A premium, dark-first personal portfolio built with **Vue 3 + Vite + Tailwind CSS**, positioning
Musab as a Web Application Developer working with Laravel, Vue.js, Inertia.js, and Tailwind CSS.

## Stack

- Vue 3 (`<script setup>`, Composition API)
- Vite
- Tailwind CSS 3
- [lucide-vue-next](https://lucide.dev/) for icons
- No React, Angular, Bootstrap, or jQuery

Routing isn't used — this is intentionally a single-page portfolio. If you later split it into
multiple routes, `vue-router` is a natural addition (`npm i vue-router`).

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/       # One component per section (Navbar, Hero, About, ...)
├── data/              # Data-driven content: skills, services, projects, process, build types
├── composables/       # useScrollReveal.js — the v-reveal scroll animation directive
├── App.vue
├── main.js
└── style.css
```

## Before you deploy — replace these placeholders

The content follows the brief closely and avoids invented stats, testimonials, or clients.
A few things are intentionally left as placeholders for you to fill in:

- **Social links** — GitHub, LinkedIn, and email links in `Navbar.vue`, `Contact.vue`, and
  `Footer.vue` currently point to `#` or `your-email@example.com`. Replace with your real URLs.
- **Project links** — `src/data/projects.js` has `github: '#'` and `demo: null` for each
  project. Add real repository and live demo URLs (the "Live demo" button only renders when
  `demo` is set).
- **Project screenshots** — both project cards currently render a placeholder icon block
  instead of an image. Add real screenshots and swap the placeholder `<div>` in `Projects.vue`
  for an `<img>` tag once you have them.
- **Contact form** — `Contact.vue` simulates a successful submission on the frontend only.
  Wire `handleSubmit()` in that file to a real endpoint, e.g. a Laravel API route
  (`POST /api/contact`), when you connect this to your backend.
- **Open Graph meta** — `index.html` has placeholder `og:url` and `og:image` values; update
  them once the site is deployed.
- **Favicon** — `public/favicon.svg` is a simple placeholder mark; swap it for a real logo mark
  if you have one.

## Notes

- Animations respect `prefers-reduced-motion` (see `src/style.css`).
- The `v-reveal` directive (`src/composables/useScrollReveal.js`) drives the scroll-in effect
  used across sections and cleans up its `IntersectionObserver` on unmount.
- Icons are resolved dynamically from `lucide-vue-next` by name (see the `icon` fields in
  `src/data/*.js`), so adding a new skill/service/project type is just a data change.
