import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceProps {
  onOpenConsultation: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-40 bg-gradient-to-b from-[#fdfcfb] to-white overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <p className="text-[12px] tracking-[0.5em] uppercase text-[#635e5a] mb-6 font-semibold">The Axiwatt Experience</p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#2c2825]">Immersive. Confidential. Tangible.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* Experience Centre */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="mb-12 overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-[#f7f5f2] to-[#efeeea]">
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 2 }}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Axiwatt Experience Centre"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-[12px] tracking-[0.3em] uppercase text-[#b9975b] mb-6 font-bold">Experience Centre</p>
                <h3 className="text-4xl md:text-5xl font-serif text-[#2c2825] mb-8 group-hover:text-[#b9975b] transition-colors duration-500">
                  Design Studio
                </h3>
                <p className="text-[#635e5a] font-light text-lg leading-relaxed mb-10">
                  Located in the heart of Hyderabad, our private design studio showcases the full spectrum of Axiwatt's engineering and architectural capabilities. Experience live energy monitoring, material samples, case studies, and collaborative design sessions.
                </p>
              </div>
              <ul className="space-y-6">
                {[
                  "BIM-Ready 3D Models & Renderings",
                  "Material Library & Sample Gallery",
                  "Live Energy Performance Visualization",
                  "Private Consultation Suites",
                  "Case Study Archives"
                ].map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="flex items-start gap-4 text-[#635e5a]"
                  >
                    <span className="text-[#b9975b] font-serif text-xl mt-1">✦</span>
                    <span className="font-light text-base leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenConsultation}
                className="mt-10 px-12 py-5 bg-white border-2 border-[#2c2825] text-[#2c2825] text-[13px] tracking-[0.2em] uppercase font-bold transition-all duration-500 hover:bg-[#2c2825] hover:text-white"
              >
                Request a Studio Visit
              </motion.button>
            </div>
          </motion.div>

          {/* Digital Command */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="mb-12 overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-[#f7f5f2] to-[#efeeea]">
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 2 }}
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
                alt="Axiwatt Digital Command App"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-[12px] tracking-[0.3em] uppercase text-[#b9975b] mb-6 font-bold">Digital Command</p>
                <h3 className="text-4xl md:text-5xl font-serif text-[#2c2825] mb-8 group-hover:text-[#b9975b] transition-colors duration-500">
                  The Axiwatt App
                </h3>
                <p className="text-[#635e5a] font-light text-lg leading-relaxed mb-10">
                  24/7 global monitoring of your estate's energy autonomy. Real-time energy flow visualization, predictive maintenance alerts, remote diagnostics, and autonomous system optimization—all built on privacy-first architecture.
                </p>
              </div>
              <ul className="space-y-6">
                {[
                  "Real-Time Energy Flow Visualization",
                  "AI-Driven Predictive Optimization",
                  "Remote System Diagnostics & Alerts",
                  "Historical Performance Analytics",
                  "Encrypted, Privacy-First Architecture"
                ].map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="flex items-start gap-4 text-[#635e5a]"
                  >
                    <span className="text-[#b9975b] font-serif text-xl mt-1">✦</span>
                    <span className="font-light text-base leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenConsultation}
                className="mt-10 px-12 py-5 bg-white border-2 border-[#2c2825] text-[#2c2825] text-[13px] tracking-[0.2em] uppercase font-bold transition-all duration-500 hover:bg-[#2c2825] hover:text-white"
              >
                Learn About the App
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-40 pt-24 border-t border-[#e8e4df] text-center"
        >
          <p className="text-[#635e5a] max-w-3xl mx-auto font-light text-xl leading-relaxed">
            Whether you choose to visit our design studio or engage remotely through the Axiwatt App, every interaction is grounded in absolute discretion, technical transparency, and a commitment to your estate's 40-year legacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
