---
# General Information
category: "User Interfaces"
number: 1
type: "Solution"
title: "Practice Test 2"
created: "2024-04-22"
---

# Question 1 (3 points)

## Question

Explain the difference between inline, internal, and external specificity

## Answer

- Inline - Since there is no selector for inline CSS, there is no specificity to calculate; inline CSS rules automatically beat all other CSS rules for this reason. [Read more here](https://www.elizabethpoggie.com/notes/14-user-interfaces#inline-css)

- Internal - Specificity here is determined by ordering. [Read more here](https://www.elizabethpoggie.com/notes/14-user-interfaces#internal-and-external-css)

- External - Same deal as above

# Question 2 (2 points)

## Question

Which CSS specificity rule beats all other rules?

## Answer

```css
!important
```

[Read more here](https://www.elizabethpoggie.com/notes/14-user-interfaces#inline-css)

# Question 3 (2 points)

## Question

"Why use responsive design? Give or draw your answer"

## Answer

Responsive web design is the set of best practices used to create universally usable webpages.

```text
Desktop 🖥️
-----------
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 _______ ________________
|       |                |
| aside |                |
|       |                |
|_______|    main        |
|                        |
|                        |
|                        |
|________________________|
 ________________________
|                        |
|         footer         |
|________________________|

Tablet 🍎
----------
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 _____________ __________
|             |          |
|    aside    |          |
|             |          |
|_____________|          |
|                        |
|         main           |
|                        |
|________________________|
 ________________________
|                        |
|         footer         |
|________________________|


Mobile 📱
-------
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 ________________________
|                        |
|          aside         |
|                        |
|________________________|
 ________________________
|                        |
|                        |
|         main           |
|                        |
|                        |
|________________________|
 ________________________
|                        |
|         footer         |
|________________________|

```

# Question 4 (2 points)

## Question

Explain the difference between frontend and backend engineers

## Answer

Front-end developers are software developers who create the user interface (UI) and user experience (UX) for websites and web applications. They use web languages like HTML, CSS, and JavaScript to create the design elements that users see when they visit a website.

Back-end developers are programmers who build and maintain the server-side of web applications, including data storage, security, and other functions that are not visible to the end user.

# Question 5 (2 points)

## Question

Consider the following CSS. Despite creating a custom font, the website did not reflect those new cool changes. What could be the issue?

```css
@font-face {
  font-family: "New Cool Font";
  src: url("fonts/cool-font");
}
```

## Answer

Many answers can be accepted here:

- The `url` is wrong, it should be imported like `./fonts/cool-font`
- The font has not been imported correctly/ it doesn't exist

# Question 6 (2 points)

## Question

Consider the following CSS. Despite implementing the proper breakpoints, the design is not responsive on mobile. What could be the issue?

```css
.box {
  width: 25%;
  height: 100px;
  background-color: peachpuff;
}

@media screen and (max-width: 480px) {
  .box {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .box {
    width: 50%;
  }
}
```

## Answer

The ordering of this is incorrect. On mobile the width of the box will never become 100% due to CSS Specificity. To fix this issue, you would need to change the order of these media queries like so:

```css
.box {
  width: 25%;
  height: 100px;
  background-color: peachpuff;
}

/* move this here */
@media screen and (max-width: 768px) {
  .box {
    width: 50%;
  }
}

/* and for mobile it comes last */
@media screen and (max-width: 480px) {
  .box {
    width: 100%;
  }
}
```

Read more about the concept [here](https://www.elizabethpoggie.com/notes/17-user-interfaces#mobile-first-) :^)

# Question 7 (2 points)

## Question

What is DNS caching?

## Answer

DNS is like the phone book of the internet. DNS allows your computer to take a domain name and look up which IP address it points to, so it can connect to that IP address to load your website

[See more details here](http://www.elizabethpoggie.com/notes/23-user-interfaces#what-is-dns-cashing)

# Question 8 (2 points)

## Question

Give an example of a CMS and explain why its neat

## Answer

WordPress and anything along the lines of:

- It's FREE
- It's OPEN SOURCE
- And beginner friendly. You don't even really need to know how to code to know how to manage it.
- ... or tbh, anything taken from [here](https://www.elizabethpoggie.com/notes/23-user-interfaces#content-management-systems)

# Question 9 (2 points)

## Question

Why use form validation?

## Answer

Anything containing:

- We want to get the right data, in the right format.
- We want to protect our users' data. (e.g. secure passwords)
- We want to protect ourselves. (e.g. malicious users)
- ...or something inspired by [this section](https://www.elizabethpoggie.com/notes/21-user-interfaces) of the notes

# Question 10 (2 points)

## Question

When should you use floats vs flexbox? Give or draw your answer

## Answer

[this](https://www.elizabethpoggie.com/notes/19-user-interfaces#flexbox-vs-grid-vs-floats)

TLDR:

- Use Flexbox when arranging items along a single dimension, like in navigation bars or adaptable content sections within a container.
- Use floats when you want to create "magazine" layouts.
