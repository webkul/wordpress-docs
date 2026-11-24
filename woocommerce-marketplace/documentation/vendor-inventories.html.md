---
title: Manage Inventory
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-inventories.html
---

# Manage Inventory

Accurate stock control is vital for every marketplace seller. Running out of stock leads to missed sales and dissatisfied buyers, while overstocking ties up valuable working capital. The **Manage Inventory** module in WooCommerce Multi-Vendor Marketplace gives sellers a centralized, high-speed workspace to update stock levels, edit SKUs and barcodes, track real-time sales metrics, and adjust quantities in bulk—all without opening the full product editor for every single item.

<a class="doc-image-link" href="./assets/vendor-inventory-dashboard.png"><img src="./assets/vendor-inventory-dashboard.png" alt="Vendor Manage Inventory Dashboard Overview" /></a>

This guide explains how to navigate the inventory dashboard, configure single-item stock rules inline, execute rapid bulk stock updates, utilize the 4-parameter filter drawer, and manage variation-level inventory for variable products.

---

## Accessing the Manage Inventory Screen

Vendors can reach the inventory management dashboard directly from their seller portal:

1. Log in to your merchant account.
2. In the left navigation menu, locate **Inventories**.
3. Click **Manage Inventory**.

The page resolves to the standard portal route:
```text
https://your-domain.com/seller/seller-manage-inventory/
```

> [!NOTE] Endpoint Customization
> Marketplace administrators can customize the frontend URL slug in **Marketplace > Settings > Endpoints**. By default, this screen uses the slug `seller-manage-inventory`.

---

## Inventory Dashboard & Product Overview

The Manage Inventory dashboard organizes catalog items into structured cards designed for fast scanning. Each card displays product details, operational order metrics, and current stock status at a glance.

<a class="doc-image-link" href="./assets/vendor-inventory-dashboard.png"><img src="./assets/vendor-inventory-dashboard.png" alt="Manage Inventory Dashboard Table and Metrics" /></a>

### Visible Data Fields & Quick Actions

| Data Field / Action | Displayed Information | Operational Benefit |
|---|---|---|
| **Product Image & Title** | Product thumbnail and catalog name. | Quick visual verification of the catalog item. |
| **SKU** | Stock Keeping Unit code (e.g., `XL-FAS-26`). | Unique identifier used for warehouse catalog tracking. |
| **Product Type** | Architecture badge (*Simple product*, *Variable product*, *Grouped product*, *External/Affiliate*). | Identifies whether the item has single or multiple inventory levels. |
| **Product ID** | System-assigned numeric ID prefixed with `#` (e.g., `#1021`, `#1174`). | Useful for customer support, queries, and quick system lookup. |
| **Current Price** | Active retail price or price range (e.g., `$34.00` or `$27.00 – $39.00`). | Immediate price reference without leaving the inventory view. |
| **Edit product** | Direct link to the complete product edit form. | Allows editing full descriptions, media galleries, categories, and attributes. |
| **Edit price** | Deep link to the Manage Pricing interface (`/seller/seller-manage-pricing/?wkmp_id=<id>`). | Opens targeted price and sale schedule controls for the item. |
| **Manage variations** | Available on variable products (e.g., *Manage 4 variations*). | Navigates to the variation inventory suite to manage stock per variation. |
| **Status Badge** | Publication badge (e.g., `Active`). | Confirms whether the product is currently visible on the live storefront. |
| **Date & Timestamp** | Creation or last modification timestamp. | Tracks catalog freshness and listing history. |
| **Sold** | Total units sold across fulfilled orders. | Tracks cumulative customer demand. |
| **Undelivered** | Units tied to active orders currently awaiting fulfillment or shipment. | Helps prevent overselling units that are already promised to buyers. |
| **Canceled** | Total units returned to available stock from canceled or refunded orders. | Assesses cancellation rates and return volume. |
| **Stock Badge** | Real-time stock status badge (*Stock: 22*, *Stock Not Managed*, or *Out of stock*). | Shows immediate operational inventory health. |
| **Manage inventory** | Primary toggle button. | Expands and collapses the inline inventory configuration panel. |

---

## Inline Inventory Configuration (Single Product)

Clicking **Manage inventory** on any product row expands a comprehensive configuration panel directly beneath the item without reloading the page.

<a class="doc-image-link" href="./assets/vendor-inventory-panel-expanded.png"><img src="./assets/vendor-inventory-panel-expanded.png" alt="Single Product Inline Inventory Configuration Panel" /></a>

### Configurable Inventory Settings

| Setting | Field Type | Placeholder / Defaults | Description & Best Practice |
|---|---|---|---|
| **SKU** | Text input | Enter unique SKU | Stock Keeping Unit code. Must be unique across your catalog to avoid synchronization issues. |
| **GTIN, UPC, EAN, or ISBN** | Text input | Barcode or unique ID | Global trade identifier barcode. Essential for multi-channel listings, Google Shopping feeds, and warehouse barcode scanning. |
| **Stock management** | Checkbox | `Track stock quantity for this product` | Enables automated WooCommerce inventory tracking. When unchecked, stock status is managed manually (*In stock* / *Out of stock*). |
| **Quantity** | Numeric input | Current quantity (e.g., `22`) | Available units on hand. For variable products, this acts as the fallback default for variations without manual stock rules. |
| **Allow backorders?** | Radio group | **Do not allow**<br>**Allow, but notify customer**<br>**Allow** | Governs checkout behavior when stock drops to zero or below:<br>• **Do not allow:** Blocks purchase when stock reaches 0.<br>• **Allow, but notify customer:** Allows order placement with a backorder notification on the cart/checkout.<br>• **Allow:** Silently accepts backorders as regular purchases. |
| **Low stock threshold** | Numeric input | `Store-wide threshold (2)` | Triggers an automated low-stock email alert when inventory falls to or below this number. Leave blank to adopt the marketplace store-wide default. |
| **Stock status** | Radio group | **In stock**<br>**Out of stock**<br>**On backorder** | Explicit manual stock indicator. Automatically switches if stock management is enabled. |
| **Sold individually** | Checkbox | `Limit purchases to 1 item per order` | Restricts buyers to purchasing only 1 unit per checkout order. Ideal for unique artwork, collectibles, or limited-run merchandise. |
| **Maximum Purchasable Quantity** | Numeric input | `Enter Maximum Purchasable Quantity` | Sets the maximum number of units a customer can place in their cart at one time. Protects inventory from rapid bulk buyouts. |

### How to Save Single-Product Changes

1. Click **Manage inventory** on the desired product row.
2. Update the stock quantity, SKU, barcode, or backorder settings as needed.
3. Click the **Save** button inside the panel.
4. The system validates and commits the updates immediately, updating the row's stock badge.

---

## Bulk Inventory Updates (Multi-Product Actions)

When updating stock for multiple catalog items at once—such as receiving a supplier shipment or marking seasonal items down—sellers can use the bulk action toolbar.

<a class="doc-image-link" href="./assets/vendor-inventory-bulk-actions.png"><img src="./assets/vendor-inventory-bulk-actions.png" alt="Bulk Inventory Updates Toolbar and Notifications" /></a>

### How to Perform a Bulk Stock Adjustment

1. **Select Products:** Check the checkbox next to each product you want to modify. To select all items on the current page, check the master checkbox in the header.
2. **Review the Selection Counter:** The toolbar displays the count of selected items (e.g., `Selected: 2`).
3. **Choose the Adjustment Action:** Select one of three calculation methods from the **Action** dropdown:
   - **Set to:** Replaces the current stock of all selected items with an absolute value (e.g., set all to `15`).
   - **Increase by:** Adds the specified quantity to the current stock level of each item (e.g., add `10` new units received from a shipment).
   - **Decrease by:** Subtracts the specified quantity from each item's current stock level (e.g., allocate `5` units to an offline sale).
4. **Enter the Value:** Type the numeric quantity in the **Value** input field.
5. **Click Apply:** The system calculates pending changes across selected rows and displays an informative banner:
   - **Products changed:** Number of products queued for update.
   - **Skipped notices:** If any selected product has stock management disabled, the system alerts you:
     > *Skipped X: stock is not tracked on those products (turn on stock management in their inventory settings, or change the parent product).*
6. **Save or Discard Changes:**
   - Click **Save Inventories** to commit all changes to the database permanently.
   - Click **Discard** if you want to cancel the pending changes and restore previous numbers.

> [!TIP] Restocking Shipments
> Always use **Increase by** when receiving stock replenishment shipments. This preserves existing unsold units and automatically adds incoming inventory without requiring manual math.

---

## Granular Search & 4-Parameter Filter Drawer

The Manage Inventory module includes instant search and a dedicated slide-out filter drawer to quickly isolate specific items within large product catalogs.

<a class="doc-image-link" href="./assets/vendor-inventory-filter-drawer.png"><img src="./assets/vendor-inventory-filter-drawer.png" alt="Slide-out Inventory Filter Drawer" /></a>

### Search and Display Controls

- **Live Keyword Search:** Type any keyword into the top **Search** box and press Enter to filter products by title or description.
- **Per Page Selector:** Choose how many items to display per page using the dropdown (`5`, `10`, `20`, `30`, `40`, or `50`).
- **Pagination Controls:** Navigate across large inventories using the bottom page pagination (`1`, `2`, `>`, `>|`).

### Filter Drawer Parameters

Click the **Filter** button in the upper toolbar to reveal the slide-out filter drawer:

| Filter Parameter | Control Type | Description & Usage |
|---|---|---|
| **SKU** | Text input | Filter products matching an exact or partial SKU code. |
| **Category** | Dropdown select | Select a catalog category (e.g., *Sports & Outdoors*, *Clothing*, *Accessories*, *Decor*) to view inventory for that department. |
| **Product Type** | Dropdown select | Filter by product structure: *Simple product*, *Grouped product*, *External/Affiliate product*, or *Variable product*. |
| **ID** | Numeric input | Filter directly by the unique numeric Product ID. |

After setting your criteria, click **Apply Filters** to refresh the list. To clear filters, remove the input values or close the drawer with the close icon (`✕`).

---

## Variable Products & Variation Inventory Management

Variable products contain multiple options (such as sizes, colors, or materials), each requiring distinct inventory tracking.

<a class="doc-image-link" href="./assets/vendor-inventory-variations-view.png"><img src="./assets/vendor-inventory-variations-view.png" alt="Variable Product Variation Inventory Management Suite" /></a>

### Parent Product vs. Variation Rules

On the main Manage Inventory list, variable products display a notification in their expanded configuration panel:

> *Settings below apply to all variations without manual stock management enabled.*

- **Parent-Level Stock:** If you track stock at the parent level, all variations share a single combined stock pool.
- **Variation-Level Stock:** If each color or size has separate warehouse stock, manage them individually through the variation suite.

### Opening Variation Inventory

1. On the main inventory list, find the variable product (e.g., *Cadence Water Bottle 750ml*).
2. Click the **Manage [X] variations** link (e.g., `Manage 4 variations`).
3. You are redirected to the dedicated variation inventory management screen:
   ```text
   /seller/seller-manage-inventory-variations/<product-id>/
   ```
4. Click **Back to Manage Inventory** in the breadcrumb trail whenever you need to return to the main catalog view.

### Variation Inventory Capabilities

The variation screen presents the parent product at the top, followed by each individual variation card (e.g., *Brushed Steel #77*, *Matte Black #78*, *Sand #79*, *Alpine Blue #80*):

- **Independent Variation SKUs:** Assign distinct barcode and SKU identifiers to every variation.
- **Variation Pricing Display:** View regular and active promotional sale prices for each specific option.
- **Specific Stock Quantities:** Manage exact stock counts for each size or color combination.
- **Variation Backorders & Low Stock Alerts:** Define separate backorder permissions and low stock alert thresholds for individual variations.

---

## Best Practices for Marketplace Sellers

- **Keep SKUs Unique and Systematic:** Use structured SKU conventions (e.g., `BRAND-CAT-ID-SIZE`) to prevent fulfillment errors and simplify inventory auditing.
- **Record Barcodes (GTIN/EAN):** Entering GTIN barcodes improves catalog searchability and ensures your items are ready for automated barcode scanner fulfillment.
- **Set Realistic Low Stock Thresholds:** Configure threshold amounts based on supplier restock lead times. If a product takes two weeks to restock, set the alert threshold to your average two-week sales volume.
- **Monitor the Undelivered Counter:** Always review the **Undelivered** column before making downward stock adjustments. Units marked as undelivered belong to pending orders and must not be sold again.
- **Use "Allow, but notify customer" for Fast-Moving Items:** If you have reliable suppliers, enabling backorders with customer notices maintains sales momentum during temporary out-of-stock periods without causing buyer confusion.

---

## Frequently Asked Questions (FAQ)

### Where do sellers find the Manage Inventory page?
In the seller dashboard, navigate to the left sidebar menu and click **Inventories > Manage Inventory** (URL route: `/seller/seller-manage-inventory/`).

### Can sellers update stock without opening the full product editor?
Yes. Click the **Manage inventory** button on any product row. An inline panel opens immediately, allowing you to update stock quantity, SKU, barcodes, backorders, and thresholds with a single click on **Save**.

### How does bulk stock adjustment work?
Check the boxes next to the items you want to update, choose **Set to**, **Increase by**, or **Decrease by** from the bulk toolbar, enter the numeric value, and click **Apply**. Verify the changes in the preview banner, then click **Save Inventories** to confirm.

### Why was a product skipped during bulk update?
A product is skipped if **Track stock quantity for this product** is turned off in its settings. To include it in bulk updates, expand the product's panel, enable stock management, and save.

### How do sellers manage stock for variable products like t-shirts with sizes?
Click the **Manage [X] variations** link on the variable product row. This opens the dedicated **Inventory Variations** page (`/seller/seller-manage-inventory-variations/<id>/`), where you can set individual stock counts, SKUs, and barcodes for each specific size and color.

### Can customers order more than the maximum purchasable quantity?
No. The **Maximum Purchasable Quantity** setting prevents any individual customer from adding more than the specified limit to their shopping cart in a single purchase.

---

## Related Documentation

- [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html) – Creating products via wizard, catalog filters, and listing completeness.
- [Product Barcode Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/product-barcode.html) – Barcode generation, barcode downloads, and variation barcode display.
- [Selling Existing Products (Select & Sell)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html) – Creating offers and selling against existing marketplace catalog items.
- [Bulk Upload Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/bulk-upload.html) – Importing products and stock via CSV spreadsheets.
- [Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html) – Tracking order statuses, generating invoices, and managing shipments.
