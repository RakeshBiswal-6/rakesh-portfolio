import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy, Check, FileText, GraduationCap, Code } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const { personal, educationTimeline } = portfolioData;

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#E2E8F0', '#818CF8'],
    });

    const content = `
=====================================================
${personal.name.toUpperCase()} — RESUME
${personal.tagline}
Email: ${personal.contact.email}
GitHub: ${personal.contact.github}
LinkedIn: ${personal.contact.linkedin}
Instagram: ${personal.contact.instagram}
=====================================================

EDUCATION:
${personal.education.degree}
${personal.education.institution}, ${personal.education.location}

TECHNICAL PROFILE:
- Frontend: HTML, CSS, JavaScript, React.js
- Backend: Node.js, Full-Stack Development
- Programming: Java, C++, Python
- AI/ML & Tools: Artificial Intelligence, Machine Learning, Git, GitHub, VS Code

CORE PROJECTS:
1. Face Recognition Attendance System
   - Python, OpenCV, Keras, Flutter/Web, Firebase, SQLite
2. Air Quality Monitoring & Prediction
   - Python, Random Forest, Scikit-Learn, Plotly
3. Movie Recommendation System
   - Python, Cosine Similarity, TMDB API
4. Immersive 3D Personal Developer Portfolio
   - React.js, Three.js, R3F, Tailwind CSS

MILESTONES & ACTIVITIES:
- Machine Learning Intern: Jyesta Corporate Entity / E-Cell IIT Roorkee
- Active Participation in Hackathons & Technical Competitions
=====================================================
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personal.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl bg-[#0C0E13] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-luxury z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/5 text-accentBlue">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  CURRICULUM VITAE
                </h3>
                <p className="text-xs font-mono text-textMuted">
                  {personal.name} · {personal.education.degree}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-textMuted hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Snapshot */}
          <div className="py-6 space-y-5">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accentBlue">
                ACADEMIC CREDENTIALS
              </span>
              <h4 className="text-sm font-semibold text-white">
                {personal.education.degree}
              </h4>
              <p className="text-xs text-textMuted">
                {personal.education.institution}, {personal.education.location}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-textMuted">
                CORE TECHNICAL COMPETENCIES
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'React.js', 'Node.js', 'JavaScript', 'Python', 'C++', 'Java',
                  'HTML/CSS', 'Machine Learning', 'Artificial Intelligence',
                  'Full-Stack Development', 'Git & GitHub', 'VS Code',
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-accentSilver border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-textMuted font-sans leading-relaxed pt-2">
              {personal.aboutText[2]}
            </p>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 justify-end">
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-mono text-accentSilver border border-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED' : 'COPY EMAIL'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-mono font-semibold text-darkBg bg-white hover:bg-accentSilver transition-all flex items-center justify-center gap-2 shadow-luxury"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
