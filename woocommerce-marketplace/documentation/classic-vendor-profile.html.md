---
title: Classic Vendor Profile
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/classic-vendor-profile.html
---

# Classic Vendor Profile

The **Classic Vendor Profile** is the vendor profile as it appears inside the **My Account** area. It displays important information about a vendor and helps customers understand the vendor's store, policies, and credibility.

<a class="doc-image-link" href="./assets/profile.webp"><img src="./assets/profile.webp" alt="Vendor Profile Settings" /></a>

Vendors reach it from **My Account → My Profile**. It contains the same information as the new Store Edit page, but shown within the classic WooCommerce My Account layout (alongside Orders, Downloads, Addresses, and Account details).

::: tip Looking for the new layout?
If your marketplace uses the admin-like seller dashboard, see the [Vendor Profile (Store Edit)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html) documentation for the newer **Store Edit** page.
:::

---

## Vendor Profile Overview

- After successful registration, the vendor must complete their profile under **Vendor Profile**.
- The profile contains essential vendor and shop-related information divided into multiple tabs for easier navigation.

## 1. General Tab
The **General** tab contains the vendor's basic personal profile information:
- **Personal Details**: Username, First Name, Last Name, and E-Mail address.

<a class="doc-image-link" href="./assets/general.webp"><img src="./assets/general.webp" alt="Seller Profile General Tab" /></a>

---

## 2. Shop Tab
The **Shop** tab allows vendors to configure their store identity, contact info, fulfillment details, tax compliance, policies, and address.

> [!NOTE] Form Field Parity
> All store profile fields available in the classic My Account interface (`/my-account/seller-profile/`) are identical to the options provided on the modern `/seller/vendor-profile/` (Store Edit) panel.

### Shop Information & Details:
- **Shop Title / Name**: The public display name of the vendor store.
- **Shop Slug**: The unique URL slug representing the store (e.g., `/vendor/aurora-athletics`). Read-only after initial creation to protect search indexing and permanent links.
- **Phone Number**: Customer support or store contact telephone number.
- **Fulfillment Text**: Custom delivery timeline, packaging note, or dispatch information shown to customers.
- **Read-only Applied Commission**: Vendors can view their currently applied commission rate (falling back to the global default if no specific commission is configured).
- **Payment Information**: Vendor payout details (bank account details, SWIFT/IBAN, or PayPal address) used by the administrator to disburse earnings after deducting marketplace commission.
- **Store Address & Coordinates**: Country, Street Address, City, State, Postal Code, and Latitude/Longitude coordinates.
- **Tax System Compliance**: Choose tax authority (**GSTIN**, **SSN**, or **VAT**) and enter the corresponding **Tax Identification Number**.
- **Google Analytics Tracking**: Google Analytics Measurement ID (`G-XXXXXXXXXX`) and event tracking toggles (**Enable view item event**, **Enable purchase event**).
- **Store Policies & Bio**: Rich WYSIWYG editors for **About Shop**, **Return Policy**, **Shipping Policy**, and **Privacy Policy**.

<a class="doc-image-link" href="./assets/shop.webp"><img src="./assets/shop.webp" alt="Seller Profile Shop Tab" /></a>

---

## 3. Images Tab
Vendors can upload various images to brand their store from the **Images** tab.
- Allowed file types typically include: `jpg, jpeg, png, webp, gif`.
- **User Image**: The vendor's personal avatar.
- **Shop Logo**: The logo representing the store.
- **Fulfillment Image**: An image or badge displayed for order fulfillment.
- **Banner Image**: A large banner for the store. Vendors can choose whether to display it by checking the "Show banner on vendor page" option.

<a class="doc-image-link" href="./assets/vendor-and-store-image.webp"><img src="./assets/vendor-and-store-image.webp" alt="Seller Profile Images Tab" /></a>

---

## 4. Social Profile Tab
Vendors can link their social media accounts to their store to build trust and increase engagement.
- Available optional fields include: **Facebook**, **Instagram**, **X (Formerly Twitter)**, **LinkedIn**, **Youtube**, and **Pinterest**.
- These links will be displayed on the vendor's public store page.

<a class="doc-image-link" href="./assets/social-profile.webp"><img src="./assets/social-profile.webp" alt="Seller Profile Social Tab" /></a>

---

## 5. Store Hours Tab

Vendors can set a weekly schedule from the **Store Hours** tab with per-day Open/Closed toggles and multiple time slots per day.

<a class="doc-image-link" href="./assets/seller-profile-store-hour.webp"><img src="./assets/seller-profile-store-hour.webp" alt="Store Hours Settings" /></a>

### Features of Store Hours:
- The schedule is displayed on the vendor profile page and on a hover tooltip when the store is closed.
- **Optional Blocking**: An admin setting can optionally block purchases while the store is closed.
- **Closed Notices**: Custom admin-configurable messages can be shown on the listing button and single product notice.
- **Hide Products**: When the store is closed, products can optionally be hidden from the shop, archive, and search, while remaining visible on the vendor profile.

---

## 6. KYC Tab

The **KYC** (Know Your Customer) tab allows vendors to upload their identity documents for admin verification.
- For detailed information, see the full [Vendor KYC Verification](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-kyc.html) documentation.

<a class="doc-image-link" href="./assets/seller-kyc-page.webp"><img src="./assets/seller-kyc-page.webp" alt="Seller Profile KYC Tab" /></a>

---

## 7. Profile View Tab

Vendors can choose how their public store page looks from a dedicated **Profile View** tab.
- **Live Preview**: The page features a live preview that updates instantly as you switch between styles.
- **Storefront**: Features a modern store page with an info sidebar (contact details, store hours, map) and a product gallery.
- **Spotlight**: Features a full-width hero banner with your products front and center, and an "About this Vendor" panel.

<a class="doc-image-link" href="./assets/profile-view.webp"><img src="./assets/profile-view.webp" alt="Profile View Selection" /></a>

---

## 8. SEO Information Tab

Vendors can optimize their shop's organic search visibility directly from the **SEO Information** tab:
- **Meta Title**: The title tag displayed on search engine result pages (SERPs) and browser title bars.
- **Meta Keywords**: Targeted keywords describing the store and catalog specialties, separated by commas.
- **Meta Description**: A compelling summary (150–160 characters) shown below the search link to encourage customer click-throughs.

---

## Vendor Dashboard Access

- If the admin enables the **admin-like dashboard** for vendors:
  - Vendors can see the **Admin Dashboard** option in the left-side account panel.

<a class="doc-image-link" href="./assets/vendor-dashboard.webp"><img src="./assets/vendor-dashboard.webp" alt="Vendor Admin Dashboard Menu" /></a>

---

## Google Analytics for Vendors

- Vendors can add their **own Google Analytics Account ID**.
- Vendors can enable tracking events such as:
  - **View Item**
  - **Purchase Event**

<a class="doc-image-link" href="./assets/account-id.webp"><img src="./assets/account-id.webp" alt="Vendor Google Analytics Settings" /></a>

---
## Tax System Settings

After configuring **Google Analytics**, vendors can set up their **tax information** directly from the vendor profile edit page.

<a class="doc-image-link" href="./assets/profile-profile.webp"><img src="./assets/profile-profile.webp" alt="Vendor Tax System Settings" /></a>

### Key Points

- Vendors can select their applicable **Tax System** from the dropdown, such as:
  - **GSTIN**
  - **SSN**
  - **VAT**
- Based on the selected tax system:
  - A corresponding **Tax Identification Number** field appears (e.g., GSTIN number) on the vendor's public profile page.
- Vendors can enter and save their tax details securely

---

## Vendor Policies

- Vendors can add and manage the following policies:
  - **Return Policy**
  - **Shipping Policy**
  - **Privacy Policy**
- These policies are displayed on the vendor's public profile page.

---

## Admin-like Vendor Dashboard View

- If the vendor selects the **admin-like view**:
  - The vendor profile layout changes to match the admin-style dashboard.

<a class="doc-image-link" href="./assets/admin-view.webp"><img src="./assets/admin-view.webp" alt="Vendor Admin View Profile" /></a>

<!-- <a class="doc-image-link" href="./assets/prof.webp"><img src="./assets/prof.webp" alt="Vendor Profile Admin Layout" /></a> -->

---

## Vendor Purchase Restriction

- Vendors are **restricted from purchasing their own products**.
- This helps prevent:
  - Fake orders
  - Fake reviews

- **Edit Product link** added on the vendor's own product view page
  - Allows vendors to quickly edit their products from the frontend

<a class="doc-image-link" href="./assets/seller-restriction.webp"><img src="./assets/seller-restriction.webp" alt="Vendor Purchase Restriction" /></a>

---

## Vendor Profile – Frontend View

The vendor profile is displayed on the frontend with the following sections:

### Vendor Profile Page

- Displays vendor shop details and branding.
- Shows detailed information about the vendor's shop.

<a class="doc-image-link" href="./assets/seller-profile.webp"><img src="./assets/seller-profile.webp" alt="Vendor Profile Frontend" /></a>

---

### Policies Section

- Displays the vendor's return, shipping, and privacy policies.

<a class="doc-image-link" href="./assets/seller-profile-policies-section.webp"><img src="./assets/seller-profile-policies-section.webp" alt="Vendor Profile Policies" /></a>

---
