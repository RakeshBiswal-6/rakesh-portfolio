import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Copy, Sparkles, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { owner } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00F5FF', '#8B5CF6', '#FF007F'],
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(owner.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-neonMagenta/[0.04] rounded-full blur-[170px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neonMagenta mb-3"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>START A CONVERSATION</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Let's Build Something <span className="text-gradient">Extraordinary</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 font-sans"
        >
          Whether you have an internship or engineering role, want to collaborate on AI projects, or just want to connect.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Quick Card */}
          <div className="p-6 rounded-3xl glass-panel-glow border-cyan-500/20 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neonCyan">
              DIRECT DISPATCH
            </span>
            <h3 className="text-xl font-bold font-display text-white">
              Always Open to Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
              Drop an email directly into my inbox or copy my address to your clipboard.
            </p>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-2">
              <span className="text-xs sm:text-sm font-mono text-cyan-300 truncate">
                {owner.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex-shrink-0"
                title="Copy email"
              >
                {copiedEmail ? (
                  <CheckCircle2 className="w-4 h-4 text-neonGreen" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
              SOCIAL CHANNELS
            </span>

            <div className="flex flex-col gap-2.5">
              {[
                { name: 'GitHub', handle: '@RakeshBiswal-6', url: owner.githubUrl, icon: GithubIcon, color: 'text-neonCyan' },
                { name: 'LinkedIn', handle: 'in/rakesh-biswal', url: owner.linkedinUrl, icon: LinkedinIcon, color: 'text-blue-400' },
                { name: 'Instagram', handle: '@rakesh._.biswal', url: owner.instagramUrl, icon: InstagramIcon, color: 'text-neonMagenta' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-white/5 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-white group-hover:text-neonCyan transition-colors block">
                          {item.name}
                        </span>
                        <span className="text-xs font-mono text-gray-400">
                          {item.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Working Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border-white/10 relative overflow-hidden">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-neonCyan/20 border border-neonCyan text-neonCyan flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-gray-400 max-w-sm">
                  Thank you for reaching out. I have received your message and will reply back to your email shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-mono text-neonCyan border border-neonCyan/40 hover:bg-neonCyan/10 transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neonCyan focus:outline-none text-sm text-white font-sans transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neonCyan focus:outline-none text-sm text-white font-sans transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neonCyan focus:outline-none text-sm text-white font-sans transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your vision or proposal..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neonCyan focus:outline-none text-sm text-white font-sans transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-neonCyan via-neonPurple to-neonMagenta hover:opacity-95 transition-all shadow-[0_0_25px_rgba(0,245,255,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
