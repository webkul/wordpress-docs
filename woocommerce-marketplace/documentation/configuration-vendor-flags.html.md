---
title: Configuration – Vendor Flags
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-flags.html
---

# Configuration – Vendor Flags

<a class="doc-image-link" href="./assets/vendor-flags.webp"><img src="./assets/vendor-flags.webp" alt="Vendor Flags" /></a>


The **Vendor Flags** feature allows customers to report vendors from their profile page.

The admin can manage this from:

**Marketplace > Settings > Vendor Flags**

**Direct Admin Navigation Paths**:
- **Settings Sub-tab**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_flags`
- **Reasons Sub-tab**: `wp-admin/admin.php?page=wk-marketplace-settings&tab=seller_flags#/reasons`

::: tip Profile Compatibility Note
Allow customers to report flags on the vendor profile. Please note that this feature is available on the legacy vendor profile layout.
:::

---

## Vendor Flags Overview

- Enables customers to report vendors for issues or concerns
- Helps maintain marketplace quality and trust
- Provides store administrators with early warnings about policy violations, inaccurate listings, or order fulfillment delays
- Promotes transparent and reliable seller operations across your marketplace

---

## Vendor Flags Settings Summary

The table below outlines the core configuration settings available on the Vendor Flags settings page:

| Setting Label | Input Type | Default Setting | Purpose |
| :--- | :--- | :--- | :--- |
| **Enable** | Toggle Switch | Enabled | Turns the vendor flagging feature on or off across vendor profiles. |
| **Vendor Flag Text** | Text Field | `Report Vendor` | The label shown on the button or link that opens the reporting form. |
| **Guest Can Flag** | Toggle Switch | Enabled | Allows non-logged-in guest shoppers to submit vendor flag reports. |
| **Reason Required** | Toggle Switch | Enabled | Mandates that shoppers select or provide a reason before submitting a report. |
| **Accept Custom Reason** | Toggle Switch | Enabled | Permits shoppers to submit custom feedback beyond the predefined reasons list. |
| **Other Field's Placeholder** | Text Field | `Briefly describe the issue` | Guidance text displayed inside the custom reason input box. |

---

## Vendor Flags Settings

### Enable

- Toggle to enable or disable the vendor flag feature

- **How It Works**:
  - When enabled, a report button or link appears on public vendor store profiles.
  - When disabled, the reporting option is hidden completely from all vendor profiles, preventing new report submissions.

---

### Vendor Flag Text

- Text displayed on the vendor profile for flagging
- Example: *Report this vendor*

- **Default Value**: `Report Vendor`
- **How It Works**:
  - Defines the clickable text or button label rendered on the vendor profile.
  - You can customize this label to fit your marketplace tone (such as *Report this vendor*, *Flag Seller*, or *Report an Issue*).

---

### Guest Can Flag

- Allows guest (non-logged-in) users to flag vendors

- **How It Works**:
  - **Enabled**: Unregistered visitors and guests can open the reporting modal and submit flags without signing in.
  - **Disabled**: Only logged-in customers can submit a flag report. Guests will be prompted to log in or register before submitting.

---

### Reason Required

- Forces customers to choose or specify a reason before submitting a flag

- **Default Value**: Enabled
- **How It Works**:
  - When active, the report form prevents submission until the customer selects a predefined flag reason or writes a custom explanation.
  - Helps prevent accidental submissions or empty complaints, ensuring every report contains meaningful feedback.

---

### Accept Other Reasons

- Enables customers to submit custom reasons
- Allows more detailed feedback beyond predefined options

- **Live Setting Label**: `Accept Custom Reason`
- **Default Value**: Enabled
- **How It Works**:
  - Adds an **Other** option to the flag reasons list.
  - When selected, a text input field opens where customers can describe specific issues that are not covered by predefined categories.

---

### Other Field Placeholder

- Text shown in the “Other Reason” input field
- Example: *Please specify your reason*

- **Live Setting Label**: `OTHER FIELD'S PLACEHOLDER`
- **Default Value**: `Briefly describe the issue`
- **How It Works**:
  - Sets the helpful placeholder text shown inside the custom text area to guide users on what information to provide.

---

## Vendor Flag Reasons

- Admin can manage predefined flag reasons
- Available actions:
  - Add new reasons
  - Edit existing reasons
  - Delete reasons

<a class="doc-image-link" href="./assets/vendor-flags-reasons.webp"><img src="./assets/vendor-flags-reasons.webp" alt="Vendor Flag Reasons" /></a>

Marketplace administrators can access the reasons manager by clicking the **Reasons** sub-tab:

```text
Marketplace > Settings > Vendor Flags > Reasons
```

### Flag Reasons Table Reference

The Reasons management screen provides an interactive table listing all current flag categories:

| Column Header | Description |
| :--- | :--- |
| **ID** | Unique numerical identifier for the flag reason. |
| **Reason** | The text label presented to customers in the reporting form. |
| **Status** | A toggle switch allowing admins to quickly activate or deactivate individual reasons without deleting them. |
| **Created At** | Timestamp when the reason was created. |
| **Updated At** | Timestamp when the reason was last edited. |
| **Actions** | Dedicated buttons to **Edit** or **Delete** the reason. |

---

### Adding a New Flag Reason

To add a new predefined reporting reason:

1. Navigate to **Marketplace > Settings > Vendor Flags > Reasons**.
2. Click the **Add Reason** button in the top right corner.
3. In the **Add Reason** dialog:
   - **Reason**: Enter the descriptive reason text (e.g., *Unreasonable shipping delay*).
   - **Status**: Toggle the switch to make the reason active immediately.
4. Click **Submit** to save. The new reason will immediately become selectable on vendor profile report forms.

---

### Managing and Editing Reasons

- **Toggle Reason Status**: Use the toggle switch in the **Status** column to disable a reason temporarily without deleting historical reports.
- **Edit Reason**: Click the **Edit** button next to any reason to modify its wording or change its active status.
- **Delete Reason**: Click **Delete** to permanently remove a reason from the marketplace.

### Built-In Default Reasons

The marketplace includes several standard reasons ready for immediate use:

1. *Poor communication or unanswered messages*
2. *Repeated late dispatch*
3. *Item not as described*
4. *Unclear return or refund policy*
5. *Repeated order cancellations*
6. *Suspected counterfeit or resold goods*
7. *Misleading store or shipping information*
8. *Unresponsive to customer messages*
9. *Other*

---

## Admin Monitoring & Flag Count

Marketplace administrators can monitor vendor report volumes directly from the vendor directory:

1. In the WordPress admin menu, navigate to **Marketplace > Vendors**.
2. The vendors table includes a dedicated **Flag Count** column.
3. This column displays the total number of flags received by each vendor, helping admins quickly spot problematic sellers and conduct investigations.

---

## Customer-Side Reporting Workflow

When a shopper encounters an issue with a vendor:

1. The customer visits the seller's storefront profile.
2. Clicks the **Report Vendor** link or button.
3. A modal opens presenting the active predefined reasons.
4. The customer selects the matching reason (or chooses *Other* and types a custom explanation).
5. The customer clicks **Submit** to register the report with the marketplace administration.

---

## Related Documentation

- [Report / Flag a Vendor (Customer Guide)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-flag-report.html) – Step-by-step buyer guide on how to report a store.
- [Vendor Profile Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html) – Comprehensive guide to vendor storefront profile settings.
- [Configuration – Assets Visibility](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/assets-visibility.html) – Manage visible contact info and customer details on vendor profiles.
- [Configuration – Google Analytics](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-google-analytics.html) – Connect GA-4 tracking and sales reporting.
- [Configuration – General Settings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html) – Marketplace commission and vendor approval settings.
