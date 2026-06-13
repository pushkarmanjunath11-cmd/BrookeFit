import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrookeFit | Premium Gym & Fitness",
  description: "Experience premium fitness at BrookeFit. World-class equipment, professional trainers, and a community that pushes you to your limits.",
  keywords: ["gym", "fitness", "personal training", "membership", "BrookeFit"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-[#0A0A0A] text-white">{children}</body>
    </html>
  );
}
