import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { educationTimeline } = portfolioData;

  const typeIcons = {
    Education: GraduationCap,
    Experience: Briefcase,
    Achievements: Award,
    Certifications: CheckCircle,
  };

  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-accentBlue mb-2"
        >
          04 / 3D TIMELINE
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-luxury-silver"
        >
          EDUCATION & ACHIEVEMENTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-textMuted text-sm max-w-xl mt-3 font-sans"
        >
          Academic milestones, machine learning internship experience, and technical accomplishments.
        </motion.p>
      </div>

      {/* Minimal 3D Connected Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-10">
        {educationTimeline.map((item, index) => {
          const Icon = typeIcons[item.type] || GraduationCap;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* 3D Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#08090C] border-2 border-accentBlue shadow-[0_0_12px_rgba(56,189,248,0.7)]" />

              {/* Date Indicator */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-mono text-accentBlue font-semibold mb-2 sm:mb-0">
                {item.period}
              </div>

              {/* Card */}
              <div className="p-6 rounded-3xl luxury-glass border-white/10 hover:border-accentBlue/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accentSilver px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-textMuted">
                    {item.institution}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-accentSilver leading-relaxed font-sans mb-4">
                  {item.summary}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-[11px] font-mono text-textMuted bg-white/[0.02] px-2.5 py-1 rounded-lg border border-white/5"
                    >
                      • {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
