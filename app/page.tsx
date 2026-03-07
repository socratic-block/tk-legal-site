export default function Home() {
  const services = [
    {
      title: "Residency & Immigration",
      description: "Work permits, property-based residency, and family reunification. We handle the complexities of Georgian immigration law.",
      icon: "🛂"
    },
    {
      title: "Business Setup & Tax",
      description: "IE registration, 1% Small Business Status, and LLC corporate formation for optimal tax structuring.",
      icon: "🏢"
    },
    {
      title: "Banking Compliance",
      description: "Direct assistance navigating KYC and AML procedures to successfully open multi-currency personal and corporate accounts.",
      icon: "🏦"
    },
    {
      title: "Real Estate Law",
      description: "Comprehensive due diligence, contract drafting, and negotiation to protect your capital when buying property.",
      icon: "⚖️"
    },
    {
      title: "Institutional Bureaucracy",
      description: "Power of Attorney (POA) and certified legal translation so we can represent you at the Public Service Hall.",
      icon: "🏛️"
    },
    {
      title: "Civil Matters",
      description: "Contract disputes, inheritance law, and personal legal advisory for foreign residents.",
      icon: "🤝"
    },
    {
      title: "Digital Nomad Visa",
      description: "Specialized tax and residency path for remote workers in Georgia.",
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 relative overflow-hidden flex flex-col transition-colors duration-300">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-50/50 dark:bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />


      {/* Hero Section */}
      <main className="relative z-10 max-w-5xl mx-auto pt-24 px-6 text-center transition-all duration-300">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold tracking-wide">
          Based in Tbilisi, Georgia 🇬🇪
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8">
          <span className="text-foreground">Clear Legal Strategy</span> for <span className="bg-gradient-to-r from-indigo-700 to-sky-600 dark:from-indigo-400 dark:to-sky-400 bg-clip-text text-transparent">Expats.</span>
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Providing focused, uncompromising representation for foreigners in Georgia. We translate intricate laws into actionable advantages for your life and business.
        </p>
        
        <button className="bg-foreground text-background px-10 py-4 rounded-xl font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-indigo-100/50 dark:shadow-none flex items-center gap-2 mx-auto group">
          Request a Consultation
          <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </main>

      {/* Trust Bar */}
      <div className="relative z-10 w-full border-y border-border bg-card/50 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-10 md:gap-20 text-sm font-medium text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 dark:text-indigo-400">✓</span> Fully Licensed & Registered
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 dark:text-indigo-400">✓</span> English, Georgian
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 dark:text-indigo-400">✓</span> Remote Services Available
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex-grow">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">How We Can Serve You</h2>
          <p className="text-foreground/70 max-w-lg mx-auto">Focused expertise designed to eliminate the friction of navigating Georgian bureaucracy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-10 rounded-3xl border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/5 relative group"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="opacity-80 leading-relaxed text-[17px]">{service.description}</p>
              <div className="absolute bottom-6 left-10 right-10 h-px bg-indigo-500/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}