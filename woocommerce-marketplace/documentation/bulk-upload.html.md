---
title: Bulk Product Upload Guide – WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/bulk-upload.html
---

# Bulk Upload (CSV Import & Export)

Manually entering products one by one can be time-consuming for brand distributors and high-volume merchants. WooCommerce Multi-Vendor Marketplace includes a high-performance **Bulk Upload** importer that enables vendors to create hundreds of new products or attach offers to existing catalog items in minutes using a single CSV spreadsheet.

This guide explains both bulk upload workflows, column mapping, file specifications, and catalog export for offline batch editing.

---

## Accessing the Bulk Upload Hub

Vendors access bulk management by opening:

**Catalog > Bulk Upload** (`/seller/seller-bulk-upload/`)

The console presents two specialized pathways:

```
Catalog > Bulk Upload
Choose how you want to add products in bulk.
┌──────────────────────────────────────┐  ┌──────────────────────────────────────┐
│ List Your Own Products               │  │ Sell Catalog Products                │
│ Bulk create brand new products in    │  │ Add products already in the          │
│ your catalog from a spreadsheet.     │  │ marketplace catalog to your store,    │
│                                      │  │ at your own price and stock.         │
│ [ 4-Step Wizard: Upload/Map/Import ] │  │ [ 3-Step Wizard: Upload/Check/Done ] │
└──────────────────────────────────────┘  └──────────────────────────────────────┘
```

1. **List Your Own Products (`?import=products`):** Create brand-new products in your personal store catalog or update existing products using matching SKUs.
2. **Sell Catalog Products (`/seller/seller-bulk-sell-products/`):** Submit Select & Sell offers against existing marketplace products in bulk.

---

## Pathway A: List Your Own Products

Use this pathway to import completely new inventory or synchronize existing products in bulk via CSV.

Navigate to: **Catalog > Bulk Upload > List Your Own Products** (`/seller/seller-bulk-upload/?import=products`)

<div class="stepper-progress" style="margin: 20px 0 28px 0;">
  <div class="stepper-step stepper-step--active">
    <div class="stepper-step__num">1</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 1</span>
      <span class="stepper-step__title">Upload</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step">
    <div class="stepper-step__num">2</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 2</span>
      <span class="stepper-step__title">Map Columns</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step">
    <div class="stepper-step__num">3</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 3</span>
      <span class="stepper-step__title">Import</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step">
    <div class="stepper-step__num">4</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 4</span>
      <span class="stepper-step__title">Results</span>
    </div>
  </div>
</div>

---

### Step 1: Upload a CSV file

- **Guidance:** *"Create new products, or update your existing ones, from a CSV file. Each row is checked against your store's rules, and you get a report for every row that could not be imported."*
- **Download CSV Template:** Click **Download CSV template** to obtain a ready-to-use CSV template containing all supported product fields:
  - `name`, `sku`, `type`, `regular_price`, `sale_price`, `manage_stock`, `stock_quantity`, `backorders`, `short_description`, `description`, `category_ids`, `tags`, `images`, `weight`, `length`, `width`, `height`.
- **File Dropzone:** Drag and drop your `.csv` spreadsheet (*"CSV only · up to 1 GB · at most 500 product rows"*).
- **Update existing products:** Check this box to update existing items whose SKU matches a row in the spreadsheet. When checked, you can choose whether non-matching rows create new products or are skipped.
- **Advanced Options:** Configure CSV field delimiter (comma `,`, semicolon `;`, or tab `\t`) and character encoding (`UTF-8`).
- **Continue:** Click **Continue** to proceed to Step 2 (**Map columns**).

---

### Export Your Products (Catalog Round-Tripping)

Directly beneath the upload dropzone, vendors can download their entire active catalog:

- **Guidance:** *"Download your products as a CSV in the same format. Edit prices, stock or details, then upload the file here with 'Update existing products' ticked. Products are matched by SKU, so a product without a SKU cannot be updated this way."*
- **Export Products Button:** Click **Export products** to instantly generate an offline CSV export of your active catalog. You can edit regular prices, sale prices, or stock counts in Microsoft Excel or Google Sheets and re-upload the file with **Update existing products** ticked.

---

### Step 2: Intelligent Column Mapping

The importer reads your CSV header row and automatically pairs columns with WooCommerce product fields:

- **Automatic Pairing:** Recognizes standard headers such as *Product Name*, *SKU*, *Regular Price*, *Sale Price*, *Stock Quantity*, and *Categories*.
- **Manual Remapping:** For spreadsheets from external POS or ERP systems, use the dropdown menus to match spreadsheet columns to store attributes.
- **Ignore Column:** Set any irrelevant column to *Do not import* to omit it from processing.
- Click **Run the Importer** to proceed to Step 3.

---

### Step 3: Batch Import Processing

The import engine processes products in background batches:
- Live progress indicator tracks completion percentage.
- Validates categories against allowed marketplace taxonomies.
- Verifies product types against permitted seller permissions.

---

### Step 4: Import Results & Diagnostics

Upon completion, the system displays an import summary:
- **Imported:** Number of brand-new products added.
- **Updated:** Number of existing products synchronized.
- **Skipped / Failed:** Number of rows that encountered validation errors.
- **Download Error Report:** If any rows failed (e.g., duplicate SKU, missing title, or disallowed category), click to download a detailed CSV report specifying the row number and exact rejection reason.

---

## Pathway B: Sell Catalog Products (Bulk Select & Sell)

Use this pathway to attach Select & Sell offers to dozens or hundreds of admin-created products simultaneously.

Navigate to: **Catalog > Bulk Upload > Sell Catalog Products** (`/seller/seller-bulk-sell-products/`)

<div class="stepper-progress" style="margin: 20px 0 28px 0;">
  <div class="stepper-step stepper-step--active">
    <div class="stepper-step__num">1</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 1</span>
      <span class="stepper-step__title">Upload</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step">
    <div class="stepper-step__num">2</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 2</span>
      <span class="stepper-step__title">Check & Validate</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step">
    <div class="stepper-step__num">3</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 3</span>
      <span class="stepper-step__title">Results</span>
    </div>
  </div>
</div>

---

### Step 1: Upload a CSV file

- **Guidance:** *"Sell products that are already in the marketplace catalog, at your own price and stock. Download the template: it lists the products you can sell, one row per variation for variable products. Fill in your prices, quantities and status, then upload it here. You can check every row before anything is saved."*
- **Download CSV Template:** Click **Download CSV template** to receive a spreadsheet pre-populated with all master products currently eligible for Select & Sell in the marketplace. For variable products, the template includes one row per variation.
- **Template Columns:** `product_id`, `product_name`, `variation_id`, `regular_price`, `sale_price`, `quantity`, `description`, `status`.
- **File Dropzone:** Upload your completed CSV spreadsheet (*"CSV only · up to 1 GB · at most 500 rows"*).
- **Update existing offers:** Check this box to update price, stock, and status for products you already sell. When unchecked, rows for existing offers are skipped.
- **Continue:** Click **Continue** to advance to Step 2 (**Check**).

---

### Step 2: Pre-Flight Check & Validation

- The system scans every row before committing data to the database.
- An interactive review table displays each product, your entered regular price, sale price, inventory quantity, description note, and target status.
- Highlights any rows with syntax errors, negative numbers, or invalid IDs.
- Click **Confirm and Import** to save all offers.

---

### Step 3: Results

- Confirms the total number of newly created offers and updated offers.
- Any rejected rows are documented in a downloadable report.

---

## Admin Configuration: Bulk Upload Settings

Marketplace administrators configure vendor bulk upload rules under:

**Marketplace > Settings > Product**

| Setting Option | Description & Best Practice |
|---|---|
| **Allow Vendors to Bulk Upload** | Master switch. When enabled, approved vendors see **Bulk Upload** in their panel. |
| **Maximum Rows per File** | Sets the maximum number of rows processed per CSV upload (default: `500`). Adjust based on server processing capacity. |
| **Product Images** | Controls image handling: **Download image URLs from the file** (downloads remote images to media library), **Only images already in vendor's media library**, or **No images** (added later manually). |
