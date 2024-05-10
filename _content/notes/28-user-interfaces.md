---
# General Information
category: "User Interfaces"
number: 28
type: "Lecture"
title: "Your own Domain"
created: "2024-05-10"
---

# Domain Names

This is your website's address and you can get your own :)

# Domain Registration

In 2023, Google cut a deal with Squarespace, transferring all of their domain registration rights. In a press release, Google's VP and GM of merchant shopping, said the sale is an effort to “sharpen our focus.” HOWEVER, based on online assessments, the deal's value is estimated at $180 million USD. I encourage the class to apply their critical thinking skills to discern the underlying motives behind this deal :^)

## Where to buy?

You will notice that when you try to access [Google Domains](https://domains.google.com/registrar/?pli=1), it will redirect you to [Squarespace](https://domains.squarespace.com/?channel=bd&subchannel=google-domain&campaign=&subcampaign=&source=google_domain_referral&utm_source=google_domain_referral&utm_medium=bd&utm_content=google-domain&utm_term=&utm_campaign=). Here is where you can look into purchasing your own domain.

Alternative resources that allow you to buy your own domain include:

- [Hover](https://www.hover.com/)
- [GoDaddy](https://www.godaddy.com/en-ca)
- [NameCheap](https://www.namecheap.com/?gad_source=1)
- [Domain.com](https://www.domain.com/)
- [Bluehost](https://www.bluehost.com/)
- ... and more !!

## How much do they cost?

The cost of domains can vary widely depending on several factors such as the domain extension (e.g., .com, .net, .org), the registrar you purchase from, any additional services or features bundled with the domain registration, and whether the domain is considered premium or standard.

```text
CHEAPEST ($10 - $50 per year)
.com

MID-TIER ($100 - $900 per year)
.gov .edu

EXPENSIVE (+ $1,000 per year)
.inc
.io
.co
```

For example `poggie.ca` might cost $0.01 per year, however `pogie.com` might cost $16,464 per year. Costs vary widely and more premium names come at a higher price.

# Connecting Domains

Once purchased, you will likely need to wait for DNS to create a record of your domain name. After about 72 hours, you will be able to work some magic :)

## Customizing your DNS - Option 1

You can use the Advanced Settings panel to make changes to your nameservers and glue DNS records together. By default, Squarespace’s default nameservers connect a domain by pointing to that domain’s DNS settings. You can actually customize this to to point to domains that have a specific location online.

To customize your DNS Record:

- Navigate to `DNS` and select `Nameserver Registration`
- Once here, click the button `Add host record`
- This should open up a panel that lets you enter the subdomain and IP address you want to link to your new name

This is especially helpful if you don't want to use the default wordpress and prefer to have your own clean domain purchased through a domain registrar like Squarespace

## Customizing your DNS - Option 2

Alternatively, navigate to the settings page where your project lives. Usually there is a `Domains` panel that allows you to modify the domains that are assigned to your project or production deployments. Here you can directly modify the domain to be the one you just purchased. Fun fact, this is how this website is setup :^)
