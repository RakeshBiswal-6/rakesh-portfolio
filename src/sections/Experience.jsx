import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap, CheckCircle2, Calendar, Milestone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const [filter, setFilter] = useState('all');
  const { timeline } = portfolioData;

  const filteredItems =
    filter === 'all' ? timeline : timeline.filter((item) => item.category === filter);

  return (
    <section id="timeline" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-neonPurple/[0.05] rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neonCyan mb-3"
        >
          <Milestone className="w-3.5 h-3.5" />
          <span>TRAJECTORY & MILESTONES</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Journey & <span className="text-gradient">Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 font-sans"
        >
          Academic records, machine learning internships, technical workshops, and hackathon participation.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {[
          { id: 'all', label: 'All Timeline' },
          { id: 'education', label: 'Academics' },
          { id: 'experience', label: 'Internships' },
          { id: 'achievement', label: 'Hackathons' },
          { id: 'certification', label: 'Certifications' },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              filter === btn.id
                ? 'bg-gradient-to-r from-neonCyan to-neonMagenta text-white font-bold shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                : 'glass-panel text-gray-400 hover:text-white border-white/5'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Modern Connected Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-10"
          >
            {/* Timeline Node Glow Marker */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-neonCyan shadow-[0_0_12px_rgba(0,245,255,0.8)]" />

            {/* Date Indicator (Left column on desktop) */}
            <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-mono text-neonCyan font-semibold mb-2 sm:mb-0">
              {item.year}
            </div>

            {/* Content Card */}
            <div className="p-6 rounded-3xl glass-panel-glow border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neonMagenta px-2.5 py-0.5 rounded-full bg-neonMagenta/10 border border-neonMagenta/20">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {item.organization}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-4">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-white/[0.02] px-2.5 py-1 rounded-lg border border-white/5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-neonCyan" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
