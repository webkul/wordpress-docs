---
title: Admin News
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-news.html
---

# Admin News

The **Admin News** feature allows the admin to create and publish news updates for vendors.
Admins can also control the **visibility of news for sellers** based on marketplace requirements.

Through this module, marketplace administrators can broadcast critical announcements, policy updates, fee revisions, scheduled maintenance alerts, and seasonal campaign guidelines directly to vendor dashboards.

<a class="doc-image-link" href="./assets/all-news.webp"><img src="./assets/all-news.webp" alt="All News List" /></a>

---

## Access Path

Marketplace administrators can access the Admin News module directly from the WordPress administrative dashboard:

- **Marketplace → Admin News**

From this section, administrators can configure global news visibility settings, manage existing announcements, and create new posts for vendors.

---

## Admin News Settings

When navigating to **Marketplace → Admin News**, the administrator lands on the **Admin News Settings** configuration page.

<a class="doc-image-link" href="./assets/admin-news-settings-live.webp"><img src="./assets/admin-news-settings-live.webp" alt="Admin News Settings" /></a>

### Quick Action Header Buttons

At the top of the settings page, two primary action buttons provide instant navigation:

- **See All News**: Opens the complete news management list to view published, draft, and trashed news.
- **Add a New News**: Opens the announcement creation screen to write a new news article.

---

### Configuration Fields

The settings form allows administrators to manage news visibility across the entire vendor base:

| Setting Field | Field Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **Hide News from Vendors** | Multi-select dropdown | None | Select specific vendors who should **not** see the news section on their vendor dashboard. |
| **Show news to Vendors** | Dropdown | From last 30 days | Define the historical date range of news visible on vendor dashboards. |
| **Select the custom date** | Date picker | None | Visible only when "From a custom date" is chosen. Specifies an exact cutoff date. |

#### 1. Hide News from Vendors
- Uses a searchable multi-select dropdown listing all registered marketplace vendors.
- Allows administrators to exclude specific vendor accounts from accessing the Admin News section entirely.
- Selected vendors will not see the news section or announcements on their dashboard.
- Helpful when running targeted news campaigns or restricting communication to specific vendor tiers.

#### 2. Show news to Vendors
- Controls how far back vendors can see published announcements.
- Available duration presets:
  - **From last 7 days**: Displays only news published within the past week.
  - **From last 30 days** *(Default)*: Displays news published within the past month.
  - **From last 3 months**: Extends visibility to announcements from the previous 90 days.
  - **From last 6 months**: Extends visibility to announcements from the previous 180 days.
  - **From last 1 year**: Displays announcements published within the last 365 days.
  - **From a custom date**: Enables an exact cutoff date picker.

<a class="doc-image-link" href="./assets/admin-news-custom-date.webp"><img src="./assets/admin-news-custom-date.webp" alt="Admin News Custom Date Filter" /></a>

#### 3. Select the custom date
- Appears dynamically when **From a custom date** is selected.
- All news items published **on or after** this chosen date are displayed on the vendor dashboard.
- Useful for milestone releases, new contract periods, or calendar-year transitions.

After adjusting these fields, click **Save Changes** to apply the configuration.

---

## Create News

- Click on **Add New News** to create a new announcement.
- Enter the required news details such as:
  - News title
  - Description/content
  - Visibility options

<a class="doc-image-link" href="./assets/settings.webp"><img src="./assets/settings.webp" alt="Admin News Settings" /></a>

- Click **Publish** to make the news live.
- Admin can also **edit previously published news** at any time.

<a class="doc-image-link" href="./assets/admin-news-create-new-live.webp"><img src="./assets/admin-news-create-new-live.webp" alt="Add New News Screen" /></a>

### Step-by-Step Announcement Creation Process

To publish a clear and engaging announcement for vendors:

1. Go to **Marketplace → Admin News** and click **Add a New News** (or click **See All News → Add New News**).
2. **Enter News Title**: Add a concise, informative headline into the title field (e.g., *"Scheduled Maintenance on Saturday Night"* or *"Updated Commission Rates for Q4"*).
3. **Compose Content**: Write the announcement body using the rich WordPress content editor:
   - Use the **Visual** tab for standard WYSIWYG formatting (headings, lists, bold text, links, alignment).
   - Use the **Text** tab to insert custom HTML formatting or embedded media.
   - Click **Add Media** if you need to attach relevant diagrams, PDF policy documents, or banners.
4. **Configure Publish Box**:
   - **Save Draft**: Saves the current progress without showing it to sellers.
   - **Status**: Toggle between `Draft`, `Pending Review`, and `Published`.
   - **Visibility**: Keep as `Public` for regular vendor visibility, or use `Password protected` / `Private` for restricted administrative testing.
   - **Publish Immediately / Schedule**: Set an immediate publication timestamp or schedule a future date and time.
5. **Slug Box**: Review and customize the URL slug if necessary.
6. Click **Publish** to push the announcement live to eligible vendors.

---

## News Visibility Options

While creating or editing news, the admin can control which sellers can see the announcement using the following options:

### Show News to Sellers

- When this option is enabled:
  - The news is visible to **all sellers** in the marketplace.
  - Sellers can view the news from their **Vendor Account Panel**.
- Suitable for:
  - General marketplace announcements
  - Policy updates
  - Feature releases
  - Maintenance notifications

---

### Hide News from Sellers

- When this option is enabled:
  - The news is **hidden from sellers**.
  - Only the admin can view the news in the admin panel.
- Useful for:
  - Draft announcements
  - Internal testing
  - Temporarily disabling outdated or irrelevant news
  - Preparing announcements for future publishing

> **Note:** The admin can toggle these options anytime by editing the news item.

---

## View All News

- Click on **See All News** to view the complete list of created news.
- Displays:
  - Active news
  - Hidden news
  - Previously published announcements

<a class="doc-image-link" href="./assets/admin-news-all-posts-live.webp"><img src="./assets/admin-news-all-posts-live.webp" alt="All News List" /></a>

### News Management Interface Dimensions

The **All News** screen provides comprehensive management tools for maintaining announcements:

#### 1. Status Filter Tabs (Views)
At the top of the table, administrators can quickly switch between different post states:

- **All**: Displays all news items regardless of status (with total item count).
- **Published**: Shows only active announcements currently eligible for vendor visibility.
- **Draft**: Lists saved drafts that are not yet visible to vendors.
- **Trash**: Contains temporarily deleted items that can be restored or permanently removed.

#### 2. Search & Filtering Dimensions

- **Filter by Date**: A dropdown menu grouping posts by month and year (e.g., *All dates*, *October 2026*, *September 2026*). Select a month and click **Filter** to isolate announcements.
- **Search Posts**: Enter keywords into the search input box and click **Search Posts** to find specific announcements by title or content snippet.
- **Bulk Actions**: Select multiple news items using table checkboxes, choose an action from the dropdown (**Bulk edit** or **Move to Trash**), and click **Apply**.

#### 3. Table Columns & Row Actions

| Table Column | Details Displayed | Available Actions |
| :--- | :--- | :--- |
| **Checkbox** | Selection box for individual or bulk actions | Select all or individual records |
| **Title** | News title and status indicator (e.g., `— Draft`) | Hover over row to reveal: <br>• **Edit**: Opens full edit screen<br>• **Quick Edit**: Opens inline editor<br>• **Trash**: Moves post to trash |
| **Date** | Publication state (`Published` or `Last Modified`) with exact date and time | Click column header to sort ascending or descending |

#### 4. Quick Edit Capabilities

Clicking **Quick Edit** on any news row opens an inline editing drawer without leaving the page. Administrators can rapidly modify:

- **Title**: Update the headline.
- **Slug**: Modify the permalink slug.
- **Date**: Adjust publication date, month, year, hour, and minute.
- **Password / Private**: Set a access password or toggle private status.
- **Status**: Change post status between `Published`, `Pending Review`, and `Draft`.

---

## Vendor Visibility

- Published and visible news appears in the vendor’s **Vendor Account Panel**.
- Sellers can:
  - View the announcement title
  - Read the full news content

<a class="doc-image-link" href="./assets/vendor-admin-news-table-live.webp"><img src="./assets/vendor-admin-news-table-live.webp" alt="Vendor News View" /></a>

### Vendor Dashboard Interface

Vendors access announcements from their dedicated vendor panel:

1. The vendor logs in to their marketplace vendor account.
2. Under the dashboard navigation menu, they click **News & Notifications → Admin News** (or access the **Admin News** section in their vendor dashboard).
3. The **Admin News** feed displays a structured table containing:
   - **Title**: The headline of the news announcement (clickable link).
   - **Description**: A short preview excerpt of the news content.
   - **Published On**: The exact date the announcement was published.
4. **Reading Full News Details**: The vendor clicks on the news headline to open the dedicated article view with full text, guidelines, embedded images, and links.

<a class="doc-image-link" href="./assets/vendor-new.webp"><img src="./assets/vendor-new.webp" alt="Vendor News View" /></a>

---

## Use Cases

- **Marketplace-wide announcements**: Share platform milestones, holiday shipping guidelines, or promotional events.
- **Vendor onboarding updates**: Provide new sellers with helpful tips, policies, and marketplace standards.
- **Policy or commission changes**: Announce revisions to seller commission structures, payouts, or return policies.
- **New feature releases**: Educate vendors on new tools such as compare features, shipping addons, or reporting enhancements.
- **Scheduled maintenance notifications**: Give advance warning before server updates or marketplace downtime.

---

## Best Practices & Troubleshooting

### Best Practices for Administrators

- **Keep Headlines Clear and Actionable**: Use direct titles so vendors immediately understand the topic (e.g., *"Urgent: Update Shipping Policies Before Dec 1"*).
- **Use Drafts for Review**: Prepare announcements in **Draft** status so team members can review copy before publishing.
- **Schedule in Advance**: Use the WordPress scheduling feature to publish news at optimal vendor business hours.
- **Review Date Cutoffs Regularly**: Ensure the **Show news to Vendors** duration in Admin News Settings covers all relevant historical announcements.

### Troubleshooting Common Questions

| Issue | Probable Cause | Recommended Resolution |
| :--- | :--- | :--- |
| **Vendors cannot see an announcement** | The news post status is set to Draft. | Go to **Marketplace → Admin News → See All News**, edit the post, and click **Publish**. |
| **Vendor reports news table is empty** | The post publication date is older than the configured timeframe in settings. | Go to **Marketplace → Admin News** and increase **Show news to Vendors** (e.g., from 30 days to 90 or 180 days, or choose *From a custom date*). |
| **Specific vendor cannot see any news** | The vendor is listed under **Hide News from Vendors**. | Go to **Marketplace → Admin News**, remove the vendor from the **Hide News from Vendors** multi-select field, and click **Save Changes**. |
| **Accidentally deleted news post** | News was moved to Trash. | Go to **Marketplace → Admin News → See All News**, click the **Trash** tab, hover over the item, and click **Restore**. |

---
