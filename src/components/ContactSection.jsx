import React, { useState, useRef } from 'react';

/**
 * MagneticButton Component
 * Gives sleek buttons a tactile magnetic pull towards the cursor on hover.
 */
export const MagneticButton = ({ children, className = "", onClick, href, target, rel, ...props }) => {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Subtle magnetic pull factor
    setOffset({ x: x * 0.22, y: y * 0.22 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={btnRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 0.15s ease-out'
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * ContactSection Component
 * Student-friendly 'Get In Touch' section with:
 * - Headline: 'Let’s Collaborate & Build'
 * - Subtitle: 'Open for summer internships, open-source projects, or tech chats. Drop me a message!'
 * - Interactive Form: 'Your Name', 'Your Email', 'Your Message'
 * - Submit Button: Shows emerald loading spinner and transitions to 'Message Sent! 🚀'
 * - Direct Magnetic Links: GitHub, LinkedIn, and Email (pranav.p16082007@gmail.com)
 */
export const ContactSection = ({ onToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const userEmail = "pranav.p16082007@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onToast && onToast("⚠️ Please fill in all fields before sending.");
      return;
    }

    setStatus('loading');

    // Simulate async transmission
    setTimeout(() => {
      setStatus('success');
      onToast && onToast(`🚀 Message transmitted to Pranav P! Thank you, ${formData.name}.`);
      setFormData({ name: '', email: '', message: '' });

      // Reset button after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1200);
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(userEmail);
    onToast && onToast(`📋 Copied to clipboard: ${userEmail}`);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-24"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>TRANSMISSION // INBOX</span>
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Let’s Collaborate & Build
        </h2>

        <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base font-body leading-relaxed">
          Open for summer internships, open-source projects, or tech chats. Drop me a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Direct Links & Status Cards (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Magnetic Action Links */}
          <div className="rounded-2xl bg-[#161b22]/80 backdrop-blur-md border border-emerald-500/20 p-6 sm:p-7 shadow-xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-emerald-400 font-mono text-xs">//</span>
              <span>Direct Channels</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Reach out directly across professional networks or dispatch an email to my inbox.
            </p>

            <div className="space-y-3">
              {/* Email Direct Link with Copy Action */}
              <div className="flex items-center gap-2">
                <MagneticButton
                  href={`mailto:${userEmail}`}
                  className="flex-1 px-4 py-3 rounded-xl bg-carbon-50 border border-emerald-500/30 hover:border-emerald-400 text-slate-200 hover:text-white flex items-center justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                      ✉️
                    </span>
                    <div className="text-left">
                      <div className="text-[10px] font-mono text-emerald-400">EMAIL</div>
                      <div className="text-xs font-mono truncate max-w-[180px] sm:max-w-none">
                        {userEmail}
                      </div>
                    </div>
                  </div>
                  <span className="text-emerald-400 text-xs font-mono group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </MagneticButton>

                {/* Quick Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-xl bg-carbon-50 border border-emerald-500/30 hover:border-emerald-400 text-slate-300 hover:text-emerald-300 transition-colors"
                  title="Copy Email Address"
                  aria-label="Copy email address"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                </button>
              </div>

              {/* GitHub Link */}
              <MagneticButton
                href="https://github.com/pranav-p"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 rounded-xl bg-carbon-50 border border-emerald-500/30 hover:border-emerald-400 text-slate-200 hover:text-white flex items-center justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-emerald-400">GITHUB</div>
                    <div className="text-xs font-mono">github.com/pranav-p</div>
                  </div>
                </div>
                <span className="text-emerald-400 text-xs font-mono group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </MagneticButton>

              {/* LinkedIn Link */}
              <MagneticButton
                href="https://linkedin.com/in/pranav-p"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 rounded-xl bg-carbon-50 border border-emerald-500/30 hover:border-emerald-400 text-slate-200 hover:text-white flex items-center justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-emerald-400">LINKEDIN</div>
                    <div className="text-xs font-mono">linkedin.com/in/pranav-p</div>
                  </div>
                </div>
                <span className="text-emerald-400 text-xs font-mono group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </MagneticButton>
            </div>
          </div>

          {/* Quick Info Pill Box */}
          <div className="p-5 rounded-2xl bg-carbon-50/60 border border-carbon-border text-xs font-mono space-y-2.5">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">LOCATION</span>
              <span className="text-white font-semibold">Bengaluru, IN (IST)</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">AVAILABILITY</span>
              <span className="text-emerald-400 font-semibold">Summer & Fall 2025</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">RESPONSE TIME</span>
              <span className="text-lime-300 font-semibold">&lt; 24 Hours</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form (lg:col-span-7) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-[#161b22]/90 backdrop-blur-md border border-emerald-500/25 p-7 sm:p-9 shadow-2xl relative overflow-hidden">
            {/* Top ambient highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Field: Your Name */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                  <span className="text-emerald-400">01.</span> YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Rivera"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#090d12]/95 border border-carbon-border text-slate-100 placeholder:text-slate-600 font-sans text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all shadow-inner"
                />
              </div>

              {/* Field: Your Email */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                  <span className="text-emerald-400">02.</span> YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@domain.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#090d12]/95 border border-carbon-border text-slate-100 placeholder:text-slate-600 font-sans text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all shadow-inner"
                />
              </div>

              {/* Field: Your Message */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">
                  <span className="text-emerald-400">03.</span> YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Hey Pranav, let's connect regarding an internship opportunity or discuss building a project together..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#090d12]/95 border border-carbon-border text-slate-100 placeholder:text-slate-600 font-sans text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all resize-none shadow-inner"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`relative w-full py-4 px-6 rounded-xl font-mono text-sm font-bold flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${
                    status === 'success'
                      ? 'bg-emerald-500 text-carbon shadow-[0_0_30px_#10b981]'
                      : status === 'loading'
                      ? 'bg-emerald-600/80 text-carbon cursor-wait'
                      : 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400 text-carbon shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      {/* Emerald Loading Spinner */}
                      <svg className="animate-spin h-4 w-4 text-carbon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Transmitting...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <span>Message Sent! 🚀</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4 text-carbon group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Success Feedback Subtitle */}
              {status === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center text-xs font-mono text-emerald-300 animate-fadeIn">
                  ✓ Dispatch confirmed! Pranav will respond within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
