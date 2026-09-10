import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { CloudArchitectureFlow } from '../components/CloudArchitectureFlow';
import { DevelopersSection } from '../components/DevelopersSection';
import { RevealText } from '../components/motion/RevealText';
import { SectionHeading } from '../components/motion/SectionHeading';
import { AnimatedNumber } from '../components/motion/AnimatedNumber';
import { MotionCard } from '../components/motion/MotionCard';
import { editorialEase } from '../lib/motionVariants';
import {
  AnimatedH1,
  AnimatedH2,
  AnimatedH3,
  AnimatedH4,
  AnimatedEyebrow,
  AnimatedParagraph,
  AnimatedLabel,
  AnimatedStat,
  AnimatedQuote,
  EmphasizedText,
  AnimatedWordReveal,
} from '../components/motion/Typography';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax for hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(heroScroll, [0, 1], shouldReduceMotion ? [1, 1] : [1, 0.94]);
  const heroOpacity = useTransform(heroScroll, [0, 0.85], shouldReduceMotion ? [1, 1] : [1, 0.2]);

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. HERO SPREAD & MONUMENTAL WORDMARKS (Stitch Visual Reference Image 2, 3) */}
      {/* ========================================================================= */}
      <section ref={heroRef} className="w-full max-w-[1920px] mx-auto hairline-b overflow-hidden" id="hero">
        {/* Giant cropped wordmark container matching MIRANDA in Stitch images */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="px-2 md:px-6 pt-3 pb-3"
        >
          <div className="bg-[#1d1d1b] text-[#cdc6be] px-2 md:px-6 py-6 md:py-14 wordmark-container flex items-center justify-center overflow-hidden">
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { y: '80%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1.15, ease: editorialEase }}
              className="font-monument text-[18vw] font-black tracking-tightest leading-none text-center wordmark-huge text-[#cdc6be] select-none block"
            >
              RASHKAR
            </motion.h1>
          </div>
        </motion.div>

        {/* Dual-Column Opening Block (Stitch Reference Images 8 & 9) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 hairline-t">
          {/* Left Column: Editorial Summary with Boxed Drop Cap 'A' */}
          <div className="lg:col-span-5 p-6 md:p-12 hairline-b lg:hairline-b-0 lg:hairline-r flex flex-col justify-between">
            <div>
              <AnimatedEyebrow className="mb-6">
                AI FOR CLIMATE-RESILIENT AGRICULTURE
              </AnimatedEyebrow>
              <div className="text-lg md:text-2xl text-[#1d1d1b] leading-relaxed font-light">
                <span className="drop-cap-boxed">A</span>
                <EmphasizedText>cloud-based artificial intelligence platform</EmphasizedText> designed to support climate-resilient agriculture by combining environmental intelligence, personalized heat-risk prediction, and AI-assisted crop-loss verification.
              </div>
              <AnimatedParagraph delay={0.15} className="font-serif italic text-sm md:text-base text-[#625e57] mt-6 leading-relaxed">
                A software-only cloud AI platform. Designed from first principles to turn satellite multispectral time-series, weather reanalysis grids, and farmer smartphone photographs into rapid rural defense.
              </AnimatedParagraph>
            </div>
            <div className="mt-8 pt-6 hairline-t flex flex-wrap items-center justify-between font-mono text-xs text-[#625e57] gap-2">
              <AnimatedLabel>INFRASTRUCTURE: 100% CLOUD &amp; SMARTPHONE</AnimatedLabel>
              <AnimatedLabel className="text-[#1d1d1b] font-bold">[VOL. IV · 2026]</AnimatedLabel>
            </div>
          </div>

          {/* Right Column: Condensed Uppercase Typography Stack & Sunburst Stamp (Image 8 & 9) */}
          <div className="lg:col-span-7 p-6 md:p-12 flex flex-col justify-between bg-[#ded7ce]/40 relative">
            {/* Rust-orange sunburst postage mark top-right corner */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-16 h-16 border border-[#1d1d1b] p-1 bg-[#cdc6be] flex items-center justify-center">
              <svg className="w-12 h-12 text-[#c03f13] animate-[spin_30s_linear_infinite]" fill="currentColor" viewBox="0 0 100 100">
                <path d="M50 0 L58 35 L93 15 L72 45 L100 50 L72 55 L93 85 L58 65 L50 100 L42 65 L7 85 L28 55 L0 50 L28 45 L7 15 L42 35 Z"></path>
              </svg>
            </div>
            <div>
              <AnimatedLabel className="font-mono text-xs uppercase tracking-widest text-[#625e57] mb-4 block">
                SPECIFICATION OVERVIEW · 2026 EDITION
              </AnimatedLabel>
              {/* Monumental condensed typography stack */}
              <AnimatedH1
                animateOnMount
                lines={[
                  "AI FOR CLIMATE-RESILIENT",
                  "AGRICULTURE.",
                  "CLOUD-BASED INTELLIGENCE",
                  "LAYER FOR SMALLHOLDERS."
                ]}
                className="font-monument text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#1d1d1b] leading-tight pr-14"
              />
            </div>
            <div className="hairline-t pt-6 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs uppercase text-[#625e57]">
              <div><strong className="text-[#1d1d1b] block text-base font-serif">WBGT</strong> Wet Bulb Proxy</div>
              <div><strong className="text-[#1d1d1b] block text-base font-serif">SENTINEL-2</strong> 10m Multispectral</div>
              <div><strong className="text-[#1d1d1b] block text-base font-serif">YOLOv8</strong> Field Pathology</div>
              <div><strong className="text-[#1d1d1b] block text-base font-serif">ZERO IOT</strong> Pure Cloud Native</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HERO STATEMENT POSTER (Reference Image 7)                              */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto bg-[#1d1d1b] text-[#cdc6be] py-14 md:py-24 px-4 md:px-12 select-none hairline-b relative" id="statement">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <AnimatedEyebrow showLine={false} className="text-[#beb5aa] mb-4 text-center justify-center">
            RASHKAR MISSION MANIFESTO
          </AnimatedEyebrow>
          <div className="font-monument text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tightest leading-none uppercase">
            <AnimatedWordReveal
              text="PROTECT THE FARMER BEFORE THE HEAT. PROTECT THE HARVEST AFTER THE LOSS."
              className="text-center"
              delay={0.1}
            />
          </div>
          <AnimatedParagraph delay={0.3} className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#beb5aa] mt-6 max-w-2xl leading-relaxed">
            A DUAL PREVENTIVE AND RECOVERY PROTOCOL FOR 140 MILLION SMALLHOLDERS ACROSS INDIA — 100% CLOUD &amp; SMARTPHONE
          </AnimatedParagraph>

          {/* Iconic Oval Pill Buttons ('ALL WORK' style from Image 7) */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-3.5 rounded-full border border-[#cdc6be] text-[#cdc6be] font-monument text-lg md:text-xl uppercase tracking-tight hover:bg-[#cdc6be] hover:text-[#1d1d1b] transition-colors cursor-pointer"
            >
              EXPLORE THE SYSTEM
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.getElementById('engines')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-3.5 rounded-full border border-[#c03f13] bg-[#c03f13] text-[#cdc6be] font-monument text-lg md:text-xl uppercase tracking-tight hover:bg-[#9e340f] transition-colors cursor-pointer"
            >
              VIEW THE INTELLIGENCE ENGINES →
            </motion.button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROBLEM ARCHITECTURE SPREAD                                            */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b bg-[#cdc6be] py-16 px-6 md:px-12" id="problem">
        <AnimatedEyebrow className="mb-6">01 / THE PROBLEM</AnimatedEyebrow>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <AnimatedH2 showAccentRule className="font-monument text-4xl sm:text-6xl uppercase tracking-tight text-[#1d1d1b] leading-tight">
              CLIMATE RISK DOES NOT ARRIVE<br />
              <span className="text-[#c03f13]">AS A SINGLE PROBLEM.</span>
            </AnimatedH2>
            <AnimatedParagraph className="font-editorial text-xl text-[#1d1d1b] leading-relaxed">
              Agricultural communities face multiple interconnected climate hazards throughout the seasonal lifecycle. Standard systems treat these hazards in total isolation.
            </AnimatedParagraph>
            <div className="border-t-2 border-b-2 border-[#1d1d1b] py-6 space-y-2 font-editorial">
              <AnimatedEyebrow showLine={false} className="text-[#c03f13] font-bold">
                THE THREE DISCONNECTED LAYERS
              </AnimatedEyebrow>
              <AnimatedQuote className="text-xl text-[#1d1d1b] italic leading-snug">
                “The farmer experiences the climate event. The system needs to understand the event. The decision-maker needs evidence. Rashkar connects these three layers.”
              </AnimatedQuote>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 font-mono text-xs">
            {/* Risk Card 1 */}
            <MotionCard delay={0.05} className="p-6 border border-[#1d1d1b] bg-[#ded7ce]/60 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-[#c03f13] uppercase">LAYER 01 // HEAT STRESS</span>
                <AnimatedLabel className="text-[10px] text-[#625e57] uppercase">PHYSIOLOGICAL DEFENSE</AnimatedLabel>
              </div>
              <AnimatedH4 className="font-monument text-xl text-[#1d1d1b] uppercase">Extreme Heat Threatens Human Life</AnimatedH4>
              <AnimatedParagraph className="font-editorial text-base text-[#1d1d1b]/80 leading-relaxed">
                Agricultural workers frequently perform heavy outdoor manual labor during peak solar hours. Broad regional warnings arrive without personal demographic adjustments, leading to preventable heatstroke, chronic kidney disease, and fatalities.
              </AnimatedParagraph>
            </MotionCard>

            {/* Risk Card 2 */}
            <MotionCard delay={0.15} className="p-6 border border-[#1d1d1b] bg-[#ded7ce]/60 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-[#c03f13] uppercase">LAYER 02 // CROP LOSS</span>
                <AnimatedLabel className="text-[10px] text-[#625e57] uppercase">AGRARIAN ASSETS</AnimatedLabel>
              </div>
              <AnimatedH4 className="font-monument text-xl text-[#1d1d1b] uppercase">Sudden Perils Devastate Smallholder Plots</AnimatedH4>
              <AnimatedParagraph className="font-editorial text-base text-[#1d1d1b]/80 leading-relaxed">
                Unseasonal hail, catastrophic inundation, localized cloudbursts, severe drought, and pest outbreaks wipe out entire crop yields in minutes, stripping smallholders of income and plunging them into predatory debt cycles.
              </AnimatedParagraph>
            </MotionCard>

            {/* Risk Card 3 */}
            <MotionCard delay={0.25} className="p-6 border border-[#1d1d1b] bg-[#ded7ce]/60 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-[#c03f13] uppercase">LAYER 03 // VERIFICATION</span>
                <AnimatedLabel className="text-[10px] text-[#625e57] uppercase">EVIDENCE GAP</AnimatedLabel>
              </div>
              <AnimatedH4 className="font-monument text-xl text-[#1d1d1b] uppercase">Fragmented Proof Stalls Recovery</AnimatedH4>
              <AnimatedParagraph className="font-editorial text-base text-[#1d1d1b]/80 leading-relaxed">
                Assessing crop loss requires fragmented ground evidence and physical surveying. When loss adjusters and patwaris cannot verify claims quickly, settlement takes 45 to 60 days, during which time honest farmers cannot replant or survive.
              </AnimatedParagraph>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BY THE NUMBERS (Stitch Reference Image 7: Divided by thin 1px rules)   */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b bg-[#cdc6be]" id="stats">
        <div className="p-6 md:px-12 py-6 hairline-b flex flex-col sm:flex-row justify-between items-baseline font-mono text-xs text-[#625e57] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c03f13]"></span>
            <AnimatedLabel className="font-bold text-[#1d1d1b] uppercase">RESEARCH &amp; DOCUMENTATION LEDGER</AnimatedLabel>
          </div>
          <AnimatedLabel className="text-[#c03f13] font-semibold uppercase">
            NOTE: RESEARCH AND LITERATURE FIGURES · NOT LIVE RASHKAR TELEMETRY
          </AnimatedLabel>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1d1d1b] font-mono">
          {/* Stat 01 */}
          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div className="text-[11px] uppercase tracking-wider text-[#625e57] mb-2 flex justify-between">
              <AnimatedLabel>EXPOSURE DEMOGRAPHY</AnimatedLabel>
              <span className="text-[10px] border border-[#1d1d1b]/30 px-1">RESEARCH</span>
            </div>
            <div className="my-3">
              <AnimatedStat 
                value={100} 
                suffix="M+" 
                className="font-monument text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1d1d1b] leading-none" 
              />
            </div>
            <AnimatedParagraph className="font-serif italic text-sm text-[#625e57]">
              Agricultural field workers exposed daily to hazardous wet-bulb heat stress across India.
            </AnimatedParagraph>
          </div>

          {/* Stat 02 */}
          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div className="text-[11px] uppercase tracking-wider text-[#625e57] mb-2 flex justify-between">
              <AnimatedLabel>RECORD HEAT EVENTS</AnimatedLabel>
              <span className="text-[10px] border border-[#1d1d1b]/30 px-1">2024 RECORD</span>
            </div>
            <div className="my-3">
              <AnimatedStat 
                value={280} 
                suffix="+" 
                className="font-monument text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1d1d1b] leading-none" 
              />
            </div>
            <AnimatedParagraph className="font-serif italic text-sm text-[#625e57]">
              Cumulative heatwave days recorded across 18 Indian states during the 2024 agricultural calendar.
            </AnimatedParagraph>
          </div>

          {/* Stat 03 */}
          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div className="text-[11px] uppercase tracking-wider text-[#625e57] mb-2 flex justify-between">
              <AnimatedLabel>PMFBY ENROLLMENT</AnimatedLabel>
              <span className="text-[10px] border border-[#1d1d1b]/30 px-1">GOV DATA</span>
            </div>
            <div className="my-3">
              <AnimatedStat 
                value={12} 
                suffix=" Cr" 
                className="font-monument text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1d1d1b] leading-none" 
              />
            </div>
            <AnimatedParagraph className="font-serif italic text-sm text-[#625e57]">
              Agrarian farmer-plot enrollments in Pradhan Mantri Fasal Bima Yojana awaiting rapid audit modernizations.
            </AnimatedParagraph>
          </div>

          {/* Stat 04 */}
          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div className="text-[11px] uppercase tracking-wider text-[#625e57] mb-2 flex justify-between">
              <AnimatedLabel>STATUS QUO SETTLEMENT</AnimatedLabel>
              <span className="text-[10px] bg-[#c03f13] text-[#cdc6be] px-1 font-bold">BOTTLENECK</span>
            </div>
            <div className="my-3">
              <span className="font-monument text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#c03f13] leading-none">
                45–60 D
              </span>
            </div>
            <AnimatedParagraph className="font-serif italic text-sm text-[#625e57]">
              Average claim-verification timeframe in traditional manual surveys; targeted by Rashkar to 48 hours.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CURRENT SYSTEM GAPS (Horizontal Sequence with hairline rules)          */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b bg-[#ded7ce]/30" id="gaps">
        <div className="p-6 md:p-12 hairline-b flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <AnimatedEyebrow>GAP ANALYSIS · SYSTEM SHORTFALLS</AnimatedEyebrow>
            <AnimatedH2 showAccentRule className="font-monument text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1d1d1b] mt-2">
              THE DATA EXISTS.<br />
              <span className="text-[#c03f13]">THE INTELLIGENCE IS FRAGMENTED.</span>
            </AnimatedH2>
          </div>
          <AnimatedParagraph className="max-w-md font-mono text-xs text-[#625e57] uppercase mt-4 md:mt-0">
            Current systems leave critical blind spots. Rashkar connects the signals into a unified software pipeline.
          </AnimatedParagraph>
        </div>

        {/* 4 Core Signal Gaps + Connecting Layer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#1d1d1b] font-mono text-xs">
          <MotionCard delay={0.05} className="p-6 flex flex-col justify-between hover:bg-[#ded7ce] transition-colors">
            <div>
              <span className="text-[#c03f13] font-bold text-sm">GAP 01</span>
              <AnimatedH4 className="font-serif font-bold text-lg text-[#1d1d1b] uppercase mt-2 mb-1">
                GENERIC HEAT ALERTS
              </AnimatedH4>
              <div className="text-[11px] text-[#c03f13] font-bold uppercase mb-3">
                → Limited Personalization
              </div>
              <AnimatedParagraph className="text-[#625e57] leading-relaxed">
                Broadcast weather forecasts provide district-wide ambient temperatures. They ignore solar radiation flux, humidity, worker age, exertion level, and acclimatization.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel className="mt-6 pt-3 hairline-t text-[10px] text-[#1d1d1b]/60 uppercase block">
              RASHKAR: Personalized WBGT Proxy
            </AnimatedLabel>
          </MotionCard>

          <MotionCard delay={0.12} className="p-6 flex flex-col justify-between hover:bg-[#ded7ce] transition-colors">
            <div>
              <span className="text-[#c03f13] font-bold text-sm">GAP 02</span>
              <AnimatedH4 className="font-serif font-bold text-lg text-[#1d1d1b] uppercase mt-2 mb-1">
                SATELLITE MONITORING
              </AnimatedH4>
              <div className="text-[11px] text-[#c03f13] font-bold uppercase mb-3">
                → Limited Field Evidence
              </div>
              <AnimatedParagraph className="text-[#625e57] leading-relaxed">
                Orbital multispectral imagery offers broad spectral vegetation indices (NDVI/NDRE) but is blinded by monsoonal cloud decks and lacks micro-level foliar damage proof.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel className="mt-6 pt-3 hairline-t text-[10px] text-[#1d1d1b]/60 uppercase block">
              RASHKAR: Orthogonal Signal Fusion
            </AnimatedLabel>
          </MotionCard>

          <MotionCard delay={0.19} className="p-6 flex flex-col justify-between hover:bg-[#ded7ce] transition-colors">
            <div>
              <span className="text-[#c03f13] font-bold text-sm">GAP 03</span>
              <AnimatedH4 className="font-serif font-bold text-lg text-[#1d1d1b] uppercase mt-2 mb-1">
                SMARTPHONE EVIDENCE
              </AnimatedH4>
              <div className="text-[11px] text-[#c03f13] font-bold uppercase mb-3">
                → Limited Historical Context
              </div>
              <AnimatedParagraph className="text-[#625e57] leading-relaxed">
                Ground smartphone photos capture visible damage but lack historical phenology curves, meteorological verification, and spatial plot boundary confirmation.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel className="mt-6 pt-3 hairline-t text-[10px] text-[#1d1d1b]/60 uppercase block">
              RASHKAR: EXIF Cryptographic Anchoring
            </AnimatedLabel>
          </MotionCard>

          <MotionCard delay={0.26} className="p-6 flex flex-col justify-between hover:bg-[#ded7ce] transition-colors">
            <div>
              <span className="text-[#c03f13] font-bold text-sm">GAP 04</span>
              <AnimatedH4 className="font-serif font-bold text-lg text-[#1d1d1b] uppercase mt-2 mb-1">
                MANUAL VERIFICATION
              </AnimatedH4>
              <div className="text-[11px] text-[#c03f13] font-bold uppercase mb-3">
                → Slow &amp; Fragmented
              </div>
              <AnimatedParagraph className="text-[#625e57] leading-relaxed">
                Physical Crop Cutting Experiments (CCEs) and manual adjuster visits take 45–60 days to survey millions of plots, creating dispute cycles and delayed insurance relief.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel className="mt-6 pt-3 hairline-t text-[10px] text-[#1d1d1b]/60 uppercase block">
              RASHKAR: 48-Hour Evidence Dossiers
            </AnimatedLabel>
          </MotionCard>
        </div>

        {/* Banner: Connect the Signals */}
        <div className="hairline-t p-6 bg-[#1d1d1b] text-[#cdc6be] flex flex-col sm:flex-row justify-between items-center font-mono text-xs gap-3">
          <AnimatedLabel className="uppercase tracking-widest font-bold text-[#c03f13]">
            RASHKAR'S ARCHITECTURAL ROLE:
          </AnimatedLabel>
          <span className="font-monument text-lg uppercase tracking-tight text-center">
            CONNECT THE SIGNALS: SMARTPHONE + SATELLITE + WEATHER + CLOUD AI
          </span>
          <AnimatedLabel className="text-[#beb5aa] hidden md:inline-block uppercase text-[11px]">
            ZERO PHYSICAL HARDWARE
          </AnimatedLabel>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. THE DUAL ENGINE SHOWCASE (Reference Image 3, 4)                        */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b" id="engines">
        <div className="p-6 md:p-12 hairline-b flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <AnimatedEyebrow>THE RASHKAR SOLUTION</AnimatedEyebrow>
            <AnimatedH2 showAccentRule className="font-monument text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1d1d1b] mt-2">
              TWO INTELLIGENCE ENGINES.<br />
              <span className="text-[#c03f13]">ONE CLIMATE-RESILIENT PLATFORM.</span>
            </AnimatedH2>
          </div>
          <AnimatedParagraph className="max-w-md font-mono text-xs text-[#625e57] uppercase mt-4 md:mt-0">
            Distinct operational engines sharing a common cloud pipeline to protect life before the crisis and recover livelihood after the loss.
          </AnimatedParagraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1d1d1b]">
          {/* Engine 01: Left Project Card */}
          <MotionCard delay={0.05} className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-[#cdc6be] hover:bg-[#ded7ce]/50 transition-colors">
            <div>
              {/* Visual flat block */}
              <div className="w-full h-48 bg-[#1d1d1b] text-[#cdc6be] p-5 flex flex-col justify-between border border-[#1d1d1b] mb-4 relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="font-monument text-2xl font-bold text-[#cdc6be]">ENGINE 01</span>
                  <span className="bg-[#c03f13] text-[#cdc6be] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                    PREVENTIVE
                  </span>
                </div>
                <div className="font-mono text-xs text-[#beb5aa]">
                  ERA5 REANALYSIS + HOURLY WBGT PROXIES + INDIVIDUAL CONTEXT
                </div>
                <div className="font-serif italic text-[#c03f13] text-base font-semibold">
                  Heat-Risk Intelligence
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-2">
                <AnimatedH3 className="font-monument text-xl uppercase font-bold text-[#1d1d1b] tracking-tight">
                  HEAT-RISK INTELLIGENCE
                </AnimatedH3>
              </div>
              <AnimatedParagraph className="font-serif text-base text-[#625e57] leading-relaxed">
                Predict heat risk before exposure becomes a crisis. Translates environmental data, worker age, exertion level, and acclimatization into personalized 0–100 risk scores with vernacular work-rest pacing guidance.
              </AnimatedParagraph>
            </div>

            <div className="border-t border-[#1d1d1b]/20 pt-6 mt-8 space-y-4">
              <div className="flex justify-between font-mono text-xs text-[#625e57] uppercase">
                <AnimatedLabel>PREDICTION HORIZON: 0–6 HOURS</AnimatedLabel>
                <AnimatedLabel className="font-bold text-[#1d1d1b]">HUMAN LIFE DEFENSE</AnimatedLabel>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/heat-risk')}
                className="w-full py-3 border-2 border-[#1d1d1b] bg-[#1d1d1b] text-[#cdc6be] font-monument text-sm uppercase tracking-wider hover:bg-[#c03f13] hover:border-[#c03f13] transition-colors cursor-pointer"
              >
                EXPLORE HEAT-RISK ENGINE →
              </motion.button>
            </div>
          </MotionCard>

          {/* Center Column: Monumental Calling Card (Like 'ALL WORK!' in Image 3, 4) */}
          <div className="lg:col-span-4 p-6 md:p-12 text-center flex flex-col justify-between items-center bg-[#ded7ce]/40">
            <div className="w-full">
              <AnimatedEyebrow showLine={false} className="text-[#c03f13] font-semibold tracking-widest uppercase block mb-3 justify-center">
                INTEGRATED PROTOCOL
              </AnimatedEyebrow>
              <AnimatedH3 className="font-monument text-4xl sm:text-5xl md:text-6xl text-[#1d1d1b] font-extrabold tracking-tight uppercase leading-none">
                THE DUAL<br />ENGINE!
              </AnimatedH3>
              <AnimatedParagraph className="font-serif text-base sm:text-lg text-[#625e57] italic mt-4 max-w-xs mx-auto leading-relaxed">
                A unified cloud intelligence suite protecting human life &amp; agrarian assets across India.
              </AnimatedParagraph>
            </div>

            <div className="my-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="oval-pill-btn text-xs font-mono uppercase tracking-widest shadow-sm cursor-pointer"
              >
                [INSPECT CLOUD TOPOLOGY]
              </motion.button>
            </div>

            <div className="font-mono text-xs uppercase tracking-wider text-[#625e57]">
              <strong className="text-[#1d1d1b]">TIP!</strong> Click individual engine buttons to enter dedicated operational workflows
            </div>
          </div>

          {/* Engine 02: Right Project Card */}
          <MotionCard delay={0.15} className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-[#cdc6be] hover:bg-[#ded7ce]/50 transition-colors">
            <div>
              {/* Visual flat block */}
              <div className="w-full h-48 bg-[#1d1d1b] text-[#cdc6be] p-5 flex flex-col justify-between border border-[#1d1d1b] mb-4 relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="font-monument text-2xl font-bold text-[#cdc6be]">ENGINE 02</span>
                  <span className="bg-[#c03f13] text-[#cdc6be] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                    RECOVERY
                  </span>
                </div>
                <div className="font-mono text-xs text-[#beb5aa]">
                  SENTINEL-2 NDVI + SMARTPHONE YOLOV8 + DOPPLER CONVECTIVE RADAR
                </div>
                <div className="font-serif italic text-[#c03f13] text-base font-semibold">
                  Crop-Loss Intelligence
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-2">
                <AnimatedH3 className="font-monument text-xl uppercase font-bold text-[#1d1d1b] tracking-tight">
                  CROP-LOSS INTELLIGENCE
                </AnimatedH3>
              </div>
              <AnimatedParagraph className="font-serif text-base text-[#625e57] leading-relaxed">
                Turn fragmented field and environmental signals into structured crop-loss evidence. Cross-verifies farmer smartphone photos with Sentinel-2 spectral drops to compress claim settlement from 60 days to 48 hours.
              </AnimatedParagraph>
            </div>

            <div className="border-t border-[#1d1d1b]/20 pt-6 mt-8 space-y-4">
              <div className="flex justify-between font-mono text-xs text-[#625e57] uppercase">
                <AnimatedLabel>CONFIDENCE: 91% MULTIMODAL</AnimatedLabel>
                <AnimatedLabel className="font-bold text-[#1d1d1b]">FINANCIAL RECOVERY</AnimatedLabel>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/crop-loss')}
                className="w-full py-3 border-2 border-[#1d1d1b] bg-[#1d1d1b] text-[#cdc6be] font-monument text-sm uppercase tracking-wider hover:bg-[#c03f13] hover:border-[#c03f13] transition-colors cursor-pointer"
              >
                EXPLORE CROP-LOSS ENGINE →
              </motion.button>
            </div>
          </MotionCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. REUSABLE CLOUD ARCHITECTURE FLOW                                       */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b px-6 md:px-12" id="architecture">
        <CloudArchitectureFlow />
      </section>

      {/* ========================================================================= */}
      {/* 8. FIVE STAKEHOLDER EXPERIENCES                                           */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b bg-[#cdc6be]" id="stakeholders">
        <div className="p-6 md:p-12 hairline-b flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <AnimatedEyebrow text="USER CENTRICITY" className="mb-2" />
            <AnimatedH2
              accent="left"
              className="font-monument text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1d1d1b] mt-2"
            >
              FIVE STAKEHOLDER EXPERIENCES
            </AnimatedH2>
          </div>
          <AnimatedParagraph className="font-mono text-xs text-[#625e57] uppercase mt-3 md:mt-0 max-w-sm" delay={0.15}>
            Tailored interfaces delivering transparent value across the agrarian lifecycle.
          </AnimatedParagraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#1d1d1b] font-mono text-xs">
          <MotionCard delay={0.05} className="p-6 flex flex-col justify-between bg-[#ded7ce]/40 hover:bg-[#ded7ce] transition-colors">
            <div>
              <AnimatedLabel text="ROLE 01" className="text-[#c03f13] font-bold block" />
              <AnimatedH4 className="font-monument text-lg text-[#1d1d1b] uppercase mt-2 mb-2">FARMER</AnimatedH4>
              <AnimatedParagraph className="font-editorial text-sm text-[#1d1d1b]/80 leading-relaxed" delay={0.08}>
                Receives understandable, hyper-local risk warnings via native Marathi/Hindi SMS and voice calls. Submits damage photos directly without specialized hardware.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel text="Zero Tech Barrier" className="mt-6 pt-2 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>

          <MotionCard delay={0.1} className="p-6 flex flex-col justify-between bg-[#ded7ce]/40 hover:bg-[#ded7ce] transition-colors">
            <div>
              <AnimatedLabel text="ROLE 02" className="text-[#c03f13] font-bold block" />
              <AnimatedH4 className="font-monument text-lg text-[#1d1d1b] uppercase mt-2 mb-2">FIELD VERIFIER</AnimatedH4>
              <AnimatedParagraph className="font-editorial text-sm text-[#1d1d1b]/80 leading-relaxed" delay={0.12}>
                Reviews structured mathematical evidence packages reconciling ground photos with satellite NDVI anomalies, eliminating manual field logging delays.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel text="70% CCE Cost Reduction" className="mt-6 pt-2 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>

          <MotionCard delay={0.15} className="p-6 flex flex-col justify-between bg-[#ded7ce]/40 hover:bg-[#ded7ce] transition-colors">
            <div>
              <AnimatedLabel text="ROLE 03" className="text-[#c03f13] font-bold block" />
              <AnimatedH4 className="font-monument text-lg text-[#1d1d1b] uppercase mt-2 mb-2">INSURER</AnimatedH4>
              <AnimatedParagraph className="font-editorial text-sm text-[#1d1d1b]/80 leading-relaxed" delay={0.16}>
                Accesses tamper-evident loss evidence with cross-modal confidence scores, enabling rapid 48-hour claim disbursements while curbing fraudulent filings.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel text="50% Fraud Mitigation" className="mt-6 pt-2 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>

          <MotionCard delay={0.2} className="p-6 flex flex-col justify-between bg-[#ded7ce]/40 hover:bg-[#ded7ce] transition-colors">
            <div>
              <AnimatedLabel text="ROLE 04" className="text-[#c03f13] font-bold block" />
              <AnimatedH4 className="font-monument text-lg text-[#1d1d1b] uppercase mt-2 mb-2">GOVERNMENT</AnimatedH4>
              <AnimatedParagraph className="font-editorial text-sm text-[#1d1d1b]/80 leading-relaxed" delay={0.2}>
                Monitors aggregated district-level climate anomalies, heat-stress clusters, and localized disaster declarations through real-time state dashboards.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel text="Policy Resilience" className="mt-6 pt-2 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>

          <MotionCard delay={0.25} className="p-6 flex flex-col justify-between bg-[#ded7ce]/40 hover:bg-[#ded7ce] transition-colors">
            <div>
              <AnimatedLabel text="ROLE 05" className="text-[#c03f13] font-bold block" />
              <AnimatedH4 className="font-monument text-lg text-[#1d1d1b] uppercase mt-2 mb-2">FPO / COOPERATIVE</AnimatedH4>
              <AnimatedParagraph className="font-editorial text-sm text-[#1d1d1b]/80 leading-relaxed" delay={0.24}>
                Schedules community harvesting shifts, distributes electrolyte supplies, and supports member claim intimations with aggregated village data.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel text="Community Defense" className="mt-6 pt-2 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. PROPOSED TARGETS & IMPACT METRICS                                      */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b bg-[#cdc6be]" id="impact">
        <div className="p-6 md:p-12 hairline-b flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <AnimatedEyebrow text="PROJECT PROJECTIONS" className="mb-2" />
            <AnimatedH2 accent="left" className="font-monument text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1d1d1b] mt-2">
              TURN CLIMATE DATA<br />
              <span className="text-[#c03f13]">INTO BETTER DECISIONS.</span>
            </AnimatedH2>
          </div>
          <AnimatedLabel 
            text="ALL METRICS ARE PROPOSED RESEARCH TARGETS · NOT ACHIEVED HISTORICAL RESULTS"
            className="font-mono text-xs text-[#c03f13] font-bold uppercase mt-3 md:mt-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1d1d1b] font-mono">
          {/* Impact 01 */}
          <MotionCard delay={0.05} className="p-6 md:p-10 flex flex-col justify-between bg-[#ded7ce]/40">
            <div>
              <span className="text-[10px] text-[#c03f13] uppercase font-bold px-2 py-0.5 border border-[#c03f13] inline-block mb-3">
                PROPOSED TARGET: HEATSTROKE
              </span>
              <div className="mb-3">
                <AnimatedStat 
                  value={35} 
                  prefix="30–" 
                  suffix="%" 
                  className="font-monument text-5xl sm:text-6xl font-extrabold text-[#1d1d1b] leading-none" 
                />
              </div>
              <AnimatedH4 className="font-monument text-sm uppercase text-[#1d1d1b] font-bold mb-2">
                Targeted Reduction In Clinical Heatstroke
              </AnimatedH4>
              <AnimatedParagraph className="font-serif italic text-sm text-[#625e57] leading-relaxed">
                Projected reduction in acute heat-stress collapses through forward-looking 6-hour personalized work-rest schedule notifications during peak summer harvest.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel text="Target Horizon: 2026–2027 Field Trial" className="mt-6 pt-3 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>

          {/* Impact 02 */}
          <MotionCard delay={0.12} className="p-6 md:p-10 flex flex-col justify-between bg-[#ded7ce]/40">
            <div>
              <span className="text-[10px] text-[#c03f13] uppercase font-bold px-2 py-0.5 border border-[#c03f13] inline-block mb-3">
                PROPOSED TARGET: VERIFICATION
              </span>
              <div className="mb-3">
                <AnimatedStat 
                  value={48} 
                  suffix=" Hours" 
                  className="font-monument text-5xl sm:text-6xl font-extrabold text-[#1d1d1b] leading-none" 
                />
              </div>
              <AnimatedH4 className="font-monument text-sm uppercase text-[#1d1d1b] font-bold mb-2">
                From 45–60 Days To 48 Hours
              </AnimatedH4>
              <AnimatedParagraph className="font-serif italic text-sm text-[#625e57] leading-relaxed">
                Projected compression of PMFBY claim intimation, multimodal cross-verification, and official patwari approval cycle for catastrophic loss relief.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel text="Target Horizon: Pilot Sub-District" className="mt-6 pt-3 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>

          {/* Impact 03 */}
          <MotionCard delay={0.19} className="p-6 md:p-10 flex flex-col justify-between bg-[#ded7ce]/40">
            <div>
              <span className="text-[10px] text-[#c03f13] uppercase font-bold px-2 py-0.5 border border-[#c03f13] inline-block mb-3">
                PROPOSED TARGET: SURVEYING COST
              </span>
              <div className="mb-3">
                <AnimatedStat 
                  value={150} 
                  prefix="₹" 
                  suffix=" / Ac" 
                  className="font-monument text-5xl sm:text-6xl font-extrabold text-[#c03f13] leading-none" 
                />
              </div>
              <AnimatedH4 className="font-monument text-sm uppercase text-[#1d1d1b] font-bold mb-2">
                Reduced From ₹500–800 / Acre
              </AnimatedH4>
              <AnimatedParagraph className="font-serif italic text-sm text-[#625e57] leading-relaxed">
                Projected 70% reduction in physical Crop Cutting Experiment (CCE) surveying overhead by automating satellite &amp; smartphone multimodal correlation.
              </AnimatedParagraph>
            </div>
            <AnimatedLabel text="Target Horizon: PMFBY Integration" className="mt-6 pt-3 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. UN SUSTAINABLE DEVELOPMENT GOALS (Minimal Editorial Ledger)           */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b bg-[#cdc6be] py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-4 mb-6">
          <div>
            <AnimatedEyebrow text="GLOBAL COMMITMENT" className="mb-1" />
            <AnimatedH3 className="font-monument text-2xl sm:text-4xl uppercase text-[#1d1d1b] mt-1">
              UNITED NATIONS SUSTAINABLE DEVELOPMENT GOALS
            </AnimatedH3>
          </div>
          <AnimatedLabel text="Direct alignment with 5 UN targets" className="font-mono text-xs text-[#625e57] uppercase mt-2 md:mt-0" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 font-mono text-xs">
          <MotionCard delay={0.04} className="border border-[#1d1d1b] p-4 bg-[#ded7ce]/50">
            <span className="text-[#c03f13] font-bold text-sm block">SDG 01</span>
            <strong className="font-monument text-sm uppercase text-[#1d1d1b] block mt-1">NO POVERTY</strong>
            <p className="font-editorial text-xs text-[#625e57] mt-1">Preventing bankruptcy after sudden catastrophic climate wipeouts.</p>
          </MotionCard>
          <MotionCard delay={0.08} className="border border-[#1d1d1b] p-4 bg-[#ded7ce]/50">
            <span className="text-[#c03f13] font-bold text-sm block">SDG 02</span>
            <strong className="font-monument text-sm uppercase text-[#1d1d1b] block mt-1">ZERO HUNGER</strong>
            <p className="font-editorial text-xs text-[#625e57] mt-1">Securing agrarian livelihoods and domestic harvest continuity.</p>
          </MotionCard>
          <MotionCard delay={0.12} className="border border-[#1d1d1b] p-4 bg-[#ded7ce]/50">
            <span className="text-[#c03f13] font-bold text-sm block">SDG 03</span>
            <strong className="font-monument text-sm uppercase text-[#1d1d1b] block mt-1">GOOD HEALTH</strong>
            <p className="font-editorial text-xs text-[#625e57] mt-1">Eliminating heatstroke fatalities among manual outdoor harvesters.</p>
          </MotionCard>
          <MotionCard delay={0.16} className="border border-[#1d1d1b] p-4 bg-[#ded7ce]/50">
            <span className="text-[#c03f13] font-bold text-sm block">SDG 08</span>
            <strong className="font-monument text-sm uppercase text-[#1d1d1b] block mt-1">DECENT WORK</strong>
            <p className="font-editorial text-xs text-[#625e57] mt-1">Protecting occupational safety standards for agrarian laborers.</p>
          </MotionCard>
          <MotionCard delay={0.2} className="border border-[#1d1d1b] p-4 bg-[#ded7ce]/50">
            <span className="text-[#c03f13] font-bold text-sm block">SDG 13</span>
            <strong className="font-monument text-sm uppercase text-[#1d1d1b] block mt-1">CLIMATE ACTION</strong>
            <p className="font-editorial text-xs text-[#625e57] mt-1">Adaptive digital public infrastructure for extreme weather resilience.</p>
          </MotionCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. 24-HOUR FEASIBILITY AUDIT (Honest Hackathon / Evaluation Analysis)    */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b bg-[#ded7ce]/40 p-6 md:p-12" id="feasibility">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-6 mb-8 gap-4">
          <div>
            <AnimatedEyebrow text="TRANSPARENT ENGINEERING AUDIT" className="mb-2" />
            <AnimatedH2 accent="left" className="font-monument text-3xl sm:text-5xl uppercase tracking-tight text-[#1d1d1b] mt-2">
              24-HOUR FEASIBILITY EVALUATION
            </AnimatedH2>
          </div>
          <AnimatedParagraph className="max-w-md font-mono text-xs text-[#625e57] uppercase" delay={0.1}>
            Honest, rigorous delineation between what was delivered in the hackathon prototype versus required long-term institutional deployment.
          </AnimatedParagraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {/* Tier 1: 24 Hours Prototype */}
          <MotionCard delay={0.06} className="border-2 border-[#1d1d1b] p-6 bg-[#cdc6be] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-[#c03f13] font-bold uppercase pb-2 border-b border-[#1d1d1b]">
                <span>24 HOURS</span>
                <span className="bg-[#c03f13] text-[#cdc6be] px-1.5 py-0.5 text-[10px]">CURRENT PROTOTYPE</span>
              </div>
              <AnimatedH4 className="font-monument text-xl text-[#1d1d1b] uppercase mt-3 mb-3">
                Functional Prototype
              </AnimatedH4>
              <div className="space-y-2 text-[#1d1d1b]">
                <div className="font-bold text-[#c03f13]">WHAT IS ACHIEVED:</div>
                <ul className="space-y-1 text-[11px] text-[#625e57]">
                  <li>✓ Complete editorial responsive UI &amp; design system</li>
                  <li>✓ Cloud architecture pipeline with zero hardware dependency</li>
                  <li>✓ Sample Sentinel-2 &amp; IMD radar meteorological datasets</li>
                  <li>✓ Pretrained YOLOv8 foliar pathology inference demonstrations</li>
                  <li>✓ Interactive 6-hour WBGT simulator with Vidarbha scenario</li>
                  <li>✓ Plot #MH-VRB-0247 multimodal Bayesian loss calculation</li>
                  <li>✓ Multilingual Marathi/Hindi alert dispatch generator</li>
                </ul>
              </div>
            </div>
            <AnimatedLabel text="STATUS: DEMONSTRATION VERIFIED" className="mt-6 pt-3 hairline-t text-[10px] text-[#1d1d1b] font-bold uppercase block" />
          </MotionCard>

          {/* Tier 2: 3-4 Months MVP */}
          <MotionCard delay={0.12} className="border border-[#1d1d1b] p-6 bg-[#cdc6be] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-[#1d1d1b] font-bold uppercase pb-2 border-b border-[#1d1d1b]">
                <span>3–4 MONTHS</span>
                <span className="border border-[#1d1d1b] px-1.5 py-0.5 text-[10px]">ROADMAP MVP</span>
              </div>
              <AnimatedH4 className="font-monument text-xl text-[#1d1d1b] uppercase mt-3 mb-3">
                District-Scale MVP
              </AnimatedH4>
              <div className="space-y-2 text-[#1d1d1b]">
                <div className="font-bold text-[#1d1d1b]">WHAT IS PLANNED:</div>
                <ul className="space-y-1 text-[11px] text-[#625e57]">
                  <li>→ Retrained ViT and SegFormer on 20,000 ground photos</li>
                  <li>→ Live automated Sentinel-2 STAC index ingestion pipeline</li>
                  <li>→ Automated IVR telephony gateways (Marathi, Telugu, Hindi)</li>
                  <li>→ Controlled field pilot across 50,000 farmers in Vidarbha</li>
                  <li>→ Initial sandbox integration with NCIP / PMFBY test APIs</li>
                  <li>→ Automated EXIF GPS bounding-box polygon matching</li>
                </ul>
              </div>
            </div>
            <AnimatedLabel text="STATUS: ACTIVE RESEARCH ROADMAP" className="mt-6 pt-3 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>

          {/* Tier 3: Longer Term Production */}
          <MotionCard delay={0.18} className="border border-[#1d1d1b] p-6 bg-[#cdc6be] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-[#1d1d1b] font-bold uppercase pb-2 border-b border-[#1d1d1b]">
                <span>LONGER TERM</span>
                <span className="border border-[#1d1d1b] px-1.5 py-0.5 text-[10px]">SOVEREIGN SCALE</span>
              </div>
              <AnimatedH4 className="font-monument text-xl text-[#1d1d1b] uppercase mt-3 mb-3">
                National Production
              </AnimatedH4>
              <div className="space-y-2 text-[#1d1d1b]">
                <div className="font-bold text-[#1d1d1b]">WHAT IS REQUIRED:</div>
                <ul className="space-y-1 text-[11px] text-[#625e57]">
                  <li>→ National multi-state epidemiological heat validation</li>
                  <li>→ Formal institutional integration with Ministry of Agriculture</li>
                  <li>→ Production insurance underwriting consensus agreements</li>
                  <li>→ Regulatory compliance audits and continuous model monitoring</li>
                  <li>→ Sovereign digital public infrastructure serving 100M+ workers</li>
                  <li>→ Continuous reinforcement learning from Patwari sign-off data</li>
                </ul>
              </div>
            </div>
            <AnimatedLabel text="STATUS: NATIONAL VISION" className="mt-6 pt-3 hairline-t text-[10px] text-[#625e57] uppercase block" />
          </MotionCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. ACADEMIC RESEARCH & LITERATURE REVIEW                                  */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto hairline-b bg-[#cdc6be] p-6 md:p-12" id="research">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-6 mb-8 gap-4">
          <div>
            <AnimatedEyebrow text="ACADEMIC CITATION & SYNTHESIS" className="mb-2" />
            <AnimatedH2 accent="left" className="font-monument text-3xl sm:text-5xl uppercase tracking-tight text-[#1d1d1b] mt-2">
              RESEARCH ARCHIVES
            </AnimatedH2>
          </div>
          <AnimatedParagraph className="max-w-md font-mono text-xs text-[#625e57] uppercase" delay={0.1}>
            Rigorous analysis of existing literature on occupational heat stress, satellite agriculture, and insurance auditing.
          </AnimatedParagraph>
        </div>

        {/* Cautious Research Gap Statement */}
        <MotionCard className="dashed-card p-6 md:p-8 bg-[#ded7ce]/60 mb-8 font-editorial">
          <AnimatedLabel text="RESEARCH GAP ASSESSMENT" className="font-mono text-xs uppercase tracking-widest text-[#c03f13] font-bold block mb-2" />
          <AnimatedQuote
            quote="Based on the reviewed literature and solutions documented in the project research, no reviewed solution was identified that combines all of the stated requirements into one integrated workflow."
            className="text-xl md:text-2xl text-[#1d1d1b] italic leading-relaxed"
          />
          <AnimatedParagraph className="font-mono text-xs text-[#625e57] mt-3 uppercase" delay={0.2}>
            Prior studies isolated meteorological WBGT models from personal work intensity, or examined satellite NDVI loss without ground smartphone damage computer vision. Rashkar bridges these disparate disciplines into a single cloud-native protocol.
          </AnimatedParagraph>
        </MotionCard>

        {/* Research Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          <MotionCard delay={0.05} className="border border-[#1d1d1b] p-5 bg-[#ded7ce]/30">
            <AnimatedLabel text="TOPIC 01" className="text-[#c03f13] font-bold block" />
            <AnimatedH4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">
              HEAT-STRESS PREDICTION
            </AnimatedH4>
            <AnimatedParagraph className="text-[#625e57] leading-relaxed text-xs">
              Liljegren WBGT formulation, ISO 7243 standards, and exertional heat collapse risks among tropical agricultural manual laborers.
            </AnimatedParagraph>
          </MotionCard>

          <MotionCard delay={0.1} className="border border-[#1d1d1b] p-5 bg-[#ded7ce]/30">
            <AnimatedLabel text="TOPIC 02" className="text-[#c03f13] font-bold block" />
            <AnimatedH4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">
              SATELLITE SPECTRAL PHENOLOGY
            </AnimatedH4>
            <AnimatedParagraph className="text-[#625e57] leading-relaxed text-xs">
              Copernicus Sentinel-2 MSI red-edge bands (B5, B6, B7) for early drought transpiration decay and NDVI sudden anomaly detection.
            </AnimatedParagraph>
          </MotionCard>

          <MotionCard delay={0.15} className="border border-[#1d1d1b] p-5 bg-[#ded7ce]/30">
            <AnimatedLabel text="TOPIC 03" className="text-[#c03f13] font-bold block" />
            <AnimatedH4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">
              COMPUTER VISION PATHOLOGY
            </AnimatedH4>
            <AnimatedParagraph className="text-[#625e57] leading-relaxed text-xs">
              YOLOv8 micro-geometry detection of mechanical stem fracture and foliar stripping paired with ViT damage classification tiers.
            </AnimatedParagraph>
          </MotionCard>

          <MotionCard delay={0.2} className="border border-[#1d1d1b] p-5 bg-[#ded7ce]/30">
            <AnimatedLabel text="TOPIC 04" className="text-[#c03f13] font-bold block" />
            <AnimatedH4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">
              PMFBY VERIFICATION BOTTLENECKS
            </AnimatedH4>
            <AnimatedParagraph className="text-[#625e57] leading-relaxed text-xs">
              Crop Cutting Experiments (CCE) statistical error margins, yield estimation delays, and dispute resolution models under extreme weather perils.
            </AnimatedParagraph>
          </MotionCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08. DEVELOPERS / THE PEOPLE BEHIND RASHKAR                                */}
      {/* ========================================================================= */}
      <DevelopersSection />

      {/* ========================================================================= */}
      {/* 13. FINAL LANDING STATEMENT POSTER & DUAL CTA                             */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1920px] mx-auto bg-[#1d1d1b] text-[#cdc6be] py-16 md:py-28 px-4 md:px-12 select-none hairline-b relative">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <AnimatedEyebrow text="CONVERGENCE STATEMENT" className="text-[#c03f13] mb-4" />
          <AnimatedH2 
            accent="none"
            className="font-monument text-3xl sm:text-5xl md:text-7xl uppercase tracking-tightest leading-none text-[#cdc6be]"
          >
            CLIMATE RISK BECOMES ACTIONABLE<br />
            <span className="text-[#c03f13]">WHEN THE SIGNALS COME TOGETHER.</span>
          </AnimatedH2>
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: editorialEase }}
            className="font-blackletter text-4xl sm:text-5xl text-[#cdc6be] mt-6"
          >
            Rash<span className="text-[0.88em] inline-block -translate-y-[0.02em]">K</span>ar
          </motion.div>
          <AnimatedParagraph className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#beb5aa] mt-2" delay={0.25}>
            AI FOR CLIMATE-RESILIENT AGRICULTURE · 100% CLOUD &amp; SMARTPHONE
          </AnimatedParagraph>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/heat-risk')}
              className="px-8 py-3.5 border-2 border-[#cdc6be] bg-[#cdc6be] text-[#1d1d1b] font-monument text-base sm:text-lg uppercase tracking-wider hover:bg-[#c03f13] hover:text-[#cdc6be] hover:border-[#c03f13] transition-colors cursor-pointer"
            >
              LAUNCH HEAT-RISK ENGINE →
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/crop-loss')}
              className="px-8 py-3.5 border-2 border-[#cdc6be] text-[#cdc6be] font-monument text-base sm:text-lg uppercase tracking-wider hover:bg-[#cdc6be] hover:text-[#1d1d1b] transition-colors cursor-pointer"
            >
              LAUNCH CROP-LOSS ENGINE →
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
