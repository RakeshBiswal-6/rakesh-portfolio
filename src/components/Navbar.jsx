import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-5 transition-all duration-300">
      <nav
        className={`max-w-5xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'luxury-glass shadow-luxury border-white/10'
            : 'bg-[#0E1015]/60 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-accentBlue/60 transition-colors">
            <span className="font-display font-bold text-xs tracking-wider text-white group-hover:text-accentBlue transition-colors">
              RB
            </span>
          </div>
          <span className="font-display font-semibold text-xs tracking-widest text-accentSilver hidden sm:inline-block">
            RAKESH BISWAL
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-[11px] font-mono tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-textMuted hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-accentSilver border border-white/15 hover:border-accentBlue/60 hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accentBlue" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-textMuted hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-accentBlue" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden mt-3 max-w-5xl mx-auto rounded-3xl luxury-glass border-white/10 p-5 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-colors ${
                    activeSection === item.id
                      ? 'text-accentBlue bg-white/5'
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
                <span>DOWNLOAD RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accentBlue" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
