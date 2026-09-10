import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { RevealText } from '../components/motion/RevealText';
import { SectionHeading } from '../components/motion/SectionHeading';
import { AnimatedNumber } from '../components/motion/AnimatedNumber';
import { MotionCard } from '../components/motion/MotionCard';
import { editorialEase } from '../lib/motionVariants';

interface HeatRiskPageProps {
  navigate: (path: string) => void;
}

export const HeatRiskPage: React.FC<HeatRiskPageProps> = ({ navigate }) => {
  const shouldReduceMotion = useReducedMotion();

  // Interactive simulator state
  const [selectedHour, setSelectedHour] = useState<number>(14); // 08, 10, 12, 14, 16, 18
  const [workerAge, setWorkerAge] = useState<number>(45);
  const [workIntensity, setWorkIntensity] = useState<'low' | 'moderate' | 'heavy'>('heavy');
  const [acclimatized, setAcclimatized] = useState<boolean>(true);
  const [district, setDistrict] = useState<string>('Nagpur District, Vidarbha');

  const handleHourChange = (hr: number) => {
    setSelectedHour(hr);
  };

  // Baseline timeline hourly records (Demonstration Data)
  const hourlyBase: Record<number, { temp: number; hum: number; wbgt: number; baseScore: number; solar: number }> = {
    8: { temp: 30.4, hum: 64, wbgt: 26.2, baseScore: 61, solar: 320 },
    10: { temp: 35.8, hum: 55, wbgt: 28.5, baseScore: 68, solar: 640 },
    12: { temp: 40.1, hum: 46, wbgt: 30.6, baseScore: 78, solar: 880 },
    14: { temp: 42.4, hum: 42, wbgt: 32.2, baseScore: 84, solar: 950 },
    16: { temp: 38.6, hum: 48, wbgt: 29.8, baseScore: 73, solar: 510 },
    18: { temp: 33.2, hum: 56, wbgt: 27.1, baseScore: 55, solar: 140 },
  };

  const currentBase = hourlyBase[selectedHour] || hourlyBase[14];

  // Modulate risk based on user interaction (Age, Intensity, Acclimatization)
  let calculatedScore = currentBase.baseScore;
  if (workerAge > 50) calculatedScore += 8;
  else if (workerAge < 25) calculatedScore -= 3;

  if (workIntensity === 'heavy') calculatedScore += 6;
  else if (workIntensity === 'low') calculatedScore -= 10;

  if (!acclimatized) calculatedScore += 9;

  // Clamp score between 0 and 100
  calculatedScore = Math.min(100, Math.max(25, calculatedScore));

  // Determine risk level tier
  let riskLevel = 'MODERATE';
  let riskColor = 'text-[#1d1d1b] bg-[#beb5aa]';
  let directive = 'Standard Operations — Regular Hydration Interval';
  let clinicalDesc = 'Workers should maintain 500ml water intake per hour. Operations proceed under regular field conditions.';

  if (calculatedScore >= 80) {
    riskLevel = 'EXTREME / CRITICAL';
    riskColor = 'text-[#cdc6be] bg-[#c03f13]';
    directive = 'MANDATORY SHADE BREAK & RECOVERY SHIFT';
    clinicalDesc = 'Severe thermal strain threshold exceeded. Cease heavy manual labor (cotton harvesting, deep digging). Shift remaining workload to post-16:30 hours. Mandatory shaded rest with 750ml ORS electrolyte solution per 45 minutes.';
  } else if (calculatedScore >= 70) {
    riskLevel = 'HIGH HEAT STRESS';
    riskColor = 'text-[#cdc6be] bg-[#1d1d1b]';
    directive = 'INTENSIVE ROTATION & ACTIVE HYDRATION MONITORING';
    clinicalDesc = 'Elevated cardiac and metabolic workload. Implement 15-minute rest breaks every 45 minutes under canopy shade. Workers over 50 transition to low-exertion sorting.';
  } else if (calculatedScore >= 60) {
    riskLevel = 'ELEVATED HEAT RISK';
    riskColor = 'text-[#1d1d1b] bg-[#ded7ce]';
    directive = 'PREVENTIVE SHADE PREPARATION';
    clinicalDesc = 'Prepare shaded shelters and potable water reserves. Monitor field laborers for early signs of dehydration and dizziness.';
  }

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. MONUMENTAL HERO SPREAD                                                 */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold pt-8 pb-14 px-4 sm:px-8 lg:px-14 overflow-hidden relative bg-[#cdc6be]">
        {/* Top Metadata Ledger Bar */}
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b editorial-rule text-xs font-mono">
          <div>
            <span className="text-[#c03f13] uppercase tracking-widest block font-bold">
              RASHKAR / INTELLIGENCE ENGINE 01
            </span>
            <span className="text-[#1d1d1b] uppercase tracking-wider block font-medium">
              Autonomous Worker Heat-Defense Engine
            </span>
          </div>
          <div className="text-[#625e57] leading-relaxed">
            PLATFORM ARCHITECTURE: <strong className="text-[#1d1d1b]">100% CLOUD &amp; SMARTPHONE</strong><br />
            INGESTION: IMD METEOROLOGY + ERA5 REANALYSIS + BHUVAN
          </div>
          <div className="flex md:justify-end items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-1.5 border border-[#1d1d1b] bg-[#1d1d1b] text-[#cdc6be] hover:bg-[#c03f13] hover:border-[#c03f13] transition-colors uppercase tracking-wider font-bold cursor-pointer"
            >
              Interactive Simulator
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/crop-loss')}
              className="px-4 py-1.5 border border-[#1d1d1b] text-[#1d1d1b] hover:bg-[#1d1d1b] hover:text-[#cdc6be] transition-colors uppercase tracking-wider cursor-pointer"
            >
              Twin Engine 02 →
            </motion.button>
          </div>
        </div>

        {/* Massive Monumental Typographic Block (Miranda / Canopee style) */}
        <div className="max-w-[1500px] mx-auto mt-6">
          <div className="@container w-full bg-[#1d1d1b] text-[#cdc6be] px-2 sm:px-4 py-3 sm:py-5 md:py-7 border-2 border-[#1d1d1b] select-none overflow-hidden flex items-center justify-center">
            <motion.h1 
              initial={shouldReduceMotion ? { opacity: 1 } : { y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1.1, ease: editorialEase }}
              className="font-monument leading-[0.88] uppercase tracking-[-0.035em] text-center whitespace-nowrap text-[#ded7ce] select-none block"
              style={{ fontSize: 'clamp(2.8rem, 15.8cqw, 232px)' }}
            >
              HEAT-RISK
            </motion.h1>
          </div>
          <div className="flex flex-col md:flex-row items-baseline justify-between pt-4 pb-8 border-b editorial-rule gap-4">
            <motion.span 
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: editorialEase }}
              className="font-editorial italic font-normal text-5xl sm:text-7xl lg:text-8xl text-[#c03f13] lowercase tracking-normal"
            >
              intelligence
            </motion.span>
            <div className="font-mono text-xs uppercase tracking-widest text-[#625e57] text-left md:text-right">
              PERSONALIZED WBGT PROXY ENGINE · 6-HR PREDICTIVE HORIZON
            </div>
          </div>

          {/* Hero Subhead & Lead Dossier */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <RevealText as="h2" className="font-editorial text-2xl sm:text-4xl text-[#1d1d1b] leading-snug">
                Predicting acute agricultural worker heat stress before outdoor exposure becomes a biological crisis.
              </RevealText>
              <p className="font-editorial text-lg text-[#625e57] mt-4 leading-relaxed max-w-2xl">
                Rashkar’s Heat-Risk Intelligence engine synthesizes cloud atmospheric thermodynamics, satellite vegetation transpiration indicators, and farmer demographic workload context into a localized 6-hour forward-looking heat vulnerability score — delivered in native dialects via SMS and vernacular IVR audio without internet.
              </p>
            </div>
            <div className="lg:col-span-5 border-l editorial-rule pl-0 lg:pl-8">
              <MotionCard delay={0.2} className="bg-[#ded7ce]/50 p-6 border editorial-rule-bold space-y-4">
                <div className="flex justify-between items-center text-xs font-mono uppercase text-[#625e57] pb-2 border-b editorial-rule">
                  <span>Algorithmic Specimen</span>
                  <span className="text-[#c03f13] font-bold">WBGT-Proxy v2.4</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[#625e57] block uppercase text-[10px]">Atmospheric Model</span>
                    <strong className="font-editorial text-base text-[#1d1d1b] block mt-0.5">XGBoost + Bi-LSTM</strong>
                  </div>
                  <div>
                    <span className="text-[#625e57] block uppercase text-[10px]">Worker Risk Estimator</span>
                    <strong className="font-editorial text-base text-[#1d1d1b] block mt-0.5">Random Forest Regressor</strong>
                  </div>
                  <div>
                    <span className="text-[#625e57] block uppercase text-[10px]">Dispatch Pipeline</span>
                    <strong className="font-editorial text-base text-[#1d1d1b] block mt-0.5">IndicBERT Multilingual</strong>
                  </div>
                  <div>
                    <span className="text-[#625e57] block uppercase text-[10px]">Spatial Resolution</span>
                    <strong className="font-editorial text-base text-[#1d1d1b] block mt-0.5">1 km² Gridded Reanalysis</strong>
                  </div>
                </div>
              </MotionCard>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS ROW (4-Column horizontal with thin 1px dividers)                 */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold bg-[#cdc6be]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x editorial-rule">
          <div className="p-6 lg:p-8 flex items-baseline justify-between gap-4">
            <div>
              <span className="font-editorial text-xs uppercase tracking-wider text-[#625e57] block">Heatwave Days In 2024</span>
              <span className="font-monument text-2xl sm:text-3xl text-[#1d1d1b] uppercase tracking-tight block mt-1">RESEARCH</span>
            </div>
            <div className="font-editorial font-light text-5xl sm:text-6xl text-[#c03f13]">
              <AnimatedNumber value={280} suffix="+" />
            </div>
          </div>
          <div className="p-6 lg:p-8 flex items-baseline justify-between gap-4">
            <div>
              <span className="font-editorial text-xs uppercase tracking-wider text-[#625e57] block">Exposed Demography</span>
              <span className="font-monument text-2xl sm:text-3xl text-[#1d1d1b] uppercase tracking-tight block mt-1">WORKERS</span>
            </div>
            <div className="font-editorial font-light text-5xl sm:text-6xl text-[#1d1d1b]">
              <AnimatedNumber value={100} /><span className="text-2xl text-[#c03f13]">M</span>
            </div>
          </div>
          <div className="p-6 lg:p-8 flex items-baseline justify-between gap-4">
            <div>
              <span className="font-editorial text-xs uppercase tracking-wider text-[#625e57] block">Forward Looking</span>
              <span className="font-monument text-2xl sm:text-3xl text-[#1d1d1b] uppercase tracking-tight block mt-1">HORIZON</span>
            </div>
            <div className="font-editorial font-light text-5xl sm:text-6xl text-[#1d1d1b]">0–6<span className="text-2xl text-[#625e57]">h</span></div>
          </div>
          <div className="p-6 lg:p-8 flex items-baseline justify-between gap-4">
            <div>
              <span className="font-editorial text-xs uppercase tracking-wider text-[#625e57] block">Field Hardware Cost</span>
              <span className="font-monument text-2xl sm:text-3xl text-[#1d1d1b] uppercase tracking-tight block mt-1">HARDWARE</span>
            </div>
            <div className="font-editorial font-light text-5xl sm:text-6xl text-[#c03f13]">
              <AnimatedNumber value={0} prefix="₹" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HEAT-RISK PROBLEM SPREAD                                               */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-16 bg-[#cdc6be]" id="problem">
        <div className="max-w-[1500px] mx-auto">
          <SectionHeading label="01 / PHYSIOLOGICAL PROBLEM FORMULATION" className="mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="drop-cap-boxed">A</div>
                <p className="font-editorial text-xl sm:text-2xl text-[#1d1d1b] leading-relaxed">
                  gricultural workers frequently work outdoors under changing heat conditions. A general temperature or heat warning does not represent the same level of risk for every worker.
                </p>
              </div>
              <p className="font-editorial text-lg text-[#625e57] leading-relaxed">
                While standard weather broadcasts state ambient dry-bulb temperature (e.g. 41°C), the biological thermal burden on an agrarian laborer is governed by solar radiation flux, relative humidity, wind velocity, metabolic exertion, clothing insulation, worker age, and baseline hydration.
              </p>

              {/* Hard Border Divider Pull Quote */}
              <div className="border-t-2 border-b-2 border-[#1d1d1b] py-6 my-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#c03f13] block mb-2 font-bold">
                  Clinical Principle
                </span>
                <blockquote className="font-editorial text-3xl sm:text-4xl text-[#1d1d1b] leading-tight">
                  “The heat is environmental. The risk is personal.”
                </blockquote>
                <p className="font-editorial text-sm text-[#625e57] mt-3 italic">
                  A 24-year-old acclimatized harvester sorting crops in a shaded shed experiences manageable physiological strain at 40°C. A 56-year-old laborer picking cotton bolls under blazing noon sun faces immediate exertional heatstroke and acute kidney strain.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l editorial-rule pt-8 lg:pt-0 lg:pl-12 space-y-6">
              <h3 className="font-monument text-3xl sm:text-5xl uppercase text-[#1d1d1b] leading-tight">
                SIX FACTORS THAT MODULATE BIOLOGICAL RISK:
              </h3>
              <ul className="space-y-3 font-mono text-xs text-[#1d1d1b]">
                <MotionCard delay={0.04} className="p-3 border border-[#1d1d1b] bg-[#ded7ce]/40 flex justify-between items-center">
                  <span className="font-bold text-[#c03f13]">01 · ENVIRONMENTAL CONDITIONS</span>
                  <span className="text-[#625e57]">Ambient temp, solar radiation flux, humidity, wind</span>
                </MotionCard>
                <MotionCard delay={0.08} className="p-3 border border-[#1d1d1b] bg-[#ded7ce]/40 flex justify-between items-center">
                  <span className="font-bold text-[#c03f13]">02 · GEOGRAPHIC LOCATION</span>
                  <span className="text-[#625e57]">Microclimate terrain, elevation, canopy shade coverage</span>
                </MotionCard>
                <MotionCard delay={0.12} className="p-3 border border-[#1d1d1b] bg-[#ded7ce]/40 flex justify-between items-center">
                  <span className="font-bold text-[#c03f13]">03 · WORK INTENSITY</span>
                  <span className="text-[#625e57]">Metabolic rate (light sorting vs intensive harvesting)</span>
                </MotionCard>
                <MotionCard delay={0.16} className="p-3 border border-[#1d1d1b] bg-[#ded7ce]/40 flex justify-between items-center">
                  <span className="font-bold text-[#c03f13]">04 · ACCLIMATIZATION</span>
                  <span className="text-[#625e57]">Seasonal exposure duration and cardiovascular conditioning</span>
                </MotionCard>
                <MotionCard delay={0.2} className="p-3 border border-[#1d1d1b] bg-[#ded7ce]/40 flex justify-between items-center">
                  <span className="font-bold text-[#c03f13]">05 · INDIVIDUAL CONTEXT</span>
                  <span className="text-[#625e57]">Worker age, pre-existing kidney conditions, hydration</span>
                </MotionCard>
                <MotionCard delay={0.24} className="p-3 border border-[#1d1d1b] bg-[#ded7ce]/40 flex justify-between items-center">
                  <span className="font-bold text-[#c03f13]">06 · AGRICULTURAL CONTEXT</span>
                  <span className="text-[#625e57]">Crop phenology stage, critical harvesting shift windows</span>
                </MotionCard>
              </ul>
              <div className="p-4 bg-[#1d1d1b] text-[#cdc6be] font-mono text-xs flex justify-between items-center">
                <span>RASHKAR CONVERTS THIS DATA INTO PERSONALIZED HEAT-RISK INTELLIGENCE</span>
                <span className="text-[#c03f13] font-bold">100% CLOUD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DATA SOURCES & AI MODEL PIPELINE                                       */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 4. DATA SOURCES & AI MODEL PIPELINE                                       */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-16 bg-[#ded7ce]/30">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-6 mb-8 gap-4">
            <div>
              <SectionHeading label="02 / DATA PROVENANCE & MODEL ARCHITECTURE" />
              <h2 className="font-monument text-3xl sm:text-5xl uppercase tracking-tight text-[#1d1d1b] mt-2">
                FROM RAW ATMOSPHERE TO PERSONALIZED DISPATCH
              </h2>
            </div>
            <div className="font-mono text-xs text-[#625e57] uppercase">
              Zero Physical Sensors · Multi-Tier PyTorch Computational Graph
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Data Sources List */}
            <div className="space-y-4 font-mono text-xs">
              <div className="text-sm font-bold uppercase text-[#c03f13] tracking-wider mb-2">
                INGESTED DATA SOURCES (CLOUD API)
              </div>
              <MotionCard delay={0.04} className="border border-[#1d1d1b] p-4 bg-[#cdc6be]">
                <strong className="text-sm font-monument uppercase text-[#1d1d1b] block">IMD METEOROLOGY</strong>
                <span className="text-[#625e57]">India Meteorological Department gridded surface observations, Doppler radar reflectivity, and synoptic numerical weather forecasts.</span>
              </MotionCard>
              <MotionCard delay={0.08} className="border border-[#1d1d1b] p-4 bg-[#cdc6be]">
                <strong className="text-sm font-monument uppercase text-[#1d1d1b] block">ECMWF ERA5 REANALYSIS</strong>
                <span className="text-[#625e57]">Global atmospheric reanalysis providing hourly thermodynamic variables, surface solar radiation downwards (SSRD), dewpoint, and wind vectors.</span>
              </MotionCard>
              <MotionCard delay={0.12} className="border border-[#1d1d1b] p-4 bg-[#cdc6be]">
                <strong className="text-sm font-monument uppercase text-[#1d1d1b] block">ISRO BHUVAN &amp; MODIS</strong>
                <span className="text-[#625e57]">High-resolution terrain elevation, land-use surface roughness, and vegetation transpiration indices.</span>
              </MotionCard>
              <MotionCard delay={0.16} className="border border-[#1d1d1b] p-4 bg-[#cdc6be]">
                <strong className="text-sm font-monument uppercase text-[#1d1d1b] block">WORKER &amp; CROP PROFILE</strong>
                <span className="text-[#625e57]">User demographic profile (age, task, shift timing) captured via lightweight PWA or FPO registration.</span>
              </MotionCard>
            </div>

            {/* Right: AI Models Stack */}
            <div className="space-y-4 font-mono text-xs">
              <div className="text-sm font-bold uppercase text-[#c03f13] tracking-wider mb-2">
                MODEL EXECUTION STACK (PYTORCH / CLOUD)
              </div>
              <MotionCard delay={0.06} className="border-2 border-[#1d1d1b] p-5 bg-[#1d1d1b] text-[#cdc6be] space-y-2">
                <div className="flex justify-between items-center text-[#c03f13] font-bold">
                  <span>MODEL LAYER 01</span>
                  <span>XGBOOST + BI-LSTM</span>
                </div>
                <h4 className="font-monument text-lg uppercase text-[#cdc6be]">
                  WBGT PROXY FORECASTING ENGINE
                </h4>
                <p className="font-editorial text-sm text-[#beb5aa] leading-relaxed">
                  Predicts wet-bulb globe temperature proxies across a forward-looking 6-hour horizon by modeling nonlinear radiative and evaporative fluxes against ground station baselines.
                </p>
              </MotionCard>

              <MotionCard delay={0.12} className="border-2 border-[#1d1d1b] p-5 bg-[#cdc6be] space-y-2">
                <div className="flex justify-between items-center text-[#c03f13] font-bold">
                  <span>MODEL LAYER 02</span>
                  <span>RANDOM FOREST REGRESSOR</span>
                </div>
                <h4 className="font-monument text-lg uppercase text-[#1d1d1b]">
                  PERSONALIZED WORKER RISK SCORING (0–100)
                </h4>
                <p className="font-editorial text-sm text-[#625e57] leading-relaxed">
                  Combines the calculated WBGT proxy with demographic age tiers, workload exertion wattage, and acclimatization coefficients to output a personal risk index.
                </p>
              </MotionCard>

              <MotionCard delay={0.18} className="border-2 border-[#1d1d1b] p-5 bg-[#cdc6be] space-y-2">
                <div className="flex justify-between items-center text-[#c03f13] font-bold">
                  <span>MODEL LAYER 03</span>
                  <span>INDICBERT &amp; MULTILINGUAL NLP</span>
                </div>
                <h4 className="font-monument text-lg uppercase text-[#1d1d1b]">
                  VERNACULAR ALERT DISPATCH PIPELINE
                </h4>
                <p className="font-editorial text-sm text-[#625e57] leading-relaxed">
                  Translates numeric clinical risk into actionable native dialect guidance (Marathi, Hindi, Telugu) pushed through IVR audio calls and SMS without internet.
                </p>
              </MotionCard>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE DEMO: READ THE NEXT SIX HOURS (Core Interactive Feature)   */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-4 sm:px-8 lg:px-14 py-16 bg-[#cdc6be]" id="demo-section">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-6 mb-8 gap-4">
            <div>
              <SectionHeading label="03 / OPERATIONAL SPECIMEN · SIMULATOR" />
              <h2 className="font-monument text-3xl sm:text-5xl uppercase tracking-tight text-[#1d1d1b] mt-2">
                READ THE NEXT SIX HOURS
              </h2>
            </div>
            <div className="font-mono text-xs text-[#c03f13] font-bold uppercase bg-[#ded7ce] px-3 py-1.5 border border-[#1d1d1b]">
              DEMONSTRATION DATA · NOT LIVE SENSOR STREAM
            </div>
          </div>

          {/* Location & Context Banner */}
          <div className="p-4 border border-[#1d1d1b] bg-[#ded7ce] flex flex-wrap justify-between items-center font-mono text-xs mb-8 gap-4">
            <div>
              <span className="text-[#625e57] uppercase">DEMONSTRATION LOCATION: </span>
              <strong className="text-[#1d1d1b] font-serif text-base uppercase ml-1">
                VIDARBHA, MAHARASHTRA ({district})
              </strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#625e57]">SWITCH TALUKA:</span>
              <select 
                value={district} 
                onChange={(e) => setDistrict(e.target.value)}
                className="bg-[#cdc6be] border border-[#1d1d1b] px-2 py-1 text-xs font-mono text-[#1d1d1b] cursor-pointer"
              >
                <option value="Nagpur District, Vidarbha">Nagpur (Cotton &amp; Citrus)</option>
                <option value="Amravati District, Vidarbha">Amravati (Soybean &amp; Cotton)</option>
                <option value="Wardha District, Vidarbha">Wardha (Dryland Pulses)</option>
                <option value="Yavatmal District, Vidarbha">Yavatmal (Cotton Belt)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Controls & Timeline */}
            <div className="lg:col-span-7 space-y-6">
              {/* Hour Selection Buttons (08:00, 10:00, 12:00, 14:00, 16:00, 18:00) */}
              <div className="dashed-card p-6 bg-[#ded7ce]/60 space-y-4">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="font-bold text-[#1d1d1b] uppercase">SELECT 6-HOUR TIMELINE SNAPSHOT:</span>
                  <span className="text-[#c03f13] font-bold">{selectedHour}:00 IST</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 font-mono text-xs">
                  {[8, 10, 12, 14, 16, 18].map((hr) => {
                    const rec = hourlyBase[hr];
                    const isSelected = selectedHour === hr;
                    return (
                      <motion.button
                        key={hr}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleHourChange(hr)}
                        className={`p-3 border text-center transition-all cursor-pointer flex flex-col justify-between relative ${
                          isSelected
                            ? 'bg-[#1d1d1b] text-[#cdc6be] border-[#1d1d1b] shadow'
                            : 'bg-[#cdc6be] hover:bg-[#ded7ce] text-[#1d1d1b] border-[#1d1d1b]/40'
                        }`}
                      >
                        <span className="font-bold">{hr < 10 ? `0${hr}:00` : `${hr}:00`}</span>
                        <span className={`text-[10px] mt-1 ${isSelected ? 'text-[#c03f13]' : 'text-[#625e57]'}`}>
                          {rec.wbgt}°C WBGT
                        </span>
                        <span className="text-[9px] text-[#625e57] mt-0.5">
                          Score: {rec.baseScore}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Demographic Modifiers */}
              <div className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/40 space-y-4 font-mono text-xs">
                <div className="text-xs uppercase font-bold text-[#c03f13] tracking-wider">
                  PERSONAL WORKER MODIFIERS (INTERACTIVE)
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Worker Age Slider */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#625e57]">WORKER AGE:</span>
                      <strong className="text-[#1d1d1b]">{workerAge} YRS</strong>
                    </div>
                    <input
                      type="range"
                      min="18"
                      max="65"
                      value={workerAge}
                      onChange={(e) => setWorkerAge(Number(e.target.value))}
                      className="w-full accent-[#c03f13] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-[#625e57] mt-0.5">
                      <span>18y</span>
                      <span>40y</span>
                      <span>65y</span>
                    </div>
                  </div>

                  {/* Work Intensity Selection */}
                  <div>
                    <span className="text-[#625e57] block mb-1">WORK INTENSITY:</span>
                    <div className="flex gap-1">
                      {(['low', 'moderate', 'heavy'] as const).map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setWorkIntensity(tier)}
                          className={`flex-1 py-1.5 border text-[11px] uppercase transition-colors cursor-pointer ${
                            workIntensity === tier
                              ? 'bg-[#1d1d1b] text-[#cdc6be] border-[#1d1d1b] font-bold'
                              : 'bg-[#cdc6be] text-[#1d1d1b] border-[#1d1d1b]/40'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Acclimatization Status */}
                  <div>
                    <span className="text-[#625e57] block mb-1">ACCLIMATIZATION:</span>
                    <button
                      onClick={() => setAcclimatized(!acclimatized)}
                      className={`w-full py-1.5 border text-[11px] uppercase font-bold transition-colors cursor-pointer ${
                        acclimatized
                          ? 'bg-[#cdc6be] text-[#1d1d1b] border-[#1d1d1b]'
                          : 'bg-[#c03f13] text-[#cdc6be] border-[#c03f13]'
                      }`}
                    >
                      {acclimatized ? 'Acclimatized' : 'Unacclimatized (+Risk)'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Environmental Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <MotionCard delay={0.04} className="p-4 border border-[#1d1d1b] bg-[#cdc6be]">
                  <span className="text-[10px] text-[#625e57] uppercase block">DRY BULB TEMP</span>
                  <strong className="text-2xl font-bold text-[#1d1d1b] font-serif block mt-1">
                    {currentBase.temp} °C
                  </strong>
                  <span className="text-[10px] text-[#625e57]">Ambient Air Temp</span>
                </MotionCard>

                <MotionCard delay={0.08} className="p-4 border border-[#1d1d1b] bg-[#cdc6be]">
                  <span className="text-[10px] text-[#625e57] uppercase block">RELATIVE HUMIDITY</span>
                  <strong className="text-2xl font-bold text-[#1d1d1b] font-serif block mt-1">
                    {currentBase.hum} %
                  </strong>
                  <span className="text-[10px] text-[#625e57]">Atmospheric Moisture</span>
                </MotionCard>

                <MotionCard delay={0.12} className="p-4 border border-[#1d1d1b] bg-[#cdc6be]">
                  <span className="text-[10px] text-[#c03f13] uppercase block font-bold">WBGT PROXY</span>
                  <strong className="text-2xl font-bold text-[#c03f13] font-serif block mt-1">
                    {currentBase.wbgt} °C
                  </strong>
                  <span className="text-[10px] text-[#625e57]">Wet-Bulb Globe Index</span>
                </MotionCard>

                <MotionCard delay={0.16} className="p-4 border border-[#1d1d1b] bg-[#cdc6be]">
                  <span className="text-[10px] text-[#625e57] uppercase block">SOLAR RADIATION</span>
                  <strong className="text-2xl font-bold text-[#1d1d1b] font-serif block mt-1">
                    {currentBase.solar} W/m²
                  </strong>
                  <span className="text-[10px] text-[#625e57]">Downwards Flux (SSRD)</span>
                </MotionCard>
              </div>
            </div>

            {/* Right: Calculated Risk Score & Multilingual Alert Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Dynamic Score Card */}
              <div className="border-2 border-[#1d1d1b] p-6 bg-[#1d1d1b] text-[#cdc6be] space-y-4">
                <div className="flex justify-between items-center font-mono text-xs border-b border-[#cdc6be]/20 pb-3">
                  <span className="text-[#c03f13] font-bold uppercase">PREDICTIVE CLINICAL INDEX</span>
                  <span className="text-[#cdc6be]/70 text-[10px]">TIME: {selectedHour}:00 IST</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#beb5aa] block">
                      PERSONALIZED RISK SCORE
                    </span>
                    <div className="font-monument text-6xl sm:text-7xl font-bold text-[#cdc6be] mt-1">
                      <AnimatedNumber 
                        key={`${selectedHour}-${workerAge}-${workIntensity}-${acclimatized}`} 
                        value={calculatedScore} 
                      />
                      <span className="text-2xl text-[#c03f13]"> / 100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`font-mono text-xs uppercase px-2.5 py-1 font-bold inline-block ${riskColor}`}>
                      {riskLevel}
                    </span>
                  </div>
                </div>

                {/* Progress bar with smooth spring animation */}
                <div className="w-full bg-[#33302a] h-2 rounded-full overflow-hidden">
                  <motion.div 
                    className="bg-[#c03f13] h-full"
                    animate={{ width: `${calculatedScore}%` }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  />
                </div>

                {/* Directive */}
                <div className="pt-2 font-editorial">
                  <div className="font-mono text-xs uppercase text-[#c03f13] font-bold">
                    ¶ ACTIONABLE DIRECTIVE:
                  </div>
                  <h4 className="font-monument text-lg text-[#cdc6be] uppercase mt-1">
                    {directive}
                  </h4>
                  <p className="text-xs text-[#cdc6be]/80 mt-1 leading-relaxed">
                    {clinicalDesc}
                  </p>
                </div>
              </div>

              {/* Multilingual Dispatched Alert Card */}
              <div className="border border-[#1d1d1b] p-5 bg-[#ded7ce]/60 space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center text-[#c03f13] font-bold uppercase border-b border-[#1d1d1b]/20 pb-2">
                  <span>LOCAL-LANGUAGE DISPATCH PROTOTYPE</span>
                  <span className="text-[10px] text-[#625e57]">IVR &amp; SMS</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`alerts-${calculatedScore >= 75 ? 'critical' : 'normal'}`}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: editorialEase }}
                    className="space-y-4"
                  >
                    {/* Marathi Alert Card */}
                    <div className="p-3 border border-[#1d1d1b] bg-[#cdc6be]">
                      <div className="flex justify-between items-center mb-1">
                        <strong className="text-[#c03f13] text-[11px] uppercase">मराठी (MARATHI) · AUDIO IVR CALL</strong>
                        <span className="text-[10px] text-[#625e57]">DIAL: 155-224</span>
                      </div>
                      <p className="font-serif text-sm text-[#1d1d1b] leading-relaxed">
                        {calculatedScore >= 75
                          ? '“दुपारी १२ ते ३ या वेळेत तीव्र उष्णतेचा इशारा आहे. शेतातील काम तात्काळ थांबवून सावलीत विश्रांती घ्या. भरपूर पाणी आणि ओआरएस प्या.”'
                          : '“दुपारी उष्णता वाढेल. कामादरम्यान दर ४५ मिनिटांनी सावलीत बसा आणि पुरेसे पाणी प्या.”'}
                      </p>
                    </div>

                    {/* Hindi Alert Card */}
                    <div className="p-3 border border-[#1d1d1b] bg-[#cdc6be]">
                      <div className="flex justify-between items-center mb-1">
                        <strong className="text-[#c03f13] text-[11px] uppercase">हिंदी (HINDI) · SMS BROADCAST</strong>
                        <span className="text-[10px] text-[#625e57]">AUTO-DISPATCH</span>
                      </div>
                      <p className="font-serif text-sm text-[#1d1d1b] leading-relaxed">
                        {calculatedScore >= 75
                          ? '“चेतावनी: दोपहर १२ से ३:३० बजे तक तीव्र लू का जोखिम है। भारी शारीरिक श्रम रोकें और पर्याप्त ओआरएस घोल का सेवन करें।”'
                          : '“सलाह: दोपहर में तेज धूप रहेगी। पर्याप्त पानी पिएं और हर घंटे १० मिनट छाया में विश्राम करें।”'}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HEAT-RISK INNOVATION: NOT ANOTHER WEATHER APP                          */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-16 bg-[#ded7ce]/40">
        <div className="max-w-[1500px] mx-auto">
          <div className="max-w-3xl mb-10">
            <SectionHeading label="04 / VALUE DIFFERENTIATION" />
            <h2 className="font-monument text-3xl sm:text-5xl uppercase tracking-tight text-[#1d1d1b] mt-2">
              THE DIFFERENCE IS NOT ANOTHER WEATHER APP.
            </h2>
            <p className="font-editorial text-lg text-[#625e57] mt-3 leading-relaxed">
              Standard consumer apps tell an individual what the temperature was an hour ago in a distant city. Rashkar engineers predictive biophysical defense specifically for agrarian manual labor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            <MotionCard delay={0.04} className="border border-[#1d1d1b] p-6 bg-[#cdc6be]">
              <span className="text-[#c03f13] font-bold text-sm">01</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">PERSONALIZED RISK</h4>
              <p className="text-[#625e57] leading-relaxed">
                Risk is computed against worker age, cardiovascular exertion tier, and acclimatization, not just ambient air thermometer reading.
              </p>
            </MotionCard>

            <MotionCard delay={0.08} className="border border-[#1d1d1b] p-6 bg-[#cdc6be]">
              <span className="text-[#c03f13] font-bold text-sm">02</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">SHORT-TERM FORECAST</h4>
              <p className="text-[#625e57] leading-relaxed">
                0–6 hour predictive horizon allows farm managers and laborers to reschedule intensive morning and evening shifts before solar apex.
              </p>
            </MotionCard>

            <MotionCard delay={0.12} className="border border-[#1d1d1b] p-6 bg-[#cdc6be]">
              <span className="text-[#c03f13] font-bold text-sm">03</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">ACTIONABLE REST-WORK GUIDANCE</h4>
              <p className="text-[#625e57] leading-relaxed">
                Provides concrete clinical pacing (e.g. 45 min work / 15 min rest, 750ml ORS) mapped to specific crop operations like cotton picking.
              </p>
            </MotionCard>

            <MotionCard delay={0.16} className="border border-[#1d1d1b] p-6 bg-[#cdc6be]">
              <span className="text-[#c03f13] font-bold text-sm">04</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">MULTILINGUAL COMMUNICATION</h4>
              <p className="text-[#625e57] leading-relaxed">
                Reaches non-literate smallholders through vernacular Marathi and Hindi IVR voice telephony, bypassing smartphone app dependency.
              </p>
            </MotionCard>

            <MotionCard delay={0.2} className="border border-[#1d1d1b] p-6 bg-[#cdc6be]">
              <span className="text-[#c03f13] font-bold text-sm">05</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">AGRICULTURAL CONTEXT</h4>
              <p className="text-[#625e57] leading-relaxed">
                Aware of harvesting urgency during crop maturity windows, avoiding unrealistic advisories that demand farmers abandon ripening crops.
              </p>
            </MotionCard>

            <MotionCard delay={0.24} className="border border-[#1d1d1b] p-6 bg-[#cdc6be]">
              <span className="text-[#c03f13] font-bold text-sm">06</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">CLOUD-FIRST ARCHITECTURE</h4>
              <p className="text-[#625e57] leading-relaxed">
                Centralized PyTorch cloud microservices handle 100% of compute at zero infrastructure cost to the farmer.
              </p>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HEAT-RISK FEASIBILITY & IMPACT                                         */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-16 bg-[#cdc6be]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Feasibility Honest Assessment */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading label="05 / RIGOROUS FEASIBILITY BOUNDARIES" />
            <h3 className="font-monument text-3xl sm:text-4xl uppercase text-[#1d1d1b]">
              WHAT IS REALISTIC IN 36 HOURS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <MotionCard delay={0.06} className="p-4 border border-[#1d1d1b] bg-[#ded7ce]/50 space-y-2">
                <span className="text-[#c03f13] font-bold uppercase">POSSIBLE IN 36 HOURS:</span>
                <ul className="space-y-1 text-[#625e57]">
                  <li>✓ Cloud API pipeline architecture</li>
                  <li>✓ Weather reanalysis data ingestion</li>
                  <li>✓ Baseline XGBoost WBGT proxy model</li>
                  <li>✓ Interactive risk visualization simulator</li>
                  <li>✓ Demographic farmer context sliders</li>
                  <li>✓ Multilingual voice/SMS alert prototypes</li>
                </ul>
              </MotionCard>

              <MotionCard delay={0.12} className="p-4 border border-[#1d1d1b] bg-[#ded7ce]/50 space-y-2">
                <span className="text-[#1d1d1b] font-bold uppercase">NOT POSSIBLE IN 36 HOURS:</span>
                <ul className="space-y-1 text-[#625e57]">
                  <li>✗ Multi-state national deployment</li>
                  <li>✗ Long-term field medical validation</li>
                  <li>✗ Extensive epidemiological cohort studies</li>
                  <li>✗ Production IVR telephony carrier routing</li>
                  <li>✗ Government disaster policy integration</li>
                </ul>
              </MotionCard>
            </div>
            <p className="font-editorial text-sm text-[#625e57] italic">
              Rashkar prioritizes honest engineering boundaries. The 36-hour prototype demonstrates functional computational feasibility, preparing for multi-month field validation.
            </p>
          </div>

          {/* Impact Target */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l editorial-rule pt-8 lg:pt-0 lg:pl-10 space-y-6">
            <SectionHeading label="06 / PROPOSED PROJECT TARGET" />
            <MotionCard delay={0.1} className="border-2 border-[#1d1d1b] p-8 bg-[#ded7ce]/60 space-y-3">
              <span className="font-mono text-xs uppercase px-2 py-0.5 bg-[#c03f13] text-[#cdc6be] font-bold inline-block">
                PROPOSED TARGET METRIC
              </span>
              <div className="font-monument text-6xl sm:text-7xl font-extrabold text-[#1d1d1b]">
                <AnimatedNumber value={35} prefix="30–" suffix="%" />
              </div>
              <h4 className="font-monument text-lg uppercase text-[#1d1d1b]">
                Proposed Targeted Reduction in Heatstroke Cases
              </h4>
              <p className="font-editorial text-sm text-[#625e57] leading-relaxed">
                Projected targeted reduction in acute heat-stress emergencies through preemptive 6-hour awareness and structured shade rest schedules in agricultural pilot zones.
              </p>
            </MotionCard>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/crop-loss')}
              className="w-full py-4 border-2 border-[#1d1d1b] bg-[#1d1d1b] text-[#cdc6be] font-monument text-base uppercase tracking-wider hover:bg-[#c03f13] hover:border-[#c03f13] transition-all cursor-pointer"
            >
              PROCEED TO CROP-LOSS INTELLIGENCE →
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
