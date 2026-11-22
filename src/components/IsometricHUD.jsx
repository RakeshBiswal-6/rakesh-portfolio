import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function IsometricHUD() {
  const { personal } = portfolioData;
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const calculateFps = (now) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.min(Math.round((frameCount * 1000) / (now - lastTime)), 60));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calculateFps);
    };

    animId = requestAnimationFrame(calculateFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <aside aria-label="Isometric HUD" className="fixed bottom-6 left-6 right-6 z-30 pointer-events-none hidden lg:flex items-center justify-between select-none text-[11px] font-mono text-textMuted">
      {/* Left: Quality & FPS telemetry */}
      <div className="flex items-center gap-4 pointer-events-auto luxury-glass px-4 py-2 rounded-full border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accentBlue" />
          <span className="text-accentSilver">3D ISOMETRIC GRID</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="flex items-center gap-1">
          <span className="text-white font-bold">{fps}</span>
          <span className="text-textMuted text-[10px]">FPS</span>
        </div>
      </div>

      {/* Center: Quick Architectural Nodes (Inspired by Reference) */}
      <div className="pointer-events-auto hidden xl:flex items-center gap-2 luxury-glass px-4 py-1.5 rounded-full border-white/5">
        {[
          { label: 'ABOUT ME', href: '#about' },
          { label: 'SKILLS', href: '#skills' },
          { label: 'PROJECTS', href: '#projects' },
          { label: 'EXPERIENCE', href: '#education' },
          { label: 'CONTACT', href: '#contact' },
        ].map((node) => (
          <a
            key={node.label}
            href={node.href}
            className="px-2.5 py-1 rounded-md text-[10px] tracking-wider text-textMuted hover:text-white hover:bg-white/5 transition-colors"
          >
            ┌ {node.label} ┐
          </a>
        ))}
      </div>

      {/* Right: Open To Work Pill */}
      <div className="pointer-events-auto flex items-center gap-3">
        <a
          href="#contact"
          className="flex items-center gap-2 luxury-glass px-4 py-2 rounded-full border-white/10 hover:border-accentBlue/40 text-accentSilver hover:text-white transition-all shadow-luxury"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wider text-xs">OPEN TO WORK</span>
        </a>
      </div>
    </aside>
  );
}
