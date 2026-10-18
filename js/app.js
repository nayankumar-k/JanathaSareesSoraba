/**
 * Janatha Sarees - Soraba, Karnataka
 * Interactive Storefront Engine
 * Features:
 *  - Instant Kannada / English Bilingual Toggle
 *  - Interactive Occasion & Budget Stylist
 *  - 1-Click WhatsApp Pre-filled Inquiry Generator
 *  - Accessible Font Size Adjuster
 *  - FAQ Accordion with AEO Schema alignment
 *  - Gen-Z Reels & Lookbook Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initFontSizeToggle();
  initStylistFilter();
  initFaqAccordion();
  initMobileMenu();
  initReelsInteractivity();
});

/* ==========================================================================
   BILINGUAL TRANSLATION ENGINE (KANNADA & ENGLISH)
   ========================================================================== */
const translations = {
  kn: {
    announcement: "✨ ದೀಪಾವಳಿ & ಮದುವೆ ಸೀಸನ್ ವಿಶೇಷ ಕೊಡುಗೆಗಳು ಈಗ ಜನತಾ ಸ್ಯಾರೀಸ್ ಸೊರಬದಲ್ಲಿ ಲಭ್ಯವಿದೆ!",
    openStatus: "ಅಂಗಡಿ ತೆರೆದಿದೆ: ಬೆಳಿಗ್ಗೆ 9:30 - ರಾತ್ರಿ 9:00 (ಪ್ರತಿದಿನ)",
    tagline: "ಸೊರಬದ ವಿಶ್ವಾಸಾರ್ಹ ವಸ್ತ್ರ ಭಂಡಾರ • <span>ಸೊರಬ, ಶಿವಮೊಗ್ಗ</span>",
    navHome: "ಮುಖಪುಟ",
    navCollections: "ಸಂಗ್ರಹಗಳು",
    navStylist: "ಅವಕಾಶ ಶೈಲಿಗಾರ",
    navReels: "ಜನತಾ ಡ್ರಾಪ್ಸ್",
    navStore: "ಅಂಗಡಿ ಮಾಹಿತಿ",
    navFaq: "ಪ್ರಶ್ನೋತ್ತರ",
    chatWhatsApp: "WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
    heroBadge: "ಮಲ್ನಾಡ್ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ & ಆಧುನಿಕ ಶೈಲಿ",
    heroDesc: "ಮದುವೆ, ಗೃಹಪ್ರವೇಶ, ಹಬ್ಬ ಹರಿದಿನಗಳಿಂದ ಹಿಡಿದು ನಿತ್ಯ ಧರಿಸುವ ಉಡುಪುಗಳವರೆಗೆ — ಕೈಗೆಟುಕುವ ದರದಲ್ಲಿ ಮಹಿಳೆಯರು, ಪುರುಷರು ಮತ್ತು ಮಕ್ಕಳ ಉಡುಪುಗಳ ಬೃಹತ್ ಸಂಗ್ರಹ.",
    ctaExplore: "ಉಡುಪುಗಳ ಸಂಗ್ರಹ ವೀಕ್ಷಿಸಿ",
    ctaVisit: "ಅಂಗಡಿಯ ವಿಳಾಸ & ಮಾರ್ಗ",
    stylistTitle: "ನಿಮ್ಮ ಸಮಾರಂಭಕ್ಕೆ ತಕ್ಕ ಉಡುಪು ಮತ್ತು ಬಜೆಟ್ ಆಯ್ಕೆ",
    stylistSubtitle: "ಮದುವೆ, ಗೃಹಪ್ರವೇಶ ಅಥವಾ ನಿತ್ಯೋಪಯೋಗಿ ಉಡುಪುಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಶೋಧಿಸಿ",
    filterOccasion: "ಸಮಾರಂಭ ಆಯ್ಕೆ ಮಾಡಿ:",
    filterTarget: "ಯಾರಿಗೆ ಹುಡುಕುತ್ತಿದ್ದೀರಿ?:",
    filterBudget: "ಬಜೆಟ್ ಶ್ರೇಣಿ:",
    btnAll: "ಎಲ್ಲವೂ",
    btnWedding: "ಮದುವೆ & ಮುಹೂರ್ತ",
    btnHousewarming: "ಗೃಹಪ್ರವೇಶ",
    btnFestival: "ಹಬ್ಬ & ಪೂಜೆ",
    btnCasual: "ದೈನಂದಿನ & ಕಚೇರಿ",
    btnSleep: "ನೈಟ್‌ವೇರ್ & ಸ್ಪೋರ್ಟ್ಸ್",
    targetAll: "ಎಲ್ಲರೂ",
    targetWomen: "ಮಹಿಳೆಯರು (ಸ್ಯಾರೀಸ್)",
    targetMen: "ಪುರುಷರು",
    targetKids: "ಮಕ್ಕಳು",
    budgetAll: "ಎಲ್ಲಾ ಬೆಲೆಗಳು",
    budgetUnder1k: "₹999 ಒಳಗೆ",
    budget1to3k: "₹1,000 - ₹2,999",
    budget3to6k: "₹3,000 - ₹5,999",
    budgetLuxury: "₹6,000+ ಪ್ರೀಮಿಯಂ ಸಿಲ್ಕ್",
    inquireBtn: "WhatsApp ನಲ್ಲಿ ಕೇಳಿ",
    storeVisitTitle: "ಸೊರಬದಲ್ಲಿರುವ ನಮ್ಮ ಮಳಿಗೆಗೆ ಭೇಟಿ ನೀಡಿ",
    storeVisitSub: "ಮಲೆನಾಡಿನ ಹಬ್ಬ ಹಾಗೂ ಮದುವೆ ಸಂಭ್ರಮಗಳಿಗೆ ಕುಟುಂಬ ಸಮೇತ ಶಾಪಿಂಗ್ ಮಾಡುವ ಅತ್ಯುತ್ತಮ ತಾಣ",
    factAddressTitle: "ವಿಳಾಸ & ಹೆಗ್ಗುರುತು",
    factAddressVal: "ಹಳೇ ಬಸ್ ನಿಲ್ದಾಣದ ಸಮೀಪ, ರಥಬೀದಿ (Car Street), ಸೊರಬ - 577429",
    factTimingsTitle: "ಕಾರ್ಯನಿರ್ವಹಣಾ ಸಮಯ",
    factTimingsVal: "ಬೆಳಿಗ್ಗೆ 9:30 ರಿಂದ ರಾತ್ರಿ 9:00 ರವರೆಗೆ (ವಾರದ ಎಲ್ಲಾ 7 ದಿನಗಳು ತೆರೆದಿರುತ್ತದೆ)",
    factPayTitle: "ಪಾವತಿ ವಿಧಾನಗಳು",
    factPayVal: "UPI (PhonePe, GPay), ನಗದು, ಡೆಬಿಟ್ & ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್",
    factCallTitle: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ",
    factCallVal: "+91 94812 34567 / 08184 272233",
    faqTitle: "ಜನತಾ ಸ್ಯಾರೀಸ್ ಬಗ್ಗೆ ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
    faqSubtitle: "ನಿಮ್ಮ ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ವಿವರವಾದ ಉತ್ತರಗಳು ಇಲ್ಲಿವೆ"
  },
  en: {
    announcement: "✨ Grand Festive & Wedding Season Collections Now Available at Janatha Sarees Soraba!",
    openStatus: "Store Open Today: 9:30 AM – 9:00 PM (All 7 Days)",
    tagline: "Soraba's Trusted Family Fashion Destination • <span>Soraba, Shivamogga</span>",
    navHome: "Home",
    navCollections: "Collections",
    navStylist: "Occasion Stylist",
    navReels: "Janatha Drops",
    navStore: "Store Visit",
    navFaq: "FAQs",
    chatWhatsApp: "Chat on WhatsApp",
    heroBadge: "Malnad Textile Heritage & Contemporary Fashion",
    heroDesc: "From grand wedding Muhurthams and Gruha Pravesha to vibrant festivals and everyday comfort — discover Karnataka's finest Sarees, Men's wear, Kids' festive sets, Nightwear, and Sportswear at truly affordable prices.",
    ctaExplore: "Explore Collections",
    ctaVisit: "Get Store Directions",
    stylistTitle: "Find Outfits by Occasion & Budget",
    stylistSubtitle: "Select your celebration, who you're shopping for, and your budget for instant matches.",
    filterOccasion: "Select Occasion:",
    filterTarget: "Who are you shopping for?:",
    filterBudget: "Budget Range:",
    btnAll: "All Occasions",
    btnWedding: "Wedding & Muhurtham",
    btnHousewarming: "Gruha Pravesha",
    btnFestival: "Festivals & Puja",
    btnCasual: "Daily & Office Wear",
    btnSleep: "Nightwear & Active",
    targetAll: "Everyone",
    targetWomen: "Women (Sarees)",
    targetMen: "Men",
    targetKids: "Kids",
    budgetAll: "All Budgets",
    budgetUnder1k: "Under ₹999",
    budget1to3k: "₹1,000 – ₹2,999",
    budget3to6k: "₹3,000 – ₹5,999",
    budgetLuxury: "₹6,000+ Luxury Silk",
    inquireBtn: "Inquire on WhatsApp",
    storeVisitTitle: "Experience Shopping at Janatha Sarees Soraba",
    storeVisitSub: "A spacious, welcoming family textile showroom rooted in the heart of Malnad culture.",
    factAddressTitle: "Address & Landmark",
    factAddressVal: "Near Old Bus Stand, Car Street, Soraba, Shivamogga Dist, Karnataka - 577429",
    factTimingsTitle: "Store Timings",
    factTimingsVal: "9:30 AM – 9:00 PM (Open all 7 days of the week)",
    factPayTitle: "Payment Modes",
    factPayVal: "UPI (GPay, PhonePe, Paytm), Cash, Debit/Credit Cards",
    factCallTitle: "Direct Helpline",
    factCallVal: "+91 94812 34567 / 08184 272233",
    faqTitle: "Frequently Asked Questions (AEO & AI Search)",
    faqSubtitle: "Detailed answers about Janatha Sarees collections, pricing, location, and WhatsApp ordering."
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const switchBtns = document.querySelectorAll('[data-lang-btn]');
  
  // Check stored preference
  const savedLang = localStorage.getItem('janatha_lang');
  if (savedLang && (savedLang === 'kn' || savedLang === 'en')) {
    setLanguage(savedLang);
  }

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-btn');
      setLanguage(targetLang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('janatha_lang', lang);

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);

  // Toggle active class on buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    if (btn.getAttribute('data-lang-btn') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply translations to all elements with data-i18n
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Re-render stylist catalogue for appropriate language labels
  renderStylistResults();
}

/* ==========================================================================
   FONT SIZE TOGGLE (ACCESSIBILITY FOR ELDERS & HIGH LEGIBILITY)
   ========================================================================== */
function initFontSizeToggle() {
  const fontBtn = document.getElementById('fontSizeBtn');
  if (!fontBtn) return;

  fontBtn.addEventListener('click', () => {
    document.body.classList.toggle('font-large');
    const isLarge = document.body.classList.contains('font-large');
    fontBtn.innerText = isLarge ? 'A Normal' : 'A+ Large';
    fontBtn.title = isLarge ? 'Switch to Standard Font Size' : 'Switch to Larger Font Size for Easy Reading';
  });
}

/* ==========================================================================
   OCCASION & BUDGET STYLIST CATALOGUE & FILTER ENGINE
   ========================================================================== */
const catalogItems = [
  {
    id: "saree-kanjivaram-1",
    title: {
      en: "Heritage Bridal Kanjeevaram Pure Silk",
      kn: "ಕಾಂಚೀವರಂ ಪ್ಯೂರ್ ಸಿಲ್ಕ್ ಮದುವೆ ಸ್ಯಾರಿ"
    },
    category: "Sarees / ಸ್ಯಾರೀಸ್",
    target: "women",
    occasion: "wedding",
    budget: "luxury",
    priceDisplay: "₹7,499",
    priceRange: "₹6,000 – ₹18,000",
    image: "assets/hero_saree.jpg",
    badge: "Bridal Muhurtham",
    description: {
      en: "Pure silk with temple zari border and grand pallu, rich emerald & crimson tones for wedding rituals.",
      kn: "ಶುದ್ಧ ರೇಷ್ಮೆ ಹಾಗೂ ದೇವಸ್ಥಾನದ ಜರಿ ಬಾರ್ಡರ್ ಒಳಗೊಂಡ ಸಾಂಪ್ರದಾಯಿಕ ಮುಹೂರ್ತ ಸ್ಯಾರಿ."
    }
  },
  {
    id: "mens-panche-kurta-1",
    title: {
      en: "Royal Silk Kurta & Zari Panche Set",
      kn: "ರಾಯಲ್ ಸಿಲ್ಕ್ ಕುರ್ತಾ & ಜರಿ ಪಂಚೆ-ಶಲ್ಯ ಸೆಟ್"
    },
    category: "Men's Ethnic / ಪುರುಷರ ವಸ್ತ್ರ",
    target: "men",
    occasion: "wedding",
    budget: "1to3k",
    priceDisplay: "₹1,899",
    priceRange: "₹999 – ₹3,499",
    image: "assets/mens_ethnic.jpg",
    badge: "Groom & Festive",
    description: {
      en: "Pure raw silk ivory kurta paired with authentic golden border Panche (Dhoti) and matching Shalya.",
      kn: "ಮದುವೆ ಹಾಗೂ ಹಬ್ಬಗಳಿಗೆ ಹೊಂದುವ ಶುದ್ಧ ರಾ-ಸಿಲ್ಕ್ ಕುರ್ತಾ ಮತ್ತು ಜರಿ ಪಂಚೆ ಸೆಟ್."
    }
  },
  {
    id: "kids-pattu-pavada-1",
    title: {
      en: "Festive Pattu Pavada & Boys Silk Dhoti Set",
      kn: "ಮಕ್ಕಳ ಪಟ್ಟು ಪಾವಡೆ & ಸಿಲ್ಕ್ ಕುರ್ತಾ ಸೆಟ್"
    },
    category: "Kids / ಮಕ್ಕಳ ಸಂಗ್ರಹ",
    target: "kids",
    occasion: "festival",
    budget: "under1k",
    priceDisplay: "₹849",
    priceRange: "₹499 – ₹1,899",
    image: "assets/kids_festive.jpg",
    badge: "Bestseller",
    description: {
      en: "Bright, skin-friendly traditional silk pavada for girls and designer kurtas for young boys.",
      kn: "ಹಬ್ಬದ ದಿನಗಳಲ್ಲಿ ಮಕ್ಕಳಿಗೆ ಆರಾಮದಾಯಕ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಹೊಳಪು ನೀಡುವ ಉಡುಪುಗಳು."
    }
  },
  {
    id: "saree-banarasi-softsilk",
    title: {
      en: "Soft Silk & Banarasi Pastel Weave",
      kn: "ಸಾಫ್ಟ್ ಸಿಲ್ಕ್ & ಬನಾರಸಿ ರೇಷ್ಮೆ ಸ್ಯಾರಿ"
    },
    category: "Sarees / ಸ್ಯಾರೀಸ್",
    target: "women",
    occasion: "housewarming",
    budget: "3to6k",
    priceDisplay: "₹3,450",
    priceRange: "₹2,500 – ₹5,999",
    image: "assets/saree_variety.jpg",
    badge: "Gruha Pravesha Pick",
    description: {
      en: "Lightweight, easy to drape soft silk saree with intricate silver and gold floral motifs for housewarming celebrations.",
      kn: "ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಸತ್ಸಂಗಗಳಿಗೆ ಲಘುವಾದ ತೂಕ ಮತ್ತು ಸೊಗಸಾದ ವಿನ್ಯಾಸದ ಸಾಫ್ಟ್ ಸಿಲ್ಕ್ ಸ್ಯಾರಿ."
    }
  },
  {
    id: "comfort-lounge-active",
    title: {
      en: "Cotton Nightwear & Active Sportswear Sets",
      kn: "ಕಾಟನ್ ನೈಟ್‌ವೇರ್ & ಸ್ಪೋರ್ಟ್ಸ್ ಟ್ರ್ಯಾಕ್ಸ್"
    },
    category: "Comfort & Sportswear / ನೈಟ್‌ವೇರ್",
    target: "women",
    occasion: "sleep",
    budget: "under1k",
    priceDisplay: "₹499",
    priceRange: "₹399 – ₹1,299",
    image: "assets/nightwear_sportswear.jpg",
    badge: "Daily Comfort",
    description: {
      en: "Breathable 100% cotton nighties, chic loungewear pajama sets, and high-stretch gym activewear.",
      kn: "ಆರಾಮದಾಯಕ ನೈಟಿಗಳು, ಪೈಜಾಮಾ ಸೆಟ್‌ಗಳು ಮತ್ತು ವ್ಯಾಯಾಮಕ್ಕೆ ತಕ್ಕ ಸ್ಪೋರ್ಟ್ಸ್ ವೇರ್."
    }
  },
  {
    id: "genz-trendy-organza",
    title: {
      en: "Modern Pastel Organza & Georgette Drape",
      kn: "ಮಾಡರ್ನ್ ಆರ್ಗನ್ಜಾ & ಜಾರ್ಜೆಟ್ ಸ್ಯಾರಿ"
    },
    category: "Gen Z Saree Drop / ಟ್ರೆಂಡಿ ಸ್ಯಾರಿ",
    target: "women",
    occasion: "casual",
    budget: "1to3k",
    priceDisplay: "₹1,499",
    priceRange: "₹999 – ₹2,800",
    image: "assets/reel_saree.jpg",
    badge: "Gen Z Favorite",
    description: {
      en: "Trending airy pastel hues, scalloped borders, and delicate floral embroidery perfect for farewells and celebrations.",
      kn: "ಯುವತಿಯರ ಇಷ್ಟದ ಹಗುರವಾದ ಬಣ್ಣಗಳು ಹಾಗೂ ಟ್ರೆಂಡಿ ಎಂಬ್ರಾಯ್ಡರಿ ಉಳ್ಳ ಆರ್ಗನ್ಜಾ ಸ್ಯಾರಿ."
    }
  },
  {
    id: "mens-casual-linen",
    title: {
      en: "Festive Kurta Jacket & Casual Linens",
      kn: "ಫೆಸ್ಟಿವ್ ಕುರ್ತಾ ಜಾಕೆಟ್ & ಲಿನನ್ ಶರ್ಟ್ಸ್",
    },
    category: "Men's Wear / ಪುರುಷರ ಉಡುಪು",
    target: "men",
    occasion: "festival",
    budget: "1to3k",
    priceDisplay: "₹1,299",
    priceRange: "₹799 – ₹2,499",
    image: "assets/reel_men.jpg",
    badge: "Trending Men",
    description: {
      en: "Contemporary ethnic Nehru jackets, breathable linen kurtas, and smart formal shirts for all family functions.",
      kn: "ಆಧುನಿಕ ಶೈಲಿಯ ಜಾಕೆಟ್‌ಗಳು, ಲಿನನ್ ಶರ್ಟ್‌ಗಳು ಮತ್ತು ಸಮಾರಂಭಗಳಿಗೆ ತಕ್ಕ ಉಡುಪುಗಳು."
    }
  },
  {
    id: "store-family-package",
    title: {
      en: "Complete Family Wedding Bulk Combo",
      kn: "ಸಂಪೂರ್ಣ ಮದುವೆ ಫ್ಯಾಮಿಲಿ ಕಾಂಬೋ ಪ್ಯಾಕೇಜ್"
    },
    category: "Family Wholesale Combo / ಫ್ಯಾಮಿಲಿ ಪ್ಯಾಕ್",
    target: "all",
    occasion: "wedding",
    budget: "luxury",
    priceDisplay: "₹12,999+",
    priceRange: "Customized according to family budget",
    image: "assets/store_showroom.jpg",
    badge: "Best Value Offer",
    description: {
      en: "Specially packaged sets for bride, groom, parents, and return gifts (taamboola sarees & dhotis) at wholesale-friendly prices.",
      kn: "ಮನೆ ಮದುವೆಗಳಿಗೆ ವಧು-ವರರು, ಬಂಧುಗಳಿಗೆ ಬಟ್ಟೆಗಳು ಹಾಗೂ ತಾಂಬೂಲ ಸೀರೆಗಳ ಸಗಟು ದರದ ಪ್ಯಾಕೇಜ್."
    }
  }
];

let selectedOccasion = 'all';
let selectedTarget = 'all';
let selectedBudget = 'all';

function initStylistFilter() {
  const occasionBtns = document.querySelectorAll('[data-filter-occasion]');
  const targetBtns = document.querySelectorAll('[data-filter-target]');
  const budgetBtns = document.querySelectorAll('[data-filter-budget]');

  occasionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      occasionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedOccasion = btn.getAttribute('data-filter-occasion');
      renderStylistResults();
    });
  });

  targetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      targetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTarget = btn.getAttribute('data-filter-target');
      renderStylistResults();
    });
  });

  budgetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      budgetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedBudget = btn.getAttribute('data-filter-budget');
      renderStylistResults();
    });
  });

  renderStylistResults();
}

function renderStylistResults() {
  const container = document.getElementById('stylistResultsGrid');
  if (!container) return;

  const filtered = catalogItems.filter(item => {
    const matchOccasion = (selectedOccasion === 'all') || (item.occasion === selectedOccasion) || (item.occasion === 'all');
    const matchTarget = (selectedTarget === 'all') || (item.target === selectedTarget) || (item.target === 'all');
    const matchBudget = (selectedBudget === 'all') || (item.budget === selectedBudget);
    return matchOccasion && matchTarget && matchBudget;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-medium);">
        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1rem;">
          ${currentLang === 'kn' ? 'ಆಯ್ಕೆಮಾಡಿದ ಫಿಲ್ಟರ್‌ಗೆ ತಕ್ಕಂತೆ ಉತ್ಪನ್ನಗಳು ಸಿಗಲಿಲ್ಲವೇ? ಚಿಂತಿಸಬೇಡಿ!' : 'No exact match found for this filter combination? No worries!'}
        </p>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
          ${currentLang === 'kn' ? 'ಜನತಾ ಸ್ಯಾರೀಸ್ ಮಳಿಗೆಯಲ್ಲಿ 10,000 ಕ್ಕೂ ಹೆಚ್ಚು ವೈವಿಧ್ಯಮಯ ಉಡುಪುಗಳಿವೆ. ನೇರವಾಗಿ WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ.' : 'We have 10,000+ handpicked designs available in our Soraba showroom. Inquire directly on WhatsApp!'}
        </p>
        <button class="btn btn-whatsapp" onclick="openWhatsAppChat('General Enquiry for Custom Outfits in Soraba')">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          ${currentLang === 'kn' ? 'WhatsApp ನಲ್ಲಿ ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ' : 'Chat with Janatha Sarees Soraba on WhatsApp'}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const title = item.title[currentLang] || item.title.en;
    const desc = item.description[currentLang] || item.description.en;
    const whatsappText = encodeURIComponent(`Namaskara Janatha Sarees Soraba! I am interested in "${item.title.en}" (${item.priceDisplay}) seen on your website. Is it available in stock or can I visit your showroom?`);

    return `
      <article class="product-card" id="${item.id}">
        <div class="product-thumb">
          <img src="${item.image}" alt="${title} - Janatha Sarees Soraba" loading="lazy">
          <span class="product-tag-floating">${item.badge}</span>
        </div>
        <div class="product-body">
          <span class="product-cat">${item.category}</span>
          <h3 class="product-title">${title}</h3>
          <p class="product-desc">${desc}</p>
          <div class="product-meta-row">
            <div>
              <span class="product-price">${item.priceDisplay}</span>
              <div class="product-price-range">${item.priceRange}</div>
            </div>
          </div>
          <div class="product-actions">
            <a href="https://wa.me/919481234567?text=${whatsappText}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" aria-label="Inquire about ${title} on WhatsApp">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <span>${currentLang === 'kn' ? 'ವಿಚಾರಿಸಿ' : 'Inquire'}</span>
            </a>
            <button class="btn btn-outline" onclick="saveToMyWishlist('${item.id}', '${item.title.en}')" title="Save to Visit Checklist">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   WHATSAPP HELPER FUNCTION
   ========================================================================== */
function openWhatsAppChat(topic) {
  const msg = encodeURIComponent(`Namaskara Janatha Sarees Soraba! I am reaching out from your website regarding: ${topic}. Please share catalogue details.`);
  window.open(`https://wa.me/919481234567?text=${msg}`, '_blank');
}

/* ==========================================================================
   WISHLIST / "MY VISIT LIST" FOR ELDERS & SHOPPERS
   ========================================================================== */
function saveToMyWishlist(id, name) {
  let list = JSON.parse(localStorage.getItem('janatha_wishlist') || '[]');
  if (!list.includes(name)) {
    list.push(name);
    localStorage.setItem('janatha_wishlist', JSON.stringify(list));
    alert(currentLang === 'kn' ? 
      `"${name}" ನಿಮ್ಮ ಮಳಿಗೆ ಭೇಟಿ ಪಟ್ಟಿಗೆ ಸೇರ್ಪಡೆಗೊಂಡಿದೆ!` : 
      `Added "${name}" to your Store Visit List! You can show this list at the store counter in Soraba.`
    );
  } else {
    alert(currentLang === 'kn' ? 'ಈಗಾಗಲೇ ನಿಮ್ಮ ಭೇಟಿ ಪಟ್ಟಿಯಲ್ಲಿದೆ!' : 'Already in your visit list!');
  }
}

/* ==========================================================================
   REELS & GEN-Z LOOKBOOK INTERACTIVITY
   ========================================================================== */
function initReelsInteractivity() {
  const reelCards = document.querySelectorAll('.reel-card');
  reelCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicked on WhatsApp button, let native link execute
      if (e.target.closest('.reel-action-btn')) return;

      const title = card.getAttribute('data-reel-title') || 'Featured Look';
      openWhatsAppChat(`Janatha Drops Reel Look: "${title}"`);
    });
  });
}

/* ==========================================================================
   FAQ ACCORDION (AEO ALIGNED)
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   MOBILE MENU NAVIGATION
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('mobile-active');
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-active');
    });
  });
}
