---
# General Information
title: "Lecture 7"
subtitle: "The Box Model"
date: "2024-02-12T15:30:35Z"
course: "User Interfaces"
type: "Lecture"
slides: "/assets/notes/W24-user-interfaces/slides/07.pdf"
---

# The Box Model

So far we have learned about semantic elements and how every element is either `block` or `inline`. However understanding the model behind how elements are laid out on the web is key to being able to create more complex layouts with CSS, or to align items with other items. This will let us create more dynamic webpages and allow for more cool stuff later on when we dive into Javascript.

## Block and inline boxes

Everything is a box. All HTML elements are boxes made up of four components: a content container, padding, border, and margin.

Whether an element is `block` or `inline`, ALL elements have well defined box behavior that determines how the box behaves in terms of page flow and in relation to other boxes on the page.

What do you think the below code snippet would look like if we decided to put `style="border: 1px solid red"` in every element?

```html
<p>
  The paragraph is a BLOCK element,
  <a>and the anchor is an INLINE element.</a>
  The effect of each element on the flow of the document becomes clear once we
  add a border
</p>

<p>
  what happens
  <p>when i do</p>
  this?
</p>
```

# Inner vs Outer Display

In CSS, all boxes have an `inner display type` and an `outer display type`.

## Outer display

If a box has an outer display type of `block`, then ...

- The box will break onto a new line
- The `width` and `height` properties are respected
- `Padding`, `margin` and `border` will cause other elements to be pushed away from the box
- If `width` is not specified, the box will extend in the inline direction to fill the space available in its container.
- ... however this is a lot of words so let's see this in action

```html
<h1>I am outer display type by default!</h1>
<p>So am I !!!</p>
```

If a box has an outer display type of `inline`, then ...

- The box will not break onto a new line.
- The `width` and `height` properties will not apply.
- Vertical `padding`, `margins`, and `borders` will apply but will not cause other inline boxes to move away from the box.
- Horizontal `padding`, `margins`, and `borders` will apply and will cause other inline boxes to move away from the box.

```html
<a>I use inline as my outer display</a>
<span>me toooooo</span>
<strong>ME AS WELL</strong>
```

## Inner display

Boxes also have an inner display type, which dictates how the content or other elements inside that box are laid out. This will directly impact all the children that are nested inside that parent box.

```html
<a>I</a>
<a>have</a>
<a>no</a>
<a>parent</a>
<a>to</a>
<a>control</a>
<a>my</a>
<a>display >:^)</a>

<p style="text-align: center;">
  <a>o</a>
  <a>no</a>
  <a>my</a>
  <a>display</a>
  <a>is</a>
  <a>changed</a>
  <a>:^(</a>
</p>
```

## Summary

In the coming lectures, we will learn how to change a box's behavior to take advantage of very powerful CSS concepts like grid, flex, and more! For now, all you need to know is that there is a difference between the outer (behavior of element itself) and inner (behavior of element’s children) display types.

# CSS Box Model

## How do we change the behavior of boxes?

it's cool that every html element is a box, however to change their behavior, we first need to understand the CSS box model.

- Content box: The area where your content is displayed; size it using properties like `inline-size` and `block-size` or `width` and `height`
- Padding box: The padding sits around the content as white space; size it using `padding` and related properties.
- Border box: The border box wraps the content and any padding; size it using `border` and related properties.
- Margin box: The margin is the outermost layer, wrapping the content, padding, and border as whitespace between this box and other elements; size it using `margin` and related properties.

# The Box Model & DevTools

If this is too much content to digest at once, you can use chrome dev tools to understand the box better.

## View box model dimensions with DevTools

You can use Google Chrome’s DevTools to view the box around every element on a web page. For Mac users, hit `Cmd-Shift-i` and for Windows users hit `Ctrl-shift-i`. Once open, navigate to the Elements tab. Pick an element (or node) that interests you and look at the `Computed` tab. The selected element’s box should appear at the top of the pane. Hovering over each property of the box will cause the property to be highlighted in the web page.

However, if you know the element you want to inspect, you can right click the element you want to observe and select the Inspect button. This will display the element we care about in the elements tab.

## Modifying box dimensions in DevTools

To modify the values of the box double click the property value, assign it a new number, and press enter. This can give you an idea on the look and feel you want your box to have and once you are happy with the overall look, you can navigate back to the styles tab and copy-and-paste that into your source code for safe keeping :)

# Notable CSS Properties

## Margins

Used to space two elements apart from each other. The below margin command puts `20px` ALL AROUND the box.

```css
p {
  margin: 20px;
}
```

The below margin command puts `10px` starting from the top, then goes to the right margin at `35px`, then the bottom at `30px` and the left at `10px`. Notice how this is going in a clockwise fashion.

```css
p {
  margin: 10px 35px 30px 10px;
  margin: top right bottom left;
  /* If you don't get it right, there will be TRouBLe */
}
```

When there are two elements next to each other both with margins, the element with the largest margin wins.

```html
<div style="margin: 200px; border: 1px solid red; width: 100px; height: 100px">
  My margin WINS
</div>
<div style="margin: 20px; border: 1px solid red; width: 100px; height: 100px">
  My margin loses :^(
</div>
```

## Padding

Used to space around the content (or nested children elements). The padding command works similarly to `margin`, however uses the `padding` keyword

```css
p {
  padding: 10px 35px 30px 10px;
  padding: top right bottom left;
}
```

# Exercises

- [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
- [The Box Model & DevTools](https://www.codecademy.com/article/f1-devtools-box-model)

# Acknowledgements

The lecture content was adapted from [Michael Haaf](https://michaelhaaf.github.io/2W6-W23/pages/home.html) and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model), as well as taking inspiration from [codecademy](https://www.codecademy.com/article/f1-devtools-box-model), Larry Fagen's course notes, and [Web Dev Simplified](https://www.youtube.com/watch?v=rIO5326FgPE).
