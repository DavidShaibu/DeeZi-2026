export const couple = {
  partnerOne: "Zikora",
  partnerTwo: "David",
  names: "Zikora & David",
  email: "hello@zikoraanddavid.com",
} as const;

/** Friday, 9 October 2026, 4:00pm WAT */
export const weddingDateIso = "2026-10-09T16:00:00+01:00";

export const wedding = {
  dateLabel: "Friday, 9 October 2026",
  dateLong: "Friday, October 9, 2026",
  timeLabel: "4:00 in the afternoon",
  city: "Huntsville",
  state: "Texas",
  country: "USA",
  venueName: "Huntsville",
  venueArea: "Huntsville, TX",
  mapsName: "Huntsville, TX",
  mapsAddress: "Ravenwood Village Drive, Huntsville, TX 77340",
} as const;

export const socialPreview = {
  title: "Zikora & David | 09.10.2026",
  description: `Wedding details for ${couple.names}. Join us in ${wedding.city} on ${wedding.dateLabel}.`,
  image: {
    url: "/images/og-preview-v2.jpg",
    width: 1200,
    height: 630,
    alt: `${couple.names}`,
  },
} as const;

export const navItems = [
  { href: "/", label: "Our Story" },
  { href: "/schedule", label: "Schedule" },
  { href: "/where-to-stay", label: "Where to Stay" },
  { href: "/registry", label: "Registry" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const schedule = [
  {
    id: "ceremony",
    date: "Friday, October 9, 2026",
    time: "2:00 PM",
    title: "Wedding Ceremony",
    description:
      "Join us at St. Thomas Catholic Church as we are married. The ceremony begins at 2:00 in the afternoon.",
    venue: "St. Thomas Catholic Church",
    addressLines: ["1323 16th St", "Huntsville, Texas, USA"],
    mapsAddress: "1323 16th St, Huntsville, TX",
    calendar: {
      title: "Zikora & David — Wedding Ceremony",
      start: "20261009T140000",
      end: "20261009T160000",
      details:
        "Ceremony at St. Thomas Catholic Church. Reception follows at 4:00 PM at Sky Blue Event Hall.",
    },
  },
  {
    id: "reception",
    date: "Friday, October 9, 2026",
    time: "4:00 PM",
    title: "Reception",
    description:
      "Celebrate with us at Sky Blue Event Hall after the ceremony. Reception begins at 4:00 in the afternoon.",
    venue: "Sky Blue Event Hall",
    addressLines: ["2514 Sam Houston Ave, Suite F", "Huntsville, Texas, USA"],
    mapsAddress: "2514 Sam Houston Ave Suite F, Huntsville, TX",
    calendar: {
      title: "Zikora & David — Reception",
      start: "20261009T160000",
      end: "20261009T210000",
      details:
        "Reception at Sky Blue Event Hall, 2514 Sam Houston Ave, Suite F, Huntsville, Texas.",
    },
  },
] as const;

export const dayNotes = {
  colors: "Burgundy and olive green",
  dressCode: "Cocktail elegance",
} as const;

export const rsvpFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdAFelBmuq0qIyOvgol8j7GdPoqfMgxALjJuv9-IJenMgTjOg/viewform?usp=sharing&ouid=105978498231273877918";

export const hotels = [
  {
    name: "Fairfield Inn & Suites by Marriott",
    area: "136 Ravenwood Village Drive",
    note: "Free hot breakfast, an outdoor pool, and a short drive from downtown Huntsville.",
    image: "/images/hotel-fairfield.jpg",
    mapsAddress: "136 Ravenwood Village Drive, Huntsville, TX 77340",
  },
  {
    name: "Hampton Inn & Suites",
    area: "120 Ravenwood Village Drive",
    note: "Right next door on Ravenwood Village Drive, with free breakfast and an outdoor pool.",
    image: "/images/hotel-hampton.jpg",
    mapsAddress: "120 Ravenwood Village Drive, Huntsville, TX 77340",
  },
  {
    name: "Comfort Inn",
    area: "3105 Montgomery Road",
    note: "Free breakfast, an outdoor pool, and a short drive from downtown Huntsville.",
    image: "/images/hotel-comfort.jpg",
    mapsAddress: "3105 Montgomery Road, Huntsville, TX 77340",
  },
  {
    name: "Huntsville Inn & Suites",
    area: "201 West Hill Park Circle",
    note: "Just off I-45, with free breakfast and an outdoor pool.",
    image: "/images/hotel-huntsville-inn.jpg",
    mapsAddress: "201 West Hill Park Circle, Huntsville, TX 77320",
  },
  {
    name: "Home2 Suites by Hilton",
    area: "199 Interstate 45 South",
    note: "All-suite rooms with kitchenettes, free breakfast, and a pool.",
    image: "/images/hotel-home2.jpg",
    mapsAddress: "199 Interstate 45 South, Huntsville, TX 77340",
  },
] as const;

export const registry = {
  hashtag: "#DeeZi26",
  usd: {
    accountName: "Chidalu Mozie",
    zelle: "8172333219",
  },
  naira: {
    bank: "GTBank",
    accountName: "Zikora Benedicta Mozie",
    accountNumber: "0478810470",
  },
} as const;

export const contacts = [
  {
    role: "Chief Bridesmaid",
    name: "Chidalu Mozie",
    phone: "+1 203 410-8158",
    tel: "+12034108158",
  },
  {
    role: "Family Representative",
    name: "Grace Shaibu",
    phone: "+234 902 848 7035",
    tel: "+2349028487035",
  },
] as const;

export const ourStory = [
  {
    speaker: "David",
    text: "We first met at Toastmasters in December 2023, when I had just joined (Toastmasters is a club where people practise & improve their public speaking). It was my first meeting, and Zikora was giving a speech. I remember listening to her speak and thinking, okay, I need to get her number. She had this confidence and grace about her, and I was definitely interested.\n\nSo, I got her number.",
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
    text: "I had posted a throwback picture with my very dear friend Subomi for her birthday, and David replied, thanking God for my “glow up.”",
  },
  {
    speaker: "David",
    text: "I genuinely thought I was being nice💀😂.",
  },
  {
    speaker: "Zikora",
    text: "Thinkers 😂…, I made sure to school him😌😂.",
  },
  {
    speaker: "David",
    text: "The lesson was well learnt 😂 You’ve been beautiful then, you’re beautiful now, and you’ll still be beautiful tomorrow and 100 years from now.\n\nBut somehow, we kept talking to after that.",
  },
  {
    speaker: "Zikora",
    text: "That little exchange turned into regular conversations - texts, voice notes, random conversations that somehow never seemed to end. We just clicked. There wasn’t any pressure to impress each other or act a certain way. We were comfortable being ourselves from the beginning.",
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
    photos: [
      {
        src: "/images/story-deck.jpg",
        alt: "Zikora and David on the deck",
        width: 1169,
        height: 1710,
      },
    ],
  },
  {
    speaker: "Zikora",
    text: "Since then, we’ve learned a lot more about each other, grown together, had plenty of laughs, and learned that being together is as much about friendship as it is about love.",
  },
  {
    speaker: "David",
    text: "And somehow, a Toastmasters meeting and a questionable “glow up” comment has brought us here. It’s been a lot of peace, shared happiness, and constantly pushing each other to be better.",
  },
  {
    speaker: "Zikora",
    text: "And I wouldn’t have it any other way. From a fellow Toastmaster to Chief Toaster, nice one 🙌🏾😂",
  },
] as const;

