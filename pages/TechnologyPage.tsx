import React from 'react';
import { motion } from 'framer-motion';
import { useMetaTags } from '../hooks/useMetaTags';
import { seoConfig } from '../config/seoConfig';

const techCategories = [
  {
    category: "Solar Modules",
    title: "Premium Global Technology Partners",
    detail: "Custom Glass-Glass N-Type cells with minimal degradation over 40 years.",
    partners: [
      { name: "SunPower Maxeon 6", spec: "IBC Technology - 23%+ Efficiency" },
      { name: "REC Alpha Pure-R", spec: "HJT Technology - 23.5%+ Efficiency" }
    ],
    benefits: ["Ultra-low degradation", "Structural permanence", "Climate-resilient design"]
  },
  {
    category: "Energy Storage",
    title: "Intelligent Reserve Systems",
    detail: "Safe, high-density residential storage with sub-millisecond grid switching and advanced thermal management.",
    partners: [
      { name: "Tesla Powerwall 3", spec: "13.5 kWh | AI-Optimized Charging" },
      { name: "Enphase IQ Battery 10C", spec: "10.08 kWh | Modular Architecture" }
    ],
    benefits: ["Zero-latency transitions", "Backup power capability", "Temperature-regulated"]
  },
  {
    category: "EV Charging",
    title: "Vehicle-to-Home Infrastructure",
    detail: "Bi-directional V2H (Vehicle-to-Home) systems for fleet resilience and grid harmonization.",
    partners: [
      { name: "ABB Terra AC Wallbox", spec: "11-22 kW | Wall-Mounted" },
      { name: "Zeev DC Fast Charging", spec: "Ultra-rapid charging for premium EV fleet" }
    ],
    benefits: ["Bidirectional charging", "Fleet autonomy", "Smart load management"]
  },
  {
    category: "Digital Control",
    title: "Axiwatt OS",
    detail: "Encrypted, local-first energy management with predictive AI diagnostics and 24/7 global monitoring.",
    partners: [
      { name: "Machine Learning", spec: "Predictive Load Forecasting" },
      { name: "Real-Time Analytics", spec: "Encrypted Privacy-First Architecture" }
    ],
    benefits: ["Predictive optimization", "Absolute privacy", "Global accessibility"]
  }
];

export const TechnologyPage: React.FC = () => {
  useMetaTags(seoConfig.technology);

  return (
    <div className="bg-[#fdfcfb] pt-24 pb-40 min-h-screen overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-40"
        >
          <p className="text-[12px] tracking-[0.5em] uppercase text-[#b9975b] mb-8 font-bold">Engineered Excellence</p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#2c2825] mb-12 leading-[1.05]">World-Class Systems. 40-Year Durability.</h1>
          <p className="text-[#635e5a] text-2xl font-light max-w-4xl leading-relaxed">
            We source and refine world-class hardware systems, engineered for a 40-year legacy in Hyderabad's unique climate conditions. Every component is verified for excellence.
          </p>
        </motion.header>

        <div className="space-y-12">
          {techCategories.map((tech, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#e8e4df] shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="p-12 md:p-16 lg:col-span-1 bg-gradient-to-b from-[#fdfcfb] to-white">
                  <p className="text-[12px] tracking-[0.3em] uppercase font-bold text-[#b9975b] mb-6">{tech.category}</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-8">{tech.title}</h3>
                  <p className="text-[#635e5a] font-light text-base leading-relaxed mb-12">{tech.detail}</p>
                </div>

                <div className="lg:col-span-2 p-12 md:p-16 border-l border-[#e8e4df]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#2c2825] mb-8">Technology Partners</h4>
                      <div className="space-y-8">
                        {tech.partners.map((partner, pIdx) => (
                          <motion.div
                            key={pIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (idx * 0.15) + (pIdx * 0.08), duration: 0.8 }}
                            className="group"
                          >
                            <p className="text-[13px] font-semibold text-[#2c2825] mb-2 group-hover:text-[#b9975b] transition-colors">
                              {partner.name}
                            </p>
                            <p className="text-[11px] text-[#635e5a] font-light">{partner.spec}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#2c2825] mb-8">Key Benefits</h4>
                      <ul className="space-y-4">
                        {tech.benefits.map((benefit, bIdx) => (
                          <motion.li
                            key={bIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (idx * 0.15) + (bIdx * 0.08) + 0.15, duration: 0.8 }}
                            className="flex items-center gap-3"
                          >
                            <span className="text-[#b9975b] font-serif">✦</span>
                            <span className="text-[12px] text-[#635e5a] font-light">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 p-20 md:p-32 bg-[#2c2825] text-white relative overflow-hidden rounded-sm"
        >
          <div className="max-w-4xl relative z-10">
            <h2 className="text-5xl font-serif mb-6">Verified Standards & Certifications</h2>
            <p className="text-[#dcd7d0] text-lg font-light leading-relaxed mb-16 max-w-2xl">
              Every system is engineered to exceed international standards and optimized for Hyderabad's tropical climate.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {['LEED v4.1 Certification', 'IGBC Standards', 'IEC 61215:2021', 'IEC 61730:2016', 'UL 1703', 'BIS Standards'].map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 + (idx * 0.1), duration: 0.8 }}
                  className="p-4 border border-white/20 hover:border-[#b9975b] transition-colors"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-[#b9975b] to-transparent pointer-events-none" />
        </motion.section>
      </div>
    </div>
  );
};
