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
  flex-wrap: wrap;
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
