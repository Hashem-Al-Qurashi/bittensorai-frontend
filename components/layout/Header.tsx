"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface NavItem {
  label: string;
  href: string;
  subLabel?: string;
  children?: { label: string; href: string; description?: string }[];
}

// Unified nav structure for both light and dark modes
const navItems: NavItem[] = [
  {
    label: "Invest",
    href: "/invest",
    subLabel: "Trade AI Tokens",
    children: [
      { label: "Trading View", href: "/trading", description: "Buy and sell AI tokens" },
      { label: "Delegated Staking", href: "/staking", description: "Earn passive income" },
      { label: "Managed Investing", href: "/managed", description: "Expert portfolio management" },
    ],
  },
  {
    label: "Discover",
    href: "/discover",
    subLabel: "Explore AI",
    children: [
      { label: "AI Subnets", href: "/subnets", description: "Browse 100+ AI projects" },
      { label: "dTAO Tokens", href: "/dtao", description: "Dynamic TAO ecosystem" },
      { label: "Trending", href: "/trending", description: "What's hot right now" },
    ],
  },
  {
    label: "Learn",
    href: "/learn",
    subLabel: "Guides & Docs",
    children: [
      { label: "Getting Started", href: "/learn/start", description: "New to Bittensor?" },
      { label: "Documentation", href: "/docs", description: "Technical reference" },
      { label: "Tutorials", href: "/tutorials", description: "Step-by-step guides" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    subLabel: "Tools & Support",
    children: [
      { label: "Setup Help", href: "/setup", description: "Get started quickly" },
      { label: "Support", href: "/support", description: "24/7 assistance" },
    ],
  },
];

/**
 * Header Component - Unified structure for light/dark modes
 * Features: Logo, Nav with dropdowns, Currency Toggle, Login/Signup
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyMode, setCurrencyMode] = useState<"usd" | "tao">("usd");
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main Navigation */}
      <nav
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-[#06060A]/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center relative z-10">
              <Image
                src="/assets/icons/Bittensor logo-White.svg"
                alt="Bittensor.ai"
                width={140}
                height={32}
                className="h-7 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-200",
                      "hover:bg-white/5",
                      activeDropdown === item.label && "bg-white/5"
                    )}
                  >
                    <span className="font-medium text-white text-sm">
                      {item.label}
                    </span>
                    {item.subLabel && (
                      <span className="text-[11px] text-white/50">
                        {item.subLabel}
                      </span>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-3",
                        "transition-all duration-200",
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      )}
                    >
                      <div className="bg-[#0D0D14] border border-white/10 rounded-xl p-2 min-w-[220px] shadow-2xl shadow-black/50">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex flex-col px-4 py-3 rounded-lg text-sm hover:bg-white/5 transition-colors"
                          >
                            <span className="font-medium text-white">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="text-xs text-white/50 mt-0.5">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side: Currency Toggle + Auth */}
            <div className="flex items-center gap-3">
              {/* Currency Toggle */}
              <button
                onClick={() =>
                  setCurrencyMode(currencyMode === "usd" ? "tao" : "usd")
                }
                className="hidden sm:flex items-center gap-0.5 p-1 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-all"
                title="Toggle currency display"
              >
                <span
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200",
                    currencyMode === "usd"
                      ? "bg-[#4ADE80] text-black"
                      : "bg-transparent text-white/50"
                  )}
                >
                  $
                </span>
                <span
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200",
                    currencyMode === "tao"
                      ? "bg-[#4ADE80] text-black"
                      : "bg-transparent text-white/50"
                  )}
                >
                  τ
                </span>
              </button>

              {/* Auth Buttons */}
              <div className="hidden sm:flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-[80vh]" : "max-h-0"
          )}
        >
          <div className="container-main py-4 space-y-2 bg-[#06060A] border-t border-white/10">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3 px-4 text-white font-medium rounded-lg hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="w-4 h-4 text-white/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 px-4 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Auth */}
            <div className="pt-4 flex flex-col gap-2 border-t border-white/10 mt-4">
              <Button variant="secondary" size="md" className="w-full">
                Log in
              </Button>
              <Button variant="primary" size="md" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-[#4ADE80]/10 via-[#818CF8]/10 to-[#4ADE80]/10 border-b border-white/5">
        <div className="container-main py-2.5">
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#4ADE80]/20 text-[#4ADE80] text-xs font-bold">
              ✨
            </span>
            <span className="text-white/70">
              <span className="hidden sm:inline">Bittensor.ai has partnered with Trusted Stake. </span>
              <span className="font-medium text-white">Simple, reliable staking!</span>
            </span>
            <Link
              href="/staking"
              className="inline-flex items-center gap-1 text-[#4ADE80] hover:text-[#22C55E] font-medium ml-1 group"
            >
              Learn more
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
