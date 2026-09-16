import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { GalleryVideo } from "@/components/ui/GalleryVideo";
import { FadeIn } from "@/components/ui/FadeIn";
import { gallery, contact, brandAssets } from "@/data/gym";

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

        {brandAssets.verified && (
          <FadeIn delay={0.1} className="mt-10 border border-line px-6 py-8 text-center sm:px-10">
            <p className="text-sm text-smoke">{brandAssets.hashtagPrompt}</p>
            <p className="mt-2 font-display text-3xl uppercase tracking-wide text-voltage sm:text-4xl">
              {brandAssets.hashtag}
            </p>
          </FadeIn>
        )}

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {gallery.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              {item.video ? (
                <GalleryVideo
                  src={item.video}
                  label={item.caption}
                  category={item.category}
                  className="w-full"
                />
              ) : (
                <PlaceholderMedia
                  label={item.caption}
                  category={item.category}
                  aspect="square"
                  className="w-full"
                />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
