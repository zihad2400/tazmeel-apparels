"use client";
import { motion } from "framer-motion";
import { Package, Users, Leaf } from "lucide-react";

const partners = [
  { name: "One Ummah BD", file: "one-ummah.png" },
  { name: "Siwak", file: "siwak.jpg" },
  { name: "Sunnah", file: "sunnah.png" },
  { name: "Big Boss", file: "big-boss.png" },
  { name: "Tabaya", file: "tabaya.png" },
];

const services = [
  { icon: Users, title: "Custom Designs", text: "Tailored to individual preferences, events and business needs." },
  { icon: Package, title: "Bulk Orders", text: "Dedicated services for bulk and private-label orders." },
  { icon: Leaf, title: "Sustainable Practices", text: "Less waste and eco-friendly materials wherever possible." },
];

export default function Partners() {
  return (
    <section id="partners" className="section-padding bg-brand-dark text-brand-cream">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-4">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">TRUSTED BY</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Brands That Have Partnered With Us
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="aspect-square bg-brand-darker border border-brand-gold/20 rounded-lg flex items-center justify-center p-3 sm:p-6 hover:border-brand-gold hover:scale-105 transition-all"
            >
              <img
                src={`/images/partners/${p.file}`}
                alt={p.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 border border-brand-gold/20 rounded-lg hover:border-brand-gold transition-all"
            >
              <s.icon className="text-brand-gold mb-3" size={26} />
              <h3 className="font-serif text-lg sm:text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-brand-cream/70">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
