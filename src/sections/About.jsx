import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Brain, Compass, Target, Code, Terminal, Sparkles, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('journey');
  const { owner, aboutHighlights } = portfolioData;

  const tabs = [
    { id: 'journey', label: 'Development Journey', icon: Compass },
    { id: 'interests', label: 'Technical Interests', icon: Brain },
    { id: 'goals', label: 'Career Goals', icon: Target },
    { id: 'education', label: 'Academic Foundation', icon: GraduationCap },
  ];

  const tabContent = {
    journey: {
      title: "How I Began & Where I Am Headed",
      text: "Starting with foundational algorithmic problem solving in C++ and Python, my engineering curiosity rapidly branched into artificial intelligence and full-stack web applications. I believe software shouldn't just function—it should evoke delight through aesthetic precision, fast feedback loops, and intelligent autonomy.",
      stats: [
        { label: "Lines of Code", value: "100k+" },
        { label: "Core Projects", value: "8+" },
        { label: "Frameworks Used", value: "12+" },
      ],
    },
    interests: {
      title: "Passionate About Deep Tech & Interactive Systems",
      text: "My technical pursuits lie at the intersection of applied machine learning, computer vision (OpenCV, neural feature extractors), and next-generation 3D web interfaces powered by Three.js and modern React. I love crafting interfaces that feel tactile, responsive, and alive.",
      stats: [
        { label: "ML & Vision", value: "OpenCV / Keras" },
        { label: "3D & Web", value: "Three.js / React" },
        { label: "Architecture", value: "REST / APIs" },
      ],
    },
    goals: {
      title: "Building Scalable AI & Software Solutions",
      text: "My ambition is to contribute as an AI/ML Engineer and Software Developer at organizations building impact-driven products. Whether optimizing inference pipelines or designing flagship digital products, I aim to push engineering and creative boundaries.",
      stats: [
        { label: "Focus", value: "AI / ML & Web" },
        { label: "Mentality", value: "Continuous Growth" },
        { label: "Readiness", value: "Production Mindset" },
      ],
    },
    education: {
      title: "Engineering Education & Fundamentals",
      text: "Currently studying B.Tech in Computer Science & Engineering at CUPGS, BPUT, Rourkela, Odisha, India. Coursework includes Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, Machine Learning, and Software Engineering Principles.",
      stats: [
        { label: "Program", value: "B.Tech CSE" },
        { label: "Institute", value: "CUPGS, BPUT" },
        { label: "Location", value: "Odisha, India" },
      ],
    },
  };

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-neonCyan/[0.04] rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neonCyan mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT THE DEVELOPER</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Engineering Meets <span className="text-gradient">Creative Intelligence</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 font-sans"
        >
          A brief look into my background, core motivations, and technical identity as a Computer Science student and software builder.
        </motion.p>
      </div>

      {/* Interactive Tabs & Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Tab Selectors */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full p-4.5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group ${
                  isActive
                    ? 'glass-panel-glow border-neonCyan/40 bg-[#0c1322] shadow-[0_0_30px_rgba(0,245,255,0.15)]'
                    : 'glass-panel border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-neonCyan/20 text-neonCyan'
                        : 'bg-white/5 text-gray-400 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span
                      className={`text-sm font-semibold block transition-colors ${
                        isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500">
                      Explore aspect
                    </span>
                  </div>
                </div>
                <span
                  className={`font-mono text-xs transition-transform duration-300 ${
                    isActive ? 'text-neonCyan translate-x-1' : 'text-gray-600 group-hover:text-gray-400'
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}

          {/* Quick Location Badge */}
          <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-center gap-3 mt-2">
            <div className="p-2.5 rounded-xl bg-neonMagenta/10 text-neonMagenta">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                CURRENT BASE
              </span>
              <span className="text-xs font-semibold text-white">
                {owner.location}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Active Tab Content Display */}
        <div className="lg:col-span-7">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel-glow border-cyan-500/20 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neonCyan">
                {tabs.find((t) => t.id === activeTab)?.label}
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                {tabContent[activeTab].title}
              </h3>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {tabContent[activeTab].text}
            </p>

            {/* Quick Stats Grid for Active Tab */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              {tabContent[activeTab].stats.map((stat, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-base sm:text-xl font-extrabold font-display text-white text-gradient block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4 Animated Pillar Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {aboutHighlights.map((hl, index) => (
          <motion.div
            key={hl.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-5 rounded-2xl glass-panel border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(0,245,255,0.1)] transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neonCyan">
                {hl.metric}
              </span>
              <span className="text-[10px] font-mono text-gray-500">
                0{index + 1}
              </span>
            </div>
            <h4 className="font-bold text-white text-base mb-1.5 group-hover:text-neonCyan transition-colors">
              {hl.title}
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              {hl.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
