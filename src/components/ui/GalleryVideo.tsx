"use client";

import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/cn";

type GalleryVideoProps = {
  src: string;
  label: string;
  category?: string;
  className?: string;
  onOpen?: () => void;
};

export function GalleryVideo({ src, label, category, className, onOpen }: GalleryVideoProps) {
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
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Play video: ${label}`}
      className={cn(
        "group relative aspect-square overflow-hidden bg-charcoal border border-line",
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        className="h-full w-full object-cover"
      />
      {category && (
        <span className="pointer-events-none absolute left-3 top-3 font-display text-[0.65rem] tracking-[0.2em] text-voltage uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          {category}
        </span>
      )}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-void/10 transition-colors group-hover:bg-void/30">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/50 bg-void/60 text-bone backdrop-blur-sm">
          <Play className="h-4 w-4 fill-current" />
        </span>
      </span>
    </button>
  );
}
