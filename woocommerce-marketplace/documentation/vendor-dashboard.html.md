---
title: Vendor Dashboard Guide – WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-dashboard.html
---

# Vendor Dashboard Guide

The **Vendor Dashboard** is the primary command center where sellers manage their daily marketplace business—including catalog creation, order fulfillment, inventory management, customer communications, and financial tracking.

<a class="doc-image-link" href="./assets/marketplace-vendor-dashboard.webp"><img src="./assets/marketplace-vendor-dashboard.webp" alt="WooCommerce Multi-Vendor Marketplace Dedicated Vendor Dashboard Overview" /></a>

WooCommerce Multi-Vendor Marketplace provides **two flexible dashboard types** to accommodate different merchant workflows and theme requirements:

1. **Separate Dashboard (Dedicated Workspace at `/seller/vendor-dashboard/`):** A full-screen, standalone merchant workspace featuring an independent collapsible sidebar, top navigation bar, real-time KPI metric cards, interactive performance charts, and an operational Action Required queue.
2. **Default Dashboard (Integrated My Account at `/my-account/vendor-dashboard/`):** A dashboard integrated natively within the store's standard WooCommerce My Account menu, blending seamlessly into your active WordPress theme.

Vendors can switch between both dashboard presentations at any time. For a high-level UI navigation walkthrough, see the [Seller Panel Overview](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/seller-panel-overview.html).

---

## Admin Configuration: Enabling the Vendor Dashboard

Marketplace administrators can configure how vendors access their dashboard from the WordPress administrative backend:

Navigate to: **Marketplace > Settings > General**

<a class="doc-image-link" href="./assets/marketplace-admin-general-settings-dashboard.webp"><img src="./assets/marketplace-admin-general-settings-dashboard.webp" alt="WooCommerce Marketplace Admin General Settings - Vendor Dashboard Configuration" /></a>

### Key Dashboard Settings

| Setting Option | Description & Best Practice |
|---|---|
| **New vendor dashboard** | Dropdown configuration that controls vendor interface rollout:<br>• **Disabled — every vendor uses the classic dashboard:** Keeps all vendors on the native My Account dashboard.<br>• **Optional — each vendor chooses:** Allows each vendor to freely switch between the classic view and the new seller panel.<br>• **Forced — every vendor uses the new dashboard:** Enforces the redesigned modern seller panel for all vendors. |
| **Separate Vendor Dashboard** | Controls whether vendors get a separate dashboard similar to the admin dashboard. |
| **Seller panel page** | Displays the live URL where the dedicated dashboard is hosted (default: `https://your-domain.com/seller/vendor-dashboard/`). |
| **Vendor Page** | Selects the public page where all approved marketplace vendors are indexed in the store directory. |
| **Seller Central Page** | Selects the public landing page that introduces prospective sellers to joining your multi-vendor platform. Learn more in [Seller Central Configuration](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-seller-central.html). |

### Configuring URL Endpoints

To customize the URL slugs used across both dashboard variations, navigate to:

**Marketplace > Settings > Endpoints**

- **Seller Panel Endpoint:** The base URL slug for the dedicated dashboard (default: `seller`).
- **Dashboard Endpoint:** The home screen endpoint for the dashboard (default: `vendor-dashboard`).

::: tip Permalink Notice
After updating any marketplace endpoint slug in [Endpoint Configuration](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-endpoints.html), always navigate to **Settings > Permalinks** in WordPress and click **Save Changes** to flush rewrite rules and prevent 404 errors.
:::

---

## Understanding the Two Dashboard Modes

The marketplace provides two distinct presentation experiences designed for different operational workflows:

<div class="modes-showcase">
<div class="modes-grid">

<div class="mode-card mode-card--separate">
<div class="mode-card__badge-wrap">
<span class="mode-card__badge mode-card__badge--primary">Dedicated Workspace</span>
<code class="mode-card__endpoint">/seller/vendor-dashboard/</code>
</div>
<div class="mode-card__header">
<div class="mode-card__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M14 9h4"/><path d="M14 15h4"/></svg>
</div>
<div class="mode-card__titles">
<p class="mode-card__title">Separate Dashboard</p>
<p>Full-screen standalone merchant console</p>
</div>
</div>
<ul class="mode-card__features">
<li><strong>Independent Workspace:</strong> Completely isolated from the storefront theme with a distraction-free full-screen layout.</li>
<li><strong>Collapsible Multi-Tier Sidebar:</strong> Quick-access navigation tabs across all daily store management menus.</li>
<li><strong>Live KPI Metric Cards:</strong> Real-time summary cards for total sales, orders, average order value, and account standing.</li>
<li><strong>Action Required Queue:</strong> Priority alert filter for pending orders, low stock items, and unread notifications.</li>
<li><strong>Custom Themes & Layouts:</strong> Chart color palettes and horizontal/vertical form layouts.</li>
</ul>
<div class="mode-card__footer">
<span class="mode-card__footer-label">Admin Trigger:</span>
<span>Enabled via <code>New vendor dashboard</code> in General Settings</span>
</div>
</div>

<div class="mode-card mode-card--default">
<div class="mode-card__badge-wrap">
<span class="mode-card__badge mode-card__badge--secondary">Theme Integrated</span>
<code class="mode-card__endpoint">/my-account/vendor-dashboard/</code>
</div>
<div class="mode-card__header">
<div class="mode-card__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
</div>
<div class="mode-card__titles">
<p class="mode-card__title">Default Dashboard</p>
<p>Native WooCommerce My Account view</p>
</div>
</div>
<ul class="mode-card__features">
<li><strong>Native Theme Integration:</strong> Inherits your active WordPress theme’s header, footer, typography, and styling.</li>
<li><strong>Unified My Account Menu:</strong> Vendor links sit naturally alongside customer account tabs (Orders, Downloads, Addresses).</li>
<li><strong>Tabular Summaries:</strong> Clean, straightforward tabular views of recent customer orders, products, and payout balances.</li>
<li><strong>Zero Configuration:</strong> Works immediately without requiring custom endpoint permalinks or sub-path routing.</li>
<li><strong>Full Feature Parity:</strong> Access to all catalog, inventory, order fulfillment, and payout withdrawal functions.</li>
</ul>
<div class="mode-card__footer">
<span class="mode-card__footer-label">Admin Trigger:</span>
<span>Default fallback when dedicated console is turned off</span>
</div>
</div>

</div>

<div class="modes-switcher-banner">
<div class="modes-switcher-banner__icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16V4m0 0L3 8m4-4l4 4"/><path d="M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>
</div>
<div class="modes-switcher-banner__text">
<strong>Bi-Directional View Switcher:</strong> Vendors can seamlessly toggle between both views at any time. Click <code>Classic view</code> at the bottom of the separate sidebar to return to My Account, or click <code>Go to Seller Dashboard</code> inside My Account to switch back to the dedicated console.
</div>
</div>
</div>

---

## Separate Dashboard

The Separate Dashboard delivers an expansive, distraction-free environment tailored for high-volume store operations.

<a class="doc-image-link" href="./assets/dashboard.webp"><img src="./assets/dashboard.webp" alt="WooCommerce Marketplace Separate Seller Dashboard Workspace" /></a>

### 1. Top Navigation Bar

The top bar remains pinned across all seller screens for quick navigation:

- **Sidebar Toggle:** Collapses or expands the navigation sidebar to maximize screen space for tables and charts.
- **Store Identity:** Displays the vendor's store logo and shop name (e.g., *Aurora Athletics*).
- **Global Search:** Allows searching orders, products, and customer queries from anywhere in the panel.
- **Notifications Bell:** Displays real-time alerts related to order updates, product approvals, and vendor reviews.
- **User Account Menu:** Direct dropdown to edit profile details and log out.

---

### 2. Collapsible Sidebar Navigation

The sidebar organizes all marketplace operations into logical functional groups:

- **Dashboard:** Executive performance overview, KPI cards, charts, and operational queues.
- **Store Edit:** Public storefront profile, banner upload, store hours, social links, and [KYC verification](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-kyc.html).
- **Catalog:**
  - *List Your Product:* Quick access to product creation.
  - *Products:* Catalog management grid, 12-criteria filter drawer, and barcode actions.
  - *Add Product:* Structured 3-step product creation wizard.
  - *Bulk Upload:* CSV spreadsheet imports for products and catalog offers.
  - *Search Products (Select & Sell):* Search and sell existing catalog products.
- **Inventories:**
  - *Manage Inventory:* Inline stock quantity, SKU, GTIN, and stock status editing.
  - *Manage Pricing:* Inline regular price, sale price, and calendar date scheduler.
- **Sales:**
  - *Order History:* Vendor order ledger, filter drawer, and dispatch scheduling.
  - *Transactions & Earnings:* Payout transaction ledger and remaining balance.
  - *Store Pickup Orders:* Store pickup order list and customer OTP code verification.
- **Performance:**
  - *Account Health:* Health score (Healthy, At Risk, Unhealthy) and cancellation rate metrics.
  - *Seller Reviews:* Customer reviews and feedback ratings for your store.
  - *Product Reviews:* Customer ratings left on your products.
- **Reporting:**
  - *Sales Reports:* Visual revenue, commission, and vendor earnings charts.
  - *Product Reports:* Best-selling products and stock depletion rates.
  - *Customer Reports:* Buyer statistics and repeat purchase metrics.
- **Customers:**
  - *All Customers:* Comprehensive customer directory with lifetime spend totals.
  - *Shop Followers:* Manage followers and broadcast in-app notifications or emails.
- **Communication:**
  - *Ask Admin:* Support ticketing system between the vendor and the marketplace administrator.
  - *Admin News:* Official announcements published by the marketplace administrator.
- **Vendor Staff:** Sub-account management with a 40-item delegatable permissions matrix. See the full [Vendor Staff Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).
- **Vacation:** Schedule temporary store closings and configure purchase blocking. See [Vacation Mode](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-vacation.html).
- **Settings:**
  - *General:* Account credentials and password updates.
  - *Site Setting:* Product form navigation layouts (Horizontal Tabs, Vertical Tabs, Stacked Form).
  - *Graph Settings:* Allows customizing the color palette of charts and graphs and changing graph types.

---

### 3. Dashboard Widgets & Key Metrics

The home screen (`/seller/vendor-dashboard/`) presents actionable data to help vendors make informed merchandising decisions:

#### Overall Details (KPI Metric Cards)
Eight real-time summary cards provide an immediate snapshot of your business:
- **Total Sales:** Lifetime gross sales value generated by your items.
- **Total Orders:** Total number of customer orders received.
- **Total Customers:** Unique buyers who have purchased from your store.
- **Average Order Sell:** Average order value across completed transactions.
- **Total Payout:** Total amount disbursed to you by the marketplace administrator.
- **Remaining Payout:** Net earnings currently available for withdrawal.
- **Customer Feedback:** Your store's average customer review rating (e.g., 4.8 / 5.0).
- **Account Health:** Operational standing badge (e.g., *Healthy · 98/100*).

---

#### Action Required Queue
Surfaces pressing operational roadblocks that require immediate attention:
- **Pending Orders:** Orders waiting for seller review or payment confirmation.
- **Orders to Ship:** Processing orders ready for packing and dispatch.
- **Low Stock:** Products that have reached or dropped below their low-stock threshold.
- **Notifications:** Order alerts, product status updates, and administrative announcements.

Clicking any item in the queue filters and displays those records instantly.

---

#### Profile Score Banner
An interactive circular SVG progress gauge that calculates your profile completeness percentage:
- Evaluates essential store assets: logo, banner, store hours, return policy, shipping policy, privacy policy, and social links.
- Click **Complete Your Profile** to jump directly to any missing sections under [Vendor Profile](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html).

---

#### Interactive Performance Charts
Visualizes sales, orders, and customer acquisition over time:
- **Chart Mode Switching:** Toggle between **Line**, **Bar**, and **Area** charts for sales and commission data.
- **Order Status Distribution:** View order statuses (*Completed*, *Processing*, *On Hold*, *Canceled*) as an interactive **Doughnut**, **Pie**, or **Bar** chart.
- **Date Range Presets:** Filter data by *Today*, *Yesterday*, *Last 7 Days*, *Last 30 Days*, *This Month*, *Last Month*, or choose custom start and end dates.

---

#### Trends & Comparative Analytics
Compares current performance against the preceding period (e.g., *October* vs. *September*), providing visual trendlines and percentage delta badges for revenue, orders, and new customers.

---

#### Recent Orders & Top Selling Products
- **Recent Orders Table:** Quick overview of the latest orders with Order ID, customer name, placement date, order total, status, and direct view links.
- **Top 5 Selling Products:** Highlights your best-performing products by units sold and revenue.

---

## Customizing Form Layouts (Site Settings)

Vendors using the separate dedicated dashboard can customize how their product editing forms are presented by navigating to:

**Settings > Site Setting** (`/seller/seller-site-setting/`)

<a class="doc-image-link" href="./assets/vendor-site-setting-product-form.webp"><img src="./assets/vendor-site-setting-product-form.webp" alt="Vendor Dashboard Site Settings - Product Form Navigation Layouts" /></a>

### Form Navigation Layout Options

| Layout Mode | Description | Recommended For |
|---|---|---|
| **Horizontal Tabs** | Displays product sections (General, Inventory, Shipping, Attributes, etc.) as horizontal tabs across the top of the form. | Standard desktop displays and widescreen monitors. |
| **Vertical Tabs** | Displays product sections in a vertical sidebar navigation menu on the left side of the form. | Rapid switching between complex variable product configurations. |
| **Stacked Form** | Displays all sections as vertically stacked, expandable accordion cards on a single scrollable page. | Streamlined, continuous editing without tab switching. |

Additional display options:
- **Product Stepper:** Show or hide the 3-step progress bar on product creation forms.
- **Listing Completeness:** Show or hide the real-time listing completeness score meter on the product edit screen.

---

## Customizing Chart Colors (Graph Settings)

Vendors can personalize the color palette used in dashboard charts and visual reports:

Navigate to: **Settings > Graph Setting** (`/seller/seller-graph-setting/`)

<a class="doc-image-link" href="./assets/vendor-graph-setting-dashboard.webp"><img src="./assets/vendor-graph-setting-dashboard.webp" alt="Vendor Dashboard Graph Settings - Chart Color Customization" /></a>

Vendors can select a module and pick custom accent colors using the interactive color picker:
1. **Dashboard:** Customize chart types (Bar, Line, Area, Doughnut, and Pie, wherever supported) and colors for Sales vs Commission, Customers vs Orders, Sales Trends, Order Trends, Order Status, Top Billing Countries, Profile Score, and dashboard stat card sparklines.
2. **Reports:** Customize chart types (Line, Bar, Area, Horizontal Bar, and Doughnut, wherever supported) and series colors for Sales, Commission, Orders, Average Order Value, Tax Collected, Top Tax Rates, Refunds, Payment Methods, Units Sold, and Total Customers reports.
3. **Transactions:** Customize the colors of sparklines displayed on earning cards, including Total Earning, Total Withdraw, Total Pending Withdraw, Total Refunded, and Last Withdraw.
4. **Performance:** Customize the colors of the Account Health score indicator, including Unhealthy, At Risk, Healthy, and Marker indicators.
5. **Products:** Customize the colors of the Listing Completeness graph, including the Filled and Track indicators.

> [!NOTE] Default Graph Settings
> Vendors can also restore the default graph settings using the **Reset Section to Default** option available in each section.

---

## Default Dashboard

When the separate dedicated dashboard is not enabled—or when a vendor prefers the native theme layout—the vendor dashboard is accessed directly from WooCommerce My Account:

**My Account > Vendor Dashboard** (`/my-account/vendor-dashboard/`)

<a class="doc-image-link" href="./assets/vendor-dashboard.webp"><img src="./assets/vendor-dashboard.webp" alt="Default WooCommerce My Account Vendor Dashboard View" /></a>

The **Default Dashboard** allows vendors to manage marketplace activities and access core management features directly within your store's native WordPress theme.

### Core Sections & Menu Links

The default dashboard menu provides direct access to essential merchant operations:

- **Order History**: Track complete customer order history, view order details, and follow dispatch statuses.
- **Transactions**: Review detailed transaction records including Transaction IDs, dates, and disbursed amounts.
- **Notifications**: Stay updated on order alerts, product status updates, and administrative announcements.
- **Shop Followers**: View your shop's follower list and broadcast updates to interested buyers.
- **My Profile**: Update vendor store details, shop banners, opening hours, policies, and KYC verification documents.
- **Ask to Admin**: Direct ticketing system to submit queries to the marketplace administrator and track responses.

### Features of the Default Dashboard

- **Native Theme Compatibility:** Renders directly within your theme's layout, maintaining your site's header, footer, and styling.
- **My Account Navigation:** Vendor links appear alongside standard customer account tabs (*Orders*, *Downloads*, *Addresses*, *Account Details*).
- **Tabular Summaries:** Clean tabular summaries of recent orders, products, and commission totals.
- **Full Capabilities:** Every core marketplace capability—product management, order fulfillment, inventory management, and payouts—remains fully accessible.

---

## How to Switch Between Dashboard Views

Vendors can switch between the two dashboard views seamlessly:

- **Switching to Default Dashboard:** From the Separate Dashboard (`/seller/`), click the **Classic view** button at the bottom of the sidebar. You will be redirected immediately to the Default My Account vendor view (`/my-account/vendor-dashboard/`).
- **Switching to Separate Dashboard:** From the Default My Account view, click the dedicated dashboard banner or link to return to the full-screen console (`/seller/vendor-dashboard/`).
