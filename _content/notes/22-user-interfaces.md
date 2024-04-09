---
# General Information
category: "User Interfaces"
number: 21
type: "Lecture"
title: "Publishing a website"
created: "2024-04-08"
---

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
