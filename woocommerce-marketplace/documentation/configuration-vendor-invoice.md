---
title: Configuration – Vendor Invoice
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-invoice.html
---

# Configuration – Vendor Invoice

The **Vendor Invoice** feature allows vendors to generate and share invoices for their orders, ensuring transparency between vendors, admin, and customers.

<a class="doc-image-link" href="./assets/admin-invoice.webp"><img src="./assets/admin-invoice.webp" alt="Vendor Invoice" /></a>

The admin can configure this section from:

**Marketplace > Settings > Vendor Invoice**

**Direct Admin URL**:
```text
wp-admin/admin.php?page=wk-marketplace-settings&tab=vendor_invoice
```

---

## Vendor Invoice Overview

- Allows vendors to generate invoices for their orders
- Helps maintain transparency in vendor earnings
- Invoices can be shared with customers as proof of purchase
- Both admin and vendors can send invoices to customers
- Provides verifiable accounting records for local tax, VAT, and business compliance
- Allows vendors to upload branded PDF or digital invoices directly from their dashboard
- Enables marketplace administrators to monitor, upload, download, and delete vendor invoices from the WordPress backend order editor

---

## Vendor Invoice Settings Summary

The table below provides a quick reference for each setting available on the Vendor Invoice configuration tab:

| Setting Label | Input Type | Default Setting | Purpose |
| :--- | :--- | :--- | :--- |
| **Allow For Vendor** | Checkbox | Enabled (Checked) | Allows vendors to upload and manage custom invoices for their orders directly from the vendor dashboard. |
| **Attach in mail** | Checkbox | Enabled (Checked) | Automatically attaches uploaded vendor invoices to customer order notification emails. |
| **Allow File Types** | Multi-Select Dropdown | Blank (All supported types allowed) | Restricts uploaded invoice files to selected extensions (`jpg`, `jpeg`, `png`, `gif`, `pdf`, `doc`, `docx`, `ppt`, `pptx`). |
| **Allow File Size** | Number Field (KB) | `5000` KB (~5 MB) | Sets the maximum file size limit in kilobytes for invoice uploads (Minimum: `10` KB, Maximum: `20000` KB). |
| **Save Changes** | Primary Button | Click to Save | Stores and applies the updated configuration settings immediately across the marketplace. |

---

## Invoice Details Included

A vendor invoice contains the following information:

- Product price
- Vendor commission
- Shipping charges
- Applicable taxes
- Final vendor earnings
- Vendor shop name and seller contact details
- Customer billing and delivery addresses
- Order identification number and transaction date
- Itemized product quantities and subtotal amounts
- Payment gateway method and fulfillment status

---

## Vendor Invoice Settings

### Allow for the Vendor

- Enables vendors to generate and access invoices
- Invoices are available from the vendor dashboard

- **Control Type**: Checkbox (Toggle)
- **Default State**: Enabled (Checked)
- **Live Tooltip**: *"If checked then vendor can upload his invoice."*

#### How It Works:
- **When Enabled**: Vendors see a dedicated **Vendor Invoices** section on their order management page (`Order Details`). Sellers can name their invoice, choose a document from their local device, and save it.
- **When Disabled**: The invoice upload capability is hidden from the vendor dashboard. Vendors cannot attach custom invoices, but administrators can still manage invoices from the backend if necessary.

---

### Attach in the Mail

- Automatically attaches the invoice to order confirmation emails
- Ensures customers receive invoices without manual effort

- **Control Type**: Checkbox (Toggle)
- **Default State**: Enabled (Checked)
- **Live Tooltip**: *"If checked then uploaded invoices will be attach in customer order mail."*

#### How It Works:
- **Automated Delivery**: Once an invoice is uploaded by a vendor or administrator, the file is automatically attached to customer order transactional emails (such as order completed or order processing notifications).
- **Buyer Convenience**: Shoppers receive an official invoice document in their inbox immediately without having to contact customer support or log in to download it.
- **When Disabled**: Invoices are not sent as email attachments; buyers can still view and download them online by logging into their customer account.

---

### Allow File Types

- Defines the supported file formats for invoice uploads
- Common supported formats include:
  - PDF
  - JPG
  - webp

- **Control Type**: Multi-Select Dropdown with inline search (`Select File Types`)
- **Default State**: Blank (All supported formats accepted)
- **Live Tooltip**: *"Allow which file type user can attached invoice. If blank then user can upload any file type."*

#### Supported Format Options:
The dropdown selector includes the following file extensions:
- **Images**: `jpg`, `jpeg`, `png`, `gif`
- **Documents**: `pdf`, `doc`, `docx`
- **Presentations**: `ppt`, `pptx`

::: tip Unrestricted Selection (Blank Field)
If the **Allow File Types** field is left blank with no specific formats selected, the marketplace automatically accepts any of the supported file formats listed above. To restrict uploads strictly to PDF documents, select only `pdf` from the dropdown.
:::

---

### Allow File Size

- Sets the maximum allowed file size for invoice attachments
- Helps manage storage and performance efficiently

- **Control Type**: Number Field (Input measured in Kilobytes - KB)
- **Default Value**: `5000` KB (~5 MB)
- **Allowed Range**: Minimum `10` KB to Maximum `20000` KB (~20 MB)
- **Live Tooltip**: *"Enter file size in KB. default is 5000 KB."*

#### Performance & Storage Protection:
- Prevents vendors from uploading excessively large files that consume server storage space.
- Ensures outgoing emails do not exceed standard mail server attachment size limits (which typically cap attachments between 10 MB and 25 MB).
- **Validation Check**: If an uploaded file exceeds the configured size limit, the system rejects the upload with an error prompt:
  ```text
  File size must not exceed {size} KB.
  ```

---

## Save Configuration

- After configuring the invoice settings, click **Save**
- Changes will apply immediately

- **Button**: Click **Save Changes** (`button button-primary`)
- The system updates the settings group (`wkmpsi-settings-group`) in the database, and the new rules apply instantly across the marketplace without requiring a server reboot or cache refresh.

---

## Vendor Invoice Management Workflow

### 1. Vendor Uploading an Invoice
1. The vendor logs in and navigates to **Vendor Dashboard > Orders**.
2. Opens an order in **View** mode.
3. Under the **Vendor Invoices** section:
   - Enters an **Invoice Name** (e.g., `Tax-Invoice-INV1024`).
   - Clicks **Choose File** and selects the invoice file from their computer.
   - Clicks **Save**.
4. The uploaded invoice appears in the order invoice table with:
   - **Invoice Name**
   - **Download Button** (downloads the file)
   - **View Button** (opens the file in a new browser tab)
   - **Delete Button** (removes the invoice if a correction is needed)

::: tip Vendor Invoice Upload Summary
- **Admin Configuration**: The marketplace admin must enable **Allow For Vendor** in the [Vendor Invoice Settings](#allow-for-the-vendor) for this upload section to appear on the seller dashboard.
- **Workflow Summary**:
  - **1. Access Order**: Navigate to **Vendor Dashboard > Orders** and click **View** on the specific order.
  - **2. Upload Document**: Enter a descriptive **Invoice Name**, select your file (such as a tax-compliant PDF or receipt), and click **Save**.
  - **3. Manage Files**: Use the **Download**, **View**, or **Delete** action buttons directly from the invoice list.
- **Storefront & Fulfillment**: For complete instructions on managing orders, tracking shipments, and handling customer fulfillment, refer to the [Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html) guide.
:::

---

### 2. Admin Managing Invoices from WooCommerce Orders
Marketplace administrators can oversee and manage vendor invoices directly from the WordPress admin panel:

1. Navigate to **WooCommerce > Orders**.
2. Click on the target order to open the edit order screen.
3. In the **Vendor Invoices** meta box:
   - **Select Vendor**: Choose the specific vendor from the order.
   - **Invoice Name**: Enter a name for the document.
   - **Upload File**: Select and upload the file directly on behalf of the vendor.
   - **Actions Table**: View the **Shop Name**, **Invoice Name**, and action icons to **Download**, **View**, or **Delete** any attached invoice.

---

### 3. Customer Downloading Invoices
Customers can easily access their order invoices:

1. Customer logs in and goes to **My Account > Orders**.
2. Clicks **View** on the relevant order.
3. Above the order details table, the **Vendor Invoices** box displays all attached invoices:
   - Displays the **Shop Name** of the seller.
   - Displays the **Invoice Name**.
   - Provides **Download** and **View** buttons for instant access.

---

## Best Practices for Vendor Invoicing

::: tip Key Invoicing Recommendations
- **Enforce PDF Format as Primary**: While image formats (`jpg`, `png`) and office files (`docx`) are supported, configuring **PDF** as the main allowed format ensures invoices render consistently across all mobile and desktop devices and cannot be accidentally edited by buyers.
- **Maintain File Sizes Under 5000 KB**: Keeping the default `5000 KB` (5 MB) limit or setting it to `2000 KB` (2 MB) ensures rapid upload speeds for vendors, conserves server storage, and prevents email delivery failures caused by mail attachment limits.
- **Use Clear Invoice Naming**: Encourage vendors to use clear document titles (such as `INV-[OrderID]-[StoreName].pdf`) to make order records easy for customers and store accountants to identify.
- **Keep Mail Attachment Enabled**: Enabling **Attach in mail** delivers proof of purchase automatically to buyers upon order fulfillment, reducing customer support inquiries.
:::

---

## Related Documentation

- **[Vendor Invoice – Seller Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-invoice-view.html)**: Step-by-step user guide for vendors to view, generate, print, and download order invoices from the seller panel.
- **[Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html)**: Guide on order tracking, order status updates, store pickup verification, and refund management.
