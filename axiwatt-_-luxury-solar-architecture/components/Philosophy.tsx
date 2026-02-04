import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Energy Autonomy",
    desc: "Achieving total independence from municipal grids through sovereign energy generation and storage.",
    tag: "Independence"
  },
  {
    title: "Architectural Integrity",
    desc: "Energy systems that respect and enhance the aesthetic vision of the residence, never detracting from its form.",
    tag: "Aesthetics"
  },
  {
    title: "Enduring Asset Value",
    desc: "Investment in infrastructure that guarantees long-term resilience and aligns with global sustainability standards.",
    tag: "Legacy"
  }
];

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-40 bg-[#fdfcfb] overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <p className="text-[12px] tracking-[0.5em] uppercase text-black mb-6 font-semibold">Our Core Ethos</p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#2c2825] mb-8">Beyond Utility. Beyond ROI.</h2>
          <p className="text-black max-w-3xl mx-auto font-light text-xl leading-relaxed">
            We view solar not as an addition, but as critical infrastructure. A long-term architectural asset designed for resilience, legacy, and endurance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <div className="mb-10 overflow-hidden">
                <p className="text-[12px] tracking-[0.3em] uppercase text-[#b9975b] mb-3 font-semibold">{pillar.tag}</p>
                <div className="h-[1px] w-full bg-[#e8e4df] relative">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: idx * 0.2 + 0.4, duration: 1.5 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-[#b9975b] origin-left" 
                  />
                </div>
              </div>
              <motion.h3 
                whileHover={{ x: 5 }}
                className="text-3xl font-serif text-[#2c2825] mb-6 group-hover:text-[#b9975b] transition-colors duration-500"
              >
                {pillar.title}
              </motion.h3>
              <p className="text-[#635e5a] font-light text-lg leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
