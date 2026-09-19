# Zikora & David

A wedding website for Zikora and David, designed in the style of a floral WithJoy page: cream header, watercolor blooms, script names, and a slide-out menu.

There are four pages:

- **Our Story** — how they met, in their own words
- **Where to Stay** — two hotels in Huntsville, Texas, a countdown, and a map
- **Registry** — cash donations via Navy Federal and Zelle
- **Contact Us** — a note to the couple

Wedding date used in the countdown: **Friday, 9 October 2026**, in Huntsville, Texas.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43180](http://localhost:43180).

To confirm the menu, registry details, and contact form in a real browser:

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
