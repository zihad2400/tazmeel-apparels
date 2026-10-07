"use client";
import { motion } from "framer-motion";
import { FileText, Palette, Factory, Truck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    num: "01",
    title: "Share Your Brief",
    text: "Tell us your product, quantity and design ideas.",
  },
  {
    icon: Palette,
    num: "02",
    title: "Design & Fabric",
    text: "We develop designs and select suitable fabrics.",
  },
  {
    icon: Factory,
    num: "03",
    title: "Production & QC",
    text: "Skilled production with inspection at every stage.",
  },
  {
    icon: Truck,
    num: "04",
    title: "Delivery",
    text: "Finished, packed garments shipped to you on time.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="section-padding bg-brand-dark text-brand-cream relative overflow-hidden"
    >
      {/* Decorative BG */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 border-2 border-brand-gold rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 border-2 border-brand-gold rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        {/* ═══════ HEADER ═══════ */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">
            HOW TO WORK WITH US
          </p>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-tight">
            Simple 4-Step Process
          </h2>
          <div className="gold-divider" />
        </div>

        {/* ═══════ STEPS — FULLY RESPONSIVE ═══════ */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-14 lg:mb-16 px-2 sm:px-0">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-4 xs:p-5 sm:p-6 bg-brand-darker border border-brand-gold/20 rounded-xl xs:rounded-2xl hover:border-brand-gold transition-all duration-300 h-full flex flex-col">

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-4 xs:left-5 sm:left-6 px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 bg-brand-gold rounded-full shadow-lg">
                    <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-brand-dark tracking-wider">
                      STEP {s.num}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-3 xs:mb-4 sm:mb-5 mt-1.5 xs:mt-2">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-lg xs:blur-xl group-hover:blur-2xl transition-all duration-500" />

                    {/* Icon Circle — Responsive */}
                    <div className="relative w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 border-2 border-brand-gold/40 flex items-center justify-center group-hover:border-brand-gold group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-brand-gold w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                  </div>

                  {/* Title — Responsive */}
                  <h3 className="font-serif text-base xs:text-lg sm:text-xl md:text-2xl mb-1.5 xs:mb-2 sm:mb-3 text-brand-cream leading-tight">
                    {s.title}
                  </h3>

                  {/* Description — Responsive */}
                  <p className="text-[11px] xs:text-xs sm:text-sm text-brand-cream/70 leading-relaxed flex-1">
                    {s.text}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-3 right-3 xs:left-4 xs:right-4 sm:left-6 sm:right-6 h-0.5 bg-gradient-to-r from-transparent via-brand-gold/0 to-transparent group-hover:via-brand-gold/50 transition-all duration-500" />
                </div>

                {/* Arrow Between Cards — Desktop Only */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 xl:-right-4 -translate-y-1/2 z-10 items-center justify-center">
                    <div className="relative">
                      <div className="w-5 xl:w-6 h-0.5 bg-gradient-to-r from-brand-gold/40 to-brand-gold" />
                      <div className="absolute -right-1 -top-[5px]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 2L8 6L2 10"
                            stroke="#C9A227"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ═══════ BOTTOM CTA ═══════ */}
        <div className="text-center px-4">
          <p className="text-brand-gold text-sm xs:text-base sm:text-lg mb-3 sm:mb-5 font-serif italic">
            Ready to start your order?
          </p>
          <p className="text-brand-cream/80 max-w-2xl mx-auto mb-5 sm:mb-7 text-xs xs:text-sm sm:text-base">
            Share your design or idea and we will help turn it into
            production-ready garments.
          </p>
          <a
            href="#contact"
            className="btn bg-brand-gold hover:bg-brand-goldLight text-brand-dark border-none px-5 xs:px-6 sm:px-8 rounded-full h-10 xs:h-11 sm:h-12 min-h-0 font-semibold text-xs xs:text-sm sm:text-base"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
