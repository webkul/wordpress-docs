---
title: Magic AI Admin Configuration
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/magic-ai-admin-settings.html
---

# Magic AI Admin Configuration

The administrative configuration center of **Magic AI** is located in your WordPress Dashboard under **Marketplace >> Magic AI**.

The settings screen is organized into specialized configuration panels accessed through a vertical navigation sidebar:

| Admin Tab | Tab Purpose & Configuration Scope |
|---|---|
| **General** | Master marketplace activation toggle for the Magic AI engine. |
| **Providers** | AI provider connections, API keys, Ollama endpoint, and connector status. |
| **Admin Features** | Store manager tools (WYSIWYG text generation, product image creator, AI assistant). |
| **Marketplace Features** | Vendor permissions, text/vision models, usage quotas, inline buttons, and taxonomy scope. |

This modular architecture allows store owners to configure store-level authoring tools independently from the permissions, limits, and field boundaries granted to marketplace vendors.

<a class="doc-image-link" href="./assets/marketplace-admin-magic-ai-config-overview.webp"><img src="./assets/marketplace-admin-magic-ai-config-overview.webp" alt="Magic AI Admin Configuration Center Overview" /></a>

---

## General (Master Switch)

The **General** tab handles global activation and provides a baseline status check for the Magic AI module.

| Setting Label | Type | Default | Functional Explanation |
|---|---|---|---|
| **Enabled** | Toggle Switch | Disabled | The universal on/off switch for the entire Magic AI ecosystem across the marketplace. |

### Practical Operational Notes:
- **Instant Global Pause:** Toggling this switch off immediately suspends all outgoing AI requests and hides all AI trigger buttons across the store (both admin-facing and vendor-facing).
- **Safe Maintenance:** You can switch this off during site migrations, provider billing updates, or scheduled maintenance without losing any configured API keys, model selections, or vendor usage limits.
- **Save Requirement:** Always click **Save Configuration** at the top right to apply any change to this switch.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-magic-ai-general.webp"><img src="./assets/marketplace-admin-setting-magic-ai-general.webp" alt="Magic AI General Settings Master Switch" /></a>

---

## Providers (API Keys & Connection Hub)

The **Providers** tab is where you manage connections between your marketplace and external artificial intelligence networks.

### Connection Method Auto-Detection
Magic AI automatically detects your WordPress environment and displays one of two status notices:

1. **WordPress AI Connectors Detected (Green Notice):**
   - Active on modern WordPress environments (WordPress 7.0+) with core AI Connectors enabled.
   - Foundation providers—**OpenAI**, **Anthropic**, and **Google**—automatically pull their credentials directly from `WordPress Admin > Settings > Connectors`.
   - Magic AI displays a **"Connected & configured"** badge beside these providers with a direct **Manage →** link to core settings.
   - No duplicate API keys need to be entered inside Magic AI for these three services.
2. **Manual API Key Configuration (Informational Notice):**
   - Active on standard WordPress installations.
   - Each provider is configured independently using direct API keys entered in the fields below.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-magic-ai-connection-methods.webp"><img src="./assets/marketplace-admin-setting-magic-ai-connection-methods.webp" alt="Magic AI Providers Connection Method Auto Detection" /></a>

### Supported Providers & Credentials

| Provider | Credentials Format | Best Suited For |
|---|---|---|
| **OpenAI** | Standard API Key | High-quality marketing text, product names, short descriptions. |
| **Anthropic (Claude)** | Standard API Key | Long-form descriptions, structured specifications, brand consistency. |
| **Google (Gemini)** | Standard API Key | Vision-based generation from product photos, image enhancement, general copy. |
| **Groq** | Standard API Key | Ultra-fast inference with minimal waiting times during generation. |
| **xAI (Grok)** | Standard API Key | Modern, creative product highlight generation. |
| **DeepSeek** | Standard API Key | Budget-friendly text generation and attribute extraction. |
| **Mistral AI** | Standard API Key | Compact, highly capable multilingual listing translations. |
| **Ollama** | Local Server Endpoint URL (e.g. `http://localhost:11434`) | Completely private, self-hosted open-source AI models. |

<a class="doc-image-link" href="./assets/marketplace-admin-setting-gen-ai-provider.webp"><img src="./assets/marketplace-admin-setting-gen-ai-provider.webp" alt="Magic AI Supported Providers and API Keys Configuration" /></a>

---

## Admin Features (Store Owner AI Suite)

The **Admin Features** tab configures the generative AI tools available to store administrators, editors, and catalog managers when managing products in the WordPress backend.

| Admin Feature Section | Configuration Controls | Key Purpose |
|---|---|---|
| **1. Text Generation** | Toggle Switch & Provider Pill Selection | Enables AI copy generation inside WYSIWYG editors across the admin panel. |
| **2. Image Generation** | Toggle Switch & Provider Pill Selection | Enables AI product and category image creation on admin screens. |
| **3. Product Page Assistant** | Toggle Switch | Activates the **Generate content** modal on WooCommerce Add/Edit product screens. |

### Settings Breakdown

#### 1. Text Generation
- **Enabled (Toggle):** Enables AI text creation inside WYSIWYG editors (such as Product Short Description and Full Description) across the admin panel.
- **Providers (Multi-Select Pill Group):** Select which providers are permitted for admin text generation (Anthropic, DeepSeek, Gemini, Groq, Mistral, OpenAI, xAI).
- **Smart Fallback Failover:** Magic AI attempts generation using the primary active provider. If that provider is unreachable or encounters a quota error, it automatically falls back to the other selected providers in order.

#### 2. Image Generation
- **Enabled (Toggle):** Activates the **Generate Image** button on the WordPress editor toolbar for admin product screens.
- **Providers (Multi-Select Pill Group):** Select which visual image generation providers to enable (Gemini, OpenAI, xAI).

#### 3. Product Page AI Assistant
- **Enabled (Toggle):** When enabled, an AI Assistant button (**Generate content**) appears near the top of the native WooCommerce Add New Product and Edit Product screens, launching a comprehensive multi-field generation modal.

<a class="doc-image-link" href="./assets/marketplace-admin-magic-ai-admin-features.webp"><img src="./assets/marketplace-admin-magic-ai-admin-features.webp" alt="Magic AI Admin Features Settings" /></a>

---

## Marketplace Features (Multi-Vendor Governance)

The **Marketplace Features** tab defines the rules, approved models, quota limits, and field boundaries for all marketplace vendors.

### Section 1: Product Content Generation
- **Enable (Master Switch):** Master switch for vendor-facing AI generation. When OFF, no vendor can generate product content, regardless of other settings.
- **Model:** The specific language model used for text-only generation (e.g., `gpt-4o-mini`, `gemini-2.5-flash`, `claude-3-5-haiku`).
- **Allow Reference Images:** Toggle switch. When enabled, sellers can upload photos of physical items for vision-capable models to inspect and analyze.
- **Vision Model:** The multimodal model used when vendors attach photos (e.g., `gemini-2.5-flash`, `gpt-4o`).
- **Maximum Reference Images:** Number input (1 to 10; default is 3). Restricts how many photos a vendor can attach per generation request.
- **Let Sellers Choose Fields:** Toggle switch. When ON, sellers can select which specific fields they want AI to draft. When OFF, all eligible fields are drafted automatically.
- **Overwrite Filled Attributes:** Toggle switch. When OFF, AI only drafts into empty fields, protecting text the seller already typed.
- **Inline Magic AI Buttons:** Multi-select list. Displays dedicated Magic AI buttons beside specific fields (`Product Name`, `Short Description`, `Long Description`) on the vendor form.
- **Create Product with AI:** Toggle switch. Displays the launcher button beside **Add Product** on the seller Products list page.

<a class="doc-image-link" href="./assets/marketplace-admin-magic-ai-mp-content-generation.webp"><img src="./assets/marketplace-admin-magic-ai-mp-content-generation.webp" alt="Marketplace Product Content Generation Settings" /></a>

### Section 2: Image Enhancement
- **Enable:** Toggle switch. Activates the **Enhance image with AI** button below product thumbnails on vendor forms.
- **Image Provider:** Select OpenAI or Gemini for thumbnail enhancement.
- **Image Model:** Select the specific visual model (e.g., `gpt-image-1`, `gemini-2.5-flash-image`, or Default).
- **Image API Key:** Optional dedicated API key used exclusively for image enhancements. Stored encrypted.

<a class="doc-image-link" href="./assets/marketplace-admin-magic-ai-mp-image-enhancement.webp"><img src="./assets/marketplace-admin-magic-ai-mp-image-enhancement.webp" alt="Marketplace Image Enhancement Settings" /></a>

### Section 3: Limits & Quotas
- **Per Seller Limit:** Maximum generations allowed per vendor within the chosen timeframe. Leave blank for unlimited generations.
- **Limit Period:** Dropdown selector choosing the reset cycle: **Monthly** (default), **Weekly**, **Daily**, or **Lifetime**.

<a class="doc-image-link" href="./assets/marketplace-admin-magic-ai-mp-limits-quotas.webp"><img src="./assets/marketplace-admin-magic-ai-mp-limits-quotas.webp" alt="Marketplace Limits and Quotas Settings" /></a>

### Section 4: Scope & Taxonomy Controls
- **Select Attributes (Allowed Fields):** Restrict which product fields AI can draft (Name, Short Description, Long Description, Prices, Weight, Dimensions, Brand, Tags).
- **Suggest Categories:** When ON, AI proposes matching categories from existing store categories.
- **Suggest Attributes:** Multi-select list. Limits AI attribute suggestions strictly to existing WooCommerce global attributes (e.g., Color, Size).

<a class="doc-image-link" href="./assets/marketplace-admin-magic-ai-mp-scope-taxonomy.webp"><img src="./assets/marketplace-admin-magic-ai-mp-scope-taxonomy.webp" alt="Marketplace Scope and Taxonomy Settings" /></a>
