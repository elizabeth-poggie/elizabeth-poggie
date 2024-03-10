---
# General Information
category: "User Interfaces"
number: 14
type: "Lecture"
title: "CSS Specificity"
created: "2024-03-11T12:17:29Z"
---

# Intro

In this lesson, we will learn how CSS rules cascade – that is, how browsers traverse CSS files top-down to determine which rules are most specific, and therefore chosen as the winning rules.

We will also learn about CSS Custom Properties: these are CSS ‘rules’ that we can define once and reuse many times throughout our document to reduce code repetition.

# CSS Refresher

It is worthwhile to double check that you have understood all of the CSS mechanics (i.e., the rules for CSS works and why) that we have learned in this class so far. These include:

## Syntax

The 3 ways of adding CSS styles to HTML elements:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- External Stylesheets - apply styles across multiple HTML documents -->
    <link rel="stylesheet" type="text/css" href="./styles/styles.css" />
    <!-- Internal Styles - apply styles to all elements within the document -->
    <style>
      p {
        color: green;
      }
    </style>
  </head>
  <body>
    <!-- Inline Styles - apply styles directly to a specific element -->
    <p style="color: green;">wow</p>
  </body>
</html>
```

## Selectors

type, id, and class selectors:

```css
/* type - target elements based on their tag names */
p {
  color: green;
}

/* id - target elements based on their unique ID attribute */
#id {
  color: green;
}

/* class - target elements based on their class attribute */
.class {
  color: green;
}
```

Grouping, chaining, and nesting selectors:

```css
/* Grouping - apply the same styles to multiple selectors */
h1,
h2,
h3 {
  color: green;
}

/* Chaining - target elements that match all of the listed selectors*/
.container.special {
  color: green;
}

/* Nested - target elements that are a child of a parent element */
footer p {
  color: green;
}
```

## Properties

The properties that are common to all elements such as:

```css
* {
  color: green;
  background-color: green;
  font-family: Verdana, sans-serif;
  /* etc... */
}
```
