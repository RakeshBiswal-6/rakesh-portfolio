import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy, Check, FileText, Sparkles, ExternalLink, GraduationCap, Code } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.owner.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00F5FF', '#8B5CF6', '#FF007F'],
    });

    // Generate a downloadable text/document resume file representation
    const resumeContent = `
=====================================================
RAKESH BISWAL — RESUME
AI/ML Engineer & Full-Stack Developer
Email: ${portfolioData.owner.email}
GitHub: ${portfolioData.owner.githubUrl}
LinkedIn: ${portfolioData.owner.linkedinUrl}
Instagram: ${portfolioData.owner.instagramUrl}
Location: ${portfolioData.owner.location}
=====================================================

EDUCATION:
${portfolioData.owner.degree}
${portfolioData.owner.university}

TECHNICAL SPECIALIZATIONS:
- Core Languages: Python, C++, Java, JavaScript (ES6+)
- AI / Machine Learning: Machine Learning, Artificial Intelligence, OpenCV, Keras, Random Forest, RecSys
- Frontend Development: React.js, HTML5, CSS3, Tailwind CSS, Responsive Design, Three.js
- Backend & Databases: Node.js, Express, REST APIs, SQLite, Firebase
- Tools & Workflows: Git, GitHub, VS Code, Linux

KEY PROJECTS:
1. Face Recognition Attendance System
   - Python, OpenCV, Keras, Flutter, Firebase, SQLite
2. Air Quality Monitoring & Prediction
   - Python, Random Forest, Scikit-Learn, Plotly
3. Movie Recommendation System
   - Python, Cosine Similarity, TMDB API
4. 3D Particle Galaxy Portfolio
   - React.js, Three.js, GSAP, Tailwind CSS

EXPERIENCE & ACTIVITIES:
- Machine Learning Intern: Jyesta Corporate Entity / E-Cell IIT Roorkee
- Active Participant in Hackathons & Technical Competitions
=====================================================
`;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rakesh_Biswal_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#090e1d] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,245,255,0.15)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neonCyan/10 border border-neonCyan/30 text-neonCyan">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Curriculum Vitae
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  {portfolioData.owner.name} · {portfolioData.owner.title}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Snapshot Content */}
          <div className="py-6 space-y-6">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-neonCyan text-xs font-mono uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education Background</span>
              </div>
              <h4 className="font-semibold text-white text-base">
                {portfolioData.owner.degree}
              </h4>
              <p className="text-sm text-gray-400">
                {portfolioData.owner.university}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-neonMagenta text-xs font-mono uppercase tracking-wider">
                <Code className="w-4 h-4" />
                <span>Core Proficiencies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js", "Node.js", "Python", "Machine Learning", 
                  "OpenCV", "C++", "Java", "Tailwind CSS", "Three.js", 
                  "Git & GitHub", "REST APIs", "Full-Stack Development"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-neonCyan/10 to-neonMagenta/10 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-neonCyan">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Aiming to leverage strong algorithmic logic, full-stack web craftsmanship, and machine learning models to solve complex real-world engineering challenges.
              </p>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 justify-end">
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-mono text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-neonGreen" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Copied!' : 'Copy Direct Email'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-neonCyan via-neonPurple to-neonMagenta hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
