/**
 * Webkul WooCommerce QuickBooks Connector — AI Search & Knowledge Engine
 * Production Knowledge Base (61 granular topics) & Semantic Ranking Engine.
 */
(function () {
  "use strict";

  var DOCS_BASE = "/woocommerce-quickbooks-connector/quickbooks-connector/";

  var KNOWLEDGE_BASE = [{"id": "plugin-features", "triggers": ["plugin features", "all features", "what features are included", "features list", "what can this plugin do", "overview of capabilities"], "title": "Comprehensive Plugin Features & Functional Capabilities Overview", "answer": "WooCommerce QuickBooks Connector delivers enterprise-grade synchronization across 7 core capability areas:<br><br>1. <strong>Automated Real-Time Sync:</strong> Decoupled background export of orders, products, customers, and refund receipts powered by WooCommerce Action Scheduler.<br>2. <strong>Bidirectional Inventory Management:</strong> Real-time two-way stock synchronization with origin tagging to prevent infinite loops.<br>3. <strong>Accounting & Classification Controls:</strong> Flexible mapping for Sales Receipts vs Invoices, Class & Department tracking, and Penny-Rounding discrepancy reconciliation.<br>4. <strong>Live Financial Reports:</strong> Embedded Profit & Loss (P&L), Balance Sheet, Cash Flow, and A/R Aging reports streaming directly from Intuit into WordPress.<br>5. <strong>Operations Cockpit:</strong> Unified Dashboard with 7-day activity analytics and Needs Attention queue for one-click failure retries.<br>6. <strong>Enterprise Integrations:</strong> Native compatibility with Webkul POS (split payments & clearing accounts), HPOS (High-Performance Order Storage), and multi-currency.<br>7. <strong>100% Data Sovereignty:</strong> Direct server-to-server TLS connection with zero third-party cloud middleman, zero monthly subscriptions, and no transaction volume caps.", "path": "WooCommerce > QuickBooks Connector > Features", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/features.html", "pageTitle": "Plugin Features"}, {"id": "changelog-overview", "triggers": ["changelog", "version history", "release notes", "update notes", "all releases", "version list"], "title": "Changelog & Historical Version Release Notes", "answer": "The <strong>Changelog & Version History</strong> documents every milestone release of WooCommerce QuickBooks Connector from initial launch to the current v4.0.0 release:<br><br>\u2022 <strong>v4.0.0 (November 18, 2026):</strong> Bidirectional stock sync, interactive 4-step setup wizard, live P&L and Balance Sheet reports, executive KPI dashboard, Action Scheduler queue, POS split payments, and HMAC SHA-256 webhook verification.<br>\u2022 <strong>v3.0.2:</strong> HPOS (High-Performance Order Storage) support and customer billing/shipping address synchronization fixes.<br>\u2022 <strong>v3.0.1:</strong> Enhanced OAuth 2.0 token automated renewal mutex locks.<br>\u2022 <strong>v3.0.0:</strong> Sync Monitor introduction with Activity payload inspector and system log download.<br>\u2022 <strong>v2.2.0:</strong> Class and Department multi-level mapping support.<br>\u2022 <strong>v2.1.0:</strong> Currency code auto-conversion and exchange rate sync.<br>\u2022 <strong>v2.0.0:</strong> Multi-currency support and real-time webhook listener.", "path": "Documentation > Changelog & Version History", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/changelog.html", "pageTitle": "Changelog & Version History"}, {"id": "pricing-licensing", "triggers": ["pricing", "license cost", "how much does it cost", "subscription fee", "is it monthly", "lifetime license", "one time purchase", "how much", "cost", "price", "license price", "commercial cost", "software rent"], "title": "Transparent Lifetime Licensing vs Recurring SaaS Subscriptions", "answer": "WooCommerce QuickBooks Connector operates on a <strong>100% transparent single one-time license model</strong> with lifetime ownership:<br><br>\u2022 <strong>Zero Monthly Subscription Fees:</strong> Unlike SaaS connectors (such as MyWorks or Webgility) that charge recurring monthly fees, Webkul requires only a single purchase with no mandatory monthly bills.<br>\u2022 <strong>No Order Volume Penalties:</strong> SaaS platforms enforce order tier caps (charging steep penalties or blocking sync once you exceed 100 or 500 orders/month). Webkul supports <strong>unlimited order and product synchronizations</strong> at zero extra charge.<br>\u2022 <strong>No Hidden Addon Charges:</strong> Multi-currency, custom fee mapping, and class tracking are built right into the base plugin without requiring premium plan upgrades.<br>\u2022 <strong>Self-Hosted Direct Connection:</strong> Your accounting data flows directly between your WordPress server and Intuit QuickBooks Online via encrypted TLS with no cloud middleman storing or monetizing your financial records.", "path": "Codecanyon / Webkul Store > One-Time License", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/comparison.html#deep-dive-tco", "pageTitle": "Comparison & Superiority"}, {"id": "queue-system", "triggers": ["does it support queue system", "queue system", "action scheduler queue", "background processing queue", "how does queue work", "asynchronous order sync", "job queue", "worker queue", "queue", "support queue", "background queue", "async queue", "queue architecture", "scheduled actions queue"], "title": "Action Scheduler Queue System & Asynchronous Background Processing", "answer": "Yes! WooCommerce QuickBooks Connector features enterprise-grade <strong>Queue System support</strong> natively powered by <strong>WooCommerce Action Scheduler</strong> (the same high-performance job queue engine trusted by WooCommerce Core, Subscriptions, and Automattic):<br><br>\u2022 <strong>Decoupled Asynchronous Processing:</strong> Order synchronization, stock adjustments, and refund tasks are completely decoupled from customer checkout. When an order is placed, an asynchronous background job is dispatched to the queue. Customer checkout completes in milliseconds with zero lag or timeout risks.<br>\u2022 <strong>Automatic 3x Retries with Exponential Backoff:</strong> If Intuit API returns temporary network dropouts (HTTP 502/503), rate limits (HTTP 429), or gateway timeouts (HTTP 504), Action Scheduler automatically reschedules the job up to <strong>3 times</strong> with exponential backoff delays (e.g. 1 min, 5 min, 15 min).<br>\u2022 <strong>Quarantine & Needs Attention Isolation:</strong> Only jobs that fail all 3 retries are isolated in the <strong>Needs Attention Table</strong> on the Dashboard, preventing any stalled job from blocking other orders.<br>\u2022 <strong>Batching & Concurrency Controls:</strong> Heavy catalogs and high-volume order flows are processed in configurable batches (up to 100 per chunk) to protect server RAM and CPU limits.<br>\u2022 <strong>CLI & Crontab Worker Support:</strong> High-traffic stores can run queue workers directly via WP-CLI daemon (<code>wp action-scheduler run</code>) or system crontab, freeing the queue from frontend web-traffic dependencies.<br>\u2022 <strong>Live Queue Inspection:</strong> Admins can inspect pending, running, failed, and completed queue jobs under <strong>WooCommerce &gt; Status &gt; Scheduled Actions</strong> or within <strong>QuickBooks Connector &gt; Sync Monitor &gt; Activity</strong>.", "path": "WooCommerce > Status > Scheduled Actions & QuickBooks Connector > Sync Monitor", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/sync-monitor.html#action-scheduler-engine", "pageTitle": "Overview"}, {"id": "checkout-performance", "triggers": ["slow down checkout", "checkout speed", "performance impact", "frontend slowdown", "does sync block checkout", "fast checkout", "checkout latency", "order lag", "checkout performance", "does it slow down"], "title": "Checkout Speed & Performance: Zero Frontend Slowdown", "answer": "Does synchronization slow down the checkout page? <strong>No, not at all.</strong><br><br>\u2022 <strong>Asynchronous Decoupling:</strong> The connector never makes blocking HTTP calls to QuickBooks during customer checkout. When the customer clicks 'Place Order', WooCommerce finalizes the transaction, charges payment, and hands the order off to Action Scheduler in the background.<br>\u2022 <strong>Immediate Customer Confirmation:</strong> The customer receives the 'Order Received' thank-you page instantly with zero latency.<br>\u2022 <strong>Server-Side Background Dispatch:</strong> The connector's queue worker processes the QuickBooks API payload independently in a background process, ensuring your store maintains blazing fast conversion rates even during Black Friday traffic spikes.", "path": "QuickBooks Connector > Overview > Architecture", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/sync-monitor.html#action-scheduler-engine", "pageTitle": "Overview"}, {"id": "high-volume-scaling", "triggers": ["high volume", "traffic spikes", "rate limits", "throttle", "batch size", "concurrency", "flash sale", "black friday", "scale", "thousands of orders", "bulk scale", "intuit rate limit"], "title": "High-Volume Order Scaling & Intuit Rate Limit Management", "answer": "To handle stores processing thousands of orders per day or flash-sale traffic spikes:<br><br>\u2022 <strong>Intuit Rate Limit Protection:</strong> QuickBooks Online limits applications to 500 API calls per minute. The connector uses transient caching to reduce repetitive API requests by up to 75% for static accounts, tax codes, and payment methods.<br>\u2022 <strong>Chunked Batch Processing:</strong> During bulk order exports or catalog migrations, requests are chunked into optimized batches of up to 100 records per request.<br>\u2022 <strong>Concurrency Resilience:</strong> Action Scheduler distributes workload across concurrent queue runners without race conditions.<br>\u2022 <strong>WP-CLI Worker Scaling:</strong> Enterprise stores can run multi-threaded background workers via system cron or WP-CLI (<code>wp action-scheduler run --batch-size=100 --force</code>).", "path": "QuickBooks Connector > Sync Monitor & Overview", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/sync-monitor.html#action-scheduler-engine", "pageTitle": "Overview"}, {"id": "webhook-architecture", "triggers": ["webhooks", "webhook", "webhook queue", "hmac sha256", "intuit verifier token", "real time webhook", "incoming webhook", "webhook verification", "listen to quickbooks", "does it support webhooks"], "title": "QuickBooks Webhooks Architecture & HMAC SHA-256 Verification", "answer": "Does the connector support incoming QuickBooks Webhooks? <strong>Yes!</strong><br><br>\u2022 <strong>Real-Time Inbound Event Listening:</strong> QuickBooks Online can notify WooCommerce whenever products, inventory quantities, customers, or invoices are updated directly in QuickBooks.<br>\u2022 <strong>Cryptographic HMAC SHA-256 Verification:</strong> Every inbound webhook payload is cryptographically validated using your Intuit Verifier Token and HMAC SHA-256 signatures before any data is accepted, preventing spoofing and replay attacks.<br>\u2022 <strong>Asynchronous Webhook Queue:</strong> Incoming webhook events are immediately written to the Action Scheduler queue rather than processed in the HTTP webhook reception thread, preventing HTTP 504 timeouts from Intuit.", "path": "QuickBooks Connector > Auto Sync > Webhook Settings", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/auto-sync.html", "pageTitle": "Auto Sync Settings"}, {"id": "data-loss-offline", "triggers": ["api down", "offline", "network outage", "data loss", "api timeout", "quickbooks down", "server outage", "what happens if quickbooks is down", "internet disconnect", "server crash", "downtime recovery"], "title": "Offline Resiliency & Intuit API Downtime Recovery", "answer": "What happens if Intuit's servers go down or your internet connection drops? <strong>Zero data loss.</strong><br><br>\u2022 <strong>Non-Destructive Local Storage:</strong> All WooCommerce orders, customer profiles, and product records remain 100% intact in your WordPress database.<br>\u2022 <strong>Sync Status Persistence:</strong> Unsynced orders remain marked with the red status flag in WooCommerce.<br>\u2022 <strong>Automatic Retries:</strong> Action Scheduler pauses and retries jobs when Intuit recovers.<br>\u2022 <strong>Needs Attention Queue:</strong> Any orders that exhaust retries are held safely in the <strong>Needs Attention Queue</strong> on the Dashboard. When Intuit service is restored, simply click <strong>Sync Now</strong> to export all pending transactions.", "path": "QuickBooks Connector > Dashboard > Needs Attention", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/faq-notes.html", "pageTitle": "FAQ & Notes"}, {"id": "multi-currency", "triggers": ["multi currency", "currency", "foreign currency", "exchange rate", "multiple currencies", "eur gbp", "currency conversion", "does it support multi currency", "international currency"], "title": "Multi-Currency Support & Automated Exchange Rates", "answer": "Does the connector support multi-currency stores? <strong>Yes!</strong><br><br>\u2022 <strong>Native Multi-Currency Transactions:</strong> When WooCommerce Multivendor, WOOCS, or Curcy is used, orders placed in foreign currencies (e.g. EUR, GBP, CAD) are exported to QuickBooks in that exact order currency.<br>\u2022 <strong>Intuit Exchange Rates:</strong> QuickBooks Online applies its daily international exchange rate or your custom configured exchange rate to convert transactions to your home currency.<br>\u2022 <strong>Customer Currency Matching:</strong> QuickBooks customers are linked to their respective foreign currency codes, preventing currency mismatch errors.", "path": "QuickBooks Connector > Export Order Settings / General Settings", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/export-order-settings.html", "pageTitle": "Export Order Settings"}, {"id": "loop-prevention", "triggers": ["loop prevention", "prevent infinite sync loop", "inventory loop prevention", "avoid sync loops", "origin tagging", "sync origin tag", "how to avoid infinite stock loop", "loop protection"], "title": "Bidirectional Inventory Loop Prevention Mechanism", "answer": "How does two-way stock synchronization avoid infinite loops?<br><br>\u2022 <strong>Origin Tagging:</strong> The connector stamps the origin of each inventory change with a transient metadata tag. Updates triggered by a WooCommerce order or local edit are flagged during export.<br>\u2022 <strong>Echo Detection:</strong> When QuickBooks echoes the change back via webhook or scheduled poll, the connector recognizes the origin stamp and skips redundant re-exporting.<br>\u2022 <strong>Zero Race Conditions:</strong> This prevents ping-pong loops between WooCommerce and QuickBooks Online completely.", "path": "QuickBooks Connector > Auto Sync > Two-Way Stock Sync", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/auto-sync.html#two-way-stock-sync", "pageTitle": "Auto Sync Settings"}, {"id": "data-privacy-gdpr", "triggers": ["where is data stored", "does webkul store data", "gdpr", "data privacy", "third party server", "middleman", "cloud middleman", "data sovereignty", "security"], "title": "100% Data Sovereignty, Self-Hosted Architecture & GDPR Compliance", "answer": "Does Webkul store or intercept my financial data? <strong>No, absolutely not.</strong><br><br>\u2022 <strong>Direct Server-to-Server Encryption:</strong> All API communication takes place directly between your WordPress server and Intuit's REST API endpoint (<code>quickbooks.api.intuit.com</code>) using TLS 1.3 encryption.<br>\u2022 <strong>Zero Cloud Middleman:</strong> Unlike SaaS connectors (such as Webgility or Connex), your customer names, addresses, credit memos, and transaction figures are never routed through, processed by, or stored on Webkul servers.<br>\u2022 <strong>GDPR & CCPA Compliant:</strong> Eliminates third-party cloud subprocessor liabilities, ensuring full regulatory compliance.", "path": "QuickBooks Connector > Overview / Comparison", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/comparison.html#deep-dive-privacy", "pageTitle": "Plugin Comparison"}, {"id": "installation", "triggers": ["install", "installation", "activate", "activation", "how to install", "zip", "upload plugin", "ftp", "setup plugin"], "title": "Installing and Activating WooCommerce QuickBooks Connector", "answer": "To install WooCommerce QuickBooks Connector:<br>1. Log into your WordPress admin dashboard and navigate to <strong>Plugins &gt; Add New &gt; Upload Plugin</strong>.<br>2. Choose the <code>woocommerce-quickbooks-connector.zip</code> package provided by Webkul and click <strong>Install Now</strong>.<br>3. After installation finishes, click <strong>Activate Plugin</strong>.<br>4. Once activated, a new menu labeled <strong>QuickBooks Connector</strong> (or <strong>Webkul WC Addons &gt; QuickBooks Connector</strong>) will appear in your admin sidebar.<br>5. You will be automatically redirected to the 4-step Setup Wizard to begin connecting your Intuit developer account.", "path": "WordPress Admin > Plugins > Add New > Upload Plugin", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/installation.html", "pageTitle": "Installation"}, {"id": "system-requirements", "triggers": ["requirements", "compatibility", "system requirements", "php version", "wordpress version", "woocommerce version", "curl", "ssl", "https", "php 8"], "title": "System Requirements & Server Environment", "answer": "To run WooCommerce QuickBooks Connector reliably:<br>\u2022 <strong>WordPress:</strong> Version 6.7 to 7.1+<br>\u2022 <strong>WooCommerce:</strong> Version 10.0 to 11.3+ (Fully compatible with HPOS & Cart/Checkout Blocks)<br>\u2022 <strong>PHP:</strong> Version 8.2, 8.3, 8.4, or 8.5<br>\u2022 <strong>SSL:</strong> Active HTTPS certificate (Intuit OAuth 2.0 strictly requires valid SSL for redirect URIs)<br>\u2022 <strong>PHP Extensions:</strong> <code>cURL</code>, <code>OpenSSL</code>, <code>JSON</code>, and <code>mbstring</code> enabled<br>\u2022 <strong>Action Scheduler:</strong> Enabled (standard in WooCommerce 3.5+) for background queue execution.", "path": "WordPress Admin > WooCommerce > Status", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/overview.html#requirements", "pageTitle": "Overview"}, {"id": "intuit-credentials", "triggers": ["client id and secret", "how to get client id", "how to get intuit credentials", "intuit developer keys", "client id", "client secret", "intuit keys", "intuit developer app"], "title": "Obtaining Intuit Developer Client ID & Client Secret", "answer": "1. Log into <a href='https://developer.intuit.com/' target='_blank'>developer.intuit.com</a> using your Intuit / QuickBooks credentials.<br>2. Click <strong>Dashboard</strong> &gt; <strong>Create an app</strong>.<br>3. Select <strong>QuickBooks Online and Payments</strong> as the platform.<br>4. Set your app name and select the <code>com.intuit.quickbooks.accounting</code> scope.<br>5. In the app settings, navigate to <strong>Keys &amp; OAuth</strong>.<br>6. Copy your <strong>Client ID</strong> and <strong>Client Secret</strong> (use Development keys for testing sandbox, Production keys for live store).<br>7. In the <strong>Redirect URIs</strong> section, paste the two exact redirect URLs provided in your connector settings, then save.", "path": "developer.intuit.com > Dashboard > Keys & OAuth", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/intuit-credentials.html", "pageTitle": "Get Intuit Credentials"}, {"id": "redirect-uri", "triggers": ["redirect uri", "oauth redirect uri", "callback url", "where to put redirect uri", "redirect url setup", "redirect uri mismatch"], "title": "Configuring QuickBooks OAuth 2.0 Redirect URIs", "answer": "QuickBooks OAuth requires exact matching between URLs registered in Intuit and URLs in WordPress. To configure:<br>1. In WordPress admin, go to <strong>QuickBooks Connector &gt; Connection Settings</strong>.<br>2. Copy the two generated Redirect URIs:<br>\u2022 Connection Tab: <code>.../wp-admin/admin.php?page=wkquick-book-main&amp;tab=connection</code><br>\u2022 Setup Wizard: <code>.../wp-admin/admin.php?page=wkquick-book-setup-wizard</code><br>3. In your Intuit Developer App under <strong>Keys &amp; OAuth &gt; Redirect URIs</strong>, paste both URLs verbatim.<br>4. Ensure your store uses <code>https://</code> (HTTP URLs will be rejected by Intuit).", "path": "QuickBooks Connector > Connection Settings > Redirect URIs", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/intuit-credentials.html#step-4-register-the-redirect-uris", "pageTitle": "Get Intuit Credentials"}, {"id": "setup-wizard", "triggers": ["setup wizard", "4 step wizard", "setup guide", "wizard configuration", "first time setup", "initial setup wizard", "configuration wizard", "interactive setup wizard"], "title": "Configuring the 4-Step Interactive Setup Wizard", "answer": "Introduced in v4.0.0, the Setup Wizard (<code>page=wkquick-book-setup-wizard</code>) streamlines onboarding:<br>\u2022 <strong>Step 1 (Welcome):</strong> System health check verifying PHP version, cURL, OpenSSL, and HTTPS status.<br>\u2022 <strong>Step 2 (Environment):</strong> Toggle between <strong>Sandbox</strong> (testing) or <strong>Production</strong> (live store).<br>\u2022 <strong>Step 3 (Credentials):</strong> Enter your Intuit Client ID and Client Secret with live format validation.<br>\u2022 <strong>Step 4 (Connect &amp; Ready):</strong> Click 'Connect to QuickBooks' to authorize OAuth 2.0. Upon authorization, the wizard imports your company name and realm ID, then routes you directly to the Dashboard.", "path": "QuickBooks Connector > Setup Wizard", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/setup-wizard.html", "pageTitle": "Setup Wizard"}, {"id": "connection-settings", "triggers": ["connection settings", "how to connect quickbooks", "connect to quickbooks online", "link quickbooks account", "connect quickbooks", "how to link quickbooks", "quickbooks connection"], "title": "Connecting to QuickBooks Online & Managing Connection Settings", "answer": "To connect WooCommerce to QuickBooks Online:<br>1. Navigate to <strong>QuickBooks Connector &gt; Connection Settings</strong> (<code>tab=connection</code>) or launch the <strong>Setup Wizard</strong>.<br>2. Select your <strong>Environment</strong> (<em>Development/Sandbox</em> for testing, <em>Production</em> for live stores).<br>3. Enter your Intuit App <strong>Client ID</strong> and <strong>Client Secret</strong>, then click <strong>Save Changes</strong>.<br>4. Click the green <strong>Connect to QuickBooks</strong> button to launch Intuit's official OAuth 2.0 authorization screen.<br>5. Select your QuickBooks Online company entity and click <strong>Connect</strong>.<br>6. You will be redirected back with a green <strong>Connected</strong> status badge displaying your Intuit <strong>Realm ID</strong> (Company ID) and company name.", "path": "Webkul WC Addons > QuickBooks Connector > Connection", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/connection.html", "pageTitle": "Connection Settings"}, {"id": "sandbox-vs-production", "triggers": ["sandbox mode", "production mode", "switch sandbox to production", "sandbox testing", "sandbox vs production"], "title": "Switching Between Sandbox and Production Environments", "answer": "WooCommerce QuickBooks Connector supports independent Sandbox and Production environments:<br>\u2022 <strong>Sandbox Mode:</strong> Connects to an Intuit developer sandbox company with simulated transactions. Ideal for testing account mappings, custom fees, and tax rules.<br>\u2022 <strong>Production Mode:</strong> Connects to your live QuickBooks Online business company for actual accounting records.<br>To switch: Go to <strong>Connection Settings</strong>, toggle the <strong>Environment</strong> radio button, enter the respective Client ID and Secret for that environment, and click Connect.", "path": "QuickBooks Connector > Connection Settings > Environment", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/connection.html#_1-environment-mode-settings", "pageTitle": "Connection Settings"}, {"id": "token-refresh", "triggers": ["token expired", "refresh token", "oauth token renewal", "token auto refresh", "token expiration", "refresh token mutex"], "title": "OAuth 2.0 Token Expiration & Automated Background Renewal", "answer": "QuickBooks Online uses two OAuth tokens:<br>\u2022 <strong>Access Token:</strong> Expires every 60 minutes.<br>\u2022 <strong>Refresh Token:</strong> Valid for 101 days.<br><strong>How Renewal Works:</strong> The connector monitors token lifespan via WooCommerce Action Scheduler. Whenever the access token nears expiration, the connector automatically requests a fresh token from Intuit in the background with zero admin intervention.<br><strong>If Refresh Token Expires (After 101 days of inactivity):</strong> Navigate to <strong>Connection Settings</strong> and click <strong>Reconnect</strong> to re-authorize with Intuit.", "path": "QuickBooks Connector > Connection Settings", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/connection.html#editing-the-connection", "pageTitle": "FAQ & Notes"}, {"id": "disconnect", "triggers": ["how to disconnect quickbooks", "unlink quickbooks", "disconnect account", "disconnect quickbooks"], "title": "Disconnecting and Unlinking QuickBooks Online", "answer": "To safely disconnect your store from QuickBooks Online:<br>1. In WordPress admin, go to <strong>QuickBooks Connector &gt; Connection Settings</strong>.<br>2. Click the red <strong>Disconnect</strong> button.<br>3. A modal dialog will appear asking to confirm. Click <strong>Confirm Disconnect</strong>.<br>4. The connector will revoke the active OAuth 2.0 token at Intuit and wipe stored session tokens from WordPress options.<br>5. Existing WooCommerce orders, products, and customers remain safe and untouched.", "path": "QuickBooks Connector > Connection Settings > Disconnect", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/connection.html#deleting-credentials", "pageTitle": "Connection Settings"}, {"id": "dashboard-overview", "triggers": ["dashboard kpis", "executive dashboard", "sync kpis", "7 day sync activity", "dashboard intelligence", "quickbooks dashboard"], "title": "QuickBooks Dashboard & Intelligence Cockpit", "answer": "Introduced in v4.0.0, the <strong>Dashboard</strong> (<code>tab=dashboard</code>) serves as your operational cockpit:<br>\u2022 <strong>Executive KPIs:</strong> Real-time counts for Synced Orders, Synced Products, Synced Customers, and Needs Attention items.<br>\u2022 <strong>7-Day Activity Trend:</strong> Day-by-day graph of successful vs failed synchronizations.<br>\u2022 <strong>Account Coverage Gauges:</strong> Percentage of WooCommerce catalog items mapped to active QuickBooks accounts.<br>\u2022 <strong>Action Scheduler Status:</strong> Real-time indicator of background worker health and queue latency.<br>\u2022 <strong>Financial Snapshot:</strong> Live Gross Sales today, Open Receivables, and mapped Bank Balance.", "path": "Webkul WC Addons > QuickBooks Connector > Dashboard", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/dashboard.html", "pageTitle": "Dashboard & Intelligence"}, {"id": "needs-attention-queue", "triggers": ["needs attention queue", "failed sync records", "one click retry", "attention queue", "quarantine failed records"], "title": "Needs Attention Queue & 1-Click Error Resolution", "answer": "When an order, product, or customer fails synchronization (due to temporary Intuit API outages or missing mappings), it is quarantined in the <strong>Needs Attention Table</strong> on the Dashboard:<br>\u2022 <strong>Diagnostic Message:</strong> Displays the exact QuickBooks error code and description.<br>\u2022 <strong>Sync Now Button:</strong> Re-triggers synchronization immediately via AJAX once the root cause is resolved.<br>\u2022 <strong>View Order / Item:</strong> Opens the underlying WooCommerce record in a new tab.<br>\u2022 <strong>Dismiss / Ignore:</strong> Removes transient warnings once reconciled manually.", "path": "QuickBooks Connector > Dashboard > Needs Attention", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/dashboard.html#attention-queue", "pageTitle": "Dashboard & Intelligence"}, {"id": "general-settings", "triggers": ["general settings", "order sync trigger setting", "order prefix setting", "sync direction settings", "general connector settings"], "title": "General Settings: Default Fallbacks & Accounting Defaults", "answer": "Configured under <strong>QuickBooks Connector &gt; General Settings</strong>:<br>\u2022 <strong>Default Customer:</strong> Assigned to orders placed by guest shoppers or when customer record synchronization is disabled.<br>\u2022 <strong>Default Product:</strong> Fallback line item used when an order contains deleted, unmapped, or custom line items.<br>\u2022 <strong>Default Payment Method:</strong> Fallback gateway mapping for unfamiliar checkout methods.<br>\u2022 <strong>Default Deposit Account:</strong> Primary QuickBooks bank or Undeposited Funds account for funds clearance.", "path": "QuickBooks Connector > General Settings", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/general-settings.html", "pageTitle": "General Settings"}, {"id": "order-prefix", "triggers": ["order prefix", "invoice prefix", "custom order number prefix", "order numbering prefix"], "title": "Configuring Invoice & Order ID Numbering Prefixes", "answer": "Under <strong>General Settings &gt; Order ID Prefix</strong>:<br>1. Enter an alphanumeric prefix (e.g. <code>WC-</code>, <code>WEB-</code>, or <code>STORE1-</code>).<br>2. When orders export to QuickBooks as Invoices or Sales Receipts, the document number will follow this pattern (e.g. <code>WC-10452</code>).<br>3. This guarantees unique numbering sequences, preventing collisions with point-of-sale systems or external billing platforms in QuickBooks Online.", "path": "QuickBooks Connector > General Settings > Order ID Prefix", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/general-settings.html", "pageTitle": "General Settings"}, {"id": "sync-direction", "triggers": ["sync direction", "export only setting", "import only setting", "two way direction setting", "control sync direction"], "title": "Synchronization Direction: Export vs Import Rules", "answer": "WooCommerce QuickBooks Connector enforces deterministic data flow:<br>\u2022 <strong>Orders:</strong> One-Way <strong>WooCommerce &rarr; QuickBooks</strong>. Orders and sales transactions originate in WooCommerce and export to QuickBooks. Orders are never imported from QuickBooks into WooCommerce to preserve checkout cart integrity.<br>\u2022 <strong>Stock Inventory:</strong> <strong>Bidirectional (Two-Way)</strong> in v4.0.0. Stock changes in WooCommerce update QuickBooks, and adjustments in QuickBooks update WooCommerce.<br>\u2022 <strong>Customers &amp; Products:</strong> Both Manual/Auto Export (WC &rarr; QB) and Manual Import (QB &rarr; WC) are fully supported.", "path": "QuickBooks Connector > Auto Sync / Overview", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/auto-sync.html", "pageTitle": "Overview"}, {"id": "auto-sync-overview", "triggers": ["auto sync settings", "automatic synchronization", "real time auto sync", "event triggers", "auto sync configuration"], "title": "Configuring Automated Real-Time Synchronization", "answer": "The <strong>Auto Sync</strong> tab (<code>tab=auto-sync</code>) enables background automation:<br>\u2022 <strong>Real-Time Product Sync:</strong> When a product is created or updated in WooCommerce, it exports immediately to QuickBooks.<br>\u2022 <strong>Order Export Triggers:</strong> Automatically exports orders when they transition to selected statuses (e.g. Processing, Completed).<br>\u2022 <strong>Two-Way Stock Sync:</strong> Synchronizes inventory increments and decrements in real time.<br>\u2022 <strong>Automated Refunds:</strong> Generates QuickBooks Refund Receipts automatically when refunds occur in WooCommerce.<br>\u2022 <strong>Email Alerts:</strong> Sends failure digests to store admins.", "path": "QuickBooks Connector > Auto Sync", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/auto-sync.html", "pageTitle": "Auto Sync Settings"}, {"id": "two-way-stock-sync", "triggers": ["two way stock sync", "2 way stock sync", "bidirectional stock sync", "inventory sync", "sync stock both ways", "stock synchronization", "inventory update from quickbooks", "real time stock sync", "stock sync", "inventory synchronization", "how to sync inventory", "how does stock sync work"], "title": "Real-Time Two-Way Stock Synchronization & Loop Prevention", "answer": "Introduced in v4.0.0, true two-way inventory management keeps stock levels aligned:<br>\u2022 <strong>WooCommerce to QuickBooks:</strong> When an order is placed or stock edited in WooCommerce, quantity updates in QuickBooks Online.<br>\u2022 <strong>QuickBooks to WooCommerce:</strong> Webhooks or scheduled listeners detect stock adjustments in QuickBooks and update WooCommerce product stock.<br>\u2022 <strong>Loop Prevention:</strong> The connector stamps the origin of each inventory change with a transient metadata tag. When an update echoes back from Intuit, the connector recognizes the origin and skips redundant re-exporting, completely preventing infinite loops.", "path": "QuickBooks Connector > Auto Sync > Two-Way Stock Sync", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/auto-sync.html#two-way-stock-sync", "pageTitle": "Auto Sync Settings"}, {"id": "order-export-statuses", "triggers": ["order export statuses", "when does order sync", "sync on processing", "sync on completed", "order sync triggers"], "title": "Configuring Order Auto-Export Status Triggers", "answer": "In <strong>Auto Sync Settings &gt; Order Export Status</strong>:<br>1. Select which WooCommerce order statuses trigger automatic QuickBooks export.<br>2. Common configurations:<br>\u2022 <strong>Processing:</strong> Exports immediately upon successful online payment.<br>\u2022 <strong>Completed:</strong> Exports once the physical or digital order has been fulfilled.<br>\u2022 <strong>On-Hold / Pending Payment:</strong> Useful for creating Draft Invoices in QuickBooks before payment clears.<br>3. When an order transitions to any checked status, the connector schedules an immediate background job via Action Scheduler.", "path": "QuickBooks Connector > Auto Sync > Order Export Statuses", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/auto-sync.html#order-payment-sync", "pageTitle": "Auto Sync Settings"}, {"id": "refund-sync", "triggers": ["refund sync", "how to sync refunds", "automatic refund receipt", "refund receipt in quickbooks", "sync refund"], "title": "Automated Refund Receipt Synchronization", "answer": "When an order is refunded in WooCommerce (partially or fully):<br>1. Enable <strong>Auto Generate Refund Receipt</strong> in <strong>Auto Sync Settings</strong>.<br>2. When you issue a refund in <strong>WooCommerce &gt; Orders &gt; Refund</strong>, the connector automatically generates a matching <strong>Refund Receipt</strong> in QuickBooks Online.<br>3. The refund receipt credits the customer account, adjusts the mapped refund clearing bank account, and restores inventory (if restock was checked).", "path": "QuickBooks Connector > Auto Sync > Auto Generate Refund Receipt", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/orders.html#cancellations-and-refunds", "pageTitle": "Auto Sync Settings"}, {"id": "email-alerts", "triggers": ["email notifications", "sync failure email", "failure email alerts", "email digest", "admin email alerts"], "title": "Configuring Automated Sync Failure Email Alerts", "answer": "Never miss an accounting error:<br>1. Navigate to <strong>QuickBooks Connector &gt; Auto Sync</strong>.<br>2. Enable <strong>Failure Email Alerts</strong>.<br>3. Enter the recipient email address (e.g. <code>accountant@yourstore.com</code>).<br>4. Select your preferred frequency:<br>\u2022 <strong>Immediate:</strong> Sends an alert instantly whenever an API call fails after 3 retries.<br>\u2022 <strong>Daily Digest:</strong> Summarizes all failed items at 00:00 UTC.<br>\u2022 <strong>Weekly Digest:</strong> Sends a weekly executive summary of sync health and pending attention items.", "path": "QuickBooks Connector > Auto Sync > Failure Email Alerts", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/sync-monitor.html#action-scheduler-engine", "pageTitle": "Auto Sync Settings"}, {"id": "sales-receipt-vs-invoice", "triggers": ["sales receipt vs invoice", "invoice or sales receipt", "when to use sales receipt", "document format", "sales receipt"], "title": "Choosing Document Formats: Sales Receipt vs Invoice", "answer": "Under <strong>Export Order Settings &gt; Document Type</strong>, you can configure how WooCommerce orders export to QuickBooks:<br>\u2022 <strong>Sales Receipt:</strong> Recommended for retail eCommerce where orders are paid immediately via credit card, PayPal, or Stripe. Records payment and revenue simultaneously in a single transaction.<br>\u2022 <strong>Invoice:</strong> Recommended for wholesale, B2B, or COD orders where payment terms (Net 30, Pay on Delivery) are extended. Generates an open receivable awaiting future payment settlement.<br>\u2022 <strong>Conditional Mapping:</strong> Map completed orders to Sales Receipts and pending orders to Invoices.", "path": "QuickBooks Connector > Export Order Settings > Document Type", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/export-order-settings.html#order-export-preferences", "pageTitle": "Export Order Settings"}, {"id": "shipping-account-mapping", "triggers": ["shipping account mapping", "map shipping income", "shipping line item account", "shipping account"], "title": "Mapping Order Shipping Line Items to QuickBooks Income", "answer": "To ensure shipping revenues are properly categorized:<br>1. In <strong>Export Order Settings &gt; General</strong>, locate <strong>Shipping Account</strong>.<br>2. Select your designated QuickBooks <strong>Shipping Income</strong> account (e.g. <em>Shipping and Delivery Income</em>).<br>3. When an order exports with flat rate or carrier shipping costs, the shipping fee is mapped cleanly to this account on the invoice or sales receipt.", "path": "QuickBooks Connector > Export Order Settings > Shipping Account", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/export-order-settings.html#order-data-mapping", "pageTitle": "Export Order Settings"}, {"id": "order-fees-discounts", "triggers": ["custom fee mapping", "fee discount mapping", "positive fee account", "negative fee discount", "fee mapping"], "title": "Mapping Custom Order Fees & Negative Fee Discounts", "answer": "Introduced in v4.0.0, you can map fee line items with dedicated accounting rules:<br>\u2022 <strong>Positive Order Fees:</strong> Extra charges such as rush handling, gift wrapping, or service surcharges route to your designated <strong>Positive Fee Account</strong> (Income).<br>\u2022 <strong>Negative Fee Discounts:</strong> Manual price reductions or custom credits route to your designated <strong>Negative Fee Discount Account</strong> (Expense / Contra-Revenue).<br>\u2022 Dynamic fee item naming and description filters allow CPAs to segment fees by custom meta keys.", "path": "QuickBooks Connector > Export Order Settings > Order Fee Settings", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/export-order-settings.html#order-fees-and-discounts", "pageTitle": "Export Order Settings"}, {"id": "coupons-tracking", "triggers": ["coupon tracking", "sync multiple coupons", "coupon memo description", "coupon discount tracking", "coupon codes sync"], "title": "Synchronizing Multiple Coupon Codes & Memo Tracking", "answer": "When customers apply coupons to their cart:<br>1. The connector formats applied coupons and records them in the QuickBooks transaction <strong>PrivateNote</strong> statement memo (e.g. <code>Applied Coupons: SUMMER20, FREESHIP</code>).<br>2. Discount line items on QuickBooks invoices reflect the exact coupon codes in their item descriptions.<br>3. This gives your bookkeeping team full auditability over coupon promotions directly within QuickBooks.", "path": "QuickBooks Connector > Export Order Settings > Coupon Settings", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/orders.html#order-fees-coupons-and-pos-split", "pageTitle": "Export Order Settings"}, {"id": "penny-rounding", "triggers": ["penny rounding", "penny rounding reconciliation", "rounding discrepancy", "tax calculation rounding difference", "one cent discrepancy quickbooks", "penny discrepancy", "round off error", "penny rounding setting"], "title": "Penny-Rounding Auto-Reconciliation for Tax Discrepancies", "answer": "Because WooCommerce calculates taxes per line item and QuickBooks calculates taxes on transaction totals, fractional 1-cent differences can occur, causing QuickBooks to reject invoices with balance mismatch errors.<br><strong>How Penny-Rounding Solves This:</strong><br>1. Enable <strong>Penny-Rounding Reconciliation</strong> in Export Order Settings.<br>2. Set a maximum threshold (e.g. 0.50).<br>3. The connector calculates any rounding discrepancy and appends an automatic <strong>Roundoff Adjustment</strong> line item to the invoice, guaranteeing 100% acceptance by QuickBooks Online without manual intervention.", "path": "QuickBooks Connector > Export Order Settings > Penny-Rounding", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/export-order-settings.html#penny-rounding-reconciliation", "pageTitle": "Export Order Settings"}, {"id": "class-mapping", "triggers": ["class mapping", "quickbooks class tracking", "map product category to class", "class tracking"], "title": "Configuring QuickBooks Class Mapping Rules", "answer": "QuickBooks Classes let you track income and expenses by department, location, or product line:<br>1. Go to <strong>Export Order Settings &gt; Class Mapping</strong>.<br>2. <strong>Product Category to Class:</strong> Map specific WooCommerce product categories (e.g. <em>Apparel</em>, <em>Electronics</em>) to distinct QuickBooks Classes.<br>3. <strong>Country to Class:</strong> Route orders from specific customer countries to regional classes (e.g. <em>Domestic US</em> vs <em>International EU</em>).<br>4. <strong>Fallback Class:</strong> Specify a default class for unmapped categories.", "path": "QuickBooks Connector > Export Order Settings > Class Mapping", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/export-order-settings.html#quickbooks-classification-defaults", "pageTitle": "Export Order Settings"}, {"id": "department-mapping", "triggers": ["department mapping", "quickbooks location mapping", "map country to department", "department tracking"], "title": "Configuring QuickBooks Department / Location Mapping", "answer": "QuickBooks Online Plus and Advanced provide Department / Location tracking:<br>1. Go to <strong>Export Order Settings &gt; Department Mapping</strong>.<br>2. Map WooCommerce sales channels, store branches, or customer countries to specific QuickBooks Departments.<br>3. Financial statements (P&amp;L and Balance Sheet) can subsequently be filtered by Department for granular cost accounting.", "path": "QuickBooks Connector > Export Order Settings > Department Mapping", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/export-order-settings.html#quickbooks-classification-defaults", "pageTitle": "Export Order Settings"}, {"id": "export-customers", "triggers": ["export customers", "how to export customers", "customer export", "sync customers", "export customers to quickbooks", "export customer", "send customers to quickbooks", "how to sync customers", "customer bulk export"], "title": "Exporting WooCommerce Customers to QuickBooks Online", "answer": "To sync customer records to QuickBooks:<br>1. In WordPress admin, navigate to <strong>QuickBooks Connector &gt; Customers</strong>.<br>2. Select customer records using checkboxes or select all.<br>3. Choose <strong>Export to QuickBooks</strong> from the bulk action dropdown and click Apply.<br>4. The connector syncs: First/Last Name, Company Name, Billing Address, Shipping Address, Email Address, and Phone Number.<br>5. Successfully exported customers receive an Intuit Customer ID badge.", "path": "Webkul WC Addons > QuickBooks Connector > Customers", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/customers.html#exporting-customers-to-quickbooks", "pageTitle": "Customers"}, {"id": "import-customers", "triggers": ["import customers", "how to import customers", "customer import", "import customers from quickbooks", "pull customers from quickbooks", "download customers from quickbooks", "sync customers from quickbooks"], "title": "Importing Customers from QuickBooks to WooCommerce", "answer": "To bring existing QuickBooks contacts into WordPress:<br>1. Navigate to <strong>QuickBooks Connector &gt; Customers</strong>.<br>2. Click <strong>Import from QuickBooks</strong>.<br>3. The connector queries Intuit's customer endpoints and creates new WordPress user accounts with the Customer role.<br>4. Billing and shipping addresses are mapped into WooCommerce customer metadata fields.", "path": "QuickBooks Connector > Customers > Import from QuickBooks", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/customers.html#importing-customers-from-quickbooks", "pageTitle": "Customers"}, {"id": "error-6240", "triggers": ["error 6240", "error 6240 duplicate name", "quickbooks error 6240", "duplicate name collision", "another customer with this name already exists", "how to fix error 6240", "duplicate customer name", "error 6240 solution", "fix 6240", "error code 6240"], "title": "Resolving QuickBooks Error 6240: Duplicate Name Collision", "answer": "QuickBooks Online requires customer DisplayNames to be unique across all Customers, Vendors, and Employees. If an order fails with Error 6240:<br>1. In v4.0.0, the connector uses an automated disambiguation algorithm that checks verified email addresses first.<br>2. If a customer name conflicts without an email match, the connector automatically appends unique email or numerical identifiers (e.g. <code>John Doe (john@domain.com)</code>).<br>3. For document number duplicates (Invoices), enable <strong>Order ID Prefix</strong> in General Settings.", "path": "QuickBooks Connector > FAQ & Notes / Export Order Settings", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/faq-notes.html", "pageTitle": "FAQ & Notes"}, {"id": "export-simple-products", "triggers": ["export products", "how to export products", "product export", "sync products", "export products to quickbooks", "how to sync products", "manual product export", "product bulk export", "exporting products", "export simple product", "send products to quickbooks", "push products to quickbooks", "sync product", "export simple products"], "title": "Exporting Simple Products to QuickBooks Online", "answer": "To sync simple products:<br>1. Navigate to <strong>QuickBooks Connector &gt; Products</strong>.<br>2. Select the simple products you wish to sync.<br>3. Choose <strong>Export to QuickBooks</strong> and click Apply.<br>4. The connector syncs: Title, SKU, Description, Regular Price, Sale Price, Initial Stock Quantity, and Inventory Asset Account.<br>5. Once synced, WooCommerce product IDs map to Intuit Item IDs.", "path": "Webkul WC Addons > QuickBooks Connector > Products", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/products.html#exporting-products-to-quickbooks", "pageTitle": "Products"}, {"id": "export-variable-products", "triggers": ["export variable products", "variable product export", "export variations", "variation export", "sync variable products", "export variable product to quickbooks", "product variations sync", "variable product with attributes", "export variations"], "title": "Exporting Variable Products & Variation SKUs", "answer": "The connector provides comprehensive support for variable products:<br>1. When a variable product is exported, each individual variation is created in QuickBooks as an Item.<br>2. Each variation inherits its specific Variation SKU, custom variation price, and dedicated stock quantity.<br>3. Attributes (e.g. Size: Large, Color: Blue) are mapped cleanly into product descriptions.<br>4. Orders containing variation items link directly to their respective QuickBooks variation Item IDs.", "path": "QuickBooks Connector > Products > Variable Products", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/products.html#exporting-products-to-quickbooks", "pageTitle": "Products"}, {"id": "import-products", "triggers": ["import products", "how to import products", "import product", "product import", "import products from quickbooks", "pull products from quickbooks", "download products from quickbooks", "sync products from quickbooks to woocommerce"], "title": "Importing Products from QuickBooks into WooCommerce", "answer": "To import inventory items from QuickBooks into WooCommerce:<br>1. Go to <strong>QuickBooks Connector &gt; Products</strong>.<br>2. Click the <strong>Import from QuickBooks</strong> button.<br>3. The connector retrieves Items from QuickBooks and creates matching WooCommerce simple products with Title, SKU, Sales Price, and Stock Quantity.<br>4. Duplicate SKUs are updated rather than duplicated.", "path": "QuickBooks Connector > Products > Import from QuickBooks", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/products.html#importing-products-from-quickbooks-import-list", "pageTitle": "Products"}, {"id": "granular-field-controls", "triggers": ["granular field controls", "details to export", "details to import", "selective field sync", "product field sync controls"], "title": "Granular Field Controls (Details to Export / Import)", "answer": "Introduced in v4.0.0 under <strong>Products &gt; Field Sync Settings</strong>:<br>\u2022 <strong>Details to Export:</strong> Select which attributes WooCommerce sends to QuickBooks (Title, Price, Description, SKU, Stock Quantity, Images).<br>\u2022 <strong>Details to Import:</strong> Select which attributes QuickBooks overrides in WooCommerce during import.<br>\u2022 For example, you can sync stock and prices while protecting custom WooCommerce product descriptions from being overwritten.", "path": "QuickBooks Connector > Products > Field Controls", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/products.html", "pageTitle": "Products"}, {"id": "orders-screen-column", "triggers": ["quickbooks order column", "order sync status in orders table", "order listing column", "wc orders sync status"], "title": "QuickBooks Status Column on WooCommerce Orders List", "answer": "You do not need to open the connector to monitor order sync:<br>\u2022 The standard <strong>WooCommerce &gt; Orders</strong> list table gains a dedicated <strong>QuickBooks</strong> status column.<br>\u2022 A <strong>Green Checkmark</strong> indicates the order is successfully synchronized.<br>\u2022 A <strong>Red Cross</strong> indicates the order has not yet been exported.<br>\u2022 Hovering over the badge shows the QuickBooks Invoice or Sales Receipt ID.", "path": "WordPress Admin > WooCommerce > Orders", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/orders.html#sync-status-on-the-woocommerce-orders-screen", "pageTitle": "Orders"}, {"id": "order-edit-meta-box", "triggers": ["order edit meta box", "order detail quickbooks box", "resync single order", "order metabox"], "title": "Order Edit Screen QuickBooks Meta Box", "answer": "Inside the WooCommerce Order Edit screen:<br>1. Locate the <strong>QuickBooks Status</strong> sidebar meta box.<br>2. Displays the linked QuickBooks Document ID and sync timestamp.<br>3. Includes a 1-click button: <strong>Export to QuickBooks / Update in QuickBooks</strong> to manually re-sync single orders on demand.", "path": "WordPress Admin > WooCommerce > Orders > Edit Order", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/orders.html#exporting-orders", "pageTitle": "Orders"}, {"id": "bulk-order-actions", "triggers": ["export orders", "how to export orders", "order export", "sync orders", "export orders to quickbooks", "how to sync orders", "manual order export", "order bulk actions", "exporting orders", "export order", "send orders to quickbooks", "push orders to quickbooks", "sync order", "bulk export orders", "order sync"], "title": "Bulk Export & Update Actions on WooCommerce Orders Table", "answer": "To sync multiple orders directly from the standard WooCommerce orders screen:<br>1. Navigate to <strong>WooCommerce &gt; Orders</strong>.<br>2. Check the boxes next to the orders you wish to process.<br>3. In the <strong>Bulk Actions</strong> dropdown at the top, select <strong>Export / Update in QuickBooks</strong>.<br>4. Click <strong>Apply</strong>. The connector queues and processes selected orders via Action Scheduler in batches.", "path": "WordPress Admin > WooCommerce > Orders > Bulk Actions", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/orders.html#exporting-orders", "pageTitle": "Orders"}, {"id": "payment-methods-mapping", "triggers": ["payment method mapping", "map payment gateway to bank", "deposit account mapping", "payment gateway mapping"], "title": "Mapping Payment Gateways to QuickBooks Deposit Accounts", "answer": "To route order payments into proper QuickBooks bank accounts:<br>1. Go to <strong>QuickBooks Connector &gt; Payment Methods</strong>.<br>2. Each active WooCommerce payment gateway (Stripe, PayPal, BACS, Cash on Delivery, POS) is listed.<br>3. Beside each gateway, select the matching QuickBooks <strong>Deposit Account</strong> (e.g. <em>Checking Account</em>, <em>Stripe Clearing</em>, or <em>Undeposited Funds</em>).<br>4. When an order exports, payments are deposited directly into the designated account.", "path": "Webkul WC Addons > QuickBooks Connector > Payment Methods", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/payment-methods.html", "pageTitle": "Payment Methods"}, {"id": "gateway-fees-accounting", "triggers": ["gateway fee accounting", "stripe fee mapping", "paypal fee expense", "merchant fee accounting"], "title": "Accounting for Payment Gateway Merchant Processing Fees", "answer": "When payment providers like Stripe or PayPal charge transaction fees:<br>1. In <strong>Payment Methods &gt; Advanced Settings</strong>, enable <strong>Track Gateway Fees</strong>.<br>2. Map your payment gateway processing fees to a designated QuickBooks <strong>Expense Account</strong> (e.g. <em>Bank &amp; Merchant Fees</em>).<br>3. The net payout is deposited in your bank account, and fee expenses are recorded simultaneously, making bank reconciliations 100% painless.", "path": "QuickBooks Connector > Payment Methods > Advanced Settings", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/payment-methods.html#transaction-fees", "pageTitle": "Payment Methods"}, {"id": "pos-split", "triggers": ["pos split payment", "webkul pos split payment", "pos split clearing account", "split payment in pos", "split tenders pos", "pos", "split payment", "pos split"], "title": "Configuring Webkul WooCommerce POS Split Payments", "answer": "The connector includes native support for multi-tender split payments made via Webkul WooCommerce POS (e.g. customer paying cash and card across split tenders):<br>1. In WordPress admin, navigate to <strong>QuickBooks Connector &gt; Payment Methods</strong>.<br>2. Locate <strong>POS Split Payment (<code>pos_split</code>)</strong> in the gateway list.<br>3. Map it to your designated QuickBooks <strong>Split Tender Clearing Account</strong> (or Undeposited Funds).<br>4. When an order is placed in POS, the connector automatically splits payment receipts into their respective tenders and clears each portion accurately in QuickBooks.", "path": "Webkul WC Addons > QuickBooks Connector > Payment Methods", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/payment-methods.html#pos-split-payments", "pageTitle": "Payment Methods"}, {"id": "tax-mapping", "triggers": ["tax mapping", "how to map taxes", "quickbooks tax codes", "woocommerce tax class mapping", "tax agency mapping"], "title": "Mapping WooCommerce Tax Classes to QuickBooks Tax Codes", "answer": "To ensure correct sales tax calculation:<br>1. Navigate to <strong>QuickBooks Connector &gt; Taxes</strong>.<br>2. Each WooCommerce Tax Class (Standard, Reduced Rate, Zero Rate) is displayed beside a dropdown of your QuickBooks Tax Codes.<br>3. Select the matching QuickBooks Tax Code for each class.<br>4. Configure the <strong>Fallback Tax Code</strong> for any line items lacking a specific rate match.<br>5. Tax-exempt items or zero-rate orders can be mapped to Out of Scope / Exempt tax codes.", "path": "Webkul WC Addons > QuickBooks Connector > Taxes", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/taxes.html", "pageTitle": "Taxes"}, {"id": "tax-fallback", "triggers": ["fallback tax code", "default tax code", "fallback tax mapping", "fallback tax"], "title": "Configuring Fallback Tax Codes & Tax-Exempt Orders", "answer": "Under <strong>QuickBooks Connector &gt; Taxes</strong>:<br>\u2022 <strong>Fallback Tax Code:</strong> Catches line items without an explicit WooCommerce tax rule (e.g. custom fees, miscellaneous items) and applies a default QuickBooks tax code.<br>\u2022 <strong>Tax-Exempt Customers:</strong> Orders placed by tax-exempt wholesale customers automatically map to Out of Scope (OOS) or Non-Taxable QuickBooks codes without triggering sales tax liabilities.", "path": "QuickBooks Connector > Taxes > Fallback Tax", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/taxes.html#mapping-a-tax-class", "pageTitle": "Taxes"}, {"id": "financial-reports", "triggers": ["profit and loss", "how to see p&l", "p&l report", "p and l", "profit and loss statement", "where to view p&l in wp-admin", "live p&l", "p&l", "financial reports", "view p&l", "p&l statement", "view profit and loss", "p and l statement", "profit loss"], "title": "Viewing Live Profit & Loss (P&L) Reports in WordPress Admin", "answer": "Introduced in v4.0.0, the connector embeds live QuickBooks financial statements in WordPress admin (<strong>QuickBooks Connector &gt; Reports</strong>):<br>1. Select <strong>Profit &amp; Loss</strong> from the report dropdown.<br>2. Displays Gross Revenue, Cost of Goods Sold (COGS), Gross Profit, Operating Expenses, and Net Operating Income.<br>3. Choose accounting period (This Month, Quarter, YTD, Last Year, or Custom Dates).<br>4. Toggle between Cash Basis and Accrual Basis.<br>5. 1-click export to clean CSV spreadsheet.", "path": "Webkul WC Addons > QuickBooks Connector > Reports", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/reports.html#supported-reports", "pageTitle": "Financial Reports"}, {"id": "balance-sheet-cash-flow", "triggers": ["balance sheet", "cash flow statement", "balance sheet report", "cash flow in quickbooks", "where to view balance sheet", "cash flow", "balance sheet statement"], "title": "Viewing Live Balance Sheet & Cash Flow Statements", "answer": "Under <strong>QuickBooks Connector &gt; Reports</strong>:<br>\u2022 <strong>Balance Sheet:</strong> Visualizes your store's financial health as of any date, summarizing Total Current Assets, Fixed Assets, Liabilities, and Owner's Equity.<br>\u2022 <strong>Statement of Cash Flows:</strong> Details cash generated or consumed across Operating, Investing, and Financing activities.<br>\u2022 Live data streams securely via Intuit's Reports REST API with zero intermediary storage.", "path": "QuickBooks Connector > Reports > Balance Sheet", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/reports.html#supported-reports", "pageTitle": "Financial Reports"}, {"id": "ar-aging-reports", "triggers": ["ar aging", "a/r aging", "accounts receivable aging", "aging summary report", "unpaid invoices report", "receivables report", "ar aging report", "accounts receivable report"], "title": "Monitoring Accounts Receivable (A/R) Aging Summary", "answer": "Under <strong>QuickBooks Connector &gt; Reports &gt; A/R Aging Summary</strong>:<br>\u2022 Summarizes all unpaid customer invoices into aging brackets: Current (1-30 days), 31-60 days, 61-90 days, and 91+ days overdue.<br>\u2022 Links directly to customer profiles for collection follow-ups.<br>\u2022 Helps wholesale and B2B store owners keep overdue balances under control directly from WordPress.", "path": "QuickBooks Connector > Reports > A/R Aging", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/reports.html#supported-reports", "pageTitle": "Financial Reports"}, {"id": "cash-vs-accrual", "triggers": ["cash vs accrual", "accrual basis", "cash basis", "accounting method", "export csv", "download report csv"], "title": "Cash vs Accrual Basis Accounting & CSV Export", "answer": "Inside the Reports tab:<br>\u2022 <strong>Accounting Toggle:</strong> Click between <strong>Cash Basis</strong> (records revenue when money is received) and <strong>Accrual Basis</strong> (records revenue when invoice is issued).<br>\u2022 <strong>1-Click CSV Export:</strong> Click the <strong>Export to CSV</strong> button on any active report to download a spreadsheet formatted for Microsoft Excel, Google Sheets, or Apple Numbers to share with external CPAs.", "path": "QuickBooks Connector > Reports > Report Controls", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/reports.html#report-controls", "pageTitle": "Financial Reports"}, {"id": "sync-monitor-overview", "triggers": ["sync monitor", "sync monitor overview", "activity trends", "sync health", "sync monitor cockpit"], "title": "Sync Monitor: Operational Overview & Analytics", "answer": "Under <strong>QuickBooks Connector &gt; Sync Monitor &gt; Overview</strong>:<br>\u2022 Displays overall sync health score (percentage of successful jobs).<br>\u2022 Visualizes 7-day, 30-day, and quarterly sync trends.<br>\u2022 Categorizes volume across Invoices, Sales Receipts, Items, and Customer accounts.<br>\u2022 Provides quick diagnostic status for Action Scheduler background workers.", "path": "Webkul WC Addons > QuickBooks Connector > Sync Monitor", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/sync-monitor.html#overview-subtab", "pageTitle": "Sync Monitor"}, {"id": "sync-monitor-activity", "triggers": ["sync monitor activity", "raw json payload inspector", "view sync payload", "activity log inspector", "activity audit trail"], "title": "Activity Audit Trail & Raw JSON Inspector", "answer": "Under <strong>Sync Monitor &gt; Activity</strong>:<br>1. View an audit trail of every synchronization request sent to Intuit.<br>2. Filter by entity type (Order, Product, Customer) or status (Success, Failed).<br>3. Click <strong>Inspect Payload</strong> to view the exact raw JSON request sent to QuickBooks and the full response body returned by Intuit.<br>4. Eliminates guesswork when diagnosing complex tax, accounting, or validation errors.", "path": "QuickBooks Connector > Sync Monitor > Activity", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/sync-monitor.html#activity-subtab", "pageTitle": "Sync Monitor"}, {"id": "sync-monitor-logs", "triggers": ["system logs", "download error log", "purge logs", "wc quickbook errors log", "system error logs"], "title": "System Logs: Severity Filtering, Download & Purge", "answer": "Under <strong>Sync Monitor &gt; Logs</strong>:<br>\u2022 <strong>Filter by Severity:</strong> View <code>DEBUG</code>, <code>INFO</code>, <code>WARNING</code>, or <code>ERROR</code> entries.<br>\u2022 <strong>Date Filter &amp; Search:</strong> Search logs by Order ID, SKU, or error keyword across any date period.<br>\u2022 <strong>Download Logs:</strong> 1-click download of the active log file for Webkul support tickets.<br>\u2022 <strong>Purge Logs:</strong> Safely clear historical log files to save server disk space.", "path": "QuickBooks Connector > Sync Monitor > Logs", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/sync-monitor.html#logs-subtab", "pageTitle": "Sync Monitor"}, {"id": "action-scheduler", "triggers": ["action scheduler engine", "scheduled actions runner", "background worker thread", "action scheduler"], "title": "Action Scheduler Background Resiliency & 3x Retries", "answer": "All background sync operations, stock updates, scheduled deposits, and webhook handling run on <strong>WooCommerce Action Scheduler</strong>:<br>\u2022 Completely decouples background tasks from unreliable WP-Cron traffic visits.<br>\u2022 Automatically retries failed API calls up to <strong>3 times</strong> with exponential backoff if Intuit returns temporary network dropouts (HTTP 502/503/504).<br>\u2022 Records execution timestamps and failure diagnostics in <strong>Sync Monitor &gt; Activity</strong>.", "path": "Webkul WC Addons > QuickBooks Connector > Sync Monitor", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/sync-monitor.html", "pageTitle": "Sync Monitor"}, {"id": "hpos-compatibility", "triggers": ["hpos", "high performance order storage", "is it compatible with hpos", "custom order tables", "checkout blocks compatibility"], "title": "High-Performance Order Storage (HPOS) & Block Theme Compatibility", "answer": "WooCommerce QuickBooks Connector is certified fully compatible with modern WooCommerce architecture:<br>\u2022 <strong>HPOS (Custom Order Tables):</strong> Reads and writes directly to HPOS tables (<code>wp_wc_orders</code>) for extreme performance on high-volume stores.<br>\u2022 <strong>Classic Storage Fallback:</strong> Backward-compatible with traditional <code>wp_posts</code> storage.<br>\u2022 <strong>Cart &amp; Checkout Blocks:</strong> Fully compatible with Gutenberg Cart and Checkout blocks.<br>\u2022 <strong>WordPress 7.1 &amp; WooCommerce 11.3:</strong> Certified against the latest core APIs.", "path": "WooCommerce > Settings > Advanced > Features", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/overview.html#requirements", "pageTitle": "Overview"}, {"id": "api-transient-caching", "triggers": ["api transient caching", "performance caching", "transient cache expiration"], "title": "Transient Caching & 75% API Request Reduction", "answer": "QuickBooks Online enforces API rate limits (e.g. 500 requests per minute). The connector implements transient caching:<br>\u2022 Frequently requested static entities (Chart of Accounts, Tax Codes, Payment Methods) are cached in WordPress transients.<br>\u2022 Reduces repetitive read queries to Intuit by up to 75%.<br>\u2022 Cache invalidates automatically when accounts or payment mappings are saved in WordPress.", "path": "QuickBooks Connector > Overview / Performance", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/sync-monitor.html#action-scheduler-engine", "pageTitle": "Overview"}, {"id": "superiority", "triggers": ["why webkul is superior", "comparison with myworks", "webgility vs webkul", "myworks vs webkul", "why choose webkul quickbooks connector", "comparison", "why webkul", "better than myworks", "superior to saas", "webkul advantage"], "title": "Why Webkul QuickBooks Connector is Superior to SaaS Alternatives", "answer": "Webkul provides significant commercial and technical advantages over MyWorks Sync, Webgility, and Connex:<br>\u2022 <strong>One-Time License Ownership:</strong> Transparent one-time purchase with zero mandatory recurring monthly SaaS subscriptions, eliminating perpetual software rent.<br>\u2022 <strong>Unlimited Order Sync:</strong> Zero monthly order volume caps, zero tier upgrade penalties, and no per-transaction fees.<br>\u2022 <strong>100% Data Privacy (Zero Cloud Middleman):</strong> Direct server-to-server OAuth 2.0 between WordPress and Intuit. Your customer financial data is never stored on third-party cloud servers.<br>\u2022 <strong>Native POS Split-Payments:</strong> Multi-tender split clearing accounts for Webkul POS.<br>\u2022 <strong>Embedded Executive Reports:</strong> Live P&L, Balance Sheet, and A/R Aging right in wp-admin.", "path": "Webkul WC Addons > QuickBooks Connector > Comparison", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/comparison.html", "pageTitle": "Plugin Comparison"}, {"id": "v4-release", "triggers": ["what is in latest version", "latest version", "v4.0.0", "version 4.0.0", "what is new in 4.0.0", "what is fix in latest version", "what is fix in latest verison", "new in version 4", "release 4.0.0", "what was fixed in 4.0.0", "fixes in latest release", "latest release updates", "what is in lastest version", "what is in lastest verison", "changes in 4.0.0", "v4 release notes"], "title": "What's New in Version 4.0.0 (November 18, 2026)", "answer": "Version 4.0.0 (released November 18, 2026) is the latest milestone release of WooCommerce QuickBooks Connector:<br>\u2022 <strong>Real-Time Bidirectional Stock Sync:</strong> Automated inventory updates both ways with loop prevention.<br>\u2022 <strong>Granular Field Controls:</strong> Selectable attributes for product import and export.<br>\u2022 <strong>Advanced Class &amp; Department Mapping:</strong> Dynamic rules by product category and customer country.<br>\u2022 <strong>Embedded Financial Dashboard &amp; Reports:</strong> Live P&L, Balance Sheet, Cash Flow, and A/R Aging in wp-admin.<br>\u2022 <strong>Sync Monitor:</strong> Overview trends, raw JSON inspector, and downloadable error logs.<br>\u2022 <strong>Webkul POS Split Payments:</strong> Multi-tender split clearing accounts (<code>pos_split</code>).<br>\u2022 <strong>Action Scheduler 3x Retries:</strong> Resilient background syncing and failure email digests.<br>\u2022 <strong>Certified Compatibility:</strong> WordPress 7.1, WooCommerce 11.3, HPOS, and PHP 8.5.", "path": "Webkul WC Addons > QuickBooks Connector > Changelog", "url": "/woocommerce-quickbooks-connector/quickbooks-connector/changelog.html#v4-0-0", "pageTitle": "Changelog"}];

  var TYPO_DICT = {
    "lastest": "latest",
    "latset": "latest",
    "verison": "version",
    "verion": "version",
    "versio": "version",
    "featurs": "features",
    "fetures": "features",
    "featuers": "features",
    "changlog": "changelog",
    "chnagelog": "changelog",
    "quikbooks": "quickbooks",
    "quickbook": "quickbooks",
    "qbo": "quickbooks",
    "qb": "quickbooks",
    "woocomerce": "woocommerce",
    "wc": "woocommerce",
    "inventry": "inventory",
    "invetory": "inventory",
    "custmer": "customer",
    "customr": "customer",
    "shippping": "shipping",
    "shiping": "shipping",
    "reciept": "receipt",
    "acount": "account",
    "accont": "account",
    "conection": "connection",
    "conect": "connect",
    "syc": "sync",
    "synch": "sync",
    "schelduler": "scheduler",
    "schedular": "scheduler",
    "que": "queue",
    "qeuue": "queue"
  };

  var SYNONYM_DICT = {
    "p&l": "profit loss p&l financial reports",
    "pl": "profit loss p&l financial reports",
    "ar": "ar aging accounts receivable reports",
    "pos": "pos point of sale split payments",
    "hpos": "hpos high performance order storage",
    "tco": "tco total cost of ownership pricing superiority",
    "vat": "tax taxes tax mapping",
    "gst": "tax taxes tax mapping",
    "cron": "action scheduler queue background",
    "crontab": "action scheduler queue background",
    "cli": "wp-cli action scheduler worker",
    "cost": "pricing licensing cost fee",
    "price": "pricing licensing cost fee",
    "pricing": "pricing licensing cost fee",
    "subscription": "pricing licensing subscription saas superiority"
  };

  var STOP_WORDS = {
    "how": 1, "what": 1, "where": 1, "when": 1, "why": 1, "can": 1, "could": 1,
    "should": 1, "would": 1, "the": 1, "a": 1, "an": 1, "is": 1, "are": 1, "was": 1,
    "were": 1, "in": 1, "on": 1, "at": 1, "to": 1, "for": 1, "with": 1, "by": 1,
    "from": 1, "of": 1, "and": 1, "or": 1, "it": 1, "its": 1, "do": 1, "does": 1,
    "did": 1, "i": 1, "we": 1, "my": 1, "our": 1, "me": 1, "you": 1, "your": 1,
    "please": 1, "tell": 1, "show": 1, "give": 1, "help": 1, "about": 1, "need": 1, "want": 1
  };

  var FRAMING_WORDS = {
    "support": 1, "supported": 1, "system": 1, "systems": 1, "feature": 1, "features": 1,
    "work": 1, "works": 1, "working": 1, "like": 1, "this": 1, "use": 1, "using": 1,
    "there": 1, "have": 1, "has": 1, "provide": 1, "provides": 1
  };

  var GENERIC_WORDS = {
    "quickbooks": 1, "woocommerce": 1, "connector": 1, "plugin": 1, "module": 1, "webkul": 1
  };

  function stem(word) {
    var w = word.toLowerCase();
    var suffixes = ["ation", "ations", "ing", "tion", "tions", "ment", "ments", "ed", "es", "s"];
    for (var i = 0; i < suffixes.length; i++) {
      var s = suffixes[i];
      if (w.length > s.length + 2 && w.slice(-s.length) === s) {
        return w.slice(0, -s.length);
      }
    }
    return w;
  }

  function normalizeQuery(query) {
    var q = query.toLowerCase();
    q = q.replace(/p\s*&\s*l/gi, "profit loss p and l financial reports");
    q = q.replace(/a\s*\/\s*r/gi, "ar aging accounts receivable reports");
    var words = q.replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(function (w) { return w.length > 0; });
    var expanded = [];
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (TYPO_DICT[w]) {
        w = TYPO_DICT[w];
      }
      expanded.push(w);
      if (SYNONYM_DICT[w]) {
        expanded.push(SYNONYM_DICT[w]);
      }
    }
    return expanded.join(" ");
  }

  // Build Modal UI
  function initModal() {
    if (document.getElementById("wk-ai-modal")) return;

    var overlay = document.createElement("div");
    overlay.id = "wk-ai-modal";
    overlay.className = "wk-ai-modal-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "wk-ai-title");

    overlay.innerHTML =
      '<div class="wk-ai-modal-container">' +
        '<div class="wk-ai-modal-header">' +
          '<div class="wk-ai-modal-title-group">' +
            '<h2 class="wk-ai-modal-title" id="wk-ai-title"><span>✨</span> QuickBooks Search Assistant AI</h2>' +
          '</div>' +
          '<button type="button" class="wk-ai-modal-close" id="wk-ai-close" aria-label="Close Assistant">&times;</button>' +
        '</div>' +
        '<div class="wk-ai-search-box-wrap">' +
          '<input type="search" class="wk-ai-search-input-field" id="wk-ai-input" placeholder="Ask anything (e.g. export products, pos split, error 6240, stock sync, P&L reports)..." autocomplete="off" spellcheck="false">' +
          '<button type="button" class="wk-ai-search-clear" id="wk-ai-clear" aria-label="Clear Search">&times;</button>' +
        '</div>' +
        '<div class="wk-ai-suggestions-wrap">' +
          '<span class="wk-ai-suggest-label">Suggestions:</span>' +
          '<button type="button" class="wk-ai-chip" data-q="Does it support queue system?">⚡ Queue System</button>' +
          '<button type="button" class="wk-ai-chip" data-q="What is new in latest version 4.0.0?">🚀 v4.0.0 Latest</button>' +
          '<button type="button" class="wk-ai-chip" data-q="How to export products to QuickBooks?">📦 Export Products</button>' +
          '<button type="button" class="wk-ai-chip" data-q="How does two-way stock synchronization work?">🔄 Two-Way Stock</button>' +
          '<button type="button" class="wk-ai-chip" data-q="How to resolve duplicate customer name error 6240?">⚡ Error 6240</button>' +
          '<button type="button" class="wk-ai-chip" data-q="How do Webkul POS split payments work?">💳 POS Split Payments</button>' +
          '<button type="button" class="wk-ai-chip" data-q="Where to view live Profit & Loss and Balance Sheet?">📊 Live P&L Reports</button>' +
          '<button type="button" class="wk-ai-chip" data-q="How does penny rounding reconciliation prevent balance errors?">🪙 Penny-Rounding</button>' +
          '<button type="button" class="wk-ai-chip" data-q="How to map taxes to QuickBooks tax codes?">🏷️ Tax Mapping</button>' +
          '<button type="button" class="wk-ai-chip" data-q="How to get Intuit developer client ID and secret?">🔑 Client ID & Secret</button>' +
          '<button type="button" class="wk-ai-chip" data-q="Why is Webkul superior to MyWorks and Webgility?">🏆 Why Webkul is Superior</button>' +
        '</div>' +
        '<div class="wk-ai-modal-results" id="wk-ai-results">' +
          '<div style="text-align: center; padding: 36px 20px; color: #64748b;">' +
            '<div style="font-size: 2.2rem; margin-bottom: 10px;">💡</div>' +
            '<h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #0f172a;">Ask your accounting, sync, or setup question</h3>' +
            '<p style="margin: 0; font-size: 0.9rem;">Type above or click any suggested prompt chip to instantly retrieve guidance verified against the plugin codebase and QuickBooks Online API.</p>' +
          '</div>' +
        '</div>' +
        '<div class="wk-ai-modal-footer">' +
          '<span>Press <kbd style="background:#e2e8f0;padding:2px 6px;border-radius:4px;font-size:0.75rem;">ESC</kbd> to close &bull; Powered by Webkul AI Knowledge Corpus</span>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    var closeBtn = document.getElementById("wk-ai-close");
    var input = document.getElementById("wk-ai-input");
    var clearBtn = document.getElementById("wk-ai-clear");
    var results = document.getElementById("wk-ai-results");

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });

    clearBtn.addEventListener("click", function () {
      input.value = "";
      clearBtn.classList.remove("visible");
      renderDefaultResults();
      input.focus();
    });

    input.addEventListener("input", function () {
      var q = input.value.trim();
      if (q.length > 0) {
        clearBtn.classList.add("visible");
        performSearch(q);
      } else {
        clearBtn.classList.remove("visible");
        renderDefaultResults();
      }
    });

    // Chip listeners
    var chips = overlay.querySelectorAll(".wk-ai-chip");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var query = chip.getAttribute("data-q");
        input.value = query;
        clearBtn.classList.add("visible");
        performSearch(query);
      });
    });

    function renderDefaultResults() {
      results.innerHTML =
        '<div style="text-align: center; padding: 36px 20px; color: #64748b;">' +
          '<div style="font-size: 2.2rem; margin-bottom: 10px;">💡</div>' +
          '<h3 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #0f172a;">Ask your accounting, sync, or setup question</h3>' +
          '<p style="margin: 0; font-size: 0.9rem;">Type above or click any suggested prompt chip to instantly retrieve guidance verified against the plugin codebase and QuickBooks Online API.</p>' +
        '</div>';
    }

    function openModal() {
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
      setTimeout(function () {
        input.focus();
      }, 50);
    }

    function closeModal() {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }

    function performSearch(query) {
      var qClean = normalizeQuery(query);
      var rawTokens = qClean.split(/\s+/).filter(function (t) { return t.length > 1; });

      if (rawTokens.length === 0) {
        renderDefaultResults();
        return;
      }

      // 1. Separate core intent tokens from framing words and generic noise
      var coreTokens = rawTokens.filter(function (t) {
        return !STOP_WORDS[t] && !FRAMING_WORDS[t] && !GENERIC_WORDS[t];
      });
      if (coreTokens.length === 0) {
        coreTokens = rawTokens.filter(function (t) { return !STOP_WORDS[t] && !GENERIC_WORDS[t]; });
      }
      if (coreTokens.length === 0) {
        coreTokens = rawTokens.filter(function (t) { return !STOP_WORDS[t]; });
      }
      if (coreTokens.length === 0) {
        coreTokens = rawTokens;
      }

      var stemmedCore = coreTokens.map(stem);
      var framingTokens = rawTokens.filter(function (t) { return FRAMING_WORDS[t]; });

      var scored = KNOWLEDGE_BASE.map(function (item) {
        var score = 0;
        var titleLower = item.title.toLowerCase();
        var titleWords = titleLower.replace(/[^a-z0-9\s]/g, " ").split(/\s+/);
        var titleStems = titleWords.map(stem);
        var ansLower = item.answer.toLowerCase();
        var pathLower = item.path.toLowerCase();

        // 1. Triggers matching
        item.triggers.forEach(function (trig) {
          var trigLower = trig.toLowerCase();
          if (trigLower === qClean || trigLower === query.toLowerCase().trim()) {
            score += 150;
          } else if (qClean.indexOf(trigLower) !== -1 || trigLower.indexOf(qClean) !== -1) {
            score += 100;
          }
          var trigWords = trigLower.split(/\s+/);
          var trigStems = trigWords.map(stem);

          coreTokens.forEach(function (ct) {
            if (trigWords.indexOf(ct) !== -1) score += 35;
          });
          stemmedCore.forEach(function (st) {
            if (trigStems.indexOf(st) !== -1) score += 20;
          });
          framingTokens.forEach(function (ft) {
            if (trigWords.indexOf(ft) !== -1) score += 5;
          });
        });

        // 2. Title matching
        if (titleLower.indexOf(qClean) !== -1) {
          score += 70;
        }
        coreTokens.forEach(function (ct) {
          if (titleWords.indexOf(ct) !== -1) score += 30;
        });
        stemmedCore.forEach(function (st) {
          if (titleStems.indexOf(st) !== -1) score += 18;
        });
        framingTokens.forEach(function (ft) {
          if (titleWords.indexOf(ft) !== -1) score += 4;
        });

        // 3. Path matching
        coreTokens.forEach(function (ct) {
          if (pathLower.indexOf(ct) !== -1) score += 15;
        });

        // 4. Body matching
        coreTokens.forEach(function (ct) {
          if (ansLower.indexOf(ct) !== -1) score += 5;
        });

        // 5. Core Intent Coverage Bonus: If all core intent tokens match item's triggers or title
        var itemAllText = (item.title + " " + item.triggers.join(" ")).toLowerCase();
        var matchedCore = 0;
        for (var k = 0; k < coreTokens.length; k++) {
          if (itemAllText.indexOf(coreTokens[k]) !== -1 || itemAllText.indexOf(stemmedCore[k]) !== -1) {
            matchedCore++;
          }
        }
        if (coreTokens.length > 0 && matchedCore === coreTokens.length) {
          score += 50;
        }

        return { item: item, score: score };
      });

      scored.sort(function (a, b) { return b.score - a.score; });

      var topMatch = scored[0];
      if (!topMatch || topMatch.score < 10) {
        results.innerHTML =
          '<div class="wk-ai-answer-card">' +
            '<span class="wk-ai-answer-badge">AI Assistant Notice</span>' +
            '<h3 class="wk-ai-answer-title">No exact match for "' + escapeHtml(query) + '"</h3>' +
            '<div class="wk-ai-answer-body">' +
              '<p>We couldn\'t find a high-confidence direct answer for your query. Try one of the suggested chips above or explore these core guides:</p>' +
              '<ul>' +
                '<li><a href="' + DOCS_BASE + 'installation.html">Installation &amp; Activation Guide</a></li>' +
                '<li><a href="' + DOCS_BASE + 'intuit-credentials.html">Get Intuit App Credentials (Client ID &amp; Secret)</a></li>' +
                '<li><a href="' + DOCS_BASE + 'auto-sync.html">Real-Time Product &amp; Stock Auto Sync</a></li>' +
                '<li><a href="' + DOCS_BASE + 'reports.html">Embedded Financial Reports (P&amp;L, Balance Sheet)</a></li>' +
                '<li><a href="' + DOCS_BASE + 'faq-notes.html">Troubleshooting &amp; Error Guides (Error 6240)</a></li>' +
                '<li><a href="' + DOCS_BASE + 'changelog.html">Changelog &amp; Version History (v4.0.0)</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="wk-ai-card-footer">' +
              '<a href="/woocommerce-quickbooks-connector/llms-full.txt" target="_blank" class="wk-ai-doc-link-btn">Search Complete Single-File Corpus (llms-full.txt) &rarr;</a>' +
            '</div>' +
          '</div>';
        return;
      }

      var best = topMatch.item;
      var related = scored.slice(1, 4).filter(function (s) { return s.score >= 15; });

      var html =
        '<div class="wk-ai-answer-card">' +
          '<span class="wk-ai-answer-badge"><span>✨</span> Verified AI Answer</span>' +
          '<h3 class="wk-ai-answer-title">' + best.title + '</h3>' +
          '<div class="wk-ai-answer-body">' +
            best.answer +
            (best.path ? '<span class="wk-ai-path-badge">📍 <strong>Config Path:</strong> ' + best.path + '</span>' : '') +
          '</div>' +
          '<div class="wk-ai-card-footer">' +
            '<a href="' + best.url + '" class="wk-ai-doc-link-btn">Read full guide in ' + best.pageTitle + ' &rarr;</a>' +
            '<button type="button" class="wk-ai-copy-btn" id="wk-copy-answer-btn">📋 Copy Answer</button>' +
          '</div>' +
        '</div>';

      if (related.length > 0) {
        html += '<h4 class="wk-ai-related-head">Related Knowledge Sections</h4>';
        related.forEach(function (rel) {
          html +=
            '<a href="' + rel.item.url + '" class="wk-ai-match-item">' +
              '<div class="wk-ai-match-title">' + rel.item.title + '</div>' +
              '<div class="wk-ai-match-snippet">In ' + rel.item.pageTitle + ' &bull; ' + (rel.item.path || 'Documentation') + '</div>' +
            '</a>';
        });
      }

      results.innerHTML = html;

      var copyBtn = document.getElementById("wk-copy-answer-btn");
      if (copyBtn) {
        copyBtn.addEventListener("click", function () {
          var cleanText = best.title + "\n\n" + best.answer.replace(/<[^>]+>/g, " ") + "\n\nConfig Path: " + best.path + "\nDocumentation: " + window.location.origin + best.url;
          navigator.clipboard.writeText(cleanText).then(function () {
            copyBtn.textContent = "✓ Copied to Clipboard!";
            setTimeout(function () { copyBtn.textContent = "📋 Copy Answer"; }, 2000);
          });
        });
      }

      // Close modal on link click and handle hash scrolling
      var docLinks = results.querySelectorAll(".wk-ai-doc-link-btn, .wk-ai-match-item, a");
      docLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
          var href = link.getAttribute("href");
          if (href && !href.startsWith("http") && !href.startsWith("//") && !href.startsWith("mailto:")) {
            closeModal();
            if (href.indexOf("#") !== -1) {
              var parts = href.split("#");
              var pathPart = parts[0];
              var hashPart = "#" + parts[1];
              var curPath = window.location.pathname;
              if (pathPart === "" || curPath.indexOf(pathPart) !== -1 || pathPart.indexOf(curPath) !== -1) {
                var targetEl = document.querySelector(hashPart);
                if (targetEl) {
                  e.preventDefault();
                  setTimeout(function () {
                    var offset = 90;
                    var bodyRect = document.body.getBoundingClientRect().top;
                    var elementRect = targetEl.getBoundingClientRect().top;
                    var offsetPosition = elementRect - bodyRect - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    history.pushState(null, null, hashPart);
                  }, 50);
                }
              }
            }
          }
        });
      });
    }

    function escapeHtml(str) {
      return str.replace(/[&<>"']/g, function (m) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
      });
    }

    window.openQuickBooksAiSearch = openModal;
    window.closeQuickBooksAiSearch = closeModal;
    window.quickBooksAiSearch = performSearch;
  }

  // 1. Persistent Floating Trigger Button (attached to document.body, outside #app so Vue never destroys it)
  function initFloatingTrigger() {
    if (document.getElementById("wk-ai-floating-trigger")) return;

    var floatBtn = document.createElement("button");
    floatBtn.type = "button";
    floatBtn.id = "wk-ai-floating-trigger";
    floatBtn.className = "wk-ai-floating-trigger";
    floatBtn.setAttribute("aria-label", "Search with AI Assistant");
    floatBtn.setAttribute("title", "Search with QuickBooks AI Assistant (⌘K / Ctrl+K)");
    floatBtn.innerHTML =
      '<span class="wk-ai-floating-sparkle">✨</span>' +
      '<span class="wk-ai-floating-text">Search with AI</span>' +
      '<kbd class="wk-ai-floating-kbd">⌘K</kbd>';

    floatBtn.addEventListener("click", function (e) {
      e.preventDefault();
      initModal();
      if (window.openQuickBooksAiSearch) window.openQuickBooksAiSearch();
    });

    document.body.appendChild(floatBtn);
  }

  // 2. Navbar Trigger Button (MutationObserver & periodic check to survive Vue hydration)
  function ensureNavbarTrigger() {
    var trigger = document.getElementById("wk-ai-search-trigger");
    var navbarItems = document.querySelector(".vp-navbar-items-wrapper");
    var searchBox = document.querySelector(".search-box");

    if (!trigger && (searchBox || navbarItems)) {
      trigger = document.createElement("button");
      trigger.type = "button";
      trigger.id = "wk-ai-search-trigger";
      trigger.className = "wk-ai-trigger-btn";
      trigger.setAttribute("aria-label", "Ask AI Assistant");
      trigger.setAttribute("title", "Ask QuickBooks AI Assistant (⌘K / Ctrl+K)");
      trigger.innerHTML =
        '<span class="wk-ai-badge-icon">✨</span>' +
        '<span class="wk-ai-btn-text">Ask AI</span>' +
        '<kbd class="wk-ai-kbd">⌘K</kbd>';

      if (searchBox && searchBox.parentNode) {
        searchBox.parentNode.insertBefore(trigger, searchBox);
      } else if (navbarItems) {
        navbarItems.appendChild(trigger);
      }

      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        initModal();
        if (window.openQuickBooksAiSearch) window.openQuickBooksAiSearch();
      });
    }
  }

  // 3. Changelog Left-Hand Sidebar Version Tree
  function ensureChangelogSidebar() {
    var isChangelog = window.location.pathname.indexOf("changelog") !== -1 || window.location.href.indexOf("changelog") !== -1;
    if (!isChangelog) return;

    var sidebar = document.querySelector(".vp-sidebar");
    if (!sidebar) return;

    var existingTree = sidebar.querySelector(".cl-sidebar-tree");
    if (existingTree) {
      setupScrollspy();
      return;
    }

    var changelogLinks = sidebar.querySelectorAll("a[href*='changelog']");
    if (!changelogLinks || changelogLinks.length === 0) return;

    var changelogLink = changelogLinks[0];
    var parentLi = changelogLink.closest("li");
    if (!parentLi) return;

    var treeUl = document.createElement("ul");
    treeUl.className = "vp-sidebar-children cl-sidebar-tree";
    treeUl.innerHTML =
      '<li class="cl-sidebar-item active" data-ver="v4-0-0"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v4-0-0"><span class="cl-side-num">v4.0.0</span><span class="cl-side-badge-latest">Latest</span></a></li>' +
      '<li class="cl-sidebar-item" data-ver="v3-0-2"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v3-0-2"><span class="cl-side-num">v3.0.2</span><span class="cl-side-date">Jul 2026</span></a></li>' +
      '<li class="cl-sidebar-item" data-ver="v3-0-1"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v3-0-1"><span class="cl-side-num">v3.0.1</span><span class="cl-side-date">Apr 2026</span></a></li>' +
      '<li class="cl-sidebar-item" data-ver="v3-0-0"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v3-0-0"><span class="cl-side-num">v3.0.0</span><span class="cl-side-date">Jan 2026</span></a></li>' +
      '<li class="cl-sidebar-item" data-ver="v2-2-0"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v2-2-0"><span class="cl-side-num">v2.2.0</span><span class="cl-side-date">Sep 2025</span></a></li>' +
      '<li class="cl-sidebar-item" data-ver="v2-1-0"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v2-1-0"><span class="cl-side-num">v2.1.0</span><span class="cl-side-date">May 2025</span></a></li>' +
      '<li class="cl-sidebar-item" data-ver="v2-0-0"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v2-0-0"><span class="cl-side-num">v2.0.0</span><span class="cl-side-date">Dec 2024</span></a></li>' +
      '<li class="cl-sidebar-item" data-ver="v1-0-6"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v1-0-6"><span class="cl-side-num">v1.0.6</span><span class="cl-side-date">Aug 2024</span></a></li>' +
      '<li class="cl-sidebar-item" data-ver="v1-0-2"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v1-0-2"><span class="cl-side-num">v1.0.2</span><span class="cl-side-date">May 2024</span></a></li>' +
      '<li class="cl-sidebar-item" data-ver="v1-0-0"><a class="route-link auto-link vp-sidebar-item cl-side-link" href="#v1-0-0"><span class="cl-side-num">v1.0.0</span><span class="cl-side-date">Initial</span></a></li>';

    parentLi.appendChild(treeUl);

    var links = treeUl.querySelectorAll(".cl-side-link");
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        var href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          var targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            var offset = 90;
            var bodyRect = document.body.getBoundingClientRect().top;
            var elementRect = targetEl.getBoundingClientRect().top;
            var elementPosition = elementRect - bodyRect;
            var offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
            history.pushState(null, null, href);
          }
        }
      });
    });

    setupScrollspy();
  }

  // Scrollspy for changelog cards
  function setupScrollspy() {
    var cards = document.querySelectorAll(".cl-card");
    if (!cards || cards.length === 0) return;

    function onScroll() {
      var scrollPos = window.scrollY + 120;
      var activeVer = null;
      cards.forEach(function (card) {
        var top = card.offsetTop;
        var height = card.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          activeVer = card.getAttribute("data-version");
        }
      });

      if (activeVer) {
        var items = document.querySelectorAll(".cl-sidebar-tree .cl-sidebar-item");
        items.forEach(function (item) {
          if (item.getAttribute("data-ver") === activeVer) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    }

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // 4. Setup Inline Trigger Buttons
  function setupInlineTriggers() {
    var inlineTrigger = document.getElementById("cl-inline-ai-trigger");
    if (inlineTrigger && !inlineTrigger.getAttribute("data-bound")) {
      inlineTrigger.setAttribute("data-bound", "true");
      inlineTrigger.addEventListener("click", function (e) {
        e.preventDefault();
        initModal();
        if (window.openQuickBooksAiSearch) window.openQuickBooksAiSearch();
      });
    }
  }

  // 5. Global Keyboard Shortcuts (⌘K, Ctrl+K, ESC)
  function setupGlobalShortcuts() {
    window.addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        initModal();
        if (window.openQuickBooksAiSearch) window.openQuickBooksAiSearch();
        return;
      }
      if (e.key === "Escape") {
        if (window.closeQuickBooksAiSearch) window.closeQuickBooksAiSearch();
      }
    });
  }

  // 6. Master Sync & MutationObserver to outlive Vue hydration
  function syncAll() {
    initFloatingTrigger();
    ensureNavbarTrigger();
    ensureChangelogSidebar();
    setupInlineTriggers();
  }

  // 7. Navigation Resilience Guard
  function setupNavigationGuard() {
    document.addEventListener("click", function (e) {
      var targetLink = e.target && e.target.closest ? e.target.closest("a.route-link") : null;
      if (targetLink) {
        var href = targetLink.getAttribute("href") || "";
        if (href === "/woocommerce-quickbooks-connector/" || href === "/woocommerce-quickbooks-connector") {
          setTimeout(function () {
            var main = document.querySelector("main");
            if (!main || main.innerText.trim().length === 0) {
              window.location.href = href;
            }
          }, 150);
        }
      }
    }, true);

    window.addEventListener("popstate", function () {
      setTimeout(function () {
        var main = document.querySelector("main");
        if (!main || main.innerText.trim().length === 0) {
          window.location.reload();
        }
      }, 150);
    });
  }

  function initEngine() {
    initModal();
    syncAll();
    setupGlobalShortcuts();
    setupNavigationGuard();

    var observer = new MutationObserver(function () {
      syncAll();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    var count = 0;
    var interval = setInterval(function () {
      syncAll();
      count++;
      if (count > 20) clearInterval(interval);
    }, 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEngine);
  } else {
    initEngine();
  }
})();
