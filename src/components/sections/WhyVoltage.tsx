import { Zap, Target, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const pillars = [
  {
    icon: Zap,
    title: "One-to-One Coaching",
    body: "Training built around direct, individual coaching — not a crowded floor left to figure it out alone.",
  },
  {
    icon: Target,
    title: "Every Level Welcome",
    body: "From first-time gym-goers to advanced lifters — programming meets you where you are.",
  },
  {
    icon: MapPin,
    title: "Bahria Town, Lahore",
    body: "Based in Crystal Plaza, Sector D — easy to reach, easy to make part of your routine.",
  },
];

export function WhyVoltage() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Voltage"
            heading="More than a workout."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.1} className="bg-ink p-8 sm:p-10">
              <Icon className="h-6 w-6 text-voltage" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-6 font-display text-xl uppercase tracking-wide text-bone">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
