"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { CTAButton } from "@/components/ui/CTAButton";

const links = [
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#training", label: "Training" },
  { href: "#trainers", label: "Trainers" },
  { href: "#membership", label: "Membership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || open ? "bg-void/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide text-bone">
            <span className="text-voltage">V</span>OLTAGE
          </span>
          <span className="hidden text-[0.6rem] tracking-[0.2em] text-smoke uppercase sm:inline">
            Gym &amp; Fitness Studio
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-xs tracking-[0.15em] uppercase text-smoke transition-colors hover:text-voltage"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CTAButton href="#membership" size="md">
            Join Now
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-bone lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-void px-5 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-lg uppercase tracking-wide text-bone hover:text-voltage"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <CTAButton href="#membership" size="lg" className="mt-6 w-full">
            Join Now
          </CTAButton>
        </div>
      )}
    </header>
  );
}
