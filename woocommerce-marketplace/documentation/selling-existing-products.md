---
title: Selling Existing Products (Select & Sell) Guide – WooCommerce Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html
---

# Selling Existing Products (Select & Sell)

In high-volume multi-vendor marketplaces, multiple merchants frequently offer identical brand-name goods, consumer electronics, books, or standard apparel. Creating separate product listings for every seller clutters the catalog, dilutes search engine ranking, and confuses shoppers with redundant duplicate pages.

**Selling Existing Products** (powered by **Select and Sell**) solves this by enabling multiple approved vendors to attach their own pricing, stock, and offer notes to a single master product in the marketplace catalog. Customers enjoy a clean storefront with side-by-side merchant comparisons, while vendors easily list catalog items without re-entering descriptions or uploading media.

<a class="doc-image-link" href="./assets/vendor-select-and-sell-overview.webp"><img src="./assets/vendor-select-and-sell-overview.webp" alt="Selling Existing Products Overview" /></a>

---

## How It Works

<div class="creation-modes-banner" style="margin: 20px 0 24px 0;">
  <div class="creation-modes-banner__item">
    <h4><span>📦</span> Master Catalog Product</h4>
    <p>A single canonical catalog listing created by the marketplace administrator or an approved merchant, establishing master titles, product images, categories, and attributes.</p>
  </div>
  <div class="creation-modes-banner__item">
    <h4><span>🏷️</span> Multi-Seller Offer Layer</h4>
    <p>Multiple vendors attach competing offers to the same item—each specifying their own regular price, sale discount, stock count, and seller condition notes.</p>
  </div>
</div>

1. **Master Catalog Item:** A central product listing exists in the marketplace catalog with global images, categories, and descriptions.
2. **Vendor Offer Creation:** Approved vendors search the marketplace catalog, select the product, and define their own regular price, sale price, inventory quantity, condition description, and draft/publish status.
3. **Storefront Merchandising:** On the public product page, the marketplace displays the **lowest active price** by default, alongside the seller's custom note.
4. **Customer Comparison:** Shoppers can inspect all competing sellers via an inline comparison table or an interactive popup modal, choosing their preferred merchant based on price, shipping speed, or seller rating.
5. **Automatic Order Routing:** When an order is completed, revenue, tax, and commissions are automatically credited to the specific vendor whose offer was purchased.

---

## Listing an Existing Product (Select & Sell Flow)

Vendors attach offers to catalog items through a dedicated 2-step onboarding screen:

Navigate to: **Catalog > List Your Product** (`/seller/seller-list-product/`) &rarr; click **Search Products** (`/seller/seller-search-products/`).

Click the **Search Products** button to access the Select and Sell management console (`/seller/select-and-sell/`), then click **Add Product** (`/seller/add-selected-sell-product/`).

---

### Step 1: Select Category & Product Type

Select the taxonomy and architecture of the product you wish to sell:
- **Product categories:** Choose the category under which the target product is indexed (e.g., *Clothing*, *Accessories*, *Decor*, *Music*, *Sports & Outdoors*).
- **Product Type:** Choose between:
  - **Simple product:** Standard single physical or digital catalog item.
  - **Variable product:** Products with variations (e.g., sizes or colors).
- Click **Next Step** to proceed.

<a class="doc-image-link" href="./assets/vendor-select-and-sell-step1.webp"><img src="./assets/vendor-select-and-sell-step1.webp" alt="Select and Sell Step 1 Category and Product Type Selection" /></a>

---

### Step 2: Select Product & Configure Offer Details

```
Catalog > Search Products > Add Product
[Select Product*] ──> Choose existing product from catalog
┌─────────────────────────────────────────────────────────────┐
│ Default Author Product Info                                 │
│ [Thumbnail] Product Price: $16.00  |  Stock Status: Instock │
└─────────────────────────────────────────────────────────────┘
Regular Price:   [ $14.50 ]
Sale Price:      [ $12.00 ]
Quantity:        [ 50     ]
Description:     [ Shown to customers below your price (0/300) ]
Status:          [ Draft / Publish ]
```

#### Field Specifications:

| Field Name | Type | Description & Merchant Usage |
|---|---|---|
| **Select Product\*** | Searchable Dropdown | Search and choose the specific marketplace product you want to sell (e.g., *Beanie with Logo*, *Long Sleeve Tee*, *Polo*). |
| **Default Author Product Info** | Preview Card | Displays the original author's baseline **Product Price** (e.g., `$16.00`) and real-time **Stock Status** (*Instock*). |
| **Regular Price** | Numeric ($) | Enter your custom retail selling price. Vendors can price competitively above or below the author's price. |
| **Sale Price** | Numeric ($) | Optional discounted promotional price. |
| **Quantity** | Integer | Enter the number of inventory units you currently hold in stock. |
| **Description** | Text Area (0/300) | Enter specific condition or offer details (*"Shown to customers below your price, for example the condition or what is included."*). Includes a live character counter. |
| **Status** | Selector | Choose **Draft** (saves privately in your vendor console to review later) or **Publish** (activates the offer immediately or submits it to the admin approval queue). |

<a class="doc-image-link" href="./assets/vendor-select-and-sell-add-product.webp"><img src="./assets/vendor-select-and-sell-add-product.webp" alt="Vendor Select and Sell Step 2 Offer Configuration" /></a>

Click **Save** to finalize your offer.

---

## Managing Your Offers (`/seller/select-and-sell/`)

Vendors manage all active offers under **Catalog > Search Products** (`/seller/select-and-sell/`):

<a class="doc-image-link" href="./assets/vendor-select-and-sell-offers-list.webp"><img src="./assets/vendor-select-and-sell-offers-list.webp" alt="Vendor Select and Sell Manage Offers Table" /></a>

- **Offer Data Table:**
  - **Image:** Master product thumbnail.
  - **Name:** Product title. Hovering reveals quick actions: **Edit**, **View** public product page, and **Delete**.
  - **Price:** Your active regular and sale price.
  - **Status:** Badge displaying *Publish*, *Draft*, or *Waiting for Approval*.
  - **Stock:** Current available units (e.g., *In stock (50)*).
- **Bulk Actions:** Select multiple offers using checkboxes and choose from the **Bulk Actions** menu:
  - **Delete:** Removes selected offers from the store.
  - **Set as publish:** Activates selected draft offers.
  - **Set as draft:** Temporarily hides selected offers from storefront customers.

---

## Storefront Presentation

On single product pages, customers can explore all participating merchants:

- **Primary Buy Box:** Displays the lowest price among all active sellers, along with that vendor's custom description note.
- **Other Sellers View:**
  - **Popup Modal Mode:** Clicking *"More Sellers"* opens an interactive modal window displaying merchant names, prices, feedback ratings, and individual **Add to Cart** buttons.
  - **List Table Mode:** An inline comparison table renders directly beneath the primary product details on the page.

---

## Admin Configuration & Governance

Marketplace administrators configure global Select & Sell settings, designate Global products, audit competing merchant offers, and moderate seller pricing from the WordPress dashboard:

Navigate to: **Marketplace > MP Select and Sell**

::: tip Complete Administrator Guide
For comprehensive instructions on managing Global vs Non-Global catalog items, search and filter controls, and administrative offer moderation, refer to the [Admin MP Select and Sell Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-select-and-sell.html).
:::

<a class="doc-image-link" href="./assets/admin-select-and-sell-products.webp"><img src="./assets/admin-select-and-sell-products.webp" alt="Admin MP Select and Sell Products Management" /></a>

### Key Administrator Settings:

- **Enable MP Select and Sell:** Master toggle to activate multi-seller offer functionality across the platform.
- **Default Status As Global For All Products:** When enabled, all newly published products in the marketplace are automatically marked as Global, making them immediately available for other vendors to sell.
- **Seller Product Display Mode:** Choose between **Popup modal** or **List table** for customer comparison on single product pages.
- **Seller Email Notification:** Automatically sends an order confirmation email to the vendor whenever a customer purchases their specific offer.
- **Product Approval Queue:** When product moderation is active, newly submitted Select & Sell offers appear under **Marketplace > Product Approval**, where administrators can inspect offer details, approve, or reject with a formal reason.
