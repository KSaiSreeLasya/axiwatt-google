import React from 'react';
import { motion } from 'framer-motion';

export const BrandStrip: React.FC = () => {
  return (
    <section className="py-32 bg-white border-y border-[#f7f5f2] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-16 items-start lg:items-center justify-between"
        >
          <div className="lg:max-w-md">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c2825] mb-6">
              One Vision.
              <br />
              Total Control.
              <br />
              No Compromise.
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[2px] bg-[#b9975b]/30" 
            />
          </div>
          <div className="lg:max-w-3xl">
            <p className="text-black leading-relaxed text-xl font-light">
              Axiwatt is a vertically integrated collective operating at the intersection of architecture, construction, renewable energy, and advanced technology. 
              Backed by internal family-office entities and an exclusive architectural partnership, we control every layer of design and execution—eliminating fragmentation and delivering estates that are visually uncompromised and energetically autonomous.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
