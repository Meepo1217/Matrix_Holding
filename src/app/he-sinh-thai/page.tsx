import Navbar from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Navbar";
import Footer from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Footer";
import CTABanner from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/CTABanner";

import HeroSection from "@/components/sites/matrixholding-com-vn-82229dd2/he-sinh-thai-2c4e5g6h/HeroSection";
import EcosystemDiagram from "@/components/sites/matrixholding-com-vn-82229dd2/he-sinh-thai-2c4e5g6h/EcosystemDiagram";
import EcosystemCards from "@/components/sites/matrixholding-com-vn-82229dd2/he-sinh-thai-2c4e5g6h/EcosystemCards";

export default function HeSinhThaiPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EcosystemDiagram />
      <EcosystemCards />
      <CTABanner />
      <Footer />
    </main>
  );
}
