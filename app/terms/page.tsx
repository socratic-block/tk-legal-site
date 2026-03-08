"use client";

import { motion } from "framer-motion";

export default function TermsPage() { // Ensure 'export default' is exactly like this
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
            Terms of <span className="text-[#818cf8]">Service.</span>
          </h1>
          <p className="text-lg opacity-60 leading-relaxed">
            By accessing this website, you agree to the following legal terms.
          </p>
        </section>

        <div className="grid gap-12 text-[15px] leading-relaxed opacity-80">
          <section className="space-y-3">
            <h2 className="text-white font-bold uppercase tracking-widest text-[13px]">1. Scope</h2>
            <p>Submission of an inquiry does not establish an attorney-client relationship.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}