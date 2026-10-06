// ⭐ Central Business Config — সবাই এখান থেকে number/email পাবে

export const SITE_CONFIG = {
  // Business Info
  businessName: "Tazmeel Apparels",
  businessTagline: "Crafting Style With Tazmeel",

  // Phone Numbers (with country code for tel: links)
  phonePrimary: {
    display: "01911548979",
    tel: "+8801911548979",
    whatsapp: "8801911548979",
  },
  phoneSecondary: {
    display: "01747066230",
    tel: "+8801747066230",
    whatsapp: "8801747066230",
  },

  // Email
  email: "tazmeelapparels@gmail.com",

  // Address
  address: "63/3/1 West Agargaon, Sher-e-Bangla Nagar, Dhaka",
  addressShort: "West Agargaon, Dhaka",

  // Hours
  hours: "9AM - 9PM (Sat - Fri)",

  // Social
  social: {
    facebook: "https://facebook.com/tazmeelapparels",
    instagram: "https://instagram.com/tazmeelapparels",
    linkedin: "https://linkedin.com/company/tazmeelapparels",
  },
};

// Helper Functions
export const getWhatsAppLink = (message = "") => {
  const base = `https://wa.me/${SITE_CONFIG.phonePrimary.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const getWhatsAppLinkSecondary = (message = "") => {
  const base = `https://wa.me/${SITE_CONFIG.phoneSecondary.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const getTelLink = () => `tel:${SITE_CONFIG.phonePrimary.tel}`;
export const getTelLinkSecondary = () => `tel:${SITE_CONFIG.phoneSecondary.tel}`;
export const getMailLink = () => `mailto:${SITE_CONFIG.email}`;
export const getMapLink = () =>
  `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`;

// Formatted display
export const getPhoneDisplay = () => SITE_CONFIG.phonePrimary.display;
export const getWhatsAppMessage = (customMessage = "") => {
  const defaultMsg = `Hello Tazmeel Apparels! I'm interested in your products. Please share more details.`;
  return customMessage || defaultMsg;
};
