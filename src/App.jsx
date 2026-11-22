import React, { useState } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ResumeModal from './components/ResumeModal';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import GithubSection from './sections/GithubSection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8FAFC] relative overflow-x-hidden selection:bg-accentBlue/20 selection:text-accentBlue">
      {/* Complete Persistent 3D WebGL Environment */}
      <ThreeCanvas />

      {/* Luxury Custom Follower Cursor */}
      <CustomCursor />

      {/* Floating 3D Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Experience Flow */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <GithubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
