"use client";

import React from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Decentralized AI",
    description: "Open-source intelligence network owned by the community",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Earn Rewards",
    description: "Stake TAO and earn passive income from the network",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "100+ AI Projects",
    description: "Access diverse AI subnets from language models to vision",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

/**
 * What is Bittensor Section
 * AI + Crypto = Bittensor visual equation with consistent icon sizing
 */
export function WhatIsBittensor() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06060A] to-transparent" />

      <div className="container-main relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-display-lg text-white mb-4">
            What is Bittensor?
          </h2>
          <p className="text-body-lg text-white/50 max-w-2xl mx-auto">
            The intersection of artificial intelligence and blockchain technology
          </p>
        </div>

        {/* Visual Equation - Consistent sizing */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-20">
          {/* AI */}
          <div className="flex flex-col items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4ADE80]/20 rounded-full blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl bg-[#0D0D14] border border-white/10 flex items-center justify-center relative group-hover:border-[#4ADE80]/30 transition-all duration-300">
                <Image
                  src="/assets/images/Rendered-Bittensor.png"
                  alt="AI"
                  width={80}
                  height={80}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <span className="mt-4 text-lg font-semibold text-white">AI</span>
            <span className="text-sm text-white/40">Intelligence</span>
          </div>

          {/* Plus */}
          <div className="w-12 h-12 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/30 flex items-center justify-center">
            <span className="text-2xl font-bold text-[#4ADE80]">+</span>
          </div>

          {/* Crypto */}
          <div className="flex flex-col items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#818CF8]/20 rounded-full blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl bg-[#0D0D14] border border-white/10 flex items-center justify-center relative group-hover:border-[#818CF8]/30 transition-all duration-300">
                <Image
                  src="/assets/images/Rendered-Crypto-Coins.png"
                  alt="Crypto"
                  width={80}
                  height={80}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <span className="mt-4 text-lg font-semibold text-white">Crypto</span>
            <span className="text-sm text-white/40">Blockchain</span>
          </div>

          {/* Equals */}
          <div className="w-12 h-12 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/30 flex items-center justify-center">
            <span className="text-2xl font-bold text-[#4ADE80]">=</span>
          </div>

          {/* Bittensor */}
          <div className="flex flex-col items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4ADE80]/20 rounded-full blur-2xl scale-110 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
              <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-[#4ADE80]/20 to-[#818CF8]/20 border border-[#4ADE80]/30 flex items-center justify-center relative group-hover:scale-105 transition-all duration-300 shadow-lg shadow-[#4ADE80]/10">
                <Image
                  src="/assets/images/Icons_Tao.png"
                  alt="Bittensor"
                  width={80}
                  height={80}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                />
              </div>
            </div>
            <span className="mt-4 text-lg font-semibold gradient-text">Bittensor</span>
            <span className="text-sm text-white/40">TAO Network</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0D0D14]/50 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#4ADE80]/10 flex items-center justify-center text-[#4ADE80] mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
