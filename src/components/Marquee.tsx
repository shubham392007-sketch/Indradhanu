import React from 'react';

interface MarqueeProps {
  navigate?: (path: string) => void;
}

export const Marquee: React.FC<MarqueeProps> = ({ navigate }) => {
  return (
    <section className="hairline-b bg-[#ded7ce] py-3.5 overflow-hidden border-y border-[#1d1d1b]">
      <div className="animate-marquee flex items-center space-x-10 font-serif text-2xl sm:text-4xl text-[#1d1d1b] whitespace-nowrap select-none">
        <span>Let's create climate resilience together</span>
        
        {/* Solid block button with sharp corners & ink background (Ref Image 5) */}
        <a 
          href="mailto:research@rashkar.gov.in"
          className="px-5 py-1.5 bg-[#1d1d1b] text-[#cdc6be] font-monument text-sm md:text-base uppercase font-bold tracking-tight hover:bg-[#c03f13] transition-colors inline-block"
        >
          EMAIL US
        </a>

        <span>RASHKAR</span>
        <span className="font-monument text-[#c03f13] font-bold text-xl sm:text-2xl">
          ZERO HARDWARE · 100% CLOUD INTELLIGENCE
        </span>

        <span>Protecting Smallholder Lives and Livelihoods</span>

        {navigate && (
          <button 
            onClick={() => navigate('/heat-risk')}
            className="px-5 py-1.5 border border-[#1d1d1b] hover:bg-[#1d1d1b] hover:text-[#cdc6be] font-monument text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            HEAT-RISK ENGINE →
          </button>
        )}

        <span>Satellite Telemetry · Weather Grids · Smartphone Photogrammetry</span>

        <a 
          href="mailto:research@rashkar.gov.in"
          className="px-5 py-1.5 bg-[#1d1d1b] text-[#cdc6be] font-monument text-sm md:text-base uppercase font-bold tracking-tight hover:bg-[#c03f13] transition-colors inline-block"
        >
          EMAIL US
        </a>

        <span>AI For Climate-Resilient Agriculture</span>

        {navigate && (
          <button 
            onClick={() => navigate('/crop-loss')}
            className="px-5 py-1.5 border border-[#1d1d1b] hover:bg-[#1d1d1b] hover:text-[#cdc6be] font-monument text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            CROP-LOSS ENGINE →
          </button>
        )}

        <span>Vidarbha Pilot Formulation · 2026</span>
      </div>
    </section>
  );
};
