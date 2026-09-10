import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { editorialEase, gentleSpring } from '../lib/motionVariants';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 30);
  });

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleNav = (path: string, hash?: string) => {
    setMenuOpen(false);
    navigate(path);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <motion.header 
        animate={{
          paddingTop: isScrolled ? '10px' : '14px',
          paddingBottom: isScrolled ? '10px' : '14px',
          boxShadow: isScrolled ? '0 4px 20px -4px rgba(29, 29, 27, 0.08)' : 'none',
        }}
        transition={{ duration: 0.3, ease: editorialEase }}
        className="sticky top-0 z-40 bg-[#cdc6be]/95 backdrop-blur-md hairline-b"
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Left Subsystem Tag with subtle pulsing dot */}
          <div className="flex items-center space-x-2 text-xs md:text-sm font-editorial tracking-normal text-[#1d1d1b]">
            <motion.span 
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#c03f13]"
            />
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#625e57]">
              {currentPath === '/heat-risk' 
                ? 'ENGINE 01: HEAT-RISK' 
                : currentPath === '/crop-loss' 
                ? 'ENGINE 02: CROP-LOSS' 
                : 'CLIMATE INTELLIGENCE'}
            </span>
          </div>

          {/* Center Exact Blackletter Wordmark (Pure Brand: Rashkar) */}
          <motion.button 
            whileHover={{ scale: 1.03, transition: gentleSpring }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('/')}
            className="text-center font-blackletter text-2xl md:text-3xl text-[#1d1d1b] tracking-tight select-none hover:text-[#c03f13] transition-colors cursor-pointer"
            title="Rashkar Home"
          >
            Rashkar
          </motion.button>

          {/* Right Zero Hardware Tag & Hamburger Menu */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <span className="hidden lg:inline-block font-mono text-[10px] uppercase tracking-wider text-[#c03f13] font-bold px-2 py-0.5 border border-[#c03f13] rounded">
              CLOUD-FIRST SOFTWARE PLATFORM
            </span>

            {/* Quick Engine Link */}
            {currentPath !== '/heat-risk' && (
              <motion.button 
                whileHover={{ x: 2, color: '#c03f13' }}
                onClick={() => handleNav('/heat-risk')}
                className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-[#625e57] hover:text-[#1d1d1b] transition-colors cursor-pointer"
              >
                Heat-Risk →
              </motion.button>
            )}
            {currentPath !== '/crop-loss' && (
              <motion.button 
                whileHover={{ x: 2, color: '#c03f13' }}
                onClick={() => handleNav('/crop-loss')}
                className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-[#625e57] hover:text-[#1d1d1b] transition-colors cursor-pointer"
              >
                Crop-Loss →
              </motion.button>
            )}

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Editorial Index" 
              className="group flex items-center space-x-2 text-[#1d1d1b] hover:text-[#c03f13] transition-colors cursor-pointer"
            >
              <span className="font-mono text-xs uppercase tracking-widest hidden sm:inline font-bold">Index</span>
              <div className="flex flex-col justify-center items-end space-y-1.5 w-6 h-6">
                <span className={`h-[2px] bg-[#1d1d1b] transition-all duration-300 group-hover:bg-[#c03f13] ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                <span className={`h-[2px] bg-[#1d1d1b] transition-all duration-300 group-hover:bg-[#c03f13] ${menuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-[2px] bg-[#1d1d1b] transition-all duration-300 group-hover:bg-[#c03f13] ${menuOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-5'}`}></span>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Navigation Overlay Menu with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: editorialEase }}
            className="fixed inset-0 z-50 bg-[#cdc6be] flex flex-col justify-between p-6 md:p-14 overflow-y-auto"
            id="nav-overlay"
          >
            <div className="flex justify-between items-center hairline-b pb-6">
              <div className="flex items-center space-x-3">
                <span className="font-blackletter text-3xl text-[#1d1d1b]">Rashkar</span>
                <span className="text-[#625e57]">/</span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#625e57]">
                  EDITORIAL RESEARCH INDEX · 2026
                </span>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-wider font-bold underline hover:text-[#c03f13] cursor-pointer"
              >
                [CLOSE INDEX ✕]
              </motion.button>
            </div>

            <div className="my-auto py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
                {/* Column 1: Primary Intelligence Engines */}
                <div className="space-y-6">
                  <div className="font-mono text-xs text-[#c03f13] uppercase tracking-widest font-bold">
                    CORE INTELLIGENCE ENGINES
                  </div>
                  <ul className="space-y-4 font-monument text-3xl md:text-4xl text-[#1d1d1b]">
                    <li>
                      <motion.button 
                        whileHover={{ x: 6, color: '#c03f13' }}
                        onClick={() => handleNav('/')}
                        className={`text-left block transition-colors cursor-pointer ${currentPath === '/' ? 'text-[#c03f13] underline' : ''}`}
                      >
                        00. RASHKAR PLATFORM
                      </motion.button>
                      <p className="font-editorial text-sm text-[#625e57] mt-1">
                        Integrated climate-resilient architecture combining worker defense and harvest recovery.
                      </p>
                    </li>
                    <li className="pt-2">
                      <motion.button 
                        whileHover={{ x: 6, color: '#c03f13' }}
                        onClick={() => handleNav('/heat-risk')}
                        className={`text-left block transition-colors cursor-pointer ${currentPath === '/heat-risk' ? 'text-[#c03f13] underline' : ''}`}
                      >
                        01. HEAT-RISK INTELLIGENCE
                      </motion.button>
                      <p className="font-editorial text-sm text-[#625e57] mt-1">
                        Personalized WBGT proxy forecasting &amp; vernacular work-rest pacing guidance.
                      </p>
                    </li>
                    <li className="pt-2">
                      <motion.button 
                        whileHover={{ x: 6, color: '#c03f13' }}
                        onClick={() => handleNav('/crop-loss')}
                        className={`text-left block transition-colors cursor-pointer ${currentPath === '/crop-loss' ? 'text-[#c03f13] underline' : ''}`}
                      >
                        02. CROP-LOSS INTELLIGENCE
                      </motion.button>
                      <p className="font-editorial text-sm text-[#625e57] mt-1">
                        Multimodal plot verification fusing smartphone photogrammetry with Sentinel-2 time-series.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Column 2: System Sections & Research */}
                <div className="space-y-6 border-t md:border-t-0 md:border-l border-[#1d1d1b]/20 pt-6 md:pt-0 md:pl-10">
                  <div className="font-mono text-xs text-[#c03f13] uppercase tracking-widest font-bold">
                    SYSTEM BLUEPRINT &amp; SECTIONS
                  </div>
                  <ul className="space-y-3 font-monument text-xl md:text-2xl text-[#1d1d1b]">
                    {[
                      { num: '03', label: 'THE PROBLEM ARCHITECTURE', anchor: 'problem' },
                      { num: '04', label: 'BY THE NUMBERS (RESEARCH DATA)', anchor: 'stats' },
                      { num: '05', label: 'CURRENT SYSTEM GAPS', anchor: 'gaps' },
                      { num: '06', label: 'CLOUD TOPOLOGY', anchor: 'architecture' },
                      { num: '07', label: 'STAKEHOLDER MATRIX', anchor: 'stakeholders' },
                      { num: '08', label: '36-HOUR FEASIBILITY AUDIT', anchor: 'feasibility' },
                      { num: '09', label: 'ACADEMIC RESEARCH & GAPS', anchor: 'research' },
                      { num: '10', label: 'PROPOSED TARGETS & SDGS', anchor: 'impact' },
                      { num: '11', label: 'DEVELOPERS / RESEARCH COHORT', anchor: 'developers' },
                    ].map((sec) => (
                      <li key={sec.num}>
                        <motion.button 
                          whileHover={{ x: 6, color: '#c03f13' }}
                          onClick={() => handleNav('/', sec.anchor)} 
                          className="text-left block transition-colors cursor-pointer"
                        >
                          {sec.num}. {sec.label}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="hairline-t pt-4 flex flex-col md:flex-row justify-between text-xs font-mono text-[#625e57] gap-2">
              <span>100% CLOUD-BASED · SATELLITE &amp; SMARTPHONE INTELLIGENCE</span>
              <span>RASHKAR SPECIFICATION © 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
