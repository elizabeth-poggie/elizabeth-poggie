---
# General Information
category: "User Interfaces"
number: 17
type: "Lecture"
title: "Responsive CSS Techniques"
created: "2024-03-19T12:17:29Z"
link:
  { text: "slides", href: "/assets/notes/W24-user-interfaces/slides/17.pdf" }
---

# Everything is a Grid

## What is a Grid-View?

Many desktop web pages are based on a grid-view, which means that the page is divided into columns (usually 12) and has a total width of 100%

```text
|   |   |   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |   |   |

  1   2   3   4   5   6   7   8   9   10  11  12
```

Using a grid-view is very helpful when designing web pages. It makes it easier to place elements on the page cause you can dedicate a certain elements total width relative to other elements. For example:

```text
 _______________________________________________
|                                               |
|                     header                    |
|_______________________________________________|
|           |   |   |   |   |   |   |   |   |   |
|           |   |   |   |   |   |   |   |   |   |
|   aside   |   |   |   |   |   |   |   |   |   |
|           |   |   |   |   |   |   |   |   |   |
|___________|   |   |   |   |   |   |   |   |   |
 _______________________________________________
|                                               |
|                     footer                    |
|_______________________________________________|

  1   2   3   4   5   6   7   8   9   10  11  12

```

But how do we determine the width of each element? What happens if we only want the above layout for desktop and not mobile? For this, lets get into some best practices for developing resilient CSS and implementing responsive design principals.

# Height/Width vs Padding

## Pro Tip

Avoid setting `width` and `height` directly as much as possible (forces overflow, changes the behavior of the element in surprising ways)

## Some examples

To set element `height`: add vertical `padding` (make content “taller”)

```css
/* DO */
main {
  padding-top: 40px;
  padding-bottom: 40px;
}

/* DON'T */
main {
  height: 50%;
}
```

To set element `width`: add horizontal padding (make content “wider”)

```css
/* DO */
main {
  padding-right: 40px;
  padding-left: 40px;
}

/* DON'T */
main {
  width: 50%;
}
```

# Pixels vs Percentage/Relative Units

## Pro Tip

Use dynamic sizing whenever possible.

## Some examples

Use percentages (`%`) to divide containers into portions.

```css
/* DO */
.col {
  width: 33.33%;
}

/* DON'T */
.col {
  width: 200px;
}
```

Use `em` for element sizes, where the size adjusts relative to the parent. If i have the below HTMl code:

```html
<div class="container">
  <button class="button small">Small Button</button>
  <button class="button large">Large Button</button>
</div>
```

When I apply the below (correct) styling, the button sizes adjust relative to the parent font size, ensuring that smaller font buttons do not grow as fast as larger font buttons.

```css
/* DO */

.container {
  font-size: 1rem; /* Base font size for the container */
}
/* Button font size relative to the container font size */
.button {
  font-size: 1em;
}
/* Smaller font size relative to the container font size */
.small {
  font-size: 0.8em;
}
/* Larger font size relative to the container font size */
.large {
  font-size: 1.2em;
}

/* DON'T */

/* Everything has a fixed size */
.container {
  font-size: 16px;
}
.button {
  font-size: 12px;
}
.small {
  font-size: 8px;
}
.large {
  font-size: 14px;
}
```

Use of the `rem` unit for text sizes, where the sizes adjust relative to the root font size set by the user's preference. If i have the below HTML code:

```html
<html lang="en">
  <!-- other stuff -->
  <body>
    <div>
      <!-- more divs -->
      <div>
        <p>I am a deeply nested paragraph</p>
      </div>
      <!-- more closing divs -->
    </div>
  </body>
</html>
```

When I apply the below (correct) styling, all font sizes adjust proportionally based on the user's root font size preference, preventing the exponential growth or shrinkage seen with em when deeply nested elements are involved.

```css
/* DO */

/* Default root font size */
:root {
  font-size: 16px;
}
/* Base font size - which translates to 16px (since it inherits the root font size) */
body {
  font-size: 1rem;
}
/* Text size relative to the root font size - which is 20% smaller than the root font size, resulting in 12.8px. */
p {
  font-size: 0.8rem;
}

/* DON'T */

/* Everything has a fixed size */
:root {
  font-size: 16px;
}
body {
  font-size: 12px;
}
p {
  font-size: 20px;
}
```

# Max and Min Height/Width

## Pro Tip

Set limits on how much an element’s size can grow/shrink, use min- and max- properties instead.

## For example

```css
.element {
  max-width: 400px;
  min-width: 200px;
  max-height: 400px;
  min-height: 200px;
}
```

# Media queries

Media queries are a key component of responsive design that allow you to apply CSS styles depending properties of client-side device characteristics.

CSS Media queries are a way to identify important browser characteristics, features, and user preferences, then apply styles adapting to those things.

## Pro Tip

the most common media queries in the world are those that target particular viewport ranges and apply custom styles.

## Some examples

Increasing font size for devices with large screens using min-width:

```css
/* Some default style: */

html {
  /* Browser default is 16px, this will keep it at 16px */
  font-size: 100%;
}

/* @media query override: */

/* Example using "min-width":
* When the browser is AT LEAST (min-width) 800px or larger: */
@media screen and (min-width: 800px) {
  html {
    font-size: 125%; /* increase font size on large screens! */
  }
}
```

Increase the padding between paragraphs when a page is viewed on a narrow device

```css
/* Some default style: */

article p {
  /* Common typographic style: padding on top, margin on bottom */
  padding-top: 0.5rem;
  margin-bottom: 1.5rem;
}

/* @media query override: */

/* Example using "max-width":
* When the browser is AT MOST (max-width) 600px or smaller: */
@media screen and (max-width: 600px) {
  article p {
    /* It is common for line-height to be 1.5rem, so in this e.g.:
        *   - large devices: 0.5rem + 1rem = 1 line of whitespace
        *   - small devices: 1rem + 2rem = 2 lines of whitespace */
    padding-top: 1rem;
    margin-bottom: 2rem;
  }
}
```

Increase the size of buttons on touchscreens

```css
/* Some default style: */

button {
  /* Use padding to define the "content" size of the button */
  padding: 1em 2em;
}

/* @media query override: */

/* Example: detecting "touchscreen" device type with "hover: none" 
* When the browser does NOT have the ability to "hover":
*/
@media (hover: none) {
  /* overwrite previous values only on devices that cannot "hover" */
  button {
    padding: 2em 4em;
  }
}
```

## Breakpoints

You can add multiple media queries within a stylesheet, tweaking your whole layout or parts of it to best suit the various screen sizes. The points at which a media query is introduced, and the layout changed, are known as breakpoints. Common breakpoints:

```css
/* Mobile phones - AT MOST (max-width) 480px or smaller*/
@media screen and (max-width: 480px) {
  /* ... */
}

/* Tablets - AT MOST (max-width) 768px or smaller */
@media screen and (max-width: 768px) {
  /* ... */
}

/* Desktops - AT MINIMUM 769px (min-width) or larger */
@media screen and (min-width: 769px) {
  /* ... */
}
```

# Mobile First ™

A common approach to web design is to start with a simple single-column layout for narrow-screen devices (e.g. mobile phones). Then, use `min-width` queries to check for wider screens, and add only the rules necessary to implement a multiple-column layout when you know that you have enough screen width to handle it.

Designing for mobile first is known as mobile first ™ design.

## Why?

- Mobile-first websites are lighter in processing requirements for mobile users, since the browser only has to apply the CSS that occurs before `@media` queries.
- The processing of complex media queries and the rendering of intricate layouts are done by larger devices, which presumably has higher computational power.
- Mobile layouts are simpler (usually [plain HTML][html-responsive-by-default] will suffice!) and therefore: easier to implement, faster to code, and easier to maintain. Complexity should be added incrementally as screen sizes increase.

## Media Query Specificity

`@media` queries do not add specificity to your selectors. The examples above only worked because the queries were placed at the end of the stylesheet – remember that, in a tie between two equally specific selectors, the last selector read by the Browser wins.

A common best practice is to place your @media queries at the end of your files so that you do not need to make your @media queries any more specific than they need to be.

```css
/* DO */
/* Default col width takes 1/3 of the viewport */
.col {
  width: 33.33%;
}
/* Default col width takes 100% of the viewport */
@media screen and (max-width: 480px) {
  .col {
    width: 100%;
  }
}

/* DON'T */
@media screen and (max-width: 480px) {
  .col {
    width: 100%;
  }
}
.col {
  width: 33.33%;
}
```

# At-rules Syntax

The syntax for `@media` may seem strange – what is the `@` for? We haven’t seen it yet: in CSS, at-rules (rules starting with an @ character) define a variety of high-level formatting and layout behaviors for the CSS engine. @media is the only one we will focus on in this class, but there are a few others that are worth knowing

## @Media

```css
/* Defines a conditional group of rules (nested inside curly braces)
that apply only if the client device meets certain criteria. */

@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* They can be nested within another conditional at-rules */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

## @Import

```css
/* You can include an external style sheet. */
@import url("my-imported-styles.css");

/* This is often used to import fonts */
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
```

## @keyframes

```css
/* Define a keyframe animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Apply the animation to an element */
.element {
  animation: fadeIn 2s ease-in-out;
}
```

## @font-face

```css
/* Define a custom font */
@font-face {
  font-family: "Yeet";
  src: url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
}

/* Use the custom font in your styles */
body {
  font-family: "Yeet", sans-serif;
}
```

# Lab Time

The remainder of the class was dedicated to students working on their lab :^)

# Acknowledgements

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) and [w3schools](https://www.w3schools.com/css/css_rwd_intro.asp)
