---
title: AI Usage Limits & Quotas
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/usage-limits.html
---

# AI Usage Limits & Quotas

To keep marketplace operations predictable and protect store owners from unexpected third-party API bills, **Magic AI** includes built-in usage governance.

Marketplace administrators configure a single, centralized global quota setting that governs how often each vendor can generate AI content across the store.

::: tip Budget Protection & Equal Access
Configuring usage limits ensures every vendor has predictable access to AI tools to draft their product listings, while preventing runaway costs or API exhaustion.
:::

---

## How Generations Are Counted

Magic AI tracks vendor usage using clear, transparent rules:

- **Full Product Generation:** Running a multi-field generation request (from the modal assistant or the "Create Product with AI" launcher) consumes **1 generation**.
- **Single-Field Generation / Refinement:** Clicking an inline field Magic AI button or clicking "Regenerate this field" inside the review step consumes **1 generation**.
- **Image Enhancement:** Enhancing a product thumbnail image consumes **1 generation**.
- **Non-Destructive Review:** Previewing generated text, unchecking fields, or canceling a generation modal **does not consume additional generations**. Generations are only deducted when the AI engine produces content.
- **Failed or Dropped Requests:** If an external AI provider encounters a network error, downtime, or temporary timeout, the request is **not counted** against the vendor's balance.
- **Concurrent Request Protection:** A vendor can only run one active generation at a time to prevent duplicate simultaneous API calls.

---

## Global Limit Configuration for All Vendors

Marketplace administrators configure usage quotas centrally under **WordPress Admin >> Marketplace >> Magic AI >> Marketplace Features >> Limits**:

| Setting Field | Control Type | Description & Behavior |
|---|---|---|
| **Per Seller Limit** | Number / Text Input | Maximum generations allowed per vendor within the chosen timeframe. Leave blank for **unlimited**. |
| **Limit Period** | Dropdown Selector | Quota reset cycle: **Monthly** (default), **Weekly**, **Daily**, or **Lifetime**. |

### 1. Per Seller Limit
- **Global Setting, Individual Quota:** This is a **single global setting** configured by the store administrator that applies uniformly to **every vendor** across the entire marketplace.
- **Independent Allowances:** If the limit is set to `25`, **each vendor receives their own independent allowance of 25 generations** for the selected cycle. It is *not* a shared collective pool where one vendor's usage depletes another's allowance.
- **Unlimited Mode:** Leaving this field blank or empty grants **unlimited generations** to all vendors.

### 2. Limit Period
Defines the time window over which each seller's generations are counted before resetting:

| Reset Period | Reset Schedule | Recommended Use Case |
|---|---|---|
| **Monthly (Default)** | Resets on the 1st of each calendar month at 00:00 UTC | Standard marketplace operations with predictable monthly billing cycles. |
| **Weekly** | Resets every Monday at 00:00 UTC | Fast-moving marketplaces with high catalog turnover. |
| **Daily** | Resets every night at midnight (00:00 UTC) | High-volume stores encouraging regular daily product listing workflows. |
| **Lifetime** | Permanent hard cap that never resets automatically | Trial accounts or initial vendor onboarding programs. |

<a class="doc-image-link" href="./assets/marketplace-admin-magic-ai-mp-limits-quotas.webp"><img src="./assets/marketplace-admin-magic-ai-mp-limits-quotas.webp" alt="Marketplace Admin Limits and Quotas Configuration Settings" /></a>

---

## Centralized Architecture & Vendor Quota Tracking

Magic AI uses a streamlined, centralized approach so marketplace owners don't have to configure or maintain dozens of individual vendor settings:

| Central Marketplace Setting | How It Applies to Individual Vendors |
|---|---|
| **Admin sets Global Quota in Marketplace Features**<br>*(Example: 25 generations per month)* | **Every active vendor receives their own independent 25 generations:**<br>• **Vendor A:** 25 generations / month (12 used, 13 remaining)<br>• **Vendor B:** 25 generations / month (0 used, 25 remaining)<br>• **Vendor C:** 25 generations / month (25 used, quota reached) |

1. **One Central Control:** Admins configure the limit once in the **Marketplace Features** tab. There is no need to manually edit individual vendor profiles or manage separate user roles.
2. **Individual Background Balances:** In the background, Magic AI tracks each vendor's consumption independently in their account record, tied to the active reset cycle (monthly, weekly, daily, or lifetime).
3. **Automatic Period Rollover:** When a new period starts (e.g., the 1st of the next month), the vendor's period counter rolls over automatically with zero manual admin intervention.
4. **Hands-Off Maintenance:** Store administrators configure the quota once globally. The marketplace automatically manages individual vendor balances and enforces allowances with zero daily administration.

---

## Live Quota Tracking for Vendors

Vendors receive full transparency into their current usage directly inside the Magic AI generation interfaces (both the "Generate content" modal and the "Create Product with AI" wizard):

| In-Modal Meter Component | Appearance & Function |
|---|---|
| **Live Usage Text** | Displays current generation count: `12 / 25 generations used` (or `12 generations used` when unlimited). |
| **Progress Indicator Bar** | Visual colored bar showing percentage of quota consumed within the active period. |
| **Generation Safeguard** | When the limit is reached, the **Generate** button is disabled and displays an explanatory tooltip notice. |

<a class="doc-image-link" href="./assets/marketplace-vendor-magic-ai-usage-meter.webp"><img src="./assets/marketplace-vendor-magic-ai-usage-meter.webp" alt="Live Generation Quota Meter in Seller AI Creation Modal" /></a>

### In-Modal Meter Features
- **Active Generation Counter:** Shows real-time usage (e.g., `12 / 25 generations used`). If the marketplace is configured for unlimited generations, it shows `12 generations used`.
- **Dynamic Progress Bar:** Visual progress indicator displaying consumption percentage.
- **Limit Reached Safeguard:** When a vendor reaches their maximum generation allowance:
  - The **Generate** button is automatically disabled.
  - A descriptive tooltip informs the seller: *"You have reached your generation limit for this period"*.
  - Vendors can still manually edit, create, and publish products without any interruption.
  - The quota automatically renews once the active period expires.

<a class="doc-image-link" href="./assets/marketplace-vendor-magic-ai-limit-reached.webp"><img src="./assets/marketplace-vendor-magic-ai-limit-reached.webp" alt="Generation Limit Reached Safeguard with Disabled Generate Action" /></a>
