import Navbar from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Navbar";
import Footer from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Footer";
import CTABanner from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/CTABanner";

import HeroSection from "@/components/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/HeroSection";
import PresidentMessage from "@/components/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/PresidentMessage";
import PartnersSlider from "@/components/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/PartnersSlider";
import BrandPositioning from "@/components/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/BrandPositioning";
import VisionMission from "@/components/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/VisionMission";
import EcosystemModels from "@/components/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/EcosystemModels";
import HistoryTimeline from "@/components/sites/matrixholding-com-vn-82229dd2/gioi-thieu-1b3d4f5g/HistoryTimeline";

export default function GioiThieuPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PresidentMessage />
      <PartnersSlider />
      <BrandPositioning />
      <VisionMission />
      <EcosystemModels />
      <HistoryTimeline />
      <CTABanner />
      <Footer />
    </main>
  );
}
