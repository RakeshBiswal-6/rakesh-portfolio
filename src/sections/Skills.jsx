import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Terminal,
  BrainCircuit,
  Wrench,
  Sparkles,
  Layers,
  Cpu,
  Zap,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { skillCategories } = portfolioData;

  const categoryIcons = {
    frontend: Code,
    backend: Server,
    languages: Terminal,
    aiml: BrainCircuit,
    tools: Wrench,
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-neonMagenta/[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] bg-neonCyan/[0.05] rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neonCyan mb-3"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>TECHNICAL ARSENAL</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Skills & <span className="text-gradient">Specializations</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 font-sans"
        >
          Organized into five core disciplines across modern software development, artificial intelligence, and developer tooling.
        </motion.p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-neonCyan to-neonMagenta text-white font-bold shadow-[0_0_15px_rgba(0,245,255,0.3)]'
              : 'glass-panel text-gray-400 hover:text-white border-white/5'
          }`}
        >
          All Domains
        </button>
        {skillCategories.map((cat) => {
          const Icon = categoryIcons[cat.id] || Zap;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all duration-200 ${
                isActive
                  ? 'bg-neonCyan/20 text-neonCyan border border-neonCyan/50 shadow-[0_0_15px_rgba(0,245,255,0.2)]'
                  : 'glass-panel text-gray-400 hover:text-white border-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid by Category */}
      <div className="space-y-10">
        {displayedCategories.map((category) => {
          const Icon = categoryIcons[category.id] || Zap;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl glass-panel-glow border-white/10 relative overflow-hidden"
            >
              {/* Category Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neonCyan/10 border border-neonCyan/30 text-neonCyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans">
                      {category.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-neonCyan px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                  {category.skills.length} Capabilities
                </span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-semibold text-sm text-gray-200 group-hover:text-neonCyan transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neonMagenta px-2 py-0.5 rounded-md bg-neonMagenta/10">
                        {skill.experience}
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: idx * 0.05 }}
                        className="h-full bg-gradient-to-r from-neonCyan via-neonPurple to-neonMagenta rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
