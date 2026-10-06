import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Products from "@/components/sections/Products";
import Capacity from "@/components/sections/Capacity";
import Process from "@/components/sections/Process";
import Partners from "@/components/sections/Partners";
import Workflow from "@/components/sections/Workflow";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Products />
      <Capacity />
      <Process />
      <Partners />
      <Workflow />
      <Contact />
      <Footer />
    </main>
  );
}
