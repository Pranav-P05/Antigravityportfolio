import React, { useState } from 'react';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import CursorSparkFollower from './components/CursorSparkFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStackSkills from './components/TechStackSkills';
import EducationCampusJourney from './components/EducationCampusJourney';
import ContactSection from './components/ContactSection';

export const App = () => {
  const [toastMessage, setToastMessage] = useState(null);

  const handleDownloadResume = () => {
    setToastMessage("📄 Downloading Pranav_P_Resume_AIML.pdf...");
    const dummyResumeContent = `PRANAV P - STUDENT DEVELOPER RESUME
Education: B.E. in Artificial Intelligence & Machine Learning (AIML)
College: K S Institute of Technology, Bengaluru
Email: pranav.p16082007@gmail.com
Role: Open for Web Development & AI Internships
Skills: React, Tailwind CSS, TypeScript, Python, PyTorch, FastAPI, Node.js
Portfolio: Hey, I am Pranav P — Building the Future of Tech.`;

    const blob = new Blob([dummyResumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pranav_P_Resume_AIML_KSIT.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleViewProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectAction = (project, actionType) => {
    if (actionType === 'demo') {
      setToastMessage(`🚀 Opening Live Demo for ${project.title}...`);
      window.open(project.demoUrl || '#', '_blank', 'noopener,noreferrer');
    } else if (actionType === 'github') {
      setToastMessage(`💻 Opening GitHub Repository for ${project.title}...`);
      window.open(project.githubUrl || '#', '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 overflow-x-hidden selection:bg-emerald-500 selection:text-[#0d1117]">
      {/* Background Matrix Dot Grid with Mouse Ripple & Perspective Shift */}
      <MatrixGridCanvas rippleMultiplier={1} showConstellations={true} />

      {/* Subtle Custom Cursor Follower & Trailing Spark (Easter Egg) */}
      <CursorSparkFollower />

      {/* Floating Frosted-Glass Navbar */}
      <Navbar
        onDownloadResume={handleDownloadResume}
        onViewProjects={handleViewProjects}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Intro Hero Section */}
        <Hero
          onDownloadResume={handleDownloadResume}
          onViewProjects={handleViewProjects}
        />

        {/* 2. Directly Below Intro: Featured Projects Showcase */}
        <FeaturedProjects onAction={handleProjectAction} />

        {/* 3. Directly Below Projects: Interactive Tech Stack & Skills */}
        <TechStackSkills />

        {/* 4. Directly Below Skills: Education & Campus Journey */}
        <EducationCampusJourney />

        {/* 5. Student-Friendly Contact Section */}
        <ContactSection onToast={(msg) => setToastMessage(msg)} />
      </main>

      {/* Polish Footer */}
      <footer className="relative z-10 py-12 border-t border-[#21262d] bg-[#161b22]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 text-center">
          
          {/* Centered Line requested by User */}
          <div className="text-sm font-mono text-slate-300 flex items-center justify-center flex-wrap gap-2">
            <span>Designed & Engineered by</span>
            <span className="text-emerald-400 font-bold">PRANAV P</span>
            <span className="text-emerald-500/60 font-bold">•</span>
            <span className="text-slate-300 font-semibold">Class of 2029.</span>
          </div>

          {/* Quick Sub-Details & Status */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>KSIT Bengaluru // AIML</span>
            </span>
            <span>•</span>
            <a
              href="mailto:pranav.p16082007@gmail.com"
              className="hover:text-emerald-300 transition-colors"
            >
              pranav.p16082007@gmail.com
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="text-emerald-400 hover:text-lime-300 transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1e2633] border border-emerald-500/50 text-slate-100 shadow-2xl backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-emerald-200">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-2 text-xs font-mono"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
