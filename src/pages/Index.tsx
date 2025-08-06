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
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SocialProofCounters from "@/components/SocialProofCounters";
import UrgencyIndicators from "@/components/UrgencyIndicators";
import TrustBadges from "@/components/TrustBadges";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Social Proof - High up for credibility */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SocialProofCounters />
        </div>
      </section>
      
      {/* Urgency Indicators */}
      <section className="py-6 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <UrgencyIndicators />
        </div>
      </section>
      
      <DemoSection />
      <ServicesSection />
      <CalloutSection />
      <TimelineSection />
      <ProductGrid />
      <LimitedOffer />
      <StepsSection />
      <TestimonialsSection />
      
      {/* Trust Badges before FAQ */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <TrustBadges />
        </div>
      </section>
      
      <FAQSection />
      <StickyBottomBar />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
