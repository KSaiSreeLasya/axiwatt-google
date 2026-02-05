import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Advantage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 1.05]);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[12px] tracking-[0.4em] uppercase text-amber-700 mb-4 font-semibold">Vertical Integration</p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">
              Beyond Consultants. <br />Beyond Contractors.
            </h2>
            
            <div className="space-y-12">
              <div className="group">
                <h4 className="text-neutral-900 font-medium mb-3 flex items-center gap-4">
                  <span className="text-amber-600 font-serif text-xl">01</span>
                  The Problem with Fragmentation
                </h4>
                <p className="text-black font-light text-base leading-relaxed pl-10 border-l border-neutral-200 group-hover:border-amber-600/40 transition-colors">
                  Fragmented solar delivery leads to compromised aesthetics and technical gaps. We solve this by owning the entire ecosystem.
                </p>
              </div>

              <div className="group">
                <h4 className="text-neutral-900 font-medium mb-3 flex items-center gap-4">
                  <span className="text-amber-600 font-serif text-xl">02</span>
                  Holistic Architectural Synergy
                </h4>
                <p className="text-black font-light leading-relaxed pl-10 border-l border-neutral-200 group-hover:border-amber-600/40 transition-colors">
                  Axiwatt integrates architecture, civil engineering, MEP, and energy logic into a single streamlined workflow.
                </p>
              </div>

              <div className="group">
                <h4 className="text-neutral-900 font-medium mb-3 flex items-center gap-4">
                  <span className="text-amber-600 font-serif text-xl">03</span>
                  Family-Office Governance
                </h4>
                <p className="text-black font-light leading-relaxed pl-10 border-l border-neutral-200 group-hover:border-amber-600/40 transition-colors">
                  Operating with absolute discretion and capital depth. We are here for the 40-year legacy of your estate.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              style={{ scale }}
              className="aspect-[4/5] bg-neutral-100 overflow-hidden shadow-2xl"
            >
               <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture and Energy Integration"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-1000"
              />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 p-12 bg-white border border-neutral-100 shadow-xl hidden md:block">
              <div className="text-4xl font-serif text-amber-600 mb-1">100%</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-semibold">Accountability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
