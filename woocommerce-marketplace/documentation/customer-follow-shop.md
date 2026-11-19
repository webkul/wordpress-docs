---
title: Follow Shop – Customer Guide | WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-follow-shop.html
---

# Follow Shop

The **Follow Shop** feature allows marketplace buyers to follow their favorite vendor stores with a single click. By following a shop, customers can easily keep track of trusted sellers, return to their product collections quickly, and receive direct email notifications about new arrivals, seasonal promotions, and special discounts.

---

## Why Follow a Vendor Shop?

Shopping in a multi-vendor marketplace gives you access to products from many independent merchants. Following your favorite stores provides several key benefits:

- **Quick Access to Trusted Sellers**: Save your preferred vendors in one place so you never have to search for them again.
- **Stay Updated on New Launches**: Receive announcements directly from sellers when they release fresh products.
- **Exclusive Deals & Discounts**: Get special discount codes and promotional emails sent directly by store owners to their follower community.
- **One-Click Management**: Add or remove shops from your personal favorites list at any time with complete control.

---

## Customer Follow Workflow

Follow this 6-stage journey to discover sellers, follow favorite stores directly from product pages, manage saved vendors, and stay notified of new offers:

<div class="wkmp-workflow-pipeline">
  <div class="wkmp-workflow-step">
    <div>
      <div class="wkmp-workflow-step__top">
        <span class="wkmp-workflow-step__number">STEP 01</span>
        <span class="wkmp-workflow-step__icon">🔍</span>
      </div>
      <div class="wkmp-workflow-step__title">Browse & Filter</div>
      <p class="wkmp-workflow-step__desc">Explore the shop catalog or filter products by merchant using the sidebar <strong>Seller List</strong>.</p>
    </div>
    <div class="wkmp-workflow-step__loc">📍 Shop / Category Page</div>
  </div>

  <div class="wkmp-workflow-step">
    <div>
      <div class="wkmp-workflow-step__top">
        <span class="wkmp-workflow-step__number">STEP 02</span>
        <span class="wkmp-workflow-step__icon">👤</span>
      </div>
      <div class="wkmp-workflow-step__title">Customer Sign-In</div>
      <p class="wkmp-workflow-step__desc">Sign in to your customer account. (The follow heart icon is hidden for guest visitors).</p>
    </div>
    <div class="wkmp-workflow-step__loc">📍 My Account / Header</div>
  </div>

  <div class="wkmp-workflow-step">
    <div>
      <div class="wkmp-workflow-step__top">
        <span class="wkmp-workflow-step__number">STEP 03</span>
        <span class="wkmp-workflow-step__icon">🛍️</span>
      </div>
      <div class="wkmp-workflow-step__title">Open Product (PDP)</div>
      <p class="wkmp-workflow-step__desc">Open any single product listing sold by the vendor you want to follow.</p>
    </div>
    <div class="wkmp-workflow-step__loc">📍 Product Detail Page</div>
  </div>

  <div class="wkmp-workflow-step">
    <div>
      <div class="wkmp-workflow-step__top">
        <span class="wkmp-workflow-step__number">STEP 04</span>
        <span class="wkmp-workflow-step__icon">❤️</span>
      </div>
      <div class="wkmp-workflow-step__title">Click Heart Icon</div>
      <p class="wkmp-workflow-step__desc">Click the heart icon (&#9825;) next to the vendor name. It activates (&#9829;) instantly via AJAX.</p>
    </div>
    <div class="wkmp-workflow-step__loc">📍 Below Product Title</div>
  </div>

  <div class="wkmp-workflow-step">
    <div>
      <div class="wkmp-workflow-step__top">
        <span class="wkmp-workflow-step__number">STEP 05</span>
        <span class="wkmp-workflow-step__icon">📂</span>
      </div>
      <div class="wkmp-workflow-step__title">Manage Favorite Vendors</div>
      <p class="wkmp-workflow-step__desc">View all saved stores, open store collections, or remove vendors anytime in bulk.</p>
    </div>
    <div class="wkmp-workflow-step__loc">📍 /my-account/favorite-vendors/</div>
  </div>

  <div class="wkmp-workflow-step">
    <div>
      <div class="wkmp-workflow-step__top">
        <span class="wkmp-workflow-step__number">STEP 06</span>
        <span class="wkmp-workflow-step__icon">🔔</span>
      </div>
      <div class="wkmp-workflow-step__title">Receive Direct Updates</div>
      <p class="wkmp-workflow-step__desc">Receive timely email updates from followed merchants about new arrivals and exclusive deals.</p>
    </div>
    <div class="wkmp-workflow-step__loc">📍 Customer Email Inbox</div>
  </div>
</div>

| Step | Workflow Stage | Screen / Location | Customer Action |
| :---: | :--- | :--- | :--- |
| **01** | **Browse & Discover** | Shop / Category Page | Browse the marketplace catalog or filter products by specific sellers using the sidebar **Seller List**. |
| **02** | **Customer Authentication** | `/my-account/` or Header | Log into your buyer account. Note that the follow heart icon is hidden for guest visitors. |
| **03** | **Open Product Detail Page** | `/product/{product-name}/` | Open any product listing sold by your desired vendor. |
| **04** | **Click Follow Heart Icon** | Below Product Title | Click the heart icon (`♡`) next to the vendor name; it turns active (`♥`) instantly without page reload. |
| **05** | **Manage Saved Stores** | `/my-account/favorite-vendors/` | View followed stores, visit seller collections, or delete vendors individually or in bulk. |
| **06** | **Receive Shop Announcements** | Registered Email Inbox | Receive seller updates, special promotion vouchers, and new product announcements. |

---

## Discovering Vendor Shops on the Marketplace

Before following a shop, customers can discover marketplace vendors through multiple storefront touchpoints:

### 1. Seller List Filter on the Shop Page

When browsing the product catalog, buyers can use the **Seller List** filter in the sidebar to view products from specific merchants:

- **Filter by Merchant**: Check any seller's box (e.g., *Aurora Athletics*, *Volt & Vine*, *Maison Terra*) to display only their catalog.
- **Product Counts**: Each vendor entry displays the count of currently available products.
- **Clear Filters**: Reset filters at any time to return to the full marketplace catalog.

<a class="doc-image-link" href="./assets/customer-filter-by-seller-list.png"><img src="./assets/customer-filter-by-seller-list.png" alt="Seller List Filter Widget on Marketplace Shop Page" /></a>

### 2. Vendor Attribution on Product Cards

On catalog pages and search results, each item shows a clickable **Vendor:** link in the product summary. Clicking this link takes you directly to that vendor's dedicated storefront.

---

## How to Follow a Vendor Shop

Following a vendor store is quick and seamless directly from any vendor's single product page.

<a class="doc-image-link" href="./assets/customer-follow-vendor-product-page.png"><img src="./assets/customer-follow-vendor-product-page.png" alt="Customer Follow Vendor on Product Detail Page" /></a>

### Step-by-Step Instructions:

1. **Sign In to Your Account**:
   - Make sure you are logged in to your customer account.
   - *Note for Guests:* The follow heart icon is hidden for guest visitors. If you do not see the icon, log in to your account first.

2. **Open a Vendor's Product Page**:
   - Navigate to any product sold by the vendor you want to follow (for example, the *Aurora Pace Fitness Watch*).

3. **Locate the Heart Icon**:
   - Look directly below the product title in the seller attribution line:
   - You will see `Vendor: [Vendor Name]` followed by a **heart-shaped icon** (`♡`).
   - Hovering over the icon displays the tooltip: *"Add As Favourite Vendor"*.

4. **Click to Follow**:
   - Click the heart icon.
   - A brief loading spinner confirms your request.
   - The heart immediately turns solid/active (`♥`), confirming that the vendor has been added to your favorites list.

5. **Click to Unfollow**:
   - If you ever want to unfollow the vendor from the product page, simply click the active heart icon again.
   - The heart returns to its default outline state, and the vendor is removed from your favorites list.

::: tip Instant Update Without Page Reload
The follow action uses AJAX. You do not need to refresh the page—the icon updates its visual state instantly upon clicking.
:::

---

## Managing Followed Shops in "My Account"

All the stores you follow are organized inside your customer account portal. This gives you a single place to review your favorite sellers, jump straight to their collections, or remove stores you no longer wish to follow.

<a class="doc-image-link" href="./assets/customer-favorite-vendors-list.png"><img src="./assets/customer-favorite-vendors-list.png" alt="My Favorite Vendors Dashboard in Customer Account" /></a>

### Accessing the Favorite Vendors Section

1. Log in to your marketplace account.
2. Go to **My Account** from the site header.
3. In the account navigation sidebar, click **My Favorite Vendors** (accessible at `/my-account/favorite-vendors/`).
4. The page displays a table listing all your followed marketplace stores.

---

### Understanding the Favorite Vendors Table

The table provides clear details and fast controls for every store you follow:

| Column / Element | Purpose & Function |
| :--- | :--- |
| **Select Checkbox** | Use the header checkbox to select all vendors on the page at once, or check individual rows for bulk removal. |
| **Vendor Profile** | Displays the seller's store logo or avatar thumbnail image. |
| **Vendor Name** | Shows the official business name of the vendor (e.g., *Aurora Athletics*). |
| **Vendor Collection** | Provides a direct link to the vendor's dedicated store collection page (e.g., `aurora-athletics`). |
| **Action (Trash Button)** | A trash icon button (`#wkmp_delete_single_fav_seller`) that allows you to instantly remove that single vendor from your favorites. |

---

### Removing Vendors from Your List

You can remove vendors individually or in bulk:

#### Method 1: Single Removal
1. In the **Action** column of the vendor row, click the **Trash icon** button.
2. A confirmation prompt appears asking:
   > *"Are you sure you want to delete favorite vendor(s)?"*
3. Click **OK** to confirm.
4. The vendor is immediately removed from your favorite list.

#### Method 2: Bulk Removal
1. Check the boxes next to the vendors you want to delete, or click the **top header checkbox** to select all vendors.
2. Click the **Bulk Delete button** (trash icon located above the table on the top-left).
3. Confirm the action in the prompt.
4. All selected vendors are removed simultaneously.

::: note Empty State
When you have no favorite vendors saved, the table displays a clear **"No Data Found"** message alongside a count of `Showing 0 to 0 of 0 (0 Pages)`.
:::

---

## Visiting Vendor Store Collections

Clicking any store name under the **Vendor Collection** column takes you directly to the vendor's dedicated storefront.

<a class="doc-image-link" href="./assets/customer-vendor-store-collection.png"><img src="./assets/customer-vendor-store-collection.png" alt="Vendor Store Collection Page" /></a>

On the vendor store page, you can:

- **Browse All Products**: View the seller's complete product catalog in one place.
- **Sort Items**: Use the sorting dropdown to order products by popularity, average rating, latest release, or price.
- **Search within Store**: Quickly find specific items offered by this merchant.
- **Check Seller Reputation**: Read customer reviews and view overall feedback ratings for the store.

---

## Receiving Email Updates from Followed Shops

When you follow a vendor, you join their community of valued customers. Vendors can send direct email broadcasts to their followers to keep them informed:

- **New Product Arrivals**: Be the first to know when a seller launches new inventory.
- **Exclusive Discount Coupons**: Receive subscriber-only coupon codes for your next purchase.
- **Flash Sales & Holiday Discounts**: Get timely reminders about seasonal promotions and limited-time savings.

::: tip Customer Privacy First
Vendors cannot see your sensitive personal details or payment data. They can only send store-related broadcast emails to their registered followers, and you can unfollow any shop at any time with one click.
:::

---

## Frequently Asked Questions (FAQ)

### Can I follow more than one vendor shop?
Yes. There is no limit to the number of shops you can follow. All your followed merchants will appear in your **My Favorite Vendors** table.

### Why don't I see the heart icon on the product page?
The follow icon is only visible to logged-in customers. If you are browsing as a guest, please sign in to your customer account or create a new account to enable the follow button.

### Does the vendor know when I follow their shop?
Yes, your name and email are included in the vendor's follower list within their seller console. This allows them to include you in follower-only email broadcasts and special announcements.

### What happens when I unfollow a store?
When you unfollow a store, the vendor is removed from your **My Favorite Vendors** list, and you will no longer receive broadcast emails from that seller.

### Is there any fee to follow a store?
No. Following shops is completely free for all registered customers on the marketplace.

---

## Related Guides

- [Product Detail Page (PDP) Customer Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-pdp.html) – Discover vendor information, variations, and purchasing options.
- [Product Listing Page (PLP) Customer Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-plp.html) – Learn how to browse categories and filter items by seller.
- [Vendor Shop Followers (Seller Guide)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-shop-followers.html) – Understand how vendors view their follower community and send email updates.
