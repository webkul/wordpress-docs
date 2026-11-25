---
title: Vacation Mode – Vendor / Seller Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-vacation.html
---

# Vacation Mode

The **Vacation Mode** allows vendors to temporarily close their store when they are unavailable. When enabled, the storefront displays a vacation notice with the vendor's custom message and blocks customer purchases.

<a class="doc-image-link" href="./assets/vendor-vacation-overview.webp"><img src="./assets/vendor-vacation-overview.webp" alt="Vacation Mode Overview" /></a>

::: tip Store Administration Note
If you are a marketplace administrator looking to configure global vacation policies, button labels, or backend overrides, please refer to the [Configuration – Vacation Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-vacation-setting.html) guide.
:::

---

## Accessing the Vacation Section

Vendors can manage their holiday schedules directly from the seller panel:

1. Log in to your **Vendor Account**.
2. From the seller dashboard sidebar navigation, click **Vacation**.
3. You will be directed to the **Vacation Overview** page (`/seller/vendor-vacation/`).

---

## Managing the Vacation List

The Vacation dashboard displays all scheduled, active, and past store breaks in an organized table.

<a class="doc-image-link" href="./assets/vendor-vacation-list.webp"><img src="./assets/vendor-vacation-list.webp" alt="Vacation List" /></a>

### Status Filter Tabs

Above the vacation table, vendors can filter records using status tabs with dynamic counters:

- **All**: Displays all created vacation records, including active, inactive, and expired entries.
- **Active**: Filters only the vacations that are currently ongoing.
- **Expired**: Lists past vacations whose scheduled end dates have already passed.

::: tip Vacation Mode vs. Store Hours
At the top of the vacation table, you will see a helpful recommendation:  
*“Need to set daily opening & closing times instead? Manage them in Store Hours.”*

- **Vacation Mode**: Use this for temporary absences, holiday periods, or emergency closures (either on specific dates or indefinite manual breaks).
- **Store Hours**: Use this under your Vendor Profile to set regular daily opening and closing hours for recurring business schedules.
:::

### Vacation Table Columns

The table provides clear details for each vacation record:

| Column | Description |
| :--- | :--- |
| **Checkbox** | Select one or more rows to perform bulk operations. |
| **Status** | Shows the current status badge: `Active` (green), `Inactive` (gray), or `Expired` (orange/red). |
| **Schedule** | Displays the vacation duration. If no end date was chosen, it shows `No end date (manual)`. If scheduled, it displays the date range (for example: `May 20, 2026 → June 2, 2026`). |
| **During vacation** | Indicates customer sales behavior: `Keep shop open` or `Prevent sales during vacation`. |
| **Last updated** | The exact date and timestamp when the vacation record was created or last updated. |
| **Actions** | Quick action controls including **Edit** and **Delete**. |

### Using Bulk Actions

Vendors can manage multiple vacation records at once using the bulk action bar:

1. Select the checkboxes next to the vacation records you want to update (or click the top header checkbox to select all).
2. Click the **Bulk actions** dropdown menu and choose one of the following:
   - **Enable**: Instantly turns on vacation mode for selected entries.
   - **Disable**: Deactivates vacation mode for selected entries.
   - **Delete**: Permanently removes selected vacation records.
3. Click the **Apply** button to confirm and execute the change.

---

## Adding a Vacation

To schedule a new break or close your store temporarily, click the **+ Add Vacation** button located at the top right of the vacation page.

<a class="doc-image-link" href="./assets/vendor-add-vacation.webp"><img src="./assets/vendor-add-vacation.webp" alt="Add Vacation" /></a>

The vacation settings form allows vendors to configure the following settings:

### 1. Enable Vacation Mode
- **Toggle Switch**: Turn this toggle ON to set your shop in vacation mode. Turn it OFF to keep your shop in normal operating mode.

### 2. Schedule Vacation Mode
- **Toggle Switch**: Enable this toggle if you want the vacation to run automatically for a specific date range.
- **Manual Mode (Toggle OFF)**: If left turned off, the vacation remains active continuously with no preset end date (`No end date (manual)`) until you manually return and turn it off.
- **Scheduled Mode (Toggle ON)**: When enabled, the date selection fields appear:
  - **From**: Choose the starting date of your vacation using the calendar picker.
  - **To**: Choose the ending date of your vacation. When this date passes, the store automatically reopens.

### 3. During Vacation Period (Sales Behavior)
Control how your storefront behaves during your absence:
- **Prevent sales during vacation (Toggle ON)**: Customers cannot purchase items from your store. Single product pages and catalog listings disable the Add to Cart button and show the marketplace closed label.
- **Keep shop open (Toggle OFF)**: Customers can continue placing orders normally. The custom vacation banner remains visible across your store to notify buyers of potential processing or shipping delays.

### 4. Vacation Message
- Enter a clear announcement text for your buyers in the rich-text editor.
- The editor supports both **Visual** and **Code** tabs, allowing you to format text with bold, italics, links, blockquotes, and lists.
- This message appears prominently on your vendor store profile banner and single product pages.

### Saving the Vacation
- Click **Save Vacation** to activate and save your new schedule.
- Click **Cancel** or the **Back** button at the top if you wish to return to the vacation list without saving.

---

## Editing a Vacation

Vendors can update an existing vacation schedule at any time:

1. From the Vacation list, find the vacation entry and click **Edit** under the **Actions** column.
2. The **Edit Vacation** page opens (`?section=settings&vacation_id=<id>`) with all previous details pre-filled.

<a class="doc-image-link" href="./assets/vendor-edit-vacation.webp"><img src="./assets/vendor-edit-vacation.webp" alt="Edit Vacation" /></a>

Vendors can modify existing schedules at any time:
- Adjust vacation start or return dates if plans change.
- Update the custom vacation announcement message.
- Toggle sales prevention on or off during an ongoing break.
- Disable vacation mode early to reopen the store before the scheduled end date.
- Click **Update Vacation** to apply the changes, or click **Cancel** to discard edits.

---

## Deleting a Vacation

Vendors can remove vacation records that are no longer needed:

- **Single Record Deletion**: In the Vacation table, click the **Delete** button under the **Actions** column for that row. A confirmation dialog will prompt: *"Delete this vacation?"*. Click **OK** to confirm removal.
- **Bulk Deletion**: Check the boxes next to the vacation records, select **Delete** from the **Bulk actions** dropdown, and click **Apply**.

---

## Storefront Behavior & Customer Experience

When a vendor initiates a vacation, the marketplace automatically reflects the seller's status across their store:

1. **Vendor Store Profile Banner**:
   - A dedicated notice banner appears at the top of the vendor's store page.
   - Displays the vendor's custom announcement (for example: *"We are away on holiday from Dec 20 to Jan 2. Orders placed now will be processed upon our return."*).

2. **Single Product Pages (`PDP`)**:
   - A vacation announcement alert appears on the product detail page.
   - If sales prevention is activated, the Add to Cart button is disabled and displays the marketplace closed label (such as `Shop Closed`).

3. **Product Catalog & Archive Pages (`PLP`)**:
   - Product cards display the archive closed label (such as `Currently Closed`).
   - If the marketplace administrator has enabled closed product hiding, products from closed vendors are filtered out from catalog listings and search results until the vacation concludes.

4. **Automated Store Reopening**:
   - Once the vacation end date passes, the marketplace's automated daily task restores the vendor's store to normal operating status and re-enables customer purchases.

---

## Best Practices for Vacation Mode

- **Schedule in Advance**: Plan vacations several days before departure to allow sufficient time to package and ship pending customer orders.
- **Provide Clear Dates**: Include expected return dates and order dispatch timelines in your custom vacation message to set realistic expectations for buyers.
- **Fulfill Existing Commitments**: Complete and mark open orders as dispatched before stepping away to keep fulfillment metrics and customer satisfaction ratings high.
- **Keep Shop Open for Pre-Orders**: If you manufacture products or accept advance backorders, consider leaving sales enabled with a clear notice explaining when shipping will resume.
