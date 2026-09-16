import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { contact } from "@/data/gym";

export const metadata: Metadata = {
  title: "Privacy Policy | Voltage GYM & Fitness Studio",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-void px-5 pt-36 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl uppercase text-bone sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-smoke">
            [ADD VERIFIED PRIVACY POLICY] — Voltage GYM & Fitness Studio has not published a
            formal privacy policy publicly. Replace this placeholder with the gym&rsquo;s actual
            policy covering how member data (enquiries, WhatsApp messages, membership records) is
            collected, used, and stored, before this page is linked for real use.
          </p>
          <p className="mt-6 text-sm text-smoke">
            Questions in the meantime — contact{" "}
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
