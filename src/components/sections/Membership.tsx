import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { membership, contact } from "@/data/gym";

export function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden bg-voltage py-24 sm:py-32">
      <div className="absolute inset-0 voltage-grid opacity-30" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <FadeIn>
          <p className="mb-4 font-display text-xs tracking-[0.3em] text-void/70 uppercase">
            Membership
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-void sm:text-6xl">
            {membership.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-void/80 sm:text-lg">
            {membership.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton href={contact.whatsapp.href} variant="dark" size="lg" external>
              {membership.ctaLabel}
            </CTAButton>
            <CTAButton href={contact.phones[0].href} variant="darkOutline" size="lg" external>
              Call Voltage
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
