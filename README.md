# Juanita & Johannes

A wedding website for Juanita and Johannes, designed in the style of a floral WithJoy page: cream header, watercolor blooms, script names, and a slide-out menu.

There are four pages:

- **Our Story** — how they met and the proposal
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

Production build:

```bash
npm run build
npm start
```

## Notes

Copy, dates, and hotel details are sample content so the site is usable out of the box. Swap names, photos, and `src/lib/site.ts` when you make it yours.

The contact form validates and shows a thank-you state. It does not send email unless you connect a mail provider.
