/**
 * Janatha Sarees - Soraba, Karnataka
 * Trending E-Commerce Engine (Myntra & Ajio inspired)
 * Clean, fast, interactive, mobile-first
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initProductsCatalog();
  initSearch();
  initCategoryFilters();
  initWishlist();
  initFaqAccordion();
});

/* ==========================================================================
   BILINGUAL TRANSLATION ENGINE (KANNADA & ENGLISH)
   ========================================================================== */
const translations = {
  kn: {
    announcement: "✨ ಮದುವೆ, ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಹಬ್ಬದ ಸೀಸನ್ ನೂತನ ಸಂಗ್ರಹಗಳು ಈಗ ಜನತಾ ಸ್ಯಾರೀಸ್ ಸೊರಬದಲ್ಲಿ ಲಭ್ಯವಿದೆ!",
    heroDesc: "ಮದುವೆ ಮುಹೂರ್ತ, ಗೃಹಪ್ರವೇಶ, ಹಬ್ಬ ಹರಿದಿನಗಳಿಂದ ಹಿಡಿದು ನಿತ್ಯ ಧರಿಸುವ ಆರಾಮದಾಯಕ ಉಡುಪುಗಳವರೆಗೆ — ಮಹಿಳೆಯರು, ಪುರುಷರು ಮತ್ತು ಮಕ್ಕಳ ಉಡುಪುಗಳ ಬೃಹತ್ ಸಂಗ್ರಹ ಮಗ್ಗದ ನೇರ ಬೆಲೆಗೆ ಜನತಾ ಸ್ಯಾರೀಸ್‌ನಲ್ಲಿ ಲಭ್ಯ.",
    ctaExplore: "ಉಡುಪುಗಳ ಸಂಗ್ರಹ ವೀಕ್ಷಿಸಿ",
    showingAll: "ಎಲ್ಲಾ ಉಡುಪುಗಳು",
    sarees: "ಸ್ಯಾರೀಸ್",
    men: "ಪುರುಷರ ಉಡುಪು",
    kids: "ಮಕ್ಕಳ ಉಡುಪು",
    occasions: "ಶುಭ ಸಮಾರಂಭಗಳು",
    comfort: "ನೈಟ್‌ವೇರ್ & ಸ್ಪೋರ್ಟ್ಸ್",
    directWeaver: "ಮಗ್ಗದ ನೇರ ಬೆಲೆ",
    inquireWhatsApp: "WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
    addedWishlist: "ವಿಶ್‌ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ!",
    removedWishlist: "ವಿಶ್‌ಲಿಸ್ಟ್‌ನಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ",
    emptyWishlist: "ನಿಮ್ಮ ವಿಶ್‌ಲಿಸ್ಟ್ ಖಾಲಿಯಾಗಿದೆ. ಸಂಗ್ರಹಗಳಿಂದ ಆಯ್ಕೆ ಮಾಡಿ!"
  },
  en: {
    announcement: "✨ Wedding, Gruha Pravesha & Festive Collections Now in Store in Soraba!",
    heroDesc: "From Royal Wedding Muhurthams and Gruha Pravesha to vibrant festivals and everyday comfort — discover Karnataka's finest Sarees, Men's wear, Kids' festive sets, Nightwear, and Sportswear at direct weaver prices in Soraba.",
    ctaExplore: "Explore Collections",
    showingAll: "Showing All",
    sarees: "Sarees & Silks",
    men: "Men's Wear",
    kids: "Kids Wear",
    occasions: "Occasions",
    comfort: "Night & Sports",
    directWeaver: "Direct Weaver Value",
    inquireWhatsApp: "Inquire on WhatsApp",
    addedWishlist: "Added to Wishlist!",
    removedWishlist: "Removed from Wishlist",
    emptyWishlist: "Your wishlist is empty. Tap the heart on items you love!"
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const switchBtns = document.querySelectorAll('[data-lang-btn]');
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
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    if (btn.getAttribute('data-lang-btn') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  renderProducts();
  renderWishlistDrawer();
}

/* ==========================================================================
   E-COMMERCE PRODUCT CATALOG DATA (AUTHENTIC & VALUE-FOCUSED)
   ========================================================================== */
const products = [
  {
    id: "saree-kanjivaram-royal",
    title: {
      en: "Royal Emerald Bridal Kanjeevaram Pure Silk",
      kn: "ರಾಯಲ್ ಕಾಂಚೀವರಂ ಪ್ಯೂರ್ ಸಿಲ್ಕ್ ಮುಹೂರ್ತ ಸ್ಯಾರಿ"
    },
    category: "sarees",
    brand: "JANATHA SILKS SORABA",
    rating: "4.9 ★",
    image: "assets/hero_saree.jpg",
    snippet: {
      en: "Authentic pure silk weave with rich zari temple border and crimson pallu for bridal Muhurthams.",
      kn: "ದೇವಸ್ಥಾನದ ಸಾಂಪ್ರದಾಯಿಕ ಜರಿ ಬಾರ್ಡರ್ ಹಾಗೂ ಭವ್ಯ ಪಲ್ಲು ಒಳಗೊಂಡ ಶುದ್ಧ ರೇಷ್ಮೆ ಸ್ಯಾರಿ."
    },
    valueBadge: {
      en: "Direct Weaver Value",
      kn: "ಮಗ್ಗದ ನೇರ ಬೆಲೆ"
    }
  },
  {
    id: "saree-softsilk-pastel",
    title: {
      en: "Soft Silk & Banarasi Pastel Floral Weave",
      kn: "ಸಾಫ್ಟ್ ಸಿಲ್ಕ್ & ಬನಾರಸಿ ಪೇಸ್ಟಲ್ ಸ್ಯಾರಿ"
    },
    category: "sarees",
    brand: "JANATHA SILKS SORABA",
    rating: "4.8 ★",
    image: "assets/saree_variety.jpg",
    snippet: {
      en: "Featherlight soft silk drape with subtle zari motifs, easy to wear for Gruha Pravesha and family pujas.",
      kn: "ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಪೂಜೆಗಳಿಗೆ ಲಘುವಾದ ತೂಕ ಮತ್ತು ಸೊಗಸಾದ ವಿನ್ಯಾಸದ ಸಾಫ್ಟ್ ಸಿಲ್ಕ್."
    },
    valueBadge: {
      en: "Gruha Pravesha Favorite",
      kn: "ಗೃಹಪ್ರವೇಶ ವಿಶೇಷ"
    }
  },
  {
    id: "mens-panche-kurta",
    title: {
      en: "Royal Ivory Silk Kurta & Zari Panche Set",
      kn: "ರಾಯಲ್ ಸಿಲ್ಕ್ ಕುರ್ತಾ & ಜರಿ ಪಂಚೆ-ಶಲ್ಯ ಸೆಟ್"
    },
    category: "men",
    brand: "JANATHA MEN ETHNIC",
    rating: "4.9 ★",
    image: "assets/mens_ethnic.jpg",
    snippet: {
      en: "Raw silk ivory kurta with matching traditional golden border Panche (Dhoti) and Shalya.",
      kn: "ಮದುವೆ ಹಾಗೂ ಹಬ್ಬಗಳಿಗೆ ಹೊಂದುವ ಶುದ್ಧ ರಾ-ಸಿಲ್ಕ್ ಕುರ್ತಾ ಮತ್ತು ಜರಿ ಪಂಚೆ ಸೆಟ್."
    },
    valueBadge: {
      en: "Groom & Festive Set",
      kn: "ವರನ ವಿವಾಹ ಸೆಟ್"
    }
  },
  {
    id: "kids-festive-pattu",
    title: {
      en: "Traditional Pattu Pavada & Boys Silk Dhoti",
      kn: "ಮಕ್ಕಳ ಪಟ್ಟು ಪಾವಡೆ & ಸಿಲ್ಕ್ ಧೋತಿ ಸೆಟ್"
    },
    category: "kids",
    brand: "JANATHA JUNIOR",
    rating: "4.8 ★",
    image: "assets/kids_festive.jpg",
    snippet: {
      en: "Skin-friendly, gentle pure silk pattu pavada for girls and festive kurta sets for young boys.",
      kn: "ಹಬ್ಬದ ದಿನಗಳಲ್ಲಿ ಮಕ್ಕಳಿಗೆ ಆರಾಮದಾಯಕ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಹೊಳಪು ನೀಡುವ ಉಡುಪುಗಳು."
    },
    valueBadge: {
      en: "Festive Collection",
      kn: "ಮಕ್ಕಳ ಹಬ್ಬದ ಸಂಭ್ರಮ"
    }
  },
  {
    id: "saree-organza-trending",
    title: {
      en: "Lilac Organza & Delicate Scalloped Drape",
      kn: "ಮಾಡರ್ನ್ ಆರ್ಗನ್ಜಾ & ಜಾರ್ಜೆಟ್ ಸ್ಯಾರಿ"
    },
    category: "sarees",
    brand: "JANATHA TRENDS",
    rating: "4.9 ★",
    image: "assets/reel_saree.jpg",
    snippet: {
      en: "Trendy pastel organza with delicate hand-embroidery and scalloped borders, popular for receptions.",
      kn: "ಹಗುರವಾದ ಬಣ್ಣಗಳು ಹಾಗೂ ಸುಲಭವಾಗಿ ಧರಿಸಬಹುದಾದ ಸೊಗಸಾದ ಆರ್ಗನ್ಜಾ ಸ್ಯಾರಿ."
    },
    valueBadge: {
      en: "Ajio Trend Pick",
      kn: "ನವೀನ ಟ್ರೆಂಡ್ ಆಯ್ಕೆ"
    }
  },
  {
    id: "mens-festive-jacket",
    title: {
      en: "Textured Olive Nehru Jacket & Linen Kurta",
      kn: "ಫೆಸ್ಟಿವ್ ಕುರ್ತಾ ಜಾಕೆಟ್ & ಲಿನನ್ ಶರ್ಟ್ಸ್"
    },
    category: "men",
    brand: "JANATHA MEN ETHNIC",
    rating: "4.8 ★",
    image: "assets/reel_men.jpg",
    snippet: {
      en: "Contemporary ethnic tailored Nehru jacket paired with breathable cotton-linen kurta.",
      kn: "ಆಧುನಿಕ ಶೈಲಿಯ ಜಾಕೆಟ್‌ಗಳು, ಲಿನನ್ ಶರ್ಟ್‌ಗಳು ಮತ್ತು ಸಮಾರಂಭಗಳಿಗೆ ತಕ್ಕ ಉಡುಪುಗಳು."
    },
    valueBadge: {
      en: "Contemporary Men",
      kn: "ಮಾಡರ್ನ್ ಎತ್ನಿಕ್"
    }
  },
  {
    id: "comfort-nightwear-sports",
    title: {
      en: "100% Cotton Nightwear & Gym Active Trackset",
      kn: "ಕಾಟನ್ ನೈಟ್‌ವೇರ್ & ಸ್ಪೋರ್ಟ್ಸ್ ಟ್ರ್ಯಾಕ್ಸ್"
    },
    category: "comfort",
    brand: "JANATHA COMFORT",
    rating: "4.7 ★",
    image: "assets/nightwear_sportswear.jpg",
    snippet: {
      en: "Breathable pure cotton nighties, chic loungewear coordinate pajamas, and athletic stretch gym wear.",
      kn: "ಆರಾಮದಾಯಕ ನೈಟಿಗಳು, ಪೈಜಾಮಾ ಸೆಟ್‌ಗಳು ಮತ್ತು ವ್ಯಾಯಾಮಕ್ಕೆ ತಕ್ಕ ಸ್ಪೋರ್ಟ್ಸ್ ವೇರ್."
    },
    valueBadge: {
      en: "Daily Comfort Value",
      kn: "ನಿತ್ಯೋಪಯೋಗಿ ಆರಾಮ"
    }
  },
  {
    id: "occasion-marriage-bulk",
    title: {
      en: "Complete Family Wedding Bulk Combo Package",
      kn: "ಸಂಪೂರ್ಣ ಮದುವೆ ಫ್ಯಾಮಿಲಿ ಕಾಂಬೋ ಪ್ಯಾಕೇಜ್"
    },
    category: "occasions",
    brand: "JANATHA WHOLESALE",
    rating: "5.0 ★",
    image: "assets/store_showroom.jpg",
    snippet: {
      en: "Curated packages for bride, groom, parents, and return gifts (taamboola sarees & dhotis) at direct wholesale rates.",
      kn: "ಮನೆ ಮದುವೆಗಳಿಗೆ ವಧು-ವರರು, ಬಂಧುಗಳಿಗೆ ಬಟ್ಟೆಗಳು ಹಾಗೂ ತಾಂಬೂಲ ಸೀರೆಗಳ ಸಗಟು ದರದ ಪ್ಯಾಕೇಜ್."
    },
    valueBadge: {
      en: "Direct Wholesale Package",
      kn: "ಸಗಟು ಪ್ಯಾಕೇಜ್ ದರ"
    }
  },
  {
    id: "saree-daily-handloom-cotton",
    title: {
      en: "Pure Malnad Handloom Cotton & Ilkal Weave",
      kn: "ಶುದ್ಧ ಹ್ಯಾಂಡ್‌ಲೂಮ್ ಕಾಟನ್ & ಇಳಕಲ್ ಸ್ಯಾರಿ"
    },
    category: "sarees",
    brand: "JANATHA SILKS SORABA",
    rating: "4.8 ★",
    image: "assets/saree_variety.jpg",
    snippet: {
      en: "100% natural breathable cotton with authentic traditional borders, ideal for daily office & temple wear.",
      kn: "ದೈನಂದಿನ ಹಾಗೂ ಕಚೇರಿ ಬಳಕೆಗೆ ಆರಾಮದಾಯಕವಾದ ನೈಸರ್ಗಿಕ ಹ್ಯಾಂಡ್‌ಲೂಮ್ ಕಾಟನ್ ಸ್ಯಾರಿ."
    },
    valueBadge: {
      en: "Daily Wear Best Value",
      kn: "ದೈನಂದಿನ ಬೆಸ್ಟ್ ಚಾಯ್ಸ್"
    }
  }
];

let activeCategory = 'all';
let searchQuery = '';

/* ==========================================================================
   RENDER PRODUCT CARDS (MYNTRA & AJIO 3:4 E-COMMERCE CARDS)
   ========================================================================== */
function initProductsCatalog() {
  updatePillCounts();
  renderProducts();
}

function updatePillCounts() {
  const counts = {
    all: products.length,
    sarees: products.filter(p => p.category === 'sarees').length,
    men: products.filter(p => p.category === 'men').length,
    kids: products.filter(p => p.category === 'kids').length,
    occasions: products.filter(p => p.category === 'occasions').length,
    comfort: products.filter(p => p.category === 'comfort').length,
  };

  const countAll = document.getElementById('countAll');
  if (countAll) countAll.innerText = counts.all;
  const countSarees = document.getElementById('countSarees');
  if (countSarees) countSarees.innerText = counts.sarees;
  const countMen = document.getElementById('countMen');
  if (countMen) countMen.innerText = counts.men;
  const countKids = document.getElementById('countKids');
  if (countKids) countKids.innerText = counts.kids;
  const countOccasions = document.getElementById('countOccasions');
  if (countOccasions) countOccasions.innerText = counts.occasions;
  const countComfort = document.getElementById('countComfort');
  if (countComfort) countComfort.innerText = counts.comfort;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const wishlist = getWishlist();

  const filtered = products.filter(item => {
    const matchCat = (activeCategory === 'all') || (item.category === activeCategory);
    let matchQuery = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const titleEn = item.title.en.toLowerCase();
      const titleKn = item.title.kn.toLowerCase();
      const snippetEn = item.snippet.en.toLowerCase();
      const brand = item.brand.toLowerCase();
      matchQuery = titleEn.includes(q) || titleKn.includes(q) || snippetEn.includes(q) || brand.includes(q);
    }
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; background: #FFFFFF; border-radius: var(--radius-md); border: 1px dashed var(--border-medium);">
        <p style="font-size: 1.1rem; font-weight: 800; color: var(--primary); margin-bottom: 0.5rem;">
          ${currentLang === 'kn' ? 'ಯಾವುದೇ ಉಡುಪುಗಳು ಕಂಡುಬಂದಿಲ್ಲ' : 'No items match your search'}
        </p>
        <p style="color: var(--text-muted); margin-bottom: 1.25rem;">
          ${currentLang === 'kn' ? 'ಜನತಾ ಸ್ಯಾರೀಸ್ ಸೊರಬ ಶೋರೂಮ್‌ನಲ್ಲಿ ಇನ್ನೂ ಸಾವಿರಾರು ಮಾದರಿಗಳು ಲಭ್ಯವಿವೆ! ನೇರವಾಗಿ WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ.' : 'Thousands more varieties are available in our Soraba showroom! Message us directly on WhatsApp.'}
        </p>
        <button class="btn-order-whatsapp" style="max-width: 320px; margin: 0 auto;" onclick="openWhatsAppChat('Inquiry about out of catalog designs in Soraba')">
          <span>${currentLang === 'kn' ? 'WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ' : 'Inquire on WhatsApp'}</span>
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const title = item.title[currentLang] || item.title.en;
    const snippet = item.snippet[currentLang] || item.snippet.en;
    const valueBadge = item.valueBadge[currentLang] || item.valueBadge.en;
    const isWishlisted = wishlist.includes(item.id);
    const whatsappMsg = encodeURIComponent(`Namaskara Janatha Sarees Soraba! I saw "${item.title.en}" on your online trending catalog. Please share color options, fabric details, and direct weaver pricing.`);

    return `
      <article class="ecom-product-card" id="${item.id}">
        <div class="product-image-box">
          <img src="${item.image}" alt="${title} - Janatha Sarees Soraba" loading="lazy">
          <span class="floating-rating-tag"><span class="star">★</span> ${item.rating.replace('★', '').trim()}</span>
          <button class="floating-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlistItem('${item.id}')" title="Save to Wishlist" aria-label="Toggle Wishlist">
            <svg fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>
        <div class="product-card-body">
          <span class="product-brand-line">${item.brand}</span>
          <h3 class="product-name-title" title="${title}">${title}</h3>
          <p class="product-snippet">${snippet}</p>
          <div class="product-value-pill">
            <span>🏷️ ${valueBadge}</span>
          </div>
          <div class="product-card-footer">
            <a href="https://wa.me/919481234567?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" class="btn-order-whatsapp">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <span>${currentLang === 'kn' ? 'WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ' : 'Inquire on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   LIVE REAL-TIME SEARCH (DESKTOP & MOBILE INPUTS)
   ========================================================================== */
function initSearch() {
  const globalInput = document.getElementById('globalSearchInput');
  const mobileInput = document.getElementById('mobileSearchInput');

  function handleInput(e) {
    searchQuery = e.target.value;
    if (globalInput && globalInput !== e.target) globalInput.value = searchQuery;
    if (mobileInput && mobileInput !== e.target) mobileInput.value = searchQuery;

    renderProducts();

    // If user is searching, scroll smoothly toward catalog if not in view
    const catalog = document.getElementById('catalog');
    if (catalog && searchQuery.length === 2) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (globalInput) globalInput.addEventListener('input', handleInput);
  if (mobileInput) mobileInput.addEventListener('input', handleInput);
}

/* ==========================================================================
   CATEGORY FILTERS (PILLS, STORIES, TILES, HEADER NAV)
   ========================================================================== */
function initCategoryFilters() {
  // Filter pills
  const pills = document.querySelectorAll('.filter-pill[data-filter]');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-filter');
      updateActiveCategoryText();
      renderProducts();
    });
  });

  // Story circles
  const storyItems = document.querySelectorAll('.story-item[data-category]');
  storyItems.forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.getAttribute('data-category');
      selectCategory(cat);
    });
  });

  // Category showcase tiles
  const tiles = document.querySelectorAll('.cat-tile[data-category]');
  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const cat = tile.getAttribute('data-category');
      selectCategory(cat);
    });
  });

  // Desktop nav links
  const navLinks = document.querySelectorAll('.cat-nav-link[data-category]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-category');
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      selectCategory(cat);
    });
  });
}

function selectCategory(cat) {
  activeCategory = cat;

  // Sync filter pills
  document.querySelectorAll('.filter-pill[data-filter]').forEach(pill => {
    if (pill.getAttribute('data-filter') === cat) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  // Sync desktop nav links
  document.querySelectorAll('.cat-nav-link[data-category]').forEach(link => {
    if (link.getAttribute('data-category') === cat) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  updateActiveCategoryText();
  renderProducts();

  const catalog = document.getElementById('catalog');
  if (catalog) {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateActiveCategoryText() {
  const badge = document.getElementById('activeFilterBadge');
  if (!badge) return;
  const dict = translations[currentLang] || translations.en;
  if (activeCategory === 'all') {
    badge.innerText = dict.showingAll;
  } else {
    badge.innerText = dict[activeCategory] || activeCategory.toUpperCase();
  }
}

/* ==========================================================================
   WISHLIST / MY VISIT LIST ENGINE (WITH SLIDE-OVER DRAWER)
   ========================================================================== */
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem('janatha_wishlist') || '[]');
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  localStorage.setItem('janatha_wishlist', JSON.stringify(list));
  updateWishlistBadges();
}

function updateWishlistBadges() {
  const list = getWishlist();
  const count = list.length;
  const headerBadge = document.getElementById('wishlistCountBadge');
  if (headerBadge) headerBadge.innerText = count;
  const mobileBadge = document.getElementById('mobileWishlistBadge');
  if (mobileBadge) mobileBadge.innerText = count;
  const drawerCount = document.getElementById('drawerWishlistCount');
  if (drawerCount) drawerCount.innerText = count;
}

function toggleWishlistItem(id) {
  let list = getWishlist();
  if (list.includes(id)) {
    list = list.filter(item => item !== id);
  } else {
    list.push(id);
  }
  saveWishlist(list);
  renderProducts();
  renderWishlistDrawer();
}

function initWishlist() {
  updateWishlistBadges();

  const headerBtn = document.getElementById('headerWishlistBtn');
  const mobileBtn = document.getElementById('mobileWishlistBtn');
  const drawer = document.getElementById('wishlistDrawer');
  const closeBtn = document.getElementById('closeWishlistBtn');
  const shareBtn = document.getElementById('shareWishlistWhatsAppBtn');

  function openDrawer() {
    renderWishlistDrawer();
    if (drawer) drawer.classList.add('open');
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
  }

  if (headerBtn) headerBtn.addEventListener('click', openDrawer);
  if (mobileBtn) mobileBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeDrawer();
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const list = getWishlist();
      if (list.length === 0) {
        alert(translations[currentLang].emptyWishlist);
        return;
      }
      const wishProducts = products.filter(p => list.includes(p.id));
      const titles = wishProducts.map((p, idx) => `${idx + 1}. ${p.title.en} (${p.brand})`).join('%0A');
      const text = encodeURIComponent(`Namaskara Janatha Sarees Soraba! Here is my Wishlist / Store Visit List from your website:%0A%0A`) + titles + encodeURIComponent(`%0A%0APlease let me know availability and direct pricing when I visit the Soraba showroom.`);
      window.open(`https://wa.me/919481234567?text=${text}`, '_blank');
    });
  }
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlistDrawerBody');
  if (!container) return;

  const list = getWishlist();
  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin-bottom: 1rem; opacity: 0.5;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <p style="font-weight: 700; color: var(--primary); margin-bottom: 0.25rem;">
          ${translations[currentLang].emptyWishlist}
        </p>
        <p style="font-size: 0.82rem;">
          Save looks for wedding Muhurthams, Gruha Pravesha, or your upcoming showroom visit to Soraba.
        </p>
      </div>
    `;
    return;
  }

  const wishProducts = products.filter(p => list.includes(p.id));
  container.innerHTML = wishProducts.map(p => {
    const title = p.title[currentLang] || p.title.en;
    return `
      <div style="display: flex; gap: 0.85rem; padding: 0.85rem 0; border-bottom: 1px solid var(--border-light); align-items: center;">
        <img src="${p.image}" alt="${title}" style="width: 60px; height: 80px; object-fit: cover; border-radius: var(--radius-xs);">
        <div style="flex-grow: 1;">
          <div style="font-size: 0.72rem; font-weight: 800; color: var(--text-muted);">${p.brand}</div>
          <div style="font-size: 0.88rem; font-weight: 800; color: var(--primary); line-height: 1.2;">${title}</div>
          <div style="font-size: 0.72rem; color: var(--accent-emerald); font-weight: 800; margin-top: 0.2rem;">${p.valueBadge[currentLang] || p.valueBadge.en}</div>
        </div>
        <button onclick="toggleWishlistItem('${p.id}')" style="color: var(--text-muted); padding: 0.4rem; font-size: 1.1rem;" title="Remove from list">✕</button>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   AEO FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => {
        i.classList.remove('active');
        const b = i.querySelector('.faq-btn');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   WHATSAPP HELPER FUNCTION
   ========================================================================== */
function openWhatsAppChat(topic) {
  const msg = encodeURIComponent(`Namaskara Janatha Sarees Soraba! I am reaching out from your trending online website regarding: ${topic}. Please share details and available options.`);
  window.open(`https://wa.me/919481234567?text=${msg}`, '_blank');
}
