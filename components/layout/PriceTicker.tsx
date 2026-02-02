"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TickerData {
  price: number;
  priceChange: number;
  priceChangePercent: number;
  marketCap: string;
  volume24h: string;
  blocks: number;
}

interface PriceTickerProps {
  data?: TickerData;
  className?: string;
}

// Realistic demo data (will be replaced with API)
const DEFAULT_TICKER: TickerData = {
  price: 455.63,
  priceChange: 48.22,
  priceChangePercent: 10.58,
  marketCap: "$3.47B",
  volume24h: "$201.7M",
  blocks: 5058520,
};

/**
 * Price Ticker Bar - Sticky top bar with live TAO stats
 * Responsive: full stats on desktop, minimal on mobile
 */
export function PriceTicker({ data, className }: PriceTickerProps) {
  const tickerData = data || DEFAULT_TICKER;
  const isPositive = tickerData.priceChangePercent >= 0;

  return (
    <div
      className={cn(
        "w-full bg-[#06060A] border-b border-white/5",
        className
      )}
    >
      <div className="container-main h-10 flex items-center justify-between text-sm">
        {/* Left: TAO Price */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* TAO Icon + Price */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4ADE80]/20 to-[#818CF8]/20 flex items-center justify-center">
              <Image
                src="/assets/icons/Icons_Tao White.svg"
                alt="TAO"
                width={14}
                height={14}
                className="w-3.5 h-3.5"
              />
            </div>
            <span className="font-bold text-white font-mono">
              ${tickerData.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          {/* Price Change */}
          <div
            className={cn(
              "flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium font-mono",
              isPositive
                ? "bg-[#4ADE80]/10 text-[#4ADE80]"
                : "bg-red-500/10 text-red-400"
            )}
          >
            <span className="flex items-center">
              {isPositive ? (
                <svg className="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
              {Math.abs(tickerData.priceChangePercent).toFixed(2)}%
            </span>
            <span className="text-white/40 hidden sm:inline">
              ({isPositive ? "+" : "-"}${Math.abs(tickerData.priceChange).toFixed(2)})
            </span>
          </div>
        </div>

        {/* Right: Market Stats */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-white/40 text-xs">Market Cap</span>
            <span className="font-medium text-white text-xs">{tickerData.marketCap}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white/40 text-xs">24h Volume</span>
            <span className="font-medium text-white text-xs">{tickerData.volume24h}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white/40 text-xs">Block</span>
            <span className="font-medium text-white text-xs font-mono">
              #{tickerData.blocks.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
