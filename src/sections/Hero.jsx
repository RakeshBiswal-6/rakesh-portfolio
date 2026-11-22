import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Mail, Code2, Brain } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons';
import Hero3DCanvas from '../components/Hero3DCanvas';
import MagneticButton from '../components/MagneticButton';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { owner } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Interactive 3D Canvas Background */}
      <Hero3DCanvas />

      {/* Cyber Glow Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neonCyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neonMagenta/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs font-mono mb-8 select-none shadow-[0_0_20px_rgba(0,245,255,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-neonCyan animate-ping" />
          <span className="text-gray-300">AVAILABLE FOR ROLES & INNOVATION</span>
          <span className="text-neonCyan">✦</span>
          <span className="text-gray-400">B.TECH CSE</span>
        </motion.div>

        {/* Hero Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4 mb-6"
        >
          <h2 className="text-base sm:text-xl font-mono text-cyan-400 tracking-wider">
            Hi, I'm <span className="text-white font-semibold">{owner.name}</span>.
          </h2>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display max-w-4xl leading-[1.1]">
            I Build <span className="text-gradient">Digital Experiences</span>,<br />
            Develop <span className="text-gradient-cyan">Intelligent Solutions</span><br />
            and Turn Ideas Into Reality.
          </h1>
        </motion.div>

        {/* Subtitle / Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-sm sm:text-base text-gray-300 font-sans leading-relaxed mb-10"
        >
          Computer Science Engineering student at{' '}
          <span className="text-white font-medium">CUPGS, BPUT</span> with a passion for{' '}
          <span className="text-neonCyan font-medium">Artificial Intelligence & Machine Learning</span>,{' '}
          creative full-stack development, and interactive 3D web systems.
        </motion.p>

        {/* Holographic Avatar Showcase Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-10 group"
        >
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[2px] bg-gradient-to-tr from-neonCyan via-neonPurple to-neonMagenta shadow-[0_0_50px_rgba(0,245,255,0.25)] group-hover:shadow-[0_0_70px_rgba(255,0,127,0.35)] transition-all duration-500">
            <div className="w-full h-full rounded-full bg-[#070c18] flex items-center justify-center overflow-hidden relative">
              {/* Fallback & particle sphere graphic */}
              <img
                src="/assets/particle-sphere.png"
                alt="Rakesh Biswal - Creative Sphere"
                className="w-full h-full object-cover mix-blend-screen scale-110 group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 text-center">
                <span className="text-[10px] font-mono tracking-widest text-neonCyan uppercase font-semibold">
                  RB · 3D CORE
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <MagneticButton
            href="#projects"
            className="px-7 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-neonCyan via-neonPurple to-neonMagenta hover:opacity-95 transition-all shadow-[0_0_25px_rgba(0,245,255,0.3)] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Explore My Work</span>
          </MagneticButton>

          <MagneticButton
            onClick={onOpenResume}
            className="px-7 py-3.5 rounded-2xl text-sm font-mono text-neonCyan glass-panel border border-neonCyan/40 hover:border-neonCyan hover:bg-neonCyan/10 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="px-7 py-3.5 rounded-2xl text-sm font-mono text-gray-300 glass-panel border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </MagneticButton>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center gap-4"
        >
          {[
            { name: 'GitHub', icon: GithubIcon, url: owner.githubUrl, hover: 'hover:text-neonCyan hover:border-neonCyan' },
            { name: 'LinkedIn', icon: LinkedinIcon, url: owner.linkedinUrl, hover: 'hover:text-blue-400 hover:border-blue-400' },
            { name: 'Instagram', icon: InstagramIcon, url: owner.instagramUrl, hover: 'hover:text-neonMagenta hover:border-neonMagenta' },
            { name: 'Email', icon: Mail, url: `mailto:${owner.email}`, hover: 'hover:text-amber-300 hover:border-amber-300' },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <MagneticButton
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className={`w-11 h-11 rounded-xl glass-panel border border-white/10 text-gray-400 transition-all duration-300 flex items-center justify-center ${social.hover}`}
              >
                <Icon className="w-4 h-4" />
              </MagneticButton>
            );
          })}
        </motion.div>

        {/* Scroll down indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="mt-14 inline-flex flex-col items-center gap-2 text-xs font-mono text-gray-500 hover:text-neonCyan transition-colors"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
