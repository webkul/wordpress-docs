---
title: Configuration – Vacation Settings
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-vacation-setting.html
---

# Configuration – Vacation Settings

The **Vacation Settings** tab allows marketplace administrators to configure global vacation policies, customize closed-store button labels, control product visibility, and manage seller vacation schedules.

The marketplace admin can access and configure this section from:

**Marketplace > Settings > Vacation**

**Direct Admin Navigation URLs**:
- **Vacation Settings Tab**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_vacation`
- **Vendors on Vacation Management**: `wp-admin/admin.php?page=wk-marketplace-vacations`

<a class="doc-image-link" href="./assets/admin-seller-vacation-settings.png"><img src="./assets/admin-seller-vacation-settings.png" alt="Admin Vacation Settings" /></a>

---

## Vacation Settings Overview

- Globally enable or disable the Vacation feature across the entire marketplace.
- Customize the Add to Cart button text displayed on single product detail pages when a store is closed.
- Customize the Add to Cart button label on category archives, shop loops, and catalog listing pages.
- Optionally hide products belonging to closed vendors from catalog listings, category archives, and search results.
- Automated daily scheduled task that automatically ends expired vacations and restores vendor stores.
- Centralized administrator control to monitor, enable, disable, edit, or delete any vendor's vacation schedule.

::: tip Vendor Guide Reference
To learn how vendors schedule and manage their holidays from the front-end seller dashboard, refer to the [Vacation Mode Guide](https://wpdoc.webkul.com/documentation/vendor-vacation).
:::

---

## Admin Vacation Settings Summary

The table below provides a quick reference for each setting available on the **Vacation** configuration tab:

| Setting Label | Input Type | Default Setting | Purpose |
| :--- | :--- | :--- | :--- |
| **Enable Vacation** | Checkbox | Enabled (Checked) | Allows vendors to use the Vacation feature. When disabled, the Vacation tab is hidden from vendor dashboards and no vacation restrictions are enforced on the storefront. |
| **Single Page 'Add to Cart' Button Label** | Text Field (Max 30 chars) | `Shop Closed` | Text displayed on the disabled Add to Cart button on the single product page when the vendor's shop is closed. |
| **Archive Page 'Add to Cart' Button Label** | Text Field (Max 60 chars) | `Currently Closed` | Text displayed on the Add to Cart button across shop, category archive, and catalog listing pages when the shop is closed. |
| **Hide Closed Products** | Checkbox | Disabled (Unchecked) | Hides closed-store products from shop, archive, and search results. Products remain visible on the vendor's profile page. Applies when a vendor blocks purchases during vacation. |
| **Automated Expiry Task** | Scheduled Task | Daily Automatic Execution | A built-in daily scheduled task that checks vacation end dates, ends expired vacations automatically, and reopens those vendor stores. |
| **Save Changes** | Primary Button | Click to Save | Immediately applies and stores the updated marketplace-wide vacation settings. |

---

## Admin Vacation Settings

### Enable Vacation

- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Live Description**: *"Allow vendors to use the Vacation feature. When disabled, the Vacation tab is hidden from vendors and no vacation rules are enforced on the storefront."*

#### How It Works:
- **When Enabled**: Vendors see the **Vacation** menu tab in their seller dashboard. Vendors can schedule vacations, configure custom notices, and manage store closure rules.
- **When Disabled**: The Vacation section is hidden from all vendor dashboards. Even if a vendor had previously saved a vacation period, no storefront restrictions (such as disabled Add to Cart buttons or product hiding) are enforced.

---

### Single Page 'Add to Cart' Button Label

- **Setting Type**: Text Field (Maximum 30 characters)
- **Default Value**: `Shop Closed`
- **Live Description**: *"Text on the disabled Add to Cart button on the single product page when the shop is closed. Maximum 30 characters."*

#### How It Works:
- When a vendor's vacation is active and configured to prevent sales, the standard **Add to Cart** button on the product details page (`PDP`) is disabled.
- The button text is replaced with this configured label (for example, *Shop Closed*, *On Vacation*, or *Temporarily Unavailable*).
- This clearly informs shoppers that the item cannot be purchased until the vendor returns.

---

### Archive Page 'Add to Cart' Button Label

- **Setting Type**: Text Field (Maximum 60 characters)
- **Default Value**: `Currently Closed`
- **Live Description**: *"Text on the Add to Cart button on shop / archive / listing pages when the shop is closed. Maximum 60 characters."*

#### How It Works:
- On catalog listing pages, category archives, tag results, and the main shop page (`PLP`), the Add to Cart button for products from closed vendors is updated to this custom label.
- This prevents customers from quick-adding products to their shopping cart from archive loops while a vendor is away.

---

### Hide Closed Products

- **Setting Type**: Checkbox
- **Default State**: Disabled (Unchecked)
- **Live Description**: *"Hide closed-store products from shop, archive and search results. Products stay visible on the vendor profile page. Applies only when a vendor blocks purchases during off hours."*

#### How It Works:
- **When Enabled**: Products belonging to vendors who are currently on vacation (with sales prevented) are filtered out from the main WooCommerce catalog, product category archives, and search results. Customers browsing the catalog only see purchasable items. Products remain visible when browsing the vendor's dedicated store profile page.
- **When Disabled**: Products from vacationing vendors remain visible in catalog and search results, but their Add to Cart button reflects the configured archive closed label and purchases are blocked.

::: tip Profile Visibility Note
Even when **Hide Closed Products** is enabled, products continue to display on the vendor's own store profile page (`/shop/vendor-name/`). This allows interested buyers to browse the seller's catalog and read the vacation return announcement.
:::

---

### Automated Vacation Expiry Task

- **Execution**: Daily Automatic Background Task
- **Live Note**: *"A daily scheduled task ends expired vacations automatically and reopens those shops."*

#### How It Works:
- The marketplace runs an automated daily scheduled task.
- It scans all active vacation records and checks whether the current date has passed the vendor's configured **To** date.
- When an expired vacation is detected, the system marks the vacation as **Expired**, removes all purchase blocks, and reopens the store automatically without requiring manual action by the vendor or administrator.

---

## Admin Controls for Vacation Mode

Admins have full control over the Vacation Mode feature:
- Enable or disable the vacation feature globally.
- Edit a specific vendor's vacation schedule and settings.
- Bulk enable, disable, or delete vacations from a sortable list in the admin panel.
- Customize the vendor dashboard URL endpoint for vacation.

### Managing Vendors on Vacation

Marketplace administrators can monitor all seller vacations from:

**Marketplace > Vacations**

**Direct Admin URL**:
```text
wp-admin/admin.php?page=wk-marketplace-vacations
```

<a class="doc-image-link" href="./assets/admin-vacations-list.png"><img src="./assets/admin-vacations-list.png" alt="Admin Vendors on Vacation List" /></a>

#### List Features:
- **Status Filter Tabs**: Filter vacation records by **Active**, **Expired**, or **All**.
- **Information Columns**:
  - **Shop**: Name of the vendor's shop with quick action links (`Edit`).
  - **Vendor**: Display name and email address of the seller account.
  - **From**: Start date of the scheduled vacation.
  - **To**: Return date when the vacation concludes.
  - **Behavior**: Indicates whether the vendor chose to *Prevent sales* or *Keep shop open*.
  - **Status**: Current status of the vacation (*Active*, *Expired*, or *Disabled*).
- **Bulk Actions**: Select multiple vendors and apply **Enable**, **Disable**, or **Delete** with a single click.

---

### Editing a Vendor's Vacation from Admin

Administrators can directly inspect and modify any vendor's vacation schedule by navigating to:

**Marketplace > Vacations > Edit (Under Shop Name)**

**Direct Admin Edit URL**:
```text
wp-admin/admin.php?page=wk-marketplace-vacations&section=edit&vacation_id={ID}
```

<a class="doc-image-link" href="./assets/admin-vacation-edit.png"><img src="./assets/admin-vacation-edit.png" alt="Admin Edit Vacation" /></a>

The Edit Vacation screen provides full administrative control over a seller's vacation dates, sales behavior, and customer-facing notice.

#### Edit Vacation Settings Summary

The table below outlines every parameter and input control available on the Edit Vacation screen:

| Setting Label | Input Type | Default / Values | Description & Operational Behavior |
| :--- | :--- | :--- | :--- |
| **Vendor** | Read-only Display | Shop Name & Email | Displays the seller shop name along with their account email address (e.g., `Lumen Beauty (hello@lumenbeauty.test)`). |
| **Enable vacation mode** | Checkbox | Checked / Unchecked | Admin override switch. Checking this immediately places the vendor into vacation mode across storefront pages. |
| **Schedule vacation mode** | Checkbox | Checked / Unchecked | When checked, displays calendar date pickers to constrain the vacation to a specific date range. |
| **Schedule: From** | Date Picker | Date (`YYYY-MM-DD`) | Starting date when vacation mode begins taking effect. Required if schedule mode is active. |
| **Schedule: To** | Date Picker | Date (`YYYY-MM-DD`) | Concluding date of the vacation. Must be identical to or later than the **From** date. |
| **During the vacation period** | Checkbox | Prevent sales (Default) | Controls purchasing behavior: Check to *"Prevent sales during vacation"* (blocks cart additions). Uncheck to keep the shop open for purchases while showing the message. |
| **Vacation message** | Rich Text Editor | Formatted Text / HTML | Custom announcement shown to customers on the vendor's profile banner and product pages while vacation mode is active. |
| **Update Vacation** | Primary Button | Click to Save | Applies the updated settings to the vendor's store immediately. |
| **Back to Vendors** | Button Link | Return to List | Cancels editing and returns the administrator to the main `Marketplace > Vacations` list. |

#### Detailed Edit Vacation Field Breakdown:

1. **Vendor Information**:
   - Identifies the specific vendor whose store is being managed. Displays both the public shop name and the registered user email address.

2. **Enable vacation mode**:
   - Allows administrators to instantly activate or deactivate vacation mode for this vendor, regardless of whether the vendor turned it on themselves.
   - When unchecked, the vendor's shop is immediately reopened and product purchase buttons return to normal.

3. **Schedule vacation mode (From & To Dates)**:
   - When checked, the schedule date inputs expand.
   - **Validation Rules**:
     - If scheduled mode is active, both **From** and **To** dates are required. If either date is missing, the system displays: *"Please provide both From and To dates for a scheduled vacation."*
     - The **To** date cannot be earlier than the **From** date. If an invalid date range is entered, the system prompts: *"The To date must be the same as or after the From date."*

4. **During the vacation period (Sales Behavior)**:
   - **Prevent Sales (Checked)**: Enforces purchasing blocks. On single product pages, the Add to Cart button is disabled with the configured closed label (e.g., `Shop Closed`). Archive pages reflect the closed state or hide the product based on marketplace settings.
   - **Keep Shop Open (Unchecked)**: The store continues taking customer orders. The custom vacation message still displays on the storefront, setting shopper expectations about fulfillment timelines while allowing ongoing revenue.

5. **Vacation message Editor**:
   - Uses the standard WordPress text editor with **Visual** and **Code** tabs.
   - Administrators can format text (bold, italic, bullet lists, blockquotes) and insert links.
   - This message renders prominently in the storefront vacation announcement banner on the vendor's profile page and individual product detail pages.

6. **Saving Changes**:
   - Clicking **Update Vacation** saves the modified vacation schedule and immediately applies the new rules across the marketplace storefront.
   - A success alert (*"1 vacation updated."*) confirms the update.

---

### Customizing the Vacation Endpoint URL

Store administrators can customize the vendor dashboard URL slug for the vacation section from:

**Marketplace > Settings > Endpoints**

- **Setting Name**: **Vacation**
- **Default URL Slug**: `vendor-vacation`
- **Vendor Dashboard Page**: `https://example.com/my-account/vendor-vacation/`

This allows administrators to tailor the dashboard URL structure to match their marketplace branding or multilingual setup without affecting vacation rules or seller data.
