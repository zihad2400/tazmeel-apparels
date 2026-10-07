"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG, getWhatsAppLink, getTelLink, getWhatsAppMessage } from "@/lib/siteConfig";

const PARTICLES = [
  { left: 8,  duration: 9,  delay: 0   },
  { left: 15, duration: 11, delay: 0.5 },
  { left: 22, duration: 8,  delay: 1.2 },
  { left: 29, duration: 12, delay: 0.8 },
  { left: 36, duration: 10, delay: 1.5 },
  { left: 43, duration: 7,  delay: 0.3 },
  { left: 50, duration: 13, delay: 1.0 },
  { left: 57, duration: 9,  delay: 0.6 },
  { left: 64, duration: 11, delay: 1.4 },
  { left: 71, duration: 8,  delay: 0.2 },
  { left: 78, duration: 12, delay: 0.9 },
  { left: 85, duration: 10, delay: 1.6 },
  { left: 92, duration: 7,  delay: 0.4 },
];

export default function Hero() {
  const waLink = getWhatsAppLink(getWhatsAppMessage());
  const telLink = getTelLink();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-darker">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/brand/green-fabric.jpg"
          alt="Premium fabric texture"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(1.8) brightness(0.9) contrast(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-brand-darker/85 to-brand-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-emerald-950/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,162,39,0.25) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 border-2 border-brand-gold"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 border-2 border-brand-gold rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] border border-brand-gold rounded-full opacity-40" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "-10%", opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-brand-gold rounded-full"
            style={{
              left: `${p.left}%`,
              boxShadow: "0 0 8px 2px rgba(201,162,39,0.8)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center py-20 sm:py-24 md:py-32">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-6 sm:mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-4 border-brand-gold"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-brand-goldLight"
            />
            <div className="absolute inset-0 bg-brand-gold/40 rounded-full blur-3xl scale-150 -z-10" />
            <img
              src="/images/brand/tazmeel-logo.png"
              alt={SITE_CONFIG.businessName}
              className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 30px rgba(201,162,39,0.9)) drop-shadow(0 0 60px rgba(201,162,39,0.5)) brightness(1.15) saturate(1.3)",
              }}
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-brand-gold tracking-[0.25em] sm:tracking-[0.4em] text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 font-medium px-4"
          style={{ textShadow: "0 0 20px rgba(201,162,39,0.7)" }}
        >
          ISLAMIC & MODEST GARMENTS MANUFACTURER
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-cream leading-[1.15] sm:leading-tight mb-3 sm:mb-4 px-2"
        >
          Crafting Style With
          <br />
          <span
            className="text-brand-gold inline-block mt-1 sm:mt-2"
            style={{
              textShadow:
                "0 0 40px rgba(201,162,39,0.8), 0 0 80px rgba(201,162,39,0.4), 0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            TAZMEEL APPARELS
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-3 my-6 sm:my-8"
        >
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-brand-gold" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand-gold rotate-45 shadow-lg shadow-brand-gold/50" />
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-brand-gold" />
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-brand-cream/90 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-8 sm:mb-10 tracking-wide px-4"
        >
          {SITE_CONFIG.addressShort} &nbsp;•&nbsp; Since 2020
        </motion.p>

        {/* ⭐ CTA Buttons — 3 buttons with WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-4xl mx-auto"
        >
          {/* Explore Products */}
          <Link
            href="#products"
            className="btn w-full sm:w-auto bg-brand-gold hover:bg-brand-goldLight text-brand-dark border-none px-6 sm:px-8 rounded-full font-semibold tracking-wide shadow-xl shadow-brand-gold/30 hover:shadow-brand-gold/50 transition-all h-12 min-h-0"
          >
            Explore Products
          </Link>

          {/* ⭐ WhatsApp Button */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-none px-6 sm:px-8 rounded-full font-semibold tracking-wide shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all h-12 min-h-0 gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

          {/* Get a Quote */}
          <Link
            href="#contact"
            className="btn w-full sm:w-auto btn-outline border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark px-6 sm:px-8 rounded-full font-semibold tracking-wide backdrop-blur-sm h-12 min-h-0"
          >
            Get a Quote
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-[10px] sm:text-xs text-brand-cream/70 tracking-widest px-4"
        >
          <span className="flex items-center gap-2">
            <span className="text-brand-gold">✦</span> PREMIUM QUALITY
          </span>
          <span className="flex items-center gap-2">
            <span className="text-brand-gold">✦</span> CUSTOM DESIGNS
          </span>
          <span className="flex items-center gap-2">
            <span className="text-brand-gold">✦</span> BULK ORDERS
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-brand-gold rounded-full flex justify-start p-1"
        >
          <div className="w-1.5 h-2 bg-brand-gold rounded-full shadow-lg shadow-brand-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
