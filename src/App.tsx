import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Marquee } from './components/Marquee';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { HeatRiskPage } from './pages/HeatRiskPage';
import { CropLossPage } from './pages/CropLossPage';
import { ScrollProgress } from './components/motion/ScrollProgress';
import { pageVariants } from './lib/motionVariants';

export const App: React.FC = () => {
  // Read initial path from URL pathname or hash fallback
  const getInitialPath = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path.includes('heat-risk') || hash.includes('heat-risk')) return '/heat-risk';
    if (path.includes('crop-loss') || hash.includes('crop-loss')) return '/crop-loss';
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  // Handle browser back / forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation function
  const navigate = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setCurrentPath(newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen paper-crumpled-surface text-[#1d1d1b] font-editorial selection:bg-[#c03f13] selection:text-[#d8d3c8] relative overflow-x-hidden">
      {/* Subtle editorial scroll progress indicator at top edge */}
      <ScrollProgress />

      {/* Global Minimal Editorial Header */}
      <Header currentPath={currentPath} navigate={navigate} />

      {/* Main Multi-Page Route Render with Chapter-Style Cinematic Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPath}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {currentPath === '/heat-risk' && <HeatRiskPage navigate={navigate} />}
          {currentPath === '/crop-loss' && <CropLossPage navigate={navigate} />}
          {currentPath !== '/heat-risk' && currentPath !== '/crop-loss' && (
            <HomePage navigate={navigate} />
          )}
        </motion.main>
      </AnimatePresence>

      {/* Continuous Scrolling Marquee Band */}
      <Marquee navigate={navigate} />

      {/* Global Editorial Research Footer */}
      <Footer navigate={navigate} />
    </div>
  );
};
