---
# General Information
category: "User Interfaces"
number: 25
type: "Lecture"
title: "The WordPress Backend"
created: "2024-04-22"
---

# Customizing your CMS continued

Let's take our WordPress Knowledge to the next level.

## Navigation

Step 1) Login to the admin panel

Notice the options you have on the left, WordPress has been optimized for blogs

Step 2) Customize your posts and pages with buttons by navigating to each of these sections:

- Posts
- Media
- Pages

hHre you can do bulk actions, add content, edit pages, add pages, etc.

## Plugins

- Hello dolly > Activate && Deactivate
- Here you can install other plugins

## Users

In this section, you can add user access like a google doc. Remember how last class my `poggies-cool-shop.great-site.net` crashed when we all tried to access it at the same time and my account was later suspended? Ya, you can avoid situations like that :^)

# Exercise

In your admin panel, add one of your friends as a fellow admin user and give them access to create content. (max add 2 friends). On another's website, create a post for their blog :)

## Summary

In the admin panel we have a cute user interface to store, update, and create content. It serves as an intuitive interface to the backend, allowing non-devs to navigate their website's backend with ease.

However that's not us. Let's take our approach to the next level >:^)

# Databases

## What are they?

It's just an organized collection of information. With all databases, they start with data. For example, what you see on the FRONTEND is stored in a database in the BACKEND.

# Why use databases?

Databases are more efficient to update, add, and extract data. Imagine storing everything in an excel sheet. Absolutely horrible.

```text
Excel sheets 📊
----------------
❌ Chaos
❌ Not secure at all
❌ Limited in functionality
```

For reference, I store all your grade information on an excel spreadsheet at the moment and it will continue to haunt me until find a better way to store that data. Once i figure that out, the data will be SOOOOO much cleaner.

```text
Databases 🗄️
-------------
✅ Organized
✅ Secure
✅ Scalable
```

## Database management systems (DMS)

- [MySQL](https://www.mysql.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [SQLite](https://www.sqlite.org/)
- [phpmyadmin](https://www.phpmyadmin.net/)
- ... and more

This is what you will likely use in your future classes and careers. However for the purposes of this class, let's keep it simple ...

## DMS Plugins

In your wordpress admin panel, install the plugin `SQL Buddy`, this runs directly in your wordpress website. This plugin makes it easy to manage your database table contents DIRECTLY from your WordPress dashboard.

HOWEVER, the simplicity of this plugin comes at a cost. It's often avoided by most major companies due to security concerns. Installing this plugin on your WordPress site can potentially increase vulnerability to security risks. Lar companies typically opt for more secure alternatives like [phpmyadmin](https://www.phpmyadmin.net/) to avoid those risks.

But we are students who just want to learn, so let's take a calculated risk and opt in for the simpler option :^)

## Tables, Records, and Data Usage !! (oh my !!)

Once you have selected your favorite DMS and successfully connected to your backend, you should see things like "No", "Table", "Records", "Data Usage", and other stuff.

But what does this all mean?

# Tables

Each table stores a different type of "related" data for your website. Just like in our admin panel where we can see different "posts" and "pages", here you should see a table called something like `wp8r-posts` that stores information about your posts and pages.

## What do i mean by related?

A table shares similar information.

For example, with my notes, each note page is made up of a title, date, and class despite the actual contents of each note page being unique.

```md
---
# General Information
category: "User Interfaces"
number: 25
type: "Lecture"
title: "Tour of the WordPress Backend"
created: "2024-04-22"
---
```

However, let's take a moment to look at all the content in `SQL Buddy` in our WordPress website.

## Modifying Tables

Here you can directly modify the table's data directly from this view

## Exercise

Get `SQL Buddy` installed on your own wordpress website from last class. If you don't have a wordpress site yet, tke the time to start making one. To verify your installation, you should see it in your "Tools" panel under the section "SQL Buddy".

Using `SQL Buddy`, try to update one of your pages to be more interesting :^)

# Records

Each row in a table is called a "Record". This represents a single instance or entry of RELATED data.

In our `wp8r-posts` table, we can select a particular "Record".

# Fields

Each column in a table is a "Field". This represents a single attribute or characteristic of the data being stored. Another way to think of it is as a "Category" of data and has a particular data type associated with it.

Going back to WordPress, when we select a particular "Record" in our `wp8r-posts` table, we can see all the unique "Fields" associated with each post or page :)
