"use client";
import { motion } from "framer-motion";
import { Award, Layers, BadgeCheck, Palette, DollarSign, Leaf } from "lucide-react";

const features = [
  { icon: Award, title: "Specialist Expertise", text: "Focused manufacturing of Islamic and modest wear." },
  { icon: Layers, title: "Broad Range", text: "Thobes, Panjabis, Abayas, Hijabs and shirts under one roof." },
  { icon: BadgeCheck, title: "Quality Control", text: "Inspection at every stage, from fabric to packing." },
  { icon: Palette, title: "Customization", text: "Custom designs for brands, events and business needs." },
  { icon: DollarSign, title: "Competitive Value", text: "Quality, value-added products at a competitive price." },
  { icon: Leaf, title: "Eco-Conscious", text: "Reduced waste and eco-friendly materials." },
];

export default function WhyUs() {
  return (
    <section id="why" className="section-padding bg-brand-dark text-brand-cream">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-4">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">WHY CHOOSE US</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">Why Choose Tazmeel</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 border border-brand-gold/20 rounded-lg hover:bg-brand-darker hover:border-brand-gold transition-all group"
            >
              <f.icon className="text-brand-gold mb-3 sm:mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-serif text-lg sm:text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-brand-cream/70 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
