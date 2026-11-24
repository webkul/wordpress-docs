---
title: Marketplace Product Management
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-panel-management.html
---

# Marketplace Product Management

After installing the **WooCommerce Marketplace plugin**, store administrators can easily manage all marketplace products from WordPress admin to maintain complete control over multi-vendor inventory.

From the **Marketplace → Products** console, admins can review vendor submissions, filter items by seller, approve new drafts, mass-assign catalog items, and set custom order purchase limits for shoppers.

::: tip Centralized Catalog Control
The **Marketplace Products** console gives the store administrator complete visibility over the entire multi-vendor catalog. Store owners can oversee vendor inventory, approve or reject new product submissions, assign unallocated products to specific vendors, and enforce marketplace purchasing policies.
:::

<a class="doc-image-link" href="./assets/Product-mangement.webp"><img src="./assets/Product-mangement.webp" alt="Product List – All Products" /></a>

---

## Marketplace Overview

From the admin panel, the admin can manage:

- Vendors
- Products
- Commissions
- Marketplace settings (such as product auto-publish and vendor auto-approval)

---

## Product Management by Admin

- The admin can create and publish all types of products:
  - Simple
  - Virtual
  - Downloadable
  - Grouped
  - External / Affiliate
  - Variable
- Products can be assigned to one or more vendors.
- The admin has full control over vendor-created products.

---

## Product List (Admin End)

In the **Product List**, the admin can:

- View both **admin** and **vendor** products
- Edit or delete any product
- Modify any product specification created by vendors
- Filter products by vendor
- Mass-assign products to vendors
- **Screen Options**: Admins can easily show or hide specific columns on the admin Products listing page using the standard Screen Options menu to customize their view.

<a class="doc-image-link" href="./assets/productlist-1.webp"><img src="./assets/productlist-1.webp" alt="Product List – All Products" /></a>

### Marketplace Products Management Console

Admins access the product catalog from **WordPress Admin → Marketplace → Products**.

<a class="doc-image-link" href="./assets/admin-marketplace-products-table-live.png"><img src="./assets/admin-marketplace-products-table-live.png" alt="Marketplace Products Central Management Table" /></a>

### Table Columns Breakdown

The Marketplace Products table displays key catalog and vendor details across 12 structured columns:

| Column Header | Field Type | Description | Available Actions |
| :--- | :--- | :--- | :--- |
| **Checkbox** | Bulk Selector | Checkbox to select single or multiple products. | Apply bulk trash actions or mass-assign products to a vendor. |
| **Image** | Thumbnail | Visual preview of the product's primary featured image. | Quick visual verification of product image assets. |
| **Product** | Title & Actions | Product title (sortable ascending/descending). | Hover to display inline quick links: **Edit** (opens the WooCommerce product editor) and **View** (opens the storefront product page). |
| **SKU** | Unique Code | Stock Keeping Unit identifier defined for the product. | Simplifies warehouse and stock tracking across vendors. |
| **Stock** | Inventory Status | Current stock condition (e.g., `Instock`, `Out of stock`, or remaining inventory count). | Highlights stock availability in real time. |
| **Price** | Currency Amount | Regular and sale price, or price range for variable items. | Sortable ascending/descending to monitor product price ranges. |
| **Flags** | Numeric Counter | Total count of customer reports or flags submitted against this item. | Alerts admin to review products flagged by marketplace shoppers. |
| **Categories** | Taxonomy List | WooCommerce product categories assigned to the item. | Helps organize and categorize vendor items on the store. |
| **Tags** | Taxonomy List | Keywords and product tags associated with the product. | Enhances storefront search and filtering. |
| **Featured** | Boolean Status | Indicates whether the product is highlighted as a featured listing (`Yes` or `No`). | Quickly identify top promoted catalog items. |
| **Type** | Product Type | WooCommerce product type (e.g., `Simple`, `Variable`, `Grouped`, `External`). | Clarifies product architecture and data format. |
| **Date** | Date & Status | Creation timestamp and publication status (e.g., `August 15, 2026 \| Publish` or `October 12, 2026 \| Draft`). | Sortable ascending/descending; immediately identifies newly submitted drafts. |
| **Vendor** | Vendor Name | Business name of the seller assigned to the product (or `Demo Admin`). | Identifies who owns the item and receives order revenue. |

### Search Products Functionality

The dedicated search bar at the top right of the table allows admins to find products quickly:

- Enter product titles, partial names, or SKU codes into the **Search Products** field.
- Click the **Search Products** button to display matching results instantly across all vendor listings.

### Bulk Actions (Move to Trash)

- Mark the checkboxes next to any products you wish to remove.
- Select **Trash** from the **Bulk actions** dropdown menu.
- Click **Apply** to move all selected products to the trash.

### Screen Options Customization

Admins can customize which columns appear in the table by opening the **Screen Options** panel at the top right:

- Toggle checkboxes for any column: *Image, Product, SKU, Stock, Price, Flags, Categories, Tags, Featured, Type, Date, Vendor*.
- Set the **Number of items per page** (pagination limit) to manage how many products appear per page.
- Click **Apply** to save your preferred view.

---

## Filter Products by Vendor

- Admin can filter the product list based on a specific vendor.
- Once filtered, only the selected vendor’s products will be displayed.

<a class="doc-image-link" href="./assets/filter-by-vendor.webp"><img src="./assets/filter-by-vendor.webp" alt="Product List – Vendor Filtered" /></a>

### Dual Filter Controls (Vendor & Assignment Status)

The filter toolbar above the table provides two targeted filtering dimensions to help manage marketplace inventory:

<a class="doc-image-link" href="./assets/admin-marketplace-filter-assign-bar.png"><img src="./assets/admin-marketplace-filter-assign-bar.png" alt="Filter and Assign Controls Bar" /></a>

1. **Filter by Vendor**:
   - Select a specific registered seller from the **Filter by Vendor** dropdown menu (e.g., *Aurora Athletics*, *Volt & Vine*, *Copperleaf Kitchen*).
   - Shows only products owned by that vendor.

2. **Filter by Assignment Status**:
   - **Assigned**: Displays products that are currently linked to an active marketplace vendor.
   - **UnAssigned**: Displays standalone or orphaned products that do not have an assigned vendor yet.

3. Click the **Filter** button to apply the selected filter criteria.

<a class="doc-image-link" href="./assets/admin-marketplace-products-filtered-vendor.png"><img src="./assets/admin-marketplace-products-filtered-vendor.png" alt="Filtered Vendor Products View" /></a>

::: info Why the UnAssigned Filter Is Useful
When a store admin imports bulk products into WooCommerce or creates catalog products before onboarding sellers, those products remain unassigned. Filtering by **UnAssigned** instantly displays all products waiting to be allocated to vendors.
:::

---

## Assign Products to Vendor

- Select:
  - One or more products
  - A vendor from the dropdown
- Click the **Assign** button to assign selected products to the chosen vendor.

<a class="doc-image-link" href="./assets/assign-vendor.webp"><img src="./assets/assign-vendor.webp" alt="Assign Products to Vendor" /></a>

### Step-by-Step Mass Vendor Assignment

Store admins can reassign or allocate products in bulk directly from the Marketplace Products list:

<a class="doc-image-link" href="./assets/admin-marketplace-assign-vendor-live.png"><img src="./assets/admin-marketplace-assign-vendor-live.png" alt="Assign Products to Vendor Toolbar in Action" /></a>

1. **Select Products**: Mark the checkboxes next to the products you want to assign (or click the header checkbox to select all visible products).
2. **Choose Vendor**: In the toolbar, click the **Select Vendor** dropdown menu and choose the target vendor.
3. **Execute Assignment**: Click the **Assign** button.
4. **Instant Confirmation**: The page refreshes with an update notification, and the **Vendor** column immediately reflects the new seller assignment for all selected products.

---

## Vendor Product Approval (Manual Publish)

If the admin has configured **Allow Vendor to Publish** as **unchecked**:

- Vendor-added products will be created in **Draft** status.
- Admin must manually review and publish the product.

<a class="doc-image-link" href="./assets/allow-seller-woocommerce-marketplace.webp"><img src="./assets/allow-seller-woocommerce-marketplace.webp" alt="Allow Vendor to Publish Setting" /></a>

::: note Setting Configuration Location
To enforce manual product approval, navigate to **Marketplace → Settings → General Settings** and ensure **Allow Vendor to Publish** is unchecked. For more details on global marketplace switches, see the [General Configuration Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html).
:::

---

## Draft Product Visibility

- When a vendor adds a product:
  - Product status remains **Draft**
  - Product is visible in the admin product list

<a class="doc-image-link" href="./assets/Productlist-3.webp"><img src="./assets/Productlist-3.webp" alt="Draft Product in Admin List" /></a>

In the Marketplace Products list table, draft products clearly indicate their pending status in the **Date** column (e.g., `October 12, 2026 | Draft`), allowing administrators to quickly spot submissions requiring review.

---

## Publish Vendor Product

- Admin edits the draft product.
- Clicks the **Publish** button.
- Product becomes live on the storefront.

<a class="doc-image-link" href="./assets/product-list.webp"><img src="./assets/product-list.webp" alt="Publish Vendor Product" /></a>

### Admin Review & Publishing Checklist

Before publishing vendor products, administrators typically verify:
1. Accurate product title, category, and tags.
2. Reasonable pricing and inventory counts.
3. High-quality product images compliant with marketplace guidelines.
4. Correct vendor attribution in the **Vendor** meta box.

---

## Editing Marketplace Products (Admin Edit Screen)

When an administrator clicks **Edit** on any product in the Marketplace Products list or from the standard WooCommerce product catalog, the product editing interface opens.

<a class="doc-image-link" href="./assets/admin-product-edit-page-overview.png"><img src="./assets/admin-product-edit-page-overview.png" alt="Admin Edit Product Page Overview" /></a>

::: tip Standard WooCommerce Product Fields
Creating and configuring standard product fields—such as **Product Title, Long Description, Short Description, Categories, Tags, Featured Image, Product Gallery, Pricing, Tax, Shipping Dimensions, Linked Products (Upsells/Cross-sells), Attributes, and Variations**—is handled by core WooCommerce.

For step-by-step guidance on standard WooCommerce product setup, refer to the official WooCommerce documentation:
- [Adding and Managing Products (WooCommerce Official Guide)](https://woocommerce.com/document/managing-products/)
- [Managing Product Categories, Tags, and Attributes](https://woocommerce.com/document/managing-product-taxonomies/)
- [Variable Products Setup & Variations](https://woocommerce.com/document/variable-product/)
:::

### Vendor-Specific Fields in the Edit Screen

The WooCommerce Marketplace plugin introduces dedicated marketplace fields on the edit screen to connect products with vendors and control buyer purchasing rules:

#### 1. Vendor Assignment Panel

Located in the right sidebar (or main editing area), the **Vendor** panel controls vendor ownership for the product:

- **Vendor Dropdown**: Select the seller who owns the product. The list includes all registered marketplace sellers as well as the store administrator (`Demo Admin`).
- **Transferring Ownership**: Changing the vendor and clicking **Update** instantly transfers ownership of the product. The product will now appear in the new vendor's dashboard and profile catalog.
- **Order Attribution & Commissions**: When an order is placed for this product, commission calculations and order revenue will automatically route to the vendor assigned in this box.

#### 2. Maximum Purchasable Quantity Limit

Located inside the WooCommerce **Product Data** panel under the **Inventory** tab:

<a class="doc-image-link" href="./assets/admin-product-edit-max-qty-setting.png"><img src="./assets/admin-product-edit-max-qty-setting.png" alt="Maximum Purchasable Quantity in Product Data Inventory" /></a>

- **Field**: **Maximum Purchasable Quantity**
- **Purpose**: Restricts how many units of this vendor's product a customer can purchase in a single order.
- **Usage**:
  - Enter a whole number (e.g., `5`) to prevent bulk purchasing, hoarding, or stock exhaustion on limited-edition vendor items.
  - Leave blank to allow customers to purchase up to the standard stock availability.
- Click **Update** to save the quantity limit.

---

## Frontend Visibility

- Once published, the product is:
  - Visible to customers on the frontend
  - Available for purchase like any other WooCommerce product

On the storefront single product page, the marketplace displays the assigned vendor's details:
- **Sold By / Vendor Name**: Displays a clickable link to the vendor's profile shop.
- **Vendor Badges**: Verified achievement badges assigned to the seller appear alongside vendor details.
- **Ask a Question**: Shoppers can inquire about the product directly with the vendor if enabled.

---

## Key Benefits

- **Full administrative control** over marketplace products and vendor submissions
- **Secure approval workflow** preventing unverified products from going live automatically
- **Dual filtering capabilities** by specific vendor and assigned/unassigned status
- **Rapid mass-assignment tool** to allocate multiple products to sellers with one click
- **Granular purchase limits** via Maximum Purchasable Quantity protection
- **Centralized product management** designed to scale with growing multi-vendor marketplaces

---

## Related Guides

- [MP Select and Sell](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-select-and-sell.html) – Manage multi-seller single product catalog listings, Global eligibility, and vendor offers.
- [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html) – Vendor-facing guide for attaching competing offers to existing catalog items.
- [Vendor Badges](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-mangement.html) – Reward top-performing merchants with trust badges displayed across catalog pages.
- [Admin Staff Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html) – Delegate product management and Select & Sell capabilities to vendor staff.
