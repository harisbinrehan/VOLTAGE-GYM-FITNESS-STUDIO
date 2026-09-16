import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 font-display text-xs tracking-[0.3em] uppercase",
            tone === "light" ? "text-voltage" : "text-voltage-dim"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl leading-[0.95] uppercase text-balance sm:text-5xl md:text-6xl",
          tone === "light" ? "text-bone" : "text-void"
        )}
      >
        {heading}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-smoke" : "text-ink/70"
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
