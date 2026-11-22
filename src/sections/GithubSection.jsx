import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, GitCommit, GitPullRequest, Flame, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';

export default function GithubSection() {
  const { githubStats } = portfolioData;
  const [selectedCell, setSelectedCell] = useState(null);

  // Generate 52 weeks x 7 days simulated contribution grid data
  const weeks = 40;
  const days = 7;
  const contributionGrid = Array.from({ length: weeks }, (_, wIndex) =>
    Array.from({ length: days }, (_, dIndex) => {
      // Create natural cluster of contributions
      const seed = Math.sin(wIndex * 0.4) * Math.cos(dIndex * 0.7);
      let count = 0;
      if (seed > 0.5) count = Math.floor(Math.random() * 6) + 3;
      else if (seed > 0.1) count = Math.floor(Math.random() * 3) + 1;
      else if (seed > -0.2 && Math.random() > 0.5) count = 1;

      return {
        count,
        level: count === 0 ? 0 : count < 3 ? 1 : count < 5 ? 2 : 3,
        day: dIndex,
        week: wIndex,
      };
    })
  );

  const levelColors = [
    'bg-white/[0.04]', // 0
    'bg-emerald-900/60 border border-emerald-700/40', // 1
    'bg-emerald-600/80 border border-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.3)]', // 2
    'bg-neonCyan border border-cyan-300 shadow-[0_0_12px_rgba(0,245,255,0.7)]', // 3
  ];

  return (
    <section id="github" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-emerald-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 mb-3"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>OPEN SOURCE & CODE ACTIVITY</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          GitHub <span className="text-gradient-cyan">Profile & Activity</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 font-sans"
        >
          Continuous learning, repositories, and open source commits on GitHub.
        </motion.p>
      </div>

      {/* Top GitHub Statistics Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Public Repositories', value: githubStats.repositoriesCount, icon: BookOpen },
          { label: 'Annual Contributions', value: githubStats.contributionsThisYear, icon: GitCommit },
          { label: 'Total Stars Earned', value: githubStats.starsCount, icon: Star },
          { label: 'Total Commits', value: githubStats.totalCommits, icon: Flame },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl glass-panel border-white/5 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all"
            >
              <div className="p-2.5 rounded-xl bg-white/5 text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold font-display text-white text-gradient">
                {stat.value}
              </span>
              <span className="text-xs font-mono text-gray-400 mt-1">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Contribution Graph Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-3xl glass-panel-glow border-white/10 mb-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Contribution Activity Matrix
              </h3>
              <p className="text-xs font-mono text-gray-400">
                @{githubStats.username} · Active Year Breakdown
              </p>
            </div>
          </div>

          <a
            href={githubStats.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-white px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 w-fit"
          >
            <span>Follow on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Matrix Grid Canvas */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-1.5 min-w-[700px]">
            {contributionGrid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    onMouseEnter={() => setSelectedCell(day)}
                    onMouseLeave={() => setSelectedCell(null)}
                    className={`w-3.5 h-3.5 rounded-sm transition-all duration-150 cursor-pointer hover:scale-125 ${
                      levelColors[day.level]
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend & Tooltip */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-gray-400">
          <div>
            {selectedCell ? (
              <span className="text-neonCyan font-semibold">
                {selectedCell.count} contributions logged
              </span>
            ) : (
              <span>Hover over matrix cells to inspect density</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span>Less</span>
            {levelColors.map((cls, idx) => (
              <div key={idx} className={`w-3 h-3 rounded-sm ${cls}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </motion.div>

      {/* Pinned Repositories Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-neonCyan" />
          <span>Pinned & Open Repositories</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {githubStats.pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl glass-panel border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-neonCyan transition-colors" />
                    <h4 className="font-bold text-white text-base group-hover:text-neonCyan transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-neonCyan px-2 py-0.5 rounded-md bg-neonCyan/10">
                    Public
                  </span>
                </div>

                <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neonCyan" />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 hover:text-white">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-white">
                    <GitFork className="w-3.5 h-3.5 text-gray-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
