import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { ServicesSection } from "./components/ServicesSection";
import { PricingSection } from "./components/PricingSection";
import { ProcessSection } from "./components/ProcessSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <PricingSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
