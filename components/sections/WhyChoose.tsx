"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const features = [
  {
    title: "Secure Trading",
    description: "Non-custodial trading with full control of your assets",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Instant Swaps",
    description: "Trade any AI token with minimal slippage and fees",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Easy Bridging",
    description: "Move assets from other chains to Bittensor seamlessly",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

/**
 * Why People Choose Bittensor.ai Section
 * Feature showcase with device mockup
 */
export function WhyChoose() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#818CF8]/5 via-transparent to-[#4ADE80]/5" />

      <div className="container-main relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#818CF8]/10 border border-[#818CF8]/20 mb-6">
            <span className="text-sm text-[#818CF8] font-medium">
              Trusted by thousands
            </span>
          </div>
          <h2 className="text-display-lg text-white mb-4">
            Why people choose Bittensor.ai
          </h2>
          <p className="text-body-lg text-white/50 max-w-2xl mx-auto">
            Your all-in-one platform to grow with the Bittensor ecosystem
          </p>
        </div>

        {/* Feature Card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#14141F] to-[#0D0D14] border border-white/10 p-8 lg:p-12">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#818CF8]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4ADE80]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Trading that&apos;s simple and secure
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Whether you&apos;re trading tokens, staking TAO, or bridging from
                  other crypto—we&apos;ve got you covered with an intuitive interface
                  and robust security.
                </p>

                {/* Feature list */}
                <div className="space-y-4 mb-8">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#4ADE80]/10 flex items-center justify-center text-[#4ADE80] flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-0.5">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-white/50">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                  <Button variant="secondary" size="lg">
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Right: Device Mockup */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/20 to-[#818CF8]/20 rounded-2xl blur-2xl" />
                <Image
                  src="/assets/images/Select-Wallet.png"
                  alt="Bittensor Platform"
                  width={600}
                  height={400}
                  className="relative w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
