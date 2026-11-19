---
title: Configuration – Assets Visibility
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/assets-visibility.html
---

# Configuration – Assets Visibility

The **Assets Visibility** settings allow the admin to control which vendor details and assets are visible on the **Vendor Profile** and **Vendor Dashboard**.

<a class="doc-image-link" href="./assets/asset-visibility.webp"><img src="./assets/asset-visibility.webp" alt="WooCommerce Marketplace Assets Visibility Settings" /></a>

---

## Assets Visibility Path

- Marketplace > Settings > Assets Visibility

---

## Vendor Profile Visibility Settings

- **Email**
  - Show or hide the vendor’s email address on the vendor profile

- **Phone Number**
  - Enable or disable the display of the vendor’s phone number

- **Address**
  - Control whether the vendor’s address is visible on the profile page

- **Social Links**
  - Show or hide vendor social media links on the vendor profile

- **Hide Customer Details From Vendor**
  - Restricts vendors from viewing customer billing details
  - Restricts vendors from viewing customer shipping details
  - Helps maintain customer privacy

- **Display "Sold by" Vendor Info to Customers**
  - Controls whether the vendor name and store links are displayed to customers across the storefront.
  - **Where it applies**: Catalog and shop pages (PLP), product detail pages (PDP), cart page, checkout page, order confirmation screens, customer account orders, and invoices.
  - **When checked (Default)**: Customers can see which vendor sells each product, with direct links to visit the vendor's storefront profile.
  - **When unchecked**: Vendor names and store links remain hidden from customers across all shop, cart, checkout, order, and invoice pages. This allows marketplace owners to present a unified, single-brand marketplace experience.
  - **Per-Vendor Override**: Store administrators can also customize this option individually for specific vendors from the vendor edit screen.

- **Show Legacy Vendor Profile**
  - Enable to display the vendor profile using the legacy layout
  - Disable to use the new optimized layout
    - Includes Report Flag section
    - Improved UI and performance

---

## Hide Vendor Dashboard Section

Marketplace administrators can choose which analytical widgets and reporting blocks are displayed on the vendor dashboard (`Marketplace > Reports` or `/vendor-dashboard`). Checking any of these checkboxes hides the corresponding widget from all vendor dashboard views:

- **Summary**
  - Hides the top summary performance cards from the vendor dashboard.
  - Metrics include **Total Sales**, **Total Orders**, **Total Customers**, and **Average Order Value (AOV)**.
  - Useful when store administrators want to simplify the dashboard overview or keep summarized revenue numbers private.

- **Sale Order History**
  - Hides the **Sales & Order Analytics** chart and timeline graph.
  - Prevents vendors from seeing visual sales trends and graphical revenue analytics over time.

- **Total Orders & Total Products**
  - Hides the quick statistics cards showing the vendor's total order count and total product count.

- **Top Billing Country**
  - Hides the **Top Billing Countries** geographic distribution block.
  - Vendors will not see the breakdown of customer orders by country.

- **Recent Orders**
  - Hides the **Recent Orders** quick preview table on the vendor dashboard main page.
  - Vendors can still view and process their orders through the dedicated **Orders** menu if access is permitted.

---

## Vendor Dashboard Statistics Data Style

Customize the appearance and branding colors of the analytics cards, charts, and metric widgets displayed on the vendor dashboard:

- **Primary Color Code**
  - Defines the primary color used in vendor dashboard statistics, chart lines, and key highlights.
  - Choose a color using the color picker tool or enter a valid Hex code (e.g., `#1f2937`).

- **Secondary Color Code**
  - Defines the secondary color used in vendor dashboard statistics, subtitles, and secondary indicators.
  - Choose a color using the color picker tool or enter a valid Hex code (e.g., `#1f2937`).

- **Grids background color code**
  - Defines the background color for data metric cards, statistic boxes, and analytical grid panels on the vendor dashboard.
  - Enter a custom Hex code (e.g., `#eeeeee`) or select a color with the picker to match your marketplace branding.

---

- **Detailed Guides**: See [Vendor Profile](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html), [Vendor Dashboard](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-dashboard.html), [Product Detail Page (PDP)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-pdp.html), and [General Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html).
