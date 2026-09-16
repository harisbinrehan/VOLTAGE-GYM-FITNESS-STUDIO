"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { brandCopy } from "@/data/gym";

const line = {
  hidden: { y: "100%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// Background footage is a licensed stock placeholder (Pexels License — free
// for commercial use) until real Voltage gym-floor video is supplied.
// Swap the file at /public/videos/hero-training.mp4 for real footage later.
const HERO_VIDEO_SRC = "/videos/hero-training.mp4";

export function Hero() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlayVideo(!reducedMotion.matches);
    update();
    reducedMotion.addEventListener("change", update);
    return () => reducedMotion.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-void">
      {playVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 voltage-grid" />
      <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full voltage-glow opacity-20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-28 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2.5 border border-bone/20 bg-void/50 px-3.5 py-1.5 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-voltage" />
          <span className="font-display text-xs tracking-[0.3em] text-bone uppercase">
            {brandCopy.heroEyebrow}
          </span>
        </motion.div>

        <h1 className="font-display text-[16vw] leading-[1.05] uppercase text-bone sm:text-[9rem] md:text-[10rem] lg:text-[11rem]">
          {brandCopy.heroHeadline.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                custom={i}
                initial="hidden"
                animate="show"
                variants={line}
                className="block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-smoke sm:text-lg">
            {brandCopy.heroSub}
          </p>

          <div className="flex flex-wrap gap-3">
            <CTAButton href="#membership" size="lg">
              {brandCopy.heroCtaPrimary}
            </CTAButton>
            <CTAButton href="#contact" variant="secondary" size="lg">
              {brandCopy.heroCtaSecondary}
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
