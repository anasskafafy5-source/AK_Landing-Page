import AboutSection from "@/components/about-section";
import FAQSection from "@/components/faq-section";
import HeroContainer from "@/components/HeroSection/HeroContainer";
import PricingSection from "@/components/pricing-section";
import ProductShowcaseSection from "@/components/product-showcase";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import TrustedContainer from "@/components/TrustedSection/TrustedContainer";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <TrustedContainer />
      <ServicesSection />
      <ProductShowcaseSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
