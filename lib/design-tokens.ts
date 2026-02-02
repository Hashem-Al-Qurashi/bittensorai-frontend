/**
 * Design Tokens extracted from Figma design
 * Bittensor.ai Homepage
 */

export const colors = {
  // Primary - Green (CTAs)
  primary: {
    DEFAULT: "#4ADE80",
    hover: "#22C55E",
    dark: "#16A34A",
  },

  // Secondary - Purple/Blue gradients
  secondary: {
    purple: "#A855F7",
    blue: "#3B82F6",
    gradient: "linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)",
  },

  // Background
  background: {
    dark: "#0A0A0F",
    darkSecondary: "#111118",
    darkCard: "#16161D",
    light: "#FFFFFF",
    lightSecondary: "#F8F9FA",
    lightCard: "#FFFFFF",
  },

  // Text
  text: {
    dark: {
      primary: "#FFFFFF",
      secondary: "#9CA3AF",
      muted: "#6B7280",
    },
    light: {
      primary: "#111827",
      secondary: "#4B5563",
      muted: "#9CA3AF",
    },
  },

  // Accent colors
  accent: {
    green: "#4ADE80",
    greenBg: "rgba(74, 222, 128, 0.1)",
    red: "#EF4444",
    redBg: "rgba(239, 68, 68, 0.1)",
    purple: "#A855F7",
    purpleBg: "rgba(168, 85, 247, 0.1)",
  },

  // Border
  border: {
    dark: "rgba(255, 255, 255, 0.1)",
    light: "rgba(0, 0, 0, 0.1)",
  },
};

export const typography = {
  fontFamily: {
    sans: "var(--font-geist-sans), system-ui, sans-serif",
    mono: "var(--font-geist-mono), monospace",
  },

  // Type scale based on Figma analysis
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "56px",
    "7xl": "72px",
  },

  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  lineHeight: {
    tight: "1.1",
    snug: "1.25",
    normal: "1.5",
    relaxed: "1.625",
  },
};

export const spacing = {
  container: {
    maxWidth: "1440px",
    padding: {
      mobile: "16px",
      tablet: "24px",
      desktop: "32px",
    },
  },

  section: {
    paddingY: {
      mobile: "48px",
      tablet: "64px",
      desktop: "80px",
    },
  },
};

export const borderRadius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  full: "9999px",
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  glow: {
    purple: "0 0 60px rgba(168, 85, 247, 0.3)",
    blue: "0 0 60px rgba(59, 130, 246, 0.3)",
    green: "0 0 40px rgba(74, 222, 128, 0.2)",
  },
};

export const gradients = {
  primaryButton: "linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)",
  secondaryButton: "linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)",
  heroGlow: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
  cardGlow: "radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
};
