---
title: Store Pickup Orders Management
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-store-pickup.html
---

# Store Pickup Orders Management

The **Store Pickup Orders** registry provides marketplace administrators with a centralized operational dashboard to supervise, audit, and track all in-store customer collections across every registered marketplace vendor. 

From this screen, administrators can quickly inspect which vendor orders have been successfully verified and picked up, which orders are currently awaiting collection, search for specific customer orders, and filter orders by seller or order fulfillment status.

The marketplace administrator can access this screen from:

**Marketplace > Store Pickup Orders**

**Direct Admin Navigation URL**: `wp-admin/admin.php?page=wk-marketplace-store-pickup`

<a class="doc-image-link" href="./assets/admin-seller-store-pickup.webp"><img src="./assets/admin-seller-store-pickup.webp" alt="Admin Store Pickup Orders Management Dashboard" /></a>

---

## Store Pickup Orders Overview

- **Centralized Marketplace Registry**: Consolidates local pickup transactions from all registered vendors into a single administrative table.
- **Real-Time Pickup Status Tracking**: Immediately distinguish between orders that are **Awaiting pickup** versus orders that are **Picked up on [Date/Time]**.
- **Vendor-Specific Filtering**: Quickly isolate pickup queues for any specific seller on the marketplace using the dedicated vendor dropdown filter.
- **Fulfillment Status Filtering**: Filter pickup records across all WooCommerce order statuses (*Pending payment*, *Processing*, *On hold*, *Completed*, *Cancelled*, *Refunded*, *Failed*, *Draft*).
- **Keyword & Order Search**: Quickly look up pickup orders by order number, buyer name, or customer billing email.
- **Screen Options Personalization**: Customize visible table columns and configure how many order rows are displayed per page.
- **Direct Order Drilldown**: Click straight through to the standard WooCommerce order edit screen to inspect items, payments, customer billing info, and audit notes.
- **Fraud Prevention Auditing**: Review who verified the customer's 6-digit OTP code (the seller or an authorized vendor staff member) and the exact timestamp of collection.
- **Multi-Vendor Package Transparency**: Displays each vendor's independent collection status when an order contains products from multiple marketplace sellers.

::: tip Related Guides
- **Global Settings**: Configure OTP rules, code expiry, and shipping zones in the [Store Pickup Settings Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/store-pickup-settings.html).
- **Vendor Operations**: Guide sellers on managing their pickup queues and validating OTP codes in the [Vendor Store Pickup Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-store-pickup.html).
- **Staff Operations**: Learn how staff members handle store collections in the [Admin Staff Settings Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html) and [Vendor Staff Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).
- **Courier Fulfilment**: Learn how shipping carriers and scheduled courier pickups are managed in the [Fulfilment Carriers Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/fulfilment-carriers.html).
:::

---

## Screen Options & Table Customization

Marketplace administrators can tailor the Store Pickup Orders registry to match their operational workflow using WordPress's native **Screen Options** panel, located in the top-right corner of the screen:

1. Click the **Screen Options** tab at the top right of the page (`#show-settings-link`).
2. **Columns Toggle**: Check or uncheck column checkboxes to display only the data fields relevant to your daily review:
   - **Order**
   - **Date**
   - **Customer**
   - **Vendor / pickup status**
   - **Order status**
   - **Total**
3. **Pagination Settings**: Enter a custom numeric value in the **Items per page** field (default is `20`, stored in screen option `wkmp_store_pickup_per_page`).
4. Click **Apply** to save your preferences. WordPress saves these settings individually per administrator.

---

## Store Pickup Orders Table Columns

The table below provides a detailed breakdown of the data presented in each column of the Store Pickup Orders registry:

| Column Header | Field Slug | Description & Formats |
| :--- | :--- | :--- |
| **Order** | `order` | Displays the WooCommerce Order ID formatted with a leading hash (e.g., `#1171`) as a bold, clickable hyperlink. Clicking the link opens the order edit screen directly (`wp-admin/admin.php?page=wc-orders&action=edit&id=1171` in HPOS or `wp-admin/post.php?post=1171&action=edit` in legacy posts storage). |
| **Date** | `date` | Displays the exact date and timestamp when the customer completed checkout, formatted according to your WordPress date and time settings (`wc_date_format()` and `wc_time_format()`), such as `October 21, 2026 11:45 am`. If unavailable, a dash (`–`) is shown. |
| **Customer** | `customer` | Displays the formatted billing full name of the customer who placed the order. Beneath the name, the customer's billing email is rendered in a secondary description line (`<span class="description">`), allowing store staff to confirm customer identity on the spot. |
| **Vendor / pickup status** | `pickups` | Displays the vendor store name and the current local collection progress for each participating shop:<br>• **Admin Items (`seller_id = 0`)**: Displays your store name with `(your store)`.<br>• **Vendor Items**: Displays the vendor name followed by a color-coded status badge:<br>&nbsp;&nbsp;- `<mark class="wkmp-store-pickup-admin-status--awaiting">Awaiting pickup</mark>`: The order is prepared and ready for customer handover.<br>&nbsp;&nbsp;- `<mark class="wkmp-store-pickup-admin-status--picked_up">Picked up</mark>`: The OTP verification code has been confirmed, and items have been handed over. |
| **Order status** | `status` | The overarching WooCommerce order lifecycle status badge (e.g., *Processing*, *Completed*, *On hold*, *Cancelled*, *Failed*). |
| **Total** | `total` | The total monetary value of the order, including item amounts, taxes, and any configured store pickup shipping fees, formatted with your store's active currency symbol. |

---

## Searching and Filtering Store Pickup Orders

To help marketplace administrators efficiently navigate large volumes of pickup orders across hundreds of sellers, the Store Pickup Orders interface includes robust search and dual filtering controls.

<a class="doc-image-link" href="./assets/admin-store-pickup-filter.webp"><img src="./assets/admin-store-pickup-filter.webp" alt="Filtering Store Pickup Orders" /></a>

### 1. Keyword & Order Search
The **Search orders** input field is located at the top right of the list table:
- Enter an **Order ID** (e.g., `1171`), a **Customer Name** (e.g., `Demo Customer`), or a **Customer Email** (e.g., `demo_customer@nexora.test`).
- Click **Search orders** (or press <kbd>Enter</kbd>).
- The system uses WooCommerce's high-performance `wc_order_search()` engine to quickly locate matching orders.

### 2. Filter by Vendor
The **Filter by vendor** dropdown (`wkmp_vendor`) allows administrators to isolate orders belonging to a specific seller:
- Select **All vendors** to display orders from across the entire marketplace.
- Select a specific registered vendor (e.g., *Aurora Athletics*, *Copperleaf Kitchen*, *Lumen Beauty*, *Maison Terra*, *Norden Supply*, *Paperfold Studio*, *Thread & Grain*, *Volt & Vine*).
- Click **Filter**. The table refreshes to show only pickup orders that contain items from the selected seller.

### 3. Filter by Order Status
The **Filter by order status** dropdown (`wkmp_status`) allows filtering orders according to their WooCommerce fulfillment lifecycle:
- **All statuses**: Displays orders in any status.
- **Pending payment** (`pending`): Orders created but waiting for payment completion.
- **Processing** (`processing`): Paid orders ready for item packing and customer collection.
- **On hold** (`on-hold`): Orders awaiting offline payment confirmation or administrative review.
- **Completed** (`completed`): Orders where customer collection, OTP validation, and order fulfillment are 100% complete.
- **Cancelled** (`cancelled`): Orders cancelled by the customer, vendor, or administrator.
- **Refunded** (`refunded`): Orders where funds were returned to the buyer.
- **Failed** (`failed`): Orders with failed payment transactions.
- **Draft** (`checkout-draft`): Incomplete checkout sessions.

### Combined Filter Logic & Resetting
- **Combined Filtering**: The vendor filter and order status filter can be combined simultaneously. For example, selecting **Aurora Athletics** and **Processing** isolates only those active orders currently waiting for pickup at Aurora Athletics' retail counter.
- **Resetting Filters**: To clear active filters and return to the complete orders list, reset both dropdowns to **All vendors** and **All statuses**, clear any text in the search box, and click **Filter**.

---

## Admin Order Screen Integration & Handover Meta Box

In addition to the central registry, marketplace administrators have full operational control over individual store collections directly inside the WooCommerce order edit screen (`wp-admin/admin.php?page=wc-orders&action=edit&id={order_id}` in HPOS or `wp-admin/post.php?post={order_id}&action=edit`).

<a class="doc-image-link" href="./assets/admin-store-pickup-metabox.png"><img src="./assets/admin-store-pickup-metabox.png" alt="WooCommerce Order Screen Store Pickup Meta Box" /></a>

### Features of the Store Pickup Meta Box:
1. **Pickup Location Summary**: Displays each participating seller's registered shop name and physical collection address (e.g., *Aurora Athletics · 1420 SE Water Avenue, Suite 3, Portland, OR 97214*).
2. **Pickup Verification Box**: If **Require Pickup Code** is active, a dedicated verification box appears for each vendor:
   - Displays clear instructions: *"The order must be verified before it can be completed. Send the customer a one-time code by email and ask for it at the store."*
   - Includes a **Send code** button that allows administrators to trigger a 6-digit OTP email on behalf of any vendor.
   - Once dispatched, a live countdown timer displays the remaining validity window (based on your configured Code Expiry in minutes).
   - An input field allows the administrator or staff to enter the customer's 6-digit PIN and click **Verify OTP**.
3. **Completed Status Guardrail**:
   - The marketplace enforces an automatic security guardrail on the order completion lifecycle.
   - If an administrator or vendor attempts to change the order status to **Completed** while a Store Pickup vendor package remains unverified, the system blocks the update and displays an explicit error message:
     > *"Verify the pickup code before completing this order."*
4. **Permanent Audit Trail**:
   - When OTP verification is successful, the system records an immutable timestamped note in the WooCommerce order history:
     > *"Store pickup verified by [Admin/Vendor/Staff Name] on [Date/Time]."*

---

## Vendor Staff Permissions for Store Pickup

Marketplace vendors often employ store assistants, cashiers, or warehouse personnel to manage front-desk handovers. Marketplace administrators manage staff accounts and permissions from:

**Marketplace > Vendor Staffs** (`wp-admin/admin.php?page=wk-marketplace-vendor-staffs`)

<a class="doc-image-link" href="./assets/admin-vendor-staffs-store-pickup.png"><img src="./assets/admin-vendor-staffs-store-pickup.png" alt="Admin Vendor Staffs Management" /></a>

### Store Pickup Staff Capabilities:
In **Marketplace > Settings > Staffs** (`wp-admin/admin.php?page=wk-marketplace-settings&tab=staff`), administrators configure which capabilities vendors are permitted to delegate:

| Capability Name | Internal Slug | Description |
| :--- | :--- | :--- |
| **View store pickup orders** | `store_pickup_view` | Enables the staff member to access the **Store Pickup Orders** list in their seller dashboard to review arriving customers and pending pickups. |
| **Send and verify pickup codes** | `store_pickup_verify` | Authorizes counter staff to click **Generate OTP**, dispatch the verification code to the customer, and validate the customer's 6-digit PIN during physical handovers. |

::: tip Whitelist Enforcement
Staff members can only be assigned these capabilities if the marketplace administrator has checked them in the global permissions matrix under **Marketplace > Settings > Staffs**. For a full guide on staff quotas and role privileges, see the [Admin Staff Settings Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html).
:::

---

## Step-by-Step Counter Handover Workflow

Marketplace administrators, sellers, and authorized counter staff follow a secure 5-stage progression to verify customer identity and fulfill in-store collections:

| Step | Handover Stage | Responsible Party | Operational Action & System Rule |
| :---: | :--- | :--- | :--- |
| **01** | **Customer Arrival** | Store Staff | Locate the order in the **Store Pickup Orders** registry using customer name, email, or order ID. |
| **02** | **Code Dispatch** | Store Staff | Click **Send code** (or **Generate OTP**) in the order view to email a secure 6-digit PIN to the buyer. |
| **03** | **PIN Presentation** | Customer | Customer opens their billing email on mobile and presents the 6-digit verification code at the desk. |
| **04** | **OTP Validation** | Store Staff | Staff enters the code and clicks **Verify OTP**. The system validates the code against the active hash. |
| **05** | **Order Completion** | Store Staff / Admin | System marks pickup verified, records the audit timestamp, and unlocks the **Completed** status. |

### Operational Procedure Details:

1. **Order Identification & Counter Check-In**:
   When the customer arrives at the retail store desk, the staff member opens the **Store Pickup Orders** list and quickly searches by customer name, order number, or email to pull up the customer's package record.

2. **Trigger Verification PIN Dispatch**:
   The staff member opens the order details and clicks **Send code** (or **Generate OTP**). A temporary 6-digit one-time code is instantly emailed to the customer's billing email address, and a live countdown timer begins in the order view.

3. **Customer Code Presentation**:
   The customer retrieves the 6-digit PIN from their inbox and shows it to the counter attendant. If the code expires before validation, the **Resend OTP** button becomes active as soon as the countdown timer reaches zero.

4. **Security Validation & Authentication**:
   The counter assistant enters the 6-digit PIN into the verification field and clicks **Verify OTP**. The marketplace system verifies the code, transitions the status badge to `<mark class="wkmp-store-pickup-admin-status--picked_up">Picked up</mark>`, and permanently logs the staff member's name, user ID, and verification timestamp into the order history notes.

5. **Package Handover & Final Order Completion**:
   With verification validated, the staff member hands over the packaged merchandise. The marketplace Completed Guardrail clears, allowing the order status to transition to **Completed**.

---

## Best Practices & Administrative Checklist

1. **Verify Vendor Shop Addresses**:
   - Ensure all marketplace vendors have complete physical shop addresses (Street, City, State, Postcode, and Country) configured in their vendor profile.
   - If a vendor's profile lacks an address, Store Pickup cannot calculate correctly at checkout.
2. **Review Code Expiry Durations**:
   - A setting of **2 to 5 minutes** is optimal for high-traffic retail counters, ensuring tight security without keeping customers waiting.
3. **Check Spam Filters for OTP Delivery**:
   - If a customer reports not receiving their code, remind them to check their spam or promotions folder. Once the timer reaches zero, click **Resend OTP** to generate a fresh PIN.
4. **Audit Multi-Vendor Orders**:
   - In orders containing products from multiple sellers, remember that each seller independently verifies their own package pickup. The overall order can only move to Completed once all vendor parts are satisfied.
5. **HPOS Compatibility**:
   - The Store Pickup Orders registry and order edit meta box are fully compatible with WooCommerce High-Performance Order Storage (HPOS) as well as traditional WordPress post tables.

---

::: important Essential Prerequisite: Enabling Store Pickup & Shipping Zones
For customer orders to appear in the **Store Pickup Orders** registry, the Store Pickup fulfillment method must first be activated in the marketplace settings and added to your WooCommerce shipping zones:

- **Enable Store Pickup**: Navigate to **Marketplace > Settings > Store Pickup** (`wp-admin/admin.php?page=wk-marketplace-settings&tab=store_pickup`) and enable the **Enable Store Pickup** checkbox. You can also configure the **Require Pickup Code** security guardrail and the **Code Expiry** duration (1–60 minutes).
- **Add to Shipping Zones**: Navigate to **WooCommerce > Settings > Shipping** (`wp-admin/admin.php?page=wc-settings&tab=shipping`), open your target zone, and add **Store Pickup** as an active shipping method.

For a full step-by-step walkthrough on configuring these options, refer to the **[Store Pickup Settings Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/store-pickup-settings.html)**.
:::
