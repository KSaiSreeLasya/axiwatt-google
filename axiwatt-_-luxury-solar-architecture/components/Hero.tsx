import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 250]);
  const yText = useTransform(scrollY, [0, 1000], [0, 80]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f7f5f2]">
      {/* Background Image - Full Coverage */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
          alt="Architectural Masterpiece"
          className="w-full h-full object-cover"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
      </motion.div>

      {/* Text Content - Left Aligned Over Image */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-8 md:px-16">
          <motion.div
            style={{ y: yText }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={itemVariants} className="text-[13px] tracking-[0.7em] uppercase text-[#d4af37] mb-6 font-bold">
              Architectural Energy Autonomy
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tighter drop-shadow-lg">
              Where Grandeur <br />
              <span className="italic font-light opacity-90">Meets</span> <br />Autonomy
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white text-lg md:text-xl lg:text-2xl font-light max-w-2xl mb-12 leading-relaxed drop-shadow">
              Bespoke solar ecosystems for Hyderabad's most distinguished residences—integrated invisibly into architecture, engineered for total independence.
            </motion.p>
            
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenConsultation}
              className="px-12 py-6 bg-white text-[#2c2825] text-[13px] tracking-[0.3em] uppercase font-bold transition-all duration-500 shadow-xl hover:bg-[#d4af37]"
            >
              Private Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-8 flex flex-col items-center gap-6 text-white z-30"
      >
        <span className="text-[12px] tracking-[0.4em] uppercase font-bold">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
