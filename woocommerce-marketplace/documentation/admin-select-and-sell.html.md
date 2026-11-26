---
title: MP Select and Sell – Admin Management & Configuration
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-select-and-sell.html
---

# MP Select and Sell

The **MP Select and Sell** module enables multiple approved marketplace vendors to sell the same catalog product. Instead of having redundant, duplicate listings for identical products, marketplace administrators can maintain a single, clean master catalog product while allowing various sellers to attach their individual selling prices, sale discounts, stock quantities, and condition descriptions.

<a class="doc-image-link" href="./assets/admin-select-and-sell-products.webp"><img src="./assets/admin-select-and-sell-products.webp" alt="Admin MP Select and Sell Products Management" /></a>

From the WordPress administration dashboard, administrators have complete oversight to configure global behavior, designate which catalog products are available for vendors to claim, inspect competing vendor offers, and moderate prices or inventory.

The marketplace administrator can access and configure this section from:

**Marketplace > MP Select and Sell**

**Direct Admin Navigation URLs**:
- **Products Catalog List**: `wp-admin/admin.php?page=wkmp-select-and-sell`
- **Configuration Tab**: `wp-admin/admin.php?page=wkmp-select-and-sell&tab=config`
- **Associated Sellers View**: `wp-admin/admin.php?page=wkmp-select-and-sell&action=show-seller&product_id=[PRODUCT_ID]`

---

## MP Select and Sell Overview

- **Unified Master Catalog**: Maintains a single master product page for brand-name or standard goods, preventing catalog clutter and search engine keyword cannibalization.
- **Global vs. Non-Global Governance**: Control which catalog items are open for vendor claims (`Global`) and which items remain exclusive (`Non Global`).
- **Comprehensive Search & Multi-Filter Engine**: Filter catalog listings by registered vendor or selection status, with bulk status actions.
- **Dedicated Seller Offer Registry**: Access a detailed list of all competing vendors attached to each product, showing their individual prices, stock levels, and publication statuses.
- **Administrative Moderation**: Modify any seller's regular price, sale discount, stock count, or switch their offer between *Draft* and *Publish* with a single click.
- **Customizable Endpoints**: Adjust vendor dashboard slugs and navigation labels to match your marketplace branding.

> [!NOTE] Administrator-Created Products Only
> Currently, the marketplace administrator can only offer products for Select and Sell that are created by the administrator. Vendor-created products cannot be offered for Select and Sell.

::: tip Vendor Guide Reference
To learn how marketplace merchants search for catalog items and list their competing offers from the seller panel, refer to the [Selling Existing Products (Select & Sell) Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html).
:::

---

## Architecture: How Select and Sell Works

The Select and Sell module operates on a multi-layer catalog model:

```
┌────────────────────────────────────────────────────────┐
│             Master Catalog Product                     │
│  (Title, Images, Categories, Global Specs, Attributes) │
└──────────────────────────┬─────────────────────────────┘
                           │
         ┌─────────────────┴─────────────────┐
         ▼                                   ▼
┌─────────────────────────┐       ┌─────────────────────────┐
│     Seller A Offer      │       │     Seller B Offer      │
│  Price: $18.00          │       │  Price: $15.50 (Lowest) │
│  Stock: 50 units        │       │  Stock: 25 units        │
│  Status: Published      │       │  Status: Published      │
└─────────────────────────┘       └─────────────────────────┘
```

1. **Master Catalog Listing**: Created by the marketplace administrator. It establishes the canonical images, taxonomy categories, attributes, and base description.
2. **Global Availability**: When set as **Global**, any approved marketplace vendor can search for this product in their seller dashboard and add their own selling offer.
3. **Offer Layer**: Each vendor specifies their custom regular price, optional sale price, available stock units, and condition notes.
4. **Storefront Presentation**: On the single product page, the marketplace displays the **lowest active offer** by default. Shoppers can view all other participating vendors through an interactive popup modal or an inline list.
5. **Automated Order Routing**: When a buyer purchases from a specific vendor, order revenue, taxes, and vendor commissions are automatically assigned to that vendor.

---

## Dimension 1: Products Management (`page=wkmp-select-and-sell`)

The **Products** tab displays the master registry of all catalog products associated with the Select and Sell feature. The subtitle under the header indicates: *"List of shop vendors associated with products."*

<a class="doc-image-link" href="./assets/admin-select-and-sell-products.webp"><img src="./assets/admin-select-and-sell-products.webp" alt="Admin MP Select and Sell Products Management" /></a>

### 1. Top Header Navigation
At the top of the screen, administrators can toggle between two primary views:
- **Products** (`active`): The catalog registry of products and associated vendors.
- **Configuration**: The global settings tab.

### 2. Search Product Tool
- **Search Box**: Located above the table on the right. Enter the product title or keyword to quickly find specific items within large marketplace catalogs.

### 3. Bulk Actions
Administrators can select multiple products using checkboxes and apply bulk actions:
- **Bulk actions**: Default selector option.
- **Delete product permanently**: Permanently deletes selected products from the marketplace.
- **Set As Global**: Bulk updates selected products to **Global** status, making them instantly available for vendors to claim and sell.
- **Set As Non Global**: Bulk updates selected products to **Non Global** status, restricting new vendor claims.
- **Apply**: Executes the selected bulk action.

### 4. Filter Controls
The table includes two dedicated dropdown filters to refine product listings:

| Filter Control | Interface Type | Available Options | Purpose |
| :--- | :--- | :--- | :--- |
| **Filter by Seller** | Dropdown Selector | Registered marketplace vendors (e.g., *Demo Admin*, *webkul admin*) | Filters the product table to show items authored by or associated with a specific vendor. |
| **Selection Status** | Dropdown Selector | `Global`, `Non Global` | Isolates products based on their Select and Sell eligibility. |
| **Filter** | Primary Button | Click to Filter | Applies both filter criteria simultaneously. |

### 5. Products Table Columns

The table below explains every data column available in the Products management registry:

| Column Header | Display Details | Description & Functionality |
| :--- | :--- | :--- |
| **Select All** | Checkbox | Checkbox to select individual products or all items on the current page for bulk actions. |
| **Image** | Thumbnail Image | Master product featured thumbnail. |
| **Name** | Product Title (Sortable) | Displays product title with sort order (ascending/descending). Hovering reveals row quick actions:<br>&bull; **Edit**: Opens the native WooCommerce product editor.<br>&bull; **View**: Opens the live storefront product permalink.<br>&bull; **See Sellers**: Navigates to the associated sellers management screen for this product. |
| **Categories** | Category Names | Product taxonomy categories assigned to the master product (e.g., *Music*, *Accessories*). |
| **Type** | Product Architecture | WooCommerce product type (e.g., Simple product, Variable product). |
| **Sell Status** | Status Badge | Visual status badge: **Global** (green badge) indicates any vendor can sell it; **Non Global** indicates restricted access. |
| **Stock** | Inventory Availability | Real-time master inventory status (`Instock`, `Out of stock`). |
| **Status** | Publication Status | WordPress post status of the master product (`publish`, `draft`, `private`). |
| **Created** | Date Stamp (Sortable) | Date when the master product was originally registered. |
| **Seller** | Vendor Name | Author or store name who originally registered the master listing (e.g., *Demo Admin*). |
| **Action** | Interactive Quick Toggle | **One-Click Quick Toggle Button**:<br>&bull; If currently **Global**: Displays a red cross icon (`dashicons-no`) with tooltip *"Non-global"* to instantly restrict the product.<br>&bull; If currently **Non Global**: Displays a green check icon (`dashicons-yes`) with tooltip *"Global"* to instantly make the product claimable by all vendors. |

---

## Dimension 2: Configuration Tab (`page=wkmp-select-and-sell&tab=config`)

The **Configuration** tab allows marketplace managers to define global operating rules, storefront display styles, vendor notifications, and custom dashboard endpoints.

<a class="doc-image-link" href="./assets/admin-select-and-sell-config.webp"><img src="./assets/admin-select-and-sell-config.webp" alt="Admin MP Select and Sell Configuration Settings" /></a>

### Configuration Settings Summary

| Setting Label | Section | Input Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Enable MP Select and Sell** | General | Checkbox | Enabled (Checked) | Globally enables or disables the Select and Sell feature across the marketplace. |
| **Enable Default Status As Global For All Products** | General | Checkbox | Enabled (Checked) | Automatically sets all existing and newly created products to Global status. |
| **Enable/Disable Seller Product Popup** | General | Checkbox | Enabled (Checked) | Displays other sellers' offers in an interactive popup modal on the product page. |
| **Enable Seller Email Notification** | General | Checkbox | Enabled (Checked) | Sends an automatic email notification to the vendor when their offer is purchased. |
| **Display Admin Price In Seller List** | General | Checkbox | Enabled (Checked) | Shows the admin master price alongside vendor offers in the comparison list and popup. |
| **Select And Sell My Account Menu Page Title** | Information | Text Field | `Select And Sell` | Navigation menu label displayed in the vendor's dashboard / My Account menu. |
| **Select And Sell My Account Menu Page Slug** | Information | Text Field | `select-and-sell` | URL endpoint for the vendor's Select and Sell offers listing page. |
| **Add Select And Sell Product Endpoint** | Information | Text Field | `add-selected-sell-product` | URL endpoint where vendors attach new offers to catalog products. |
| **Edit Select And Sell Product Endpoint** | Information | Text Field | `edit-selected-sell-product` | URL endpoint where vendors modify their existing offers. |

---

### Detailed Configuration Fields

#### 1. General Settings

##### Enable MP Select and Sell
- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Tooltip**: *"Enable/Disable the MP Select and Sell module functionalities for the users."*
- **How It Works**:
  - When enabled, vendors can access the Select and Sell tools in their dashboards, and customers can view competing seller offers on product detail pages.
  - When disabled, all Select and Sell menus, endpoints, and storefront comparison widgets are deactivated.

> [!WARNING] Standalone Plugin Notice
> Ensure that the standalone **WooCommerce Marketplace Select And Sell** plugin is deactivated on your site. Enabling this built-in module overrides standalone plugin data and any associated legacy customizations.

##### Enable Default Status As Global For All Products
- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Tooltip**: *"Enable/Disable the set default status as global for all products."*
- **How It Works**:
  - When **Enabled**: Every product added to the marketplace automatically receives the **Global** sell status. Vendors can immediately find and sell any catalog product without waiting for manual admin approval.
  - When **Disabled**: Products default to **Non Global**. Administrators must manually toggle individual products or use bulk actions to make specific products claimable.

##### Enable/Disable Seller Product Popup
- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Tooltip**: *"Enable/Disable to show other seller in as popup"*
- **How It Works**:
  - When **Enabled**: Clicking the *"Select a store to see availability and price"* (or *"More Sellers"*) button on the product detail page opens an interactive modal popup displaying all competing merchant offers with prices, conditions, and Add to Cart buttons.
  - When **Disabled**: Competing vendor offers are rendered as an inline list directly on the single product page below the main product details.

##### Enable Seller Email Notification
- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Tooltip**: *"Email the seller when a customer orders their Select and Sell offer."*
- **How It Works**:
  - When enabled, whenever an order containing a vendor's Select and Sell offer reaches paid or processing status, the system sends an email notification to that vendor confirming the sale and quantity purchased.

##### Display Admin Price In Seller List
- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Tooltip**: *"Enable/Disable showing the admin added price alongside vendor offers in the seller list and popup."*
- **How It Works**:
  - When enabled, the admin's original master product price is listed as a purchasing choice alongside vendor offers in the seller comparison table and modal popup.
  - When disabled, only third-party vendor offers appear in the competing sellers list.

---

#### 2. Information Settings (Endpoints & Slugs)

These settings define the custom front-end rewrite endpoints for the vendor dashboard:

##### Select And Sell My Account Menu Page Title
- **Setting Type**: Text Field
- **Default Value**: `Select And Sell`
- **Tooltip**: *"Please input the My Account menu title for managing select and sell page."*
- **Usage**: Controls the text label rendered in the vendor's dashboard sidebar navigation menu.

##### Select And Sell My Account Menu Page Slug
- **Setting Type**: Text Field
- **Default Value**: `select-and-sell`
- **Tooltip**: *"Endpoint for 'My Account → Select And Sell Product List' page."*
- **Usage**: Determines the relative URL path for the seller's offer management list (for example, `example.com/seller/select-and-sell/`).

##### Add Select And Sell Product Endpoint
- **Setting Type**: Text Field
- **Default Value**: `add-selected-sell-product`
- **Tooltip**: *"Endpoint for 'My Account → Select And Sell Add Product' page."*
- **Usage**: URL endpoint where vendors search the marketplace catalog and configure their new offer (for example, `example.com/seller/add-selected-sell-product/`).

##### Edit Select And Sell Product Endpoint
- **Setting Type**: Text Field
- **Default Value**: `edit-selected-sell-product`
- **Tooltip**: *"Endpoint for 'My Account → Select And Sell Edit Product' page."*
- **Usage**: URL endpoint where vendors modify their price, stock, or description for an existing offer (for example, `example.com/seller/edit-selected-sell-product/`).

Click the primary **Save Changes** button at the bottom of the form to apply any configuration updates.

---

## Dimension 3: Associated Sellers Management (`action=show-seller`)

When an administrator clicks **See Sellers** on any item in the Products table, the system opens the dedicated **Associated Sellers** view for that product:

`wp-admin/admin.php?page=wkmp-select-and-sell&action=show-seller&product_id=[PRODUCT_ID]`

<a class="doc-image-link" href="./assets/admin-select-and-sell-sellers-list.webp"><img src="./assets/admin-select-and-sell-sellers-list.webp" alt="Admin Associated Sellers List" /></a>

### 1. View Header & Breadcrumbs
- **Heading**: Displays `Product : [Product Title]` (for example, `Product : Album`).
- **Breadcrumb Link**: Clicking **MP Select and Sell** in the header returns the administrator to the master catalog products registry.

### 2. Bulk Actions
- **Delete**: Administrators can check multiple seller offers and delete them simultaneously from the master catalog product.

### 3. Filter Controls
This screen provides targeted filters to manage competing merchant offers:

| Filter Control | Interface Type | Available Options | Purpose |
| :--- | :--- | :--- | :--- |
| **Filter by Seller** | Dropdown Selector | Registered merchants selling this item (e.g., *Aurora Athletics*) | Isolates offers created by a specific vendor. |
| **Selection Status** | Dropdown Selector | `Publish`, `Draft` | Filters offers based on publication status. Useful for auditing pending or unapproved vendor offers. |
| **Filter** | Primary Button | Click to Filter | Applies the selected filters. |

### 4. Associated Sellers Table Columns

| Column Header | Display Details | Description |
| :--- | :--- | :--- |
| **Select All** | Checkbox | Checkbox for individual selection or bulk offer deletion. |
| **Image** | Thumbnail Image | Master product thumbnail. |
| **Stock** | Inventory Count | The inventory quantity allocated by this specific vendor (e.g., `100 units`). |
| **Price** | Currency Value | The vendor's active selling price (e.g., `$10.00`). |
| **Categories** | Category Names | Assigned master categories (e.g., *Music*). |
| **Type** | Product Architecture | WooCommerce product type (e.g., Simple product). |
| **Status** | Publication State | Offer publication state (`publish` or `draft`). |
| **Seller** | Merchant Store Name | Store name of the selling merchant (e.g., *Aurora Athletics*). |
| **Action** | Management Icons | **Administrative Control Buttons**:<br>&bull; **Toggle Status Button**: Marker icon (`dashicons-marker`). Instantly switches the vendor offer between **Draft** (hidden from buyers) and **Publish** (active on storefront).<br>&bull; **Edit Product Offer Button**: Edit icon (`dashicons-edit`). Opens the administrative offer editor for this seller. |

---

## Dimension 4: Editing a Seller Offer as Admin

Clicking the **Edit** icon next to any vendor offer opens the administrative offer editor:

<a class="doc-image-link" href="./assets/admin-select-and-sell-edit-seller-offer.webp"><img src="./assets/admin-select-and-sell-edit-seller-offer.webp" alt="Admin Edit Seller Offer" /></a>

### Administrative Offer Fields

The editor displays a focused form under the title **Product Info**:

| Field Label | Input Type | Description | Allowed Value |
| :--- | :--- | :--- | :--- |
| **Regular Price** | Numeric Field | The vendor's base retail selling price for this product. | Valid currency amount (e.g., `12.00`). |
| **Sale Price** | Numeric Field | Optional discounted promotional price offered by this vendor. | Valid currency amount (must be less than regular price). |
| **Quantity** | Integer Field | The number of inventory units the vendor currently maintains for this offer. | Whole positive integer (e.g., `100`). |
| **Status** | Dropdown Selector | Controls whether this vendor's offer is visible to storefront shoppers. | **Publish** (active on product page) or **Draft** (privately stored, hidden from buyers). |

Click **Save Changes** to immediately update the vendor's offer parameters.

---

## Operational Workflows for Marketplace Administrators

### Workflow 1: Making Catalog Products Claimable by Vendors
1. Navigate to **Marketplace > MP Select and Sell**.
2. Locate the target product using the search input or category filters.
3. In the **Action** column, click the **Global** check icon (`dashicons-yes`).
4. The **Sell Status** badge immediately updates to **Global**.
5. Vendors can now search for and attach their offers to this item from their seller dashboards.

::: tip Automatic Global Setting
If you want all marketplace products to be claimable automatically without manual toggling, navigate to **Configuration** and enable **Enable Default Status As Global For All Products**.
:::

---

### Workflow 2: Auditing and Moderating Seller Pricing
1. Under **Marketplace > MP Select and Sell**, locate the product and click **See Sellers**.
2. Review the list of merchants, checking their prices and inventory counts.
3. If a merchant lists an unrealistic or predatory price:
   - Click the **Marker icon** to immediately switch the offer to **Draft** status, hiding it from buyers.
   - Or click the **Edit icon** to adjust their **Regular Price** or **Sale Price** directly and click **Save Changes**.

---

### Workflow 3: Removing an Unauthorized or Discontinued Seller Offer
1. On the **Associated Sellers** screen, locate the unauthorized offer.
2. Select the checkbox next to the vendor's row.
3. Choose **Delete** from the bulk actions dropdown.
4. Click **Apply**. The offer is permanently removed from the master product.

---

## Best Practices for SEO and Marketplace Catalog Management

1. **Avoid Duplicate Master Listings**: Whenever multiple vendors sell the same standard product, ensure only one canonical master listing exists. Use Select and Sell so all vendor inventory aggregates under one URL, concentrating SEO authority, customer reviews, and backlink equity.
2. **Set Accurate Master Specifications**: The master listing author should supply complete descriptions, high-resolution product images, dimensions, and specifications so all secondary sellers benefit from an authoritative page.
3. **Use Seller Descriptions for Condition Notes**: Encourage sellers to use the offer condition description field (up to 300 characters) to specify package contents, warranty information, or item condition (e.g., *Refurbished Grade A* or *Includes extra cable*).
4. **Audit Global Settings Periodically**: For exclusive, proprietary, or custom handmade products, ensure **Sell Status** is set to **Non Global** so outside merchants cannot list offers against private labels.

---

## Frequently Asked Questions

### Q1. What happens if the master catalog product is marked Out of Stock?
Even if the master author's stock is zero, customers can still purchase the product if one or more attached secondary vendors have active inventory. The buy box automatically routes to the lowest-priced active vendor offer.

### Q2. How is revenue distributed when an order is placed?
When a customer purchases a product through a vendor's Select and Sell offer, WooCommerce Marketplace assigns the order line item to that vendor. Commission calculation rules, admin commission cuts, vendor payouts, and sales reporting treat the transaction as a sale by that vendor.

### Q3. Can vendors edit the master product's title, images, or description?
No. Only the marketplace administrator and the original author of the master listing can edit master catalog content. Secondary sellers can only configure their own selling price, sale discount, stock quantity, and condition description.

### Q4. Can vendor staff manage Select and Sell offers?
Yes. If the marketplace administrator enables the **Select And Sell** capability under **Marketplace > Settings > Vendor Staff**, authorized seller staff members can view and attach offers on behalf of their merchant store. Refer to the [Admin Staff Settings Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html) for role permission details.

---

## Related Documentation

- [Selling Existing Products (Select & Sell Vendor Guide)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html) – Merchant walkthrough for searching catalog items and creating offers.
- [Admin Staff Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html) – How to configure Select and Sell capabilities for vendor staff.
- [Product Detail Page (PDP) Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-pdp.html) – How multi-seller options and buy boxes appear to shoppers.
- [Product Listing Page (PLP) Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-plp.html) – Catalog display rules and lowest-price indexing.
- [Admin Panel Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-panel-management.html) – Central marketplace catalog and product administration.
