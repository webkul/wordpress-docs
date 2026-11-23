---
title: Magic AI Admin Content Generation
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/magic-ai-admin-content-generation.html
---

# Magic AI Admin Content Generation

Store administrators, merchandisers, and catalog managers can generate, polish, and optimize product listings directly within the native WooCommerce catalog workflow on **Add New Product** (`Products > Add New`), **Edit Product** (`Products > Edit`), and **Category** (`Products > Categories`) screens.

| 1. AI Assistant Modal | 2. Inline WYSIWYG Editor AI | 3. AI Product Image Generator |
|---|---|---|
| • **"Generate content"** top launch button<br>• Multi-field catalog drafting<br>• Interactive review modal<br>• Selective field application | • **"Magic AI"** button on editor toolbar<br>• Targeted text drafting and copy refinement<br>• Custom prompts per editor<br>• 1-Click editor insertion | • **"Generate Image"** button on editor toolbar<br>• Custom AI artwork creation<br>• Multiple aspect ratios (1:1, 2:3, 3:2)<br>• 1-Click set as Product Featured Image |

---

## 1. The Product Page AI Assistant (Multi-Field Generator)

The **AI Assistant** is a multi-field content drafting engine built right into the WooCommerce product editor.

### Where to Find It
On the WooCommerce **Add New Product** or **Edit Product** screen, look near the top right of the page (beside the main product title heading) for the blue **Generate content** button.

### Step-by-Step Workflow

1. **Click "Generate content":** Opens the interactive assistant modal.
2. **Describe Your Product:** Enter notes, bullet points, or raw supplier specifications in the prompt box (up to 2,000 characters).
3. **Select Target Fields:** Check the field pills you want the AI to draft:
   - *Product Name*
   - *Short Description*
   - *Product Description*
   - *Regular Price*
   - *Sale Price*
4. **Generate:** Click the **Generate** button. The engine drafts values across all selected fields in 5 to 15 seconds.
5. **Review & Refine:**
   - Every generated value appears in the review step marked with a **"new"** badge.
   - Click the **Regenerate** button beside any individual field to request an alternative variation.
   - Uncheck any field you prefer not to use.
6. **Apply to Form:** Click **Apply fields**. The chosen values immediately populate the corresponding live WooCommerce form inputs.

::: tip Non-Destructive Drafting
Applying generated fields writes content only to the active browser form controls. It **never** auto-saves or publishes the product without your consent. You can make manual tweaks and click **Publish** or **Update** when ready.
:::

---

## 2. Inline WYSIWYG Editor AI (Targeted Text Generation & Refinement)

For moments when you only want to write or refine specific sections of copy without opening the full product assistant, Magic AI places a dedicated button directly on the WordPress editor toolbar.

> **Editor Toolbar Buttons:**  
> Above the Short Description and Main Description WYSIWYG editors, administrators have two dedicated buttons: **[ Magic AI ]** for text composition/refinement and **[ Generate Image ]** for AI artwork generation.

### How to Use the Editor Assistant:

1. Click the **Magic AI** button located directly above the editor.
2. The **AI Assistance** popup appears:
   - **Prompt Field:** Enter instructions for what to write or how to rewrite existing copy.  
     *Examples:*
     - *"Write 4 bullet points highlighting waterproof features and durability."*
     - *"Make this description sound more premium and formal."*
     - *"Summarize the specifications into a concise closing paragraph."*
   - **Select Model:** Choose from available text models configured in your Providers tab.
3. Click **Generate**.
4. Inspect the generated text preview. Click **Apply** to insert the text directly into the active editor at your cursor position.

---

## 3. AI Product Image Generation

Store managers can create high-resolution product imagery, promotional banners, or conceptual product visuals using AI.

### How to Generate Product Images:

1. Click the **Generate Image** button located on the editor toolbar.
2. The image generation dialog opens:
   - **Prompt:** Describe the desired scene, lighting, and product setting in detail (e.g., *"Professional commercial studio shot of a stainless steel insulated water bottle on a wet slate rock, dramatic side lighting, high resolution"*).
   - **Aspect Ratio:** Choose between **Square (1:1)**, **Portrait (2:3)**, or **Landscape (3:2)**.
   - **Model:** Select your configured image generation model (e.g., Gemini or OpenAI).
3. Click **Generate Image**.
4. Review the generated image preview.
5. Click **Set as Product Image**. The artwork is automatically downloaded, added to your WordPress Media Library, and assigned as the WooCommerce Featured Image.

---

## 4. Category & Taxonomy AI Integration

Administrators can maintain rich, search-engine-friendly category landing pages:

- **Category Descriptions:** On the WooCommerce Category editing screens (`Products > Categories`), use the **Magic AI** button on the category description editor to draft engaging collection summaries.
- **Category Thumbnails:** Use the **Generate Image** tool to create consistent, high-impact header artwork for category landing pages across your marketplace.
