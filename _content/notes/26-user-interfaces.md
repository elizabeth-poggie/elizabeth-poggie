---
# General Information
category: "User Interfaces"
number: 26
type: "Lecture"
title: "VSCode Extensions && Commands"
created: "2024-04-29"
---

# 🚨 PLEASE NOTE 🚨

If you want your midterm grades back faster, you will have to wait for me to implement the new layout to be less annoying

# VSCode Commands

The less you rely on the mouse the better. Although VSCode allows you to use the mouse for everything making the tool approachable to newbies, although for virtually everything you can do with a mouse, you can do FASTER with a keyboard shortcut.

```text
Mouse
❌ Slow
❌ Repetitive
❌ You don't look as cool

Keyboard
✅ FAST
✅ Optimal
✅ Your nerd friends will think your cool
✅ Your normie friends will think you are a nerd
✅ Your grandparents will be further confused at what you do for a living
```

Want to increase your productivity significantly? Want to spend less time working on your assignments? There is a lot to learn, however just knowing a few will literally change your life.

Like learning an instrument, it will feel awkward at first and require some practice. Over time, you will soon master the art of the keyboard and let go of your long term friend, the mouse, in favor of greener pastures.

# Command Pallet

## What is it?

The VSCode command palette is a feature in VSCode that allows you to access various commands and features VERY quickly.

## What can you do here?

It's a searchable interface that allows you to:

- Type commands
- Run commands
- Find related actions
- Find files
- Change settings
- ... and so much more

## How do you access it?

To ensure you always remember how to access the command palette, i have created the mnemonic "Control Papa" for PC users, and "Command Papa" for mac users. <3

```md
| PC 🖥️          | Mac 🍎         |
| :------------- | :------------- |
| Ctrl+P         | Cmd+P          |
| "Control Papa" | "Command Papa" |
```

By default, executing the command above will display all the files available in your current project. However, this is just the beginning. NOW, input the following into your command pallet

```text
>
```

Here, you have access to all the commands available in VSCode. Alternatively, you can also open this directly using the `F1` key.

# Format on Save

Never think about formatting your code again.

- Add [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to your extensions
- Open up the `Settings` using the command pallet:
  - Keyboard shortcut: `Ctrl-P`
  - Activate the VSCode command options: `>`
  - Type "Preferences: Open Settings (UI)"
- Under `Editor: Format On Save`, select the option to "Format a file on save..." to activate the feature
- Now, under `Code Actions on Save` "blah blah blah", select the option `Edit in settings.json`. This should open up something more or less like this:

```json
{
  // ... other stuff ...
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {}
}
```

- These are the activated settings for your VSCode. For me, I have a lot of customization given i have been adding things here over the years, however yours might be a bit more sparse in comparison.
- Now from the `Prettier - Code formatter` Extension page, paste in the below:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

- to get something along the lines of ...

```json
{
  // ... other stuff ...
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

- Finally, restart your VSCode, and Voila, things format on save 🪄

## Exercise ❤️

Follow the above instructions to allow for autosaving and see what happens when you save all your labs.

# Spell Checker

Can't spell? You're not alone.

- Add [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) to your extensions
- All spelling mistakes are now highlighted with a blue underline, to correct it run the following:

```md
| PC 🖥️  | Mac 🍎 |
| :----- | :----- |
| Ctrl+. | Cmd+.  |
```

# Color Coordinating your VSCode

- Add [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) to your extensions
- Press `F1` to open the command pallet
- Type `Peacock`
- Select `Peacock: Change to a favorite color`
- Select and enjoy 💅✨

# Stick Scrolling

Tired of having hundreds of lines of code and not knowing what class or function you are in? Look no further.

- Go to the Settings
- Under `Editor` › `Sticky Scroll: Scroll With Editor`, active the option "Enable Scrolling of Sticky Scroll with the editors horizontal scrollbar"
- Enjoy :^)

# Opening VSCode

Are you a terminal purest? Love bash? [VSCode Command Line Interface (CLI) has you covered.](https://code.visualstudio.com/docs/editor/command-line)

- First let's get the CLI for VSCode functionality set up.
- Press `F1` to open up the command pallet
- Type `Install 'code' command in PATH` in the command pallet
- Now verify the installation by opening up your terminal and typing in `code --help` to ensure that the CLI is operational.
- Now we are ready to work some magic 💅
- Navigate to a directory you want to open using your terminal
- Now run the below to launch your VSCode :^)

```bash
code .
```

- You can also open up specific files by running ...

```bash
code i-am-a-cool-file.md
```

## Exercise ❤️

Follow the above instructions and try opening up your labs using this trick.

# Local Finder

You can use `Ctrl-F` or `Cmd-F` to look for symbols / pieces of text in your file, however this is what the normies do. Instead, let`s open up the Command Pallet and type the below:

```text
@
```

This lists all the symbols, variables, and functions in the current file. Alternatively, if you want to be EVEN faster, run:

```md
| PC 🖥️        | Mac 🍎      |
| :----------- | :---------- |
| Ctrl+shift+. | Cmd+shift+. |
```

Now you have a dropdown menu.

# Global Finder

Ok cool we have a faster way to find things in the current file, but what about for our entire project? Open up the Command Pallet and type the below:

```text
#
```

Now type the symbol you are looking for :^)

# 3 Devs for the Price of 1

Tired of writing repetitive CSS properties and want the computer to do it for you? Made a mistake and you now need to change the name of a variable in 100 places at once? Yes you can do that with VSCode.

Instead of highlighting the line you want to edit with a mouse, run `Ctrl-G` and type the line number you want to edit to take you directly there

```md
| PC 🖥️ & Mac 🍎                    |
| :-------------------------------- |
| Ctrl+G+2                          |
| "Control get going - line number" |
```

If you want to move around use arrow keys, you can with this:

```md
| PC 🖥️ & Mac 🍎 |
| :------------- |
| <-- OR -->     |
```

And now use the `shift` key if you want to highlight something:

```md
| PC 🖥️ & Mac 🍎                  |
| :------------------------------ |
| shift+⬅️ OR shift+➡️            |
| "Shimmy left" OR "Shimmy right" |
```

Or if navigating one character at a time is too slow for you, you can move word by word with the below command:

```md
| PC 🖥️              | Mac 🍎             |
| :----------------- | :----------------- |
| Ctrl+⬅️ OR Ctrl+➡️ | Ctrl+➡️ OR Ctrl+⬅️ |
```

What happens if you want to find a match on similar words? To find a match run

```md
| PC 🖥️  | Mac 🍎 |
| :----- | :----- |
| Ctrl+D | Cmd+D  |
```

Once you have matched all the same snippets, you can now edit them at the same time :^)

## Exercise ❤️

Consider the following JavaScript

```js
hello() {
    console.log("Edit me");
    alert("Hello there");
}

goodbye() {
    console.log("Edit me");
    alert("Goodbye !!");
}

scream() {
    console.log("Edit me");
    alert("AHHHHHHHH");
}
```

Try to edit all the `console.log("Edit me");` at the same time using VSCode Commands.

# VSCode MultiCursor

If that's not cool enough for you, you can also use this command to put the cursor in multiple places.

```md
| PC 🖥️     | Mac 🍎       |
| :-------- | :----------- |
| Alt+Click | Option+Click |
```

This is especially useful for repetitive CSS properties.

## Exercise ❤️

Consider the following HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo</title>
    <style>
      nav {
        background-color: lightpink;
        height: 10vh;
      }
      div {
        background-color: peachpuff;
      }
      footer {
        background-color: lightblue;
        height: 20vh;
      }
      aside {
        float: left;
        height: 20vh;
        background-color: lightgreen;
      }
      main {
        height: 50vh;
      }
      section {
        height: 100%;
        background-color: lightcoral;
      }
    </style>
  </head>
  <body>
    <nav>i am a cool navbar</nav>
    <main>
      <aside>wow i am a side bar</aside>
      <section>
        <header>
          <div>wow look at this div</div>
        </header>
        wow i am some cool main content
      </section>
    </main>
    <footer>wow a footer</footer>
  </body>
</html>
```

Try adding `padding` to all the CSS selectors at the same time using VSCode commands.

# Renaming HTML Tags

You can use the above strat when it comes toi editing repetitive code, however if you are dealing specifically with `HTML`, then add the extension [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) to be even faster

This will auto-magically rename the closing tag when you edit the opening tag.

# Renaming variables/functions across projects

```text
"There are only 2 hard things in Computer Science:
Cache invalidation and naming things"

Phil Karlton
```

Naming your code is hard so you will often be renaming things:

- Right click on the variable/function you want to rename
- select `Find All References`
- Now use the `rename symbol` option to safely rename your stuff across multiple files
- Have fun 💅 ✨

# Cutting

If you want to move a line of code, the traditional way to do it is

- select the line
- copy it
- delete it
- ... and past it on the new line you want it to be at

However this approach is lame.

If your cursor is already on the line you want to cut, all you need to do is:

```md
| PC 🖥️  | Mac 🍎 |
| :----- | :----- |
| Ctrl+x | Cmd+x  |
```

no highlighting necessary 💅✨

# Even faster?

This lets you "move" a line of code

```md
| PC 🖥️            | Mac 🍎                 |
| :--------------- | :--------------------- |
| Alt+⬆️ or Alt+⬇️ | Option+⬆️ or Option+⬇️ |
```

and this let's you duplicate lines of code

```md
| PC 🖥️                        | Mac 🍎                             |
| :--------------------------- | :--------------------------------- |
| Alt+shift+⬆️ or Alt+shift+⬇️ | Option+shift+⬆️ or Option+shift+⬇️ |
```

## Exercise ❤️

Now you try it :^)

# Comments

If you are commenting out lines of code line by line, this is for you.

Select a block of code that you want to comment and run...

```md
| PC 🖥️  | Mac 🍎 |
| :----- | :----- |
| Ctrl+/ | Cmd+/  |
```

now you can comment out entire blocks of code at once (instead of line by line)

# Better comments

Add the extension [better comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments). Now your comments are color coordinated depending on the category of comment.

- `TODO` - orange
- `!` - red
- `?` - blue
- `*` - bright green

And yes you configure the colors to be custom.

# Terminal

There are many sneaky ways of opening up the terminal in VSCode.

## Slowest way

On the top navigation, select `Terminal` followed by `New Terminal`

## Slowish way

At the bottom left of the screen, click the section of the bar that contains:

```text
ⓧ 0 ⚠️ 0 ℹ 0
```

This opens up all the problems, outputs, console, and terminal of your code.

## Fastest way

```md
| PC 🖥️ & Mac 🍎 |
| :------------- |
| Ctrl+`         |
```

# Multi - Terminals

Usually you always need more than one terminal. Select the `+` icon to add a new terminal

To keep things organized, right click on one of your terminals.
Now you can change the `icon`, `color` and `name`. Enjoy.

## Exercise ❤️

Now you try it :^)

# Multi-Window

It is rare when any one developer has only one VSCode window open. How do we open multiple VSCode windows as fast as possible?

The normies would select navigate to the top navigation, select `File` and click `New Window`. However we can do soooooo much better

```md
| PC 🖥️        | Mac 🍎      |
| :----------- | :---------- |
| Shift+Ctrl+N | Shift+Cmd+N |
```

Your welcome.

# VSCode Tasks

Avoid running bash commands forever with [VSCode Tasks](https://code.visualstudio.com/docs/editor/tasks):

- Open up the command pallet by pressing `F1`
- Run the command `Tasks: Configure Tasks`
- Select `Create tasks.json file from template`
- Click `Others`

By default i should see `tasks.json` pop up containing something along the lines of:

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "echo",
      "type": "shell",
      "command": "echo Hello"
    }
  ]
}
```

Now let's create a custom task called `sassy comment` that outputs a sassy comment for demonstration purposes

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "sassy comment",
      "type": "shell",
      "command": "echo 'Wisdom has been chasing you but you have always been faster'"
    }
  ]
}
```

Save the above and now let's run it:

- Open up the command pallet by pressing `F1`
- Run the command `Tasks: Run Task`
- You should see `sassy comment` listed at the top of your available custom tasks
- Select `continue without scanning the task output`
- Now at the bottom of your screen you should see that a new terminal has been created that contains the following:

```text
Wisdom has been chasing you but you have always been faster
```

## Exercise ❤️

Follow the above instructions and create your own custom tasks.

# Custom Boilerplate code

Tired of writing the same code over and over?

Let's create our own custom snippets:

- Open the command pallet with `F1`
- Run the command `Configure User Snippets`
- Here you can create snippets for all projects or specific projects. Pick your poison.
- create a file name for your `.code-snippets` file and you should see something like this appear:

```json
{
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
  // Placeholders with the same ids are connected.
  // Example:
  // "Print to console": {
  // 	"scope": "javascript,typescript",
  // 	"prefix": "log",
  // 	"body": [
  // 		"console.log('$1');",
  // 		"$2"
  // 	],
  // 	"description": "Log output to console"
  // }
}
```

have fun creating and enjoy ❤️
