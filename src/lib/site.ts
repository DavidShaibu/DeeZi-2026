export const couple = {
  partnerOne: "Juanita",
  partnerTwo: "Johannes",
  names: "Juanita & Johannes",
} as const;

/** Saturday, 10 October 2026, 4:00pm WAT */
export const weddingDateIso = "2026-10-10T16:00:00+01:00";

export const wedding = {
  dateLabel: "Saturday, 10 October 2026",
  timeLabel: "4:00 in the afternoon",
  city: "Lagos",
  country: "Nigeria",
  venueName: "Lekki Waterfront",
  venueArea: "Lekki Phase 1",
  mapsQuery: "Lekki Phase 1 Lagos Nigeria",
} as const;

export const navItems = [
  { href: "/", label: "Our Story" },
  { href: "/where-to-stay", label: "Where to Stay" },
  { href: "/registry", label: "Registry" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const hotels = [
  {
    name: "Lagos Oriental Hotel",
    area: "Victoria Island",
    price: "US$226",
    note: "Closest to the welcome dinner, with lagoon views.",
    favorite: true,
    image: "/images/hotel-oriental.jpg",
    mapsQuery: "Lagos Oriental Hotel Victoria Island",
  },
  {
    name: "Federal Palace Hotel",
    area: "Victoria Island",
    price: "US$173",
    note: "A classic waterfront stay, a short drive from both venues.",
    favorite: false,
    image: "/images/hotel-palace.jpg",
    mapsQuery: "Federal Palace Hotel and Casino Lagos",
  },
  {
    name: "Lekki Shores Suites",
    area: "Lekki Phase 1",
    price: "US$128",
    note: "Quieter boutique rooms nearest the ceremony.",
    favorite: false,
    image: "/images/hotel-lekki.jpg",
    mapsQuery: "Lekki Phase 1 hotels Lagos",
  },
] as const;

export const registryItems = [
  {
    title: "Honeymoon in Zanzibar",
    detail: "Help send us to the Indian Ocean after the dancing is done.",
    amount: "Any amount",
  },
  {
    title: "A long lunch for two",
    detail: "A reservation somewhere we have been meaning to try.",
    amount: "US$120",
  },
  {
    title: "Linens for the new house",
    detail: "Soft sheets, a throw, and something that feels like home.",
    amount: "US$85",
  },
] as const;

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
