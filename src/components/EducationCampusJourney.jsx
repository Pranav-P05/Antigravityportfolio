import React, { useState } from 'react';

/**
 * EducationCampusJourney Component
 * Placed directly below Tech Stack & Skills.
 * - Interactive Milestone Timeline with illuminated emerald vertical line & glowing nodal dots
 *   1. 2026: Pre-Final Year B.Tech & Hackathon Finalist
 *   2. 2025: Core Technical Club Member / Web Lead
 *   3. 2024: Began Degree & Built First Web App
 * - Compact 2x2 Grid of Accomplishment Callouts with hover highlights:
 *   1. 🏆 1st Place - University Hackathon
 *   2. ⚡ 150+ LeetCode Problems Solved
 *   3. 👥 Tech Club Organizer
 *   4. 📜 Full-Stack Certified
 */
export const EducationCampusJourney = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      year: '2026',
      status: 'Current // Pre-Final Year',
      title: 'Pre-Final Year B.Tech & Hackathon Finalist',
      note: 'Specializing in AIML at KSIT Bengaluru; advancing to national-level hackathon finals with real-world edge computer vision prototypes.',
      tags: ['AIML Core', 'Hackathon Finalist', 'Applied Research'],
      icon: '🎯'
    },
    {
      year: '2025',
      status: 'Leadership & Dev',
      title: 'Core Technical Club Member / Web Lead',
      note: 'Spearheaded collegiate dev workshops, managed frontend portal architectures, and mentored 40+ engineering juniors in modern web technologies.',
      tags: ['Web Lead', 'Mentorship', 'Workshops & Events'],
      icon: '⚡'
    },
    {
      year: '2024',
      status: 'Degree Inception',
      title: 'Began Degree & Built First Web App',
      note: 'Commenced B.E. in Artificial Intelligence & Machine Learning at K S Institute of Technology and shipped my first production JavaScript application.',
      tags: ['KSIT Bangalore', 'First Deployment', 'CS Foundations'],
      icon: '🌱'
    }
  ];

  const achievementBadges = [
    {
      icon: '🏆',
      title: '1st Place - University Hackathon',
      highlight: 'Hackathon Champion',
      description: 'Winner among 40+ collegiate developer teams for intelligent edge vision tooling.'
    },
    {
      icon: '⚡',
      title: '150+ LeetCode Problems Solved',
      highlight: 'DSA Mastery',
      description: 'Consistent focus on algorithms, trees, dynamic programming, and graph theory.'
    },
    {
      icon: '👥',
      title: 'Tech Club Organizer',
      highlight: 'Community Leader',
      description: 'Hosted hands-on React & Python bootcamps for student engineering peers.'
    },
    {
      icon: '📜',
      title: 'Full-Stack Certified',
      highlight: 'Verified Credential',
      description: 'Accredited in Modern Full-Stack Web Development, Component Architecture & APIs.'
    }
  ];

  return (
    <section
      id="campus-life"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>ACADEMIA // CAMPUS MILESTONES</span>
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Education & Campus Journey
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base font-body leading-relaxed">
          Tracking my engineering progression at K S Institute of Technology and student leadership accomplishments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Interactive Milestone Timeline */}
        <div className="lg:col-span-7 relative">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Chronological Milestones (2024 - 2026)</span>
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Hover node to inspect
            </span>
          </div>

          <div className="relative pl-8 sm:pl-10 space-y-8">
            {/* Illuminated Vertical Emerald Timeline Line */}
            <div className="absolute left-3 sm:left-4 top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500 to-lime-400 shadow-[0_0_10px_#10b981]" />

            {milestones.map((m, idx) => {
              const isSelected = activeMilestone === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveMilestone(idx)}
                  className="relative group cursor-pointer"
                >
                  {/* Glowing Nodal Dot on Line */}
                  <div
                    className={`absolute -left-8 sm:-left-10 top-5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-carbon-50 border-2 border-emerald-400 shadow-[0_0_15px_#10b981] scale-110'
                        : 'bg-carbon-100 border border-emerald-500/40 group-hover:border-emerald-400 group-hover:scale-105'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {isSelected && (
                      <span className="absolute w-full h-full rounded-full bg-emerald-400/40 animate-ping" />
                    )}
                  </div>

                  {/* Milestone Card */}
                  <div
                    className={`rounded-2xl p-5 sm:p-6 backdrop-blur-md border transition-all duration-300 relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#161b22]/95 border-emerald-500/50 shadow-[0_12px_30px_rgba(16,185,129,0.2)] -translate-y-1'
                        : 'bg-[#161b22]/70 border-[#21262d] hover:border-emerald-500/30 hover:bg-[#161b22]/90'
                    }`}
                  >
                    {/* Top ambient highlight */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent pointer-events-none" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                          {m.year}
                        </span>
                        <span className="text-xs font-mono text-emerald-400/90 font-medium">
                          // {m.status}
                        </span>
                      </div>
                      <span className="text-lg">{m.icon}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {m.title}
                    </h3>

                    {/* Brief 1-Line Note */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans">
                      {m.note}
                    </p>

                    {/* Milestone Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {m.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-carbon-50 border border-carbon-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Academic Overview & 2x2 Achievement Badges */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Academic Profile Snapshot Card */}
          <div className="rounded-2xl bg-[#161b22]/80 backdrop-blur-md border border-emerald-500/25 p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-carbon-50 border border-emerald-500/30 flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(16,185,129,0.2)] flex-shrink-0">
                🏛️
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  K S Institute of Technology
                </h3>
                <p className="text-xs font-mono text-emerald-400">
                  Bengaluru, Karnataka · Class of 2026
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Department of Artificial Intelligence & Machine Learning (AIML)
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#21262d] grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-[#0d1117] border border-[#21262d]">
                <span className="text-slate-400 block text-[10px]">AFFILIATION</span>
                <span className="text-slate-200 font-semibold">VTU Recognized</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0d1117] border border-[#21262d]">
                <span className="text-slate-400 block text-[10px]">ACADEMIC FOCUS</span>
                <span className="text-emerald-300 font-semibold">AIML Core & Web</span>
              </div>
            </div>
          </div>

          {/* Achievement Badges Header */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono font-bold text-slate-200 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-400" />
              <span>Accomplishment Highlights</span>
            </span>
            <span className="text-[11px] font-mono text-emerald-400">2x2 Grid</span>
          </div>

          {/* Compact 2x2 Grid of Accomplishment Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievementBadges.map((badge, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#161b22]/75 border border-emerald-500/20 hover:border-emerald-400 p-4 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:bg-[#1e2633] hover:-translate-y-1 group cursor-default flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl p-1.5 rounded-lg bg-carbon-50 border border-carbon-border group-hover:scale-110 transition-transform">
                      {badge.icon}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
                      {badge.highlight}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {badge.title}
                  </h4>

                  <p className="mt-1.5 text-[11px] text-slate-400 leading-relaxed font-sans">
                    {badge.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#21262d]/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="group-hover:text-slate-400 transition-colors">Verified Student Credential</span>
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationCampusJourney;
