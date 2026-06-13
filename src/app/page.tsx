import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Classes from "@/components/Classes";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Stats />
      <Ticker />
      <About />
      <Facilities />
      <Ticker dark />
      <Classes />
      <Trainers />
      <Membership />
      <Testimonials />
      <CTA />
      <Booking />
      <Footer />
    </main>
  );
}
