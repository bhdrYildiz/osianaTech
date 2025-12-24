import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import OurTech from "@/components/sections/OurTech";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/motion/Marquee";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <OurTech />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}

