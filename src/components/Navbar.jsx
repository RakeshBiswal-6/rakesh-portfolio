import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-5 transition-all duration-300">
      <nav
        className={`max-w-4xl mx-auto rounded-full px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'luxury-glass shadow-luxury border-white/10'
            : 'bg-[#07080E]/70 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand: "Rakesh Biswal" */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-full bg-accentViolet/10 border border-accentViolet/30 flex items-center justify-center">
            <span className="font-display font-bold text-xs tracking-wider text-accentViolet">
              R
            </span>
          </div>
          <span className="font-display font-semibold text-xs tracking-wider text-white group-hover:text-accentViolet transition-colors whitespace-nowrap">
            Rakesh Biswal
          </span>
        </a>

        {/* Desktop Menu: "About | Skills | Projects | Education | Contact" */}
        <div className="hidden md:flex items-center gap-1 font-mono text-xs text-textMuted">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <React.Fragment key={item.id}>
                <a
                  href={item.href}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    isActive ? 'text-white font-medium bg-white/10' : 'hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
                {idx < navItems.length - 1 && <span className="text-white/15 select-none">|</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Action Button: Download Resume */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1 rounded-full text-xs font-mono text-accentSilver border border-white/10 hover:border-accentViolet/40 hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-accentViolet" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1 rounded-lg text-textMuted hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-accentViolet" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden mt-3 max-w-4xl mx-auto rounded-3xl luxury-glass border-white/10 p-5 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors ${
                    activeSection === item.id
                      ? 'text-accentViolet bg-white/5 font-semibold'
                      : 'text-textMuted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-mono text-center text-accentSilver border border-white/15 hover:bg-white/5 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accentViolet" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
