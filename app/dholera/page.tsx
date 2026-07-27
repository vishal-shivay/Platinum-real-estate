import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DholeraHero from "@/components/dholera/DholeraHero";
import DholeraPlots from "@/components/dholera/DholeraPlots";
import DholeraEcosystem from "@/components/dholera/DholeraEcosystem";
import DholeraBanner from "@/components/dholera/DholeraBanner";
import DholeraMilestone from "@/components/dholera/DholeraMilestone";
import DholeraProperties from "@/components/dholera/DholeraProperties";

export const metadata = {
  title: "Dholera | Platinum Realtors",
  description: "Explore residential and industrial plots in Dholera SIR — India's first smart city project.",
};

export default function DholeraPage() {
  return (
    <>
      <Navbar />
      <DholeraHero />
      <DholeraPlots />
      <DholeraEcosystem />
      <DholeraBanner />
      <DholeraMilestone />
      <DholeraProperties />
      <Footer />
    </>
  );
}
