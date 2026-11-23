---
title: Configuration – Endpoints
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-endpoints.html
---

# Configuration – Endpoints

The **Endpoints** configuration allows the admin to manage dynamic URL segments used across the vendor dashboard and related pages in the WooCommerce Multi-Vendor Marketplace.

---

## Endpoints Overview

- Endpoints add an extra segment to a page URL
- Used to load different sections without creating separate pages
- Commonly used for:
  - Vendor dashboard pages
  - Vendor profile pages
  - Orders, settings, and other vendor actions
- Fully configurable by the admin

---

## What is an Endpoint?

- An endpoint is an additional URL segment appended to a page
- Example:
  - Base URL: `example.com/vendorprofile`
  - With endpoint: `example.com/vendorprofile/edit-vendor-profile`
- Helps display specific sections such as:
  - Edit Profile
  - Dashboard
  - Order History
  - Settings pages

---

## Admin Configuration

- Navigate to:
  - **Marketplace > Settings > Endpoints**
- The admin can configure:
  - **Endpoint** – URL slug appended to the page
  - **Title** – Menu label shown in the vendor dashboard

---

## Endpoint Customization

- Each endpoint URL can be customized
- Endpoints must be **unique** to avoid conflicts
- Any changes reflect immediately in vendor dashboard URLs
- **Hide Dashboard Sections**: Admins can easily hide individual vendor dashboard sections directly from the Endpoints settings by disabling their respective endpoints.
- Recommended practice:
  - Use a prefix such as **`vendor-`** to avoid collisions

---

## Examples

- **Dashboard**
  - Endpoint: `dashboard`
  - Title: `Dashboard`

- **Order History**
  - Endpoint: `order-history`
  - Title: `Order History`

---

## Vendor Dashboard Menu

<a class="doc-image-link" href="./assets/dashboard.webp"><img src="./assets/dashboard.webp" alt="Vendor Dashboard Endpoints" /></a>

- Endpoint **Titles** appear as menu items in the vendor dashboard
- Clicking a menu item loads the corresponding page using its endpoint

---

## Hide Customer WooCommerce Endpoints

- Admin can hide **customer-related WooCommerce endpoints** from the vendor dashboard
- Prevents vendors from seeing irrelevant customer menu items
- Improves vendor dashboard clarity and usability

### Already Registered WooCommerce Endpoints

- `dashboard`
- `orders`
- `downloads`
- `edit-address`
- `payment-methods`
- `edit-account`
- `customer-logout`
- `order-pay`
- `order-received`
- `view-order`
- `lost-password`
- `add-payment-method`
- `delete-payment-method`
- `set-default-payment-method`

### Behavior

- These customer endpoints can be hidden across **all vendor endpoint pages**
- Only vendor-relevant endpoints remain visible in the dashboard
- **Re-show Logout Endpoint**: If customer endpoints are hidden, admins can use a specific option to keep the **Logout** endpoint visible, ensuring vendors can still log out easily.

---

## Customer Endpoint Visibility Controls

At the top of the **Endpoints** settings screen, the administrator can manage whether standard WooCommerce customer navigation items appear alongside vendor management links:

<a class="doc-image-link" href="./assets/endpoints.webp"><img src="./assets/endpoints.webp" alt="Endpoints" /></a>

- **Hide Customer endpoints on all vendor endpoints pages**
  - **Default**: Enabled (Checked)
  - **How it works**: Hides standard customer account endpoints (such as *Downloads*, *Addresses*, *Payment Methods*, and default customer *Orders*) from the vendor navigation menu across all vendor endpoint screens.
  - **Benefit**: Keeps the seller interface focused purely on commercial store management and reduces navigation clutter.

- **Show Logout endpoint on vendor dashboard (when customer endpoints are hidden)**
  - **Default**: Disabled (Unchecked)
  - **How it works**: When customer endpoints are hidden, the native WooCommerce logout link might also be hidden from the sidebar. Enabling this setting ensures a dedicated **Logout** button remains visible in the vendor dashboard menu so sellers can log out with one click.

---

## Configurable Marketplace Endpoints Directory

The **[Webkul WooCommerce Multi Vendor Marketplace plugin](https://store.webkul.com/woocommerce-multivendor-marketplace.html)** includes **44 dedicated endpoint configurations** across the Core marketplace platform, Pro features, MP Select & Sell, and Seller Panel V2. Each endpoint section in the admin panel allows configuring a custom **Endpoint slug** (the URL path segment) and a custom **Menu Title** (the label shown in navigation menus). Below is the complete directory of default slugs and target features:

<div class="wkmp-endpoint-directory-wrapper">
<div class="wkmp-endpoint-scroll-hint">
  <span>⇄ Scroll horizontally to view full table details</span>
  <span class="hint-badge">44 Endpoints Configured</span>
</div>
<div class="wkmp-endpoint-table-scroll">

| # | Endpoint Section | Default Slug | Description & Target Page |
| :---: | :--- | :--- | :--- |
| 1 | **Vendor Dashboard** | `vendor-dashboard` | Central vendor dashboard overview showing sales statistics, recent activity, and quick summaries. See [Vendor Dashboard](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-dashboard.html). |
| 2 | **Products List** | `vendor-products` | Catalog table listing all products owned by the vendor, with stock statuses, prices, and edit links. See [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html). |
| 3 | **Add Product** | `vendor-add-product` | Classic product creation screen for publishing simple, variable, grouped, or digital products. See [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html). |
| 4 | **Edit Product** | `vendor-edit-product` | Classic product editor screen for updating product descriptions, inventory, galleries, and variations. See [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html). |
| 5 | **Orders History** | `vendor-orders` | Order management screen where vendors process customer purchases and track shipping fulfillment. See [Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html). |
| 6 | **Transactions** | `vendor-transactions` | Financial transaction ledger showing commission credits, debits, adjustments, and current wallet balance. See [Vendor Transaction Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-transaction-management.html). |
| 7 | **Withdrawal** | `vendor-withdrawal` | Vendor payout request portal to withdraw store earnings and track payout history. See [Vendor Payout Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-payout-management.html). |
| 8 | **My Profile** | `vendor-profile` | Vendor storefront configuration page for store logos, banners, social media profiles, and shop descriptions. See [Vendor Profile](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html). |
| 9 | **Notifications** | `vendor-notifications` | Seller notification hub displaying alerts for new orders, low stock, product reviews, and admin updates. See [Vendor Notification](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-notification.html). |
| 10 | **Shop Followers** | `vendor-shop-followers` | Customer follower directory showing registered shoppers who follow the vendor's storefront. See [Vendor Shop Followers](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-shop-followers.html). |
| 11 | **Ask Admin** | `vendor-ask-admin` | Internal communication portal for vendors to submit inquiries or support tickets directly to the marketplace administrator. See [Ask to Admin](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/ask-to-admin.html). |
| 12 | **Products from Vendor** | `vendor-all-products` | Front-facing endpoint displaying all catalog products supplied by a specific vendor. See [Customer PLP](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-plp.html). |
| 13 | **Vendors Store** | `vendor-store` | Public storefront endpoint showing recent product releases and seller profile header for a specific vendor. See [Vendor Profile](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html). |
| 14 | **Feedbacks** | `vendor-feedbacks` | Review management page where sellers can view customer ratings, comments, and star evaluations. See [Reviews & Rating](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-reviews.html). |
| 15 | **Add Feedback** | `add-feedback` | Front-end customer review submission form allowing buyers to rate and review their seller experience. See [Customer Reviews & Ratings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-review-rating.html). |
| 16 | **Favorite Vendors** | `favorite-vendors` | Customer account screen showing the list of marketplace sellers bookmarked by the shopper. See [Follow Shop](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-follow-shop.html). |
| 17 | **Vacation** | `vendor-vacation` | Store holiday management allowing vendors to pause purchases and display vacation notices to shoppers. See [Vendor Vacation](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-vacation.html). |
| 18 | **Store Pickup** | `store-pickup` | Local pickup configuration where vendors set up physical store addresses, pickup hours, and collection points. See [Vendor Store Pickup](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-store-pickup.html). |
| 19 | **Select and Sell** <Badge text="Select & Sell" type="tip" /> | `select-and-sell` | Catalog mapping dashboard where vendors manage products they sell from existing marketplace catalog listings. See [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html). |
| 20 | **Add Select and Sell Product** <Badge text="Select & Sell" type="tip" /> | `add-selected-sell-product` | Product assignment workflow where vendors attach custom pricing, stock, condition notes, and photos to an existing catalog item. See [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html). |
| 21 | **Edit Select and Sell Product** <Badge text="Select & Sell" type="tip" /> | `edit-selected-sell-product` | Product offer editor for modifying price, available stock inventory, and condition notes for an assigned catalog product. See [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html). |
| 22 | **Shippings** | `vendor-shippings` | Vendor shipping manager to create custom shipping methods, regional zones, and flat rates. See [Vendor Shipping Zone Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-shipping-zone-management.html). |
| 23 | **Become a Vendor** | `become-vendor` | Public vendor application page where customers or new visitors submit merchant registration requests. See [Vendor Registration Process](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-registration-process.html). |
| 24 | **Admin Dashboard** | `separate-dashboard` | Dedicated admin access endpoint to oversee marketplace metrics and seller operations. See [Vendor Separate Dashboard](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-separate-dashboard.html). |
| 25 | **Admin News** | `admin-news` | Seller noticeboard where marketplace admins post policy updates, system maintenance alerts, and broadcast announcements. See [Admin News](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-news.html). |
| 26 | **Vendor Staff** | `vendor-staff` | Multi-user staff manager allowing vendors to create assistant logins with custom operational permissions. See [Admin Staff Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html) and [Vendor Staff](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html). |
| 27 | **Seller Panel Base** | `seller` | URL base slug and page title for the standalone seller portal outside the WooCommerce My Account area (Default Title: *Seller Panel*). See [Standalone Seller Panel Base Configuration](#standalone-seller-panel-base-configuration). |
| 28 | **List Your Product** <Badge text="Seller V2" type="warning" /> | `seller-list-product` | Next-generation product authoring and listing wizard in Seller Panel V2 with category picker, GTIN/barcode inputs, Magic AI content generation, and step-by-step publishing. See [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html). |
| 29 | **Bulk Upload** <Badge text="Seller V2" type="warning" /> | `seller-bulk-upload` | CSV/XLS spreadsheet product import workspace with sample file downloads, header mapping, and background batch product creation. See [Bulk Upload](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/bulk-upload.html). |
| 30 | **Search Products** <Badge text="Seller V2" type="warning" /> | `seller-search-products` | Real-time search portal enabling vendors to find existing marketplace catalog items by name, SKU, or category to quickly add their own selling offers. See [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html). |
| 31 | **Sell Catalog Products Bulk** <Badge text="Seller V2" type="warning" /> | `seller-bulk-sell-products` | Batch CSV import utility specifically for Select & Sell, allowing sellers to map and sell dozens of catalog items at once with custom stock and prices. See [Bulk Upload](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/bulk-upload.html) and [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html). |
| 32 | **Manage Inventory** <Badge text="Seller V2" type="warning" /> | `seller-manage-inventory` | Centralized stock management dashboard featuring stock status badges, low-stock thresholds, and high-speed inline stock quantity updates. See [Manage Inventory](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-inventories.html). |
| 33 | **Inventory Variations** <Badge text="Seller V2" type="warning" /> | `seller-manage-inventory-variations` | Granular variation stock manager displaying individual SKUs and stock quantities for all attribute variations of variable products. See [Manage Inventory](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-inventories.html). |
| 34 | **Manage Pricing** <Badge text="Seller V2" type="warning" /> | `seller-manage-pricing` | Centralized pricing table allowing vendors to quickly inspect and edit regular prices, sale prices, and schedule discounts directly in bulk or inline. See [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html). |
| 35 | **Pricing Variations** <Badge text="Seller V2" type="warning" /> | `seller-manage-pricing-variations` | Dedicated pricing management view for variable product child variations, allowing variation-by-variation regular and sale price adjustments. See [Manage Inventory](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-inventories.html). |
| 36 | **Account Health** <Badge text="Seller V2" type="warning" /> | `seller-account-health` | Seller performance and compliance scorecard with visual health meters evaluating Order Defect Rate (ODR), Cancellation Rate, Late Dispatch Rate, and policy compliance. See [Vendor Account Health](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-account-health.html). |
| 37 | **Seller Reviews** <Badge text="Seller V2" type="warning" /> | `seller-reviews` | Store-level feedback management hub displaying multi-criteria customer ratings (Price, Value, Quality) and seller service reviews. See [Vendor Seller Review](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-seller-review.html). |
| 38 | **Product Reviews** <Badge text="Seller V2" type="warning" /> | `seller-product-reviews` | Catalog review portal aggregating all customer ratings and buyer comments submitted across the vendor's published products. See [Vendor Product Review](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-review.html). |
| 39 | **Sales Reporting** <Badge text="Seller V2" type="warning" /> | `seller-reporting-sales` | Interactive sales analytics dashboard displaying gross sales revenue, net earnings, order volume, average order value, and date range trend charts. See [Vendor Sales Reporting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-sales-reporting.html). |
| 40 | **Products Reporting** <Badge text="Seller V2" type="warning" /> | `seller-reporting-products` | Product-specific performance reports identifying top-selling catalog items, high-revenue products, units sold, and stock turnover rates. See [Vendor Products Reporting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-products-reporting.html). |
| 41 | **Customers Reporting** <Badge text="Seller V2" type="warning" /> | `seller-reporting-customers` | Customer analytics interface showing repeat buyer ratios, top spending customers, customer acquisition metrics, and geographic trends. See [Vendor Customer Reporting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-reporting.html). |
| 42 | **Customers** <Badge text="Seller V2" type="warning" /> | `seller-customers` | Dedicated customer directory listing registered buyers who have purchased from the vendor, including order history, contact info, and lifetime spend. See [Vendor Customer List](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-list.html). |
| 43 | **Graph Setting** <Badge text="Seller V2" type="warning" /> | `seller-graph-setting` | Seller dashboard chart configuration screen allowing vendors to choose chart types (Line, Bar, Spline) and customize color palettes for all visual analytics widgets. See [Vendor Graph Setting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-graph-setting.html). |
| 44 | **Site Setting** <Badge text="Seller V2" type="warning" /> | `seller-site-setting` | Seller Panel V2 workflow customization screen to configure product edit navigation layouts (Horizontal Tabs, Vertical Tabs, Stacked), enable stepper wizards, and view listing completeness. See [Vendor Site Setting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-site-setting.html). |

</div>
</div>

---

## Detailed Directory of the Newly Added 20 Endpoints

The 20 endpoints below provide specialized functionality supporting **Select & Sell** catalog sharing and the modern **Seller Panel V2** standalone merchant workspace. Below is an exhaustive breakdown of each newly introduced endpoint, categorized by functional domain:

### 1. Select & Sell Endpoints (3 Endpoints)

The **MP Select and Sell** feature allows multiple vendors to attach their offers (custom price, inventory, condition) to a single master product in the marketplace catalog, eliminating duplicate catalog listings.

#### 1. Select and Sell (`select-and-sell`)
- **Default Slug**: `select-and-sell`
- **Default Title**: `Select and Sell`
- **Target Page & Capability**: Loads the vendor's Select & Sell management dashboard. Displays a data table of all existing catalog products that the merchant is currently offering. Shows current selling prices, stock levels, product status, and action links to modify terms or view competitor offers.
- **Reference Guide**: [Admin Select and Sell](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-select-and-sell.html) and [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html).

#### 2. Add Select and Sell Product (`add-selected-sell-product`)
- **Default Slug**: `add-selected-sell-product`
- **Default Title**: `Add Select and Sell Product`
- **Target Page & Capability**: Onboarding screen loaded when a vendor chooses an existing catalog item to sell. Allows the seller to configure their specific regular price, sale price, stock quantity, stock status, product condition (New, Used, Refurbished), and upload seller-specific gallery images without re-creating product descriptions or taxonomies.
- **Reference Guide**: [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html).

#### 3. Edit Select and Sell Product (`edit-selected-sell-product`)
- **Default Slug**: `edit-selected-sell-product`
- **Default Title**: `Edit Select and Sell Product`
- **Target Page & Capability**: Dedicated editor interface for existing mapped catalog products. Sellers can update price points, modify available stock inventory, adjust promotional sale dates, or update condition descriptions.
- **Reference Guide**: [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html).

---

### 2. Catalog & Bulk Listing Endpoints (4 Endpoints)

These endpoints provide modern catalog authoring and bulk spreadsheet import tools within the Seller Panel V2.

#### 4. List Your Product (`seller-list-product`)
- **Default Slug**: `seller-list-product`
- **Default Title**: `List Your Product`
- **Target Page & Capability**: The modern Seller Panel V2 product authoring workflow. Replaces the legacy product form with an intuitive wizard featuring category search trees, GTIN/EAN/UPC barcode validation, Magic AI automated product copywriting, and instant publication controls.
- **Reference Guide**: [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html) and [Generate Product Content](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/generate-product-content.html).

#### 5. Bulk Upload (`seller-bulk-upload`)
- **Default Slug**: `seller-bulk-upload`
- **Default Title**: `Bulk Upload`
- **Target Page & Capability**: End-to-end spreadsheet catalog import suite. Vendors can download sample CSV and XLS templates, upload bulk product spreadsheets, map spreadsheet columns to WooCommerce attributes, and execute automated background import jobs with error reporting.
- **Reference Guide**: [Bulk Upload](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/bulk-upload.html).

#### 6. Search Products (`seller-search-products`)
- **Default Slug**: `seller-search-products`
- **Default Title**: `Search Products`
- **Target Page & Capability**: High-speed catalog search engine within Seller Panel V2. Allows merchants to search the marketplace catalog by product title, SKU, barcode, or category to quickly locate an existing product and click **Sell Yours** to open the Select & Sell assignment workflow.
- **Reference Guide**: [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html).

#### 7. Sell Catalog Products Bulk (`seller-bulk-sell-products`)
- **Default Slug**: `seller-bulk-sell-products`
- **Default Title**: `Sell Catalog Products Bulk`
- **Target Page & Capability**: Batch assignment tool for Select & Sell. Vendors upload a CSV mapping existing product IDs or SKUs with their custom prices and stock quantities, attaching their store to dozens or hundreds of existing catalog items in a single batch operation.
- **Reference Guide**: [Bulk Upload](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/bulk-upload.html) and [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html).

---

### 3. Fast Inventory & Pricing Management Endpoints (4 Endpoints)

High-speed operational endpoints designed to let merchants maintain inventory levels and pricing without navigating into individual product editing pages.

#### 8. Manage Inventory (`seller-manage-inventory`)
- **Default Slug**: `seller-manage-inventory`
- **Default Title**: `Manage Inventory`
- **Target Page & Capability**: Dedicated inventory control dashboard with stock status indicators (In Stock, Out of Stock, On Backorder), SKU references, and inline stock quantity editing directly inside the table grid.
- **Reference Guide**: [Manage Inventory](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-inventories.html).

#### 9. Inventory Variations (`seller-manage-inventory-variations`)
- **Default Slug**: `seller-manage-inventory-variations`
- **Default Title**: `Inventory Variations`
- **Target Page & Capability**: Granular stock manager for variable products. Expands variable product hierarchies to show every attribute combination (e.g., Size: L, Color: Blue) with individual SKUs and editable stock levels.
- **Reference Guide**: [Manage Inventory](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-inventories.html).

#### 10. Manage Pricing (`seller-manage-pricing`)
- **Default Slug**: `seller-manage-pricing`
- **Default Title**: `Manage Pricing`
- **Target Page & Capability**: Dedicated pricing management matrix. Allows merchants to audit regular prices, promotional sale prices, and active discounts across simple and parent products with inline editing and bulk price modification utilities.
- **Reference Guide**: [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html).

#### 11. Pricing Variations (`seller-manage-pricing-variations`)
- **Default Slug**: `seller-manage-pricing-variations`
- **Default Title**: `Pricing Variations`
- **Target Page & Capability**: Variation-level pricing console. Enables vendors to configure distinct regular prices, sale prices, and scheduled promotional dates for each individual child variation of a variable product.
- **Reference Guide**: [Manage Inventory](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-inventories.html).

---

### 4. Performance, Health & Reviews Endpoints (3 Endpoints)

These endpoints give vendors visibility into customer satisfaction, store quality metrics, and compliance standings.

#### 12. Account Health (`seller-account-health`)
- **Default Slug**: `seller-account-health`
- **Default Title**: `Account Health`
- **Target Page & Capability**: Vendor performance scorecard that computes store standing (Healthy, At Risk, Critical). Tracks Order Defect Rate (ODR), Late Dispatch Rate, Cancellation Rate, and policy compliance with visual gauge meters and performance improvement guidance.
- **Reference Guide**: [Vendor Account Health](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-account-health.html).

#### 13. Seller Reviews (`seller-reviews`)
- **Default Slug**: `seller-reviews`
- **Default Title**: `Seller Reviews`
- **Target Page & Capability**: Store-level customer feedback directory. Displays multi-criteria ratings (Price, Value, Quality), written customer reviews, buyer details, and date filters, helping merchants evaluate customer sentiment regarding fulfillment and service.
- **Reference Guide**: [Vendor Seller Review](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-seller-review.html).

#### 14. Product Reviews (`seller-product-reviews`)
- **Default Slug**: `seller-product-reviews`
- **Default Title**: `Product Reviews`
- **Target Page & Capability**: Product catalog review feed. Aggregates all verified buyer reviews, star ratings, and feedback comments submitted across products owned by the vendor, with search and filtering by product title or rating score.
- **Reference Guide**: [Vendor Product Review](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-review.html).

---

### 5. Analytics & Customer Management Endpoints (4 Endpoints)

Comprehensive merchant intelligence endpoints providing deep insights into sales performance, product velocity, and buyer relationships.

#### 15. Sales Reporting (`seller-reporting-sales`)
- **Default Slug**: `seller-reporting-sales`
- **Default Title**: `Sales Reporting`
- **Target Page & Capability**: Dynamic sales analytics console with interactive trend graphs and summary KPI cards. Displays gross revenue, net vendor commission, total orders, refund totals, tax amounts, and date filters (today, 7 days, 30 days, year-to-date, or custom period) with CSV and PDF export options.
- **Reference Guide**: [Vendor Sales Reporting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-sales-reporting.html).

#### 16. Products Reporting (`seller-reporting-products`)
- **Default Slug**: `seller-reporting-products`
- **Default Title**: `Products Reporting`
- **Target Page & Capability**: Catalog performance analytics breakdown identifying top-selling items, high-revenue products, units sold, and stock turnover metrics to help vendors optimize their product catalog.
- **Reference Guide**: [Vendor Products Reporting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-products-reporting.html).

#### 17. Customers Reporting (`seller-reporting-customers`)
- **Default Slug**: `seller-reporting-customers`
- **Default Title**: `Customers Reporting`
- **Target Page & Capability**: Customer behavior analytics interface displaying repeat purchase rates, new vs. returning buyer ratios, average buyer lifetime spend, and customer geographic distribution.
- **Reference Guide**: [Vendor Customer Reporting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-reporting.html).

#### 18. Customers (`seller-customers`)
- **Default Slug**: `seller-customers`
- **Default Title**: `Customers`
- **Target Page & Capability**: Direct merchant CRM directory listing all registered buyers who have purchased products from the vendor. Shows customer name, email address, order count, total revenue generated, and direct links to order histories.
- **Reference Guide**: [Vendor Customer List](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-list.html).

---

### 6. Dashboard Personalization & Site Settings Endpoints (2 Endpoints)

Preferences and display configuration screens allowing vendors to tailor the Seller Panel V2 workspace to their operational preferences.

#### 19. Graph Setting (`seller-graph-setting`)
- **Default Slug**: `seller-graph-setting`
- **Default Title**: `Graph Setting`
- **Target Page & Capability**: Dashboard chart customization screen. Vendors can select chart types (Line chart, Bar chart, or Spline chart) and customize primary, secondary, and accent color palettes for all visual analytics widgets and reporting graphs.
- **Reference Guide**: [Vendor Graph Setting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-graph-setting.html).

#### 20. Site Setting (`seller-site-setting`)
- **Default Slug**: `seller-site-setting`
- **Default Title**: `Site Setting`
- **Target Page & Capability**: Seller Panel V2 workflow customization screen. Enables vendors to choose product authoring layouts (Horizontal Tabs, Vertical Tabs, or Stacked Form), toggle the 3-step creation wizard stepper, and track real-time **Listing Completeness** scores.
- **Reference Guide**: [Vendor Site Setting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-site-setting.html).

---

## Standalone Seller Panel Base Configuration

The **Seller Panel Base** setting is a unique configuration that powers the standalone vendor dashboard:

- **Endpoint (URL Base Slug)**
  - **Default**: `seller`
  - **Purpose**: Defines the first path segment of the dedicated vendor portal (e.g., `https://example.com/seller/`).
  - Instead of loading vendor features inside `/my-account/`, the standalone seller panel serves all vendor endpoints under this independent URL path.
  - **Example**:
    - My Account mode: `https://example.com/my-account/vendor-dashboard/`
    - Standalone mode: `https://example.com/seller/vendor-dashboard/`

- **Title**
  - **Default**: `Seller Panel`
  - **Purpose**: Sets the WordPress page title used by the seller panel page in the WordPress admin page hierarchy. Individual vendor screens still display their own section titles.

::: warning Important Naming Rule
The Seller Panel Base slug must **never** match an existing WooCommerce endpoint slug, WordPress page slug, or category slug. Renaming this field automatically renames the underlying WordPress page that serves the seller panel.
:::

---

## Best Practices for Endpoint Management

To ensure seamless navigation and prevent routing errors on your marketplace, follow these recommendations:

1. **Keep Slugs Lowercase and URL-Friendly**
   - Always use lowercase letters, numbers, and hyphens (`-`).
   - Avoid uppercase letters, spaces, underscores, or special symbols (e.g., use `vendor-orders` instead of `Vendor_Orders!`).

2. **Ensure Every Slug is Unique**
   - Never duplicate an endpoint slug across two different sections.
   - Ensure endpoint slugs do not clash with standard WooCommerce endpoints (such as `orders`, `downloads`, `edit-account`, or `customer-logout`).

3. **Flush Permalinks After Changes**
   - Whenever you modify an endpoint slug or the Seller Panel Base slug, WordPress rewrite rules must refresh.
   - Navigate to **WordPress Admin > Settings > Permalinks** and click **Save Changes** to prevent 404 "Page Not Found" errors.

4. **Consistent Prefixing**
   - Use a clear prefix like `vendor-` for all vendor-specific endpoints. This ensures zero collisions with native customer account pages or other third-party extensions.

<style>
/* Responsive & Modern Table Styling for Endpoint Directory */
.wkmp-endpoint-directory-wrapper {
  margin: 24px 0 32px !important;
  border-radius: 12px !important;
  border: 1px solid var(--vp-c-border, #e2e8f0) !important;
  background: var(--vp-c-bg, #ffffff) !important;
  box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.05) !important;
  overflow: hidden !important;
}

.wkmp-endpoint-directory-wrapper .wkmp-endpoint-scroll-hint {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 10px 18px !important;
  background: var(--vp-c-bg-alt, #f8fafc) !important;
  border-bottom: 1px solid var(--vp-c-border, #e2e8f0) !important;
  font-size: 0.8rem !important;
  color: var(--vp-c-text-mute, #64748b) !important;
  font-weight: 500 !important;
}

.wkmp-endpoint-directory-wrapper .wkmp-endpoint-scroll-hint .hint-badge {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  padding: 3px 10px !important;
  border-radius: 999px !important;
  background: rgba(41, 151, 100, 0.12) !important;
  color: var(--vp-c-accent, #299764) !important;
  font-weight: 700 !important;
  font-size: 0.75rem !important;
}

.wkmp-endpoint-directory-wrapper .wkmp-endpoint-table-scroll {
  width: 100% !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
  scrollbar-width: thin !important;
  scrollbar-color: var(--vp-c-border, #cbd5e1) transparent !important;
}

.wkmp-endpoint-directory-wrapper .wkmp-endpoint-table-scroll::-webkit-scrollbar {
  height: 8px !important;
}
.wkmp-endpoint-directory-wrapper .wkmp-endpoint-table-scroll::-webkit-scrollbar-track {
  background: transparent !important;
}
.wkmp-endpoint-directory-wrapper .wkmp-endpoint-table-scroll::-webkit-scrollbar-thumb {
  background: var(--vp-c-border, #cbd5e1) !important;
  border-radius: 4px !important;
}

.wkmp-endpoint-directory-wrapper table {
  width: 100% !important;
  min-width: 850px !important;
  margin: 0 !important;
  border-collapse: separate !important;
  border-spacing: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  font-size: 0.875rem !important;
  line-height: 1.5 !important;
}

.wkmp-endpoint-directory-wrapper table thead {
  background: var(--vp-c-bg-alt, #f8fafc) !important;
}

.wkmp-endpoint-directory-wrapper table th {
  padding: 13px 16px !important;
  font-size: 0.74rem !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  color: var(--vp-c-text-mute, #475569) !important;
  border-bottom: 2px solid var(--vp-c-accent, #299764) !important;
  border-top: none !important;
  border-left: none !important;
  border-right: 1px solid var(--vp-c-border, #e2e8f0) !important;
  white-space: nowrap !important;
  background: inherit !important;
}

.wkmp-endpoint-directory-wrapper table th:last-child {
  border-right: none !important;
}

.wkmp-endpoint-directory-wrapper table th:nth-child(1) { width: 50px !important; min-width: 50px !important; text-align: center !important; }
.wkmp-endpoint-directory-wrapper table th:nth-child(2) { width: 230px !important; min-width: 200px !important; }
.wkmp-endpoint-directory-wrapper table th:nth-child(3) { width: 200px !important; min-width: 180px !important; }
.wkmp-endpoint-directory-wrapper table th:nth-child(4) { min-width: 380px !important; }

.wkmp-endpoint-directory-wrapper table td {
  padding: 12px 16px !important;
  vertical-align: middle !important;
  border-bottom: 1px solid var(--vp-c-border, #f1f5f9) !important;
  border-top: none !important;
  border-left: none !important;
  border-right: 1px solid var(--vp-c-border, #f1f5f9) !important;
  color: var(--vp-c-text, #334155) !important;
}

.wkmp-endpoint-directory-wrapper table td:last-child {
  border-right: none !important;
}

.wkmp-endpoint-directory-wrapper table td:nth-child(1) {
  width: 50px !important;
  min-width: 50px !important;
  text-align: center !important;
  font-weight: 700 !important;
  color: var(--vp-c-text-mute, #64748b) !important;
  font-size: 0.8rem !important;
}

.wkmp-endpoint-directory-wrapper table td:nth-child(2) {
  width: 230px !important;
  min-width: 200px !important;
  font-weight: 600 !important;
  color: var(--vp-c-text, #0f172a) !important;
}

.wkmp-endpoint-directory-wrapper table td:nth-child(3) {
  width: 200px !important;
  min-width: 180px !important;
}

.wkmp-endpoint-directory-wrapper table td:nth-child(4) {
  min-width: 380px !important;
  font-size: 0.85rem !important;
  line-height: 1.55 !important;
}

.wkmp-endpoint-directory-wrapper table tbody tr {
  transition: background-color 0.15s ease !important;
}

.wkmp-endpoint-directory-wrapper table tbody tr:nth-child(even) {
  background-color: rgba(248, 250, 252, 0.55) !important;
}

.wkmp-endpoint-directory-wrapper table tbody tr:hover {
  background-color: rgba(41, 151, 100, 0.05) !important;
}

.wkmp-endpoint-directory-wrapper table tbody tr:last-child td {
  border-bottom: none !important;
}

.wkmp-endpoint-directory-wrapper table code {
  font-family: var(--font-mono, monospace) !important;
  font-size: 0.77rem !important;
  padding: 3px 8px !important;
  border-radius: 6px !important;
  background: var(--vp-c-bg-alt, #f1f5f9) !important;
  border: 1px solid var(--vp-c-border, #e2e8f0) !important;
  color: var(--vp-c-text, #0f172a) !important;
  white-space: nowrap !important;
  display: inline-block !important;
  letter-spacing: -0.01em !important;
}

.wkmp-endpoint-directory-wrapper table .badge {
  display: inline-block !important;
  vertical-align: middle !important;
  font-size: 0.7rem !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  padding: 3px 7px !important;
  border-radius: 4px !important;
  margin-left: 6px !important;
}

/* Dark mode support */
[data-theme='dark'] .wkmp-endpoint-directory-wrapper,
html.dark .wkmp-endpoint-directory-wrapper {
  background: #0f172a !important;
  border-color: #334155 !important;
  box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.35) !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper .wkmp-endpoint-scroll-hint,
html.dark .wkmp-endpoint-directory-wrapper .wkmp-endpoint-scroll-hint {
  background: #1e293b !important;
  border-bottom-color: #334155 !important;
  color: #94a3b8 !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper .wkmp-endpoint-scroll-hint .hint-badge,
html.dark .wkmp-endpoint-directory-wrapper .wkmp-endpoint-scroll-hint .hint-badge {
  background: rgba(61, 214, 140, 0.15) !important;
  color: #3dd68c !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper .wkmp-endpoint-table-scroll,
html.dark .wkmp-endpoint-directory-wrapper .wkmp-endpoint-table-scroll {
  scrollbar-color: #475569 transparent !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper .wkmp-endpoint-table-scroll::-webkit-scrollbar-thumb,
html.dark .wkmp-endpoint-directory-wrapper .wkmp-endpoint-table-scroll::-webkit-scrollbar-thumb {
  background: #475569 !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper table thead,
html.dark .wkmp-endpoint-directory-wrapper table thead {
  background: #1e293b !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper table th,
html.dark .wkmp-endpoint-directory-wrapper table th {
  color: #cbd5e1 !important;
  border-right-color: #334155 !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper table td,
html.dark .wkmp-endpoint-directory-wrapper table td {
  border-bottom-color: #1e293b !important;
  border-right-color: #1e293b !important;
  color: #cbd5e1 !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper table td:nth-child(1),
html.dark .wkmp-endpoint-directory-wrapper table td:nth-child(1) {
  color: #94a3b8 !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper table td:nth-child(2),
html.dark .wkmp-endpoint-directory-wrapper table td:nth-child(2) {
  color: #f1f5f9 !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper table tbody tr:nth-child(even),
html.dark .wkmp-endpoint-directory-wrapper table tbody tr:nth-child(even) {
  background-color: rgba(30, 41, 59, 0.45) !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper table tbody tr:hover,
html.dark .wkmp-endpoint-directory-wrapper table tbody tr:hover {
  background-color: rgba(61, 214, 140, 0.08) !important;
}

[data-theme='dark'] .wkmp-endpoint-directory-wrapper table code,
html.dark .wkmp-endpoint-directory-wrapper table code {
  background: #1e293b !important;
  border-color: #334155 !important;
  color: #e2e8f0 !important;
}
</style>
