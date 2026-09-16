import { contact, gymMeta } from "@/data/gym";

const verifiedHours: { days: string[]; open: string; close: string }[] = [
  { days: ["Monday", "Tuesday", "Wednesday"], open: "07:00", close: "23:30" },
  { days: ["Thursday"], open: "07:00", close: "23:00" },
  { days: ["Friday"], open: "07:00", close: "23:30" },
];

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: gymMeta.name,
    telephone: contact.phones.map((p) => p.href.replace("tel:", "")),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    sameAs: [contact.social.facebook, contact.social.instagram],
    openingHoursSpecification: verifiedHours.flatMap((row) =>
      row.days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}`,
        opens: row.open,
        closes: row.close,
      }))
    ),
  };
}
