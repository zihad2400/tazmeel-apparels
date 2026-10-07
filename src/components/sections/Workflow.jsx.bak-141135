"use client";
import { motion } from "framer-motion";
import { FileText, Palette, Factory, Truck } from "lucide-react";

const steps = [
  { icon: FileText, num: "1", title: "Share Your Brief", text: "Tell us your product, quantity and design ideas." },
  { icon: Palette, num: "2", title: "Design & Fabric", text: "We develop designs and select suitable fabrics." },
  { icon: Factory, num: "3", title: "Production & QC", text: "Skilled production with inspection at every stage." },
  { icon: Truck, num: "4", title: "Delivery", text: "Finished, packed garments shipped to you on time." },
];

export default function Workflow() {
  return (
    <section id="workflow" className="section-padding bg-brand-dark text-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 border-2 border-brand-gold rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 border-2 border-brand-gold rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-4">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">HOW TO WORK WITH US</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Simple 4-Step Process
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-5 sm:p-6 bg-brand-darker border border-brand-gold/30 rounded-lg hover:border-brand-gold transition-all h-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
                    <s.icon className="text-brand-dark" size={20} />
                  </div>
                  <span className="font-serif text-2xl sm:text-3xl text-brand-gold/30">{s.num}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed">{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-brand-gold text-2xl z-10">▶</div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center px-4">
          <p className="text-brand-gold text-base sm:text-lg mb-4 sm:mb-6 font-serif italic">
            Ready to start your order?
          </p>
          <p className="text-brand-cream/80 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            Share your design or idea and we will help turn it into production-ready garments.
          </p>
          <a
            href="#contact"
            className="btn bg-brand-gold hover:bg-brand-goldLight text-brand-dark border-none px-6 sm:px-8 rounded-full h-12 min-h-0"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
