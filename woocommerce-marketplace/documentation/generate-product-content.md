---
title: Generate Product Content
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/generate-product-content.html
---

# Generate Product Content

Generative AI (Magic AI) allows vendors to generate a complete, search-optimized WooCommerce product listing from a simple title, brief bullet points, or reference photos in seconds. Vendors can review each generated suggestion, apply the fields they want to the product form, and save the product as usual.

::: tip Non-Destructive Workflow
Magic AI is designed to be completely non-destructive. Generated suggestions are presented inside an interactive modal. Existing product details are not overwritten until the vendor explicitly clicks **Apply Selected**.
:::

---

## Before You Start

Ensure the following prerequisites are met before generating product content:

1. **Admin Enablement**: The marketplace administrator has enabled Generative AI in the marketplace settings and configured a valid AI provider API key.
2. **Product Ownership**: The product is one created by the vendor. Magic AI is available for the vendor's own catalog items on the Add Product and Edit Product screens.
3. **Staff Permissions**: If using vendor staff accounts, ensure the user's role includes the `Generate Content with Magic AI` capability. See [Vendor Staff](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).
4. **Active Quota**: The vendor has remaining AI generations for the current billing or limit cycle. See [Usage Limits](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/usage-limits.html).

---

## Step-by-Step: Generating Product Content

### 1. Open the Product Form

From the vendor dashboard, navigate to **Products >> Add New Product**, or click **Edit** on an existing product in your catalog.

---

### 2. Enter a Brief Description or Working Title

In the product creation form, provide a short starting prompt or product summary:

- **Working Title**: E.g., `Ergonomic Wireless Noise-Cancelling Headphones with 40h Battery`.
- **Key Highlights**: Add 2 to 3 bullet points noting materials, intended audience, key technical specs, or unique selling points.
- The more specific your initial brief, the more accurate the resulting copy will be.

---

### 3. (Optional) Add Reference Photos

If using a vision-capable AI model (such as OpenAI GPT-4o or Google Gemini 1.5 Pro):

- Click **Upload Reference Photos** in the AI modal to attach up to 3 images of the product.
- The AI model visually scans the photos to detect colors, textures, ports, buttons, materials, and form factors.
- These detected visual attributes are automatically blended into the written description and specification tables.

---

### 4. Click "Generate with AI"

Click the **Generate with Magic AI** button located near the product title and description fields:

- A dedicated generation window opens, displaying your remaining monthly generation balance.
- Click **Generate Content** to send the request to the AI engine.
- Within 3 to 8 seconds, the generated fields appear formatted and ready for inspection.

---

### 5. Review & Refine Suggestions

The modal displays the generated content organized by product fields:

| Field | Description | Action Available |
| :--- | :--- | :--- |
| **Product Title** | Clean, keyword-focused, professional title | Edit inline or Regenerate |
| **Short Description** | Punchy 2–3 sentence overview for quick buyer scanning | Edit inline or Regenerate |
| **Full Description** | Comprehensive description formatted with HTML headings, bulleted feature highlights, and care/usage instructions | Edit rich-text or Regenerate |
| **Specifications Table** | Structured HTML table with technical specifications | Edit inline or Regenerate |
| **Suggested Categories & Tags** | Matches existing marketplace categories and creates popular search tags | Select or deselect tags |
| **SEO Meta Fields** | SEO Meta Title and Meta Description for search engine indexing | Edit inline or Regenerate |

- **Field-by-Field Regeneration**: If you want an alternative phrasing for a single section (e.g. only the short description), click the circular **Regenerate Field** icon beside that specific field without re-running the entire prompt.

---

### 6. Apply Suggestions & Save

1. Select the checkmarks next to the fields you wish to use.
2. Click **Apply Selected** to inject the generated text directly into the corresponding WooCommerce product form fields.
3. Review your regular pricing, sale pricing, inventory stock, and shipping classes as needed.
4. Click **Save Product** (or **Submit for Review** if admin moderation is active).

---

## What Can Be Generated

- **Product Titles**: Clean, marketable names free from vendor typos.
- **Short Summaries**: Catchy excerpts ideal for product grid listings and mobile storefront displays.
- **Detailed Descriptions**: Engaging long-form copy featuring key benefit breakdowns, compatibility notes, and material care tips.
- **Bulleted Feature Highlights**: Skimmable bullet points highlighting top benefits.
- **Taxonomy Recommendations**: Category selections and search tags.
- **SEO Snippets**: Custom meta descriptions that boost organic click-through rates on Google search results.

---

## When the AI Button Is Unavailable

- **Quota Depleted**: The vendor has reached their daily or monthly allocation limit. See [Usage Limits](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/usage-limits.html).
- **Select & Sell Products**: The button is not displayed when listing an offer against an existing marketplace master catalog product using the *Sell as Yours* / *Select & Sell* feature, as those items inherit the established master catalog description.
- **Missing API Configuration**: The marketplace administrator has not yet entered an active AI provider API key.
