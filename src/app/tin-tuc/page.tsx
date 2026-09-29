import Navbar from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Navbar";
import Footer from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/Footer";
import CTABanner from "@/components/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/CTABanner";

import HeroSection from "@/components/sites/matrixholding-com-vn-82229dd2/tin-tuc-3d5f6g7h/HeroSection";
import FeaturedNews from "@/components/sites/matrixholding-com-vn-82229dd2/tin-tuc-3d5f6g7h/FeaturedNews";
import NewsGrid from "@/components/sites/matrixholding-com-vn-82229dd2/tin-tuc-3d5f6g7h/NewsGrid";

export default function TinTucPage() {
  return (
    <main>
      <Navbar theme="light" />
      <HeroSection />
      <FeaturedNews />
      <NewsGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}
