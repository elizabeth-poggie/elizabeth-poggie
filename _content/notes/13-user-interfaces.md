---
# General Information
category: "User Interfaces"
number: 13
type: "Lecture"
title: "Real World Application"
created: "2024-03-1T12:17:29Z"
---

# Let's make the chat feature from instagram

```html
<body>
  <img class="iphone" src="./images/phone.png" />
  <main class="iphone-viewport">
    <!-- Step 1) title -->
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
    <!-- Step 2) search bar -->
    <div class="chat-search">
      <input type="text" placeholder="Search" />
    </div>
    <!-- Step 3) navigation tabs -->
    <nav class="chat-nav">
      <button>
        <h2>Messages</h2>
      </button>
      <button class="filter-grey">
        <h2>Requests</h2>
      </button>
    </nav>
    <!-- Step 4) chat list -->
    <section class="chat-list">
      <!-- Step 5) chat item -->
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

      <!-- LAST STEP) once you have a working product for 1 chat item, lets add more mock data :) -->
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

```css
/* Step 0) create a demo box */
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
  flex-direction: column;
}

/* Step 7) Typography */
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

/* Step 8) Default button styling */
.filter-grey {
  filter: invert(57%) sepia(3%) saturate(9%) hue-rotate(351deg) brightness(87%) contrast(
      81%
    );
}

button {
  appearance: none;
  padding: 0;
  background: none;
  border: none;
  text-align: unset;
}
button:hover {
  filter: invert(57%) sepia(3%) saturate(9%) hue-rotate(351deg) brightness(87%) contrast(
      81%
    );
}

/* Step 9) Chat header */
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

/* Step 10) Search bar */
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

/* Step 11) Chat navigation */
.chat-nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 10px 10px;
}

/* Step 12) Chat List & Item */
.chat-list {
  padding: 5px;
}

.chat-item {
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
}

.profile {
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
