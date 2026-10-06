"use client";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { showSuccess, showError } from "@/lib/showToast";
import {
  SITE_CONFIG,
  getWhatsAppLink,
  getTelLink,
  getMailLink,
  getMapLink,
} from "@/lib/siteConfig";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name too long"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\d\s\-+()]{7,20}$/.test(val), {
      message: "Invalid phone number",
    }),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message too long"),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const buttonRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    // Ripple effect
    if (buttonRef.current) {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      const rect = buttonRef.current.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = "50%";
      ripple.style.top = "50%";
      ripple.style.marginLeft = -size / 2 + "px";
      ripple.style.marginTop = -size / 2 + "px";
      buttonRef.current.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        showSuccess(
          "Message Sent Successfully! 🎉",
          "Our team will contact you within 24 hours."
        );

        setSubmitted(true);
        reset();

        setTimeout(() => setSubmitted(false), 8000);
      } else {
        showError(
          "Failed to Send Message",
          result.error || "Please check your details and try again."
        );
      }
    } catch (err) {
      console.error("Submit error:", err);
      showError(
        "Network Error",
        "Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: SITE_CONFIG.address,
      href: getMapLink(),
    },
    {
      icon: Phone,
      label: "Phone",
      value: `${SITE_CONFIG.phonePrimary.display}, ${SITE_CONFIG.phoneSecondary.display}`,
      href: getTelLink(),
    },
    {
      icon: Mail,
      label: "Email",
      value: SITE_CONFIG.email,
      href: getMailLink(),
    },
    {
      icon: Clock,
      label: "Hours",
      value: SITE_CONFIG.hours,
      href: null,
    },
  ];

  const inputClass = (hasError) =>
    `w-full px-3 sm:px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all bg-brand-cream/50 text-brand-dark text-base ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
        : "border-brand-gold/30 focus:border-brand-gold focus:ring-brand-gold/20"
    } disabled:opacity-60`;

  return (
    <section id="contact" className="section-padding bg-brand-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-4">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">
            LET'S WORK TOGETHER
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark leading-tight">
            Start Your Order
          </h2>
          <div className="gold-divider" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-brand-dark/70 mt-3 sm:mt-4">
            Tell us your manufacturing needs and see how our facility of
            production can add value to your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            <div className="bg-brand-dark text-brand-cream p-5 sm:p-8 rounded-lg">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-gold mb-4 sm:mb-6">
                Contact Information
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  const content = (
                    <div className="flex gap-3 sm:gap-4 group">
                      <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-brand-gold/10 border border-brand-gold/30 rounded-full flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all">
                        <Icon className="text-brand-gold" size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs text-brand-gold tracking-widest mb-0.5 sm:mb-1">
                          {c.label.toUpperCase()}
                        </p>
                        <p className="text-xs sm:text-sm break-words group-hover:text-brand-gold transition">
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
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <a
              href={getWhatsAppLink(
                "Hello Tazmeel Apparels! I want to discuss a bulk order."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 sm:p-5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all h-12 min-h-0 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
            >
              <MessageCircle size={20} />
              <span className="font-medium text-sm sm:text-base">
                Chat on WhatsApp
              </span>
            </a>

            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-4 sm:p-5">
              <p className="text-xs text-brand-gold tracking-widest mb-3">
                WHY CHOOSE US
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-dark/80">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-0.5">✓</span>
                  <span>Reply within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-0.5">✓</span>
                  <span>Free design consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-0.5">✓</span>
                  <span>Bulk order discounts</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  className="bg-white p-8 sm:p-12 rounded-lg border border-brand-gold/20 shadow-lg text-center min-h-[500px] flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      bounce: 0.5,
                      delay: 0.2,
                      duration: 0.8,
                    }}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-4 border-green-500"
                    />
                    <CheckCircle2
                      className="text-green-600"
                      size={50}
                      strokeWidth={2.5}
                    />
                  </motion.div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark mb-3">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-brand-dark/70 max-w-md mx-auto mb-6 text-sm sm:text-base">
                    Thank you for contacting{" "}
                    <strong className="text-brand-gold">Tazmeel Apparels</strong>
                    . Our team will get back to you within{" "}
                    <strong>24 hours</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={getWhatsAppLink(
                        "Hello Tazmeel Apparels! I just sent an inquiry."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-green-600 hover:bg-green-700 text-white border-none px-6 rounded-full h-12 min-h-0 gap-2 shadow-lg shadow-green-500/30"
                    >
                      <MessageCircle size={18} />
                      Chat on WhatsApp
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark px-6 rounded-full h-12 min-h-0"
                    >
                      Send Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className={`bg-white p-5 sm:p-6 md:p-8 rounded-lg border border-brand-gold/20 shadow-sm transition-all ${
                    loading ? "opacity-75" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="Your full name"
                        disabled={loading}
                        className={inputClass(errors.name)}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                        disabled={loading}
                        className={inputClass(errors.email)}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        placeholder="+880 1XXX XXXXXX"
                        disabled={loading}
                        className={inputClass(errors.phone)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        {...register("company")}
                        placeholder="Your company"
                        disabled={loading}
                        className={inputClass(errors.company)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        {...register("subject")}
                        placeholder="Bulk order / Custom design / Other"
                        disabled={loading}
                        className={inputClass(errors.subject)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs sm:text-sm font-medium text-brand-dark mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        {...register("message")}
                        placeholder="Tell us about your product, quantity and design ideas..."
                        disabled={loading}
                        className={`${inputClass(errors.message)} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.message.message}
                        </p>
                      )}
                      <p className="text-xs text-brand-dark/50 mt-1">
                        Minimum 10 characters
                      </p>
                    </div>
                  </div>

                  {/* ⭐⭐⭐ ULTRA VISIBLE LOADING BUTTON ⭐⭐⭐ */}
                  <button
                    ref={buttonRef}
                    type="submit"
                    disabled={loading}
                    className={`mt-5 sm:mt-6 w-full relative overflow-hidden flex items-center justify-center gap-3 py-3 sm:py-4 rounded-lg transition-all h-14 min-h-0 font-semibold text-base ${
                      loading
                        ? "btn-loading-premium cursor-wait text-brand-cream"
                        : "bg-brand-dark hover:bg-brand-green text-brand-cream shadow-lg shadow-brand-dark/20 hover:shadow-brand-green/30 active:scale-[0.98]"
                    }`}
                  >
                    {loading ? (
                      <>
                        {/* Premium visible spinner */}
                        <div className="tazmeel-spinner">
                          <span />
                        </div>

                        {/* Animated text */}
                        <span className="loading-text">
                          Sending
                          <span className="loading-dot" />
                          <span className="loading-dot" />
                          <span className="loading-dot" />
                        </span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Status text below */}
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 flex justify-center"
                    >
                      <div className="loading-status">
                        <span className="loading-status-icon" />
                        Please wait, sending your message...
                      </div>
                    </motion.div>
                  )}

                  <p className="text-xs text-brand-dark/60 text-center mt-3 sm:mt-4">
                    We'll get back to you within 24 hours. Your information is
                    safe with us.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
