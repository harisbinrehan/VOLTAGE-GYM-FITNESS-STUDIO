import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { FadeIn } from "@/components/ui/FadeIn";
import { gallery, contact } from "@/data/gym";

export function SocialFeed() {
  return (
    <section id="gallery" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Community" heading="Follow the Voltage" />
          <div className="flex gap-3">
            <a
              href={contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-line px-4 py-2 text-sm text-bone transition-colors hover:border-voltage hover:text-voltage"
            >
              <InstagramIcon className="h-4 w-4" /> Instagram
            </a>
            <a
              href={contact.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-line px-4 py-2 text-sm text-bone transition-colors hover:border-voltage hover:text-voltage"
            >
              <FacebookIcon className="h-4 w-4" /> Facebook
            </a>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {gallery.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <PlaceholderMedia
                label={item.caption}
                category={item.category}
                aspect="square"
                className="w-full"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
