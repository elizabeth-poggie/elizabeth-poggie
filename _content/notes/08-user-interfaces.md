---
# General Information
title: "Lecture 8"
subtitle: "Intro to Javascript"
date: "2024-02-12T15:30:35Z"
course: "User Interfaces"
type: "Lecture"
---

# Intro to Javascript

## What is Javascript

One of the most popular and widely used programming languages in the world and big companies build entire applications on it (or its variations like TypeScript).

IN north america the average salary of a JavaScript developer typically ranges between $70,000 and $120,000,

You can be in the frontend, backend, and full stack dev just with javascript.

## Backend vs Frontend vs Full Stack

## How is Java script used?

- Web / Mobile Apps
- Real-time Networking Apps
- Command-line Tools
- Games

## Where does JavaScript code run

Originally designed to run only in browsers. All browsers have a JS Engine that can execute java script code

For example, in firefox and chrome, the Javascript engine that's used is spider monkey and v8.

## But what happens if we want to run JavaScript outside of the browser?

Well in 2009, a smart dude named Ryan Dahl took the open-source JavaScript engine that was in chrome and embedded it inside a C++ program. He called this Node.

Now with Node we can run JavaScript outside of a browser allowing us to use JavaScript for the backend for our web and mobile applications.

## Why is this so neat?

- Cross-Platform: Node.js is compatible with various operating systems, including Windows, macOS, and Linux, making it highly versatile for developing applications across different platforms.

- Package Management: Node.js comes with npm (Node Package Manager), the largest ecosystem of open-source libraries and modules for JavaScript, enabling developers to easily integrate third-party packages into their projects.

- Single Programming Language: With Node.js, developers can use JavaScript for both client-side and server-side development, streamlining the development process and fostering code reuse between the front end and back end.

- High Performance: Node.js leverages the V8 JavaScript engine, renowned for its high performance and optimization, resulting in fast execution speeds for JavaScript code.

Node.js is widely adopted by developers and companies for building scalable, high-performance applications, including web servers, APIs, microservices architectures and real-time chat applications.

# Getting Started

## DevTools (ofc)

Open up Chrome DevTools and in the console tab we can write any JavaScript code we desire.

```js
console.log("Hello World");
```

press enter and we get that printed below :)

## Our first program

Where do we put our JavaScript code?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

We can add it in the head section or in the body section. the best practice is to put the script element as the last element in the body section.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <script>
      //put JavaScript HERE !!!!!
    </script>
  </body>
</html>
```

... but why?

The browser parses this file from top to bottom, so if we put the script element in the head section and we happen to have a lot of JavaScript code, it will get busy parsing that code instead of actually rendering that page.Imagine opening up a page and seeing a blank screen. `(bad news)`

by adding it at the bottom of the body section we can be confident that the browser rendered all other elements before the script tag. WHat if we want to modify an element before it's been rendered `(i m p o s s i b l e)`

## From DevTools to Code

Anything that can be typed in Chrome DevTools can be typed in this script tag

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <script>
      console.log("Hello World"); // From DevTools to source code
    </script>
  </body>
</html>
```

# Separation of concerns

Now imagine you are working at a company doing fancy stuff in JavaScript. We do not want to store our JavaScript code inside our html.

Would you store your socks in the oven? Your snacks in the shower? NO. The idea here is similar, we want to separate the responsibilities of our logic.

- CSS is about STYLING
- HTML is about LAYOUT
- JavaScript is about BEHAVIOR

Add a new file and create `index.js` to create the below file structure

```md
lab
├── index.html
├── index.js
```

with the only line of code in `index.js` being ...

```js
console.log("Hello World");
```

however we still need to reference that external file in our source code to tell the browser where our script lives.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <script src="./index.js"></script>
  </body>
</html>
```

# Variables

The fundamental concept of almost all programming languages are variables.

# Acknowledgements

Lecture content was inspired by [Programming with Mosh](https://www.youtube.com/watch?v=W6NZfCO5SIk),
