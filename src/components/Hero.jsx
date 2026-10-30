import React, { useState } from 'react';
import CyberTerminal from './CyberTerminal';

/**
 * Hero Component
 * Opening Hero intro screen featuring:
 * - Status Badge: Animated blinking radar pill: '🟢 Student Developer // Open for Internships'
 * - Main Headline: 'Hey, I am Pranav P — Building the Future of Tech.'
 * - Student Bio: '3rd year AIML student from K S Institute of Technology, passionate about web development, AI, and building real-world projects.'
 * - Glowing emerald primary button 'View My Projects'
 * - Outline secondary button 'Download Resume / CV'
 * - Interactive CyberTerminal HUD & Quick Badges
 */
export const Hero = ({ onDownloadResume, onViewProjects }) => {
  const triggerCanvasPulse = () => {
    const event = new MouseEvent('click', {
      clientX: window.innerWidth * 0.5,
      clientY: window.innerHeight * 0.45,
      bubbles: true
    });
    window.dispatchEvent(event);
  };

  const quickBadges = [
    { label: '3rd Year AIML', icon: '🧠', detail: 'KSIT Bengaluru' },
    { label: 'Modern Web & AI', icon: '⚡', detail: 'React · Tailwind · Python' },
    { label: 'Summer 2025', icon: '🎯', detail: 'Available for Hire' }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 sm:pb-24 lg:pt-32 lg:pb-32 overflow-hidden z-10"
    >
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[300px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge: Animated blinking radar pill */}
            <div
              id="status-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs sm:text-sm tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all cursor-default group"
            >
              <div className="relative flex items-center justify-center w-3 h-3">
                <span className="absolute w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              </div>
              <span className="font-semibold text-emerald-300">Student Developer</span>
              <span className="text-emerald-500/50 font-bold">//</span>
              <span className="text-slate-200 group-hover:text-white transition-colors">
                Open for Internships
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="main-headline"
              className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Hey, I am{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  Pranav P
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-lime-400 to-transparent rounded-full opacity-70" />
              </span>{' '}
              — <br className="hidden sm:inline" />
              <span className="text-slate-100 font-bold">
                Building the Future of Tech.
              </span>
            </h1>

            {/* Student Bio */}
            <p
              id="student-bio"
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              <span className="text-emerald-300 font-semibold">3rd year AIML student</span> from{' '}
              <span className="text-white font-semibold underline decoration-emerald-500/40 underline-offset-4">
                K S Institute of Technology
              </span>
              , passionate about web development, AI, and building real-world projects that solve meaningful problems.
            </p>

            {/* Action Buttons */}
            <div
              id="hero-action-buttons"
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Glowing Emerald Primary Button */}
              <button
                id="btn-view-projects"
                onClick={onViewProjects}
                className="relative group overflow-hidden w-full sm:w-auto px-7 py-4 rounded-xl font-mono text-sm font-bold text-[#0d1117] bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-1000 ease-out" />
                <span>View My Projects</span>
                <svg className="w-4 h-4 text-[#0d1117] group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              {/* Outline Secondary Button */}
              <button
                id="btn-download-resume"
                onClick={onDownloadResume}
                className="relative group w-full sm:w-auto px-7 py-4 rounded-xl font-mono text-sm font-semibold text-emerald-300 border border-emerald-500/40 hover:border-emerald-300 bg-[#1e2633]/70 hover:bg-emerald-500/10 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <svg className="w-4 h-4 text-emerald-400 group-hover:-translate-y-0.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume / CV</span>
              </button>
            </div>

            {/* Quick Metrics / Highlights */}
            <div className="mt-12 pt-8 border-t border-[#21262d] w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#1e2633]/50 border border-[#21262d] hover:border-emerald-500/30 transition-all flex items-center gap-3 group"
                >
                  <span className="text-xl p-2 rounded-lg bg-[#161b22] border border-[#21262d] group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </span>
                  <div>
                    <div className="text-xs font-mono font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {badge.label}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {badge.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Cyber Terminal */}
          <div className="lg:col-span-5 w-full mt-6 lg:mt-0">
            <CyberTerminal onTriggerShockwave={triggerCanvasPulse} />
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-400 px-2">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                <span>Hover or click grid to ripple</span>
              </span>
              <span className="text-emerald-400/80">Interactive 3D Matrix</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
