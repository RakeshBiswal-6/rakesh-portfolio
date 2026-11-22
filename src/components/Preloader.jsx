import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "INITIALIZING CORE SYSTEMS...",
    "COMPILING 3D SHADERS...",
    "CALIBRATING NEURAL MODELS...",
    "SYNCHRONIZING INTERFACES...",
    "WELCOME TO RAKESH BISWAL'S WORLD."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        const nextVal = Math.min(prev + increment, 100);
        
        // update status messages based on progress
        const sIdx = Math.min(Math.floor((nextVal / 100) * statuses.length), statuses.length - 1);
        setStatusIndex(sIdx);
        
        return nextVal;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -40,
        filter: "blur(12px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white px-6 select-none overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute w-[450px] h-[450px] bg-neonCyan/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute w-[450px] h-[450px] bg-neonMagenta/15 rounded-full blur-[120px] pointer-events-none -bottom-20 -right-20 animate-pulse-slow" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
        {/* Brand Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 rounded-2xl p-[1px] bg-gradient-to-tr from-neonCyan via-neonPurple to-neonMagenta mb-8 shadow-[0_0_35px_rgba(0,245,255,0.3)]"
        >
          <div className="w-full h-full bg-[#070c18] rounded-2xl flex items-center justify-center">
            <span className="font-display font-extrabold text-2xl tracking-wider text-gradient">
              RB
            </span>
          </div>
        </motion.div>

        {/* Name Reveal */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="space-y-1 mb-8"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-cyan-400/80 font-mono">
            PORTFOLIO EXPERIENCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
            RAKESH <span className="text-gradient">BISWAL</span>
          </h1>
        </motion.div>

        {/* Progress Display */}
        <div className="w-full space-y-3">
          <div className="flex justify-between items-end text-xs font-mono text-gray-400">
            <span className="text-neonCyan animate-pulse">
              {statuses[statusIndex]}
            </span>
            <span className="font-bold text-white text-base">
              {progress}%
            </span>
          </div>

          {/* Progress Bar with glowing head */}
          <div className="relative w-full h-[3px] bg-gray-800/80 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neonCyan via-neonPurple to-neonMagenta"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-xs font-mono text-gray-400 tracking-wider"
        >
          AI/ML · FULL-STACK · CREATIVE DEVELOPMENT
        </motion.p>
      </div>
    </motion.div>
  );
}
