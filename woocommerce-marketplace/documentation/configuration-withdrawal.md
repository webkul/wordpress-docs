---
title: Configuration – Withdrawal
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-withdrawal.html
---

# Configuration – Withdrawal

<a class="doc-image-link" href="./assets/withdrawal-settings.webp"><img src="./assets/withdrawal-settings.webp" alt="Admin Withdrawal Settings" /></a>

The **Withdrawal** feature allows vendors to withdraw their earnings using configured payment methods.

The admin can configure this from:

**Marketplace > Settings > Withdrawal**

**Direct Admin URL**:
```text
wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_withdrawal
```

---

## Withdrawal Overview

- Enables vendors to withdraw their available balance
- Supports both manual and automatic withdrawal methods
- Admin can define limits, charges, and payment methods
- Helps maintain automated financial operations and transparent seller bookkeeping
- Automates fee deductions to offset payment processor transaction charges

---

## Withdrawal Settings Summary

The table below provides a quick reference for each setting on the Withdrawal configuration page:

| Setting Label | Input Type | Default Setting | Purpose |
| :--- | :--- | :--- | :--- |
| **Enable Withdrawal** | Toggle Switch | Enabled | Turns the vendor withdrawal capability on or off across the marketplace. |
| **Withdrawal Limit (Minimum In $)** | Number Field | `50` | Minimum earnings balance required before a vendor can create a manual withdrawal request. |
| **Withdrawal Type** | Dropdown Selector | `Manual` | Sets whether payouts are initiated manually by vendors or processed automatically on schedule. |
| **Allow Request Payment From Order Listing** | Toggle Switch | Disabled | Adds a dedicated "Request Payment" button on completed orders in the vendor's order history. |
| **Withdrawal Methods** | Toggle Switches (Multiple) | Bank Transfer, PayPal, UPI Enabled | Controls which payout channels are available for vendors to receive their earnings. |
| **Withdrawal Charges** | Number Fields (Fixed + %) | Configured per Method | Sets flat and percentage fees deducted from payouts to cover transaction fees. |

---

## Withdrawal Settings

### Enable Withdrawal

- Toggle to enable or disable the withdrawal functionality for vendors

- **How It Works**:
  - When enabled, vendors gain access to the **Withdrawal** section in their vendor dashboard, allowing them to track withdrawable balances and submit payout requests.
  - When disabled, all withdrawal features are deactivated for vendors. Sellers cannot request payouts from the storefront, though existing transaction records remain intact in the admin ledger.

---

### Withdrawal Limit

- Minimum balance required to create a withdrawal request
- **Note:** This limit does not apply to automatic withdrawals

- **Default Value**: `50` (or equivalent in your active store currency)
- **How It Works**:
  - Vendors must accumulate earnings equal to or greater than this specified amount before they can submit a manual payout request.
  - Helps prevent high administrative overhead and excessive transaction fees caused by micro-withdrawals.

::: tip Automatic Payouts Exception
The minimum withdrawal limit applies **only** to manual withdrawal requests. When the marketplace runs automatic monthly payouts, all eligible settled balances are processed regardless of whether they meet this threshold.
:::

---

### Withdrawal Type

- Choose how withdrawals are processed:

#### Manual
- Vendors manually create withdrawal requests
- Vendors can:
  - Select eligible completed orders
  - Update withdrawal payment method
  - View applicable charges
  - See the final withdrawable amount before submitting

::: tip Vendor-Side Withdrawal
For step-by-step instructions on how sellers create and manage payout requests from their portal, see [Vendor Transaction Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-transaction-management.html).
:::

#### Allow Request Payment From Order Listing
- **Input Type**: Toggle Switch
- **Default Value**: Disabled
- **Live Help Text**: *Vendors get a Request Payment button on each completed order in their order list. Works with the Manual withdrawal type only.*
- **How It Works**:
  - When enabled alongside the **Manual** withdrawal type, a dedicated **Request Payment** action button appears directly next to completed orders in the vendor's **Orders History** (`vendor-orders`) list.
  - Sellers can quickly initiate payout requests for individual completed orders without manually navigating through the main withdrawal creation interface.

#### Automatic
- Withdrawal requests are auto-generated:
  - For all active vendors
  - On the last date of every month
- Vendors must select a default payment method
- Withdrawal charges (if any) are applied automatically

- **How It Works**:
  - The system automatically triggers a monthly batch payout calculation on the last calendar day of each month.
  - Payout requests are compiled for all active marketplace vendors who have accumulated withdrawable earnings and selected a default payment method.
  - Admin receives compiled payout lists ready for one-click bulk settlement via **Marketplace > Vendors Payout**.

---

### Withdrawal Method

- Enable or disable available withdrawal payment methods

The marketplace supports three primary payout channels that admins can enable or disable independently:

1. **Bank Transfer**
   - Enables direct bank wire transfers (ACH, NEFT, RTGS, SEPA, or BACS).
   - Vendors enter their Account Holder Name, Bank Name, Account Number, and Routing / IFSC / SWIFT Code in their profile.
2. **Paypal**
   - Enables electronic payouts directly to the vendor's registered PayPal account.
   - Vendors enter their PayPal email address in their profile.
3. **UPI**
   - Enables instant mobile payments through Unified Payments Interface.
   - Vendors provide their UPI Virtual Payment Address (VPA) / UPI ID (e.g., `vendor@bank`).

---

### Withdrawal Charges

- Define charges for each withdrawal method as required

To cover merchant processing fees or platform handling fees, the administrator can configure custom fee rules for each active payment method using a combined **Fixed ($) + Percentage (%)** model:

| Payment Method | Fixed Amount (`$`) | Percentage Amount (`%`) | Live Site Default Example |
| :--- | :--- | :--- | :--- |
| **Bank Transfer** | Flat fee per request | Percentage of withdrawal amount | `$0` + `2%` |
| **Paypal** | Flat fee per request | Percentage of withdrawal amount | `$0.30` + `2.9%` |
| **UPI** | Flat fee per request | Percentage of withdrawal amount | `$0` + `1%` |

#### Calculation Example

If a vendor requests a **$200** payout via **PayPal** with configured charges of **$0.30 + 2.9%**:
- **Gross Request Amount**: $200.00
- **Percentage Charge (2.9%)**: $5.80
- **Fixed Charge**: $0.30
- **Total Deduction**: $6.10 ($0.30 + $5.80)
- **Net Amount Disbursed to Vendor**: **$193.90** ($200.00 - $6.10)

Vendors see a full transparent breakdown of applied charges before submitting their withdrawal request.

---

## Save Configuration

- Click **Save** to apply the withdrawal settings

1. Review your configured withdrawal limits, types, active methods, and charge structures.
2. Click the primary **Save** button at the bottom of the page.
3. A success confirmation confirms that the updated withdrawal policies are now live across your marketplace.

---

## Admin Payout Processing & Settlement

Once vendors submit withdrawal requests (or when automatic monthly requests generate), the marketplace administrator can review and settle payments from:

**Marketplace > Vendors Payout**

- **Centralized Dashboard**: Track total payable withdrawals, unpaid payout totals, and unpaid vendor counts.
- **Filter and Search**: Easily locate requests by vendor name, status (*Pending*, *Paid*), or unique Withdrawal ID.
- **Bulk Actions**: Select multiple pending requests and execute **Mark as Paid** or **Export CSV** for accounting records.
- **Individual Actions**: Click **Pay Now** to process and approve specific seller transactions immediately.

---

## Related Documentation

- [Vendor Transaction Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-transaction-management.html) – Vendor portal guide for tracking balances, withdrawal requests, and payouts.
- [Vendors Payout Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-payout-management.html) – Admin guide to reviewing and disbursing vendor withdrawal requests.
- [Configuration – Endpoints](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-endpoints.html) – Manage URL slugs for vendor dashboard withdrawal and order pages.
- [Configuration – Vendor Flags](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-flags.html) – Configure customer reporting rules and flag reasons.
- [Configuration – Google Analytics](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-google-analytics.html) – Set up GA-4 measurement and e-commerce tracking.
- [Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html) – Guide on how vendors process customer purchases and track fulfillment.
