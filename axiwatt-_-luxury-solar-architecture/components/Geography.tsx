import React from 'react';
import { motion } from 'framer-motion';

const locations = [
  {
    name: "Kokapet & Financial District",
    description: "Precision solar integration for sky-villas, penthouses, and high-rise luxury residences with seamless facade integration.",
    img: "https://images.pexels.com/photos/35847096/pexels-photo-35847096.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Sky-villas", "Penthouses", "High-rise luxury", "Facade integration"]
  },
  {
    name: "Jubilee Hills & Banjara Hills",
    description: "Heritage-sensitive installations for expansive independent estates, respecting architectural character while delivering autonomy.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    highlights: ["Heritage estates", "Independent villas", "Architectural respect", "Large-scale systems"]
  },
  {
    name: "Narsingi & Puppalguda",
    description: "Comprehensive solar ecosystems for premium gated villa communities, serving multiple residences with coordinated infrastructure.",
    img: "https://images.pexels.com/photos/34823930/pexels-photo-34823930.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Gated communities", "Multiple villas", "Shared infrastructure", "Community coordination"]
  },
  {
    name: "Tellapur & Gachibowli",
    description: "Emerging luxury developments with integrated solar architecture from design conception through final delivery.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    highlights: ["New developments", "Design integration", "Modern architecture", "Future-ready systems"]
  }
];

export const Geography: React.FC = () => {
  return (
    <section className="py-40 bg-[#fdfcfb] overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <p className="text-[12px] tracking-[0.5em] uppercase text-black mb-6 font-semibold">Local Presence</p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#2c2825]">Serving Hyderabad's Most Exclusive Enclaves</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.12, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-default"
            >
              <div className="mb-10 overflow-hidden shadow-lg bg-gray-100 aspect-video">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              
              <div>
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-2xl md:text-3xl font-serif text-[#2c2825] mb-4 group-hover:text-[#b9975b] transition-colors duration-500"
                >
                  {loc.name}
                </motion.h3>
                
                <p className="text-black font-light text-base leading-relaxed mb-8">
                  {loc.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {loc.highlights.map((highlight, hIdx) => (
                    <motion.span
                      key={hIdx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.12 + (hIdx * 0.05), duration: 0.6 }}
                      className="text-[11px] tracking-[0.1em] uppercase bg-white border border-[#e8e4df] px-4 py-2 text-black font-semibold group-hover:border-[#b9975b] group-hover:text-[#b9975b] transition-colors"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Coverage Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-32 pt-24 border-t border-[#e8e4df] text-center"
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#b9975b] mb-6 font-bold">Service Coverage</p>
          <h3 className="text-3xl md:text-4xl font-serif text-[#2c2825] mb-6">Citywide Expertise</h3>
          <p className="text-black max-w-2xl mx-auto font-light text-lg mb-12">
            With offices and installation crews across Hyderabad's premium enclaves, we provide local responsiveness with global standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Site Assessment', 'Design Consultation', 'Installation', 'Commissioning', 'Maintenance'].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (idx * 0.08), duration: 0.6 }}
                className="px-6 py-3 border-2 border-[#b9975b] text-[12px] tracking-[0.1em] uppercase font-semibold text-[#b9975b] hover:bg-[#b9975b] hover:text-white transition-colors"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
