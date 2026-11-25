---
title: Report / Flag a Vendor – Customer Guide | WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-flag-report.html
---

# Report / Flag a Vendor

In an open multi-vendor marketplace, shoppers buy goods directly from independent merchants. To guarantee a trustworthy, safe, and transparent shopping environment, the **WooCommerce Multi-Vendor Marketplace** provides a built-in **Customer Flag & Report** system.

As a customer or guest visitor, you can report suspicious stores or problematic product listings with a few clicks. Your reports go directly to marketplace administrators, helping maintain top-tier catalog standards, protect buyers against counterfeit goods, and hold sellers accountable to marketplace policies.

<a class="doc-image-link" href="./assets/customer-flag-report-overview.webp"><img src="./assets/customer-flag-report-overview.webp" alt="WooCommerce Multi-Vendor Marketplace Customer Flag and Report Overview" /></a>

---

## Why Report a Vendor or Product Listing?

Marketplace reporting helps keep the shopping ecosystem clean and reliable. You should consider submitting a report when you encounter:

- **Misleading or Inaccurate Information**: Specifications, product descriptions, or photos that do not match the actual item.
- **Counterfeit or Resold Goods**: Products suspected of being unauthorized replicas, counterfeit items, or infringing upon copyright/trademarks.
- **Unresponsive or Poor Communication**: Sellers who fail to answer order inquiries, messages, or refund requests.
- **Repeated Late Dispatch or Cancellations**: Merchants who frequently delay order fulfillment or cancel orders without valid reason.
- **Prohibited or Unsafe Items**: Listings that violate marketplace terms, safety guidelines, or local consumer regulations.
- **Pricing Discrepancies**: Hidden charges, sudden price inflations, or deceptive promotional pricing.

::: tip Safe and Confidential Reporting
When you report a store or product listing, your report is sent directly to the marketplace moderation team. Your personal contact information is kept private and is never shared directly with the reported seller.
:::

---

## Customer Flagging Touchpoints

Customers can submit flag reports from two primary storefront touchpoints, depending on whether the issue involves overall store operations or an individual catalog listing:

<div class="modes-showcase">
<div class="modes-grid">
<div class="mode-card">
<div class="mode-card__badge-wrap">
<span class="mode-card__badge mode-card__badge--secondary">Store-Level Dispute</span>
<span class="mode-card__endpoint">/vendor/[store-name]/</span>
</div>
<div class="mode-card__header">
<div class="mode-card__icon">
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
<div class="mode-card__titles">
<div class="mode-card__title">Vendor Store Profile Flag</div>
<p>Report merchant conduct, communication &amp; fulfillment</p>
</div>
</div>
<ul class="mode-card__features">
<li><strong>Trigger Location:</strong> <em>About this Vendor</em> card on the seller's storefront</li>
<li><strong>Target Scope:</strong> The entire merchant account &amp; seller standing</li>
<li><strong>Common Concerns:</strong> Unanswered messages, dispatch delays, order cancellations</li>
<li><strong>Resolution:</strong> Logged on seller profile; impacts marketplace account health</li>
</ul>
<div class="mode-card__footer">
<span class="mode-card__footer-label">Action:</span>
<code>Report Vendor</code>
</div>
</div>
<div class="mode-card">
<div class="mode-card__badge-wrap">
<span class="mode-card__badge mode-card__badge--primary">Listing-Level Dispute</span>
<span class="mode-card__endpoint">/product/[item-slug]/</span>
</div>
<div class="mode-card__header">
<div class="mode-card__icon">
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
</div>
<div class="mode-card__titles">
<div class="mode-card__title">Product Listing Flag</div>
<p>Report single item listings, catalog inaccuracies &amp; safety</p>
</div>
</div>
<ul class="mode-card__features">
<li><strong>Trigger Location:</strong> Product summary section next to purchasing buttons</li>
<li><strong>Target Scope:</strong> An individual catalog item and specific listing SKU</li>
<li><strong>Common Concerns:</strong> Misleading photos, wrong pricing, copyright theft, prohibited items</li>
<li><strong>Resolution:</strong> Logged on catalog SKU; triggers admin listing investigation</li>
</ul>
<div class="mode-card__footer">
<span class="mode-card__footer-label">Action:</span>
<code>Report Product</code>
</div>
</div>
</div>
</div>

---

## Customer Flagging Workflow

Follow this 5-step journey to submit an issue report from any storefront touchpoint:

<div class="wkmp-workflow-pipeline">
<div class="wkmp-workflow-step">
<div>
<div class="wkmp-workflow-step__top">
<span class="wkmp-workflow-step__number">STEP 01</span>
<span class="wkmp-workflow-step__icon">🔎</span>
</div>
<div class="wkmp-workflow-step__title">Locate Report Button</div>
<p class="wkmp-workflow-step__desc">Find the <strong>Report Vendor</strong> button on the store profile or <strong>Report Product</strong> on the item page.</p>
</div>
<div class="wkmp-workflow-step__loc">📍 Store Profile or PDP</div>
</div>
<div class="wkmp-workflow-step">
<div>
<div class="wkmp-workflow-step__top">
<span class="wkmp-workflow-step__number">STEP 02</span>
<span class="wkmp-workflow-step__icon">📝</span>
</div>
<div class="wkmp-workflow-step__title">Provide Contact Details</div>
<p class="wkmp-workflow-step__desc">Enter your name and email if visiting as a guest. Logged-in accounts are linked automatically.</p>
</div>
<div class="wkmp-workflow-step__loc">📍 Report Modal Header</div>
</div>
<div class="wkmp-workflow-step">
<div>
<div class="wkmp-workflow-step__top">
<span class="wkmp-workflow-step__number">STEP 03</span>
<span class="wkmp-workflow-step__icon">🔘</span>
</div>
<div class="wkmp-workflow-step__title">Select Flag Reason</div>
<p class="wkmp-workflow-step__desc">Choose an appropriate reason from the predefined list matching the exact problem you experienced.</p>
</div>
<div class="wkmp-workflow-step__loc">📍 Predefined Reason List</div>
</div>
<div class="wkmp-workflow-step">
<div>
<div class="wkmp-workflow-step__top">
<span class="wkmp-workflow-step__number">STEP 04</span>
<span class="wkmp-workflow-step__icon">💬</span>
</div>
<div class="wkmp-workflow-step__title">Add Custom Description</div>
<p class="wkmp-workflow-step__desc">Select <strong>Other</strong> to reveal a description box where you can supply specific evidence or notes.</p>
</div>
<div class="wkmp-workflow-step__loc">📍 Optional Description Box</div>
</div>
<div class="wkmp-workflow-step">
<div>
<div class="wkmp-workflow-step__top">
<span class="wkmp-workflow-step__number">STEP 05</span>
<span class="wkmp-workflow-step__icon">🚀</span>
</div>
<div class="wkmp-workflow-step__title">Submit &amp; Verify</div>
<p class="wkmp-workflow-step__desc">Click <strong>Report</strong>. An instant confirmation appears and your grievance is logged for admin review.</p>
</div>
<div class="wkmp-workflow-step__loc">📍 Modal Footer Action</div>
</div>
</div>

---

## How to Report a Vendor (Store Profile)

When you experience problems with a seller's overall conduct, store information, or customer service, you can flag their store directly from their public vendor page.

### 1. Locate the "Report Vendor" Link
Visit the vendor's storefront (e.g., `/vendor/aurora-athletics/`). In the **About this Vendor** card on the right-hand side, look for the **Report Vendor** link marked with a flag icon (<span class="dashicons dashicons-flag"></span>).

<a class="doc-image-link" href="./assets/customer-vendor-profile-report-button.webp"><img src="./assets/customer-vendor-profile-report-button.webp" alt="Report Vendor Button on Vendor Store Profile" /></a>

### 2. Open the Report Modal
Clicking **Report Vendor** opens an interactive modal centered on your screen.

<a class="doc-image-link" href="./assets/customer-vendor-flag-modal.webp"><img src="./assets/customer-vendor-flag-modal.webp" alt="Vendor Flag Reporting Modal Form" /></a>

### 3. Enter Your Details (Guest Shoppers)
- **Logged-in Customers**: Your user account is recognized automatically. The modal skips name and email fields and links your registered profile to the report.
- **Guest Shoppers**: Enter your full name in the **Your Name** input and your contact email in the **Your Email** input.

### 4. Choose an Appropriate Vendor Reason
Select the radio button that best describes your grievance:
- **Poor communication or unanswered messages**: The seller ignores messages or inquiries.
- **Repeated late dispatch**: Orders take an unusually long time to ship without explanation.
- **Item not as described**: Goods received from this seller differ significantly from store descriptions.
- **Unclear return or refund policy**: The seller refuses to honor stated refund guidelines or terms.
- **Repeated order cancellations**: Orders are abruptly cancelled after payment confirmation.
- **Suspected counterfeit or resold goods**: The seller appears to offer unauthorized replicas.
- **Misleading store or shipping information**: Inaccurate store location, processing times, or carrier information.
- **Unresponsive to customer messages**: Inquiries regarding active purchases receive no response.
- **Suspected counterfeit products**: Products listed across the store are suspected fakes.
- **Other**: Use this option when your concern does not fit any of the predefined categories.

### 5. Writing a Custom Reason
When you select the **Other** option, the modal automatically displays a text area with the placeholder: *Write a reason to report this seller.* Enter a brief explanation of the issue so marketplace managers can investigate effectively.

<a class="doc-image-link" href="./assets/customer-vendor-flag-custom-reason.webp"><img src="./assets/customer-vendor-flag-custom-reason.webp" alt="Submitting Custom Reason in Vendor Flag Modal" /></a>

### 6. Submit Your Report
Click the primary **Report** button. 
- The system validates your submission (verifying that required fields are filled and a valid reason is picked).
- A notification toast confirms that your report was submitted successfully.
- The modal closes automatically, and the report button is hidden for that session to prevent duplicate submissions.

---

## How to Report a Product Listing (Product Detail Page)

If you find an issue with a single item—such as misleading photographs, incorrect pricing, or restricted products—report the listing directly from the Product Detail Page (PDP).

### 1. Locate the "Report Product" Button
Open any vendor product page (e.g., `/product/aurora-pace-fitness-watch/`). The **Report Product** button appears directly within the main product summary area next to the purchase options.

<a class="doc-image-link" href="./assets/customer-pdp-report-product-button.webp"><img src="./assets/customer-pdp-report-product-button.webp" alt="Report Product Button on Product Detail Page" /></a>

### 2. Open the Product Flag Form
Click **Report Product** to open the reporting popup modal.

<a class="doc-image-link" href="./assets/customer-pdp-report-product-modal.webp"><img src="./assets/customer-pdp-report-product-modal.webp" alt="Product Flag Modal Overview on PDP" /></a>

### 3. Complete Reporter Information
- For guest buyers, fill in **Your Name\*** and **Your Email\***.
- For signed-in users, your customer ID and username are attached in the background.

### 4. Select a Product Flag Reason
Select the radio option that best reflects the issue with the listing:
- **Misleading product photographs**: Images do not show the real item, or represent features not included in the purchase.
- **Incorrect pricing or hidden charges**: The price shown does not reflect reality or conceals unlisted mandatory fees.
- **Prohibited or unsafe item**: The item violates product safety regulations or marketplace catalog policies.
- **Copied listing or stolen imagery**: The seller has plagiarized another merchant's text or photos.
- **Inaccurate product description**: Key specifications (size, material, compatibility) are wrong.
- **Prohibited or restricted item**: Products that require permits or are banned from sale.
- **Copyright or trademark violation**: Counterfeit brand goods or unauthorized brand logo usage.
- **Other / Briefly describe the issue**: Any other product-related dispute.

### 5. Add Custom Product Notes
If you choose **Other** (or want to specify additional details), write a brief note in the text box explaining why the product listing should be investigated.

<a class="doc-image-link" href="./assets/customer-pdp-report-product-custom-reason.webp"><img src="./assets/customer-pdp-report-product-custom-reason.webp" alt="Product Report Modal with Custom Description Filled" /></a>

### 6. Submit the Product Report
Click **Report**. An inline confirmation message verifies that your submission was received, and the window closes automatically after a few seconds.

---

## Product Reviews vs. Flagging a Listing

It is important to understand when to write a **Product Review** and when to **Report / Flag** an item. Both features serve distinct roles in keeping the marketplace transparent:

<a class="doc-image-link" href="./assets/customer-pdp-reviews-section.webp"><img src="./assets/customer-pdp-reviews-section.webp" alt="Product Reviews and Ratings Section on PDP" /></a>

| Consideration | Product Review & Rating | Flag & Report Submission |
| :--- | :--- | :--- |
| **Primary Goal** | Share personal consumer experience, opinions, and product feedback. | Report policy violations, illegal goods, fraudulent listings, or unsafe items. |
| **Visibility** | **Public**: Displayed publicly under the *Reviews* tab on the product page. | **Private**: Sent strictly to marketplace administrators for moderation. |
| **Typical Scenarios** | Product quality, comfort, fit, battery life, usability, and design. | Counterfeit brand items, stolen images, abusive behavior, and non-delivery scams. |
| **Who Evaluates It?** | Other shoppers reading reviews before making purchasing decisions. | Marketplace administrators and compliance officers conducting investigations. |
| **Customer Action** | Click **Write a Review** under the Reviews section. | Click **Report Product** or **Report Vendor** with the flag icon. |

::: tip Where to Share Honest Feedback
If a product arrived in working condition but did not meet your personal expectations (such as color tone or fit), use the **Write a Review** feature on the product page. Reserve the **Report Product** button for deceptive listings, policy infractions, or counterfeit merchandise.
:::
