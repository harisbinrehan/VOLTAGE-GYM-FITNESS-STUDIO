import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { membership, contact } from "@/data/gym";

export function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="absolute inset-0 voltage-grid" />
      <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full voltage-glow opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <FadeIn>
          <p className="mb-4 font-display text-xs tracking-[0.3em] text-voltage uppercase">
            Membership
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
            {membership.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-smoke sm:text-lg">
            {membership.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton href={contact.whatsapp.href} size="lg" external>
              {membership.ctaLabel}
            </CTAButton>
            <CTAButton href={contact.phones[0].href} variant="secondary" size="lg" external>
              Call Voltage
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
