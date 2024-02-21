---
# General Information
category: "User Interfaces"
number: 6
type: "Lecture"
title: "Fonts"
created: "2024-02-06T12:17:29Z"
link:
  { text: "slides", href: "/assets/notes/W24-user-interfaces/slides/06.pdf" }
---

# Fonts

## Font Families

In CSS, fonts are organized into groups of Font Families.

The font family concept (also known as typeface) extends beyond CSS to typography in general.

- Each typeface (or font family) has its own distinct appearance and is often used to convey a certain mood, tone, or message in written communication.
- It is important to distinguish typeface from font; a font refers to a specific variation or style (e.g. bold, italic) within a typeface family (e.g. Times New Roman)

## Serif

Small extra strokes are at the ends of the letter’s defining strokes. These letters are narrow and take less horizontal space. In other words, these fonts are proportional.

## Sans-Serif

Letters are drawn without serifs, however like serif fonts, these letters are also proportional and take less horizontal space.

## Monospace

Fonts in the monospace family force all letters to take the same amount of horizontal space, independent of the width of the strokes defining the letter. These are NOT proportional.

# Changing Fonts

## Web-safe font-stacks.

The fonts available to the browser depend largely on the fonts installed in the operating system. [The full list can be seen here.](https://www.w3schools.com/cssref/css_websafe_fonts.php)

When we define a font in CSS, we need to make sure to include a series of fallback fonts, from most specific to least specific. For example:

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

Font names composed of more than one word need to be written between quotations, such as “Times New Roman” above.

# Font Inheritance

Typographic properties (color, font-size, font-family, etc.) are inherited by descendent elements. This means we do not need to apply these styles to every single element in the HTML markup

Instead we can apply them to a root element like the `<body>` and those properties are inherited by descendant elements (like `<p>`, `<a>`, etc.) automatically.

```css
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
```

We will learn more about inheritance in CSS as it applies to non-typographic elements next week :)

# External Font Faces

## Intro

So far, all of the fonts that we have seen (Verdana, Times New Roman, etc.) are Web Safe – fonts that are commonly available on most operating systems.

This is good, because we can use them (as well as a few fallbacks and the generic font family fallback) without needing to worry whether every single person who uses our website has those fonts installed on their computer.

However if all websites used the same few dozen fonts, the web would be a lot more boring. Fortunately, there are techniques that allow us to include external fonts in our CSS.

A popular location to get external fonts is [Google Fonts](https://fonts.google.com/)

## Linking to our CSS

Include the provided link in the head section of your HTML file, just like you would link a CSS Style sheet

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

...and add the font-family property to your CSS...

```css
p {
  font-family: "Roboto";
}
```

... and then DO NOT FORGET TO ADD A FALL-BACK FONT !!

```css
p {
  font-family: "Roboto", sans-serif;
}
```

## Customizing Fonts

[@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) specifies a custom font with which to display text; the font can be loaded from either a remote server or a locally-installed font on the user's own computer. For example:

```css
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

# Customizing Typographic Properties

Font size can be set with the font-size property. For this property, you can use absolute or relative units.

Absolute size

- Sets the text to a fixed size.
- Users cannot adjust it (eg. increase font size using browser or operating system settings).

Relative size:

- Size relative to another element in the page (see CSS Units below).
- Users can adjust it.

## Recommended sizing approaches

For font-size it is recommended that you use relative CSS units over fixed units. You need to be aware of where your HTML element is inheriting these units from. The two recommended approaches are:

em

- `1 em` is equal to the font size set on the parent element of the current element we are styling.
- Be careful when styling nested elements.

rem

- `1 rem` is equal to the font size set on the root element of the document ( the `<html>`), not the parent element.

```css
html {
  font-size: 20px; /* Overwrites the default font set by the browser! */
}

h1 {
  font-size: 1rem; /* 1rem = 1 * html font-size */
}

.p1 {
  font-size: 1.2rem;
}
.p2 {
  font-size: 0.7rem;
}
```

## Popular text modifications

- `font-weight` property sets how bold the text is.
- `text-decoration` sets the decorations on fonts (mainly used to change default underline on links).
- `text-align` is used to control how text is aligned within its containing content box.
- `font-style` Used to turn italic text on and off.
- `text-transform` Transform you font to upper case, capitalised, full-width, etc.
- `text-shadow` applies drop shadows to your text.
- … and you can read more here on all the [other properties](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#text_layout) you might need for your application.

No need to memorize what the common values are, we can rely on our IDE for that :)

# Intro to JavaScript

## What is it?

JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.

JavaScript is an INTERPRETED language - meaning each instruction is decoded and run by your browser on the CLIENT SIDE.

Your browser must receive the JavaScript source code to be able to run it - so yes, a program is effectively sent down to your browser.

## Change component style according to user interaction

```html
<button onclick="goAwaySpider()"><h1>GO AWAY</h1></button>
<section>
  <img id="no" src="./images/spider.webp" width="400" />
</section>
<script>
  function goAwaySpider() {
    document.querySelector("#no").style.visibility = "hidden";
  }
</script>
```

# CSS Exercises

[Download them here](/assets/notes/W24-user-interfaces/exercises/week04-styling-text-exercises.zip)

# Instructions

## Fonts

- download 3 of free-to-use fonts. Use a suitable service to generate bulletproof `@font-face` code.
- Apply your body font to the whole page, and your heading font to your headings.

## Font Styling

```html
<h1>Style me please</h1>
<h2>and me!!!</h2>
... and me as well !!
```

- Give the page a site-wide `font-size` of `10px`
- Give your headings and other element types appropriate font-sizes defined using a suitable relative unit.
- Give your body text a suitable `line-height`. (Between about 1.4 and 1.6 is ideal)
- Give your headings a little bit of `letter-spacing`
- Give the first paragraph after each heading in the `section` a little bit of text-indentation, say 20px.

## Link Styling

```html
<a>I need a special style</a>
<a>how will you decide my styling when i am hovered?</a>
```

- Give the link, visited, focus, and hover states a different color each
- Make it so that links are underlined by default, but when you hover or focus them, the underline disappears.
- Give the active state a noticeably different styling so it stands out nicely, but make it still fit in with the overall page design.
- Make it so that external links have the external link icon inserted next to them.

## Bonus points 👀

- Bonus points for all those that create a button that makes an image disappear.

# Acknowledgements

The exercises in these directories, are shared with minor modification from [The Odin Project (TOP)](https://github.com/TheOdinProject/css-exercises) ([MIT License](https://github.com/TheOdinProject/css-exercises/blob/main/LICENSE))

The lecture content was adapted from Michael Haaf's course notes and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model).
