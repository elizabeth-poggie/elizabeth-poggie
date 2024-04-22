---
# General Information
category: "User Interfaces"
number: 25
type: "Lecture"
title: "Tour of the WordPress Backend"
created: "2024-04-15"
---

# Customizing your CMS continued

Let's take our WordPress Knowledge to the next level.

## Navigation

Step 1) login to the admin panel

Notice the options you have on the left, WordPress has been optimized for blogs

Step 2) Customize your posts and pages with buttons by navigating to each of these sections:

- Posts
- Media
- Pages

here you can do bulk actions, add content, edit pages, change view, etc.

## Plugins

- Hello dolly > Activate && Deactivate
- Install other plugins

## Users

Here you can add use access like a google doc. Remember how last class my `poggies-cool-shop.great-site.net` crashed when we all tried to access it at the same time and the account was later suspended? Ya, you can avoid situations like that :^)

## Summary

In the admin panel we have a cute user interface to store, update, and create content. However this is just a more intuitive interface to the backend so that people who are not devs can operate with ease.

However that's not us. Let's take it to the next level

# Databases

## What are they?

## Database management systems (DMS)

- [MySQL](https://www.mysql.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [SQLite](https://www.sqlite.org/)
- [phpmyadmin](https://www.phpmyadmin.net/)
- ... and more

This is what you will likely use in your future classes and careers. However for the purposes of this class, let's keep it simple ...

## DMS Plugins

In your wordpress admin panel, install the plugin `SQL Buddy`, this runs directly in your wordpress website. This plugin makes it easy to manage your database table contents right from your WordPress dashboard.

The simplicity of this plugin comes at a cost tho, which is why it's avoided by most major companies. By having it installed on your WordPress site, it increases the vulnerability of your wordpress website to security risks. If a company is using WordPress, they might opt in for a tool like [phpmyadmin](https://www.phpmyadmin.net/) to avoid those security risks.

But we are students who just want to learn, so let's take a calculated risk and opt in for the simpler option :^)

## Exercise

Get this installed installed on your own wordpress website from last class. If you don't have a wordpress site yet, tke the time to start making one. To verify your installation, you should see it in your "Tools" panel under the section "SQL Buddy".

# Tables, Records, and Data Usage !! (oh my !!)

Once you have selected your favorite DMS and successfully connected to your Backend, you should see things like "No.", "Table", "Records", and other stuff.

But what does this all mean?
