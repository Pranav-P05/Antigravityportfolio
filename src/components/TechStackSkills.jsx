import React, { useState } from 'react';

/**
 * TechStackSkills Component
 * Displays an interactive 'Tech Stack & Skills' section directly below Featured Projects.
 * - 3 Tidy Categories: 'Languages', 'Frameworks & Tools', 'Core CS Concepts'
 * - Interactive Pill Badges with official SVG tech logos
 * - Hover physics: scales up (scale-105), glows with emerald border, reveals comfort level tooltip
 */
export const TechStackSkills = () => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');

  // Official & Crisp SVG Tech Icons
  const icons = {
    cpp: (
      <svg className="w-4 h-4 text-[#00599C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.42 10.37a2.53 2.53 0 0 0-.2-.59l-2-3.46a2.6 2.6 0 0 0-2.25-1.32H14.1a2.58 2.58 0 0 0-2.24 1.32l-2 3.46a2.55 2.55 0 0 0 0 2.6l2 3.46a2.6 2.6 0 0 0 2.24 1.32h3.87a2.6 2.6 0 0 0 2.25-1.32l2-3.46a2.55 2.55 0 0 0 .2-.6zm-6.28 2.87h-1.42v1.41h-.96v-1.41h-1.42v-.96h1.42v-1.41h.96v1.41h1.42zm4.56 0h-1.42v1.41h-.96v-1.41h-1.42v-.96h1.42v-1.41h.96v1.41h1.42zM11.9 8.5H9.6a4.4 4.4 0 0 0-3.8 2.2 4.4 4.4 0 0 0 0 4.4 4.4 4.4 0 0 0 3.8 2.2h2.3a4.3 4.3 0 0 0 3.3-1.5l-1.6-1.3a2.3 2.3 0 0 1-1.7.8H9.6a2.4 2.4 0 0 1-2.1-1.2 2.4 2.4 0 0 1 0-2.4A2.4 2.4 0 0 1 9.6 10.5h2.3a2.3 2.3 0 0 1 1.7.8l1.6-1.3A4.3 4.3 0 0 0 11.9 8.5z" />
      </svg>
    ),
    python: (
      <svg className="w-4 h-4 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.91 0c-3.14 0-5.07.44-5.07 2.11v1.89h5.18v.57H4.49C1.94 4.57 0 6.13 0 8.76c0 2.76 2.22 4.3 4.63 4.3h1.27v-1.78c0-1.89 1.63-3.45 3.52-3.45h5.18V5.07C14.6 2.3 13.06 0 11.91 0zm-2.02 1.34a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zM19.37 6.64h-1.27v1.78c0 1.89-1.63 3.45-3.52 3.45H9.4v2.76c0 2.77 1.54 5.07 5.2 5.07 3.14 0 5.07-.44 5.07-2.11v-1.89H14.5v-.57h7.52c2.55 0 4.49-1.56 4.49-4.19 0-2.76-2.22-4.3-4.63-4.3h-2.51zm-5.26 14.22a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
      </svg>
    ),
    javascript: (
      <svg className="w-4 h-4 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.03 17.58c-.1-.7-.4-1.27-.89-1.68-.49-.41-1.12-.66-1.92-.81l-1.02-.19c-.43-.09-.76-.2-.99-.34-.23-.15-.35-.36-.35-.63 0-.29.13-.53.4-.7.27-.18.63-.26 1.07-.26.41 0 .76.08 1.05.25.29.17.48.42.57.77l1.7-.68c-.23-.62-.64-1.12-1.24-1.48-.6-.36-1.33-.54-2.18-.54-.92 0-1.7.22-2.32.65-.62.43-.94 1.02-.94 1.77 0 .61.2 1.1.6 1.48.4.38.99.64 1.75.79l1.04.22c.5.11.88.25 1.13.43.25.17.38.43.38.76 0 .34-.14.62-.43.83-.28.21-.69.31-1.22.31-.58 0-1.04-.12-1.39-.37-.35-.25-.56-.63-.64-1.15l-1.78.52c.18.84.61 1.5 1.3 1.96.69.46 1.57.69 2.63.69 1.07 0 1.95-.23 2.63-.7.68-.47 1.03-1.12 1.03-1.97 0-.01.03-.31.06-.47zm-8.81-.39c0-.49-.07-.98-.22-1.46h-1.87c.09.28.14.56.14.85 0 .37-.08.71-.24 1.02-.16.3-.39.53-.7.69-.3.16-.67.24-1.1.24-.46 0-.85-.09-1.16-.27-.31-.18-.54-.45-.69-.81-.15-.36-.23-.81-.23-1.35V9.67H5.2v6.62c0 .91.17 1.68.51 2.31.34.63.84 1.1 1.5 1.42.66.32 1.46.48 2.41.48.96 0 1.77-.18 2.42-.53.65-.35 1.13-.86 1.44-1.52.3-.67.46-1.46.46-2.39v-.38z" />
      </svg>
    ),
    java: (
      <svg className="w-4 h-4 text-[#EA2D2E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.85 16.34c-.87-.04-1.63.35-1.9.99-.34.82.26 1.71 1.34 2 .99.27 2.06-.05 2.4-.87.35-.83-.24-1.73-1.32-2.03-.18-.05-.36-.08-.52-.09zm7.04-3.52c-.65.25-.8 1.17-.33 2.04.48.87 1.39 1.36 2.04 1.11.65-.25.8-1.17.32-2.04-.47-.87-1.38-1.36-2.03-1.11zm-5.77-5.71c.78.36 1.25.99 1.06 1.4-.19.41-1 .45-1.79.09-.78-.36-1.25-.99-1.06-1.4.19-.41 1.01-.45 1.79-.09zm7.54 11.23c-1.3 1.36-4.54 1.83-7.53 1.09-3.23-.8-5.35-2.73-4.73-4.32.32-.82 1.17-1.37 2.34-1.61-.41-.47-.64-1.01-.64-1.58 0-1.89 2.5-3.37 5.75-3.42 2.37-.04 4.41.74 5.25 1.95.84 1.2.56 2.68-.69 3.82 2.31-.22 4.14.71 4.54 2.11.45 1.54-.78 3.19-2.77 4.04-1.24.53-2.67.75-4.04.66.42-.39.77-.85 1.04-1.36.98-.07 1.94-.37 2.68-.89.87-.62 1.07-1.38.54-1.89-.55-.53-1.85-.68-3.32-.4-.28.05-.56.12-.84.2.35-.49.56-1.04.62-1.61 1.55-.4 2.58-1.29 2.46-2.2-.12-.89-1.23-1.49-2.71-1.49-1.48 0-2.6.59-2.72 1.48-.07.56.29 1.13.97 1.56-.23.47-.36 1-.36 1.56 0 1.24.69 2.33 1.8 3.03-.5.06-1.01.07-1.52.03-2.33-.21-4.24-1.1-4.53-2.11-.3-1.03 1.12-2.18 3.34-2.73.54-.14 1.14-.23 1.75-.29-.39-.51-.62-1.12-.62-1.78 0-1.92 1.93-3.48 4.32-3.48.65 0 1.26.11 1.81.33-.31-.47-.73-.87-1.25-1.16-.76-.43-1.7-.58-2.65-.45.47-.37 1.06-.61 1.71-.69 1.63-.19 3.23.41 4.19 1.56.88 1.06 1.08 2.49.54 3.9-.13.34-.3.67-.52.98.67.57 1.08 1.36 1.08 2.22 0 1.45-1.19 2.69-2.97 3.2z" />
      </svg>
    ),
    typescript: (
      <svg className="w-4 h-4 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.28 13.91h-2.9v7.05h-2.2v-7.05H3.72V12h8.06v1.91zm10.74 3.05c-.08-.75-.4-1.36-.95-1.8-.55-.44-1.25-.7-2.14-.86l-1.14-.2c-.48-.1-.85-.22-1.1-.38-.26-.16-.39-.39-.39-.68 0-.32.14-.57.44-.76.3-.19.7-.28 1.2-.28.46 0 .85.09 1.18.28.33.18.54.45.64.82l1.9-.73c-.26-.67-.71-1.2-1.39-1.59-.67-.39-1.49-.58-2.45-.58-1.03 0-1.9.24-2.6.7-.7.46-1.05 1.1-1.05 1.9 0 .65.23 1.18.67 1.59.45.41 1.11.69 1.96.85l1.16.24c.56.12.98.27 1.26.46.28.18.42.46.42.82 0 .37-.16.66-.48.88-.32.22-.77.33-1.37.33-.65 0-1.16-.13-1.55-.4-.39-.27-.63-.68-.72-1.23l-2 .55c.2 1.05.74 1.83 1.55 2.33.81.5 1.83.75 3.05.75 1.2 0 2.19-.25 2.95-.75.76-.5 1.15-1.2 1.15-2.11 0-.01.03-.33.06-.5z" />
      </svg>
    ),
    sql: (
      <svg className="w-4 h-4 text-[#336791]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    react: (
      <svg className="w-4 h-4 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-7C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21.6c-5.3 0-9.6-4.3-9.6-9.6S6.7 2.4 12 2.4s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6z" opacity="0.2"/>
        <path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
        <path d="M22.82 9.53c-.3-1.8-1.57-3.32-3.48-4.14-2.31-.99-5.18-.8-7.34.46-2.16-1.26-5.03-1.45-7.34-.46-1.91.82-3.18 2.34-3.48 4.14-.32 1.93.38 3.91 1.9 5.38-1.52 1.47-2.22 3.45-1.9 5.38.3 1.8 1.57 3.32 3.48 4.14 1.13.48 2.37.7 3.6.7 1.3 0 2.59-.25 3.74-.8 1.15.55 2.44.8 3.74.8 1.23 0 2.47-.22 3.6-.7 1.91-.82 3.18-2.34 3.48-4.14.32-1.93-.38-3.91-1.9-5.38 1.52-1.47 2.22-3.45 1.9-5.38zm-1.89 8.79c-.19 1.16-1.03 2.15-2.27 2.68-1.77.76-4.04.53-6.13-.58-.17-.09-.34-.17-.53-.25.19-.08.36-.16.53-.25 2.09-1.11 4.36-1.34 6.13-.58 1.24.53 2.08 1.52 2.27 2.68v.3zm-17.86 0c.19-1.16 1.03-2.15 2.27-2.68 1.77-.76 4.04-.53 6.13.58.17.09.34.17.53.25-.19.08-.36.16-.53.25-2.09 1.11-4.36 1.34-6.13.58-1.24-.53-2.08-1.52-2.27-2.68v-.3z" opacity="0.8"/>
      </svg>
    ),
    tailwind: (
      <svg className="w-4 h-4 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
    nodejs: (
      <svg className="w-4 h-4 text-[#68A063]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm-1.1 19.3l-5.6-3.2V9.9l5.6 3.2v6.2zm1.1-7.5l-5.6-3.2 5.6-3.2 5.6 3.2-5.6 3.2zm6.7 4.3l-5.6 3.2v-6.2l5.6-3.2v6.2z"/>
      </svg>
    ),
    git: (
      <svg className="w-4 h-4 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452a1.498 1.498 0 0 0-2.122 0L8.87 2.527l2.943 2.943a1.776 1.776 0 0 1 2.247 2.247l2.833 2.833a1.776 1.776 0 0 1 1.745 2.973 1.775 1.775 0 0 1-2.973-1.745L12.98 8.945v6.52a1.776 1.776 0 0 1 .494 1.258 1.777 1.777 0 1 1-3.554 0 1.776 1.776 0 0 1 .927-1.554V8.583a1.776 1.776 0 0 1-.927-1.554c0-.396.13-.762.348-1.06L7.336 3.036.454 9.918a1.498 1.498 0 0 0 0 2.122l10.48 10.479a1.498 1.498 0 0 0 2.12 0l10.49-10.48a1.5 1.5 0 0 0 .002-2.11z"/>
      </svg>
    ),
    fastapi: (
      <svg className="w-4 h-4 text-[#009688]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-.75 4.5h3.75l-4.5 7.5h3.75l-6 7.5 1.5-6H6.75l4.5-9z"/>
      </svg>
    ),
    pytorch: (
      <svg className="w-4 h-4 text-[#EE4C2C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.2 2.1l-.8.8a6.3 6.3 0 0 1 4.5 6.1c0 3.5-2.8 6.3-6.3 6.3S4.3 12.5 4.3 9c0-2.8 1.8-5.2 4.4-6l-.3-1.1C5.3 2.9 3.1 5.7 3.1 9c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5c0-2.8-1.5-5.3-3.9-6.5l-1-.4zm.8 4.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
    ),
    docker: (
      <svg className="w-4 h-4 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.98 11.08h-2.1v2.1h2.1v-2.1zm-2.8 0h-2.1v2.1h2.1v-2.1zm-2.8 0h-2.1v2.1h2.1v-2.1zm8.4 0h-2.1v2.1h2.1v-2.1zm-2.8-2.8h-2.1v2.1h2.1V8.28zm-2.8 0h-2.1v2.1h2.1V8.28zm5.6 0h-2.1v2.1h2.1V8.28zm-2.8-2.8h-2.1v2.1h2.1V5.48zm12.24 7.7c-.5-.35-1.58-.45-2.38-.28-.15-.9-1.04-1.85-2.22-1.85-.35 0-.7.09-1.01.25V11H.76c-.4 1.34-.61 2.76-.61 4.2 0 4.7 3.6 8.5 8.1 8.5 5.5 0 9.8-3.6 11.2-8.6.6.1 1.2.04 1.7-.15.8-.3 1.5-.9 1.8-1.6-.3.1-.7.15-1.1.15z"/>
      </svg>
    ),
    linux: (
      <svg className="w-4 h-4 text-[#FCC624]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.01 0c-3.1 0-4.6 2.4-4.6 5.8 0 1.2.2 2.5.6 3.6-1.1 1-2.1 2.4-2.1 4.1 0 1.5.8 2.8 1.9 3.5-.2.5-.3 1.1-.3 1.7 0 2.9 2.3 5.3 5.3 5.3s5.3-2.4 5.3-5.3c0-.6-.1-1.2-.3-1.7 1.1-.7 1.9-2 1.9-3.5 0-1.7-1-3.1-2.1-4.1.4-1.1.6-2.4.6-3.6 0-3.4-1.5-5.8-4.6-5.8zm-.8 13.9c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm3.3 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"/>
      </svg>
    ),
    // Core CS Icons
    dsa: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"></circle>
        <circle cx="6" cy="19" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <path d="m9 7.5 4.5 8"></path>
        <path d="m15 7.5-4.5 8"></path>
      </svg>
    ),
    algorithms: (
      <svg className="w-4 h-4 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="6" height="6" x="3" y="3" rx="1"></rect>
        <rect width="6" height="6" x="15" y="3" rx="1"></rect>
        <rect width="6" height="6" x="9" y="15" rx="1"></rect>
        <path d="M6 9v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9"></path>
        <path d="M12 13v2"></path>
      </svg>
    ),
    oop: (
      <svg className="w-4 h-4 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z"></path>
        <path d="m3.27 6.96 8.73 4.97 8.73-4.97"></path>
        <path d="M12 22.08V12"></path>
      </svg>
    ),
    dbms: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    os: (
      <svg className="w-4 h-4 text-lime-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
        <path d="M15 2v2"></path>
        <path d="M15 20v2"></path>
        <path d="M2 15h2"></path>
        <path d="M2 9h2"></path>
        <path d="M20 15h2"></path>
        <path d="M20 9h2"></path>
        <path d="M9 2v2"></path>
        <path d="M9 20v2"></path>
      </svg>
    ),
    networks: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1"></rect>
        <rect x="2" y="16" width="6" height="6" rx="1"></rect>
        <rect x="9" y="2" width="6" height="6" rx="1"></rect>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
        <path d="M12 12V8"></path>
      </svg>
    )
  };

  const skillsData = [
    {
      category: 'Languages',
      badge: 'SYNTAX & LOGIC',
      description: 'Core programming languages for algorithmic problem solving and scalable engineering.',
      skills: [
        { name: 'C++', icon: icons.cpp, level: 'Proficient', detail: 'STL & Competitive Coding' },
        { name: 'Python', icon: icons.python, level: 'Proficient', detail: 'AI/ML, Automation & Backend' },
        { name: 'JavaScript', icon: icons.javascript, level: 'Proficient', detail: 'Modern ES6+, DOM & Full-Stack' },
        { name: 'Java', icon: icons.java, level: 'Familiar', detail: 'OOP & Backend Design' },
        { name: 'TypeScript', icon: icons.typescript, level: 'Familiar', detail: 'Type Safety & Interfaces' },
        { name: 'SQL', icon: icons.sql, level: 'Proficient', detail: 'Relational Schemas & Queries' }
      ]
    },
    {
      category: 'Frameworks & Tools',
      badge: 'STACK & ECOSYSTEM',
      description: 'Production frameworks, UI design systems, and modern developer toolchains.',
      skills: [
        { name: 'React', icon: icons.react, level: 'Proficient', detail: 'Hooks, State & SPA Architecture' },
        { name: 'Tailwind CSS', icon: icons.tailwind, level: 'Proficient', detail: 'Responsive Cyber Glass UI' },
        { name: 'Node.js', icon: icons.nodejs, level: 'Familiar', detail: 'REST APIs & Event Driven IO' },
        { name: 'Git & GitHub', icon: icons.git, level: 'Proficient', detail: 'Branching, PRs & CI/CD' },
        { name: 'FastAPI', icon: icons.fastapi, level: 'Familiar', detail: 'Async Python Microservices' },
        { name: 'PyTorch', icon: icons.pytorch, level: 'Currently Learning', detail: 'Neural Networks & Tensors' },
        { name: 'Docker', icon: icons.docker, level: 'Familiar', detail: 'Containerization & Builds' },
        { name: 'Linux / Bash', icon: icons.linux, level: 'Proficient', detail: 'Shell Scripting & Server CLI' }
      ]
    },
    {
      category: 'Core CS Concepts',
      badge: 'THEORETICAL BEDROCK',
      description: 'Foundational computer science principles applied in software design and optimization.',
      skills: [
        { name: 'Data Structures', icon: icons.dsa, level: 'Proficient', detail: 'Trees, Graphs, Heaps & Maps' },
        { name: 'Algorithms', icon: icons.algorithms, level: 'Proficient', detail: 'DP, Divide & Conquer, Greedy' },
        { name: 'OOP', icon: icons.oop, level: 'Proficient', detail: 'Inheritance, Abstraction, Polymorphism' },
        { name: 'DBMS', icon: icons.dbms, level: 'Proficient', detail: 'ACID, Indexing & Normalization' },
        { name: 'Operating Systems', icon: icons.os, level: 'Familiar', detail: 'Concurrency, Memory & Kernel' },
        { name: 'Computer Networks', icon: icons.networks, level: 'Familiar', detail: 'TCP/IP, Sockets & Protocols' }
      ]
    }
  ];

  // Comfort Level Pill Configuration
  const getLevelStyle = (level) => {
    switch (level) {
      case 'Proficient':
        return {
          dot: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
          text: 'text-emerald-300',
          border: 'border-emerald-500/40',
          bg: 'bg-emerald-950/40'
        };
      case 'Familiar':
        return {
          dot: 'bg-lime-400 shadow-[0_0_8px_#a3e635]',
          text: 'text-lime-300',
          border: 'border-lime-500/40',
          bg: 'bg-lime-950/40'
        };
      case 'Currently Learning':
      default:
        return {
          dot: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse',
          text: 'text-cyan-300',
          border: 'border-cyan-500/40',
          bg: 'bg-cyan-950/40'
        };
    }
  };

  const filteredCategories =
    activeCategoryFilter === 'All'
      ? skillsData
      : skillsData.filter((c) => c.category === activeCategoryFilter);

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>CAPABILITIES // TECHNICAL ARSENAL</span>
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Tech Stack & Skills
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base font-body leading-relaxed">
          Languages, frameworks, and core computer science fundamentals powering my AI and web applications.
        </p>

        {/* Legend: Comfort Levels */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-slate-300 px-4 py-2 rounded-xl bg-[#161b22]/70 border border-[#21262d] backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            <span className="text-emerald-300 font-semibold">Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]" />
            <span className="text-lime-300 font-semibold">Familiar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
            <span className="text-cyan-300 font-semibold">Currently Learning</span>
          </div>
        </div>
      </div>

      {/* 3 Tidy Category Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {filteredCategories.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#161b22]/80 backdrop-blur-md border border-emerald-500/20 p-6 sm:p-7 hover:border-emerald-500/40 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between h-full group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between text-xs font-mono mb-3">
                <span className="text-emerald-400 font-bold tracking-wider uppercase">
                  {cat.badge}
                </span>
                <span className="text-slate-500 text-[11px]">
                  {cat.skills.length} Items
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                {cat.category}
              </h3>

              <p className="mt-1 text-xs text-slate-400 font-sans leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Interactive Pill Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => {
                  const levelStyle = getLevelStyle(skill.level);

                  return (
                    <div
                      key={sIdx}
                      className="relative group/pill"
                    >
                      {/* Pill Badge */}
                      <div className="px-3 py-2 rounded-xl bg-[#0d1117]/90 border border-emerald-500/20 hover:border-emerald-400 hover:bg-[#1e2633] text-slate-200 hover:text-white transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95">
                        <span className="flex items-center justify-center">
                          {skill.icon}
                        </span>
                        <span className="text-xs font-mono font-medium">
                          {skill.name}
                        </span>
                      </div>

                      {/* Interactive Floating Tooltip */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 opacity-0 group-hover/pill:opacity-100 group-hover/pill:-translate-y-1 transition-all duration-200 z-50 whitespace-nowrap">
                        <div className="px-3 py-1.5 rounded-lg bg-[#090d12]/95 border border-emerald-500/40 text-[11px] font-mono shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${levelStyle.dot}`} />
                          <span className="text-slate-400">Level:</span>
                          <span className={`font-bold ${levelStyle.text}`}>{skill.level}</span>
                          <span className="text-slate-600">//</span>
                          <span className="text-slate-300 text-[10px]">{skill.detail}</span>
                        </div>
                        {/* Downward Caret Arrow */}
                        <div className="w-2 h-2 bg-[#090d12] border-r border-b border-emerald-500/40 transform rotate-45 mx-auto -mt-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Category Status Bar */}
            <div className="mt-8 pt-4 border-t border-[#21262d]/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="text-emerald-400/80">Active Stack // 2025</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSkills;
