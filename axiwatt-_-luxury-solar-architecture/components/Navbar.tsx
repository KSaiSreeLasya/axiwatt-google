import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { View } from '../App';

interface NavbarProps {
  onOpenConsultation: () => void;
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'Products', view: 'products' },
    { label: 'Technology', view: 'technology' },
    { label: 'Process', view: 'process' },
    { label: 'Partners', view: 'partners' },
  ];

  const handleNavClick = (view: View) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-6 transition-all duration-700 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-sm border-b border-[#e8e4df]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-12">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavClick('home')}
          className="cursor-pointer outline-none flex-shrink-0 h-12 md:h-14 lg:h-16"
        >
          <img src="/axiwatt-logo.svg" alt="AXIWATT" className="h-full w-auto object-contain" />
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-14 text-[12px] xl:text-[13px] tracking-[0.25em] uppercase font-semibold flex-1 justify-center">
          {navItems.map((item, idx) => (
            <motion.button
              key={item.view}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ color: '#b9975b' }}
              onClick={() => handleNavClick(item.view)}
              className={`transition-colors px-1 py-2 relative group ${
                currentView === item.view ? 'text-[#2c2825]' : 'text-black'
              }`}
            >
              {item.label}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: currentView === item.view ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#b9975b] origin-left"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Right Section - CTA and Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenConsultation}
            className="hidden md:block px-6 md:px-8 py-3 text-[12px] md:text-[13px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 border-2 border-[#2c2825] font-bold text-[#2c2825] hover:bg-[#2c2825] hover:text-white"
          >
            Consultation
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center relative"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#2c2825] origin-center"
            />
            <motion.div
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-[#2c2825]"
            />
            <motion.div
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#2c2825] origin-center"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-[#e8e4df] mt-6 pt-6"
          >
            <div className="flex flex-col gap-4 mb-8">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.view}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-left text-base tracking-[0.2em] uppercase font-semibold py-3 px-4 border-l-2 transition-all duration-300 ${
                    currentView === item.view
                      ? 'border-[#b9975b] text-[#b9975b] bg-[#b9975b]/5'
                      : 'border-transparent text-black hover:text-[#2c2825]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full py-4 bg-[#2c2825] text-white text-[13px] tracking-[0.2em] uppercase font-bold hover:bg-[#b9975b] transition-colors"
            >
              Request Consultation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
