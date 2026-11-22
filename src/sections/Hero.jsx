import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Subtle pill indicator */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-glass border-white/10 text-[11px] font-mono tracking-widest text-accentSilver mb-6 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accentPurple animate-pulse" />
          <span>DEVELOPER WORKSPACE</span>
          <span className="text-white/20">|</span>
          <span className="text-textMuted">CUPGS, BPUT</span>
        </motion.div>

        {/* Name: MUST be on ONE SINGLE LINE on desktop, medium-large professional font size */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white whitespace-nowrap mb-2 leading-tight"
        >
          RAKESH BISWAL
        </motion.h1>

        {/* Professional Title directly below, smaller than name */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl font-medium tracking-wide text-gradient-purple mb-4"
        >
          Full-Stack Developer
        </motion.h2>

        {/* Introduction paragraph directly below, smaller than title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xs sm:text-sm md:text-base text-accentSilver/90 font-sans max-w-xl leading-relaxed mb-10"
        >
          I build digital experiences and explore new technologies to solve real-world problems.
        </motion.p>

        {/* Action Buttons: Explore My Work | About Me | Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
        >
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-full text-xs font-mono tracking-wider font-semibold text-darkBg bg-white hover:bg-accentSilver transition-all duration-300 shadow-luxury flex items-center gap-2 group"
          >
            <span>Explore My Work</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-darkBg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#about"
            className="px-6 py-2.5 rounded-full text-xs font-mono tracking-wider text-accentSilver luxury-glass border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
          >
            <span>About Me</span>
          </a>

          <button
            onClick={onOpenResume}
            className="px-6 py-2.5 rounded-full text-xs font-mono tracking-wider text-accentViolet luxury-glass border border-accentViolet/30 hover:border-accentViolet hover:bg-accentViolet/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Subtle Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-flex flex-col items-center gap-1.5 text-[10px] font-mono tracking-widest text-textMuted hover:text-white transition-colors"
        >
          <span>SCROLL TO EXPLORE WORLDS</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-accentViolet" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
