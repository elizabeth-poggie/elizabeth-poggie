---
# General Information
category: "User Interfaces"
number: 2
type: "Lab"
title: "Mastering HTML Semantics"
created: "2024-02-02T12:17:29Z"
---

# Overview

- Worth: This lab will count towards the ‘lab’ portion of your final grade at 10%
- Due: February 16, 2024 (by ‘end of day’)
- Hand In: A `.zip` file containing your folder (work) onto LEA in the appropriate place.
- Late Penalty: Late submissions lose 10% per day to a maximum of 3 days. Nothing is accepted after 3 days and a grade of zero will be given.

# Goal

In this lab we will create a web page structure using HTML, and to customize website style with template & custom CSS stylesheets.

In the previous lab, we learned about different HTML elements to establish a basic website. However, this came with limitations for the layout and style. In this session, we will extend our knowledge by incorporating the appropriate HTML structural elements tailored for defining website layouts.

# Starter Code

Download the starter code on Lea

# Getting Started

For all web development, it is best to ensure you have an isolated working environment in your file system to organize your HTML, CSS, and other web assets. To get started, follow the steps below:

- Create a new project folder dedicated for this assignment called `lab2-your-name` in VSCode.
- Download the provided `.zip` file above and extract it inside your new project folder. You should have a folder structure like the below figure
- You have been provided a starter `index.html` file, though it is incomplete. Your index.html will need to meet the requirements attached.

```md
lab2-your-name
├── index.html
├── images
│ ├── icon.png
│ ├── fav-1.jpg
│ ├── fav-2.jpg
│ ├── fav-3.jpg
│ ├── fav-4.jpg
├── css
│ ├── style.css
│ ├── custom.css
```

Once your `index.html` file is correctly marked-up, by applying the the `./css/style.css` style rules it will look something like the following example. Afterwards, you will get some practice making custom CSS rules by editing the provided `./css/custom.css`› file.

# Example

![example](/assets/notes/W24-user-interfaces/labs/02/demo.png)

# HTML Structure Requirements (15 marks)

For each of the requirements below, you are expected to choose the correct HTML element.

A `<link>` to the default external CSS style provided.

A header, containing:

- A distinct text heading next to an icon image
- A navigation menu that is a unordered list of 5 links (these links should just return the user to the same page)

Separated main content area, containing two columns:

- A section containing at least 4 paragraphs of content and at least one `<h2>` and one `<h3>`. These headers should have id attributes as well as content.
- A sidebar containing at least 4 image thumbnails (a small image wrapped in an anchor linking to a large image. See w3schools.com: "How TO - Thumbnail".) These thumbnail images should have appropriate alt attributes.

A footer containing:

- A paragraph with your name/student number
- An address

# CSS Structure Requirements (15 marks)

Once you’ve finished the above HTML requirements, the default CSS style should give you the same layout and style as the website seen in the Example above. You may have noticed that there were two CSS files provided: one of them is there for you to create a custom style.

In order to start using the new custom.css file, insert the following HTML snippets into your `index.html` file:

```html
<head>
  <!-- ... rest of your head code -->

  <!-- You are expected to understand the purpose of the <link> element below! -->
  <link rel="stylesheet" id="custom-css" href="./css/custom.css" />

  <!-- Fix this CSS tag so that the button will not be hidden! -->
  <style>
    #css-swapper {
      display: none !important;
    }
  </style>

  <!-- You are not expected to understand the <script> tag code -->
  <!-- For now, it's enough to know that inserting this tag will allow the button to control whether your custom css file will apply or not.-->
  <script>
    const customCssSheet = document.querySelector("#custom-css");
    window.onload = (event) => {
      customCssSheet.disabled = true;
    };

    function swapcss() {
      customCssSheet.disabled
        ? (customCssSheet.disabled = false)
        : (customCssSheet.disabled = true);
    }
  </script>
</head>

<body>
  <!-- You should place this button in the header, to the left of the main title text -->
  <button id="css-swapper" onclick="swapcss();">Swap CSS!</button>

  <!-- rest of your body code -->
</body>
```

Now it’s time to make a custom style. You should apply at least the following changes:

- Make all headings use an external, serif webfont with `Georgia` and `serif` as fallbacks
- Make all paragraphs use an external, sans-serif webfont with `Verdana` and `sans-serif` as fallbacks.
- Make the level one headings pink, using the CSS color keyword hotpink.
- Give level one headings a 10px dotted border-bottom with a color specified in the RBG format.
- Make level two headings italic.
- Give all odd-numbered p elements a blue background and white text using HEX color codes.
- Give all `p` elements that are descendants of the `footer` element a font-size of `10px`
- Using pseudo-classes, make all links red (using HSL colors) and bold when hovered
- Using pseudo-classes, make all nav bar links have a red background when clicked.
- Using a “class” attribute (you will need to edit the index.html file), apply text-shadow to all text elements you give a certain class.

NOTE: https://fonts.google.com/ is a good source of external webfonts :)

# Grading

You may make whatever other changes you wish, as long as the above requirements are met.

Your submitted work must be clear, complete, and YOUR OWN. Be prepared to explain any aspect of your work in person if required. Failure to defend your work or complete a similar question in person may result in the nullification of any grade received for this lab.
