import React from 'react';
import { motion } from 'framer-motion';

interface PartnersPageProps {
  onOpenConsultation: () => void;
}

const partnerCategories = [
  {
    title: "Tools & Modeling",
    desc: "Access our BIM/Revit libraries and energy simulation plugins for early-stage integration.",
    features: [
      { icon: "📐", label: "BIM Objects (LOD 300+)", detail: "Ready-to-use parametric solar components" },
      { icon: "☀️", label: "Parametric Sun Studies", detail: "Dynamic shading & orientation analysis" },
      { icon: "✓", label: "Net-Zero Compliance Audit", detail: "Certification pathway verification" },
      { icon: "⚙️", label: "RevIt/Autodesk Plugins", detail: "Seamless architectural workflow integration" }
    ]
  },
  {
    title: "Collaboration Workflow",
    desc: "Our engineering team acts as an extension of your studio, handling the technical solar MEP.",
    features: [
      { icon: "🤝", label: "Design Coordination", detail: "Weekly studio collaboration sessions" },
      { icon: "📋", label: "Technical Specs (CSI/MasterFormat)", detail: "Construction document integration" },
      { icon: "📄", label: "White-Label Reporting", detail: "Your branding on all technical deliverables" },
      { icon: "🎨", label: "Aesthetic Integration", detail: "Solar design that respects your vision" }
    ]
  },
  {
    title: "Technical Support",
    desc: "Comprehensive guidance from preliminary design through commissioning and beyond.",
    features: [
      { icon: "📊", label: "Energy Modeling", detail: "Aurora Solar & HelioScope optimization" },
      { icon: "🔍", label: "Regulatory Coordination", detail: "GHMC & TERC approval navigation" },
      { icon: "👁️", label: "Quality Assurance", detail: "Site inspections & performance verification" },
      { icon: "📱", label: "Post-Launch Support", detail: "24/7 monitoring & optimization" }
    ]
  }
];

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-[#fdfcfb] pt-24 pb-40 min-h-screen overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32 text-center"
        >
          <p className="text-[12px] tracking-[0.5em] uppercase text-[#b9975b] mb-8 font-bold">Architecture Partners</p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#2c2825] mb-12 leading-[1.05]">Co-Creating Sustainable Landmarks</h1>
          <p className="text-[#635e5a] text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            We provide architects and designers with the tools, expertise, and partnership to integrate Net-Zero luxury directly into your buildings—without aesthetic compromise.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-40">
          {partnerCategories.map((category, cIdx) => (
            <motion.div
              key={cIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: cIdx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#e8e4df] p-12 hover:shadow-lg transition-all duration-500 group"
            >
              <h3 className="text-2xl md:text-3xl font-serif text-[#2c2825] mb-4 group-hover:text-[#b9975b] transition-colors">
                {category.title}
              </h3>
              <p className="text-[#635e5a] text-base font-light mb-12 leading-relaxed">
                {category.desc}
              </p>
              
              <div className="space-y-6">
                {category.features.map((feature, fIdx) => (
                  <motion.div
                    key={fIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: cIdx * 0.15 + (fIdx * 0.08), duration: 0.8 }}
                    className="pb-6 border-b border-[#e8e4df] last:pb-0 last:border-0 group/feature"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <span className="text-2xl leading-none mt-1">{feature.icon}</span>
                      <h4 className="text-[13px] tracking-[0.1em] uppercase font-semibold text-[#2c2825] group-hover/feature:text-[#b9975b] transition-colors">
                        {feature.label}
                      </h4>
                    </div>
                    <p className="text-[12px] text-[#635e5a] font-light ml-11">{feature.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-white border border-[#e8e4df] p-16 md:p-24 mb-40 shadow-sm"
        >
          <div className="max-w-5xl">
            <p className="text-[12px] tracking-[0.5em] uppercase text-[#b9975b] mb-6 font-bold">Architect Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c2825] mb-16">
              Architects Who Trust Axiwatt
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  name: "Hyderabad Luxury Residential",
                  project: "Kokapet Estate Integration",
                  quote: "Axiwatt seamlessly integrated solar architecture into our design language. Our client couldn't tell the system was there—until they saw their energy bills."
                },
                {
                  name: "Contemporary Design Collective",
                  project: "Jubilee Hills Penthouse",
                  quote: "The BIM coordination was flawless. Axiwatt's team understood our aesthetic vision and delivered systems that enhanced it."
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1), duration: 0.8 }}
                  className="p-8 bg-[#fdfcfb] border border-[#e8e4df] rounded-sm hover:border-[#b9975b] transition-colors"
                >
                  <p className="text-[#635e5a] font-light text-lg italic leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-[#e8e4df] pt-6">
                    <p className="text-[12px] tracking-[0.1em] uppercase font-bold text-[#2c2825] mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-[11px] text-[#b9975b] font-semibold">
                      {testimonial.project}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-gradient-to-br from-[#2c2825] to-[#3d3935] text-white p-16 md:p-24 relative overflow-hidden rounded-sm"
        >
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to Partner with Axiwatt?</h2>
            <p className="text-[#dcd7d0] text-lg font-light leading-relaxed mb-12">
              Access our complete technical toolset, collaborate with our engineering team, and deliver Net-Zero luxury that captures market value.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenConsultation}
                className="px-12 py-5 bg-[#b9975b] text-[#2c2825] text-[13px] tracking-[0.2em] uppercase font-bold hover:bg-[#dcd7d0] transition-colors"
              >
                Request Portal Access
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:architects@axiwatt.com"
                className="px-12 py-5 border-2 border-white text-white text-[13px] tracking-[0.2em] uppercase font-bold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Email architects@axiwatt.com
              </motion.a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-[#b9975b] to-transparent pointer-events-none" />
        </motion.section>
      </div>
    </div>
  );
};
