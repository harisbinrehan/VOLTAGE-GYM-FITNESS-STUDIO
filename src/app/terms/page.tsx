import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { contact } from "@/data/gym";

export const metadata: Metadata = {
  title: "Terms | Voltage GYM & Fitness Studio",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-void px-5 pt-36 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl uppercase text-bone sm:text-5xl">
            Membership Terms
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-smoke">
            [ADD VERIFIED TERMS] — Voltage GYM & Fitness Studio has not published formal
            membership terms publicly. Replace this placeholder with the gym&rsquo;s actual
            membership agreement, cancellation policy, and facility rules before this page is
            linked for real use.
          </p>
          <p className="mt-6 text-sm text-smoke">
            Get current terms directly — contact{" "}
            <a href={contact.whatsapp.href} className="text-voltage">
              WhatsApp
            </a>{" "}
            or {contact.phones[0].number}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
