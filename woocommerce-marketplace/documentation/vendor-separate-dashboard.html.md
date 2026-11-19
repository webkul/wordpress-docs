---
title: Separate WP-Admin Dashboard
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-separate-dashboard.html
---

# Separate WP-Admin Dashboard

The **Separate WP-Admin Dashboard** provides marketplace sellers with a dedicated, isolated WordPress backend environment. When enabled, vendors manage their products, orders, transactions, store profile, and customer communication directly within a secure, custom-tailored WordPress administration interface.

This separate interface keeps vendor operations completely independent from platform administration, ensuring that sellers only access features relevant to their store.

---

## Enabling Separate Vendor Dashboard

Marketplace administrators can easily enable or disable the separate backend dashboard from the WordPress administration panel:

1. Navigate to **Marketplace > Settings > General**.
2. Locate the **Separate Vendor Dashboard** setting checkbox.
3. Check the box to activate the separate dashboard for all registered marketplace vendors.
4. Click **Save Changes** at the bottom of the page.

---

## Access Control & Security Isolation

The Separate WP-Admin Dashboard is designed specifically for marketplace vendors. To protect marketplace security and keep the workspace simple and focused, menu options are automatically filtered:

### Hidden Administrative Areas
To prevent accidental changes to core site configuration, general site settings are hidden from vendors:
- **Tools**
- **Global Media Library**
- **Standard WordPress Posts & Pages**
- **WooCommerce Core Settings & Store Reports**
- **Plugins, Themes, and Site User Management**

### Available Vendor Menus

Vendors have access only to the store-specific tools required for day-to-day operations:

- **Dashboard**: Welcome screen and high-level store overview.
- **Products**: Catalog management restricted to the vendor's own items:
  - **All Products**: View, search, and edit published products.
  - **Add new product**: Create new physical, variable, virtual, or downloadable products.
- **Marketplace**: The core vendor management suite, containing the following dedicated sections:
  - **Reports**: Main analytics dashboard displaying total sales, orders, customer metrics, performance graphs, and recent store activity.
  - **Order History**: Complete order ledger to inspect customer details, monitor fulfillment status, and enter tracking numbers.
  - **Transactions**: Financial statement tracking gross earnings, platform commission deductions, and payout disbursements.
  - **Notifications**: Real-time activity log for new orders, customer reviews, and marketplace announcements.
  - **Shop Followers**: Directory of customers following your shop, with options for direct audience outreach.
  - **My Profile**: Storefront profile manager to customize store logo, banner, biography, contact info, social links, and payout methods.
  - **Ask to admin**: Direct inquiry channel to send support questions to marketplace administrators and view conversation history.
  - **Select And Sell**: Quick catalog tool to claim and sell pre-existing marketplace products without creating listings from scratch.
- **Comments**: Product reviews and ratings submitted by buyers.
- **Profile**: Personal user account settings, email address, and password management.

---

## Managing Products for Vendors

Vendors can manage their approved products directly from the WordPress administration panel using WooCommerce's native product editor. The catalog is strictly isolated, ensuring sellers only see and edit their own merchandise under **Products > All Products** and **Products > Add new product**.

::: tip Official WooCommerce Product Guides for New Vendors
To help new vendors quickly learn how to create and manage their store items, refer to the official WooCommerce documentation:

- **[Overview: Managing Products in WooCommerce](https://woocommerce.com/document/managing-products/)**  
  Learn the foundations of product management, including catalog visibility, inventory status, product categories, and attributes.

- **[Step-by-Step: Adding a Simple Product](https://woocommerce.com/document/managing-products/add-product/#adding-a-simple-product)**  
  A detailed walkthrough covering product titles, descriptions, regular and sale pricing, inventory tracking (SKU and stock status), shipping dimensions, and product gallery images.
:::
