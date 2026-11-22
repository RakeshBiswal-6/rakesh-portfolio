import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Copy, ArrowUpRight, Orbit } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#A855F7', '#38BDF8', '#E2E8F0'],
      });
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-accentViolet mb-2 flex items-center gap-1.5"
        >
          <Orbit className="w-3.5 h-3.5" />
          <span>06 / FUTURISTIC 3D PORTAL</span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-luxury-silver"
        >
          LET'S CONNECT.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-textMuted text-sm max-w-md mt-3 font-sans"
        >
          Have a project idea or professional opportunity? Feel free to get in touch.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct Email Card */}
          <div className="p-6 rounded-3xl luxury-glass border-white/10 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accentViolet">
              DIRECT INQUIRY
            </span>
            <h3 className="text-xl font-bold font-display text-white">
              Email Dispatch
            </h3>
            <p className="text-xs text-textMuted font-sans">
              I am open to software developer roles, engineering internships, and technical collaborations.
            </p>

            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between gap-2 mt-4">
              <span className="text-xs font-mono text-accentSilver truncate">
                {personal.contact.email}
              </span>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-textMuted hover:text-white transition-colors"
                title="Copy Email"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Social Channels */}
          <div className="p-6 rounded-3xl luxury-glass border-white/10 space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-textMuted">
              CONNECT CHANNELS
            </span>

            <div className="space-y-2">
              {[
                { name: 'GitHub', handle: `@${personal.contact.githubUsername}`, url: personal.contact.github, icon: GithubIcon },
                { name: 'LinkedIn', handle: 'Rakesh Biswal', url: personal.contact.linkedin, icon: LinkedinIcon },
                { name: 'Instagram', handle: '@rakesh._.biswal', url: personal.contact.instagram, icon: InstagramIcon },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accentViolet/30 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-accentSilver group-hover:text-accentViolet transition-colors" />
                      <span className="text-xs font-semibold text-white">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-textMuted flex items-center gap-1 group-hover:text-white">
                      {item.handle}
                      <ArrowUpRight className="w-3 h-3 text-accentViolet" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Minimal Functional Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl luxury-glass border-white/10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full border border-accentViolet text-accentViolet flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  Message Dispatched
                </h4>
                <p className="text-xs text-textMuted max-w-sm">
                  Thank you for reaching out. I will respond to your email promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-full text-xs font-mono text-accentViolet border border-accentViolet/40 hover:bg-accentViolet/10 transition-colors mt-2"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-textMuted">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 focus:border-accentViolet focus:outline-none text-xs text-white font-sans transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-textMuted">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 focus:border-accentViolet focus:outline-none text-xs text-white font-sans transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-textMuted">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry or project opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 focus:border-accentViolet focus:outline-none text-xs text-white font-sans transition-colors placeholder:text-neutral-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full font-mono text-xs font-semibold text-darkBg bg-white hover:bg-accentSilver transition-all flex items-center justify-center gap-2 shadow-luxury disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'DISPATCHING...' : 'TRANSMIT MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
