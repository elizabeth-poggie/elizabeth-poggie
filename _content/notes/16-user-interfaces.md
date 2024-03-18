---
# General Information
category: "User Interfaces"
number: 16
type: "Lecture"
title: "Responsive Design"
created: "2024-03-18T12:17:29Z"
---

# Responsive Design

Have you ever been on a website that sucks to use? When you were trying to access my notes on mobile in the first weeks of the class, was it annoying to use?

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

## What can simulate in DevTools

- mobile devices
- varying device widths
- media queries
- different resolutions. In DevTools, you can actually simulate different device pixel ratios.

## QUIZ: Can we do this in DevTools?

- Capture what the user sees when they try to take a screenshot of our website?
- See what a screen rotation does to our website?
- Can we simulate a Desktop device that is also a touch screen?
- Sometimes we try to access pages on a website and the WIFI sucks, can we simulate that on Chrome?
- What happens if we are located in South Korea, can we see what this will look like on our website?

# Exercise 1

Complete [this tutorial](https://developer.chrome.com/docs/devtools/device-mode). In my time at Morgan Stanley, SSENSE && MaintainX, the tools featured in the tutorial were a regular part of my workflow and a requirement to use prior to shipping any feature.

You have 20 minutes and we will continue the lecture.

Have fun :^)

# Responsive by Default

Our very first lab was strangely the most responsive of the labs we have made so far. (Despite containing no extra CSS)

```text
 ________________________
|                        |
|         header         |
|                        |
|________________________|
 ________________________
|                        |
|         content        |
|                        |
|                        |
|                        |
|________________________|
 ________________________
|                        |
|         footer         |
|________________________|

```

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

## How?

Pure HTML automatically resizes its elements in response to the devices and viewports of the user.

HTML uses relative concepts like percentage of parent width to compute width, and the top visible parent (the body element) is by default a block element and its properties are inherited by all child elements.

## For example...

Although [marxists.org](https://www.marxists.org/reference/archive/hegel/works/hl/hl512.htm#HL2_524) is a straightforward single-column website, it demonstrates responsiveness across various devices and maintains resilience to the ever-evolving landscape of web development. This adaptability is key for ensuring accessibility across different platforms and appealing to wider audiences. In contrast, [bible.ca](https://www.bible.ca/) lacks mobile-friendly design, and has not aged well with the passage of time.

# Semantic HTML Responsivity

On top of default HTML behavior, there are a few more improvements we can make using semantic HTML element choices.

What's the difference between the responsivity and usability of the two following layouts?

```text
    *** LAYOUT 1 ***
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

```

```text
    *** LAYOUT 2 ***
 ________________________
|                        |
|          div           |
|                        |
|________________________|
 _______ ________________
|       |                |
|  div  |                |
|       |                |
|_______|     div        |
|                        |
|                        |
|                        |
|________________________|
 ________________________
|                        |
|          div           |
|________________________|

```

## Inclusivity

Browser reader mode discards elements like <aside>, <header>, <footer> etc. to focus on the <main> and <article> content of a webpage, allowing users to easily get a distraction && advertisement free experience of a website. Reader mode is not available when semantic markup is not present.

What is one of the main ingredients that leads to a successful website? Appealing to as many people as possible. The more people you can proactively accommodate from the outset, the more people you don’t unintentionally alienate.

Our design choices should be invisible. we’re not trying to say, “this is for you.” That should inherently resonate. What we’re trying to avoid are scenarios where someone encounters something that communicates, “this is for someone else.” For those that are more curious about this topic, you can can read about it [here](https://webdesign.tutsplus.com/designing-accessible-content-typography-font-styling-and-structure--cms-31934a) and [here](https://www.interaction-design.org/master-classes/how-to-design-inclusive-and-accessible-experiences), however this is just the beginning.

## Search Engine Optimization

Search engine optimization (SEO) is the art of improving the quality and quantity of website traffic by improving its visibility on search engine result pages. It involves optimizing various aspects of a website or web page to align with the algorithms used by search engines, ultimately aiming to rank higher for relevant search queries.

The origins of SEO can be traced back to the mid-1990s when the first search engines emerged and began cataloging the rapidly growing World Wide Web. Website owners and content providers soon realized the importance of being visible in search results and started optimizing their sites accordingly. However, in their quest for better rankings, some resorted to questionable tactics, such as keyword stuffing and manipulating HTML attributes.

By the late 1990s, search engine developers became aware of these manipulative practices and recognized the need to refine their algorithms to ensure the relevance and quality of search results. They understood that allowing websites to artificially inflate their rankings could undermine the credibility of the search engine itself, leading users to seek alternative search sources. (Bad news)

To combat manipulation and ensure the integrity of their search results, search engines evolved their algorithms, incorporating more sophisticated criteria that were harder for website owners to exploit. This included factors like the quality of content, user experience, and relevance to the search query.

For ethical website owners and businesses, the key to SEO success lies in adhering to best practices and focusing on providing valuable, relevant content that genuinely addresses the needs of their target audience. Employing semantic HTML markup, which helps search engines understand the structure and context of web content, is crucial for improving search result accuracy and increasing the likelihood of ranking higher.

For those curious about page rank algorithms and flow networks, I invite you to explore further on the course page of my [Algorithms and Data Structures](http://luc.devroye.org/252.html) class at McGill, taught by Luc Devroye. Understanding these concepts can provide insight into the principles that govern search engine behavior and inform effective SEO strategies.

## Summary

Semantic HTML doesn’t just improve the responsivity of your layout, it also also improves the responsivity of individual HTML elements. For example

```html
<!-- clickable, focusable and understood by screen-readers by default -->
<button>Click ME</button>

<!-- not understood by screen-readers by default -->
<div>Click ME</div>
<!-- 👈 restyled/javascripted -->
```

```html
<!-- alt attributes allow non-sighted users to understand your content -->
<img
  src="./cool-cat.jpg"
  alt="I can tell non-sighted people what this cool cat looks like"
/>
```

```html
<!-- screenreaders automatically generate Tables of Contents -->
<!-- from your heading elements. -->
<h1>Wow</h1>
<h2>Wow</h2>
<h3>Wow</h3>
```

As we can see, there is a large overlap between Responsive Design and Accessibility. In a lot of ways, Responsive Design can be viewed as a component within the broader realm of accessible web design :)

## SO, what is CSS even good for?

What if we want to make a complex layout?

We can’t make elements stack on each-other, or “flow” horizontally, with just HTML. Rather, it emphasizes the importance of knowing when CSS is truly necessary and understanding its implications on the page design. Adding CSS without comprehension may inadvertently detract from the intended design of the page.

Consider CSS a tool in your tool belt, wield it carefully.

# Exercise 2

[HTML Block and Inline Elements](https://www.w3schools.com/htmL/html_blocks.asp)

# Acknowledgements

[CSS Tricks](https://css-tricks.com/reader-mode-the-button-to-beat/)
