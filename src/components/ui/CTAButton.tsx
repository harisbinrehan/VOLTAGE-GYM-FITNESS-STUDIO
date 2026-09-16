import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Magnetic } from "@/components/ui/Magnetic";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 font-display uppercase tracking-[0.08em] transition-transform duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-voltage active:scale-[0.98]";

const variants: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary: "bg-voltage text-bone hover:bg-voltage-dim",
  secondary: "bg-transparent text-bone border border-bone/40 hover:border-voltage hover:text-voltage",
  ghost: "bg-transparent text-bone hover:text-voltage",
};

const sizes: Record<NonNullable<CTAButtonProps["size"]>, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
  onClick,
}: CTAButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <Magnetic>
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          onClick={onClick}
        >
          {children}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    </Magnetic>
  );
}
