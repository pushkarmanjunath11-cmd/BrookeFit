import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import Classes from "@/components/Classes";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Facilities />
      <Classes />
      <Trainers />
      <Membership />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
