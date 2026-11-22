import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import MarqueeText from './components/MarqueeText';
import ResumeModal from './components/ResumeModal';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import GithubSection from './sections/GithubSection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-neonCyan/30 selection:text-neonCyan relative overflow-x-hidden">
      {/* Cinematic Initial Preloader */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Award-style custom fluid cursor */}
      <CustomCursor />

      {/* Main Experience (revealed cleanly) */}
      {!loading && (
        <>
          <Navbar onOpenResume={() => setResumeOpen(true)} />
          <main>
            <Hero onOpenResume={() => setResumeOpen(true)} />
            <MarqueeText />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <GithubSection />
            <Contact />
          </main>
          <Footer />

          {/* Interactive Resume View/Download Modal */}
          <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
        </>
      )}
    </div>
  );
}
