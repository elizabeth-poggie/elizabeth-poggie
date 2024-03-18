---
# General Information
category: "User Interfaces"
number: 10
type: "Lecture"
title: "Floats"
created: "2024-02-19T12:17:29Z"
link:
  { text: "slides", href: "/assets/notes/W24-user-interfaces/slides/10.pdf" }
---

# Motivation

If you want to make a layout, you need to know how floats work.

What are some some examples?

- Magazines
- Navigation Menus
- Multi-column layouts

# Overview

“Floats” let you put block-level elements side-by-side instead of on top of each other. This is a big deal because it lets us build all sorts of layouts, including sidebars, multi-column pages, grids, and magazine-style articles with text flowing around an image. This is where we finally start creating real web pages.

Float-based layouts have _mostly_ been replaced with "Flexbox" and "CSS Grid" in modern websites (which we will cover in later lectures). That being said, for over a decade, floats have served as the foundation for the majority of websites on the Internet, which means you’ll definitely encounter them at some point in your career.

# Default Behavior

Floats alter the default layout of a web page, but what is the default behavior anyways? We covered this concept in earlier lectures, however as a refresher, the blow code snippet will demonstrate to you have each block-level element fills 100% of its parent element's width and stack on top of each other vertically:

```html
<main class="page">
  <nav class="header">Header</nav>
  <aside class="sidebar">Sidebar</aside>
  <section class="content">Content</section>
  <footer class="footer">Footer</footer>
</main>
```

To demonstrate how everything in CSS is a box, let's give all elements a border:

```css
* {
  border: 1px greenyellow solid;
}
```

The above html & styling forms a single column layout, however adding something as innocent as `float: left;` into your CSS can change your horizontal flow and thus the overall look and feal of your page. But what does it even mean to float?

# Floating Elements

In CSS, the "float" property is used to specify whether an element should be floated to the left or right within its containing element. This property gives us control over the horizontal position of an element, so by applying the property `float: left;` and “floating” an element to the left, we’re telling the browser to align it to the left side of the page.

When we float an element, it is taken out of the normal flow of the document, which allows content to "flow" around it:

```css
.sidebar {
  float: left; /* add this */
  width: 200px;
  height: 300px;
  background-color: red;
}
```

To see this idea come to life, let's add some styling to the content:

```css
.content {
  height: 500px;
  background-color: #f5cf8e;
}
```

... so that when we apply the prior styling, we get the following magazine-style layout:

```text
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
 ________________________
|                        |
|         footer         |
|________________________|

```

It’s as if the sidebar is inside the .content block, so any HTML markup in .content would wrap around the sidebar’s box !! However, if we unset the float property, the block-level elements will go back to stacking on top of each other:

```text
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
 ________________________
|                        |
|         footer         |
|________________________|


```

What happens when we apply the property `float: right;` to content?

# Float in a Float

Floated boxes always align to the left or right of their parent element – not their grandparent, not the `<body>` element, but their immediate parent. If instead we had a fixed width for our `<main class='page'>` element, the floated boxes inside of this element will float to the far left of its parent element. For Example:

```css
.page {
  width: 900px; /* Add this line */
  margin: 0 auto;
}
```

Does the sidebar hug the left hand of the browser window, or of its parent?

# Multiple Floats

Let’s go back to our current magazine-style float a little bit more by adding an explicit width to our `.content` block:

```css
.content {
  width: 500px; /* Add this line */
  height: 500px;
  background-color: #f5cf8e;
}
```

You can clearly see that our sidebar is being hugged by our `.content`.

KEEP IN MIND: floats change the default flow behavior, allowing horizontal flow, ONLY for that element. For other elements to ALSO have different/horizontal flow, we need to make THOSE elements have the float property set as well. SO, What happens when we add a red border to the page ...

- sidebar: left, content: left
- sidebar: left, content: right
- sidebar: right, content: left
- sidebar: right, content: right

When you float multiple elements in the same direction, notice how they stack horizontally. As for our `.footer` element, notice how the `.footer` shows up in the top right, directly below `.header`, demonstrated in the following diagram:

```text
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 _______ ________________
|       |                |
|sidebar|     footer     |
|       |________________|
|_______|________________
|                        |
|                        |
|        content         |
|                        |
|                        |
|________________________|

```

That’s because floated boxes are REMOVED from the normal flow of the page. The height of our floated elements don’t contribute to the vertical position of the footer, so it simply sticks itself below the last element that wasn’t floated. We can see this more clearly by adding a red border around our `.page` element:

```css
.page {
  border: 5px red solid; /* add this */
  width: 100%;
  margin: 0 auto;
}
```

When a border is added, notice how the border only surrounds the `.header` and `.footer` elements. These elements are STILL PART OF the normal flow, however the floated elements are being completely ignored !! When removing an element from the normal flow, it means that other elements in the document do not consider the floated element when calculating their heights or positions.

SOOO, How do we fix these issues with height? What happens if we want a layout below?

```text
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
        |                |
        |                |
        |                |
        |________________|
 ________________________
|                        |
|         footer         |
|________________________|


```

# Clearing Floats

"Clearing" a float is when you tell a block to ignore any floats that appear before it. Instead of flowing around the floated box, a cleared element always appears AFTER any floats. It's like forcing a block back into the default vertical flow of the page. So for example:

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
        float:right;
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
    <nav class='header'>Header</nav>
    <aside class="sidebar">Sidebar</aside>
    <section class="content">Content</section>
    <footer class="footer">Footer</footer>
  </main>
</body>
</html>
```

The word "both" means clear both left and right floats, however you can be more selective with `clear: left` and `clear: right`. What do you think will happen?

## Full-bleed Layouts

Depending on the type of layout you’re trying to create, the previous example is completely valid as a structure, however let's say we want the header and footer to expand to the full width of the screen? This is what is known as a FULL-BLEED LAYOUT and is a design concept where the content or an element extends ALL the way to the edge of the page or screen. In other words, the content "bleeds" off the edges with no margins or padding, giving a seamless and continuous appearance. For example:

```html
<nav class="header">Header</nav>
<main class="page">
  <aside class="sidebar">Sidebar</aside>
  <section class="content">Content</section>
</main>
<footer class="footer">Footer</footer>
```

When we take out the `.header` and `.footer` from the `.page` element, they extend to the full width of the window !! Which is exactly what we want!!!

# Floats for Equal Columns

How would we create this layout?

```text
 _______     _______     _______
|       |   |       |   |       |
|       |   |       |   |       |
|       |   |       |   |       |
|   1   |   |   2   |   |   3   |
|       |   |       |   |       |
|       |   |       |   |       |
|_______|   |_______|   |_______|

```

Step 1) create this general layout:

```html
<div class="parent">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
</div>
```

Step 2) style the column like this:

```css
.column {
  float: left;
  width: 31%;
  margin: 20px 1.5%;
  max-height: 50%;
}
```

BOOM, done!HOWEVER, Want a grid in the parent instead of 3 columns? No problem! When there isn't enough room to stack a floated element horizontally, it pops down to the next line. All we need to do is add more column elements:

```html
<div class="parent">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
</div>
```

# Exercises

- [Test your float skills](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats_skills)
- [Float examples](https://www.w3schools.com/css/css_float_examples.asp)

# Acknowledgements

The lecture content was adapted from Larry Fagen's and Michael Haaf's course notes, as well as taking inspiration from my professional experience.
