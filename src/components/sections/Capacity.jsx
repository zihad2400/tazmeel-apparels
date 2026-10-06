"use client";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const stats = [
  { value: "3,000", label: "pcs/month", sub: "Production capacity" },
  { value: "5", label: "skilled team", sub: "Dedicated staff" },
  { value: "3", label: "production lines", sub: "Active lines" },
  { value: "2,200", label: "sq ft factory", sub: "Floor space" },
  { value: "2020", label: "established", sub: "Since" },
];

const equipment = [
  { name: "Plain Sewing Machine", qty: 16, func: "Main body construction" },
  { name: "Overlock Machine", qty: 4, func: "Seam finishing" },
  { name: "Snap Button Machine", qty: 2, func: "Fastening" },
  { name: "Ironing", qty: 8, func: "Fusing Plate" },
  { name: "Boiler Iron", qty: 1, func: "Final finishing" },
  { name: "Cutting Machine", qty: 2, func: "Precision cutting" },
];

export default function Capacity() {
  return (
    <section id="capacity" className="section-padding bg-brand-dark text-brand-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-4">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">
            CAPACITY & EQUIPMENT
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Our Production Strength
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 border border-brand-gold/20 rounded-lg text-center hover:border-brand-gold transition-all bg-brand-darker"
            >
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-gold mb-1 sm:mb-2">
                {s.value}
              </p>
              <p className="text-[10px] sm:text-xs text-brand-cream/70 mb-0.5 sm:mb-1">
                {s.sub}
              </p>
              <p className="text-xs sm:text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ⭐ Equipment Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
            <Wrench className="text-brand-gold" size={20} />
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-brand-gold">
              Factory Equipment
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/60">
              {equipment.length} types · {equipment.reduce((a, b) => a + b.qty, 0)} total units
            </p>
          </div>
        </motion.div>

        {/* ⭐ DESKTOP: Table (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:block rounded-lg border border-brand-gold/20 overflow-hidden"
        >
          <table className="w-full text-sm">
            <thead className="bg-brand-gold text-brand-dark">
              <tr>
                <th className="px-6 py-4 text-left font-serif text-base">Equipment</th>
                <th className="px-6 py-4 text-center font-serif text-base w-24">Qty</th>
                <th className="px-6 py-4 text-left font-serif text-base">Primary Function</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((e, i) => (
                <tr
                  key={e.name}
                  className={`border-t border-brand-gold/10 ${
                    i % 2 === 0 ? "bg-brand-darker/50" : ""
                  } hover:bg-brand-gold/5 transition-colors`}
                >
                  <td className="px-6 py-4 text-brand-cream font-medium">{e.name}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center min-w-[40px] h-8 px-3 bg-brand-gold/20 border border-brand-gold/30 rounded-full text-brand-gold font-bold text-sm">
                      {e.qty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-brand-cream/70">{e.func}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* ⭐ MOBILE: Card layout (hidden on desktop) */}
        <div className="md:hidden space-y-3">
          {equipment.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-brand-darker border border-brand-gold/20 rounded-lg p-4 hover:border-brand-gold transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="font-serif text-base text-brand-cream font-semibold flex-1">
                  {e.name}
                </h4>
                <div className="shrink-0 flex items-center gap-1.5 bg-brand-gold/15 border border-brand-gold/30 rounded-full px-3 py-1">
                  <span className="text-[10px] text-brand-gold/70">QTY</span>
                  <span className="font-bold text-brand-gold text-sm">{e.qty}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-brand-gold/10">
                <p className="text-[10px] text-brand-gold/70 tracking-widest mb-1">
                  PRIMARY FUNCTION
                </p>
                <p className="text-xs text-brand-cream/70">{e.func}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
