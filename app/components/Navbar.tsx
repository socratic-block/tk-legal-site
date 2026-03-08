"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Fixed Import
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO: Synchronized with Footer Styling */}
        <Link href="/" className="text-2xl font-black tracking-tighter z-50">
          TK Legal <span className="bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent">Georgia.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-sm font-semibold transition-colors hover:text-indigo-400"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="pl-4 border-l border-white/10">
            <ThemeToggle />
          </div>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8, backgroundColor: "#818cf8" } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8, backgroundColor: "#818cf8" } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 h-screen bg-background/95 z-40 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }} // Staggered entrance
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black tracking-tighter hover:text-indigo-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}