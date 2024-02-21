---
# General Information
category: "User Interfaces"
number: 8
type: "Lecture"
title: "Javascript"
created: "2024-02-12T12:17:29Z"
link:
  { text: "slides", href: "/assets/notes/W24-user-interfaces/slides/08.pdf" }
---

# Intro to Javascript

## What is Javascript ?

One of the most popular and widely used programming languages in the world and big companies build entire applications on it (or its variations like TypeScript).

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
      console.log("Hello World");
      // From DevTools to source code
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

Unlike the languages that we are familiar with (C#, Java, etc.), JavaScript let's us change the variable type on the fly. However imagine not having static types and you are working at a large company with a bunch of unexpected runtime errors and now it's your job to fix it.

Well sometime around 2010 another smart guy named Anders Hejlsberg got fed up with this issue and created a new language.

He called it TypeScript.

And with TypeScript came the introduction of static typing, which enables developers to define types for variables, also came the introduction of interfaces, generics, access modifiers, and advanced tooling integrations to maintain complex & large codebases.

Knowing TypeScript is outside the scope of this course, however taking time to appreciate JavaScript now will set you up for success in your future courses that tackle this topic. TypeScript's ability to address real-world development challenges while enhancing developer productivity and code quality has solidified its position as a preferred language for many developers and organizations.

# Real world application

Let's re-create the story feature on instagram :)

## Step 1 - What is the Layout?

Well it seems that this is a section of articles with a an image and title

```html
<section>
  <article>
    <img />
    <p></p>
  </article>
</section>
```

## Step 2 - What is the Mock Content?

When making a feature, use what ever mock data you want ;) it's your demo, you call the shots

```html
<body>
  <section>
    <article>
      <img src="./images/charming-cat.jpeg" />
      <p>cute_cat_96</p>
    </article>
  </section>
</body>
```

and let's style the body in a separate file called `styles.css` while we are getting started (we want to stay true to the designs)

```css
body {
  background-color: black;
}
```

## Step 3 - How do we style the img?

The product manager demands circular images, squares won't do

```css
img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}
```

## Step 4 - what about the text?

Where is the font? Let's figure it out in dev tools and bring that style to out source code

```css
p {
  color: white;
}
```

Now the font is clashing with vibe of the rest of the product. We are building a brand here, so we need a font that matches our product vision. First let's link an external font.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  rel="stylesheet"
/>
```

... and go back to our original work ...

```css
p {
  color: white;
  font-family: "Roboto", sans-serif;
}
```

note how i have a fallback font in case our external font doesn't work !!

## Step 5 - Why is everything not centered ?

Well the article content is expanding to take the full space and the image has a defined width. Let's use the fact that block type elements have an inner display :)

```css
article {
  text-align: center;
}
```

## Step 6 - How do we add the ring?

What is a ring if not a circular border? First in our html let's add a div where we will define that border. I want to decouple the ring logic from the img logic and we can go back & remove un necessary containers once we have a working feature :)

```html
<body>
  <section>
    <article>
      <div class="ring">
        <img src="./images/charming-cat.jpeg" />
      </div>
      <p>cute_cat_96</p>
    </article>
  </section>
</body>
```

and in our css file let's add the below class

```css
.ring {
  border: 3px pink solid;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  padding: 5px;
}
```

## Step 7 - We have a ring now, but i can't interact with it. Now what?

Let's start working on our JavaScript logic. Based off of the spider function we wrote last class, we know we have the power to edit the styling of elements dynamically. Let's do that.

```html
<body>
  <section>
    <article>
      <div class="ring">
        <img src="./images/charming-cat.jpeg" />
      </div>
      <p>cute_cat_96</p>
    </article>
  </section>
  <script>
    // Step 2
    function watchStory() {
      // but how are we calling the method?
      // ... and how are we changing the style ??
    }
  </script>
</body>
```

## Step 8 - First let's figure out how we need to activate the method?

Well we need a button that let's me have access to the attribute `onclick` to be able to call this `watchStory()` method that we defined. Let's do that.

```html
<body>
  <section>
    <article>
      <button onclick="watchStory()">
        <div class="ring">
          <img src="./images/charming-cat.jpeg" />
        </div>
      </button>
      <p>cute_cat_96</p>
    </article>
  </section>
  <script>
    function watchStory() {}
  </script>
</body>
```

## Step 9 - It's ugly again.

Now we need to modify the css of the button to be hidden. Let's go back to DevTools and mess around with that.

```css
button {
  background-color: black;
  border: 0;
}
/* and let's fix other styling issues while we are at it */
article {
  text-align: center;
  width: 230px; /* the width of our ring and image was not aligning with the text - small hack for now*/
}
```

## Step 10 - Let's modify the class

What happens if we set the visibility of the ring class to hidden?

```html
<body>
  <section>
    <article>
      <button onclick="watchStory()">
        <div class="ring">
          <img src="./images/charming-cat.jpeg" />
        </div>
      </button>
      <p>cute_cat_96</p>
    </article>
  </section>
  <script>
    function watchStory() {
      document.querySelector(".ring").style.visibility = "hidden";
    }
  </script>
</body>
```

oh no !! Everything Disappears !! Why ? This is because the div has children elements (our image) that we do not want to disappear. ok so let's take a new approach.

- The first thing we should consider is that we don't want the interaction of one user story to impact other user stories
- And 2, we do not want to have the styling of the parent div to impact children elements && for padding changes to be affected either.

So let's make a new class as a new strat called `noRing` that we add only when a user clicks. maybe we want to change the look and feel of this class in 2 years, who knows.

```css
.ring,
.noRing {
  border: 3px pink solid;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  padding: 5px;
}

.noRing {
  border: 3px black solid; /* this is a bad move, how would you fix it?*/
}
```

Let's chain noRing to be made up as the same properties as ring, since our new class is just a new variant extending this class. As a hacky solution for now, noRing will have a border of `3px`.

## Step 11 - Updating our script

and now because we do not want multiple user stories to impact each other, so let's add a unique id to each possible thing that we could click. In our case we only have one story so let's create an id of `1` for our div and implement that display logic.

```html
<body>
  <section>
    <article>
      <button onclick="watchStory()">
        <div id="1" class="ring">
          <img src="./images/charming-cat.jpeg" />
        </div>
      </button>
      <p>cute_cat_96</p>
    </article>
  </section>
  <script>
    function watchStory() {
      document.getElementById(1).classList.add("noRing");
    }
  </script>
</body>
```

and just like that we recreated the entire look interaction of insta stories in like 15 minutes

## Step 12 - REFACTORING

However a lot of our approaches could be improved. How would you improve my code?

My `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="./styles/styles.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <title>Document</title>
  </head>
  <body>
    <section>
      <article>
        <button onclick="watchStory()">
          <div id="1" class="ring">
            <img src="./images/charming-cat.jpeg" />
          </div>
        </button>
        <p>cute_cat_96</p>
      </article>
    </section>
    <script>
      function watchStory() {
        document.getElementById(1).classList.add("noRing");
      }
    </script>
  </body>
</html>
```

My `styles.css` file:

```css
body {
  background-color: black;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}

p {
  color: white;
  font-family: "Roboto", sans-serif;
}

article {
  text-align: center;
  max-width: fit-content;
}

.ring,
.noRing {
  border: 3px pink solid;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  padding: 5px;
}

.noRing {
  border: 3px black solid;
}

button {
  background-color: black;
  border: 0;
}
```

# Exercise

For those that have completed most of the lab, take my code and do it better then me :^)

The rest of y'all feel free to use this period to finish up your lab!

# Acknowledgements

The lecture content was adapted from Larry Fagen's & Michael Haaf's course notes, as well as inspired by [Programming with Mosh](https://www.youtube.com/watch?v=W6NZfCO5SIk)
