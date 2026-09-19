export const couple = {
  partnerOne: "Zikora",
  partnerTwo: "David",
  names: "Zikora & David",
  email: "hello@zikoraanddavid.com",
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

export const ourStory = [
  {
    speaker: "David",
    text: "We first met at Toastmasters in December 2023, when I had just joined. It was my first meeting, and Zikora was giving a speech. I remember listening to her speak and thinking, okay, I need to get this girl’s number. She had this confidence and grace about her, and I was definitely interested.\n\nSo, I got her number.",
  },
  {
    speaker: "Zikora",
    text: "And then… absolutely nothing happened. 😂\n\nWe exchanged contacts, but we were just acquaintances for months. We would see each other around, but there wasn’t really anything going on between us.",
  },
  {
    speaker: "David",
    text: "Until August 2024.",
  },
  {
    speaker: "Zikora",
    text: "I had posted a throwback picture with my friend Subomi for her birthday, and David replied, thanking God for my “glow up.”",
  },
  {
    speaker: "David",
    text: "I genuinely thought I was being nice.",
  },
  {
    speaker: "Zikora",
    text: "He was not. 😂\n\nNaturally, I had to correct him because there was nothing to “glow up” from. I was beautiful then, and I was beautiful now. So, that became my opportunity to teach him how to compliment a lady properly.",
  },
  {
    speaker: "David",
    text: "And somehow, I kept talking to her after that.",
  },
  {
    speaker: "Zikora",
    text: "And somehow, I kept replying.\n\nThat little exchange turned into regular conversations — texts, voice notes, random conversations that somehow never seemed to end. We just clicked. There wasn’t any pressure to impress each other or act a certain way. We were comfortable being ourselves from the beginning.",
  },
  {
    speaker: "David",
    text: "It was actually surprising how quickly we got comfortable with each other. Within a week, it felt like we’d been talking for much longer.",
  },
  {
    speaker: "Zikora",
    text: "We could talk about almost anything, and there was always something else to talk about. We were getting to know each other without really trying to.",
  },
  {
    speaker: "David",
    text: "A couple of weeks later, I asked her to be my girlfriend.",
  },
  {
    speaker: "Zikora",
    text: "And after giving it some serious thought…",
  },
  {
    speaker: "David",
    text: "She said yes.",
  },
  {
    speaker: "Zikora",
    text: "Eventually. 😂\n\nSince then, we’ve just been figuring things out together. We’ve learned a lot about each other, grown together, had plenty of laughs, and learned that being together is as much about friendship as it is about love.",
  },
  {
    speaker: "David",
    text: "And somehow, what started with a Toastmasters meeting and a questionable “glow up” comment has brought us here.",
  },
  {
    speaker: "Zikora",
    text: "Which neither of us saw coming at the time.",
  },
  {
    speaker: "Both",
    text: "And that’s our story — pretty simple, slightly unexpected, and very much ours.",
  },
] as const;

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
