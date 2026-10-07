"use client";
import { motion } from "framer-motion";
import { Target, Eye, Leaf, Sparkles } from "lucide-react";

const cards = [
  { icon: Target, num: "1", title: "Our Vision", text: "Lead the sector through innovation and high-quality apparel production standards." },
  { icon: Eye, num: "2", title: "Our Mission", text: "Deliver quality, value-added products at a competitive price point with smooth delivery." },
  { icon: Leaf, num: "3", title: "Eco-Friendly Process", text: "Environment-conscious processes that satisfy clients and the community." },
  { icon: Sparkles, num: "4", title: "Value Addition", text: "Clothing that offers cultural value and aesthetics, beyond wearability." },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-4">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">WHO WE ARE</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark leading-tight">
            About Tazmeel Apparels
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg leading-relaxed text-brand-dark/80 mb-6 sm:mb-8">
              Established in <strong className="text-brand-green">2020</strong>, Tazmeel Apparels is a Dhaka-based manufacturer of trendy, high-quality Islamic and modest clothing. We blend traditional and modern styles, delivering dependable apparel to a diverse client base.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="p-3 sm:p-4 border border-brand-gold/30 rounded-lg bg-white">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-gold">3000+</p>
                <p className="text-[10px] sm:text-xs mt-1 text-brand-dark/60">pcs/month</p>
              </div>
              <div className="p-3 sm:p-4 border border-brand-gold/30 rounded-lg bg-white">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-gold">5</p>
                <p className="text-[10px] sm:text-xs mt-1 text-brand-dark/60">skilled team</p>
              </div>
              <div className="p-3 sm:p-4 border border-brand-gold/30 rounded-lg bg-white">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-gold">2200</p>
                <p className="text-[10px] sm:text-xs mt-1 text-brand-dark/60">sq ft factory</p>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-brand-dark shadow-xl">
              <img
                src="/images/brand/siwak-collar.jpg"
                alt="SIWAK premium detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-brand-dark shadow-xl mt-6 sm:mt-8">
              <img
                src="/images/brand/black-thobe-embroidery.webp"
                alt="Black thobe with gold embroidery"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 bg-white border border-brand-gold/20 rounded-lg hover:border-brand-gold hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <c.icon className="text-brand-gold" size={24} />
                <span className="font-serif text-xl sm:text-2xl text-brand-gold/30">{c.num}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-brand-dark mb-2">{c.title}</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
