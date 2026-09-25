/**
 * Generates the wpdoc.webkul.com homepage.
 *
 * Same layout and stylesheet as magento-doc.webkul.com, with WordPress and
 * WooCommerce content: the guide cards, category names and trust badges all
 * come from this site rather than being carried over from the Magento page.
 * Adobe, Hyva and Magento Contributor badges are deliberately absent — those
 * partnerships describe the Magento product line, not this one.
 *
 * Card titles and descriptions are read from each guide's own <title> and
 * meta description, so they stay in step with the guides themselves.
 *
 * Run:  node build-homepage.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const ORIGIN = "https://wpdoc.webkul.com";
const STORE = "https://store.webkul.com/woocommerce-plugins.html";

// Guides that always lead the grid, in this order.
const PINNED = ["woocommerce-marketplace", "pos-for-woocommerce"];

const esc = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ---------- guide inventory, read from the guides themselves ---------- */

// Titles some guides give themselves are placeholders ("Home", "Guide"), and
// one publishes no description. Those are the only hand-written entries.
const OVERRIDE = {
    "erp-for-woocommerce": {
        title: "WooCommerce ERP",
        desc: "Warehouse management, stock assignment, order fulfilment, purchasing, RFQs, purchase orders, internal transfers, and supplier and role management.",
    },
    "license-validator": { title: "License Validator" },
    "woocommerce-power-bi-connector": { title: "WooCommerce Power BI Connector" },
};

const CATEGORY = {
    marketplace: ["woocommerce-marketplace"],
    pos: [
        "pos-for-woocommerce",
        "square-pos-docs",
        "pos-globalpay-terminal-payment",
        "tranzila-payment-for-woocommerce-pos",
        "woocommerce-pos-avalara-tax",
        "kitchen-and-customer-screen-for-restaurant-pos",
    ],
    connectors: [
        "bagisto-connector",
        "unopim-connector",
        "woocommerce-ebay-connector",
        "woocommerce-ebay-item-compatibility-doc",
        "woocommerce-shopify-connector",
        "woocommerce-wcfm-marketplace-shopify-connector",
        "woocommerce-quickbooks-connector",
        "woocommerce-power-bi-connector",
        "woocommerce-icecat-connector",
        "woocommerce-aliexpress-dropship",
    ],
};

const read = (slug) => {
    for (const rel of [`${slug}/index.html`, `${slug}/documentation/index.html`]) {
        const abs = path.join(ROOT, rel);
        if (!fs.existsSync(abs)) continue;
        const h = fs.readFileSync(abs, "utf8");
        const t = h.match(/<title>([^<]*)<\/title>/);
        const d = h.match(/<meta name="description" content="([^"]*)"/);
        return {
            title: t ? t[1].split("|")[0].trim() : "",
            desc: d ? d[1].trim() : "",
        };
    }
    return { title: "", desc: "" };
};

const titleCase = (slug) =>
    slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(/\bAnd\b/g, "and")
        .replace(/\bWoocommerce\b/g, "WooCommerce")
        .replace(/\bWordpress\b/g, "WordPress")
        .replace(/\bPos\b/g, "POS")
        .replace(/\bErp\b/g, "ERP")
        .replace(/\bEan Upc\b/g, "EAN UPC")
        .replace(/\bPdf\b/g, "PDF")
        .replace(/\bUnopim\b/g, "UnoPim")
        .replace(/\bWcfm\b/g, "WCFM")
        .replace(/\bEbay\b/g, "eBay")
        .replace(/\bAliexpress\b/g, "AliExpress")
        .replace(/\bDoc$/, "");

const guides = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter(
        (e) =>
            e.isDirectory() &&
            !e.name.startsWith(".") &&
            !["sitemaps", "mcp-server", "edge", "trust", "node_modules"].includes(e.name),
    )
    .map((e) => e.name)
    .sort()
    // Marketplace and POS lead the grid; everything else queues behind them.
    .sort((a, b) => {
        const rank = (s) => {
            const i = PINNED.indexOf(s);
            return i === -1 ? PINNED.length : i;
        };
        return rank(a) - rank(b);
    })
    .map((slug) => {
        const found = read(slug);
        const o = OVERRIDE[slug] || {};
        let title = o.title || found.title;
        if (!title || /^(home|guide|documentation)$/i.test(title)) title = titleCase(slug);
        title = title.replace(/\s*Documentation$/i, "").trim();
        let desc = o.desc || found.desc || "";
        if (desc.length > 165) desc = `${desc.slice(0, 162).replace(/[\s,;:.]+\S*$/, "")}...`;
        const cat = Object.entries(CATEGORY).find(([, list]) => list.includes(slug));
        return { slug, title, desc, cat: cat ? cat[0] : "store" };
    });

const count = (c) => guides.filter((g) => g.cat === c).length;

const cards = guides
    .map(
        (g) => `          <a class="card" role="listitem" href="/${g.slug}/" data-cat="${g.cat}" data-search="${esc(
            `${g.title} ${g.desc}`.toLowerCase(),
        )}">
            <span class="eyebrow">User Guide</span>
            <strong>${esc(g.title)}</strong>
            <span class="card-desc">${esc(g.desc)}</span>
            <span class="card-cta">Read the guide &rarr;</span>
          </a>`,
    )
    .join("\n");

/* ---------- structured data (unchanged from the previous homepage) ---------- */

const WEBSITE = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Webkul WordPress Documentation",
    alternateName: "wpdoc.webkul.com",
    url: `${ORIGIN}/`,
    description: "Official documentation for Webkul's WordPress and WooCommerce plugins.",
    inLanguage: "en-US",
    publisher: { "@id": "https://webkul.com/#organization" },
};
const ORG = JSON.parse(
    fs
        .readFileSync(path.join(ROOT, "about.html"), "utf8")
        .match(/<script type="application\/ld\+json">(\{"@context":"https:\/\/schema\.org","@type":"Organization".*?\})<\/script>/)[1],
);
const ITEMLIST = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Webkul WordPress and WooCommerce plugin documentation",
    numberOfItems: guides.length,
    itemListElement: guides.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: g.title,
        url: `${ORIGIN}/${g.slug}/`,
    })),
};

const DESC =
    "User guides for Webkul's WordPress and WooCommerce plugins. Each guide covers installation, configuration, and day-to-day management.";
const TITLE = "WordPress & WooCommerce Documentation | Webkul";

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(TITLE)}</title>
  <meta name="description" content="${esc(DESC)}">
  <link rel="canonical" href="${ORIGIN}/">
  <link rel="icon" href="/favicon.ico">
  <link rel="stylesheet" href="/styles.css?v=1">
  <meta name="google-site-verification" content="yJE_o60JUoXk7z5DEzLaEBgFcFY_iMNMLF2Eieb7ZrU">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Webkul WordPress Documentation">
  <meta property="og:title" content="${esc(TITLE)}">
  <meta property="og:description" content="${esc(DESC)}">
  <meta property="og:url" content="${ORIGIN}/">
  <meta property="og:image" content="${ORIGIN}/woocommerce-marketplace/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Webkul WordPress and WooCommerce documentation">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@webkul">
  <meta name="twitter:title" content="${esc(TITLE)}">
  <meta name="twitter:description" content="${esc(DESC)}">
  <meta name="twitter:image" content="${ORIGIN}/woocommerce-marketplace/og-image.png">

  <!-- Agent discovery -->
  <link rel="ai-catalog" href="/.well-known/ai-catalog.json">
  <link rel="service-doc" href="/llms.txt" type="text/markdown">
  <link rel="service-desc" href="/openapi.json" type="application/vnd.oai.openapi+json;version=3.1">
  <link rel="api-catalog" href="/.well-known/api-catalog">
  <link rel="describedby" href="/.well-known/ai-catalog.json" type="application/json">

  <script type="application/ld+json">${JSON.stringify(WEBSITE)}</script>
  <script type="application/ld+json">${JSON.stringify(ORG)}</script>
  <script type="application/ld+json">${JSON.stringify(ITEMLIST)}</script>

  <script src="/webmcp.js" defer></script>
</head>
<body>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/" aria-label="Webkul WordPress Docs home">
        <img class="brand-logo" src="/webkul-logo.png" alt="" width="30" height="20">
        <span class="brand-name">Webkul</span>
        <span class="brand-divider" aria-hidden="true"></span>
        <span class="brand-context">WordPress Docs</span>
      </a>
      <nav class="header-nav" aria-label="External links">
        <a href="${STORE}" target="_blank" rel="noopener noreferrer">Store</a>
        <a href="https://webkul.uvdesk.com/" target="_blank" rel="noopener noreferrer" class="nav-cta">Support</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="hero-label">Documentation</p>
          <h1>WordPress &amp; WooCommerce <br>Plugin Documentation</h1>
          <p class="hero-sub">Everything you need to install, configure, customize and run Webkul WordPress and WooCommerce plugins.</p>
          <div class="hero-actions" aria-label="Primary documentation links">
            <a class="hero-button hero-button-primary" href="#products">
              <span>Browse Documentation</span>
              <span class="button-icon" aria-hidden="true">-&gt;</span>
            </a>
            <a class="hero-button hero-button-secondary" href="${STORE}" target="_blank" rel="noopener noreferrer">
              <span>View Products</span>
              <span class="button-icon" aria-hidden="true">-&gt;</span>
            </a>
          </div>
          <p class="hero-proof" aria-label="Trusted by 100,000 plus businesses worldwide">
            <span class="hero-stars" aria-hidden="true">★★★★★</span>
            <span>Trusted by 100,000+ businesses worldwide</span>
          </p>
        </div>

        <aside class="hero-doc-panel" aria-label="Documentation categories">
          <form class="hero-search" role="search" onsubmit="return false;">
            <svg class="hero-search-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.8 17.6a6.8 6.8 0 1 1 0-13.6 6.8 6.8 0 0 1 0 13.6Zm5.1-1.7 4.1 4.1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input type="search" id="doc-search" name="q" placeholder="Search documentation..." aria-label="Search documentation" aria-controls="products">
            <span class="hero-shortcut" aria-hidden="true">⌘ K</span>
          </form>
          <div class="hero-categories">
            <p>Categories</p>
            <a class="hero-category" href="#products" data-filter="marketplace">
              <span class="category-icon category-icon-blue" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M5 9h14l-1 11H6L5 9Z"/><path d="M8 9V7a4 4 0 0 1 8 0v2M9 13h6"/></svg>
              </span>
              <span>Marketplace</span>
            </a>
            <a class="hero-category" href="#products" data-filter="pos">
              <span class="category-icon category-icon-purple" aria-hidden="true">
                <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>
              </span>
              <span>Point of Sale</span>
            </a>
            <a class="hero-category" href="#products" data-filter="connectors">
              <span class="category-icon category-icon-green" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 0-5.7-5.7L11 7.3"/><path d="M14 10a4 4 0 0 0-5.7 0L6 12.3a4 4 0 0 0 5.7 5.7L13 16.7"/></svg>
              </span>
              <span>Connectors</span>
            </a>
            <a class="hero-category" href="#products" data-filter="store">
              <span class="category-icon category-icon-orange" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10"/></svg>
              </span>
              <span>Store Management</span>
            </a>
          </div>
          <a class="hero-panel-link" href="#products" data-filter="all">
            <span>View all documentation</span>
            <span aria-hidden="true">-&gt;</span>
          </a>
        </aside>
      </div>
    </section>

    <section class="stats"><div class="stat"><img class="badge-img medium-zoom-image" src="/woocommerce-marketplace/assets/woocommerce-featured-author.webp" alt="CodeCanyon Featured Author"><div class="badge-label">CodeCanyon<br><strong>Featured Author</strong></div></div><a class="stat" href="https://codecanyon.net/user/webkul" target="_blank" rel="noopener"><img class="badge-img" src="/woocommerce-marketplace/assets/author-level-10.webp" alt="CodeCanyon Author Level 10"><div class="badge-label">CodeCanyon<br><strong>Author Level 10</strong></div></a><div class="stat"><img class="badge-img medium-zoom-image" src="/woocommerce-marketplace/assets/github.webp" alt="WooCommerce Core Contributor"><div class="badge-label">WooCommerce<br><strong>Core Contributor</strong></div></div><a class="stat" href="https://www.google.com/search?q=webkul#lrd=0x390ce561c5555555:0xcfb40ae166ce6c21,1" target="_blank" rel="noopener"><svg class="badge-img g-logo" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path></svg><div class="badge-label"><span class="g-rating">4.5</span> <span class="stars">★★★★★</span><br><strong>Google Review</strong></div></a></section>

    <section class="products" id="products">
      <div class="container">
        <div class="products-head">
          <h2>WordPress &amp; WooCommerce plugin guides</h2>
          <p>Find setup, configuration, customization and usage documentation for Webkul's WordPress and WooCommerce plugins in one place.</p>
        </div>
        <div class="grid" role="list" aria-label="Product documentation">
${cards}
        </div>
        <p class="no-results" id="no-results" hidden>No guide matches that search. <a href="#products" data-filter="all">Show all ${guides.length} guides</a>.</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p>&copy; Copyright 2010-<span id="copyright-year">2026</span></p>
      <nav aria-label="Footer links">
        <a href="https://webkul.com/about-us/" target="_blank" rel="noopener noreferrer">About</a>
        <a href="https://webkul.com/contacts/" target="_blank" rel="noopener noreferrer">Contact</a>
        <a href="https://webkul.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy</a>
        <a href="https://webkul.com/" target="_blank" rel="noopener noreferrer">Company</a>
        <a href="${STORE}" target="_blank" rel="noopener noreferrer">Plugin Store</a>
        <a href="https://webkul.uvdesk.com/" target="_blank" rel="noopener noreferrer">Get Support</a>
      </nav>
    </div>
  </footer>

  <script>
    document.getElementById("copyright-year").textContent = new Date().getFullYear();

    // Filter the guide grid by text and by category. Progressive enhancement:
    // without JavaScript every card is already in the HTML and visible.
    (function () {
      var input = document.getElementById("doc-search");
      var cards = Array.prototype.slice.call(document.querySelectorAll(".card[data-search]"));
      var empty = document.getElementById("no-results");
      var cat = "all";

      function apply() {
        var q = (input && input.value || "").trim().toLowerCase();
        var shown = 0;
        cards.forEach(function (c) {
          var okCat = cat === "all" || c.getAttribute("data-cat") === cat;
          var okText = !q || c.getAttribute("data-search").indexOf(q) !== -1;
          var show = okCat && okText;
          c.hidden = !show;
          if (show) shown++;
        });
        if (empty) empty.hidden = shown !== 0;
      }

      if (input) input.addEventListener("input", apply);

      document.querySelectorAll("[data-filter]").forEach(function (el) {
        el.addEventListener("click", function () {
          cat = el.getAttribute("data-filter");
          if (input) input.value = "";
          apply();
        });
      });

      document.addEventListener("keydown", function (e) {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          if (input) input.focus();
        }
      });
    })();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, "index.html"), html);
console.log(`[homepage] wrote index.html — ${guides.length} guides`);
console.log(
    `[homepage] categories: marketplace ${count("marketplace")}, pos ${count("pos")}, connectors ${count(
        "connectors",
    )}, store ${count("store")}`,
);
const missing = guides.filter((g) => !g.desc);
if (missing.length) console.log(`[homepage] WARNING no description: ${missing.map((g) => g.slug).join(", ")}`);
