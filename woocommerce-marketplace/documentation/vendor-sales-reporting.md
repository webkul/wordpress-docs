---
title: Sales Reporting – Vendor / Seller Guide | WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-sales-reporting.html
---

# Sales Reporting

In **WooCommerce Multi-Vendor Marketplace**, the **Sales Reporting** console gives vendors a powerful, real-time analytics hub to evaluate store performance, revenue growth, and customer purchasing patterns. Instead of guessing how your shop is performing, you can view clear metrics, interactive trend graphs, and detailed breakdown tables for every transaction.

<a class="doc-image-link" href="./assets/vendor-sales-reporting-dashboard.webp"><img src="./assets/vendor-sales-reporting-dashboard.webp" alt="Vendor Sales Reporting Dashboard Overview in WooCommerce Multi-Vendor Marketplace" /></a>

Sales Reporting helps sellers:
- **Track Net Revenue:** Monitor your actual take-home earnings after marketplace commissions are deducted.
- **Review Commission Deductions:** Keep an accurate record of marketplace commission fees across any timeframe.
- **Analyze Purchasing Habits:** Understand your average order value (AOV), total order count, and most popular payment methods.
- **Compare Historical Performance:** Benchmark current sales against previous timeframes to identify growth trends or seasonal shifts.
- **Export Accounting Data:** Download granular sales tables in **CSV** or **PDF** format for bookkeeping and tax preparation.

---

## Accessing Sales Reporting

Marketplace vendors can access the Sales Reporting dashboard directly from their seller panel:

1. Log in to your **Seller Account**.
2. In the left navigation menu, scroll down to the **Reporting** section.
3. Click **Sales Reporting** to open the analytics dashboard.

<a class="doc-image-link" href="./assets/vendor-sales-reporting-sidebar-nav.webp"><img src="./assets/vendor-sales-reporting-sidebar-nav.webp" alt="Locating Sales Reporting under the Reporting Section in Seller Navigation" /></a>

| Access Method | Location / Path | Purpose |
| :--- | :--- | :--- |
| **Seller Navigation Menu** | `Reporting` &rarr; `Sales Reporting` | Opens the main sales analytics dashboard with KPI cards and interactive charts. |
| **Direct URL** | `/seller/seller-reporting-sales/` | Direct browser link to the main sales reporting screen. |
| **Granular Breakdown View** | `/seller/seller-reporting-sales/?wkmp_view=[metric]` | Opens dedicated tabular reports with daily, monthly, or yearly intervals and export options. |

::: tip Mobile Navigation
On smartphones and tablets, tap the **Open menu** hamburger button in the top navigation bar, expand the **Reporting** section, and select **Sales Reporting**.
:::

---

## Executive KPI Summary Cards

At the top of the Sales Reporting dashboard, four high-level **KPI (Key Performance Indicator) Cards** display your store's primary performance metrics. Each card highlights the current total and shows a percentage trend indicator compared against the preceding period.

<a class="doc-image-link" href="./assets/vendor-sales-reporting-kpi-cards.webp"><img src="./assets/vendor-sales-reporting-kpi-cards.webp" alt="Sales Reporting Top KPI Summary Cards" /></a>

### 1. Total Sales
- **What it shows:** Your net seller earnings after platform commission deductions.
- **Calculation rule:** Calculated from orders in **Processing** and **Completed** status, based on the original order date.
- **Trend indicator:** Shows percentage growth (e.g., `↑ 100%`) or decline relative to the previous benchmark period of equal duration.

### 2. Total Commission
- **What it shows:** The total commission retained by the marketplace administrator on your product sales.
- **Calculation rule:** Automatically deducted from gross sales according to your vendor commission rate.
- **Significance:** Allows you to reconcile marketplace fees without manual calculation.

### 3. Total Orders
- **What it shows:** The total count of customer orders containing at least one product from your catalog.
- **Calculation rule:** Includes all processing and completed customer orders within the selected timeframe.

### 4. Average Order Value (AOV)
- **What it shows:** The average dollar amount earned per order.
- **Calculation rule:** **Total Sales** divided by **Total Orders** (`Total Sales ÷ Total Orders`).
- **Significance:** Helps evaluate whether marketing campaigns or product bundles are encouraging customers to spend more per checkout.

---

## Filtering by Date Range & Comparison Periods

The dashboard gives you complete control over your reporting timeline. By default, the system displays data for the **Last 30 days**, alongside an automated comparison against the prior 30 days.

<a class="doc-image-link" href="./assets/vendor-sales-reporting-filter-drawer.webp"><img src="./assets/vendor-sales-reporting-filter-drawer.webp" alt="Date Range Filter Drawer with Quick Presets and Custom Date Pickers" /></a>

### How to Change the Reporting Period

1. Click the **Choose period** button in the dashboard header.
2. A slide-out filter panel opens from the side of the screen.
3. Select any quick preset or define a custom date range:
   - **Today:** Displays today's real-time sales activity.
   - **Yesterday:** Sales recorded during the previous calendar day.
   - **This Week:** Monday through the current day of this week.
   - **This Month:** 1st day of the current month up to today.
   - **Last Month:** Complete previous calendar month.
   - **Last 3 Months:** Rolling 90-day quarterly performance.
   - **Last 6 Months:** Rolling 180-day half-year performance.
   - **This Year:** January 1st to the current date.
4. **Custom Date Selection:**
   - Enter your starting date in the **From** field.
   - Enter your ending date in the **To** field.
5. Click **Apply** to instantly refresh the KPI cards, charts, and breakdown tables.

### Understanding the Comparison Series

Every chart automatically calculates and plots two data series:
- **Current Selected Period:** Displayed as a solid, vibrant line or bar (e.g., `21 Oct – 19 Nov 2026`).
- **Prior Comparison Period:** Displayed as a lighter, dashed line or faded bar (e.g., `21 Sep – 20 Oct 2026`).

This dual-period visual comparison allows you to spot trends immediately—such as whether this week's sales are pacing ahead of or behind last week's results.

---

## Interactive Visual Charts & Display Modes

Each core report card contains an interactive visualization that lets vendors customize how data is presented.

<a class="doc-image-link" href="./assets/vendor-sales-reporting-chart-card.webp"><img src="./assets/vendor-sales-reporting-chart-card.webp" alt="Interactive Sales Reporting Chart with Line, Bar, and Area Display Modes" /></a>

### Switching Chart Display Types

At the top right of each chart card, toggle between different visualization modes to suit your analytical preference:

- **Line Chart (Default):** Best for identifying continuous trends, seasonal cycles, and gradual revenue changes over consecutive days.
- **Bar Chart:** Best for comparing distinct day-by-day or month-by-month performance intervals side by side.
- **Area Chart:** Emphasizes overall sales volume and trajectory with a shaded fill beneath the trend line.
- **Horizontal Bar & Doughnut (Top Payment Methods):** Available exclusively on payment method reports to show customer payment preferences at a glance.

### Interactive Legend Toggles

Below each chart, the legend displays the exact date ranges for both the current and previous periods. 

- Click either date range pill in the legend to hide or reveal that specific series on the graph.
- This feature is especially useful when focusing on current numbers without visual clutter from past data.

### Hover Tooltips

Hover your cursor over any point, bar, or slice on a chart to view precise metrics in a tooltip, including the date, order count, and revenue total.

---

## Detailed Report Modules

The Sales Reporting dashboard is organized into eight specialized report sections:

| Report Card | Metrics & Description | Available Chart Types | Tabular Detail View |
| :--- | :--- | :--- | :--- |
| **Total Sales** | Net vendor earnings after marketplace commission for processing and completed orders. | Line, Bar, Area | `?wkmp_view=total-sales` |
| **Total Commission** | Marketplace commission fees deducted from vendor product sales. | Line, Bar, Area | `?wkmp_view=commission` |
| **Total Orders** | Number of placed customer orders containing items from your store. | Line, Bar, Area | `?wkmp_view=total-orders` |
| **Average Order Value** | Average earnings per order (`Total Sales ÷ Total Orders`). | Line, Bar, Area | `?wkmp_view=average-order-value` |
| **Tax Collected** | Tax charged on your items (excludes shipping tax). | Line, Bar, Area | `?wkmp_view=tax-collected` |
| **Top Tax Rates** | Breakdown of tax collected categorized by the specific tax rate applied. | Tabular List | `?wkmp_view=tax-rates` |
| **Refunds** | Total money refunded on your items (tax included), organized by the refund date. | Line, Bar, Area | `?wkmp_view=refunds` |
| **Top Payment Methods** | Order volume and sales totals categorized by customer checkout gateway. | Bar, Horizontal Bar, Doughnut | `?wkmp_view=payment-methods` |

### Payment Methods Breakdown

Understanding how buyers pay helps optimize your store experience and identify preferred payment gateways.

<a class="doc-image-link" href="./assets/vendor-sales-reporting-payment-methods.webp"><img src="./assets/vendor-sales-reporting-payment-methods.webp" alt="Top Payment Methods Breakdown Chart in Sales Reporting" /></a>

The **Top Payment Methods** report categorizes all orders by gateway (for example: *Check payments*, *Direct bank transfer*, or *Credit Card / Stripe*). You can toggle between **Bar**, **Horizontal bar**, and **Doughnut** views to see which methods drive the highest sales revenue.

---

## Granular Breakdown Tables & Detail Views

Clicking **View details** on any report card opens a dedicated breakdown screen with an itemized data table.

<a class="doc-image-link" href="./assets/vendor-sales-reporting-detail-table.webp"><img src="./assets/vendor-sales-reporting-detail-table.webp" alt="Detailed Sales Reporting Tabular Breakdown by Interval" /></a>

### Time Interval Grouping

On time-series reports (such as Total Sales, Commission, Total Orders, Average Order Value, Tax Collected, and Refunds), vendors can change the aggregation grouping using the segmented buttons in the toolbar:

- **Day:** Displays a day-by-day log for the selected timeframe.
- **Month:** Aggregates data into monthly summary rows.
- **Year:** Compiles multi-year macro summaries.

### Table Columns

Depending on the active report, the table includes clear, structured columns:
- **Interval:** The date, month, or year of the recorded activity.
- **Orders:** The count of orders placed during that interval.
- **Sales / Commission / Tax / Amount:** The corresponding dollar figures for that interval.
- **Average Order Value:** The calculated average earning per order for that row.

To return to the main dashboard overview, click the **Sales Reporting** link in the breadcrumb navigation at the top of the page.

---

## Exporting Sales Reports (CSV & PDF)

Vendors can export sales data for offline analysis, sharing with accountants, or archiving financial records.

<a class="doc-image-link" href="./assets/vendor-sales-reporting-export-menu.webp"><img src="./assets/vendor-sales-reporting-export-menu.webp" alt="Export Menu with CSV and PDF Download Options" /></a>

### How to Export Data

1. Open the desired report by clicking **View details** on any chart card.
2. In the top-right corner of the table toolbar, click the **Export** icon button.
3. Choose your preferred export format from the dropdown menu:
   - **Export CSV:** Downloads a `.csv` spreadsheet file compatible with Microsoft Excel, Google Sheets, Apple Numbers, and accounting software.
   - **Export PDF:** Generates a formatted, printable PDF document ideal for business reviews and paper records.

::: tip Respects Active Filters
Exported files automatically respect your currently applied date range and interval grouping (Day, Month, or Year). Set your preferred filters before clicking export.
:::

---

## Mobile Responsive Experience

The Sales Reporting dashboard is fully responsive and designed to work smoothly on mobile devices and tablets.

<a class="doc-image-link" href="./assets/vendor-sales-reporting-mobile.webp"><img src="./assets/vendor-sales-reporting-mobile.webp" alt="Mobile Responsive Sales Reporting Interface" /></a>

- **Adaptive Card Layout:** KPI stat cards and charts stack neatly into a single-column layout on smaller screens.
- **Touch-Friendly Charts:** Tap chart points on smartphones to view values and compare dates easily.
- **Mobile Filter Drawer:** The date filter panel slides in smoothly, allowing quick preset selection or date entry on touchscreens.

---

## Best Practices for Marketplace Sellers

To make the most of Sales Reporting, consider these operational tips:

1. **Review AOV Trends Weekly:**
   - If your Average Order Value is dropping, consider introducing product bundles, minimum quantity discounts, or related accessory upsells.
2. **Reconcile Payouts with Net Sales:**
   - Use the **Total Sales** report in conjunction with your [Vendor Transaction Management](https://wpdoc.webkul.com/documentation/vendor-transaction-management.html) records to verify payout balances and withdrawal requests.
3. **Monitor Refund Spikes:**
   - A sudden rise in the **Refunds** report may indicate a defect with a particular product batch, inaccurate product descriptions, or delivery delays.
4. **Identify Customer Payment Preferences:**
   - Review the **Top Payment Methods** chart to see if offering specific local gateways or digital wallets could boost your conversion rate.
5. **Archive Records at Month-End:**
   - Export your monthly sales reports in **CSV** format at the end of each month to keep organized books for tax season.

---

## Frequently Asked Questions

### Which order statuses are included in the sales reports?
Sales Reporting includes orders in **Processing** and **Completed** statuses. Orders that are pending payment, cancelled, failed, or placed on hold are excluded to prevent reporting uncollected revenue.

### Does Total Sales include shipping fees and tax?
**Total Sales** represents your net product revenue after the marketplace commission is deducted. Tax is tracked separately in the **Tax Collected** report. Shipping costs are recorded in the marketplace order ledger.

### What does the dashed line on the charts represent?
The dashed or lighter series represents the **preceding comparison period**. If you are viewing the last 30 days, the dashed series illustrates the 30 days prior to that window, allowing you to quickly benchmark your current sales growth.

### How are refunds recorded in the reports?
Refunds are tracked by the date the refund was issued, rather than the original order date. The refund amount includes tax on refunded items. An amount-only refund is recorded when the order contains only products from your shop.

### Can I export data for a custom date range?
Yes. Click **Choose period**, select your custom start and end dates, click **Apply**, click **View details** on the report you want to download, and choose **Export CSV** or **Export PDF**.
