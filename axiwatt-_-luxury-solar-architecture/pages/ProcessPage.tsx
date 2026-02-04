import React from 'react';
import { motion } from 'framer-motion';
import { useMetaTags } from '../hooks/useMetaTags';
import { seoConfig } from '../config/seoConfig';

const steps = [
  { 
    step: "01", 
    title: "Discovery & Private Consultation", 
    desc: "Understanding the unique energy profile and architectural ambitions of the estate through confidential consultation.",
    details: [
      "Site energy assessment & climate analysis",
      "Architectural vision & aesthetic goals",
      "ROI & sustainability alignment",
      "Privacy & data protocol setup"
    ]
  },
  { 
    step: "02", 
    title: "Architectural & Energy Modeling", 
    desc: "Full BIM integration to simulate aesthetic and technical performance before execution.",
    details: [
      "3D energy flow visualization",
      "Structural load calculations",
      "Seasonal performance modeling",
      "ROI & payback period analysis"
    ]
  },
  { 
    step: "03", 
    title: "Regulatory & Execution", 
    desc: "Managing GHMC/TERC approvals and surgical on-site integration by internal teams.",
    details: [
      "GHMC & height exemption approvals",
      "TERC net-metering coordination",
      "Precision installation by internal crew",
      "Real-time quality assurance"
    ]
  },
  { 
    step: "04", 
    title: "Commissioning & Long-Term Care", 
    desc: "24/7 monitoring and 'invisible' AMC protocols for lifetime resilience.",
    details: [
      "System commissioning & optimization",
      "24/7 global monitoring setup",
      "Bi-annual robotic panel cleaning",
      "Annual drone thermal imaging"
    ]
  }
];

export const ProcessPage: React.FC = () => {
  return (
    <div className="bg-[#fdfcfb] pt-24 pb-40 min-h-screen">
      <div className="container mx-auto px-8">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-40 text-center"
        >
          <p className="text-[12px] tracking-[0.5em] uppercase text-[#b9975b] mb-8 font-bold">The Concierge Delivery</p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#2c2825] mb-12">The Axiwatt Journey</h1>
          <p className="text-[#635e5a] text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            Axiwatt eliminates project fragmentation by managing the entire lifecycle of your energy estate—from initial vision to lifetime stewardship.
          </p>
        </motion.header>

        <div className="max-w-5xl mx-auto">
          {steps.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex gap-12 pb-32 md:pb-40 border-l-2 border-[#e8e4df] pl-12 lg:pl-24 last:pb-0 hover:border-[#b9975b] transition-colors duration-500"
            >
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-white border-2 border-[#b9975b] group-hover:bg-[#b9975b] transition-all duration-500 shadow-lg" />
              
              <div className="w-full">
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 + 0.2, duration: 0.8 }}
                  className="text-6xl md:text-7xl font-serif text-[#e8e4df] group-hover:text-[#b9975b] transition-colors leading-none mb-6 block font-light"
                >
                  {s.step}
                </motion.span>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 + 0.3, duration: 0.8 }}
                  className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-6 group-hover:text-[#b9975b] transition-colors"
                >
                  {s.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 + 0.4, duration: 0.8 }}
                  className="text-[#635e5a] font-light text-lg leading-relaxed max-w-2xl mb-10"
                >
                  {s.desc}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 + 0.5, duration: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {s.details.map((detail, dIdx) => (
                    <motion.div
                      key={dIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15 + 0.6 + (dIdx * 0.05), duration: 0.6 }}
                      className="flex items-start gap-3 p-4 rounded-sm bg-white/50 border border-[#e8e4df] group-hover:border-[#b9975b]/30 transition-colors"
                    >
                      <span className="text-[#b9975b] font-serif text-lg mt-1 flex-shrink-0">✦</span>
                      <span className="text-[13px] text-[#635e5a] font-light">{detail}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-40 pt-32 border-t border-[#e8e4df] text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c2825] mb-8">Ready to Begin Your Journey?</h2>
          <p className="text-[#635e5a] text-lg font-light max-w-2xl mx-auto mb-12">
            Our concierge team is ready to guide you through every step of transforming your estate into an autonomous energy landmark.
          </p>
          <div className="flex items-center justify-center gap-6">
            <span className="text-[12px] tracking-[0.2em] uppercase text-[#b9975b] font-bold">Email: concierge@axiwatt.com</span>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
