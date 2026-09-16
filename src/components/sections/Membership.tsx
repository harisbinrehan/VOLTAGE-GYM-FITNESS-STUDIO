import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { membership, contact } from "@/data/gym";

export function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="absolute inset-0 voltage-grid" />
      <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full voltage-glow opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <p className="mb-4 font-display text-xs tracking-[0.3em] text-voltage uppercase">
            Membership
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
            {membership.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-smoke sm:text-lg">
            {membership.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4 border border-line bg-ink px-6 py-6 text-center">
            <span className="font-display text-sm uppercase tracking-[0.2em] text-smoke">
              Admission Fee
            </span>
            <span className="pulse-glow inline-flex items-center bg-voltage px-5 py-1.5 font-display text-base uppercase tracking-[0.1em] text-bone">
              {membership.admissionFee}
            </span>
          </div>

          <div className="mt-px grid gap-px overflow-hidden border border-t-0 border-line bg-line sm:grid-cols-3">
            {membership.plans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col items-center bg-charcoal px-6 py-10 text-center"
              >
                {plan.note && (
                  <span className="absolute right-3 top-3 border border-voltage/40 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.15em] text-voltage">
                    {plan.note}
                  </span>
                )}
                <p className="font-display text-sm uppercase tracking-[0.15em] text-bone">
                  {plan.name}
                </p>
                <p className="mt-6 font-display text-5xl text-bone">
                  {plan.price}
                  <span className="ml-2 align-top text-sm uppercase tracking-[0.15em] text-smoke">
                    {membership.currency}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10 flex flex-wrap justify-center gap-4">
          <CTAButton href={contact.whatsapp.href} size="lg" external>
            {membership.ctaLabel}
          </CTAButton>
          <CTAButton href={contact.phones[0].href} variant="secondary" size="lg" external>
            Call Voltage
          </CTAButton>
        </FadeIn>
      </div>
    </section>
  );
}
