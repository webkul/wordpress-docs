---
title: Vendor Invoice – Seller Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-invoice-view.html
---

# Vendor Invoice

In **WooCommerce Multi-Vendor Marketplace**, vendors can generate, preview, and print clean invoices for every order they receive. The **Vendor Invoice** acts as an official record of the transaction. It provides sellers with itemized order data, buyer contact details, shipping and billing addresses, and an exact financial breakdown showing platform commissions and net seller earnings.

Vendors can print the invoice immediately for packing slips, save it as a digital PDF file, or upload their own company-branded tax invoices directly to the order.

<a class="doc-image-link" href="./assets/vendor-invoice-view-full.webp"><img src="./assets/vendor-invoice-view-full.webp" alt="Vendor Order Invoice View Full Page" /></a>

---

## Workflow Overview

Follow this straightforward 6-stage progression to locate an order, generate its invoice, verify earnings, and print packaging documentation:

<div class="wkmp-workflow-pipeline">
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 01</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Seller Login</div>
    <p class="wkmp-workflow-step__desc">Sign in with your vendor account credentials.</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 02</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Order History</div>
    <p class="wkmp-workflow-step__desc">Navigate to <strong>Sales &gt; Order History</strong>.</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 03</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Open Order</div>
    <p class="wkmp-workflow-step__desc">Select the order (e.g., <strong>#1171</strong>) to view details.</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 04</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Print Invoice</div>
    <p class="wkmp-workflow-step__desc">Click <strong>Print Invoice</strong> in the top action bar.</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 05</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Review Data</div>
    <p class="wkmp-workflow-step__desc">Verify buyer info, itemized products, and net total.</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 06</span>
    </div>
    <div class="wkmp-workflow-step__title">Print / PDF</div>
    <p class="wkmp-workflow-step__desc">Click print icon or export digital PDF file.</p>
  </div>
</div>

| Step | Workflow Stage | Screen / Location | Operational Action |
| :---: | :--- | :--- | :--- |
| **01** | **Seller Authentication** | `/wp-login.php` | Sign in to the marketplace using your registered vendor credentials. |
| **02** | **Access Orders Registry** | `/seller/vendor-orders/` | Go to **Sales > Order History** to view all customer orders assigned to your shop. |
| **03** | **Open Order Details** | `/seller/vendor-orders/1171/` | Click the specific **Order ID** link or the **View** button. |
| **04** | **Trigger Invoice View** | Order Details Header Action | Click the **Print Invoice** button located in the top-right action bar. |
| **05** | **Review Items & Commission** | `/vendor/invoice/{order_id}` | Check buyer details, product line items, commission deductions, and net payout. |
| **06** | **Print or Save as PDF** | Invoice Header Bar | Click the printer icon to print a physical packing slip or save a digital PDF. |

---

## Vendor Invoice Summary Table

The table below outlines all key sections and details available on the vendor order invoice:

| Section | Included Information | Purpose |
| :--- | :--- | :--- |
| **Header Actions** | Print icon button, Invoice Title with Order ID (e.g. `Invoice Of Order #1171`) | Allows one-click browser printing or instant export to PDF format. |
| **Seller Information** | Shop Name, Seller Name, City/Country, Contact Email, Store Profile Link | Displays vendor identity and public store link for business records. |
| **Order Information** | Order Date, Order ID, Payment Method, Shipping Method / Store Pickup | Confirms when the order was placed and how it was paid and delivered. |
| **Buyer Details** | Customer Full Name, Email Address, Telephone Number | Provides seller with direct customer contact details for fulfillment. |
| **Ordered Products** | Product Thumbnail, Product Title, Variation attributes, Quantity, Unit Price, Total | Lists all products sold by this vendor in the order. |
| **Financial Summary** | SubTotal, Discounts, Order Fees, Shipping, Admin Commission, Total | Transparent breakdown showing commission deductions and net vendor payout. |
| **Addresses** | Customer Billing Address & Customer Shipping Address | Clear two-column layout for packaging slips and delivery verification. |

---

## How to Access the Vendor Invoice

Follow these simple steps to view and generate an invoice for any order:

1. Log in to your **Vendor Account**.
2. From the left navigation menu, navigate to **Sales > Order History** (`/seller/vendor-orders/`).
3. Locate the order you want to review and click the **Order ID** link or the **View** button.
4. On the **Order Details** screen (for example, `/seller/vendor-orders/1171/`), look at the top-right header section.
5. Click the **Print Invoice** button.

<a class="doc-image-link" href="./assets/vendor-order-invoice-actions.webp"><img src="./assets/vendor-order-invoice-actions.webp" alt="Vendor Order Details Header with Print Invoice Button" /></a>

The invoice view opens automatically in a clean, dedicated browser tab at `/vendor/invoice/{encoded_order_id}`.

::: tip Fast Direct Access
The **Print Invoice** button opens the invoice in a new browser window or tab. This allows you to inspect or print the receipt without losing your place in the seller order management workflow.
:::

---

## Invoice Sections Explained

The vendor invoice is organized into clear, structured sections designed for both digital viewing and physical paperwork:

### 1. Order & Seller Information

At the top of the invoice, two information cards present seller and order details side by side:

- **Seller Information (Left Column)**:
  - **Shop Name**: Your official store display name (e.g., *Aurora Athletics*).
  - **Seller Contact**: Vendor owner name and business location (e.g., *Portland, US*).
  - **Email**: Vendor contact email address.
  - **Profile Link**: Live clickable link to your public storefront.
- **Order Information (Right Column)**:
  - **Order Date**: The exact date the customer placed the order (e.g., *October 21, 2026*).
  - **Order ID**: The marketplace order reference number (e.g., *#1171*).
  - **Payment Method**: The checkout payment option selected by the customer (e.g., *Cash on delivery*, *Credit Card*, *PayPal*).
  - **Shipping Method**: The chosen delivery service or pickup location (e.g., *Store Pickup: Aurora Athletics*).

---

### 2. Buyer Details

This section gives vendors the contact details required for order fulfillment and customer communication:

- **Customer Name**: Full name of the customer who placed the order.
- **Customer Email**: Direct email address for order notifications.
- **Telephone**: Contact phone number, formatted as a clickable telephone link for quick mobile communication.

---

### 3. Product Breakdown Table

The itemized product table displays every item belonging to the seller within that order:

- **Product**: Shows a high-quality product image thumbnail, the product title, selected variation options (such as size or color), and the **Sold By** seller link.
- **Quantity**: The number of units purchased by the customer.
- **Unit Price**: The standard unit price per item.
- **Total**: The line item subtotal (Quantity × Unit Price).

---

### 4. Financial Calculations & Net Earnings

Below the items table, the invoice shows an accurate summary of order financials:

<a class="doc-image-link" href="./assets/vendor-invoice-financial-summary.webp"><img src="./assets/vendor-invoice-financial-summary.webp" alt="Itemized Table and Financial Summary on Vendor Invoice" /></a>

The financial summary includes:

- **SubTotal**: Combined total price of all items sold by the vendor.
- **Discount** *(if applicable)*: Any coupon or promotional discount deducted from the items.
- **Shipping** *(if applicable)*: Delivery fee collected for the vendor's items.
- **Commission**: The platform administrator commission deducted from the seller's earnings, clearly shown with a minus sign (e.g., `- $4.08`).
- **Tax** *(if applicable)*: Any applicable sales tax or VAT collected.
- **Refunded** *(if applicable)*: Any refunded amount, with the original subtotal struck through for auditing clarity.
- **Total**: The **Net Vendor Earning** for the order. This is the exact amount payable to the vendor after commission deductions.

$$\text{Net Vendor Total} = \text{SubTotal} + \text{Shipping} + \text{Tax} - \text{Admin Commission} - \text{Refunds}$$

---

### 5. Billing and Shipping Addresses

At the bottom of the invoice, the customer's delivery details are displayed in a clean, two-column table:

- **Billing Address**: The customer's official billing address on file with their payment provider.
- **Shipping Address**: The delivery destination for physical package dispatch.

---

## How to Print or Save as PDF

The invoice view includes a built-in print action button:

<a class="doc-image-link" href="./assets/vendor-invoice-header-action.webp"><img src="./assets/vendor-invoice-header-action.webp" alt="Print Invoice Button on Vendor Invoice View" /></a>

### Printing a Paper Copy

1. In the top-right corner of the invoice page, click the **Print** icon button.
2. Your browser's print dialog opens immediately.
3. Select your local printer, choose the paper size (A4 or Letter), and click **Print**.

### Saving as a Digital PDF

1. Click the **Print** icon button.
2. In the printer destination dropdown, select **Save as PDF** (or **Microsoft Print to PDF**).
3. Choose your desired orientation (Portrait is recommended).
4. Click **Save** and select a folder on your computer to store the invoice file.

::: info Clean Print Styling
The invoice is automatically styled for print. Browser headers, footers, website menus, and button icons are hidden on printed pages to ensure a clean, corporate invoice.
:::

---

## Custom Vendor Invoice Upload

In addition to viewing and printing the system-generated invoice, vendors can upload their own external tax invoices or accounting documents (such as QuickBooks, Xero, or government tax e-invoices).

### Where to Find Invoice Upload

On the single order details page (`/seller/vendor-orders/{order_id}/`), locate the **Vendor Invoices** box positioned directly below the order status banner:

<a class="doc-image-link" href="./assets/vendor-invoice-upload-box.webp"><img src="./assets/vendor-invoice-upload-box.webp" alt="Vendor Invoices Custom Upload Meta Box" /></a>

### How to Upload a Custom Invoice

1. In the **Invoice Name** field, type a clear title for your document (for example, `VAT-Tax-Invoice-1171`).
2. Click the **Choose File** button and select your invoice file from your device (supported formats: PDF, PNG, JPG, DOCX).
3. Click the **Save** button.
4. Once saved, the document appears in the uploaded invoices table with the following options:
   - **Download Invoice**: Download the saved file back to your device.
   - **View Invoice**: Open the file in a new browser tab for verification.
   - **Delete Invoice**: Remove an outdated or incorrect invoice file.

::: tip Automatic Customer Delivery
If the marketplace administrator has enabled **Attach in mail** in [Configuration – Vendor Invoice](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-invoice.html), your uploaded custom invoice is automatically attached to the order notification email sent to the customer.
:::

---

## Related Guides & Settings

- **[Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html)**: Comprehensive guide on tracking orders, changing statuses, filtering, and processing refunds.
- **[Configuration – Vendor Invoice](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-invoice.html)**: Store administrator guide for invoice permissions, allowed file extensions, and file size limits.
- **[Vendor Payout Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-payout-management.html)**: Learn how vendor earnings from completed invoices are tracked, requested, and disbursed.
- **[Store Pickup Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/store-pickup-settings.html)**: Instructions on configuring local store collection and pickup verification codes.
