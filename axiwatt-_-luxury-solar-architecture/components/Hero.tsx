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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#f7f5f2]">
      {/* Background with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#fdfcfb] z-10" />
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
          alt="Architectural Masterpiece"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-8 text-center">
        <motion.div
          style={{ y: yText }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.p variants={itemVariants} className="text-[12px] tracking-[0.7em] uppercase text-[#b9975b] mb-8 font-bold letter-spacing-wide">
            Architectural Energy Autonomy
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-[#2c2825] mb-10 leading-[1.05] tracking-tighter">
            Where Grandeur <br />
            <span className="italic font-light opacity-85">Meets</span> <br />Autonomy
          </motion.h1>
          <motion.p variants={itemVariants} className="text-black text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            Bespoke solar ecosystems for Hyderabad’s most distinguished residences—integrated invisibly into architecture, engineered for total independence.
          </motion.p>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 30px 60px rgba(0,0,0,0.06)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenConsultation}
            className="px-14 py-7 bg-[#2c2825] text-white text-[14px] tracking-[0.3em] uppercase font-bold transition-all duration-500 shadow-2xl"
          >
            Private Consultation
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-[#dcd7d0]"
      >
        <span className="text-[12px] tracking-[0.4em] uppercase vertical-lr font-bold">Explore</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#dcd7d0] to-transparent" />
      </motion.div>
    </section>
  );
};
