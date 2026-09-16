import { Camera } from "lucide-react";
import { cn } from "@/lib/cn";

type PlaceholderMediaProps = {
  label: string;
  category?: string;
  className?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
};

const aspectClass: Record<NonNullable<PlaceholderMediaProps["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/**
 * Branded stand-in for unverified/unavailable photography. Intentionally
 * legible as "real photo goes here" rather than a generic broken-image
 * state, so the placeholder itself reads as a deliberate design choice.
 */
export function PlaceholderMedia({
  label,
  category,
  className,
  aspect = "landscape",
}: PlaceholderMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-charcoal border border-line",
        aspectClass[aspect],
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 voltage-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-void/80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <Camera className="h-6 w-6 text-smoke" strokeWidth={1.25} aria-hidden />
        {category && (
          <span className="font-display text-xs tracking-[0.25em] text-voltage uppercase">
            {category}
          </span>
        )}
        <span className="max-w-[80%] text-xs text-smoke">{label}</span>
      </div>
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-smoke/40" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-smoke/40" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-smoke/40" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-smoke/40" />
    </div>
  );
}
