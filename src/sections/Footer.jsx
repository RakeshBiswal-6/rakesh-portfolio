import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#060709] py-14 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Statement */}
        <div className="text-center md:text-left space-y-1">
          <div className="font-display font-bold text-sm tracking-widest text-white">
            {personal.brandStatement}
          </div>
          <p className="text-xs font-mono text-textMuted">
            {personal.education.degree} · {personal.education.institution}, {personal.education.location}
          </p>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {[
              { icon: GithubIcon, url: personal.contact.github, label: 'GitHub' },
              { icon: LinkedinIcon, url: personal.contact.linkedin, label: 'LinkedIn' },
              { icon: InstagramIcon, url: personal.contact.instagram, label: 'Instagram' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-8 h-8 rounded-full luxury-glass border-white/5 text-textMuted hover:text-white hover:border-accentBlue/40 transition-all flex items-center justify-center"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-1.5 rounded-full luxury-glass border border-white/10 hover:border-accentBlue/40 text-[11px] font-mono text-accentSilver hover:text-white transition-all flex items-center gap-1.5 group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3 text-accentBlue group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-textMuted text-center gap-2">
        <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
        <span>Crafted with React, Three.js & Tailwind CSS.</span>
      </div>
    </footer>
  );
}
