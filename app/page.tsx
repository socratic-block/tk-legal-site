"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    { title: "Residency & Immigration", description: "Work permits, property-based residency, and family reunification.", icon: "🛂" },
    { title: "Business Setup & Tax", description: "IE registration, 1% Small Business Status, and LLC corporate formation.", icon: "🏢" },
    { title: "Banking Compliance", description: "Direct assistance navigating KYC and AML procedures.", icon: "🏦" },
    { title: "Real Estate Law", description: "Comprehensive due diligence, contract drafting, and negotiation.", icon: "⚖️" },
    { title: "Institutional Bureaucracy", description: "Power of Attorney (POA) and certified legal translation.", icon: "🏛️" },
    { title: "Civil Matters", description: "Contract disputes, inheritance law, and personal legal advisory.", icon: "🤝" },
    { title: "Digital Nomad Visa", description: "Specialized tax and residency path for remote workers.", icon: "💻" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      
      {/* THE POP WRAPPER: Synchronized spring physics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="w-full flex flex-col items-center"
      >
        
        {/* Hero Section: Using pt-12 as a "sweet spot" to keep it high but safe from the header */}
        <main className="relative z-10 w-full max-w-7xl pt-1 px-6 text-center flex flex-col items-center">
          <div className="inline-block mb-1 px-4 py-1.5 rounded-full border border-indigo-100/20 bg-indigo-500/10 text-indigo-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
            Based in Tbilisi, Georgia 🇬🇪
          </div>
          
          {/* THE WIDE TITLE: Kept at 5xl for consistency, but max-w-5xl lets it stretch */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-8 max-w-5xl">
            Clear Legal Strategy for <span className="bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent">Expats in Georgia.</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
            Focused representation that turns Georgian law into your actionable advantage.
          </p>
          
          {/* REDIRECT LOGIC: Wrapping button in Link for instant navigation */}
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-foreground text-background px-10 py-4 rounded-xl font-semibold hover:bg-indigo-600 transition-all shadow-lg flex items-center gap-2 mx-auto"
            >
              Request a Consultation →
            </motion.button>
          </Link>
        </main>

        {/* Services Grid Section: Theme-aware cards for Light/Dark visibility */}
        <section className="relative z-10 w-full max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="p-10 rounded-3xl border border-border bg-card backdrop-blur-xl text-card-foreground shadow-2xl cursor-pointer group"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="opacity-80 leading-relaxed text-[17px]">{service.description}</p>
                
                <div className="absolute bottom-6 left-10 right-10 h-px bg-indigo-500/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}