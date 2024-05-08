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

## Method 3 - Prompt user for input

A method called `getUserMove` that takes the board as input and returns no value. This method uses `Console.ReadLine()` to get a user's move.

A move is composed by two integers representing the position on the board where the user wants to write their symbol (`x`). For example:

```text
What row do you want to make your move at?
> 0
And what column?
> 0
```

Notice how the first integer indicates the row, and the second integer indicates the column. HOWEVER, if the move is invalid, then the user should be prompted again for input. Keep asking the user for a new move, until they enter a valid one. Once the method receives a valid move, it carries it out by calling the `writeOnBoard` method with the valid inputs.

## Method 4 - The power of AI

Write a method called `checkForObviousMove` that takes the board as input and returns true if there’s an “obvious move” the AI should do, false otherwise. We consider to be an “obvious move” a move that would make the AI either win or avoid an obvious win for the user on the next turn. If such a move exist, then the method should carry it out by calling the `writeOnBoard` method with the appropriate inputs, and then return `true`. If no obvious move is possible, then the method should simply return `false`.

For example, if my board is my board:

```cs
char[,] board = {
  {'x', ' ', ' '},
  {' ', 'o', ' '},
  {'x', 'o', ' '}
};
```

Then the obvious move for the AI to do is at position `(0,1)` cause this would make the AI win the game. So when `checkForObviousMove();` is called, then after the call is executed, then the board will be updated to:

```cs
char[,] board = {
  {'x', 'o', ' '},
  {' ', 'o', ' '},
  {'x', 'o', ' '}
};
```

and the method will return `true` :)

## Method 5 - Prompt AI for input

A method called getAIMove that takes the board as input and returns no value. This method should first check whether an “obvious move” is possible for the AI and carry it out by calling the checkForObviousMove method. If no “obvious move” was possible, then the AI chooses a move at random:

If the move generated is invalid, then the method generates a new one. Once the method has generated a valid move, then it carries it out by calling the `writeOnBoard` method with the appropriate inputs.

## Method 6 - Winner?

Write a method called `checkForWinner` that takes the board as input and returns a character. The method should check whether either the user or the AI have won the game:

- if the user wins, return `x`
- if the AI wins, return `o`
- if no one wins, return `' '` (empty character)

## Method 7 - Play

In the main method, you should implement a game of Tic Tac Toe between the user and the AI using all the methods previously defined.

Before beginning the actual game, the method should ask the user for their name and store it in an appropriate variable. Then, the method should ask the user for an integer indicating the dimension of the board the user wants to play with.

```text
What is your name?
> Prof Poggie

What sized board would you like to play on today?
> 3
```

The method can then start to carry out a game of Tic Tac Toe. It first creates a board with the correct dimension:

```text
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
```

and then ask for user input:

```text
What row do you want to make your move at?
> 0
And what column?
> 0
```

The method should display the updated board each time a move is made:

```text
+-+-+-+
|x| | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
```

The players keep taking turns until either one of them wins or there are no more available moves. Whatever is the cause for ending the game, a message should be printed on the screen displaying the result of the game.

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
