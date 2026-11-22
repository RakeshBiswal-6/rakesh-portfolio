import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { owner } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#02050e] py-12 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Attribution */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-lg text-gradient">
              {owner.name}
            </span>
            <span className="text-gray-600">·</span>
            <span className="text-xs font-mono text-neonCyan">PORTFOLIO</span>
          </div>
          <p className="text-xs font-mono text-gray-500">
            Designed & Developed with curiosity, Three.js & Modern Web Systems.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: GithubIcon, url: owner.githubUrl, label: 'GitHub' },
            { icon: LinkedinIcon, url: owner.linkedinUrl, label: 'LinkedIn' },
            { icon: InstagramIcon, url: owner.instagramUrl, label: 'Instagram' },
            { icon: Mail, url: `mailto:${owner.email}`, label: 'Email' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="w-9 h-9 rounded-xl glass-panel border-white/5 text-gray-400 hover:text-neonCyan hover:border-cyan-500/40 transition-all flex items-center justify-center"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 rounded-xl glass-panel border-white/10 hover:border-neonCyan/40 text-xs font-mono text-gray-400 hover:text-white transition-all flex items-center gap-2 group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-neonCyan group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-600 text-center gap-2">
        <span>© {new Date().getFullYear()} Rakesh Biswal. All Rights Reserved.</span>
        <span>CUPGS, BPUT · Rourkela, Odisha, India</span>
      </div>
    </footer>
  );
}
