import { StatsCounter } from '../components/StatsCounter';
import { HeroSection } from '../components/sections/HeroSection';
import { AdvancedMarketTicker } from '../components/AdvancedMarketTicker';
import { TrustedPartnersSection } from '../components/sections/TrustedPartnersSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { VisionMissionSection } from '../components/sections/VisionMissionSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { MarketSection } from '../components/sections/MarketSection';
import { PriceCalculatorSection } from '../components/sections/PriceCalculatorSection';
import { FormsSection } from '../components/sections/FormsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CTASection } from '../components/sections/CTASection';

export const Home = () => (
  <>
    <AdvancedMarketTicker />
    <HeroSection />
    <HowItWorksSection />
    <VisionMissionSection />
    <MarketSection />
    <ProductsSection />
    <StatsCounter />
    <PriceCalculatorSection />
    <TrustedPartnersSection />
    <FormsSection />
    <TestimonialsSection />
    <CTASection />
  </>
);
