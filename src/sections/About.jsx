import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Compass, Sparkles, Orbit } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-accentViolet mb-2 flex items-center gap-1.5"
        >
          <Orbit className="w-3.5 h-3.5" />
          <span>01 / PERSONAL UNIVERSE</span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-luxury-silver"
        >
          ABOUT ME
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Personal Statement Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 p-8 rounded-3xl luxury-glass border-white/10 space-y-5 relative overflow-hidden"
        >
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Hello, I'm Rakesh Biswal.
          </h3>

          <p className="text-sm sm:text-base text-accentSilver font-sans leading-relaxed">
            I am an engineering student interested in software development, full-stack technologies and artificial intelligence.
          </p>

          <p className="text-sm sm:text-base text-accentSilver font-sans leading-relaxed">
            I enjoy learning new technologies, solving problems and building useful digital experiences.
          </p>

          <p className="text-xs sm:text-sm text-textMuted font-sans leading-relaxed pt-2 border-t border-white/5">
            My goal is to continuously improve my technical knowledge, architect scalable systems, and engineer meaningful solutions with lasting value.
          </p>
        </motion.div>

        {/* Floating 3D Cards: Education & Focus */}
        <div className="lg:col-span-5 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl luxury-glass border-white/10 hover:border-accentViolet/40 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-accentViolet text-xs font-mono uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>
            <h4 className="font-bold text-white text-base">
              {personal.education.degree}
            </h4>
            <p className="text-xs text-textMuted mt-1">
              {personal.education.institution}, {personal.education.location}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-3xl luxury-glass border-white/10 hover:border-accentBlue/40 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-accentBlue text-xs font-mono uppercase tracking-wider mb-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Discipline</span>
            </div>
            <h4 className="font-bold text-white text-base">
              Full-Stack & Intelligent Systems
            </h4>
            <p className="text-xs text-textMuted mt-1">
              Crafting modern web architectures, backend workflows, and applied machine learning models.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
