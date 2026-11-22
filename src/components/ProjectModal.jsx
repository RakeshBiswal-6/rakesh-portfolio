import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#0a0f1d] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,245,255,0.15)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neonCyan px-2.5 py-1 rounded-full bg-neonCyan/10 border border-neonCyan/20">
                {project.badge}
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-3">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="py-6 space-y-6">
            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Key Technical Highlights / Stats */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(project.stats).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                      {key}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white text-gradient">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-neonMagenta" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-300"
                  >
                    {tech}
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
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono text-gray-200 border border-white/10 hover:border-neonCyan/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4 text-neonCyan" />
              <span>View Repository</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono text-white bg-gradient-to-r from-neonCyan via-neonPurple to-neonMagenta hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.25)]"
            >
              <span>Live Deployment</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
