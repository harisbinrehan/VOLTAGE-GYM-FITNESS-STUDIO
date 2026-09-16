import { MapPin, Phone, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { contact, hours } from "@/data/gym";

export function Location() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.address.mapsQuery
  )}`;

  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <FadeIn>
          <SectionHeading eyebrow="Visit" heading="Find Voltage" />

          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 shrink-0 text-voltage" aria-hidden />
              <div>
                <p className="text-bone">{contact.address.line1}</p>
                <p className="text-bone">{contact.address.line2}</p>
                <p className="text-smoke">{contact.address.city}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-5 w-5 shrink-0 text-voltage" aria-hidden />
              <div className="space-y-1">
                {contact.phones.map((p) => (
                  <a key={p.number} href={p.href} className="block text-bone hover:text-voltage">
                    {p.number}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-5 w-5 shrink-0 text-voltage" aria-hidden />
              <div className="space-y-1">
                {hours.rows.map((row) => (
                  <p key={row.days} className="text-sm text-smoke">
                    <span className="text-bone">{row.days}: </span>
                    {row.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href={mapsHref} external>
              Get Directions
            </CTAButton>
            <CTAButton href={contact.whatsapp.href} variant="secondary" external>
              WhatsApp Us
            </CTAButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="h-full min-h-[360px] w-full overflow-hidden border border-line">
            <iframe
              title="Voltage GYM & Fitness Studio location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                contact.address.mapsQuery
              )}&output=embed`}
              className="h-full w-full min-h-[360px] grayscale invert-[0.92] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
