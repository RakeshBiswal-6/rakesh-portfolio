import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Layers, Sparkles, Eye } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-accentBlue mb-2"
        >
          03 / 3D SHOWCASE
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-luxury-silver"
        >
          FEATURED PROJECTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-textMuted text-sm max-w-xl mt-3 font-sans"
        >
          Engineered systems combining computer vision, predictive intelligence, and interactive 3D web interfaces.
        </motion.p>
      </div>

      {/* Projects Grid with 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group rounded-3xl luxury-glass border-white/10 hover:border-accentBlue/40 p-7 flex flex-col justify-between transition-all duration-500 hover:shadow-luxury relative overflow-hidden"
          >
            {/* Top Sheen */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accentBlue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accentBlue px-3 py-1 rounded-full bg-accentBlue/10 border border-accentBlue/20">
                  {project.highlight}
                </span>

                <span className="text-[10px] font-mono text-textMuted">
                  {project.metrics}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold font-display text-white group-hover:text-accentBlue transition-colors mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-textMuted font-sans leading-relaxed mb-6">
                {project.shortDesc}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] text-accentSilver border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-textMuted hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-accentBlue" />
                <span>GITHUB REPO</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-accentSilver border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
                >
                  DETAILS
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-darkBg font-semibold bg-white hover:bg-accentSilver transition-all flex items-center gap-1 shadow-sm"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
