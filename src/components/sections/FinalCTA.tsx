import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { contact } from "@/data/gym";

export function FinalCTA() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.address.mapsQuery
  )}`;

  return (
    <section className="relative overflow-hidden bg-void py-28 sm:py-36">
      <div className="absolute inset-0 voltage-grid" />
      <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full voltage-glow opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <FadeIn>
          <h2 className="font-display text-5xl uppercase leading-[0.95] text-bone sm:text-7xl">
            Ready to
            <br />
            power up?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-smoke sm:text-lg">
            Bahria Town&rsquo;s training ground for people who show up. Come see it for yourself.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton href={contact.whatsapp.href} size="lg" external>
              WhatsApp Us
            </CTAButton>
            <CTAButton href={mapsHref} variant="secondary" size="lg" external>
              Get Directions
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
