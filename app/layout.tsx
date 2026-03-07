import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; 
import Navbar from "./components/Navbar"; // 1. Import Navbar
import Footer from "./components/Footer"; // 2. Import Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TK Legal Georgia",
  description: "Legal advice for foreigners in Georgia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 3. Added flexbox classes to ensure the footer sticks to the bottom */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          
          {/* 4. flex-1 acts like a spring, pushing the footer down */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          
          <Footer />
        </Providers>
      </body>
    </html>
  );
}