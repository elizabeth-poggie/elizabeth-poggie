---
# General Information
category: "User Interfaces"
number: 17
type: "Lecture"
title: "Responsive CSS Techniques"
created: "2024-03-19T12:17:29Z"
---

# Height/Width vs. Padding

## Pro Tip

Avoid setting `width` and `height` directly as much as possible (forces overflow, changes the behavior of the element in surprising ways)

## Some Examples

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

# Pixels vs. Percentage/Relative Units

## Pro Tip

Use dynamic sizing whenever possible.

## Some Examples

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

## For Example

TBD

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
