"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
}

/**
 * Button component with consistent sizing and clear hierarchy
 * Primary: Green (#4ADE80) - main CTAs (Sign up, Get Started)
 * Secondary: Outline border - secondary actions (Learn More, View All)
 * Ghost: No border - tertiary actions
 * Link: Underlined text link
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  loading = false,
  icon,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06060A] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";

  const variants = {
    primary: cn(
      "bg-[#4ADE80] text-black rounded-xl",
      "hover:bg-[#22C55E] hover:shadow-[0_8px_20px_-5px_rgba(74,222,128,0.4)]",
      "focus-visible:ring-[#4ADE80]",
      "active:scale-[0.98]"
    ),
    secondary: cn(
      "bg-transparent text-white rounded-xl",
      "border border-white/20",
      "hover:bg-white/5 hover:border-white/30",
      "focus-visible:ring-white/50"
    ),
    ghost: cn(
      "text-white/80 rounded-xl",
      "hover:text-white hover:bg-white/5",
      "focus-visible:ring-white/50"
    ),
    link: cn(
      "text-[#4ADE80] underline-offset-4",
      "hover:underline hover:text-[#22C55E]",
      "focus-visible:ring-[#4ADE80]"
    ),
  };

  // Consistent sizing with clear hierarchy
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {/* Shine effect for primary button */}
      {variant === "primary" && (
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          aria-hidden="true"
        />
      )}

      {loading ? (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span className="relative z-10">{children}</span>
        </>
      )}
    </button>
  );
}
