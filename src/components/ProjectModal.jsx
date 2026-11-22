import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl bg-[#0C0E13] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-luxury z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-accentBlue px-2.5 py-0.5 rounded-full bg-accentBlue/10 border border-accentBlue/20">
                {project.highlight}
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-2">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-textMuted hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="py-6 space-y-6">
            <p className="text-accentSilver text-xs sm:text-sm leading-relaxed font-sans">
              {project.fullDesc}
            </p>

            <div>
              <span className="text-[10px] font-mono text-textMuted uppercase tracking-widest block mb-2">
                TECHNOLOGIES UTILIZED
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-accentSilver border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-mono text-accentSilver border border-white/10 hover:border-accentBlue/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-3.5 h-3.5 text-accentBlue" />
              <span>GITHUB REPOSITORY</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
