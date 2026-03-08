"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
        <section className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
            Privacy <span className="text-[#818cf8]">Policy.</span>
          </h1>
          <p className="text-lg opacity-60 leading-relaxed">
            Effective Date: March 2026. This policy describes how TK Legal Georgia collects and uses your personal information.
          </p>
        </section>

        <div className="grid gap-12 text-[15px] leading-relaxed opacity-80">
          <section className="space-y-3">
            <h2 className="text-white font-bold uppercase tracking-widest text-[13px]">1. Information We Collect</h2>
            <p>
              When you use our contact form or request a consultation, we collect your name, email address, phone number, and any case details you provide. We also automatically collect technical data such as IP addresses and browser types via essential cookies to ensure site functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-bold uppercase tracking-widest text-[13px]">2. Third-Party Services</h2>
            <p>
              We use secure third-party processors to manage form submissions (e.g., Formspree). These providers are only permitted to process your data for the specific purpose of transmitting your inquiry to our legal team and are bound by strict confidentiality agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-bold uppercase tracking-widest text-[13px]">3. International Transfers</h2>
            <p>
              As we serve an international clientele, your data may be processed in Georgia or on secure cloud servers located within the EU. We ensure that all data transfers comply with relevant data protection laws and maintain the highest standard of encryption.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white font-bold uppercase tracking-widest text-[13px]">4. Data Security</h2>
            <p>
              We implement robust technical and organizational measures to protect your data against unauthorized access, loss, or alteration. Access to personal data is strictly limited to authorized legal personnel on a "need-to-know" basis.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}