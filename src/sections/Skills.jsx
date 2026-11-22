import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Orbit, Layers, Sparkles } from 'lucide-react';
import Interactive3DObject from '../components/Interactive3DObject';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills3D } = portfolioData;
  const [selectedDomain, setSelectedDomain] = useState(skills3D[0].id);
  const [activeTech, setActiveTech] = useState(skills3D[0].technologies[0]);

  const currentDomain = skills3D.find((d) => d.id === selectedDomain) || skills3D[0];

  return (
    <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-accentViolet mb-2 flex items-center gap-1.5"
        >
          <Orbit className="w-3.5 h-3.5" />
          <span>02 / 3D TECHNOLOGY UNIVERSE</span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-luxury-silver"
        >
          SKILLS & TECHNOLOGIES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-textMuted text-sm max-w-xl mt-3 font-sans"
        >
          Select any technology to inspect its 3D architectural representation and domain description.
        </motion.p>
      </div>

      {/* Domain Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {skills3D.map((item) => {
          const isActive = selectedDomain === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setSelectedDomain(item.id);
                setActiveTech(item.technologies[0]);
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'bg-white text-darkBg font-bold shadow-luxury'
                  : 'luxury-glass text-textMuted hover:text-white border-white/5'
              }`}
            >
              <span className="text-accentViolet font-semibold">{item.id}.</span>
              <span>{item.domain}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive 3D Technology Showcase Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive 3D Sculpture of Active Tech */}
        <motion.div
          key={activeTech.name}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 rounded-3xl luxury-glass border-white/10 p-6 flex flex-col justify-between min-h-[360px] relative overflow-hidden"
        >
          <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-textMuted uppercase">
            <span className="flex items-center gap-1.5">
              <Orbit className="w-3.5 h-3.5 text-accentViolet" />
              <span>GEOMETRIC ARTIFACT</span>
            </span>
            <span className="text-accentViolet uppercase font-semibold">
              {activeTech.geometry}
            </span>
          </div>

          <div className="w-56 h-56 mx-auto relative my-2">
            <Interactive3DObject
              shape={activeTech.geometry}
              color={selectedDomain === '04' ? 0xA855F7 : 0x38BDF8}
              size={1.3}
            />
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
            <h4 className="text-lg font-bold font-display text-white mb-1">
              {activeTech.name}
            </h4>
            <p className="text-xs text-textMuted font-sans leading-relaxed">
              {activeTech.description}
            </p>
          </div>
        </motion.div>

        {/* Right Column: 3D Technology Glass Cards Grid */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="p-5 rounded-2xl luxury-glass border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-accentViolet uppercase block mb-1">
                DOMAIN {currentDomain.id}
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                {currentDomain.domain}
              </h3>
            </div>
            <span className="text-xs font-mono text-textMuted hidden sm:inline-block">
              {currentDomain.shortDesc}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentDomain.technologies.map((tech) => {
              const isSelected = activeTech.name === tech.name;
              return (
                <button
                  key={tech.name}
                  onClick={() => setActiveTech(tech)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? 'luxury-glass border-accentViolet/50 bg-[#16132A] shadow-purple-glow'
                      : 'luxury-glass border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm font-semibold tracking-wide transition-colors ${
                        isSelected ? 'text-white' : 'text-accentSilver group-hover:text-white'
                      }`}
                    >
                      {tech.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-accentViolet/20 text-accentViolet border border-accentViolet/30'
                          : 'bg-white/5 text-textMuted'
                      }`}
                    >
                      {tech.geometry}
                    </span>
                  </div>

                  <p className="text-xs text-textMuted font-sans line-clamp-2 leading-relaxed">
                    {tech.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
