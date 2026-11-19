---
title: Commission Management
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/commission-management.html
---

# Commission Management

<a class="doc-image-link" href="./assets/marketplace-settings.webp"><img src="./assets/marketplace-settings.webp" alt="Marketplace Commission Settings" /></a>

The **Commission Management** feature allows the admin to define how commissions are calculated and distributed between the admin and vendors.

---

## Global Commission Configuration

- The admin can set a **Fixed Commission** and a **Percentage Commission**.
- These commission rules apply to **all vendors** by default.
- Configuration path:
  - **Marketplace → Settings → General → Default Commission**

::: info Global Default Commission Configuration
To configure the platform-wide fallback commission structure (fixed flat amount, percentage rate, or combined model) and discount deductions, visit the [Default Commission Configuration](./configuration-general-settings.html#default-commission) in General Settings.
:::

---

## Commission Calculation Example

- Fixed Commission: **5 USD**
- Percentage Commission: **10%**
- Product Price: **100 USD**

### Calculation

- Percentage Commission: 10% of 100 USD = **10 USD**
- Fixed Commission: **5 USD**
- **Total Admin Commission:** 15 USD
- **Vendor Earnings:** 85 USD

---

## Order Management (Commission View)

The commission details are visible from the **Orders section** and not from the Commission settings page.

### Navigation Path

- Go to **Marketplace → Orders**
- This opens the **Marketplace Orders listing page**

### Commission Details in Orders

Under the **Orders** tab, the admin can view detailed commission-related information for each order.

#### Visible Columns

- Order ID
- Product
- Quantity
- Product Total
- Shipping
- Discount
- **Total Commission**
- **Total Vendor Amount**
- Action

This section helps the admin track:
- Commission earned per order
- Final payable amount to the vendor

<a class="doc-image-link" href="./assets/sellers-orders-list.webp"><img src="./assets/sellers-orders-list.webp" alt="Seller Orders List" /></a>

---

## Vendor-Specific Commission

The admin can set a commission rate for an individual vendor from that vendor's own management view.

### Navigation Path

- Go to **Marketplace → Vendors**
- The list of all registered vendors is displayed
- Click the **Manage** button next to the vendor you want to update
- In the vendor's management view (their profile), open the **Commissions** section

For the full vendor management view, see [Manage Vendor](./vendor-management-and-product-assignment.html#manage-vendor).

### Vendor Commission Configuration

From the vendor's **Commissions** page, the admin can:

- Set a **vendor-specific fixed commission**
- Set a **vendor-specific percentage commission**
- Override the **global commission settings** for this vendor
- View the vendor's total sales and the admin commission earned

> **Note:** Vendor-specific commission settings take precedence over global commission settings.

---
