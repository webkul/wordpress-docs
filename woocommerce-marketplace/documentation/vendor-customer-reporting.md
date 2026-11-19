---
title: Customer Reporting – Vendor / Seller Guide | WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-reporting.html
---

# Customer Reporting

In **WooCommerce Multi-Vendor Marketplace**, the **Customer Reporting** dashboard provides sellers with clear insights into their customer base, purchasing habits, and buyer engagement. Instead of looking only at general sales numbers, this dashboard helps you see *who* is buying your products, how often they return, and how much they spend in your store.

Understanding customer data allows sellers to:
- **Track Customer Growth:** See how many unique buyers purchased from your shop during any selected timeframe.
- **Identify Top Buyers by Sales:** Discover which customers generate the highest revenue for your business.
- **Spot High-Frequency Shoppers:** Find repeat buyers who order from your shop regularly.
- **Monitor Customer Feedback:** Review which buyers write approved reviews for your store profile and products.
- **Compare Historical Timeframes:** Benchmark your current customer acquisition against prior periods to track progress.
- **Export Data for Business Reviews:** Download clean customer reports in **CSV** or **PDF** format for customer relationship management (CRM) and record-keeping.

<a class="doc-image-link" href="./assets/vendor-customer-reporting-dashboard.png"><img src="./assets/vendor-customer-reporting-dashboard.png" alt="Vendor Customer Reporting Dashboard Overview in WooCommerce Multi-Vendor Marketplace" /></a>

---

## Accessing Customer Reporting

Marketplace vendors can open the Customer Reporting screen directly from their seller control panel:

1. Log in to your **Seller Account**.
2. In the left navigation menu, locate the **Reporting** section.
3. Click **Customers Reporting** to open the analytics console.

| Access Method | Location / Path | Purpose |
| :--- | :--- | :--- |
| **Seller Navigation Menu** | `Reporting` &rarr; `Customers Reporting` | Opens the main customer analytics dashboard with summary cards, charts, and leaderboards. |
| **Direct URL** | `/seller/seller-reporting-customers/` | Direct browser address for the main customer reporting overview. |
| **Granular Breakdown Views** | `/seller/seller-reporting-customers/?wkmp_view=[view_name]` | Opens full data tables for individual metrics with Day/Month/Year grouping and export tools. |

::: tip Quick Mobile Access
When working on a mobile phone or tablet, tap the **Open menu** button in the top bar, scroll down to the **Reporting** section, and tap **Customers Reporting**.
:::

---

## Core Reporting Cards & Insights

The Customer Reporting dashboard organizes your buyer information into four specialized cards. Each card highlights key metrics and includes a **View details** button for in-depth analysis.

### 1. Total Customers Card

The **Total Customers** card displays the total number of unique buyers who completed orders containing your products within the selected timeframe.

<a class="doc-image-link" href="./assets/vendor-customer-reporting-chart-card.png"><img src="./assets/vendor-customer-reporting-chart-card.png" alt="Total Customers Chart Card with Line, Bar, and Area Display Types" /></a>

- **Stat & Growth Percentage:** Shows the count of unique customers (e.g., `1`) and a color-coded percentage badge (e.g., `↑ 100%`) comparing current growth against the preceding benchmark period.
- **Calculation Rule:** Includes all buyers who ordered your products, including guest checkouts. Each customer is counted once during the selected timeframe. Only orders in **Processing** and **Completed** status are included, based on the order placement date.
- **Interactive Trend Chart:** Visualizes customer acquisition day by day with built-in chart controls.
- **Drilldown Link:** Click **View details** to open a full date-interval table (`?wkmp_view=customers`).

### 2. Customers With Most Sales

This card highlights your highest-spending customers and shows how much net revenue each buyer has generated for your shop.

- **What it shows:** Customer names ranked by total earnings generated on their purchases.
- **Calculation Rule:** Sum of your seller earnings from each customer's orders in **Processing** or **Completed** status within the selected timeframe.
- **Significance:** Helps you identify high-value VIP buyers who contribute the most to your store earnings.
- **Drilldown Link:** Click **View details** to open the full leaderboard table (`?wkmp_view=most-sales`).

### 3. Customers With Most Orders

This card shows your most frequent repeat buyers, helping you measure brand loyalty.

- **What it shows:** Customer names ranked by total number of completed purchase transactions.
- **Calculation Rule:** Counts the total number of orders placed by each buyer containing your products during the active timeframe.
- **Significance:** Identifies loyal shoppers who return to your shop regularly, even if their individual order amounts vary.
- **Drilldown Link:** Click **View details** to see the complete order frequency table (`?wkmp_view=most-orders`).

### 4. Customers With Most Reviews

Customer reviews build trust and credibility across the marketplace. This card highlights your most active reviewers.

- **What it shows:** Customers who have written approved feedback for your store and catalog.
- **Calculation Rule:** Counts approved reviews written for your seller profile and your individual products, grouped by the date they were submitted.
- **Empty State Indicator:** If no reviews were written during the selected date range, the card shows a clean message: *"No data for this period. Choose another period to see this report."*
- **Drilldown Link:** Click **View details** to inspect the full review breakdown table (`?wkmp_view=most-reviews`).

---

## Filtering by Date Range & Comparison Periods

By default, the Customer Reporting dashboard displays data for the **Last 30 days**, along with an automatic comparison against the preceding 30 days.

<a class="doc-image-link" href="./assets/vendor-customer-reporting-filter-drawer.png"><img src="./assets/vendor-customer-reporting-filter-drawer.png" alt="Date Range Filter Drawer with Quick Presets and Custom Date Pickers" /></a>

### How to Select a Time Period

1. Click the **Choose period** button in the dashboard toolbar.
2. A slide-out filter drawer opens from the right side of the screen.
3. Choose one of the quick preset options or set custom dates:
   - **Today:** Real-time customer activity for the current day.
   - **Yesterday:** Customer orders recorded during the previous calendar day.
   - **This Week:** Customer activity from Monday through the current day.
   - **This Month:** Customer purchases from the first day of the current month to today.
   - **Last Month:** Complete previous calendar month.
   - **Last 3 Months:** Rolling 90-day quarterly customer performance.
   - **Last 6 Months:** Rolling 180-day half-year customer performance.
   - **This Year:** From January 1st of the current year through today.
4. **Custom Date Range:**
   - In the **From date** field, select your starting date.
   - In the **To date** field, select your ending date.
5. Click **Apply** to refresh the metrics, charts, and customer lists.

### Understanding the Comparison Period

Every chart automatically tracks two time series:
- **Current Period:** The active date range you selected (for example, `21 Oct – 19 Nov 2026`).
- **Previous Period:** The equal time span immediately preceding your selected range (for example, `21 Sep – 20 Oct 2026`).

This automated comparison makes it simple to see whether you are gaining more new buyers this month compared to the previous month.

---

## Interactive Visual Charts & Display Modes

The **Total Customers** card features an interactive chart that lets you adjust how customer acquisition trends are displayed.

### Chart Display Types

Use the segmented switcher in the top right of the chart card to toggle between three visualization styles:

- **Line Chart (Default):** Shows smooth trends over time, making it easy to spot peaks in customer acquisition on specific dates.
- **Bar Chart:** Displays distinct bars for each time interval, ideal for comparing daily customer counts side by side.
- **Area Chart:** Highlights the overall volume of buyers with a shaded color gradient under the line.

### Interactive Legend Toggles

Below the chart, clickable legend pills show the exact date ranges for both periods:
- Click a date range pill (e.g., `21 Oct – 19 Nov 2026` or `21 Sep – 20 Oct 2026`) to toggle that data line on or off.
- This allows you to focus solely on current performance without visual interference from prior data.

### Value Tooltips

Hover your mouse over any data point or bar on the chart to view precise numbers in a tooltip, including the date, order count, and unique customer count.

---

## Granular Breakdown Tables & Detail Views

Clicking **View details** on any of the four reporting cards opens a dedicated breakdown screen with complete tabular data.

### 1. Total Customers Detail View (`?wkmp_view=customers`)

This view presents a day-by-day, month-by-month, or year-by-year log of orders and unique buyers.

<a class="doc-image-link" href="./assets/vendor-customer-reporting-total-customers-detail.png"><img src="./assets/vendor-customer-reporting-total-customers-detail.png" alt="Detailed Total Customers Table with Interval Grouping" /></a>

- **Time Interval Switcher:** Toggle between **Day**, **Month**, and **Year** buttons in the toolbar to aggregate data by your preferred time scale.
- **Table Columns:**
  - **Interval:** The specific date, month, or year of the recorded purchases.
  - **Orders:** Total number of orders placed during that interval.
  - **Customers:** Number of unique customers who purchased during that interval.

### 2. Customers With Most Sales Table (`?wkmp_view=most-sales`)

This view ranks every customer who bought from your store according to total spending.

<a class="doc-image-link" href="./assets/vendor-customer-reporting-top-sales.png"><img src="./assets/vendor-customer-reporting-top-sales.png" alt="Customers With Most Sales Tabular Report" /></a>

- **Customer:** Full name of the registered customer or guest buyer.
- **Email:** The customer's billing email address for direct communication or follow-up.
- **Orders:** Total count of orders placed by this customer.
- **Sales:** Total dollar earnings generated for your store from this customer's purchases.

### 3. Customers With Most Orders Table (`?wkmp_view=most-orders`)

This view ranks buyers by purchase frequency, showing who visits and orders from your shop most often.

<a class="doc-image-link" href="./assets/vendor-customer-reporting-top-orders.png"><img src="./assets/vendor-customer-reporting-top-orders.png" alt="Customers With Most Orders Tabular Report" /></a>

- **Customer:** Full name of the customer.
- **Email:** Customer email address.
- **Orders:** Number of separate orders placed with your store.
- **Sales:** Total monetary value of all orders combined.

### 4. Customers With Most Reviews Table (`?wkmp_view=most-reviews`)

This view provides an overview of customer reviews, showing who has reviewed your store and products.

<a class="doc-image-link" href="./assets/vendor-customer-reporting-top-reviews.png"><img src="./assets/vendor-customer-reporting-top-reviews.png" alt="Customers With Most Reviews Tabular Report" /></a>

- **Customer:** Name of the reviewer.
- **Email:** Reviewer's email address.
- **Seller reviews:** Count of approved reviews written for your seller profile.
- **Product reviews:** Count of approved reviews written for items in your product catalog.
- **Total:** Sum of seller reviews and product reviews combined.

::: tip Navigating Back
To return to the main dashboard from any detail table, click the **Customers Reporting** link in the breadcrumb bar at the top of the page.
:::

---

## Exporting Customer Reports (CSV & PDF)

Vendors can export customer reports to share data with colleagues, import into spreadsheets, or keep offline records.

<a class="doc-image-link" href="./assets/vendor-customer-reporting-export-menu.png"><img src="./assets/vendor-customer-reporting-export-menu.png" alt="Export Customer Reporting Dropdown Menu with CSV and PDF Options" /></a>

### How to Download Customer Data

1. Click **View details** on the report card you wish to export.
2. In the top-right corner of the table toolbar, click the **Export** button.
3. Select your preferred download format:
   - **Export CSV:** Downloads a standard `.csv` spreadsheet file suitable for Microsoft Excel, Google Sheets, LibreOffice, or CRM tools.
   - **Export PDF:** Creates a clean, formatted PDF document suitable for printing, archiving, or sharing in business reviews.

::: tip Respects Active Date Filters
Exported files automatically match your currently selected date range and interval grouping (Day, Month, or Year). Apply your desired dates before clicking export.
:::

---

## Customer Reporting vs. Customer List

The vendor panel includes two related customer screens. Here is how they differ:

| Feature | Customer Reporting (`/seller/seller-reporting-customers/`) | Customer List (`/seller/vendor-customers/`) |
| :--- | :--- | :--- |
| **Primary Purpose** | Visual analytics, growth trends, top-buyer rankings, and review activity. | Directory and contact management for all store buyers. |
| **Time Filtering** | Filter by quick presets (e.g., *Last 30 days*, *This Month*) or custom dates. | Lifetime customer directory with keyword search. |
| **Visual Charts** | Interactive Line, Bar, and Area charts with period comparison. | Tabular directory format. |
| **Leaderboards** | Top customers by sales earnings, order frequency, and review count. | Standard customer listing ordered by registration or recent order. |
| **Export Formats** | Download customized time-series reports in **CSV** and **PDF**. | Direct export of customer directory records. |

::: tip Learn More
For complete instructions on browsing your full customer directory and viewing buyer profiles, see the [Customer List Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-list.html).
:::

---

## Mobile Responsive Experience

The Customer Reporting interface is designed to work smoothly on mobile smartphones and tablets.

<a class="doc-image-link" href="./assets/vendor-customer-reporting-mobile.png"><img src="./assets/vendor-customer-reporting-mobile.png" alt="Mobile Responsive View of Customer Reporting Interface" /></a>

- **Single-Column Responsive Layout:** All four report cards stack vertically for easy scrolling on smaller screens.
- **Touch-Friendly Charts:** Tap directly on chart points or bars to view dates and values.
- **Slide-Out Mobile Drawer:** The **Choose period** button opens a touch-friendly drawer that fits any screen size.
- **Horizontal Table Scrolling:** Detailed breakdown tables allow smooth horizontal swiping on smaller screens so no columns are hidden.

---

## Best Practices for Marketplace Vendors

Follow these practical recommendations to turn customer analytics into store growth:

1. **Reward High-Value Buyers:**
   - Review your **Customers With Most Sales** report regularly. Consider reaching out to your top buyers with personalized thank-you notes, exclusive discount coupons, or early access to new product launches.
2. **Nurture Frequent Repeat Shoppers:**
   - Check the **Customers With Most Orders** list to identify loyal shoppers. Keeping repeat customers happy is significantly more cost-effective than acquiring new ones.
3. **Engage Active Reviewers:**
   - Look at the **Customers With Most Reviews** table to see your top brand advocates. If an active reviewer writes positive feedback, consider responding promptly to show appreciation and strengthen buyer trust.
4. **Track Marketing Campaign Results:**
   - When running a sale or holiday promotion, set the reporting period to match your campaign dates. Check the **Total Customers** chart to measure how many new buyers your campaign brought in.
5. **Archive Quarterly Reports:**
   - Export your customer data in **CSV** format at the end of each quarter. This ensures you maintain a permanent record of customer growth over time.

---

## Frequently Asked Questions

### Are guest checkouts included in Customer Reporting?
Yes. Both registered marketplace customers and guest buyers who purchase your products are counted. Each buyer is counted once per selected reporting period.

### Which order statuses are included in customer calculations?
Customer reports include orders in **Processing** and **Completed** statuses. Orders that are pending payment, cancelled, on hold, or refunded are excluded to maintain accurate revenue and customer figures.

### Can I see the customer's email address in reports?
Yes. When you click **View details** on the **Customers With Most Sales**, **Customers With Most Orders**, or **Customers With Most Reviews** cards, the breakdown table shows both the customer's name and their billing email address.

### What does the dashed line on the Total Customers chart mean?
The lighter or dashed series represents your **previous comparison period**. For example, if you are looking at the last 30 days, the dashed line displays customer numbers from the 30 days prior, making it easy to compare growth.

### How do I export customer reports for a specific date range?
Click **Choose period**, enter your desired **From date** and **To date**, click **Apply**, click **View details** on the report card, and click **Export CSV** or **Export PDF**.

### Why does the "Customers With Most Reviews" card show no data?
If no customer submitted an approved review for your shop profile or products during the selected date range, the card displays *"No data for this period"*. Adjust the date range using **Choose period** (such as *This Year* or *Last 6 Months*) to see historical review activity.

---

::: tip Related Vendor Guides
- **Sales Analytics:** Monitor revenue, tax, and order totals in the [Sales Reporting Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-sales-reporting.html).
- **Product Analytics:** Track top-selling items and stock performance in the [Products Reporting Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-products-reporting.html).
- **Buyer Directory:** Browse your complete customer directory in the [Customer List Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-customer-list.html).
- **Customer Reviews:** Manage store ratings and buyer feedback in the [Vendor Reviews Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-reviews.html).
- **Financial Balances:** Review commissions and withdrawals in the [Vendor Transactions Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-transaction-management.html).
:::
