---
title: Vendor Staff – Seller / Vendor Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html
---

# Vendor Staff

The **Vendor Staff** feature allows vendors to add sub-users (store managers and team assistants) who can log in and manage the store on their behalf. Vendors can grant per-task permissions for each section (view, add, edit, delete, and more) based on the capabilities allowed by the admin.

::: tip Store Administration Note
If you are a marketplace administrator looking to configure global staff settings, maximum staff limits per vendor, delegatable permissions, or manage all vendor staff members, please refer to the [Configuration – Staff Settings](https://wpdoc.webkul.com/documentation/admin-staff-setting) guide.
:::

---

## Why Use Vendor Staff?

Running a busy online store often requires teamwork. The Vendor Staff feature provides several practical advantages for sellers:

- **Secure Delegation Without Password Sharing**: Vendors do not need to share their master account password with assistants. Each staff member receives their own unique login.
- **Granular Permission Control**: Assign precise responsibilities to team members. For example, allow a shipping coordinator to view orders and print invoices without allowing them to delete products or issue refunds.
- **Role Specialization**: Create different sub-accounts for different team roles, such as product managers, customer support agents, order fulfillment staff, or designers.
- **Financial Privacy**: Staff members cannot view or modify the vendor's sensitive bank account details, payout settings, or withdrawal records.

---

## Managing Vendor Staff

Vendors can view a list of all their staff members from the Vendor Dashboard by navigating to **Vendor Staff** from the seller menu.

<a class="doc-image-link" href="./assets/vendor-staff-list.png"><img src="./assets/vendor-staff-list.png" alt="Vendor Staff List" /></a>

### Staff Directory Table

The main directory table displays the following columns for every registered assistant:

- **Name**: The full name of the staff member.
- **Email**: The staff member's registered email address used for signing into their account.
- **Access**: A comma-separated list of all marketplace sections and modules the staff member is permitted to access (such as *Seller Dashboard, Products, Orders, Transactions, Vacation, Shop Followers, Notifications, My Profile, Ask Admin, Shippings, Admin News*).
- **Actions**: Operational buttons available for each staff entry:
  - **Edit**: Opens the staff settings screen to change the staff member's name or adjust their permissions.
  - **Delete**: Permanently removes the staff member and revokes their store access.

---

### Adding a New Staff Member

To add a new staff member, click on the **+Add Vendor Staff** button located at the top right of the staff directory.

<a class="doc-image-link" href="./assets/add-vendor-staff.png"><img src="./assets/add-vendor-staff.png" alt="Add Vendor Staff" /></a>

On the **Add Vendor Staff** form, complete the required account details:

1. **Name**: Enter the staff member's full name (e.g., *Jane Doe*). This field is required.
2. **Email**: Enter their valid email address (e.g., *name@example.com*). This email is required and serves as their username for logging into the store.
3. **Choose Permissions**: Review the permission cards below the user details and select the specific tasks this staff member is allowed to perform.
4. **Save Account**: Click the **Add Vendor Staff** button at the bottom of the page to create the sub-account. To cancel without saving, click **Cancel**.

::: info Account Login Credentials
Vendors do not set a password manually when creating a staff account. An automatic email notification is sent to the staff member's email address with instructions to set up their password and log in.
:::

---

### Editing Staff Settings and Permissions

Vendors can edit existing staff settings and define precise permissions for what the staff member is allowed to do. To edit an assistant, click the **Edit** button next to their name in the staff directory table.

<a class="doc-image-link" href="./assets/edit-vedor-staff-setting.png"><img src="./assets/edit-vedor-staff-setting.png" alt="Edit Vendor Staff Setting" /></a>

When editing a staff member:

- **Name**: Can be updated at any time.
- **Email**: This field is locked (read-only) to protect user identity and maintain account security.
- **Permissions**: Check or uncheck capability checkboxes across the various permission cards to grant or revoke specific rights.
- **Update Changes**: Click the **Update Vendor Staff** button to apply the changes immediately.

---

### Removing a Staff Member

When a team member leaves or no longer requires access, vendors can delete their sub-account directly from the staff directory list:

1. Locate the staff member in the table and click the **Delete** button under **Actions**.
2. A confirmation modal titled **Remove vendor staff?** will appear.

<a class="doc-image-link" href="./assets/vendor-staff-delete-modal.png"><img src="./assets/vendor-staff-delete-modal.png" alt="Remove Vendor Staff Confirmation Modal" /></a>

3. Review the warning notice: *"This vendor staff will lose access to your store. This action cannot be undone."*
4. Click **Yes, remove** to confirm deletion, or click **Cancel** to keep the staff account.

---

## Granular Permissions Matrix

The permissions can be granularly controlled per section (e.g., Products, Orders, Profile) and per action (e.g., view, add, edit, delete). Each module is presented as a distinct card with an interactive **Select all** button on the header for quick configuration.

<a class="doc-image-link" href="./assets/allowed-staff-to-do.png"><img src="./assets/allowed-staff-to-do.png" alt="Allowed Staff Permissions" /></a>

<a class="doc-image-link" href="./assets/allowed-staff-to-do-2.png"><img src="./assets/allowed-staff-to-do-2.png" alt="Allowed Staff Permissions Continued" /></a>

Here is the complete breakdown of all available permission cards and what each capability allows:

### 1. Seller Dashboard
- **Access New Seller Panel**: Allows logging in and navigating the modern seller dashboard interface.
- **Performance**: View store analytics, traffic metrics, and sales conversion figures.
- **Reporting**: Access comprehensive store reports and sales summaries.
- **Customers**: View customer listings and buyer information.
- **Magic AI**: Access built-in AI tools for product copy generation and content assistance.
- **General Setting**: Modify general shop configuration preferences.
- **Graph Setting**: Adjust dashboard graph display styles and color palettes.
- **Site Setting**: Customize storefront appearance preferences.

### 2. Products
- **View products**: Browse and view all products belonging to the vendor.
- **Add product**: Create new products in the vendor catalog.
- **Edit product**: Update existing product details, descriptions, prices, and inventory levels.
- **Delete product**: Remove products from the vendor's catalog.
- **Publish product**: Publish newly created or edited products live on the marketplace.
- **Generate barcodes**: Generate unique barcode labels for products.
- **Print barcodes**: Download and print generated product barcodes.

### 3. Select And Sell
- **View listing**: Browse existing catalog products available for selling.
- **Add product**: Join an existing product listing to offer the vendor's own price and stock.
- **Edit product**: Modify inventory, price, or product condition on assigned listings.
- **Delete product**: Remove the vendor's offer from an existing product listing.

### 4. Bulk Upload
- **Normal Products**: Batch upload standard catalog products using CSV data sheets.
- **Select And Sell**: Batch upload and map existing marketplace listings via CSV.

### 5. Orders
- **View orders**: View customer orders, ordered items, billing info, and shipping addresses.
- **Change order status**: Update order fulfillment statuses (e.g., Processing, Completed).
- **Refund order**: Process order refunds for the vendor's products.
- **Print invoice**: Generate and download printable customer invoices or packing slips.
- **Schedule pickups**: Book courier pickup appointments for store orders.

### 6. Transactions
- **View transaction list**: Review transaction history and balance ledger entries.
- **View transaction details**: Open individual transaction records to inspect itemized breakdowns.

### 7. Vacation
- **View vacations**: Check current, past, and upcoming store vacation schedules.
- **Add vacation**: Schedule a new store closure period with a custom storefront notice.
- **Edit vacation**: Modify dates or announcement text on existing vacation schedules.
- **Delete vacation**: Remove an existing vacation schedule to reopen the shop early.

### 8. Shop Followers
- **View followers**: See the list of registered customers who follow the vendor's shop.
- **Remove followers**: Remove specific customers from the followers list.
- **Send notification to followers**: Send email announcements or promotional updates to followers.

### 9. Notifications
- **View notifications**: Check real-time alerts for incoming orders, low stock, and system notices.

### 10. My Profile
- **View profile**: View public store profile details and settings.
- **Edit profile**: Update store biography, avatar, banner image, contact information, and social links.

### 11. Ask Admin
- **View query list**: Browse support inquiries sent to marketplace administrators.
- **View query thread**: Open an existing conversation thread to read admin replies.
- **Create new query**: Submit a new help ticket or question to the admin team.
- **Reply to query**: Post responses and follow-up questions in an ongoing support thread.

### 12. Shippings
- **View shipping**: View configured shipping methods and rates.
- **Manage shipping zones**: Create, edit, and configure custom vendor shipping zones and delivery rates.
- **Manage shipping classes**: Assign and organize product shipping classes.

### 13. Admin News
- **View news list**: Browse marketplace updates and announcements published by the admin.
- **View news details**: Read the full text of policy changes and marketplace news articles.

### 14. Storefront Design
- **View storefront layouts and variations**: Preview custom shop page designs and themes.
- **Customize and publish storefront designs**: Customize layout blocks, visual elements, and publish shop designs.

::: tip Fast Selection with "Select all"
Each capability card includes a **Select all** button in its header. Clicking this button instantly selects all permissions in that card. Clicking it again deselects all items, allowing vendors to quickly configure access.
:::

---

## Staff Member Dashboard Experience

Once a staff member logs into the marketplace using their credentials:

1. **Dynamic Navigation**: The seller dashboard menu automatically adjusts. The staff member only sees menu links for sections they are permitted to view.
2. **Action Restrictions**: If a staff member has permission to *View orders* but not *Refund order*, the refund action buttons remain hidden and inaccessible.
3. **Strict Account Isolation**: Staff members cannot access the primary vendor's bank account details, payout withdrawal forms, or administrative marketplace settings.
4. **Staff Management Restriction**: Staff members cannot create, edit, or delete other staff accounts. Only the primary vendor can manage sub-accounts.

---

## Staff Quotas and Admin Delegations

Please keep the following operational rules in mind:

- **Admin Delegatable Scope**: Vendors can only grant permissions that the marketplace administrator has enabled in the global delegatable capabilities list. If an admin turns off a specific capability globally, that permission is disabled for all staff.
- **Maximum Staff Limit**: The marketplace administrator may set a maximum number of staff accounts allowed per vendor (e.g., up to 5 assistants). If the limit is reached, the vendor must remove an existing assistant before adding a new one.

---

## Vendor Staff Quick Reference Summary

The following table provides a quick summary of the staff management workflow:

| Screen / Step | Action Button | Key Inputs | Outcome |
| :--- | :--- | :--- | :--- |
| **Staff List** (`/seller/vendor-staff/`) | **+Add Vendor Staff** | None | Opens the Add Vendor Staff form. |
| **Add Staff** (`?section=settings`) | **Add Vendor Staff** | Name, Email, Capability Checkboxes | Creates a new staff sub-account and sends login details to the assistant. |
| **Edit Staff** (`?section=settings&staff_id=XX`) | **Update Vendor Staff** | Name (editable), Email (read-only), Capability Checkboxes | Immediately updates the staff member's name and assigned permissions. |
| **Delete Staff** (Staff List Modal) | **Yes, remove** | Confirmation click | Permanently deletes the sub-account and revokes store access. |
| **Form Cancellation** | **Cancel** | None | Aborts current changes and returns to the staff directory list. |

---

## Vendor Staff Endpoint URL

Vendors access this management interface using the dedicated front-end endpoint:

```text
https://example.com/seller/vendor-staff/
```

*Note: Marketplace administrators can customize this endpoint slug and title under **Marketplace > Settings > Endpoints**. For more details, see [Endpoints Configuration](https://wpdoc.webkul.com/documentation/configuration-endpoints).*
