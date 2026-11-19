---
title: Configuration – Seller Central
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-seller-central.html
---

# Configuration – Seller Central

<a class="doc-image-link" href="./assets/sellercentral.webp"><img src="./assets/sellercentral.webp" alt="Seller Central" /></a>

The **Seller Central** settings allow the admin to configure and customize the **vendor onboarding page** for new sellers.

The admin can access this section from:

**Marketplace > Settings > Seller Central**

**Direct Admin Navigation Paths**:
- **Banner Sub-tab (Default)**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_central` (or `#/`)
- **Features Sub-tab**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_central#/features`
- **Reviews Sub-tab**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_central#/reviews`
- **Workflow Sub-tab**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_central#/workflow`
- **Benefits Sub-tab**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_central#/benefits`
- **Registration Sub-tab**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_central#/registration`

**Live Storefront Endpoint**:
```text
https://your-domain.com/sellercentral/
```

::: tip Searchable Page Selectors & Slug Safety
The page selector for **Seller Central** is configured under **Marketplace > Settings > General**. Dropdowns for Vendor, Seller Central, and Terms & Conditions pages are searchable. To prevent routing conflicts, saving is blocked if two selectors point to the same page or if a selected slug conflicts with an existing marketplace endpoint.
:::

---

## Seller Central Overview

- Provides a dedicated onboarding page for new vendors
- Helps vendors understand marketplace features and benefits
- Improves vendor sign-up and conversion rate
- Fully customizable by the admin
- **Page Selectors**: Admins can easily select the Seller Central page. The selectors for Vendor, Seller Central, and Terms & Conditions pages are now **searchable**, making it easy to find the right page.
- **Collision Prevention**: To prevent issues, saving is automatically blocked if two selectors point to the same page, or if a selected page slug clashes with an existing marketplace endpoint.
- Serves as a high-converting recruitment portal to attract high-quality independent vendors to your marketplace.
- Centralizes content management for landing page copy, icons, testimonials, and registration labels without touching code or template files.
- Built on a reactive admin interface that updates settings in real time via the marketplace REST API (`/wp-json/wkmp_pro_api/v1/get_seller_central_settings`).
- Connects prospective sellers directly with the onboarding registration workflow, establishing merchant accounts in WooCommerce.

---

## Seller Central Settings Summary

The table below outlines each sub-tab, available options, input controls, and their functional roles in the Seller Central configuration panel:

| Sub-Tab Section | Setting / Field Label | Control Type | Role on Landing Page |
| :--- | :--- | :--- | :--- |
| **Banner** | **Seller Central Logo** | Media Upload | Marketplace insignia shown in the top header. |
| **Banner** | **Seller Central Title** | Text Input | Brand title displayed alongside the logo. |
| **Banner** | **Banner Heading** | Text Input | Primary hero H1 heading welcoming prospective sellers. |
| **Banner** | **Banner Description** | Textarea | Core value proposition explaining platform reach. |
| **Banner** | **Banner Image** | Media Upload | Hero background / showcase visual illustration. |
| **Features** | **Why Sell Heading** | Text Input | Section heading introducing marketplace capabilities. |
| **Features** | **Why Sell Description** | Textarea | Section sub-heading explaining platform simplicity. |
| **Features** | **Features (1 to 4)** | Upload + Inputs | Highlights buyer reach, trusted brand, smart tools, and secure payouts. |
| **Reviews** | **Review 1 & 2** | Upload + Inputs | Displays verified seller testimonials to build trust and social proof. |
| **Workflow** | **How It Works Heading** | Text Input | Title introducing the onboarding roadmap. |
| **Workflow** | **Workflow Steps (1 to 4)** | Upload + Inputs | Guides sellers through Registration, Listing, Shipping, and Getting Paid. |
| **Benefits** | **Benefits Title** | Text Input | Title highlighting exclusive merchant perks. |
| **Benefits** | **Vendor Benefits (1 to 5)** | Upload + Inputs | Outlines low commission, growth insights, marketing, 24/7 support, and global reach. |
| **Registration** | **Registration Sub Title** | Textarea | Introductory note above the vendor registration form fields. |
| **Registration** | **Form Field Labels** | Text Inputs | Customizes input placeholder text for the vendor sign-up form. |
| **Registration** | **Register Button Text** | Text Input | Call-to-action button label for form submission. |

---

## Banner Section

- Displays at the top of the Seller Central page
- Admin can configure:
  - Seller Central Logo
  - Seller Central Title
  - Banner heading
  - Banner description
  - Banner image

<a class="doc-image-link" href="./assets/seller-central-banner.webp"><img src="./assets/seller-central-banner.webp" alt="Seller Central Banner" /></a>

### Banner Fields Configuration

The Banner section introduces new sellers to the marketplace. It forms the above-the-fold hero section of the landing page:

1. **Seller Central Logo**:
   - **Control Type**: Media Upload Button (`Upload`)
   - **Description**: Click **Upload** to open the WordPress Media Library and select your brand logo. This logo appears in the top navigation header of the Seller Central page.
2. **Seller Central Title**:
   - **Control Type**: Single-line Text Input
   - **Description**: Enter your marketplace name or brand tagline displayed alongside the logo.
3. **Banner Heading**:
   - **Control Type**: Single-line Text Input
   - **Description**: Enter the primary H1 headline to welcome prospective sellers in the hero section.
4. **Banner Description**:
   - **Control Type**: Multi-line Textarea
   - **Description**: Provide a concise summary explaining why merchants should choose your platform, highlighting active buyer traffic, ease of onboarding, or catalog opportunities.
5. **Banner Image**:
   - **Control Type**: Media Upload Button (`Upload`)
   - **Description**: Upload a high-resolution hero illustration or promotional banner graphic for the top section (recommended resolution: 1920x780 pixels).
6. **Save**: Click the primary **Save** button to store and apply changes across the storefront.

::: tip Recommended Image Format
Using modern **.webp** or **SVG** image formats is recommended for all logos, hero banners, and feature icons. These formats offer superior compression, faster page load speeds, and sharp visual quality on high-resolution displays.
:::

---

## Features Section

- Highlights important marketplace features
- Helps vendors understand available tools and functionality
- Attracts new vendors by showcasing platform capabilities

<a class="doc-image-link" href="./assets/seller-central-features.webp"><img src="./assets/seller-central-features.webp" alt="Seller Central Features" /></a>

### Features Fields Configuration

The Features tab allows administrators to showcase up to **4 distinct capability cards** explaining platform strengths:

- **Why Sell Heading**: Section title introducing marketplace features and seller tools.
- **Why Sell Description**: Supporting description highlighting platform simplicity and reach.

#### Feature Cards Breakdown:

| Feature Card | Configurable Elements | Functional Purpose |
| :--- | :--- | :--- |
| **Feature 1** | Icon Upload, Heading, Description | Emphasizes marketplace audience size, active customer community, and buyer reach. |
| **Feature 2** | Icon Upload, Heading, Description | Reassures vendors regarding marketplace reputation, buyer trust, and platform security. |
| **Feature 3** | Icon Upload, Heading, Description | Highlights vendor dashboard tools, product management capabilities, and selling utilities. |
| **Feature 4** | Icon Upload, Heading, Description | Assures vendors of timely payouts, reliable order fulfillment, and transparent transactions. |

---

## Reviews Section

- Displays vendor or customer testimonials
- Builds trust and credibility for new vendors
- Encourages vendors to join the marketplace

<a class="doc-image-link" href="./assets/seller-central-reviews.webp"><img src="./assets/seller-central-reviews.webp" alt="Seller Central Reviews" /></a>

### Reviews Fields Configuration

The Reviews tab displays real-world feedback from active merchants. Social proof increases conversion rates by validating marketplace success stories:

#### Review Card 1:
- **Review 1 Rating**: Set a star rating (1 to 5 stars) for the testimonial.
- **Review 1 Text**: Enter the testimonial quote detailing the seller's positive experience with the platform.
- **Review 1 Author**: Enter the full name of the featured vendor.
- **Reviewer 1 Profession**: Enter the merchant's business specialty or industry role.
- **Reviewer 1 Image**: Upload a profile picture or brand avatar for the vendor.

#### Review Card 2:
- **Review 2 Rating**: Star rating (1 to 5 stars) for the second testimonial.
- **Review 2 Text**: Testimonial quote highlighting support, onboarding speed, or sales growth.
- **Review 2 Author**: Full name of the featured merchant.
- **Reviewer 2 Profession**: Business specialty or industry title.
- **Reviewer 2 Image**: Portrait avatar for the author.

---

## Workflow Section

- Explains the step-by-step process to start selling
- Makes vendor onboarding simple and clear
- Helps reduce confusion during registration

<a class="doc-image-link" href="./assets/seller-central-workflows.webp"><img src="./assets/seller-central-workflows.webp" alt="Seller Central Workflows" /></a>

### Workflow Fields Configuration

The Workflow tab breaks down the onboarding journey into clear, sequential milestones so prospective vendors know exactly what to expect:

- **How It Works**: Section header introducing the step-by-step onboarding guide.
- **How It Works Description**: Reassures applicants that getting started is quick and uncomplicated.

#### Step-by-Step Milestones:

| Step Number | Configurable Fields | Workflow Milestone Explanation |
| :--- | :--- | :--- |
| **Step 1** | Icon Upload, Step Title, Heading, Description | Explains account creation, profile setup, and credential submission. |
| **Step 2** | Icon Upload, Step Title, Heading, Description | Describes catalog publishing, inventory management, and pricing setup. |
| **Step 3** | Icon Upload, Step Title, Heading, Description | Guides merchants on order processing, fulfillment, and shipping tracking. |
| **Step 4** | Icon Upload, Step Title, Heading, Description | Highlights commission payouts, withdrawal requests, and balance transfers. |

---

## Benefits Section

- Lists the key advantages of joining the marketplace
- Helps vendors quickly understand the value proposition
- Encourages vendor registration

<a class="doc-image-link" href="./assets/seller-central-benefits.webp"><img src="./assets/seller-central-benefits.webp" alt="Seller Central Benefits" /></a>

### Benefits Fields Configuration

The Benefits section details the commercial and operational incentives for sellers to choose your platform over alternatives:

- **Benefits Title**: Section headline emphasizing vendor-specific advantages.
- **Benefits Description**: Supporting copy highlighting marketplace support and growth opportunities.

#### Vendor Benefits Grid:

| Benefit Card | Configurable Fields | Key Commercial Benefit |
| :--- | :--- | :--- |
| **Benefit 1** | Icon Upload, Title, Description | Highlights competitive commission structures to maximize vendor revenue retention. |
| **Benefit 2** | Icon Upload, Title, Description | Details integrated analytics and business tracking tools to help sellers scale. |
| **Benefit 3** | Icon Upload, Title, Description | Promotes built-in marketing promotions, cross-selling, and store followers. |
| **Benefit 4** | Icon Upload, Title, Description | Reassures vendors with dedicated seller support and technical assistance. |
| **Benefit 5** | Icon Upload, Title, Description | Outlines cross-border selling reach across multiple regions and currencies. |

---

## Registration Section

- Allows the admin to configure vendor registration settings
- Controls onboarding options for new sellers
- Manages how vendors sign up on the marketplace

<a class="doc-image-link" href="./assets/seller-central-registration.webp"><img src="./assets/seller-central-registration.webp" alt="Seller Central Registration" /></a>

### Registration Fields Configuration

The Registration sub-tab customizes the onboarding form rendered at the bottom of the Seller Central landing page. Admins can configure custom labels and placeholder text for each field:

1. **Registration Sub Title**: Enter instructional text or a welcome prompt displayed immediately above the registration input fields.
2. **Email ID**: Customize the label or placeholder for the vendor's primary login and notification email address.
3. **First Name**: Customize the placeholder text for the merchant representative's first name.
4. **Last Name**: Customize the placeholder text for the merchant representative's last name.
5. **Shop Name**: Customize the placeholder text for the public vendor storefront name.
6. **Shop URL**: Customize the placeholder text for the unique vendor shop slug (e.g., `https://your-domain.com/shop/vendor-slug`).
7. **Shop Phone**: Customize the placeholder text for the vendor's direct telephone contact number.
8. **Register Button Text**: Customize the call-to-action text displayed on the primary registration submission button.

### Registration Form Specifications Table

| Form Field | Input Type | Validation Rules | Profile Destination |
| :--- | :--- | :--- | :--- |
| **Email Address** | `email` | Required, Must be unique, Valid RFC format | WordPress User Account (`user_email`) |
| **First Name** | `text` | Required | WordPress User Meta (`first_name`) |
| **Last Name** | `text` | Required | WordPress User Meta (`last_name`) |
| **Shop Name** | `text` | Required, Unique marketplace storefront name | Vendor Shop Profile Meta (`shop_name`) |
| **Shop URL** | `text` | Required, Valid URL slug, Checked for slug collision | Public Vendor Store URL slug (`shop_url`) |
| **Phone Number** | `tel` | Optional / Recommended for business verification | Vendor Contact Information (`shop_phone`) |
| **Submit CTA** | `submit button` | Triggers client-side & server-side validation | Submits registration data for approval/activation |

::: tip Vendor Account Activation
Depending on the **Auto Approve Vendor** setting in **Marketplace > Settings > General**, new vendor submissions either gain immediate access to their vendor panel or enter a pending status awaiting administrator review under **Users > All Users** (filtered by the `Seller` role).
:::

---

## Connecting the Seller Central Page

To publish and display your customized Seller Central onboarding page on your storefront:

1. Navigate to **Pages > Add New** in WordPress.
2. Create a page with the title **Seller Central** (slug: `sellercentral` or `sell-with-us`).
3. Add the marketplace seller central block or shortcode, or set the page template as required by your theme.
4. Navigate to **Marketplace > Settings > General**.
5. Locate the **Seller Central** page selector dropdown.
6. Search and select your newly created **Seller Central** page.
7. Click **Save Changes** to bind the landing page endpoint.

::: tip Searchable Page Selectors
The dropdown selector is searchable. If your site has dozens of published pages, type the page title into the field to locate it instantly without scrolling through long option lists.
:::

---

## Best Practices for Seller Central & SEO

- **High-Impact Headline**: Craft a clear, benefit-oriented H1 banner heading that communicates the size and purchasing power of your customer base.
- **Optimized Visuals**: Use modern WebP or optimized PNG formats for all icons and banners. Keep icons uniform in size (e.g., 100x100 pixels) to avoid layout shifts.
- **Authentic Social Proof**: Include genuine testimonials with actual vendor names, store specialties, and professional headshots to build trust with new merchants.
- **Transparent Commission Messaging**: Explicitly highlight competitive commission rates in the Benefits section to overcome hesitation during sign-up.
- **Search Engine Optimization (SEO)**:
  - Add descriptive meta titles and meta descriptions using an SEO plugin (such as Yoast SEO or Rank Math) for the Seller Central landing page.
  - Target search terms like *"sell on [Your Marketplace Name]"*, *"become a marketplace vendor"*, and *"sell products online"*.
  - Keep the page slug clean and permanent (e.g., `/sellercentral/`).
- **Mobile Responsiveness**: Test your Seller Central page across mobile devices and tablets to verify that feature grids, testimonial sliders, and registration inputs render smoothly.
