import { PriceTicker } from "@/components/layout/PriceTicker";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { SubnetCarousel } from "@/components/sections/SubnetCarousel";
import { BackTheFuture } from "@/components/sections/BackTheFuture";
import { WhatIsBittensor } from "@/components/sections/WhatIsBittensor";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white">
      {/* Price Ticker - Top Bar */}
      <PriceTicker />

      {/* Header with Navigation + Announcement Banner */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section - Split Layout */}
        <HeroSection />

        {/* Stats Cards Section */}
        <StatsSection />

        {/* Subnet Cards Carousel */}
        <SubnetCarousel />

        {/* Back the Future of AI */}
        <BackTheFuture />

        {/* What is Bittensor? */}
        <WhatIsBittensor />

        {/* Why People Choose Bittensor.ai */}
        <WhyChoose />

        {/* Feature Cards */}
        <FeatureCards />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
