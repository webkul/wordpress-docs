---
title: Customer Reviews & Ratings – Buyer Guide | WooCommerce Multi-Vendor Marketplace
source: https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-review-rating.html
---

# Customer Reviews & Ratings

In **WooCommerce Multi-Vendor Marketplace**, customer reviews and star ratings empower buyers to share authentic shopping experiences, evaluate seller reliability, and make well-informed purchasing decisions. 

The marketplace separates customer feedback into two distinct, specialized levels:
1. **Vendor Store Reviews (Store-Level Feedback)**: Focuses on the seller's overall business service, customer support, dispatch speed, and fulfillment reliability across three dedicated criteria: **Price**, **Value**, and **Quality**.
2. **Product Reviews (Item-Level Feedback)**: Focuses on the physical item purchased, its specifications, build quality, usability, and real-life performance—complete with customer photo uploads and verified owner status.

<a class="doc-image-link" href="./assets/customer-review-rating-overview.webp"><img src="./assets/customer-review-rating-overview.webp" alt="WooCommerce Multi-Vendor Marketplace Customer Reviews and Ratings Overview" /></a>

---

## Why Customer Feedback Matters

Customer reviews create a transparent, community-driven marketplace ecosystem:

- **Unbiased Community Trust**: Real buyer testimonials help you gauge product authenticity and vendor responsiveness before spending your money.
- **Multi-Pillar Performance Scoring**: Rather than a single arbitrary number, vendor reviews break down scores across **Price**, **Value**, and **Quality** so you know exactly where a seller excels.
- **Visual Proof with Photo Attachments**: Customers can upload images of items they received, allowing fellow shoppers to inspect real product finishes and packaging.
- **Verified Buyer Authenticity**: Reviews by confirmed buyers receive an automatic **(verified owner)** badge, making it easy to spot genuine purchases.

---

## End-to-End Review & Rating Journey

The diagram and workflow table below illustrate how customers explore existing feedback, choose the appropriate review type, and submit detailed ratings:

<div class="wkmp-workflow-pipeline">
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 01</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Explore Feedback</div>
    <p class="wkmp-workflow-step__desc">Check seller star ratings on store headers or open the Reviews section on product pages.</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 02</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Choose Review Type</div>
    <p class="wkmp-workflow-step__desc">Decide whether to rate the merchant's overall store service or the specific catalog item.</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 03</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Open Review Modal</div>
    <p class="wkmp-workflow-step__desc">Click "Write a Review" on the vendor profile or inside the product page accordion.</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 04</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Assign Ratings</div>
    <p class="wkmp-workflow-step__desc">Select 1&ndash;5 stars for Price, Value, and Quality (store review) or overall stars (product review).</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 05</span>
      <span class="wkmp-workflow-step__arrow">&rarr;</span>
    </div>
    <div class="wkmp-workflow-step__title">Add Details & Photos</div>
    <p class="wkmp-workflow-step__desc">Write a title and detailed comments. Attach product photos when reviewing an item.</p>
  </div>
  <div class="wkmp-workflow-step">
    <div class="wkmp-workflow-step__top">
      <span class="wkmp-workflow-step__number">STEP 06</span>
    </div>
    <div class="wkmp-workflow-step__title">Submit & Publish</div>
    <p class="wkmp-workflow-step__desc">Submit your feedback. Your review is recorded and verified buyer badges are applied automatically.</p>
  </div>
</div>

| Stage | Process | Location | Customer Action |
| :---: | :--- | :--- | :--- |
| **01** | **Inspect Feedback** | Vendor Profile / PDP | Review aggregate ratings, star counts, and previous buyer comments. |
| **02** | **Select Review Scope** | Storefront or Product | Target the merchant's store experience or the specific item received. |
| **03** | **Open Write Modal** | Profile Header or PDP Accordion | Click the **Write a Review** button to trigger the feedback popup. |
| **04** | **Set Star Ratings** | Modal Dialog | Click interactive star icons (multi-criteria for sellers; 1–5 stars for products). |
| **05** | **Provide Feedback** | Modal Dialog | Enter a concise headline, write detailed comments, and upload product snapshots. |
| **06** | **Submit Feedback** | Modal Dialog | Click **Submit Review** or **Submit it** to publish your experience. |

---

## Part 1: Vendor Reviews & Ratings (Store-Level Feedback)

Store-level feedback assesses the merchant's overall reputation, communication, dispatch punctuality, and after-sales support.

### 1. Viewing Vendor Ratings on the Store Profile

When visiting any seller's storefront (e.g., `/vendor/aurora-athletics/`), the vendor banner displays key performance indicators at a glance:

- **Vendor Name & Avatar**: Identifies the independent merchant.
- **Aggregate Star Rating**: Displays visual filled star icons and the current average score (e.g., *4.78 Stars*).
- **Direct Merchant Contacts**: Provides phone and email touchpoints for pre-order questions.
- **Write a Review Button**: Appears for logged-in buyers right beside the star rating score.

<a class="doc-image-link" href="./assets/customer-vendor-review-rating-header.webp"><img src="./assets/customer-vendor-review-rating-header.webp" alt="Vendor Store Header with Star Rating and Write a Review Button" /></a>

::: tip Guest vs. Logged-in Customer View
Guests can browse store ratings and read feedback submitted by others. To leave a store review, you must be signed in to your customer account.
:::

---

### 2. How to Submit a Vendor Review

Leaving seller feedback is straightforward and takes less than a minute:

1. **Sign in to Your Account**: Ensure you are logged in as a registered marketplace customer.
2. **Navigate to the Vendor Store**: Open the merchant's profile page (e.g., `/vendor/aurora-athletics/`).
3. **Click "Write a Review"**: In the store header next to the rating display, click the **Write a Review** button (`#wkfashion-open-review-popup`).
4. **Rate Across the 3 Pillars**:
   - **Price**: Rate 1 to 5 stars on how competitive and fair the seller's pricing is.
   - **Value**: Rate 1 to 5 stars on whether the purchase lived up to expectations.
   - **Quality**: Rate 1 to 5 stars on product authenticity, safe packaging, and condition upon arrival.
5. **Enter Review Title**: Type a short, descriptive headline summarizing your experience (e.g., *"Outstanding service & fast fulfillment"*).
6. **Write Your Review**: Enter detailed comments in the textarea. Mention dispatch speed, product condition, or seller communication.
7. **Click "Submit Review"**: Click the submit button to save your feedback.

<a class="doc-image-link" href="./assets/customer-vendor-write-review-modal.webp"><img src="./assets/customer-vendor-write-review-modal.webp" alt="Customer Vendor Review Submission Modal with Multi-Pillar Ratings" /></a>

| Form Field | Type | Requirement | Purpose |
| :--- | :---: | :---: | :--- |
| **Price** | Star Rating (1–5) | Optional | Assesses pricing fairness and affordability. |
| **Value** | Star Rating (1–5) | Optional | Evaluates overall satisfaction relative to cost. |
| **Quality** | Star Rating (1–5) | Optional | Evaluates item craftsmanship, authentic condition, and packaging. |
| **Title** | Text Input | **Required** | A short, informative headline summarizing your store review. |
| **Review** | Textarea | **Required** | Detailed explanation of your buying and delivery experience. |

---

### 3. Exploring the Vendor Feedbacks Page

To read what other buyers have experienced with a merchant, click the **View All Reviews** link on the store profile. This opens the dedicated seller feedback archive at `/vendor/vendor-feedbacks/{vendor-slug}`.

<a class="doc-image-link" href="./assets/customer-vendor-feedbacks-page.webp"><img src="./assets/customer-vendor-feedbacks-page.webp" alt="Vendor All Reviews and Feedback Archive Page" /></a>

This archive page provides deep transparency into the merchant's service history:

- **Overall Score Summary**: Displays the average cumulative rating (e.g., *5.0 Based on 3 Reviews*).
- **Star Rating Distribution**: Visual progress bars showing the percentage of 5-star, 4-star, 3-star, 2-star, and 1-star ratings received.
- **Detailed Testimonial Cards**: Each review card shows:
  - The review headline.
  - Individual scores for **Price**, **Value**, and **Quality**.
  - Full customer review text.
  - Reviewer initials or name and date of publication (e.g., *Ella H. / August 10, 2026*).
- **Pagination**: Easy navigation through previous feedback pages as the vendor's community grows.

---

## Part 2: Product Reviews & Ratings (Item-Level Feedback)

Product reviews are specific to the individual catalog item. They help future shoppers evaluate sizing, durability, features, and everyday usability.

### 1. Expanding the Reviews Section on the Product Page (PDP)

On any single product page (e.g., `/product/aurora-pace-fitness-watch/`), scroll past the product description and specifications to find the collapsible **Reviews** accordion section:

1. Locate the **Reviews** accordion bar with the chevron toggle icon (`.wkfashion-section-toggle`).
2. Click anywhere on the bar to expand the reviews container.
3. The expanded section displays:
   - Overall product rating score (e.g., *5.00 Based on 1 Reviews*).
   - Rating distribution bar chart.
   - The prominent **Write a Review** button (`.wkfashion-review-rating-form-toggle`).
   - Customer review cards containing buyer impressions, star ratings, and verified owner tags.

<a class="doc-image-link" href="./assets/customer-pdp-reviews-section.webp"><img src="./assets/customer-pdp-reviews-section.webp" alt="Expanded Product Reviews Section on PDP with Rating Summary and Reviews List" /></a>

---

### 2. How to Submit a Product Review

Submitting a review for a product is quick and lets you add helpful real-life photos:

1. **Open the Product Page**: Navigate to the item you wish to review.
2. **Expand the Reviews Accordion**: Click on **Reviews** to reveal the feedback area.
3. **Click "Write a Review"**: Click the button to launch the **Write a review** modal popup (`#wkfashion-review-popup`).
4. **Attach Photos (Optional but Recommended)**:
   - Click the **Add Image** box (`#file-input`) with the camera icon.
   - Select photos from your device showing the product in use, unboxing details, or material close-ups.
5. **Select Your Star Rating**: Click on the star icons (1 to 5 stars). Logged-in accounts default to 5 stars for easy rating.
6. **Enter Review Title**: Type a clear headline summarizing your feedback (e.g., *"Superb battery life and seamless fitness tracking"*).
7. **Write Review Comments**: Describe your real experience with the product—comfort, battery longevity, sizing accuracy, or build quality.
8. **Guest vs. Logged-in Customer Fields**:
   - **Logged-in Customers**: Your name is automatically associated with your account profile (`Logged in as [Your Name]`). No manual email entry needed.
   - **Guest Visitors**: Enter your **Name** and **Email** address (your email address is kept private and will never be published publicly). You may also check the optional cookie consent box to save your details for future reviews.
9. **Click "Submit it"**: Submit your review.

<a class="doc-image-link" href="./assets/customer-pdp-write-review-modal.webp"><img src="./assets/customer-pdp-write-review-modal.webp" alt="Product Write a Review Modal with Photo Attachment and Star Rating" /></a>

| Form Field | Type | Requirement | Notes |
| :--- | :---: | :---: | :--- |
| **Add Image** | File Upload (`.jpg`, `.png`, `.webp`) | Optional | Attach real product images to show unboxing and usage. |
| **Rating** | Star Selector (1–5 Stars) | **Required** | Overall product satisfaction rating. |
| **Title** | Text Input | **Required** | A short, catchy headline for your review. |
| **Comment** | Textarea | **Required** | In-depth review detailing product quality, performance, and fit. |
| **Name** | Text Input | Required for Guests | Display name shown on your public review. |
| **Email** | Email Input | Required for Guests | Kept private; used for verification and notification only. |

---

### 3. Authenticity & The "(verified owner)" Badge

To prevent fraudulent feedback and ensure marketplace integrity, the system checks whether the reviewer has completed a purchase of that item through the marketplace:

- **Verified Owner Tag**: Reviews submitted by customers who purchased the product through their registered marketplace account automatically display the **(verified owner)** label next to their name.
- **Enhanced Buyer Trust**: When browsing products, looking for the `(verified owner)` badge ensures you are reading feedback from someone who actually ordered and received the item.

---

## Vendor Reviews vs. Product Reviews: Key Differences

Understanding the difference between store reviews and product reviews ensures your feedback goes to the right place:

| Feature / Aspect | Vendor Store Review | Product Review |
| :--- | :--- | :--- |
| **Review Target** | The merchant's overall business & service | A specific catalog item |
| **Where Displayed** | Vendor Profile (`/vendor/{slug}/`) & Feedbacks page | Single Product Page (`/product/{slug}/`) |
| **Rating Criteria** | Multi-pillar: **Price**, **Value**, **Quality** (1–5 each) | Overall 1 to 5 Stars |
| **Photo Upload** | No | **Yes** (Customer can upload real product photos) |
| **Login Requirement** | Requires customer login | Supported for both logged-in buyers and guests |
| **Primary Goal** | Evaluates shipping speed, communication, packaging | Evaluates product specs, build quality, usability |
| **Impact** | Influences vendor reputation and Account Health | Influences item sales and catalog search ranking |

---

## Best Practices for Writing Helpful Reviews

Writing thoughtful reviews benefits both other buyers and hardworking merchants:

- **Be Specific & Objective**: Mention specific details such as dimensions, battery life, fabric feel, or assembly ease rather than generic praise.
- **Include Helpful Photos**: A picture taken in natural daylight showing the item or packaging is often worth a hundred words to fellow buyers.
- **Separate Merchant and Product Issues**:
  - If a carrier delayed delivery or damaged a box, reflect that in the **Vendor Review**.
  - If the product's design or functionality differed from the description, reflect that in the **Product Review**.
- **Keep Feedback Respectful**: Constructive feedback helps merchants improve their products and services while maintaining a supportive marketplace atmosphere.

---

## Frequently Asked Questions (FAQ)

### Can I leave a review as a guest customer?
Yes, for **product reviews**, guest visitors can submit feedback by providing their Name and Email address. However, **vendor store reviews** require logging in to a registered customer account to ensure authenticated merchant feedback.

### Can I upload multiple images in a product review?
Yes. The **Add Image** file uploader supports uploading photos showing different angles, unboxing condition, and practical usage of the item.

### What is the difference between Price, Value, and Quality in vendor reviews?
- **Price** reflects whether the merchant's items are fairly and competitively priced.
- **Value** measures whether the purchase was worth the money spent.
- **Quality** indicates how carefully the seller handled fulfillment, packing, and overall order condition.

### How do I get the "(verified owner)" badge on my review?
The `(verified owner)` badge is automatically granted when you submit a product review while logged into the customer account that purchased that exact item on the marketplace.

### Can vendors delete or modify my review?
No. Merchants cannot edit or delete customer reviews. Marketplace administrators hold moderation oversight to prevent abusive content, ensuring review scores remain authentic and trustworthy.

### Where can I see all reviews for a particular seller?
Visit the vendor's storefront profile and click **View All Reviews** to open their dedicated feedback archive at `/vendor/vendor-feedbacks/{vendor-slug}`.

---

## Related Guides

- [Product Detail Page (PDP) Customer Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-pdp.html) – Discover vendor attribution, product accordions, and purchasing options.
- [Follow Shop Customer Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-follow-shop.html) – Learn how to follow favorite merchants and receive exclusive email drops.
- [Multi-Vendor Cart Guide](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/customer-multi-vendor-cart.html) – Understand order splitting across multiple merchants.
- [Vendor Seller Reviews (Merchant Guide)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-seller-review.html) – Learn how sellers view, filter, and track store-level feedback.
- [Vendor Product Reviews (Merchant Guide)](https://wpdoc.webkul.com/woocommerce-marketplace/documentation/vendor-product-review.html) – Learn how sellers monitor item ratings and verified owner badges.
