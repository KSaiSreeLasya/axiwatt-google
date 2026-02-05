import React from 'react';
import { motion } from 'framer-motion';
import { View } from '../App';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigate: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <footer className="bg-white pt-32 pb-16 px-6 lg:px-16 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <button onClick={() => onNavigate('home')} className="text-4xl font-serif text-neutral-900 mb-8 tracking-wider outline-none hover:opacity-70 transition-opacity">AXIWATT</button>
            <p className="text-neutral-500 font-light leading-relaxed">
              Hyderabad’s premier collective for luxury energy architecture. Engineered for autonomy, designed for distinction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {[
              {
                title: "Company",
                links: [
                  { label: "About Us", view: "about" as View },
                  { label: "Process", view: "process" as View },
                  { label: "Partner Portal", view: "partners" as View }
                ]
              },
              {
                title: "Architecture",
                links: [
                  { label: "Solar Collection", view: "products" as View },
                  { label: "Tech Stack", view: "technology" as View }
                ]
              }
            ].map((col, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-neutral-900 font-bold mb-6">{col.title}</h4>
                <ul className="space-y-4 text-sm font-light text-neutral-500">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <motion.button 
                        whileHover={{ x: 5 }}
                        onClick={() => onNavigate(link.view)} 
                        className="hover:text-amber-700 transition-colors"
                      >
                        {link.label}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-neutral-900 font-bold mb-6">Connect</h4>
              <ul className="space-y-4 text-sm font-light text-neutral-500">
                <li><motion.a whileHover={{ x: 5 }} href="mailto:concierge@axiwatt.com" className="block hover:text-amber-700 transition-colors">Email</motion.a></li>
                <li><motion.button whileHover={{ x: 5 }} onClick={onOpenConsultation} className="hover:text-amber-700 transition-colors">Request Consultation</motion.button></li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-16 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            © 2024 AXIWATT Energy 
          </div>
          <div className="flex gap-12 text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            <motion.button whileHover={{ y: -1 }} onClick={() => onNavigate('privacy')} className="hover:text-neutral-900 transition-colors">Privacy Policy</motion.button>
            <motion.button whileHover={{ y: -1 }} onClick={() => onNavigate('terms')} className="hover:text-neutral-900 transition-colors">Terms of Service</motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
