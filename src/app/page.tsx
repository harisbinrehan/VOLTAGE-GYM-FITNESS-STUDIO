import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyVoltage } from "@/components/sections/WhyVoltage";
import { Facilities } from "@/components/sections/Facilities";
import { Training } from "@/components/sections/Training";
import { Trainers } from "@/components/sections/Trainers";
import { Testimonials } from "@/components/sections/Testimonials";
import { Membership } from "@/components/sections/Membership";
import { SocialFeed } from "@/components/sections/SocialFeed";
import { Location } from "@/components/sections/Location";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyVoltage />
        <Facilities />
        <Training />
        <Trainers />
        <Testimonials />
        <Membership />
        <SocialFeed />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
