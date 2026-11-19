---
title: Vendor Management and Product Assignment
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-management-and-product-assignment.html
---

# Vendor Management and Product Assignment

The **Vendor Management** hub allows marketplace administrators to oversee, approve, monitor, and configure all registered vendors directly from the WooCommerce WordPress admin control panel.

From this central control center, administrators can manage seller profiles, track orders, disburse payouts, set custom commission rates, handle flags, process withdrawals, and assign products.

<a class="doc-image-link" href="./assets/vendors-list.webp"><img src="./assets/vendors-list.webp" alt="Vendors List" /></a>

---

## Vendor List – WooCommerce Marketplace

The **Vendor List** allows the admin to manage all vendors from the WooCommerce admin panel.

---

### Vendor List Features

- View full vendor bio and profile details
- Edit vendor profile via the **Username** link
- Approve or disapprove vendors

### Editable Sections Include

- Personal options
- Name & contact information
- About page
- Account management
- Billing address
- Shipping address

---

### Vendor List Columns & Management Capabilities

Under **Marketplace → Vendors** (`admin.php?page=wk-marketplace`), administrators can inspect and filter all registered vendors across several key operational dimensions:

| Column Header | Description |
| :--- | :--- |
| **Name** | Vendor display name and store title. Hovering reveals contextual quick links: **Edit**, **Manage**, **Delete**, **View Profile**, and **KYC**. |
| **Username** | Account login identifier (sortable). Clicking opens the WordPress user edit profile (`user-edit.php`). |
| **Shop Name** | Public storefront name displayed to customers. |
| **Email** | Vendor primary contact email address (sortable). |
| **Item Count** | Total live products listed and actively sold by this vendor (sortable). |
| **Flag Count** | Total customer grievance flags submitted against this vendor's catalog (sortable). |
| **Badge Count** | Number of trust and achievement badges awarded to this seller (sortable). Learn more in [Vendor Badge Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-mangement.html). |
| **Vendor Staffs** | Active staff sub-accounts configured under this vendor (sortable). Learn more in [Configuration – Staff Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html). |
| **KYC** | Verification document status (e.g., *Not uploaded*, *Pending*, *Approved*). Refer to [Vendor KYC](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-kyc.html). |
| **Action** | Instant one-click toggle button to **Approve** or **Disapprove** the vendor without entering their profile. |
| **Date Created** | Date and time stamp when the vendor account was created (sortable). |

#### Contextual Row Actions
Hovering over any vendor row provides immediate access to essential management operations:
- **Edit**: Direct shortcut to the WordPress user profile screen.
- **Manage**: Opens the comprehensive vendor management console (`tab-action=manage&seller-id=X`).
- **Delete**: Permanently removes the vendor account from the marketplace.
- **View Profile**: Opens the vendor's storefront shop page in a new tab.
- **KYC**: Launches the KYC verification document inspection window.

#### Bulk Actions & Search
- **Bulk Operations**: Select multiple vendors using table checkboxes and apply **Delete**, **Approve**, or **Disapprove** actions simultaneously.
- **Search Vendor**: Use the top-right search input to filter vendors by username, store name, or email.

---

## Add New Vendor

The admin can add a new vendor manually by navigating to:

**Marketplace → Vendors → Add New**

<a class="doc-image-link" href="./assets/vendors-list.webp"><img src="./assets/vendors-list.webp" alt="Vendors List" /></a>

---

### Vendor Creation Steps

- Fill in vendor details such as:
  - Username
  - Email
  - Role (Seller)
  - Profile and shop details
- Save the vendor to add them to the marketplace

<a class="doc-image-link" href="./assets/add-new-vendor.webp"><img src="./assets/add-new-vendor.webp" alt="Add New Vendor Form" /></a>

::: info Manual Vendor Onboarding
When the administrator adds a vendor through **Add New**, the user role is automatically set to **Marketplace Seller** (`wk_marketplace_seller`). The vendor is immediately approved and can log into their vendor dashboard to begin listing products. For self-registration workflows, see [Vendor Registration Process](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-registration-process.html).
:::

---

## Manage Vendor

Click the **Manage** button next to a vendor to access vendor management options.

Administrators can navigate through seven dedicated management tabs:
1. **[Details](#vendor-details)**: General store identity, payment terms, and assigned trust badges.
2. **[Orders](#vendor-orders)**: Order items, commission deductions, seller totals, and order payment processing.
3. **[Transactions](#transactions-in-woocommerce-marketplace)**: Complete payout records and itemized settlement receipts.
4. **[Commission](#commission-management)**: Seller-specific fixed and percentage commission rates, plus cumulative revenue stats.
5. **[Miscellaneous](#miscellaneous-settings-vendor-level)**: Category restrictions, order approval, "Sold by" visibility, dynamic SKU prefixes, and vendor staff permissions.
6. **[Flags](#reported-flags)**: Grievance reports and violation complaints submitted by shoppers.
7. **[Withdrawals](#withdrawal-requests-management)**: Payout requests submitted by vendors, fees, and disbursement execution.

---

## Vendor Details

From the **Details** section, the admin can:

- View vendor information:
  - Username
  - Email
  - Display name
  - Shop address
- Enter and update vendor **payment details**

<a class="doc-image-link" href="./assets/admin-end-seller-details.webp"><img src="./assets/admin-end-seller-details.webp" alt="Admin Vendor Details" /></a>

### Details Tab Field Breakdown

- **Username**: System login handle for the vendor.
- **Email**: Primary notification and business email.
- **Display name**: Public display name configured for the user.
- **Shop Name**: Storefront title shown across product cards and vendor shop banners.
- **Shop Slug**: Dedicated URL permalink slug for the vendor's shop page (e.g., `/shop-name/`).
- **Payment Details**: Configured payout channel, bank details, or remittance preferences (e.g., Bank Transfer, PayPal).
- **Assigned Badges**: Trust, quality, or milestone badges currently assigned to this vendor.

---

## Vendor Orders

- Admin can view all orders related to a vendor.
- Admin can mark orders as **paid** to the vendor.

### Pay Vendor for an Order

- Click the **Pay** button under the order actions.
- This creates a transaction for the order.

<a class="doc-image-link" href="./assets/seller-order.webp"><img src="./assets/seller-order.webp" alt="Vendor Orders" /></a>

### Vendor Orders Table Breakdown

The **Orders** tab (`tab=orders&tab-action=manage&seller-id=X`) lists every marketplace order containing products from this vendor:

| Column | Description |
| :--- | :--- |
| **Order Id** | WooCommerce order reference number (sortable). |
| **Product** | Line items belonging to this vendor with product IDs (e.g., `Aurora Pace Fitness Watch ( #1000)`). |
| **Quantity** | Total number of units purchased in this order (sortable). |
| **Product Total** | Gross product sales amount before deductions. |
| **Shipping** | Shipping fee allocation designated for this vendor. |
| **Discount** | Coupon or promotional discount deducted from the vendor's line items. |
| **Total Commission** | Marketplace admin commission retained from this order. |
| **Total Vendor Amount** | Net payable amount due to the vendor. |
| **Action** | Displays a primary **Pay** button for unpaid orders, or a green **Paid** badge once settled. |

#### Batch Order Payouts
Administrators can select multiple orders using the row checkboxes, select **Pay** from the **Bulk actions** dropdown, and click **Apply** to disburse payouts in a single batch operation. For storefront order workflows, see [Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html) and [Vendor Payout Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-payout-management.html).

---

## Transactions in WooCommerce Marketplace

Once payment is made:

- Order is marked as **paid**
- A transaction entry is created under **Transactions**

### Transaction Details Include

- Order ID
- Amount
- Transaction Type
- Payment Method
- Date Created

<a class="doc-image-link" href="./assets/admin-end-seller-transactions.webp"><img src="./assets/admin-end-seller-transactions.webp" alt="Admin Seller Transactions" /></a>

---

### View Transaction Details

- Click on a transaction to view complete transaction information.

<a class="doc-image-link" href="./assets/transaction-details.webp"><img src="./assets/transaction-details.webp" alt="Transaction Details" /></a>

### Transaction Ledger Columns & Receipt View

The **Transactions** tab (`tab=transactions&tab-action=manage&seller-id=X`) maintains an audit log of all disbursements made to the vendor:

- **Transaction Id**: Unique system transaction reference code (e.g., `wc_tr-2qIpvJB8ux6ENj`). Hovering over the ID reveals the **View** link.
- **Order Id**: Associated WooCommerce order number.
- **Amount**: Disbursed payment amount.
- **Type**: Disbursement classification (e.g., `Manual`, `Online`, or `Withdrawal`).
- **Method**: Payout channel used (e.g., `Manual`, `PayPal`, or `Bank Transfer`).
- **Created On**: Exact date and timestamp when the transaction was completed.

#### Detailed Transaction Statement (`tab=transactions&id=XX`)
Clicking **View** opens an itemized transaction statement:
- **Information Summary**: Displays transaction date, total amount, payout type, and payment gateway method.
- **Line-Item Audit Table**: Lists Order ID, Product Name, Quantity, Total Price, Admin Commission, Applied Discount, and the resulting Subtotal.
- For additional payout ledger details, refer to [Vendor Transaction Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-transaction-management.html).

---

## Commission Management

- Admin can define and manage vendor commission rates.
- View:
  - Total vendor sales
  - Admin commission earned

<a class="doc-image-link" href="./assets/seller-commission.webp"><img src="./assets/seller-commission.webp" alt="Vendor Commission" /></a>

### Dual Commission Rate & Sales Summary

Under the **Commission** tab (`tab=commission&tab-action=manage&seller-id=X`), administrators can set vendor-specific commission overrides:

1. **Dual Commission Rate Configuration**:
   - **Fixed Fee**: Enter a flat fee in base store currency (e.g., `$ 5.00`).
   - **Percentage Fee**: Enter a percentage deduction (e.g., `12 %`).
   - The effective formula combines both: `$ [Fixed] + [Percent] %`. This allows administrators to set fixed commissions, percentage commissions, or a hybrid combination.
2. **Cumulative Financial Metrics**:
   - **Total Sale**: Real-time calculated gross sales volume generated exclusively by this vendor.
   - **Total Admin Commission**: Real-time cumulative commission revenue retained by the marketplace from this vendor's sales.
3. **Save Override**: Click **Save** to apply the vendor-level rates.

::: tip Commission Hierarchy
Vendor-level commission rates take priority over global commission rules configured under [Commission Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/commission-management.html). If left unset, the marketplace defaults to the storewide commission formula.
:::

---

## Miscellaneous Settings (Vendor Level)

The admin can configure vendor-specific settings.

<a class="doc-image-link" href="./assets/miscellaneous-settings.webp"><img src="./assets/miscellaneous-settings.webp" alt="Miscellaneous Settings" /></a>

---

### Product Category Settings

- **Allowed Categories**:
  - Define which categories the vendor can use when adding products

---

### Order Approval

- **Enable**:
  - Vendor sees orders and receives notifications only after **admin approval**

---

### Dynamic SKU

- **Enable**:
  - Automatically prefixes vendor SKU
- **Product SKU Prefix**:
  - Define the prefix for vendor SKUs

---

### Vendor Info Visibility (Customer Display)

The administrator can override whether vendor attribution appears to customers for this specific seller:

- **Display "Sold by" Info to Customers**:
  - **Default (Global setting)**: Inherits the marketplace storewide setting configured in [Configuration – General Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html).
  - **Show**: Always display the **Sold by [Vendor Name]** banner, shop link, and badge on product pages and in the cart.
  - **Hide**: Suppress vendor identity across product listings, catalog cards, and checkout.

---

### Vendor Staff Access

Administrators can control whether this specific vendor is permitted to delegate duties to staff sub-accounts:

- **Vendor Staff**:
  - **Default (Global setting)**: Follows the global staff configuration in [Configuration – Staff Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html).
  - **Enabled**: Explicitly grants the vendor permission to create and manage sub-accounts with delegated capabilities.
  - **Disabled**: Revokes staff creation privileges for this specific vendor even when staff mode is enabled globally.
- Learn more about configuring staff capabilities in [Vendor Staff Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).

---

### Translate Products (WPML)

- Allow vendors to translate products using **WPML**
- Vendors can translate products from their dashboard

> **Note:**
> This option appears only when the **WPML plugin** is installed and activated.

::: tip Saving Miscellaneous Configurations
After modifying Allowed Categories, Order Approval, Vendor Info Visibility, Dynamic SKU, or Vendor Staff settings, click the **Save Changes** button at the bottom of the form to update the vendor profile.
:::

---

## Reported Flags

- Admin can view all reported flags raised against a vendor.

<a class="doc-image-link" href="./assets/flag-setting.webp"><img src="./assets/flag-setting.webp" alt="Reported Flags" /></a>

### Customer Grievance Reports Table

The **Flags** tab (`tab=flags&tab-action=manage&seller-id=X`) provides an audit trail of reported issues submitted by customers against the vendor's listings:

| Field | Description |
| :--- | :--- |
| **ID** | Unique grievance ticket reference ID. |
| **Product** | The specific product listing reported by the customer (includes a clickable link to inspect the live product). |
| **Reporter Name** | Name of the buyer or registered user who filed the grievance. |
| **Reporter Email** | Contact email address of the reporter. |
| **Reported At** | Date and time when the flag was submitted. |
| **Reason** | Exact customer remarks or feedback detailing the policy violation, defective listing, or quality issue. |

::: info Moderation & Compliance
Administrators can use grievance flags to investigate counterfeit claims or inaccurate specifications. Based on reports, admins can contact the vendor, edit or unpublish the offending product, or toggle the vendor's status to **Disapprove** in the [Vendor List](#vendor-list--woocommerce-marketplace). To configure global flag options, visit [Configuration – Vendor Flags](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-flags.html) and [Customer Flag & Report](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-flag-report.html).
:::

---

## Withdrawal Requests Management

- Admin can manage vendor withdrawal requests:
  - Approve
  - Reject
  - Process payments
- Actions depend on the vendor’s available balance

<a class="doc-image-link" href="./assets/withdrawal-request.webp"><img src="./assets/withdrawal-request.webp" alt="withdrawal request" /></a>

### Withdrawal Requests Ledger & Payout Processing

Under the **Withdrawals** tab (`tab=withdrawal&tab-action=manage&seller-id=X`), administrators manage balance disbursement requests submitted by the vendor:

| Column | Description |
| :--- | :--- |
| **ID** | System withdrawal request ID (e.g., `27`, `3`). |
| **Amount** | Gross balance requested for withdrawal by the vendor (e.g., `$1,140.96`). |
| **Charges** | Payment processing or administrative withdrawal fees deducted (e.g., `$23.28`). |
| **Method** | Requested disbursement channel selected by the seller (e.g., `Bank Transfer`, `PayPal`). |
| **Status** | Payout status: **Pending** (awaiting administrator action) or **Paid** (completed). |
| **Created At** | Date and time stamp when the vendor submitted the payout request. |
| **Paid At** | Date and time stamp when the administrator settled the request (`NA` if pending). |
| **Action** | Shows a blue **Pay** button for pending requests to initiate settlement, or a secondary **Paid** badge for processed requests. |

::: tip Withdrawal Thresholds & Settings
Vendor withdrawal requests are governed by the minimum withdrawal limits, payout charges, and allowed payment methods configured in [Configuration – Withdrawal](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-withdrawal.html). For vendor-facing balance operations, see [Vendor Payout Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-payout-management.html).
:::

---

## Assign Product to Vendor

<a class="doc-image-link" href="./assets/assign-product.webp"><img src="./assets/assign-product.webp" alt="assign Product to Vendor" /></a>

The admin can assign products to vendors directly from the **product edit page**.

---

### Assign Product from Product Page

- The admin can assign any product to a vendor from the **right column** of the product edit page.
- Search and select the vendor name from the vendor list.
- Assign the product to the selected vendor.

#### Key Points

- Admin can assign:
  - Admin-created products to vendors
  - One vendor’s product to another vendor
- If a product is reassigned:
  - It will no longer appear in the **previous vendor’s product list**
  - It will appear in the **new vendor’s product list**

<a class="doc-image-link" href="./assets/woocommerce-marketplace-transfer-seller.webp"><img src="./assets/woocommerce-marketplace-transfer-seller.webp" alt="Transfer Product to Vendor" /></a>

::: tip Product Assignment Architecture & Reassignment Rules
- **Vendor Meta Box**: Located in the right sidebar of the product editor under the **Vendor** metabox (`seller-meta-box`).
- **Searchable Dropdown**: Features a searchable Select2 dropdown. Simply type the shop name or username to locate the desired vendor quickly.
- **Unassigning Products**: Selecting `--Select Vendor---` unassigns the product from marketplace vendors, returning complete listing ownership and sales revenue directly to the store administrator.
- **Data Preservation**: When transferring a product between vendors, product descriptions, images, reviews, and attribute configurations remain preserved, while future sales, order splits, and commissions immediately route to the new vendor.
:::

---
