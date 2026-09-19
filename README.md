# Zikora & David

A wedding website for Zikora and David, designed in the style of a floral WithJoy page: cream header, watercolor blooms, script names, and a slide-out menu.

There are four pages:

- **Our Story** — how they met, in their own words
- **Where to Stay** — Lagos hotel notes, a countdown, and a map
- **Registry** — a short wish list (preview only; no payments)
- **Contact Us** — a note to the couple

Wedding date used in the countdown: **Saturday, 10 October 2026**, in Lagos.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43180](http://localhost:43180).

To confirm the menu, registry, and contact form in a real browser:

```bash
npm run build
npm start
npm test
```

Production build:

```bash
npm run build
npm start
```

## Notes

Hotel details and the wedding date live in `src/lib/site.ts`. The contact form validates and shows a thank-you state. It does not send email unless you connect a mail provider.
