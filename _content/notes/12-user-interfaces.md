---
# General Information
category: "User Interfaces"
number: 12
type: "Lecture"
title: "Flexbox II"
created: "2024-02-26T12:17:29Z"
---

# Wrapping

What happens if we want to create a grid layout like below?

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

First, let's setup the html and CSS

```css
.photo-grid-container {
  display: flex;
  justify-content: center;
}

.photo-grid {
  width: 900px;
  display: flex;
  justify-content: flex-start;
}

.photo-grid-item {
  margin: 5px;
  width: 200px;
  height: 200px;
}
```

```html
<div class="photo-grid-container">
  <div class="photo-grid">
    <img class="photo-grid-item" src="images/chonky-cat.jpeg" />
    <img class="photo-grid-item" src="images/box-cat.jpeg" />
    <img class="photo-grid-item" src="images/sleepy-cat.png" />
  </div>
</div>
```

By default, the items flow off the page:

```text
 _______     _______     _______     _______     _______     _______     _______     _______     _______     _______     _______     _______     _______
|       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |
|       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |   |       |
|_______|   |_______|   |_______|   |_______|   |_______|   |_______|   |_______|   |_______|   |_______|   |_______|   |_______|   |_______|   |_______|

```

How do we fix this? the `flex-wrap` property.

```css
.photo-grid {
  /* ... */
  flex-wrap: wrap; /* add this */
}
```

Now, our flex items behave much like floated boxes !!

# Direction

In Flexbox, “Direction” refers to whether a container renders its items horizontally as a row or vertically as a column. You can change the direction with a single line of css !!

```css
.flex-item {
  /* ... */
  flex-direction: column; /* adding this creates a column */
}
```

A fundamental principle of responsive design involves delivering identical HTML markup to both mobile and desktop users. However, this presents a challenge because mobile layouts typically feature a single column, whereas desktop layouts arrange elements horizontally. Despite this difference, this property enables seamless switching between layouts, facilitating the creation of designs that cater to a variety of user interfaces.

## Directing your alignment

When you rotate the direction of a container with `flex-direction`, you also rotate the direction of the `justify-content`. What happens if we want horizontally center our column? We now need to include an `align-items` property as well.

```css
.flex-item {
  /* ... */
  flex-direction: column;
  align-items: center; /* Add this to horizontally align your items  */
}
```

# Container Order

The `flex-direction` property also offers you control over the order in which items appear via the `row-reverse` and `column-reverse` properties. For example, this is the `flex-direction: row-reverse;` in action:

```text
 _______     _______     _______
|       |   |       |   |       |
|   1   |   |       |   |       |
|_______|   |_______|   |_______|

-------------  row  ------------->
 _______     _______     _______
|       |   |       |   |       |
|       |   |       |   |   1   |
|_______|   |_______|   |_______|

<--------  row-reverse  ----------

```

Applying this property value only swaps the order on a "per-row" basis. This is useful behavior for a lot of common design patterns :) Now let's see `flex-direction: column-reverse;` in action:

```text
 _______   |   _______   ^
|       |  |  |       |  |
|   1   |  |  |       |  |
|_______|  |  |_______|  |
 _______   |   _______   |
|       |  |  |       |  |
|       |  |  |       |  |
|_______|  |  |_______|  |
 _______   |   _______   |
|       |  |  |       |  |
|       |  |  |   1   |  |
|_______|  ⌄  |_______|  |

```

Reordering elements from inside a stylesheet is a big deal. Before flexbox, web developers had to resort to JavaScript hacks to accomplish this kind of thing. With the emergence of flexbox, we have been able to completely separate content & behavior from presentation !!

# Item Order

We can affect the order of items not only through the container, but through the item directly. To demonstrate this idea, let's go back to our photo grid example!

```css
.photo-grid-container {
  display: flex;
  justify-content: center;
}

.photo-grid {
  width: 900px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.photo-grid-item {
  margin: 5px;
  width: 200px;
  height: 200px;
}

/* add these classes */
.first-item {
  order: 1;
}
.last-item {
  order: -1;
}
```

```html
<div class="photo-grid-container">
  <div class="photo-grid">
    <!-- update this element -->
    <img class="photo-grid-item first-item" src="images/chonky-cat.jpeg" />
    <img class="photo-grid-item" src="images/box-cat.jpeg" />
    <!-- and this one -->
    <img class="photo-grid-item last-item" src="images/sleepy-cat.png" />
  </div>
</div>
```

In CSS flexbox, the default value for the order property is 0. This means that flex items without explicitly assigned order values will appear in the order they are written in the HTML markup.

However, by assigning an order to an item explicitly, we are changing the ordering of flex items without changing the HTML structure. An item will move RELATIVE to the rest of the items inside that same container. Let's draw a diagram to see what's happening for the `first-item` class:

```text
before applying the `first-item` class:

 order:0     order:0     order:0
 _______     _______     _______
|       |   |       |   |       |
|   A   |   |   B   |   |   C   |
|_______|   |_______|   |_______|

after:

 order:0     order:0     order:1
 _______     _______     _______
|       |   |       |   |       |
|   B   |   |   C   |   |   A   |
|_______|   |_______|   |_______|

```

When we give box A an order of "1", since the rest of the boxes have a default order of "0", box A will appear after all the other boxes. Notice how box B and box C have the same order value, so their display order is determined by their position in the HTML source code. Now when we apply the `last-item` class:

```text
before applying the `last-item` class:

 order:0     order:0     order:1
 _______     _______     _______
|       |   |       |   |       |
|   B   |   |   C   |   |   A   |
|_______|   |_______|   |_______|

after:

 order:-1    order:0     order:1
 _______     _______     _______
|       |   |       |   |       |
|   C   |   |   B   |   |   A   |
|_______|   |_______|   |_______|

```

The above ordering of elements is from lowest number to highest starting at -1, 0, 1

# Item alignment

For any horizontal and vertical alignment we can apply on a container, we can do so on an item! For example:

```css
.last-item {
  align-self: flex-start; /* add this */
}
```

## Properties

The `align-self` property accepts the same values as `align-items`, however it's applied individually to a specific flex item rather than to all items collectively.

# Flexing your items

What happens if we want relative widths instead of fixed widths? What if we want to build the below layout?

```text
 _______     _______     _________________
|       |   |       |   |                 |
|       |   |       |   |                 |
|_______|   |_______|   |_________________|

```

This is what the `flex` property is for!! With this property we can define the width of individual items in a flex container. Or, more accurately, it allows them to have flexible widths. It works as a "weight" that tells the flex container how to distribute extra space to each item. Let's experiment on a footer component:

```html
<footer>
  <div class="footer-item footer-one"></div>
  <div class="footer-item footer-two"></div>
  <div class="footer-item footer-three"></div>
</footer>
```

Then in CSS add the following classes:

```css
footer {
  display: flex;
  justify-content: space-between;
}

.footer-item {
  margin: 5px;
  background-color: peachpuff;
  height: 200px;
  flex: 1;
}
```

That `flex: 1;` line tells the items to stretch to match the width of `.footer`. Since they all have the same weight, they’ll stretch equally.

```text
                footer
_______________________________________
 _________     _________     _________
|         |   |         |   |         |
|         |   |         |   |         |
|_________|   |_________|   |_________|
_______________________________________
```

What happens when we apply the below CSS to our elements?

```css
.footer-three {
  flex: 2;
}
```

if applied correctly, you should see the following result:

```text
                  footer
_________________________________________
 _______     _______     _______________
|       |   |       |   |               |
|       |   |       |   |               |
|_______|   |_______|   |_______________|
_________________________________________
```

## Static item widths

We can even mix-and-match flexible boxes with fixed-width ones. `flex: initial` falls back to the item’s explicit width property. This lets us combine static and flexible boxes in complex ways. For example, if i want to recreate the below diagram:

```text
  fixed          flexible         fixed
 _______     _______________     _______
|       |   |               |   |       |
|       |   |               |   |       |
|_______|   |_______________|   |_______|
```

you will need to create the following css class adjustments:

```css
.footer-one,
.footer-three {
  background-color: #5995da;
  flex: initial;
  width: 300px; /* notice the fixed width here !! */
}
```

Without that `flex: initial;` line, the `flex: 1;` declaration would be inherited from the `.footer-item` class, which would cause the fixed width we want to be ignored !! Notice how when we resize the browser, the middle block is the only one that grows!! The above design pattern is a very common choice as many websites have a fixed-width sidebar (or multiple sidebars) and a flexible content block containing the main text of the page. You will likely be following this layout in your later careers.

# Auto Margins

Auto-margins in flexbox are special and work a bit differently in the context of flexbox. Think of auto-margins as a “divider” for flex items in the same container. What happens when we execute the below HTML?

```html
<div class="container">
  <div class="what">what</div>
  <div class="will">will</div>
  <div class="happen">happen ??</div>
</div>
```

with the following CSS:

```css
.container {
  display: flex;
}

.what,
.will,
.happen {
  margin: 5px;
}

.will {
  margin-left: auto;
}
```

Notice how auto-margins eat up all the extra space in a flex container instead of distributing items equally !! `will` and any following items move to the right side of the container.

# Summary

## When to use what property?

- Use `display: flex;` to create a flex container.
- Use `justify-content` to define the horizontal alignment of items.
- Use `align-items` to define the vertical alignment of items.
- Use `flex-direction` if you need columns instead of rows.
- Use the `row-reverse` or `column-reverse` values to flip item order.
- Use `order` to customize the order of individual elements.
- Use `align-self` to vertically align individual items.
- Use `flex` to create flexible boxes that can stretch and shrink.

## How to know when to it's time to use a property?

When handed a design that you need to implement, your first task is to draw a bunch of boxes on it and determine how they’re supposed to stack, stretch, and shrink to achieve the desired design across different platforms. Once you’ve got that done, it should be pretty ez to code it up using the above list of flexbox techniques.

# Exercises

- [Flexbox Froggy, Levels 8-24](https://flexboxfroggy.com/)
