---
title: Configuration – Google Analytics
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-google-analytics.html
---

# Configuration – Google Analytics

The **Google Analytics** feature allows the admin and vendors to track website and product performance using Google Analytics (GA-4).

<a class="doc-image-link" href="./assets/admin-google-analytics-settings-overview.webp"><img src="./assets/admin-google-analytics-settings-overview.webp" alt="Admin Google Analytics and Map Configuration Settings" /></a>

---

## Google Analytics Overview

- Helps analyze customer behavior and store performance
- Tracks product views, purchases, and sales data
- Supports real-time analytics and debug mode

---

## Admin Configuration Path

To configure Google Analytics and Google Map settings for your marketplace:

1. Log in to your **WordPress Admin Panel**.
2. In the left navigation menu, go to **Marketplace > Settings**.
3. Select the **Google Analytics** tab.

<a class="doc-image-link" href="./assets/google-analytics-map.webp"><img src="./assets/google-analytics-map.webp" alt="Google Analytics and Map" /></a>

---

## Google Analytics Settings Summary

The table below provides a quick reference for each setting on the Google Analytics settings page:

| Setting Label | Input Type | Default Setting | Purpose |
| :--- | :--- | :--- | :--- |
| **Enable Google analytics** | Checkbox | Enabled | Turns on Google Analytics 4 tracking across the entire marketplace. |
| **Measurement ID** | Text Field | `G-XXXXXXXXXX` | Admin Measurement ID used to collect marketplace-wide traffic and sales data. |
| **Allow vendor to use Google Analytics** | Checkbox | Enabled | Allows sellers to connect their own Google Analytics account from their profile. |
| **Enable tracking events** | Checkbox | View Item & Purchase Enabled | Selects which customer interactions (product views and purchases) are tracked. |
| **Enable debug mode** | Checkbox | Enabled | Displays live event activity instantly in Google Analytics DebugView. |
| **Google Map API Key** | Text Field | Optional | Populates geographic sales maps and top billing countries on the vendor dashboard. |

---

## Google Analytics Settings

### Enable Google Analytics

- Enable to populate Google Analytics data on the marketplace

- **Help Tip**: *If checked, google analytics data will be populated.*
- **How It Works**:
  - When checked, the marketplace loads Google Analytics (GA-4) tracking scripts across your storefront pages.
  - Activates site-wide tracking for page visits, customer interactions, and purchases.
  - If unchecked, all analytics tracking scripts remain disabled and no store data is sent to Google Analytics.

---

### Measurement ID

- Enter the Google Analytics **GA-4 Measurement ID**
- Can be obtained from the Google Analytics account
- [Click here to learn how to get the Measurement ID](https://wpdoc.webkul.com/documentation/google-analytics.md)

- **Help Tip**: *Google analytics tracking ID to be obtained from Google Analytics Account.*
- **Measurement ID Format**: Google Analytics 4 IDs start with **`G-`** followed by 10 letters or numbers (such as `G-XXXXXXXXXX`).
- **Scope**: Acts as the central tracking ID for the marketplace administrator. All storefront browsing activity, product page visits, and orders are collected in this property.
- For detailed setup steps, see our guide on [How to Get a Google Analytics Measurement ID](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/google-analytics.html).

---

### Allow Vendor to Use Google Analytics

- Enables vendors to connect and use their own GA account
- Vendors can track their individual store performance

- **Help Tip**: *If checked, vendor can also configure Google Analytics for their sales.*
- **How It Works**:
  - When enabled, sellers see dedicated Google Analytics settings inside their **Vendor Profile** page.
  - Each seller can enter their own personal Measurement ID and choose which tracking events to enable.
  - When shoppers browse or purchase products from a specific vendor, data is recorded in both the admin marketplace analytics and the vendor's personal analytics property.

---

### Enable Tracking Events

- Enable required tracking events:
  - View Item Event
  - Purchase Event

You can selectively enable the following e-commerce tracking events:

#### View Item Event
- **Help Tip**: *If checked, view item event will be sent to Google Analytics - 4.*
- **When It Triggers**: Fires automatically when a shopper views a single product page.
- **Tracked Details**:
  - Store Currency and Product Price
  - Product ID and Product Title
  - Product Categories (including parent and child categories)

#### Purchase Event
- **Help Tip**: *If checked, purchase event will be sent to Google Analytics - 4.*
- **When It Triggers**: Fires automatically when a buyer completes checkout and views the **Order Received** (Thank You) confirmation page.
- **Compatibility**: Works seamlessly with standard WooCommerce checkout pages as well as modern block-based checkouts.
- **Tracked Details**:
  - Order Number and Total Order Value
  - Taxes and Shipping Charges
  - Applied Discount Coupons
  - Purchased Items list (Product Name, SKU/ID, Unit Price, Quantity, Brand, and Selected Variations)

---

### Enable Debug Mode

- Enables real-time event tracking
- Allows admin and vendors to:
  - Verify events instantly
  - View data in GA-4 Debug View

- **Help Tip**: *If checked, real time analytics can be seen in analytics account under Admin -> Data Display -> DebugView.*
- **How It Works**:
  - Standard Google Analytics reports can take several hours to process incoming store data.
  - Enabling debug mode streams event data instantly into the **Google Analytics DebugView** tool.
  - This allows store administrators and vendors to verify that product views and test purchases are working correctly in real time.

<a class="doc-image-link" href="./assets/gc-4-debug.webp"><img src="./assets/gc-4-debug.webp" alt="GA-4 Debug Mode" /></a>

<a class="doc-image-link" href="./assets/gc-4-debug-b.webp"><img src="./assets/gc-4-debug-b.webp" alt="Real-Time Purchase Data" /></a>

::: tip Recommended Practice
Keep Debug Mode enabled during store setup and initial testing. Once you verify that events appear properly in DebugView, you can leave it enabled or turn it off as preferred.
:::

---

## Vendor-Side Google Analytics Setup

When the administrator activates **Allow vendor to use Google Analytics**, sellers can connect their personal Google Analytics account directly from their dashboard:

1. The seller logs in and navigates to **Vendor Dashboard > My Profile**.
2. In the profile settings, the seller can configure:
   - **Google Analytics Account ID**: Enter their personal GA-4 Measurement ID (`G-XXXXXXXXXX`).
   - **Enable Tracking Events**:
     - Check **Enable view item event** to track visits to their products.
     - Check **Enable purchase event** to track completed sales and revenue for their products.
3. Click **Save Profile** to start tracking.

::: tip Multi-Vendor Order Attribution
If a customer places an order containing items from multiple vendors, the marketplace automatically attributes the relevant items and earnings to each vendor's individual analytics account.
:::

---

## Google Map API

- Admin can add the Google Map API key
- API key must be generated from the Google Cloud Console

- **Help Tip**: *Google Map API Key to be obtained form Google Account.*
- **Setup Guide**: <a href="https://webkul.com/blog/how-to-get-google-api-key/" target="_blank" rel="noopener noreferrer">Click here to know how to create one</a>.
- **Why It Is Used**:
  > *Although it is optional, but if filled top billing countries on vendor dashboard will be populated for all countries properly especially for US regions.*
- **Dashboard Benefits**:
  - Powers the interactive sales map displayed on the vendor dashboard.
  - Accurately plots customer billing countries and regional sales locations.
  - Ensures proper regional visualization for international orders and United States territories.

---

## Supported Analytics Data

The marketplace integration tracks comprehensive performance data to give you complete visibility over store activity:

### Product Performance

- Product revenue
- Unique purchases
- Quantity sold
- Average price
- Average quantity

### Sales Performance

- Transaction ID
- Revenue
- Tax
- Shipping cost

### Tracked E-Commerce Details

| Metric / Dimension | Tracked Event | Description |
| :--- | :--- | :--- |
| **Product ID / SKU** | View Item, Purchase | Identifies the specific catalog product viewed or purchased. |
| **Product Name** | View Item, Purchase | The published title of the product. |
| **Price & Quantity** | View Item, Purchase | Product unit price and number of items purchased. |
| **Product Categories** | View Item, Purchase | Category hierarchy assigned to the product. |
| **Product Variations** | Purchase | Chosen variation attributes (e.g., Color, Size). |
| **Vendor / Brand** | Purchase | The seller shop or brand associated with the item. |
| **Order Number** | Purchase | Unique WooCommerce order confirmation ID. |
| **Total Revenue** | Purchase | Total monetary amount paid for the order. |
| **Tax & Shipping** | Purchase | Total tax and shipping costs associated with the order. |
| **Coupons** | Purchase | Any promotional discount codes used at checkout. |

---

## How to Verify Google Analytics on Your Store

To verify that your Google Analytics configuration is tracking accurately:

1. **Verify Live Events with DebugView**:
   - In your Google Analytics dashboard, navigate to **Admin > Data Display > DebugView**.
   - With **Enable debug mode** turned on in your marketplace settings, open a product page in a new browser tab.
   - Confirm that the `view_item` event appears in your DebugView timeline.
2. **Test Order Tracking**:
   - Place a test order on your marketplace.
   - When you reach the order confirmation page, verify that the `purchase` event is logged in DebugView along with the order value and purchased items.
3. **Use Google Tag Assistant**:
   - You can also use [Google Tag Assistant](https://tagassistant.google.com/) to confirm your Measurement ID is connected and actively sending hits.

---

## Related Documentation

- [Get Google Analytics Measurement ID](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/google-analytics.html) – Step-by-step guide to creating a GA-4 property and generating your Measurement ID.
- [Configuration – Endpoints](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-endpoints.html) – Manage vendor dashboard slugs and navigation URLs.
- [Configuration – Assets Visibility](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/assets-visibility.html) – Control vendor profile information and customer data privacy.
- [Configuration – General Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html) – Configure commission rates, vendor approval, and core marketplace options.
- [Vendor Profile Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html) – Guide for vendors on configuring store profiles, social channels, and analytics.
