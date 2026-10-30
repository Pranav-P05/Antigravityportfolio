import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';

/**
 * FeaturedProjects Component
 * Placed directly below the Hero section.
 * - Filter pill row above the grid: ('All', 'Web Apps', 'AI / ML', 'Mini-Projects')
 * - Responsive 3-column grid featuring the 3 student project cards:
 *   1. Campus Event Finder (React, Firebase)
 *   2. Smart Attendance Tracker (Python, OpenCV)
 *   3. Student Notes Marketplace (Tailwind, Node.js)
 * - 3D Perspective tilt physics, soft emerald edge glow, and sleek shine effect
 */
export const FeaturedProjects = ({ onAction }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projectsData = [
    {
      id: 'proj-1',
      title: 'Campus Event Finder',
      category: 'Web Apps',
      subCategories: ['Web Apps', 'Mini-Projects'],
      status: '🟢 Live // University Beta',
      schematicLabel: 'Event Sync Engine // Realtime',
      icon: '🎪',
      description:
        'A real-time centralized campus portal that aggregates hackathons, tech talks, and cultural fests for university students. Features instant RSVP notifications and automated Google Calendar sync to keep everyone connected.',
      techBadges: ['React', 'Firebase', 'Tailwind', 'Cloud Functions'],
      demoUrl: 'https://campus-events-ksit.example.com',
      githubUrl: 'https://github.com/pranav-p/campus-event-finder'
    },
    {
      id: 'proj-2',
      title: 'Smart Attendance Tracker',
      category: 'AI / ML',
      subCategories: ['AI / ML', 'Mini-Projects'],
      status: '⚡ Edge Inference // 99.2%',
      schematicLabel: 'Neural Face Vector Pipeline',
      icon: '👁️',
      description:
        'An automated facial recognition system built for college classrooms to eliminate manual roll calls. Employs lightweight edge computer vision pipelines to record student timestamps in sub-second latency.',
      techBadges: ['Python', 'OpenCV', 'FastAPI', 'YOLOv8'],
      demoUrl: 'https://smart-attendance-demo.example.com',
      githubUrl: 'https://github.com/pranav-p/smart-attendance-tracker'
    },
    {
      id: 'proj-3',
      title: 'Student Notes Marketplace',
      category: 'Web Apps',
      subCategories: ['Web Apps', 'Mini-Projects'],
      status: '🚀 Peer Network // Active',
      schematicLabel: 'Decentralized P2P Document Vault',
      icon: '📚',
      description:
        'A collaborative peer-to-peer study repository for verified collegiate lecture notes and exam guides. Integrated with instant document previews and a student karma rating system to reward top contributors.',
      techBadges: ['Tailwind', 'Node.js', 'Express', 'MongoDB'],
      demoUrl: 'https://student-notes-hub.example.com',
      githubUrl: 'https://github.com/pranav-p/student-notes-marketplace'
    }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter((p) =>
      p.subCategories.includes(activeFilter) || p.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PORTFOLIO // SELECTED WORKS</span>
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base font-body leading-relaxed">
          Production systems, applied machine learning models, and interactive campus utilities built for real impact.
        </p>

        {/* Filter Pill Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-[#161b22]/70 border border-[#21262d] backdrop-blur-md">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            const count =
              tab === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.subCategories.includes(tab)).length;

            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-[#0d1117] shadow-[0_0_20px_rgba(16,185,129,0.45)]'
                    : 'text-slate-300 hover:text-emerald-300 hover:bg-[#1e2633]/80'
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    isActive
                      ? 'bg-[#0d1117]/25 text-[#0d1117]'
                      : 'bg-[#21262d] text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <div key={project.id} className="transition-all duration-300 animate-fadeIn">
            <ProjectCard project={project} onAction={onAction} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
