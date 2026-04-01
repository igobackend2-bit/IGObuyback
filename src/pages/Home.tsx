import { StatsCounter } from '../components/StatsCounter';
import { HeroSection } from '../components/sections/HeroSection';
import { AdvancedMarketTicker } from '../components/AdvancedMarketTicker';
import { TrustedPartnersSection } from '../components/sections/TrustedPartnersSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { MarketSection } from '../components/sections/MarketSection';
import { FormsSection } from '../components/sections/FormsSection';
import { LogisticsSection } from '../components/sections/LogisticsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CTASection } from '../components/sections/CTASection';

/**
 * Home Page — SMO-approved section order
 * 1. Live Market Ticker
 * 2. Hero — "You Farm. We Buy. You Profit."
 * 3. How IGO Farmgate Mandi Works — Best Price Guaranteed
 * 4. Real-Time Market Rates
 * 5. Products We Buy
 * 6. Stats (1200+ farmers, ₹4.5Cr, 98%)
 * 7. Our Buyer Partners & Royal Brands
 * 8. Expand Your Farm Profitability (Forms)
 * 9. Testimonials
 * 10. Smart Logistics Support
 * 11. IGO Group Guaranteed Buyback CTA
 */
export const Home = () => (
  <>
    <AdvancedMarketTicker />
    <HeroSection />
    <HowItWorksSection />
    <MarketSection />
    <ProductsSection />
    <StatsCounter />
    <TrustedPartnersSection />
    <FormsSection />
    <TestimonialsSection />
    <LogisticsSection />
    <CTASection />
  </>
);
