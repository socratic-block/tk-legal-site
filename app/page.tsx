import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const services = [
    { title: "Residency & Immigration", description: "Work permits and residency.", icon: "🛂" },
    { title: "Business Setup & Tax", description: "IE registration and 1% tax status.", icon: "🏢" },
    { title: "Banking Compliance", description: "KYC and AML assistance.", icon: "🏦" },
    { title: "Real Estate Law", description: "Due diligence and contracts.", icon: "⚖️" },
    { title: "Institutional Bureaucracy", description: "POA and translations.", icon: "🏛️" },
    { title: "Civil Matters", description: "Disputes and inheritance.", icon: "🤝" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 border-b border-slate-100 dark:border-slate-800">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-indigo-700 dark:text-indigo-400">TK</span> Legal.
        </div>
        <div className="flex items-center gap-8">
          <div className="space-x-8 text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:flex">
            {['Services', 'About', 'Contact'].map(link => (
              <a key={link} href="#" className="hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">{link}</a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto pt-24 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-8 dark:text-white">
          Clear Legal Strategy for <span className="text-indigo-700 dark:text-indigo-400">Expats.</span>
        </h1>
        <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-12">
          Providing focused representation for foreigners in Georgia.
        </p>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-xl transition-all">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h3>
              <p className="text-slate-700 dark:text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}