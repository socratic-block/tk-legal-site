"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const highlights = [
    { title: "Civil Law Specialists", description: "Focused expertise in property, contract, and private law disputes." },
    { title: "5+ Years Experience", description: "A proven track record of navigating Georgian judicial and administrative systems." },
    { title: "Fully Licensed", description: "Fully authorized and registered legal practitioners in Georgia." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-12 text-center">
          Expert Advocacy for the <span className="bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent">Global Expat.</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16 text-lg text-foreground/80 leading-relaxed mb-32">
          <div className="space-y-6">
            <p>
              Navigating a foreign legal system requires more than just translation—it requires 
              strategic foresight. As specialists in <span className="text-foreground font-bold">Civil Law</span>, we provide the protective 
              framework needed for expats to thrive in Georgia.
            </p>
            <p>
              With over <span className="text-foreground font-bold text-indigo-400">5 years of dedicated experience</span> in the field and full licensing to 
              operate, TK Legal Georgia stands as a bridge between complex bureaucracy and 
              your peace of mind.
            </p>
          </div>
          
          <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
            <h2 className="text-2xl font-bold text-foreground mb-4 italic">Institutional Standard</h2>
            <p className="text-indigo-400 font-medium text-xl leading-snug">
              "We don't just fill out forms. We architect your legal security so you can focus 
              on building your life in the Caucasus."
            </p>
          </div>
        </div>

        <section>
          <h2 className="text-4xl font-bold mb-12 tracking-tight">Our Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="p-10 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md cursor-default"
              >
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">{item.title}</h3>
                <p className="opacity-70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}