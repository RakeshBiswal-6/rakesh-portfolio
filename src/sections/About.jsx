import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Compass, Sparkles } from 'lucide-react';
import Interactive3DObject from '../components/Interactive3DObject';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-accentBlue mb-2"
        >
          01 / PERSONAL IDENTITY
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
        {/* Left: 3D Interactive Profile Artifact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 h-80 sm:h-96 rounded-3xl luxury-glass border-white/10 p-6 flex flex-col items-center justify-between relative overflow-hidden"
        >
          <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-textMuted uppercase">
            <span>3D CORE ARTIFACT</span>
            <span className="text-accentBlue">INTERACTIVE</span>
          </div>

          <div className="w-52 h-52 relative my-auto">
            <Interactive3DObject shape="icosahedron" color={0x38BDF8} size={1.25} />
          </div>

          <div className="w-full text-center">
            <span className="text-xs font-mono text-accentSilver block">
              {personal.name}
            </span>
            <span className="text-[10px] font-mono text-textMuted">
              {personal.education.degree}
            </span>
          </div>
        </motion.div>

        {/* Right: Personal Statement & Floating Info Cards */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-3xl luxury-glass border-white/10 space-y-4"
          >
            {personal.aboutText.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base text-accentSilver font-sans leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Minimal Floating Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-2xl luxury-glass border-white/10 hover:border-accentBlue/30 transition-all"
            >
              <div className="flex items-center gap-2.5 text-accentBlue mb-2">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Education
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white">
                {personal.education.institution}
              </h4>
              <p className="text-xs text-textMuted mt-1">
                {personal.education.location}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-2xl luxury-glass border-white/10 hover:border-accentViolet/30 transition-all"
            >
              <div className="flex items-center gap-2.5 text-accentViolet mb-2">
                <Code2 className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Specialization
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white">
                Software & AI Systems
              </h4>
              <p className="text-xs text-textMuted mt-1">
                Full-Stack · Machine Learning
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
