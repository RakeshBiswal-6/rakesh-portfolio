import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-5 py-3.5 flex items-center justify-between ${
          scrolled
            ? 'glass-panel-glow border-neonCyan/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl'
            : 'glass-panel border-white/5 bg-[#030712]/40'
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neonCyan via-neonPurple to-neonMagenta p-[1px] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#070c18] rounded-xl flex items-center justify-center">
              <span className="font-display font-black text-sm tracking-widest text-gradient">
                {portfolioData.owner.initials}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-neonCyan transition-colors">
              RAKESH<span className="text-neonCyan">.</span>
            </span>
            <span className="text-[10px] font-mono tracking-wider text-gray-400">
              AI/ML & FULL-STACK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider text-gray-300 hover:text-neonCyan hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-neonCyan border border-neonCyan/30 hover:border-neonCyan hover:bg-neonCyan/10 transition-all duration-200 flex items-center gap-1.5"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="#contact"
            className="relative px-4 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-neonCyan/80 via-neonPurple/80 to-neonMagenta/80 hover:from-neonCyan hover:to-neonMagenta transition-all duration-300 shadow-[0_0_15px_rgba(0,245,255,0.25)] flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-white" />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-neonCyan" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 max-w-6xl mx-auto rounded-2xl glass-panel-glow border-neonCyan/30 p-5 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-mono text-gray-200 hover:text-neonCyan hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-mono text-center text-neonCyan border border-neonCyan/40 hover:bg-neonCyan/10 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View & Download Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl text-xs font-medium text-center text-white bg-gradient-to-r from-neonCyan to-neonMagenta shadow-md flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
