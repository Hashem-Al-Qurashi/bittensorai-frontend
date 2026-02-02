import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Bittensor.ai - Invest in 100+ AI Startups",
  description:
    "The world's first open marketplace for intelligence—invest and trade in AI innovation today.",
  keywords: ["Bittensor", "TAO", "AI", "cryptocurrency", "investing", "subnets"],
  openGraph: {
    title: "Bittensor.ai - Invest in 100+ AI Startups",
    description: "The world's first open marketplace for intelligence",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#06060A] text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
