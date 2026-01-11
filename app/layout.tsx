import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { BackgroundEffects } from "../components/BackgroundEffects";
import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codeigo Solutions",
  description: "Software design & development studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-background
          text-foreground
          relative
          overflow-x-hidden
        `}
      >
        {/* Background visuals (must stay behind everything) */}
        <BackgroundEffects />
      <BackgroundGlow/>

        {/* Global navigation */}
        <Navbar />

        {/* Page content */}
        <main className="relative z-10">
          {children}
        </main>
<Footer />
    
      </body>
    </html>
  );
}
