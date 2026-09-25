/**
 * Generates the domain-level pages for wpdoc.webkul.com that no single
 * product build owns:
 *
 *   about.html / contact.html / privacy.html   trust anchor pages
 *   woocommerce-marketplace.html               no-redirect shim (see below)
 *
 * The shim exists because GitHub Pages answers a directory path without a
 * trailing slash with a 301 whose body is a 49-character nginx notice.
 * Crawlers and audit tools that read the first response — rather than
 * following the redirect — therefore see an almost empty page instead of the
 * documentation. Publishing a real file at /woocommerce-marketplace.html
 * makes that path resolve to content with a 200, while /woocommerce-
 * marketplace/ keeps serving the directory index as before. The shim
 * declares the trailing-slash URL as canonical so search engines index one
 * copy only.
 *
 * Run from the repo root after syncing a product build:  node build-root-pages.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const ORIGIN = "https://wpdoc.webkul.com";

// Directories in this repo that are not plugin documentation.
const NON_GUIDE_DIRS = ["sitemaps", "mcp-server", "edge", "trust", "node_modules"];

/* ---------------- shared chrome ---------------- */

const STYLE = `
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body { margin:0; padding:3rem 1.5rem; background:#fff; color:#2c3e50; line-height:1.65;
         font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; }
  main { max-width:46rem; margin:0 auto; }
  h1 { font-size:1.9rem; margin:0 0 1rem; letter-spacing:-.02em; }
  h2 { font-size:1.15rem; margin:2.2rem 0 .6rem; }
  p, li { margin:0 0 .9rem; }
  a { color:#2b6be3; text-decoration:none; }
  a:hover { text-decoration:underline; }
  ul { padding-left:1.2rem; }
  .muted { color:#6b7785; font-size:.95rem; margin-top:2.5rem; }
  @media (prefers-color-scheme: dark) {
    body { background:#1b1b1f; color:#d6d6d8; } .muted { color:#9aa3ad; } a { color:#6ea1ff; }
  }
`;

const page = ({ slug, title, description, jsonld, body }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | Webkul WordPress Documentation</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${ORIGIN}/${slug}.html">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Webkul WordPress Documentation">
<meta property="og:title" content="${title} | Webkul WordPress Documentation">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${ORIGIN}/${slug}.html">
<meta property="og:image" content="${ORIGIN}/woocommerce-marketplace/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Webkul WordPress and WooCommerce documentation">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@webkul">
<meta name="twitter:title" content="${title} | Webkul WordPress Documentation">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${ORIGIN}/woocommerce-marketplace/og-image.png">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
<style>${STYLE}</style>
</head>
<body>
<main>
${body}
<p class="muted"><a href="${ORIGIN}/">Documentation home</a> · <a href="${ORIGIN}/about.html">About</a> · <a href="${ORIGIN}/contact.html">Contact</a> · <a href="${ORIGIN}/privacy.html">Privacy</a></p>
</main>
</body>
</html>
`;

/* ---------------- Organization identity ---------------- */
// Sourced from Webkul's own published schema on https://webkul.com/.
const ORG = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webkul Software",
    legalName: "Webkul Software Private Limited",
    url: "https://webkul.com/",
    logo: "https://cdnwebkul.webkul.com/wp-content/uploads/2021/08/webkul-logo-accent-sq.png",
    description:
        "Webkul builds B2B and B2C eCommerce, marketplace, hyperlocal, and mobile application products, and develops extensions for WooCommerce, Magento, Shopify, Odoo, and Bagisto.",
    foundingDate: "2010",
    address: {
        "@type": "PostalAddress",
        streetAddress: "H-28, ARV Park, Sector 63",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
    },
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "support@webkul.com",
            telephone: "+91-9870284067",
            url: "https://webkul.uvdesk.com/",
            availableLanguage: ["English"],
        },
        {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "support@webkul.com",
            telephone: "+91-9870284067",
            url: "https://store.webkul.com/contacts/",
            availableLanguage: ["English"],
        },
    ],
    sameAs: [
        "https://www.facebook.com/webkul",
        "https://x.com/webkul",
        "https://www.instagram.com/webkul/",
        "https://in.linkedin.com/company/webkul",
        "https://www.youtube.com/c/webkul",
        "https://codecanyon.net/user/webkul",
    ],
};

/* ---------------- pages ---------------- */

const PAGES = [
    {
        slug: "about",
        title: "About",
        description:
            "About Webkul Software and the wpdoc.webkul.com documentation portal for Webkul's WordPress and WooCommerce plugins.",
        jsonld: ORG,
        body: `
  <h1>About</h1>
  <p><strong>wpdoc.webkul.com</strong> is the official documentation portal for Webkul's WordPress and WooCommerce plugins. Each plugin has its own guide covering installation, configuration, and day-to-day use, written for store owners setting up a site and for developers integrating a plugin into an existing WooCommerce store.</p>

  <h2>About Webkul</h2>
  <p>Webkul Software is an eCommerce software company founded in <strong>2010</strong> by Vipin Sahu, Vinay Yadav, and Prakash Sahu, headquartered in <strong>Noida, Uttar Pradesh, India</strong>. Webkul builds B2B and B2C eCommerce, marketplace, hyperlocal, and mobile application products, and develops extensions for platforms including WooCommerce, Magento, Shopify, Odoo, Bagisto, and UnoPim.</p>
  <p>Webkul is a CodeCanyon Featured Author at Author Level 10 and contributes to WooCommerce core. The full product catalogue and corporate information are published at <a href="https://webkul.com/">webkul.com</a>, and plugins are sold through <a href="https://store.webkul.com/">store.webkul.com</a>.</p>

  <h2>What is documented here</h2>
  <p>The portal covers marketplace and multi-vendor plugins, point of sale, barcode and inventory tooling, connectors for eBay, Shopify, QuickBooks, Bagisto and UnoPim, payment and tax integrations, wallet and pre-order systems, and more. Start from the <a href="${ORIGIN}/">documentation home</a> for the full list.</p>

  <h2>Machine-readable documentation</h2>
  <p>Guides are published for automated consumption as well as for people. The WooCommerce Multi-Vendor Marketplace guide exposes an agent index at <a href="${ORIGIN}/woocommerce-marketplace/llms.txt">llms.txt</a> and a single-file corpus at <a href="${ORIGIN}/woocommerce-marketplace/llms-full.txt">llms-full.txt</a>; any page there is available as raw markdown by appending <code>.md</code> to its URL.</p>`,
    },
    {
        slug: "contact",
        title: "Contact",
        description:
            "How to reach Webkul Software for support, sales, and licensing of its WordPress and WooCommerce plugins.",
        jsonld: ORG,
        body: `
  <h1>Contact</h1>
  <p>The plugins documented on this site are published and supported by <strong>Webkul Software</strong>.</p>

  <h2>Support</h2>
  <p>Support is handled through Webkul's ticket system, and is included with a plugin licence.</p>
  <ul>
    <li><strong>Support portal:</strong> <a href="https://webkul.uvdesk.com/">webkul.uvdesk.com</a> — installation problems, configuration questions, and bug reports</li>
    <li><strong>Email:</strong> <a href="mailto:support@webkul.com">support@webkul.com</a></li>
    <li><strong>Store contact form:</strong> <a href="https://store.webkul.com/contacts/">store.webkul.com/contacts</a></li>
  </ul>
  <p>When reporting a problem, include your WordPress and WooCommerce versions, the plugin name and version, and the exact steps that reproduce the issue.</p>

  <h2>Sales and licensing</h2>
  <ul>
    <li><strong>Plugin store:</strong> <a href="https://store.webkul.com/">store.webkul.com</a> — pricing, licence terms, and purchase</li>
    <li><strong>Company site:</strong> <a href="https://webkul.com/">webkul.com</a> — services, case studies, and enterprise enquiries</li>
  </ul>

  <h2>Company</h2>
  <p><strong>Webkul Software Private Limited</strong><br>
  H-28, ARV Park, Sector 63<br>
  Noida, Uttar Pradesh 201301<br>
  India</p>
  <p>Phone: <a href="tel:+919870284067">+91 9870284067</a><br>
  Email: <a href="mailto:support@webkul.com">support@webkul.com</a></p>
  <p>Webkul is also on <a href="https://in.linkedin.com/company/webkul">LinkedIn</a>, <a href="https://x.com/webkul">X</a>, <a href="https://www.facebook.com/webkul">Facebook</a>, <a href="https://www.instagram.com/webkul/">Instagram</a>, and <a href="https://www.youtube.com/c/webkul">YouTube</a>.</p>`,
    },
    {
        slug: "privacy",
        title: "Privacy",
        description:
            "How the wpdoc.webkul.com documentation portal handles data: no accounts, no forms, and no analytics or advertising trackers.",
        jsonld: ORG,
        body: `
  <h1>Privacy</h1>
  <p>This page describes how the documentation portal at <strong>wpdoc.webkul.com</strong> handles data. It does not describe the plugins themselves, which run on your own WordPress installation and store their data in your own database, under your control.</p>

  <h2>What this site collects</h2>
  <p>This portal is a <strong>static website</strong>. It has no accounts, no login, no comment system, no contact form, and no newsletter signup. Nothing on these pages asks you to submit personal information, and nothing transmits information about you to Webkul.</p>
  <p><strong>No analytics or advertising trackers are loaded.</strong> These pages do not include Google Analytics, Google Tag Manager, advertising pixels, session recording, or any third-party tracking script.</p>

  <h2>Browser storage</h2>
  <p>Plugin guides store a single value in your browser's <code>localStorage</code> recording whether you chose the light or dark theme, so the preference survives navigation. It stays in your browser, is never transmitted, and can be cleared through your browser's site-data settings. No advertising or identification cookies are set.</p>

  <h2>Server logs</h2>
  <p>The site is served through standard web hosting and content delivery infrastructure. As with any website, those providers process ordinary technical request data — IP address, timestamp, requested URL, user agent, and referrer — to deliver pages, cache them, and protect against abuse. Webkul does not use these logs to build a profile of you.</p>

  <h2>Links to other sites</h2>
  <p>These pages link to external sites including the Webkul store, live demos, the support portal, and CodeCanyon. Once you follow a link, the privacy practices of that destination apply.</p>

  <h2>Plugin data</h2>
  <p>If you install a plugin, the data it creates lives on <strong>your</strong> site. Webkul does not receive or have access to that data through the plugin. Responsibility for handling your customers' personal data under applicable law, including GDPR, rests with you as the site operator.</p>

  <h2>Company privacy policy</h2>
  <p>Webkul's corporate privacy policy, covering purchases, support tickets, and other direct interactions, is published at <a href="https://webkul.com/privacy-policy/">webkul.com/privacy-policy</a>.</p>
  <p>Privacy questions can be sent to <a href="mailto:support@webkul.com">support@webkul.com</a> or raised through the <a href="https://webkul.uvdesk.com/">support portal</a>. Postal address: Webkul Software, H-28, ARV Park, Sector 63, Noida, Uttar Pradesh 201301, India.</p>`,
    },
];

for (const p of PAGES) {
    fs.writeFileSync(path.join(ROOT, `${p.slug}.html`), page(p));
    console.log(`[root-pages] wrote ${p.slug}.html`);
}

/* ---------------- root llms.txt ---------------- */

// Product guides, discovered from the directory listing so new guides appear
// here automatically. Title comes from each guide's own <title>.
const guides = fs
    .readdirSync(ROOT, { withFileTypes: true })
    // Repo folders that are not plugin guides. Without this, /edge/ and
    // /mcp-server/ were advertised in llms.txt as documentation and would
    // send agents to URLs that 404.
    .filter(
        (d) =>
            d.isDirectory() &&
            !d.name.startsWith(".") &&
            !NON_GUIDE_DIRS.includes(d.name),
    )
    .map((d) => d.name)
    .sort()
    .map((slug) => {
        // Fall back to a title-cased slug, never a raw one, for guides whose
        // page title is a generic placeholder like "Home".
        let title = slug
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
            .replace(/\bAliexpress\b/g, "AliExpress");
        for (const rel of [`${slug}/index.html`, `${slug}/documentation/index.html`]) {
            const p = path.join(ROOT, rel);
            if (!fs.existsSync(p)) continue;
            const m = fs.readFileSync(p, "utf8").match(/<title>([^<]*)<\/title>/);
            if (m) {
                const t = m[1].split("|")[0].trim();
                if (t && t.toLowerCase() !== "home" && t.toLowerCase() !== "guide") title = t;
                break;
            }
        }
        // Strip trailing "Documentation" and leftover dangling fragments such
        // as "— Official" left behind by splitting the page title on "|".
        title = title
            .replace(/\s+Documentation\s*$/i, "")
            .replace(/\s*[—–-]\s*Official\s*$/i, "")
            .replace(/\s*[—–-]\s*$/, "")
            .trim();
        return { slug, title };
    });

const llms = `# Webkul WordPress & WooCommerce Documentation

> Official documentation for Webkul Software's WordPress and WooCommerce plugins — multi-vendor marketplace, point of sale, barcode and inventory tooling, platform connectors, payment gateways, and tax integrations. Each plugin has its own guide covering requirements, installation, configuration, and day-to-day use.

**When to use this site.** Reach for these docs when you need to:

- Install, update, or license a specific Webkul plugin on a WordPress or WooCommerce site, including minimum WordPress, WooCommerce, and PHP versions.
- Configure a Webkul plugin's settings: marketplace commissions and payouts, POS terminals and receipts, barcode formats, connector credentials and sync rules, tax or payment gateway options.
- Answer "how do I…" questions about a Webkul plugin's admin, vendor, or cashier workflows, screen by screen.
- Troubleshoot a Webkul plugin already installed on a store, or confirm whether a capability exists before recommending or buying it.

Do not use this site for WooCommerce or WordPress core documentation, for plugins from other vendors, or for Webkul's Magento, Shopify, Odoo, or Bagisto products — those live on their own documentation sites linked from webkul.com.

**How to call us.** Guides are static HTML at predictable URLs: \`${ORIGIN}/<plugin-slug>/\`. The WooCommerce Multi-Vendor Marketplace guide publishes every page as raw markdown — append \`.md\` to any page URL — plus its own [llms.txt](${ORIGIN}/woocommerce-marketplace/llms.txt) index and a single-file corpus at [llms-full.txt](${ORIGIN}/woocommerce-marketplace/llms-full.txt). Site-wide page list: [sitemap.xml](${ORIGIN}/sitemap.xml). For anything not answered here, open a ticket at https://webkul.uvdesk.com/ rather than guessing.

## Plugin documentation

${guides.map((g) => `- [${g.title}](${ORIGIN}/${g.slug}/)`).join("\n")}

## About this publisher

- [About](${ORIGIN}/about.html): What this portal covers and who Webkul is.
- [Contact](${ORIGIN}/contact.html): Support, sales, and company contact details.
- [Privacy](${ORIGIN}/privacy.html): How this documentation site handles data.

Published by Webkul Software Private Limited, an eCommerce software company founded in 2010, at H-28, ARV Park, Sector 63, Noida, Uttar Pradesh 201301, India. Support: support@webkul.com, +91-9870284067, https://webkul.uvdesk.com/. Plugins are sold at https://store.webkul.com/.
`;
fs.writeFileSync(path.join(ROOT, "llms.txt"), llms);
console.log(`[root-pages] wrote llms.txt (${guides.length} guides)`);

/* ---------------- site-wide 404 ---------------- */
// The guide list is generated from the same discovery as llms.txt and the
// homepage, so a new guide appears here without anyone editing this file.
const notFoundHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
<title>404 — Page not found | Webkul WordPress Documentation</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body { margin:0; padding:3rem 1.5rem; background:#fff; color:#2c3e50; line-height:1.6;
         font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; }
  main { max-width:52rem; margin:0 auto; }
  h1 { font-size:1.9rem; margin:0 0 .5rem; letter-spacing:-.02em; }
  h2 { font-size:1rem; text-transform:uppercase; letter-spacing:.06em; color:#6b7785;
       margin:2.5rem 0 .75rem; font-weight:600; }
  p { margin:0 0 1rem; }
  a { color:#2b6be3; text-decoration:none; }
  a:hover { text-decoration:underline; }
  ul { list-style:none; padding:0; margin:0; }
  .links li { margin-bottom:.4rem; }
  .products { display:grid; grid-template-columns:repeat(auto-fill,minmax(20rem,1fr)); gap:.35rem 1.5rem; }
  code { background:rgba(43,107,227,.09); padding:.12em .4em; border-radius:4px; font-size:.92em; }
  .muted { color:#6b7785; font-size:.95rem; }
  @media (prefers-color-scheme: dark) {
    body { background:#1b1b1f; color:#d6d6d8; } h2,.muted { color:#9aa3ad; } a { color:#6ea1ff; }
  }
</style>
</head>
<body>
<main>
  <h1>404 — Page not found</h1>
  <p>This page does not exist on <strong>wpdoc.webkul.com</strong>, Webkul's documentation site for its WordPress and WooCommerce plugins.</p>

  <h2>Where to look next</h2>
  <ul class="links">
    <li><a href="${ORIGIN}/">Documentation home</a> — index of all plugin guides</li>
    <li><a href="${ORIGIN}/sitemap.xml">sitemap.xml</a> — machine-readable index of every page</li>
    <li><a href="${ORIGIN}/about.html">About</a>, <a href="${ORIGIN}/contact.html">Contact</a>, <a href="${ORIGIN}/privacy.html">Privacy</a></li>
    <li><a href="https://store.webkul.com/woocommerce-plugins.html">Webkul store</a> — plugin listings and pricing</li>
    <li><a href="https://webkul.uvdesk.com/">Support</a> — ticket-based help for licensed users</li>
  </ul>

  <h2>Documentation by plugin</h2>
  <ul class="products">
${guides.map((g) => `    <li><a href="/${g.slug}/">${g.title}</a></li>`).join("\n")}
  </ul>

  <h2>For AI agents</h2>
  <p class="muted">Machine-readable indexes are published at
    <a href="${ORIGIN}/llms.txt">/llms.txt</a> and
    <a href="${ORIGIN}/.well-known/ai-catalog.json">/.well-known/ai-catalog.json</a>.
    The WooCommerce Multi-Vendor Marketplace guide additionally publishes
    <a href="${ORIGIN}/woocommerce-marketplace/llms-full.txt">llms-full.txt</a>; any page
    in that guide is available as raw markdown by appending <code>.md</code> to its URL.</p>
</main>
</body>
</html>
`;
fs.writeFileSync(path.join(ROOT, "404.html"), notFoundHtml);
console.log(`[root-pages] wrote 404.html (${guides.length} guides listed)`);

/* ---------------- no-redirect shims ---------------- */

const SHIMS = ["woocommerce-marketplace"];
for (const slug of SHIMS) {
    const src = path.join(ROOT, slug, "index.html");
    if (!fs.existsSync(src)) {
        console.warn(`[root-pages] skip shim ${slug}: ${src} not found`);
        continue;
    }
    let html = fs.readFileSync(src, "utf8");
    const canonical = `${ORIGIN}/${slug}/`;
    html = html.replace(/<link rel="canonical"[^>]*>/g, "");
    html = html.replace(/<head>/, `<head><link rel="canonical" href="${canonical}">`);
    fs.writeFileSync(path.join(ROOT, `${slug}.html`), html);
    console.log(`[root-pages] wrote ${slug}.html (shim, canonical -> ${canonical})`);
}

/* ---------------- agent discovery: ARD, skills, content signals ---------------- */
// Only real, reachable resources are advertised here. This site has no HTTP
// API, no auth server, no MCP server, and no payment endpoints, so no
// api-catalog, OAuth, MCP or payment manifests are published — advertising
// endpoints that do not exist would send agents into dead ends.

import crypto from "node:crypto";

const WK = path.join(ROOT, ".well-known");
const SKILLS_DIR = path.join(WK, "agent-skills", "woocommerce-marketplace-docs");
fs.mkdirSync(SKILLS_DIR, { recursive: true });

/* --- a real skill: how to use these docs --- */
const SKILL_MD = `# Using the WooCommerce Multi-Vendor Marketplace documentation

Answer questions about Webkul's **WooCommerce Multi-Vendor Marketplace** WordPress
plugin — installing it, configuring it, and operating the marketplace it creates.

## When to use this skill

- Installing, updating, or licensing the plugin, including minimum WordPress,
  WooCommerce, and PHP versions.
- Configuring marketplace behaviour: commissions, withdrawals and payouts,
  vendor invoices, endpoints, Seller Central, product settings, vendor flags.
- Vendor-side workflows: registration, dashboard, products, orders,
  transactions, payouts, shipping zones, staff, KYC, vacation mode.
- Admin-side workflows: vendor approval and management, product assignment,
  commission management, feedback and queries, notifications, email setup.

Do not use it for WooCommerce or WordPress core questions, for marketplace
plugins from other vendors, or for Webkul's Magento, Shopify, Odoo, or Bagisto
products.

## How to read the documentation

Every page is published as raw markdown. Two equivalent forms work:

- Append \`.md\` to any page URL —
  \`${ORIGIN}/woocommerce-marketplace/documentation/installation.md\`
- Request the HTML URL with \`Accept: text/markdown\`

Start from one of:

- \`${ORIGIN}/woocommerce-marketplace/llms.txt\` — annotated index of every page
- \`${ORIGIN}/woocommerce-marketplace/llms-full.txt\` — the whole corpus in one file
- \`${ORIGIN}/woocommerce-marketplace/sitemap.xml\` — machine-readable page list

For a broad question, read \`llms.txt\` first and fetch only the pages you need.
For a question spanning many features, \`llms-full.txt\` is a single fetch.

## Answering well

- Cite the specific guide page you used.
- Version-sensitive answers belong to the Installation guide; do not state
  requirements from memory.
- The plugin stores all marketplace data on the user's own WordPress site.
- If the documentation does not answer it, say so and point to
  https://webkul.uvdesk.com/ rather than guessing.
`;
fs.writeFileSync(path.join(SKILLS_DIR, "SKILL.md"), SKILL_MD);
const digest = `sha256:${crypto.createHash("sha256").update(SKILL_MD).digest("hex")}`;

const skillsIndex = {
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills: [
        {
            name: "woocommerce-marketplace-docs",
            type: "skill-md",
            description:
                "Answer questions about installing, configuring, and operating Webkul's WooCommerce Multi-Vendor Marketplace plugin using its official documentation.",
            url: `${ORIGIN}/.well-known/agent-skills/woocommerce-marketplace-docs/SKILL.md`,
            digest,
        },
    ],
};
fs.writeFileSync(
    path.join(WK, "agent-skills", "index.json"),
    `${JSON.stringify(skillsIndex, null, 2)}\n`,
);
console.log("[root-pages] wrote .well-known/agent-skills/index.json + SKILL.md");

/* --- ARD capability manifest (ai-catalog data model) --- */
const FQDN = "wpdoc.webkul.com";
const aiCatalog = {
    specVersion: "1.0",
    host: {
        displayName: "Webkul WordPress & WooCommerce Documentation",
        identifier: `did:web:${FQDN}`,
    },
    entries: [
        {
            identifier: `urn:air:${FQDN}:index:portal-llms`,
            displayName: "Documentation portal index (llms.txt)",
            description:
                "Index of every Webkul WordPress/WooCommerce plugin guide, with when-to-use guidance for agents.",
            type: "text/markdown",
            url: `${ORIGIN}/llms.txt`,
            representativeQueries: [
                "which Webkul plugin documentation is available",
                "where are the docs for Webkul WooCommerce plugins",
                "list Webkul WordPress plugin guides",
            ],
        },
        {
            identifier: `urn:air:${FQDN}:index:marketplace-llms`,
            displayName: "WooCommerce Multi-Vendor Marketplace documentation index",
            description:
                "Annotated index of all 40 pages of the WooCommerce Multi-Vendor Marketplace guide, each available as raw markdown.",
            type: "text/markdown",
            url: `${ORIGIN}/woocommerce-marketplace/llms.txt`,
            representativeQueries: [
                "how do I install the WooCommerce multi vendor marketplace plugin",
                "how do I configure vendor commissions in WooCommerce",
                "how do vendor payouts and withdrawals work",
                "how do I approve a vendor registration",
            ],
        },
        {
            identifier: `urn:air:${FQDN}:corpus:marketplace-full`,
            displayName: "WooCommerce Multi-Vendor Marketplace full documentation corpus",
            description:
                "The complete marketplace documentation as a single markdown file, for one-shot retrieval.",
            type: "text/markdown",
            url: `${ORIGIN}/woocommerce-marketplace/llms-full.txt`,
            representativeQueries: [
                "full WooCommerce marketplace plugin documentation",
                "everything about Webkul multi vendor marketplace setup",
            ],
        },
        {
            identifier: `urn:air:${FQDN}:skill:marketplace-docs`,
            displayName: "WooCommerce Marketplace documentation skill",
            description:
                "Agent skill describing when and how to use the WooCommerce Multi-Vendor Marketplace documentation.",
            type: "text/markdown",
            url: `${ORIGIN}/.well-known/agent-skills/woocommerce-marketplace-docs/SKILL.md`,
            representativeQueries: [
                "how should an agent use the Webkul marketplace docs",
                "skill for WooCommerce multi vendor marketplace documentation",
            ],
        },
        {
            identifier: `urn:air:${FQDN}:index:sitemap`,
            displayName: "Site-wide sitemap",
            description: "Machine-readable index of every documentation page on the portal.",
            type: "application/xml",
            url: `${ORIGIN}/sitemap.xml`,
            representativeQueries: [
                "list all pages on wpdoc.webkul.com",
                "sitemap for Webkul WordPress documentation",
            ],
        },
    ],
};
fs.writeFileSync(path.join(WK, "ai-catalog.json"), `${JSON.stringify(aiCatalog, null, 2)}\n`);
console.log(`[root-pages] wrote .well-known/ai-catalog.json (${aiCatalog.entries.length} entries)`);

/* --- robots.txt: Content Signals + Agentmap --- */
// Values mirror the content-signal response header the edge already serves
// (ai-train=yes, search=yes, ai-input=yes) so the two declarations agree.
const robotsPath = path.join(ROOT, "robots.txt");
let robots = fs.readFileSync(robotsPath, "utf8");
robots = robots
    .replace(/^Content-Signal:.*\n/gm, "")
    .replace(/^Agentmap:.*\n/gm, "")
    .replace(/^# Content usage preferences.*\n/gm, "");
// The directive must sit inside the User-agent group: a blank line ends a
// group in robots.txt, so it goes on the line immediately after, with no
// blank line between.
if (/^User-agent: \*[^\S\n]*$/m.test(robots)) {
    robots = robots.replace(
        /^(User-agent: \*[^\S\n]*)\n\s*/m,
        `$1\nContent-Signal: ai-train=yes, search=yes, ai-input=yes\n`,
    );
}
// No Agentmap directive: it is a non-standard extension and Lighthouse reports
// it as "Unknown directive", a visible SEO error. It is also redundant here —
// the ARD manifest sits at its standard well-known path and is linked from the
// homepage head via <link rel="ai-catalog">, which is what scanners read.
fs.writeFileSync(robotsPath, robots);
console.log("[root-pages] updated robots.txt (Content-Signal, Agentmap)");

/* ---------------- OpenAPI + API catalog + auth.md ---------------- */
// This site has no write API, no accounts and no authentication. What it does
// have is a real, stable, read-only HTTP interface over the documentation:
// every page is retrievable as markdown and there are machine-readable
// indexes. The spec below describes only operations verified to return 200 —
// nothing aspirational.

const docPages = fs.existsSync(path.join(ROOT, "woocommerce-marketplace", "documentation"))
    ? fs
          .readdirSync(path.join(ROOT, "woocommerce-marketplace", "documentation"))
          .filter((f) => f.endsWith(".md") && !f.endsWith(".html.md"))
          .map((f) => f.replace(/\.md$/, ""))
          .sort()
    : [];

const guideSlugs = guides.map((g) => g.slug);

const openapi = {
    openapi: "3.1.0",
    info: {
        title: "Webkul WordPress Documentation Content API",
        version: "1.0.0",
        summary: "Read-only HTTP access to Webkul's WordPress and WooCommerce plugin documentation.",
        description:
            "A read-only content API over the documentation published at wpdoc.webkul.com. Every documentation page is retrievable as markdown, and machine-readable indexes list what is available.\n\nThere is no authentication, no registration, and no rate limit to negotiate: every operation is a plain unauthenticated GET over HTTPS, and responses carry `Access-Control-Allow-Origin: *`. There are no write operations — this API cannot create, modify, or delete anything.\n\nThe same content is also reachable by content negotiation: requesting a page's `.html` URL with `Accept: text/markdown` returns the markdown variant.",
        contact: { name: "Webkul Support", url: "https://webkul.uvdesk.com/", email: "support@webkul.com" },
        license: { name: "Documentation © Webkul Software", url: `${ORIGIN}/privacy.html` },
    },
    servers: [{ url: ORIGIN, description: "Production documentation host" }],
    externalDocs: { description: "Documentation portal", url: `${ORIGIN}/` },
    tags: [
        { name: "discovery", description: "Machine-readable indexes of available content." },
        { name: "content", description: "Documentation pages as markdown." },
    ],
    paths: {
        "/llms.txt": {
            get: {
                tags: ["discovery"],
                operationId: "getPortalIndex",
                summary: "Portal index for agents (llms.txt)",
                description:
                    "Index of every plugin guide on the portal, with when-to-use guidance, in llmstxt.org format.",
                responses: {
                    200: {
                        description: "The portal index.",
                        content: { "text/plain": { schema: { type: "string" } } },
                    },
                },
            },
        },
        "/sitemap.xml": {
            get: {
                tags: ["discovery"],
                operationId: "getSitemapIndex",
                summary: "Sitemap index for the whole portal",
                responses: {
                    200: {
                        description: "A sitemapindex XML document.",
                        content: { "application/xml": { schema: { type: "string" } } },
                    },
                },
            },
        },
        "/.well-known/ai-catalog.json": {
            get: {
                tags: ["discovery"],
                operationId: "getAiCatalog",
                summary: "ARD capability manifest",
                description: "Lists the machine-readable resources this site publishes.",
                responses: {
                    200: {
                        description: "An ai-catalog manifest.",
                        content: { "application/json": { schema: { type: "object" } } },
                    },
                },
            },
        },
        "/{guide}/llms.txt": {
            get: {
                tags: ["discovery"],
                operationId: "getGuideIndex",
                summary: "Index of a single plugin guide",
                description:
                    "Annotated list of every page in one plugin guide. Currently published for the woocommerce-marketplace guide.",
                parameters: [
                    {
                        name: "guide",
                        in: "path",
                        required: true,
                        description: "Plugin guide slug.",
                        schema: { type: "string", enum: guideSlugs },
                        example: "woocommerce-marketplace",
                    },
                ],
                responses: {
                    200: { description: "The guide index.", content: { "text/plain": { schema: { type: "string" } } } },
                    404: { description: "That guide does not publish an index." },
                },
            },
        },
        "/woocommerce-marketplace/llms-full.txt": {
            get: {
                tags: ["content"],
                operationId: "getMarketplaceCorpus",
                summary: "Entire marketplace documentation in one markdown file",
                description:
                    "The complete WooCommerce Multi-Vendor Marketplace documentation concatenated into a single markdown document, for one-shot retrieval instead of fetching pages individually.",
                responses: {
                    200: { description: "The full corpus.", content: { "text/plain": { schema: { type: "string" } } } },
                },
            },
        },
        "/woocommerce-marketplace/documentation/{page}.md": {
            get: {
                tags: ["content"],
                operationId: "getMarketplaceDocPage",
                summary: "One marketplace documentation page as markdown",
                description:
                    "Returns the raw markdown source of a documentation page, with a frontmatter block carrying its title and canonical source URL.",
                parameters: [
                    {
                        name: "page",
                        in: "path",
                        required: true,
                        description: "Page slug. Use `index` for the guide's introduction.",
                        schema: { type: "string", enum: docPages },
                        example: "installation",
                    },
                ],
                responses: {
                    200: {
                        description: "The page as markdown.",
                        content: { "text/markdown": { schema: { type: "string" } } },
                    },
                    404: { description: "No such page." },
                },
            },
        },
        "/woocommerce-marketplace/{page}.md": {
            get: {
                tags: ["content"],
                operationId: "getMarketplaceTopLevelPage",
                summary: "A top-level marketplace page as markdown",
                parameters: [
                    {
                        name: "page",
                        in: "path",
                        required: true,
                        schema: { type: "string", enum: ["index", "about", "contact", "privacy"] },
                        example: "about",
                    },
                ],
                responses: {
                    200: {
                        description: "The page as markdown.",
                        content: { "text/markdown": { schema: { type: "string" } } },
                    },
                    404: { description: "No such page." },
                },
            },
        },
    },
    components: { securitySchemes: {} },
    security: [],
};
fs.writeFileSync(path.join(ROOT, "openapi.json"), `${JSON.stringify(openapi, null, 2)}\n`);
console.log(`[root-pages] wrote openapi.json (${Object.keys(openapi.paths).length} operations, ${docPages.length} doc pages)`);

/* --- RFC 9727 API catalog (RFC 9264 linkset) --- */
const linkset = {
    linkset: [
        {
            anchor: `${ORIGIN}/`,
            "service-desc": [
                { href: `${ORIGIN}/openapi.json`, type: "application/vnd.oai.openapi+json;version=3.1", title: "OpenAPI 3.1 description of the documentation content API" },
            ],
            "service-doc": [
                { href: `${ORIGIN}/llms.txt`, type: "text/markdown", title: "Portal index for agents" },
                { href: `${ORIGIN}/`, type: "text/html", title: "Documentation portal" },
            ],
            describedby: [
                { href: `${ORIGIN}/.well-known/ai-catalog.json`, type: "application/json", title: "ARD capability manifest" },
            ],
            author: [{ href: "https://webkul.com/", title: "Webkul Software" }],
        },
        {
            anchor: `${ORIGIN}/woocommerce-marketplace/`,
            "service-desc": [
                { href: `${ORIGIN}/openapi.json`, type: "application/vnd.oai.openapi+json;version=3.1", title: "OpenAPI 3.1 description" },
            ],
            "service-doc": [
                { href: `${ORIGIN}/woocommerce-marketplace/llms.txt`, type: "text/markdown", title: "WooCommerce Multi-Vendor Marketplace documentation index" },
                { href: `${ORIGIN}/woocommerce-marketplace/`, type: "text/html", title: "WooCommerce Multi-Vendor Marketplace documentation" },
            ],
            item: [
                { href: `${ORIGIN}/woocommerce-marketplace/llms-full.txt`, type: "text/markdown", title: "Full documentation corpus" },
            ],
        },
    ],
};
const linksetJson = `${JSON.stringify(linkset, null, 2)}\n`;
fs.writeFileSync(path.join(WK, "api-catalog"), linksetJson);
fs.writeFileSync(path.join(WK, "api-catalog.json"), linksetJson);
console.log("[root-pages] wrote .well-known/api-catalog (+ .json)");

/* --- auth.md: honest, self-contained (no OAuth exists here) --- */
const authMd = `# auth.md

How automated agents authenticate with **wpdoc.webkul.com**, the documentation
portal for Webkul's WordPress and WooCommerce plugins.

## Short answer: no authentication is required

This host serves public documentation as static files. There is **no
authentication of any kind**, and nothing for an agent to register for.

- No API keys, tokens, or credentials exist for this host.
- There is no registration or provisioning endpoint. Nothing to call, nothing to
  request, nothing to rotate.
- No OAuth or OpenID Connect authorization server serves this host, so
  \`/.well-known/oauth-authorization-server\` and
  \`/.well-known/oauth-protected-resource\` are deliberately **not** published.
  An agent that expects them here should stop looking rather than retry.
- Every resource is world-readable over unauthenticated HTTPS \`GET\`, and
  responses carry \`Access-Control-Allow-Origin: *\`.

If a request to this host ever returns \`401\` or \`403\`, that is an
infrastructure fault, not an authentication requirement. Do not attempt to
obtain credentials in response.

## Agent audience

This host is for agents answering questions about installing, configuring, and
operating Webkul's WordPress and WooCommerce plugins. See
[/llms.txt](${ORIGIN}/llms.txt) for when to use it and when not to.

## How to read content

No credentials, no session, no negotiation:

\`\`\`
GET ${ORIGIN}/llms.txt
GET ${ORIGIN}/woocommerce-marketplace/llms.txt
GET ${ORIGIN}/woocommerce-marketplace/documentation/installation.md
\`\`\`

Append \`.md\` to any page URL for markdown, or request the \`.html\` URL with
\`Accept: text/markdown\`. The machine-readable description of these operations
is at [/openapi.json](${ORIGIN}/openapi.json), catalogued at
[/.well-known/api-catalog](${ORIGIN}/.well-known/api-catalog).

Please identify your agent in the \`User-Agent\` header. There is no rate limit
to negotiate, but the corpus is small — prefer
[llms-full.txt](${ORIGIN}/woocommerce-marketplace/llms-full.txt) in one request
over crawling every page.

## Where authentication does apply

Authentication belongs to systems documented *by* this site, not to this site:

- **The plugin itself** runs on your own WordPress installation. Its accounts,
  vendor logins, and API credentials are yours and are never held by Webkul.
- **Buying or licensing** a plugin happens at
  [store.webkul.com](https://store.webkul.com/), which has its own accounts.
- **Support tickets** are raised at
  [webkul.uvdesk.com](https://webkul.uvdesk.com/), which has its own accounts.

None of those credentials are issued, accepted, or validated by this host.

## Contact

Webkul Software Private Limited, H-28, ARV Park, Sector 63, Noida, Uttar Pradesh
201301, India — support@webkul.com, +91-9870284067.
`;
fs.writeFileSync(path.join(ROOT, "auth.md"), authMd);
console.log("[root-pages] wrote auth.md");

/* --- MCP server card: only when a real endpoint exists --- */
// A server card advertises a live transport endpoint. Static hosting cannot
// serve one, so the card is written only when MCP_ENDPOINT names a deployed
// server (see mcp-server/). Publishing a card that points at nothing would
// send agents to a dead URL, so the default is to publish nothing.
const MCP_ENDPOINT = process.env.MCP_ENDPOINT;
if (MCP_ENDPOINT) {
    const card = {
        serverInfo: { name: "webkul-wordpress-docs", version: "1.0.0" },
        protocolVersion: "2025-06-18",
        transport: { type: "streamable-http", endpoint: MCP_ENDPOINT },
        endpoint: MCP_ENDPOINT,
        capabilities: { tools: { listChanged: false } },
        authentication: { type: "none" },
        description:
            "Read-only access to Webkul's WooCommerce Multi-Vendor Marketplace documentation: search, list, and fetch pages as markdown.",
        documentation: `${ORIGIN}/llms.txt`,
    };
    fs.mkdirSync(path.join(WK, "mcp"), { recursive: true });
    fs.writeFileSync(path.join(WK, "mcp", "server-card.json"), `${JSON.stringify(card, null, 2)}\n`);
    console.log(`[root-pages] wrote .well-known/mcp/server-card.json -> ${MCP_ENDPOINT}`);
} else {
    console.log("[root-pages] skipped MCP server card (set MCP_ENDPOINT once the server is deployed)");
}

/* ---------------- publish/modify dates from git history ---------------- */
// A build timestamp would claim every page changed on every rebuild. Git knows
// when each page actually first appeared and when it last changed, so use that.
import { execFileSync } from "node:child_process";

const gitDate = (file, first) => {
    try {
        const args = first
            ? ["log", "--diff-filter=A", "--follow", "--format=%aI", "--", file]
            : ["log", "-1", "--format=%aI", "--", file];
        const out = execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();
        if (!out) return null;
        const lines = out.split("\n").filter(Boolean);
        return first ? lines[lines.length - 1] : lines[0];
    } catch {
        return null;
    }
};

let dated = 0;
const htmlFiles = [];
(function collect(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const abs = path.join(dir, e.name);
        if (e.isDirectory()) collect(abs);
        else if (e.name.endsWith(".html")) htmlFiles.push(abs);
    }
})(path.join(ROOT, "woocommerce-marketplace"));

for (const abs of htmlFiles) {
    const rel = path.relative(ROOT, abs);
    // Anchor to the path separator so real articles named "*-404.html"
    // (e.g. knowledge-base/troubleshooting/vendor-pages-404.html) are not
    // mistaken for the site's 404 error page.
    if (rel === "404.html" || rel.endsWith("/404.html")) continue;
    const published = gitDate(rel, true);
    // dateModified comes from the markdown twin, not the HTML. Built HTML
    // embeds content-hashed asset filenames, so every rebuild rewrites every
    // page and git would report all 43 as "modified today" — fake freshness.
    // The .md file changes only when the page's own content changes.
    const mdRel = rel.replace(/\.html$/, ".md");
    const modified =
        (fs.existsSync(path.join(ROOT, mdRel)) && gitDate(mdRel, false)) || gitDate(rel, false);
    if (!published || !modified) continue;

    let html = fs.readFileSync(abs, "utf8");
    html = html.replace(/\s*<meta property="article:(published|modified)_time"[^>]*>/g, "");
    const tags =
        `<meta property="article:published_time" content="${published}">` +
        `<meta property="article:modified_time" content="${modified}">`;
    // Fill the dates into the TechArticle block emitted by the docs build.
    html = html.replace(
        /<script type="application\/ld\+json">(\{"@context":"https:\/\/schema\.org","@type":"TechArticle".*?\})<\/script>/,
        (m, body) => {
            try {
                const o = JSON.parse(body);
                o.datePublished = published;
                o.dateModified = modified;
                return `<script type="application/ld+json">${JSON.stringify(o)}</script>`;
            } catch {
                return m;
            }
        },
    );
    html = html.replace("<!--/agent-meta-->", `${tags}<!--/agent-meta-->`);
    fs.writeFileSync(abs, html);
    dated++;
}
console.log(`[root-pages] stamped git publish/modify dates on ${dated} pages`);

/* ---------------- sitemaps ---------------- */
// The index referenced sitemaps/woocommerce-marketplace.xml — a crawler export
// from May 2026 with stale lastmod values and no about/contact/privacy. Rebuild
// it from the real page list, and give the root pages a sitemap of their own,
// which they never had.
const xmlEsc = (u) => u.replace(/&/g, "&amp;");
const urlset = (entries) =>
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
        .map(
            (e) =>
                `  <url>\n    <loc>${xmlEsc(e.loc)}</loc>\n` +
                (e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>\n` : "") +
                (e.priority ? `    <priority>${e.priority}</priority>\n` : "") +
                `  </url>`,
        )
        .join("\n") +
    `\n</urlset>\n`;

const mkEntries = htmlFiles
    .filter((f) => !f.endsWith("/404.html"))
    .map((abs) => {
        const rel = path.relative(ROOT, abs);
        const loc = `${ORIGIN}/${rel.replace(/index\.html$/, "").replace(/\\/g, "/")}`;
        const mdRel = rel.replace(/\.html$/, ".md");
        const lastmod =
            (fs.existsSync(path.join(ROOT, mdRel)) && gitDate(mdRel, false)) || gitDate(rel, false);
        const depth = rel.split("/").length;
        return { loc, lastmod, priority: depth <= 2 ? "1.00" : "0.80" };
    })
    .sort((a, b) => a.loc.localeCompare(b.loc));
fs.writeFileSync(path.join(ROOT, "sitemaps", "woocommerce-marketplace.xml"), urlset(mkEntries));
console.log(`[root-pages] rebuilt sitemaps/woocommerce-marketplace.xml (${mkEntries.length} urls)`);

const rootEntries = ["index.html", "about.html", "contact.html", "privacy.html"]
    .filter((f) => fs.existsSync(path.join(ROOT, f)))
    .map((f) => ({
        loc: `${ORIGIN}/${f === "index.html" ? "" : f}`,
        lastmod: gitDate(f, false),
        priority: f === "index.html" ? "1.00" : "0.60",
    }));
fs.writeFileSync(path.join(ROOT, "sitemaps", "root.xml"), urlset(rootEntries));
console.log(`[root-pages] wrote sitemaps/root.xml (${rootEntries.length} urls)`);

// Make sure the index lists every sitemap that exists, including the new one.
const smFiles = fs.readdirSync(path.join(ROOT, "sitemaps")).filter((f) => f.endsWith(".xml")).sort();
fs.writeFileSync(
    path.join(ROOT, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        smFiles.map((f) => `  <sitemap>\n    <loc>${ORIGIN}/sitemaps/${f}</loc>\n  </sitemap>`).join("\n") +
        `\n</sitemapindex>\n`,
);
console.log(`[root-pages] rebuilt sitemap.xml index (${smFiles.length} sitemaps)`);
