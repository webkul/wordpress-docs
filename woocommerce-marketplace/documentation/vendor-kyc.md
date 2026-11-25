---
title: Vendor KYC Verification
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-kyc.html
---

# Vendor KYC Verification

The **Vendor KYC (Know Your Customer) Verification** feature allows admins to securely verify the identity of their vendors. It ensures marketplace compliance and builds trust with customers.

---

## KYC Verification Workflow

### Admin Configuration
Admins have full control over the KYC process:
- A master toggle to enable or disable KYC verification globally.
- Admin-managed document types (e.g., Passport, ID Card, Driver's License).
- Configurable allowed file formats and maximum file size limits for document uploads.



### Vendor Document Upload
Vendors can easily upload their KYC documents to get verified. This can be done at two stages:
1. **At Registration**: During the vendor registration process.
2. **From My Profile**: After registration, from the "My Profile" tab in their Vendor Dashboard.

<a class="doc-image-link" href="./assets/upload-kyc.png"><img src="./assets/upload-kyc.png" alt="Vendor KYC Upload" /></a>

<a class="doc-image-link" href="./assets/seller-kyc-page.webp"><img src="./assets/seller-kyc-page.webp" alt="Vendor KYC Upload from Profile" /></a>

### Admin Review and Action
Admins can review submitted documents from the admin vendor list. A dedicated KYC column and row action are available to streamline this process.

Clicking to review a vendor's KYC opens a review screen offering three actions:
- **Approve**: Mark the vendor's KYC as verified.
- **Reject (with reason)**: Reject the document and provide a reason, allowing the vendor to re-upload.
- **Hard Reject**: Permanently reject the vendor's KYC application.

<a class="doc-image-link" href="./assets/admin-vendor-list-kyc-pending.png"><img src="./assets/admin-vendor-list-kyc-pending.png" alt="Admin Vendor List - KYC Pending" /></a>

<a class="doc-image-link" href="./assets/admin-verify-vendor-kyc.png"><img src="./assets/admin-verify-vendor-kyc.png" alt="Admin Verify Vendor KYC" /></a>

<a class="doc-image-link" href="./assets/admin-approve-vendor-kyc.png"><img src="./assets/admin-approve-vendor-kyc.png" alt="Admin Approve Vendor KYC" /></a>

<a class="doc-image-link" href="./assets/admin-vendor-list-kyc-approve.png"><img src="./assets/admin-vendor-list-kyc-approve.png" alt="Admin Vendor List - KYC Approved" /></a>

### Email Notifications
To keep vendors informed, automatic emails are sent out during the process:
- Vendor email on **KYC Approval**.
- Vendor email on **KYC Rejection** (including the admin's reason).
- Vendor email on **KYC Hard Rejection**.

Additionally, a vendor email is sent automatically if the admin completely **deletes their account**.
