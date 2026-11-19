---
title: Graph Setting – Vendor / Seller Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-graph-setting.html
---

# Graph Setting

The **Graph Setting** page (`/seller/seller-graph-setting/`) allows vendors to personalize the appearance and visual styling of dashboard charts, analytics widgets, financial sparklines, and reporting graphs.

Vendors can navigate to this screen from the vendor panel menu under **Settings → Graph Setting**.

---

## Overview

Marketplace vendors often rely on charts and graphs to quickly monitor their store performance, sales revenue, customer growth, and product catalog quality. With **Graph Setting**, each vendor can customize color palettes and chart types to fit their personal visual preferences or brand colors.

<a class="doc-image-link" href="./assets/vendor-graph-setting-overview.png"><img src="./assets/vendor-graph-setting-overview.png" alt="Vendor Graph Setting Cards Overview" /></a>

The Graph Setting hub organizes all customizable visual elements into five dedicated cards:

| Section Card | Associated Endpoints | Total Graphs | Description |
| :--- | :--- | :---: | :--- |
| **Dashboard** | `vendor-dashboard` | 15 | Sales vs. commission, trends, customer comparisons, order statuses, country map, profile score, and stat card sparklines. |
| **Reports** | `seller-reporting-sales`, `seller-reporting-products`, `seller-reporting-customers` | 10 | Comprehensive reporting graphs for revenue, taxes, payment methods, units sold, and customer metrics. |
| **Transactions** | `vendor-transactions` | 5 | Micro sparkline graphs displayed across payout, withdrawal, and refund summary cards. |
| **Performance** | `seller-account-health` | 1 | The Account Health Score gauge meter and status thresholds. |
| **Products** | `vendor-edit-product` | 1 | The Listing Completeness progress bar displayed on the product edit screen. |

---

## Common Features Across Graph Setting Cards

Each card page is designed with an intuitive two-column layout:
- **Left Column (Live Preview)**: Displays an interactive, real-time preview of the actual card or chart widget as it appears in the seller panel.
- **Right Column (Graph Settings)**: Provides chart type selections and individual color pickers.

<a class="doc-image-link" href="./assets/vendor-graph-setting-dashboard.png"><img src="./assets/vendor-graph-setting-dashboard.png" alt="Vendor Graph Setting Dashboard Configuration" /></a>

### Key Controls & Actions:

- **Chart Type Switcher**: Choose your preferred data visualization mode where available (for example, **Bar**, **Line**, or **Area** for trend charts; **Doughnut**, **Pie**, or **Bar** for status breakdowns).
- **Interactive Color Pickers**: Click any color box to open the native color selector, or type any valid HEX color code directly.
- **Default Color Label**: Each color setting clearly displays its original default HEX value (e.g., `Default #a1b5f5`) for easy reference.
- **Single Color Reset (`↻`)**: Click the rotate icon button next to any color picker to instantly revert that single color back to its factory default without reloading the page.
- **Save Changes**: Click the primary **Save Changes** button at the bottom of the section to save your adjustments.
- **Reset section to default**: Click the ghost button to reset all chart styles and color pickers in that card back to their default theme settings after confirming the prompt.
- **Back Button**: Located at the top right of the page header to quickly return to the main Graph Setting hub.

---

## 1. Dashboard Graphs

Vendors can access this section by selecting **Dashboard** on the hub or visiting `/seller/seller-graph-setting/?wkmp_card=dashboard`.

This section controls the 15 visual elements shown on the main vendor dashboard:

### Comparison & Trend Charts
- **Sales vs Commission**: Compare gross sales volume against marketplace commission. Vendors can switch between **Bar (default)**, **Line**, and **Area** formats, and customize the **Sales** and **Commission** colors.
- **Customers vs Orders**: Track customer growth alongside order frequency using **Bar (default)**, **Line**, or **Area** layouts with separate colors for **Customers** and **Orders**.
- **Trends: Sales**: View daily, weekly, or monthly sales trajectories using **Bar (default)**, **Line**, or **Area** graphs.
- **Trends: Orders**: Monitor order count trends over time with customizable **Bar (default)**, **Line**, or **Area** representations.

### Order Status Distribution
- **Order Status Chart**: Displays the breakdown of store orders by fulfillment status.
- **Supported Layouts**: **Doughnut (default)**, **Pie**, or **Bar**.
- **Customizable Status Colors**:
  - **Completed** (Default `#34d298`)
  - **Pending** (Default `#fdc700`)
  - **Processing** (Default `#8ec5ff`)
  - **Cancelled** (Default `#cad5e2`)
  - **Refunded** (Default `#7c86ff`)
  - **Failed** (Default `#ff6467`)
  - **Other statuses** (Default `#dddddd`)

### Geographic & Profile Analytics
- **Top Billing Countries Map**: Interactive world map illustrating where store orders originate. Vendors can configure:
  - **With sales**: Highlight color for countries generating orders (Default `#0a0a0a`).
  - **Without sales**: Base land color for countries without orders (Default `#f5f5f5`).
- **Profile Score**: Circular arc meter showing vendor profile completion percentage:
  - **Score Progress**: Arc indicator fill color (Default `#a1b5f5`).
  - **Track Background**: Arc background circle color (Default `#ebebeb`).

### Stat Card Sparklines (8 Metric Cards)
Each summary card at the top of the vendor dashboard contains a subtle sparkline curve:
- **Total Sales**: Sparkline stroke color.
- **Total Orders**: Sparkline stroke color.
- **Total Customers**: Sparkline stroke color.
- **Average Order Sell**: Sparkline stroke color.
- **Total Payout**: Sparkline stroke color.
- **Remaining Payout**: Sparkline stroke color.
- **Customer Feedback**: Sparkline stroke color.
- **Account Health**: Sparkline stroke color.

---

## 2. Reports Graphs

Vendors can access this section by selecting **Reports** on the hub or visiting `/seller/seller-graph-setting/?wkmp_card=reports`.

<a class="doc-image-link" href="./assets/vendor-graph-setting-reports.png"><img src="./assets/vendor-graph-setting-reports.png" alt="Vendor Graph Setting Reports Configuration" /></a>

This section controls 10 charts used across the marketplace sales, product, and customer analytics screens:

- **Sales Reporting (Revenue & Volumes)**:
  - **Total Sales**: Line, Bar, or Area representation for overall store revenue.
  - **Total Commission**: Line, Bar, or Area tracking of vendor commission earnings.
  - **Total Orders**: Line, Bar, or Area chart of placed customer orders.
  - **Average Order Value (AOV)**: Line, Bar, or Area chart tracking basket spend over time.
- **Taxes & Payment Insights**:
  - **Tax Collected**: Line, Bar, or Area chart for sales tax amounts.
  - **Top Tax Rates**: Doughnut, Pie, or Bar chart displaying distribution by applied tax bracket.
  - **Refunds**: Line, Bar, or Area visualization of order refund volume.
  - **Top Payment Methods**: Doughnut, Pie, or Bar chart detailing customer payment gateway usage.
- **Product & Customer Analytics**:
  - **Products Reporting (Units Sold)**: Line, Bar, or Area graph showing quantity of product items sold.
  - **Customers Reporting (Total Customers)**: Line, Bar, or Area graph tracking repeat and new customer acquisition.

---

## 3. Transactions Graphs

Vendors can access this section by selecting **Transactions** on the hub or visiting `/seller/seller-graph-setting/?wkmp_card=transactions`.

<a class="doc-image-link" href="./assets/vendor-graph-setting-transactions.png"><img src="./assets/vendor-graph-setting-transactions.png" alt="Vendor Graph Setting Transactions Configuration" /></a>

The transactions page (`vendor-transactions`) provides financial summaries for seller earnings and withdrawal requests. Vendors can configure the sparkline stroke color (Default `#00a63e`) for each card:

- **Total Earning**: Sparkline for lifetime net earnings accumulated.
- **Total Withdraw**: Sparkline for funds successfully withdrawn to the vendor bank or payment account.
- **Total Pending Withdraw**: Sparkline for withdrawal requests currently under admin review.
- **Total Refunded**: Sparkline for payments deducted due to customer refunds.
- **Last Withdraw**: Sparkline tracking the most recent payout disbursement.

---

## 4. Performance Graphs

Vendors can access this section by selecting **Performance** on the hub or visiting `/seller/seller-graph-setting/?wkmp_card=performance`.

<a class="doc-image-link" href="./assets/vendor-graph-setting-performance.png"><img src="./assets/vendor-graph-setting-performance.png" alt="Vendor Graph Setting Performance Health Score Configuration" /></a>

This section customizes the visual gauge for the vendor's **Account Health Score** (`seller-account-health`):

- **Health Gauge Segments**:
  - **Unhealthy** (Default `#f43f5e`): Represents low performance scores requiring immediate attention.
  - **At Risk** (Default `#fdc700`): Represents borderline performance scores.
  - **Healthy** (Default `#34d298`): Represents high compliance and solid store operational standing.
- **Marker Color** (Default `#0a0a0a`): Controls the needle marker that points to the vendor's calculated score on the gauge meter.

::: tip Live Score Calculator
The colors chosen in this section are also shared by the interactive score calculation breakdown in the "How is this calculated?" guide on the vendor account health page.
:::

---

## 5. Products Graphs (Listing Completeness)

Vendors can access this section by selecting **Products** on the hub or visiting `/seller/seller-graph-setting/?wkmp_card=products`.

<a class="doc-image-link" href="./assets/vendor-graph-setting-products.png"><img src="./assets/vendor-graph-setting-products.png" alt="Vendor Graph Setting Products Listing Completeness Configuration" /></a>

This section controls the visual styling of the **Listing Completeness** progress bar:

- **Filled Color** (Default `#34d298`): The active progress fill showing the current completeness percentage.
- **Track Color** (Default `#ebebeb`): The background track representing remaining uncompleted product details.

### How It Works on the Product Edit Page:
- When a vendor creates or edits a product (`vendor-edit-product`), the **Listing Completeness** card appears near the top of the form.
- The progress bar dynamically calculates the product completeness score (e.g., 35%, 60%, 100%) based on vital fields like product title, featured image, categories, price, short description, and attributes.
- Vendors can expand the missing details checklist to see exactly which fields need attention to optimize their product visibility in marketplace search and category filters.
- The colors customized in **Graph Setting → Products** reflect directly on this progress bar across all product edit screens.

---

## Summary of Graph Settings Workflow

1. Navigate to **Settings → Graph Setting** from the vendor sidebar menu.
2. Select the card section you wish to customize: **Dashboard**, **Reports**, **Transactions**, **Performance**, or **Products**.
3. Choose your preferred **Chart Type** (Bar, Line, Area, Doughnut, Pie) for supported graphs.
4. Select desired hues using the **Color Pickers**, or click the **Reset (`↻`)** button next to any color to revert it individually.
5. Click **Save Changes** at the bottom of the page to apply the updates immediately.
6. To restore an entire card back to default settings at any time, click **Reset section to default** and confirm the prompt.
