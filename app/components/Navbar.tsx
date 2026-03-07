"use client";

import React from "react";
import Link from "next/link"; // Use Next.js Link for faster, SPA-like transitions
import ThemeToggle from "./ThemeToggle"; // FIX: Points to your existing ThemeToggle.tsx

export default function Navbar() {
  const links = [
    { name: "Services", href: "/" },
    { name: "About", href: "/about" }, // Points to your new app/about/page.tsx
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/50 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO AREA: Anchored in the "North Star" glow zone */}
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          TK<span className="text-indigo-500">Legal</span> Georgia.
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-sm font-medium transition-colors hover:text-indigo-400 text-foreground/80 hover:text-foreground"
            >
              {link.name}
              {/* THE UNDERLINE: Snaps to full width on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          {/* THE THEME TOGGLE: Now correctly defined */}
          <div className="pl-4 border-l border-white/10">
            <ThemeToggle />
          </div>
        </div>

        {/* MOBILE MENU PLACEHOLDER: Ensure brand visibility on all devices */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}