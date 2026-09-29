import Navbar from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Navbar";
import HeroSection from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/HeroSection";
import AboutSection from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/AboutSection";
import EcosystemOverview from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/EcosystemOverview";
import NewsSection from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/NewsSection";
import EcosystemDirectory from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/EcosystemDirectory";
import FAQSection from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/FAQSection";
import CTABanner from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/CTABanner";
import Footer from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EcosystemOverview />
      <NewsSection />
      <EcosystemDirectory />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
