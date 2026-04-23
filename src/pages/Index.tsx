import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AnalyseFluxSection from "@/components/AnalyseFluxSection";
import PartnersSection from "@/components/PartnersSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AdvantagesSection />
    <HowItWorksSection />
    <AnalyseFluxSection />
    <PartnersSection />
    <GallerySection />
    <ContactSection />
    <FooterSection />
  </div>
);

export default Index;
