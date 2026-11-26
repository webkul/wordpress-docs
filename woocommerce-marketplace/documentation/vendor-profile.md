---
title: Vendor Profile
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html
---

# Vendor Profile

The **Vendor Profile** displays essential information about a vendor's shop, helping buyers learn about the store, view products, review store policies, and verify vendor credibility.

<a class="doc-image-link" href="./assets/seller-store-edit-overview.webp"><img src="./assets/seller-store-edit-overview.webp" alt="Store Edit Page Overview" /></a>

In the modern seller dashboard, vendor profile management is handled on the **Store Edit** page (`/seller/vendor-profile/`). Unlike older tab-based layouts, the new setup organizes all profile configurations into a **single, scrollable two-column card layout**. Vendors can view and manage their entire store configuration in one unified workspace without clicking between tabs.

::: tip Using the classic layout?
If your marketplace uses the older **My Account** tabbed layout (**My Account → My Profile**), please refer to the [Classic Vendor Profile](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/classic-vendor-profile.html) guide. You can switch between layouts using the dashboard view options configured by the marketplace administrator.
:::

---

## Store Edit Layout Overview

Vendors can access their profile editor directly from the seller dashboard sidebar by clicking **Store Edit** (`/seller/vendor-profile/`).

<a class="doc-image-link" href="./assets/seller-store-edit-overview.webp"><img src="./assets/seller-store-edit-overview.webp" alt="Store Edit Page Overview" /></a>

---

## Main Column Cards

The main column contains the core store configurations, media assets, business hours, compliance verification, storefront layout selection, and search engine optimization.

---

### 1. Images Card

The **Images** card manages the visual branding of the vendor's store across both the seller dashboard and customer-facing pages.

<a class="doc-image-link" href="./assets/seller-store-edit-images-card.webp"><img src="./assets/seller-store-edit-images-card.webp" alt="Store Edit Images Card" /></a>

- **Allowed File Formats**: Supports `jpg`, `jpeg`, `png`, `webp`, and `gif`.
- **User Image**: The personal profile avatar of the vendor. Includes **Upload** and **Remove** buttons with instant image preview.
- **Shop Logo**: The official brand logo for the store, visible on the vendor's storefront, product pages, and invoice headers.
- **Panel Header**: A dropdown setting that configures the branding area in the top-left corner of the seller dashboard:
  - **Logo with shop name**: Displays both the store logo and the store name together.
  - **Logo only**: Displays only the logo image in the top-left navigation panel.
- **Banner Image**: A wide header banner displayed across the top of the vendor's public store page.
  - **Show banner on vendor page**: Checkbox toggle to show or hide the banner on the public storefront.
  - Includes **Upload** and **Remove** controls to update or clear the banner image anytime.

---

### 2. Shop Configuration Card

The **Shop** card contains store contact details, payout preferences, analytics tracking, tax compliance, geographical location, and public store policies.

#### Store Information & Payouts:
- **Shop Name**: The public display name of the store.
- **Shop Slug**: The URL slug representing the store (for example, `/vendor/aurora-athletics`). This field is read-only after initial creation to protect permanent store links and SEO indexing.
- **Phone Number**: Customer service or store contact telephone number (accepts 4 to 15 characters).
- **Fulfillment Text**: Custom fulfillment policy note, dispatch timeframe, or special shipping message displayed to customers on the storefront.
- **Payment Information**: Vendor payout details (such as direct bank account numbers, SWIFT/IBAN codes, or PayPal address) used by the admin to disburse earnings after deducting commission.

#### Google Analytics Tracking:
Vendors can track customer traffic and engagement on their own store pages:
- **Google Analytics Account ID**: Enter your Google Analytics Measurement ID (e.g., `G-XXXXXXXXXX`).
- **Enable Tracking Events**:
  - **Enable view item event**: Fires when a customer views any product belonging to the vendor.
  - **Enable purchase event**: Fires when a customer completes an order containing the vendor's products.

#### Tax System Compliance:
- **Choose Tax System**: Select the applicable tax registration authority from the dropdown:
  - **GSTIN** (Goods and Services Tax Identification Number)
  - **SSN** (Social Security Number)
  - **VAT** (Value Added Tax)
- **Tax Identification Number**: Input field corresponding to the selected tax system (e.g., GSTIN number, VAT registration, or SSN). This ID is displayed on store receipts and verified by the marketplace.

#### Store Address & Location Coordinates:
- **Country**: Dropdown list to choose the country of operation.
- **Shop Address**: Street address and office/building number.
- **Shop Latitude & Longitude**: Precise coordinates ensuring the store appears accurately on marketplace store locator maps.
- **City, State, and Postal Code**: Specific regional address details.

#### Store Policies & Bio:
Each policy section includes a rich-text / WYSIWYG editor allowing text formatting, links, and bullet points:
- **About Shop**: A detailed description of the store, brand story, craftsmanship, or specialty shown in the "About this Vendor" section on the storefront.
- **Return Policy**: Guidelines and timelines for product returns, warranty claims, and refunds.
- **Shipping Policy**: Information on handling times, domestic/international carriers, and delivery expectations.
- **Privacy Policy**: How customer personal data is handled and protected by the vendor.

---

### 3. Store Hours Card

The **Store Hours** card allows vendors to define their weekly operating schedule and control whether buyers can purchase products outside business hours.

<a class="doc-image-link" href="./assets/seller-store-edit-store-hours-card.webp"><img src="./assets/seller-store-edit-store-hours-card.webp" alt="Store Edit Store Hours Card" /></a>

#### General Store Hours Controls:
- **Enable Store Hours**: Switch toggle to turn the store schedule on or off. When active, opening hours appear on the vendor's store page.
- **Disable Purchase During OFF Time**: Switch toggle to block the "Add to Cart" button on the vendor's products whenever the store is closed.
- **Store Off Time Message**: A customizable notice displayed to shoppers on store and product pages when the shop is closed (e.g., *"Our workshop is currently closed. Orders placed outside operating hours will be processed the next business morning."*). Basic HTML formatting is supported.

#### Weekly Schedule:
- Each day from **Monday to Sunday** has an independent **Open / Closed** toggle.
- For open days, vendors can define operating time slots (**Start Time** and **End Time**).
- Vendors can click **+ Add Slot** to set split shifts or multiple open intervals within the same day (such as morning and evening hours).

---

### 4. KYC Verification Card

The **KYC** (Know Your Customer) card provides identity and compliance verification with the marketplace administration.

<a class="doc-image-link" href="./assets/seller-store-edit-kyc-card.webp"><img src="./assets/seller-store-edit-kyc-card.webp" alt="Store Edit KYC Verification Card" /></a>

- **Verification Status Badge**: Displays the current verification state of the vendor's documents:
  - **Not uploaded**: No documents have been submitted yet.
  - **Pending**: Document is uploaded and awaiting administrator review.
  - **Approved**: Document is verified by the admin.
  - **Rejected**: Document was not accepted (the vendor must re-upload a valid file).
- **KYC Document Type**: Dropdown selection specifying the type of submitted proof:
  - **Business License**
  - **Government ID**
  - **Utility Bill**
- **KYC Document File**: File upload input. Supported document formats include `pdf`, `jpg`, `jpeg`, and `png`.

---

### 5. Profile View Card

The **Profile View** card lets vendors customize how their public storefront is styled and laid out for shoppers, with an embedded **Live Preview**.

<a class="doc-image-link" href="./assets/seller-store-edit-profile-view-card.webp"><img src="./assets/seller-store-edit-profile-view-card.webp" alt="Store Edit Profile View Card" /></a>

#### Storefront Layout Options:
- **Storefront**: A clean, structured store layout featuring a dedicated information sidebar displaying store hours, contact details, map location, and a grid product gallery.
- **Spotlight**: A visually driven layout with a full-width hero banner, prominent product showcases front and center, and an expanded "About this Vendor" story section.

#### Live Preview:
- Directly underneath the options, an embedded **Live Preview frame** loads the vendor's store page in real time. Switching between **Storefront** and **Spotlight** instantly updates the live frame so vendors can verify their design before saving.

---

### 6. SEO Information Card

The **SEO Information** card optimizes how the vendor's shop appears on search engines (like Google, Bing) and AI search summaries.

<a class="doc-image-link" href="./assets/seller-store-edit-seo-card.webp"><img src="./assets/seller-store-edit-seo-card.webp" alt="Store Edit SEO Information Card" /></a>

- **Live Search Snippet Preview**: A real-time Google search result preview box showing the page title, clean store URL (`/vendor/[slug]`), and meta description as searchers will see it in search engine result pages (SERPs).
- **Meta Title**: The title tag shown in search engine results and browser tabs. Recommended length is 50–60 characters.
- **Meta Keywords**: Keywords describing the vendor's store, categories, and specialty products. Multiple keywords must be separated by commas (e.g., `running shoes, trail footwear, sports apparel`).
- **Meta Description**: A concise summary of the store and offerings (recommended 150–160 characters). A well-crafted description improves click-through rates from search results.

---

## Sidebar Column Cards

The right column of the Store Edit page displays personal vendor details, connected social media channels, and administrative permissions.

---

### 7. General Card

The **General** card contains basic personal profile details for the vendor account.

<a class="doc-image-link" href="./assets/seller-store-edit-general-card.webp"><img src="./assets/seller-store-edit-general-card.webp" alt="Store Edit General Details Card" /></a>

- **Username**: The account login handle (read-only; set during initial registration).
- **First Name**: The vendor's first name.
- **Last Name**: The vendor's last name.
- **E-Mail**: The primary email address for notifications, order alerts, and account communications.

---

### 8. Social Profile Card

The **Social Profile** card connects the vendor's external social media presences to their marketplace store page.

<a class="doc-image-link" href="./assets/seller-store-edit-social-card.webp"><img src="./assets/seller-store-edit-social-card.webp" alt="Store Edit Social Profile Card" /></a>

Vendors can enter full profile URLs (`https://...`) for the following platforms:
- **Facebook Profile ID**
- **Instagram Profile ID**
- **X (Formerly Twitter) Profile ID**
- **Linkedin Profile ID**
- **Youtube Profile**
- **Pinterest Profile**

Connected profiles appear as clickable social media icons on the public vendor storefront.

---

### 9. Shop Information Card (Read-Only Admin Settings)

The **Shop Information** card provides a clear, read-only summary of the marketplace permissions, commission rate, and capabilities assigned to the vendor by the administrator.

<a class="doc-image-link" href="./assets/seller-store-edit-shop-info-card.webp"><img src="./assets/seller-store-edit-shop-info-card.webp" alt="Store Edit Shop Information Card" /></a>

- **Applied Commission**: The current commission percentage deducted by the marketplace on the vendor's sales (e.g., `12%`). If no vendor-specific rate is set, the global marketplace rate applies.
- **Allowed Categories**: Tags/chips showing which product categories the vendor is authorized to list products under (e.g., *Sports & Outdoors*, *Clothing*, *Accessories*).
- **Allowed Product Types**: Tags/chips listing permitted product types (e.g., *Simple product*, *Grouped product*, *External/Affiliate product*, *Variable product*).
- **Payment Methods**: Payout channels enabled by the admin for disbursing seller earnings (e.g., *Direct bank transfer*, *Check payments*, *Cash on delivery*).
- **Shipping Methods**: Shipping carriers and delivery options permitted for the vendor (e.g., *Flat rate*, *Free shipping*, *Store Pickup*).

::: note Read-Only Permissions
The settings in the Shop Information card are configured by the marketplace admin. If you need additional categories, product types, or custom commission rates, contact the marketplace administrator.
:::

---

## Saving Profile Changes

Once you have updated your store information across any of the cards:
1. Review the entered details and live previews.
2. Click the **Save** button located at the **top-right** corner of the Store Edit page.
3. A success confirmation notice confirms that all updated fields have been saved.

---

## Vendor Purchase Restriction

To ensure marketplace trust, prevent fraudulent transactions, and comply with review integrity:
- Vendors are **restricted from purchasing their own products**.
- If a logged-in vendor views one of their own products on the storefront, the standard "Add to Cart" button is disabled or replaced with an **Edit Product** link.
- The **Edit Product** shortcut allows vendors to quickly jump straight from the customer storefront into the seller catalog editor.

<a class="doc-image-link" href="./assets/seller-restriction.webp"><img src="./assets/seller-restriction.webp" alt="Vendor Purchase Restriction" /></a>

---

## Vendor Profile – Frontend View

When shoppers visit a vendor's public store link (`/vendor/[shop-slug]`), they see the fully branded storefront based on the chosen profile layout (**Storefront** or **Spotlight**):

<a class="doc-image-link" href="./assets/seller-public-storefront-view.webp"><img src="./assets/seller-public-storefront-view.webp" alt="Public Vendor Storefront View" /></a>

### Public Storefront Elements:
- **Store Banner & Logo**: Branded header imagery and store logo.
- **Vendor Badges**: Verified maker, on-time delivery, and excellence badges assigned by the administrator.
- **Deals in Categories**: Interactive category badges highlighting product lines offered by the store.
- **Store Location & Hours**: Physical street address, interactive map, and real-time open/closed status.
- **About this Vendor**: Store biography and brand story.
- **Store Policies**: Dedicated tabs displaying the vendor's Return Policy, Shipping Policy, and Privacy Policy.
- **Product Catalog**: Paginated grid of all published products with search, sorting, and price filtering.
- **Customer Reviews & Inquiry**: Review submission form, average customer rating, and "Report Vendor" links.

---

## Frequently Asked Questions (FAQ)

<details>
<summary><strong>Can I change my Shop Slug after setting up my store?</strong></summary>

In the Store Edit interface, the **Shop Slug** field is read-only after creation. This protects your store URL (`/vendor/[slug]`), prevents broken backlinks, and maintains search engine rankings. If you need an exceptional change to your store slug, request a slug update from the marketplace administrator.
</details>

<details>
<summary><strong>Where do I find my applied commission rate?</strong></summary>

Your current commission rate is displayed in the **Shop Information** card in the right sidebar column of the Store Edit page. This rate is set by the marketplace administrator.
</details>

<details>
<summary><strong>What happens to my products when Store Hours are closed?</strong></summary>

If the **Disable Purchase During OFF Time** toggle is enabled, customers cannot add your items to their cart while your store is closed. A friendly off-time notice (configured in your **Store Off Time Message** field) is displayed on your store and product pages.
</details>

<details>
<summary><strong>What file formats are accepted for Images and KYC documents?</strong></summary>

- **Store Images** (User avatar, Shop logo, Banner): `jpg`, `jpeg`, `png`, `webp`, and `gif`.
- **KYC Verification Documents**: `pdf`, `jpg`, `jpeg`, and `png`.
</details>

<details>
<summary><strong>Do I need to save each section individually?</strong></summary>

No. The new Store Edit layout features a unified **Save** button in the top-right corner of the page. Clicking this button saves changes across all cards at once.
</details>
