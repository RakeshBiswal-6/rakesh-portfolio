import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 select-none">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Subtle pill status */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-glass border-white/10 text-[11px] font-mono tracking-widest text-accentSilver mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accentBlue animate-pulse" />
          <span>PORTFOLIO & ARCHITECTURE</span>
          <span className="text-white/20">|</span>
          <span className="text-textMuted">CUPGS, BPUT</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-luxury-silver leading-[1.08] mb-6"
        >
          HELLO, I'M <span className="text-luxury-blue">RAKESH BISWAL</span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-accentSilver font-sans max-w-2xl leading-relaxed mb-4"
        >
          {personal.heroSubtitle}
        </motion.p>

        {/* Additional Identity Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm font-mono tracking-widest text-textMuted uppercase mb-12"
        >
          {personal.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full text-xs font-mono tracking-wider font-semibold text-darkBg bg-white hover:bg-accentSilver transition-all duration-300 shadow-luxury flex items-center gap-2 group"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-darkBg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#about"
            className="px-7 py-3 rounded-full text-xs font-mono tracking-wider text-accentSilver luxury-glass border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
          >
            <span>ABOUT ME</span>
          </a>

          <button
            onClick={onOpenResume}
            className="px-7 py-3 rounded-full text-xs font-mono tracking-wider text-accentBlue luxury-glass border border-accentBlue/30 hover:border-accentBlue hover:bg-accentBlue/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD RESUME</span>
          </button>
        </motion.div>

        {/* Small Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-textMuted hover:text-white transition-colors"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-accentBlue" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
