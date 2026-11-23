---
title: Configuration – Product Settings
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/product-settings.html
---

# Configuration – Product Settings

The **Product Settings** allow the admin to manage how vendors add, edit, and publish products in the marketplace.

**Path:**
Marketplace > Settings > Product

<a class="doc-image-link" href="./assets/admin-setting-product.webp"><img src="./assets/admin-setting-product.webp" alt="Configuration – Product Settings" /></a>

---

## Vendor Product Settings

- **Allow Vendor to Publish**
  - Enable to auto-approve and publish vendor products.
  - Disable to require admin approval for all vendor-added or edited products.
  - *Flow:* Vendor adds/edits product → Status becomes **Draft** → Admin reviews and publishes.

- **Allow Vendors to Translate Products (WPML)**
  - Enables vendors to translate products from their dashboard.
  - Available only when **WPML** is installed and activated.

- **Allowed Product Types**
  - Admin selects which product types vendors can create in the marketplace.
  - Supported options:
    - **Simple product**: Standard physical or standard products with a single SKU and price.
    - **Grouped product**: A collection of related products that can be purchased together.
    - **External/Affiliate product**: Products linked to an external website for purchase.
    - **Variable product**: Products with multiple variations (e.g., different sizes or colors).
    - Downloadable / Virtual variations when simple or variable is chosen.

- **Allowed Categories**
  - Admin selects which product categories vendors can use while adding products.
  - Vendors can only assign their products to the categories selected by the administrator.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-product.webp"><img src="./assets/marketplace-admin-setting-product.webp" alt="Vendor Product Settings" /></a>

---

## Minimum Order Amount Settings

The administrator can enforce a minimum purchase amount that customers must spend on a vendor's products before placing an order:

- **Enable**
  - Turn on this toggle to activate the minimum order amount requirement for vendor products across the marketplace.
- **Minimum Amount**
  - Enter the default minimum order value (e.g., `50`).
  - Customers must have at least this subtotal of items from the vendor in their cart to proceed through checkout.
- **Amount Value for Vendor**
  - When checked, individual vendors can define their own custom minimum order amount in their seller dashboard.
  - If a vendor leaves their custom amount empty, this global admin default value automatically applies.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-product-min-order.webp"><img src="./assets/marketplace-admin-setting-product-min-order.webp" alt="Minimum Order Amount Settings" /></a>

---

## Product Quantity Limit Settings

Allows the marketplace administrator to place purchase quantity limits on vendor products:

- **Enable**
  - Check this option to allow maximum purchase quantity restrictions on vendor products.
- **Default Maximum Quantity**
  - Define the global default maximum number of units of a product that a customer can purchase in a single order (e.g., `5` or `10`).
  - Helps vendors manage high-demand products, limited inventory, or wholesale purchasing restrictions.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-product-qty-limit.webp"><img src="./assets/marketplace-admin-setting-product-qty-limit.webp" alt="Product Quantity Limit Settings" /></a>

---

## Product Form Settings

Admins can customize the appearance, step-by-step guidance, and layout of the vendor product creation and edit screens:

- **Show Stepper**
  - **Show the stepper**: Displays a clear Step 1–3 progress indicator (*Step 1: Product Basics*, *Step 2: Product Details*, *Step 3: Complete Listing*) on the vendor's add and edit product screens.
  - Helps new and existing sellers complete the required product fields in a structured, guided sequence.

- **Show Listing Completeness**
  - **Show the Listing Completeness score**: Displays a visual listing completeness percentage badge on the vendor's product editing screen.
  - Shows vendors which recommended elements (such as images, descriptions, SKU, inventory, and attributes) are missing to optimize product discovery and buyer trust.

- **Form Navigation**
  - Choose how sections of the vendor edit product form are organized and navigated:
    - **Horizontal Tabs**: Organizes product data sections into horizontal top navigation tabs.
    - **Vertical Tabs**: Displays product data sections in a clean vertical left-hand navigation list.
    - **Stacked Form**: Displays all product sections in a continuous, stacked single-page layout for easy scrolling.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-product-form.webp"><img src="./assets/marketplace-admin-setting-product-form.webp" alt="Product Form Settings - Form Navigation" /></a>

- **Vendor Mode**
  - **Let vendors choose their own product form settings**: When enabled, vendors see a **Settings > Site Setting** option in their seller panel.
  - Each vendor can choose their own preferred form layout (horizontal tabs, vertical tabs, or stacked) to match their personal workflow, overriding the marketplace default for their own store.

---

## Product Fulfilment Settings

- When enabled, vendors can manage their own product fulfilment details.
- Vendors can add a fulfilment label, image, and description from their dashboard.
- Vendor-specific fulfilment information is displayed on the product page.
- When disabled, fulfilment details are managed and shown only by the admin.

- Allows buyers to see **who will fulfil product delivery**.
- **Admin can:**
  - **Enable**: Master toggle to enable product fulfillment details for marketplace vendors.
  - **Fulfillment Image**: Upload a default fulfillment or logistics partner badge icon.
  - **Fulfillment Label**: Add a default badge title (e.g., *Fulfilled by Marketplace*).
  - **Fulfillment Text**: Provide descriptive text explaining the fulfillment process shown to customers on product pages.
- **Vendor Support:**
  - Vendors can configure fulfilment details from their dashboard.
  - Vendor-specific fulfilment details appear on the product page.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-product-full.webp"><img src="./assets/marketplace-admin-setting-product-full.webp" alt="Product Fulfilment Settings" /></a>

---

## Vendor Bulk Upload Settings

Enables vendors to import multiple products at once using CSV files, speeding up catalog creation for large inventories:

- **Allow Vendors to Bulk Upload**
  - Check this option to grant marketplace vendors access to the bulk product upload tool in their seller dashboard.
  - When enabled, vendors can download CSV sample files, prepare product data, and upload entire catalogs at once.

- **Maximum Rows per File**
  - Set the maximum number of product rows allowed in a single uploaded CSV file (default: `500`).
  - Limits file sizes to ensure fast, reliable processing and prevent server memory timeouts.

- **Product Images**
  - Defines how product images specified in the CSV upload are handled:
    - **Download image URLs from the file**: Automatically downloads image files from external URLs specified in the CSV file and imports them directly into the WordPress media library.
    - **Only images already in the vendor's media library**: Matches and attaches images that the vendor has already pre-uploaded to their WordPress media library by filename.
    - **No images (added later in the product editor)**: Imports product details without images, allowing sellers to upload photos manually later through the product editor.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-product-fullfilment.webp"><img src="./assets/marketplace-admin-setting-product-fullfilment.webp" alt="Vendor Bulk Upload Settings - Product Images" /></a>

---

- **Detailed Guides**: See [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html), [Bulk Upload Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/bulk-upload.html), and [Commission Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/commission-management.html).
