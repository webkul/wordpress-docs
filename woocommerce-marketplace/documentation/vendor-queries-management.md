---
title: Vendor Queries Management – Admin & Support Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-queries-management.html
---

# Vendor Queries Management

The **Vendor Queries Management** feature allows vendors to raise questions or concerns directly to the marketplace admin.

<a class="doc-image-link" href="./assets/queries.png"><img src="./assets/queries.png" alt="Queries List" /></a>

---

## Manage Vendor Queries

This section provides a dedicated interface for handling vendor inquiries.

### Navigation Path

- **Marketplace → Queries**

---

### Vendor Query List

The admin can view all queries raised by vendors, including:
- Vendor name
- Query subject
- Query message
- Date of submission

This helps the admin track and manage vendor communications efficiently.

---

### Reply to Vendor Queries

- Admin can respond to vendor queries directly from the admin panel.
- Click the **Reply** button against a specific query.
- The response is sent to the vendor for further communication or clarification.
- **Threaded View**: Both the vendor and admin can view the entire back-and-forth conversation as a threaded chat history to easily track the context of the issue.

<a class="doc-image-link" href="./assets/admin-answered-to-query.png"><img src="./assets/admin-answered-to-query.png" alt="Admin Answered to Query Thread" /></a>

---

## Summary – Vendor Queries Management

- Vendors can communicate directly with the admin
- Admin can view and manage all vendor queries from a single location
- Enables faster resolution of vendor issues
- Improves vendor–admin communication within the marketplace

---

## Admin Navigation & Console Access

Marketplace administrators and store managers can access the vendor query helpdesk directly from the WordPress administration menu:

- **Menu Route**: **Marketplace → Queries**
- **Screen Heading**: **Queries List**
- **Direct Admin URL**:
  ```text
  https://your-domain.com/wp-admin/admin.php?page=wk-marketplace-queries
  ```
- **Authorized Roles**: Administrator, Store Manager, or custom administrative staff with Marketplace capabilities.

::: tip Fast Daily Triage
Bookmark the **Marketplace → Queries** URL in your web browser. Setting up a morning and afternoon triage routine ensures all newly opened vendor questions receive timely responses within your platform's target SLA (Service Level Agreement).
:::

---

## Query Lifecycle & Communication Flow

The marketplace provides a two-way ticketing system connecting the vendor front office with the admin back office. The flowchart below illustrates the complete lifecycle of a vendor inquiry from submission to resolution:

```
    ┌────────────────────────────────────────┐
    │       Vendor (Seller Dashboard)        │
    │  Submits query via "Ask to Admin" tab  │
    └───────────────────┬────────────────────┘
                        │
                        ▼
    ┌────────────────────────────────────────┐
    │       Automated Email Dispatch         │
    │    Admin receives alert notification   │
    └───────────────────┬────────────────────┘
                        │
                        ▼
    ┌────────────────────────────────────────┐
    │      Marketplace → Queries List        │
    │  Query appears with status: "Open"     │
    └───────────────────┬────────────────────┘
                        │
                        ▼
    ┌────────────────────────────────────────┐
    │    Admin Clicks "View & Reply"         │
    │  Interactive ThickBox modal opens with │
    │    complete message thread history     │
    └───────────────────┬────────────────────┘
                        │
                        ▼
    ┌────────────────────────────────────────┐
    │      Admin Types Message & Sends       │
    │ • Reply added to conversation thread   │
    │ • Status updates to "Answered"         │
    │ • Last Reply timestamp refreshed       │
    │ • Notification sent to vendor          │
    └───────────────────┬────────────────────┘
                        │
                        ▼
    ┌────────────────────────────────────────┐
    │          Vendor Follow-up              │
    │ Vendor reads answer; can reply further │
    │ or consider the inquiry resolved       │
    └────────────────────────────────────────┘
```

---

## Query Status Views & Filter Dimensions

The queries console organizes vendor communications into three distinct status tabs located above the data table. Each tab provides an immediate count badge displaying the total number of inquiries in that state.

<a class="doc-image-link" href="./assets/admin-queries-all-view.png"><img src="./assets/admin-queries-all-view.png" alt="All Queries List View" /></a>

### Status Tabs Breakdown

| Tab Label | URL Parameter & Route | Status Filter | Purpose & Operational Scope |
| :--- | :--- | :--- | :--- |
| **All** | `admin.php?page=wk-marketplace-queries` | All records | Displays the complete chronological record of all vendor inquiries regardless of their current resolution state. |
| **Answered** | `admin.php?page=wk-marketplace-queries&status=answered` | `status=answered` | Displays all inquiries where the administrator has submitted an official response to the vendor. |
| **Open** | `admin.php?page=wk-marketplace-queries&status=open` | `status=open` | Filters exclusively for pending inquiries that require an administrator's attention and response. |

### 1. Open Queries View (`status=open`)

The **Open** tab is the primary operational queue for support staff. It isolates active vendor requests that are waiting for an initial response or follow-up clarification.

<a class="doc-image-link" href="./assets/admin-queries-open-view.png"><img src="./assets/admin-queries-open-view.png" alt="Open Queries View" /></a>

- **Key Objective**: Identify pending questions quickly without scrolling through resolved conversations.
- **Priority Indicator**: Inquiries listed here have not received a response since the vendor's last message.
- **Action**: Click **View & Reply** to inspect the vendor's query and send an answer.

### 2. Answered Queries View (`status=answered`)

The **Answered** tab maintains a historical log of all inquiries where an administrator has already replied.

<a class="doc-image-link" href="./assets/admin-queries-answered-view.png"><img src="./assets/admin-queries-answered-view.png" alt="Answered Queries View" /></a>

- **Key Objective**: Review past answers, verify commitments made to merchants, and reference previous guidance on store policies or technical settings.
- **Continuous Conversation**: Administrators can still open any answered query via **View & Reply** to append additional notes or provide further clarification.

---

## Table Columns & Field Reference

The Queries table displays comprehensive metadata for each inquiry, allowing administrators to assess urgency and context at a glance.

| Column Header | Database / Attribute Key | Sortable | Description & Behavioral Details |
| :--- | :--- | :--- | :--- |
| **Checkbox** | `cb` (`Select All`) | No | Checkbox used to select individual or multiple query records for bulk deletion. |
| **Vendor** | `seller` (`column-seller`) | No | Displays the public store name of the vendor who submitted the inquiry (e.g., *Aurora Athletics*, *Maison Terra*, *Volt & Vine*). |
| **Date Created** | `date_created` | **Yes** (Asc / Desc) | The date and time when the vendor first submitted the query ticket. Click the column header to toggle ascending or descending order. |
| **Subject** | `subject` | **Yes** (Asc / Desc) | The subject title entered by the vendor summarizing the issue (e.g., *Vacation dates not showing on my store page*, *Shipping rates for EU orders*). |
| **Message** | `message` | No | A preview excerpt of the inquiry body text providing immediate context without opening the ticket modal. |
| **Last Reply** | `last_reply` (`last_reply_at`) | **Yes** (Asc / Desc) | Timestamp indicating when the most recent response was posted by either the vendor or administrator. Useful for tracking conversation recency. |
| **Status** | `status` | No | Resolution badge indicating either **Open** (unanswered / awaiting admin action) or **Answered** (admin has responded). |
| **Action** | `action` | No | Contains the **View & Reply** primary button that launches the interactive conversation modal dialog. |

---

## Search, Filtering & Sorting Tools

To handle high volumes of vendor correspondence across large multi-vendor catalogs, the interface provides targeted search, sorting, and bulk management controls.

### 1. Subject Search Filter

The search bar is located at the top right of the data table:

- **Input Field**: Text box with placeholder `Search by subject` (`input[name="s"]`).
- **Execution**: Enter any keyword or phrase contained in query subjects and click **Search by subject** (or press <kbd>Enter</kbd>).
- **URL Parameter**: Appends `&s=your_keyword` to the current admin URL, maintaining any active status filter tab.
- **Use Case**: Quickly find past inquiries regarding specific topics such as "shipping", "commission", "payout", "vacation", or "tax".

### 2. Multi-Column Sorting

Administrators can sort table rows dynamically by clicking the hyperlinked headers:

- **Sort by Date Created**: Orders records by submission timestamp (`orderby=date_created&order=asc|desc`).
- **Sort by Subject**: Sorts records alphabetically by inquiry subject line (`orderby=subject&order=asc|desc`).
- **Sort by Last Reply**: Orders records by the most recently updated conversation (`orderby=last_reply_at&order=asc|desc`), ensuring recent vendor replies are reviewed first.

### 3. Bulk Actions (Delete)

The interface includes a bulk action mechanism at both the top and bottom of the table:

1. Select one or more queries using the row checkboxes, or click the **Select All** checkbox in the table header.
2. Open the **Bulk actions** dropdown selector.
3. Choose **Delete**.
4. Click **Apply** to permanently remove selected inquiries from the database.

::: warning Irreversible Deletion
Deleting a query permanently removes the ticket record and its entire back-and-forth conversation history from both the admin console and the vendor's dashboard. Ensure that resolved issues are retained if you require audit trails for vendor compliance.
:::

---

## Interactive Query Detail & Reply Modal (ThickBox)

When an administrator clicks the **View & Reply** button on any query row, the system launches an interactive WordPress ThickBox modal window (`#TB_inline?width=1100&height=720&inlineId=meta-box-[id]`). This allows full review and response without leaving the queries list page.

<a class="doc-image-link" href="./assets/admin-query-thread-modal.png"><img src="./assets/admin-query-thread-modal.png" alt="Interactive Query Thread and Reply Modal" /></a>

### Elements of the Query Modal

The modal dialog is structured into three clean functional zones:

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Subject Title]                                   with [Vendor Name]  │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐      │
│  │ [Vendor Store Name]                 October 4, 2026 3:12 pm  │      │
│  │ I set my closure for 28 September to 9 October...            │      │
│  └──────────────────────────────────────────────────────────────┘      │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐      │
│  │ Admin                               October 5, 2026 9:40 am  │      │
│  │ The banner you are seeing on the product page is tied to...  │      │
│  └──────────────────────────────────────────────────────────────┘      │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  Reply Message                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Type your response to the vendor here...                         │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  [ Send Reply ]                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

#### 1. Header Bar
- **Subject Heading**: Highlights the exact query subject submitted by the vendor.
- **Vendor Attribution**: Displays the vendor's store name (e.g., `with Maison Terra`) confirming the communication partner.

#### 2. Thread Message Stream
- **Chronological History**: All messages exchanged between the vendor and administration are listed chronologically from top to bottom.
- **Vendor Messages (`.wkmp-msg-seller`)**: Left-aligned conversation bubbles showing the vendor's shop name, submission timestamp, and message body.
- **Admin Messages (`.wkmp-msg-admin`)**: Formatted reply bubbles indicating **Admin**, the response timestamp, and the exact guidance provided.

#### 3. Reply Composer Box
- **Textarea (`Reply Message`)**: A multi-line text input field where administrators compose their message to the seller.
- **Send Reply Button (`.seller-query-revert`)**: Submitting the reply instantly:
  - Appends the message to the conversation thread.
  - Updates the ticket's resolution status to **Answered**.
  - Refreshes the `Last Reply` timestamp in the list table.
  - Triggers an email alert to the vendor's registered contact address.

---

## Vendor-Side Integration: "Ask to Admin"

Vendors interact with this communication channel directly from their merchant dashboard without needing access to the WordPress admin panel:

1. **Access Point**: The merchant logs into their storefront account and navigates to **Seller Dashboard → Ask to Admin**.
2. **Raising a Query**: The vendor clicks **Add**, enters an inquiry **Subject**, types their message into the query box, and clicks **Ask**.
3. **Tracking Responses**: The vendor's dashboard displays a history of all questions asked, their current status, and full threaded responses from the marketplace administrator.
4. **Follow-Up Questions**: If the vendor needs additional clarification after reading the admin's answer, they can submit another message in the same thread.

For comprehensive vendor-facing instructions, refer to the [Ask to Admin User Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/ask-to-admin.html).

---

## Automated Email Notifications

The query system is integrated with the marketplace's automated email notification engine to keep both administrators and merchants informed of ticket activity:

- **New Query Raised by Vendor**: When a merchant submits a new ticket through "Ask to Admin", the platform sends an automated notification email to the marketplace administrator containing the vendor name, subject, and question summary.
- **Admin Reply Dispatched**: When the admin clicks **Send Reply** in the modal dialog, an email notification is immediately dispatched to the vendor's registered email address with the administrator's reply text and a link to view the thread.

::: note Email Template Customization
Administrators can configure sender names, email headers, and notification settings under **WooCommerce → Settings → Emails** and the marketplace's [Email Configurations](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/email-configurations.html) panel.
:::

---

## Best Practices for Query Management

To maintain high merchant satisfaction and ensure operational efficiency across your marketplace:

1. **Daily SLA Adherence**: Check the **Open** tab at least twice daily. Aim to resolve standard inquiries within 24 business hours.
2. **Clear & Actionable Guidance**: When answering questions regarding marketplace policies, include direct links to relevant documentation pages (such as commission structures, shipping setups, or payout schedules).
3. **Categorize by Subject**: When composing replies, encourage vendors to use specific subjects (e.g., "Payout Issue - Order #1042" instead of generic words like "help") to simplify future reference.
4. **Periodic Queue Cleanup**: Use the bulk delete tool quarterly to purge obsolete, resolved conversations after verifying that financial and compliance data has been recorded.

---

## Related Documentation

- [Ask to Admin Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/ask-to-admin.html) – Vendor-facing walkthrough for submitting queries and tracking responses.
- [Marketplace Reviews & Ratings](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/manage-feedback-and-vendor-queries.html) – Moderate customer feedback and dimensional ratings.
- [Admin Notifications Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-notifications.html) – Monitor automated system alerts across orders, products, and sellers.
- [Email Configurations](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/email-configurations.html) – Configure automated notification triggers and mail templates.
- [Vendor Management Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-mangement.html) – Oversee vendor profiles, permissions, and account approvals.
