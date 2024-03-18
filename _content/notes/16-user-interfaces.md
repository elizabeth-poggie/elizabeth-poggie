---
# General Information
category: "User Interfaces"
number: 16
type: "Lecture"
title: "Responsive Design"
created: "2024-03-18T12:17:29Z"
---

# Responsive Design

Have you ever been on a website that sucks to use? When you were trying to access my notes on mobile, was it annoying to use?

Any creative trade requires both technique (HTML, CSS) as well as design. So what is responsive web design?

# What is it

We are using HTML and CSS to achieve an ambitious goal: we want not just make any web page, but web pages that render well on all screen sizes and resolutions while retaining usability and function. That is, responsive web design is the set of best practices used to create universally usable webpages.

```text
"With great power [to create websites], comes great responsibility
[to make them accessible to all users, regardless of device]."

- Uncle Ben, Spider-Man (2002), with minor adaptions.
```

# DevTools Responsive Mode

Getting good at any approach to HTML/CSS requires being able to debug our code and measure our success in achieving a design. Like in previous topics we have learned, modern internet browsers come with a suite of very useful tools for debugging and measuring – for responsive design, most browsers have a responsive design mode tool.

## What can you see in DevTools

- Simulate a mobile devices
- Simulate varying device widths
- Show media queries
- Different devices have different resolutions. In DevTools, you can actually simulate different device pixel ratios.

## QUIZ: Can we do this in DevTools?

- Capture what the user sees when they try to take a screenshot of our website?
- See what a screen rotation does to our website?
- Can we simulate a Desktop device that is also a touch screen?
- Sometimes we try to access pages on a website and the WIFI sucks, can we simulate that on Chrome?
- What happens if we are located in South Korea, can we see what this will look like on our website?

# Exercise

Complete [this tutorial](https://developer.chrome.com/docs/devtools/device-mode). In my time at Morgan Stanley, SSENSE && MaintainX, the tools featured in the tutorial were a regular part of my workflow and a requirement to use prior to shipping any feature.

You have 20 minutes and we will continue the lecture.

Have fun :^)

# Responsive by Default

our very first lab was strangely the most responsive of the labs we have made so far. (Despite containing no extra CSS)

HTML is fundamentally responsive, or fluid. If you create a web page containing only HTML, with no CSS, and resize the window, the browse will automatically reflow the text to fit the viewport.

But why?

## HTML defaults

There are two types of HTML element: most are block, and some are inline. How is the height and width of these elements computed by default?

```cs
/* BLOCK Element Example */
div {
  width: auto;     /* 100% of parent width (forces next element to new line) */
  height: auto;    /* same as content height (0px if no content inside element) */
}

/* INLINE Element Example */
span {
  width: auto;     /* same as content width (0px if no content inside element) */
  height: auto;    /* same as content height (0px if no content inside element) */
}
```
