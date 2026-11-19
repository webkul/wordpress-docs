---
title: AI Usage Limits
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/usage-limits.html
---

# AI Usage Limits

Every request a vendor makes to Generative AI (Magic AI) consumes one generation from their allocated balance. Marketplace administrators have comprehensive controls to define global quota allowances, configure custom per-seller limits, select reset cycles, and monitor token consumption to keep platform costs predictable.

::: tip Budget Protection
Setting usage limits protects marketplace owners from unexpected third-party API bills while still giving vendors sufficient capacity to list and refresh their product catalogs quickly.
:::

---

## How Generations Are Counted

Magic AI tracks vendor usage using clear, intuitive rules:

- **Full Product Generation**: Clicking **Generate** runs a full analysis across title, descriptions, specs, and SEO fields, consuming exactly **1 generation**.
- **Single-Field Regeneration**: Clicking the inline **Regenerate** button beside an individual field (e.g. asking for a different short description) consumes **1 generation**.
- **Failed or Dropped Requests**: If a third-party AI service is temporarily unavailable or returns an error, the request is **not counted** against the vendor's balance.
- **Concurrent Limits**: A vendor can run one active generation at a time to prevent duplicate concurrent API requests.
- **Reset Schedule**: Generation counts automatically reset to zero at midnight (for **Daily** limits) or on the 1st of each calendar month at 00:00 UTC (for **Monthly** limits).

---

## Setting Global Limits for All Vendors

Marketplace administrators can configure global quota policies under **WordPress Admin >> WooCommerce Marketplace >> Settings >> Generative AI**:

1. **Per-Seller Limit**: Enter the maximum number of AI generations permitted per seller within each period (e.g., `50`).
2. **Limit Period**:
   - **Daily**: Best for continuous, steady inventory creation.
   - **Weekly**: Suitable for moderate catalog expansion.
   - **Monthly**: Recommended standard for marketplace operations.
3. **Unlimited Generations**: Leave the limit field blank or enter `0` to grant unrestricted AI generations to all sellers.

---

## Customizing Limits for Individual Vendors

Administrators can override global limits for specific merchants to reward high-volume sellers, support VIP vendors, or accommodate newly onboarded partners:

1. Navigate to **WordPress Admin >> Marketplace >> Vendors**.
2. Click **Edit** on the target vendor account.
3. Scroll down to the **Generative AI Settings** section:
   - **Inherit Global**: Uses the marketplace-wide default quota.
   - **Custom Quota**: Enter a bespoke generation allowance (e.g., `200` generations/month).
   - **Disable AI Access**: Toggle off AI generation completely for flagged, suspended, or unverified seller accounts.
4. Save the vendor profile to apply the change immediately.

---

## What Vendors See

Vendors always have full visibility over their remaining AI quota directly inside their dashboard:

- **Live Balance Meter**: The Magic AI modal displays a clear counter showing remaining generations (e.g., `Generations remaining: 42 of 50 this month`).
- **Low-Balance Warning**: When a vendor reaches 5 or fewer remaining generations, the meter highlights in amber to warn them that their quota is almost exhausted.
- **Quota Exceeded Notice**: When the limit is reached, the generate button is temporarily disabled, and an informative notice explains when the quota will reset:
  > *"You have reached your AI generation limit for this month. Your quota will automatically reset on the 1st of next month."*

---

## Administrator Best Practices

- **Start with a Baseline**: A default allowance of 30 to 50 generations per month is typically sufficient for most active merchants while keeping API costs minimal (often under $0.05–$0.15 per vendor per month on models like GPT-4o-mini or Gemini 1.5 Flash).
- **Offer Tiered Quotas**: If you charge vendor subscription fees or use vendor tiers, bundle higher AI generation limits into premium vendor membership plans.
- **Consider Local Ollama**: For marketplaces with high catalog volume, consider deploying a private, self-hosted Ollama instance (such as Llama 3 or Mistral) to provide completely free, unlimited AI generation with zero third-party token costs.
- **Monitor Third-Party Dashboards**: Regularly review your OpenAI, Google AI Studio, or Anthropic developer consoles to track token consumption and configure hard billing caps on the provider side.
