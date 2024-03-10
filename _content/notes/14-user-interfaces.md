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
    <!-- external stylesheets - apply styles across multiple HTML documents -->
    <link rel="stylesheet" type="text/css" href="./styles/styles.css" />
    <!-- internal styles - apply styles to all elements within the document -->
    <style>
      p {
        color: green;
      }
    </style>
  </head>
  <body>
    <!-- inline styles - apply styles directly to a specific element -->
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

# CSS Cascade

Sometimes we may have rules that conflict with one another, and we end up with some unexpected results. Expressions of frustration in such situations may include, but are not limited to:

```text
"But I wanted these paragraphs to be blue, why are they black?!"
```

```text
"Why won't it apply any margins????¿??????¿¿¿??¿"
```

```text
"what is even happening lol"
```

These sentiments have inspired prolific meme creation in the developer community, including:

![meme](/assets/notes/W24-user-interfaces/photos/family-guy-css.gif)

As frustrating as this can be, it’s important to understand that CSS doesn’t just do things against our wishes. CSS only does what we tell it to do. What we need to understand more closely is the mechanics of how CSS does what we tell it, and for that, we need to understand the CSS Cascade.

## Common causes of unexpected behaviour:

- A browser default style has not been overwritten by you
- You have not understood how a property you have written works
- You have not understood how the properties you wrote Cascade

There are different factors that the "cascade" uses to determine what styling rule is applied, three of which we’ll cover in this class...

# Specificity

A CSS declaration that is more specific will take precedence over less specific ones.
