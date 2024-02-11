---
# General Information
title: "Lecture 2"
subtitle: "More on Basic HTML Elements"
date: "2024-01-30T12:17:29Z"
course: "User Interfaces"
type: "Lecture"
slides: "/assets/notes/W24-user-interfaces/slides/02.pdf"
---

# Lists

## Unordered Lists

If you want to have a list of items where the order doesn’t matter, like bullet points, then you can use an unordered list. For example:

```html
<ul>
  <li>wow</li>
  <li>WOW</li>
  <li>wOw</li>
</ul>
```

The `<ul>` tag is telling the browser that the following elements are unordered! Notice how we are nesting the `<li>` or “list items” inside the `<ul>` or “unordered list” tag. There is a parent child relationship between `<ul>` (the parent) and `<li>` (the child). The “list items” however are siblings to one another!

## Ordered Lists

If you instead want to create a list of items where the order does matter, like step-by-step instructions, then you can use an ordered list. For example:

```html
<ol>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ol>
```

# Lab Time

The remainder of the class was dedicated to people getting a head start on their lab.
