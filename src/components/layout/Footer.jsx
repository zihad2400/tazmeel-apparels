"use client";
import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ArrowUp,
  Heart,
  Award,
  Truck,
  Package,
  Shield,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { showSuccess, showError } from "@/lib/showToast";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/siteConfig";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#products", label: "Products" },
  { href: "#capacity", label: "Capacity" },
  { href: "#process", label: "Production Process" },
  { href: "#partners", label: "Our Partners" },
  { href: "#contact", label: "Contact" },
];

const services = [
  { icon: Package, label: "Custom Manufacturing" },
  { icon: Truck, label: "Bulk Order Delivery" },
  { icon: Award, label: "Quality Assurance" },
  { icon: Shield, label: "Private Label" },
];

const socialLinks = [
  {
    href: "https://facebook.com/tazmeelapparels",
    Icon: FaFacebookF,
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
  {
    href: "https://instagram.com/tazmeelapparels",
    Icon: FaInstagram,
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
  {
    href: "https://wa.me/8801911548979",
    Icon: FaWhatsapp,
    label: "WhatsApp",
    color: "hover:bg-green-600",
  },
  {
    href: "https://linkedin.com/company/tazmeelapparels",
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    color: "hover:bg-blue-700",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: SITE_CONFIG.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: `${SITE_CONFIG.phonePrimary.display}, ${SITE_CONFIG.phoneSecondary.display}`,
    href: `tel:${SITE_CONFIG.phonePrimary.tel}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: SITE_CONFIG.hours,
    href: null,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      return showError("Email Required", "Please enter your email address.");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return showError("Invalid Email", "Please enter a valid email address.");
    }

    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        showSuccess(
          "Subscribed Successfully! 🎉",
          "Thank you for joining our newsletter."
        );
        setEmail("");
      } else {
        showError("Subscription Failed", data.error || "Please try again.");
      }
    } catch {
      showError("Network Error", "Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-darker text-brand-cream/80 overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 border-2 border-brand-gold rotate-45" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 border-2 border-brand-gold rounded-full" />
      </div>

      {/* Top Gold Line */}
      <div className="relative h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* ═══════ NEWSLETTER STRIP ═══════ */}
      <div className="relative bg-brand-dark border-b border-brand-gold/20">
        <div className="container-custom py-8 sm:py-10">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-gold mb-2">
                Stay in Touch
              </h3>
              <p className="text-sm sm:text-base text-brand-cream/70">
                Get updates on new products, offers, and manufacturing insights.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-brand-darker border border-brand-gold/30 rounded-full focus:outline-none focus:border-brand-gold text-brand-cream placeholder:text-brand-cream/40 text-base disabled:opacity-60"
                disabled={loading}
              />

              {/* ⭐⭐⭐ ADVANCED LOADING SUBSCRIBE BUTTON ⭐⭐⭐ */}
              <button
                type="submit"
                disabled={loading}
                className={`shrink-0 relative overflow-hidden flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-semibold transition-all h-12 min-h-0 ${
                  loading
                    ? "btn-loading-premium cursor-wait text-brand-cream"
                    : "bg-brand-gold hover:bg-brand-goldLight text-brand-dark shadow-lg shadow-brand-gold/30 hover:shadow-brand-gold/50 active:scale-[0.98]"
                }`}
              >
                {loading ? (
                  // ⭐ ULTRA VISIBLE LOADING STATE
                  <>
                    {/* Premium spinner */}
                    <div className="tazmeel-spinner" style={{ width: 24, height: 24 }}>
                      <span />
                    </div>

                    {/* Animated text */}
                    <span className="loading-text text-sm">
                      Sending
                      <span className="loading-dot" />
                      <span className="loading-dot" />
                      <span className="loading-dot" />
                    </span>
                  </>
                ) : (
                  // ⭐ NORMAL STATE
                  <>
                    <Send size={18} />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Loading status below form */}
          {loading && (
            <div className="mt-3 flex justify-center lg:justify-end">
              <div className="loading-status">
                <span className="loading-status-icon" />
                Please wait, subscribing...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ═══════ MAIN FOOTER ═══════ */}
      <div className="relative container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="#home"
              className="inline-flex items-center gap-3 mb-5 group"
            >
              <img
                src="/images/brand/tazmeel-logo.png"
                alt={SITE_CONFIG.businessName}
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div>
                <p className="font-serif text-xl text-brand-gold tracking-wide">
                  TAZMEEL
                </p>
                <p className="text-[10px] tracking-[0.3em] text-brand-gold/70">
                  APPARELS
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-5 text-brand-cream/70">
              Dhaka-based manufacturer of trendy, high-quality Islamic and
              modest clothing since 2020. Blending traditional and modern
              styles for a global client base.
            </p>

            <p className="text-xs text-brand-gold tracking-[0.25em] mb-5">
              CRAFTING STYLE WITH TAZMEEL
            </p>

            {/* Social */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => {
                const Icon = s.Icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold transition-all duration-300 hover:text-white hover:border-transparent hover:scale-110 ${s.color}`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg text-brand-gold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-gold rounded" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 text-brand-cream/70 hover:text-brand-gold transition-all group py-0.5"
                  >
                    <span className="w-1 h-1 bg-brand-gold/50 rounded-full group-hover:w-3 group-hover:bg-brand-gold transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg text-brand-gold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-gold rounded" />
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.label}
                    className="flex items-center gap-3 text-brand-cream/70 hover:text-brand-gold transition group cursor-default"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all">
                      <Icon size={16} className="text-brand-gold" />
                    </div>
                    <span>{s.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg text-brand-gold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-gold rounded" />
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all">
                      <Icon size={16} className="text-brand-gold" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-brand-gold/70 tracking-widest mb-0.5">
                        {c.label.toUpperCase()}
                      </p>
                      <p className="text-xs sm:text-sm text-brand-cream/70 group-hover:text-brand-gold transition break-words">
                        {c.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={
                          c.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          c.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block group"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* ═══════ BOTTOM BAR ═══════ */}
      <div className="relative border-t border-brand-gold/20 bg-brand-dark/50">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            <p className="text-brand-cream/50 text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-brand-gold font-medium">
                Tazmeel Apparels
              </span>
              . All rights reserved.
            </p>

            <p className="text-brand-cream/50 flex items-center gap-1.5 text-center">
              Made with{" "}
              <Heart
                size={14}
                className="text-red-400 fill-red-400 animate-pulse"
              />{" "}
              in Dhaka, Bangladesh
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="text-brand-cream/50 hover:text-brand-gold transition"
              >
                Support
              </a>
              <span className="text-brand-gold/30">•</span>
              <a
                href={getWhatsAppLink("Hello Tazmeel Apparels! I have a question.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream/50 hover:text-brand-gold transition"
              >
                WhatsApp
              </a>
              <span className="text-brand-gold/30">•</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-brand-gold hover:text-brand-goldLight transition group"
                aria-label="Back to top"
              >
                <ArrowUp
                  size={16}
                  className="group-hover:-translate-y-1 transition-transform"
                />
                Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="relative h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
    </footer>
  );
}
