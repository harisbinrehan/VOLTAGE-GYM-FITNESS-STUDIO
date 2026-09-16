import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials, testimonialAggregate } from "@/data/gym";

export function Testimonials() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl uppercase leading-tight text-bone sm:text-5xl">
            Real people. Real work. Real results.
          </h2>
          {testimonialAggregate.verified && (
            <div className="mt-6 inline-flex items-center gap-2 border border-line px-4 py-2 text-sm text-smoke">
              <Star className="h-4 w-4 fill-voltage text-voltage" aria-hidden />
              <span className="text-bone">{testimonialAggregate.recommendPercent}% recommend</span>
              <span>
                · {testimonialAggregate.reviewCount} reviews on {testimonialAggregate.source}
              </span>
            </div>
          )}
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <FadeIn
              key={i}
              delay={i * 0.08}
              className="border border-line bg-void p-8"
            >
              <p className="text-lg leading-relaxed text-bone">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-display text-sm uppercase tracking-wide text-smoke">
                  {t.name}
                </span>
                <span className="text-xs uppercase tracking-wide text-voltage">{t.result}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
