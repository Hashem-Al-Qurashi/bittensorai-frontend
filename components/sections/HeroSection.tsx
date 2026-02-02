"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

// Realistic placeholder data (to be replaced with API)
const DEMO_STATS = {
  marketCap: 3.47,
  subnets: 128,
  projectsCap: 1.24,
};

/**
 * Hero Section - Split Layout with proper visual hierarchy
 * Left: Headline (wider), subtext, email input + CTA
 * Right: MacBook mockup with floating elements
 */
export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup
    console.log("Signup:", email);
  };

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-180px)] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#4ADE80]/8 rounded-full blur-[150px] translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#818CF8]/8 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />

        {/* Noise texture */}
        <div className="absolute inset-0 noise" />
      </div>

      <div className="container-main relative py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content - 7 cols for better hierarchy */}
          <div
            className={`lg:col-span-7 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-sm text-[#4ADE80] font-medium">
                Now live: 128 AI Subnets
              </span>
            </div>

            <h1 className="text-display-xl text-white mb-6 max-w-2xl">
              Invest in{" "}
              <span className="gradient-text">100+ AI Startups</span>
              {" "}with TAO
            </h1>

            <p className="text-body-lg text-white/60 mb-8 max-w-xl leading-relaxed">
              The world&apos;s first open marketplace for intelligence. Back the next
              wave of AI innovation and earn as the Bittensor ecosystem grows.
            </p>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="mb-10">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 px-5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#4ADE80]/50 focus:ring-2 focus:ring-[#4ADE80]/20 transition-all"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="whitespace-nowrap sm:w-auto"
                >
                  Get Started
                </Button>
              </div>
              <p className="text-xs text-white/40 mt-3">
                Free to create an account. No credit card required.
              </p>
            </form>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="animate-fade-in-up stagger-1" style={{ opacity: 0 }}>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  ${DEMO_STATS.marketCap}B
                </div>
                <div className="text-sm text-white/50">TAO Market Cap</div>
              </div>
              <div className="animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {DEMO_STATS.subnets}
                </div>
                <div className="text-sm text-white/50">AI Subnets</div>
              </div>
              <div className="animate-fade-in-up stagger-3" style={{ opacity: 0 }}>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  ${DEMO_STATS.projectsCap}B
                </div>
                <div className="text-sm text-white/50">Projects Market Cap</div>
              </div>
            </div>
          </div>

          {/* Right Column: Mockup - 5 cols */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/20 via-[#818CF8]/10 to-transparent rounded-3xl blur-3xl scale-110 animate-pulse-glow" />

            {/* MacBook Image */}
            <div className="relative">
              <Image
                src="/assets/images/laptop-dtao.png"
                alt="dTAO Trading Interface"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg relative z-10"
                priority
              />

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-4 lg:-right-8 w-20 h-20 lg:w-24 lg:h-24 z-20">
                <Image
                  src="/assets/images/Rendered-Coins.png"
                  alt="Coins"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain animate-float drop-shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 lg:-left-8 w-16 h-16 lg:w-20 lg:h-20 z-20">
                <Image
                  src="/assets/images/Icons_Tao.png"
                  alt="TAO"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain animate-float-delayed drop-shadow-2xl"
                />
              </div>

              {/* Stats Card Overlay */}
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-[#0D0D14]/90 backdrop-blur-md border border-white/10 rounded-xl p-3 lg:p-4 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/50">24h Volume</div>
                    <div className="text-sm font-semibold text-white">$201.7M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
