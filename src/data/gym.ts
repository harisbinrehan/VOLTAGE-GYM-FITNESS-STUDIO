/**
 * Central content store for Voltage GYM & Fitness Studio.
 *
 * VERIFICATION STATUS
 * --------------------
 * Facebook (facebook.com/VoltageGym.official) and Instagram (@voltage_gym) are
 * login-gated and could not be scraped directly, so their photos, bio copy,
 * trainer names, and reviews could not be pulled into this file. Everything
 * below marked `verified: true` was cross-confirmed across public listings
 * (Waze, search-indexed directory snippets citing the FB page, the gym's own
 * former site voltagegymfitness.com). Everything marked `verified: false` is
 * a structural placeholder — swap it for real content before launch.
 *
 * Update this file only — UI components read from here, nothing is hardcoded.
 */

export const gymMeta = {
  name: "Voltage GYM & Fitness Studio",
  shortName: "VOLTAGE",
  legalCity: "Bahria Town, Lahore",
  verified: true,
};

// Confirmed via the gym's own logo/brand asset: red checkmark-V mark on a
// dark charcoal textured background, white/cream wordmark, "Gym & Fitness
// Studio" script tagline, and the community hashtag below.
export const brandAssets = {
  hashtag: "#voltageGym",
  hashtagPrompt: "Use this hashtag to become a part of our community",
  verified: true,
};

export const contact = {
  address: {
    line1: "2nd Floor, Crystal Plaza",
    line2: "DD Block, Sector D, Bahria Town",
    city: "Lahore, Pakistan",
    full: "2nd Floor, Crystal Plaza, DD Block, Sector D, Bahria Town, Lahore, Pakistan",
    mapsQuery: "Voltage Gym and Fitness Studio Bahria Town Lahore",
    verified: true,
  },
  phones: [
    { number: "0331 8758243", href: "tel:+923318758243", verified: true },
    { number: "0321 4738915", href: "tel:+923214738915", verified: true },
  ],
  // Mobile number found associated with the gym. WhatsApp-enablement has not
  // been directly confirmed through an in-app reply from the business.
  whatsapp: {
    number: "0331 8758243",
    href: "https://wa.me/923318758243",
    verified: false,
  },
  email: { address: "info@voltagegym.com", verified: false },
  social: {
    facebook: "https://www.facebook.com/VoltageGym.official/",
    instagram: "https://www.instagram.com/voltage_gym/",
    verified: true,
  },
} as const;

export const hours = {
  rows: [
    { days: "Monday – Saturday", time: "7:00 AM – 12:00 PM", verified: true },
    { days: "Sunday", time: "Closed", verified: true },
  ],
};

// No official tagline could be confirmed from the FB page. This is
// original strategic copywriting for Voltage, not a quoted business claim.
export const brandCopy = {
  heroEyebrow: "BAHRIA TOWN, LAHORE",
  heroHeadline: ["POWER YOUR", "POTENTIAL."],
  heroSub:
    "A training ground for people who show up. Strength, conditioning, and one-to-one coaching in Bahria Town — built for real, measurable progress.",
  heroCtaPrimary: "Join Voltage",
  heroCtaSecondary: "Book a Visit",
};

// Services line is corroborated by public directory copy referencing the FB
// page: one-to-one personal training, muscle-strengthening work, and
// fitness consultation for members ranging from beginners to advanced.
export const about = {
  verified: false,
  eyebrow: "WHO WE ARE",
  heading: "Built for people who show up.",
  paragraphs: [
    "Voltage GYM & Fitness Studio operates out of Crystal Plaza in Bahria Town, Lahore — a training space built around one-to-one coaching rather than crowded floors and guesswork.",
    "The gym's publicly listed focus is personal training: strength and muscle-conditioning work delivered through direct, individual coaching — for people training for the first time and for people who've been at it for years.",
  ],
  note: "[ADD VERIFIED BRAND STORY — pull from official About section once accessible]",
};

export type Facility = {
  name: string;
  description: string;
  verified: boolean;
};

// Only the two service lines corroborated by indexed public copy are listed.
// Everything else (cardio zone, functional area, changing rooms, etc.) is a
// placeholder slot — do not publish until confirmed on-site or via the FB page.
export const facilities: Facility[] = [
  {
    name: "Personal Training",
    description:
      "One-to-one coaching — programming, form, and accountability built around your goals.",
    verified: true,
  },
  {
    name: "Strength & Conditioning",
    description: "Muscle-strengthening training for beginners through advanced lifters.",
    verified: true,
  },
  {
    name: "[ADD VERIFIED FACILITY]",
    description: "[ADD DESCRIPTION — e.g. cardio zone, free weights, functional area]",
    verified: false,
  },
  {
    name: "[ADD VERIFIED FACILITY]",
    description: "[ADD DESCRIPTION]",
    verified: false,
  },
];

export type Program = {
  name: string;
  who: string;
  expect: string;
  verified: boolean;
};

export const programs: Program[] = [
  {
    name: "Personal Training",
    who: "Anyone who wants direct coaching instead of a self-guided program.",
    expect: "A trainer building your program, correcting your form, and tracking progress session to session.",
    verified: true,
  },
  {
    name: "[ADD VERIFIED PROGRAM]",
    who: "[ADD AUDIENCE]",
    expect: "[ADD WHAT MEMBERS CAN EXPECT]",
    verified: false,
  },
  {
    name: "[ADD VERIFIED PROGRAM]",
    who: "[ADD AUDIENCE]",
    expect: "[ADD WHAT MEMBERS CAN EXPECT]",
    verified: false,
  },
];

export type Trainer = {
  name: string;
  specialty: string;
  bio: string;
  verified: boolean;
};

// No trainer names/photos could be verified through the gated FB/IG pages.
// Structural placeholders only — replace before launch.
export const trainers: Trainer[] = [
  {
    name: "[ADD TRAINER NAME]",
    specialty: "[ADD SPECIALTY]",
    bio: "[ADD VERIFIED BIO / CERTIFICATIONS]",
    verified: false,
  },
  {
    name: "[ADD TRAINER NAME]",
    specialty: "[ADD SPECIALTY]",
    bio: "[ADD VERIFIED BIO / CERTIFICATIONS]",
    verified: false,
  },
  {
    name: "[ADD TRAINER NAME]",
    specialty: "[ADD SPECIALTY]",
    bio: "[ADD VERIFIED BIO / CERTIFICATIONS]",
    verified: false,
  },
];

export type Testimonial = {
  name: string;
  quote: string;
  result: string;
  verified: boolean;
};

// No individually attributable reviews could be pulled from the gated page.
// Public aggregate only: an 86% recommend rate from 6 Facebook reviews.
export const testimonialAggregate = {
  recommendPercent: 86,
  reviewCount: 6,
  source: "Facebook",
  verified: true,
};

export const testimonials: Testimonial[] = [
  {
    name: "[ADD MEMBER NAME]",
    quote: "[ADD VERIFIED TESTIMONIAL QUOTE]",
    result: "[ADD RESULT / GOAL]",
    verified: false,
  },
  {
    name: "[ADD MEMBER NAME]",
    quote: "[ADD VERIFIED TESTIMONIAL QUOTE]",
    result: "[ADD RESULT / GOAL]",
    verified: false,
  },
];

export const membership = {
  verified: false,
  heading: "Membership built around you.",
  body:
    "Voltage has not published membership pricing publicly. Get current rates and package options directly from the team.",
  ctaLabel: "Ask About Membership",
};

export const galleryCategories = [
  "Gym",
  "Training",
  "Community",
  "Trainers",
  "Events",
] as const;

export type GalleryItem = {
  category: (typeof galleryCategories)[number];
  caption: string;
  verified: boolean;
  video?: string;
};

// Real clips supplied directly by the gym owner (downloaded from Voltage's
// own Facebook/Instagram, not scraped) — dropped in as-is, original crop.
export const gallery: GalleryItem[] = [
  {
    category: "Training",
    caption: "Assisted training session at Voltage",
    verified: true,
    video: "/videos/gallery/gallery-1.mp4",
  },
  {
    category: "Gym",
    caption: "Cardio floor at Voltage",
    verified: true,
    video: "/videos/gallery/gallery-2.mp4",
  },
  {
    category: "Gym",
    caption: "Voltage GYM & Fitness Studio signage",
    verified: true,
    video: "/videos/gallery/gallery-3.mp4",
  },
  {
    category: "Training",
    caption: "Dumbbell training at Voltage",
    verified: true,
    video: "/videos/gallery/gallery-4.mp4",
  },
  { category: "Trainers", caption: "[ADD TRAINER PHOTO]", verified: false },
  { category: "Events", caption: "[ADD EVENT PHOTO]", verified: false },
];
