---
# General Information
title: "Lecture 10"
subtitle: "Floats & Intro to Flexbox"
date: "2024-02-19T15:30:35Z"
course: "User Interfaces"
type: "Lecture"
slides: ""
---

# Overview

“Floats” let you put block-level elements side-by-side instead of on top of each other. This is a big deal because it lets us build all sorts of layouts, including sidebars, multi-column pages, grids, and magazine-style articles with text flowing around an image. This is where we finally start creating real web pages.

Float-based layouts have mostly been replaced with Flexbox and CSS Grid in modern websites (which we will give in later lectures). That being said, for over a decade, floats have served as the foundation for the majority of websites on the Internet, which means you’ll definitely encounter them at some point in your career.

# Default Behavior

Floats alter the default layout of a web page, so we should probably start by reviewing what exactly that “default” behavior is. We covered this concept in earlier lectures, however as a refresher, the blow code snippet will demonstrate to you have each block-level element fills 100% of its parent element's width and they appear vertically:

```html
<main class="page">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <section class="content">Content</section>
</main>
```

and let's give all elements a box to see how everything is just a box:

```css
* {
  border: 1px greenyellow solid;
}
```

The above html & styling forms a single column layout, however adding something as innocent as `float: left;` into your CSS can change your horizontal flow and thus the overall look and feal of your page.

# Floating Elements

The CSS float property gives us control over the horizontal position of an element. By “floating” an element to the left, we’re telling the browser to align it to the left side of the page.

```css
.sidebar {
  float: left; /* add this */
  width: 200px;
  height: 300px;
  background-color: red;
}
```

This doesn’t just align the sidebar — it also tells surrounding elements that they can flow around the sidebar instead of beginning underneath it. To see this idea come to life, let's add some styling to the content:

```css
.content {
  width: 500px;
  height: 500px;
  background-color: #f5cf8e;
}
```

... so that when we apply the prior styling, we get the following magazine-style layout:

```text

--------------------------
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 _______ ________________
|       |                |
|sidebar|                |
|       |                |
|_______|    content     |
|                        |
|                        |
|                        |
|________________________|

--------------------------
```

It’s as if the sidebar is inside the .content block, so any HTML markup in .content would wrap around the sidebar’s box !! However, if we unset the float property, the block-level elements will go back to stacking on top of each other:

```text

--------------------------
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 _______
|       |
|sidebar|
|       |
|_______|
 ________________________
|                        |
|         content        |
|                        |
|                        |
|                        |
|________________________|

--------------------------
```

We are not constrained to floating elements to the left as in the above example, you can also try experimenting with `float: right;` , for example, what happens when we add the following?

# Clearing Floats

"Clearing" a float is when you tell a block to ignore any floats that appear before it. Instead of flowing around the floated box, a cleared element always appears after any floats. It's like forcing a block back into the default vertical flow of the page. So for example:

```css
.footer {
  clear: both; /* add this */
  height: 200px;
  background-color: blue;
}
```

The above would clear any floats and would be as if the footer appeared directly below anything in the vertical alignment. For example, if we add a footer to our previous work, what would our layout look like? Copy and paste the following in your own sandbox:

```html
<head>
    <title>Demo</title>
    <style>
        * {
            border: 1px greenyellow solid
        }
        .page {
            border: 5px red solid;
            width: 100%;
            margin: 0 auto;
        }
        .sidebar {
            float:left;
            width: 200px;
            height: 300px;
            background-color: red;
        }
        .content {
            width: 500px;
            height: 500px;
            background-color: #F5CF8E;
        }
        .footer {
            clear: both;
            height: 200px;
            background-color: lightblue;
        }
    </style>
</head>

<body>
  <main class="page">
        <nav class='menu'>Menu</nav>
        <aside class="sidebar">Sidebar</aside>
        <section class="content">Content</section>
        <footer class="footer">Footer</footer>
    </main>
</body>
</html>
```

The word "both" means clear both left and right floats, however you can be more selective with `clear: left` and `clear: right`.

## Full-bleed Layouts

Depending on the type of layout you’re trying to create, the prior example is completely valid. However let's say we want the menu and footer to expand to the full width of the screen? This is what is known as a full bleed layout and is a design concept where the content or an element extends all the way to the edge of the page or screen, without any margins or padding. In other words, the content "bleeds" off the edges, giving a seamless and continuous appearance. For example:

```html
<nav class="menu">Menu</nav>
<main class="page">
  <aside class="sidebar">Sidebar</aside>
  <section class="content">Content</section>
</main>
<footer class="footer">Footer</footer>
```

When we take out the menu and footer from the "page" element, they extend to the full width of the window !! which is exactly what we want!!!

# Float in a Float

Floated boxes always align to the left or right of their parent element – not their grandparent, not the <body> element, but their immediate parent. If instead we had a fixed width for our `<main class='page'>` element, the floated boxes inside of this element will float to the far left of its parent element. For Example:

```css
.page {
  width: 900px; /* Add this line */
  margin: 0 auto;
}
```

Does the sidebar hug the left hand of the browser window, or of its parent?

# Multiple Floats

# Floats for Equal Columns

To create 3 columns in your content, follow the below recipe

```html
<!-- Step 1) create this general layout -->
<div class="parent">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
</div>
```

```css
/* Step 2) style the column like this */
.column {
  float: left;
  width: 31%;
  margin: 20px 1.5%;
  max-height: 50%;
}
```

Want a grid in the parent instead of 3 columns? No problem! When there isn't enough room to stack a floated element horizontally, it pops down to the next line. All we need to do is add more column elements :)

```html
<!-- Step 3) Add more columns -->
<div class="parent">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
</div>
```

# Intro to Flexbox

## Overview

The main idea behind the flex layout is to give the container the ability to alter its items’ width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow.

Regular layout is based on block (vertical aligning) and inline (horizontal aligning) flow. Flex layout is based on flex-flow directions. Consider the following layout:

```text
                    main size
----------------------------------------------------    <- - - cross start
 ___________      ________________________________
|           |    |          |                     |
|           |    |          |                     |
|-main axis-|-  -| - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
|           |    |          |                     |
|___________|    |__________|_____________________|
|                           |
----------------------------------------------------
|                           |
main start                  cross axis
```

- main axis – The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the flex-direction property (see below).

- main-start | main-end – The flex items are placed within the container starting from main-start and going to main-end.

- main size – A flex item’s width or height, whichever is in the main dimension, is the item’s main size. The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.

- cross axis – The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.

- cross-start | cross-end – Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.

- cross size – The width or height of a flex item, whichever is in the cross dimension, is the item’s cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.

## DevTools

To really understand how flexbox works, we need to try it

# Acknowledgements

The lecture content was adapted from Larry Fagen's and Michael Haaf's course notes, as well as taking inspiration from my professional experience.
