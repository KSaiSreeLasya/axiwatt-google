import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMetaTags } from './hooks/useMetaTags';
import { seoConfig } from './config/seoConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStrip } from './components/BrandStrip';
import { Philosophy } from './components/Philosophy';
import { Advantage } from './components/Advantage';
import { Collection } from './components/Collection';
import { Technology } from './components/Technology';
import { Concierge } from './components/Concierge';
import { Geography } from './components/Geography';
import { ArchitectsPortal } from './components/ArchitectsPortal';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

// Pages
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ProcessPage } from './pages/ProcessPage';
import { PartnersPage } from './pages/PartnersPage';

export type View = 'home' | 'about' | 'products' | 'technology' | 'process' | 'partners';

const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  // Update meta tags based on current view
  useEffect(() => {
    const metaConfig = seoConfig[currentView];
    if (metaConfig) {
      useMetaTags(metaConfig);
    }
  }, [currentView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage />;
      case 'technology':
        return <TechnologyPage />;
      case 'process':
        return <ProcessPage />;
      case 'partners':
        return <PartnersPage onOpenConsultation={() => setIsConsultationOpen(true)} />;
      case 'home':
      default:
        return (
          <>
            <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />
            <BrandStrip />
            <Philosophy />
            <Advantage />
            <Collection />
            <Technology />
            <Concierge />
            <Geography />
            <Experience onOpenConsultation={() => setIsConsultationOpen(true)} />
            <ArchitectsPortal onOpenConsultation={() => setIsConsultationOpen(true)} />
          </>
        );
    }
  };

  return (
    <div className="bg-[#fdfcfb] text-[#2c2825] selection:bg-[#b9975b]/20 min-h-screen flex flex-col font-medium">
      <Navbar 
        onOpenConsultation={() => setIsConsultationOpen(true)} 
        currentView={currentView}
        onNavigate={setCurrentView}
      />
      
      <main className="relative flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer 
        onOpenConsultation={() => setIsConsultationOpen(true)} 
        onNavigate={setCurrentView} 
      />

      <AnimatePresence>
        {isConsultationOpen && (
          <ConsultationModal onClose={() => setIsConsultationOpen(false)} />
        )}
      </AnimatePresence>

      {/* Aesthetic Overlays */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
        <div className="absolute top-[10%] left-[-5%] w-[50%] aspect-square rounded-full bg-[#f1e5ac]/10 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] aspect-square rounded-full bg-[#b9975b]/5 blur-[100px]" />
      </div>
    </div>
  );
};

export default App;
