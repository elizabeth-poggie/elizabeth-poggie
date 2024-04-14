---
# General Information
category: "User Interfaces"
number: 23
type: "Lecture"
title: "Content Management Systems"
created: "2024-04-14"
---

# Intro

So far we have been learning about the mechanics of manually creating websites and publishing a simple static website. For the rest of the course, we will skip ahead to publishing an automatically creating a website using a CMS (Content Management System).

# Content Management Systems

## What are they?

A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit, and publish. Content in a CMS is typically stored in a database (the backend) and displayed in a presentation layer based on a set of templates like a website.

## What are we using for the course?

There are a bunch on the market that effectively do the same thing, however for the purposes of this case we are using WordPress as it is the most popular with over 46% of websites using it today.

## Why is it so popular

- It's FREE
- It's OPEN SOURCE
- And beginner friendly. You don't even really need to know how to code to know how to manage it.

## How do I get started?

- Step 1) Find a server
- Step 2) Install a tool of your choice (in our case wordpress)
- Step 3) Create your WordPress site using WordPress "backend"

# Getting started

## Option 1

[Online](https://wordpress.com/) - you sign up with WordPress and you create a site on their server. Your URL will be something like: `Yourname.wordpress.org` or something like that.

This is very limited, you cannot save/create a database on the WordPress server. (e.g. lame)

## Option 2

You can "[download](https://en-ca.wordpress.org/download/)" WordPress - yes, you download it, and install it somewhere - once you do this, you can create your site wherever you installed it.

Note - this could be a big program. People do this ONLY if they want to configure their own server.

## Option 3 (What we will do for this class)

- Visit this website [here](https://www.infinityfree.com/)
- Register for the service
- Create an account
- For the "Hosting Plan", select the 0$ a month option
- For the "Domain Name", choose anything your heart desires.
- Create a password for your website.
- ... and just like that you have a website :^)

# Cooking with WordPress on InfinityFree

- Login to your control panel by clicking the login link from the client area 840.
- Enter Softaculous Apps Installer from the control panel.
- Click WordPress.
- Click Install Now.
- Fill in the settings on the page.
  - Enter your website name (e.g. poggies-cool-shop.great-site.net)
  - Create a website name (e.g. Poggie's Cool Shop)
  - Add a description (e.g. i sell cool stuff)
  - Create an admin account (e.g. admin username: admin, admin password: password)
- Click Install.

## Demo

Website: poggies-cool-shop.great-site.net
Password: BeepBoop123

# Troubleshooting

For those of you having issues accessing the website, get this [Chrome extension](https://chromewebstore.google.com/detail/free-vpn-for-chrome-troyw/adlpodnneegcnbophopdmhedicjbcgco). It will help you bypass our lab security measures that prevent us from doing cool stuff :^)

If that one doesn't work, [try this one](https://chromewebstore.google.com/detail/ultrasurf-security-privac/mjnbclmflcpookeapghfhapeffmpodij).

... and finally, if you see nothing, an advertisements page, or an error saying “This site can’t be reached”, don't worry this can also happen. This is usually caused by a system called DNS Caching.

# What is DNS Cashing?

DNS is like the phone book of the internet. DNS allows your computer to take a domain name and look up which IP address it points to, so it can connect to that IP address to load your website.

When you add a domain name to a hosting account `InfinityFree` will automatically configure their servers to send the right data for your domain name, but this can take time.

## How long though?

Normally, you should be able to see your website in a few hours. However, depending on the DNS cache on the computer and network of your visitors, it could take up to 72 hours for the website to be visible everywhere.

... 'Domain names', 'IP addresses', and 'Caching' oh my !! What do each of these terms mean? Let's break it down in more detail.

# What are Domain names?

Domain names are human-readable labels used to identify and locate resources on the internet. Think of this as the "address" of your website translated into "human words". They come in 2 parts:

## Part 1) Domain Label

This is the unique name chosen by the owner of the domain. Some examples:

```text
wikipedia
elizabeth-poggie
wordpress
```

## Part 2) Top-Level Domain

This is the last part of the domain name, which typically indicates the type or purpose of the domain. Some examples:

```text
.com
.ca
.org
.net
.gov
```

Choose this wisely. For example, if I wanted to create an anti-capitalist forum, maybe using `www.marxist.com` would be a bad move since `.com` stands for `commercial organizations`, whereas `www.marxists.org` is a better choice since `.org` is an abbreviation for `organization`.

## Part 1 + 2) Together

It would look like this

```text
wikipedia.org
elizabeth-poggie.com
wordpress.com
```

When you type a domain name into a web browser's address bar, the browser uses a system called the Domain Name System (DNS) to translate the human-readable domain name into the numerical IP address of the server hosting the website.

Once the IP address is resolved, the browser can establish a connection to the server and retrieve the requested web page.

# What are IP Addresses?

IP addresses are unique numerical labels assigned to devices connected to a computer network that uses the Internet Protocol for communication. They serve two main purposes:

## Identification

An IP address uniquely identifies a device on a network, allowing other devices and servers to know where data should be sent or received. This is the "address" of your website translated into "computer words".

## Routing

IP addresses also play a crucial role in routing data across networks. When you send data over the internet, it's broken down into smaller packets, each of which contains the source and destination IP addresses. Routers and other network devices use these addresses to determine where to forward the packets along the most efficient path to their destination.

Every device that connects to the internet is assigned at least one IP address. This is what allows them to communicate with other devices over the internet.

## How do I find my public IP address?

[Let us visit the IP chicken](https://www.ipchicken.com/). Not only does the IP chicken know where you live, but also knows what your computer you are using and the browser you

## How do I find my private IP address?

You can find the IP address of your phone through the device's settings or using various methods depending on the operating system (OS) it's running.

For Apple

- Open up "Settings"
- Tap on "Wifi"
- Tap on the network you're connected to.
- Next to "IP Address", you can see your private address.
- Also notice that you can configure your DNS here for the nerds that are curious on such topics.

For Android

- Open up "Settings"
- Tap on "Connection"
- Next goes "WIFI" and next to your current connection, tap on the cog wheel.
- Here you will be able to click "View More" to see your private IP address

## How do I stalk other people's IP addresses?

Let's run the below command

```bash
nslookup google.com
```

and you should see something like this:

```bash
Server:		192.168.0.1
Address:	192.168.0.1#53

Non-authoritative answer:
Name:	google.com
Address: 172.217.13.110 # paste this boi into your browser
```

Now let's paste that address into our browser and we can use the "numeric" IP address to access google :^)

## For the hyper nerds

FOr those curious on getting all the details beyond just the IP address:

```bash
dig google.com
```

What do these other terms mean? 👀 i invite y'all to look it up.

## What happens if we want to continuously poke google?

This let's you continously poke google:

```bash
ping google.com
```

Notice how I am also getting the IP address here.

# Frontend vs Backend

The front end of your site is the part that is exposed to the world. It is what you want your public to see. Example: [www.johnabbott.qc.ca](www.johnabbott.qc.ca) this is what students/the world sees.

The back end is for "employees" of the company to work on the website. Through this portal, you can/will modify the website. For example: [www.johnabbott.qc.ca/wp-admin](www.johnabbott.qc.ca/wp-admin)

## Updating information

Updating department information on a WordPress site shouldn't inherently take too long, as it's usually a matter of logging in, making the necessary changes, and hitting 'Publish'.

# Customizing your theme

Navigate to this design catalog to pick a different theme.

# Creating Pages

# Adding Media
