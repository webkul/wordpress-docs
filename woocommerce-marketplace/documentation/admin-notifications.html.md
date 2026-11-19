---
title: Admin Notifications
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-notifications.html
---

# Admin Notifications

The **Admin Notifications** feature keeps the admin informed about important marketplace activities in real time.

<a class="doc-image-link" href="./assets/product-notification.webp"><img src="./assets/product-notification.webp" alt="Admin Notifications" /></a>

---

## Admin Access & Navigation

Marketplace administrators can access the centralized notification hub directly from the WordPress administrative dashboard:

1. Log in to the WordPress admin panel as an administrator.
2. In the left navigation menu, navigate to **Marketplace > Notifications**.
3. **Direct Admin URL**:
   ```text
   wp-admin/admin.php?page=wk-marketplace-notifications
   ```

---

## Admin Notification Overview

- Admin receives notifications for key marketplace actions, including:
  - New orders
  - Order status changes
  - Product creation or updates
  - Product approval requests
  - Vendor-related activities

---

## Notification Area

- All notifications are displayed in the **admin notification area**.
- Notifications help the admin take quick actions without navigating through multiple sections.

<a class="doc-image-link" href="./assets/admin-notifications.webp"><img src="./assets/admin-notifications.webp" alt="Admin Notifications" /></a>

### Administrative Interface Structure

The Admin Notifications interface consists of three primary functional zones:

1. **Top Header & Tab Bar**: Displays the notification bell icon, page title, and primary navigation buttons (**Orders**, **Product**, **Vendor**).
2. **Sub-Navigation Filter Bar** *(Orders Tab)*: A sub-filter bar (`subsubsub`) that isolates orders by lifecycle state (**All**, **Processing**, **Completed**).
3. **Notification Activity Feed**: An ordered list (`.mp-notification-list`) displaying each notification item with hyperlinks, contextual descriptions, and relative time counters.
4. **Pagination Navigation Bar**: A standard pagination bar (`.mp-notification-pagination`) allowing store administrators to page through older records.

---

## Types of Notifications

The admin can view notifications related to:

- **Products**
  - New product added by vendor
  - Product awaiting approval
- **Orders**
  - New order placed
  - Order status updated
- **Vendors**
  - Vendor registration
  - Vendor-related updates

<a class="doc-image-link" href="./assets/admin-notifications-types.webp"><img src="./assets/admin-notifications-types.webp" alt="Admin Notifications Types" /></a>

---

## Tab 1: Orders Notifications (`tab=orders`)

The **Orders** tab is the default landing screen of the Admin Notifications module (`page=wk-marketplace-notifications`). It records every vital order-related transaction across the marketplace.

<a class="doc-image-link" href="./assets/admin-notifications-orders.png"><img src="./assets/admin-notifications-orders.png" alt="Admin Notifications - Orders Tab Dashboard" /></a>

### Sub-Filter Sections

The Orders tab provides sub-filters to narrow down high-volume order feeds:

| Filter Name | Query Parameter | What It Displays |
| :--- | :--- | :--- |
| **All** | `section=all` *(Default)* | Displays all order events in reverse chronological order, including new order placements, status changes to processing, completion events, and refund updates. |
| **Processing** | `section=processing` | Filters the feed exclusively for orders whose status transitioned to **Processing** (e.g., successful payment received). |
| **Completed** | `section=completed` | Filters the feed exclusively for orders whose status transitioned to **Completed** (e.g., packages dispatched or fulfilled). |

#### Processing Section View

When clicking **Processing**, the system filters the table to show orders requiring fulfillment or currently in preparation:

<a class="doc-image-link" href="./assets/admin-notifications-orders-processing.png"><img src="./assets/admin-notifications-orders-processing.png" alt="Admin Notifications - Orders Processing Filter" /></a>

#### Completed Section View

When clicking **Completed**, the admin can review all orders that reached terminal fulfillment:

<a class="doc-image-link" href="./assets/admin-notifications-orders-completed.png"><img src="./assets/admin-notifications-orders-completed.png" alt="Admin Notifications - Orders Completed Filter" /></a>

### Order Notification Message Formats

Each order notification row contains structured information:

| Notification Trigger | Event Text Format | Target URL / Drilldown |
| :--- | :--- | :--- |
| **New Customer Order** | `#<Order_ID> Order has been placed by <Customer_Name> <X> days ago.` | Opens the WooCommerce Order Edit screen (`wp-admin/post.php?post=<ID>&action=edit` or HPOS equivalent) in a new browser tab. |
| **Status to Processing** | `#<Order_ID> Order status has been changed to Processing <X> days ago.` | Opens the WooCommerce Order Edit screen in a new browser tab. |
| **Status to Completed** | `#<Order_ID> Order status has been changed to Completed <X> days ago.` | Opens the WooCommerce Order Edit screen in a new browser tab. |
| **Order Refunded** | `#<Order_ID> Order status has been changed to Refunded <X> days ago.` | Opens the WooCommerce Order Edit screen in a new browser tab. |

---

## Tab 2: Product Notifications (`tab=product`)

The **Product** tab tracks inventory milestones, catalog approvals, and product updates submitted by marketplace vendors.

**Direct URL**: `wp-admin/admin.php?page=wk-marketplace-notifications&tab=product`

<a class="doc-image-link" href="./assets/admin-notifications-product-tab.png"><img src="./assets/admin-notifications-product-tab.png" alt="Admin Notifications - Product Tab Dashboard" /></a>

### Product Notification Formats

| Notification Type | Trigger Event | Display Format | Admin Action |
| :--- | :--- | :--- | :--- |
| **Product Approval** | Vendor product status transitions from pending/draft to published | `#<Product_Title> has been approved <X> days ago.` | Clicking `#<Product_Title>` opens the WooCommerce Product editor in a new tab. |
| **Product Rejection** | Admin rejects a vendor's submitted product | `#<Product_Title> has been rejected by the admin. Open the product to see the reason.` | Informs admin and vendor of the rejection event. |
| **Deleted Product Fallback** | Product was approved but later permanently deleted from WooCommerce | `#(deleted-item) has been approved <X> days ago.` | Safely displays historical record without broken links (links to `#`). |
| **Low Stock Alert** | Product inventory falls below the WooCommerce low stock threshold | `Product is low in stock. There are <Qty> left <X> days ago.` | Alerts admin to restock or remind vendor to update quantity. |
| **Out of Stock Alert** | Product inventory drops to zero | `Product is out of stock <X> days ago.` | Immediate notice to prevent unfulfillable backorders. |

---

## Tab 3: Vendor Notifications (`tab=seller`)

The **Vendor** tab (labeled **Vendor** in the header navigation, accessed via `tab=seller`) consolidates seller account updates and customer feedback received by vendors.

**Direct URL**: `wp-admin/admin.php?page=wk-marketplace-notifications&tab=seller`

<a class="doc-image-link" href="./assets/admin-notifications-vendor-tab.png"><img src="./assets/admin-notifications-vendor-tab.png" alt="Admin Notifications - Vendor Tab Dashboard" /></a>

### Vendor Notification Formats

| Notification Type | Trigger Event | Display Format | Details Provided |
| :--- | :--- | :--- | :--- |
| **New Seller Review** | A customer submits a review and rating on a vendor shop profile | `A new review was received on the <Shop_Name> Profile from <Customer_Name> <X> days ago.` | Identifies the vendor shop that received the feedback and the customer who wrote it. |
| **Vendor Registration / Profile Update** | Vendor registers or updates shop credentials | Alerts informing the administrator of vendor account lifecycle changes. | Helps admin verify seller compliance and KYC documentation. |
| **Empty State** | No vendor events are logged in the database | `No data Found` | Displayed automatically when no seller records match the query. |

---

## Pagination & Display Configuration

The Admin Notifications list table includes a built-in pagination control at the bottom of the feed:

- **Pagination URL Parameter**: `n-page=<number>` (e.g., `admin.php?page=wk-marketplace-notifications&n-page=2`).
- **Items Per Page**: The number of notifications displayed per page is controlled by the standard WordPress setting:
  - Navigate to **Settings > Reading** in your WordPress dashboard.
  - Locate **Blog pages show at most**.
  - Update the numeric value (default is `10` items).

---

## Admin vs. Vendor Notification Comparison

The WooCommerce Multi-Vendor Marketplace distinguishes between the administrative notification center and the seller dashboard notification area:

| Feature Dimension | Admin Notification Center | Vendor / Seller Notification Area |
| :--- | :--- | :--- |
| **Access Location** | WordPress Admin (`Marketplace > Notifications`) | Front-end Vendor Dashboard or Separate Vendor Backend (`/seller/notifications/`) |
| **Visibility Scope** | **Global**: Oversees all vendors, all orders, all customer reviews, and all catalog items marketplace-wide. | **Restricted**: Only displays notifications where `author_id` matches the logged-in seller. |
| **Read Status Tracking** | Acts as an immutable historical activity log; records remain visible for auditing. | Includes read/unread tracking (`read_flag = 0` vs `1`) with unread badge counters. |
| **Action Drilldowns** | Links to native WordPress/WooCommerce admin post editor screens (`wp-admin/post.php?post=<ID>&action=edit`). | Links to vendor-facing order views and vendor product management screens. |

---

This system ensures the admin stays updated on all **critical marketplace events** and can manage operations efficiently.
