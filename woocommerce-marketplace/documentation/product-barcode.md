---
title: Product Barcode Generation & Printing Guide – WooCommerce Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/product-barcode.html
---

# Product Barcodes: Generation & Printing

In modern retail and warehouse fulfillment, physical barcodes are vital for fast inventory check-in, error-free order picking, and automated checkout scanning. WooCommerce Multi-Vendor Marketplace includes a built-in barcode engine that generates crisp vector barcodes for every product and variation, allowing vendors to print thermal label sheets directly from the seller panel.

This guide covers supported barcode formats, assigning barcodes to simple and variable products, batch PDF printing for thermal label printers, and staff permissions.

---

## Supported Barcode Formats

The marketplace engine supports three standard retail barcode symbologies:

| Format | Symbology Standard | Typical Use Case & Character Set |
|---|---|---|
| **Code 128** | High-density 1D barcode | Alphanumeric (letters, numbers, spaces, and punctuation). Standard for e-commerce packing slips, internal SKU tracking, and warehouse shelf bin locations. |
| **EAN-13** | International Article Number | 13-digit numeric standard used on retail consumer products worldwide outside North America. |
| **UPC-A** | Universal Product Code | 12-digit numeric standard used for retail point-of-sale in North America (USA and Canada). |

---

## Generating Barcodes on Products

Vendors can assign barcodes to individual products or generate them in bulk across the catalog.

### 1. Generating a Barcode on Single Products
1. Open any product for editing under **Catalog > Products** (`/seller/vendor-products/`).
2. Navigate to the **Inventory** tab (or **Edit** section depending on your form layout).
3. In the **GTIN, UPC, EAN, or ISBN** field, enter your numeric or alphanumeric identifier:
   - For retail items, enter the manufacturer-assigned GTIN, UPC-A, or EAN-13 number.
   - For custom or internal items, enter a custom unique SKU or code.
4. Click **Save Product** (or **Submit for Approval**).
5. The system automatically creates and renders the crisp vector barcode graphic below the field.

```
┌─────────────────────────────────────────────────────────────┐
│ GTIN, UPC, EAN, or ISBN: [ 8901234567890                  ] │
│                                                             │
│   || | |||| || ||||| ||| |||| | ||||| || ||| |||| ||        │
│                     8901234567890                           │
│   [ Download PNG ]                                          │
└─────────────────────────────────────────────────────────────┘
```

6. Click **Download PNG** to save the standalone high-resolution barcode image for product packaging, hangtags, or catalog design.

---

### 2. Barcodes for Variable Products
For products with multiple variations (e.g., sizes or colors):
- Open the **Variations** tab in the product editor.
- Each variation contains its own unique **GTIN / Barcode** input field.
- Vendors can assign distinct barcode numbers to each variation item (e.g., *Small/Red*, *Medium/Red*, *Large/Blue*).
- On the main **Products** list table, click **Show variations** in the Barcode column to view and download barcodes for every variation individually.

---

## Batch Barcode Generation & Printing

High-volume merchants can generate and print barcode labels for dozens of items simultaneously:

Navigate to: **Catalog > Products** (`/seller/vendor-products/`)

<div class="stepper-progress" style="margin: 20px 0 28px 0;">
  <div class="stepper-step stepper-step--active">
    <div class="stepper-step__num">1</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 1</span>
      <span class="stepper-step__title">Select Items</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step stepper-step--active">
    <div class="stepper-step__num">2</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 2</span>
      <span class="stepper-step__title">Choose Action</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step stepper-step--active">
    <div class="stepper-step__num">3</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 3</span>
      <span class="stepper-step__title">Generate PDF</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step stepper-step--active">
    <div class="stepper-step__num">4</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 4</span>
      <span class="stepper-step__title">Print Labels</span>
    </div>
  </div>
</div>

### 1. Bulk Barcode Generation
1. Select the products you want to generate barcodes for using the checkboxes in the first column.
2. Open the **Bulk Actions** menu and select **Generate Barcode**.
3. Choose the target symbology: **Code 128**, **EAN-13**, or **UPC-A**.
4. Click **Apply**. The engine generates and associates vector barcodes across all selected items.

---

### 2. Printing Barcode Label Sheets (PDF)
1. Select the checkboxes of the products or variations requiring physical labels.
2. In the **Bulk Actions** dropdown menu, select **Print Barcodes** and click **Apply**.
3. A formatted PDF document generates immediately in a new browser tab containing:
   - **Store Name:** Identifies the merchant / vendor.
   - **Product Title:** Complete item name and selected variation attributes (e.g., *German Premium Roast - 500g*).
   - **Retail Price:** Formatted price in the store currency.
   - **Vector Barcode Graphic:** High-contrast scannable lines rendered at 300 DPI.
   - **Alphanumeric Code:** Human-readable text beneath the bars.
4. Send the document directly to your thermal barcode printer (e.g., *Zebra*, *Rollo*, *DYMO*) or standard adhesive Avery label sheets.

---

## Filtering the Catalog by Barcode

Vendors can find specific products instantly using physical handheld barcode scanners:

1. On the **Products** catalog screen, click the **Filter** button to open the filter drawer.
2. Place the cursor in the **Barcode / GTIN** filter field.
3. Scan the physical product label using any USB or Bluetooth barcode scanner (or type the code).
4. Click **Apply Filters**. The catalog table updates immediately to display the exact matching item.

---

## Staff Permissions & Barcode Access Control

Store owners who employ team members can control who is authorized to view, generate, and print barcodes:

- Navigate to: **Vendor Staff > Permissions**
- Toggle the **Print Barcodes** permission:
  - **Enabled:** Staff members can generate barcode graphics and print label sheets during warehouse packing workflows.
  - **Disabled:** Hides barcode download and bulk printing tools from the staff member's interface.
