---
# General Information
category: "User Interfaces"
number: 18
type: "Lecture"
title: "CSS Grid"
created: "2024-03-15T12:17:29Z"
---

# What is a grid?

Despite being in development since 1996, Grid was only universally introduced to all major browsers in 2017. The main application of grids is in creating layouts such as these:

```text
 _______     _______     _______
|       |   |       |   |       |
|       |   |       |   |       |
|_______|   |_______|   |_______|
 _______     _______     _______
|       |   |       |   |       |
|       |   |       |   |       |
|_______|   |_______|   |_______|
 _______     _______     _______
|       |   |       |   |       |
|       |   |       |   |       |
|_______|   |_______|   |_______|

```

As shown above, Grid is often praised for easy placement of items in a (you guessed it) a grid. To generate such a layout, your code would look something like this:

```css
.grid-container {
  display: grid; /* add this to make a grid */
  grid-template-columns: 75px 75px 75px;
  grid-template-rows: 75px 75px;
  gap: 32px;
}

.grid-item {
  background-color: peachpuff;
}
```

There are a lot of similarities between flex and grid. Both use containers that control the display of their items. However one of the biggest highlights for CSS Grid was the introduction of the `gap` property.

Why is this property so neat? Let's discuss :^)

# Flexbox vs Grid

TBD

# Exercises

- [Grid Garden, Levels 1 - 28](https://cssgridgarden.com/)
