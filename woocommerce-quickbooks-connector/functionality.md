# Plugin Functionality Analysis

## 1. Plugin Identity
- **Name:** QuickBook Connector for WooCommerce
- **Version:** 4.0.0
- **WooCommerce Dependency:** Requires at least 10.0 (tested up to 11.3)
- **WordPress/PHP Requirements:** WordPress 6.7 to 7.1; PHP 8.2 to 8.5
- **Target Source:** `/home/users/vikas.reactjs/www/html/new-quickbook/wp-content/plugins/woocommerce-quick-book-online-connector`
- **Demo Version:** Live connected sandbox instance on `https://192.168.15.207/new-quickbook` (connected to Intuit Sandbox Company `Sandbox Company US f1a9`)
- **Reference Documentation:** `wpdoc.webkul.com/woocommerce-quickbooks-connector/`

## 2. Roles
| Role | Access Area | Verified | Credentials Required | Documentation Section |
|---|---|---:|---:|---|
| Store Administrator | `wp-admin` (`admin.php?page=wkquick-book-main`) | Yes | WP Admin credentials | All Admin Guides |
| Store Customer | Storefront / Checkout | Yes | Standard WC Customer | Orders & Customers |
| POS Cashier / Operator | Webkul WooCommerce POS Terminal | Yes | POS Operator account | Payment Methods & Orders |

## 3. Prerequisites
| Requirement | Why Required | Evidence | User-Facing Impact |
|---|---|---|---|
| WooCommerce >= 10.0 | Core e-commerce cart, checkout, orders, HPOS tables | Plugin header & bootstrap | Plugin requires active WooCommerce to function |
| Intuit Developer Account & App | Provides OAuth 2.0 Client ID & Client Secret | `class-wkquickbook-connection-settings.php` | Needed to establish secure API connection |
| QuickBooks Online Company | Target accounting entity for financial data | OAuth token handshake | Holds charts of accounts, items, invoices, customers |
| Webkul Plugin License | Module activation prerequisite | `class-quick-book-setup-wizard.php` | Must be activated before setup wizard or settings access |

## 4. Admin Functionality

### 4.1 Onboarding & Setup Wizard
- **Purpose:** Fast-track initial connection to QuickBooks in a 4-step guided workflow.
- **Entry point:** `wp-admin` → **Webkul WC Addons** → **WC Quick Book Connector** (on fresh install) or via Setup Wizard action button.
- **Prerequisites:** Webkul license activated; Intuit app Client ID and Secret obtained.
- **Configuration fields:**
  - Step 1: Welcome & feature overview.
  - Step 2: Environment mode (`sandbox` or `production`).
  - Step 3: API Credentials (Client ID, Client Secret, registered Redirect URIs, "Connect with QuickBooks" authorization button).
  - Step 4: Verification & Complete Setup (live connection test, Company ID confirmation).
- **Validation:** Enforces presence of Client ID & Secret; checks OAuth token handshake.
- **Expected behavior:** Successfully creates and stores connection tokens, maps Company ID, and redirects to Dashboard.

### 4.2 Dashboard & Financial Intelligence
- **Purpose:** Centralized operational overview of QuickBooks synchronization and accounting metrics.
- **Entry point:** **WC Quick Book Connector → Dashboard** (`tab=dashboard`).
- **Configuration fields:** Connection status badge, Sync KPIs (synced products, orders, customers, payment methods, taxes), 7-day sync activity chart, "Needs Attention" table, System Health indicator, Financial Snapshot (Revenue, Expenses, Net Income from QuickBooks).
- **Expected behavior:** Real-time metrics read directly from sync tables and QuickBooks API cache with manual AJAX Refresh capability.

### 4.3 General Settings (Accounts, Tax, Matching, Background Sync)
- **Purpose:** Core mapping of accounting ledgers, product catalog behaviors, and background processing.
- **Entry point:** **WC Quick Book Connector → Configuration → General Settings** (`tab=configuration&sub-tab=product`).
- **Tabs:**
  - **Accounts & Tax:** Asset Account, Default Expense Account, Default Income Account, Default Deposit To Account, Default Tax Code.
  - **Import & Export:** Batch Size for Import (3–30), Default QuickBooks Import Product Status (publish/draft/pending/private), Export Products With Price Zero (Yes/No).
  - **Matching:** Match Products By (SKU, GTIN, Name), Action When No Item Matches (Create new QuickBooks item vs Return error), Item Code for New Items, Action When No Customer Matches (Create new vs Return error), Customer Type for New Customers.
  - **Background Sync:** Sync in Background via Action Scheduler (Recommended: Yes), Sync Log Retention Days (7–90 days).
- **Expected behavior:** Direct dropdown population of live QuickBooks Chart of Accounts; safe fallback to default income/expense ledgers.

### 4.4 Auto Sync Settings
- **Purpose:** Real-time and scheduled background synchronization between WooCommerce and QuickBooks.
- **Entry point:** **WC Quick Book Connector → Configuration → Auto Sync** (`tab=configuration&sub-tab=autosync`).
- **Tabs:**
  - **Products:**
    - Real-Time Product Export (WooCommerce to QuickBooks) with category multi-select.
    - Real-Time Product Import (QuickBooks to WooCommerce) with category multi-select.
    - Two-Way Real-Time Stock Synchronization.
    - "Details to Export" checkboxes (Title, Price, Description, SKU, Stock quantity, Images).
    - "Details to Import" checkboxes (Title, Price, Description, SKU, Stock quantity).
    - Image sync direction (Disabled, WC to QuickBooks, QuickBooks to WC).
  - **Orders:**
    - Auto Export Orders: **Dynamic Multi-Select dropdown** supporting individual or multiple order statuses (e.g. Processing, Completed, On hold, or All).
    - Payments to QuickBooks sync toggle.
    - Auto Generate Refund Receipt toggle for WooCommerce order refunds.
- **Expected behavior:** Triggers Action Scheduler background jobs without blocking customer checkout or admin saves; skips redundant echo updates.

### 4.5 Export Order Settings (General, Fees, Rounding, Class & Department Mapping)
- **Purpose:** Control document formats, numbers, tax reconciliation, order fee accounts, and classification hierarchies.
- **Entry point:** **WC Quick Book Connector → Configuration → Export Order Settings** (`tab=configuration&sub-tab=ordermapping`).
- **Tabs:**
  - **General:**
    - Export Orders As: Sales Receipt, Invoice, Estimate, or Credit Memo.
    - Void orders in QuickBooks when WooCommerce order is cancelled.
    - Skip country in bill/ship address toggle.
    - Export orders with zero product price toggle.
    - Statement Memo (PrivateNote) source.
    - Service Date source & QuickBooks Order Date source.
    - Document Number (Order Number vs Order ID).
    - Payment Reference Number (Order Number, Order ID, Transaction ID).
    - QuickBooks Print Status (None, Print Later, Print Complete).
    - Classification Defaults: Default Class, Default Department.
    - **Penny-Rounding Reconciliation:** Auto-balance fractional rounding differences (up to configurable threshold, e.g. 0.50) to prevent line-item sum mismatch errors in QuickBooks. Linked to Rounding Adjustment Account.
    - **Order Fees & Discounts Mapping:** Dedicated accounts for Positive Order Fees (shipping surcharges, gift wrap) and Negative Order Fees / manual discounts.
  - **Class & Department Mapping:**
    - Product Category to Class Mapping table.
    - Country to Class and Department Mapping table.
    - Priority order: Category rule → Country rule → Payment method rule → General default.

### 4.6 Products Synchronization
- **Purpose:** Manage product catalog export, import staging, and real-time inventory levels.
- **Entry point:** **WC Quick Book Connector → Products** (`tab=products`).
- **Sub-tabs:** Synced Products, Import Products, Category Mapping.
- **Features:** One-click manual export of simple and variable products; staged import queue from QuickBooks; two-way inventory sync; bulk export/update action on WooCommerce Products list table.

### 4.7 Orders Synchronization
- **Purpose:** Manage sales document creation, payment sync, and refund receipts.
- **Entry point:** **WC Quick Book Connector → Orders** (`tab=orders`).
- **Features:** Manual export to QuickBooks; status badges; direct search by Order ID / Order Number; sync error view; order edit screen meta box; bulk export/update action on WooCommerce Orders list table.
- **Line item handling:** Normal products, shipping lines, dynamic order fee items (mapped to income/expense accounts), multiple coupon codes appended to PrivateNote memo and discount lines, penny-rounding adjustment lines.

### 4.8 Payment Methods & Webkul POS Split Payments
- **Purpose:** Route incoming payments to specific QuickBooks bank/clearing accounts.
- **Entry point:** **WC Quick Book Connector → Payment Methods** (`tab=payment-methods`).
- **Features:** Map each gateway (BACS, COD, Stripe, PayPal, etc.) to QuickBooks payment methods and deposit accounts.
- **Webkul POS Split Payment:** Special support for `pos_split` method with breakdown notes (e.g. `50 Cash, 30 Card`), dedicated split clearing bank account, and automatic split refund routing.

### 4.9 Tax Mapping
- **Purpose:** Map WooCommerce tax classes (Standard, Reduced, Zero Rate) to QuickBooks tax codes.
- **Entry point:** **WC Quick Book Connector → Taxes** (`tab=taxes`).
- **Features:** Direct 1-to-1 rate mapping, fallback default tax code, clear mapping bulk action.

### 4.10 QuickBooks Financial Reports
- **Purpose:** View QuickBooks financial reports directly inside WooCommerce admin.
- **Entry point:** **WC Quick Book Connector → Reports** (`tab=reports`).
- **Reports:**
  - Profit & Loss
  - Balance Sheet
  - Cash Flow
  - Sales by Product
  - Sales by Customer
  - Accounts Receivable (A/R) Aging
- **Capabilities:** Date range filters, accounting method toggle (Cash vs Accrual), CSV export.

### 4.11 Sync Monitor & Failure Email Alerts
- **Purpose:** Audit sync health, inspect API request/response payloads, and receive email digest notifications on errors.
- **Entry point:** **WC Quick Book Connector → Sync Monitor** (`tab=sync-monitor`) and **Configuration → Email Notifications** (`tab=configuration&sub-tab=mail`).
- **Features:**
  - Overview: Synced vs pending vs failed record coverage.
  - Activity: Complete timeline of every sync event with full payload JSON and Intuit response.
  - Logs: WooCommerce system log reader with level filter, search, download, and purge.
  - Email Notifications: Automated alerts on sync failure with configurable frequency (Instant, Hourly, Every 3 Hours, Every 6 Hours, Twice Daily, Daily, Custom Interval >= 15m).

## 5. Customer Functionality
- **Checkout Experience:** Transparent to store customers. Orders placed on storefront or POS are queued in the background for QuickBooks sync.
- **Account Data:** Customer billing/shipping address and contact details sync to QuickBooks customer record without creating duplicate entries.

## 6. POS Functionality
- **Tender Routing:** When orders are processed via Webkul WooCommerce POS, single or split tenders (Cash, Card, Custom Tender) are captured and mapped to designated QuickBooks bank clearing accounts.
- **Transaction Memo:** Detailed split tender breakdown recorded in QuickBooks PrivateNote.
- **Refunds:** POS refunds are routed back to the appropriate clearing account.

## 7. Emails and Notifications
| Trigger | Recipient | Template/Message | Conditions | Verified |
|---|---|---|---|---|
| Background sync failure | Store Admin email(s) | WooCommerce HTML/Plain Email alert | When entity sync fails and email notification is enabled | Yes |
| Digest schedule execution | Store Admin email(s) | Digest summary of failures | Configured frequency (e.g., Every 3 Hours) | Yes |

## 8. Permissions
| Capability/Role | Visible Action | Allowed/Denied | Verified |
|---|---|---|---|
| Administrator (`manage_options`) | All Connector menus, tabs, mappings, sync triggers, wizard | Allowed | Yes |
| Shop Manager | Standard WooCommerce order/product management | Allowed for WP data; connector menu restricted unless permitted | Yes |
| Customer | Store checkout | Standard WooCommerce experience | Yes |

## 9. Validation and Error States
| Area | Trigger | User Message/Behavior | Recovery |
|---|---|---|---|
| OAuth Connection | Expired / Invalid Refresh Token | "Token expired. Please reconnect." | One-click Reconnect with QuickBooks button |
| Customer Collision | Duplicate customer display name in QuickBooks (Error 6240) | Auto-disambiguates using email or appends customer ID | Handled gracefully by resolver |
| Tax Discrepancy | Fractional penny rounding difference between line items and total | Automatically balances via Roundoff Adjustment item | Enabled by default; threshold configurable |
| Order Fees | Custom checkout fees (positive/negative) | Automatically creates and maps dynamic fee Service Item | Maps to positive or negative fee account |
| License Check | Accessing connector menu before license activation | Displays license setup prompt before wizard | Activate Webkul license under Webkul WC Addons |

## 10. Screenshot Plan
| Filename | Role | Page/State | Feature | Capture Status |
|---|---|---|---|---|
| `setup-wizard-welcome.webp` | Admin | Setup Wizard Step 1 | Welcome Screen | Reused |
| `setup-wizard-environment.webp` | Admin | Setup Wizard Step 2 | Environment Selection | Reused |
| `setup-wizard-credentials.webp` | Admin | Setup Wizard Step 3 | API Credentials & OAuth | Reused |
| `setup-wizard-ready.webp` | Admin | Setup Wizard Step 4 | Confirmation & Ready | Reused |
| `connection-status.webp` | Admin | Connection Tab | Live Connected Company | Reused |
| `general-settings.webp` | Admin | General Settings Tab | Account Mapping | Reused |
| `autosync-settings.webp` | Admin | Auto Sync Tab | Product & Stock Sync | Reused |
| `export-order-settings.webp` | Admin | Export Order Settings Tab | Order Mappings & Fees | Reused |
| `payment-methods-list.webp` | Admin | Payment Methods Tab | Gateway & POS Mapping | Reused |
| `products-list.webp` | Admin | Products Tab | Synced Products & Stock | Reused |
| `orders-list.webp` | Admin | Orders Tab | Order Export & Status | Reused |
| `customers-list.webp` | Admin | Customers Tab | Customer Sync | Reused |
| `taxes-list.webp` | Admin | Taxes Tab | Tax Mapping | Reused |

## 11. Documentation Map
| Functionality | Target Page | Heading | Internal Links |
|---|---|---|---|
| Module Overview & Compatibility | `quickbooks-connector/overview.html` | Overview & System Requirements | Links to Installation & Features |
| Feature Inventory | `quickbooks-connector/features.html` | Core Features & Capabilities | Links to Setup Wizard & General Settings |
| Competitor Comparison | `quickbooks-connector/comparison.html` | Why Our Module is Best | Links to Features & Overview |
| Installation Guide | `quickbooks-connector/installation.html` | Installation & Activation | Links to Intuit Credentials & Wizard |
| Intuit Credentials Setup | `quickbooks-connector/intuit-credentials.html` | Get Your Intuit Credentials | Links to Setup Wizard |
| Setup Wizard Walkthrough | `quickbooks-connector/setup-wizard.html` | Guided Setup Wizard | Links to Connection & General Settings |
| Connection Management | `quickbooks-connector/connection.html` | Connection Settings | Links to Setup Wizard & General Settings |
| General Configuration | `quickbooks-connector/general-settings.html` | General Settings | Links to Auto Sync & Export Order Settings |
| Real-time & Auto Sync | `quickbooks-connector/auto-sync.html` | Auto Sync Settings | Links to General Settings & Orders |
| Order Export & Accounting | `quickbooks-connector/export-order-settings.html` | Export Order Settings | Links to Orders & Payment Methods |
| Product & Stock Sync | `quickbooks-connector/products.html` | Product Management & Stock Sync | Links to Auto Sync |
| Order Sync & Invoicing | `quickbooks-connector/orders.html` | Order Management & Invoices | Links to Export Order Settings |
| Customer Sync | `quickbooks-connector/customers.html` | Customer Management | Links to General Settings |
| Payment Gateway & POS Split | `quickbooks-connector/payment-methods.html` | Payment Methods & POS Split | Links to Orders & Auto Sync |
| Tax Mapping | `quickbooks-connector/taxes.html` | Tax Mapping | Links to General Settings |
| FAQ & Troubleshooting | `quickbooks-connector/faq-notes.html` | Frequently Asked Questions | Links to Support & Setup |

## 12. Open Verification Items
*None — All functionality statically and dynamically verified against plugin codebase (v4.0.0) and live sandbox instance.*
