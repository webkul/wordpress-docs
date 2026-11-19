---
title: Vendor Order Management – Seller Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html
---

# Vendor Order Management

In **WooCommerce Multi-Vendor Marketplace**, vendors have complete control over their incoming orders. Vendors can track new orders, filter them by fulfillment status, inspect line items and commission breakdowns, upload personalized tax invoices, update order statuses, verify store pickup security codes, and process refunds directly from their seller panel.

<a class="doc-image-link" href="./assets/vendor-orders-list-new.png"><img src="./assets/vendor-orders-list-new.png" alt="Vendor Order History List" /></a>

---

## Accessing Order History

Vendors can access their full order history from the dedicated seller panel:

1. Log in to your **Vendor Account**.
2. In the left navigation menu, navigate to **Sales > Order History**.
3. You will arrive at the main **Order History** page (`/seller/vendor-orders/`).

::: tip Admin Clause: Individual Vendor Settings & Order Approval
Marketplace administrators have the capability to manage individual rules and privileges for each seller under [Miscellaneous Settings (Vendor Level)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-management-and-product-assignment.html#miscellaneous-settings-vendor-level).

If the administrator has activated the **Order Approval** clause for a specific vendor:
- Incoming customer orders will **only appear in the vendor's Order History after administrator review and approval**.
- Order notifications and buyer communication are released only after the admin approves the transaction.
- If a recently placed customer order is not yet visible in your **Order History**, it may be pending administrative approval as configured for your vendor profile.
:::

---

## Order Status Summary Cards & Quick Filters

At the top of the **Order History** page, vendors can see quick KPI summary cards showing real-time counts for every order status:

- **All Orders**: Total count of all orders containing your products (e.g., `25 All Orders`).
- **Processing**: Orders that are paid and awaiting shipment or fulfillment (e.g., `8 Processing`).
- **Completed**: Orders that have been delivered or fulfilled (e.g., `13 Completed`).
- **Pending payment**: Orders placed but waiting for customer payment confirmation (e.g., `0 Pending payment`).
- **Cancelled**: Orders cancelled by the customer or store admin (e.g., `2 Cancelled`).
- **Refunded**: Orders where funds have been returned to the customer (e.g., `0 Refunded`).

::: tip Instant One-Click Filtering
Click on any status card to filter the order table immediately. The active card is highlighted with a blue border, and the URL updates accordingly (for example, `/seller/vendor-orders/filter/processing/`). Click **All Orders** to return to the full list.
:::

---

## Search, Sort, and Advanced Filtering

Vendors can quickly find specific orders using search, sorting, and the slide-out filter drawer:

### Quick Search
- Enter an **Order ID** (e.g., `1171`) or **Product Name** in the **Search Orders/Products** input box.
- Press **Enter** or click the search icon to view matching results instantly.

### Sort By
Use the **Sort By** dropdown menu to reorder your order list:
- **Newest First**: Displays recently placed orders at the top (default).
- **Price - Low to high**: Sorts orders by gross amount in ascending order.
- **Price - High to low**: Sorts orders by gross amount in descending order.
- Click **Sort** to apply the selected order.

### Advanced Filter Drawer
Click the **Filter** button to open the slide-out filter drawer. This drawer allows vendors to combine multiple criteria:

<a class="doc-image-link" href="./assets/vendor-orders-filter-drawer.png"><img src="./assets/vendor-orders-filter-drawer.png" alt="Advanced Filter Drawer" /></a>

| Filter Field | Description |
| :--- | :--- |
| **Order Id** | Search by exact order number (e.g., `1171`). |
| **Status** | Filter by order status (*All Orders*, *Processing*, *Completed*, *Pending payment*, *Cancelled*, *Refunded*). |
| **Date** | Quick presets: *Today*, *Yesterday*, *This Week*, *This Month*, *Last Month*, *Last 3 Months*, *Last 6 Months*, *This Year*. |
| **Custom Date Range** | Specify a custom range using **From date** and **To date** fields. |
| **Email** | Filter orders by the customer's billing email address. |
| **Customer** | Filter orders by customer's first or last name. |
| **Items** | Filter by item quantity range (**Minimum items** to **Maximum items**). |
| **Seller Earn** | Filter by vendor net earnings range (**Minimum seller earn** to **Maximum seller earn**). |
| **Payment** | Filter by payment gateway (*All payment methods*, *Cash on delivery*, *Check payments*, *Direct bank transfer*, *PayPal*). |
| **Shipment** | Filter by shipping method (*All shipping methods*, *Flat rate*, *Free shipping*, *Store Pickup*). |
| **Gross Amt.** | Filter by total order value (**Minimum gross amount** to **Maximum gross amount**). |
| **Discount** | Filter by coupon discount applied (**Minimum discount** to **Maximum discount**). |
| **Commission** | Filter by platform commission charged (**Minimum commission** to **Maximum commission**). |

Click **Apply Filters** at the bottom of the drawer to view filtered results.

---

## Order History Table Overview

The main table presents all relevant order details in an organized format:

| Column | Description |
| :--- | :--- |
| **Order ID** | The unique order number (e.g., `#1171`). |
| **Order Date** | The date and exact time the order was placed by the customer. |
| **Order Status** | Current fulfillment state (e.g., `Processing`, `Completed`, `On hold`, `Cancelled`). |
| **Total Items** | Number of items purchased from the vendor's catalog in this order. |
| **Customer Name** | Full name of the customer. |
| **Withdraw Status** | Payout readiness of the funds for this order: <br>• **Available**: Funds can be withdrawn.<br>• **Requested**: Payout request submitted to admin.<br>• **Withdrawn**: Payout completed. |
| **Customer Address** | Full shipping or billing address of the customer. |
| **Total Amount** | The net amount credited to the vendor for this order after commission deductions. |
| **Action** | Action links: <br>• **View**: Opens full order details (`/seller/vendor-orders/{order_id}/`).<br>• **Store Pickup**: Quick access to pickup details for local collection orders. |

::: note Pagination
Vendors can navigate through multiple pages of orders using the page numbers (`1`, `2`) and arrow controls (`>`, `>|`) located below the table.
:::

---

## View Order Details

To inspect an order, click the **View** button in the **Action** column of any order row.

The single order view (`/seller/vendor-orders/{order_id}/`) provides comprehensive information and actions:

- **Back to orders**: Click this button at the top left to return to the **Order History** list.
- **Top Actions**: Action buttons located in the top-right corner:
  - **Refund**: Toggles the manual refund form for eligible items.
  - **Print Invoice**: Opens a print-friendly invoice in a new tab.
- **Order Notification Banner**: Highlights the order number, placement date, and current status (e.g., *Order #1171 was placed on October 21, 2026 and is currently Processing*).

### Order Items & Financial Breakdown

The items table displays each purchased item, associated SKU, quantity, and marketplace commission breakdown:

<a class="doc-image-link" href="./assets/vendor-order-items-summary.png"><img src="./assets/vendor-order-items-summary.png" alt="Order Items and Commission Summary" /></a>

- **Product & SKU**: Product title, variation, SKU, item quantity (`× 1`), and seller attribution.
- **Subtotal**: Product total before deductions.
- **Payment Method**: Gateway selected by the buyer (e.g., *Cash on delivery*, *PayPal*).
- **Admin Commission**: Marketplace fee deducted by the platform administrator.
- **Total**: Net earnings transferred to the vendor for this order.

### Customer Details

Displays essential contact and delivery details:
- **Email**: Customer's contact email.
- **Telephone**: Customer's phone number for delivery coordination.
- **Billing Address**: Registered billing address of the buyer.
- **Shipping Address**: Delivery destination for the items.

### Shipments (Courier Dispatch Tracking)

If items were dispatched through integrated courier fulfillment or manual carriers, the **Shipments** section displays:
- Shipment sequence and carrier method (e.g., *Shipment #1 — Fulfilment Carriers*).
- Dispatch timestamp.
- Dispatched product SKU and quantity.
- **Carrier Title** and **Tracking Number**.

---

## Upload Custom Invoice

Vendors can upload their personalized tax invoice file directly from the order details page if enabled by the platform administrator.

### Vendor Invoice Upload Steps

1. In the **Order Details** page, locate the **Vendor Invoices** section above the items table.
2. Enter a descriptive **Invoice Name** (e.g., `Tax-Invoice-INV1171`).
3. Click **Choose File** and select your invoice document (`PDF`, `JPG`, `PNG`, or `DOCX`) from your device.
4. Click **Save**.
5. Once saved, the invoice appears in the invoice table with:
   - **Invoice Name**
   - **Download Button**: Downloads the file to your computer.
   - **View Button**: Opens the file in a new browser tab.
   - **Delete Button**: Deletes the file if corrections are needed.

::: tip Vendor Invoice Upload Requirements
- **Admin Permission**: The marketplace admin must enable **Allow For Vendor** in [Configuration – Vendor Invoice](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-invoice.html).
- **Allowed Formats & Limits**: Invoices must match allowed file extensions and stay within the maximum file size limit (default: `5000 KB`).
- **Automatic Delivery**: If **Attach in mail** is enabled in marketplace settings, your uploaded invoice is automatically attached to order emails sent to the customer.
:::

---

## Update Order Status

Vendors can update the fulfillment status of their orders directly from the **Order Status** card:

1. Scroll to the **Order Status** section on the order details page.
2. Click the **Status** dropdown menu and select the new status:
   - **Pending payment**: Awaiting payment confirmation.
   - **Processing**: Payment received; order is ready for preparation and packing.
   - **On hold**: Order paused pending stock check or verification.
   - **Completed**: Order shipped, delivered, or picked up.
   - **Cancelled**: Order cancelled.
   - **Refunded**: Order refunded.
   - **Failed**: Payment failed.
   - **Draft**: Order draft state.
3. Click **Save** to commit the change.
4. The status update is automatically logged in the **Order Notes** section.

---

## Store Pickup OTP Verification

For orders placed with the **Store Pickup** shipping method, vendors verify customer collection directly from the order details page:

<a class="doc-image-link" href="./assets/vendor-order-pickup-verification.png"><img src="./assets/vendor-order-pickup-verification.png" alt="Store Pickup Verification Section" /></a>

1. Locate the **Pickup verification** section on the order page.
2. Review the store location address (e.g., *Aurora Athletics · 1420 SE Water Avenue, Suite 3, Portland, OR*).
3. Click **Send code**. The system generates a secure one-time verification PIN (OTP) and sends it directly to the customer's registered email address.
4. When the customer arrives at the store counter:
   - Ask the customer for the verification code received on their phone or email.
   - Enter the code into the verification input field and click **Verify code**.
5. Once verified, the order can safely be marked as **Completed**.

::: tip Security Advantage & Dedicated Guide
Store pickup OTP verification protects vendors against unauthorized collections and guarantees that only the verified buyer collects the merchandise.

For comprehensive instructions on managing local pickup orders, utilizing the search and filter drawer on `/seller/store-pickup/`, and delegating permissions to counter cashiers, refer to the [Vendor Store Pickup Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-store-pickup.html).
:::

---

## Generate Refund (Vendor End)

Vendors can generate refund requests for eligible orders directly from the order page:

### Steps to Generate a Refund

1. Open the order in **View** mode (`/seller/vendor-orders/{order_id}/`).
2. Click the **Refund** button in the top action bar. The button toggles to **Cancel**, and refund input columns appear in the items table.

<a class="doc-image-link" href="./assets/vendor-order-refund-interface.png"><img src="./assets/vendor-order-refund-interface.png" alt="Vendor Order Refund Interface" /></a>

3. Configure the refund details:
   - **Refund Quantity**: Enter the number of units to refund for each product line. The refund amount updates automatically.
   - **Refund Reason (Optional)**: Enter an explanation for the refund (e.g., *Customer requested cancellation*, *Item defective*).
   - **Restock refunded items**: Check this box if you want the refunded units added back into your available product stock.
   - **Refund Amount**: Review the calculated total refund amount.
4. Click **Refund Manually** to finalize the refund.

### Refund Confirmation
- Upon submission, a confirmation message **“Refunded successfully”** is displayed.
- The refunded line items and amounts are updated under the **Order Total** section.
- A permanent log entry is added to the **Order Notes**.

---

## Print Invoice

Vendors can generate a clean, printable customer invoice at any time:

1. Click the **Print Invoice** button in the top-right corner of the order details page.
2. The print invoice view opens in a new browser window (`/vendor/invoice/{encoded_order_id}`).
3. Vendors can preview the invoice, save it as a PDF, or send it directly to their printer.

For a comprehensive guide covering the full invoice layout, itemized commission calculations, print/PDF export, and custom tax invoice uploads, see the dedicated [Vendor Invoice User Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-invoice-view.html).

---

## Order Notes Timeline

The **Order Notes** card records a complete, chronological audit trail of all actions related to the order:

- **Customer Notification Logs**: Records transactional emails dispatched to the buyer.
- **Courier & Pickup Tracking**: Displays scheduled carrier collections, tracking numbers, and dispatch timestamps.
- **Stock Movements**: Records automated stock deductions and reservation holds (e.g., *Stock levels reduced: Aurora Training Tee (23→22)*).
- **Status History**: Logs every status change made by the vendor or system administrators.

---

## Schedule Pickup & Courier Fulfilment

For orders shipped with non-integrated shipping methods—such as **Free Shipping** or **Flat Rate**—vendors can record courier dispatch details and provide tracking numbers to customers directly from the order list:

- Eligible orders display a **Schedule Pickup** action link in the order history.
- Vendors review remaining quantities to ship, choose from administrator-approved couriers (e.g., DHL Express, FedEx Ground) or the manual **Self Ship** fallback, enter the parcel **Tracking ID**, and schedule the collection.
- Upon submission, an automated **Customer Note** is added to the order, triggering an email notification to the buyer containing the courier name and tracking code.

For complete administrative setup, carrier options, and staff capabilities, refer to the [Fulfilment Carriers Guide](https://wpdoc.webkul.com/documentation/fulfilment-carriers).

---

## Summary

In WooCommerce Multi-Vendor Marketplace, the vendor order management workflow enables sellers to:

- Access and review all store orders under **Sales > Order History**.
- Understand administrative clauses such as **Order Approval** configured individually under [Miscellaneous Settings (Vendor Level)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-management-and-product-assignment.html#miscellaneous-settings-vendor-level).
- Track order volumes instantly through **Order Status KPI Cards** (All Orders, Processing, Completed, Pending payment, Cancelled, Refunded).
- Filter orders with the **Search bar**, **Sort By dropdown**, and the **12-parameter Advanced Filter Drawer**.
- Inspect complete financial summaries showing **Subtotal**, **Payment Gateway**, **Admin Commission**, and **Net Seller Earnings**.
- Upload custom store invoices and print official marketplace order receipts.
- Update fulfillment statuses and securely verify local collections with **Store Pickup OTP Verification**.
- Process manual refunds with optional automated inventory restocking.
- Review transparent operational logs in the chronological **Order Notes** timeline.
