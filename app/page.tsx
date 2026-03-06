import ThemeToggle from "./components/ThemeToggle";

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
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 relative overflow-hidden flex flex-col transition-colors duration-300">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-50/50 dark:bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 border-b border-slate-100 dark:border-slate-800">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-indigo-700 dark:text-indigo-400">TK</span> Legal.
        </div>
        <div className="flex items-center gap-8">
          <div className="space-x-8 text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:flex">
            {['Services', 'About', 'Contact'].map(link => (
              <a key={link} href="#" className="relative group hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                {link}
                <span className="absolute left-0 bottom-[-4px] w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          {/* THE TOGGLE BUTTON IS HERE */}
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-5xl mx-auto pt-24 px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold tracking-wide">
          Based in Tbilisi, Georgia 🇬🇪
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8">
          <span className="text-slate-900 dark:text-white">Clear Legal Strategy</span> for <span className="bg-gradient-to-r from-indigo-700 to-sky-600 dark:from-indigo-400 dark:to-sky-400 bg-clip-text text-transparent">Expats.</span>
        </h1>
        <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Providing focused, uncompromising representation for foreigners in Georgia. We translate intricate laws into actionable advantages for your life and business.
        </p>
        
        <button className="bg-slate-950 dark:bg-indigo-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-100/50 dark:shadow-none flex items-center gap-2 mx-auto group">
          Request a Consultation
          <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </main>

      {/* Trust Bar */}
      <div className="relative z-10 w-full border-y border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-10 md:gap-20 text-sm font-medium text-slate-500 dark:text-slate-400">
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
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">How We Can Serve You</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">Focused expertise designed to eliminate the friction of navigating Georgian bureaucracy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-10 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-indigo-50/20 dark:hover:bg-indigo-900/10 hover:shadow-2xl hover:shadow-indigo-100/30 dark:hover:shadow-indigo-900/20 hover:border-indigo-100 dark:hover:border-indigo-800 hover:-translate-y-2 transition-all duration-300 relative group"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-900 dark:group-hover:text-indigo-300">{service.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[17px]">
                {service.description}
              </p>
              <div className="absolute bottom-6 left-10 right-10 h-px bg-indigo-200 dark:bg-indigo-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-950 dark:bg-black text-slate-300 py-20 mt-auto">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Ready to secure your footing in Georgia?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Book a 30-minute introductory call to discuss your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:contact@tklegal.ge" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-indigo-500 transition-colors">
              Email Us Directly
            </a>
            <span className="text-slate-500 text-sm">or</span>
            <span className="text-slate-400 font-medium">Tbilisi, Georgia</span>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-sm text-slate-600 flex flex-col md:flex-row justify-between px-6">
          <p>© 2026 TK Legal. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Developed by socratic-block</p>
        </div>
      </footer>
    </div>
  );
}