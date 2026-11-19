---
title: Seller Review – Vendor / Seller Guide | WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-seller-review.html
---

# Seller Review

In **WooCommerce Multi-Vendor Marketplace**, **Seller Reviews** allow vendors to track customer feedback submitted specifically for their store profile. While product reviews focus on individual catalog items, seller reviews reflect overall store performance—including customer service, order fulfillment speed, packaging care, and communication.

Monitoring your store reviews helps you understand buyer satisfaction, build a trusted brand reputation, and maintain a high rating in your [Vendor Account Health](https://wpdoc.webkul.com/documentation/vendor-account-health.html) score.

<a class="doc-image-link" href="./assets/vendor-seller-reviews-list.png"><img src="./assets/vendor-seller-reviews-list.png" alt="Vendor Seller Reviews Dashboard in WooCommerce Multi-Vendor Marketplace" /></a>

---

## Accessing Seller Reviews

Vendors can access their Seller Reviews console directly from the vendor dashboard:

1. Log in to your **Seller Account**.
2. In the left navigation menu, locate the **Performance** group.
3. Click **Seller Reviews** to open the dedicated reviews console.

Alternatively, you can open the **Account Health** page (`/seller/seller-account-health/`) and click the **View reviews** link on the Customer Feedback KPI card.

| Access Point | Path / URL | Scope & Purpose |
| :--- | :--- | :--- |
| **Seller Navigation Menu** | `Performance` &rarr; `Seller Reviews` | View the complete list of store-level reviews and ratings. |
| **Direct URL** | `/seller/seller-reviews/` | Direct access to the seller reviews console. |
| **Account Health Shortcut** | `/seller/seller-account-health/` | Click **View reviews** to jump directly to store feedback. |

::: tip Mobile Navigation
On smartphones and small tablets, tap the **Open menu** button in the top bar to expand the sidebar navigation, open **Performance**, and select **Seller Reviews**.
:::

---

## Seller Reviews Dashboard Overview

The **Seller Reviews** page provides a clean and responsive table displaying all feedback submitted by customers for your store.

<a class="doc-image-link" href="./assets/vendor-seller-reviews-list.png"><img src="./assets/vendor-seller-reviews-list.png" alt="Seller Reviews List View" /></a>

### Top Controls & Fast Search

At the top of the reviews table, you will find four main controls to quickly manage and navigate your feedback:

1. **Search by review title**:
   - Type keywords or phrases from the review headline (such as *"Great maker"*, *"Fast delivery"*, or *"Honest"*) into the search field.
   - Press **Enter** to instantly filter results matching your search terms.
2. **Items Per Page Dropdown**:
   - Adjust how many reviews display on a single screen.
   - Choose between `5`, `10` *(Default)*, `20`, `30`, `40`, or `50` entries per page. The list updates automatically upon selection.
3. **Sort By Dropdown**:
   - **Newest first** *(Default)*: Displays your most recent customer reviews at the top of the table.
   - **Oldest first**: Orders reviews chronologically starting from your earliest received feedback.
4. **Filter Button**:
   - Click the **Filter** button to open the slide-out **Apply Filters** drawer for multi-criteria filtering.

<a class="doc-image-link" href="./assets/vendor-seller-reviews-search.png"><img src="./assets/vendor-seller-reviews-search.png" alt="Searching Seller Reviews by Title" /></a>

---

## Understanding the Seller Reviews Table

The table organizes customer feedback into three clear columns:

| Column Header | Details Displayed | What it Tells You |
| :--- | :--- | :--- |
| **Customer / Email** | &bull; Customer Full Name<br>&bull; Buyer Avatar / Initials<br>&bull; Registered Email Address | Identifies the customer who submitted the review so you can track order history and buyer relationships. |
| **Status / Date** | &bull; Moderation Status Badge (**Approved**, **Pending**, or **Disapproved**)<br>&bull; Submission Date (e.g., *August 10, 2026*) | Indicates whether the review is currently visible on your public storefront and shows when it was submitted. |
| **Title / Rating / Description** | &bull; Overall Average Rating (e.g., *Rated 5 out of 5*)<br>&bull; 3-Pillar Breakdown (**Price**, **Value**, and **Quality**)<br>&bull; Review Headline / Title<br>&bull; Customer Comment Description | Provides full qualitative and quantitative feedback on your store performance. |

::: note Authentic Marketplace Moderation
To ensure marketplace credibility and prevent unauthorized tampering, reviews cannot be edited or deleted directly by sellers. All reviews are monitored and moderated by marketplace administrators.
:::

---

## Using the Apply Filters Drawer

When evaluating customer trends or searching for specific feedback, click the **Filter** button on the top right to open the slide-out drawer.

<a class="doc-image-link" href="./assets/vendor-seller-reviews-filter-drawer.png"><img src="./assets/vendor-seller-reviews-filter-drawer.png" alt="Seller Reviews Filter Drawer" /></a>

The drawer allows you to combine multiple filter parameters to narrow down your results:

### 1. Customer Name
Enter a full or partial customer name (for example, *Ella*) to view all feedback submitted by that specific buyer.

### 2. Email Address
Enter a customer's email address (for example, *ella.hartley@example.test*) to isolate reviews associated with a particular account.

### 3. Star Rating
Filter reviews based on the aggregate star rating:
- **Select** (Show all ratings)
- **5 stars**
- **4 stars**
- **3 stars**
- **2 stars**
- **1 star**

### 4. Description Keywords
Enter words or phrases to search within the body of customer review messages (for example, *shipping*, *packaging*, or *quality*).

### 5. Moderation Status
Filter your list by the publication status of the review:
- **Select** (Show all statuses)
- **Approved**: Reviews approved by the administrator and visible on your public storefront.
- **Pending**: Reviews currently awaiting administrator moderation.
- **Disapproved**: Reviews rejected by the administrator due to marketplace policy or guidelines.

### 6. Date Range Presets
Select one of the quick radio buttons to view reviews from a specific timeframe:
- **Today**
- **Yesterday**
- **This Week**
- **This Month**
- **Last Month**
- **Last 3 Months**
- **Last 6 Months**
- **This Year**

### 7. Custom Date Range
Use the **Date From** and **Date To** calendar pickers to select an exact date window (useful for reviewing customer sentiment during seasonal sales or promotional campaigns).

### Applying and Resetting Filters
- Click the **Apply Filters** button at the bottom of the drawer to run your query.
- To close the drawer without applying changes, click the **Close (&times;)** button in the top corner.
- To reset your filters and view all reviews again, open the drawer, clear the inputs, or navigate back to the main `/seller/seller-reviews/` page.

---

## Multi-Pillar Rating Framework

When customers leave a review for your store on the marketplace storefront, they score your business across **three core performance pillars**:

```
                       ┌────────────────────────────┐
                       │   Customer Store Review    │
                       └──────────────┬─────────────┘
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         ▼                            ▼                            ▼
┌───────────────────┐       ┌───────────────────┐        ┌───────────────────┐
│   Price Rating    │       │   Value Rating    │        │  Quality Rating   │
│     (1 to 5)      │       │     (1 to 5)      │        │     (1 to 5)      │
└─────────┬─────────┘       └─────────┬─────────┘        └─────────┬─────────┘
          │                           │                            │
          └───────────────────────────┼────────────────────────────┘
                                      ▼
                       ┌────────────────────────────┐
                       │    Overall Store Rating    │
                       │   (Average of 3 Pillars)   │
                       └────────────────────────────┘
```

1. **Price (1 to 5 Stars)**:
   - Measures customer perception of your pricing competitiveness and fairness relative to the product category.
2. **Value (1 to 5 Stars)**:
   - Evaluates whether customers feel they received good worth and satisfaction for the amount spent.
3. **Quality (1 to 5 Stars)**:
   - Reflects the physical condition of items upon arrival, packaging care, durability, and fulfillment accuracy.

### Rating Calculation Example

If a customer submits:
- **Price**: 5 / 5
- **Value**: 4 / 5
- **Quality**: 5 / 5

The resulting store rating for this review is calculated as:

```text
Overall Store Rating = (Price + Value + Quality) / 3
                     = (5 + 4 + 5) / 3
                     = 4.67 out of 5 stars
```

This composite score is displayed alongside the individual pillar scores in your Seller Reviews table and on your public storefront profile.

---

## Review Lifecycle & Moderation Workflow

To protect marketplace integrity and build authentic buyer confidence, all store reviews undergo administrative moderation:

<div class="wkmp-review-lifecycle-card">
<div class="wkmp-lifecycle-flow">
  <!-- Stage 01 -->
  <div class="wkmp-lifecycle-node">
    <div class="wkmp-lifecycle-node__top">
      <span class="wkmp-lifecycle-node__step-tag wkmp-lifecycle-node__step-tag--blue">STAGE 01</span>
      <span class="wkmp-lifecycle-node__role">Customer / Buyer</span>
    </div>
    <div class="wkmp-lifecycle-node__body">
      <div class="wkmp-lifecycle-node__icon wkmp-lifecycle-node__icon--blue">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      </div>
      <div class="wkmp-lifecycle-node__content">
        <div class="wkmp-lifecycle-node__title">Store Feedback Submission</div>
        <div class="wkmp-lifecycle-node__desc">Customer scores Price, Value, and Quality, enters a review headline, and writes comments on the seller profile.</div>
      </div>
    </div>
    <div class="wkmp-lifecycle-node__status">
      <span class="wkmp-badge-pill wkmp-badge-pill--pending">Action: Submit Form</span>
    </div>
  </div>
  <!-- Connector -->
  <div class="wkmp-lifecycle-connector">&rarr;</div>
  <!-- Stage 02 -->
  <div class="wkmp-lifecycle-node">
    <div class="wkmp-lifecycle-node__top">
      <span class="wkmp-lifecycle-node__step-tag wkmp-lifecycle-node__step-tag--amber">STAGE 02</span>
      <span class="wkmp-lifecycle-node__role">Moderation Queue</span>
    </div>
    <div class="wkmp-lifecycle-node__body">
      <div class="wkmp-lifecycle-node__icon wkmp-lifecycle-node__icon--amber">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      </div>
      <div class="wkmp-lifecycle-node__content">
        <div class="wkmp-lifecycle-node__title">Pending Review Status</div>
        <div class="wkmp-lifecycle-node__desc">Feedback receives <strong>Pending</strong> status. It appears in the seller dashboard immediately but stays hidden from the public store.</div>
      </div>
    </div>
    <div class="wkmp-lifecycle-node__status">
      <span class="wkmp-badge-pill wkmp-badge-pill--pending">Status: Pending</span>
    </div>
  </div>
  <!-- Connector -->
  <div class="wkmp-lifecycle-connector">&rarr;</div>
  <!-- Stage 03 -->
  <div class="wkmp-lifecycle-node">
    <div class="wkmp-lifecycle-node__top">
      <span class="wkmp-lifecycle-node__step-tag wkmp-lifecycle-node__step-tag--purple">STAGE 03</span>
      <span class="wkmp-lifecycle-node__role">Platform Admin</span>
    </div>
    <div class="wkmp-lifecycle-node__body">
      <div class="wkmp-lifecycle-node__icon wkmp-lifecycle-node__icon--purple">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
      </div>
      <div class="wkmp-lifecycle-node__content">
        <div class="wkmp-lifecycle-node__title">Policy &amp; Quality Check</div>
        <div class="wkmp-lifecycle-node__desc">Marketplace admin reviews the feedback to prevent spam, offensive language, or fraudulent claims.</div>
      </div>
    </div>
    <div class="wkmp-lifecycle-node__status">
      <span class="wkmp-badge-pill" style="background:#f3e8ff;color:#7e22ce;border:1px solid #e9d5ff;">Decision Gate</span>
    </div>
  </div>
</div>

<!-- Decision Junction & Outcomes -->
<div class="wkmp-decision-junction">
  <div class="wkmp-decision-label">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    Admin Moderation Decision &amp; Visibility Outcomes
  </div>
  <div class="wkmp-decision-grid">
    <!-- Approved Box -->
    <div class="wkmp-outcome-box wkmp-outcome-box--approved">
      <div class="wkmp-outcome-box__header">
        <span class="wkmp-outcome-box__badge wkmp-outcome-box__badge--approved">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Approved
        </span>
        <span class="wkmp-outcome-box__scope">Live on Public Storefront</span>
      </div>
      <div class="wkmp-outcome-box__title wkmp-outcome-box__title--approved">Published &amp; Rating Score Calculated</div>
      <div class="wkmp-outcome-box__points">
        <div class="wkmp-outcome-box__point"><strong>Public Storefront:</strong> Published on your public seller shop page under the Reviews tab.</div>
        <div class="wkmp-outcome-box__point"><strong>Rating Impact:</strong> Directly included in your overall 3-pillar rating and customer feedback metrics.</div>
        <div class="wkmp-outcome-box__point"><strong>Account Health:</strong> Positive ratings directly contribute to maintaining a Healthy standing.</div>
      </div>
    </div>
    <!-- Disapproved Box -->
    <div class="wkmp-outcome-box wkmp-outcome-box--disapproved">
      <div class="wkmp-outcome-box__header">
        <span class="wkmp-outcome-box__badge wkmp-outcome-box__badge--disapproved">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          Disapproved
        </span>
        <span class="wkmp-outcome-box__scope">Hidden from Public View</span>
      </div>
      <div class="wkmp-outcome-box__title wkmp-outcome-box__title--disapproved">Suppressed &amp; Excluded from Score</div>
      <div class="wkmp-outcome-box__points">
        <div class="wkmp-outcome-box__point"><strong>Public Storefront:</strong> Permanently hidden from shoppers; never shown on public profile pages.</div>
        <div class="wkmp-outcome-box__point"><strong>Rating Impact:</strong> Excluded from store rating calculations; imposes zero negative penalty.</div>
        <div class="wkmp-outcome-box__point"><strong>Seller Console:</strong> Retained with the Disapproved badge for audit and reference.</div>
      </div>
    </div>
  </div>
</div>
</div>

---

## Impact on Vendor Account Health

Customer feedback is one of the three primary criteria used to evaluate your store's [Vendor Account Health](https://wpdoc.webkul.com/documentation/vendor-account-health.html):

```
 ┌────────────────────────────────────────────────────────┐
 │                   Account Health Score                 │
 │  Cancellation Rate  +  Customer Feedback  +  Flags     │
 └────────────────────────────┬───────────────────────────┘
                              ▼
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
   Healthy (80–100)     At Risk (50–79)     Unhealthy (0–49)
```

- Consistently receiving **4.5 to 5.0 star reviews** keeps your store in the **Healthy** performance band.
- Low feedback ratings (below 3.0 stars) pull down your Account Health score and may move your store into the **At Risk** or **Unhealthy** band.
- Monitoring your Seller Reviews regularly allows you to detect buyer dissatisfaction early and take corrective operational actions before your account health suffers.

---

## Mobile Experience

The Seller Reviews console is fully responsive and designed for easy use on smartphones and tablets:

<a class="doc-image-link" href="./assets/vendor-seller-reviews-mobile.png"><img src="./assets/vendor-seller-reviews-mobile.png" alt="Seller Reviews Mobile View" /></a>

- **Clean Card/Stack Layout**: Review rows adapt to smaller screen sizes without horizontal scroll clipping.
- **Full-Screen Filter Drawer**: The **Apply Filters** drawer slides in smoothly, offering large touch-friendly inputs and date pickers.
- **Direct Search Access**: The top title search remains easily accessible on mobile devices.

---

## Best Practices for Marketplace Sellers

To maintain consistently high store ratings across Price, Value, and Quality:

1. **Ship Promptly & Provide Tracking**: Dispatch packages within your stated processing timeframe and provide accurate tracking details to reassure buyers.
2. **Use Clear Descriptions & Honest Photos**: Ensure product listings accurately represent item dimensions, colors, materials, and conditions to meet buyer value expectations.
3. **Pack with Care**: Thoughtful, secure, and protective packaging prevents items from being damaged during transit, earning 5-star Quality ratings.
4. **Communicate Proactively**: Answer buyer queries promptly through marketplace communication tools to resolve concerns before negative reviews occur.
5. **Regularly Audit Feedback**: Review customer comments weekly to identify repeated suggestions or fulfillment bottlenecks.

---

## Frequently Asked Questions (FAQ)

### Can sellers reply directly to customer store reviews?
Seller reviews represent customer opinions moderated by the marketplace administrator. If a buyer mentions a specific order issue in a review, sellers can reach out to the customer through the marketplace order communication system to assist them.

### What is the difference between Seller Reviews and Product Reviews?
- **Seller Reviews** (`/seller/seller-reviews/`) evaluate your overall store performance, communication, packaging, and fulfillment across three pillars (Price, Value, Quality).
- **Product Reviews** (`/seller/seller-product-reviews/`) evaluate specific catalog products, covering item fit, material, and functionality.

### Why is a new review showing as "Pending"?
New customer reviews are set to **Pending** status until marketplace administrators verify that the submission complies with marketplace content policies. Once approved, the review status changes to **Approved** and appears on your storefront.

### Can a seller delete an unfair review?
Sellers cannot delete customer reviews. If you believe a review violates marketplace guidelines, contains abusive content, or was submitted for the wrong vendor, contact the marketplace administrator to request a review moderation check.

### How does the search bar work on the Seller Reviews page?
The search bar at the top of the table searches through **Review Titles** (headlines). If you want to search within the detailed body description of reviews, open the **Apply Filters** drawer and use the **Description** filter field.
