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

## Fox Example

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
