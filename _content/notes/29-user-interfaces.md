---
# General Information
category: "User Interfaces"
number: 29
type: "Lecture"
title: "WordPress 4 Profit"
created: "2024-05-10"
---

# Backing up Wordpress

Your website could go down at any point for a variety of reasons:

- Wordpress updates
- Clashes with themes
- Unexpected behavior after installing a plugin

This helps you prevent loosing all your work when you make edits to your website :^)

## Getting Started

- Login to the backend of your wordpress website
- Navigate to the `Plugins` tab and select `Add New Plugin`
- Once here, search for `Updraft` in the `Search plugins...` textbox
- Select the option `UpdraftPlus: WordPress Backup & Migration Plugin` with 3+ Million Active installations
- Select `Install` and then click `Activate`

## Manual Backups

- Navigate to your `Installed Plugins` page and select the `Settings` of `Updraft`
- Select `Press here to start`, this should redirect you to a `Settings` page with the title `UpdraftPlus Backup/Restore`
- Select `Backup Now`
- Wait a few moments for `Updraft` to work it's magic
- Under `Existing backups`, your current backup should be listed underneath :)
- And now you have a backup incase anything goes wrong :)

## Automatic Backups

- Navigate to your `Installed Plugins` page and select the `Settings` of `Updraft`
- Select `Press here to start`, this should redirect you to a `Settings` page with the title `UpdraftPlus Backup/Restore`
- Navigate to the `Settings` page and select what backup schedule you would like for your website

# WooCommerce

This let's you sell stuff on your wordpress website :)

## Getting Started

- Login to the backend of your wordpress website
- Navigate to the `Plugins` tab and select `Add New Plugin`
- Once here, search for `WooCommerce` in the `Search plugins...` textbox
- Select the `WooCommerce` plugin as one of the first results. You will notice that there are 5+ million active installations and over 4 thousand reviews. This is how you know you have the legitimate plugin :^)
- Select `Install` and then click `Activate` now you are ready 2 rumble :^)

## Activating WooCommerce

- Usually this will automatically pull up the setup wizard to begin formatting your website
- However, you can also modify your e-commerce site by directly navigating to the `Settings` page.
- This is where we will need to fill out information about your store.

## WooCommerce Subscriptions

- `WooCommerce` is free, however if you want to improve your plan that is an option

For now, let's keep it cheep and explore the free features of `WooCommerce`

# Adding Products

Starting your business:

- Select the `Products` tag and select `Add New`
- First scroll down to `Product Data`, in the dropdown you can select what "Type" of product you want to add. By default you should see `Simple Product`
  - `Variable Product` is like a T-Shirt that comes in different sizes and colors
  - a `Simple Product` is like a coffee mug that's one size fits all
- Add a `Product Name`, `Description`, and `Product Image` to get started
- There are a lot of features here, I invite y'all to explore

If ever you want to go back and edit your product, you can do so by navigating back to the `Products` tag :)

## TroubleShooting

At this point we are testing the limits of our free server and you risk seeing the below:

```text
This site/page has used all available PHP / Apache processes allowed on a free hosting account.

Refreshing the page once the number of Apache / PHP processes are reduced will cause the site to work

We would recommend upgrading your hosting account at IFastNet Premium hosting accounts , premium hosting accounts have MUCH higher resource limits allocated.
```

If this is the case, don't worry about it and focus on the visual elements.

# Payment Options

Get paid:

- First go into the `Settings` section of WooCommerce and set up the location and currency you will be dealing with
- Now add the `WooCommerce Payments`, `WooCommerce PayPal Payments`, and `WooCommerce Stripe Payment Gateway` plugins to your Wordpress
- Select the `Payments` tag and select `Connect your store` then `Finish Setup`
- At this point you will need to add your own paypal information to hook up the accounts. If you dont have a paypal, simply create a simple account. You don't need to add a credit card just to create
