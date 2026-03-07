"use client";

import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// We load the 3D Glow here so it stays on for the whole site
const GlobalCanvas = dynamic(() => import("./components/canvas/GlobalCanvas"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <Providers>
          {/* THE GLOBAL LAMP: Now it's in the 'frame' of the house */}
          <GlobalCanvas />
          
          <Navbar />
          {/* The 'children' below are your Home or About pages */}
          <main className="flex-1 relative z-10 flex flex-col">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}