"use client";

import React from "react";
import Image from "next/image";

interface StatCard {
  title: string;
  value: string;
  subValue?: string;
  image: string;
  gradient: string;
}

// Realistic demo data
const statsCards: StatCard[] = [
  {
    title: "TAO Market Cap",
    value: "$3.47B",
    subValue: "+12.4% this week",
    image: "/assets/images/Coins-DTAO.png",
    gradient: "from-[#4ADE80]/20 via-transparent to-[#22C55E]/10",
  },
  {
    title: "AI Subnets",
    value: "128",
    subValue: "Active & earning",
    image: "/assets/images/Homepage-Subnets.png",
    gradient: "from-[#818CF8]/20 via-transparent to-[#A78BFA]/10",
  },
  {
    title: "AI Projects Market Cap",
    value: "$1.24B",
    subValue: "Across all subnets",
    image: "/assets/images/Homepage-dTAO.png",
    gradient: "from-[#F472B6]/20 via-transparent to-[#EC4899]/10",
  },
];

/**
 * Stats Section with 3 uniform cards
 * Consistent sizing and visual treatment
 */
export function StatsSection() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-display-md text-white mb-4">
            Trade Bittensor TAO for AI Tokens
          </h2>
          <p className="text-body-lg text-white/50 max-w-2xl mx-auto">
            Help fund the next big thing in AI and earn rewards
          </p>
        </div>

        {/* Stats Cards - Uniform Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {statsCards.map((card, index) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl bg-[#0D0D14] border border-white/8 p-6 lg:p-8 hover:border-white/20 transition-all duration-500 card-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-sm font-medium text-white/60 mb-2 uppercase tracking-wider">
                  {card.title}
                </h3>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {card.value}
                </div>
                {card.subValue && (
                  <div className="text-sm text-[#4ADE80]">{card.subValue}</div>
                )}

                {/* Image - Consistent 160px height */}
                <div className="relative h-40 mt-6 flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={200}
                    height={160}
                    className="object-contain max-h-full w-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-t from-[#4ADE80]/10 to-transparent blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
