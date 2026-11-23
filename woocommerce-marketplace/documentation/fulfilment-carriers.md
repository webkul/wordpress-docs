---
title: Configuration – Fulfilment Carriers
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/fulfilment-carriers.html
---

# Configuration – Fulfilment Carriers

The **Fulfilment Carriers** settings tab allows marketplace administrators to configure the delivery carriers available across the marketplace. When orders are placed using non-integrated delivery methods—such as **Free Shipping** or **Flat Rate**—vendors can assign an authorized courier and add tracking identifiers during order dispatch.

Administrators have full centralized control over the carrier catalog and can customize the built-in manual **Self Ship** fallback label shown to sellers.

The marketplace administrator can access and configure this section from:

**Marketplace > Settings > Fulfilment Carriers**

**Direct Admin Navigation URL**:
- `wp-admin/admin.php?page=wk-marketplace-settings&tab=fulfilment_carriers`

<a class="doc-image-link" href="./assets/admin-fulfilment-carriers-settings.webp"><img src="./assets/admin-fulfilment-carriers-settings.webp" alt="Admin Fulfilment Carriers Settings" /></a>

---

## Admin Settings Summary

The table below outlines each configuration option available on the **Fulfilment Carriers** administration tab:

| Setting Label | Input Type | Default Setting | Functional Purpose |
| :--- | :--- | :--- | :--- |
| **Schedule Pickup** | Checkbox | Enabled (Checked) | Master switch. Enables the **Schedule Pickup** action button on eligible orders in vendor order lists. |
| **Self Ship (Manual)** | Text Input | `Manual (Own Arrangement)` | Custom label shown to vendors for the built-in manual courier fallback. This option is always available and cannot be removed. |
| **Carriers** | Repeatable Table | Empty list | Registry of administrator-defined couriers. Contains **Carrier Name**, **Enabled** checkbox, and **Remove** action button. |
| **Save Configuration** | Primary Button | Click to Save | Immediately stores updated carrier settings without overwriting other marketplace options. |

---

## Detailed Admin Settings

### 1. Schedule Pickup

- **Setting Type**: Checkbox
- **Default State**: Enabled (Checked)
- **Field Description**: *"Let vendors schedule a carrier pickup from their order list."*

#### Operational Impact:
- **When Enabled**:
  - Eligible orders in vendor order lists display a dedicated **Schedule Pickup** action button.
  - The schedule pickup endpoint becomes active for vendors and authorized staff.
  - Vendors can select approved carriers, enter parcel tracking codes, and dispatch customer order notifications.
- **When Disabled**:
  - The **Schedule Pickup** button is hidden from all vendor order lists.
  - Access to the schedule pickup endpoint is blocked, returning an informational notice that pickup scheduling is disabled.
  - Historical shipments and existing tracking notes previously saved on orders remain completely unaffected.

---

### 2. Self Ship (Manual)

- **Setting Type**: Text Field
- **Default Value**: `Manual (Own Arrangement)`
- **Placeholder**: `Manual (Own Arrangement)`
- **Field Description**: *"Title shown to vendors. The built-in fallback: the vendor arranges their own courier and enters the carrier name and tracking number by hand. Always available and cannot be switched off."*

#### Operational Impact:
- **Built-in Fallback**: The Self Ship option serves as the primary manual fulfillment method. It ensures that vendors can always fulfill orders using local couriers, regional logistics partners, or private delivery fleets even if the administrator has not registered external carriers.
- **Always Available**: Unlike custom carriers, Self Ship cannot be deleted or toggled off. It is permanently accessible as long as the Schedule Pickup master switch is active.
- **Customizable Label**: Administrators can rename this option to reflect marketplace terminology, such as *"Standard Courier"*, *"Vendor Own Courier"*, or *"Manual Dispatch"*. If left blank, the system automatically falls back to *"Manual (Own Arrangement)"*.

---

### 3. Carriers Management Table

- **Setting Type**: Dynamic repeatable table
- **Sub-Description**: *"Vendors see the enabled carriers after Self Ship. A carrier name saved on a pickup stays as it was when you rename or remove the carrier."*

The Carriers table allows administrators to curate a standardized list of couriers that vendors can pick from a dropdown menu.

| Column | Control Type | Description |
| :--- | :--- | :--- |
| **Carrier Name** | Text Input | The descriptive name of the courier company (e.g., `DHL Express`, `FedEx Ground`, `UPS`, `Royal Mail`). |
| **Enabled** | Checkbox | Activates or temporarily deactivates the carrier. When unchecked, vendors will not see this carrier in their dropdown menu. |
| **Actions** | Button Link | Displays a red **Remove** link to delete the carrier from the active registry. |

#### Adding a New Carrier:
1. Click the **Add Carrier** button beneath the table.
2. A new row will appear with an empty **Carrier Name** field and the **Enabled** checkbox ticked by default.
3. Enter the official carrier title (e.g., `DHL Express`).
4. Click **Save Configuration** at the bottom of the page.

#### Editing & Deleting Carriers:
- **Reordering & Renaming**: Update the spelling or title of an existing carrier at any time and click **Save Configuration**.
- **Disabling Without Deleting**: Uncheck the **Enabled** box to hide a carrier from vendors without losing its entry.
- **Removing**: Click **Remove** to delete the row, then click **Save Configuration**.
- **Historical Data Safety**: Each scheduled pickup saves a complete snapshot of the carrier's name directly with the order. Renaming or removing a carrier never alters historical records or previously sent customer tracking emails.

::: note Vendor Order Fulfillment
Detailed vendor-side instructions for scheduling pickups and entering tracking numbers will be covered in the Vendor Orders documentation.
:::
