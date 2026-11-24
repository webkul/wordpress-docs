---
title: Vendor Shipping Zone Management – Seller Guide
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-shipping-zone-management.html
---

# Vendor Shipping Zone Management

In **WooCommerce Multi-Vendor Marketplace**, vendors have complete control over their shipping setup. Each vendor can create custom **Shipping Zones**, define targeted **Shipping Methods** (Flat Rate, Free Shipping, and Store Pickup), organize products with **Shipping Classes**, and configure **Local Pickup Locations** directly from their vendor panel.

::: warning Administrator Capability: Applicable Shipping Methods
For vendor shipping zones and rates to apply during customer checkout, the marketplace administrator must enable vendor shipping in the marketplace settings.

Under **Marketplace → Settings → General Settings → [Applicable Shipping Methods](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html#applicable-shipping-methods)**, the admin controls whether shipping is calculated globally or by individual sellers:
- **Vendor Shipping Method**: When enabled, the custom shipping zones, flat rates, free shipping rules, shipping classes, and local pickup locations configured on this page are active and apply to the vendor's products at checkout.
- **Admin Shipping Method**: When selected by the admin, global marketplace shipping rates apply to all products across the catalog, and individual vendor shipping rules are overridden.
- **Mixed Cart Calculation**: If a buyer orders items from both the admin and vendors, WooCommerce automatically combines the shipping rates at checkout.

For the marketplace administrator setup, please refer to the [General Settings – Applicable Shipping Methods](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/configuration-general-settings.html#applicable-shipping-methods) guide.
:::

---

## Accessing the Shippings Section

Vendors can manage their shipping operations from the seller dashboard:

1. Log in to your **Vendor Account**.
2. From the seller dashboard sidebar navigation, click **Shippings**.
3. You will arrive at the main **Shipping Overview** page (`/seller/vendor-shippings/`).

<a class="doc-image-link" href="./assets/vendor-shippings-main.png"><img src="./assets/vendor-shippings-main.png" alt="Vendor Shipping Overview Table" /></a>

### Top Action Controls

At the top of the Shipping page, vendors have three quick action controls:

- **Add New Shipping Zone**: Opens the form to define a new geographic delivery zone.
- **Manage Shipping Classes**: Opens the table where vendors create class-based shipping groups (e.g., Heavy items, Fragile goods).
- **Manage Local Pickup**: Opens the local pickup configuration page and pickup location directory.

### Shipping Zones Table

The main table lists all delivery zones applicable to your store:

| Column | Description |
| :--- | :--- |
| **Zone Name** | The recognizable title given to your shipping zone (e.g., *North America Zone*, *Domestic Delivery*). |
| **Region(s)** | The geographic areas covered by the zone, such as continents, countries, states, or specific ZIP codes. |
| **Shipping Method(s)** | The delivery methods currently active in this zone (e.g., *Flat rate*, *Free shipping*, *Store Pickup*). |
| **Actions** | Action icons to **Edit** (pencil icon) or **Delete** (trash icon) the zone. |

::: tip Rest of the World Zone
At the bottom of the table, you will see the default **Rest of the World** zone. This zone automatically applies to any customer whose address does not match any of your custom zones. Adding shipping methods to this zone is optional.
:::

---

## Adding a New Shipping Zone

To set up a new delivery region for your products:

1. On the **Shippings** page, click **Add New Shipping Zone**.
2. You will be redirected to the **Add Shipping Zone** page (`/seller/vendor-shippings/add/`).

<a class="doc-image-link" href="./assets/vendor-add-shipping-zone.png"><img src="./assets/vendor-add-shipping-zone.png" alt="Add New Shipping Zone" /></a>

3. Configure the following zone details:
   - **Zone Name**: Enter a descriptive name for your shipping zone (e.g., *European Union*, *California Local*).
   - **Zone Region(s)**: Click the dropdown to search and select one or multiple regions (continents, countries, or individual states/provinces).
   - **Limit to specific ZIP/postcodes** (Optional): Click this link to open the postcode box if you want to narrow down the zone to specific postal codes.
     - Enter one postcode per line.
     - Wildcards (e.g., `CB23*`) and numeric ranges (e.g., `90210...99000`) are supported.
4. Click **Add shipping zone** to save your new zone.

::: note Adding Methods After Zone Creation
When creating a new zone, the shipping method section displays: *"You can add shipping method once you have create shipping zone."* Once the zone is saved, you can add and customize shipping methods from the zone edit page.
:::

---

## Editing a Shipping Zone & Adding Shipping Methods

After saving your shipping zone, you can manage the delivery methods offered within that region:

1. From the **Shippings** table, click the **Edit** (pencil) icon next to the zone you want to update.
2. The **Shipping Zone Edit** page opens (`/seller/vendor-shippings/{zone_id}/`).

<a class="doc-image-link" href="./assets/vendor-edit-shipping-zone.png"><img src="./assets/vendor-edit-shipping-zone.png" alt="Edit Shipping Zone Page" /></a>

3. You can update the **Zone Name**, **Zone Regions**, or **ZIP/postcodes** at any time. Click **Update changes** to apply your updates.

---

## Adding a Shipping Method

To assign delivery methods to the selected zone:

1. Under the **Shipping Method** section of the edit page, click **Add shipping method**.
2. A popup window will appear asking you to choose a method.

<a class="doc-image-link" href="./assets/vendor-shipping-method-modal.png"><img src="./assets/vendor-shipping-method-modal.png" alt="Add Shipping Method Modal" /></a>

3. Select one of the available shipping methods from the dropdown list:
   - **Flat rate**: Charge a fixed fee per order or per item.
   - **Free shipping**: Offer zero-cost delivery based on coupons or minimum order amounts.
   - **Store Pickup**: Allow customers to collect their purchases from your store location.
4. Click **Add Shipping Method** to add it to the zone.

---

## Configuring Shipping Method Settings

Once a shipping method is added, click its name (e.g., **Flat rate**) to open its configuration settings.

### 1. Flat Rate Settings

The Flat Rate method lets you charge fixed or formula-based shipping fees:

<a class="doc-image-link" href="./assets/vendor-flat-rate-settings.png"><img src="./assets/vendor-flat-rate-settings.png" alt="Flat Rate Settings Modal" /></a>

- **Name**: The method title shown to customers at checkout (default: *Flat rate*).
- **Tax status**: Select whether this shipping fee is **Taxable** or has **None**.
- **Cost**: Enter the base shipping rate (excluding tax). You can enter a fixed number (e.g., `10.00`) or use advanced calculation syntax:
  - `[qty]`: Multiplies by the number of items (e.g., `10.00 * [qty]`).
  - `[cost]`: Total cost of items.
  - `[fee percent="10" min_fee="20"]`: Calculates a percentage-based fee with an optional minimum charge.
- **Shipping Class Costs**: If you have created shipping classes, individual cost fields appear for each class, along with the **Calculation type** (*Per class* or *Per order*).
- Click **Save Changes** to apply the configuration.

### 2. Free Shipping Settings

The Free Shipping method allows vendors to offer free delivery when specific requirements are met:

- **Name**: The label shown to buyers at checkout (default: *Free shipping*).
- **Free shipping requires**: Select the qualifying condition:
  - *No requirement*: Always free for this zone.
  - *A valid free shipping coupon*: Requires a promotional coupon.
  - *A minimum order amount*: Requires a minimum cart total.
  - *A minimum order amount OR coupon*: Either condition qualifies.
  - *A minimum order amount AND coupon*: Both conditions must be met.
- **Minimum order amount**: Enter the required minimum order value (e.g., `50`).
- **Coupons discounts**: Check **Apply minimum order rule before coupon discount** if the minimum amount should be evaluated before coupon deductions.
- Click **Save Changes**.

### 3. Store Pickup Settings

The Store Pickup method lets customers collect orders directly from your store:

- **Name**: The title displayed at checkout (default: *Store Pickup*).
- **Tax status**: Select **Taxable** or **None**.
- **Cost**: Optional collection fee (leave empty for free pickup).
- **Description**: Optional note displayed to customers with your store address (e.g., *"Please bring your order ID and photo ID for pickup"*).
- Click **Save Changes**.

### Deleting a Shipping Method

To remove a shipping method from a zone, hover over or click the small **Delete (×)** icon on the method badge, then confirm the removal.

---

## Managing Shipping Classes

Shipping classes help vendors group similar products and apply extra delivery charges (for example, heavier items or delicate products that need special packing).

To manage shipping classes:

1. Click **Manage Shipping Classes** from the main Shippings page, or navigate to `/seller/vendor-shippings/add-class/`.
2. The **Shipping Classes** management table will display.

<a class="doc-image-link" href="./assets/vendor-manage-shipping-classes.png"><img src="./assets/vendor-manage-shipping-classes.png" alt="Manage Shipping Classes Table" /></a>

### Adding a New Shipping Class

1. Click the **Add Row** button below the table. A new editable row will appear.
2. Fill in the following details:
   - **Shipping Class**: Enter a clear name (e.g., *Bulky & Heavy Items*, *Fragile Glassware*).
   - **Slug**: A unique URL-friendly slug (e.g., `bulky-heavy`). You may leave this blank to auto-generate from the name.
   - **Description**: An optional reference note explaining what products belong to this class.
3. The **Product Count** column will show how many products are currently linked to this class.
4. Click **Save Shipping Classes** to save your changes.

::: tip Linking Shipping Classes to Products
After saving a shipping class, edit any of your products under **Catalog → Products**. In the **Shipping** tab of the product editor, select your custom class from the **Shipping class** dropdown.
:::

---

## Managing Local Pickup & Pickup Locations

Vendors who operate physical retail stores, warehouses, or pickup counters can configure direct customer collection and manage multiple pickup points.

To access Local Pickup settings:

1. Click **Manage Local Pickup** from the main Shippings page, or navigate to `/seller/vendor-shippings/add-local/`.
2. The **Local Pickup** management page will open.

<a class="doc-image-link" href="./assets/vendor-manage-local-pickup.png"><img src="./assets/vendor-manage-local-pickup.png" alt="Manage Local Pickup Settings" /></a>

### 1. General Local Pickup Settings

At the top of the page, configure the general pickup preferences:

- **Enable local pickup**: Check this box to activate customer store pickup for your products.
- **Title**: The method title displayed during checkout (default: *Pickup*).
- **Cost**: Fixed fee for local pickup (leave blank for free customer pickup).
- **Taxes**: Choose whether pickup charges are **Taxable** or **None**.
- Click **Save Changes** to update these settings.

### 2. Adding a Pickup Location

Below the general settings, the **Pickup locations** table displays all active collection points.

1. Click the **Add pickup location** button.
2. The **Add pickup location** modal form will open:

<a class="doc-image-link" href="./assets/vendor-add-pickup-location-modal.png"><img src="./assets/vendor-add-pickup-location-modal.png" alt="Add Pickup Location Modal" /></a>

3. Enter the location information:
   - **Name**: The title of this location (e.g., *Downtown Retail Hub*, *Warehouse Store 2*).
   - **Address line 1 & 2**: Street address, building number, suite, or unit details.
   - **City, State, Postcode, Country**: Complete geographical details of the pickup counter.
   - **Pickup details**: Clear instructions for the customer (e.g., collection hours, parking directions, or required identification).
   - **Enabled**: Check this box to keep the pickup location active.
4. Click **Save Location** to save the pickup point.

The new location will appear in the **Pickup locations** table showing its Name, Address, Status (Enabled), and quick Actions to edit or remove it.

---

## Summary & Best Practices

| Feature | Where to Access | Purpose |
| :--- | :--- | :--- |
| **Shipping Zones** | `/seller/vendor-shippings/` | Group delivery regions (countries, states, postcodes) and assign shipping methods. |
| **Zone Methods** | Zone Edit Page (`.../vendor-shippings/{id}/`) | Set up Flat rate, Free shipping, and Store Pickup rates for each zone. |
| **Shipping Classes** | `/seller/vendor-shippings/add-class/` | Categorize items (e.g., heavy or fragile) and apply class-specific shipping costs. |
| **Local Pickup** | `/seller/vendor-shippings/add-local/` | Enable store pickup and list physical collection addresses for customers. |

- Always test your checkout flow after adding new zones to verify that the correct shipping rates and pickup options appear for customer addresses.
- Use postcodes with wildcards (e.g., `902*`) when offering localized flat rate or courier services within specific city districts.
- Ensure pickup instructions clearly state opening hours and documents required to provide a seamless collection experience for your buyers.
