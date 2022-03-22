# Multi-storefront App Compatibility Checklist

To make sure that your app is compatible with stores that have multiple BigCommerce storefront channels, verify your app meets all _applicable_ or _relevant_ requirements before submitting it for approval.

## Setup and channels configuration

- The app installs and loads correctly in a store with multiple BigCommerce storefront channels.
- The app makes API requests to [Channels](https://developer.bigcommerce.com/api-reference/store-management/channels) endpoint to identify available BigCommerce storefront channels.
- The app makes API requests to [Sites](https://developer.bigcommerce.com/api-reference/store-management/sites) endpoint to get all sites associated with BigCommerce storefront channels.
- The app settings acknowledge multiple storefronts within the app.

## Catalog and orders

- Products and inventory synced to the app include accurate storefront assignments within the app.
  - https://developer.bigcommerce.com/api-reference/store-management/channels/channel-listings/updatechannellistings
- Categories synced to the app include accurate storefront assignments within the app.
  - https://bigcommerce.stoplight.io/docs/api-beta-multi-storefront/ZG9jOjg3NjcxOTA-categories
- Orders synced to the app include accurate storefront assignments within the app.
- Customers synced to the app include accurate storefront assignments within the app.
  - https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customers/customersput `channel_ids`
- Products created in BigCommerce through API requests include accurate storefront channel assignments.
  - https://developer.bigcommerce.com/api-reference/store-management/channels/channel-listings/updatechannellistings
- Orders written to BigCommerce through API requests include accurate storefront channel assignments.
  - https://developer.bigcommerce.com/api-reference/store-management/carts/cart/createacart `channel_id`
  - https://developer.bigcommerce.com/api-reference/store-management/checkouts/checkout-orders/createanorder
- Price lists synced to or modified by the app include accurate storefront channel assignments.

## Storefront content

- Scripts installed via Scripts API include accurate `channel_id` assignment.
- Unique tracking scripts or pixels are installed per BigCommerce storefront channel.
- Any storefront content or features are installable on a single storefront.
- Any storefront content or features are installable on multiple storefronts.
- Widgets created by the app are installable on a single storefront.
- Widgets created by the app are installable on multiple storefronts.
- Themes synced to the app include accurate storefront assignments within the app.
- Themes published to BigCommerce include options for single or multiple storefronts.
- Custom template files synced to app include accurate storefront assignment within the app
- Custom template files written to BigCommerce include options for single or multiple storefronts
- Web pages synced to the app include accurate storefront assignments within the app.
- Web pages written to BigCommerce include options for single or multiple storefronts.
- Carts tracked in the app or created by the app include storefront assignments.
  - https://bigcommerce.stoplight.io/docs/api-beta-multi-storefront/ZG9jOjExNjkzNzEz-cart-and-checkout

## Other

- BigCommerce store settings synced to the app include accurate storefront assignments within the app.
- Newsletter subscribers synced to the app include accurate storefront assignments within the app.
- Currencies synced to the app include accurate storefront assignments within the app.
- 301 redirects written to or synced from BigCommerce include accurate storefront assignments.
- Transactional emails written to or synced from BigCommerce include accurate storefront assignments.
- Abandoned cart emails written to or synced from BigCommerce include accurate storefront assignment.
