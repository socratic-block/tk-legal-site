"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/30 backdrop-blur-2xl pt-12 pb-6 px-6">
      {/* 4-Column Grid: Compact spacing */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-center">
        
        {/* Column 1: Static Brand Identity */}
        <div className="flex flex-col items-center space-y-3">
          <div className="text-xl font-black tracking-tighter text-white">
            TK Legal <span className="text-[#818cf8]">Georgia.</span>
          </div>
          <p className="text-[13px] opacity-60 leading-relaxed max-w-[220px]">
            Architecting clear legal strategies for the international community and expats in Tbilisi.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#818cf8]">Navigation</h3>
          <nav className="flex flex-col space-y-1.5 text-[13px] opacity-70 font-medium">
            <Link href="/" className="hover:text-[#818cf8] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#818cf8] transition-colors">About the Firm</Link>
            <Link href="/contact" className="hover:text-[#818cf8] transition-colors">Contact & Intake</Link>
          </nav>
        </div>

        {/* Column 3: Connect */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#818cf8]">Connect</h3>
          <div className="flex flex-col items-center space-y-2.5">
            <a 
              href="https://wa.me/995555555555" 
              target="_blank" 
              className="flex items-center gap-2 text-[11px] bg-green-500/10 text-green-500 border border-green-500/20 px-4 py-1.5 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <span className="text-sm">💬</span>
              <span className="font-semibold">WhatsApp Direct</span>
            </a>
            <div className="flex gap-5 opacity-60 text-[11px]">
              <a href="#" className="hover:text-[#818cf8] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#818cf8] transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        {/* Column 4: Office */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#818cf8]">Office</h3>
          <div className="text-[13px] opacity-70 space-y-0.5">
            <p className="flex items-center justify-center gap-2">📍 Tbilisi, Georgia 🇬🇪</p>
            <p className="flex items-center justify-center gap-2 font-medium">✉️ contact@tklegal.ge</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Ultra-thin legal strip */}
      <div className="max-w-7xl mx-auto pt-4 border-t border-border/50 flex flex-col lg:flex-row justify-between items-center gap-4 text-[9px] opacity-40 uppercase tracking-widest font-bold text-center">
        <p>© {currentYear} TK Legal Georgia. All rights reserved.</p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/data-protection" className="hover:text-white transition-colors">Data Protection Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>

        <p className="lowercase italic tracking-normal opacity-60 font-medium">
          developed by <span className="text-[#818cf8] not-italic font-black">socratic-block</span>
        </p>
      </div>
    </footer>
  );
}