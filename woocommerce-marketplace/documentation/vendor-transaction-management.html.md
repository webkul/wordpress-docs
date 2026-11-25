---
title: Vendor Transaction Management
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-transaction-management.html
---

# Vendor Transaction Management

The **Vendor Transaction Management** section provides marketplace sellers with an intuitive financial center to track order earnings, view marketplace commissions, monitor payout statuses, configure payment withdrawal methods, and submit withdrawal requests directly from the dedicated seller portal.

<a class="doc-image-link" href="./assets/vendor-transactions-dashboard.webp"><img src="./assets/vendor-transactions-dashboard.webp" alt="Vendor Transactions and Earnings Dashboard" /></a>

---

## Access Transactions & Earnings

Vendors can access their financial records at any time:
1. Log in to the **Seller Dashboard**.
2. From the left navigation menu, expand **Sales** and select **Transactions & Earnings** (`/seller/vendor-transactions/`).
3. You can click the **Proceed to Withdraw** button in the top header to navigate directly to the withdrawal management section.

::: tip Classic My Account Layout
**Using the traditional WooCommerce My Account interface?**  
If your store operates on the classic tabbed portal (**My Account → Transactions**) instead of the dedicated seller dashboard, refer to the [Classic Transaction Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/classic-transaction-management.html) guide.
:::

---

## Financial Overview Cards

At the top of the dashboard, five real-time summary cards provide a quick snapshot of the vendor's financial standing:

<a class="doc-image-link" href="./assets/vendor-transactions-financial-cards.webp"><img src="./assets/vendor-transactions-financial-cards.webp" alt="Financial Overview Metric Cards" /></a>

| Metric Card | Description |
| :--- | :--- |
| **Total Earning** | Total gross revenue accumulated from all completed marketplace orders. |
| **Total Withdraw** | Cumulative payout amount successfully transferred to the vendor to date. |
| **Total Pending Withdraw** | Current balance available for withdrawal or currently awaiting administrator approval. |
| **Total Refunded** | Total deductions resulting from cancelled orders or customer refund claims. |
| **Last Withdraw** | Exact payout amount processed in the seller's most recent withdrawal. |

---

## Searching and Sorting Transactions

Vendors can filter their transaction records to locate specific payout entries or audit monthly sales:

- **Search Bar**: Enter a transaction ID, order number, or customer name to find matching entries immediately.
- **Sort By Dropdown**: Organize transactions by price or timestamp:
  - **Newest First** *(Default)*: Lists recent transactions at the top.
  - **Price - Low to high**: Displays entries starting from lowest amounts (including fee deductions) to highest.
  - **Price - High to low**: Displays highest-earning transactions first.

<a class="doc-image-link" href="./assets/vendor-transactions-search-and-sort.webp"><img src="./assets/vendor-transactions-search-and-sort.webp" alt="Searching and Sorting Transactions Toolbar" /></a>

---

## Transaction History Table

The transactions table displays all financial credits and debits logged for the seller's store:

<a class="doc-image-link" href="./assets/vendor-transactions-list.webp"><img src="./assets/vendor-transactions-list.webp" alt="Vendor Transactions History Table" /></a>

| Column | Description |
| :--- | :--- |
| **Transaction ID** | Unique reference number assigned to each transaction. |
| **Transaction Date** | The date and time the financial transaction was recorded. |
| **Customer Name** | Name of the buyer who placed the order (or `Guest` for system fee adjustments). |
| **Total Amount** | Net amount credited to your balance or fee deducted for processing. |
| **Action** | Click **View** to open the itemized breakdown of the transaction. |

::: note Transaction ID Notation
The system assigns specific prefixes to help vendors easily identify entry types:
- **Order Earnings**: Prefixed with `wc_tr-` for revenues earned from customer orders.
- **Withdrawal Charges**: Prefixed with `wd-charge-` for processing or gateway fee deductions applied to a payout.
:::

---

## Itemized Transaction Details

Clicking **View** on any transaction opens a detailed breakdown page with complete line items and commission calculations.

### 1. Order Earnings Transaction
When viewing an order transaction, sellers can verify:
- **Information Panel**: Transaction Date, Net Amount credited, Transaction Type (`Manual`/system), and Disbursement Method.
- **Order Items Breakdown Table**:
  - **Order Id**: Linked marketplace order number (e.g., `#1091`).
  - **Product Name**: Purchased catalog items.
  - **Quantity**: Units sold.
  - **Total Price**: Gross order item price.
  - **Commission**: Marketplace administrator commission deducted according to store commission rules.
  - **Discount**: Applied promotional discounts, if any.
  - **Subtotal**: Final net earnings credited to the seller's balance.

<a class="doc-image-link" href="./assets/vendor-transaction-order-breakdown.webp"><img src="./assets/vendor-transaction-order-breakdown.webp" alt="Vendor Order Transaction Detail Breakdown" /></a>

### 2. Withdrawal Fee Transaction
When an administrator charges a processing or transfer fee for a withdrawal, a dedicated debit transaction is recorded with a negative amount (e.g., `-$6.35`). This gives vendors complete transparency into bank transfer or payment gateway processing fees.

<a class="doc-image-link" href="./assets/vendor-transaction-fee-breakdown.webp"><img src="./assets/vendor-transaction-fee-breakdown.webp" alt="Vendor Withdrawal Fee Transaction Detail" /></a>

---

## Withdrawal Management

Vendors can access withdrawal settings either by clicking **Proceed to Withdraw** from the transactions dashboard or visiting `/seller/vendor-withdrawal/`.

<a class="doc-image-link" href="./assets/vendor-withdrawal-dashboard.webp"><img src="./assets/vendor-withdrawal-dashboard.webp" alt="Vendor Withdrawal Management Dashboard" /></a>

### Adding Withdrawal Payment Methods
Before requesting payouts, vendors must configure at least one active withdrawal method from the **Add Withdrawal Method** dropdown:

1. **Bank Transfer**:
   - Opens the **Add Bank Details** dialog.
   - Enter Account Holder Name, Account Number, Bank Name, Bank Address, IFSC Code, SWIFT Code, Bank IBAN, and Routing Number.
   - Click **Submit** to store the banking credentials securely.

<a class="doc-image-link" href="./assets/vendor-withdrawal-bank-modal.webp"><img src="./assets/vendor-withdrawal-bank-modal.webp" alt="Add Bank Details Modal" /></a>

2. **UPI**:
   - Opens the **Add UPI Method** dialog.
   - Enter your valid UPI ID (Virtual Payment Address).
   - Click **Submit** to save.

<a class="doc-image-link" href="./assets/vendor-withdrawal-upi-modal.webp"><img src="./assets/vendor-withdrawal-upi-modal.webp" alt="Add UPI Method Modal" /></a>

3. **PayPal**:
   - Enter your PayPal registered email address to receive direct payouts.
   - Displays your configured PayPal withdrawal email address with controls to manage default status or remove credentials.

<a class="doc-image-link" href="./assets/vendor-withdrawal-paypal.webp"><img src="./assets/vendor-withdrawal-paypal.webp" alt="Configured PayPal Withdrawal Method" /></a>

### Managing Saved Payment Methods
For every configured payment method, vendors can:
- **Make Default**: Designates the payment method as the primary destination for automatic payouts.
- **Edit** *(Pencil Icon)*: Modify account information or email addresses.
- **Delete**: Remove obsolete withdrawal channels.

---

## Tracking Recent Withdrawals

The **Recent Withdrawals** table logs all submitted payout requests and their lifecycle statuses:

<a class="doc-image-link" href="./assets/vendor-withdrawal-recent-table.webp"><img src="./assets/vendor-withdrawal-recent-table.webp" alt="Recent Withdrawals Tracking Table" /></a>

| Column | Description |
| :--- | :--- |
| **Withdrawal ID** | Unique system request identifier. |
| **Amount** | Total payout amount requested by the vendor. |
| **Charges** | Processing or gateway fees applied to the withdrawal transfer. |
| **Method** | Payment channel selected (e.g., PayPal, Bank Transfer, UPI). |
| **Status** | Current processing stage: <br>• <span style="color:#059669;font-weight:600;">Paid</span> – Successfully disbursed by admin. <br>• <span style="color:#d97706;font-weight:600;">Pending</span> – Awaiting administrator review and release. |
| **Created At** | Date and time the withdrawal request was submitted. |

---

## Requesting a New Withdrawal

To request a payout of available order earnings:

1. On the **Withdrawals** page, click the **Request Withdrawals** button.
2. The system redirects to the **Make Withdrawal Requests** view (`/seller/vendor-withdrawal/#/requests`).
3. **Select Orders**: Check the boxes next to completed orders you wish to withdraw funds for (or use the master checkbox to select all).
4. Click **Calculate Total** to calculate the aggregate withdrawal amount and view any applicable transaction charges.
5. Click **Make Withdrawal Requests** to confirm and transmit the payout request to the marketplace administrator.
6. Once submitted, return to **Recent Withdrawals** to monitor status updates as the administrator processes your payment.

<a class="doc-image-link" href="./assets/vendor-withdrawal-requests-table.webp"><img src="./assets/vendor-withdrawal-requests-table.webp" alt="Make Withdrawal Requests Screen" /></a>

---

## Summary Workflow

```
Completed Orders
       │
       ▼
Transactions & Earnings List  ──►  Review Order Earnings & Commissions
       │
       ▼ (Proceed to Withdraw)
Withdrawal Dashboard  ──────────►  Configure Payment Method (Bank / UPI / PayPal)
       │
       ▼ (Request Withdrawals)
Select Eligible Orders  ────────►  Calculate Total & Submit Request
       │
       ▼
Admin Approval & Payout  ───────►  Status Updates to "Paid" in Recent Withdrawals
```
