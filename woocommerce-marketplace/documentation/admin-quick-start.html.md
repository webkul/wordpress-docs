---
title: Admin Quick Start - WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-quick-start.html
---

# Admin Quick Start

This guide walks you through setting up your WooCommerce Multi-Vendor Marketplace and managing day-to-day operations in the exact chronological order you will need. Each step links directly to the corresponding configuration and feature documentation.

<div class="qs-callout">
  <div class="qs-callout__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24"><path d="m9 12 2 2 4-4"></path><rect width="18" height="18" x="3" y="3" rx="4"></rect></svg>
  </div>
  <div class="qs-callout__content">
    <div class="qs-callout__header">
      <span class="qs-callout__title">Getting Started Checklist</span>
      <span class="qs-callout__badge">Pre-flight check</span>
    </div>
    <p class="qs-callout__text">
      Before onboarding live merchants, complete the setup steps in Part 1 and execute a test purchase using a dummy vendor account. This verifies your commission calculations, split sub-orders, and automated notifications.
    </p>
  </div>
</div>

<div class="qs-phase-banner">
  <span class="qs-phase-badge">Phase 01 &bull; Platform Setup</span>
</div>

## Set Up the Marketplace

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">01</span>
    <span class="qs-step-tag">Commission Rules</span>
  </div>

### 1. Turn on the Marketplace & Set Commissions

Ensure the marketplace module is active and configure how your platform collects revenue. You can set global platform commissions or configure specific rates per vendor and per category.

<div class="qs-specs-list">

- **Commission Types**: Choose between percentage commission, fixed commission per transaction, or a combination.
- **Admin vs. Vendor Share**: Define how taxes, shipping fees, and coupon discounts are split between the marketplace admin and vendors.

</div>

<div class="qs-guide-footer">

- **Detailed Guides**: See [Installation](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/installation.html), [General Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html), and [Commission Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/commission-management.html).

</div>

</div>

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">02</span>
    <span class="qs-step-tag">Vendor Onboarding</span>
  </div>

### 2. Decide How Vendors Register & Join

Choose the onboarding flow for incoming merchants:

<div class="qs-specs-list">

- **Approval Workflow**: Select whether new vendor accounts require manual admin approval or activate automatically upon registration.
- **Public Profiles**: Decide whether vendor profile pages and shop URLs (`/shop/vendor-slug`) are publicly visible immediately or only after verification.
- **Seller Capabilities**: Grant or restrict vendor permissions such as managing orders, publishing products, or adding staff members.

</div>

<div class="qs-guide-footer">

- **Detailed Guides**: See [Vendor Registration Process](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-registration-process.html) and [General Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html).

</div>

</div>

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">03</span>
    <span class="qs-step-tag">Catalog Control</span>
  </div>

### 3. Decide How Products Are Cataloged

Control how inventory is added to your marketplace catalog:

<div class="qs-specs-list">

- **Product Approval**: Choose whether vendor products publish instantly or require admin review before appearing on the storefront.
- **Allowed Product Types**: Enable or disable specific WooCommerce product types for vendors (Simple, Variable, Grouped, External).
- **Select & Sell**: Allow multiple sellers to list offers against existing catalog items, avoiding duplicate listings.

</div>

<div class="qs-guide-footer">

- **Detailed Guides**: See [Product Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/product-settings.html) and [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html).

</div>

</div>

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">04</span>
    <span class="qs-step-tag">Storefront Page</span>
  </div>

### 4. Build Your Seller Landing Page

Create an attractive onboarding hub that invites prospective merchants to open a shop on your marketplace:

<div class="qs-specs-list">

- **Seller Central Page**: Configure the dedicated merchant onboarding landing page with step-by-step registration steps.
- **Elementor & Shortcodes**: Use native marketplace shortcodes and Elementor widgets to highlight top vendors, showcase commission benefits, and embed registration forms anywhere on your site.

</div>

<div class="qs-guide-footer">

- **Detailed Guides**: See [Configuration Seller Central](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-seller-central.html) and [Elementor Shortcodes](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/elementor-shortcodes.html).

</div>

</div>

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">05</span>
    <span class="qs-step-tag">Built-in Features</span>
  </div>

### 5. Configure Built-in Marketplace Features

Set up built-in capabilities tailored to your marketplace business model:

<div class="qs-specs-list">

- **Withdrawal & Payout Rules**: Define minimum withdrawal balances, payment request thresholds, and payout schedules. See [Configuration Withdrawal](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-withdrawal.html).
- **Vendor Shipping Zones**: Allow sellers to configure custom table rates, flat rates, shipping classes, or store pickup with OTP verification. See [Vendor Shipping Zone Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-shipping-zone-management.html).
- **Vendor KYC Verification**: Require merchants to submit business registration, photo ID, or tax certificates before listing items or requesting payouts. See [Vendor KYC](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-kyc.html).
- **Generative AI (Magic AI)**: Connect AI providers to give sellers one-click AI product title, description, and image generation directly in their dashboard. See [Generative AI Overview](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/generative-ai-overview.html).
- **Vendor Invoice Settings**: Enable invoice access for vendors, attach invoices to emails, and configure the allowed file types and maximum file size for invoice attachments. See [Configuration Vendor Invoice](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-invoice.html).

</div>

</div>

<div class="qs-phase-banner">
  <span class="qs-phase-badge">Phase 02 &bull; Daily Operations</span>
</div>

## Run the Marketplace

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">06</span>
    <span class="qs-step-tag">Merchant Review</span>
  </div>

### Approve and Onboard Vendors

Review pending merchant applications from the WordPress admin panel. Verify business credentials, review submitted KYC documentation, set individual commission agreements, and approve or suspend vendor accounts with one click.

<div class="qs-guide-footer">

- **Detailed Guide**: See [Vendor Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-management-and-product-assignment.html).

</div>

</div>

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">07</span>
    <span class="qs-step-tag">Catalog Quality</span>
  </div>

### Review and Moderate Products

When product auto-approval is disabled, review vendor-submitted items before they go live on your storefront. Ensure correct categorization, high-resolution imagery, pricing compliance, and platform catalog quality.

<div class="qs-guide-footer">

- **Detailed Guides**: See [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html) and [Vendor Management & Product Assignment](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-management-and-product-assignment.html).

</div>

</div>

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">08</span>
    <span class="qs-step-tag">Order Routing</span>
  </div>

### Monitor Orders, Fulfillment & Sub-Orders

When a customer places a multi-vendor order, WooCommerce automatically generates separate sub-orders for each participating seller:

<div class="qs-specs-list">

- **Order Tracking**: Follow fulfillment progress, tracking numbers, carrier assignments, and shipping updates entered by sellers.
- **Store Pickup with OTP**: Verify customer collections using one-time passcodes for in-store pickups.

</div>

<div class="qs-guide-footer">

- **Detailed Guides**: See [Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html) and [Customer Order Placement](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-order-placement.html).

</div>

</div>

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">09</span>
    <span class="qs-step-tag">Vendor Payouts</span>
  </div>

### Process Vendor Payouts & Audits

Disburse merchant earnings after orders reach completed status:

<div class="qs-specs-list">

- **Payment Requests**: Review vendor withdrawal requests, verify completed orders, and release payouts via PayPal Payouts, UPI, or Bank Transfer.
- **Audit Trail**: Maintain transparent accounting records of all platform fees, vendor commissions, and transaction logs.

</div>

<div class="qs-guide-footer">

- **Detailed Guides**: See [Vendor Payout Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-payout-management.html) and [Vendor Transaction Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-transaction-management.html).

</div>

</div>

<div class="qs-step-card">
  <div class="qs-step-card__top">
    <span class="qs-step-num">10</span>
    <span class="qs-step-tag">Platform Health</span>
  </div>

### Keep the Marketplace Healthy & Connected

Maintain high platform standards and active seller relationships:

<div class="qs-specs-list">

- **Monitor Account Health & Flags**: Review flagged products, investigate customer copyright or counterfeit reports, and monitor seller health metrics. See [Configuration Vendor Flags](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-flags.html).
- **Moderate Reviews & Ratings**: Monitor feedback left by customers on vendor shop pages and evaluate seller reliability. See [Manage Feedback and Vendor Queries](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/manage-feedback-and-vendor-queries.html).
- **Answer Seller Inquiries**: Respond to vendor inquiries and technical queries submitted through the seller dashboard. See [Ask to Admin](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/ask-to-admin.html) and [Vendor Queries Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-queries-management.html).
- **Broadcast Announcements**: Send platform-wide notices, policy updates, and holiday shipping schedules directly to all seller dashboards. See [Admin News](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-news.html) and [Admin Notifications](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-notifications.html).

</div>

</div>
