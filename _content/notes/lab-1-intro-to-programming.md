---
# General Information
category: "Intro to Programming"
number: 2
type: "Lab"
title: "Final Project"
created: "2024-05-08"
---

# Overview

- Worth: This lab will count towards the ‘Project’ portion of your final grade at 15%
- Due: May 22nd, 2024 (by ‘end of day’)
- Hand In: A `.zip` file containing your folder (work) onto LEA in the appropriate place.
- Late Penalty: Late submissions lose 10% per day to a maximum of 3 days. Nothing is accepted after 3 days and a grade of zero will be given.

# The Problem

# Getting Started

Write a program called `TicTacToe` that allows a user to play Tic Tac Toe against an AI (the computer). You can assume that the user plays using the symbol `x`, while the AI uses the symbol `o`

# Problem Details

Implement the following methods. Feel free to include any additional helper methods you deem necessary :)

## Method 1

Write a method called `createBoard` that takes as input one integer n, representing the dimension of the board, and returns an n by n array of characters. This 2D array of characters represents the board of the game. When the board is created, it should be completely empty. To represent this, the elements of the array should all be initialized with the space character `' '`

```cs
char[,] board = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
```

## Method 2

Write a method called `displayBoard` that takes a 2D array of characters as input and prints out the board. For example, this is what an empty 4 by 4 board would look like this:

```text
+-+-+-+-+
| | | | |
+-+-+-+-+
| | | | |
+-+-+-+-+
| | | | |
+-+-+-+-+
| | | | |
+-+-+-+-+
```

And a 3 by 3 board that is currently in play would look like this:

```text
+-+-+-+
|x| | |
+-+-+-+
| |o| |
+-+-+-+
|x|o| |
+-+-+-+
```

## Method 3

# Checklist

Ensure that your code contains:

- A comment containing: You name and ID
- Input validation, if needed
- Constant(s) where deemed appropriate
- Custom methods that start with `public static`
- NO external math libraries, the intention here is to test your abilities with loops, methods, and arrays.

# Submission Requirements

One `.zip` file that contains:

- The entire Visual Studio Project folder (or at the very least, just the `Program.cs` file)
