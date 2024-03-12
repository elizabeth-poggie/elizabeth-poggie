---
# General Information
category: "User Interfaces"
number: 3
type: "Lab"
title: "The Feature Grind"
created: "2024-03-12T12:17:29Z"
---

# Overview

- Worth: This lab will count towards the ‘lab’ portion of your final grade at 12.5%
- Due: March 26, 2024 (by ‘end of day’)
- Hand In: A `.zip` file containing your folder (work) onto LEA.
- Late Penalty: Late submissions lose 2.5% per day to a maximum of 7 days. Nothing is accepted after 7 days and a grade of zero will be given.

# Goal

In this lab we will develop and practice intermediate CSS layout skills by leveraging Floats and Flexbox. The goal is to bring designs to life, following the workflow typically experienced in the industry :)

# Part 1) Landing page (70%)

Recently acquired by a major company, your hackathon project is ready to disrupt the market.

You've been tasked by a product manager to create [a landing page](https://www.semrush.com/blog/what-is-a-landing-page/?kw&cmp=CA_SRCH_DSA_Blog_EN&label=dsa_pagefeed&Network=g&Device=c&utm_content=676606881770&kwid=dsa-2185834088096&cmpid=18361978716&agpid=155254833518&BU=Core&extid=105177812820&adpos&gad_source=1) to market your project. The page must effectively showcase your work and persuade potential clients to invest. The deadline is tight, with launch scheduled in 10 days time. Regrettably, there was no prior consultation with the developers for time estimation, and the deadline cannot be altered as it has already been guaranteed to shareholders.

A designer has provided you with the following design:

![design](/assets/notes/W24-user-interfaces/labs/03/lab3-design.png)

You must get your landing page as close to the design as possible and fill all the boxes with images of your content. To help get you started, here is the font and color specs associated with the project:

![specs](/assets/notes/W24-user-interfaces/labs/03/lab3-specs.png)

# Part 2) Content (10%)

The designer has conducted some [market research](https://bootcamp.uxdesign.cc/market-research-a-beginners-guide-for-ux-designers-64a5afaa0cb4) and suggests referring to these resources for additional inspiration for the content:

- [The IPhone 15](https://www.apple.com/ca/iphone/?afid=p238%7CsYSSN3NtJ-dc_mtid_20925xpb40345_pcrid_674783757790_pgrid_152700520759_pexid__&cid=wwa-ca-kwgo-iphone-slid----General-)
- [This Portfolio](https://colin-moy.webflow.io/)
- [This Enterprise Software](https://www.getmaintainx.com/enterprise/)
- [This Magazine](https://magazine.ssense.com/)

However, your company prioritizes legal compliance and wants to avoid potential lawsuits. Therefore, it recommends sourcing images for the landing page from reputable platforms such as [Pexels](https://www.pexels.com/), [Pixabay](https://pixabay.com/), or [Unsplash](https://unsplash.com/) as they provide free-to-use images.

If you plan to use gifs (or memes) in your work however, nothing risks a lawsuit faster than ignoring copyright laws. Consequently, you must give credit to the original creators if required. We always strive to minimize lawsuit potential in our work, as nothing jeopardizes job security faster than legal complications :^)

# Part 3) Troubleshooting (20%)

Oh no! The requirements changed 3 days before launch! Your product manager got some tea from sales and now needs to modify the feature to appeal to higher-paying clients. As a result, the designer has made the following changes:

![new nav](/assets/notes/W24-user-interfaces/labs/03/lab3-new-nav.png)

An intermediate developer has provided you with some code to help you out, this code will turn the hamburger icon in the top-right of the webpage into a theme-toggler. Once this is working, you should create a `custom.css` to your project and in your `index.html` file head add:

```html
<!-- ... rest of your head code -->

<!-- You are expected to understand the purpose of the <link> element below! -->
<link rel="stylesheet" id="custom-css" href="./css/custom.css" />

<!-- Fix this CSS tag so that the button will not be hidden! -->
<style>
  #css-swapper {
    display: none !important;
  }
</style>

<!-- You are not expected to understand the <script> tag code -->
<!-- For now, it's enough to know that inserting this tag will allow the button to control whether your custom css file will apply or not.-->
<script>
  const customCssSheet = document.querySelector("#custom-css");
  window.onload = (event) => {
    customCssSheet.disabled = true;
  };

  function swapcss() {
    customCssSheet.disabled
      ? (customCssSheet.disabled = false)
      : (customCssSheet.disabled = true);
  }
</script>
<!-- ... rest of your head code -->
```

...in your nav bar add:

```html
<button id="css-swapper" onclick="swapcss();">Change Theme</button>
```

...and in `custom.css`, you should allow users to be able to easily identify the structural elements of your web page, such as:

- Flex containers should be identified with a border of solid color (ex.: red, green, blue, yellow, purple, etc).
- Flex items should be identified with a dashed or dotted border.
- An item can be a Flex container and item at the same time. In this case it will have a colored border that is dashed or dotted.
- Block level elements / Float elements that are not inside Flex items or containers will have a black solid border.

... and create a dark mode:

- The background and text color should change

# Hints

There may be minor details about this assignment that we haven't covered in class. This is by design. These details are minor and can be easily found through resources such as Google search (e.g., 'CSS rounded corners'). Professional developers in real-life constantly rely on external resources even for tasks they've been doing for years.

There are many ways to tackle a project like this, and it can be overwhelming to look at a blank HTML document and not know where to start. Suggestion: take it one component at a time :^)

For the component you’re working on, begin by getting all the content onto the page before beginning to style it. In other words, do the HTML and then do the CSS.

Do not worry about making your project look nice on a mobile device, or even at different zoom levels. We’ll learn how to deal with that later.

The “LOGO” box in the top left corner of the webpage should be an `.svg` image. You should find an svg that seems representative of the content of your webpage. [This website](https://feathericons.com/) can be a good starting point to help you get started :)
