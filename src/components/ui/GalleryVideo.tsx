"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type GalleryVideoProps = {
  src: string;
  label: string;
  category?: string;
  className?: string;
};

export function GalleryVideo({ src, label, category, className }: GalleryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn("relative aspect-square overflow-hidden bg-charcoal border border-line", className)}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      {category && (
        <span className="absolute left-3 top-3 font-display text-[0.65rem] tracking-[0.2em] text-voltage uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          {category}
        </span>
      )}
    </div>
  );
}
