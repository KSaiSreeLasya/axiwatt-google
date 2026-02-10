import React from 'react';
import { motion } from 'framer-motion';

const collection = [
  {
    title: "Bioclimatic Solar Pergolas",
    desc: "Active structural elements that provide shaded luxury while generating high-density power for the entire estate. A seamless fusion of outdoor living and sovereign energy.",
    material: "Tempered Energy Glass & Reinforced Titanium-Aluminum",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Solar Glass Facades",
    desc: "Transforming the building skin into a high-performance energy generator without compromising transparency or aesthetic brilliance.",
    material: "Sputtered Thin-Film & Monocrystalline Smart-Glass",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Solar Glass Railings",
    desc: "Safety barriers that double as energy harvesters. Minimalist, luminous, and engineered to capture power from every horizon.",
    material: "Multi-Laminate High-Efficiency Glass",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200"
  }
];

export const Collection: React.FC = () => {
  return (
    <section id="collection" className="py-48 bg-[#fdfcfb] overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-32 text-center lg:text-left"
        >
          <p className="text-[13px] tracking-[0.5em] uppercase text-black mb-8 font-bold">The Axiwatt Collection</p>
          <h2 className="text-5xl md:text-8xl font-serif text-[#2c2825] max-w-5xl leading-[1.1]">Signature Solar Architecture</h2>
        </motion.div>

        <div className="space-y-56">
          {collection.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}
            >
              <div className="w-full lg:w-3/5 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] rounded-sm">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  className="aspect-[16/10] relative group cursor-pointer"
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-700" />
                </motion.div>
              </div>
              <div className="w-full lg:w-2/5">
                <p className="text-[13px] tracking-[0.3em] uppercase text-[#b9975b] mb-8 font-bold">Design Logic 0{idx + 1}</p>
                <h3 className="text-4xl md:text-6xl font-serif text-[#2c2825] mb-10 leading-[1.15]">{item.title}</h3>
                <p className="text-black font-light text-xl leading-relaxed mb-14">{item.desc}</p>
                <div className="space-y-8">
                  {[
                    { label: "Engineering", val: item.material },
                    { label: "Performance", val: "40+ Year Operational Lifecycle" }
                  ].map((row, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 8 }}
                      className="flex items-center justify-between py-6 border-b border-[#e8e4df] transition-colors hover:border-[#b9975b]"
                    >
                      <span className="text-[12px] tracking-[0.2em] uppercase text-black font-bold">{row.label}</span>
                      <span className="text-[13px] tracking-[0.05em] text-[#2c2825] font-semibold">{row.val}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
