import React from 'react';
import { motion } from 'framer-motion';
import { useMetaTags } from '../hooks/useMetaTags';
import { seoConfig } from '../config/seoConfig';

export const AboutPage: React.FC = () => {
  useMetaTags(seoConfig.about);
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#fdfcfb] pt-24 pb-48 overflow-hidden"
    >
      <div className="container mx-auto px-8">
        <header className="max-w-5xl mb-40">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[13px] tracking-[0.5em] uppercase text-[#b9975b] mb-10 font-bold"
          >
            The Collective
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-serif text-[#2c2825] mb-12 leading-[1.05]"
          >
            A Private Architecture & <br /><span className="italic font-light opacity-80 text-[#635e5a]">Energy Governance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="text-[#635e5a] text-2xl font-light leading-relaxed max-w-4xl"
          >
            Axiwatt is a vertically integrated collective operating across the intersection of architecture, civil engineering, and renewable energy—backed by internal family-office governance.
          </motion.p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-4xl font-serif text-[#2c2825] mb-16">Vertical Structure</h2>
            <div className="space-y-16">
              {[
                { title: 'Architecture & Design', desc: 'Sovereign design where energy autonomy is integrated into the primary aesthetic vision.' },
                { title: 'Engineering & Construction', desc: 'Bespoke civil and structural execution to support building-integrated energy systems.' },
                { title: 'Energy Infrastructure', desc: 'World-class storage and generation systems engineered for 40-year endurance.' },
                { title: 'Asset Governance', desc: 'Global monitoring and lifecycle maintenance for large-scale private estates.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.15), duration: 1 }}
                  className="border-l-2 border-[#e8e4df] pl-10 py-3 group hover:border-[#b9975b] transition-all duration-700"
                >
                  <h3 className="text-2xl font-serif text-[#2c2825] mb-4 group-hover:text-[#b9975b] transition-colors">{item.title}</h3>
                  <p className="text-[#635e5a] font-light text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square bg-neutral-100 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover opacity-90"
              alt="Collective Synergy"
            />
            <div className="absolute inset-0 flex items-center justify-center p-16 bg-white/20 backdrop-blur-md">
              <p className="text-center text-[#2c2825] font-serif text-3xl italic leading-tight">
                "One Vision. <br />Total Control. <br />No Compromise."
              </p>
            </div>
          </motion.div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-20 md:p-32 border border-[#f7f5f2] shadow-2xl relative"
        >
          <div className="max-w-4xl">
            <h2 className="text-4xl font-serif text-[#2c2825] mb-12">Discretion & Longevity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { label: "Governance", val: "Family-office oversight ensures capital depth and absolute stability." },
                { label: "Privacy", val: "UHNW-grade security protocols for every site and data transmission." },
                { label: "Endurance", val: "Architectural energy systems designed as multi-generational assets." }
              ].map((box, i) => (
                <div key={i}>
                  <h4 className="text-[12px] tracking-[0.3em] uppercase font-bold text-[#b9975b] mb-6">{box.label}</h4>
                  <p className="text-[#635e5a] text-lg font-light leading-relaxed">{box.val}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};
