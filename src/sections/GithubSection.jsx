import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, GitFork, GitCommit, ArrowUpRight, Flame } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';

export default function GithubSection() {
  const { github } = portfolioData;

  // 36 weeks contribution grid
  const weeks = 36;
  const days = 7;
  const grid = Array.from({ length: weeks }, (_, wIdx) =>
    Array.from({ length: days }, (_, dIdx) => {
      const v = Math.sin(wIdx * 0.45) * Math.cos(dIdx * 0.65);
      const active = v > 0.1 || (v > -0.2 && (wIdx + dIdx) % 3 === 0);
      return active ? (v > 0.5 ? 3 : v > 0.2 ? 2 : 1) : 0;
    })
  );

  const colors = [
    'bg-white/[0.04]',
    'bg-accentBlue/30 border border-accentBlue/40',
    'bg-accentBlue/60 border border-accentBlue/70 shadow-[0_0_8px_rgba(56,189,248,0.3)]',
    'bg-accentBlue border border-white shadow-[0_0_12px_rgba(56,189,248,0.8)]',
  ];

  return (
    <section id="github" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-accentBlue mb-2"
        >
          05 / CODE ACTIVITY
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-luxury-silver"
        >
          GITHUB INTEGRATION
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-textMuted text-sm max-w-xl mt-3 font-sans"
        >
          Repositories, open-source work, and code commit history for @{github.username}.
        </motion.p>
      </div>

      {/* Stats Counter */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Public Repositories', value: github.stats.repos, icon: BookOpen },
          { label: 'Annual Contributions', value: github.stats.contributions, icon: GitCommit },
          { label: 'Total Stars', value: github.stats.stars, icon: Star },
          { label: 'Commits Logged', value: github.stats.commits, icon: Flame },
        ].map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 rounded-2xl luxury-glass border-white/5 flex flex-col items-center text-center"
            >
              <div className="p-2 rounded-xl bg-white/5 text-accentBlue mb-3">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {s.value}
              </span>
              <span className="text-[11px] font-mono text-textMuted mt-1">
                {s.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Contribution Activity Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-3xl luxury-glass border-white/10 mb-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-white/10 gap-3">
          <div className="flex items-center gap-3">
            <GithubIcon className="w-5 h-5 text-accentBlue" />
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Contribution Activity
              </h3>
              <p className="text-xs font-mono text-textMuted">
                Active Year Progression · @{github.username}
              </p>
            </div>
          </div>

          <a
            href={github.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accentSilver hover:text-white px-3.5 py-1.5 rounded-full border border-white/10 hover:border-accentBlue/50 transition-colors w-fit"
          >
            <span>VIEW GITHUB PROFILE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accentBlue" />
          </a>
        </div>

        {/* Matrix Canvas */}
        <div className="overflow-x-auto pb-3">
          <div className="flex gap-1.5 min-w-[650px]">
            {grid.map((week, w) => (
              <div key={w} className="flex flex-col gap-1.5">
                {week.map((level, d) => (
                  <div
                    key={d}
                    className={`w-3 h-3 rounded-[3px] transition-transform duration-150 hover:scale-125 ${colors[level]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-textMuted">
          <span>Continuous learning & weekly commits</span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            {colors.map((c, i) => (
              <div key={i} className={`w-2.5 h-2.5 rounded-[2px] ${c}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </motion.div>

      {/* Pinned Repositories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {github.pinned.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl luxury-glass border-white/5 hover:border-accentBlue/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-white text-base group-hover:text-accentBlue transition-colors">
                  {repo.name}
                </h4>
                <span className="text-[10px] font-mono text-accentBlue px-2 py-0.5 rounded-full bg-accentBlue/10">
                  Public
                </span>
              </div>
              <p className="text-xs text-textMuted font-sans leading-relaxed mb-4">
                {repo.desc}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono text-textMuted">
              <span className="flex items-center gap-1.5 text-accentSilver">
                <span className="w-2 h-2 rounded-full bg-accentBlue" />
                {repo.language}
              </span>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 hover:text-white">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1 hover:text-white">
                  <GitFork className="w-3.5 h-3.5 text-textMuted" />
                  {repo.forks}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
