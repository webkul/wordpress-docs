---
title: Vendor Store Pickup Management – Seller Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-store-pickup.html
---

# Vendor Store Pickup Management

In **WooCommerce Multi-Vendor Marketplace**, vendors can offer local in-store pickup to customers who prefer collecting their purchases directly from the vendor's physical store or warehouse. Store pickup eliminates shipping fees for buyers, provides faster access to goods, and drives direct foot traffic into the vendor's retail location.

To make local fulfillment smooth and secure, the seller portal includes a dedicated **Store Pickup Orders** management section. From here, vendors and their authorized store staff can track pickup queues in real time, filter incoming collections, send secure one-time verification codes (OTP) to buyers, verify customer identity at the counter, and safely finalize order handovers.

Vendors can access their store pickup dashboard directly from the seller portal menu:

**Store Pickup > Store Pickup Orders**

**Direct Seller Navigation URL**: `/seller/store-pickup/`

<a class="doc-image-link" href="./assets/vendor-store-pickup-orders-list.png"><img src="./assets/vendor-store-pickup-orders-list.png" alt="Vendor Store Pickup Orders Management Dashboard" /></a>

---

## Store Pickup Dashboard Overview

The **Store Pickup Orders** workspace is designed specifically for front-desk cashiers, warehouse staff, and store owners managing customer collections. It separates local pickup fulfillment from traditional courier-shipped orders, giving vendors full clarity over ready-to-collect packages.

Key highlights of the vendor store pickup interface:

- **Dedicated Pickup Queue**: Displays only orders that were purchased using the **Store Pickup** delivery method.
- **Real-Time Collection Statuses**: Quickly distinguish between orders currently **Awaiting pickup** versus orders that have already been **Picked up**.
- **Customer Contact Visibility**: Displays the customer's full name and billing email address directly in each order row for instant customer verification.
- **Flexible Search & Filtering**: Locate any pickup order within seconds using the keyword search bar or the dedicated filter drawer with date range, order status, and pickup status options.
- **Configurable Table View**: Switch between `10`, `20`, or `50` order rows per page according to your daily collection volume.
- **Single-Click Order Drilldown**: Click **View** or the hyperlinked **Order ID** to access full order details, line items, customer addresses, and the OTP verification panel.
- **Mandatory OTP Handover Security**: Built-in fraud protection prevents orders from being marked as Completed until the customer's 6-digit verification code is confirmed at the counter.

::: tip Related Documentation
- **Order Management**: Learn how to manage general orders and invoices in the [Vendor Order Management Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html).
- **Staff Delegation**: Learn how to assign pickup permissions to counter cashiers in the [Vendor Staff Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).
- **Marketplace Settings**: Review platform-wide store pickup configurations in the [Admin Store Pickup Settings Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/store-pickup-settings.html).
:::

---

## Store Pickup Orders Table Breakdown

The main table on `/seller/store-pickup/` provides key operational information for every local collection:

| Column Header | What It Shows | Operational Purpose |
| :--- | :--- | :--- |
| **Order** | Displays the order number with a leading hash (e.g., `#1171`). | Clickable link that opens the detailed vendor order page (`/seller/vendor-orders/{order_id}/`). |
| **Date** | Displays the date and exact timestamp when the customer completed checkout (e.g., `October 21, 2026 11:45 am`). | Helps staff determine how long an order has been waiting for collection. |
| **Customer** | Shows the customer's full name on the top line and their billing email address underneath. | Used by counter staff to look up arriving customers and confirm contact details. |
| **Pickup store** | Displays the registered store name or retail branch where items must be collected (e.g., `Aurora Athletics`). | Ensures customers are collecting from the correct physical store location. |
| **Items** | Shows the total number of physical product units in the pickup order (e.g., `1`). | Helps warehouse and store staff quickly confirm package contents. |
| **Total** | Displays the total monetary amount of the order, formatted in your store currency (e.g., `$34.00`). | Confirms order total and payment status before releasing items. |
| **Order status** | The standard WooCommerce lifecycle status badge (*Processing*, *Completed*, *On hold*, *Cancelled*, etc.). | Indicates whether the order is paid and ready for handover. |
| **Pickup status** | The specific collection status badge: <br>• **Awaiting pickup**: Items are prepared, waiting for customer arrival.<br>• **Picked up**: Customer OTP was verified and goods were collected. | Clear visual cue showing whether physical handover has taken place. |
| **Actions** | Displays the **View** button. | Opens full order details to initiate the OTP code verification process. |

---

## Searching and Filtering Pickup Orders

During busy trading hours, front-counter staff need to locate arriving customers quickly. The store pickup interface provides both quick search and an advanced slide-out filter drawer.

<a class="doc-image-link" href="./assets/vendor-store-pickup-filter-drawer.png"><img src="./assets/vendor-store-pickup-filter-drawer.png" alt="Vendor Store Pickup Filter Drawer" /></a>

### 1. Quick Keyword Search
Located immediately above the table, the **Search** input allows instant lookups:
- Type an **Order ID** (e.g., `1171`).
- Type a **Customer Name** (e.g., `Demo Customer`).
- Type a **Customer Email** (e.g., `demo_customer@nexora.test`).
- Press <kbd>Enter</kbd> to filter the table instantly to matching orders.

### 2. Slide-Out Filter Drawer
Click the **Filter** button (`wkmp-v2-filter-btn`) above the table to open the **Apply Filters** drawer. The drawer offers 4 specific criteria:

1. **Order status**:
   Filter orders according to their overall order state:
   - *Select* (All statuses)
   - *Pending payment*
   - *Processing* (standard state for paid orders awaiting customer pickup)
   - *On hold*
   - *Completed*
   - *Cancelled*
   - *Refunded*
   - *Failed*
   - *Draft*

2. **Pickup status**:
   Filter orders by collection progress:
   - *Select* (All pickup states)
   - *Awaiting pickup*: Shows only orders currently waiting for the customer to arrive at the store.
   - *Picked up*: Shows completed collections where OTP verification has already occurred.

3. **From Date**:
   Select the start date to view orders placed on or after this specific calendar day.

4. **To Date**:
   Select the end date to view orders placed on or before this specific calendar day.

Click **Apply Filters** at the bottom of the drawer to display the filtered results. To reset your view, open the drawer, clear the fields, and click **Apply Filters** again.

---

## In-Store Counter Handover & OTP Verification

To protect both the seller and the customer against lost packages or disputed collections, WooCommerce Multi-Vendor Marketplace incorporates a secure **One-Time Password (OTP)** verification system.

When a customer comes to collect their package, follow these step-by-step instructions on the order details page (`/seller/vendor-orders/{order_id}/`).

<a class="doc-image-link" href="./assets/vendor-store-pickup-verification-box.png"><img src="./assets/vendor-store-pickup-verification-box.png" alt="Vendor Store Pickup Verification Card" /></a>

### The 5-Step Counter Handover Workflow

| Step Number | Stage Name | Who Does It | Action Description |
| :---: | :--- | :--- | :--- |
| **01** | **Customer Arrival** | Customer & Staff | Customer arrives at the counter and provides their order number (`#1171`) or name. |
| **02** | **Send Verification Code** | Store Staff | Staff opens the order and clicks **Send code** to dispatch a secure 6-digit PIN to the buyer's email. |
| **03** | **Check Customer Email** | Customer | Customer opens their inbox on mobile and reads out or shows the 6-digit PIN. |
| **04** | **Verify Code at Counter** | Store Staff | Staff enters the code into the verification input and clicks **Verify**. |
| **05** | **Hand Over Goods & Complete** | Store Staff | Staff hands over items and updates order status to **Completed**. |

<a class="doc-image-link" href="./assets/vendor-order-1171-pickup-detail.png"><img src="./assets/vendor-order-1171-pickup-detail.png" alt="Vendor Order Details with Store Pickup Verification" /></a>

### Detailed Handover Procedure:

#### 1. Locate the Order
Open **Store Pickup > Store Pickup Orders** and click **View** next to the customer's order. You can also open the order from **Sales > Order History** (`/seller/vendor-orders/`).

#### 2. Review Pickup Information
Scroll to the **Order Status** card on the right side of the screen. Underneath the status dropdown, locate the **Pickup verification** section:
- Verify the listed store location (e.g., *Aurora Athletics · 1420 SE Water Avenue, Suite 3, Portland, OR 97214*).
- Check that the order is currently in **Processing** status and paid.

#### 3. Click "Send code"
Click the **Send code** button (`wkmp-v2-btn js-wkmp-store-pickup-send`):
- The platform automatically generates a unique 6-digit one-time verification code.
- An email is instantly dispatched to the customer's registered billing email address containing the collection PIN and store details.
- A countdown timer appears indicating how long the code remains valid (configured by the administrator, such as 15 or 30 minutes).

#### 4. Enter and Validate Customer PIN
When the customer receives the email:
- Ask them to provide the 6-digit verification code shown on their device.
- Enter the code into the verification input field.
- Click **Verify code**.
- The system checks the code. Once authenticated, the pickup status changes to **Picked up**, and a success confirmation message appears.

#### 5. Save Order as Completed
With the customer verified and goods handed over:
- Change the **Status** dropdown from *Processing* to **Completed**.
- Click **Save**.
- The order is officially completed, and the transaction details are recorded in your store earnings and order audit notes.

---

## Mandatory Completion Guardrail

The marketplace provides an automated security safeguard to protect vendors from fulfilling orders prematurely:

::: warning Verification Required Before Completion
If a vendor or staff member attempts to change an unverified store pickup order to **Completed** and clicks **Save**, the system blocks the update and displays a reminder:

> *"The order must be verified before it can be completed. Send the customer a one-time code by email and ask for it at the store."*
:::

This guardrail guarantees that:
- Goods are never marked as collected before the customer actually visits the store.
- Counter staff remember to verify customer identity.
- Dispute risks and chargebacks are minimized because every collection has a verified audit trail.

---

## Delegating Store Pickup to Vendor Staff

If you employ store managers, warehouse workers, or counter cashiers, you do not need to share your main seller account login. You can create dedicated staff accounts with specific store pickup permissions.

<a class="doc-image-link" href="./assets/vendor-store-pickup-orders-list.png"><img src="./assets/vendor-store-pickup-orders-list.png" alt="Vendor Staff Pickup Access" /></a>

### Store Pickup Staff Capabilities

When setting up staff members under **Vendor Staff** (`/seller/vendor-staff/`), assign the following capabilities:

| Capability Name | What the Staff Member Can Do |
| :--- | :--- |
| **View store pickup orders** | Allows staff to log in, view the **Store Pickup Orders** menu, search for customers, and open pickup order details. |
| **Send and verify pickup codes** | Authorizes counter staff to click **Send code**, view the verification box, enter customer OTP codes, and authenticate collections. |

::: note Administrator Permission Whitelist
A vendor can only assign these capabilities if the marketplace administrator has enabled them in the platform-wide staff settings. For detailed setup instructions, see the [Vendor Staff Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).
:::

---

## Best Practices for In-Store Fulfillment

To ensure smooth operations at your retail counter, follow these recommendations:

1. **Pre-Pack Pickup Orders**: When an order enters **Processing** status, pack and label the items in advance so they are ready the moment the customer walks in.
2. **Keep the Pickup Dashboard Open**: Front-counter cashiers should keep `/seller/store-pickup/` open in a browser tab during store hours for fast lookup.
3. **Verify Before Handover**: Always verify the 6-digit OTP code before physically handing bags or boxes across the counter.
4. **Handle Expired Codes Promptly**: If a customer took longer than expected to visit or open their email, click the resend button to generate a fresh code immediately.
5. **Mark Completed Immediately**: Save the order as **Completed** right after successful verification to keep your inventory, payouts, and order logs up to date.

---

## Frequently Asked Questions (FAQ)

### What if the customer cannot find their verification email?
First, ask the customer to check their **Spam** or **Junk** mail folder for the pickup notification email. Ensure they are checking the exact billing email address displayed on the order record. If the email still has not arrived, click **Send code** again to trigger a fresh OTP.

### Can an order contain products for both home shipping and store pickup?
No. In WooCommerce, shipping methods are selected per order package during checkout. If a buyer chooses **Store Pickup**, all items from that vendor in the order are designated for in-store collection at that vendor's address.

### What address is displayed to the customer for collection?
The system displays your store's physical address configured in your seller profile under **Store Edit** (`/seller/vendor-profile/`), including your street address, city, state, postal code, and contact phone number. Ensure your store profile address is always up to date.

### How does store pickup appear on invoices and packing slips?
The shipping method on the customer invoice and vendor order receipt will clearly state **Store Pickup**, alongside the vendor's physical shop address. You can print invoices directly from the order page by clicking **Print Invoice**.

---

## Related Guides & Quick Links

- [Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html) – Complete guide to managing orders, statuses, and refunds.
- [Vendor Staff Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html) – Create and manage staff logins for counter cashiers.
- [Vendor Profile & Shop Setup](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html) – Configure your physical store address and operating information.
- [Admin Store Pickup Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/store-pickup-settings.html) – Platform-wide configuration of shipping zones and OTP expiry rules.
- [Admin Store Pickup Orders](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-store-pickup.html) – Administrator overview and auditing of marketplace collections.
