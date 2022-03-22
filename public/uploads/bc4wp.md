<div><h3 class="sub-docs-type" id="bigcommerce-for-wordpress">BigCommerce for WordPress</h3></div>

# [Beta] BigCommerce for WordPress Theme


## Overview
The BC4WP Theme, which has a temporary name of “Stellar”, was designed to be the most flexible starter theme ever created for the BigCommerce for WordPress plugin. It’s built to be customized via the [WordPress Customizer](https://www.google.com/url?q=https://developer.wordpress.org/themes/customize-api/&sa=D&source=editors&ust=1647890411826014&usg=AOvVaw3SqtngQEfajTr_J-I7g8_E) or a [child theme](https://www.google.com/url?q=https://developer.wordpress.org/themes/advanced-topics/child-themes/&sa=D&source=editors&ust=1647890411826344&usg=AOvVaw2ydsWKoUWCOpuJoQsAgqmZ). The theme is minimalistic by design and uses [CSS Custom Properties](https://www.google.com/url?q=https://developer.mozilla.org/en-US/docs/Web/CSS/--*&sa=D&source=editors&ust=1647890411826521&usg=AOvVaw0onxGr_ddyj8iDaWhiFKZ7) throughout the site to make it easier to apply changes globally with little or zero CSS.

Why Should I Use the BC4WP Theme?
=================================

*   It provides BC4WP merchants and developers with a native WordPress theme that enables them to easily design and merchandise a beautiful storefront that meets their ecommerce business needs
*   1st native BigCommerce theme available in the WordPress ecosystem
*   “What you see is what you get” merchandising capabilities that are fully compatible with Gutenberg, the WordPress block editor
*   Will be 100% maintained and supported alongside the BC4WP plugin, meaning all features introduced into the plugin that impact the storefront experience will be supported in the theme (exactly like MSF)
*   Mobile-responsive
*   Accessible - WAG 2.1 AA compliant
*   Open source theme that can be customized and extended depending on your development requirements
*   Supports child themes to be built on top of it

[Target users/audience](https://www.google.com/url?q=https://docs.google.com/presentation/d/1trRXzXHVoXMICuZziHrD-RGUmAS7J-8v0PCvQtSW4uM/edit%23slide%3Did.g106b47eaf1a_0_563&sa=D&source=editors&ust=1647890411827511&usg=AOvVaw28_h23s0y5ZpDbSafdSJJ_)  

Getting Started
===============

Theme Requirements
------------------

*   WordPress 5.9+
*   [PHP](https://www.google.com/url?q=https://www.php.net/&sa=D&source=editors&ust=1647890411827991&usg=AOvVaw003HSXZDX8IeHj1Zj4Hahu) version 7.4 or greater
*   [MySQL](https://www.google.com/url?q=https://www.mysql.com/&sa=D&source=editors&ust=1647890411828192&usg=AOvVaw3YuM-XyLL3w_bnmcXfYpbF) version 5.7 or greater OR [MariaDB](https://www.google.com/url?q=https://mariadb.org/&sa=D&source=editors&ust=1647890411828328&usg=AOvVaw01cuuRuaho8rQubSKQRcIY) version 10.2 or greater
*   License: [GPLv2](https://www.google.com/url?q=http://www.gnu.org/licenses/gpl-2.0.html&sa=D&source=editors&ust=1647890411828599&usg=AOvVaw1wssh_xxj9I_gNjYq_56fs)  or later

It is safe to test the theme on an existing storefront, due to the “preview” option for using new themes and the fact that themes don’t mutate data. However, a user may want to start with a fresh instance or test on a QA, integration, or development environment.

To get started:

  1. Set up a WordPress instance, if you're not already using an existing WordPress site. 
  2. Download the zip file pinned to the Theme community group here.
  3. Install the BC4WP Theme following the steps [here](https://www.google.com/url?q=https://wpshout.com/quick-guides/how-to-install-wordpress-theme-from-zip/&sa=D&source=editors&ust=1647890411829396&usg=AOvVaw3Wqlru2HKcBt9FVRU5a7ro).
  4. Make sure to set up the theme properly by:
  5. Selecting “activate”, if you are using a brand new WordPress storefront or are ok with the theme  changing your actual website appearance once activated.
  6. Selecting “preview”, if you are using an existing WordPress storefront and do not want to actually change the appearance of your live storefront for shoppers.


### Theme Source Code

This section is for developers wishing to make changes or use the source code of the theme.

#### Development Requirements

*   [Node](https://www.google.com/url?q=https://nodejs.org/&sa=D&source=editors&ust=1647890411830093&usg=AOvVaw11Np8v1R-VvxYxzqmpyEfu) 16.14.0+
*   [NPM](https://www.google.com/url?q=https://www.npmjs.com/&sa=D&source=editors&ust=1647890411830321&usg=AOvVaw22vgfoEmI8tJYEBwERoG-8) 8.5.0+
*   [Composer](https://www.google.com/url?q=https://getcomposer.org/&sa=D&source=editors&ust=1647890411830560&usg=AOvVaw0lr78-gRQpmAsyIfLEZCdd) 2.2.7+

To get started with development:

1.  If not using an existing WordPress site, set up a WordPress instance. We recommend [wp-env](https://www.google.com/url?q=https://developer.wordpress.org/block-editor/handbook/tutorials/devenv/&sa=D&source=editors&ust=1647890411831053&usg=AOvVaw0gpNsmx7SUvVgqWdqpcJ30) or [Local](https://www.google.com/url?q=https://localwp.com/&sa=D&source=editors&ust=1647890411831207&usg=AOvVaw0_OxBuILuEDyF_pzc9etSz) as an alternative to docker.
2.  Clone / download this repository into your /wp-content/themes/ directory.
3.  Open the theme directory.
4.  Install NPM dependencies \`yarn install\`.
5.  Build the theme assets using \`yarn build\` for production-ready environments or \`yarn dev\` for development environments. 
6.  Install composer dependencies \`composer install\`.
> **Note:** The complete list of commands can be found in \`gulpfile.js\`.


Theme Settings
==============

Customizer
----------

The WordPress Customizer allows you to visually preview many of the available theme customization options included with Stellar.

To view the available options navigate to **Appearance > Customizer**.

[Screenshot](https://www.google.com/url?q=http://p.tri.be/5oAMeC&sa=D&source=editors&ust=1647890411832327&usg=AOvVaw3J9pxpgnKbayJGCQdweHc1)

### Site Identity

The Site Identity tab allows you to set your Logo, Title, Tagline (meta description), and Site Icon (favicon).

[Screenshot](https://www.google.com/url?q=http://p.tri.be/b3KU5m&sa=D&source=editors&ust=1647890411832808&usg=AOvVaw3-JYVQSeCSivlePrNwitqc)

### Colors

The Colors tab allows you to set your site’s background and theme colors.  

[Screenshot](https://www.google.com/url?q=http://p.tri.be/It9p9v&sa=D&source=editors&ust=1647890411833161&usg=AOvVaw1Wj1vxPua4J6tDUBBqe_67)

### Background Image

The Background Image tab allows you to set your site’s background image.  

[Screenshot](https://www.google.com/url?q=http://p.tri.be/WlQmsn&sa=D&source=editors&ust=1647890411833505&usg=AOvVaw3Xk4YHbutkS4l8hnqabRgD)

### BigCommerce

The BigCommerce tab contains all our front-end theme and plugin settings.

#### Buttons

The buttons tab allows you to change the default button labels.

[Screenshot](https://www.google.com/url?q=http://p.tri.be/29YGqK&sa=D&source=editors&ust=1647890411834066&usg=AOvVaw1ia4fqxe8WbZTXKTkJgGQa)

#### Banners

The buttons tab allows you to enable or disable BigCommerce banners at the top and bottom of the screen.

[Screenshot](https://www.google.com/url?q=http://p.tri.be/AGu7DF&sa=D&source=editors&ust=1647890411834538&usg=AOvVaw1gTFx_79TsQxrBBzVbv58W)

#### Cart

The cart tab allows you to configure the mini cart, empty cart notification, shipping info, and coupon code.

[Screenshot](https://www.google.com/url?q=http://p.tri.be/hNZRwF&sa=D&source=editors&ust=1647890411835005&usg=AOvVaw3oiyPx7jboj7FImOz1kjJk)

#### Colors & Theme

The colors and theme tab allows you to configure plugin specific styles like sale price, availability, condition, and banner colors.

[Screenshot](https://www.google.com/url?q=http://p.tri.be/KBFtc2&sa=D&source=editors&ust=1647890411835400&usg=AOvVaw3rQVgBwPjV4ur3KIq0bXtH)

#### Product Catalog

The product catalog tab allows you to configure the look and feel of the product loop.

[Screenshot](https://www.google.com/url?q=http://p.tri.be/iHeHyo&sa=D&source=editors&ust=1647890411835829&usg=AOvVaw3mc0ZWoY-R1A5MVfiR9RCS)

[Screenshot](https://www.google.com/url?q=http://p.tri.be/7xhoze&sa=D&source=editors&ust=1647890411836012&usg=AOvVaw0AX9jlxveXhT92on4Lwb0J)

#### Product Category

The product category tab allows you to toggle the ability to display Sub-Categories in the menu.

[Screenshot](https://www.google.com/url?q=http://p.tri.be/L1nlVg&sa=D&source=editors&ust=1647890411836413&usg=AOvVaw3N5pZLzQtW1HEX5y8Vd_1v)

#### Product Single

The product single tab allows you to configure the look and feel of the product detail page .

[Screenshot](https://www.google.com/url?q=http://p.tri.be/DESZ19&sa=D&source=editors&ust=1647890411836802&usg=AOvVaw27OIJP-gm22XABmo_AZ-YU)

Breadcrumbs
-----------

The theme does not include breadcrumbs by default, but we do support [Yoast SEO](https://www.google.com/url?q=https://yoast.com/wordpress/plugins/seo/&sa=D&source=editors&ust=1647890411837141&usg=AOvVaw1vQwXvI0szmDg4vGLdA-ob)  breadcrumbs if the plugin is installed. Yoast is the #1 SEO plugin in the WordPress repository so it is very likely most clients will already have it installed.

Menus
-----

Stellar includes two menu locations by default. The **Primary Navigation** menu displays at the top of the screen and has a collapseable menu on mobile devices. The **Utility Navigation** displays at the top of the screen and collapses on mobile devices.

To create a new menu within the WordPress Admin:

1.  Navigate to **Appearance > Menus**, then click “create a new menu.”
2.  Type in a “Menu Name” (this is for admin purposes only).
3.  Add items from the **Add menu items** column

[Screenshot](https://www.google.com/url?q=http://p.tri.be/vtxWdb&sa=D&source=editors&ust=1647890411837928&usg=AOvVaw1T3w8s9oGHhc70_7ID7X8J)  

### Add Search Icon

To add a Search Modal to the **Utility Navigation**:

1.  Create a new **Custom link**.
2.  Set the “URL” to \`/?s=#\`.
3.  Set the **Navigation Label** to \`Search\`.
4.  Set **CSS Classes** to \`menu\_\_item--search js-search-modal\`.  

[Screenshot](https://www.google.com/url?q=http://p.tri.be/TQlsar&sa=D&source=editors&ust=1647890411838683&usg=AOvVaw1t-0xjd7Wo1qGOHuuJXN8h)

> **Note:** You may need to click on **Screen Options** at the top-right of the screen to show the “CSS Classes” input.


### Add Cart Icon

To add a Cart Link to the **Utility Navigation**:

1.  Add the **Cart** page to the menu.
2.  Set **CSS Classes** to `menu\_\_item--cart`.

[Screenshot](https://www.google.com/url?q=http://p.tri.be/pTaKeu&sa=D&source=editors&ust=1647890411839268&usg=AOvVaw3heH0pXLjFS6yyaI7KCG5r)

> **Note:** You may need to click on **Screen Options** at the top-right of the screen to show the **CSS Classes** input.

### Add Account Icon

To add an Account Link to the *Utility Navigation*:

1.  Create a new “Custom link.”
2.  Set the “URL” to \`#\`.
3.  Set the “Navigation Label” to \`Account\`.
4.  Set **CSS Classes** to \`menu\_\_item--account\`.  
> **Note:** You may need to click on **Screen Options** at the top-right of the screen to show the **CSS Classes** input.
5.  Add pages under **Account**.

[Screenshot](https://www.google.com/url?q=http://p.tri.be/980X09&sa=D&source=editors&ust=1647890411840125&usg=AOvVaw3RI3k5jY9EFn2ut_-7QltM)