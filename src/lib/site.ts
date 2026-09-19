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
  { href: "/where-to-stay", label: "Where to Stay" },
  { href: "/registry", label: "Registry" },
  { href: "/contact", label: "Contact Us" },
] as const;

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
] as const;

export const registry = {
  hashtag: "#DeeZi'26",
  bank: {
    name: "Navy Federal",
    accountName: "Chidalu Mozie",
    accountNumber: "7226546765",
    routingNumber: "256074974",
  },
  zelle: "8172333219",
} as const;

export const contacts = [
  {
    role: "Wedding Coordinator",
    name: "Chidalu Mozie",
    detail: "Chief Bridesmaid",
    phone: "+1 832 941-8841",
    tel: "+18329418841",
  },
  {
    role: "Family Representative",
    name: "Grace Shaibu",
    detail: "Groom's Family",
    phone: "+234 802 321 6384",
    tel: "+2348023216384",
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
    text: "Eventually. 😂",
  },
  {
    photos: [
      {
        src: "/images/story-friends.jpg",
        alt: "Zikora and David with friends",
        width: 1170,
        height: 1755,
      },
      {
        src: "/images/story-together.jpg",
        alt: "Zikora and David on the deck",
        width: 1170,
        height: 1560,
      },
    ],
  },
  {
    speaker: "Zikora",
    text: "Since then, we’ve just been figuring things out together. We’ve learned a lot about each other, grown together, had plenty of laughs, and learned that being together is as much about friendship as it is about love.",
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

