import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, FolderGit2, Info, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import MagneticButton from '../components/MagneticButton';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      {/* Background Section Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neonCyan/[0.04] rounded-full blur-[170px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neonCyan mb-3"
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>PORTFOLIO OF WORK</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Featured <span className="text-gradient">Innovations</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 font-sans"
        >
          Engineered solutions bridging computer vision, machine learning models, and modern full-stack web platforms.
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'aiml', label: 'AI & Machine Learning' },
          { id: 'web', label: '3D Web & Interactive' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              filter === tab.id
                ? 'bg-gradient-to-r from-neonCyan to-neonMagenta text-white font-bold shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                : 'glass-panel text-gray-400 hover:text-white border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-3xl glass-panel border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,245,255,0.12)] overflow-hidden"
          >
            {/* Top ambient color bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

            {/* Header info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono tracking-widest text-neonCyan uppercase px-2.5 py-1 rounded-full bg-neonCyan/10 border border-neonCyan/20">
                  {project.badge}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Inspect architecture"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-neonCyan transition-colors mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans mb-6">
                {project.shortDescription}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-neonCyan transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-mono text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
                >
                  Details
                </button>

                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-neonCyan via-neonPurple to-neonMagenta hover:opacity-90 transition-all flex items-center gap-1 shadow-sm"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Inspect Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
