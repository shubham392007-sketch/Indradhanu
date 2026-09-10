import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { editorialEase, cinematicEase } from '../lib/typographyVariants';
import { AnimatedParagraph } from './motion/Typography';

export interface SocialLink {
  type: 'email' | 'linkedin' | 'instagram' | 'github' | 'x';
  label: string;
  url: string;
  ariaLabel: string;
}

export interface Developer {
  number: string;
  name: string;
  role: string;
  affiliation: string;
  email: string;
  links: SocialLink[];
  focus: string;
}

const DEVELOPERS: Developer[] = [
  {
    number: '01',
    name: 'Disha Doshi',
    role: 'AI / ML ENGINEERING',
    affiliation: 'PCCOE PUNE · 2026',
    email: 'disha.doshi25@pccoepune.org',
    focus: 'Atmospheric Thermodynamics & Predictive WBGT Formulations',
    links: [
      {
        type: 'email',
        label: 'EMAIL',
        url: 'mailto:disha.doshi25@pccoepune.org',
        ariaLabel: 'Send email to Disha Doshi',
      },
      {
        type: 'linkedin',
        label: 'LINKEDIN',
        url: 'https://www.linkedin.com/in/disha-doshi-82aa87383/',
        ariaLabel: "View Disha Doshi's LinkedIn profile",
      },
      {
        type: 'instagram',
        label: 'INSTAGRAM',
        url: 'https://www.instagram.com/doshidisha21/?hl=en',
        ariaLabel: "View Disha Doshi's Instagram profile",
      },
    ],
  },
  {
    number: '02',
    name: 'Vernit Garg',
    role: 'AI / ML ENGINEERING',
    affiliation: 'PCCOE PUNE · 2026',
    email: 'vernit.gerg25@pccoe.org',
    focus: 'Multispectral Satellite Telemetry & Cloud STAC Pipelines',
    links: [
      {
        type: 'email',
        label: 'EMAIL',
        url: 'mailto:vernit.gerg25@pccoe.org',
        ariaLabel: 'Send email to Vernit Garg',
      },
      {
        type: 'linkedin',
        label: 'LINKEDIN',
        url: 'https://www.linkedin.com/in/vernit-garg-231539385/',
        ariaLabel: "View Vernit Garg's LinkedIn profile",
      },
      {
        type: 'instagram',
        label: 'INSTAGRAM',
        url: 'https://www.instagram.com/qubec_185/?hl=en',
        ariaLabel: "View Vernit Garg's Instagram profile",
      },
      {
        type: 'github',
        label: 'GITHUB',
        url: 'https://github.com/Vernit185',
        ariaLabel: "View Vernit Garg's GitHub profile",
      },
    ],
  },
  {
    number: '03',
    name: 'Siddhesh Birewar',
    role: 'AI / ML ENGINEERING',
    affiliation: 'PCCOE PUNE · 2026',
    email: 'siddhesh.birewar25@pccoepune.org',
    focus: 'Computer Vision Foliar Pathology & YOLOv8 Inference',
    links: [
      {
        type: 'email',
        label: 'EMAIL',
        url: 'mailto:siddhesh.birewar25@pccoepune.org',
        ariaLabel: 'Send email to Siddhesh Birewar',
      },
      {
        type: 'linkedin',
        label: 'LINKEDIN',
        url: 'https://www.linkedin.com/in/siddhesh-birewar-20bb3136b/',
        ariaLabel: "View Siddhesh Birewar's LinkedIn profile",
      },
      {
        type: 'instagram',
        label: 'INSTAGRAM',
        url: 'https://www.instagram.com/s_i_d_d_h_e_s_h_1o1?igsi=MW56MndsYTBuY2V2eA%3D%3D',
        ariaLabel: "View Siddhesh Birewar's Instagram profile",
      },
      {
        type: 'github',
        label: 'GITHUB',
        url: 'https://github.com/Siddhesh-Birewar',
        ariaLabel: "View Siddhesh Birewar's GitHub profile",
      },
    ],
  },
  {
    number: '04',
    name: 'Shubham Pokale',
    role: 'AI / ML ENGINEERING',
    affiliation: 'PCCOE PUNE · 2026',
    email: 'shubham.pokale25@pccoepune.org',
    focus: 'Multimodal Bayesian Loss Fusion & Cloud-Native Architecture',
    links: [
      {
        type: 'email',
        label: 'EMAIL',
        url: 'mailto:shubham.pokale25@pccoepune.org',
        ariaLabel: 'Send email to Shubham Pokale',
      },
      {
        type: 'linkedin',
        label: 'LINKEDIN',
        url: 'https://www.linkedin.com/in/shubham-pokale-94030b37a',
        ariaLabel: "View Shubham Pokale's LinkedIn profile",
      },
      {
        type: 'instagram',
        label: 'INSTAGRAM',
        url: 'https://www.instagram.com/shubhamofficial_2007/',
        ariaLabel: "View Shubham Pokale's Instagram profile",
      },
      {
        type: 'github',
        label: 'GITHUB',
        url: 'https://github.com/shubham392007-sketch',
        ariaLabel: "View Shubham Pokale's GitHub profile",
      },
      {
        type: 'x',
        label: 'X',
        url: 'https://x.com/SHUBHAM392007',
        ariaLabel: "View Shubham Pokale's X profile",
      },
    ],
  },
];

const springPhysics = {
  type: 'spring' as const,
  stiffness: 350,
  damping: 28,
};

const SocialIcon: React.FC<{ type: SocialLink['type'] }> = ({ type }) => {
  switch (type) {
    case 'email':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case 'x':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
};

export const DevelopersSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: cinematicEase,
      },
    },
  };

  return (
    <section 
      className="w-full max-w-[1920px] mx-auto hairline-b bg-[#cdc6be] relative overflow-hidden" 
      id="developers"
    >
      {/* 1. SECTION HEADER: Editorial Index Layout */}
      <div className="p-6 md:p-12 hairline-b">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div>
            {/* Technical Subsystem Bar with 08 Number */}
            <div className="flex items-center gap-3 font-mono text-xs text-[#c03f13] uppercase font-bold tracking-widest mb-3">
              <motion.span 
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, ease: editorialEase }}
                className="px-2 py-0.5 border border-[#c03f13] bg-[#c03f13]/10"
              >
                SECTION 08
              </motion.span>
              <motion.span 
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.55, delay: 0.05, ease: editorialEase }}
              >
                DEVELOPERS
              </motion.span>
              <div className="hidden sm:block h-[1px] w-12 sm:w-20 bg-[#c03f13]" />
            </div>

            {/* Sequential Masked Heading: THE PEOPLE / BEHIND RASHKAR */}
            <div className="overflow-hidden">
              <motion.h2 
                initial={shouldReduceMotion ? { opacity: 1 } : { y: '105%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.85, ease: cinematicEase }}
                className="font-monument text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1d1d1b] leading-[0.92]"
              >
                THE PEOPLE
              </motion.h2>
            </div>
            <div className="overflow-hidden mt-1 sm:mt-2">
              <motion.h2 
                initial={shouldReduceMotion ? { opacity: 1 } : { y: '105%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: cinematicEase }}
                className="font-monument text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#c03f13] leading-[0.92]"
              >
                BEHIND RASHKAR
              </motion.h2>
            </div>
          </div>

          {/* Right Editorial Annotations & Supporting Text */}
          <div className="max-w-xl flex flex-col justify-between">
            <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] uppercase tracking-wider text-[#2b2825] mb-3">
              <span>TEAM / 04</span>
              <span>·</span>
              <span>AI + CLIMATE</span>
              <span>·</span>
              <span className="text-[#1d1d1b] font-bold">SOFTWARE SYSTEM 2026</span>
            </div>
            <AnimatedParagraph 
              delay={0.15} 
              className="font-editorial text-base sm:text-lg text-[#1d1d1b]/85 leading-relaxed"
            >
              Rashkar is designed and developed by a student AI/ML engineering team focused on building software systems for climate-resilient agriculture.
            </AnimatedParagraph>
          </div>
        </div>
      </div>

      {/* 2. DEVELOPERS GRID: Asymmetric 2x2 Desktop Editorial Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1d1d1b]"
      >
        {DEVELOPERS.map((dev, idx) => {
          const isTopRow = idx < 2;

          return (
            <motion.article
              key={dev.number}
              variants={profileVariants}
              whileHover={shouldReduceMotion ? undefined : { backgroundColor: 'rgba(222, 215, 206, 0.55)' }}
              transition={{ duration: 0.25 }}
              className={`p-6 sm:p-10 lg:p-14 flex flex-col justify-between relative group transition-colors bg-[#cdc6be]/30 ${
                isTopRow ? 'md:border-b md:border-[#1d1d1b]' : ''
              }`}
            >
              {/* Top Row: Index Number & Technical Role Badge */}
              <div>
                <div className="flex justify-between items-start mb-6 sm:mb-8 font-mono">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-[#c03f13] font-bold uppercase tracking-widest">
                      CONTRIBUTOR
                    </span>
                    <span className="font-monument text-2xl sm:text-3xl font-black text-[#1d1d1b]">
                      /{dev.number}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 border border-[#1d1d1b] bg-[#ded7ce] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#1d1d1b]">
                      {dev.role}
                    </span>
                    <span className="block text-[10px] text-[#2b2825] uppercase tracking-wider mt-1">
                      {dev.affiliation}
                    </span>
                  </div>
                </div>

                {/* Developer Name with spring hover shift */}
                <motion.h3 
                  whileHover={shouldReduceMotion ? undefined : { x: 4, transition: springPhysics }}
                  className="font-monument text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1d1d1b] leading-tight select-none mb-3 cursor-default"
                >
                  {dev.name}
                </motion.h3>

                {/* Subsystem Research Focus Annotation */}
                <p className="font-editorial italic text-sm sm:text-base text-[#2b2825] leading-relaxed max-w-md">
                  {dev.focus}
                </p>
              </div>

              {/* Bottom Section: Animated Hairline Rule & Social Link Ledger */}
              <div className="mt-8 sm:mt-12 pt-4">
                {/* Drawn editorial rule */}
                <motion.div 
                  initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + idx * 0.08, ease: editorialEase }}
                  className="h-[1px] bg-[#1d1d1b]/30 group-hover:bg-[#c03f13] transition-colors origin-left w-full mb-5"
                />

                {/* Social Links Row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-wider">
                  {dev.links.map((link) => {
                    const isEmail = link.type === 'email';

                    return (
                      <motion.a
                        key={link.type}
                        href={link.url}
                        target={isEmail ? undefined : '_blank'}
                        rel={isEmail ? undefined : 'noopener noreferrer'}
                        aria-label={link.ariaLabel}
                        whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                        transition={springPhysics}
                        className="inline-flex items-center gap-1.5 text-[#1d1d1b]/70 hover:text-[#c03f13] transition-colors group/link cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c03f13] focus:ring-offset-2 py-1"
                      >
                        <span className="text-[#2b2825] group-hover/link:text-[#c03f13] transition-colors">
                          <SocialIcon type={link.type} />
                        </span>
                        <span className="font-bold">{link.label}</span>
                        <span 
                          className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 text-[#c03f13]" 
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* 3. SECTION FOOTER: Technical Footnote */}
      <div className="px-6 md:px-12 py-4 bg-[#ded7ce]/40 hairline-t flex flex-col sm:flex-row justify-between items-start sm:items-center font-mono text-xs text-[#2b2825] gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c03f13]" />
          <span>RESEARCH &amp; ENGINEERING COHORT · 4 PRINCIPAL INVESTIGATORS</span>
        </div>
        <span className="text-[11px] uppercase tracking-wider text-[#1d1d1b]">
          ALL CODE &amp; ARCHITECTURE PRODUCED JOINTLY FOR RASHKAR
        </span>
      </div>
    </section>
  );
};
