import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-10 py-6 border-b border-border">
      <div className="text-xl font-bold tracking-tighter">
        <span className="text-indigo-700 dark:text-indigo-400">TK</span> Legal Georgia.
      </div>
      <div className="flex items-center gap-8">
        <div className="space-x-8 text-sm font-medium text-foreground/80 hidden sm:flex">
          {['Services', 'About', 'Contact'].map(link => (
            <a key={link} href="#" className="relative group hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
              {link}
              <span className="absolute left-0 bottom-[-4px] w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}