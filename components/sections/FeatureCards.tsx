"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
}

const features: FeatureCard[] = [
  {
    title: "Dashboard",
    description:
      "Your portfolio, staking rewards, and investments—organized in one powerful view",
    image: "/assets/images/Homepage-Dashboard.png",
    href: "/dashboard",
    badge: "Popular",
  },
  {
    title: "Learning Center",
    description:
      "Guides and resources to take you from beginner to confident investor",
    image: "/assets/images/Rendered-Learn-Center.png",
    href: "/learn",
  },
  {
    title: "AI Discovery",
    description:
      "Explore 128 AI Subnets and spot the projects shaping tomorrow",
    image: "/assets/images/Rendered-Subnets.png",
    href: "/subnets",
    badge: "New",
  },
  {
    title: "Services",
    description:
      "Tools and support designed to make your Bittensor journey seamless",
    image: "/assets/images/Bittensor-Services.png",
    href: "/services",
  },
];

/**
 * Feature Cards Section
 * Professional heading, consistent card heights
 */
export function FeatureCards() {
  return (
    <section className="relative py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#818CF8]/3 to-transparent" />

      <div className="container-main relative">
        {/* Section Header - More professional than "But wait, there's more!" */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F472B6]/10 border border-[#F472B6]/20 mb-6">
            <span className="text-sm text-[#F472B6] font-medium">
              Explore more features
            </span>
          </div>
          <h2 className="text-display-lg text-white mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-body-lg text-white/50 max-w-2xl mx-auto">
            Powerful tools and resources designed for both beginners and experienced investors
          </p>
        </div>

        {/* Feature Cards Grid - Consistent heights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group relative overflow-hidden rounded-2xl bg-[#0D0D14] border border-white/8 hover:border-[#4ADE80]/30 transition-all duration-500 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {feature.badge && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-2.5 py-1 rounded-full bg-[#4ADE80]/20 text-[#4ADE80] text-xs font-semibold">
                    {feature.badge}
                  </span>
                </div>
              )}

              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/10 via-transparent to-[#818CF8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content - Fixed height structure */}
              <div className="relative z-10 p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4ADE80] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Image - Consistent height */}
                <div className="relative h-44 mt-6 rounded-xl overflow-hidden bg-[#06060A]/50">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14] via-transparent to-transparent opacity-60" />
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 mt-4 text-sm font-medium text-white/50 group-hover:text-[#4ADE80] transition-colors">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
