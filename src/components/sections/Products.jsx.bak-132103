"use client";
import { motion } from "framer-motion";

const products = [
  { name: "Kuwati Thobe", tag: "Premium", img: "/images/products/kuwati-thobe.jpg" },
  { name: "Arabian Thobe", tag: "Classic", img: "/images/products/arabian-thobe.webp" },
  { name: "Regular Thobe", tag: "Everyday", img: "/images/products/regular-thobe.webp" },
  { name: "Omani Thobe", tag: "Traditional", img: "/images/products/omani-thobe.jpeg" },
  { name: "Kabuli Set", tag: "Complete", img: "/images/products/kabuli-set.png" },
  { name: "Punjabi", tag: "Festive", img: "/images/products/punjabi.jpg" },
];

const categories = [
  {
    title: "Modest Fashion",
    text: "Punjabi, Abayas, Khimars & Hijabs with trendy, durable cuts.",
    img: "/images/products/modest-fashion.jpg",
  },
  {
    title: "Traditional Attire",
    text: "Kuwaiti, Arabian, Regular & Omani Thobe and Kabuli sets for men.",
    img: "/images/products/traditional-attire.webp",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-brand-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-4">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">OUR PRODUCT LINES</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark leading-tight">
            Premium Traditional Garments
          </h2>
          <div className="gold-divider" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-brand-dark/70 mt-3 sm:mt-4">
            Finished with detailed embroidery on collar, placket and cuffs. Custom designs available for personal use, events and bulk business orders.
          </p>
        </div>

        {/* 6 Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-lg border border-brand-gold/20 bg-white hover:border-brand-gold hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-sand relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-brand-gold text-brand-dark text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full shadow-lg">
                  {p.tag}
                </div>
              </div>
              <div className="p-4 sm:p-5 flex items-center gap-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand-gold rotate-45 shrink-0" />
                <span className="font-serif text-base sm:text-lg text-brand-dark">
                  {p.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg border border-brand-gold/20 bg-brand-dark group min-h-[220px] sm:min-h-[280px]"
            >
              <div className="absolute inset-0">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/70 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end min-h-[220px] sm:min-h-[280px]">
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-gold mb-2">{c.title}</h3>
                <p className="text-brand-cream/90 text-xs sm:text-sm">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
