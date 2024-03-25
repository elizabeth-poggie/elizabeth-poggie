---
# General Information
category: "User Interfaces"
number: 18
type: "Lecture"
title: "CSS Grid"
created: "2024-03-23"
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

There are a lot of similarities between flex and grid. Both use containers that control the display of their items. However one of the biggest highlights for CSS Grid was the introduction of the `gap` property. But what is going on in the above code? Why are gaps so neat? Let's break it down into steps.

# Creating a grid

First let's create a very simple grid container:

```css
.container {
  display: grid; /* add this */
}
```

We can think about CSS Grid in terms of a container and items. When you make an element a grid container, it will “contain” the whole grid. So when we populate the container with some items, each direct child automatically becomes a grid item:

```html
<div class="container">
  <div>Cat</div>
  <div>Dog</div>
  <div>Fish</div>
</div>
```

Here `cat`, `dog`, and `fish` become "grid items", however let's say we nest another element in one of these divs:

```html
<div class="container">
  <div>Cat</div>
  <div>Dog</div>
  <div>
    Fish
    <p>a smaller fish</p>
    <!-- add this -->
  </div>
</div>
```

Notice how only direct child elements become grid items here and `a smaller fish` is not a grid item

# Columns and Rows

Now that we have a grid container with several grid items, it’s time to specify our columns and rows to make our layout more `grid`-like !!

```css
.container {
  display: grid;
  grid-template-columns: 42px 42px; /* add this */
  grid-template-rows: 42px 42px; /* add this */
}
```

The above properties create a "column track" to give us space between our columns and a "row track" to give us space between our rows. Think of a "track" as the space between lines on a grid.

What would happen if we actually wanted 3 columns instead of 2?

```css
.container {
  display: grid;
  grid-template-columns: 42px 42px 42px; /* add another 42px */
  grid-template-rows: 42px 42px;
}
```

What would happen if instead I added another item without modifying the `grid-template-columns` or `grid-template-rows` properties?

# Implicit Grids

If i created the blow layout:

```html
<div class="container">
  <div>Cat</div>
  <div>Dog</div>
  <div>Fish</div>
  <div>Bird</div>
  <div>Gator (for florida man)</div>
</div>
```

with the following CSS styling:

```css
.container {
  display: grid;
  grid-template-columns: 42px 42px;
  grid-template-rows: 42px 42px;
}
```

What would happen? You should see that the `gator` was still placed on the grid and it’s been slotted into a third row we have not yet defined:

```text
🐱 🐶
🐡 🦜
🐊
```

Why? Unlike when we use the `grid-template-columns` and `grid-template-rows` properties where we are "explicitly" defining grid tracks to lay out our grid items, When the grid needs more tracks for extra content, it will "implicitly" define new grid tracks.

What if instead we want more control on the default behavior?

# Explicit Grids

We can set the implicit grid track sizes like below:

```css
.container {
  display: grid;
  grid-template-columns: 42px 42px;
  grid-template-rows: 42px 42px;
  grid-auto-rows: 42px; /* add this */
}
```

By adding the above css snippet, any new "implicit" rows will have the same value as our "explicit" row track :^)

# Flexbox vs Grid

TBD

# Exercises

- [Grid Garden, Levels 1 - 28](https://cssgridgarden.com/)
