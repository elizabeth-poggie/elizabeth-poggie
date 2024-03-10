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

## What does that even mean?

- Inline CSS styles (applied directly to the HTML element) are more specific than internal `<style>` declarations AND external `*.css` file declarations
- For all other declarations (internal and external), equally specific declarations are prioritized in the order they are read by the browser (top-to-bottom for the HTML file).

These rules distinguish the basic differences between where CSS declarations are read by the browser (inline vs internal vs external), however this information still does not tell us which style will win.

## What is the most specific?

- ID selectors (most specific selector)
- Class selectors
- Type selectors

## When do we care about specificity?

Specificity will only be taken into account when an element has multiple, conflicting declarations targeting it, sort of like a tie-breaker. TLDR: ID beats class, class beats type, type beats anything less specific.

# Quiz

## Question 1) What color wins?

```html
<div class="main">
  <div class="list subsection"></div>
</div>
```

```css
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

> Red :) Why? rule 2 is more specific because it is using more class selectors despite both rules use class selectors.

## Question 2) What color wins?

```html
<div class="main">
  <div class="list" id="subsection"></div>
</div>
```

```css
/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

> Blue :^) Why? rule 1 is more specific because ID beats class despite rule 2 having 2 class selectors

## Question 3) What color wins?

```html
<div class="main">
  <div class="list">
    <div id="subsection"></div>
  </div>
</div>
```

```css
/* rule 1 */
.list #subsection {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
.main .list #subsection {
  color: red;
}
```

Red :) Why? Both rules are using ID and class selectors, so neither rule is using a more specific selector than the other. The cascade then checks the amounts of each selector type. Both rules only have one ID selector, but rule 2 has more class selectors, so rule 2 has a higher specificity.

How come yellow still appears? `background-color: yellow` has no conflicting style declaration for it.

# Inheritance

One thing that you might have noticed already is that some CSS properties are automatically propagated from parents to children. A common example you will see in many websites is that most font properties are set in the `<body>` element, rather than explicitly defined for every single element in the page.

## What is inheritance?

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants.

## When do we use inheritance?

Typography based properties (`color`, `font-size`, f`ont-family`, etc.) are usually inherited, while most other properties are not.

## Does inheritance beat Specificity?

No. Directly targeting an element always beats inheritance.

# Quiz 2

## Question 1) What color wins?

```html
<div id="parent">
  <div class="child"></div>
</div>
```

```css
/* rule 1 */
#parent {
  color: red;
}

/* rule 2 */
.child {
  color: blue;
}
```

Blue. Why? Despite the parent element having a higher specificity with an ID, the child element would have the `color: blue` style applied since that declaration directly targets it, while `color: red` from the parent is only inherited.

## Question 2) What color wins?

```html
<div id="parent special">
  <div class="child" id="special"></div>
</div>
```

```css
/* rule 1 */
.child,
#special {
  color: blue;
}

/* rule 2 */
#parent,
#special {
  color: red;
}
```

Red. Why? In this case, the ordering of the rules is what determines the color. `#special` creates the same specificity for both rules and inheritance is being ignored (again). So if we changed the ordering to this:

```css
#parent,
#special {
  color: red;
}

.child,
#special {
  color: blue;
}
```

Blue would win because it's the css rule ordering that is the tie breaker (NOT inheritance OR specificity this time. As you can begin to see, CSS can be particularly annoying to debug lol.)

# Exercise

Open the Developer Tools inspector in your browser on this page. Can you see where the light and dark color schemes are defined?
