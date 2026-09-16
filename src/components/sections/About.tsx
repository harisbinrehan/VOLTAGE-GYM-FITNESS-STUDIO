import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { about } from "@/data/gym";

export function About() {
  return (
    <section id="about" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <FadeIn>
          <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-smoke sm:text-lg">
                {p}
              </p>
            ))}
          </div>
          {!about.verified && (
            <p className="mt-6 border-l-2 border-voltage/60 pl-4 text-xs uppercase tracking-wide text-smoke/70">
              {about.note}
            </p>
          )}
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-line">
            <Image
              src="/images/about-gym-floor.jpg"
              alt="Training floor inside Voltage GYM & Fitness Studio"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
