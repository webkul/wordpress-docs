---
title: Configuration – Store Pickup Settings
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/store-pickup-settings.html
---

# Configuration – Store Pickup Settings

The **Store Pickup Settings** tab enables marketplace administrators to configure local store pickup across the entire marketplace. Store Pickup allows buyers to place orders online and physically collect their items directly from a vendor's retail shop or warehouse address. 

<a class="doc-image-link" href="./assets/admin-store-pickup-settings.webp"><img src="./assets/admin-store-pickup-settings.webp" alt="Admin Store Pickup Settings" /></a>

Administrators can activate the feature globally, enforce mandatory one-time password (OTP) verification before handovers can be marked complete, define secure verification code lifetimes, and delegate store pickup operations to authorized vendor staff members.

The marketplace admin can access and configure this section from:

**Marketplace > Settings > Store Pickup**

---

## Store Pickup Settings Overview

- **Global Store Pickup Activation**: Enable or disable the local store pickup fulfillment method across the entire marketplace.
- **Native WooCommerce Shipping Zone Integration**: Operates as a native WooCommerce shipping method (`wkmp_store_pickup`) that can be added to standard delivery zones with custom titles, descriptions, and costs.
- **Vendor Profile Address Resolution**: Automatically uses the physical shop address configured in each seller's profile (`wkmp_street_address`, city, state, postcode, and phone number) as the designated collection point.
- **Dual Shipping Mode Support**: Seamlessly functions with both admin-configured shipping (`woocommerce` mode) and vendor-configured shipping (`marketplace` mode).
- **Dual Checkout Support**: Operates out of the box on both classic shortcode checkouts (`[woocommerce_checkout]`) and the modern WooCommerce Block Checkout.
- **Mandatory OTP Handover Security**: Protects sellers and buyers by requiring a 6-digit one-time pickup code verification before orders can be marked as **Completed**.
- **Adjustable Code Expiration Window**: Configure how long a generated pickup code remains valid, with automated invalidation and resend controls.
- **Vendor Staff Delegation**: Grant authorized shop staff specific capabilities to inspect pickup orders and verify customer codes at the retail counter.
- **Centralized Admin Oversight**: Monitor, filter, and track all store pickup orders across all registered vendors from a dedicated admin dashboard.

::: tip Related Guides & Resources
- **Order Management**: Learn how to monitor and filter pickup orders in the [Store Pickup Orders Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-store-pickup.html).
- **Vendor Operations**: Guide sellers on managing their pickup queues and validating OTP codes in the [Vendor Store Pickup Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-store-pickup.html).
- **Courier Fulfilment**: Configure couriers and scheduled pickups for Free Shipping and Flat Rate orders in the [Fulfilment Carriers Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/fulfilment-carriers.html).
- **Staff Access Control**: Learn how to configure staff quotas and permissions in the [Admin Staff Settings Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html).
- **Seller Staff Delegation**: See how vendors invite team members and assign daily tasks in the [Vendor Staff Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).
- **Shipping Setup**: Learn how shipping zones are managed in the [Vendor Shipping Zone Management Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-shipping-zone-management.html).
:::

---

## Admin Store Pickup Settings Summary

The table below provides a quick reference for each option available on the **Store Pickup** configuration tab:

| Setting Label | Input Type | Default Setting | Purpose |
| :--- | :--- | :--- | :--- |
| **Enable Store Pickup** | Checkbox | Enabled (Checked) | Master switch. Activates the Store Pickup shipping method across the marketplace. When enabled, it can be added to shipping zones. |
| **Require Pickup Code** | Checkbox | Enabled (Checked) | Enforces OTP verification. Vendors and staff must verify the code emailed to the buyer before marking the order as Completed. |
| **Code Expiry (minutes)** | Number Field | `2` (Range: 1–60) | Sets the number of minutes a generated pickup code remains valid. A new code can only be requested after the current code expires. |
| **Save Changes** | Primary Button | Click to Save | Saves and updates all configuration options. |

---

## Detailed Admin Settings

### Enable Store Pickup

- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Live Description**: *"Let customers collect their order from the vendor's store. Add the Store Pickup method to your shipping zones in WooCommerce → Settings → Shipping. Customers collect each vendor's items from that vendor's shop address."*

#### How It Works:
- **When Enabled**: 
  - The **Store Pickup** shipping method (`wkmp_store_pickup`) becomes available to add within WooCommerce shipping zones.
  - In vendor shipping mode, sellers can add Store Pickup to their individual shipping zones directly from their front-end seller dashboard.
  - The **Store Pickup Orders** menu endpoint (`store-pickup`) is accessible on seller dashboards and within the WordPress admin.
- **When Disabled**:
  - The Store Pickup shipping rate is removed from the checkout page and cannot be selected by shoppers.
  - Existing pickup orders placed prior to disabling remain intact, preserving historical pickup snapshots, timestamps, and order notes.

---

### Require Pickup Code

- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Live Description**: *"The vendor must verify the code emailed to the customer before completing the order."*

#### How It Works:
- **Handover Security Guard**: When enabled, the marketplace activates a strict security guardrail on the order completion lifecycle:
  1. When a buyer arrives at the retail store, the vendor or counter staff clicks **Generate OTP** within the order view.
  2. The system sends a 6-digit numerical code to the customer's billing email.
  3. The customer presents the code to the counter staff.
  4. The vendor or staff enters the code and clicks **Verify OTP**.
- **Completed Status Protection**: The vendor part of the order **cannot** be changed to `wc-completed` until the code is verified. If someone attempts to mark the order complete without OTP validation, the system blocks the request and displays:
  > *"Verify the pickup code before completing this order."*
- **When Disabled**: Vendors can manually mark store pickup orders as Completed without generating or validating an OTP code. This is useful for low-friction environments or trusted customer bases.

---

### Code Expiry (minutes)

- **Setting Type**: Number Field
- **Default Value**: `2`
- **Live Description**: *"How long a pickup code stays valid, from 1 to 60 minutes. A new code can be sent only after the current one expires."*

#### How It Works:
- **Validity Window**: Defines the exact number of minutes the 6-digit OTP remains active after generation.
- **Expiry Countdown**: When an OTP is generated, a live countdown timer displays in the vendor order view showing remaining time.
- **Resend Restriction**: To prevent email spam and brute-force attempts, the **Resend OTP** button remains disabled until the current timer reaches zero.
- **Brute-Force Guard**: If an incorrect code is entered 5 consecutive times, the active code is invalidated, requiring the vendor to generate a fresh OTP.
- **Recommended Configuration**:
  - **Busy Retail Counters (2 to 5 minutes)**: Keeps security tight while giving buyers enough time to check their email on mobile phones.
  - **Curbside / Scheduled Collection (10 to 15 minutes)**: Useful if buyers check in from parking lots or waiting areas prior to approaching the desk.

---

## Setting Up Store Pickup in WooCommerce Shipping Zones

Once **Enable Store Pickup** is activated, administrators or vendors must add the method to the appropriate WooCommerce Shipping Zones.

<a class="doc-image-link" href="./assets/admin-wc-shipping-store-pickup.webp"><img src="./assets/admin-wc-shipping-store-pickup.webp" alt="WooCommerce Shipping Zones Store Pickup" /></a>

### Step-by-Step Configuration:

1. In WordPress Admin, navigate to **WooCommerce > Settings > Shipping**.
2. Click on the shipping zone you want to configure (for example, *Local Zone* or *Rest of the world*).
3. Click the **Add shipping method** button.
4. From the shipping method dropdown modal, select **Store Pickup** and click **Continue**.
5. Click **Edit** under the newly added Store Pickup method to configure its settings:

| Shipping Method Field | Default | Description |
| :--- | :--- | :--- |
| **Title** | `Store Pickup` | The label displayed to customers at checkout before the vendor shop names (e.g., *Store Pickup: Green Farm, Tech Hub*). |
| **Description** | *Empty* | Optional text displayed under the rate on the checkout page and in order confirmation emails. |
| **Cost** | `0` | Pickup fee. Setting to `0` or leaving blank renders the method as **Free** for shoppers. |
| **Tax status** | `None` / `Taxable` | Determines whether the pickup cost is subject to sales tax calculation. |

6. Click **Save changes**.

::: note Shipping Mode Differences
- **Admin Shipping Mode (`woocommerce`)**: The marketplace admin adds Store Pickup to global shipping zones. At checkout, packages calculate pickup from each participating vendor's shop address.
- **Vendor Shipping Mode (`marketplace`)**: Each seller manages their own shipping zones and adds Store Pickup directly from their seller dashboard under **Shipping > Shipping Zones**.
:::

---

## Vendor Staff Delegation & Store Counter Operations

In many marketplace setups, store owners hire sales associates, cashiers, or warehouse staff to manage daily in-store collections. The marketplace provides granular access control through the **Vendor Staff** ecosystem.

Marketplace admins can oversee vendor staff members directly from:

**Marketplace > Vendor Staffs** (`wp-admin/admin.php?page=wk-marketplace-vendor-staffs`)

<a class="doc-image-link" href="./assets/admin-vendor-staffs-store-pickup.webp"><img src="./assets/admin-vendor-staffs-store-pickup.webp" alt="Admin Vendor Staffs Management" /></a>

### Store Pickup Staff Capabilities

Store pickup orders are managed through the standard **Orders** permission rather than separate custom capabilities.

- **Orders Permission**: When vendors grant their staff the standard **View orders** permission (governed under **Marketplace > Settings > Staffs**), authorized staff members can inspect both regular shipping and store pickup orders from their seller dashboard.
- **Counter Operations**: Counter staff with order access can open arriving customer pickup orders, review items, click **Generate OTP** to dispatch the 6-digit code to the buyer's email, and validate the code upon physical package handover.

### How Store Staff Complete Handovers:
1. The store assistant logs into their staff account and opens the **Orders** section (or the **Store Pickup Orders** tab).
2. When the customer arrives, the assistant searches for the order number or customer name.
3. The assistant opens the order view, where the **Pickup Verification** box is visible.
4. The assistant clicks **Generate OTP**, which emails the verification PIN to the buyer.
5. The buyer provides the 6-digit code. The assistant inputs the PIN and clicks **Verify OTP**.
6. The system records the assistant's user ID and timestamp, marks the pickup verified, and allows the assistant to change the order status to **Completed**.

::: tip Delegatable Permissions Master Whitelist
Staff members can only inspect and verify pickup orders if the marketplace administrator has permitted the **Orders** permission in the global master whitelist under **Marketplace > Settings > Staffs**, and the vendor has granted their staff account the corresponding order view access. For a full walkthrough of staff quotas and whitelist configuration, refer to the [Admin Staff Settings Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html) and the [Vendor Staff Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).
:::

---

## Store Pickup Orders Management

Administrators can review and manage every store pickup transaction across the marketplace from the dedicated order registry:

**Marketplace > Store Pickup Orders** (`wp-admin/admin.php?page=wk-marketplace-store-pickup`)

<a class="doc-image-link" href="./assets/admin-store-pickup-orders.webp"><img src="./assets/admin-store-pickup-orders.webp" alt="Admin Store Pickup Orders List" /></a>

### Registry Data Columns:

| Column Header | Information Displayed |
| :--- | :--- |
| **Order** | Order number, customer name link, and direct link to the WooCommerce order edit screen. |
| **Date** | Exact timestamp and relative age of the order placement. |
| **Customer** | Buyer account details and billing contact information. |
| **Vendor / pickup status** | Displays the vendor store name and current pickup progress (**Awaiting pickup** or **Picked up on date**). |
| **Order status** | Standard WooCommerce order status badge (e.g., *Processing*, *Completed*, *On hold*). |
| **Total** | Total order monetary amount. |

### Powerful Filtering Options:
- **Filter by Vendor**: Select any specific seller from the dropdown list to audit their individual collection queue.
- **Filter by Order Status**: Isolate orders by fulfillment status (*Pending payment*, *Processing*, *On hold*, *Completed*, *Cancelled*, *Refunded*, *Failed*, *Draft*).

For complete operational details on filtering, batch tracking, and audit notes, see the [Store Pickup Orders Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-store-pickup.html).

---

## Complete Customer Handover & Verification Flow

The end-to-end Store Pickup fulfillment lifecycle follows a secure 5-stage progression:

| Stage | Operational Step | Responsible Party | System Action & Security Guard |
| :---: | :--- | :--- | :--- |
| **1** | **Checkout Selection** | Buyer | Shopper selects **Store Pickup**. System captures the vendor's physical store address into order details. |
| **2** | **Preparation** | Vendor / Store Staff | Seller or counter assistant prepares items for local collection. Customer receives store address and hours via email. |
| **3** | **In-Store Arrival & PIN Dispatch** | Store Staff / Counter Assistant | Buyer arrives at counter. Staff opens order in seller dashboard and clicks **Generate OTP**. System emails a 6-digit PIN to the buyer. |
| **4** | **OTP Validation** | Store Staff | Buyer presents PIN. Staff enters code and clicks **Verify OTP**. System verifies code against active hash before timer expires. |
| **5** | **Order Completion** | Store Staff / Vendor | Handover is permanently timestamped and verified. Completed Guardrail clears, allowing status to move to **Completed**. |

### Detailed Step-by-Step Handover Guide:
1. **Checkout Selection**: At checkout, the shopper selects the **Store Pickup** option. The rate displays the specific vendor shop name(s) and physical street addresses.
2. **Order Confirmation**: The confirmation email and My Account order screen display clear pickup instructions, the vendor's physical location, and contact phone numbers.
3. **Arrival & OTP Generation**: At the store counter, the seller or authorized staff member clicks **Generate OTP**. A cryptographically secure 6-digit code is dispatched to the buyer's billing email.
4. **Verification**: The seller inputs the code. Once verified, the order records a permanent timestamped note:
   > *"Store pickup verified by [Staff/Vendor Name] on [Date/Time]."*
5. **Order Completion**: With verification complete, the vendor marks their portion of the order as **Completed**.

---

## Best Practices & Technical Guidelines

### 1. Ensure Vendor Profile Address Completeness
For Store Pickup to be calculated and displayed at checkout, the vendor **must** have a valid physical address configured in their profile:
- Required fields: **Street Address**, **City**, and **Country**.
- If any vendor in a cart package lacks an address, Store Pickup is automatically hidden for that package to prevent fulfillment failure.

### 2. Multi-Vendor Cart Handling
When a customer purchases products from multiple sellers in one order:
- **Vendor-Configured Mode**: Each vendor's package has its own shipping selection. A customer can choose **Store Pickup** for Vendor A and **Express Courier** for Vendor B.
- **Admin-Configured Mode**: The single Store Pickup rate lists all participating store addresses together (e.g., *Store Pickup: Green Farm, Tech Hub*). The customer collects items from each respective shop, and each vendor performs their own independent OTP verification.

### 3. Recommended Code Expiry Settings
- Keep the default expiry set to **2 to 5 minutes** for standard retail stores.
- Setting the duration too long (e.g., 60 minutes) increases exposure if a customer leaves the premises.
- Setting it too short (e.g., 1 minute) may cause inconvenience if the customer experiences mobile data delays.

---

## Frequently Asked Questions (FAQ)

### Can a vendor complete an order without entering the pickup code?
No, not if **Require Pickup Code** is enabled in Store Pickup Settings. The marketplace Completed Guardrail intercepts status updates and prevents marking the order as **Completed** until the OTP has been validated.

### What happens if the customer does not receive the OTP email?
The vendor or staff member can check the countdown timer. As soon as the timer reaches zero, the **Resend OTP** button becomes active. Clicking it sends a fresh 6-digit code to the customer.

### Can vendor staff verify pickup codes on mobile devices?
Yes. The vendor order management interface is fully responsive. Staff members can log in via mobile browser or tablet at the store counter, generate codes, and verify handovers seamlessly.

### Does Store Pickup work with WooCommerce Block Checkout?
Yes. The Store Pickup method (`wkmp_store_pickup`) is fully compatible with both the modern WooCommerce Checkout Block and classic shortcode checkouts.
