---
# General Information
category: "User Interfaces"
number: 11
type: "Lecture"
title: "Flexbox I"
created: "2024-02-23T12:17:29Z"
link:
  { text: "slides", href: "/assets/notes/W24-user-interfaces/slides/11.pdf" }
---

# Flexbox

## Intro

Over the years, the evolution of web design has witnessed the emergence of innovative techniques while some older approaches have faded into obscurity. Among these advancements, Flexbox stands out as a relatively recent addition to CSS, revolutionizing web applications and user interface.

Flexbox, short for "Flexible Box Layout," is a layout model in CSS designed for creating dynamic and responsive layouts. With Flexbox, the intricacies of crafting complex layouts are significantly streamlined, reducing the need for convoluted HTML structures. Moreover, flex offers better support for various screen sizes and devices, contributing to improved user experience across various platforms.

Whereas floats only let us horizontally position our boxes, flexbox gives us complete control over the alignment, direction, order, and size of our boxes.

## When to use floats and when to use Flexbox?

Use flexbox to lay out your web pages as much as possible, reserving floats for when you need text to flow around a box to create a magazine style layout or when you need to support legacy web browsers.

If you want this 👉 use floats

```text
 _______ ________________
|       |                |
|  img  |                |
|_______|                |
|                        |
|        content         |
|                        |
|________________________|

```

If you want this 👉 use flexbox

```text
 ________________________________
|                                |
|             header             |
|________________________________|
 ________________________    ____
|                        |  |    |
|                        |  |____|
|                        |
|                        |   ____
|                        |  |    |
|         content        |  |____|
|                        |
|                        |   ____
|                        |  |    |
|                        |  |____|
|________________________|
 ________________________________
|                                |
|             footer             |
|________________________________|

```

By the end of the end of this topic, you should be able to create pretty much any layout.

## Before starting

DevTools will be crucial for you in the following lectures. If something isn’t behaving the way you expect, inspecting it in the developer tools should be your first step every time.

# Overview

Flexbox is a way to arrange items into rows or columns. These items will move based on some rules that you can define in the parent element.

What do the below code snippets print?

```css
.flex-container {
  display: flex; /* add this to make a flex container */
}

.flex-item {
  background: peachpuff;
  margin: 2px;
  height: 100px;
  width: 100px;
}
```

```html
<div class="flex-container">
  <div class="flex-item"></div>
  <div class="flex-item"></div>
  <div class="flex-item"></div>
</div>
```

If copy-and-pasted correctly, you should see all 3 `flex-items` arranged horizontally:

```text
 _______     _______     _______
|       |   |       |   |       |
|       |   |       |   |       |
|_______|   |_______|   |_______|

```

## What occurs when you resize the browser window?

You'll notice that the `flex-items` adapt to fill the available area. However, due to the fixed height set at `100px`, this should remain unchanged and when there is enough space for our items on the screen, they will retain their fixed width at `100px`

## What happens if i add more flex-items?

The `flex-items` will show up alongside the others, and everything will "flex" to fit within the available area.

```text
 ____     ____     ____     ____
|    |   |    |   |    |   |    |
|    |   |    |   |    |   |    |
|____|   |____|   |____|   |____|

```

# Containers & Items

## What's the difference?

A flex container is any element that has `display: flex` on it. A "flex item" is any element that lives directly inside of a flex container. Going back to our original example:

```text
               container
 _____________________________________
|   _______     _______     _______   |
|  |       |   |       |   |       |  |
|  | item  |   | item  |   | item  |  |
|  |_______|   |_______|   |_______|  |
|_____________________________________|

```

## Can they be nested?

Yes !! Any element can be both a `flex-container` and a `flex-item`. In other words, for any flex-item, you can also put `display: flex` and then use flexbox to arrange that item's children:

```text
               container
 _____________________________________
|            sub-container            |
|   _______     _______     _______   |
|  |       |   |   |   |   |       |  |
|  | item  |   | i | i |   | item  |  |
|  |_______|   |___|___|   |_______|  |
|_____________________________________|

```

# Horizontal Alignment

Ok cool we have a row of equal sized flex items, however what happens if we want to change how these items are distributed on the page?

For example, what happens if we want the below layout?

```text

 _____________________________________________
|       _______     _______     _______       |
|      |       |   |       |   |       |      |
|      |       |   |       |   |       |      |
|      |_______|   |_______|   |_______|      |
|_____________________________________________|

```

That’s what the `justify-content` property is for:

```css
.flex-container {
  display: flex;
  justify-content: center; /* Add this */
}

.flex-item {
  background: peachpuff;
  margin: 2px;
  height: 100px;
  width: 100px;
}
```

Notice how we did this by adding a property to the parent element (the flex container) instead of directly to the element we wanted to center (the flex item). This approach of controlling items through their containers is a recurring pattern in flexbox, diverging from traditional box positioning methods we've used thus far

## Properties

the `justify-content` property accepts the following values:

- `flex-start`: Items align to the left side of the container.
- `flex-end`: Items align to the right side of the container.
- `center`: Items align at the center of the container.

# Distribution

What happens if i want my items spread out evenly?

```text

 ____________________________________________
|    _______       _______       _______     |
|   |       |     |       |     |       |    |
|   | item  |     | item  |     | item  |    |
|   |_______|     |_______|     |_______|    |
|____________________________________________|

```

The `justify-content` property also gives you this same support:

```css
.flex-container {
  display: flex;
  justify-content: space-around; /* Add this */
}

.flex-item {
  background: peachpuff;
  margin: 2px;
  height: 100px;
  width: 100px;
}
```

The flex container automatically distributes extra horizontal space to either side of each item. The `space-between` value is similar, but it only adds that extra space between items.

## More Properties

The `justify-content` property ALSO accepts these values:

- `space-between`: Items display with equal spacing between them.
- `space-around`: Items display with equal spacing around them.

# Vertical Alignment

So far, we’ve been manipulating horizontal alignment, but flex containers can also define the vertical alignment of their items. For example, if i have this delightful cat that i want to center in my container:

```text

 ____________________________________________
|                                            |
|                                            |
|                                            |
|                                            |
|                 /\_____/\                  |
|                /  o   o  \                 |
|               ( ==  ^  == )                |
|                                            |
|                                            |
|                                            |
|                                            |
|____________________________________________|

```

I cannot do this using floats !! What does the code look like?

```css
.flex-container {
  display: flex;
  justify-content: center;
  height: 100vh; /* Add this to make your container take up 100% of the viewport height */
  align-items: center; /* Add this to center your cat on the vertical axis */
}
```

```html
<div class="flex-container">
  <img src="./images/delightful-cat.jpeg" width="200" />
</div>
```

## Properties

`align-items` accepts the following values:

- `flex-start`: Items align to the top of the container.
- `flex-end`: Items align to the bottom of the container.
- `center`: Items align at the vertical center of the container.
- `baseline`: Items display at the baseline of the container.
- `stretch`: Items are stretched to fit the container.

# Exercises

- [Inspect and Debug CSS Flexbox layouts](https://developer.chrome.com/docs/devtools/css/flexbox)
- [Flexbox Froggy, Levels 1-8](https://flexboxfroggy.com/)

# Acknowledgements

The lecture content was adapted from [Interneting is Hard](https://internetingishard.netlify.app/) and Michael Haaf's course notes, as well as insights from my own experience.
