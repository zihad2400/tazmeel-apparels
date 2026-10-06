"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Design & Research", text: "Research trends to create unique designs, then select durable fabrics from trusted suppliers." },
  { num: "02", title: "Pattern & Cut", text: "Accurate patterns for all sizes, cut with precision tools and minimal fabric wastage." },
  { num: "03", title: "Sewing & QC", text: "Skilled workers assemble using standard techniques, with in-line and final inspections." },
  { num: "04", title: "Finish & Ship", text: "Ironing, branding and packaging, then timely shipment to retailers or customers." },
];

const quality = [
  { num: "1", title: "Fabric Selection", text: "High-quality, durable fabrics from our trusted supplier network." },
  { num: "2", title: "Precision Cutting", text: "Accurate patterns and cutting with minimal fabric wastage." },
  { num: "3", title: "In-Line Checks", text: "Inspection while garments are being sewn, to catch issues early." },
  { num: "4", title: "Final Inspection", text: "Every piece checked before ironing, packing and shipment." },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-brand-cream">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-4">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">OUR PRODUCTION PROCESS</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark leading-tight">
            From Concept to Delivery
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-5 sm:p-6 bg-white border-t-4 border-brand-gold rounded-lg shadow-sm hover:shadow-lg transition-all"
            >
              <span className="font-serif text-4xl sm:text-5xl text-brand-gold/20 absolute top-2 right-3 sm:right-4">{s.num}</span>
              <h3 className="font-serif text-lg sm:text-xl text-brand-dark mb-2 sm:mb-3 mt-3 sm:mt-4">{s.title}</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-brand-dark rounded-lg p-6 sm:p-8 md:p-12 text-brand-cream">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-gold">Quality Assurance</h3>
            <p className="text-brand-cream/70 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Rigorous inspection at every stage, so each order reaches you at an excellent standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {quality.map((q, i) => (
              <motion.div
                key={q.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 sm:gap-4 items-start"
              >
                <div
                  className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-gold text-brand-dark font-serif text-lg sm:text-xl flex items-center justify-center"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                  {q.num}
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-brand-gold mb-1">{q.title}</h4>
                  <p className="text-xs sm:text-sm text-brand-cream/70">{q.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
