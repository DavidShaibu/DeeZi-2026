# DeeZi 2026

Wedding website for Zikora and David (`#DeeZi26`), designed in the style of a floral WithJoy page: cream header, watercolor blooms, script names, and a slide-out menu.

There are five pages:

- **Our Story** — how they met, in their own words, with photos from the day she said yes
- **Where to Stay** — hotels in Huntsville, Texas, a countdown, and a map
- **Registry** — cash donations via Navy Federal and Zelle
- **RSVP** — a short note and a link to the Google Form
- **Contact Us** — wedding coordinator and family representative numbers

Wedding date used in the countdown: **Friday, 9 October 2026**, in Huntsville, Texas.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43180](http://localhost:43180).

To confirm the menu, registry, and contact details in a real browser:

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

## Deploy on Vercel

This is a standard Next.js app. In Vercel:

1. Import the **DeeZi-2026** GitHub repository
2. Leave the framework preset as **Next.js**
3. Do not add environment variables — none are required
4. Deploy

Vercel will run `next build`. The local `npm start` port in `package.json` is only for development here and is ignored on Vercel.

## Notes

Hotel details, registry, contacts, and the wedding date live in `src/lib/site.ts`.
