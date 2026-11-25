---
title: Generate Product Content
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/generate-product-content.html
---

# Generate Product Content

Generative AI (branded as **Magic AI**) allows marketplace vendors to create complete, search-optimized WooCommerce product listings from a few brief bullet points, a short working title, or reference photos in seconds.

Users can review each generated suggestion, regenerate individual fields if desired, apply the fields they want to the product form, and save the product as usual.

::: tip Non-Destructive Workflow
Magic AI is designed to be completely non-destructive. Generated suggestions are presented inside an interactive modal. Existing product details are not overwritten until the user explicitly clicks **Apply fields**.
:::

---

## Content Generation Methods

Magic AI provides three flexible ways to generate product content:

| "Create Product with AI" | Add / Edit Form Modal | Inline Field Buttons |
|---|---|---|
| • Seller Product List button<br>• Category & type selection<br>• Prompt + reference photos<br>• 1-Click instant product creation | • Add/Edit form top launcher<br>• Multi-field generation<br>• Vision photo analysis<br>• Review with "new" badges | • Buttons beside Name, Short & Long Description<br>• Targeted single-field drafting<br>• Instant modal refinement |

---

## Method 1: "Create Product with AI" (Guided Creation Wizard)

The fastest way for vendors to launch a new product from scratch is using the **Create Product with AI** wizard directly from their product list.

### 1. Launch the Wizard
From the **Seller Dashboard**, navigate to **Products**. Beside the standard **Add Product** button, click the blue **Create Product with AI** button.

<a class="doc-image-link" href="./assets/marketplace-vendor-create-product-with-ai.webp"><img src="./assets/marketplace-vendor-create-product-with-ai.webp" alt="Create Product with AI Button in Seller Catalog" /></a>

### 2. Select Product Basics
- **Category:** Choose one or more categories from the marketplace category multiselect list.
- **Product Type:** Choose your product format:
  - *Simple Product* (Physical goods)
  - *Variable Product* (Items with variations like size or color)
  - *Virtual Product* (Services or digital bookings)
  - *Downloadable Product* (Software, e-books, files)

### 3. Describe Your Product & Attach Photos
- **Product Brief:** Enter a concise description or paste rough supplier notes (up to 2,000 characters).  
  *Example:* `Handcrafted ceramic pour-over coffee dripper, matte speckled ivory glaze, cone shape, fits size 02 filters, dishwasher safe.`
- **Reference Photos (Optional):** Click to attach up to 3 photos. The vision model scans the images to identify materials, colors, textures, and form factors.
- **Field Selection:** Toggle interactive pills for the fields you want the AI to draft (Product Name, Short Description, Long Description, Regular Price, Dimensions, Attributes).

<a class="doc-image-link" href="./assets/marketplace-vendor-create-product-with-ai-modal.webp"><img src="./assets/marketplace-vendor-create-product-with-ai-modal.webp" alt="Guided Creation Wizard Modal with Prompt and Field Selection" /></a>

### 4. Review & Create
- Click **Generate**. Review each generated field marked with a **"new"** badge.
- Click **Regenerate** beside any individual field if you want an alternative draft.
- Click **Create Product**. The listing is instantly created in your seller catalog.

---

## Method 2: Add/Edit Product Form Assistant

If you are already editing an existing product or prefer using the standard product form:

1. Navigate to **Products >> Add Product** or click **Edit** on an existing item.
2. Click the prominent **Generate content** button at the top of the form.

<a class="doc-image-link" href="./assets/marketplace-vendor-product-form-ai-launcher.webp"><img src="./assets/marketplace-vendor-product-form-ai-launcher.webp" alt="Generate Content Button on Seller Product Form Header" /></a>

3. Enter your product brief in the prompt area.
4. (Optional) Upload reference product photos.
5. Select which fields you want drafted (Title, Short Description, Product Description, Price, SKU, Attributes).
6. Click **Generate** and review the drafted suggestions in the review list.

<a class="doc-image-link" href="./assets/marketplace-vendor-product-form-ai-modal.webp"><img src="./assets/marketplace-vendor-product-form-ai-modal.webp" alt="Seller Product Form Magic AI Assistant Modal" /></a>

7. Click **Apply fields** to insert the values directly into your active form controls.
8. Make any manual edits and click **Save Product** or **Update Product**.

---

## Method 3: Inline Field Magic AI Buttons

When you only need help drafting or polishing one specific field:

- **Beside Product Name:** Writes a concise, high-impact title.
- **Above Short Description:** Composes quick bulleted key benefits.
- **Above Long Description:** Expands notes into a comprehensive product overview.

<a class="doc-image-link" href="./assets/marketplace-vendor-product-inline-ai-buttons.webp"><img src="./assets/marketplace-vendor-product-inline-ai-buttons.webp" alt="Inline Magic AI Content Generation Buttons on Seller Product Form" /></a>

Clicking an inline button opens a mini-prompt where you can enter an instruction (e.g., *"Make it sound more athletic"*), review the single output, and click **Apply** to fill that exact field immediately.

<a class="doc-image-link" href="./assets/marketplace-vendor-product-inline-ai-modal.webp"><img src="./assets/marketplace-vendor-product-inline-ai-modal.webp" alt="Inline Field Magic AI Mini Prompt Modal" /></a>

---


## What Fields Can Be Generated

| Field | Description | Benefit |
|---|---|---|
| **Product Name** | Clean, high-converting product title | Eliminates seller typos and ensures brand readability |
| **Short Description** | Punchy 2–3 sentence overview or skimmable bullet points | Optimizes mobile view and catalog grid click-throughs |
| **Long Description** | Comprehensive description formatted with feature highlights, care tips, and specs | Answers customer questions and reduces product returns |
| **Regular & Sale Price** | Market-appropriate retail and promotional pricing | Provides instant pricing benchmarks |
| **Attributes & Specs** | Global attributes (Color, Size, Material) and physical dimensions | Speeds up catalog filtering and faceted navigation |
| **Categories & Tags** | Matches existing marketplace categories and search tags | Boosts organic marketplace and Google search discovery |

---

## Prerequisites & Role Capabilities

To use Magic AI content generation:
1. **Master Enablement:** The store owner must have enabled Magic AI under **Marketplace > Magic AI > General**.
2. **Active Provider:** At least one valid AI provider must be configured under **Providers**.
3. **Vendor Quota:** The seller must have remaining AI generations in their current quota cycle. See [Usage Limits & Quotas](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/usage-limits.html).
4. **Vendor Staff Permission:** Staff members must have the `Generate Content with Magic AI` permission assigned in their role. See [Vendor Staff](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).
