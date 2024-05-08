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

## Method 1 - Generation

Write a method called `createBoard` that takes as input one integer n, representing the dimension of the board, and returns an n by n array of characters. This 2D array of characters represents the board of the game. When the board is created, it should be completely empty. To represent this, the elements of the array should all be initialized with the space character `' '`. For example, calling this method like:

```cs
createBoard(3);
```

should return a reference to the following array:

```cs
// indices - (row, col)
char[,] board = {
  {' ', ' ', ' '}, // (0,0) (0,1) (0,2)
  {' ', ' ', ' '}, // (1,0) (1,1) (1,2)
  {' ', ' ', ' '}  // (2,0) (2,1) (2,2)
};
```

## Method 2 - Display

Write a method called `displayBoard` that takes a 2D array of characters as input and prints out the board. For example, this is what an empty 4 by 4 board would look like:

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

And this is what a 3 by 3 board that is currently in play would look like:

```text
+-+-+-+
|x| | |
+-+-+-+
| |o| |
+-+-+-+
|x|o| |
+-+-+-+
```

## Method 3 - Making your Move

Write a method `writeOnBoard` that takes as input the board (a 2 dimensional array of characters), the character to write, and two integers x and y representing the position on the board where the character should be written on. For Example:

```cs
// x ~ row // y ~ col
public static void writeOnBoard(char[,] board, char letter, int x, int y) {
  // do stuff
}
```

Inside this method, validate if that is a valid move. If the move is invalid, the appropriate error message should be printed. For example, if your array is:

```cs
char[,] board = {
  {'x', ' ', ' '},
  {' ', 'o', ' '},
  {'x', 'o', ' '}
};
```

Then ...

- `writeOnBoard(board,’x’,1,1)` should print something along the lines of "Space Taken"
- `writeOnBoard(board,’x’,1,5)` should print something along the lines of "Out of Board Exception"
- `writeOnBoard(board,’x’,1,0)` should print no message and update the board accordingly:

```cs
char[,] board = {
  {'x', ' ', ' '},
  {'x', 'o', ' '}, // notice how (1,0) is updated with the character `x`
  {'x', 'o', ' '}
};
```

## Method 3 - Prompt for input

A method called `getUserMove` that takes the board as input and returns no value. This method uses `Console.ReadLine()` to get a user's move.

A move is composed by two integers representing the position on the board where the user wants to write their symbol (`x`). For example:

```text
What row do you want to make your move?
> 0
And what column?
> 0
```

Notice how the first integer indicates the row, and the second integer indicates the column. HOWEVER, if the move is invalid, then the user should be prompted again for input. Keep asking the user for a new move, until they enter a valid one. Once the method receives a valid move, it carries it out by calling the `writeOnBoard` method with the valid inputs.

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
