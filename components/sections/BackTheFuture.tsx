"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "Create your free account",
    description: "Sign up in seconds with just your email. No credit card required.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Connect your wallet",
    description: "Link your crypto wallet securely to access the Bittensor network.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Start investing in AI",
    description: "Browse 100+ AI subnets and back the projects shaping tomorrow.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

/**
 * Back the Future of AI Section
 * Clear visual separation between steps with connecting line
 */
export function BackTheFuture() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/5 via-transparent to-[#818CF8]/5" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: MacBook Mockup */}
          <div className="relative order-2 lg:order-1">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/15 to-[#818CF8]/10 rounded-3xl blur-3xl scale-110" />

            {/* Image */}
            <div className="relative">
              <Image
                src="/assets/images/laptop-dtao.png"
                alt="Bittensor Platform Interface"
                width={1000}
                height={578}
                className="relative w-full h-auto rounded-lg z-10"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-[#0D0D14]/95 backdrop-blur-md border border-white/10 rounded-xl p-4 z-20 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4ADE80]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Setup complete</div>
                    <div className="text-sm font-semibold text-white">Ready to invest</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#818CF8]/10 border border-[#818CF8]/20 mb-6">
              <span className="text-sm text-[#818CF8] font-medium">
                Get started in 3 steps
              </span>
            </div>

            <h2 className="text-display-lg text-white mb-6">
              Back the future of AI in minutes
            </h2>

            <p className="text-body-lg text-white/50 mb-10 max-w-lg">
              Join thousands of investors already funding the next generation of artificial intelligence.
            </p>

            {/* Steps with visual separation */}
            <div className="space-y-0 mb-10">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 top-14 w-px h-12 bg-gradient-to-b from-[#4ADE80]/50 to-transparent" />
                  )}

                  <div className={cn(
                    "flex gap-5 p-4 rounded-xl transition-all duration-300",
                    "hover:bg-white/5"
                  )}>
                    {/* Step Number */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4ADE80] to-[#22C55E] flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-[#4ADE80]/30">
                        {step.number}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                        {step.title}
                        <span className="text-white/30">{step.icon}</span>
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs - Reduced CTA count */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Create Free Account
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
