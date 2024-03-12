---
# General Information
category: "User Interfaces"
number: 13
type: "Lecture"
title: "Real World Application"
created: "2024-03-01T12:17:29Z"
---

# Step 0) What are we making?

Let's remake the chat feature on instagram.

# Step 1) What are the requirements?

To figure out the bare minimum requirements to create the feature, our first step is to analyze the core functionalities:

- How do we send messages?
- How do we receive messages?
- How do we view messages?
- How do we look at message history?

Next, we need to think about the "user flow":

- What steps is the user taking to accomplish specific tasks?
- How do these tasks relate to the core functionalities we want to implement?

And finally, now we need to decide how are we building this:

- React?
- React Native?
- HTML, JS, CSS?

# Step 2) Planning

Let's design it.

```text
 ________________________________
|                                |
|             header             |
|                                |
|________________________________|
 ________________________________
|           search bar           |
|________________________________|
 ________________________________
|             nav bar            |
|________________________________|
 ________________________________
|   _____                        |
|  |     | chat item             |
|  |     | .....                 |
|  |_____|                       |
|________________________________|
 ________________________________
|   _____                        |
|  |     | chat item             |
|  |     | .....                 |
|  |_____|                       |
|________________________________|

...

```

What to keep in mind:

- Does our initial plan capture all the requirements?
- Are there any edge cases that have not yet been considered? (e.g. what is the look when there are no chat items?)
- If there are last minute changes, will we be able to accommodate them?
- Is our plan scalable? How maintainable is it?
- Are there any pieces of code i can re-use that i have already written?

# Step 3) Creating a (rough) layout

Open up an `index.html` file and generate the boilerplate HTML code using the `!` command. In our `<body>` tag, let's paste the below (taking inspiration directly from the design)

```html
<main>
  <header>...</header>
  <input />
  <nav>...</nav>
  <section class="chat-list">
    <button class="chat-item">
      <img class="profile" />
      <div>
        <h3>...</h3>
        <p>...</p>
      </div>
      <img class="camera-icon" />
    </button>
  </section>
</main>
```

ok, it's ugly. now what? Let's create some default styles.

# Step 4) Default Styles

## Typography

Let's grab some fonts from Google Fonts that seems to match the design the best.

```css
@font-face {
  font-family: "Roboto Light";
  src: url("./fonts/Roboto/Roboto-Light.ttf");
}
@font-face {
  font-family: "Roboto Bold";
  src: url("./fonts/Roboto/Roboto-Medium.ttf");
}
* {
  font-family: "Roboto Light", Georgia, serif; /* default font */
}
h1 {
  font-family: "Roboto Bold";
  font-size: 1.5rem;
}
h2 {
  font-family: "Roboto Bold";
  font-size: 0.8rem;
  margin: 0;
}
h3 {
  font-size: 0.8rem;
  margin: 0;
}
p {
  font-size: 0.75rem;
  padding-top: 2px;
  margin: 0;
  color: grey;
}
```

## Buttons

```css
button {
  /* We want to toss out all the default styling, we want our own custom look here. */
  appearance: none;
  padding: 0;
  background: none;
  border: none;
  text-align: unset;
}

button:hover,
.filter-grey {
  filter: invert(57%) sepia(3%) saturate(9%) hue-rotate(351deg) brightness(87%) contrast(
      81%
    );
}
```

Now that we have a rough layout and default styling, lets build the design component by component. By taking this approach, we will be able to reuse our styles & HTML code snippets as we go about the project.

# Step 5) Header

```html
<header class="chat-header">
  <button>
    <img src="./svg/left-chevron.svg" width="30" />
  </button>
  <h1>top_cats_2k24</h1>
  <button class="down-chevron-icon">
    <img src="./svg/down-chevron.svg" width="18" />
  </button>
  <button class="pen-square-icon">
    <img src="./svg/pen-square.svg" width="24" />
  </button>
</header>
```

```css
.chat-header {
  display: flex;
  align-items: center;
  padding: 0 10px 0 0;
}

.chat-header .down-chevron-icon {
  padding-left: 2px;
}

.chat-header .pen-square-icon {
  margin-left: auto;
  padding-left: 20px;
}
```

# Step 6) Search Bar

```html
<div class="chat-search">
  <input type="text" placeholder="Search" />
</div>
```

```css
.chat-search {
  display: flex;
}
input {
  display: flex;
  border: none;
  background-color: #e7e9eb;
  border-radius: 2%;
  padding: 5px;
  margin: 0 10px 0 10px;
  padding-left: 10px;
  width: 100%;
}
```

# Step 7) Navigation

```html
<nav class="chat-nav">
  <button>
    <h2>Messages</h2>
  </button>
  <button class="filter-grey">
    <h2>Requests</h2>
  </button>
</nav>
```

```css
.chat-nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 10px 10px;
}
```

# Step 8) Chat Item

```html
<button class="chat-item">
  <img class="profile" src="./images/chonky-cat.jpeg" />
  <div class="info">
    <h3>chonky_boi_420</h3>
    <p>Seen</p>
  </div>
  <img class="camera-icon filter-grey" src="./svg/camera.svg" width="20" />
</button>
```

```css
.chat-item {
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
}

.chat-item .profile {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}

.chat-item .camera-icon {
  margin-left: auto;
}

.chat-item .info {
  padding-left: 10px;
}
```

# Step 9) chat list

Now that we have it working with one chat item, let's add some more.

# Step 10) Refactoring

How would you improve my code?

My `index.html`:

```html
<body>
  <!-- demo box -->
  <img class="iphone" src="./images/phone.png" />
  <main class="iphone-viewport">
    <!-- header -->
    <header class="chat-header">
      <button>
        <img src="./svg/left-chevron.svg" width="30" />
      </button>
      <h1>top_cats_2k24</h1>
      <button class="down-chevron-icon">
        <img src="./svg/down-chevron.svg" width="18" />
      </button>
      <button class="pen-square-icon">
        <img src="./svg/pen-square.svg" width="24" />
      </button>
    </header>
    <!-- search bar -->
    <div class="chat-search">
      <input type="text" placeholder="Search" />
    </div>
    <!-- navigation -->
    <nav class="chat-nav">
      <button>
        <h2>Messages</h2>
      </button>
      <button class="filter-grey">
        <h2>Requests</h2>
      </button>
    </nav>
    <!-- chat list -->
    <section class="chat-list">
      <!-- chat item 1 -->
      <button class="chat-item">
        <img class="profile" src="./images/chonky-cat.jpeg" />
        <div class="info">
          <h3>chonky_boi_420</h3>
          <p>Seen</p>
        </div>
        <img
          class="camera-icon filter-grey"
          src="./svg/camera.svg"
          width="20"
        />
      </button>

      <!-- chat item 2 -->
      <button class="chat-item">
        <img class="profile" src="./images/sleepy-cat.png" />
        <div class="info">
          <h3>sleepy_bean</h3>
          <p>Will there be fish tho... • 2w</p>
        </div>
        <img
          class="camera-icon filter-grey"
          src="./svg/camera.svg"
          width="20"
        />
      </button>

      <!-- chat item 3 -->
      <button class="chat-item">
        <img class="profile" src="./images/sad-cat.jpg" />
        <div class="info">
          <h3>yee-paw</h3>
          <p>Active 16m ago</p>
        </div>
        <img
          class="camera-icon filter-grey"
          src="./svg/camera.svg"
          width="20"
        />
      </button>

      <!-- chat item 4 -->
      <button class="chat-item">
        <img class="profile" src="./images/box-cat.jpeg" />
        <div class="info">
          <h3>Fluffcrate_9000</h3>
          <p>Active 5m ago</p>
        </div>
        <img
          class="camera-icon filter-grey"
          src="./svg/camera.svg"
          width="20"
        />
      </button>
    </section>
  </main>
</body>
```

My `styles.css`:

```css
/* demo box */
.iphone {
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 420px;
}

.iphone-viewport {
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 375px;
  height: 812px;
  display: flex;
  padding: 5px;
  padding-left: 10px; /* to make sure the content ends up centered */
  flex-direction: column;
}

/* typography */
@font-face {
  font-family: "Roboto Light";
  src: url("./fonts/Roboto/Roboto-Light.ttf");
}

* {
  font-family: "Roboto Light", Georgia, serif; /* default font */
}

@font-face {
  font-family: "Roboto Bold";
  src: url("./fonts/Roboto/Roboto-Medium.ttf");
}

h1 {
  font-family: "Roboto Bold";
  font-size: 1.5rem;
}

h2 {
  font-family: "Roboto Bold";
  font-size: 0.8rem;
  margin: 0;
}

h3 {
  font-size: 0.8rem;
  margin: 0;
}

p {
  font-size: 0.75rem;
  padding-top: 2px;
  margin: 0;
  color: grey;
}

/* default button styling */
button {
  appearance: none;
  padding: 0;
  background: none;
  border: none;
  text-align: unset;
}

button:hover,
.filter-grey {
  filter: invert(57%) sepia(3%) saturate(9%) hue-rotate(351deg) brightness(87%) contrast(
      81%
    );
}

/* chat header */
.chat-header {
  display: flex;
  align-items: center;
  padding: 0 10px 0 0;
}

.chat-header .down-chevron-icon {
  padding-left: 2px;
}

.chat-header .pen-square-icon {
  margin-left: auto;
  padding-left: 20px;
}

/* search bar */
.chat-search {
  display: flex;
}

input {
  display: flex;
  border: none;
  background-color: #e7e9eb;
  border-radius: 2%;
  padding: 5px;
  margin: 0 10px 0 10px;
  padding-left: 10px;
  width: 100%;
}

/* navigation */
.chat-nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 10px 10px;
}

/* Chat List & Item */
.chat-list {
  padding: 5px;
}

.chat-item {
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
}

.chat-item .profile {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}

.chat-list .chat-item:hover {
  background-color: #f8f8f8;
  filter: none;
}

.chat-item .camera-icon {
  margin-left: auto;
}

.chat-item .info {
  padding-left: 10px;
}
```

# Exercise

Take my code and do it better then me :^)
