import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    category: "Solar Modules",
    title: "Premium Global Technology Partners",
    desc: "Ultra-high efficiency crystalline and thin-film modules engineered for performance and longevity in Hyderabad's climate.",
    partners: [
      { name: "SunPower Maxeon 6", spec: "IBC Technology - 23%+ Efficiency" },
      { name: "REC Alpha Pure-R", spec: "HJT Technology - 23.5%+ Efficiency" }
    ]
  },
  {
    category: "Energy Storage",
    title: "Intelligent Reserve Systems",
    desc: "Discrete, high-capacity battery storage for complete grid independence with zero-latency transitions.",
    partners: [
      { name: "Tesla Powerwall 3", spec: "13.5 kWh | AI-Optimized Charging" },
      { name: "Enphase IQ Battery 10C", spec: "10.08 kWh | Modular Architecture" }
    ]
  },
  {
    category: "Smart Mobility",
    title: "V2H & EV Charging Infrastructure",
    desc: "Seamless charging integration that bridges your estate's energy independence and fleet autonomy.",
    partners: [
      { name: "ABB Terra AC Wallbox", spec: "11-22 kW | Wall-Mounted" },
      { name: "Zeev DC Fast Charging", spec: "Ultra-rapid charging for premium EV fleet" }
    ]
  },
  {
    category: "Digital Control",
    title: "Axiwatt OS",
    desc: "Proprietary AI-driven energy management platform with 24/7 global monitoring and predictive optimization.",
    partners: [
      { name: "Machine Learning", spec: "Predictive Load Forecasting" },
      { name: "Real-Time Analytics", spec: "Encrypted Privacy-First Architecture" }
    ]
  }
];

export const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <p className="text-[12px] tracking-[0.5em] uppercase text-black mb-6 font-semibold">Engineered Legacy</p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#2c2825] mb-8">World-Class Systems. 40-Year Durability.</h2>
          <p className="text-black max-w-3xl mx-auto font-light text-lg">
            Axiwatt partners exclusively with globally respected manufacturers to ensure performance, longevity, and reliability engineered for Hyderabad's climate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e4df] border border-[#e8e4df] shadow-sm">
          {techCategories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white p-12 hover:bg-[#fdfcfb] transition-all duration-500 group cursor-default flex flex-col"
            >
              <p className="text-[12px] tracking-[0.3em] uppercase text-[#b9975b] mb-8 font-bold">{item.category}</p>
              <motion.h4
                whileHover={{ x: 3 }}
                className="text-2xl font-serif text-[#2c2825] mb-6 group-hover:text-[#b9975b] transition-colors"
              >
                {item.title}
              </motion.h4>
              <p className="text-black text-base font-light leading-relaxed mb-10 flex-grow">
                {item.desc}
              </p>

              <div className="space-y-6 pt-6 border-t border-[#e8e4df]">
                {item.partners.map((partner, pIdx) => (
                  <motion.div
                    key={pIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx * 0.1) + (pIdx * 0.05), duration: 0.6 }}
                    className="space-y-1"
                  >
                    <p className="text-[12px] tracking-[0.2em] uppercase text-[#2c2825] font-semibold group-hover:text-[#b9975b] transition-colors">
                      {partner.name}
                    </p>
                    <p className="text-[11px] text-black font-light">{partner.spec}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification & Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 pt-20 border-t border-[#e8e4df] text-center"
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-black mb-8 font-semibold">Verified Excellence</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {['LEED Certification', 'IGBC Standards', 'IEC 61215', 'UL 1703', '30-Year Warranty'].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 + (idx * 0.1), duration: 0.8 }}
                className="text-[11px] tracking-[0.2em] uppercase text-[#b9975b] font-bold"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
