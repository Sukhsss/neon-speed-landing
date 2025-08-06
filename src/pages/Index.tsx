import HeroSection from "@/components/HeroSection";
import StickyBottomBar from "@/components/StickyBottomBar";
import DemoSection from "@/components/DemoSection";
import ServicesSection from "@/components/ServicesSection";
import CalloutSection from "@/components/CalloutSection";
import TimelineSection from "@/components/TimelineSection";
import ProductGrid from "@/components/ProductGrid";
import LimitedOffer from "@/components/LimitedOffer";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DemoSection />
      <ServicesSection />
      <CalloutSection />
      <TimelineSection />
      <ProductGrid />
      <LimitedOffer />
      <StepsSection />
      <TestimonialsSection />
      <FAQSection />
      <StickyBottomBar />
    </div>
  );
};

export default Index;
