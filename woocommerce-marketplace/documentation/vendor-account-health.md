---
title: Vendor Account Health – Seller Guide | WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-account-health.html
---

# Vendor Account Health

In **WooCommerce Multi-Vendor Marketplace**, **Account Health** provides sellers with an immediate, transparent view of their standing and operational quality across the marketplace. Maintaining high account health builds customer confidence, increases sales conversion, and helps sellers maintain good standing with marketplace administrators.

The Account Health report evaluates real store performance using three core criteria:
1. **Order Cancellation Rate** (preventing cancelled orders after payment)
2. **Customer Feedback** (average rating across store reviews)
3. **Flags Raised** (complaints or policy reports submitted against your shop or products)

In addition to the overall health score, sellers can review key operational insights—including **Refund Rates**, **Product Reviews**, and **Fulfillment Completion Times**—and experiment with an interactive **Live Calculator** to simulate how operational improvements will boost their overall score.

<a class="doc-image-link" href="./assets/vendor-account-health-dashboard.webp"><img src="./assets/vendor-account-health-dashboard.webp" alt="Vendor Account Health Dashboard Overview in WooCommerce Multi-Vendor Marketplace" /></a>

---

## Navigating to Account Health

Vendors can access their Account Health console using two quick methods from the seller workspace:

1. **Via Seller Navigation Sidebar:**
   - Log in to your registered **Seller Account**.
   - In the left sidebar navigation, expand the **Performance** section.
   - Click **Account Health** to open the dedicated console.
2. **Via Seller Dashboard Stat Card:**
   - Open your main **Seller Dashboard** (`/seller/`).
   - Locate the **Account Health** KPI card among your operational metrics.
   - Click the card to view the complete breakdown and report.

<a class="doc-image-link" href="./assets/vendor-account-health-stat-card.webp"><img src="./assets/vendor-account-health-stat-card.webp" alt="Vendor Dashboard Account Health KPI Stat Card" /></a>

| Access Method | Location / Path | Purpose |
| :--- | :--- | :--- |
| **Direct URL** | `/seller/seller-account-health/` | Opens the full Account Health report, scored metrics, and operational insights. |
| **Calculation Guide** | `/seller/seller-account-health/?wkmp_view=guide` | Detailed breakdown of scoring formulas, rules, tips, and the interactive live calculator. |
| **Dashboard Stat Card** | `/seller/` | High-level summary displaying your health band, score out of 100, and a 12-month trend sparkline. |

::: tip Instant Real-Time Updates
Your Account Health report is calculated on-demand from live marketplace data every time you visit the page. New orders, completed transactions, customer reviews, or flag reports are reflected immediately without manual recalculation.
:::

---

## Overall Health Score & Performance Bands

At the top of the Account Health screen, the **Overall Health** card highlights your current status, numerical score, and operational band:

- **Health Score (0–100):** A weighted performance score calculated from your store's cancellation rate, customer review ratings, and flags.
- **Health Band Indicator:** A multi-colored status gauge showing where your score falls along the marketplace performance spectrum.
- **Current Standing Message:** A clear explanation of your current status (for example: *"Your account is in good standing. Keep it up."*).

<div class="wkmp-tier-grid">
  <div class="wkmp-tier-card wkmp-tier-card--healthy">
    <div class="wkmp-tier-card__header">
      <span class="wkmp-tier-card__badge">Healthy</span>
    </div>
    <div class="wkmp-tier-card__score">80 – 100</div>
    <div class="wkmp-tier-card__label">Good Standing</div>
    <p class="wkmp-tier-card__desc">Account is in good standing with low cancellations, positive customer ratings, and minimal or zero flags.</p>
  </div>

  <div class="wkmp-tier-card wkmp-tier-card--at-risk">
    <div class="wkmp-tier-card__header">
      <span class="wkmp-tier-card__badge">At Risk</span>
    </div>
    <div class="wkmp-tier-card__score">50 – 79</div>
    <div class="wkmp-tier-card__label">Needs Improvement</div>
    <p class="wkmp-tier-card__desc">Performance has slipped below standard targets. Immediate attention to stock levels and customer complaints is needed.</p>
  </div>

  <div class="wkmp-tier-card wkmp-tier-card--unhealthy">
    <div class="wkmp-tier-card__header">
      <span class="wkmp-tier-card__badge">Unhealthy</span>
    </div>
    <div class="wkmp-tier-card__score">0 – 49</div>
    <div class="wkmp-tier-card__label">Action Required</div>
    <p class="wkmp-tier-card__desc">Critical standing caused by high order cancellations, low customer ratings, or repeated buyer flags.</p>
  </div>

  <div class="wkmp-tier-card wkmp-tier-card--no-data">
    <div class="wkmp-tier-card__header">
      <span class="wkmp-tier-card__badge">No Data</span>
    </div>
    <div class="wkmp-tier-card__score">— / 100</div>
    <div class="wkmp-tier-card__label">Pending Activity</div>
    <p class="wkmp-tier-card__desc">Displayed when a new seller has no paid orders or approved customer reviews in the active evaluation window.</p>
  </div>
</div>

### Performance Band Thresholds

| Performance Band | Score Range | Status Meaning & Recommended Action |
| :--- | :---: | :--- |
| **Healthy** | **80 – 100** | **Good Standing:** Your business operations meet all marketplace standards. Keep inventory updated and fulfill orders quickly to maintain this level. |
| **At Risk** | **50 – 79** | **Needs Improvement:** Your score has slipped due to cancelled orders, lower customer ratings, or reported flags. Address customer complaints and review stock levels promptly. |
| **Unhealthy** | **0 – 49** | **Action Required:** Your store operations are below marketplace expectations. Investigate order bottlenecks, resolve pending issues with buyers, and update product descriptions. |
| **Not Enough Data Yet** | **— / 100** | **Pending Activity:** Your score will automatically appear once your store receives at least 1 paid order or 1 approved customer review during the selected period. |

---

## Core Scored Metrics

Your overall health score is composed of **three primary operational metrics**. Each metric earns between 0 and 100 points based on predefined marketplace targets and fail points:

### 1. Order Cancellation Rate (Base Weight: 40%)

The **Order Cancellation Rate** tracks the share of product units in paid orders that were cancelled.

- **Standard Timeframe:** Last 30 days (grouped by the date the order was placed).
- **Target (100 Points):** Below **2.5%**.
- **Fail Point (0 Points):** **10.0%** or higher.
- **Fair Accounting Rule:** Only **paid orders** count toward cancellations. If a customer cancels an order before completing payment, or if an unpaid checkout expires, it is **never** held against you.
- **Unit-Level Tracking:** If an order contains 4 units and 1 unit is cancelled, the calculation accurately reflects 1 of 4 units cancelled rather than marking the entire order as cancelled.

### 2. Customer Feedback (Base Weight: 35%)

The **Customer Feedback** metric measures overall store satisfaction from approved reviews submitted by buyers.

- **Standard Timeframe:** Last 90 days.
- **Target (100 Points):** **4.0 stars** or higher.
- **Fail Point (0 Points):** **2.0 stars** or lower.
- **Balanced Dimensional Average:** Each review score is calculated as the average of the customer's ratings across three distinct dimensions: **Price**, **Value**, and **Quality**.
- **Quick Action:** Click the **View reviews** link on the card to jump directly to your [Seller Reviews](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-seller-review.html) dashboard.

### 3. Flags Raised (Base Weight: 25%)

The **Flags** metric counts buyer reports submitted against your shop profile or individual product listings.

- **Standard Timeframe:** Last 90 days.
- **Target (100 Points):** **0 flags** (no reports).
- **Fail Point (0 Points):** **10 flags** (red flag limit) or more.
- **Itemized Breakdown:** The metric card clearly displays how many flags were submitted against your **store** versus your **products** (e.g., *0 on your store · 1 on your products*).
- **Goal:** The fewer flags raised, the higher your score.

---

## Dynamic Weight Sharing & Scoring Rules

The marketplace uses an intelligent **proportional weight-sharing model** so sellers are never unfairly penalized when specific data is not yet available:

<div class="wkmp-decision-grid">
  <div class="wkmp-outcome-box wkmp-outcome-box--approved">
    <div class="wkmp-outcome-box__header">
      <span class="wkmp-outcome-box__badge wkmp-outcome-box__badge--approved">Standard Scoring</span>
      <span class="wkmp-outcome-box__scope">With Reviews</span>
    </div>
    <div class="wkmp-outcome-box__title wkmp-outcome-box__title--approved">Full 3-Metric Distribution</div>
    <ul class="wkmp-outcome-box__points">
      <li class="wkmp-outcome-box__point"><strong>Order Cancellation Rate:</strong> 40% base weight</li>
      <li class="wkmp-outcome-box__point"><strong>Customer Feedback:</strong> 35% base weight</li>
      <li class="wkmp-outcome-box__point"><strong>Store & Product Flags:</strong> 25% base weight</li>
    </ul>
  </div>

  <div class="wkmp-outcome-box" style="background: #f0f9ff; border: 1px solid #bae6fd;">
    <div class="wkmp-outcome-box__header">
      <span class="wkmp-outcome-box__badge" style="background: #0284c7; color: #ffffff;">Adjusted Scoring</span>
      <span class="wkmp-outcome-box__scope">No Reviews Yet</span>
    </div>
    <div class="wkmp-outcome-box__title" style="color: #0369a1;">Proportional Redistribution</div>
    <ul class="wkmp-outcome-box__points">
      <li class="wkmp-outcome-box__point"><strong>Customer Feedback:</strong> Omitted without penalty</li>
      <li class="wkmp-outcome-box__point"><strong>Order Cancellation Rate:</strong> Automatically shares weight (~62%)</li>
      <li class="wkmp-outcome-box__point"><strong>Store & Product Flags:</strong> Automatically shares weight (~38%)</li>
    </ul>
  </div>
</div>

### How Proportional Redistribution Works

1. **Metric Without Data is Omitted:** If your store has no customer reviews in the active 90-day window, the Customer Feedback metric is omitted from the score denominator.
2. **Remaining Metrics Share the Weight:** The remaining active metrics share the missing weight in proportion to their base values:
   - **Order Cancellation Rate:** $(40 \div 65) \times 100 \approx \mathbf{62\%}$ of your score.
   - **Flags Raised:** $(25 \div 65) \times 100 \approx \mathbf{38\%}$ of your score.
3. **Minimum Activity Threshold:** Flags alone do not reflect how a seller conducts business. A score requires active selling data (at least **1 paid order** or **1 approved review**). If neither exists, the status displays **Not enough data yet** (`— / 100`).

### Scoring Criteria Reference Table

| Metric Name | Evaluation Window | Target (Full 100 Pts) | Fail Point (0 Pts) | Base Weight | Active Without Reviews |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Order Cancellation Rate** | Last 30 days | $2.5\%$ or less | $10.0\%$ or more | **40%** | **62%** |
| **Customer Feedback** | Last 90 days | $4.0$ or higher | $2.0$ or lower | **35%** | *Excluded* |
| **Flags on Store & Products** | Last 90 days | $0$ flags | $10$ flags or more | **25%** | **38%** |

::: info Points Scale Linearly
Between the target (100 points) and the fail point (0 points), your score decreases evenly in a straight line. For example, if your cancellation rate is halfway between 2.5% and 10.0%, you receive 50 points for that metric.
:::

---

## Additional Operational Insights

Below the core score cards, the **More insights** section provides additional diagnostic metrics. These figures help you optimize shop operations, but **they are not part of your numerical health score**:

### 1. Refund Rate
- **Timeframe:** Last 30 days (by order date).
- **What It Measures:** The percentage of units in paid orders that were refunded, alongside the total refunded dollar amount (for example: *0% · 0 of 3 units refunded · $0.00*).
- **Seller Benefit:** Helps you identify product quality issues, shipping damage, or inaccurate product descriptions before they result in buyer disputes.

### 2. Product Reviews
- **Timeframe:** Last 90 days.
- **What It Measures:** The average star rating (1 to 5 stars) across all approved customer reviews left specifically on your product listings.
- **Action Link:** Click **View product reviews** to inspect buyer comments on individual items in your [Product Reviews](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-reviews.html) manager.

### 3. Paid → Completed (Fulfillment Time)
- **Timeframe:** Last 30 days (by order date).
- **What It Measures:** The average time taken from when the buyer paid until your order was marked **Completed**.
- **Fairness in Multi-Seller Orders:** Orders containing items from multiple independent vendors are excluded from this metric because overall order completion depends on the slowest seller. Only orders containing your products exclusively are measured.

---

## Filtering Performance by Time Periods ("Choose period")

By default, Account Health uses standard rolling windows (30 days for orders and fulfillment; 90 days for reviews and flags). Sellers can adjust this to evaluate performance over specific seasonal campaigns, promotional periods, or quarters.

<a class="doc-image-link" href="./assets/vendor-account-health-filter-drawer.webp"><img src="./assets/vendor-account-health-filter-drawer.webp" alt="Account Health Period Filter Drawer with Presets and Date Range" /></a>

### How to Use the Filter Drawer

1. Click the **Choose period** button in the page header.
2. The **Choose period** filter panel slides in from the right edge of the screen.
3. Select either a **Quick Date Preset** or define a **Custom Date Range**:
   - **Quick Presets:**
     - Today
     - Yesterday
     - This Week
     - This Month
     - Last Month
     - Last 3 Months
     - Last 6 Months
     - This Year
   - **Custom Range:** Select a **From date** and a **To date** (supports spans up to 12 months; leaving the *To date* blank automatically defaults to today).
4. Click the blue **Apply** button to update your report.

::: tip Automatic Flag Limit Scaling
When you select a custom period, every metric evaluates data across that chosen timeframe, and the **Red Flag Limit** scales proportionally. For example, in a 1-month custom period, the flag limit adjusts from 10 flags down to approximately 4 flags, maintaining equal fairness across different timeframe lengths.
:::

---

## Account Health Calculation Guide & Live Calculator

To understand the exact mechanics behind your score, click the **"How is this calculated?"** link in the top header. This opens the dedicated **Health Calculation Guide** (`?wkmp_view=guide`).

<a class="doc-image-link" href="./assets/vendor-account-health-guide-calculator.webp"><img src="./assets/vendor-account-health-guide-calculator.webp" alt="Account Health Calculation Guide and Interactive Live Calculator" /></a>

### Practical Seller Recommendations

The guide highlights five key operational habits to protect and improve your score:

1. **Keep stock and prices updated:** Ensure product inventory counts are accurate so you never have to cancel a paid order due to stockouts.
2. **Pack and dispatch promptly:** Package products securely and mark orders as completed as soon as they are handed over to shipping carriers.
3. **Accurate product listings:** Provide clear photos, detailed specifications, and truthful descriptions so buyers receive exactly what they expect.
4. **Fast customer support:** Reply quickly to buyer queries and resolve complaints before they turn into store flags or negative reviews.
5. **Clear store policies:** Maintain explicit shipping and return policies on your vendor profile so customers know what to expect.

### Using the Interactive Live Calculator

At the bottom of the calculation guide, vendors can use an **interactive simulation tool**:

- **Pre-filled with your current figures:** When opened, the calculator loads your real live statistics.
- **Customer Reviews Toggle:** Switch between **With reviews** and **No reviews** to see how review presence affects metric weights.
- **Interactive Sliders:**
  - **Flags raised:** Adjust from 0 to 20 flags to see how buyer reports impact your standing.
  - **Average rating:** Move the rating slider between 1.0 and 5.0 stars.
  - **Order cancellation rate:** Test cancellation percentages from 0% up to 20%.
- **Instant Result:** The calculator instantly shows the simulated **Health Score (0–100)** and **Health Band** (Healthy, At Risk, or Unhealthy).
- **Safe Testing:** Nothing in the calculator is saved or modifies your live store data. It is purely an exploratory tool for sellers.
