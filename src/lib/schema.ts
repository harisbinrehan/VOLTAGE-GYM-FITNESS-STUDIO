import { contact, gymMeta } from "@/data/gym";

const verifiedHours: { days: string[]; open: string; close: string }[] = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    open: "07:00",
    close: "12:00",
  },
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
