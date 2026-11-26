---
title: Products Reporting – Vendor / Seller Guide | WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-products-reporting.html
---

# Products Reporting

In **WooCommerce Multi-Vendor Marketplace**, the **Products Reporting** console gives vendors a real-time analytics suite to assess catalog performance, product demand, and inventory velocity. Instead of manually tallying sales figures across separate orders, sellers can view top-level volume statistics, interactive trend graphs, and itemized leaderboards highlighting which items generate the highest revenue and transaction volume.

<a class="doc-image-link" href="./assets/vendor-products-reporting-dashboard.webp"><img src="./assets/vendor-products-reporting-dashboard.webp" alt="Vendor Products Reporting Dashboard Overview in WooCommerce Multi-Vendor Marketplace" /></a>

Understanding product-level reporting allows sellers to:
- **Track Catalog Velocity:** Monitor the total quantity of units sold across your entire product catalog, including item variations.
- **Identify Revenue Champions:** Discover which products generate the highest gross earnings for your store.
- **Pinpoint High-Volume Best Sellers:** See which items move fastest off the shelf by units ordered.
- **Monitor Product Sentiment & Reviews:** Track customer review counts and star ratings on individual catalog items.
- **Compare Historical Timeframes:** Benchmark product demand against previous periods with automated comparison series.
- **Export Actionable Data:** Download granular product reports in **CSV** or **PDF** format for inventory planning and supply chain forecasting.

---

## Accessing Products Reporting

Marketplace vendors can open the Products Reporting dashboard directly from their seller control panel:

1. Log in to your registered **Seller Account**.
2. In the left navigation menu, locate and expand the **Reporting** section.
3. Click **Products Reporting** to open the analytics console.

| Access Method | Location / Path | Purpose |
| :--- | :--- | :--- |
| **Seller Navigation Menu** | `Reporting` &rarr; `Products Reporting` | Opens the main products analytics dashboard with summary cards, charts, and leaderboards. |
| **Direct URL** | `/seller/seller-reporting-products/` | Direct browser address to access the Products Reporting screen. |
| **Granular Breakdown Views** | `/seller/seller-reporting-products/?wkmp_view=[view_name]` | Opens dedicated data tables for individual metrics with Day/Month/Year grouping and export tools. |

::: tip Quick Mobile Access
When managing your store on a smartphone or tablet, tap the **Open menu** hamburger button in the top navigation bar, expand the **Reporting** section, and select **Products Reporting**.
:::

---

## Executive Product Metrics & Reporting Cards

The Products Reporting dashboard organizes your catalog sales data into four specialized modules. Each card highlights key volume metrics and includes a **View details** button for granular analysis:

### 1. Units Sold Card

The **Units Sold** card highlights the cumulative volume of individual product units purchased from your store within the selected timeframe.

<a class="doc-image-link" href="./assets/vendor-products-reporting-chart-card.webp"><img src="./assets/vendor-products-reporting-chart-card.webp" alt="Units Sold Interactive Trend Chart Card with Line, Bar, and Area Modes" /></a>

- **Stat & Growth Percentage:** Shows the total units sold along with a color-coded percentage badge comparing current velocity against the preceding benchmark period of equal duration.
- **Calculation Rule:** Sums all product units sold across processing and completed customer orders based on the original order date. Product variations (e.g., sizes, colors) are counted accurately within their parent product volume.
- **Interactive Trend Chart:** Visualizes day-by-day unit sales velocity with built-in chart mode toggles.
- **Drilldown Link:** Click **View details** to open the full date-interval breakdown table (`?wkmp_view=units-sold`).

### 2. Top Selling Products by Revenue

This card highlights the highest-earning items in your catalog, ranked by gross product earnings.

- **What it shows:** Product names, thumbnails, order counts, and total sales revenue before platform commission deductions.
- **Calculation Rule:** Sum of line item subtotals for that product across orders in **Processing** or **Completed** status during the selected timeframe. Variations are aggregated under the main product.
- **Significance:** Identifies your most lucrative products so you can prioritize supplier relationships, wholesale volume discounts, and premium marketing placement.
- **Drilldown Link:** Click **View details** to open the complete revenue leaderboard table (`?wkmp_view=top-by-revenue`).

### 3. Top Selling Products by Quantity

This card reveals your highest-turnover items by physical unit sales count.

- **What it shows:** Products ranked strictly by the total number of units sold.
- **Calculation Rule:** Total unit quantity purchased by customers for each item during the active timeframe.
- **Significance:** Distinguishes high-volume everyday goods from high-margin luxury items. Essential for warehouse replenishment and warehouse space allocation.
- **Drilldown Link:** Click **View details** to see the full quantity leaderboard table (`?wkmp_view=top-by-quantity`).

### 4. Products With Most Reviews

Customer reviews provide vital feedback on item quality, fit, and satisfaction. This card highlights your most frequently reviewed catalog items.

- **What it shows:** Products ordered by total approved customer reviews, accompanied by their average star rating.
- **Calculation Rule:** Counts verified customer reviews left on each specific catalog product during the selected period.
- **Significance:** Highlights top brand favorites and alerts you to items that may have recurring product concerns if ratings begin to dip.
- **Drilldown Link:** Click **View details** to inspect the full review breakdown table (`?wkmp_view=most-reviewed`).

---

## Filtering by Date Range & Comparison Periods

By default, the Products Reporting console evaluates data over the **Last 30 days**, alongside an automated comparison against the prior 30-day window. Sellers can customize this timeline to evaluate seasonal product demand or promotional sales campaigns.

<a class="doc-image-link" href="./assets/vendor-products-reporting-filter-drawer.webp"><img src="./assets/vendor-products-reporting-filter-drawer.webp" alt="Products Reporting Date Range Filter Drawer with Quick Presets and Custom Pickers" /></a>

### How to Select a Time Period

1. Click the **Choose period** button in the dashboard toolbar.
2. A slide-out filter panel opens from the side of the screen.
3. Select any quick preset option or define a custom date range:
   - **Today:** Real-time product unit sales recorded today.
   - **Yesterday:** Units sold during the previous calendar day.
   - **This Week:** Product sales from Monday through the current day of this week.
   - **This Month:** Sales from the first day of the current month to today.
   - **Last Month:** Complete previous calendar month.
   - **Last 3 Months:** Rolling 90-day quarterly performance.
   - **Last 6 Months:** Rolling 180-day half-year performance.
   - **This Year:** From January 1st of the current year through today.
4. **Custom Date Selection:**
   - In the **From date** field, select your desired start date.
   - In the **To date** field, select your desired end date.
5. Click **Apply** to refresh the metrics, charts, and product tables.

### Understanding the Comparison Period

Every chart automatically tracks two time series:
- **Current Selected Period:** Displayed as a solid, vibrant line or bar (e.g., `21 Oct – 19 Nov 2026`).
- **Prior Comparison Period:** Displayed as a lighter, dashed line or faded bar (e.g., `21 Sep – 20 Oct 2026`).

This dual-period visual comparison allows you to spot demand shifts instantly—such as whether a specific product's demand is accelerating or slowing down compared to the prior timeframe.

---

## Interactive Visual Charts & Display Modes

The **Units Sold** card features an interactive visualization module that lets vendors customize how data is presented:

### Chart Display Types

Use the segmented button switcher in the top right of the chart card to toggle between three visualization styles:

- **Line Chart (Default):** Best for identifying continuous trends, daily sales cycles, and demand spikes over consecutive calendar days.
- **Bar Chart:** Best for comparing distinct day-by-day or month-by-month sales numbers side by side.
- **Area Chart:** Emphasizes overall unit volume and velocity with a colored gradient fill under the trend line.

### Interactive Legend Toggles

Below each chart, the legend displays the exact date ranges for both the current and previous periods:
- Click either date range pill in the legend to toggle that specific data series on or off.
- This allows you to inspect current demand patterns without visual clutter from past data.

### Value Tooltips

Hover your cursor over any data point or bar on the chart to view precise metrics in an interactive tooltip, including the date, order count, and exact units sold.

---

## Granular Breakdown Tables & Detail Views

Clicking **View details** on any report card opens a dedicated breakdown screen with an itemized data table.

### 1. Units Sold Detail View (`?wkmp_view=units-sold`)

This view presents a day-by-day, month-by-month, or year-by-year log of order counts and product units sold.

<a class="doc-image-link" href="./assets/vendor-products-reporting-units-sold.webp"><img src="./assets/vendor-products-reporting-units-sold.webp" alt="Detailed Units Sold Tabular Breakdown by Interval" /></a>

- **Time Interval Grouping:** Toggle between **Day**, **Month**, and **Year** buttons in the toolbar to aggregate data by your preferred time scale.
- **Table Columns:**
  - **Interval:** The specific calendar date, month, or year of the recorded activity.
  - **Orders:** Count of customer orders containing items from your store during that interval.
  - **Units:** Total number of individual product units sold during that interval.

### 2. Top Selling Products by Revenue (`?wkmp_view=top-by-revenue`)

This leaderboard ranks every product in your catalog by total sales revenue.

<a class="doc-image-link" href="./assets/vendor-products-reporting-top-by-revenue.webp"><img src="./assets/vendor-products-reporting-top-by-revenue.webp" alt="Top Selling Products by Revenue Leaderboard Table" /></a>

- **Product:** Product thumbnail, full title, and SKU identifier.
- **Orders:** Number of separate customer orders that included this product.
- **Units:** Total quantity of units sold across all orders.
- **Revenue:** Total gross dollar sales generated by this item before marketplace commissions.

### 3. Top Selling Products by Quantity (`?wkmp_view=top-by-quantity`)

This leaderboard ranks products strictly by physical volume sold.

<a class="doc-image-link" href="./assets/vendor-products-reporting-top-by-quantity.webp"><img src="./assets/vendor-products-reporting-top-by-quantity.webp" alt="Top Selling Products by Quantity Leaderboard Table" /></a>

- **Product:** Product image, title, and SKU code.
- **Orders:** Count of orders containing this item.
- **Units:** Cumulative units purchased by buyers.
- **Revenue:** Total sales revenue generated by these units.

### 4. Products With Most Reviews (`?wkmp_view=most-reviewed`)

This report highlights which products have received the highest volume of verified customer reviews.

<a class="doc-image-link" href="./assets/vendor-products-reporting-most-reviewed.webp"><img src="./assets/vendor-products-reporting-most-reviewed.webp" alt="Products With Most Reviews Tabular Report" /></a>

- **Product:** Product name, thumbnail, and catalog details.
- **Reviews:** Total count of approved reviews submitted for this specific product.
- **Average rating:** Aggregate star score (e.g., *5.0 out of 5 stars*) reflecting overall customer satisfaction.

::: tip Breadcrumb Navigation
To return to the main dashboard from any detail view, click the **Products Reporting** link in the breadcrumb bar at the top of the page.
:::

---

## Exporting Products Reports (CSV & PDF)

Vendors can export product analytics for spreadsheet modeling, sharing with suppliers, or archiving inventory performance records.

<a class="doc-image-link" href="./assets/vendor-products-reporting-export-menu.webp"><img src="./assets/vendor-products-reporting-export-menu.webp" alt="Export Menu with CSV and PDF Download Options for Products Reporting" /></a>

### How to Export Product Data

1. Open the desired report by clicking **View details** on any card.
2. In the top-right corner of the table toolbar, click the **Export** button.
3. Choose your preferred file format from the dropdown menu:
   - **Export CSV:** Downloads a standard `.csv` spreadsheet file suitable for Microsoft Excel, Google Sheets, or ERP inventory systems.
   - **Export PDF:** Generates a formatted, printable PDF document ideal for business reviews and supplier presentations.

::: tip Respects Active Date Filters
Exported files automatically respect your currently applied date range and interval grouping (Day, Month, or Year). Set your desired date parameters before clicking export.
:::

---

## Mobile Responsive Experience

The Products Reporting interface is fully responsive and designed for seamless monitoring on mobile phones and tablets:

<a class="doc-image-link" href="./assets/vendor-products-reporting-mobile.webp"><img src="./assets/vendor-products-reporting-mobile.webp" alt="Mobile Responsive View of Products Reporting Console" /></a>

- **Single-Column Responsive Layout:** All report cards, metric summaries, and leaderboards stack neatly into a touch-friendly single column.
- **Touch-Friendly Visual Charts:** Tap data points directly on mobile screens to view date values and unit counts.
- **Mobile Filter Drawer:** The date filter panel slides in smoothly, allowing quick preset selection or custom date entry on mobile touchscreens.
- **Smooth Horizontal Table Swiping:** Detailed data tables support smooth horizontal scrolling so no product columns or revenue figures are clipped.

---

## Best Practices for Marketplace Vendors

Follow these practical recommendations to turn product analytics into higher profits:

1. **Restock High-Velocity Items Proactively:**
   - Regularly audit the **Top Selling Products by Quantity** report. Set reorder thresholds well in advance of peak sales periods to prevent stockouts on popular items.
2. **Promote High-Revenue Champions:**
   - Check the **Top Selling Products by Revenue** report to identify items that generate the largest share of your revenue. Feature these items on your store homepage and consider creating product bundles.
3. **Monitor Review Trends for Product Improvements:**
   - Use the **Products With Most Reviews** table to gauge customer sentiment. If an item receives lower ratings, review customer feedback to address quality or sizing descriptions.
4. **Bundle Slow-Moving Stock with Best Sellers:**
   - Identify items near the bottom of your quantity reports and package them as complimentary add-ons with your top-selling products.
5. **Archive Quarterly Product Performance:**
   - Export your product sales reports in **CSV** format at the end of each quarter to track seasonal shifts and guide future purchasing decisions.

---

## Frequently Asked Questions (FAQ)

### Are product variations counted separately or grouped with the parent product?
Variations (such as different colors or sizes) are automatically grouped under their parent product in the reporting tables. The revenue and unit counts reflect the combined total of all variations belonging to that item.

### Which order statuses are included in Products Reporting?
Calculations include customer orders in **Processing** and **Completed** statuses. Orders that are pending payment, cancelled, on hold, or refunded are excluded to maintain accurate sales statistics.

### Can I export product reports for custom date ranges?
Yes. Click **Choose period**, enter your desired **From date** and **To date**, click **Apply**, open the report table by clicking **View details**, and select **Export CSV** or **Export PDF**.

### What does the dashed line on the Units Sold chart indicate?
The lighter or dashed series represents your **previous comparison period**. For example, if you are viewing the last 30 days, the dashed line displays unit sales from the 30 days prior, making it simple to benchmark growth.

### Why do some products show zero reviews in the report?
Only approved customer reviews submitted through the marketplace storefront are included. If a product has no customer feedback yet or if submitted reviews are pending administrator moderation, the review count will reflect only published reviews.

---

::: tip Related Vendor Guides
- **Sales Analytics:** Monitor revenue, tax, and order totals in the [Sales Reporting Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-sales-reporting.html).
- **Customer Analytics:** Track buyer acquisition and repeat orders in the [Customer Reporting Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-reporting.html).
- **Buyer Directory:** Browse your complete customer directory in the [Customer List Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-list.html).
- **Product Management:** Add, edit, and organize your catalog in the [Vendor Product Management Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-management.html).
- **Inventory Control:** Track stock levels and manage backorders in the [Vendor Inventories Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-inventories.html).
:::
