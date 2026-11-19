---
title: Ask To Admin – Vendor Support & Inquiry Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/ask-to-admin.html
---

# Ask To Admin

The **Ask To Admin** feature allows vendors to directly communicate with the marketplace admin for queries, clarifications, or support.

Clear communication between vendors and marketplace administrators is essential for smooth store operations. Whether a vendor needs help with payouts, order processing, commission rates, or account settings, the **Ask To Admin** module provides a dedicated helpdesk system right inside the vendor dashboard.

<a class="doc-image-link" href="./assets/vendor-asktoadmin-list-view.png"><img src="./assets/vendor-asktoadmin-list-view.png" alt="Vendor Ask To Admin Dashboard" /></a>

---

## Ask To Admin Overview

- Vendors can inquire about anything related to the marketplace.
- This option is available in the **vendor dashboard** under **Communication → Ask Admin** (accessible directly at `/seller/vendor-asktoadmin/`).

### Quick Navigation Path

1. Log into your **Vendor Account**.
2. Open the **Seller Dashboard**.
3. In the sidebar navigation menu, locate the **Communication** section.
4. Click on **Ask Admin**.

---

## Queries List Management

The main **Ask Admin** dashboard displays an organized table containing all previous and ongoing inquiries raised by the vendor.

### Search Queries by Subject

At the top of the table, vendors can use the **Search by subject** input field. Simply type a keyword or subject title and press enter to quickly locate specific past conversations without scrolling through the entire list.

### Queries Table Columns

| Column | Description |
| :--- | :--- |
| **Date** | Displays the date and time when the query was initially created. Click the column heading to sort chronologically in ascending or descending order. |
| **Subject** | The title of the inquiry submitted by the vendor. Clicking on the subject link opens the full conversation thread. |
| **Message** | A preview snippet of the initial query text submitted by the vendor. |
| **Status** | Shows the current resolution state of the query (such as **Open** or **Answered**). |
| **Last Reply** | Indicates the date and time of the latest reply from either the admin or the vendor. Click to sort queries by latest activity. |

::: tip Quick Access to Query Details
Vendors can open any query conversation by clicking directly on either the **Date** or the **Subject** link in the table row.
:::

---

## How Vendors Ask a Query

- Navigate to **Ask To Admin** from the vendor dashboard.
- Click on the **Ask Query** button to raise a new query.

---

## Submit a Query

When clicking the **Ask Query** button, a clean popup modal appears with the intro message: *"Send your question to the store admin and we will get back to you shortly."*

<a class="doc-image-link" href="./assets/vendor-ask-query-modal.png"><img src="./assets/vendor-ask-query-modal.png" alt="Vendor Ask Query Modal Popup" /></a>

Vendors need to fill in two required fields:

1. **Subject**: Enter a clear, concise title that summarizes your inquiry (e.g., *"Payout has not arrived"* or *"Shipping zone rate inquiry"*).
2. **Message**: Write a detailed explanation of your question or issue. Include helpful details such as order numbers, payout references, or product names so the admin can assist you faster.
3. Click on the **Ask** (or **Submit**) button to send the query.

::: warning Form Validation
Both **Subject** and **Message** are mandatory. If a vendor attempts to submit an empty form, the system highlights the missing fields with an error message to prevent accidental blank submissions.
:::

---

## Admin Notification & Threaded Chat

- Once the vendor submits the query:
  - The **admin receives an email notification** regarding the vendor’s query.
- **Threaded "Ask a Question to Admin"**: Vendor and admin replies form a chat-style thread on both the storefront and the admin panel, keeping the conversation history organized and easy to track.

---

## Threaded Conversation & Replying to Queries

Clicking on any query from the table opens the dedicated conversation view (`?view_query=<query_id>`). This interface offers a chat-like messaging experience that keeps the communication history intact.

<a class="doc-image-link" href="./assets/vendor-asktoadmin-thread-view.png"><img src="./assets/vendor-asktoadmin-thread-view.png" alt="Vendor Ask to Admin Conversation Thread View" /></a>

### Features of the Thread View

1. **Back Navigation**: Click the **Back** button at the top header to return to the queries list at any time.
2. **Admin Profile Header**: The top of the thread displays the admin card with the marketplace logo, name (**Admin**), and designated role (**Marketplace Admin**).
3. **Date Dividers**: Messages are automatically grouped by date dividers (such as *September 19, 2026*, *October 12, 2026*) so you can easily follow the timeline of events.
4. **Chat Bubbles & Role Identification**:
   - **Vendor Messages**: Appear on the vendor's side with your store name, exact time (e.g., *8:55 am*), and your question.
   - **Admin Replies**: Appear on the administrator's side with the Admin label, exact time (e.g., *2:20 pm*), and the response.

### Sending Follow-up Replies

If you need more details or wish to continue the conversation:

1. Scroll to the bottom of the conversation thread.
2. Locate the **Your Reply** text box with the placeholder *"Type your reply..."*.
3. Type your response or answer to the admin's question.
4. Click the **Send Reply** button.
5. Your reply is added immediately to the bottom of the active conversation thread without creating a separate new inquiry.

---

## Query Status Lifecycle

The query status gives vendors transparency into the progress of their inquiries:

| Status | Meaning | Recommended Action |
| :--- | :--- | :--- |
| <span class="wkmp-v2-badge wkmp-v2-badge--warning">Open</span> | The query has been submitted and is awaiting administrator review or an ongoing conversation is active. | No action required; wait for admin response or add helpful updates if new information arises. |
| <span class="wkmp-v2-badge wkmp-v2-badge--info">Answered</span> | The marketplace admin has reviewed the query and posted a reply. | Check the response in the thread. If the issue is solved, no further action is needed; otherwise, reply in the thread. |
| <span class="wkmp-v2-badge wkmp-v2-badge--success">Closed / Resolved</span> | The inquiry has been fully addressed and completed. | If you encounter a new, unrelated issue, raise a fresh query via **Ask Query**. |

---

## Best Practices for Vendors

To ensure fast and effective responses from the marketplace admin, keep these tips in mind:

- **Use Descriptive Subjects**: Instead of generic titles like *"Help"* or *"Issue"*, use specific topics like *"Tax document request for Order #1042"* or *"Payout reference clarification"*.
- **Include Reference Numbers**: Whenever discussing orders, commission discrepancies, or payouts, mention the specific reference numbers or order IDs.
- **Keep Discussions in One Thread**: If an issue requires multiple follow-ups, reply inside the existing thread rather than creating multiple separate queries for the same topic.
- **Check Spam / Notifications**: Ensure your account email is up to date so you do not miss email alerts when the admin responds.

---

## Benefits

- Direct communication channel between vendor and admin.
- Helps vendors resolve issues or doubts quickly.
- Improves overall marketplace support and transparency.
- Maintains a clean, permanent audit trail of all questions and solutions for future reference.

---
