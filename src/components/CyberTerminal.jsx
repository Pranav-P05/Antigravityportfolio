import React, { useState } from 'react';

/**
 * CyberTerminal Component
 * Interactive HUD & Code Terminal showcasing:
 * - Real-time developer config json, tech stack, and terminal manifesto
 * - Traffic light controls
 * - Grid shockwave trigger button
 * - Copy-to-clipboard functionality
 */
export const CyberTerminal = ({ onTriggerShockwave }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('profile.json');

  const codeSnippets = {
    'profile.json': `{
  "developer": "Pranav P",
  "status": "Open for Internships",
  "education": {
    "degree": "B.E. in AI & Machine Learning",
    "year": "3rd Year (2022-2026)",
    "college": "K S Institute of Technology"
  },
  "domains": ["Web Dev", "Applied AI", "GenAI"],
  "gpa_status": "Strong Academic Standing",
  "location": "Bengaluru, India"
}`,
    'skills.ts': `export const techStack = {
  frontend: ["React", "TypeScript", "Tailwind CSS"],
  ai_ml: ["Python", "PyTorch", "TensorFlow", "HuggingFace"],
  backend: ["FastAPI", "Node.js", "PostgreSQL", "REST APIs"],
  tools: ["Git", "Docker", "Linux", "Antigravity IDE"]
};`,
    'manifesto.sh': `#!/usr/bin/env bash
echo "⚡ Architecting next-gen intelligent web systems."
echo "🚀 Committed to clean code, UX excellence & AI innovation."
echo "🟢 Ready to contribute on Day 1."`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      {/* Subtle Ambient Emerald Glow Behind Terminal */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-lime-400/15 to-emerald-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none" />

      <div className="relative rounded-2xl bg-[#161b22]/80 backdrop-blur-md overflow-hidden shadow-2xl border border-[#21262d]">
        {/* Terminal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1e2633]/90 border-b border-[#21262d]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_#10b981]" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
              pranav@ksit-aiml:~/portfolio
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1">
            {Object.keys(codeSnippets).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                  activeTab === tab
                    ? 'bg-[#0d1117] text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}

            <button
              onClick={handleCopy}
              className="ml-1 p-1.5 rounded-md text-slate-400 hover:text-emerald-400 hover:bg-[#0d1117] transition-colors"
              title="Copy Code"
              aria-label="Copy snippet"
            >
              {copied ? '✓' : '⧉'}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-[#090d12]/95 text-slate-300">
          <pre className="text-emerald-300/90">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Bottom HUD Bar */}
        <div className="px-4 py-2.5 bg-[#1e2633]/80 border-t border-[#21262d] flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300">SYSTEM: ACTIVE // 60 FPS</span>
          </div>
          <button
            onClick={onTriggerShockwave}
            className="hover:text-lime-300 flex items-center gap-1.5 text-slate-300 transition-colors cursor-pointer"
          >
            <span>✨</span>
            <span>Trigger Grid Pulse</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberTerminal;
