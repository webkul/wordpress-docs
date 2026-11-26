---
title: Vendor Registration Process
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-registration-process.html
---

# Vendor Registration Process

Vendors can register on the marketplace using multiple methods provided by the WooCommerce Marketplace plugin.

<a class="doc-image-link" href="./assets/Registration.webp"><img src="./assets/Registration.webp" alt="Vendor Registration" /></a>

---

## Method 1: Registration via Vendor Menu

- Vendor clicks on the **Vendor** menu item.
- The page displays two options:
  - **Login Here**
  - **Register**

  <a class="doc-image-link" href="./assets/seller-login.webp"><img src="./assets/seller-login.webp" alt="Vendor Menu" /></a>

- Clicking **Login Here** redirects to the vendor login page.
- Clicking **Register** redirects to the vendor registration page.

---

## Method 2: Registration via Seller Central Page

- Vendor visits the **Seller Central** page.
- Clicks on the **Become a Seller** button.


<a class="doc-image-link" href="./assets/sellercentral.webp"><img src="./assets/sellercentral.webp" alt="Seller Central" /></a>

- The vendor registration form opens.
- Vendor completes and submits the registration form.

<a class="doc-image-link" href="./assets/sellercentral-registration-form.webp"><img src="./assets/sellercentral-registration-form.webp" alt="Seller Central Registration Form" /></a>

::: tip Dedicated Onboarding Endpoint
Vendors can also access the dedicated onboarding registration portal directly using the clean storefront endpoint:
```text
https://your-domain.com/sellercentral/become-vendor/
```
This dedicated page presents the complete vendor onboarding form with password confirmation, live store URL check, and KYC document uploads.
:::

---

## Method 3: Registration via My Account Page

If the admin enables **Allow Vendor Registration on My Account**:

- A **vendor registration option** is available on the **My Account** sign-up page.
- The user selects the **“I am a Vendor”** radio button during registration.
- Additional **vendor-specific registration fields** are displayed automatically.

<a class="doc-image-link" href="./assets/vendor-menu.webp"><img src="./assets/vendor-menu.webp" alt="Seller Registration Page" /></a>

---

## Vendor Registration Form Fields

The vendor must enter the following details:

- Email Address
- Password
- First Name
- Last Name
- Shop Name
- Shop Slug
- Phone Number
- Accept Terms & Conditions

After entering the details, click the **Register** button.

<a class="doc-image-link" href="./assets/registration-details.webp"><img src="./assets/registration-details.webp" alt="Registration Details" /></a>

### Additional Registration Form Fields & KYC Verification

Depending on your marketplace configuration, the registration form also includes:

- **Confirm Password**: Ensures the applicant enters their password accurately during sign-up.
- **KYC Document Type**: If KYC verification is enabled, applicants select their document type from a dropdown menu (e.g., *Business License*, *Government ID*, or *Utility Bill*).
- **KYC Document Upload**: An optional or mandatory file upload field supporting common file formats (*PDF*, *JPG*, *JPEG*, *PNG*, *WEBP*) within configured file size limits.
- **Terms & Conditions Agreement**: When a Terms & Conditions page is selected in admin settings, a checkbox prompt (`I have read and agree to the vendor signup terms and conditions`) is required before form submission.

::: tip Customizing Registration Form Attributes & Labels
Admins can easily customize registration form subtitles, field labels, placeholder texts, and call-to-action button text without touching any code. For full details on all registration attributes and landing page settings, please visit the [Configuration – Seller Central](./configuration-seller-central.html#registration-section) documentation page [here](./configuration-seller-central.html#registration-section).
:::

---

## Shop Slug Availability Check

- The **Shop Slug** field uses an **AJAX-based availability check**.
- Displays **“Available”** if the URL slug is unused.
- Displays **“Already Exists”** if the URL slug already exists.

<a class="doc-image-link" href="./assets/registration-details.webp"><img src="./assets/registration-details.webp" alt="Shop Slug Availability" /></a>

### Real-Time Validation Feedback

When the vendor types a shop slug into the **Shop Slug** input field, the marketplace performs an instant real-time AJAX check:

- **If the slug is free**: Displays `This shop URl is available, kindly proceed.` in green confirmation text.
- **If the slug is already registered**: Displays `This shop URl already EXISTS, please try different shop url.` in warning text.

::: tip Automatic Fallback for Shop Name & Slug
If the marketplace admin sets **Shop Name on Registration** or **Shop Slug on Registration** to *Optional* or *Remove*, applicants do not need to choose a URL manually. The plugin automatically generates a clean URL slug using the vendor's registered username or shop name.
:::

---

## Registration Using Email & Password

- Vendor registration is completed using **email and password**.
- Vendor access is granted based on admin approval settings.

---

## Become a Vendor from Customer Account

- Existing customers can upgrade to a vendor account.
- A **Become a Vendor** option is available in the **My Account** panel.
- Clicking it initiates the vendor registration process.

<a class="doc-image-link" href="./assets/customer-account-become-vendor.webp"><img src="./assets/customer-account-become-vendor.webp" alt="Become Vendor from Account" /></a>

### Customer-to-Vendor Upgrade Experience

When registered customers want to sell products on your marketplace:

1. The customer logs into their **My Account** dashboard (`/my-account/`).
2. A prominent **Become a Vendor** banner card invites them to register as a seller with the message:
   > *"Submit the request form in the next step and get approval to list and sell your products."*
3. Clicking **Become a Vendor** opens the vendor registration form with the customer's existing name and email address already filled in.
4. The customer provides their **Shop Name**, **Shop Slug**, contact telephone number, and optional KYC documents.
5. All previous customer purchase history, billing addresses, and order details are safely retained while adding vendor capabilities to the account.

---

## Admin Settings Controlling Vendor Registration

Marketplace administrators have full control over the vendor sign-up experience. These settings are located in the WordPress Admin dashboard under:

**Marketplace > Settings > General**

| Setting Label | Type | Options / Values | How It Affects Registration |
| :--- | :--- | :--- | :--- |
| **Allow Vendor Registration on My Account** | Checkbox | Enabled / Disabled | When enabled, adds the **I am a Vendor** radio button to the standard WooCommerce My Account registration form. When disabled, vendor signups only occur through Seller Central or the Become Vendor endpoint. |
| **Shop Name on Registration** | Dropdown | `Required`, `Optional`, `Remove` | Controls whether applicants must enter a store name. If set to *Remove* or left empty, the marketplace automatically uses the vendor's user name. |
| **Shop Slug on Registration** | Dropdown | `Required`, `Optional`, `Remove` | Controls whether the public store URL slug is mandatory. If removed or empty, the system automatically uses the vendor's username as the shop URL slug. |
| **Auto Approve Vendor** | Checkbox | Enabled / Disabled | If checked, newly registered vendors are automatically approved and can access their seller dashboard immediately. If unchecked, new registrations remain pending until manual admin approval. |
| **Vendor Terms & Condition Page** | Dropdown | Page Selector | Selects a published WordPress page for marketplace vendor terms. When set, a mandatory agreement checkbox appears on the registration form. |
| **Enable Vendor KYC Verification** | Checkbox | Enabled / Disabled | Adds KYC document type selection and document upload fields directly to the vendor registration form. |
| **KYC Document Types** | Multi-Select | Business License, Government ID, Utility Bill | Configures which verification document options applicants can select during registration. |
| **Allowed KYC Formats** | Checkbox Group | PDF, JPG, JPEG, PNG, WEBP | Defines the permitted document file extensions for vendor uploads. |
| **Restrict KYC Document Size** | Number Input | Max Size in KB | Sets maximum file upload limits to prevent large files from slowing down the server. |

---

## Vendor Account Approval Workflow

Once a vendor submits the registration form, the account follows one of two approval workflows depending on the **Auto Approve Vendor** setting:

| Workflow Stage | Instant Approval Flow (`Auto Approve = ON`) | Manual Review Flow (`Auto Approve = OFF`) |
| :--- | :--- | :--- |
| **Initial Status** | Active / Approved Immediately | Pending Review |
| **On-Screen Confirmation** | *"Congratulations!! Your request has been accepted. Now you are a vendor on the site..."* | *"Your request has been successfully sent to Administrator. You will be notified via Email once it is processed."* |
| **Admin Action Needed** | None (Automated) | Administrator manual review and approval under **Marketplace > Vendors** |
| **Vendor Access** | Immediate redirection to the **Seller Dashboard** (`/seller/vendor-dashboard/`) | Vendor features remain restricted until the admin approves the vendor. |
| **Email Triggers** | Welcome / Activation email sent to vendor | Notification sent to Admin (`New Vendor Request`), followed by approval email to vendor upon activation |

### 1. Instant Approval Flow (Auto Approve Enabled)
- The vendor account is activated immediately upon submission.
- A confirmation notice appears:
  > *"Congratulations!! Your request has been accepted. Now you are a vendor on the site. You will be redirected to your vendor dashboard soon..."*
- The vendor is automatically logged in and redirected to their **Seller Dashboard** (`/seller/vendor-dashboard/`).

### 2. Manual Review Flow (Auto Approve Disabled)
- The vendor account is placed into a pending status.
- A notice is displayed to the applicant:
  > *"Your request has been successfully sent to Administrator. You will be notified via Email once it is processed."*
- Marketplace administrators receive an email notification (`New Vendor Request`) and can review and approve or decline the vendor under **Marketplace > Vendors**.
- Once approved by the admin, the vendor receives an approval email and vendor features are activated in their portal.
