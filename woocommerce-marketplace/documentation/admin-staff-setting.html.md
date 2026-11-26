---
title: Configuration – Staff Settings
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-staff-setting.html
---

# Configuration – Staff Settings

The **Staff Settings** tab allows marketplace administrators to govern the sub-account (vendor staff) ecosystem. Admins can globally enable or disable the staff feature, set quotas on the maximum number of assistants each vendor may employ, define the global whitelist of delegatable capabilities across all marketplace modules (including Seller Dashboard, Products, Select And Sell, Bulk Upload, Orders, and more), and directly oversee, edit, or remove all vendor staff accounts across the marketplace.

<a class="doc-image-link" href="./assets/admin-staff-settings.webp"><img src="./assets/admin-staff-settings.webp" alt="Admin Staff Settings" /></a>

The marketplace admin can access and configure this section from:

**Marketplace > Settings > Staffs**

**Direct Admin Navigation URLs**:
- **Staff Settings Tab**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=staff`
- **Vendor Staffs Management List**: `wp-admin/admin.php?page=wk-marketplace-vendor-staffs`

---

## Staff Settings Overview

- **Global Staff Control**: Enable or disable the vendor staff management feature across the entire marketplace.
- **Per-Vendor Staff Limits**: Configure maximum staff accounts allowed per vendor, or set to `0` for unlimited team members.
- **Granular Delegatable Permissions**: Control which permissions vendors are allowed to pass on to their staff across core modules and operational sections.
- **Consolidated Dashboard Permissions**: Manage access to the modern Seller Panel, store performance metrics, sales reports, customer lists, Magic AI tools, and storefront appearance from a unified Seller Dashboard card.
- **Select & Sell and Bulk Upload Controls**: Safely delegate existing catalog listing management and CSV batch processing to staff members.
- **Sensitive Permission Guardrails**: Critical capabilities (such as editing payment/payout information and managing KYC identity documents) are marked in red and left disabled by default for security.
- **Interactive Matrix Tools**: One-click **Select all** and **Deselect all** toggles on each capability card for rapid permission configuration.
- **Centralized Staff Registry**: Comprehensive admin list to review, search, sort, and bulk-delete vendor staff across all sellers.
- **Administrative Override & Editing**: Directly view and edit any staff member's profile details and fine-tune their individual permission set.
- **Per-Vendor Override**: Selectively enable or disable staff functionality for individual vendors through their seller profile, even when global staff access is disabled.
- **Customizable Dashboard Endpoint**: Tailor the front-end dashboard URL slug and menu title for the vendor staff section.

::: tip Vendor Guide Reference
To learn how vendors create staff accounts, assign roles, and delegate daily shop responsibilities from their seller dashboard, refer to the [Vendor Staff Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html).
:::

---

## Admin Staff Settings Summary

The table below provides a quick reference for each setting available on the **Staffs** configuration tab:

| Setting Label | Input Type | Default Setting | Purpose |
| :--- | :--- | :--- | :--- |
| **Enable Vendor Staff** | Checkbox | Enabled (Checked) | Globally activates the vendor staff feature for all vendors. When disabled, only vendors individually enabled in their Miscellaneous/Seller settings can add staff. |
| **Max Staff Per Vendor** | Number Field | `0` (Unlimited) | Sets the maximum number of staff accounts an individual vendor can create. Set to `0` for unlimited staff members. |
| **Delegatable Permissions** | Interactive Card Grid | All Standard Checked (Sensitive Unchecked) | Defines the marketplace-wide pool of permissions vendors can delegate to staff. Vendors can only grant permissions enabled here. |
| **Save Changes** | Primary Button | Click to Save | Immediately applies and stores the updated global staff settings. |

---

## Admin Staff Settings

### Enable Vendor Staff

- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Live Description**: *"Allow vendors to add vendor staff staff. When off, only vendors individually enabled in their Miscellaneous settings can use it."*

#### How It Works:
- **When Enabled**: Every registered marketplace vendor gains access to the **Vendor Staff** menu in their front-end seller dashboard. Vendors can create sub-accounts, invite store assistants, and delegate daily operations.
- **When Disabled**: The **Vendor Staff** tab is hidden from seller dashboards across the marketplace. Existing staff members cannot log in to perform restricted seller actions.
- **Per-Vendor Exception Mode**: If the global setting is disabled, administrators can still selectively allow trusted or enterprise vendors to create staff accounts by enabling the permission within the vendor's individual **Seller Details** settings under **Marketplace > Vendors**.

---

### Max Staff Per Vendor

- **Setting Type**: Number Field
- **Default Value**: `0`
- **Live Description**: *"0 means unlimited."*

#### How It Works:
- **Unlimited Quota (`0`)**: Vendors can register as many staff members as their operations require without system restriction.
- **Numeric Limit (`1, 2, 5, etc.`)**: Caps the number of active staff accounts a vendor can maintain. 
- When a vendor reaches the configured limit, the seller dashboard disables the **Add Staff** action and notifies the vendor that their account allocation is exhausted.
- **Global Setting Scope**: This is a single marketplace-wide setting that applies uniformly across all vendors; individual staff account limits cannot be assigned to specific vendors.

---

### Delegatable Permissions Matrix

- **Setting Type**: Collapsible Capability Cards with Select/Deselect Controls
- **Live Description**: *"Permissions a vendor may delegate to staff. Vendors pick per staff from this set. Permissions shown in red are sensitive and are not granted by default."*

#### Operational Hierarchy:
The **Delegatable Permissions** setting acts as a master security boundary for the entire marketplace:
1. **Admin Master Whitelist**: Marketplace admins select the broad pool of capabilities that are safe for vendors to delegate.
2. **Vendor Sub-Assignment**: When vendors create or edit an assistant in their dashboard, they can *only* choose from the capabilities permitted by the admin here.
3. If an admin unchecks a permission here, it is automatically revoked from all vendor staff members, even if a vendor previously selected it.

#### Capability Modules & Permissions Breakdown:

The matrix is organized into clean functional cards matching the marketplace architecture:

| Functional Section | Capability Name | Sensitivity & Default Status | Operational Description |
| :--- | :--- | :--- | :--- |
| **Seller Dashboard** | Access New Seller Panel | Standard (Checked) | Grants access to log in and use the modernized [Seller Dashboard](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-dashboard.html) interface and primary metrics. |
| | Performance | Standard (Checked) | Allows staff to view store performance, seller and product reviews. See [Vendor Reviews & Ratings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-reviews.html). |
| | Reporting | Standard (Checked) | Authorizes viewing detailed sales reporting, top product revenue, and customer metrics. See [Vendor Sales Reporting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-sales-reporting.html). |
| | Customers | Standard (Checked) | Gives access to view customer contact lists and customer purchase history. See [Vendor Customer List](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-list.html). |
| | Magic AI | Standard (Checked) | Authorizes staff to use AI-assisted product and content generation tools. For details, see [Generative AI Overview](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/generative-ai-overview.html). |
| | General Setting | Standard (Checked) | Allows updating core seller profile details. See [Vendor Profile](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html). |
| | Graph Setting | Standard (Checked) | Allows customization of graph color schemes and graph types across the new Seller Panel, including the Dashboard, Reports, Transactions, Performance, and other pages. See [Vendor Graph Setting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-graph-setting.html). |
| | Site Setting | Standard (Checked) | Allows adjustments to the vendor storefront product form. See [Vendor Site Setting](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-site-setting.html). |
| **Products** | View products | Standard (Checked) | Allows staff to view the vendor's catalog product list. See [Vendor Product Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html). |
| | Add product | Standard (Checked) | Enables creation of new product listings. |
| | Edit product | Standard (Checked) | Allows updating existing product details, pricing, inventory, and images. |
| | Delete product | Standard (Checked) | Permits trashing or permanently deleting vendor products. |
| | Publish product | Standard (Checked) | Allows direct publishing of products without requiring admin moderation. |
| | Generate barcodes | Standard (Checked) | Enables generation of product barcode identifiers. See [Product Barcode Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/product-barcode.html). |
| | Print barcodes | Standard (Checked) | Allows downloading and printing barcode labels. |
| **Select And Sell** | View listing | Standard (Checked) | Grants visibility to search and view existing marketplace products available to claim. See [Admin Select and Sell](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-select-and-sell.html) and [Selling Existing Products](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/selling-existing-products.html). |
| | Add product | Standard (Checked) | Authorizes staff to assign existing products to the vendor's store catalog. |
| | Edit product | Standard (Checked) | Allows modifying vendor-specific stock, condition, and pricing on assigned catalog items. |
| | Delete product | Standard (Checked) | Permits removing assigned products from the vendor's active offerings. |
| **Bulk Upload** | Normal Products | Standard (Checked) | Authorizes importing and exporting standard marketplace catalog items in bulk via CSV spreadsheets. See [Bulk Upload Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/bulk-upload.html). |
| | Select And Sell | Standard (Checked) | Permits batch claiming and assigning existing catalog products via CSV spreadsheets. |
| **Orders** | View orders | Standard (Checked) | Grants visibility into customer orders containing the vendor's items. See [Vendor Order Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-order-management.html). |
| | Change order status | Standard (Checked) | Allows updating fulfillment progress (e.g., Processing to Completed). |
| | Refund order | Standard (Checked) | Authorizes staff to process customer refund requests. |
| | Print invoice | Standard (Checked) | Allows printing vendor packaging slips and invoices. See [Configuration – Vendor Invoice](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-invoice.html). |
| | Schedule pickups | Standard (Checked) | Permits scheduling carrier collection for dispatched packages. See [Fulfilment Carriers Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/fulfilment-carriers.html). |
| **Transactions** | View transaction list | Standard (Checked) | Allows staff to view payment withdrawal logs and history. See [Vendor Transaction Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-transaction-management.html). |
| | View transaction details | Standard (Checked) | Permits inspecting granular payout breakdown details. |
| **Vacation** | View vacations | Standard (Checked) | Displays the vendor vacation schedule and history. See [Vendor Vacation Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-vacation.html) and [Admin Vacation Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-vacation-setting.html). |
| | Add vacation | Standard (Checked) | Enables scheduling a new store holiday or temporary closure. |
| | Edit vacation | Standard (Checked) | Allows modifying holiday dates and storefront closure messages. |
| | Delete vacation | Standard (Checked) | Permits canceling scheduled vacations. |
| **Shop Followers** | View followers | Standard (Checked) | Allows viewing customer accounts that follow the store. See [Vendor Shop Followers Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-shop-followers.html). |
| | Remove followers | Standard (Checked) | Allows removing individual follower entries. |
| | Send notification to followers | Standard (Checked) | Permits broadcasting promotional updates or store announcements to followers. |
| **Notifications** | View notifications | Standard (Checked) | Grants access to view low-stock notices, order events, and system alerts. See [Vendor Notification Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-notification.html). |
| **My Profile** | View profile | Standard (Checked) | Displays public shop details and seller configuration. See [Vendor Profile Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html). |
| | Edit profile | Standard (Checked) | Allows updating banner images, shop descriptions, and contact addresses. |
| | Edit payment information | <span style="color:#d63638;font-weight:600;">Sensitive (Unchecked)</span> | Allows modifying bank accounts, PayPal emails, or payout destination credentials. See [Vendor Payout Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-payout-management.html). |
| | Manage KYC documents | <span style="color:#d63638;font-weight:600;">Sensitive (Unchecked)</span> | Allows uploading, replacing, or viewing confidential merchant identity verifications. See [Vendor KYC Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-kyc.html). |
| **Ask Admin** | View query list | Standard (Checked) | Displays existing support query threads between vendor and marketplace admin. See [Ask to Admin Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/ask-to-admin.html). |
| | View query thread | Standard (Checked) | Opens detailed back-and-forth query conversations. |
| | Create new query | Standard (Checked) | Allows initiating a new support inquiry with marketplace administrators. |
| | Reply to query | Standard (Checked) | Permits sending replies within an existing support inquiry thread. |
| **Shippings** | View shipping | Standard (Checked) | Displays configured shipping methods, zones, and rates. See [Vendor Shipping Zone Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-shipping-zone-management.html). |
| | Manage shipping zones | Standard (Checked) | Allows adding, modifying, or deleting regional delivery zones. |
| | Manage shipping classes | Standard (Checked) | Permits creating and adjusting shipping classes and delivery fees. |
| **Admin News** | View news list | Standard (Checked) | Grants access to read marketplace announcements and news broadcasts. See [Admin News Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-news.html). |
| | View news details | Standard (Checked) | Allows reading complete news articles and policy bulletins. |

::: warning Sensitive Capabilities Safeguard
Capabilities displayed with red text (**Edit payment information** and **Manage KYC documents**) represent elevated financial and legal risks. They are deliberately excluded from default permissions. Only enable these if your marketplace workflow requires vendor accountants or legal staff to manage payout channels and verification paperwork.
:::

---

## Per-Vendor Staff Override

Marketplace administrators can override the global **Enable Vendor Staff** setting for individual vendors. This is useful when the marketplace owner wants to keep staff accounts disabled globally, but selectively allow verified, VIP, or higher-tier sellers to add staff.

### How to Configure Per-Vendor Staff Access:

1. Navigate to **Marketplace > Vendors** in the WordPress admin panel.
2. Hover over the target seller and click **Manage**.
3. Under the seller details form, locate the **Miscellaneous** field:
   - **Default (Global setting)**: Follows the global toggle set in **Marketplace > Settings > Staffs**.
   - **Enabled**: Explicitly grants this vendor permission to manage staff members and assign delegated roles, regardless of the global marketplace setting.
   - **Disabled**: Explicitly revokes staff management for this vendor, preventing them from adding or using staff sub-accounts even if the global marketplace setting is active.
4. Click **Update** to save the seller's configuration.

---

## Admin Vendor Staffs Management

Marketplace administrators have centralized visibility over every staff account registered across all vendors in the marketplace.

To inspect and manage all vendor assistants, navigate to:

**Marketplace > Vendor Staffs**

**Direct Admin Navigation URL**:
```text
wp-admin/admin.php?page=wk-marketplace-vendor-staffs
```

<a class="doc-image-link" href="./assets/admin-vendor-staffs-list.webp"><img src="./assets/admin-vendor-staffs-list.webp" alt="Admin Vendor Staffs List" /></a>

### Vendor Staffs List Features

The table provides complete administrative oversight of multi-vendor staff members:

1. **Table Columns**:
   - **Checkbox**: Allows selecting individual or multiple records for bulk actions.
   - **Name**: The display name of the staff member. Hovering over a name reveals quick action links (`Edit` and `Delete`). Supports ascending/descending sorting.
   - **Email**: The registered user email address utilized for staff authentication. Supports ascending/descending sorting.
   - **Vendor**: The parent vendor store (e.g., *Aurora Athletics*) to which the staff member belongs.
   - **Access**: A comma-delimited summary of all active capabilities currently granted to this staff user.

2. **Search Staff Members**:
   - Use the search bar in the top-right corner of the table to quickly locate assistants across all vendors by **Name**, **Username**, or **Email address**.

3. **Bulk Actions**:
   - Select multiple staff rows using the checkboxes.
   - Choose **Delete** from the bulk actions dropdown and click **Apply** to remove compromised or inactive staff accounts across the marketplace.

4. **Screen Options**:
   - Click the **Screen Options** pull-down tab in the top-right corner to toggle column visibility (**Email**, **Vendor**, **Access**) or adjust the pagination threshold (**Items per page**, default `20`).

---

## Editing a Vendor Staff Member from Admin

Administrators can inspect, modify, or override any vendor staff account directly from the WordPress back-office without logging into the seller dashboard.

To edit a staff account:
1. Navigate to **Marketplace > Vendor Staffs**.
2. Hover over the staff member's name and click **Edit**.

**Direct Admin Edit URL**:
```text
wp-admin/admin.php?page=wk-marketplace-vendor-staffs&section=edit&staff_id={ID}
```

<a class="doc-image-link" href="./assets/admin-vendor-staff-edit.webp"><img src="./assets/admin-vendor-staff-edit.webp" alt="Edit Vendor Staff" /></a>

### Edit Staff Field Breakdown

The Edit Vendor Staff screen provides administrative control over personal details and permissions:

| Field Label | Control Type | Modifiable | Description |
| :--- | :--- | :--- | :--- |
| **Name** | Text Input (`wkmp_staff_first_name`) | Yes | The first name or operational label for the staff account. |
| **Email** | Plain Text Display | Read-only | Displays the unique login email address tied to the WordPress user account. |
| **Vendor** | Plain Text Display | Read-only | Displays the parent vendor store to which the staff member is bound. |
| **Access** | Interactive Capability Matrix | Yes | Complete grid of capability cards. Admins can grant or revoke any capability specifically for this staff user. |
| **Update Staff** | Primary Button | Action | Immediately saves all modified details and updates the staff member's permissions. |

#### Administrative Override Capabilities:
- Even if a seller omitted a permission when adding their assistant, an administrator can check the capability here and click **Update Staff** to grant it.
- Conversely, if an assistant misbehaves or requires immediate restriction, an admin can uncheck capabilities (such as *Delete product* or *Refund order*) to instantly restrict their access without deleting the staff account.

---

## Customizing the Vendor Staff Endpoint

Administrators can customize the URL slug and menu label that vendors use to access the staff section in their dashboard.

To adjust the endpoint:
1. Navigate to **Marketplace > Settings > Endpoints**.
2. Locate the **Vendor Staff** row.

**Endpoint Parameters**:
- **Default Endpoint Slug**: `vendor-staff`
- **Default Menu Title**: `Vendor Staff`
- **Resolved URL**: `https://example.com/seller/vendor-staff/` (or `https://example.com/my-account/vendor-staff/`)

For more details on managing dashboard URL routing, consult the [Endpoints Configuration Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-endpoints.html).

---

## Best Practices for Marketplace Administrators

1. **Keep Sensitive Capabilities Disabled**:
   Always keep **Edit payment information** and **Manage KYC documents** unchecked in the global Delegatable Permissions matrix unless there is a verified business requirement. This prevents rogue staff members from altering a vendor's payout destination.

2. **Establish Reasonable Staff Quotas**:
   Set a sensible limit in **Max Staff Per Vendor** (e.g., `3` to `5`) rather than leaving it at `0` (unlimited) if your marketplace server resources are constrained or if you plan to monetize sub-accounts via tiered vendor subscription plans.

3. **Utilize Select & Sell and Bulk Upload Delegation Carefully**:
   Allowing staff to access **Bulk Upload** and **Select And Sell** can accelerate seller onboarding, but ensure only trusted assistants have permission to delete items or perform mass imports.

4. **Leverage Per-Vendor Overrides**:
   If you wish to test staff management with a small group of sellers, leave the global **Enable Vendor Staff** option turned off and enable staff access selectively for individual vendors under **Marketplace > Vendors**.

5. **Audit Staff Permissions Regularly**:
   Periodically review the **Marketplace > Vendor Staffs** list to check which assistants have broad capabilities, especially *Refund order* and *Publish product*.

6. **Coordinate with Vendor Guides**:
   Direct your sellers to the [Vendor Staff Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html) so they understand how to invite staff, generate strong passwords, and manage permissions from their store management panel.
