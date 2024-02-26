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
