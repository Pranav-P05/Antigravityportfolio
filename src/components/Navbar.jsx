import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Floating frosted-glass navigation bar featuring:
 * - Brand logo: Pranav P with cyber brackets <P/> and pulsing indicator
 * - Clean fixed links: About, Projects, Skills, Campus Life, Contact
 * - Resume CTA button & quick Hire Me action
 * - Responsive mobile drawer toggle with smooth transitions
 */
export const Navbar = ({ onDownloadResume, onViewProjects }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about', id: 'nav-link-about' },
    { name: 'Projects', href: '#projects', id: 'nav-link-projects' },
    { name: 'Skills', href: '#skills', id: 'nav-link-skills' },
    { name: 'Campus Life', href: '#campus-life', id: 'nav-link-campus' },
    { name: 'Contact', href: '#contact', id: 'nav-link-contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`relative rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0d1117]/85 backdrop-blur-md border border-emerald-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)] shadow-emerald-950/20 py-2.5 px-4 sm:px-6'
              : 'bg-[#161b22]/70 backdrop-blur-md border border-[#21262d]/80 py-3.5 px-4 sm:px-6'
          }`}
        >
          {/* Subtle neon hairline gradient along top border */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between">
            {/* Brand Logo: Pranav P */}
            <a
              href="#hero"
              id="brand-logo"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-all"
              aria-label="Pranav P Portfolio Home"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#1e2633] border border-emerald-500/30 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all">
                <span className="font-mono text-xs font-bold text-emerald-400 group-hover:text-lime-400 transition-colors">
                  &lt;P/&gt;
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight flex items-center gap-1.5">
                  <span>Pranav</span>
                  <span className="text-emerald-400 font-extrabold">P</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-300/80 tracking-widest uppercase -mt-1 hidden sm:block">
                  AIML // KSIT
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-slate-300 hover:text-emerald-400 hover:bg-[#1e2633]/70'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-400 font-mono text-xs transition-opacity -ml-1">
                      /
                    </span>
                    {link.name}
                  </span>
                  {activeSection === link.href.replace('#', '') && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-emerald-400 rounded-full shadow-[0_0_8px_#10b981]" />
                  )}
                </a>
              ))}
            </div>

            {/* Right Action Area */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="nav-resume-btn"
                onClick={onDownloadResume}
                className="relative group overflow-hidden px-4 py-2 text-xs font-mono font-semibold rounded-xl text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 bg-[#1e2633]/80 hover:bg-emerald-500/10 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95 flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 text-emerald-400 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Resume.pdf</span>
              </button>

              <a
                href="#contact"
                id="nav-contact-cta"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-[#0d1117] font-mono font-bold hover:brightness-110 shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-[#1e2633] border border-[#21262d] hover:border-emerald-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Drawer Dropdown */}
          {mobileMenuOpen && (
            <div
              id="mobile-dropdown-menu"
              className="md:hidden mt-3 pt-3 border-t border-[#21262d] flex flex-col gap-1.5 pb-2 animate-fadeIn"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-[#1e2633] transition-all flex items-center justify-between"
                >
                  <span className="flex items-center gap-2 font-mono">
                    <span className="text-emerald-400 text-xs">#</span>
                    {link.name}
                  </span>
                  <span className="text-slate-500 font-mono text-xs">→</span>
                </a>
              ))}

              <div className="pt-3 mt-1 border-t border-[#21262d] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDownloadResume();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-semibold text-emerald-300 border border-emerald-500/30 bg-[#1e2633] flex items-center justify-center gap-2"
                >
                  <span>Download Resume / CV</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-gradient-to-r from-emerald-500 to-emerald-400 text-[#0d1117] font-mono"
                >
                  Get In Touch // Internships
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
