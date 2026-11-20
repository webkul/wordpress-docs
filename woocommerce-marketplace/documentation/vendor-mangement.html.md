---
title: Vendor Badge Management
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-mangement.html
---

# Vendor Badge Management

The **Vendor Badges** feature allows marketplace admins to recognize, reward, and showcase vendor performance. Badges act as trust indicators and are displayed on vendor profile pages to improve buyer confidence.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-vendor-assigned-badge.webp"><img src="./assets/marketplace-admin-setting-vendor-assigned-badge.webp" alt="Marketplace Admin Setting Vendor Assigned Badge" /></a>

::: tip Why Badges Matter for Marketplace Growth
Badges serve as verified digital credentials for sellers. Highlighting seller milestones—such as fast shipping, verified craftsmanship, or flawless ratings—helps shoppers make quicker purchasing choices while motivating vendors to keep service standards high.
:::

---

## Admin Badge Management

Admins can manage all vendor badges from the marketplace admin panel.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-badge-list.webp"><img src="./assets/marketplace-admin-setting-badge-list.webp" alt="Marketplace Admin Setting Badge List" /></a>

*(Marketplace → Badges section)*

- Create unlimited custom vendor badges
- Control badge visibility using status (Enabled/Disabled)
- Assign priority using badge ranking
- Upload custom badge images for visual recognition

<a class="doc-image-link" href="./assets/admin-marketplace-badges-list.png"><img src="./assets/admin-marketplace-badges-list.png" alt="Badges Management Central Console" /></a>

### Badges List Table & Column Breakdown

From **Marketplace → Badges**, the administrator can view all configured badges in a clean overview table.

| Column Header | Element Type | Description | Available Action |
| :--- | :--- | :--- | :--- |
| **Checkbox** | Selection | Selects individual badges or all badges using the top checkbox. | Allows bulk status updates or deletion. |
| **Id** | Numeric ID | Unique identification number assigned to each badge (sortable). | Hover over the ID to reveal quick **Edit** and **Delete** actions. |
| **Badge(s)** | Badge Icon | Visual icon image representing the badge. | Hovering over the icon displays a tooltip showing the badge name and description. |
| **Badge Name** | Text | The public title of the badge (e.g., *Top Rated Vendor*, *Fast Dispatch*). | Displays in the admin list and on the seller storefront profile. |
| **Badge Description** | Text | Explanatory criteria and qualification requirements. | Explains the criteria required to earn the badge to vendors and shoppers. |
| **Rank** | Numeric Rank | Priority display order for badges (sortable). | Lower numbers set higher priority, deciding which badges show first on vendor profiles. |
| **Status** | Status Label | Shows whether the badge is currently **Enabled** or **Disabled**. | Only enabled badges appear on storefront seller profiles. |
| **Action** | Quick Toggle | One-click status switch link (**Enable** or **Disable**). | Instantly switches the badge status without needing to open the edit screen. |

---

### Search and Filter Capabilities

Administrators managing large catalogs of vendor badges can quickly filter records using built-in search and column sorting.

<a class="doc-image-link" href="./assets/marketplace-admin-setting-badge-operation.webp"><img src="./assets/marketplace-admin-setting-badge-operation.webp" alt="Marketplace Admin Setting Badge Operation" /></a>

1. **Search by Badge Name**:
   - Locate the **Search Box** in the top-right corner above the table.
   - Enter any keyword or partial name into the **Search By Badge Name** field.
   - Click **Search badges** to display matching records instantly.

2. **Column Sorting (ID & Rank)**:
   - Click the **Id** column header to sort badges in ascending or descending numerical order.
   - Click the **Rank** column header to sort badges by their priority sequence.

---

### Bulk Actions for Badges

Administrators can update or remove multiple badges simultaneously to save time:

1. Check the boxes next to the badges you want to modify, or click the top-left checkbox to select all.
2. Select an option from the **Bulk actions** dropdown menu:
   - **Enable**: Activates all selected badges.
   - **Disable**: Deactivates all selected badges without deleting them.
   - **Delete**: Permanently removes the selected badges from the marketplace.
3. Click the **Apply** button to execute the bulk operation.

---

### Direct Vendor Assignment Toolbar

In addition to editing vendor profiles, the Badges management table includes a dedicated toolbar for rapid badge assignments:

<a class="doc-image-link" href="./assets/marketplace-admin-setting-badge-assign-to-vendor.webp"><img src="./assets/marketplace-admin-setting-badge-assign-to-vendor.webp" alt="Marketplace Admin Setting Badge Assign To Vendor" /></a>

- **Select Vendor Dropdown**: A dropdown menu containing all registered vendors in the marketplace (e.g., *Aurora Athletics*, *Volt & Vine*, *Maison Terra*).
- **Assign Button**: Immediately awards all selected badges to the chosen vendor.
- **UnAssign Button**: Revokes the selected badges from the chosen vendor.

::: note Instant Profile Update
Using the **Assign** or **UnAssign** buttons from this toolbar updates the vendor account immediately and refreshes their storefront badge display.
:::

---

## Add New Badge

<a class="doc-image-link" href="./assets/marketplace-admin-setting-badge-add-new.webp"><img src="./assets/marketplace-admin-setting-badge-add-new.webp" alt="Marketplace Admin Setting Badge Add New" /></a>


Admins can create a new badge by filling in the following fields:

- **Badge Name**
  - Alphanumeric name (e.g., Gold, Silver, Platinum)
- **Badge Description**
  - Short explanation of eligibility
  - Example: *For 10,000 sales and above*
- **Rank**
  - Determines badge priority when multiple badges exist
- **Status**
  - Enable or disable the badge instantly
- **Badge Image**
  - Upload a custom badge icon

This allows full control over how badges appear and function in the marketplace.

### Badge Form Fields & Requirements

When adding a new badge via **Marketplace → Badges → Add New**, complete the following fields:

| Field Label | Input Type | Requirements & Limits | Description |
| :--- | :--- | :--- | :--- |
| **Badge Name** | Text Field | Required. Only alphanumeric characters and spaces are allowed. | The official title of the badge displayed in lists and storefront cards. |
| **Badge Description** | Text Area | Required. Maximum length of 200 characters. | Short explanation detailing how a seller earns this badge. |
| **Rank** | Number Field | Required. Positive integer (minimum value: 1). | Controls priority order when multiple badges are displayed together. |
| **Status** | Dropdown | Required. Options: **Enabled** (active) or **Disabled** (inactive). | Determines if the badge is active and eligible for storefront display. |
| **Badge Image** | Media Upload | Required. Accepts PNG, JPEG, SVG, or WebP formats (recommended: 100×100px or 512×512px). | Visual emblem displayed across vendor shop pages. |

::: info Form Submission
All fields on the Add Badge screen are required. Click **Add Badge** to validate your entries and save the new badge.
:::

---

## Update Existing Badge

<a class="doc-image-link" href="./assets/update-badge.webp"><img src="./assets/update-badge.webp" alt="Edit Badges" /></a>


Admins can update badge details at any time:

- Edit badge name or description
- Change badge rank
- Replace badge image
- Enable or disable the badge without deleting it

This ensures badge criteria remain relevant as the marketplace evolves.

<a class="doc-image-link" href="./assets/admin-update-badge-form.png"><img src="./assets/admin-update-badge-form.png" alt="Update Badge Form Screen" /></a>

### How to Edit an Existing Badge

1. Go to **Marketplace → Badges**.
2. Hover over the badge record you want to modify and click the **Edit** link under the badge ID.
3. The **Update Badge** screen opens with all current details pre-populated.
4. Modify the required details (such as updating description text, adjusting rank, or uploading a new icon).
5. Click **Update Badge** to save your modifications.

::: tip Instant Status Switch
If you only need to pause or activate a badge without modifying its details, use the **Action** column in the main Badges table. Click **Disable** to deactivate it or **Enable** to turn it back on instantly.
:::

---

## Assign Badge to Vendor

<a class="doc-image-link" href="./assets/vendor-details-badge.webp"><img src="./assets/vendor-details-badge.webp" alt="Vendor Detail Badge" /></a>

*(Vendor → Details section)*

- Admins can assign badges directly from the vendor profile page
- Multiple badges can be assigned based on vendor performance
- Assigned badges are immediately linked to the vendor account

**Example:**
A vendor completing **10,000+ successful sales** can be awarded the **Gold Badge**.

<a class="doc-image-link" href="./assets/admin-vendor-details-assigned-badges.png"><img src="./assets/admin-vendor-details-assigned-badges.png" alt="Assigned Badges in Vendor Details Tab" /></a>

### Comparing Badge Assignment Methods

Marketplace administrators have two flexible workflows to assign or revoke badges:

| Assignment Method | Navigation Path | Best Used For |
| :--- | :--- | :--- |
| **Method 1: Direct Table Toolbar** | **Marketplace → Badges** | Quick bulk assignments. Select multiple badges, pick a vendor from the dropdown, and click **Assign** or **UnAssign**. |
| **Method 2: Vendor Details Profile** | **Marketplace → Vendors → Manage (Details Tab)** | Individual vendor audits. Review all active credentials awarded to a specific vendor in their account profile. |

---

## Badge Display on Vendor Profile

The assigned badges are **visible to the customer at the vendor profile at the frontend**. This ensures that customers can immediately recognize verified and high-performing sellers directly from the shop page.

<a class="doc-image-link" href="./assets/vendor-profile-badges.webp"><img src="./assets/vendor-profile-badges.webp" alt="Vendor Profile Badge Display" /></a>

- Customers can view specific certifications such as **Top Rated Vendor** and **On Time Delivery**.
- The badges help customers quickly identify trusted and reliable marketplace partners.
- This visibility improves transparency and helps customers make faster, more confident purchase decisions.

<a class="doc-image-link" href="./assets/storefront-vendor-badges-live.png"><img src="./assets/storefront-vendor-badges-live.png" alt="Storefront Vendor Profile Badges Widget Grid" /></a>

### Storefront Customer Experience

When buyers visit a seller's shop page (`/vendor/<vendor-slug>/`):

1. **Badge Grid Display**: Badges appear in the seller sidebar or header section within a responsive grid layout.
2. **Interactive Tooltips**: Hovering the cursor over any badge icon reveals a tooltip detailing the badge title and the exact criteria required to achieve it.
3. **Rank Ordering**: Badges are arranged according to their numeric rank, ensuring top-tier achievements (such as *Top Rated Vendor* or *Verified Maker*) take prominent visibility.

---

## Benefits of Vendor Badges

- ✔ Builds trust and credibility
- ✔ Rewards top-performing vendors
- ✔ Motivates vendors to improve performance
- ✔ Enhances marketplace professionalism
- ✔ Improves customer decision-making

---

## Admin Vendors List

The admin can manage all vendors from the marketplace admin panel.

- **Bulk Approve and Disapprove**: Admins can easily perform bulk actions to approve or disapprove multiple vendors directly from the Vendors list.

<!-- <a class="doc-image-link" href="./assets/placeholder-bulk-approve.png"><img src="./assets/placeholder-bulk-approve.png" alt="Bulk Approve Vendors" /></a> -->

For complete vendor management workflows including seller onboarding, commission configurations, transaction monitoring, and product assignment, refer to the full [Vendor Management and Product Assignment](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-management-and-product-assignment.html) guide.

---

## Vendor Listing Page

- **Vendor Listing**: The selected Vendor page (configured in general settings) displays a listing of all active vendors on the storefront, allowing customers to easily browse and discover different stores.

<!-- <a class="doc-image-link" href="./assets/placeholder-vendor-listing.png"><img src="./assets/placeholder-vendor-listing.png" alt="Vendor Listing" /></a> -->

Learn more about customer-facing seller storefronts and layout configurations in [Vendor Profile](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html).

---

## Related Guides & Documentation

- [Vendor Management and Product Assignment](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-management-and-product-assignment.html) – Comprehensive seller list management, order oversight, commissions, and product assignments.
- [Vendor Profile](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-profile.html) – Configure public storefront details, banners, social profiles, and store policies.
- [Vendor KYC Verification](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-kyc.html) – Verify identity documents before awarding trust credentials.
- [Configuration – Vendor Flags](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-vendor-flags.html) – Monitor customer feedback and product flags to maintain marketplace quality.
- [Vendor Staff Management](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-staff.html) – Grant staff sub-accounts for delegated store management.
