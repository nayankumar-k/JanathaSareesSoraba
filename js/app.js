/**
 * Janatha Sarees - Soraba, Karnataka
 * Trending E-Commerce Engine (Bilingual Kannada & English, Glassmorphic & Saree Palette)
 * Responsive, mobile-first, zero video mentions, dynamic locale switching
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
    // Header & Announcement
    festiveBadge: "ಹಬ್ಬದ ಸೀಸನ್ 2026",
    announcement: "✨ ಮದುವೆ, ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಹಬ್ಬದ ಸೀಸನ್ ನೂತನ ಸಂಗ್ರಹಗಳು ಈಗ ಜನತಾ ಸ್ಯಾರೀಸ್ ಸೊರಬದಲ್ಲಿ ಲಭ್ಯವಿದೆ!",
    brandLocation: "ಸೊರಬ • ಶಿವಮೊಗ್ಗ",
    searchPlaceholder: "ಸ್ಯಾರೀಸ್, ಪುರುಷರ ಕುರ್ತಾ, ಮಕ್ಕಳ ಉಡುಪು ಹುಡುಕಿ...",
    wishlist: "ವಿಶ್‌ಲಿಸ್ಟ್",
    showroom: "ಶೋರೂಮ್",
    whatsapp: "WhatsApp",

    // Desktop Nav
    catAll: "ಎಲ್ಲಾ ಟ್ರೆಂಡ್ಸ್",
    catSarees: "ರೇಷ್ಮೆ ಸ್ಯಾರೀಸ್",
    catMen: "ಪುರುಷರ ಉಡುಪು",
    catKids: "ಮಕ್ಕಳ ಉಡುಪು",
    catOccasions: "ವಿವಾಹ & ಮುಹೂರ್ತ",
    catComfort: "ನೈಟ್‌ವೇರ್ & ಸ್ಪೋರ್ಟ್ಸ್",
    catLookbook: "ಸ್ಟೈಲ್ ಲುಕ್‌ಬುಕ್",
    catShowroom: "ಸೊರಬ ಶೋರೂಮ್",

    // Story Items
    storySarees: "ಸ್ಯಾರೀಸ್",
    storyMen: "ಪುರುಷರ ಉಡುಪು",
    storyKids: "ಮಕ್ಕಳ ಉಡುಪು",
    storyMuhurtham: "ಮುಹೂರ್ತ",
    storyComfort: "ಆರಾಮದಾಯಕ",
    storyTrends: "ಟ್ರೆಂಡ್ಸ್",
    storyShowroom: "ಶೋರೂಮ್",

    // Hero Banner
    heroBadge: "🌸 ಭವ್ಯ ಹಬ್ಬದ ಸೀಸನ್ ಸಂಗ್ರಹ 2026",
    heroHeading: "ಶುದ್ಧ ರೇಷ್ಮೆ ಸೀರೆಗಳು & ಆಧುನಿಕ ವಿನ್ಯಾಸ. <span class=\"gold-gradient-text\">ಪ್ರತಿಯೊಂದು ಕುಟುಂಬಕ್ಕೂ ಕೈಗೆಟುಕುವ ದರ.</span>",
    heroKannadaSubtitle: "ಪ್ರತಿಯೊಂದು ಶುಭ ಸಮಾರಂಭಕ್ಕೂ ಜನತಾ ಸ್ಯಾರೀಸ್ ಸೊರಬ",
    heroDesc: "ಮದುವೆ ಮುಹೂರ್ತ, ಗೃಹಪ್ರವೇಶ, ಹಬ್ಬ ಹರಿದಿನಗಳಿಂದ ಹಿಡಿದು ನಿತ್ಯ ಧರಿಸುವ ಆರಾಮದಾಯಕ ಉಡುಪುಗಳವರೆಗೆ — ಮಹಿಳೆಯರು, ಪುರುಷರು ಮತ್ತು ಮಕ್ಕಳ ಉಡುಪುಗಳ ಬೃಹತ್ ಸಂಗ್ರಹ ಮಗ್ಗದ ನೇರ ಬೆಲೆಗೆ ಜನತಾ ಸ್ಯಾರೀಸ್‌ನಲ್ಲಿ ಲಭ್ಯ.",
    heroTag1: "✦ 100% ಶುದ್ಧ ನೇಯ್ಗೆ",
    heroTag2: "✦ ಮಗ್ಗದ ನೇರ ಬೆಲೆ",
    heroTag3: "✦ ಸಂಪೂರ್ಣ ಕುಟುಂಬದ ಮಳಿಗೆ",
    heroTag4: "✦ ಸೀರೆ ಬಾರ್ಡರ್ & ಪಲ್ಲು HD ಫೋಟೋಗಳು",
    ctaExplore: "ಸಂಗ್ರಹಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    ctaWhatsApp: "ನೇರ WhatsApp ವಿಚಾರಣೆ",

    // Trust Strip
    trust1Title: "10,000+ ಸೀರೆಗಳ ವೈವಿಧ್ಯ",
    trust1Sub: "ಕಾಂಚೀವರಂ, ಬನಾರಸಿ, ಕಾಟನ್, ಆರ್ಗನ್ಜಾ",
    trust2Title: "ಮಗ್ಗದ ನೇರ ಬೆಲೆ",
    trust2Sub: "ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದ ಪ್ರಾಮಾಣಿಕ ದರ",
    trust3Title: "HD ಸೀರೆ ಫೋಟೋಗಳು",
    trust3Sub: "ಬಾರ್ಡರ್ & ಪಲ್ಲು ಫೋಟೋ WhatsApp ನಲ್ಲಿ ಪಡೆಯಿರಿ",
    trust4Title: "ಸೊರಬದ ವಿಶ್ವಾಸಾರ್ಹ ಮಳಿಗೆ",
    trust4Sub: "ರಥಬೀದಿ ಶೋರೂಮ್ - ವಾರದ ಎಲ್ಲಾ 7 ದಿನ ತೆರೆದಿರುತ್ತದೆ",

    // Shop by Category
    shopByCatHeading: "ವಿಭಾಗವಾರು ಶಾಪಿಂಗ್ <span>ವಿಭಾಗವಾರು ಉಡುಪುಗಳು</span>",
    viewAll: "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ →",
    catTile1Name: "ರೇಷ್ಮೆ & ಬ್ರೈಡಲ್ ಸ್ಯಾರೀಸ್",
    catTile1Offer: "ಮಗ್ಗದ ನೇರ ಬೆಲೆ",
    catTile2Name: "ಪುರುಷರ ಪಂಚೆ & ಕುರ್ತಾ",
    catTile2Offer: "ವರನ ವಿವಾಹ ಸೆಟ್‌ಗಳು",
    catTile3Name: "ಮಕ್ಕಳ ಪಟ್ಟು ಪಾವಡೆ",
    catTile3Offer: "ಮೃದುವಾದ ಶುದ್ಧ ಸಿಲ್ಕ್",
    catTile4Name: "ಮದುವೆ ಮುಹೂರ್ತ ಕಾಂಬೋ",
    catTile4Offer: "ಹೋಲ್‌ಸೇಲ್ ಫ್ಯಾಮಿಲಿ ಕಾಂಬೋ",
    catTile5Name: "ಕಾಟನ್ ನೈಟ್‌ವೇರ್",
    catTile5Offer: "100% ಪ್ಯೂರ್ ಸಾಫ್ಟ್ ಕಾಟನ್",
    catTile6Name: "ಸ್ಪೋರ್ಟ್ಸ್ & ಟ್ರ್ಯಾಕ್ಸ್",
    catTile6Offer: "ಜಿಮ್ & ದಿನನಿತ್ಯದ ಉಡುಪು",

    // Catalog & Filters
    catalogHeading: "ನವೀನ ಟ್ರೆಂಡಿಂಗ್ ಸಂಗ್ರಹಗಳು <span>ನವೀನ ಸಂಗ್ರಹಗಳು</span>",
    showingAll: "ಎಲ್ಲಾ ಉಡುಪುಗಳು",
    sarees: "ಸ್ಯಾರೀಸ್",
    men: "ಪುರುಷರ ಉಡುಪು",
    kids: "ಮಕ್ಕಳ ಉಡುಪು",
    occasions: "ಶುಭ ಸಮಾರಂಭಗಳು",
    comfort: "ನೈಟ್‌ವೇರ್ & ಸ್ಪೋರ್ಟ್ಸ್",
    pillAll: "ಎಲ್ಲಾ ಉಡುಪುಗಳು",
    pillSarees: "ಸ್ಯಾರೀಸ್",
    pillMen: "ಪುರುಷರ ಉಡುಪು",
    pillKids: "ಮಕ್ಕಳ ಉಡುಪು",
    pillOccasions: "ಶುಭ ಸಮಾರಂಭಗಳು",
    pillComfort: "ನೈಟ್ & ಸ್ಪೋರ್ಟ್ಸ್",

    // Lookbook
    lookbookHeading: "ಟ್ರೆಂಡಿಂಗ್ ಲುಕ್‌ಬುಕ್ <span>ಸ್ಟೈಲ್ ಇನ್ಸ್‌ಪಿರೇಷನ್</span>",
    lookbookSub: "ಆಯ್ದ ಆಕರ್ಷಕ ವಿನ್ಯಾಸಗಳು",
    look1Badge: "ಟ್ರೆಂಡಿಂಗ್ ಪೇಸ್ಟಲ್",
    look1Title: "ಲ್ಯಾವೆಂಡರ್ ಆರ್ಗನ್ಜಾ & ಸ್ಕಾಲ್ಲಪ್ ಸೀರೆ",
    look1Sub: "ಹಗುರವಾದ ಫ್ಲೋರಲ್ ಕಸೂತಿಯೊಂದಿಗೆ ರಿಸೆಪ್ಷನ್ ಮತ್ತು ಪೂಜೆಗಳಿಗೆ ಜನಪ್ರಿಯವಾದ ನವೀನ ಸೀರೆ.",
    look2Badge: "ಪುರುಷರ ಹಬ್ಬದ ಉಡುಪು",
    look2Title: "ಆಲಿವ್ ನೆಹ್ರೂ ಜಾಕೆಟ್ & ಕ್ರೀಮ್ ಕುರ್ತಾ",
    look2Sub: "ಪ್ರೀಮಿಯಂ ಕಾಟನ್-ಸಿಲ್ಕ್ ಕುರ್ತಾ ಮತ್ತು ಆಧುನಿಕ ಟೆಕ್ಸ್ಚರ್ಡ್ ನೆಹ್ರೂ ಜಾಕೆಟ್ ಸೆಟ್.",
    look3Badge: "ರಾಯಲ್ ಬ್ರೈಡಲ್ ಸಿಲ್ಕ್",
    look3Title: "ಎಮರಾಲ್ಡ್ ಗ್ರೀನ್ & ಕ್ರಿಮ್ಸನ್ ಕಾಂಚೀವರಂ",
    look3Sub: "ಶುದ್ಧ ಜರಿ ಟೆಂಪಲ್ ಬಾರ್ಡರ್ ಹಾಗೂ ಭವ್ಯ ಕ್ರಿಮ್ಸನ್ ಪಲ್ಲು ಒಳಗೊಂಡ ಮುಹೂರ್ತ ಸ್ಯಾರಿ.",
    inquireLook: "WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ",

    // Occasions
    occasionsHeading: "ಶುಭ ಸಮಾರಂಭಗಳ ವಿಶೇಷ ಪ್ಯಾಕೇಜ್ <span>ಶುಭ ಸಮಾರಂಭಗಳ ವಿಶೇಷ</span>",
    occasionsSub: "ನೇರ ಸಗಟು ದರದ ಲಾಭ",
    occ1Badge: "💍 ಮದುವೆ & ಮುಹೂರ್ತ",
    occ1Title: "ವಿವಾಹ ಮುಹೂರ್ತ ಸಗಟು ಪ್ಯಾಕೇಜ್",
    occ1Desc: "ವಧುವಿನ ಕಾಂಚೀವರಂ, ವರನ ರೇಷ್ಮೆ ಪಂಚೆ-ಶಲ್ಯ, ಕುಟುಂಬದ ಸದಸ್ಯರ ಮ್ಯಾಚಿಂಗ್ ಉಡುಪುಗಳು ಹಾಗೂ ತಾಂಬೂಲ ರಿಟರ್ನ್ ಗಿಫ್ಟ್ ಸೀರೆಗಳು ಸಗಟು ದರದಲ್ಲಿ ಲಭ್ಯ.",
    occ1Btn: "ಮದುವೆ ಕನ್ಸಲ್ಟೇಶನ್ ಬುಕ್ ಮಾಡಿ",
    occ2Badge: "🏡 ಗೃಹಪ್ರವೇಶ",
    occ2Title: "ಗೃಹಪ್ರವೇಶ ಶುಭ ಸೆಟ್‌ಗಳು",
    occ2Desc: "ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಸತ್ಯನಾರಾಯಣ ಪೂಜೆಗೆ ಮಂಗಳಕರ ಅರಿಶಿನ ಹಳದಿ, ನವಿಲು ಹಸಿರು ಹಾಗೂ ಕುಂಕುಮ ಕೆಂಪು ರೇಷ್ಮೆ ಸೀರೆಗಳು.",
    occ2Btn: "ಗೃಹಪ್ರವೇಶ ಉಡುಪುಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    occ3Badge: "🎁 ಸಗಟು ತಾಂಬೂಲ",
    occ3Title: "ತಾಂಬೂಲ ರಿಟರ್ನ್ ಗಿಫ್ಟ್ ಸೀರೆಗಳು",
    occ3Desc: "ಮದುವೆ, ಉಪನಯನ ಹಾಗೂ ಶುಭ ಸಮಾರಂಭಗಳಿಗೆ ಆಕರ್ಷಕ ಗಿಫ್ಟ್ ಬಾಕ್ಸ್‌ಗಳಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟದ ಸೀರೆಗಳು ನೇರ ಮಗ್ಗದ ಸಗಟು ದರದಲ್ಲಿ.",
    occ3Btn: "ತಾಂಬೂಲ ಸೀರೆಗಳ ದರಪಟ್ಟಿ ಪಡೆಯಿರಿ",

    // Showroom Section
    showroomBadge: "📍 ಸೊರಬ ಶೋರೂಮ್ ಅನುಭವ",
    showroomHeading: "ಜನತಾ ಸ್ಯಾರೀಸ್‌ನಲ್ಲಿ <span class=\"gold-gradient-text\">ನೇರ ಶಾಪಿಂಗ್ ಅನುಭವ ಪಡೆಯಿರಿ</span>",
    showroomDesc: "ಸೊರಬದ ಐತಿಹಾಸಿಕ ರಥಬೀದಿಯಲ್ಲಿ (ಹಳೇ ಬಸ್ ಸ್ಟ್ಯಾಂಡ್ ಹತ್ತಿರ) ನೆಲೆಸಿರುವ ನಮ್ಮ ವಿಶಾಲವಾದ ಶೋರೂಮ್‌ಗೆ ಸೊರಬ, ಸಾಗರ, ಶಿರಸಿ ಹಾಗೂ ಶಿಕಾರಿಪುರದ ಕುಟುಂಬಗಳನ್ನು ಪ್ರೀತಿಯಿಂದ ಸ್ವಾಗತಿಸುತ್ತೇವೆ. ವಿಶಾಲವಾದ ಗದ್ದಿ ಕೌಂಟರ್‌ಗಳಲ್ಲಿ ಕುಳಿತು ಆರಾಮವಾಗಿ ನಿಮ್ಮ ಶುಭ ಸಮಾರಂಭದ ಸೀರೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.",
    storeLocLabel: "ಶೋರೂಮ್ ವಿಳಾಸ",
    storeLocVal: "ರಥಬೀದಿ, ಹಳೇ ಬಸ್ ಸ್ಟ್ಯಾಂಡ್ ಹತ್ತಿರ, ಸೊರಬ",
    storeTimeLabel: "ತೆರೆಯುವ ಸಮಯ",
    storeTimeVal: "ಬೆಳಗ್ಗೆ 9:30 – ರಾತ್ರಿ 9:00 (ವಾರದ ಎಲ್ಲಾ 7 ದಿನ)",
    storeHelpLabel: "ಸಹಾಯವಾಣಿ / WhatsApp",
    storeHelpVal: "+91 94812 34567",
    storePayLabel: "ಪಾವತಿ ವಿಧಾನಗಳು",
    storePayVal: "UPI (GPay/PhonePe), ನಗದು, ಡೆಬಿಟ್/ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್",
    btnMaps: "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ಮಾರ್ಗ ಪಡೆಯಿರಿ",
    btnShowroomNotify: "WhatsApp ಮೂಲಕ ಭೇಟಿ ತಿಳಿಸಿ",

    // FAQ
    faqHeading: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು <span>ಪ್ರಶ್ನೋತ್ತರ</span>",
    faqSub: "ಜನತಾ ಸ್ಯಾರೀಸ್ ಸಂಗ್ರಹಗಳು, ವಿಳಾಸ, ಸಗಟು ಪ್ಯಾಕೇಜ್ ಮತ್ತು WhatsApp ಸಂಪರ್ಕದ ಮಾಹಿತಿ.",
    faq1Q: "ಜನತಾ ಸ್ಯಾರೀಸ್ ಸೊರಬದಲ್ಲಿ ಎಲ್ಲಿ ನೆಲೆಸಿದೆ?",
    faq1A: "ಜನತಾ ಸ್ಯಾರೀಸ್ ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆಯ ಸೊರಬ ಪಟ್ಟಣದ ರಥಬೀದಿಯಲ್ಲಿ (ಹಳೇ ಬಸ್ ನಿಲ್ದಾಣದ ಸಮೀಪ) ನೆಲೆಸಿದೆ. ಸಾಗರ, ಶಿರಸಿ, ಶಿಕಾರಿಪುರ ಮತ್ತು ಆನವಟ್ಟಿಯಿಂದ ಬರುವ ಗ್ರಾಹಕರಿಗೆ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದಾದ ಸ್ಥಳದಲ್ಲಿದ್ದು ವಾಹನ ನಿಲುಗಡೆಗೆ ಸೂಕ್ತ ವ್ಯವಸ್ಥೆಯಿದೆ.",
    faq2Q: "ಜನತಾ ಸ್ಯಾರೀಸ್ ಸೊರಬದಲ್ಲಿ ಯಾವ ರೀತಿಯ ಸೀರೆಗಳು ಲಭ್ಯವಿವೆ?",
    faq2A: "ನಮ್ಮಲ್ಲಿ ಶುದ್ಧ ಮದುವೆ ಕಾಂಚೀವರಂ, ಹೊಳೆಯುವ ಬನಾರಸಿ ರೇಷ್ಮೆ, ಸಾಫ್ಟ್ ಸಿಲ್ಕ್, ಅಧಿಕೃತ ಇಳಕಲ್ ಕೈಮಗ್ಗದ ಸೀರೆಗಳು, ಆರ್ಗನ್ಜಾ, ಶಿಫಾನ್, ಜಾರ್ಜೆಟ್ ಮತ್ತು ನಿತ್ಯ ಬಳಕೆಯ ನೈಸರ್ಗಿಕ ಕಾಟನ್ ಸೀರೆಗಳು ಮಗ್ಗದ ನೇರ ಬೆಲೆಗೆ ದೊರೆಯುತ್ತವೆ.",
    faq3Q: "ಪುರುಷರ ಉಡುಪು, ಮಕ್ಕಳ ಉಡುಪು ಮತ್ತು ನೈಟ್‌ವೇರ್ ಕೂಡ ದೊರೆಯುತ್ತದೆಯೇ?",
    faq3A: "ಹೌದು! ಜನತಾ ಸ್ಯಾರೀಸ್ ಸಂಪೂರ್ಣ ಕುಟುಂಬದ ಶಾಪಿಂಗ್ ತಾಣವಾಗಿದೆ. ಸೀರೆಗಳ ಜೊತೆಗೆ ಪುರುಷರ ಶುದ್ಧ ರೇಷ್ಮೆ ಪಂಚೆ-ಶಲ್ಯ, ಕುರ್ತಾಗಳು, ಶರ್ಟ್‌ಗಳು, ಮಕ್ಕಳ ಪಟ್ಟು ಪಾವಡೆ ಮತ್ತು ಶೇರ್ವಾನಿ ಸೆಟ್‌ಗಳು, 100% ಕಾಟನ್ ನೈಟ್‌ವೇರ್ ಮತ್ತು ಸ್ಪೋರ್ಟ್ಸ್‌ವೇರ್ ಲಭ್ಯವಿದೆ.",
    faq4Q: "WhatsApp ಮೂಲಕ ವಿನ್ಯಾಸಗಳು, ಬಣ್ಣಗಳು ಅಥವಾ ಬೆಲೆಯನ್ನು ತಿಳಿಯುವುದು ಹೇಗೆ?",
    faq4A: "ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿರುವ ಯಾವುದೇ WhatsApp ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ +91 94812 34567 ಸಂಖ್ಯೆಗೆ ಮೆಸೇಜ್ ಮಾಡಿ. ನಮ್ಮ ಶೋರೂಮ್ ಸಿಬ್ಬಂದಿ ಸೀರೆಯ ಬಾರ್ಡರ್, ಪಲ್ಲುಗಳ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಫೋಟೋಗಳು ಹಾಗೂ ಬಟ್ಟೆಯ ವಿವರಗಳನ್ನು ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಎರಡರಲ್ಲೂ ಒದಗಿಸುತ್ತಾರೆ.",

    // Footer
    footerDesc: "ಸೊರಬದ ಅತ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ಕುಟುಂಬ ವಸ್ತ್ರ ಮಳಿಗೆ. ಶುದ್ಧ ಕೈಮಗ್ಗ, ಭವ್ಯ ವಿವಾಹ ರೇಷ್ಮೆ ಸೀರೆಗಳು, ಪುರುಷರ ಎತ್ನಿಕ್ ಉಡುಪು, ಮಕ್ಕಳ ಹಬ್ಬದ ಡ್ರೆಸ್ ಮತ್ತು ನಿತ್ಯೋಪಯೋಗಿ ಆರಾಮದಾಯಕ ಉಡುಪುಗಳು ಮಗ್ಗದ ಪ್ರಾಮಾಣಿಕ ದರದಲ್ಲಿ.",
    footerCatTitle: "ಉಡುಪುಗಳ ವಿಭಾಗ",
    footerOccTitle: "ಶುಭ ಸಮಾರಂಭಗಳು",
    footerStoreTitle: "ಸೊರಬ ಶೋರೂಮ್",
    footerAddress: "📍 ಹಳೇ ಬಸ್ ಸ್ಟ್ಯಾಂಡ್ ಹತ್ತಿರ, ರಥಬೀದಿ, ಸೊರಬ, ಶಿವಮೊಗ್ಗ, ಕರ್ನಾಟಕ 577429",
    footerTimings: "🕒 ಬೆಳಗ್ಗೆ 9:30 – ರಾತ್ರಿ 9:00 (ಸೋಮವಾರದಿಂದ ಭಾನುವಾರ)",
    footerPhones: "📞 08184 272233 / +91 94812 34567",
    footerCopy: "© 2026 ಜನತಾ ಸ್ಯಾರೀಸ್ ಸೊರಬ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ಕರ್ನಾಟಕದ ಕುಟುಂಬಗಳ ನವೀನ ಇ-ಕಾಮರ್ಸ್ ಕ್ಯಾಟಲಾಗ್.",
    footerBackToTop: "ಮೇಲಕ್ಕೆ ಹೋಗಿ ↑",

    // Mobile Bottom Nav
    navHome: "ಮುಖಪುಟ",
    navTrends: "ಟ್ರೆಂಡ್ಸ್",
    navWishlist: "ವಿಶ್‌ಲಿಸ್ಟ್",
    navChat: "ಚಾಟ್",

    // Wishlist Drawer
    drawerTitle: "ನನ್ನ ವಿಶ್‌ಲಿಸ್ಟ್ / ವಿಸಿಟ್ ಲಿಸ್ಟ್",
    emptyWishlist: "ನಿಮ್ಮ ವಿಶ್‌ಲಿಸ್ಟ್ ಖಾಲಿಯಾಗಿದೆ. ಸಂಗ್ರಹಗಳಿಂದ ಆಯ್ಕೆ ಮಾಡಿ!",
    emptyWishlistSub: "ಮದುವೆ ಮುಹೂರ್ತ, ಗೃಹಪ್ರವೇಶ ಅಥವಾ ನಿಮ್ಮ ಮುಂದಿನ ಶೋರೂಮ್ ಭೇಟಿಗಾಗಿ ಮೆಚ್ಚಿನ ಉಡುಪುಗಳನ್ನು ಉಳಿಸಿಕೊಳ್ಳಿ.",
    shareWishlistWhatsApp: "ವಿಶ್‌ಲಿಸ್ಟ್ ಅನ್ನು WhatsApp ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ",
    directWeaver: "ಮಗ್ಗದ ನೇರ ಬೆಲೆ",
    inquireWhatsApp: "WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
    addedWishlist: "ವಿಶ್‌ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ!",
    removedWishlist: "ವಿಶ್‌ಲಿಸ್ಟ್‌ನಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ"
  },
  en: {
    // Header & Announcement
    festiveBadge: "Festive 2026",
    announcement: "✨ Wedding, Gruha Pravesha & Festive Collections Now in Store in Soraba!",
    brandLocation: "SORABA • SHIVAMOGGA",
    searchPlaceholder: "Search for Sarees, Men's Kurtas, Kids Wear, Nightwear...",
    wishlist: "Wishlist",
    showroom: "Showroom",
    whatsapp: "WhatsApp",

    // Desktop Nav
    catAll: "All Trends",
    catSarees: "Sarees & Silks",
    catMen: "Men's Ethnic",
    catKids: "Kids Festive",
    catOccasions: "Wedding & Occasions",
    catComfort: "Nightwear & Sports",
    catLookbook: "Ajio Lookbook",
    catShowroom: "Soraba Showroom",

    // Story Items
    storySarees: "Sarees",
    storyMen: "Men's Wear",
    storyKids: "Kids Wear",
    storyMuhurtham: "Muhurtham",
    storyComfort: "Comfort",
    storyTrends: "Trends",
    storyShowroom: "Showroom",

    // Hero Banner
    heroBadge: "🌸 Grand Festive Collection 2026",
    heroHeading: "Pure Silks & Modern Drapes. <span class=\"gold-gradient-text\">Affordable For Every Family.</span>",
    heroKannadaSubtitle: "ಪ್ರತಿಯೊಂದು ಶುಭ ಸಮಾರಂಭಕ್ಕೂ ಜನತಾ ಸ್ಯಾರೀಸ್",
    heroDesc: "From Royal Wedding Muhurthams and Gruha Pravesha to vibrant festivals and everyday comfort — discover Karnataka's finest Sarees, Men's wear, Kids' festive sets, Nightwear, and Sportswear at direct weaver prices in Soraba.",
    heroTag1: "✦ 100% Genuine Weaves",
    heroTag2: "✦ Direct Weaver Value",
    heroTag3: "✦ Complete Family Store",
    heroTag4: "✦ Saree Border & Pallu HD Photos",
    ctaExplore: "Explore Collections",
    ctaWhatsApp: "Instant WhatsApp Inquiry",

    // Trust Strip
    trust1Title: "10,000+ Saree Varieties",
    trust1Sub: "Kanjeevaram, Banarasi, Cotton, Organza",
    trust2Title: "Direct Weaver Pricing",
    trust2Sub: "Zero middleman markup, honest value",
    trust3Title: "HD Saree Photos",
    trust3Sub: "Close-up border & pallu details on WhatsApp",
    trust4Title: "Soraba Heritage Store",
    trust4Sub: "Car Street showroom open all 7 days",

    // Shop by Category
    shopByCatHeading: "Shop By Category <span>ವಿಭಾಗವಾರು ಉಡುಪುಗಳು</span>",
    viewAll: "View All →",
    catTile1Name: "Silk & Bridal Sarees",
    catTile1Offer: "Direct Weaver Value",
    catTile2Name: "Men's Panche & Kurtas",
    catTile2Offer: "Groom & Festive Sets",
    catTile3Name: "Kids Festive Sets",
    catTile3Offer: "Skin-friendly Silks",
    catTile4Name: "Wedding Muhurtham",
    catTile4Offer: "Bulk Family Combos",
    catTile5Name: "Cotton Nightwear",
    catTile5Offer: "100% Pure Soft Cotton",
    catTile6Name: "Active Sportswear",
    catTile6Offer: "Gym & Daily Active",

    // Catalog & Filters
    catalogHeading: "Trending Looks & Catalog <span>ನವೀನ ಸಂಗ್ರಹಗಳು</span>",
    showingAll: "Showing All",
    sarees: "Sarees & Silks",
    men: "Men's Wear",
    kids: "Kids Wear",
    occasions: "Occasions",
    comfort: "Night & Sports",
    pillAll: "All Items",
    pillSarees: "Sarees",
    pillMen: "Men's Wear",
    pillKids: "Kids Wear",
    pillOccasions: "Occasions",
    pillComfort: "Night & Sports",

    // Lookbook
    lookbookHeading: "Ajio & Myntra Trends Lookbook <span>ಸ್ಟೈಲ್ ಇನ್ಸ್‌ಪಿರೇಷನ್</span>",
    lookbookSub: "Curated Editorial Drapes",
    look1Badge: "Trending Pastel",
    look1Title: "Lilac Organza & Delicate Scallop Drape",
    look1Sub: "Airy pastel weave with floral embroidery, loved for receptions & modern rituals.",
    look2Badge: "Men's Festive",
    look2Title: "Textured Olive Jacket & Cream Kurta",
    look2Sub: "Tailored slim-fit Nehru jacket paired with breathable cotton-silk kurta.",
    look3Badge: "Royal Bridal",
    look3Title: "Emerald Green & Crimson Kanjeevaram",
    look3Sub: "Pure zari temple border, auspicious crimson pallu for Muhurtham rituals.",
    inquireLook: "Inquire Look on WhatsApp",

    // Occasions
    occasionsHeading: "Occasions & Family Packages <span>ಶುಭ ಸಮಾರಂಭಗಳ ವಿಶೇಷ</span>",
    occasionsSub: "Direct Wholesale Value",
    occ1Badge: "💍 Muhurtham & Wedding",
    occ1Title: "Wedding Muhurtham Packages",
    occ1Desc: "Pure bridal Kanjeevarams, groom silk panche & shalya, family coordinated outfits, and taamboola return gift sarees at wholesale packages.",
    occ1Btn: "Book Wedding Consultation",
    occ2Badge: "🏡 Gruha Pravesha",
    occ2Title: "Gruha Pravesha Auspicious Sets",
    occ2Desc: "Auspicious turmeric yellow, peacock green, and kumkum red silks for the host couple and comfortable ethnic wear for visiting relatives.",
    occ2Btn: "Explore Gruha Pravesha Outfits",
    occ3Badge: "🎁 Bulk Taamboola",
    occ3Title: "Taamboola Return Gift Sarees",
    occ3Desc: "High-quality, beautiful return gift sarees in attractive gift boxes at unmatched weaver-direct rates for weddings, upanayana, and pujas.",
    occ3Btn: "Get Return Gift Quotation",

    // Showroom Section
    showroomBadge: "📍 Soraba Showroom Experience",
    showroomHeading: "Experience In-Store Shopping at <span class=\"gold-gradient-text\">Janatha Sarees</span>",
    showroomDesc: "Located in the heart of Soraba on historic Car Street (Ratha Beedi), our spacious showroom invites families from Soraba, Sagar, Sirsi, and Shikaripura to relax on comfortable gaddi counters while our staff unfold the finest silks for your special occasions.",
    storeLocLabel: "Store Location",
    storeLocVal: "Car Street, Near Old Bus Stand, Soraba",
    storeTimeLabel: "Store Timings",
    storeTimeVal: "9:30 AM – 9:00 PM (All 7 Days)",
    storeHelpLabel: "Helpline / WhatsApp",
    storeHelpVal: "+91 94812 34567",
    storePayLabel: "Payment Modes",
    storePayVal: "UPI (GPay/PhonePe), Cash, Cards",
    btnMaps: "Get Google Maps Directions",
    btnShowroomNotify: "Notify Showroom via WhatsApp",

    // FAQ
    faqHeading: "Frequently Asked Questions <span>ಪ್ರಶ್ನೋತ್ತರ</span>",
    faqSub: "Common questions about Janatha Sarees collections, location, bulk packages, and WhatsApp inquiry.",
    faq1Q: "Where is Janatha Sarees located in Soraba, Karnataka?",
    faq1A: "Janatha Sarees is centrally located near the Old Bus Stand on Car Street (Ratha Beedi) in Soraba town, Shivamogga District, Karnataka (PIN 577429). We are easily reachable by road from Sagar, Sirsi, Shikaripura, and Anavatti, with ample customer parking nearby.",
    faq2Q: "What types of sarees are available at Janatha Sarees Soraba?",
    faq2A: "We feature pure bridal Kanjeevarams, gleaming Banarasi silks, lightweight soft silks, authentic Ilkal handlooms, soft chiffons, floral georgettes, organza, and pure daily-wear cottons at honest weaver-direct prices.",
    faq3Q: "Do you also carry Men's wear, Kids' wear, and daily comfort clothing?",
    faq3A: "Yes! Janatha Sarees is an all-in-one family department store. We carry men's pure silk panche (dhoti), shalyas, wedding kurtas, formal shirts, kids' festive pattu pavada and sherwani sets, as well as 100% cotton nightwear and gym activewear.",
    faq4Q: "How can I check designs, colors, or prices on WhatsApp?",
    faq4A: "Simply click any WhatsApp button on this site or text +91 94812 34567. Our in-store team will share high-resolution photos of saree borders/pallus, authentic fabric details, and answer your questions in both Kannada and English.",

    // Footer
    footerDesc: "Soraba's most trusted family retail fashion house. Pure handlooms, grand bridal silks, men's royal ethnic attire, kids festive sets, and daily comfort wear at honest direct weaver pricing.",
    footerCatTitle: "Categories",
    footerOccTitle: "Occasions",
    footerStoreTitle: "Soraba Showroom",
    footerAddress: "📍 Near Old Bus Stand, Car Street (ರಥಬೀದಿ), Soraba, Shivamogga, Karnataka 577429",
    footerTimings: "🕒 9:30 AM – 9:00 PM (Monday to Sunday)",
    footerPhones: "📞 08184 272233 / +91 94812 34567",
    footerCopy: "© 2026 Janatha Sarees Soraba. All rights reserved. Trending e-commerce catalog for Karnataka families.",
    footerBackToTop: "Back to Top ↑",

    // Mobile Bottom Nav
    navHome: "Home",
    navTrends: "Trends",
    navWishlist: "Wishlist",
    navChat: "Chat",

    // Wishlist Drawer
    drawerTitle: "My Wishlist / Visit List",
    emptyWishlist: "Your wishlist is empty. Tap the heart on items you love!",
    emptyWishlistSub: "Save looks for wedding Muhurthams, Gruha Pravesha, or your upcoming showroom visit to Soraba.",
    shareWishlistWhatsApp: "Share Wishlist on WhatsApp",
    directWeaver: "Direct Weaver Value",
    inquireWhatsApp: "Inquire on WhatsApp",
    addedWishlist: "Added to Wishlist!",
    removedWishlist: "Removed from Wishlist"
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const switchBtns = document.querySelectorAll('[data-lang-btn]');
  const savedLang = localStorage.getItem('janatha_lang');
  
  if (savedLang && (savedLang === 'kn' || savedLang === 'en')) {
    setLanguage(savedLang);
  } else {
    setLanguage('en');
  }

  // Handle clicks on any language switcher button anywhere on the page
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-lang-btn]');
    if (!btn) return;
    const targetLang = btn.getAttribute('data-lang-btn');
    if (targetLang === 'kn' || targetLang === 'en') {
      setLanguage(targetLang);
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('janatha_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  if (lang === 'kn') {
    document.body.classList.add('lang-kn');
  } else {
    document.body.classList.remove('lang-kn');
  }

  // Sync all language switcher buttons across header, mobile header, top bar
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    if (btn.getAttribute('data-lang-btn') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const dict = translations[lang] || translations.en;

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Translate placeholders for inputs
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict && dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Translate titles / aria
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict && dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  updateActiveCategoryText();
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
      <div class="empty-products-state">
        <p class="empty-title">
          ${currentLang === 'kn' ? 'ಯಾವುದೇ ಉಡುಪುಗಳು ಕಂಡುಬಂದಿಲ್ಲ' : 'No items match your search'}
        </p>
        <p class="empty-sub">
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
    const whatsappMsg = encodeURIComponent(`Namaskara Janatha Sarees Soraba! I saw "${item.title.en}" on your online trending catalog. Please share color options, close-up photos, fabric details, and direct weaver pricing.`);

    return `
      <article class="ecom-product-card" id="${item.id}">
        <div class="product-image-box">
          <img src="${item.image}" alt="${title} - Janatha Sarees Soraba" loading="lazy">
          <span class="floating-rating-tag"><span class="star">★</span> ${item.rating.replace('★', '').trim()}</span>
          <button class="floating-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlistItem('${item.id}')" title="${currentLang === 'kn' ? 'ವಿಶ್‌ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿಸಿ' : 'Save to Wishlist'}" aria-label="Toggle Wishlist">
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

  const storyItems = document.querySelectorAll('.story-item[data-category]');
  storyItems.forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.getAttribute('data-category');
      selectCategory(cat);
    });
  });

  const tiles = document.querySelectorAll('.cat-tile[data-category]');
  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const cat = tile.getAttribute('data-category');
      selectCategory(cat);
    });
  });

  const navLinks = document.querySelectorAll('.cat-nav-link[data-category]');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const cat = link.getAttribute('data-category');
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      selectCategory(cat);
    });
  });
}

function selectCategory(cat) {
  activeCategory = cat;

  document.querySelectorAll('.filter-pill[data-filter]').forEach(pill => {
    if (pill.getAttribute('data-filter') === cat) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

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
      const dict = translations[currentLang] || translations.en;
      if (list.length === 0) {
        alert(dict.emptyWishlist);
        return;
      }
      const wishProducts = products.filter(p => list.includes(p.id));
      const titles = wishProducts.map((p, idx) => `${idx + 1}. ${p.title[currentLang] || p.title.en} (${p.brand})`).join('%0A');
      const text = encodeURIComponent(`Namaskara Janatha Sarees Soraba! Here is my Wishlist / Store Visit List from your website:%0A%0A`) + titles + encodeURIComponent(`%0A%0APlease let me know availability and direct pricing when I visit the Soraba showroom.`);
      window.open(`https://wa.me/919481234567?text=${text}`, '_blank');
    });
  }
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlistDrawerBody');
  if (!container) return;

  const dict = translations[currentLang] || translations.en;
  const list = getWishlist();

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-wishlist-state">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin-bottom: 1rem; opacity: 0.5;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <p class="empty-title">
          ${dict.emptyWishlist}
        </p>
        <p class="empty-sub">
          ${dict.emptyWishlistSub}
        </p>
      </div>
    `;
    return;
  }

  const wishProducts = products.filter(p => list.includes(p.id));
  container.innerHTML = wishProducts.map(p => {
    const title = p.title[currentLang] || p.title.en;
    const valueBadge = p.valueBadge[currentLang] || p.valueBadge.en;

    return `
      <div class="wishlist-item-row">
        <img src="${p.image}" alt="${title}" class="wishlist-item-thumb">
        <div class="wishlist-item-info">
          <div class="wishlist-item-brand">${p.brand}</div>
          <div class="wishlist-item-title">${title}</div>
          <div class="wishlist-item-badge">${valueBadge}</div>
        </div>
        <button onclick="toggleWishlistItem('${p.id}')" class="wishlist-item-remove" title="Remove">✕</button>
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
  const msg = encodeURIComponent(`Namaskara Janatha Sarees Soraba! I am reaching out from your trending online website regarding: ${topic}. Please share details, close-up photos, and available options.`);
  window.open(`https://wa.me/919481234567?text=${msg}`, '_blank');
}
