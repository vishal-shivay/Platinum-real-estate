import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EliteLocations from "@/components/EliteLocations";
import OurServices from "@/components/OurServices";
import WhyUs from "@/components/WhyUs";
import ReadySection from "@/components/ReadySection";
import MortgageCalculator from "@/components/MortgageCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div style={{ position: "relative" }}>
        <Navbar />
        <HeroSection />
      </div>
      <EliteLocations />
      <OurServices />
      <WhyUs />
      <ReadySection />
      <MortgageCalculator />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
