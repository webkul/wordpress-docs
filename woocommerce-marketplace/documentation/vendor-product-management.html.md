---
title: Product Management
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html
---

# Product Management

Efficient catalog management is the foundation of any thriving multi-vendor marketplace. With WooCommerce Multi-Vendor Marketplace, vendors can easily add, organize, and monitor their products through an intuitive merchant interface, while marketplace administrators retain complete governance over publishing approvals, allowable product types, categories, and form presentations.

<a class="doc-image-link" href="./assets/vendor-product-management.webp"><img src="./assets/vendor-product-management.webp" alt="Vendor Product Management Overview" /></a>

This guide covers the complete product management lifecycle: exploring the three product onboarding pathways, creating products using the guided 3-step wizard or the streamlined single-page form, utilizing the interactive **Listing Completeness** gauge, tailoring the form navigation layout in **Site Setting**, and navigating the product approval workflow.

---

## Accessing the Vendor Product List

Vendors access their central inventory by navigating to **Catalog > Products** in their merchant dashboard:

<a class="doc-image-link" href="./assets/product-list.webp"><img src="./assets/product-list.webp" alt="Vendor Product Catalog List" /></a>

### Catalog Table Data

The catalog table displays all products owned by or assigned to the vendor, along with vital operational details:

| Column | Information Displayed | Available Actions |
|---|---|---|
| **Image** | Product thumbnail image. | Visual identification of the catalog item. |
| **Product Name** | Product title and permalink. | It displays quick action links: **Edit**, **View**, and **Delete**. |
| **SKU** | Stock Keeping Unit code. | Unique inventory reference. |
| **Stock** | Stock quantity and status badge (*In stock*, *Out of stock*, *On backorder*). | Real-time stock status check. |
| **Type** | WooCommerce product type badge (*Simple*, *Variable*, *Grouped*, *External*). | Identifies product architecture. |
| **Status** | Publication status badge (*Published*, *Draft*, *Waiting for Approval*, *Rejected*). | Displays live availability in the marketplace. |
| **Price** | Regular retail price and current active sale price. | Price validation and discount verification. |
| **Barcode** | Product barcode number and graphic representation. | Click **Download PNG** to save the vector barcode image. For variable products, click **Show variations** to view variation-specific barcodes. |

---

## Filtering the Catalog (12-Parameter Filter Drawer)

High-volume vendors managing extensive catalogs can locate specific inventory items instantly using the collapsible filter drawer.

Click the **Filter** button above the product table to open the slide-out drawer:

<a class="doc-image-link" href="./assets/vendor-products-filter-drawer.webp"><img src="./assets/vendor-products-filter-drawer.webp" alt="Vendor Product 12-Parameter Filter Drawer" /></a>

### Available Filter Criteria

The drawer provides 12 granular filter parameters to isolate products by title, SKU, pricing, taxonomies, approval stage, or barcode:

| Filter Parameter | Field Control | Available Values / Placeholder | Description & Use Case |
|---|---|---|---|
| **Name** | Text Input | `Name` | Partial or exact keyword match against the product title. |
| **SKU** | Text Input | `SKU` | Filters catalog items by parent product Stock Keeping Unit. |
| **Status** | Dropdown Select | *Draft*, *Waiting for Approval*, *Private*, *Published* | Filters listings by their publication status on the marketplace. |
| **Is Approved** | Dropdown Select | *Yes*, *No*, *Rejected* | Filters items based on administrator moderation review state. |
| **Draft Status** | Dropdown Select | *Yes*, *No* | Quickly isolates draft items from submitted listings. |
| **Type** | Dropdown Select | *Simple product*, *Grouped product*, *External/Affiliate product*, *Variable product* | Isolates catalog items by specific WooCommerce product architecture. |
| **Category** | Dropdown Select | Store categories (e.g., *Clothing*, *Decor*, *Music*) | Filters listings assigned to a specific catalog category. |
| **Price (Min / Max)** | Dual Numeric Inputs | `Min` and `Max` | Sets lower and upper price bounds ($) to locate items within a price bracket. |
| **Product Number** | Text Input | `Product or variation SKU` | Deep-searches across both parent products and individual variation SKUs. |
| **ID** | Numeric Input | `ID` | Locates an exact item by its unique WordPress database post ID. |
| **Barcode Value** | Text Input | `GTIN, UPC, EAN, or ISBN` | Searches inventory by global retail barcode or identification number. |

Click **Apply Filters** to update the catalog list. To reset the filter view, clear the drawer inputs and click **Apply Filters**.

---

## Bulk Catalog Actions

Vendors can perform batch operations on multiple products simultaneously to save administrative time:

1. Select individual products using the checkboxes in the first column, or check the header box to select all items on the page.
2. Select an operation from the **Bulk Actions** dropdown menu:
   - **Delete:** Moves selected products to the trash.
   - **Assign Categories:** Batch assigns chosen store categories across all selected items.
   - **Publish (Vendor Publication Allowed):** Submits the selected draft items for immediate publication.
   - **Submit for Approval (Admin Approval Required):** Submits the selected draft items for administrative review.
   - **Generate Barcode:** Generates barcode graphics (*Code 128*, *EAN-13*, or *UPC-A*) for items with valid barcode numbers.
   - **Print Barcodes:** Compiles selected items into a formatted PDF label sheet ready for standard thermal label printers.
3. Click **Apply** to execute the bulk action.

---

## Listing Products: The 3 Onboarding Pathways

When vendors navigate to list a product by clicking **Add Product** or opening **Catalog > List Your Product**, the marketplace presents three onboarding pathways designed for different inventory scenarios:

<a class="doc-image-link" href="./assets/vendor-product-onboarding-pathways.webp"><img src="./assets/vendor-product-onboarding-pathways.webp" alt="Vendor Product Onboarding Pathways" /></a>

<div class="wkmp-real-pathway-cards">
  <a href="#_1-create-new-products" class="wkmp-real-pathway-card">
    <div class="wkmp-real-pathway-card__icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.198 3L3.802 3C3.05147 3 2.6762 3 2.41637 3.17726C2.28768 3.26505 2.18133 3.38109 2.10567 3.51627C1.9529 3.78921 1.99024 4.15793 2.06493 4.89537C2.18958 6.12624 2.2519 6.74168 2.57823 7.18168C2.74084 7.40095 2.94701 7.58519 3.18414 7.72315C3.65999 8 4.28635 8 5.53908 8L18.4609 8C19.7136 8 20.34 8 20.8159 7.72315C21.053 7.58519 21.2592 7.40095 21.4218 7.18168C21.7481 6.74168 21.8104 6.12624 21.9351 4.89537C22.0098 4.15793 22.0471 3.78921 21.8943 3.51627C21.8187 3.38109 21.7123 3.26505 21.5836 3.17726C21.3238 3 20.9485 3 20.198 3Z"/>
        <path d="M3 8L3 13.0408C3 16.7928 3 18.6688 4.17157 19.8344C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8344C21 18.6688 21 16.7928 21 13.0408V8"/>
        <path d="M10 11L14 11"/>
      </svg>
    </div>
    <div class="wkmp-real-pathway-card__title">Create New Products</div>
    <div class="wkmp-real-pathway-card__desc">If the product doesn't exist, create your own.</div>
  </a>

  <a href="#_2-search-products-select-sell" class="wkmp-real-pathway-card">
    <div class="wkmp-real-pathway-card__icon">
      <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
        <path d="M7.33203 1.33301C10.644 1.33301 13.332 4.02101 13.332 7.33301C13.332 10.645 10.644 13.333 7.33203 13.333C4.02003 13.333 1.33203 10.645 1.33203 7.33301C1.33203 4.02101 4.02003 1.33301 7.33203 1.33301ZM7.33203 11.9997C9.91036 11.9997 11.9987 9.91134 11.9987 7.33301C11.9987 4.75467 9.91036 2.66634 7.33203 2.66634C4.7537 2.66634 2.66536 4.75467 2.66536 7.33301C2.66536 9.91134 4.7537 11.9997 7.33203 11.9997ZM12.9889 12.0471L14.8745 13.9327L13.9317 14.8755L12.0461 12.9899L12.9889 12.0471Z"/>
      </svg>
    </div>
    <div class="wkmp-real-pathway-card__title">Search Products</div>
    <div class="wkmp-real-pathway-card__desc">Sell a catalogue product at your own price.</div>
  </a>

  <a href="#_3-bulk-upload" class="wkmp-real-pathway-card">
    <div class="wkmp-real-pathway-card__icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 15V3M12 3L7.5 7.5M12 3L16.5 7.5"/>
        <path d="M3 15V16.5C3 18.9853 5.01472 21 7.5 21H16.5C18.9853 21 21 18.9853 21 16.5V15"/>
      </svg>
    </div>
    <div class="wkmp-real-pathway-card__title">Bulk Upload</div>
    <div class="wkmp-real-pathway-card__desc">Add many products at once from a spreadsheet.</div>
  </a>
</div>

### 1. Create New Products

<div class="wkmp-pathway-lead">
  <span class="wkmp-pathway-lead__tag">When to use</span>
  <span class="wkmp-pathway-lead__text">If the product doesn't exist, create your own.</span>
</div>

Vendors build original standalone or complex listings from scratch using the guided wizard or single-page form:
- Guided 3-Step Stepper Wizard or Single-Page ("In One Go") mode
- AI-powered content generation (Magic AI title & description)
- Simple, Variable, Grouped, and External product architectures
- Multi-category taxonomy assignment & stock management

---

### 2. Search Products (Select & Sell)

<div class="wkmp-pathway-lead">
  <span class="wkmp-pathway-lead__tag">When to use</span>
  <span class="wkmp-pathway-lead__text">Sell a catalogue product at your own price.</span>
</div>

Vendors latch competing offers onto existing master catalog items without creating duplicate product entries:
- Search and latch offers onto existing marketplace catalog items
- Set individual retail price, sale discount, and stock count
- Custom seller description & product condition notes
- Dedicated offers management screen with multi-seller product page

---

### 3. Bulk Upload

<div class="wkmp-pathway-lead">
  <span class="wkmp-pathway-lead__tag">When to use</span>
  <span class="wkmp-pathway-lead__text">Add many products at once from a spreadsheet.</span>
</div>

Vendors import or update hundreds of catalog listings or offers simultaneously:
- **List Your Own Products:** CSV import for brand new items
- **Sell Catalog Products:** CSV import for bulk catalog offers
- 4-step upload flow: Upload → Map columns → Import → Results
- Sample CSV template download, SKU update matching & export

---

## Adding a New Product: The 3-Step Wizard Flow

When clicking **Create New Products**, the vendor is directed to the structured 3-step product creation wizard. The marketplace guides sellers sequentially through three progressive stages to ensure completeness before publishing:

<div class="wkmp-mode-grid">
  <div class="wkmp-mode-card" style="grid-column: 1 / -1;">
    <div class="wkmp-mode-card__header">
      <div class="wkmp-mode-card__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      </div>
      <span class="wkmp-mode-card__badge wkmp-mode-card__badge--recommended">Structured Milestones</span>
    </div>
    <div class="wkmp-mode-card__title">Guided 3-Step Creation Wizard</div>
    <div class="wkmp-mode-card__summary">Guides vendors sequentially through structured milestones to ensure completeness before publishing.</div>
    <ul class="wkmp-mode-card__specs">
      <li class="wkmp-mode-card__spec"><span class="wkmp-mode-card__dot"></span><strong>Step 1: Product Basics:</strong> Select categories and WooCommerce product architecture.</li>
      <li class="wkmp-mode-card__spec"><span class="wkmp-mode-card__dot"></span><strong>Step 2: Product Details:</strong> Fill in product title, descriptions, thumbnail image, SKU, barcode, and pricing.</li>
      <li class="wkmp-mode-card__spec"><span class="wkmp-mode-card__dot"></span><strong>Step 3: Complete Listing:</strong> Configure inventory controls, shipping parameters, linked items, attributes/variations, status, and publish.</li>
    </ul>
  </div>
</div>

::: tip Stepper Banner Visibility vs. Form Navigation
- **Product Stepper Toggle:** In **Settings > Site Setting**, toggling the **Product Stepper** on or off only shows or hides the Step 1–3 progress banner UI. It does not convert the creation workflow into a single-page form; creation always follows the structured 3-step sequence.
- **Form Navigation Layouts:** The **Form navigation** setting (Horizontal Tabs, Vertical Tabs, or Stacked Form) controls how the multiple cards and sections are arranged on the **Step 3 (Complete Listing / Product Editor)** form.
:::

---

### Step 1 of 3: Product Basics

<div class="stepper-progress">
  <div class="stepper-step stepper-step--active">
    <div class="stepper-step__num">1</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 1 of 3</span>
      <span class="stepper-step__title">Product Basics</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step">
    <div class="stepper-step__num">2</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 2 of 3</span>
      <span class="stepper-step__title">Product Details</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step">
    <div class="stepper-step__num">3</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 3 of 3</span>
      <span class="stepper-step__title">Complete Listing</span>
    </div>
  </div>
</div>

The initial step establishes catalog taxonomy and architectural product structure:

1. **Product Categories:**
   Select one or more relevant categories from the marketplace category taxonomy (e.g., *Clothing*, *Accessories*, *Hoodies*, *Tshirts*, *Decor*, *Music*, *Sports & Outdoors*).
2. **Product Type Selection:**
   Vendors select their product structure from interactive product type cards:

<a class="doc-image-link" href="./assets/vendor-product-step1-basics.webp"><img src="./assets/vendor-product-step1-basics.webp" alt="Add Product Step 1 - Product Basics" /></a>

<div class="product-types-grid">
  <div class="product-type-card">
    <div class="product-type-card__icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.198 3L3.802 3C3.05147 3 2.6762 3 2.41637 3.17726C2.28768 3.26505 2.18133 3.38109 2.10567 3.51627C1.9529 3.78921 1.99024 4.15793 2.06493 4.89537C2.18958 6.12624 2.2519 6.74168 2.57823 7.18168C2.74084 7.40095 2.94701 7.58519 3.18414 7.72315C3.65999 8 4.28635 8 5.53908 8L18.4609 8C19.7136 8 20.34 8 20.8159 7.72315C21.053 7.58519 21.2592 7.40095 21.4218 7.18168C21.7481 6.74168 21.8104 6.12624 21.9351 4.89537C22.0098 4.15793 22.0471 3.78921 21.8943 3.51627C21.8187 3.38109 21.7123 3.26505 21.5836 3.17726C21.3238 3 20.9485 3 20.198 3Z"/>
        <path d="M3 8L3 13.0408C3 16.7928 3 18.6688 4.17157 19.8344C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8344C21 18.6688 21 16.7928 21 13.0408V8"/>
        <path d="M10 11L14 11"/>
      </svg>
    </div>
    <div class="product-type-card__content">
      <div class="product-type-card__header">
        <div class="product-type-card__title">Simple product</div>
        <span class="product-type-card__meta">Everyday Item</span>
      </div>
      <p class="product-type-card__desc">A single physical or digital item with one price, one SKU, and inventory tracking.</p>
    </div>
  </div>

  <div class="product-type-card">
    <div class="product-type-card__icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3L21 7.5L12 12L3 7.5L12 3Z"/>
        <path d="M3 12L12 16.5L21 12"/>
        <path d="M3 16.5L12 21L21 16.5"/>
      </svg>
    </div>
    <div class="product-type-card__content">
      <div class="product-type-card__header">
        <div class="product-type-card__title">Variable product</div>
        <span class="product-type-card__meta">Matrix / Options</span>
      </div>
      <p class="product-type-card__desc">Comes in options like size, colour, or material, each with its own individual price, SKU, weight, and stock count.</p>
    </div>
  </div>

  <div class="product-type-card">
    <div class="product-type-card__icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
        <rect x="3" y="3" width="7.5" height="7.5" rx="2"/>
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/>
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/>
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/>
      </svg>
    </div>
    <div class="product-type-card__content">
      <div class="product-type-card__header">
        <div class="product-type-card__title">Grouped product</div>
        <span class="product-type-card__meta">Curated Bundle</span>
      </div>
      <p class="product-type-card__desc">A set of related products shown together on one page (e.g., a furniture set with table and chairs).</p>
    </div>
  </div>

  <div class="product-type-card">
    <div class="product-type-card__icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V13"/>
        <path d="M14 4H20V10"/>
        <path d="M20 4L11 13"/>
      </svg>
    </div>
    <div class="product-type-card__content">
      <div class="product-type-card__header">
        <div class="product-type-card__title">External / Affiliate</div>
        <span class="product-type-card__meta">Outbound Link</span>
      </div>
      <p class="product-type-card__desc">Listed here on the marketplace, but purchased and fulfilled on an external third-party website.</p>
    </div>
  </div>
</div>

3. Click **Next** to proceed to Step 2.

---

### Step 2 of 3: Product Details

<div class="stepper-progress">
  <div class="stepper-step stepper-step--completed">
    <div class="stepper-step__num">✓</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 1 of 3</span>
      <span class="stepper-step__title">Product Basics</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step stepper-step--active">
    <div class="stepper-step__num">2</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 2 of 3</span>
      <span class="stepper-step__title">Product Details</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step">
    <div class="stepper-step__num">3</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 3 of 3</span>
      <span class="stepper-step__title">Complete Listing</span>
    </div>
  </div>
</div>

<a class="doc-image-link" href="./assets/vendor-product-step2-details.webp"><img src="./assets/vendor-product-step2-details.webp" alt="Add Product Step 2 - Product Details" /></a>

The second stage captures baseline product information, descriptions, media, identifiers, and pricing:

1. **Product Name & Magic AI Generation:**
   - **Product Name:** Enter a clear, keyword-rich title.
   - **Generate content (Magic AI):** Click **Generate Content** to launch the Magic AI assistant and auto-draft titles, bullet points, and descriptions.
2. **About Product (Long Description):**
   - Rich WYSIWYG editor for comprehensive product details, materials, care guides, and specifications (with **Generate Content** AI button).
3. **Product Thumbnail:**
   - Upload the primary featured image for storefront catalog and product detail pages.
4. **Product Identifiers:**
   - **Product SKU:** Unique merchant Stock Keeping Unit code.
   - **GTIN, UPC, EAN, or ISBN:** Global retail barcode identifier. When populated, the system automatically renders the scannable vector barcode.
5. **Pricing & Scheduling:**
   - **Regular Price ($):** Standard retail selling price.
   - **Sale Price ($):** Optional promotional price. Click **Schedule** to define **Sale start date** and **Sale end date**.
6. **Product Short Description:**
   - Highlights displayed above the fold next to the primary image (with **Generate Content** AI button).
7. Click **Save** to create the product record and advance to Step 3.

> [!NOTE] Stock & Inventory Placement
> Inventory tracking parameters (Manage Stock checkbox, Stock quantity, Backorders, Low stock threshold, Sold individually, and Maximum Purchasable Quantity) are configured in **Step 3 (Complete Listing)**, not Step 2.

---

### Step 3 of 3: Complete Listing

<div class="stepper-progress">
  <div class="stepper-step stepper-step--completed">
    <div class="stepper-step__num">✓</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 1 of 3</span>
      <span class="stepper-step__title">Product Basics</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step stepper-step--completed">
    <div class="stepper-step__num">✓</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 2 of 3</span>
      <span class="stepper-step__title">Product Details</span>
    </div>
  </div>
  <div class="stepper-divider"></div>
  <div class="stepper-step stepper-step--active">
    <div class="stepper-step__num">3</div>
    <div class="stepper-step__text">
      <span class="stepper-step__sub">Step 3 of 3</span>
      <span class="stepper-step__title">Complete Listing</span>
    </div>
  </div>
</div>

In the final stage, vendors configure rich catalog metadata and operational fulfillment settings:

- **Review Summary:** Validates category assignments, pricing, and basic product details established in Steps 1 and 2.
- **Comprehensive Product Sections:** Structured into dedicated cards or navigation tabs:
  - **Manage Stock (Inventory):** Enable stock management at product level, set stock quantity, choose backorder permissions, configure low stock threshold, define stock status, toggle sold individually, and specify maximum purchasable quantity.
  - **Shipping:** Define shipping weight, parcel dimensions (Length, Width, Height), and assign applicable shipping classes.
  - **Linked Products:** Configure Up-sells and Cross-sells.
  - **Attributes & Variations:** Manage custom attributes and variation matrices for variable products.
  - **Tags & Brand:** Assign customer discoverability tags and brand classifications.
  - **External / Affiliate Details:** Set outbound product URL and button text (for external products).
  - **Status & Visibility:** Configure product status (*Online* or *Draft*), mark items as *Virtual* or *Downloadable* (with file uploads, download limits, and expiry dates), and manage the full Image Gallery.
- **Publication Action:**
  - **Publish (Vendor Publication Allowed):** Publishes the listing live on the storefront immediately.
  - **Submit for Approval (Admin Approval Required):** Submits the listing into the administrative moderation queue in `Waiting for Approval` status.

<div class="wkmp-system-notice wkmp-system-notice--success">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
  <span>Product created. Complete the rest of your listing below.</span>
</div>

---

## The Modern Product Editor

When editing existing catalog items, vendors work within a specialized workspace designed for comprehensive catalog maintenance:

<a class="doc-image-link" href="./assets/vendor-product-editor-completeness.webp"><img src="./assets/vendor-product-editor-completeness.webp" alt="Modern Product Editor and Listing Completeness Score" /></a>

<div class="completeness-card">
  <div class="completeness-card__header">
    <div class="completeness-card__title-group">
      <div class="completeness-card__icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div class="completeness-card__title">Listing Completeness</div>
    </div>
    <span class="completeness-card__score-badge">35% Complete</span>
  </div>

  <div class="completeness-card__bar-bg">
    <div class="completeness-card__bar-fill" style="width: 35%;"></div>
  </div>

  <p class="completeness-card__prompt">A complete listing gets more visibility and sells better. Fill in the remaining details and save to reach 100%.</p>

  <div class="completeness-card__missing-label">
    <span>8 details missing</span>
    <span class="hint">&bull; Click any item to navigate directly to its input field</span>
  </div>

  <div class="completeness-card__chips">
    <span class="completeness-card__chip">Short description</span>
    <span class="completeness-card__chip">Product image</span>
    <span class="completeness-card__chip">Product gallery</span>
    <span class="completeness-card__chip">Tags</span>
    <span class="completeness-card__chip">Regular price</span>
    <span class="completeness-card__chip">SKU</span>
    <span class="completeness-card__chip">Weight</span>
    <span class="completeness-card__chip">Dimensions</span>
  </div>
</div>

### 1. Header Quick Actions
- **Generate content (Magic AI):** Launches the AI generator to refresh descriptions, suggest attributes, or generate product images.
- **Preview:** Opens the live storefront product page in a new browser tab to inspect customer presentation.

---

### 2. Interactive Listing Completeness Gauge

The **Listing Completeness** gauge evaluates your product data in real time against marketplace retail standards:

- **Visual Completeness Meter:** Displays real-time completeness percentage (e.g., `35% Complete`) along an active progress track.
- **Optimization Prompt:** Encourages merchants to optimize listings for maximum storefront search discoverability:
  > *"A complete listing gets more visibility and sells better. Fill in the remaining details and save to reach 100%."*
- **Missing Information Tracker:** Tracks exact incomplete fields (e.g., *"8 details missing"*), including:
  - Short description
  - Product featured image & gallery
  - Product tags
  - Regular price
  - Merchant SKU
  - Weight & shipping dimensions
- **Click-to-Field Navigation:** Clicking any pill button in the checklist instantly smooth-scrolls to that input field and highlights it with a temporary amber glow.

---

### 3. Comprehensive Form Sections

The product editor organizes all WooCommerce product data into structured sections and cards:

<div class="form-sections-grid">
  <div class="section-pill-card">
    <div class="section-pill-card__header">
      <span class="section-pill-card__badge">Section 1</span>
      <h4 class="section-pill-card__title">Edit (General)</h4>
    </div>
    <p class="section-pill-card__desc">Product type, Product Name, permalink slug, About Product description, Categories, Thumbnail, SKU, GTIN/UPC/EAN/ISBN barcode, Regular price, Sale price with schedule, and Short description.</p>
  </div>

  <div class="section-pill-card">
    <div class="section-pill-card__header">
      <span class="section-pill-card__badge">Section 2</span>
      <h4 class="section-pill-card__title">Manage Stock (Inventory)</h4>
    </div>
    <p class="section-pill-card__desc">Enable stock management at product level, Stock quantity, Allow backorders, Low stock threshold, Stock status, Sold individually, and Maximum purchasable quantity.</p>
  </div>

  <div class="section-pill-card">
    <div class="section-pill-card__header">
      <span class="section-pill-card__badge">Section 3</span>
      <h4 class="section-pill-card__title">Shipping</h4>
    </div>
    <p class="section-pill-card__desc">Weight (kg/lbs), 3D parcel dimensions (Length × Width × Height), and assigned shipping class for delivery rate calculations.</p>
  </div>

  <div class="section-pill-card">
    <div class="section-pill-card__header">
      <span class="section-pill-card__badge">Section 4</span>
      <h4 class="section-pill-card__title">Linked Products</h4>
    </div>
    <p class="section-pill-card__desc">Cross-sells for checkout cart recommendations and Upsells for premium storefront product page recommendations.</p>
  </div>

  <div class="section-pill-card">
    <div class="section-pill-card__header">
      <span class="section-pill-card__badge">Section 5</span>
      <h4 class="section-pill-card__title">Attributes & Variations</h4>
    </div>
    <p class="section-pill-card__desc">Custom merchant attributes and global marketplace taxonomies (e.g., Color, Size). Flag attributes as visible on the product page or used for variations, and manage individual variation details.</p>
  </div>

  <div class="section-pill-card">
    <div class="section-pill-card__header">
      <span class="section-pill-card__badge">Section 6</span>
      <h4 class="section-pill-card__title">Tags & Brand</h4>
    </div>
    <p class="section-pill-card__desc">Product search keywords for customer discoverability and brand taxonomy association.</p>
  </div>

  <div class="section-pill-card">
    <div class="section-pill-card__header">
      <span class="section-pill-card__badge">Section 7</span>
      <h4 class="section-pill-card__title">Status & Visibility</h4>
    </div>
    <p class="section-pill-card__desc">Publication status (Online, Draft), Virtual checkbox, Downloadable Product settings (files, limit, expiry), and Image Gallery uploads.</p>
  </div>
</div>

#### Detailed Section Breakdown

| Section Tab / Card | Configuration Options & Field Data |
|---|---|
| **Edit (General)** | Product type selector, Product Name (with Magic AI Generate button), editable permalink slug, About Product long description, Product Category, Thumbnail, Product SKU, GTIN/UPC/EAN/ISBN barcode identifier, Regular Price, Sale Price (with schedule start and end dates), and Short Description. |
| **Manage Stock (Inventory)** | Enable stock management at product level checkbox, Stock quantity, Allow backorders (*Do not allow*, *Allow, but notify customer*, *Allow*), Low stock threshold, Stock status (*In stock*, *Out of stock*, *On backorder*), Sold individually checkbox, and Maximum Purchasable Quantity. |
| **Shipping** | Weight (kg/lbs), Dimensions (Length × Width × Height), and assigned Shipping Class. |
| **Linked Products** | Up-sells (product page premium recommendations) and Cross-sells (cart drawer recommendations). |
| **Attributes & Variations** | Custom merchant attributes and global marketplace taxonomies (e.g., Color, Size). Mark attributes as **Visible on the product page** and **Used for variations**, and configure variation items for variable products. |
| **Tags & Brand** | Product tags for catalog search discoverability, and brand taxonomy association. |
| **External / Affiliate** | External product destination URL and custom button call-to-action text (shown when External product type is selected). |
| **Status & Visibility** | Product Status (*Online*, *Draft*), Virtual toggle, Downloadable Product controls (file uploads, download limit, expiry), and multi-image Product Gallery. |

---

## Vendor Site Settings: Product Form Customization

Vendors are empowered to personalize how their product forms look and behave to match their working style.

When the administrator enables **Vendor Mode**, vendors navigate to **Settings > Site Setting** in their merchant dashboard:

<a class="doc-image-link" href="./assets/vendor-site-setting-product-form.webp"><img src="./assets/vendor-site-setting-product-form.webp" alt="Vendor Site Setting Form Layout" /></a>

Under the **Product Form** section (*"How your product form is presented"*), vendors can configure three key settings:

Vendors can choose how the 7 sections of their product editing workspace are visually arranged:

<div class="layouts-showcase-grid">
  <div class="layout-preview-card">
    <div class="layout-preview-card__mockup">
      <div style="width: 100%; display: flex; flex-direction: column; gap: 6px;">
        <div style="display: flex; gap: 4px; border-bottom: 2px solid #18181b; padding-bottom: 3px;">
          <span style="font-size: 10px; font-weight: 700; background: #18181b; color: white; padding: 2px 6px; border-radius: 3px;">General</span>
          <span style="font-size: 10px; color: #71717a; padding: 2px 6px;">Inventory</span>
          <span style="font-size: 10px; color: #71717a; padding: 2px 6px;">Shipping</span>
        </div>
        <div style="background: #e4e4e7; height: 16px; border-radius: 3px;"></div>
      </div>
    </div>
    <h4 class="layout-preview-card__name">Horizontal Tabs</h4>
    <code class="layout-preview-card__val">layout: horizontal</code>
    <p class="layout-preview-card__desc">Sections are arranged as horizontal navigation tabs across the top of the form. Best for standard displays and traditional tabbed workflows.</p>
  </div>

  <div class="layout-preview-card">
    <div class="layout-preview-card__mockup">
      <div style="width: 100%; display: flex; gap: 8px;">
        <div style="width: 34%; display: flex; flex-direction: column; gap: 4px; border-right: 1px solid #e4e4e7; padding-right: 4px;">
          <span style="font-size: 9px; font-weight: 700; background: #18181b; color: white; padding: 2px 4px; border-radius: 2px;">General</span>
          <span style="font-size: 9px; color: #71717a; padding: 2px 4px;">Inventory</span>
          <span style="font-size: 9px; color: #71717a; padding: 2px 4px;">Shipping</span>
        </div>
        <div style="flex-grow: 1; background: #e4e4e7; border-radius: 3px;"></div>
      </div>
    </div>
    <h4 class="layout-preview-card__name">Vertical Tabs</h4>
    <code class="layout-preview-card__val">layout: vertical</code>
    <p class="layout-preview-card__desc">Sections are aligned in a left-hand vertical menu column beside active fields. Ideal for wide desktop screens and rapid section switching.</p>
  </div>

  <div class="layout-preview-card">
    <div class="layout-preview-card__mockup">
      <div style="width: 100%; display: flex; flex-direction: column; gap: 5px;">
        <div style="background: #e4e4e7; height: 12px; border-radius: 3px; border-left: 3px solid #18181b;"></div>
        <div style="background: #e4e4e7; height: 12px; border-radius: 3px; border-left: 3px solid #18181b;"></div>
        <div style="background: #e4e4e7; height: 12px; border-radius: 3px; border-left: 3px solid #18181b;"></div>
      </div>
    </div>
    <h4 class="layout-preview-card__name">Stacked Form</h4>
    <code class="layout-preview-card__val">layout: stack</code>
    <p class="layout-preview-card__desc">Sections are arranged continuously in stacked cards on a single scrolling page. Perfect for smooth touchpad scrolling and rapid data entry without tab clicks.</p>
  </div>
</div>

### 1. Product Stepper Toggle
- **Field Label:** `Product stepper`
- **Control:** Checkbox toggle (`wkmp_site_settings[show_stepper]`)
- **Description:** *"Show the Step 1–3 progress on the add and edit product screens."*
- **Usage:**
  - **Checked (Enabled):** Displays the guided Step 1, Step 2, and Step 3 progress bar on product creation and editing screens.
  - **Unchecked (Disabled):** Removes step banners from the product creation and editing forms.

### 2. Listing Completeness Toggle
- **Field Label:** `Listing Completeness`
- **Control:** Checkbox toggle (`wkmp_site_settings[show_completeness]`)
- **Description:** *"Show the Listing Completeness score on the edit product screen."*
- **Usage:**
  - **Checked (Enabled):** Shows the real-time completeness percentage gauge and missing details checklist.
  - **Unchecked (Disabled):** Hides the gauge for power sellers who prefer a cleaner workspace.

### 3. Form Navigation Layouts
- **Field Label:** `Form navigation`
- **Control:** Dropdown selector (`wkmp_site_settings[layout]`)
- **Description:** *"Choose how the sections of the edit product form are laid out."*
- **Available Layouts:**

| Layout Option | Value | Visual Behavior & Ideal Use Case |
|---|---|---|
| **Horizontal Tabs** | `horizontal` | Sections (*Edit*, *Inventory*, *Shipping*, *Linked Products*, *Attributes*, *Tags & Brand*, *Status*) are rendered as clickable horizontal tabs across the top of the form. Best for standard screens and traditional tab navigation. |
| **Vertical Tabs** | `vertical` | Sections are aligned in a left-hand vertical menu column beside the active fields. Ideal for wide desktop monitors, providing quick one-click jumping between product components. |
| **Stacked Form** | `stack` | Sections are arranged continuously in stacked content cards on a single scrolling page. Ideal for laptop touchpads or rapid keyboard tabbing through every field without clicking tabs. |

Click **Save Changes** to apply preferences immediately across all product management screens.

---

## Managing Variable Products & Variations

When creating or editing a **Variable Product**, vendors can configure attribute matrices and manage individual variations:

1. In the **Attributes** tab, add attribute terms (e.g., *Color: Red, Blue, Green* or *Size: S, M, L, XL*). Check **Used for variations** and click **Save Attributes**.
2. In the **Variations** tab, click **Add Variation** and enter the variation details.
3. For each variation, customize:
   - Unique variation image
   - Variation SKU
   - Regular and sale pricing
   - Stock management and inventory count
   - Weight and dimensions
   - Unique GTIN, UPC, EAN, or ISBN. *(See [Product Barcodes](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/product-barcode.html))*

---

## Product Approval & Rejection Workflow

When marketplace administrators require product review prior to publication, items follow a structured 4-stage review cycle:

<a class="doc-image-link" href="./assets/Product-mangement.webp"><img src="./assets/Product-mangement.webp" alt="Marketplace Admin Product Approval Workflow" /></a>

1. **Submission:** When a vendor submits a product, its status is set to `Waiting for Approval` and it is hidden from storefront catalog listings.
2. **Administrative Review:** The administrator inspects the listing under **Marketplace > Product Approval**.
3. **Approval:** The administrator approves the product; its status switches to `Published` and it becomes visible on the storefront.
4. **Rejection with Reason:** If the listing violates guidelines or misses crucial details, the administrator clicks **Reject** and provides specific feedback in the rejection dialog. The vendor receives a notification detailing what must be corrected before resubmission.

---

## Admin Configuration: Product Rules & Governance

Marketplace administrators configure vendor catalog rules and form presentation from the WordPress administration panel:

Navigate to: **Marketplace > Settings > Product**

<a class="doc-image-link" href="./assets/admin-setting-product.webp"><img src="./assets/admin-setting-product.webp" alt="Admin Marketplace Product Settings" /></a>

### Key Administrator Settings

| Setting Option | Description & Best Practice |
|---|---|
| **Allow Vendor to Publish** | When enabled, approved vendors can publish products directly without administrative review. Disable this if all items must be screened before going live. |
| **Allowed Product Types** | Select which WooCommerce product types (*Simple*, *Variable*, *Grouped*, *External*) vendors are permitted to create. |
| **Allowed Categories** | Restricts vendors to specific catalog categories, preventing miscategorization. |
| **Show Stepper** | Global default setting to show the Step 1–3 progress (Product Basics, Product Details, Complete Listing) on vendor add and edit product screens. |
| **Show Listing Completeness** | Global default setting to display the Listing Completeness score on the vendor's edit product screen. |
| **Form Navigation** | Sets the global default layout (*Horizontal Tabs*, *Vertical Tabs*, or *Stacked Form*) across all vendor accounts. |
| **Vendor Mode** | **Crucial Master Switch:** When checked, vendors see **Settings > Site Setting** in their panel, and their individual choice overrides the Product Form defaults for their own store. |
| **Allow Vendors to Bulk Upload** | Enables or disables CSV product import for vendor accounts. |
| **Maximum Rows per File** | Limits the maximum number of rows processed in a single CSV import (default: 500). |
| **Product Images (Bulk Upload)** | Determines image processing during bulk import (*Download image URLs*, *Vendor media library only*, or *No images*). |

---

::: tip Vendor Portal URL Endpoints
Administrators can customize frontend URL slugs under **Marketplace > Settings > Endpoints**. By default, product management routes resolve to:
- **Product Catalog:** `/seller/vendor-products/`
- **List Product Wizard:** `/seller/seller-list-product/`
- **Add Product:** `/seller/vendor-add-product/`
- **Manage Inventory:** `/seller/seller-manage-inventory/` (See [Manage Inventory Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-inventories.html))
- **Select & Sell Search:** `/seller/seller-search-products/`
- **Bulk Upload:** `/seller/seller-bulk-upload/`
- **Site Setting:** `/seller/seller-site-setting/`
:::
