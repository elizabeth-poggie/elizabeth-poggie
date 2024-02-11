---
# General Information
title: "Lecture 5"
subtitle: "HTML Semantics"
date: "2024-02-06T15:30:35Z"
course: "User Interfaces"
type: "Lecture"
slides: "/assets/notes/W24-user-interfaces/slides/05.pdf"
---

# Document and website structure

## Intro

So far we have seen container elements such as div and span to add structure to our web pages, however HTML also defines other block-level elements for structuring entire website sections such as headers, navigation menus, and main content columns.

These are structural elements that are known as “semantic” elements and will be particularly helpful for lab 2.

## What are Semantic Elements?

A semantic element clearly describes its meaning to both the browser and the developer. For example:

- non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
- semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

## Why Semantic Elements?

- Accessibility for users with disabilities: Screen readers and other assistive technologies rely on semantic HTML to convey the correct context and relationships between elements.
- Search engine optimization: Search engines use semantic HTML to better understand and index content. Properly structured and semantically marked-up content can positively impact search engine rankings, making it easier for users to find relevant information.
- Maintainability and Readability: Semantic HTML enhances the maintainability and readability of code.
- User Experience: Semantic HTML promotes consistent rendering across different devices and browsers. It helps ensure that content displays correctly on various platforms, contributing to a seamless user experience.
- Future-Proofing: Adhering to HTML semantics makes websites more future-proof. As browsers and technologies evolve, semantic HTML is likely to remain compatible and adaptable, minimizing the need for frequent updates.
- … and so much more !!

## What is an example of a good layout?

There is no single way to organize the semantic elements in a page. As long as you use elements for their intended purpose, your semantics will be correct.

# Basic Sections of a Document

Web pages tend to share similar standard components such as ...

## Header

Represents a group of introductory content. It usually is a big strip across the top of a web page
If it is a child of `<body>` it defines the global header of a webpage, but if it's a child of an `<article>` or `<section>` it defines a specific header for that section (try not to confuse this with titles and headings).

```html
<header>
  <h1>My Cool Portfolio</h1>
  <h4>Brought to you by POGGIE</h4>
</header>
```

The header generally contains:

- A big heading
- One or more heading elements (`<h1>` - `<h6>`)
- Logo or Icon
- Tagline

## Navigation Bar

Contains the main navigation functionality for the page.

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="./pages/about.html">About</a></li>
    <li><a href="./pages/contact.html">Contact Us</a></li>
  </ul>
</nav>
```

Contains links to the site's main sections represented by:

- Menu buttons
- Links
- Tabs

## Footer

Represents a group of end content for a page and is reused across multiple pages.

```html
<footer>
  <p>@2024 POGGIE Inc.</p>
  <p>John Abbott College</p>
</footer>
```

Generally contains:

- Fine print
- Copyright notices
- Contact info

## Side Bar

contains content that is not directly related to the main content but can provide additional information indirectly related to it. This is often placed directly inside `<main>`

```html
<aside>
  <p><a href="#">Home</a></p>
  <p><a href="./pages/about.html">About</a></p>
  <p><a href="./pages/contact.html">Contact us</a></p>
</aside>
```

Generally contains:

- Links
- Quotes
- Ads
- Glossary entries
- Author biography

## Main Content

A big area in the center that contains most of the unique content of a given webpage
Represented by the tag `<main>` which can be used only once per page, with various content subsections represented by `<article>`, `<section>`, and `<div>` elements. Ideally the `<main>` tag is placed directly inside the body and shouldn’t be nested within other elements.

```html
<main>
  <!-- lots of stuff -->
</main>
```

## Article Content:

Encloses a block of related content that makes sense on its own without the rest of the page, in other words independent, self contained content.

```html
<article>
  <p>I am a blog post</p>
  <p>... or am i a user comment ???</p>
</article>
```

Some examples:

- A blog post
- Product cards
- User comments

## Section Content

Used for grouping together a single part of the page that constitutes one single piece of functionality. It is considered best practice to begin each section with a heading.

```html
<section>
  <h2>I am a section so i begin with a heading</h2>
  <article>
    <p>{content}</p>
  </article>
</section>
```

Examples:

- List of Chapters
- Set of article headlines
- Set of summaries

# A few other key non-layout specific semantic elements

## The break element

Defined by the tag `<br>`, this creates a line break in a paragraph. It is the only way to force a rigid structure in a situation where you want a series of fixed short lines, such as in an address. For example:

```html
<p>
  John Abbott College <br />
  21 275 Rue Lakeshore Road, <br />
  Sainte-Anne-de-Bellevue, QC H9X 3L9 <br />
</p>
```

… however, do not use it to create space in a design—use margins and padding instead !!

## Thematic break element

Defined by the tag `<hr>` denotes a thematic change in the text (such as a change in topic or scene).
Visually it just looks like a horizontal line.

… however do not use it to create a horizontal line—use CSS borders !!

## Buttons

```html
<button>I am a cool button</button>
```

Represents a interactive, clickable button.
Should be used in forms and with JavaScript.
… however do not use to link to another page—use the <a>
tag instead !!

## Button vs link

You can make a button that acts like a link or make a link that looks like a button and you can also style a button to look like a link and a link to look like a button… but you should avoid
doing this.

Links and buttons have different roles.

Using a button as a link can cause issues for users who navigate using their keyboard or who use a screen reader!

```html
<>
  <a><button>I am a bad example</button></a>
  <button><a>I am also bad</a></button>
</>
```

Use a link ...

- To redirect a user to a new page
- To redirect a user to another section within the same page
- To redirect a user to an email or a phone number
- ... TLDR: Links “send” you somewhere

Use a button ...

- To open or close something
- To send a form
- In most cases, JavaScript engages with buttons
- ... Buttons “do” something

## And so much more ...

[See the full list here](https://learntheweb.courses/topics/html-semantics-cheat-sheet/)

# Non-semantic containers

Sometimes you'll come across a situation where you can't find an ideal semantic element to group some items together or wrap some content. This is where our inline container (span) and block-level container (div) come into play.

```html
<div>I am a block-level container</div>
<span>I am an inline container >:0</span>
```

However, avoid using divs in favor of semantic elements whenever possible. For machines, a div means a generic container even if it has been labeled with an id. Semantic elements are better because they are cleaner for developers and understandable to machines.

# Planning a simple website

To plan a website we need to think about what content we need to display and how our pages are related.

Step 1 - Content - Dump all info about what you want your page to be

Step 2 - Structure Content into Groups - Sort all these content items into groups, to give you an idea of what parts might live together on different pages.

Step 3 - Common elements - Note down what seems to be in common between each of these groups. These are elements you will be re-using on each page

Step 4 - Site Structure - Draw a rough sketch of what you might want the structure of each page to look like now that we know what the groups of content are & what is in common

Step 5 - Map - Have a bubble for each page on your site, and draw lines to show the typical workflow between pages. You might also want to include notes about how things might be presented.

# Exercises

[here✨](https://www.w3schools.com/html/html5_semantic_elements.asp)
