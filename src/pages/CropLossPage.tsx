import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { RevealText } from '../components/motion/RevealText';
import { SectionHeading } from '../components/motion/SectionHeading';
import { AnimatedNumber } from '../components/motion/AnimatedNumber';
import { MotionCard } from '../components/motion/MotionCard';
import { editorialEase } from '../lib/motionVariants';

interface CropLossPageProps {
  navigate: (path: string) => void;
}

export const CropLossPage: React.FC<CropLossPageProps> = ({ navigate }) => {
  const shouldReduceMotion = useReducedMotion();

  // Interactive Peril Mode: 'hail' | 'flood' | 'drought' | 'pest' | 'lodging'
  const [perilMode, setPerilMode] = useState<'hail' | 'flood' | 'drought' | 'pest' | 'lodging'>('hail');
  const [humanSignedOff, setHumanSignedOff] = useState<boolean>(false);

  // Demonstration Data for Plot #MH-VRB-0247 under different perils
  const perilData = {
    hail: {
      name: 'Unseasonal Hailstorm',
      date: '14 Oct 2024 · 17:42 IST',
      lossEstimate: 64,
      confidence: 91,
      severity: 'HIGH DAMAGE SEVERITY',
      signal1Title: 'Severe Foliar Shredding & Lodging',
      signal1Desc: 'YOLOv8 identified 78% boll detachment, shredded leaf margins, and 42 stem fracture node points from 4 uploaded smartphone photos.',
      signal1Stat: '68% Ground Damage',
      signal2Title: 'Abrupt NDVI Transpiration Drop',
      signal2Desc: 'Sentinel-2 multispectral MSI 10m bands (B4, B8) show -31% sudden drop in Normalized Difference Vegetation Index 48h post-storm.',
      signal2Stat: '-31% NDVI Anomaly',
      signal3Title: 'Convective Doppler Radar Echo',
      signal3Desc: 'IMD Nagpur Doppler Radar recorded 52 dBZ convective cell and ERA5 reanalysis recorded 68 km/h wind gusts over survey coordinates.',
      signal3Stat: '52 dBZ Cell Confirmed',
    },
    flood: {
      name: 'Flash Inundation & Waterlogging',
      date: '02 Aug 2024 · 06:15 IST',
      lossEstimate: 82,
      confidence: 94,
      severity: 'CATASTROPHIC INUNDATION',
      signal1Title: 'Submerged Root Zone & Chlorosis',
      signal1Desc: 'UNet and YOLOv8 segmented standing flood water covering 88% of root zone with rapid yellow chlorosis across lower stems.',
      signal1Stat: '84% Inundated Canopy',
      signal2Title: 'MNDWI Water Index Surge',
      signal2Desc: 'Sentinel-2 Modified Normalized Difference Water Index (MNDWI) surged by +48% with near-total extinction of infrared reflectance.',
      signal2Stat: '+48% Water Index Surge',
      signal3Title: 'Monsoonal Cloudburst Precip Grids',
      signal3Desc: 'IMD rainfall telemetry confirmed 142mm precipitation in 6 hours, confirming rapid overflow of adjacent river drainage basin.',
      signal3Stat: '142 mm / 6hr Deluge',
    },
    drought: {
      name: 'Terminal Dry Spell & Moisture Deficit',
      date: '28 Sep 2024 · 12:00 IST',
      lossEstimate: 53,
      confidence: 88,
      severity: 'MODERATE-TO-SEVERE STRESS',
      signal1Title: 'Canopy Wilting & Soil Cracking',
      signal1Desc: 'ViT MobileNetV3 classified extensive foliar curling, senescence, and severe dryland fissuring throughout the surveyed acreage.',
      signal1Stat: '58% Foliar Desiccation',
      signal2Title: 'Progressive NDRE Transpiration Decay',
      signal2Desc: 'Sentinel-2 red-edge time-series (B5, B6) revealed continuous 28-day decay curve falling 3.2 standard deviations below 5-year baseline.',
      signal2Stat: '-24% 28-Day NDRE Decay',
      signal3Title: 'Zero Rainfall & Soil Moisture Anomaly',
      signal3Desc: 'ERA5-Land soil moisture (0-7cm) fell below 8% volumetric fraction with 24 consecutive rain-free days during boll development.',
      signal3Stat: '8% Soil Moisture (Critical)',
    },
    pest: {
      name: 'Pink Bollworm Foliar Infestation',
      date: '20 Oct 2024 · 10:30 IST',
      lossEstimate: 47,
      confidence: 89,
      severity: 'LOCALIZED PEST OUTBREAK',
      signal1Title: 'Boll Borehole & Larval Damage',
      signal1Desc: 'YOLOv8 detected high-density entrance boreholes and internal fiber staining on 52 sampled bolls across 6 smartphone frames.',
      signal1Stat: '54% Damaged Boll Ratio',
      signal2Title: 'Sub-Canopy Reflectance Decay',
      signal2Desc: 'Sentinel-2 canopy indices show localized chlorophyll degradation across 1.2 hectares of the plot perimeter.',
      signal2Stat: '-18% Canopy Health Drop',
      signal3Title: 'High Humidity & Temp Breeding Window',
      signal3Desc: 'ERA5 reanalysis confirms 8 days of >85% relative humidity and 31°C temp, matching ideal biological incubation thresholds.',
      signal3Stat: 'Optimal Pest Climate Matrix',
    },
    lodging: {
      name: 'Microburst Wind Lodging',
      date: '08 Jul 2024 · 16:10 IST',
      lossEstimate: 59,
      confidence: 90,
      severity: 'SEVERE MECHANICAL COLLAPSE',
      signal1Title: 'Directional Stem Bending & Lodging',
      signal1Desc: 'UNet orientation classifier detected 72% horizontal canopy lodging with unidirectional fall vectors consistent with severe microbursts.',
      signal1Stat: '72% Flat Lodged Canopy',
      signal2Title: 'Scatter Anomaly & Roughness Loss',
      signal2Desc: 'Sentinel-2 and auxiliary radar backscatter drop due to flattened canopy structure altering surface geometry.',
      signal2Stat: '-28% Structural Index',
      signal3Title: 'Localized Squall Echo Detection',
      signal3Desc: 'Doppler velocity profiles registered 74 km/h localized downdrafts coinciding with timestamp of intimation.',
      signal3Stat: '74 km/h Downburst Match',
    },
  };

  const current = perilData[perilMode];

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. MONUMENTAL HERO: MASSIVE FULL-BLEED CROPPED WORDMARK (Stitch Visual)   */}
      {/* ========================================================================= */}
      <section className="border-b-2 editorial-rule-bold overflow-hidden relative bg-[#cdc6be]">
        <div className="pt-6 sm:pt-8 px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-baseline justify-between border-b editorial-rule pb-3 font-mono text-xs text-[#625e57] gap-2">
          <div className="flex items-center gap-4">
            <span>EVIDENCE REANALYSIS 2026</span>
            <span className="text-[#c03f13] font-bold">PMFBY CLAIM SPECIFICATION</span>
          </div>
          <div className="text-left sm:text-right">
            <span>SATELLITE &amp; SMARTPHONE MULTIMODAL AUDIT</span>
          </div>
        </div>

        {/* Monumental Cropped Wordmark */}
        <div className="w-full select-none overflow-hidden pt-4 pb-2 px-2 sm:px-4">
          <motion.h1 
            initial={shouldReduceMotion ? { opacity: 1 } : { y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 1.1, ease: editorialEase }}
            className="giant-condensed-type text-[22vw] sm:text-[23vw] md:text-[21vw] font-black uppercase tracking-tight text-[#1d1d1b] text-center leading-[0.78] w-full block m-0 p-0 transform scale-y-[1.08]"
          >
            CROP-LOSS
          </motion.h1>
          <div className="flex flex-col md:flex-row items-baseline justify-between px-3 sm:px-8 -mt-2 sm:-mt-6 lg:-mt-10 mb-4">
            <motion.span 
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: editorialEase }}
              className="font-editorial italic font-light text-5xl sm:text-7xl lg:text-9xl text-[#c03f13] lowercase tracking-normal"
            >
              intelligence
            </motion.span>
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#625e57] mt-2 md:mt-0 max-w-md text-left md:text-right">
              Autonomous Plot-Loss Audit Engine · Fusing Ground Imagery with Sentinel-2 Multispectral Telemetry
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OPENING SPREAD (Drop-Cap 'W' & Condensed Bold Uppercase Statement)       */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-4 sm:px-8 lg:px-12 py-14 lg:py-20 bg-[#cdc6be]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Boxed Drop-Cap 'W' */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading label="01 / PROBLEM UNDERSTANDING" />

            <div>
              <div className="drop-cap-boxed">W</div>
              <RevealText as="h2" className="font-editorial text-2xl sm:text-3xl text-[#1d1d1b] font-light leading-snug">
                hen a crop is damaged, the evidence should tell the story.
              </RevealText>
            </div>

            <div className="space-y-4 font-editorial text-lg text-[#1d1d1b]/90 leading-relaxed pt-2">
              <p>
                A smartphone photograph shows what is visible on the plant. Satellite imagery shows how the vegetation canopy changes over space and time. Weather data provides environmental context. Soil and crop data add agricultural context.
              </p>
              <p className="text-[#625e57] text-base">
                Each signal alone is incomplete: ground photos lack spatial context to prove 2-hectare loss, while optical satellites are blinded by monsoonal clouds during extreme cyclonic storms. Rashkar combines them into one unified, indisputable evidence package.
              </p>
            </div>

            <div className="p-4 border border-[#1d1d1b] bg-[#ded7ce]/60 font-mono text-xs text-[#625e57] space-y-1">
              <div className="text-[#1d1d1b] font-bold uppercase">STATUS QUO REALITY: 45–60 DAYS CLAIM DELAY</div>
              <div>Physical Crop Cutting Experiments (CCEs) cover only 2–4 cuts per day per officer. Rashkar compresses this verification bottleneck to 48 hours with zero field hardware.</div>
            </div>
          </div>

          {/* Right Column: Statement Stack */}
          <div className="lg:col-span-6 lg:border-l editorial-rule lg:pl-12 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#625e57] mb-3">
                CONVERGENT EVIDENCE FORMULATION
              </div>
              <div className="font-monument text-4xl sm:text-5xl md:text-6xl uppercase text-[#1d1d1b] leading-tight border-b-2 editorial-rule-bold pb-6">
                ONE PLOT.<br />
                MULTIPLE SIGNALS.<br />
                <span className="text-[#c03f13]">INDISPUTABLE</span><br />
                EVIDENCE PACKAGE.
              </div>
              <p className="font-editorial italic text-lg text-[#625e57] mt-4">
                Satellite Telemetry · Weather Grids · Smartphone Photogrammetry · 100% Cloud.
              </p>
            </div>

            <div className="pt-6 border-t editorial-rule space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1 border-b editorial-rule">
                <span className="text-[#625e57] uppercase">Ground Truth Signal</span>
                <span className="font-bold text-[#1d1d1b]">Smartphone EXIF Photogrammetry</span>
              </div>
              <div className="flex justify-between py-1 border-b editorial-rule">
                <span className="text-[#625e57] uppercase">Orbital Spectral Metric</span>
                <span className="font-bold text-[#1d1d1b]">Sentinel-2 MSI (10m Bands 4, 8, 11)</span>
              </div>
              <div className="flex justify-between py-1 border-b editorial-rule">
                <span className="text-[#625e57] uppercase">Atmospheric Verification</span>
                <span className="font-bold text-[#1d1d1b]">IMD Gridded Doppler + ERA5 Reanalysis</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#625e57] uppercase">Verification Protocol</span>
                <span className="font-bold text-[#c03f13]">Human-In-The-Loop Surveyor Dossier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHO IS AFFECTED & CURRENT PROCESS (45–60 Days)                         */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-16 bg-[#ded7ce]/30">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-6 mb-8 gap-4">
            <div>
              <SectionHeading label="02 / ECOSYSTEM STAKEHOLDERS & DELAY ANALYSIS" />
              <h2 className="font-monument text-3xl sm:text-5xl uppercase tracking-tight text-[#1d1d1b] mt-2">
                WHO IS IMPACTED BY DELAYED PROOF
              </h2>
            </div>
            <div className="font-mono text-xs text-[#c03f13] font-bold uppercase">
              STATUS QUO TIMEFRAME: 45 TO 60 DAYS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#1d1d1b] font-mono text-xs">
            <MotionCard delay={0.04} className="p-5 flex flex-col justify-between bg-[#cdc6be]">
              <div>
                <span className="text-[#c03f13] font-bold uppercase">AFFECTED 01</span>
                <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">FARMERS</h4>
                <p className="text-[#625e57] leading-relaxed">
                  Loss of crops completely destroys seasonal household cashflow. Waiting 60 days forces smallholders into informal predatory loans at 36%+ interest.
                </p>
              </div>
              <span className="mt-4 pt-2 hairline-t text-[10px] text-[#1d1d1b] font-bold uppercase">Immediate Relief Need</span>
            </MotionCard>

            <MotionCard delay={0.08} className="p-5 flex flex-col justify-between bg-[#cdc6be]">
              <div>
                <span className="text-[#c03f13] font-bold uppercase">AFFECTED 02</span>
                <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">INSURERS</h4>
                <p className="text-[#625e57] leading-relaxed">
                  Must process millions of concurrent individual claims without reliable mathematical evidence, creating massive operational leakage and litigation.
                </p>
              </div>
              <span className="mt-4 pt-2 hairline-t text-[10px] text-[#1d1d1b] font-bold uppercase">Fraud Prevention</span>
            </MotionCard>

            <MotionCard delay={0.12} className="p-5 flex flex-col justify-between bg-[#cdc6be]">
              <div>
                <span className="text-[#c03f13] font-bold uppercase">AFFECTED 03</span>
                <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">FIELD VERIFIERS</h4>
                <p className="text-[#625e57] leading-relaxed">
                  Loss adjusters and Patwaris face overwhelming paperwork, disputed boundaries, and logistical exhaustion surveying impassable flooded terrain.
                </p>
              </div>
              <span className="mt-4 pt-2 hairline-t text-[10px] text-[#1d1d1b] font-bold uppercase">Auditable Dossiers</span>
            </MotionCard>

            <MotionCard delay={0.16} className="p-5 flex flex-col justify-between bg-[#cdc6be]">
              <div>
                <span className="text-[#c03f13] font-bold uppercase">AFFECTED 04</span>
                <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">GOVERNMENT</h4>
                <p className="text-[#625e57] leading-relaxed">
                  Needs objective, uncompromised plot-level loss maps to trigger state disaster relief budgets and subsidy disbursements transparently.
                </p>
              </div>
              <span className="mt-4 pt-2 hairline-t text-[10px] text-[#1d1d1b] font-bold uppercase">Sovereign Integrity</span>
            </MotionCard>

            <MotionCard delay={0.2} className="p-5 flex flex-col justify-between bg-[#cdc6be]">
              <div>
                <span className="text-[#c03f13] font-bold uppercase">AFFECTED 05</span>
                <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">PMFBY SYSTEM</h4>
                <p className="text-[#625e57] leading-relaxed">
                  National crop insurance requires scalable modernization to maintain farmer trust, reduce administrative overhead, and ensure financial solvency.
                </p>
              </div>
              <span className="mt-4 pt-2 hairline-t text-[10px] text-[#1d1d1b] font-bold uppercase">Digital Public Infra</span>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. AI MODEL ARCHITECTURE MATRIX                                           */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-16 bg-[#cdc6be]">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-6 mb-8 gap-4">
            <div>
              <SectionHeading label="03 / PYTORCH MODEL SPECIFICATION" />
              <h2 className="font-monument text-3xl sm:text-5xl uppercase tracking-tight text-[#1d1d1b] mt-2">
                ORTHOGONAL MODEL STACK
              </h2>
            </div>
            <div className="font-mono text-xs text-[#625e57] uppercase">
              100% Centralized Cloud Inference · Sub-150ms Response
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            {/* Model 01 */}
            <MotionCard delay={0.04} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/50 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold text-[#c03f13] border-b border-[#1d1d1b]/30 pb-2">
                  <span>GROUND VISION</span>
                  <span>MODEL 01</span>
                </div>
                <h4 className="font-monument text-xl uppercase text-[#1d1d1b] mt-3 mb-1">
                  YOLOv8 DETECTOR
                </h4>
                <span className="text-[#c03f13] font-bold block mb-3">Visible Crop-Damage Detection</span>
                <p className="font-editorial text-sm text-[#625e57] leading-relaxed">
                  Detects visible foliar perforation, torn leaves, stem fracture node points, boll detachment, and mechanical lodging directly from farmer smartphone photos.
                </p>
              </div>
              <div className="mt-6 pt-3 hairline-t text-[10px] text-[#1d1d1b] flex justify-between">
                <span>Inference: Cloud GPU</span>
                <strong className="font-bold">98.4% mAP50</strong>
              </div>
            </MotionCard>

            {/* Model 02 */}
            <MotionCard delay={0.08} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/50 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold text-[#c03f13] border-b border-[#1d1d1b]/30 pb-2">
                  <span>PATHOLOGY CLASSIFIER</span>
                  <span>MODEL 02</span>
                </div>
                <h4 className="font-monument text-xl uppercase text-[#1d1d1b] mt-3 mb-1">
                  ViT / MOBILENETV3
                </h4>
                <span className="text-[#c03f13] font-bold block mb-3">Damage Severity Tiers</span>
                <p className="font-editorial text-sm text-[#625e57] leading-relaxed">
                  Vision Transformer extracts fine-grained foliar necrosis, chlorosis, and desiccation patterns, classifying damage into calibrated insurance compensation tiers.
                </p>
              </div>
              <div className="mt-6 pt-3 hairline-t text-[10px] text-[#1d1d1b] flex justify-between">
                <span>Latency: Sub-25ms</span>
                <strong className="font-bold">Calibrated Tiers</strong>
              </div>
            </MotionCard>

            {/* Model 03 */}
            <MotionCard delay={0.12} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/50 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold text-[#c03f13] border-b border-[#1d1d1b]/30 pb-2">
                  <span>SPATIAL SEGMENTATION</span>
                  <span>MODEL 03</span>
                </div>
                <h4 className="font-monument text-xl uppercase text-[#1d1d1b] mt-3 mb-1">
                  UNET / SEGFORMER
                </h4>
                <span className="text-[#c03f13] font-bold block mb-3">Plot &amp; Canopy Isolation</span>
                <p className="font-editorial text-sm text-[#625e57] leading-relaxed">
                  Pixel-level semantic segmentation isolating standing crop canopy from background dry soil, intrusive weeds, standing flood pools, and cadastral field boundaries.
                </p>
              </div>
              <div className="mt-6 pt-3 hairline-t text-[10px] text-[#1d1d1b] flex justify-between">
                <span>Boundary IoU</span>
                <strong className="font-bold">0.89 Fit Metric</strong>
              </div>
            </MotionCard>

            {/* Model 04 */}
            <MotionCard delay={0.16} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/50 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold text-[#c03f13] border-b border-[#1d1d1b]/30 pb-2">
                  <span>ORBITAL TIME-SERIES</span>
                  <span>MODEL 04</span>
                </div>
                <h4 className="font-monument text-xl uppercase text-[#1d1d1b] mt-3 mb-1">
                  SENTINEL-2 LSTM
                </h4>
                <span className="text-[#c03f13] font-bold block mb-3">Satellite Anomaly Detection</span>
                <p className="font-editorial text-sm text-[#625e57] leading-relaxed">
                  Evaluates 5-day cadence NDVI and NDRE spectral trajectories against 5-year historical phenology baselines to verify catastrophe event divergence.
                </p>
              </div>
              <div className="mt-6 pt-3 hairline-t text-[10px] text-[#1d1d1b] flex justify-between">
                <span>Resolution: 10m MSI</span>
                <strong className="font-bold">5-Day Cadence</strong>
              </div>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE PLOT SPECIMEN AUDIT (Plot #MH-VRB-0247, Vidarbha)          */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 5. INTERACTIVE PLOT SPECIMEN AUDIT (Plot #MH-VRB-0247, Vidarbha)          */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-4 sm:px-8 lg:px-14 py-16 bg-[#cdc6be]" id="plot-specimen">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-6 mb-8 gap-4">
            <div>
              <SectionHeading
                label="04 / INTERACTIVE VERIFICATION DOSSIER"
                title="VERIFY A PLOT: SPECIMEN #MH-VRB-0247"
                subtitle="Bt Cotton holding in Morshi, Amravati Taluka, Vidarbha, Maharashtra."
              />
            </div>

            {/* Peril Selector Pill Buttons ('ALL WORK' style from Image 7) */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs mb-2">
              {(['hail', 'flood', 'drought', 'pest', 'lodging'] as const).map((mode) => (
                <motion.button
                  key={mode}
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  onClick={() => {
                    setPerilMode(mode);
                    setHumanSignedOff(false);
                  }}
                  className={`rounded-full px-4 py-1.5 border uppercase font-bold transition-colors cursor-pointer ${
                    perilMode === mode
                      ? 'bg-[#1d1d1b] text-[#cdc6be] border-[#1d1d1b] shadow-sm'
                      : 'bg-transparent text-[#1d1d1b] border-[#1d1d1b]/40 hover:border-[#1d1d1b]'
                  }`}
                >
                  {mode}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Dossier Card Container (Dashed Archival Card - Image 6) */}
          <div className="dashed-card p-6 lg:p-10 bg-[#ded7ce]/70 space-y-6">
            {/* Dossier Header Ledger */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 hairline-b font-mono text-xs">
              <div>
                <span className="text-[#625e57] block text-[10px] uppercase">PLOT IDENTIFIER</span>
                <strong className="text-[#1d1d1b] text-sm">MH-VRB-0247 (Survey #142/3A)</strong>
              </div>
              <div>
                <span className="text-[#625e57] block text-[10px] uppercase">REGISTERED HOLDING</span>
                <strong className="text-[#1d1d1b] text-sm">Bt Cotton (1.8 Hectares)</strong>
              </div>
              <div>
                <span className="text-[#625e57] block text-[10px] uppercase">REPORTED PERIL EVENT</span>
                <strong className="text-[#c03f13] text-sm uppercase">{current.name}</strong>
              </div>
              <div>
                <span className="text-[#625e57] block text-[10px] uppercase">INTIMATION WINDOW</span>
                <strong className="text-[#1d1d1b] text-sm">{current.date}</strong>
              </div>
            </div>

            {/* Metric Banner: Loss % & Confidence */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#cdc6be] p-6 border border-[#1d1d1b]">
              <div className="md:col-span-6">
                <span className="font-mono text-xs uppercase text-[#625e57] block font-bold">
                  BAYESIAN MULTIMODAL VERIFIED LOSS
                </span>
                <div className="flex items-baseline gap-4 mt-2">
                  <span className="font-monument text-6xl sm:text-7xl lg:text-8xl font-black text-[#c03f13] leading-none">
                    <AnimatedNumber value={current.lossEstimate} suffix="%" />
                  </span>
                  <div>
                    <span className="font-monument text-xl sm:text-2xl uppercase text-[#1d1d1b] block leading-tight">
                      Verified Crop Loss
                    </span>
                    <span className="font-mono text-[11px] text-[#625e57]">
                      {current.lossEstimate >= 50
                        ? 'Meets PMFBY 50% Catastrophic Fast-Track Trigger'
                        : 'Partial Loss Settlement Tier'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 md:border-l editorial-rule md:pl-6 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#625e57] uppercase font-bold">AI FUSION CONFIDENCE:</span>
                  <span className="font-monument text-3xl text-[#1d1d1b] font-bold">
                    <AnimatedNumber value={current.confidence} suffix="%" />
                  </span>
                </div>
                <div className="w-full bg-[#ded7ce] h-2 rounded-full overflow-hidden">
                  <motion.div 
                    className="bg-[#c03f13] h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${current.confidence}%` }}
                    transition={{ type: "spring", stiffness: 90, damping: 14 }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-[#625e57]">
                  <span>Cryptographic Seal: #SHA256-7FA29B</span>
                  <span className="text-[#c03f13] font-bold uppercase">{current.severity}</span>
                </div>
              </div>
            </div>

            {/* 3 Orthogonal Signals Breakdown with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={perilMode}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: editorialEase }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs"
              >
                {/* Signal 01: Smartphone EXIF */}
                <MotionCard delay={0.05} className="border border-[#1d1d1b] p-5 bg-[#cdc6be] space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-[10px] uppercase hairline-b pb-2">
                      <span className="text-[#625e57]">SIGNAL 01 // GROUND</span>
                      <span className="text-[#c03f13] font-bold">SMARTPHONE EXIF</span>
                    </div>
                    <h5 className="font-monument text-lg uppercase text-[#1d1d1b] mt-3">
                      {current.signal1Title}
                    </h5>
                    <p className="font-editorial text-xs text-[#625e57] mt-1 leading-relaxed">
                      {current.signal1Desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 hairline-t text-[11px] font-bold text-[#1d1d1b] flex justify-between">
                    <span>GROUND METRIC:</span>
                    <span className="text-[#c03f13]">{current.signal1Stat}</span>
                  </div>
                </MotionCard>

                {/* Signal 02: Sentinel-2 Orbital */}
                <MotionCard delay={0.1} className="border border-[#1d1d1b] p-5 bg-[#cdc6be] space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-[10px] uppercase hairline-b pb-2">
                      <span className="text-[#625e57]">SIGNAL 02 // SATELLITE</span>
                      <span className="text-[#c03f13] font-bold">SENTINEL-2 MSI</span>
                    </div>
                    <h5 className="font-monument text-lg uppercase text-[#1d1d1b] mt-3">
                      {current.signal2Title}
                    </h5>
                    <p className="font-editorial text-xs text-[#625e57] mt-1 leading-relaxed">
                      {current.signal2Desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 hairline-t text-[11px] font-bold text-[#1d1d1b] flex justify-between">
                    <span>ORBITAL METRIC:</span>
                    <span className="text-[#c03f13]">{current.signal2Stat}</span>
                  </div>
                </MotionCard>

                {/* Signal 03: Doppler / Weather Record */}
                <MotionCard delay={0.15} className="border border-[#1d1d1b] p-5 bg-[#cdc6be] space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-[10px] uppercase hairline-b pb-2">
                      <span className="text-[#625e57]">SIGNAL 03 // ATMOSPHERE</span>
                      <span className="text-[#c03f13] font-bold">IMD &amp; ERA5 GRIDS</span>
                    </div>
                    <h5 className="font-monument text-lg uppercase text-[#1d1d1b] mt-3">
                      {current.signal3Title}
                    </h5>
                    <p className="font-editorial text-xs text-[#625e57] mt-1 leading-relaxed">
                      {current.signal3Desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 hairline-t text-[11px] font-bold text-[#1d1d1b] flex justify-between">
                    <span>ATMOSPHERIC METRIC:</span>
                    <span className="text-[#c03f13]">{current.signal3Stat}</span>
                  </div>
                </MotionCard>
              </motion.div>
            </AnimatePresence>

            {/* Evidence Package & Human Review Status Action */}
            <div className="hairline-t pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs">
              <div>
                <span className="text-[#625e57] block">AUDIT DECISION STATUS:</span>
                <strong className={`text-sm uppercase ${humanSignedOff ? 'text-[#96b59f]' : 'text-[#c03f13]'}`}>
                  {humanSignedOff ? '✓ VERIFIED & APPROVED BY AUTHORIZED PATWARI' : '⚠ HUMAN REVIEW REQUIRED — EVIDENCE COMPILED'}
                </strong>
                <div className="text-[10px] text-[#625e57] mt-0.5">
                  DEMONSTRATION DATA · NOT AN ACTUAL PMFBY SETTLEMENT DETERMINATION
                </div>
              </div>

              <div className="flex items-center gap-3">
                {!humanSignedOff ? (
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    onClick={() => setHumanSignedOff(true)}
                    className="px-6 py-2.5 bg-[#1d1d1b] text-[#cdc6be] font-monument text-xs uppercase tracking-wider hover:bg-[#c03f13] transition-colors cursor-pointer"
                  >
                    SIMULATE OFFICIAL SIGN-OFF ✍
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    onClick={() => setHumanSignedOff(false)}
                    className="px-6 py-2.5 border border-[#1d1d1b] text-[#1d1d1b] font-monument text-xs uppercase tracking-wider hover:bg-[#cdc6be] transition-colors cursor-pointer"
                  >
                    RESET VERIFICATION STATUS
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PMFBY COMPARISON: STATUS QUO VS RASHKAR-ASSISTED                       */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-16 bg-[#ded7ce]/40">
        <div className="max-w-[1500px] mx-auto">
          <SectionHeading
            label="05 / INSTITUTIONAL WORKFLOW ACCELERATION"
            title="REDUCING SETTLEMENT FROM 60 DAYS TO 48 HOURS"
            subtitle="Important: Rashkar does NOT automatically approve or reject insurance claims. It empowers authorized human adjusters with reconciled mathematical evidence."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono text-xs mt-10">
            {/* Status Quo */}
            <MotionCard delay={0.1} className="border border-[#1d1d1b] p-6 bg-[#cdc6be] space-y-4">
              <div className="flex justify-between items-center text-[#625e57] font-bold border-b border-[#1d1d1b]/30 pb-2">
                <span>CONVENTIONAL STATUS QUO</span>
                <span className="text-[#c03f13] font-bold">45–60 DAYS DELAY</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">01</span>
                  <span><strong>Loss Intimation:</strong> Farmer travels to block office to file physical intimation form.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">02</span>
                  <span><strong>Field Scheduling:</strong> Surveyor dispatched weeks later due to overwhelming backlog.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">03</span>
                  <span><strong>Crop Cutting Experiment:</strong> Manual 5m × 5m plot cutting subject to sampling error.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">04</span>
                  <span><strong>Dispute Loops:</strong> Disagreements between farmer and insurer over boundary and degree of damage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">05</span>
                  <span><strong>Claim Disbursement:</strong> Bank transfer occurs 2–3 months later, missing replanting window.</span>
                </li>
              </ul>
            </MotionCard>

            {/* Rashkar-Assisted */}
            <MotionCard delay={0.2} className="border-2 border-[#1d1d1b] p-6 bg-[#1d1d1b] text-[#cdc6be] space-y-4">
              <div className="flex justify-between items-center text-[#c03f13] font-bold border-b border-[#cdc6be]/20 pb-2">
                <span>RASHKAR-ASSISTED PROTOCOL</span>
                <span className="text-[#96b59f] font-bold">48 HOURS TARGET</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">01</span>
                  <span><strong className="text-[#cdc6be]">Mobile Capture:</strong> Farmer uploads 3–4 photos on existing smartphone via PWA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">02</span>
                  <span><strong className="text-[#cdc6be]">Satellite Reanalysis:</strong> Cloud workers pull Sentinel-2 10m NDVI time-series instantly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">03</span>
                  <span><strong className="text-[#cdc6be]">Multimodal Fusion:</strong> YOLOv8 + LSTM cross-correlate ground and orbital signals with Doppler radar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">04</span>
                  <span><strong className="text-[#cdc6be]">Evidence Package:</strong> Tamper-evident SHA-256 sealed loss dossier compiled automatically.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c03f13] font-bold">05</span>
                  <span><strong className="text-[#96b59f]">Human Sign-Off:</strong> Authorized Patwari reviews pre-reconciled package for 48-hour electronic sign-off.</span>
                </li>
              </ul>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HUMAN-IN-THE-LOOP PRINCIPLE & GOVERNANCE                               */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-20 bg-[#1d1d1b] text-[#cdc6be]">
        <div className="max-w-[1200px] mx-auto text-center space-y-6">
          <SectionHeading
            center
            label="ETHICAL GOVERNANCE & LEGAL ARCHITECTURE"
            title="AI CAN ASSIST. HUMANS DECIDE."
            subtitle="Rashkar never executes autonomous financial payouts or unilateral claim rejections. Machine learning models produce mathematically auditable evidence; certified agrarian officials retain sovereign legal decision authority."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left pt-8 font-mono text-xs">
            <MotionCard delay={0.05} className="p-4 border border-[#cdc6be]/30 bg-[#33302a]">
              <span className="text-[#c03f13] font-bold block mb-1">AI ROLE 01</span>
              <strong className="text-[#cdc6be] uppercase block">LOSS ESTIMATION</strong>
              <p className="text-[11px] text-[#beb5aa] mt-1">Mathematical bounds (e.g. 64% ±3.4%) based on multimodal inputs.</p>
            </MotionCard>
            <MotionCard delay={0.1} className="p-4 border border-[#cdc6be]/30 bg-[#33302a]">
              <span className="text-[#c03f13] font-bold block mb-1">AI ROLE 02</span>
              <strong className="text-[#cdc6be] uppercase block">CONFIDENCE METRIC</strong>
              <p className="text-[11px] text-[#beb5aa] mt-1">Bayesian evidentiary agreement between satellite and ground imagery.</p>
            </MotionCard>
            <MotionCard delay={0.15} className="p-4 border border-[#cdc6be]/30 bg-[#33302a]">
              <span className="text-[#c03f13] font-bold block mb-1">AI ROLE 03</span>
              <strong className="text-[#cdc6be] uppercase block">PATHOLOGY TIERS</strong>
              <p className="text-[11px] text-[#beb5aa] mt-1">Categorizing mechanical damage vs biological foliar diseases.</p>
            </MotionCard>
            <MotionCard delay={0.2} className="p-4 border border-[#cdc6be]/30 bg-[#33302a]">
              <span className="text-[#c03f13] font-bold block mb-1">AI ROLE 04</span>
              <strong className="text-[#cdc6be] uppercase block">EVIDENCE AGGREGATION</strong>
              <p className="text-[11px] text-[#beb5aa] mt-1">Compiling EXIF, satellite timelines, and weather into single dossier.</p>
            </MotionCard>
            <MotionCard delay={0.25} className="p-4 border border-[#cdc6be]/30 bg-[#33302a]">
              <span className="text-[#c03f13] font-bold block mb-1">AI ROLE 05</span>
              <strong className="text-[#cdc6be] uppercase block">REVIEW QUEUE</strong>
              <p className="text-[11px] text-[#beb5aa] mt-1">Prioritizing catastrophic wiped-out smallholders for rapid review.</p>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. INNOVATION IN THE FUSION & CAUTIOUS RESEARCH ASSESSMENT                */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-16 bg-[#cdc6be]">
        <div className="max-w-[1500px] mx-auto">
          <SectionHeading
            label="06 / CORE INNOVATION"
            title="THE INNOVATION IS IN THE FUSION"
            subtitle="Based on the reviewed literature and solutions documented in the project research, no reviewed solution was identified that combines all of the stated requirements into one integrated workflow."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs mt-10">
            <MotionCard delay={0.05} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/40">
              <span className="text-[#c03f13] font-bold text-sm">01</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">MULTIMODAL EVIDENCE</h4>
              <p className="text-[#625e57] leading-relaxed">
                Overcoming single-sensor failure modes by cross-validating commodity phone images with orbital reflectance and Doppler radar.
              </p>
            </MotionCard>

            <MotionCard delay={0.1} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/40">
              <span className="text-[#c03f13] font-bold text-sm">02</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">PLOT-LEVEL INTELLIGENCE</h4>
              <p className="text-[#625e57] leading-relaxed">
                Operating at individual cadastral survey numbers (1–2 hectares) rather than coarse district-level administrative aggregations.
              </p>
            </MotionCard>

            <MotionCard delay={0.15} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/40">
              <span className="text-[#c03f13] font-bold text-sm">03</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">TIME-SERIES + VISUALS</h4>
              <p className="text-[#625e57] leading-relaxed">
                Pairing longitudinal 5-year spectral decay trajectories with acute point-in-time smartphone stem fracture detections.
              </p>
            </MotionCard>

            <MotionCard delay={0.2} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/40">
              <span className="text-[#c03f13] font-bold text-sm">04</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">CLOUD AI COMPUTATION</h4>
              <p className="text-[#625e57] leading-relaxed">
                Zero field hardware to maintain. All neural inference executed on centralized cloud clusters, keeping farmer hardware costs at ₹0.
              </p>
            </MotionCard>

            <MotionCard delay={0.25} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/40">
              <span className="text-[#c03f13] font-bold text-sm">05</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">EVIDENCE-FIRST OUTPUT</h4>
              <p className="text-[#625e57] leading-relaxed">
                Every percentage loss estimate is accompanied by cryptographic hash verification, bounding polygon overlays, and radar confirmation.
              </p>
            </MotionCard>

            <MotionCard delay={0.3} className="border border-[#1d1d1b] p-6 bg-[#ded7ce]/40">
              <span className="text-[#c03f13] font-bold text-sm">06</span>
              <h4 className="font-monument text-base uppercase text-[#1d1d1b] mt-1 mb-2">HUMAN-REVIEWED WORKFLOW</h4>
              <p className="text-[#625e57] leading-relaxed">
                Designed to empower agrarian officers and insurers with defensible data, preserving human accountability under PMFBY statutes.
              </p>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. PROPOSED IMPACT & FINANCIAL EFFICIENCY                                  */}
      {/* ========================================================================= */}
      <section className="border-b editorial-rule-bold px-6 lg:px-14 py-16 bg-[#ded7ce]/30">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-6 mb-8 gap-4">
            <div>
              <SectionHeading
                label="07 / TARGET PROJECTIONS"
                title="PROJECTED SYSTEM EFFICIENCY"
              />
            </div>
            <div className="font-mono text-xs text-[#c03f13] font-bold uppercase mb-2">
              IMPORTANT: PROPOSED TARGETS · NOT ACHIEVED HISTORICAL OUTCOMES
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1d1d1b] font-mono">
            <MotionCard delay={0.05} className="p-6 md:p-8 flex flex-col justify-between bg-[#cdc6be]">
              <div>
                <span className="text-[10px] uppercase text-[#c03f13] font-bold">CYCLE COMPRESSION</span>
                <div className="font-monument text-4xl sm:text-5xl font-extrabold text-[#1d1d1b] my-2">
                  <AnimatedNumber value={48} suffix=" Hrs" />
                </div>
                <div className="font-monument text-xs uppercase text-[#1d1d1b] font-bold mb-1">
                  From 45–60 Days To 48h
                </div>
                <p className="font-editorial text-xs text-[#625e57] leading-relaxed">
                  Proposed target to accelerate post-disaster claim intimation and verification sign-off.
                </p>
              </div>
              <span className="mt-4 pt-2 hairline-t text-[10px] text-[#625e57] uppercase">Proposed Target</span>
            </MotionCard>

            <MotionCard delay={0.1} className="p-6 md:p-8 flex flex-col justify-between bg-[#cdc6be]">
              <div>
                <span className="text-[10px] uppercase text-[#c03f13] font-bold">COST REDUCTION</span>
                <div className="font-monument text-4xl sm:text-5xl font-extrabold text-[#1d1d1b] my-2">
                  <AnimatedNumber value={70} suffix="%" />
                </div>
                <div className="font-monument text-xs uppercase text-[#1d1d1b] font-bold mb-1">
                  CCE Survey Overhead Drop
                </div>
                <p className="font-editorial text-xs text-[#625e57] leading-relaxed">
                  Targeted reduction in logistical expenditure associated with manual Crop Cutting Experiments.
                </p>
              </div>
              <span className="mt-4 pt-2 hairline-t text-[10px] text-[#625e57] uppercase">Proposed Target</span>
            </MotionCard>

            <MotionCard delay={0.15} className="p-6 md:p-8 flex flex-col justify-between bg-[#cdc6be]">
              <div>
                <span className="text-[10px] uppercase text-[#c03f13] font-bold">UNIT SURVEY COST</span>
                <div className="font-monument text-4xl sm:text-5xl font-extrabold text-[#c03f13] my-2">
                  <AnimatedNumber value={150} prefix="₹" />
                </div>
                <div className="font-monument text-xs uppercase text-[#1d1d1b] font-bold mb-1">
                  Down from ₹500–800 / Acre
                </div>
                <p className="font-editorial text-xs text-[#625e57] leading-relaxed">
                  Proposed surveying cost per enrolled plot acreage achieved through cloud automation.
                </p>
              </div>
              <span className="mt-4 pt-2 hairline-t text-[10px] text-[#625e57] uppercase">Proposed Target</span>
            </MotionCard>

            <MotionCard delay={0.2} className="p-6 md:p-8 flex flex-col justify-between bg-[#cdc6be]">
              <div>
                <span className="text-[10px] uppercase text-[#c03f13] font-bold">FRAUD MITIGATION</span>
                <div className="font-monument text-4xl sm:text-5xl font-extrabold text-[#1d1d1b] my-2">
                  <AnimatedNumber value={50} suffix="%" />
                </div>
                <div className="font-monument text-xs uppercase text-[#1d1d1b] font-bold mb-1">
                  ₹1,500 Cr → ₹750 Cr / Year
                </div>
                <p className="font-editorial text-xs text-[#625e57] leading-relaxed">
                  Projected reduction in disputed claims through cryptographic satellite and EXIF cross-checking.
                </p>
              </div>
              <span className="mt-4 pt-2 hairline-t text-[10px] text-[#625e57] uppercase">Proposed Target</span>
            </MotionCard>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.button
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => navigate('/heat-risk')}
              className="px-8 py-3.5 border border-[#1d1d1b] text-[#1d1d1b] font-monument text-sm uppercase tracking-wider hover:bg-[#1d1d1b] hover:text-[#cdc6be] transition-all cursor-pointer"
            >
              ← RETURN TO HEAT-RISK ENGINE
            </motion.button>
            <motion.button
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => navigate('/')}
              className="px-8 py-3.5 bg-[#1d1d1b] text-[#cdc6be] font-monument text-sm uppercase tracking-wider hover:bg-[#c03f13] transition-all cursor-pointer"
            >
              RETURN TO RASHKAR HOME
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
