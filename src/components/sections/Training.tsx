import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { programs } from "@/data/gym";

export function Training() {
  return (
    <section id="training" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Programs"
            heading="Training that fits the goal."
            body="Each program is coached, not just scheduled."
          />
        </FadeIn>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {programs.map((program, i) => (
            <FadeIn key={program.name} delay={i * 0.06}>
              <div className="group grid gap-3 py-8 sm:grid-cols-[1fr_1.4fr_1.4fr_auto] sm:items-center sm:gap-8">
                <h3 className="font-display text-2xl uppercase tracking-wide text-bone sm:text-3xl">
                  {program.name}
                </h3>
                <p className="text-sm text-smoke">
                  <span className="text-bone/70">For: </span>
                  {program.who}
                </p>
                <p className="text-sm text-smoke">
                  <span className="text-bone/70">Expect: </span>
                  {program.expect}
                </p>
                <ArrowUpRight
                  className="hidden h-6 w-6 shrink-0 text-smoke transition-colors group-hover:text-voltage sm:block"
                  aria-hidden
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
