import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: "Bioclimatic Solar Pergolas",
    narrative: "An evolution of outdoor living. These structures combine active shading with high-yield energy generation.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
    cases: ["Poolside Pavilions", "Rooftop Lounges", "Garden Estates"]
  },
  {
    title: "Solar Glass Facades",
    narrative: "Transforming the building skin into a power plant without compromising the view or natural light transmission.",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000",
    cases: ["Curtain Walls", "Atrium Glazing", "Penthouse Exteriors"]
  },
  {
    title: "Luminous Glass Railings",
    narrative: "Safety barriers that double as energy harvesters, glowing softly with the stored energy of the day.",
    img: "https://images.pexels.com/photos/7246057/pexels-photo-7246057.jpeg",
    cases: ["Terrace Safety", "Balcony Enclosures", "Bridge Walkways"]
  },
  {
    title: "Walkable Solar Tiles",
    narrative: "High-strength architectural tiles that generate power underfoot, designed for heavy traffic and refined aesthetics.",
    img: "https://images.pexels.com/photos/30440447/pexels-photo-30440447.jpeg",
    cases: ["Private Courtyards", "Sun Terraces", "Entry Plazas"]
  }
];

export const ProductsPage: React.FC = () => {
  return (
    <div className="bg-[#faf9f6] py-24">
      <div className="container mx-auto px-6">
        <header className="mb-24 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-amber-700 mb-6 font-bold">The Collection</p>
          <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6">Signature Solar Architecture</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            Every product is a blend of engineering credibility and architectural narrative. Designed to be invisible in function, yet profound in impact.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {products.map((p, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-serif text-neutral-900 mb-4">{p.title}</h3>
                <p className="text-neutral-500 font-light text-sm mb-8 leading-relaxed">{p.narrative}</p>
                <div className="flex flex-wrap gap-3">
                  {p.cases.map((c, i) => (
                    <span key={i} className="text-[9px] tracking-[0.1em] uppercase bg-neutral-50 border border-neutral-200 px-3 py-1 text-neutral-400">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
