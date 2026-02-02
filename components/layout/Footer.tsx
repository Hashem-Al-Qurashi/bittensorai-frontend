"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// Unified footer structure for both themes
const footerColumns: FooterColumn[] = [
  {
    title: "Invest",
    links: [
      { label: "Trading View", href: "/trading" },
      { label: "Delegated Staking", href: "/staking" },
      { label: "Managed Investing", href: "/managed" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "AI Subnets", href: "/subnets" },
      { label: "dTAO Tokens", href: "/dtao" },
      { label: "Trending", href: "/trending" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Getting Started", href: "/learn/start" },
      { label: "Documentation", href: "/docs" },
      { label: "Tutorials", href: "/tutorials" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Setup Help", href: "/setup" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    name: "Discord",
    icon: "/assets/icons/discordwhite.svg",
    href: "https://discord.gg/bittensor",
  },
  {
    name: "X",
    icon: "/assets/icons/x-logo.svg",
    href: "https://x.com/bittensor",
  },
  {
    name: "GitHub",
    icon: "/assets/icons/githubwhite.svg",
    href: "https://github.com/opentensor",
  },
];

/**
 * Footer Component - Unified structure for light/dark modes
 */
export function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-white/8 bg-[#06060A]">
      <div className="container-main py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Logo Column - Takes 2 cols on md */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/assets/icons/Bittensor logo-White.svg"
                alt="Bittensor.ai"
                width={140}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-white/40 mb-6 max-w-xs leading-relaxed">
              The world&apos;s first open marketplace for intelligence. Invest in 100+ AI projects on the Bittensor network.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 transition-all"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={18}
                    height={18}
                    className="w-4.5 h-4.5 opacity-60 hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-white mb-4 text-sm">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Theme Toggle + Copyright */}
            <div className="flex items-center gap-6">
              {/* Theme Toggle */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/40">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="relative w-14 h-7 rounded-full bg-white/5 border border-white/10 transition-colors hover:bg-white/10"
                  aria-label="Toggle theme"
                >
                  <div
                    className={cn(
                      "absolute top-1 w-5 h-5 rounded-full bg-[#4ADE80] transition-all duration-300 flex items-center justify-center",
                      theme === "dark" ? "left-1" : "left-8"
                    )}
                  >
                    {theme === "dark" ? (
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>

              <span className="text-xs text-white/30">
                © {new Date().getFullYear()} Bittensor.ai
              </span>
            </div>

            {/* Right: Legal Links */}
            <div className="flex items-center gap-4 text-xs text-white/40">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
