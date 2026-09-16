import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import { buildLocalBusinessSchema } from "@/lib/schema";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltage GYM & Fitness Studio | Bahria Town Lahore",
  description:
    "Voltage GYM & Fitness Studio in Crystal Plaza, Bahria Town, Lahore — one-to-one personal training and strength coaching for every level.",
  keywords: [
    "Voltage Gym",
    "gym Bahria Town Lahore",
    "personal training Lahore",
    "fitness studio Bahria Town",
  ],
  openGraph: {
    title: "Voltage GYM & Fitness Studio | Bahria Town Lahore",
    description:
      "One-to-one personal training and strength coaching in Bahria Town, Lahore.",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const schema = buildLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${anton.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-bone">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
