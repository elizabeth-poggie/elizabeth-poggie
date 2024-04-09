---
# General Information
category: "User Interfaces"
number: 21
type: "Lecture"
title: "Github"
created: "2024-04-08"
---

# Github

## What is it?

It's where the world builds software. You will use it for the rest of your career.

## What can you make on github?

Anything. Some ideas to get you started:

- Launch a startup
- Build a business
- Create community
- ... and for the purposes of this class, create a website.

## Who uses github?

- Netflix
- Facebook
- Reddit
- Airbnb
- ... and so much more.

If you are creating software in the modern age, you do it using `git`.

# Version Control

Great software is never built alone, it's done as a team. Github let's you work seamlessly with others in parallel on the same codebase.

For example,

```text
Let's say this is me
👩‍💻
and this is my boy Kajo
👨‍💻
```

... and both of us need to work together to make a chat application. How do we do that without github? Well, we could take each of our code separately ...

```text
(me) 👩‍💻 ==> 📄 ==> 📂 (on poggie's 💻)
(kajo) 👨‍💻 ==> 📄 ==> 📂 (on kajo's 💻)
```

... and afterwards, each of us could add any missing portions from the other person's source code by copying and pasting.

```text
📂 (on poggie's 💻) + 📂 (on kajo's 💻) = 📂 (src code - version final)
```

But imagine that instead of 2 engineers working together, it's thousands. Instead of keeping track of 3 versions, it's millions.

That would suck.

That's why we love Github.

## Revised strategy

Let's take the same example and work the magic of `git` this time

```text
(me) 👩‍💻 ==> 📄 ==> 📂 (on poggie's 💻)
(kajo) 👨‍💻 ==> 📄 ==> 📂 (on kajo's 💻)
```

# GitHub Pages

To access the official documentation, visit [here](https://pages.github.com/). The recipe provided below includes additional comments and explanations meant for the classroom.

## Recipe

Head over to [GitHub](https://github.com/) and create [a new public repository](https://github.com/new) named `username.github.io`, where username is your username (or organization name) on GitHub.

Create a folder for organizing your source code. For instance, maybe do not use the `Desktop` folder and instead create a folder of your own with a meaningful name. For example `repos` is what I will choose.

```md
~
├── Documents
├── Desktop
│ ├── repos
├── Library
├── Music
├── Pictures
```

Go to the folder where you want to store your project, and clone the new repository. In our case the folder we are choosing is `repos` and run the below command:

```bash
git clone #<link-to-the-repo>#
```

Move into `username.github.io` and create a _very_ simple hello world project:

```bash
# Move into your repo
cd username.github.io

# ... and create a very simple website
echo "Hello World" > index.html
```

... apply our changes ...

```bash
git add --all

git commit -m "Initial commit"

git push -u origin main
```

... and finally go to `https://username.github.io` in your browser :)

## TODO

Review internet fundamentals for web publishing: domain names, IP addresses
Review git fundamentals for storing code online: commits, repositories, pull/push
Create complete webpage applying best practises from HTML/CSS/JS knowledge learned throughout the semester
