import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { editorialEase, gentleSpring } from '../lib/motionVariants';
import {
  AnimatedH3,
  AnimatedH4,
  AnimatedEyebrow,
  AnimatedParagraph,
  AnimatedLabel,
} from './motion/Typography';

export const CloudArchitectureFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2);

  const stages = [
    {
      step: '01',
      title: 'PUBLIC DATA INGESTION',
      subtitle: 'Zero Hardware Feeds',
      description: 'Centralized cloud workers continuously pull open meteorological and multispectral satellite archives. No on-farm physical sensors are deployed.',
      sources: ['IMD Doppler Gridded Radar', 'ECMWF ERA5 Reanalysis', 'Copernicus Sentinel-2 MSI (10m)', 'ISRO Bhuvan & MODIS NDVI', 'ICAR Soil Moisture Grids'],
      badge: 'Public Feeds & Satellite',
      color: 'border-[#1d1d1b]',
    },
    {
      step: '02',
      title: 'SMARTPHONE EVIDENCE',
      subtitle: 'Commodity Mobile Ingestion',
      description: 'Farmers and field adjusters capture geotagged ground images on existing smartphones. EXIF metadata is parsed and SHA-256 cryptographically sealed against tampering.',
      sources: ['Farmer Existing Smartphone', 'Field Verifier PWA App', 'EXIF Timestamp & Lat/Long', 'Loss Intimation Form', 'Cryptographic Hashes'],
      badge: 'Zero Edge Hardware',
      color: 'border-[#1d1d1b]',
    },
    {
      step: '03',
      title: 'CENTRALIZED CLOUD API',
      subtitle: 'FastAPI & Secure Gateway',
      description: 'Scalable cloud API layer orchestrated on AWS/GCP Kubernetes with rate-limiting, regional load balancing, and async job queues for instant high-concurrency ingestion.',
      sources: ['FastAPI Microservices', 'Celery / Redis Queues', 'PostgreSQL TimescaleDB', 'S3 Object Storage (Evidence Vault)', 'JWT Auth & API Gateways'],
      badge: 'Cloud Orchestration',
      color: 'border-[#c03f13]',
    },
    {
      step: '04',
      title: 'PYTORCH AI MODEL CLUSTERS',
      subtitle: 'Dual Intelligence Engines',
      description: 'GPU-accelerated cloud inference nodes execute dual orthogonal AI workflows for biophysical human protection and plot-level crop damage reconciliation.',
      sources: [
        'Engine 01: XGBoost + Bi-LSTM WBGT Proxy',
        'Engine 01: Random Forest Worker Risk Scorer',
        'Engine 02: YOLOv8 Foliar & Lodging Detector',
        'Engine 02: ViT MobileNetV3 Severity Classifier',
        'Engine 02: UNet / SegFormer Canopy Segmentation',
        'Engine 02: Sentinel-2 Temporal Anomaly LSTM'
      ],
      badge: '100% Cloud Compute',
      color: 'border-[#1d1d1b]',
    },
    {
      step: '05',
      title: 'EVIDENCE & DISPATCH',
      subtitle: 'Multimodal Bayesian Synthesis',
      description: 'Outputs are compiled into auditable packages: 6-hour forward-looking heat risk indices or mathematical 3-signal crop-loss proof dossiers.',
      sources: ['6-Hr Dynamic WBGT Curve', 'Prescribed Rest-Work Window', 'Multimodal Loss Score & 91% Confidence', 'Plot Polygon Visual Overlay', 'Tamper-Evident SHA-256 Seal'],
      badge: 'Auditable Output',
      color: 'border-[#1d1d1b]',
    },
    {
      step: '06',
      title: 'HUMAN DECISION & DELIVERY',
      subtitle: 'Authoritative Sign-Off',
      description: 'Direct dispatch to feature phones via vernacular IVR/SMS without internet. Reconciled dossiers delivered to State Patwaris & Insurance adjusters for 48-hr claim settlement.',
      sources: ['Marathi & Hindi IVR Calls', 'Auto-Dispatched SMS Warnings', 'Patwari Web Portal Sign-Off', 'PMFBY NCIP API Integration', 'Final Claim Verification'],
      badge: 'Human-In-The-Loop',
      color: 'border-[#c03f13]',
    }
  ];

  return (
    <div className="w-full bg-[#cdc6be] py-12 md:py-16">
      {/* Title & Architecture Declaration with entrance reveal */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end hairline-b pb-6 mb-8 gap-4">
        <div>
          <AnimatedEyebrow text="TOPOLOGY BLUEPRINT · SPECIFICATION 2026" />
          <AnimatedH3 className="font-monument text-3xl sm:text-5xl uppercase tracking-tight text-[#1d1d1b] mt-2">
            INTELLIGENCE IN THE CLOUD
          </AnimatedH3>
        </div>
        <AnimatedParagraph className="max-w-md font-mono text-xs text-[#2b2825] text-left md:text-right" delay={0.1}>
          A software-only computational pipeline powered by <span className="text-[#1d1d1b] font-bold">cloud microservices, public meteorological feeds, and commodity smartphones</span>.
        </AnimatedParagraph>
      </div>

      {/* Horizontal Flow Steps (Interactive Tabs with Motion & LayoutId) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 font-mono text-xs">
        {stages.map((st, idx) => {
          const isActive = activeStage === idx;
          return (
            <motion.button
              key={st.step}
              onClick={() => setActiveStage(idx)}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className={`p-3 text-left border transition-colors cursor-pointer flex flex-col justify-between h-28 relative ${
                isActive
                  ? 'bg-[#1d1d1b] text-[#cdc6be] border-[#1d1d1b] shadow-md'
                  : 'bg-[#ded7ce]/60 hover:bg-[#ded7ce] text-[#1d1d1b] border-[#1d1d1b]/40'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-stage-top-border"
                  className="absolute top-0 left-0 right-0 h-[3px] bg-[#c03f13]"
                  transition={gentleSpring}
                />
              )}
              <div className="flex justify-between items-center w-full">
                <span className={`font-bold ${isActive ? 'text-[#c03f13]' : 'text-[#2b2825]'}`}>
                  {st.step}
                </span>
                <span className={`text-[9px] uppercase px-1 py-0.5 border ${
                  isActive ? 'border-[#cdc6be]/30 text-[#cdc6be]' : 'border-[#1d1d1b]/20 text-[#2b2825]'
                }`}>
                  {st.badge}
                </span>
              </div>
              <div className="font-monument text-xs uppercase font-bold leading-tight mt-2">
                {st.title}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Active Stage Deep Dive (Dashed Card Treatment with AnimatePresence) */}
      <div className="dashed-card p-6 md:p-10 bg-[#ded7ce]/80 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: editorialEase }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center hairline-b pb-6 gap-4">
              <div>
                <div className="font-mono text-xs text-[#c03f13] uppercase tracking-widest font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c03f13] animate-ping" />
                  <span>STAGE {stages[activeStage].step} DEEP-DIVE BLUEPRINT</span>
                </div>
                <h4 className="font-monument text-2xl sm:text-4xl uppercase text-[#1d1d1b] mt-1">
                  {stages[activeStage].title}
                </h4>
                <div className="font-serif italic text-base text-[#2b2825] mt-0.5">
                  {stages[activeStage].subtitle}
                </div>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1.5 bg-[#1d1d1b] text-[#cdc6be] font-bold uppercase">
                  {stages[activeStage].badge}
                </span>
                <span className="px-3 py-1.5 border border-[#1d1d1b] text-[#1d1d1b] font-bold uppercase hidden sm:inline-block">
                  LATENCY: SUB-200MS
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="font-editorial text-lg md:text-xl text-[#1d1d1b] leading-relaxed">
                  {stages[activeStage].description}
                </p>
                <div className="font-mono text-xs text-[#2b2825] pt-2">
                  ARCHITECTURAL COMPLIANCE: Centralized cloud processing guarantees that smallholders need not purchase, maintain, or troubleshoot on-field sensors or specialized hardware.
                </div>
              </div>

              <div className="lg:col-span-5 border border-[#1d1d1b] p-5 bg-[#cdc6be] space-y-3 font-mono text-xs">
                <div className="text-[11px] uppercase font-bold text-[#c03f13] hairline-b pb-2 flex justify-between">
                  <span>COMPONENTS &amp; DATA FEEDS</span>
                  <span>STAGE {stages[activeStage].step}</span>
                </div>
                <ul className="space-y-2">
                  {stages[activeStage].sources.map((src, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-[#c03f13] font-bold">↳</span>
                      <span className="text-[#1d1d1b] font-medium">{src}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Visual Data Flow Arrow Sequence */}
        <div className="hairline-t pt-4 flex flex-wrap items-center justify-between font-mono text-xs text-[#2b2825] gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c03f13]"></span>
            <span>DATA FLOW:</span>
            <span className="text-[#1d1d1b] font-bold">
              {activeStage === 0 && 'Satellites & Meteorological Stations → Cloud Ingestion Worker'}
              {activeStage === 1 && 'Commodity Smartphone Photo → PWA Upload → EXIF Verification'}
              {activeStage === 2 && 'API Gateway → Redis Queue → PyTorch Container Cluster'}
              {activeStage === 3 && 'Raw Features → Multimodal CV & Time-Series Models → Predictions'}
              {activeStage === 4 && 'Model Output → Bayesian Fusion → Cryptographic Dossier'}
              {activeStage === 5 && 'Synthesized Dossier → Human Official Decision → IVR/SMS Broadcast'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
              className="px-3 py-1 border border-[#1d1d1b] hover:bg-[#1d1d1b] hover:text-[#cdc6be] transition-colors cursor-pointer"
            >
              ← PREV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1 border border-[#1d1d1b] hover:bg-[#1d1d1b] hover:text-[#cdc6be] transition-colors cursor-pointer"
            >
              NEXT →
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
