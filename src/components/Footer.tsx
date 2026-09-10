import React from 'react';
import {
  AnimatedH2,
  AnimatedEyebrow,
  AnimatedParagraph,
  AnimatedLabel,
} from './motion/Typography';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full max-w-[1920px] mx-auto bg-[#cdc6be]">
      <div className="p-6 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 hairline-b">
        {/* Col 1: Brand & Blackletter Wordmark */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <AnimatedH2 accent="none" className="font-monument text-4xl sm:text-5xl font-black text-[#1d1d1b] tracking-tightest uppercase">
              RASHKAR
            </AnimatedH2>
            <div className="font-blackletter text-2xl text-[#1d1d1b] mt-2">
              Rash<span className="text-[0.88em] inline-block -translate-y-[0.02em]">K</span>ar©
            </div>
            <AnimatedParagraph className="font-editorial text-sm text-[#1d1d1b]/80 mt-4 leading-relaxed max-w-md" delay={0.1}>
              An open scientific research specification and cloud AI architecture protocol dedicated to human heatstroke prevention and automated crop loss audit for smallholder farmers across India.
            </AnimatedParagraph>
          </div>
          <div className="mt-8 font-mono text-[11px] text-[#625e57] space-y-1">
            <AnimatedLabel text="RESEARCH SPECIFICATION · VOL. IV, EDITION 2026" className="block" />
            <AnimatedLabel text="100% CLOUD &amp; SMARTPHONE · SATELLITE TELEMETRY CORE" className="text-[#c03f13] font-bold block" />
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 font-mono text-xs uppercase">
          <div>
            <AnimatedLabel text="SYSTEM ENGINES" className="font-bold text-[#c03f13] mb-3 block" />
            <ul className="space-y-2 text-[#625e57]">
              <li>
                <button 
                  onClick={() => navigate('/')} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  00. Rashkar Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/heat-risk')} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  01. Heat-Risk Engine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/crop-loss')} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  02. Crop-Loss Engine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  03. Cloud Topology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  04. Research Figures
                </button>
              </li>
            </ul>
          </div>

          <div>
            <AnimatedLabel text="DOCUMENTATION" className="font-bold text-[#c03f13] mb-3 block" />
            <ul className="space-y-2 text-[#625e57]">
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('gaps')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  System Gaps
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('stakeholders')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  Stakeholder Flow
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('feasibility')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  24-Hour Feasibility
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  Literature Review
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }} 
                  className="hover:text-[#1d1d1b] text-left cursor-pointer"
                >
                  Proposed Targets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('developers')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }} 
                  className="hover:text-[#c03f13] text-left font-bold text-[#1d1d1b] cursor-pointer"
                >
                  08. Developers Cohort
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 3: Stamp Graphic & Small Rust Sunburst (Ref Image 5) */}
        <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end">
          <div className="border border-[#1d1d1b] p-4 bg-[#ded7ce] text-center w-full max-w-[220px]">
            {/* Rust Sunburst Mark */}
            <svg className="w-10 h-10 text-[#c03f13] mx-auto mb-2 animate-[spin_20s_linear_infinite]" fill="currentColor" viewBox="0 0 100 100">
              <path d="M50 0 L58 35 L93 15 L72 45 L100 50 L72 55 L93 85 L58 65 L50 100 L42 65 L7 85 L28 55 L0 50 L28 45 L7 15 L42 35 Z"></path>
            </svg>
            <div className="font-mono text-[10px] font-bold uppercase text-[#1d1d1b]">
              RESEARCH SPECIFICATION
            </div>
            <div className="font-serif italic text-[11px] text-[#625e57]">
              Certified Cloud Architecture
            </div>
          </div>

          <div className="font-mono text-[10px] uppercase text-[#625e57] mt-4 text-left lg:text-right space-y-0.5">
            <div>LATENCY: <strong className="text-[#1d1d1b]">140ms CLOUD INFERENCE</strong></div>
            <div>SPATIAL RESOLUTION: <strong className="text-[#1d1d1b]">10M SENTINEL-2 MSI</strong></div>
            <div>STATUS: <strong className="text-[#c03f13]">ACADEMIC RESEARCH PROTOTYPE</strong></div>
          </div>
        </div>
      </div>

      {/* Colophon / Copyright Bar (Image 5 style) */}
      <div className="px-6 md:px-14 py-4 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#625e57] gap-3">
        <div className="flex items-center space-x-3">
          <span className="font-monument font-black text-[#1d1d1b]">RASHKAR © 2026</span>
          <span className="text-[#c03f13]">☀</span>
          <span>AI FOR CLIMATE-RESILIENT AGRICULTURE</span>
        </div>
        <div className="flex items-center space-x-6 uppercase">
          <button onClick={scrollToTop} className="hover:text-[#1d1d1b] cursor-pointer">
            TOP OF DOCUMENT ↑
          </button>
          <span>•</span>
          <a href="mailto:research@rashkar.gov.in" className="hover:text-[#1d1d1b]">
            RESEARCH DESK
          </a>
          <span>•</span>
          <button 
            onClick={() => {
              navigate('/');
              setTimeout(() => document.getElementById('statement')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }} 
            className="hover:text-[#1d1d1b] cursor-pointer"
          >
            MISSION STATEMENT
          </button>
        </div>
      </div>
    </footer>
  );
};
