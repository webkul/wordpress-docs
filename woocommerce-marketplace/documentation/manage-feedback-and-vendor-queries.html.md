---
title: Marketplace Reviews & Ratings – Admin Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/manage-feedback-and-vendor-queries.html
---

# Marketplace Reviews & Ratings

The **Marketplace Reviews & Ratings** feature allows the admin to manage customer reviews and ratings submitted for vendor products across the marketplace.

<a class="doc-image-link" href="./assets/admin-manage-feedback.webp"><img src="./assets/admin-manage-feedback.webp" alt="Manage Feedback" /></a>

---

## Manage Customer Reviews & Ratings

The admin can review and control feedback submitted by customers for vendor products.

### Key Features

- Admin can **approve or disapprove**:
  - Product reviews
  - Product ratings
- Only **approved reviews and ratings** are visible on the storefront.
- Vendors can view approved customer feedback from their **vendor dashboard**.
- Helps maintain review quality and build customer trust.

### Navigation Path

- **Marketplace → Reviews & Ratings**

---

### Review Management Interface

The review management section displays:
- Customer name
- Vendor name
- Product name
- Rating
- Review message
- Approval status
- Action options (Approve / Disapprove)

**Reference Media:**

<a class="doc-image-link" href="./assets/manage-feedback.webp"><img src="./assets/manage-feedback.webp" alt="Manage Feedback" /></a>

---

## Admin Navigation & Access

Marketplace administrators can access the feedback management console directly from the WordPress administration dashboard:

- **Menu Route**: **Marketplace → Reviews & Rating**
- **Screen Title**: **Manage Feedback**
- **Direct Admin URL**:
  ```text
  https://your-domain.com/wp-admin/admin.php?page=wk-marketplace-feedback
  ```
- **User Access**: Available to Marketplace Administrators and authorized Store Managers.

::: tip Fast Navigation
Bookmark the **Reviews & Rating** page in your browser for quick access when conducting routine customer feedback moderation and vendor reputation audits.
:::

---

## Multi-Dimensional Rating Criteria (Each Dimension Explained)

Rather than relying on a single, generalized star rating, the WooCommerce Multi-Vendor Marketplace evaluates vendor reputation using a **three-dimensional rating framework**. When a customer submits a store review, they rate the vendor across three distinct performance aspects:

```
                          ┌───────────────────────────┐
                          │   Customer Store Review   │
                          └─────────────┬─────────────┘
                                        │
           ┌────────────────────────────┼────────────────────────────┐
           ▼                            ▼                            ▼
  ┌─────────────────┐          ┌─────────────────┐          ┌─────────────────┐
  │  Price Rating   │          │  Value Rating   │          │ Quality Rating  │
  │     (1 to 5)    │          │     (1 to 5)    │          │     (1 to 5)    │
  └────────┬────────┘          └────────┬────────┘          └────────┬────────┘
           │                            │                            │
           └────────────────────────────┼────────────────────────────┘
                                        ▼
                          ┌───────────────────────────┐
                          │   Overall Seller Score    │
                          │ (Price + Value + Quality) │
                          │ ───────────────────────── │
                          │             3             │
                          └───────────────────────────┘
```

### 1. Dimension 1: Price Rating (Price)
- **Scoring Range**: 1 to 5 Stars
- **Evaluation Scope**: Measures buyer satisfaction regarding pricing fairness, competitive rates, and affordability relative to comparable products on the marketplace.
- **Admin Display**: Rendered as a score out of 5 (e.g., `5/5`, `4/5`).

### 2. Dimension 2: Value Rating (Value)
- **Scoring Range**: 1 to 5 Stars
- **Evaluation Scope**: Measures the perceived value-for-money delivered by the vendor. It assesses whether the purchased goods fulfilled customer expectations for the price paid.
- **Admin Display**: Rendered as a score out of 5 (e.g., `5/5`, `4/5`).

### 3. Dimension 3: Quality Rating (Quality)
- **Scoring Range**: 1 to 5 Stars
- **Evaluation Scope**: Assesses product craftsmanship, material condition, packaging care, and match with the listed product description.
- **Admin Display**: Rendered as a score out of 5 (e.g., `5/5`, `3/5`).

### Overall Vendor Rating Calculation

The marketplace calculates the vendor's overall storefront score by averaging all three approved criteria:

$$\text{Overall Vendor Rating} = \frac{\text{Average Price} + \text{Average Value} + \text{Average Quality}}{3}$$

- **Automatic Recalculation**: The overall score updates automatically whenever an administrator approves or disapproves reviews in the moderation queue.
- **Storefront Display**: The calculated average is presented as star graphics on the vendor's public store banner, vendor badge, and customer-facing store profile.

---

## Review Management Table Columns & Reference

The **Manage Feedback** table organizes customer reviews into a clear, structured view. Below is a detailed breakdown of every column displayed on the screen:

| Column Header | Display Format | Description & Functional Behavior |
| :--- | :--- | :--- |
| **Checkbox** | Selection Checkbox | Selects one or more reviews for bulk actions (Approve, Disapprove, or Delete). Use the top header checkbox to select all reviews on the page. |
| **Shop Name** | Hyperlinked Text | Displays the vendor's shop name and vendor ID (e.g., **Aurora Athletics (#2)**). Clicking the link opens the vendor details page. Displays `(Deleted Shop)` if the vendor account was removed. |
| **Given By** | Customer Name | The name of the registered customer who submitted the review. |
| **Value** | Score (`X/5`) | The star rating given for the store's value-for-money out of 5 stars. |
| **Price** | Score (`X/5`) | The star rating given for pricing fairness and affordability out of 5 stars. |
| **Quality** | Score (`X/5`) | The star rating given for product craftsmanship and packaging out of 5 stars. |
| **Summary** | Text Headline | The short review title or headline summary entered by the customer (e.g., *"Great maker to buy from"*, *"Will order again"*). |
| **Description** | Text + Preview Link | The detailed customer feedback text. Longer messages show a **`... See More`** link to view the complete comments in a popup window. |
| **Status** | Status Badge | The current review status:<br>• **Approved**: Published live on the vendor's public shop profile.<br>• **Disapproved**: Hidden from public view; does not affect the seller's score.<br>• **Pending**: Newly submitted review awaiting admin moderation.<br>*(Click the column header to sort reviews by status).* |
| **Date Created** | Date & Time | The date and time when the customer submitted the review (e.g., `August 10, 2026 10:26 am`). *(Click the column header to sort reviews chronologically).* |

---

## Detailed Review Inspection (Modal Preview)

To keep the table easy to read and browse, customer review descriptions are presented cleanly:

- **Short Reviews (10 words or fewer)**: Display in full directly inside the **Description** column.
- **Longer Reviews (more than 10 words)**: Automatically truncate with a **`... See More`** link.

<a class="doc-image-link" href="./assets/manage-feedback-modal.webp"><img src="./assets/manage-feedback-modal.webp" alt="Review Description Modal Preview" /></a>

### How the Preview Works

1. Click **`... See More`** on any truncated review.
2. A popup window opens directly on your screen titled **"Review Description"**.
3. Read the complete, unabridged customer commentary to verify compliance with store guidelines without leaving the page or losing your place.
4. Close the window using the <kbd>✕</kbd> button or by pressing <kbd>Esc</kbd>.

---

## Searching, Sorting, and Filtering Feedback

The feedback screen includes search and sorting tools to help administrators quickly find and manage customer reviews:

<a class="doc-image-link" href="./assets/manage-feedback-search-filter.webp"><img src="./assets/manage-feedback-search-filter.webp" alt="Feedback Search and Filters" /></a>

### 1. Keyword Search by Summary
Located in the upper-right corner of the table:
- **Search Box**: Type keywords into the **Search By Summary** field (such as *"quality"*, *"shipping"*, or *"service"*).
- **Find Results**: Click **Search** to filter the list and display only reviews containing those terms in their headline summary.

### 2. Status Column Sorting
The **Status** column header is interactive:
- Click **Status** to group and sort reviews by approval state (**Approved**, **Disapproved**, or **Pending**).
- Clicking again reverses the order, making it easy to bring all pending reviews to the top for quick moderation.

### 3. Date Created Sorting
The **Date Created** column header is interactive:
- Click **Date Created** to switch between newest-first and oldest-first view.
- This helps you quickly inspect the latest incoming customer feedback or check older records.

---

## Bulk Moderation Workflow & Administrative Actions

Administrators can moderate reviews individually or in batches using the bulk action menu.

### Step-by-Step Moderation Procedure

1. **Select Reviews**: Check the boxes next to the reviews you want to moderate, or click the header checkbox to select all visible rows.
2. **Choose Action**: Open the **Bulk actions** dropdown selector at the top or bottom of the table:
   - **Approve**: Approves selected reviews. Approved reviews appear immediately on the vendor's storefront profile and contribute to their average rating.
   - **Disapprove**: Disapproves selected reviews. Disapproved reviews are hidden from the storefront and excluded from the vendor's public rating.
   - **Delete**: Permanently removes selected reviews from your marketplace.
3. **Apply**: Click the **Apply** button next to the dropdown menu.

### System Notices

The screen displays a clear confirmation notice after each action:

| Action Taken | Notice Style | Confirmation Message |
| :--- | :--- | :--- |
| **Reviews Approved** | Success (Green) | `Feedback has been approved successfully.` |
| **Reviews Disapproved** | Success (Green) | `Feedback has been disapproved successfully.` |
| **Reviews Deleted** | Success (Green) | `Feedback has been deleted successfully.` |
| **No Rows Selected** | Alert (Red) | `Please select atleast one feedback.` |

::: warning Permanent Action
Deleting a review permanently removes it from your marketplace and cannot be undone. If you only want to hide a review from customers, choose **Disapprove** instead.
:::

---

## Storefront & Seller Integration Flow

Customer feedback submitted across the marketplace connects the storefront and vendor experience:

### 1. Customer Review Submission
- Customers visit the vendor's public store profile on the marketplace storefront.
- Under the **Write your review** section, buyers rate their experience:
  - Choose 1 to 5 stars for **Price**.
  - Choose 1 to 5 stars for **Value**.
  - Choose 1 to 5 stars for **Quality**.
  - Add a short review **Summary**.
  - Enter full feedback comments in the review **Description**.
- Once submitted, the review enters your admin moderation list with **Pending** status.

### 2. Moderation Gatekeeper
- Customer reviews remain hidden from the public store until approved.
- Only reviews approved by the administrator appear on the vendor's public **Shop Reviews** tab.

### 3. Vendor Dashboard Visibility
- Vendors can view their approved customer reviews directly from their **Vendor Dashboard**.
- Vendors cannot edit or remove customer feedback, keeping ratings honest, balanced, and transparent.
- High star ratings build buyer trust and help vendors grow their store reputation.

---

## Best Practices for Feedback Moderation

To maintain a credible and trustworthy multi-vendor marketplace:

1. **Review Regularly**: Check the feedback moderation screen regularly so genuine customer reviews are published without long delays.
2. **Stay Fair and Objective**: Only disapprove reviews that violate marketplace rules (such as spam, offensive language, or false claims). Honest customer opinions help shoppers make better buying choices.
3. **Monitor Low Scores**: If a vendor consistently receives low scores in Price or Quality, reach out to help them improve their products, pricing, or shipping standards.
4. **Boost Store Visibility**: Verified reviews provide helpful details for shoppers and boost search engine visibility for vendor stores.

---

## Summary – Marketplace Reviews & Ratings

- Centralized control over customer reviews and ratings
- Approval-based visibility ensures quality content
- Vendors can view feedback related to their products
- Improves marketplace transparency and credibility

---
