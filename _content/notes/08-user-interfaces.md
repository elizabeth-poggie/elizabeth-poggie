---
# General Information
title: "Lecture 8"
subtitle: "Intro to Javascript"
date: "2024-02-12T15:30:35Z"
course: "User Interfaces"
type: "Lecture"
---

# Intro to Javascript

## What is Javascript ?

One of the most popular and widely used programming languages in the world and big companies build entire applications on it (or its variations like TypeScript).

IN north america the average salary of a JavaScript developer typically ranges between $70,000 and $120,000,

You can be in the frontend and backend just with javascript.

## Backend vs Frontend vs Full Stack

Backend developers primarily work on the server-side of web applications, managing data storage and processing. They handle tasks such as database management, server configuration, authentication, authorization, and business logic implementation.

At John Abbott, the classes you would want to focus on are ...

- Databases
- Application Development |
- Application Development ||
- Application Development |||

Frontend developers focus on the client-side of web applications, dealing with user interface (UI) design, interactivity, and user experience (UX). They are responsible for building responsive layouts, implementing client-side functionality, and optimizing web applications for performance and accessibility.

At John Abbott, the classes you would want to focus on are ...

- User Interfaces
- Web Programming |
- Web Programming ||
- Web Programming |||

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

Node.js is widely adopted by developers and companies for building scalable, high-performance applications, including web servers, APIs, microservices architectures and real-time chat applications. It's immense impact on software development practices, business agility, and the broader technology ecosystem undoubtedly underscores its significance and value in the digital era.

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

## ... but why?

The browser parses this file from top to bottom, so if we put the script element in the head section and we happen to have a lot of JavaScript code, it will get busy parsing that code instead of actually rendering that page. Imagine opening up a page and seeing a blank screen? `(bad news)`

By adding our `<script>` at the bottom of the body section we can be confident that the browser rendered all other elements before the script tag.

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

The fundamental concept of almost all programming languages are variables. In JS, to declare a variable use "let"

```js
let name = "John Abbott";
console.log(name);
```

Variables cannot be a reserved keyword. we do not need to memorize which ones are reserved as our IDE will yell at us the moment we try.

```js

let if; // not legal ❌
let first-name; // not legal ❌
let 1hello; // not legal ❌
let firstName; // ✅
let true; // not legal ❌

```

# Constants

In real world scenarios, we do not want the value of a variable to change. we want to make predictable programs and variables that are unpredictable means we have programs that are unpredictable. `(many bugs, bad news)`

```js
const pi = 3.14; // 🥧
```

if you do not need to re-assign, always opt for constants when working with JavaScript

# What are the types in JavaScript?

JS is a "dynamic" language with two categories of variable types:

- primitives
  - string
  - boolean
  - number
  - undefined
  - null
- references (don't worry about this for now)

however in JavaScript, the typing is not strict so if we decide to change the value of a variable, the type will change accordingly. For example, what will the below print?

```js
let name = "wow";
console.log(typeof name);
name = 42;
console.log(typeof name);
```

Unlike the languages that we are familiar with (C#, Java, etc.), JavaScript let's us change the variable type on the fly. However imagine not having static types and you are working at a large company with a bunch of unexpected runtime errors and now it's you job to fix it.

Well sometime around 2010 another smart guy named Anders Hejlsberg got fed up with this issue and created a new language called TypeScript.

And with TypeScript came the introduction of static typing, which enables developers to define types for variables, also came the introduction of interfaces, generics, access modifiers, and advanced tooling integrations to maintain complex & large codebases.

Knowing TypeScript is outside the scope of this course, however taking time to appreciate JavaScript now will set you up for success in your future courses that tackle this topic. TypeScript's ability to address real-world development challenges while enhancing developer productivity and code quality has solidified its position as a preferred language for many developers and organizations.

# Acknowledgements

Lecture content was inspired by [Programming with Mosh](https://www.youtube.com/watch?v=W6NZfCO5SIk),
