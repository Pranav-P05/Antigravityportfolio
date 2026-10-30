import React, { useState, useRef } from 'react';

/**
 * ProjectCard Component
 * Interactive 3D Perspective Tilt Card with:
 * - Real-time mouse position tracking & 3D tilt (rotateX, rotateY)
 * - Smooth lift-up on hover (translateY(-6px))
 * - Soft emerald edge glow & radial shine sheen
 * - 2-sentence description, tech badges, and action buttons ('Live Demo' & 'GitHub Code')
 */
export const ProjectCard = ({ project, onAction }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [shine, setShine] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = x / rect.width;
    const normY = y / rect.height;

    // Subtle 3D tilt angle (-10 to +10 degrees)
    const rotateX = (0.5 - normY) * 16;
    const rotateY = (normX - 0.5) * 16;

    setTilt({ x: rotateX, y: rotateY });
    setShine({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="w-full h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
          transition: isHovered
            ? 'transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
            : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease, border-color 0.3s ease'
        }}
        className={`relative rounded-2xl bg-[#161b22]/80 backdrop-blur-md border overflow-hidden flex flex-col justify-between h-full group ${
          isHovered
            ? 'border-emerald-500/50 shadow-[0_16px_40px_-10px_rgba(16,185,129,0.32),0_0_20px_rgba(16,185,129,0.18)]'
            : 'border-emerald-500/20 shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Sleek radial cursor shine reflection */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(380px circle at ${shine.x}px ${shine.y}px, rgba(16, 185, 129, 0.18), transparent 70%)`
          }}
        />

        {/* Diagonal specular highlight sweep */}
        <div
          className="pointer-events-none absolute -inset-full bg-gradient-to-tr from-transparent via-emerald-400/10 to-transparent transition-transform duration-1000 ease-out z-10"
          style={{
            transform: isHovered ? 'translate(50%, 50%) rotate(25deg)' : 'translate(-50%, -50%) rotate(25deg)'
          }}
        />

        {/* Top Hairline Accent */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent pointer-events-none" />

        {/* Card Body */}
        <div className="p-6 sm:p-7 relative z-20 flex-1 flex flex-col">
          {/* Header Bar: Category Tag & Status Indicator */}
          <div className="flex items-center justify-between text-xs font-mono mb-4">
            <span className="px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.category}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {project.status}
            </span>
          </div>

          {/* Graphical Cyber Wireframe Preview Area */}
          <div className="w-full h-36 rounded-xl bg-[#090d12]/90 border border-[#21262d] mb-5 relative overflow-hidden flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
            {/* Background gridlines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            {/* Visual Icon / Schematic per project */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-carbon-50 border border-emerald-500/40 flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(16,185,129,0.25)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all">
                {project.icon}
              </div>
              <span className="mt-2 text-[10px] font-mono text-emerald-400/80 tracking-wider uppercase">
                {project.schematicLabel}
              </span>
            </div>

            {/* Glowing Corner Accents */}
            <span className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-emerald-500/60" />
            <span className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-emerald-500/60" />
            <span className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-emerald-500/60" />
            <span className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-emerald-500/60" />
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight flex items-center justify-between">
            <span>{project.title}</span>
            <span className="text-emerald-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </h3>

          {/* 2-Sentence Project Description */}
          <p className="mt-2.5 text-sm text-slate-300/90 leading-relaxed font-sans flex-1">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="mt-5 pt-4 border-t border-[#21262d]/80 flex flex-wrap gap-2">
            {project.techBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-emerald-300 bg-emerald-950/30 border border-emerald-500/25 group-hover:border-emerald-500/40 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Action Buttons: 'Live Demo' & 'GitHub Code' */}
        <div className="p-6 pt-0 relative z-20 grid grid-cols-2 gap-3">
          {/* Live Demo Primary Action */}
          <button
            onClick={() => onAction && onAction(project, 'demo')}
            className="w-full py-2.5 px-3.5 rounded-xl font-mono text-xs font-bold text-[#0d1117] bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-lime-400 shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Live Demo</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>

          {/* GitHub Code Secondary Action */}
          <button
            onClick={() => onAction && onAction(project, 'github')}
            className="w-full py-2.5 px-3.5 rounded-xl font-mono text-xs font-semibold text-slate-200 border border-emerald-500/30 hover:border-emerald-400 bg-[#1e2633]/60 hover:bg-emerald-500/10 hover:text-emerald-300 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
