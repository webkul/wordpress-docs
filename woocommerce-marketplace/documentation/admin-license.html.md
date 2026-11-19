---
title: License Management & Activation
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/admin-license.html
---

# License Management & Activation

Activating the **WooCommerce Multi-Vendor Marketplace** license verifies your software purchase, unlocks all marketplace features, enables seamless plugin updates, and ensures access to official Webkul technical support and security patches.

Webkul provides a dedicated self-service **License Validator Portal** where you can register your purchase, manage your domains, and generate cryptographic license keys on demand.

::: tip Quick Access Links
- **License Validator Portal:** [license.aureuserp.com](https://license.aureuserp.com/)
- **Registration Page:** [license.aureuserp.com/register](https://license.aureuserp.com/register)
- **Sign In Page:** [license.aureuserp.com/login](https://license.aureuserp.com/login)
- **Supported Domains:** Up to **2 domains per license** (1 Production site + 1 Staging / Development site)
:::

---

## 1. Purchase Verification & Credentials

Before generating your license key, identify where you purchased the plugin and gather the required verification details:

| Purchase Channel | Required Verification Credentials | Where to Locate |
| :--- | :--- | :--- |
| **Envato / CodeCanyon** | • **Envato Username**<br>• **36-Character Purchase Code** (`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`) | Log in to **CodeCanyon → Downloads → WooCommerce Multi-Vendor Marketplace → Download → License certificate & purchase code** (PDF or text file). |
| **Webkul Store** | • **Webkul Store Order ID** (e.g., `#123456`)<br>• **Registered Email Address** | Check your Webkul Store order confirmation email or log in to **store.webkul.com → My Account → My Orders**. |

---

## 2. Account Registration on the License Portal

If you are a first-time user, you must register your purchase on the [License Validator Portal](https://license.aureuserp.com/register).

### Option A: Registration via Envato (CodeCanyon)

If you purchased the plugin through Envato / CodeCanyon:

1. Navigate to the **[License Portal Registration Page](https://license.aureuserp.com/register)**.
2. Select the **Envato** option tab.

<a class="doc-image-link" href="./assets/license-account-select-envato.webp"><img src="./assets/license-account-select-envato.webp" alt="Select Envato Option on License Portal" /></a>

3. Enter your **Envato Username** and your **36-character Purchase Code**.
4. Click **Verify User** to validate your purchase.

<a class="doc-image-link" href="./assets/license-account-envato-details.webp"><img src="./assets/license-account-envato-details.webp" alt="Enter Envato Username and Purchase Code" /></a>

5. Once verified, provide your active administrative email address.
6. A One-Time Password (OTP) will be sent to your email inbox. Enter the OTP to finalize your account registration.

<a class="doc-image-link" href="./assets/license-account-envato-email.webp"><img src="./assets/license-account-envato-email.webp" alt="Enter Email Address and OTP Verification for Envato" /></a>

::: warning Permanent Email Notice
The registered email address can only be changed **once** from your user profile. Always use a permanent company or store administrative email address.
:::

---

### Option B: Registration via Webkul Store

If you purchased directly from the [Webkul Store](https://store.webkul.com/woocommerce-multivendor-marketplace.html):

1. On the registration page, select the **Webkul Store** option tab.

<a class="doc-image-link" href="./assets/license-account-select-webkul.webp"><img src="./assets/license-account-select-webkul.webp" alt="Select Webkul Option on Registration Page" /></a>

2. Enter your **Order ID** and the **Email address** used during checkout.
3. Click **Submit** / **Verify User**.

<a class="doc-image-link" href="./assets/license-account-webkul-details.webp"><img src="./assets/license-account-webkul-details.webp" alt="Enter Webkul Order ID and Email" /></a>

4. Enter the One-Time Password (OTP) sent to your registered email to verify ownership and complete registration.

---

## 3. Signing In to the License Portal

The License Portal uses secure, passwordless authentication via Email and One-Time Password (OTP):

1. Go to the **[License Portal Sign In Page](https://license.aureuserp.com/login)**.
2. Enter your registered email address and click **Send OTP**.

<a class="doc-image-link" href="./assets/license-sign-in-email.webp"><img src="./assets/license-sign-in-email.webp" alt="Enter Registered Email on Sign In Page" /></a>

3. Check your email inbox for a 6-digit verification code.
4. Enter the 6-digit OTP into the verification form and click **Verify & Access**.

<a class="doc-image-link" href="./assets/license-sign-in-otp.webp"><img src="./assets/license-sign-in-otp.webp" alt="Sign In OTP Verification Screen" /></a>

5. You will immediately be redirected to your personal **User Dashboard**.

<a class="doc-image-link" href="./assets/license-user-dashboard.webp"><img src="./assets/license-user-dashboard.webp" alt="License Portal User Dashboard" /></a>

---

## 4. User Dashboard & Purchase History

The User Dashboard serves as the central hub for your licenses and purchases:

- **Consolidated Purchases:** View both Envato (CodeCanyon) and Webkul Store purchases side-by-side in a single view.
- **Licenses Tab:** Access your generated license keys, check assigned domains, and view validation status.
- **Status Indicators:** Instantly see whether a license is **Active**, **Pending**, or **Expired**.

<a class="doc-image-link" href="./assets/license-portal-licences-tab.webp"><img src="./assets/license-portal-licences-tab.webp" alt="License Portal Dashboard Licenses Tab" /></a>

---

## 5. Generating Your License Key

Generate your plugin license key on demand without waiting for manual support approval:

### Step 1 – Select Your Purchase

1. In your dashboard, locate **WooCommerce Multi-Vendor Marketplace** in your purchases list.
2. Click **Create License** or select the purchase record.

<a class="doc-image-link" href="./assets/license-select-purchase.webp"><img src="./assets/license-select-purchase.webp" alt="Select Purchase Record from List" /></a>

---

### Step 2 – Configure Domain & Environment

In the license configuration screen:

1. **Domain Name:** Enter your store domain (for example, `yourstore.com` or `staging.yourstore.com`).
   - Do **NOT** prefix with `http://` or `https://`.
   - Do **NOT** include a trailing slash (`/`).
2. **Environment Support:** Select the environment for this key:
   - **Production:** For your live, customer-facing store.
   - **Development / Staging:** For your local, sandbox, or staging server.
   - The system allows you to create keys for both staging and production environments simultaneously.

<a class="doc-image-link" href="./assets/license-domain-configuration.png"><img src="./assets/license-domain-configuration.png" alt="Domain and Environment Configuration" /></a>

3. Click **Generate Key** / **Submit**.

---

### Step 3 – Retrieve and Copy the License Key

1. Once generated, your new cryptographic license key appears in the **License Keys List**.
2. Click **View Details** to inspect full configuration parameters (assigned domain, environment, issue date, and support status).

<a class="doc-image-link" href="./assets/license-keys-list.webp"><img src="./assets/license-keys-list.webp" alt="License Keys List in Portal" /></a>

<a class="doc-image-link" href="./assets/license-view-details.webp"><img src="./assets/license-view-details.webp" alt="View Detailed License Configuration" /></a>

3. Copy the full license key to your clipboard.

---

## 6. Activating the License in WordPress Admin

After copying your license key from the portal, log in to your WordPress administrative dashboard to complete plugin activation.

### Method 1: Via Marketplace Settings (First-Time Setup)

1. Log in to your **WordPress Admin Panel**.
2. In the left navigation menu, go to **Marketplace → Settings**.
3. If the license is not yet activated, the license wizard modal will appear automatically.

<a class="doc-image-link" href="./assets/license-wizard.webp"><img src="./assets/license-wizard.webp" alt="Marketplace Settings License Wizard Modal" /></a>

4. Paste the generated **License Key** into the text field.
5. Click **Activate License**.

---

### Method 2: Via Webkul WC Addons

1. In WP Admin, navigate to **Webkul WC Addons → Marketplace** (or your module's specific settings page).

<a class="doc-image-link" href="./assets/license-wp-module-settings.webp"><img src="./assets/license-wp-module-settings.webp" alt="Webkul WC Addons Module Settings Screen" /></a>

2. Locate the **License Key** field under the settings tab.
3. Paste the generated key into the field.

<a class="doc-image-link" href="./assets/license-wp-enter-key.webp"><img src="./assets/license-wp-enter-key.webp" alt="Enter License Key in WordPress Admin" /></a>

4. Click **Validate** / **Save Changes**.

---

### Successful Activation Confirmation

Once the license key is validated with Webkul's authentication server:

- The status updates immediately to **Approved** (indicated with a green status badge).
- The full multi-vendor marketplace administration interface, seller central, commission engine, and configuration tabs become fully operational.

<a class="doc-image-link" href="./assets/license-wp-activated.webp"><img src="./assets/license-wp-activated.webp" alt="WordPress Module Successfully Activated" /></a>

<a class="doc-image-link" href="./assets/license-status-approved.webp"><img src="./assets/license-status-approved.webp" alt="License Status Badge Approved" /></a>

---

## 7. Licensing Rules & Domain Limits

Webkul's licensing architecture is designed to accommodate both development and live production setups while protecting software integrity.

### Two Domains Supported Per License

Each standard plugin license allows up to **two concurrent domains**:
- **1 Production / Live Domain:** (e.g., `mystore.com`)
- **1 Staging / Development Domain:** (e.g., `staging.mystore.com` or `dev.local`)

### Activating on a Third Domain (Domain Switching)

If you attempt to activate a key on a third domain:
1. The licensing portal will detect that both domain slots are currently occupied.
2. The system displays a list of your recently assigned domains.
3. You can choose to **remove / unlink** an older or inactive domain (e.g., a decommissioned staging site).
4. Once unlinked, the freed slot is immediately reassigned to your new domain.

---

### Behavior When Support is Expired

Your purchase grants **lifetime usage** of the plugin version you have downloaded. 

- Even if your technical support period has expired, you can still activate the plugin on your store using your valid license key.
- Upon activation, the plugin activates successfully and all marketplace functionality operates normally.
- The admin badge will indicate **Support Expired** or **Expired**, reminding you that automatic updates and priority helpdesk tickets require renewal.

<a class="doc-image-link" href="./assets/license-expired-support-status.webp"><img src="./assets/license-expired-support-status.webp" alt="Module License with Support Expired Status" /></a>

To renew support or download the latest major release, visit your purchase account on CodeCanyon or the Webkul Store.

---

## 8. Troubleshooting License Activation

If you encounter an issue during registration or validation, review these solutions:

| Issue | Probable Cause | Recommended Solution |
| :--- | :--- | :--- |
| **"Invalid License Key"** | • Trailing or leading spaces copied.<br>• Entered the Envato purchase code instead of the generated license key. | Make sure to enter the **cryptographic key** generated in the License Portal (`license.aureuserp.com`), not the 36-character Envato purchase code. Check for hidden spaces when pasting. |
| **"Domain Mismatch"** | • Registered domain differs from site URL.<br>• Mismatch in `www` vs non-`www` or subdomains. | Verify your site URL in **WordPress Admin → Settings → General**. Ensure the exact domain name matches the one configured during key generation on the portal. |
| **"Could Not Connect to Validation Server"** | • Server firewall or security plugin blocking outbound HTTPS cURL requests. | Ensure your hosting server allows outbound HTTPS requests on port 443 to `license.aureuserp.com` and `webkul.com`. Whitelist these hostnames in Wordfence/Sucuri if installed. |
| **"Domain Limit Reached"** | • Both domain slots (production and staging) are already registered. | Sign in to [license.aureuserp.com](https://license.aureuserp.com/), locate your license, and release/unlink the inactive domain. |
| **"OTP Not Received"** | • Verification email filtered into Spam or Junk folder.<br>• Corporate email domain firewall blocking transactional messages. | Check your Spam/Junk folder. Ensure `no-reply@webkul.com` is whitelisted. Wait 2 minutes before requesting a resend. |

---

## 9. Related Guides & Support

- **[Installation Guide](./installation.html):** Complete walkthrough for installing the plugin ZIP and initial configuration.
- **[Troubleshooting: License Activation Failed](../knowledge-base/troubleshooting/license-activation-failed.html):** Extended debugging steps for network timeouts and permission errors.
- **[Webkul Helpdesk (UVdesk)](https://webkul.uvdesk.com/):** Submit a support ticket directly to Webkul's engineering team.
- **[Official License Validator Guide](https://wpdoc.webkul.com/license-validator/):** Detailed portal documentation for all Webkul WooCommerce extensions.
