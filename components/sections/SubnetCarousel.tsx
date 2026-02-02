"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface SubnetCard {
  id: string;
  name: string;
  ticker: string;
  price: number;
  change: number;
  volume: string;
}

// Tab configuration with SVG icons instead of emojis
const tabs = [
  {
    id: "gainers",
    label: "Top Gainers",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "new",
    label: "Newly Listed",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    id: "trending",
    label: "Trending",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
];

// Realistic demo subnet data
const subnetsByTab: Record<string, SubnetCard[]> = {
  gainers: [
    { id: "sn-1", name: "Cortex", ticker: "CRX", price: 245.67, change: 34.5, volume: "$4.2M" },
    { id: "sn-8", name: "Vision AI", ticker: "VIS", price: 89.34, change: 28.3, volume: "$2.8M" },
    { id: "sn-19", name: "TextGen", ticker: "TGN", price: 156.21, change: 22.1, volume: "$3.5M" },
    { id: "sn-3", name: "Compute", ticker: "CMP", price: 312.45, change: 18.7, volume: "$5.1M" },
    { id: "sn-21", name: "AudioNet", ticker: "AUD", price: 67.89, change: 15.4, volume: "$1.9M" },
    { id: "sn-5", name: "DataFlow", ticker: "DFL", price: 198.32, change: 12.8, volume: "$2.4M" },
    { id: "sn-12", name: "NeuralX", ticker: "NRX", price: 423.56, change: 11.2, volume: "$6.7M" },
    { id: "sn-7", name: "ImagePro", ticker: "IMG", price: 78.90, change: 9.5, volume: "$1.2M" },
  ],
  new: [
    { id: "sn-127", name: "QuantumAI", ticker: "QAI", price: 45.23, change: 8.7, volume: "$890K" },
    { id: "sn-126", name: "SpeechNet", ticker: "SPK", price: 23.45, change: 5.2, volume: "$450K" },
    { id: "sn-125", name: "CodeAssist", ticker: "CAI", price: 67.89, change: 12.3, volume: "$1.1M" },
    { id: "sn-124", name: "TranslateX", ticker: "TRX", price: 34.56, change: -2.1, volume: "$320K" },
    { id: "sn-123", name: "MedicalAI", ticker: "MED", price: 89.01, change: 15.6, volume: "$1.8M" },
    { id: "sn-122", name: "FinanceBot", ticker: "FIN", price: 112.34, change: 7.8, volume: "$2.1M" },
  ],
  trending: [
    { id: "sn-1", name: "Cortex", ticker: "CRX", price: 245.67, change: 34.5, volume: "$4.2M" },
    { id: "sn-12", name: "NeuralX", ticker: "NRX", price: 423.56, change: 11.2, volume: "$6.7M" },
    { id: "sn-3", name: "Compute", ticker: "CMP", price: 312.45, change: 18.7, volume: "$5.1M" },
    { id: "sn-8", name: "Vision AI", ticker: "VIS", price: 89.34, change: 28.3, volume: "$2.8M" },
    { id: "sn-125", name: "CodeAssist", ticker: "CAI", price: 67.89, change: 12.3, volume: "$1.1M" },
    { id: "sn-19", name: "TextGen", ticker: "TGN", price: 156.21, change: 22.1, volume: "$3.5M" },
    { id: "sn-5", name: "DataFlow", ticker: "DFL", price: 198.32, change: 12.8, volume: "$2.4M" },
  ],
};

/**
 * Subnet Cards Carousel
 * Tabs with SVG icons (cross-platform consistent)
 * Scrollable cards with fade masks
 */
export function SubnetCarousel() {
  const [activeTab, setActiveTab] = useState("gainers");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const subnets = subnetsByTab[activeTab] || subnetsByTab.gainers;

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#818CF8]/5 to-transparent" />

      <div className="container-main relative">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "bg-white/10 text-white shadow-lg shadow-black/20"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <span className={activeTab === tab.id ? "text-[#4ADE80]" : ""}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Cards Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0D0D14]/90 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#0D0D14] transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0D0D14]/90 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#0D0D14] transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#06060A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#06060A] to-transparent z-10 pointer-events-none" />

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          >
            <div className="flex gap-4 min-w-max py-2">
              {subnets.map((subnet) => (
                <SubnetCardComponent key={subnet.id} subnet={subnet} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA - Reduced from 6 Sign ups to 1 primary CTA here */}
        <div className="flex justify-center mt-10 gap-4">
          <Button variant="primary" size="lg">
            Start Investing
          </Button>
          <Button variant="secondary" size="lg">
            View All Subnets
          </Button>
        </div>
      </div>
    </section>
  );
}

function SubnetCardComponent({ subnet }: { subnet: SubnetCard }) {
  const isPositive = subnet.change >= 0;

  return (
    <div className="flex items-center gap-4 px-5 py-4 bg-[#0D0D14] border border-white/8 rounded-xl min-w-[260px] hover:bg-[#14141F] hover:border-[#4ADE80]/30 transition-all duration-300 cursor-pointer group">
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#4ADE80]/20 to-[#818CF8]/20 flex items-center justify-center flex-shrink-0">
        <Image
          src="/assets/icons/Icons_Tao White.svg"
          alt={subnet.name}
          width={24}
          height={24}
          className="w-6 h-6 group-hover:scale-110 transition-transform"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white truncate">{subnet.name}</span>
          <span className="text-xs text-white/40 font-mono">{subnet.ticker}</span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-sm text-white/70 font-mono">
            ${subnet.price.toFixed(2)}
          </span>
          <span className="text-xs text-white/40">
            Vol: {subnet.volume}
          </span>
        </div>
      </div>

      {/* Change */}
      <div
        className={cn(
          "px-2.5 py-1.5 rounded-lg text-xs font-semibold font-mono",
          isPositive
            ? "bg-[#4ADE80]/15 text-[#4ADE80]"
            : "bg-red-500/15 text-red-400"
        )}
      >
        {isPositive ? "+" : ""}
        {subnet.change.toFixed(1)}%
      </div>
    </div>
  );
}
