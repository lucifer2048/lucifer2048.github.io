import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PortfolioAgent from "@/components/PortfolioAgent";
import DebugHUD from "@/components/DebugHUD";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <DebugHUD />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <PortfolioAgent />
      <Footer />
    </>
  );
}


