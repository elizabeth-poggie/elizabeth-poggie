---
# General Information
category: "User Interfaces"
number: 17
type: "Lecture"
title: "Responsive CSS Techniques"
created: "2024-03-19T12:17:29Z"
---

# Height/Width vs. Padding

## Pro Tip

Avoid setting `width` and `height` directly as much as possible (forces overflow, changes the behavior of the element in surprising ways)

## For Example

To set element `height`: add vertical `padding` (make content “taller”)

```css
/* DO */
main {
  padding-top: 40px;
  padding-bottom: 40px;
}

/* DON'T */
main {
  height: 50%;
}
```

To set element `width`: add horizontal padding (make content “wider”)

```css
/* DO */
main {
  padding-right: 40px;
  padding-left: 40px;
}

/* DON'T */
main {
  width: 50%;
}
```

# Pixels vs. Percentage/Relative Units

## Pro Tip

Use dynamic sizing whenever possible.

## For Example

Use percentages (`%`) to divide containers into portions.

```css
/* DO */
.col {
  width: 33.33%;
}

/* DON'T */
.col {
  width: 200px;
}
```

Use `em` for element sizes, where the size adjusts relative to the parent. If i have the below HTMl code:

```html
<div class="container">
  <button class="button small">Small Button</button>
  <button class="button large">Large Button</button>
</div>
```

When I apply the below (correct) styling, the button sizes adjust relative to the parent font size, ensuring that smaller font buttons do not grow as fast as larger font buttons.

```css
/* DO */

.container {
  font-size: 1rem; /* Base font size for the container */
}

/* Button font size relative to the container font size */
.button {
  font-size: 1em;
}
/* Smaller font size relative to the container font size */
.small {
  font-size: 0.8em;
}
/* Larger font size relative to the container font size */
.large {
  font-size: 1.2em;
}

/* DON'T */

/* Everything has a fixed size */
.container {
  font-size: 16px;
}
.button {
  font-size: 12px;
}
.small {
  font-size: 8px;
}
.large {
  font-size: 14px;
}
```

Use of the `rem` unit for text sizes, where the sizes adjust relative to the root font size set by the user's preference. If i have the below HTML code:

```html
<html lang="en">
  <!-- other stuff -->
  <body>
    <div>
      <!-- more divs -->
      <div>
        <p>I am a deeply nested paragraph</p>
      </div>
      <!-- more closing divs -->
    </div>
  </body>
</html>
```

When I apply the below (correct) styling, all font sizes adjust proportionally based on the user's root font size preference, preventing the exponential growth or shrinkage seen with em when deeply nested elements are involved.

```css
/* DO */

/* Default root font size */
:root {
  font-size: 16px;
}
/* Base font size - which translates to 16px (since it inherits the root font size) */
body {
  font-size: 1rem;
}
/* Text size relative to the root font size - which is 20% smaller than the root font size, resulting in 12.8px. */
p {
  font-size: 0.8rem;
}

/* DON'T */

/* Everything has a fixed size */
:root {
  font-size: 16px;
}
body {
  font-size: 12px;
}
p {
  font-size: 20px;
}
```

# Max and Min Height/Width

## Pro Tip

Set limits on how much an element’s size can grow/shrink, use min- and max- properties instead.

## For Example

Let's say we have an image on a button screen, we do not want it to expand to become massive.

```css
.limited {
  max-width: 400px; /* Maximum width allowed */
  max-height: 200px; /* Maximum height allowed */
}
```
