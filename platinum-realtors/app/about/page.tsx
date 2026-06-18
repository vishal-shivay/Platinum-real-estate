import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurMission from "@/components/about/OurMission";
import OurVision from "@/components/about/OurVision";
import AboutMe from "@/components/about/AboutMe";

export default function AboutPage() {
  return (
    <main>
      <div style={{ position: "relative" }}>
        <Navbar />
        <AboutHero />
      </div>
      <AboutIntro />
      <WhyChooseUs />
      <OurMission />
      <OurVision />
      <AboutMe />
      <Footer />
    </main>
  );
}
