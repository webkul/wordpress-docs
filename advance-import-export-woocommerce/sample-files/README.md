# Sample Import Files

This directory contains sample import files for testing and reference. Each file demonstrates the correct format and structure expected by the WooCommerce Import/Export plugin.

## File Inventory

| File | Entity | Records | Description |
|------|--------|---------|-------------|
| `products-sample.csv` | Products | 15 rows (10 products + 6 variations) | All product types: simple, variable, grouped, external, virtual, downloadable |
| `products-sample.xml` | Products | 10 products | Same products in XML format with nested variations and attributes |
| `products-sample.json` | Products | 10 products | Same products as a JSON array with structured objects |
| `categories-sample.csv` | Categories | 15 | Hierarchical categories with parent-child relationships |
| `orders-sample.csv` | Orders | 5 | Complete orders with billing, shipping, and line items |
| `customers-sample.csv` | Customers | 5 | Customer records with billing and shipping addresses |
| `coupons-sample.csv` | Coupons | 5 | Various coupon types: percent, fixed cart, fixed product |
| `reviews-sample.csv` | Reviews | 5 | Product reviews linked by SKU with ratings |
| `tags-sample.csv` | Tags | 10 | Product tags with slugs and descriptions |
| `attributes-sample.csv` | Attributes | 5 | Product attributes with pipe-separated terms |
| `users-sample.csv` | Users | 5 | WordPress users with various roles |
| `posts-sample.csv` | Posts | 3 | Blog posts with full HTML content |
| `pages-sample.csv` | Pages | 3 | WordPress pages with templates and menu order |

## Column Explanations

### Products (CSV)

| Column | Description | Example |
|--------|-------------|---------|
| `ID` | Numeric product ID (optional for new imports) | `1` |
| `Type` | Product type | `simple`, `variable`, `variation`, `grouped`, `external` |
| `SKU` | Unique stock-keeping unit | `WK-TEE-001` |
| `Name` | Product title | `Classic Cotton T-Shirt` |
| `Published` | Visibility status | `1` (published) or `0` (draft) |
| `Featured` | Featured product flag | `1` (yes) or `0` (no) |
| `Short description` | Brief summary shown on catalog pages | Plain text or HTML |
| `Description` | Full product description | Plain text or HTML |
| `Regular price` | Standard price | `29.99` (no currency symbol) |
| `Sale price` | Discounted price (blank if none) | `24.99` |
| `Categories` | Category hierarchy | `Clothing > Men's > T-Shirts` |
| `Tags` | Comma-separated tags | `cotton,casual,basics` |
| `Images` | Pipe-separated image URLs | `url1\|url2` |
| `Stock` | Inventory quantity | `150` |
| `Weight (kg)` | Product weight in kilograms | `0.2` |
| `Length/Width/Height (cm)` | Dimensions in centimeters | `24`, `17`, `2` |
| `Parent` | Parent SKU (for variations only) | `WK-POLO-004` |
| `Grouped products` | Comma-separated child SKUs | `WK-MUG-002,WK-DESKLAMP-013` |
| `External URL` | Buy link for external products | `https://courses.example.com/...` |
| `Button text` | External product button label | `Enroll Now` |
| `Download 1 name` | Downloadable file label | `Marketing Templates Pack` |
| `Download 1 URL` | Downloadable file URL | `https://example.com/downloads/...` |
| `Download limit` | Max download count (blank = unlimited) | `3` |
| `Download expiry` | Days until download expires | `365` |
| `Virtual` | No shipping needed | `1` (yes) or `0` (no) |
| `Attributes` | Comma-separated attribute:terms pairs | `Color:Navy\|Black,Size:S\|M\|L` |
| `Default attributes` | Default selections for variable products | `Color:Navy,Size:M` |

### Categories

| Column | Description | Example |
|--------|-------------|---------|
| `Name` | Category name | `T-Shirts` |
| `Slug` | URL-friendly name | `t-shirts` |
| `Parent` | Parent category name | `Shirts` |
| `Description` | Category description | `Casual t-shirts and graphic tees` |
| `Display Type` | Archive display style | `default`, `products`, `subcategories`, `both` |
| `Image` | Category thumbnail URL | `https://example.com/images/cat-tshirts.jpg` |

### Orders

| Column | Description |
|--------|-------------|
| `Order Number` | Unique order identifier |
| `Order Date` | Date and time in `YYYY-MM-DD HH:MM:SS` format |
| `Status` | Order status: `completed`, `processing`, `on-hold`, `pending`, `cancelled`, `refunded`, `failed` |
| `Line Items (SKU:Qty:Price)` | Pipe-separated line items. Format: `SKU:Quantity:UnitPrice` |

### Attributes

| Column | Description | Example |
|--------|-------------|---------|
| `Name` | Attribute label | `Color` |
| `Slug` | URL-friendly identifier | `color` |
| `Type` | Input type | `select`, `text` |
| `Terms` | Pipe-separated values | `Red\|Blue\|Green\|Black\|White` |

## How to Use for Testing

1. **Navigate** to WooCommerce > Import/Export in your WordPress admin dashboard.
2. **Select the entity type** you want to import (Products, Categories, Orders, etc.).
3. **Upload** the corresponding sample file from this directory.
4. **Review column mapping** -- the plugin auto-detects standard column headers.
5. **Use dry-run mode** for the first attempt to preview what will be imported without writing to the database.
6. **Run the import** once you are satisfied with the mapping and preview.

### Testing Order

For best results, import in this order:

1. `attributes-sample.csv` -- Attributes must exist before products reference them
2. `categories-sample.csv` -- Categories must exist before products are assigned to them
3. `tags-sample.csv` -- Tags should exist before product import
4. `products-sample.csv` -- Products reference categories, tags, and attributes
5. `customers-sample.csv` -- Customers should exist before orders reference them
6. `orders-sample.csv` -- Orders reference products and customers
7. `coupons-sample.csv` -- Can be imported at any time
8. `reviews-sample.csv` -- Reviews reference products by SKU
9. `users-sample.csv` -- WordPress users, independent of WooCommerce data
10. `posts-sample.csv` and `pages-sample.csv` -- WordPress content, independent

## Format Notes

### Hierarchy Separator

Category hierarchies use the `>` separator with spaces:

```
Clothing > Men's > T-Shirts
```

This creates three levels: `Clothing` as the top-level parent, `Men's` as a child of `Clothing`, and `T-Shirts` as a child of `Men's`.

### Multi-Value Separators

- **Pipe (`|`)** -- Used for multiple values within a single field:
  - Multiple images: `image1.jpg|image2.jpg|image3.jpg`
  - Attribute terms: `Red|Blue|Green`
  - Line items in orders: `SKU1:1:29.99|SKU2:2:18.50`
  - Product SKUs in coupons: `WK-BOOK-003|WK-COURSE-007`

- **Comma (`,`)** -- Used for:
  - Tags: `cotton,casual,basics`
  - Grouped product SKUs: `WK-MUG-002,WK-DESKLAMP-013`
  - Multiple attribute groups: `Color:Navy|Black,Size:S|M|L`

### Encoding

All files use **UTF-8** encoding. If you see garbled characters after import, verify your file is saved as UTF-8. Most spreadsheet applications (Excel, Google Sheets, LibreOffice) default to UTF-8 when saving as CSV.

### XLSX Note

A true `.xlsx` sample file is not provided in this directory because Excel files are binary and cannot be version-controlled effectively. To test XLSX imports:

1. Open `products-sample.csv` in Microsoft Excel or LibreOffice Calc.
2. Save as `.xlsx` format.
3. Upload the resulting file to the plugin -- it supports XLSX natively.

### Prices

Always format prices as plain numbers without currency symbols or thousands separators:
- Correct: `29.99`
- Incorrect: `$29.99` or `29,99` or `1,299.99`

### Dates

Use the `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS` format for all date fields:
- Order dates: `2026-03-10 09:15:00`
- Coupon expiry: `2026-12-31`
- Review dates: `2026-03-12`
