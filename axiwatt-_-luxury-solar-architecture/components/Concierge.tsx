import React from 'react';

export const Concierge: React.FC = () => {
  return (
    <section id="concierge" className="py-32 bg-[#faf9f6] border-y border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-8">
              White-Glove Delivery. <br />Absolute Discretion.
            </h2>
            <p className="text-black font-light mb-12 text-lg">
              Our engagement begins at the architectural modeling stage and extends through the lifetime of the estate. No subcontractors, no compromises.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h5 className="text-neutral-900 text-sm font-semibold mb-2">Design Integration</h5>
                <p className="text-neutral-500 text-xs font-light leading-relaxed">
                  Full BIM/Revit coordination with your architectural team from the conceptual phase.
                </p>
              </div>
              <div>
                <h5 className="text-neutral-900 text-sm font-semibold mb-2">Regulatory Stewardship</h5>
                <p className="text-neutral-500 text-xs font-light leading-relaxed">
                  Managing all GHMC and TERC approvals, ensuring your estate is fully compliant and grid-harmonized.
                </p>
              </div>
              <div>
                <h5 className="text-neutral-900 text-sm font-semibold mb-2">Invisible Maintenance</h5>
                <p className="text-neutral-500 text-xs font-light leading-relaxed">
                  24/7 predictive monitoring with silent AMC visits that respect the privacy of your residence.
                </p>
              </div>
              <div>
                <h5 className="text-neutral-900 text-sm font-semibold mb-2">Financial Lifecycle</h5>
                <p className="text-neutral-500 text-xs font-light leading-relaxed">
                  Comprehensive ROI modeling and asset value protection through certified LEED/IGBC alignment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 aspect-square relative bg-white p-4 shadow-2xl overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
              alt="Concierge Service"
              className="w-full h-full object-cover opacity-60 mix-blend-multiply transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border border-neutral-200 flex items-center justify-center backdrop-blur-[2px] bg-white/20 shadow-inner">
                <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-900 font-bold">Concierge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
