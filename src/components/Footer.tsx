import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { contact, hours } from "@/data/gym";

const nav = [
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#training", label: "Training" },
  { href: "#trainers", label: "Trainers" },
  { href: "#membership", label: "Membership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-void">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl tracking-wide text-bone">
              <span className="text-voltage">V</span>OLTAGE
            </p>
            <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-smoke uppercase">
              Gym &amp; Fitness Studio
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke">
              Voltage GYM &amp; Fitness Studio — a training ground for people who show up,
              in Bahria Town, Lahore.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voltage on Instagram"
                className="text-smoke hover:text-voltage"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voltage on Facebook"
                className="text-smoke hover:text-voltage"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-smoke">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-bone hover:text-voltage">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-smoke">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="text-bone">{contact.address.line1}</li>
              <li className="text-bone">{contact.address.line2}</li>
              <li className="text-smoke">{contact.address.city}</li>
              {contact.phones.map((p) => (
                <li key={p.number}>
                  <a href={p.href} className="text-bone hover:text-voltage">
                    {p.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-smoke">Hours</p>
            <ul className="mt-5 space-y-2 text-sm">
              {hours.rows.map((row) => (
                <li key={row.days} className="text-smoke">
                  <span className="text-bone">{row.days}</span>
                  <br />
                  {row.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-smoke sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Voltage GYM &amp; Fitness Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-voltage">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-voltage">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
