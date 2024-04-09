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

If you are building software in the modern age, you are building it with `git`.

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

Let's take the same example and work the magic of `git` this time.

Let's say that this is the OG folder that contains the foundations of our project:

```text
(OG folder) 🗂️
```

I can now can `clone` the OG folder to my local computer, stealing all it's contents. Essentially I am creating my own version of work history `branch`ing off from that source code.

```text
(OG folder) 🗂️ -
                \
                 \
                  \_______ 👩‍💻  (me)
```

Here, I have the freedom to create features, squash bugs, and experiment without altering the original source code. That way, when i accidentally create a bomb, it won't affect the OG folder.

```text
(OG folder) 🗂️ -
                \
                 \
                  \_______ 👩‍💻 💣 (me featuring an explosion)
```

Why is this so neat? Well, if me and my boy Kajo are working together and im stuck handling a bomb:

```text
                       --- 👨‍💻 🎨 (kajo creating art)
                     /
                    /
(OG folder) 🗂️ -----
                \
                 \
                   ------ 👩‍💻 💣 (me featuring an explosion)
```

He could `merge` his own changes back to the OG folder:

```text
                       --- 👨‍💻 🎨 (kajo creating art) ---
                     /                                  \
                    /                                    \
(OG folder) 🗂️ ----------------------------------------------------> 🗂️ (OG folder V.2)
                \
                 \
                   ------ 👩‍💻 💣 (me featuring an explosion)
```

So that by the time I've diffused the bomb, i can `pull` his updates :)

```text
                       --- 👨‍💻 🎨 (kajo creating art) ---
                     /                                  \
                    /                                    \
(OG folder) 🗂️ ----------------------------------------------------> 🗂️ (OG folder V.2)
                \                                             /
                 \                                           /
                   ------ 👩‍💻 🧯 (me featuring no bomb) ------
```

... And thus, no thoughts of copy and pasting need to be experienced. Github take's care of my version, his version, and the OG version with ease so we can get things done FAST 🏎️

# Why is version control cool?

## History

You can easily know exactly which files changed, who made those changes, and when those changes occurred. For example, let's say i could find out exactly who, when, and where the bug started.

```text
👩‍💻 🔎 💣 (me discovering the root cause of the bomb)
```

## Backup

GitHub archives all versions of the code. For instance, imagine if both Kajo's and my computers spontaneously combusted before we could save the code onto a USB drive. Well, going back to our original approach, now everything is lost:

```text
(me) 👩‍💻 ==> 📄 ==> 🔥 📂 🔥 (on poggie's 🔥 💻 🔥)
(kajo) 👨‍💻 ==> 📄 ==> 🔥 📂 🔥 (on kajo's 🔥 💻 🔥)
```

But with Git, now that even if both of our computers are engulfed in flames, we can rest easy knowing that once we get new computers, we can pick up exactly where we left off :)

```text
                       -------- 👨‍💻 🔥 -----------
                     /            🔥             \
                    /             🔥              \
(OG folder) 🗂️ ---------------------------------------> 🗂️ (OG folder V.2)
                \                🔥           /
                 \              🔥           /
                   ---------- 👩‍💻 🔥 ---------
```

## ... and so much more !!!

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

Move into `username.github.io` and create a very simple "Hello World" webpage:

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

Review git fundamentals for storing code online: commits, repositories, pull/push
