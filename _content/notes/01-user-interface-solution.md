---
# General Information
category: "User Interfaces"
number: 1
type: "Solution"
title: "Practice Test 2"
created: "2024-04-22"
---

# Question 1 (3 points)

"Explain the difference between inline, internal, and external specificity"

# Solution

- Inline - Since there is no selector for inline CSS, there is no specificity to calculate; inline CSS rules automatically beat all other CSS rules for this reason. [Read more here](https://www.elizabethpoggie.com/notes/14-user-interfaces#inline-css)

- Internal - Specificity here is determined by ordering. [Read more here](https://www.elizabethpoggie.com/notes/14-user-interfaces#internal-and-external-css)

- External - Same deal as above

# Question 2 (2 points)

"Which CSS specificity rule beats all other rules?"

## Solution

```css
!important
```

[Read more here](https://www.elizabethpoggie.com/notes/14-user-interfaces#inline-css)

# Question 3 (2 points)

"Why use responsive design? Give or draw your answer"

## Solution

Responsive web design is the set of best practices used to create universally usable webpages.

```text
Desktop 🖥️
-----------
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 _______ ________________
|       |                |
| aside |                |
|       |                |
|_______|    main        |
|                        |
|                        |
|                        |
|________________________|
 ________________________
|                        |
|         footer         |
|________________________|

Tablet 🍎
----------
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 _____________ __________
|             |          |
|    aside    |          |
|             |          |
|_____________|          |
|                        |
|         main           |
|                        |
|________________________|
 ________________________
|                        |
|         footer         |
|________________________|


Mobile 📱
-------
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 ________________________
|                        |
|          aside         |
|                        |
|________________________|
 ________________________
|                        |
|                        |
|         main           |
|                        |
|                        |
|________________________|
 ________________________
|                        |
|         footer         |
|________________________|

```
