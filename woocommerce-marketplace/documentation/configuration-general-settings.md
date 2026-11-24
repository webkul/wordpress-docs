---
title: Configuration – General Settings
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html
---

# Configuration – General Settings

After successfully installing WooCommerce Marketplace, the admin can configure the core marketplace settings such as vendor registration, approval workflow, default vendor capabilities, and overall marketplace behavior from:

**Marketplace > Settings > General**

<a class="doc-image-link" href="./assets/general-settings.png"><img src="./assets/general-settings.png" alt="Admin Panel" /></a>

---

## General Settings Options

### Default Commission

Configures the default commission structure applied to vendor sales when no custom commission is set for an individual vendor:

- **Fixed Flat Amount (`$`)**: A fixed currency amount deducted per sale for the marketplace admin (e.g., `$0`).
- **Percentage Rate (`%`)**: A percentage deducted from the product price for the marketplace admin (e.g., `12%`).
- **Combined Commission Model (`$ + %`)**: Admins can combine both fixed and percentage values (e.g., `$2 + 10%`) to create a tiered commission rule.
- **Fallback Rule**: Applied globally to all vendor products unless a vendor-specific commission override is set.

#### Calculation Examples

- **Percentage Only (`$0 + 20%`)**:
  - Product Price: **$100**
  - Admin Commission: **$20**
  - Vendor Receives: **$80**
- **Fixed + Percentage (`$2 + 10%`)**:
  - Product Price: **$100**
  - Admin Commission: **$12** ($2 fixed + $10 percentage)
  - Vendor Receives: **$88**

::: info Commission Management & Order Tracking
For detailed instructions on viewing commission breakdowns in marketplace orders, tracking admin earnings versus vendor payouts, and configuring custom vendor-specific commission overrides, see the [Commission Management](./commission-management.html) guide.
:::

---

### Deduct Discount From

Defines how promotional discounts or coupons applied by customers at checkout are deducted between the admin and vendor:

- **Both Vendor Total Amount and Admin Commission Amount**:
  - The discount amount is shared proportionately between the vendor's earnings and the admin's commission based on their commission split.
- **Vendor Total Amount**:
  - The entire discount amount is deducted solely from the vendor's total payout.
  - The admin retains their full commission amount untouched.
- **Admin Commission Amount**:
  - The entire discount amount is deducted solely from the admin's commission share.
  - The vendor receives their full standard earnings.

::: tip Extra Discount Covered by Admin
If **Admin Commission Amount** is selected and the customer's discount is higher than the admin's commission, the marketplace admin covers (pays) the remaining difference so the vendor still receives their full earnings.

**Quick Example:**
- Product Price: **$100**
- Admin Commission (10%): **$10**
- Customer Discount Coupon: **$15**
- The admin covers the full **$15** discount (absorbing the extra **$5** difference), and the vendor still receives their full **$90** payout.
:::

---

### Auto Approve Vendor

Controls the approval workflow for new vendor registrations:

- **Enabled (Checked)**:
  - Vendors are **automatically approved** immediately upon registration.
  - New vendors instantly gain access to their seller dashboard, store setup, and product creation features without waiting for admin review.
- **Disabled (Unchecked)**:
  - New vendor registrations remain in a **Pending** status.
  - The marketplace administrator must manually review and approve the vendor account from **Marketplace > Vendors** before the vendor can access seller features.

---

### Separate Vendor Dashboard

Choose whether vendors manage their store from the **WordPress Admin backend (`/wp-admin/`)** or directly from the **front of your website**:

- **Enabled (Checked)**: Vendors can log into your WordPress admin panel (`/wp-admin/`) and manage their store using dedicated WordPress backend menus.
- **Disabled (Unchecked)**: Vendors manage their products and orders entirely from the storefront (using **My Account** or the **Seller Panel**). Access to `/wp-admin/` is restricted for vendors.

::: tip Which option should you choose?
- **Keep Disabled (Recommended):** Best for most marketplaces. Vendors manage everything easily from the website storefront, keeping your WordPress admin dashboard private, clean, and secure.
- **Enable:** Turn this on only if you specifically want vendors to log into and work inside the WordPress `/wp-admin/` control panel.
:::

---

### Data Delete After Vendor Delete

Specifies how vendor data and catalog items are handled when a vendor account is deleted by the administrator:

- **Enabled (Checked)**:
  - **All vendor data is deleted**: Products, listings, and vendor records are permanently deleted when the vendor is removed.
- **Disabled (Unchecked)**:
  - **Reassign to Admin**: The vendor’s products and records are preserved and automatically assigned to the marketplace admin instead.

---

### Applicable Shipping Methods

The admin can select which shipping method will apply at checkout:

- **Admin Shipping Method**
- **Vendor Shipping Method**

---

#### More About Applicable Shipping Methods

##### Admin Shipping Method Selected

- Admin shipping rates will apply to **all products**, including vendor products.
- The shipping rate remains the same regardless of whether the cart contains admin or vendor products.

##### Vendor Shipping Method Selected

- Vendor-specific shipping rates will apply to vendor products.
- Admin shipping applies to admin products.
- Vendors configure their own delivery zones, rates, classes, and pickup counters in their seller dashboard as explained in the [Vendor Shipping Zone Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-shipping-zone-management.html) guide.

##### Mixed Cart (Admin + Vendor Products)

If the cart contains products from **both admin and vendor**:

- The total shipping cost will be a **combined rate** of both admin and vendor shipping.
- This applies regardless of the selected Applicable Shipping Method.

---

### Vendor Page

Select the page to be used as the **Vendor Page** (which shows the vendor listing).

⚠️ **Important Notes**:
- Updating the vendor page will **erase existing content** of the newly selected page.
- After changing the page, kindly **update permalinks**.

---

### Seller Central Page

Select the page to be used as the **Seller Central Page**.

⚠️ **Important Notes**:
- Updating a new seller central page will **erase existing content** of the newly selected page.
- After changing the page, kindly **update permalinks**.

---

### Shop Name on Registration

Controls the visibility and requirement of the **Shop Name** field on the vendor registration form:

- **Required**: Vendors must enter a **Shop Name** during registration.
- **Optional**: The Shop Name field is optional. If left empty, the module will automatically use the vendor's name instead.
- **Remove**: Completely removes the Shop Name field from the registration form. When removed, the module automatically uses the vendor's name as the shop name.

---

### Shop Slug on Registration

Controls the visibility and requirement of the **Shop Slug (Store URL)** field on the vendor registration form:

- **Required**: Vendors must enter a **Shop URL** during registration.
- **Optional**: The Shop Slug field is optional. If left empty, the module will automatically use the vendor's username instead.
- **Remove**: Completely removes the Shop Slug field from the registration form. When removed, the module automatically uses the vendor's username as the shop URL slug.

---

### Vendor Terms & Conditions Page

The admin can select a **Terms & Conditions page** that will be displayed to vendors during registration:

- **`-----Disable Terms and Conditions-----`**: Disables the terms and conditions checkbox on the vendor registration form.
- **Select Page**: Choose any published WordPress page (e.g., *Terms & Conditions*). A required terms and conditions agreement checkbox linked to this page will appear on the vendor registration form.

---

### Allow Vendor Registration on My Account

- If enabled, vendor registration fields will appear on the **WooCommerce My Account** signup form.
- If disabled, a link to the **Seller Central Registration Form** will be displayed instead.

---

### Vendor KYC Verification Settings

Admins can configure the KYC (Know Your Customer) document verification settings directly from the General tab:

- **Enable Vendor KYC Verification**: A master checkbox toggle to enable or disable vendor document verification globally. When checked, vendors can upload KYC documents to support the approval of their seller account.
- **KYC Document Types**: Admins can define the types of documents allowed (e.g., *Business License*, *Government ID*, *Utility Bill*). You can select from suggested types or type and add custom document types.
- **Allowed KYC Formats**: Restrict document uploads to specific permitted file formats by selecting the checkboxes: **PDF**, **JPG**, **JPEG**, **PNG**, and **WEBP**.
- **Restrict KYC Document Size**: Optionally enforce minimum and maximum file size limits (in **KB**) for document uploads (e.g., from `10` KB to `2048` KB).

---

### New Vendor Dashboard

The **New vendor dashboard** setting controls whether vendors access the redesigned, modern vendor dashboard interface:

- **Disabled — every vendor uses the classic dashboard**: All vendors remain on the classic seller dashboard interface.
- **Optional — each vendor chooses**: Each vendor can individually choose whether to use the classic dashboard or switch to the new redesigned dashboard UI.
- **Forced — every vendor uses the new dashboard**: Enforces the new modern vendor dashboard interface for all vendors across the marketplace.

::: tip Modern Interface Rollout
The redesigned vendor dashboard serves the updated UI on existing vendor endpoints. Vendor URLs, add-ons, and permissions remain unchanged; only the dashboard shell and migrated screens provide the modernized experience.
:::

- **Detailed Guides**: See [Vendor Dashboard](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-dashboard.html) and [Seller Panel Overview](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/seller-panel-overview.html).

---

### Seller Panel Page

The **Seller panel page** setting allows admins to designate a dedicated WordPress page that serves the vendor dashboard on its own standalone URLs:

- **`----- Disable the seller panel -----`**: Switches off the standalone seller panel URLs.
- **Select Page (e.g., Seller Panel)**: Assigns the chosen WordPress page (e.g., *Seller Panel*) to serve as the base for the standalone seller dashboard.

#### Key Features of the Seller Panel

- **Runs beside My Account**: The seller panel operates alongside the standard WooCommerce My Account dashboard rather than replacing it.
- **Consistent Endpoints**: It serves all vendor endpoints under clean, dedicated slugs (e.g., `/seller/vendor-products/` alongside `/my-account/vendor-products/`, and `/seller/orders/` alongside `/my-account/orders/`).
- **Direct Link**: When enabled, the live URL to the vendor dashboard (e.g., `https://your-domain/seller/vendor-dashboard/`) is displayed directly beneath the setting for direct access.

<a class="doc-image-link" href="./assets/seller-panel-dashboard.png"><img src="./assets/seller-panel-dashboard.png" alt="Seller Panel Dashboard" /></a>

- **Detailed Guides**: See [Vendor Dashboard](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-dashboard.html) and [Seller Panel Overview](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/seller-panel-overview.html).

---

### Admin-Configurable Upload Restrictions

Admins can set global upload restrictions for every vendor image, including:
- Avatar
- Logo
- Fulfillment
- Banner

For each image type, admins can define:
- Allowed file types
- Optional file size limits
- Optional dimension limits (width/height)

<!-- <a class="doc-image-link" href="./assets/placeholder-upload-restrictions.png"><img src="./assets/placeholder-upload-restrictions.png" alt="Upload Restrictions" /></a> -->

---

### "Sold by" Visibility Control

Admins have full control over whether the "Sold by" text is visible to customers.
- **Global Setting**: A master toggle to hide the vendor name and store links across the shop, cart, checkout, orders, emails, and invoices.
- **Per-Vendor Override**: Admins can override the global setting on a per-vendor basis if certain vendors need their names displayed or hidden.

<!-- <a class="doc-image-link" href="./assets/placeholder-sold-by-visibility.png"><img src="./assets/placeholder-sold-by-visibility.png" alt="Sold By Visibility Settings" /></a> -->

---
