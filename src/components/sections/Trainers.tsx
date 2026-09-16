import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { trainers, contact } from "@/data/gym";

export function Trainers() {
  return (
    <section id="trainers" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Personal Training"
            heading="Coached by people who care."
            body="Trainer profiles are being added as they're confirmed with the gym."
          />
          <CTAButton href={contact.whatsapp.href} variant="secondary" external>
            Ask About Trainers
          </CTAButton>
        </FadeIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <PlaceholderMedia
                label="Trainer portrait pending"
                category="Trainer"
                aspect="portrait"
                className="w-full"
              />
              <h3 className="mt-5 font-display text-xl uppercase tracking-wide text-bone">
                {trainer.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-voltage">
                {trainer.specialty}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{trainer.bio}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
