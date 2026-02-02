"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Final CTA Section - Strong terminus conversion point
 * Single focused CTA with prominent button
 */
export function FinalCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Final CTA signup:", email);
  };

  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4ADE80]/10 via-transparent to-transparent" />

        {/* Animated orbs */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#4ADE80]/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#818CF8]/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="container-main relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-sm text-[#4ADE80] font-medium">
              Join 50,000+ investors
            </span>
          </div>

          <h2 className="text-display-xl text-white mb-6 leading-tight">
            Ready to invest in the{" "}
            <span className="gradient-text">future of AI</span>?
          </h2>

          <p className="text-body-lg text-white/60 mb-10 max-w-xl mx-auto">
            Create your free account today and start exploring 100+ AI projects
            on the Bittensor network.
          </p>

          {/* Email signup or direct CTA */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#4ADE80]/50 focus:ring-2 focus:ring-[#4ADE80]/20 transition-all"
                required
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="h-14 px-10 text-lg whitespace-nowrap"
              >
                Get Started Free
              </Button>
            </div>
          </form>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Setup in 2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
