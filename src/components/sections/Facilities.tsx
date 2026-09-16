import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { FadeIn } from "@/components/ui/FadeIn";
import { facilities } from "@/data/gym";

export function Facilities() {
  return (
    <section id="facilities" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="The Space"
            heading="Facilities"
            body="A closer look at what Voltage offers on the floor."
          />
        </FadeIn>
      </div>

      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-4 pl-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] pr-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] sm:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] sm:pr-[max(2rem,calc((100vw-80rem)/2+2rem))] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {facilities.map((facility, i) => (
          <FadeIn
            key={facility.name}
            delay={i * 0.08}
            className="w-[78vw] shrink-0 snap-start sm:w-[360px]"
          >
            <PlaceholderMedia
              label={facility.verified ? facility.name : "Facility photo pending"}
              category="Facility"
              aspect="portrait"
              className="w-full"
            />
            <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-bone">
              {facility.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-smoke">{facility.description}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
