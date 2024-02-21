---
# General Information
category: "User Interfaces"
number: 4
type: "Lecture"
title: "The DOM & Dev Tools"
created: "2024-02-05T12:17:29Z"
link:
  { text: "slides", href: "/assets/notes/W24-user-interfaces/slides/04.pdf" }
---

# HTML vs DOM

HTML (Hypertext Markup Language) and the DOM (Document Object Model) are related concepts in web development but serve different purposes.

## What is HTML?

HTML is a markup language used to structure content on the web. It provides a set of tags and attributes that define the structure of a web page. For example when you use a web browser to request a page, the server returns HTML like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a hypertext document on the World Wide Web.</p>
  </body>
</html>
```

However the browser parses the HTML and creates a tree of objects. This is what is known as the DOM.

## What is the DOM?

The DOM is a programming interface that represents the structure of a document as a tree of objects. It provides a dynamic way to interact with and manipulate the content and structure of an HTML document. For example:

```md
html
├── head
├── title
├── body
│ ├── h1
│ ├── p
```

In other words, the DOM represents the live, interactive version of the document that can be manipulated through scripts.

## What is the relationship between the DOM and HTML?

Unlike HTML, the DOM is dynamic and can be manipulated through scripting languages like JavaScript. When JavaScript adds, removes, or edits nodes, the DOM becomes different than the HTML.

Overall, HTML provides the initial structure, and the DOM represents the live, interactive model that can be modified based on user actions.

# The DOM and Dev Tools

## Intro

Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools can help you edit pages on-the-fly and diagnose problems quickly, which ultimately helps you build better websites, faster.

The DevTools UI can be a little overwhelming, but, if you take some time to get familiar with each tab to understand what's possible, it will make you a faster dev. These tools were a regular part of my frontend development experience at all my companies.

The reason why these tools are so useful is:

- User-Friendly Interface: Chrome DevTools offers an intuitive and user-friendly interface that allows developers to navigate and access its features with ease.
- Built-in Accessibility: DevTools includes a variety of features that facilitate accessibility testing. Developers can inspect accessible names and properties, simulate screen reader experiences, and identify potential accessibility issues directly from the browser.
- Element inspection and modification: Developers can inspect and modify HTML, CSS, and JavaScript in real-time.
- Live Editing and Styling: DevTools enables live editing of styles, making it easy to experiment with CSS changes and immediately see the impact on the rendered page. This helps streamline the design and debugging process.
- … and so much more!!

## Inspecting a Node

When you're interested in a particular DOM node, Inspect is a fast way to open DevTools and investigate that node. Right click the node you want to inspect and select “inspect”

The elements panel of the dev tool opens up the initial page structure. The node you are inspecting is highlighted in the DOM tree

## Inspecting a Node from Dev Tools

Select the inspect icon in the top-left corner of DevTools and select another node you are curious about. This new node will now be highlighted in the DOM tree.

Inspecting a node is the first step towards viewing and changing a node’s styles

## Searching for Nodes

Focus your cursor on the Elements panel.
Press `Control+F` or `Command+F` (Mac). The Search bar opens at the bottom of the DOM Tree.
Type in the text or CSS selector in the search bar for the node you want to investigate. The Elements panel selects the first matching result in the DOM tree and rolls it into view in the viewport.

## Editing the DOM Tree

You can edit the DOM and see how those changes affect the page. In the elements page, try changing the text and see how those changes are reflected.

## Editing Attributes

Testing CSS styles in browser developer tools is a valuable practice for several reasons, providing developers with an efficient and interactive way to refine and troubleshoot styles during the development process. Some of the key benefits are:

- Live Editing: Developer tools allow for live editing of CSS styles directly in the browser. This means developers can experiment with different styles, values, and layouts in real-time, observing the immediate impact on the page without having to modify the actual source code.
- Rapid Prototyping: Developers can quickly prototype and iterate on design ideas without the need to switch back and forth between code editors.
- Debugging and Troubleshooting: When encountering styling issues or unexpected behavior, developer tools provide a visual representation of the applied styles and the associated HTML elements.
- Copy & Pasting: Developer tools often provide the ability to copy styles directly to the clipboard so you can transfer your changes to your course code.

## To edit attributes

Open up inspector and double-click the element you want to modify
In the `styles` view, under `element.styles {}`, you can directly affect the CSS attributes of an element.

## Forcing Element State

Forcing an element state in HTML developer tools is a valuable feature that allows developers to simulate different states or conditions of an element for testing and debugging purposes.
This capability is particularly useful in the context of dynamic web applications where styles or behavior may change based on user interactions, input, or specific events.

Elements often have styles associated with pseudo-classes such as `:hover`, `:active`, `:focus`, etc. Forcing these states in developer tools allows you to inspect and test the styles applied to an element when it is in a particular state.

To edit pseudo-classes:

- Open up inspector and double-click the element you want to modify
- In the “styles” view, select the :hov to open up the “Force element state” panel
- Select the state you want to force on the element

## Forcing Element state with the Command Pallet

Press `Control+Shift+P` or `Command+Shift+P` (Mac) to open the Command menu, you can directly affect the state of an element from here.

## Device Mode

You can simulate different devices directly on chrome

# CSS Exercises

[Download them here](/assets/notes/W24-user-interfaces/exercises/week03-foundations-exercises.zip)

# Instructions

These exercises were written as a series of CSS related tasks intended to complement the HTML and CSS content on TOP. We will use them to complement the course content in our course as well.

When doing these exercises, please use all course documentation and online/offline resources you need to accomplish them. You are _not_ intended to have any of this stuff memorized -- with practice you will become more familiar with these properties naturally.

## How To Use These Exercises

For each exercise, read the README thoroughly before starting any work. Each README has a "Self Check" list. Use this to make sure you haven't missed any important details in your implementation.

Make your edits in the `index.html` and/or the `style.css` files in order to make the output in your browser look like the Desired Outcome image(s). Depending on the instructions of the exercise, you may only need to make edits in one of these files.

I will (eventually) provide solutions for these exercises Keep in mind that the solutions I provided are not the only solutions. If your solution differs wildly, but still passes the self-check criteria, feel free to ask about me about it (or your classmates! Feel free to ask things at any time).

## Some Hints

Unless listed in the self-check section, do not worry about getting the exact pixel value for things like margin, padding and font-size. These exercises are intended to test your knowledge of CSS, not your ability to guess that a screenshot is using `font: sans-serif bold 16px`, or that the margin is _exactly_ `42px`.

You may need to add some elements to your HTML to get things into the right spot. (For the first few exercises we make it explicit when this needs to
happen.)

You may need to add more selectors to your CSS file. The first few exercises have almost everything already done for you, but as you progress you'll find that you need to add more and more to get the correct result.

# Acknowledgements

The lecture content was adapted from [Chrome for Developers](https://developer.chrome.com/docs/devtools/overview/), specifically their section on [Get started with viewing and changing the DOM](https://developer.chrome.com/docs/devtools/dom/) and [View and Change CSS](https://developer.chrome.com/docs/devtools/css/).

The exercises are shared with minor modification from [The Odin Project (TOP)](https://github.com/TheOdinProject/css-exercises) ([MIT License](https://github.com/TheOdinProject/css-exercises/blob/main/LICENSE))
