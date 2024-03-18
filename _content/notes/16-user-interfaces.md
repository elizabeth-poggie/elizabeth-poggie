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

Because HTML uses relative concepts like percentage of parent width to compute width, and because the top visible parent (the body element) is by default a block element, pure HTML automatically resizes its elements in response to the devices and viewports of the user.

## For example...

Although [marxists.org](https://www.marxists.org/reference/archive/hegel/works/hl/hl512.htm#HL2_524) is a straightforward single-column website, it demonstrates responsiveness across various devices and maintains resilience to the ever-evolving landscape of frontend technology. This adaptability is crucial for ensuring accessibility across different platforms. In contrast, [bible.ca](https://www.bible.ca/) lacks mobile-friendly design, and has not aged well with the passage of time.

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

Our design choices should be invisible. we’re not trying to say, “this is for you.” That should inherently resonate. What we’re trying to avoid are scenarios where someone encounters something that communicates, “this is for someone else.” For those that are more curious about this topic, you can can read about it [here](https://webdesign.tutsplus.com/designing-accessible-content-typography-font-styling-and-structure--cms-31934a) and [here](https://www.interaction-design.org/master-classes/how-to-design-inclusive-and-accessible-experiences), however this is merely marks the beginning.

## Search Engine Optimization

Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.

Content providers began optimizing websites for search engines in the mid-1990s, as the first search engines were cataloging the early Web. However, some web content providers got a bit carried away with this and went as far to also manipulate some attributes within the HTML source of a page in an attempt to rank well in search engines. By the late 90s, search engine designers recognized that content providers were making efforts to rank well in their search engine and that some providers were even manipulating their rankings in search results by stuffing pages with excessive or irrelevant keywords.

However this made the search engine providers a bit angry. Since the success and popularity of a search engine are determined by its ability to produce the most relevant results to any given search, poor quality or irrelevant search results could lead users to find other search sources. In other words, if a content provider had a high ranking website that led to a useless result, this could cause the user to not only reject the content provider, but the search engine provider as well. Bad news.

Consequently, search engines responded by developing more complex ranking algorithms, taking into account additional factors that were more difficult for content providers to control && manipulate. For those entitled companies that employ overly aggressive techniques to beat the system, the search engine providers responded by banning the client websites of these companies from search results :^)

For the purposes of this class, use websites that rely on semantic HTML to help search engines to quickly determine the content of a webpage. This will not only make search results about your webpage more accurate, but increase the likely hood of ranking higher for a search result.

For those curious about page rank algorithms and flow networks, invite you to explore further on the course page of my [Algorithms and Data Structures](http://luc.devroye.org/252.html) class at McGill, taught by Luc Devroye.

# Acknowledgements

[CSS Tricks](https://css-tricks.com/reader-mode-the-button-to-beat/)
