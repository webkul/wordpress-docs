---
title: Vendors Payout Management – Admin Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-payout-management.html
---

# Vendors Payout Management

Admins can now review pending payouts, filter and search by vendor or status, and run bulk Mark-as-Paid or CSV Export in one click — backed by six dedicated REST routes.

This also ships:
- **Category Filter**: Inline product count and product search on the seller profile.
- **Frontend Bulk Actions**: Assign Categories and Publish actions directly on the seller product list.
- **Data-Driven Seller-Profile Tabs**: Optimized profile tabs for addons.

<a class="doc-image-link" href="./assets/vendors-payout-management.webp"><img src="./assets/vendors-payout-management.webp" alt="Vendors Payout Management" /></a>

---

## Vendors Payout Dashboard Features

The new Vendors Payout Management dashboard provides a centralized view for admins to track vendor orders, commissions, payment methods, and seller payouts.

### Dashboard Highlights

- **Payable Withdrawals & Unpaid Amounts**: View total pending payable requests and total unpaid payout amounts at a glance.
- **Total Commission Earned**: Monitor total marketplace commission earnings.
- **Unpaid Vendors**: Track the number of vendors with unpaid payouts.

### Payout Management Capabilities

- **Review Pending Payouts**: Easily review all requested withdrawals from vendors.

#### Filter and Search

<a class="doc-image-link" href="./assets/vendor-payout-filter.webp"><img src="./assets/vendor-payout-filter.webp" alt="Vendor Payout Filters" /></a>

Admins can use the advanced filtering and searching tools to locate specific payout records quickly:
- **Filter by Vendor**: Select a specific vendor from the dropdown (e.g., "Blue Heaven's Store" or "ElectroMart") to view only their pending or completed payout requests.
- **Filter by Status**: View payouts by their current status, such as "Pending", to isolate pending requests.
- **Search by Withdrawal ID**: Quickly find a specific withdrawal request by entering its unique ID in the search bar.

#### Bulk Actions

<a class="doc-image-link" href="./assets/vendor-payout-bulk-actions.webp"><img src="./assets/vendor-payout-bulk-actions.webp" alt="Vendor Payout Bulk Actions" /></a>

For efficient management of multiple withdrawal requests, admins can utilize the bulk actions menu:
- **Mark as Paid**: Select multiple pending withdrawals using the checkboxes on the left, then run the "Mark as Paid" bulk action to clear them all in a single click.
- **Export CSV**: Download a comprehensive CSV file containing the selected payout records for offline accounting and external record-keeping.

#### Individual Payouts

- **Pay Now**: Admins can also manage transactions individually by clicking the **Pay Now** button located next to any withdrawal request to quickly process a specific payout.

---

## Admin Navigation & Access

Marketplace administrators can access the payout dashboard directly from the WordPress administration menu:

**WordPress Admin > Marketplace > Vendors Payout**

**Direct Admin URL**:
```text
https://your-domain.com/wp-admin/admin.php?page=wk-marketplace-vendors-payout
```

- **Menu Placement**: Positioned prominently in the Marketplace sidebar menu between **Products** and **Notifications**.
- **User Permissions**: Accessible to users with the `manage_options` administrative capability (Marketplace Administrators and authorized Shop Managers).
- **Fast Asynchronous Interface**: Built using modern WordPress React components for real-time filtering, instant status updates, and interactive confirmations without page refreshes.

::: tip Fast Navigation
Bookmark this screen in your browser for quick access during weekly accounting, billing cycles, and month-end seller settlements.
:::

---

## Dimension 1: Financial Metric Stat Cards

At the top of the Vendors Payout dashboard, four real-time summary cards provide an instant snapshot of your marketplace's financial obligations and commission earnings:

<a class="doc-image-link" href="./assets/admin-vendor-payout-overview.webp"><img src="./assets/admin-vendor-payout-overview.webp" alt="Vendors Payout Overview and Metrics Cards" /></a>

| Metric Card | Value Display | Business Meaning & Purpose |
| :--- | :--- | :--- |
| **Payable Withdrawals** | Integer Count (e.g., `9`) | Total number of withdrawal requests submitted by sellers currently in pending review. |
| **Unpaid Payout Amount** | Formatted Currency (e.g., `$5,646.72`) | Total monetary sum of funds owed to marketplace vendors across all pending withdrawal requests. |
| **Total Commission Earned** | Formatted Currency (e.g., `$881.63`) | Cumulative commission revenue earned by the marketplace platform on the orders associated with pending payouts. |
| **Unpaid Vendors** | Ratio (e.g., `8 / 8`) | Number of individual sellers who have pending payout requests compared to the total active vendors in the marketplace. |

### Dynamic Recalculation
- **Real-Time Recalculation**: When an administrator clicks **Pay Now** or applies the bulk **Mark as Paid** action, the stat cards automatically recalculate in the background.
- **Smooth Loading**: When switching filters or querying specific IDs, placeholder skeletons keep the page layout stable.

---

## Dimension 2: Multi-Filter & Search Controls

The filter bar is positioned between the summary cards and the payout data table. It gives administrators full control to locate and audit specific payout entries:

<a class="doc-image-link" href="./assets/admin-vendor-payout-filters.webp"><img src="./assets/admin-vendor-payout-filters.webp" alt="Vendors Payout Filter Bar Breakdown" /></a>

### Filter Controls Overview

| Control | Input Type | Available Options | How It Works |
| :--- | :--- | :--- | :--- |
| **Bulk Actions** | Dropdown Selector | `Bulk actions`, `Mark as Paid`, `Export CSV` | Prepares a batch operation for selected rows. The **Apply** button activates once at least one row checkbox is ticked. |
| **Filter by Vendor** | Dropdown Selector | `Filter by Vendor` (All) + Alphabetical vendor list | Dynamically lists only those marketplace vendors who currently have pending withdrawal requests. Selecting a vendor isolates their records. |
| **Status Filter** | Dropdown Selector | `Pending` (default), `Paid`, `All` | • **Pending**: Isolates actionable requests awaiting payment.<br>• **Paid**: Shows settled historical payouts.<br>• **All**: Displays complete payout logs. |
| **Date Preset Filter** | Dropdown Selector | `All` (default), `Today`, `Last 7 days`, `Last 30 days`, `This month` | Filters payout records by request submission date. |
| **Filter Button** | Primary Button | *Submit* | Applies the chosen vendor, status, and date filters, resetting the table to Page 1. |
| **Search by Withdrawal ID** | Text Input + Button | Numeric ID (e.g., `7`, `13`, `22`) | Allows instant numerical lookup of an exact withdrawal request ID. |

### Common Filter Combinations

- **Reviewing Month-End Obligations**: Select **Status: Pending** and **Date Preset: This month**, then click **Filter**.
- **Auditing a Single Vendor's Full History**: Select the vendor name from **Filter by Vendor** and set **Status: All**, then click **Filter**.
- **Investigating a Specific Transaction**: Enter the exact withdrawal number into **Search by Withdrawal Id** and click **Search**.

---

## Dimension 3: Bulk Actions (Batch Operations)

To manage high volumes of withdrawal requests quickly, administrators can execute batch settlements and generate accounting exports with a single click.

### 1. Bulk Mark as Paid Workflow

When funds have been transferred offline or through scheduled bank payment files to multiple vendors:

1. **Select Records**: Check the boxes next to the withdrawal requests you want to clear. Check the header checkbox to select all visible rows.
2. **Choose Action**: Select **Mark as Paid** from the bulk actions dropdown.
3. **Click Apply**: The **Apply** button becomes clickable.
4. **Confirm Dialog**: A confirmation modal displays the number of selected withdrawals and the combined total amount:
   ```text
   Pay {N} withdrawals totaling ${total}?
   ```
5. **Batch Processing**: Confirming the prompt updates all selected records to `Paid`, records matching financial ledger entries, recalculates the metric cards, and displays a success notification confirming how many payouts were settled.

### 2. Bulk CSV Export Workflow

For external bookkeeping, tax preparation, or spreadsheet reconciliations:

1. **Select Records**: Select the desired rows, or filter the table by date range or vendor.
2. **Choose Action**: Choose **Export CSV** from the bulk dropdown.
3. **Click Apply**: The system compiles the selected payout data.
4. **Instant Download**: A formatted `.csv` file downloads automatically to your computer.

---

## Dimension 4: Payout Data Table & Column Structure

The central table displays all withdrawal requests with clear, sortable financial columns:

<a class="doc-image-link" href="./assets/admin-vendor-payout-paid-records.webp"><img src="./assets/admin-vendor-payout-paid-records.webp" alt="Vendors Payout Historical Paid Records" /></a>

### Table Column Directory

| Column Header | Data Format | Sortable | Description |
| :--- | :--- | :--- | :--- |
| **[Checkbox]** | Checkbox Control | No | Selects rows for bulk settlement or CSV export. |
| **Withdrawal Id** | Numeric ID | Yes | Unique reference number assigned to the withdrawal request. |
| **Date ↓** | Date & Time | Yes (Default Desc) | Exact timestamp (`YYYY-MM-DD HH:MM:SS`) when the vendor requested the withdrawal. |
| **Vendor Name** | Text / Link | Yes | Registered shop name of the seller requesting payout (e.g., *Volt & Vine*, *Lumen Beauty*). |
| **Product Total** | Currency (`$X.XX`) | No | Gross item sales total for the orders included in this payout request. |
| **Tax** | Currency (`$X.XX`) | No | Total tax collected on the vendor's items. |
| **Shipping** | Currency (`$X.XX`) | No | Total shipping charge allocated to the seller for order fulfillment. |
| **Total Commission** | `$X.XX (Y%)` | No | Marketplace commission retained by the platform, showing both the currency amount and rate (e.g., `$113.20 (10%)`). |
| **Total Amt** | Currency (`$X.XX`) | Yes | **Net payable amount** due to the seller after deducting commissions and adding eligible shipping/tax: `(Product Total + Shipping + Tax) - Commission`. |
| **Payment Mode** | Badge / Label | No | Payout method requested by the seller: `bank` (Bank Transfer), `paypal` (PayPal), or `upi` (Unified Payments Interface). |
| **Withdrawal** | Status Badge | No | Visual status indicator:<br>• `<span class="wkmp-status-badge is-pending">Requested</span>` (Pending)<br>• `<span class="wkmp-status-badge is-paid">Paid</span>` (Settled) |
| **Action** | Button / Label | No | • If Pending: Displays a blue **Pay Now** button.<br>• If Paid: Displays a muted, disabled **Paid** badge. |

### Table Navigation & Pagination
- **Total Count Indicator**: Shows the total number of records matching the current filter (e.g., `9 items`).
- **Pagination Controls**: Provides `‹ Prev`, current page indicator (`1 / 1`), and `Next ›` buttons for easy navigation across large transaction archives.

---

## Dimension 5: Individual Payout Workflow (Pay Now)

When handling payouts individually, administrators can review each request with an explicit confirmation step before committing the ledger update.

<a class="doc-image-link" href="./assets/admin-vendor-payout-confirm-modal.webp"><img src="./assets/admin-vendor-payout-confirm-modal.webp" alt="Confirm Payment Modal Dialog" /></a>

### Step-by-Step Walkthrough

1. **Locate Request**: Under the `Pending` filter, locate the vendor's withdrawal row.
2. **Click Pay Now**: Click the primary blue **Pay Now** button in the Action column.
3. **Review Confirm Payment Dialog**: A modal dialog appears containing exact transaction details:
   ```text
   Confirm payment
   Pay $998.42 to Volt & Vine via bank?
   ```
4. **Confirm or Cancel**:
   - Click **Cancel** (or the close `✕` icon) to dismiss the dialog without making changes.
   - Click **Pay Now** to proceed with settlement.
5. **Settlement Confirmation**:
   - The status badge updates immediately from **Requested** to **Paid**.
   - The action button changes to a disabled **Paid** indicator.
   - A success notification confirms: `Withdrawal #N paid`.
   - The summary metric cards at the top dynamically recalculate.

::: note Record-Only Payout Clarification
The Vendors Payout Management dashboard serves as the administrative settlement ledger. Clicking **Pay Now** or **Mark as Paid** updates the marketplace ledger, deducts the seller's available balance, and flags the withdrawal as settled. Administrators should execute the actual monetary transfer through their external banking portal, PayPal account, or UPI interface as indicated by the vendor's chosen **Payment Mode**.
:::

---

## Dimension 6: Payout Lifecycle & Commission Settlement

Vendor funds progress through a clear lifecycle from customer purchase to final disbursement:

### Payout Lifecycle Stages

1. **Customer Places Order**:
   - The buyer checks out on the storefront.
   - Payment is captured in the marketplace administrator's payment gateway (e.g., Stripe, PayPal, offline transfer).

2. **Order Marked as Completed**:
   - The marketplace commission is automatically calculated and recorded in the commission ledger.
   - The vendor's net earnings are added to their available marketplace balance.

3. **Vendor Submits Withdrawal Request**:
   - The seller initiates a withdrawal from their seller dashboard using an approved payout method (Bank, PayPal, or UPI).
   - A new request appears in the admin dashboard with the status **Requested** (Pending).

4. **Admin Review in Vendors Payout**:
   - The administrator inspects the order totals, tax, shipping, and commission fee.
   - The administrator verifies the vendor's payout credentials.

5. **External Disbursement & Settlement**:
   - The administrator transfers the funds via the requested payment method (external bank wire, PayPal, or UPI).
   - The administrator clicks **Pay Now** (or uses **Mark as Paid** for batches).
   - The status changes to **Paid**, updating the marketplace ledger and finalizing the seller's balance.

::: tip Net Payout Calculation Formula
**Net Vendor Payout (`Total Amt`)** = `(Product Total + Eligible Shipping + Eligible Tax) − Admin Commission`

- **Product Total**: Gross sales value of the vendor's line items.
- **Admin Commission**: Platform fee configured under [Commission Management](https://wpdoc.webkul.com/documentation/commission-management.html).
- **Shipping & Tax**: Distributed according to the marketplace's configured shipping and tax policies.
:::

---

## Dimension 7: Exported CSV Schema Specification

When clicking **Export CSV**, the generated spreadsheet contains complete financial and operational fields for your records:

| CSV Column Header | Example Data | Field Description |
| :--- | :--- | :--- |
| `Withdrawal ID` | `7` | Unique reference number of the withdrawal. |
| `Date` | `2026-10-04 09:12:00` | Timestamp when the withdrawal was submitted. |
| `Seller Name` | `Volt & Vine` | Display name of the marketplace seller. |
| `Product Total` | `$1132.00` | Gross subtotal of products sold in the associated orders. |
| `Tax` | `$0.00` | Tax allocated to the vendor. |
| `Shipping` | `$0.00` | Shipping fees allocated to the vendor. |
| `Total Commission` | `$113.20 (10%)` | Admin marketplace commission fee deducted. |
| `Total Amount` | `$998.42` | Net amount disbursed to the seller. |
| `Payment Mode` | `bank` | Requested payment method (`bank`, `paypal`, `upi`). |
| `Status` | `pending` / `paid` | Current fulfillment status of the withdrawal record. |


---

## Related Documentation

- [Configuration – Withdrawal](https://wpdoc.webkul.com/documentation/configuration-withdrawal.html): Set up minimum withdrawal limits, automated schedules, and payment gateways.
- [Commission Management](https://wpdoc.webkul.com/documentation/commission-management.html): Configure fixed and percentage commission rates for marketplace vendors.
- [Vendor Management](https://wpdoc.webkul.com/documentation/vendor-mangement.html): Manage seller profiles, review vendor registrations, and audit individual balances.
- [Vendor Order Management](https://wpdoc.webkul.com/documentation/vendor-order-management.html): Review marketplace orders, customer payments, and fulfillment statuses.
