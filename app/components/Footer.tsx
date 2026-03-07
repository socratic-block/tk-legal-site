export default function Footer() {
    return (
      <footer className="relative z-10 bg-card border-t border-border py-20 mt-auto transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-card-foreground tracking-tight mb-6">
            Ready to secure your footing in Georgia?
          </h2>
          <p className="text-card-foreground/70 mb-10 max-w-xl mx-auto">
            Book a 30-minute introductory call to discuss your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:contact@tklegal.ge" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
              Email Us Directly
            </a>
            <span className="text-card-foreground/50 text-sm">or</span>
            <span className="text-card-foreground/80 font-medium">Tbilisi, Georgia</span>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border text-center text-sm text-card-foreground/50 flex flex-col md:flex-row justify-between items-center gap-4 px-6">
          <p>© 2026 TK Legal Georgia. All rights reserved.</p>
          <p className="md:mt-0">Developed by socratic-block</p>
        </div>
      </footer>
    );
  }