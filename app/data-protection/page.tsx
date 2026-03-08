"use client";

import { motion } from "framer-motion";

export default function DataProtectionPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
            Data Protection <span className="text-[#818cf8]">Policy.</span>
          </h1>
          <p className="text-lg opacity-60 leading-relaxed">
            At TK Legal Georgia, we treat your personal and legal data with the highest level of professional confidentiality. This policy outlines our commitment to the secure handling of your information in accordance with Georgian Law on Personal Data Protection and GDPR principles.
          </p>
        </section>

        <div className="grid gap-10 text-[15px] leading-relaxed opacity-80">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest text-[13px]">1. Data Collection & Purpose</h2>
            <p>
              We collect data strictly necessary for providing legal advisory services, including identification documents, contact details, and case-specific information. This data is used solely for the execution of your legal mandates and to comply with Georgian "Know Your Customer" (KYC) and Anti-Money Laundering (AML) regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest text-[13px]">2. Secure Storage & Encryption</h2>
            <p>
              All digital documents are stored on encrypted, secure servers with restricted access. Physical documents are kept in a secured environment at our Tbilisi headquarters. We utilize industry-standard SSL encryption for all data transmitted through our online portal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest text-[13px]">3. Data Retention</h2>
            <p>
              Personal data is retained only as long as necessary to fulfill the legal purposes for which it was collected or as required by Georgian statute of limitations for legal services. Upon termination of our relationship, data is either securely archived or permanently deleted based on regulatory requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest text-[13px]">4. Your Rights</h2>
            <p>
              Under Georgian law, you have the right to access, correct, or request the deletion of your personal data. You may also withdraw consent for data processing at any time, subject to legal or contractual obligations.
            </p>
          </section>
        </div>

        <div className="pt-12 border-t border-white/5">
          <p className="text-sm opacity-40 italic">Last Updated: March 2026</p>
        </div>
      </motion.div>
    </div>
  );
}