import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Brain, Cpu, Rocket } from 'lucide-react';

export default function MarqueeText() {
  const items = [
    { text: "AI & MACHINE LEARNING", icon: Brain },
    { text: "FULL-STACK WEB SYSTEMS", icon: Code2 },
    { text: "THREE.JS & 3D GRAPHICS", icon: Sparkles },
    { text: "INTELLIGENT COMPUTING", icon: Cpu },
    { text: "TURNING IDEAS INTO REALITY", icon: Rocket },
  ];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-white/5 bg-[#070c18]/50 backdrop-blur-md select-none">
      {/* Side gradient fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        {/* First track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center gap-8 whitespace-nowrap pr-8"
        >
          {[...items, ...items, ...items].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4 group">
                <span className="font-display font-extrabold text-lg sm:text-2xl tracking-wider text-gray-400 group-hover:text-neonCyan transition-colors">
                  {item.text}
                </span>
                <Icon className="w-5 h-5 text-neonMagenta/70 group-hover:text-neonCyan group-hover:rotate-45 transition-all duration-300" />
                <span className="text-gray-700 font-mono text-sm">✦</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
