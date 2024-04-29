---
# General Information
category: "User Interfaces"
number: 25
type: "Lecture"
title: "VSCode Hacks"
created: "2024-04-29"
---

# Format on Save

Never think about formatting your code again.

- Add [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to your extensions
- Open up the Settings
- Under `Editor: Format On Save`, select the option to "Format a file on save..." to activate the feature
- Now, under `Code Actions on Save` "blah blah blah", select the option `Edit in settings.json`. This should open up something more or less like this:

```json
{
  "editor.stickyScroll.enabled": true,
  "eslint.format.enable": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "explorer.confirmDragAndDrop": false,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "explorer.confirmDelete": false,
  "git.confirmSync": false,
  "dotnet.help.firstView": "gettingStarted",
  "extensions.confirmedUriHandlerExtensionIds": [
    "ms-dotnettools.dotnet-interactive-vscode",
    "ms-dotnettools.vscode-dotnet-pack"
  ],
  "window.zoomLevel": 2,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {}
}
```

- These are the activated settings for your VSCode, I have a lot of customization given i have been adding things on over the years.
- Now from the `Prettier - Code formatter`, paste in the below:

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```

- Restart your VSCode and Voila, things format on save 🪄

# Spell Checker

Can't spell? You're not alone.

- Add [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) to your extensions
- All spelling mistakes are now highlighted with a blue underline, to correct, hit it with a `Cmd+.` on Mac or `Ctrl+.` on PC.

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

Love bash? Are you a terminal purest? [VSCode Command Line Interface (CLI) has you covered.](https://code.visualstudio.com/docs/editor/command-line)

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

# VSCode Commands

The less you rely on the mouse the better. Although VSCode allows you to use the mouse for everything making the tool approachable to newbies, for virtually everything you can do with a mouse, you can do with a keyboard. A keyboard shortcut is ALWAYS faster.

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

Want to increase your productivity significantly? Want to spend less time working on your assignments? There is a lot to learn however just knowing a few will literally change your life.
