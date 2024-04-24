## users:

id,
username:,
password,
email,
name,
type:[Customer, Vendor, DeliveryMan, Admin]
phone,
birthday,
point:number
status(Active/Inactive/Block)
img_url,
addresses:[come from address table]
last_login: date with time zone
last_logout: date with time zone
ip_address(optional),
divice_id(optional),
createdAt
updatedAt

## products table :

id,
name:string,
shipping_cost:numeric,
tax_id: number,
discount_id: number(this copun number),
url_slug(unique),
images:array
single_image,
brand_id,
category_id
limit_purchase_qty:number,
product_tag: ['ddd','aa']
user_id,
description,
short_description,
enable_review: boolean,
status:['acitve/inactive/'],
createdAt,
updatedAt

# product type: simple product

regular_price:numeric,
sale_price:numeric,
size: (x, xl),
color,
weight(kg):numeric

  <!-- stock qty thankle stock status hobe na -->

stock_qty,
stock_status:(in stock/out stock),

# product type: varient product

product_variant:['2','3','5'],

## variants table (color and size) need to study about

# size ar upor price hobe

id,
regular_price:numeric,
sale_price:numeric,
size: (x, xl),
color(red, green, yellow)
weight(kg):numeric

<!-- stock qty thankle stock status hobe na -->

stock_qty,
stock_status:(in stock/out stock),

## discounts:

id,
coupon_code,
type:(Percentage, FixedAmount, FreeShipping).
value,
start_date,
expiry_date
end_date,
min_order_amount,
min_user,
usage_count
is_single_use: Boolean
status:(Active/Inactive)
user_id
createdAt
updatedAt

## categories:

id,
name,
url_slug(unique)
parent_id,
user_id,
description
image;
status:(Active/Inactive)
createdAt
updatedAt

## wishlists:

id,
product_id,

<!-- user_id, -->

createdAt,
updatedAt

## carts:(optionalal)

id,
product_id,
user_id,
qty,
createdAt,
updatedAt

## brands:

id,
user_id,
name
status:(Active/Inactive),
createdAt,
updatedAt

## orders:

id,
user_id,
order_date,
tracking_no,
is_paid,
order_total_amount
is_shipped,
discount_amount,
net_amount,
shiping_amount,
tax,
order_note,
<!-- order_items: array -->
phone_no,
email_address,
shipping_address_id(this address come from address id),
payment_status(Paid/NotPaid/PertialPaid),
payment_type(Online/Offline)
payment_transaction_id,
status:(Processing/Pending/Completed/Failed),
createdAt
updatedAt

## orderItems:

id,
order_id,
total_amount,
product_id,
qty,

## address

id,
user_id,
address_line_1:string(billing/home/office),
address_line_2:string
state,
city,
country:string
zip_code,

## reviews:

id,
product_id,
user_id,
rating,
comment,
status:(Reject/Approved),
createdAt
updatedAt

## payments:

id,
order_id,
date,
payment_method,
amount,
user_id,
is_successfull:boolean,
transaction_id,
createdAt
updatedAt

## brands:

id,
name,
photo,
description
status:(Active/Inactive),,
user_id,
createdAt
updatedAt

## logs:

id,
error:boolean,
user_id,
product_id,
order_id,
order_item_id,
category_id,
wishlist_id,
discount_id,
review_id,
shiping_cart_id,
brand_id,
payment_id,
variant_id,
message/descripiton,
createdAt
updatedAt
