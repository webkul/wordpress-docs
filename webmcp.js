/**
 * WebMCP tool provider for wpdoc.webkul.com
 * https://webmachinelearning.github.io/webmcp/
 *
 * Exposes the documentation portal's real read-only operations to an agent
 * driving the browser. Every tool below performs an actual fetch against a
 * published URL — there are no stubs and nothing is simulated. All content is
 * public, so no tool needs or accepts credentials, and none of them mutate
 * anything.
 */
(function () {
  "use strict";

  var ORIGIN = "https://wpdoc.webkul.com";
  var MARKET = ORIGIN + "/woocommerce-marketplace";
  var QUICKBOOKS = ORIGIN + "/woocommerce-quickbooks-connector";
  var nav = typeof navigator !== "undefined" ? navigator : null;
  if (!nav || !nav.modelContext) return;

  var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  var cache = {};

  function get(url) {
    if (cache[url]) return cache[url];
    cache[url] = fetch(url, { headers: { Accept: "text/markdown, text/plain, */*" } }).then(
      function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status + " for " + url);
        return r.text();
      }
    );
    return cache[url];
  }

  function text(s) {
    return { content: [{ type: "text", text: s }] };
  }

  /* Parse "- [Title](url): description" lines out of an llms.txt document.
     `sections` limits parsing to specific "## " headings, so promotional
     entries under "## Optional" are not reported as documentation pages. */
  function parseIndex(body, sections) {
    var scope = body;
    if (sections && sections.length) {
      var parts = body.split(/^## /m);
      scope = parts
        .filter(function (p) {
          return sections.some(function (s) {
            return p.toLowerCase().indexOf(s.toLowerCase()) === 0;
          });
        })
        .join("\n");
    }
    var out = [];
    var re = /^- \[([^\]]+)\]\(([^)]+)\)(?::\s*(.*))?$/gm;
    var m;
    while ((m = re.exec(scope))) {
      out.push({ title: m[1], url: m[2], description: (m[3] || "").trim() });
    }
    return out;
  }

  var TOOLS = [
    {
      name: "search_webkul_documentation",
      description:
        "Full-text search across the WooCommerce Multi-Vendor Marketplace documentation (installation, configuration, commissions, payouts, vendor and admin workflows). Returns matching passages with the source page URL. Use this first when answering a how-to question about the plugin.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Words to search for, e.g. 'vendor commission' or 'minimum PHP version'.",
          },
          limit: {
            type: "integer",
            description: "Maximum passages to return.",
            minimum: 1,
            maximum: 20,
            default: 5,
          },
        },
        required: ["query"],
      },
      execute: function (args) {
        var q = String((args && args.query) || "").toLowerCase().trim();
        var limit = Math.min(Math.max(parseInt((args && args.limit) || 5, 10) || 5, 1), 20);
        if (!q) return Promise.resolve(text("Provide a non-empty query."));
        var terms = q.split(/\s+/).filter(Boolean);
        return get(MARKET + "/llms-full.txt").then(function (body) {
          var sections = body.split(/\n---\n/);
          var hits = [];
          sections.forEach(function (sec) {
            var srcM = sec.match(/<!-- source: ([^\s]+) -->/);
            // Sections before the first source marker are the corpus preamble,
            // not documentation. Skip them so a summary never outranks a page.
            if (!srcM) return;
            var src = srcM[1];
            sec.split(/\n\s*\n/).forEach(function (p) {
              var passage = p.replace(/<!-- source:[^>]*-->/g, "").trim();
              if (passage.length < 40) return;
              var low = passage.toLowerCase();
              var matched = 0;
              var occurrences = 0;
              terms.forEach(function (t) {
                var n = low.split(t).length - 1;
                if (n > 0) matched++;
                occurrences += n;
              });
              if (matched === 0) return;
              // Density beats raw count so a short, on-topic passage wins over
              // a long one that merely mentions the words.
              var score = occurrences / Math.sqrt(passage.length);
              if (/^#{1,6}\s/.test(passage)) score *= 1.5; // headings are strong signals
              // Passages containing every term always outrank partial matches.
              if (matched === terms.length) score += 1000;
              hits.push({ score: score, matched: matched, source: src, passage: passage.slice(0, 700) });
            });
          });
          hits.sort(function (a, b) { return b.score - a.score; });
          if (!hits.length) {
            return text(
              'No passage matched "' + q + '". Try fewer or broader words, or call ' +
                "list_webkul_documentation_pages to see what is covered."
            );
          }
          var exact = hits.filter(function (h) { return h.matched === terms.length; });
          var partial = exact.length === 0;
          var lines = hits.slice(0, limit).map(function (h, i) {
            return "## Result " + (i + 1) + "\nSource: " + h.source + "\n\n" + h.passage;
          });
          var header = partial
            ? "No passage contained every term. Showing the " +
              Math.min(limit, hits.length) +
              " closest partial match(es) — treat them as leads, not answers."
            : "Found " + exact.length + " passage(s) containing every term; showing " +
              Math.min(limit, exact.length) + ".";
          return text(header + "\n\n" + lines.join("\n\n"));
        });
      },
    },
    {
      name: "get_webkul_documentation_page",
      description:
        "Fetch one WooCommerce Multi-Vendor Marketplace documentation page as raw markdown. Use the slug from list_webkul_documentation_pages, e.g. 'installation' or 'commission-management'.",
      inputSchema: {
        type: "object",
        properties: {
          page: {
            type: "string",
            description: "Page slug, e.g. 'installation'. Use 'index' for the introduction.",
          },
        },
        required: ["page"],
      },
      execute: function (args) {
        var slug = String((args && args.page) || "").trim().replace(/^\/+|\.md$/g, "");
        if (!/^[a-z0-9-]+$/i.test(slug)) {
          return Promise.resolve(text("Invalid page slug. Use lowercase letters, digits and hyphens."));
        }
        var url = MARKET + "/documentation/" + slug + ".md";
        return get(url)
          .then(function (body) {
            return text("Source: " + url + "\n\n" + body);
          })
          .catch(function () {
            return get(MARKET + "/" + slug + ".md")
              .then(function (body) {
                return text("Source: " + MARKET + "/" + slug + ".md\n\n" + body);
              })
              .catch(function () {
                return text(
                  "No page '" + slug + "'. Call list_webkul_documentation_pages for valid slugs."
                );
              });
          });
      },
    },
    {
      name: "list_webkul_documentation_pages",
      description:
        "List the pages of the WooCommerce Multi-Vendor Marketplace documentation, each with a one-line description and URL. Use it to find the right page before fetching one.",
      inputSchema: { type: "object", properties: {} },
      execute: function () {
        return get(MARKET + "/llms.txt").then(function (body) {
          var items = parseIndex(body, ["Documentation"]);
          if (!items.length) return text("Index unavailable; read " + MARKET + "/llms.txt directly.");
          var lines = items.map(function (it) {
            var slug = it.url.replace(/^.*\//, "").replace(/\.md$/, "");
            return "- " + slug + " — " + it.title + (it.description ? ": " + it.description : "");
          });
          return text(items.length + " pages:\n\n" + lines.join("\n"));
        });
      },
    },
    {
      name: "list_webkul_plugin_guides",
      description:
        "List every Webkul WordPress/WooCommerce plugin that has documentation on this site, with its guide URL. Use it to check whether a given Webkul plugin is documented here before answering.",
      inputSchema: { type: "object", properties: {} },
      execute: function () {
        return get(ORIGIN + "/llms.txt").then(function (body) {
          var items = parseIndex(body, ["Plugin documentation"]);
          var lines = items.map(function (it) {
            return "- " + it.title + " — " + it.url;
          });
          return text(items.length + " guides:\n\n" + lines.join("\n"));
        });
      },
    },
    {
      name: "search_quickbooks_documentation",
      description:
        "Full-text search across the WooCommerce QuickBooks Online Connector documentation (installation, credentials, setup wizard, dashboard, auto sync, payment gateways, POS split payments, tax mapping, embedded reports, sync monitor, and FAQ). Returns matching passages with source page URLs.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search keywords, e.g. 'error 6240', 'pos split payment', 'profit and loss report', or 'penny rounding'.",
          },
          limit: {
            type: "integer",
            description: "Maximum passages to return.",
            minimum: 1,
            maximum: 20,
            default: 5,
          },
        },
        required: ["query"],
      },
      execute: function (args) {
        var q = String((args && args.query) || "").toLowerCase().trim();
        var limit = Math.min(Math.max(parseInt((args && args.limit) || 5, 10) || 5, 1), 20);
        if (!q) return Promise.resolve(text("Provide a non-empty query."));
        var terms = q.split(/\s+/).filter(Boolean);
        return get(QUICKBOOKS + "/llms-full.txt").then(function (body) {
          var sections = body.split(/\n---\n/);
          var hits = [];
          sections.forEach(function (sec) {
            var srcM = sec.match(/<!-- source: ([^\s]+) -->/);
            if (!srcM) return;
            var src = srcM[1];
            sec.split(/\n\s*\n/).forEach(function (p) {
              var passage = p.replace(/<!-- source:[^>]*-->/g, "").trim();
              if (passage.length < 40) return;
              var low = passage.toLowerCase();
              var matched = 0;
              var occurrences = 0;
              terms.forEach(function (t) {
                var n = low.split(t).length - 1;
                if (n > 0) matched++;
                occurrences += n;
              });
              if (matched === 0) return;
              var score = occurrences / Math.sqrt(passage.length);
              if (/^#{1,6}\s/.test(passage)) score *= 1.5;
              if (matched === terms.length) score += 1000;
              hits.push({ score: score, matched: matched, source: src, passage: passage.slice(0, 700) });
            });
          });
          hits.sort(function (a, b) { return b.score - a.score; });
          if (!hits.length) {
            return text(
              'No passage matched "' + q + '". Try broader keywords or call list_quickbooks_documentation_pages.'
            );
          }
          var exact = hits.filter(function (h) { return h.matched === terms.length; });
          var lines = hits.slice(0, limit).map(function (h, i) {
            return "## Result " + (i + 1) + "\nSource: " + QUICKBOOKS + "/quickbooks-connector/" + h.source + "\n\n" + h.passage;
          });
          var header = exact.length === 0
            ? "Showing closest partial match(es):"
            : "Found " + exact.length + " passage(s) containing every term; showing top " + Math.min(limit, exact.length) + ":";
          return text(header + "\n\n" + lines.join("\n\n"));
        });
      },
    },
    {
      name: "list_quickbooks_documentation_pages",
      description:
        "List all pages of the WooCommerce QuickBooks Connector documentation, with topic summaries and URLs. Call this to discover available topics before searching.",
      inputSchema: { type: "object", properties: {} },
      execute: function () {
        return get(QUICKBOOKS + "/llms.txt").then(function (body) {
          var items = parseIndex(body, ["Documentation Pages"]);
          if (!items.length) return text("Index unavailable; read " + QUICKBOOKS + "/llms.txt directly.");
          var lines = items.map(function (it) {
            var slug = it.url.replace(/^.*\//, "").replace(/\.html$/, "");
            return "- " + slug + " — " + it.title + (it.description ? ": " + it.description : "");
          });
          return text(items.length + " QuickBooks documentation pages:\n\n" + lines.join("\n"));
        });
      },
    },
  ];

  try {
    var opts = controller ? { signal: controller.signal } : undefined;
    if (typeof nav.modelContext.registerTool === "function") {
      TOOLS.forEach(function (t) {
        nav.modelContext.registerTool(t, opts);
      });
    } else if (typeof nav.modelContext.provideContext === "function") {
      nav.modelContext.provideContext({ tools: TOOLS });
    }
    window.addEventListener("pagehide", function () {
      if (controller) controller.abort();
    });
  } catch (e) {
    if (window.console && console.warn) console.warn("[webmcp] registration failed:", e);
  }
})();
