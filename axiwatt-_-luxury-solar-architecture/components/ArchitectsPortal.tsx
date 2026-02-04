import React from 'react';

interface ArchitectsPortalProps {
  onOpenConsultation: () => void;
}

export const ArchitectsPortal: React.FC<ArchitectsPortalProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-32 bg-[#efeeea]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-8">Co-Creating Sustainable Landmarks</h2>
          <p className="text-black text-lg font-light leading-relaxed mb-12">
            We partner with architects and designers to integrate Net-Zero luxury directly into the building's DNA. 
            Gain access to our modeling tools, BIM objects, and technical consultation to ensure your vision is powered perfectly.
          </p>
          <button 
            onClick={onOpenConsultation}
            className="group relative px-12 py-5 text-[12px] tracking-[0.2em] uppercase overflow-hidden border border-neutral-300 hover:border-neutral-900 transition-all duration-500"
          >
            <span className="relative z-10 text-neutral-800 group-hover:text-white transition-colors duration-500">Partner with Axiwatt</span>
            <div className="absolute inset-0 bg-neutral-900 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
