---
# General Information
title: "Lecture 6"
subtitle: "Input & Outputs"
date: "2024-02-13T12:17:29Z"
course: "Intro to Programming"
type: "Lecture"
---

# Introduction

All programs take inputs, and give outputs. Let's make our C# programs a bit more interesting.

# How do we make this idea a Program ?

## Idea

Last class I gave out an exercise. There are many ways to interpret that statement, let's build on it together.

Our answers to this question may be different depending on how we go about trying to solve this statement, however as long as you are rigorous in your logic and add comments to explain your thought process. Marks will be given accordingly.

```cs
"I should get a ticket if I am above the speed limit."
```

How else can we reword this statement so that it makes more sense as a boolean statement?

```cs
"I should get a ticket if my current speed is strictly greater than the current speed limit"
```

## From Idea to Procedure

What are our variables?

- `SPEED_LIMIT` represents a speed limit. Let's use a constant variable as the speed on a road sign is not subject to user input && interpretation.
- `speed` represents the speed we are currently going at.

What's the procedure?

- Step 1) Figure out what the user's speed is
- Step 2) Translate that into a number
- Step 3) Compare the user's speed with the speed limit

## From Procedure to Flowgorithm

Now let's implement this in flowgorithm.

## From Flowgorithm to Program

```cs
const int SPEED_LIMIT = 42;
int speed;
string input;

Console.WriteLine("How fast are you going?");
input = Console.ReadLine();

speed = int.Parse(input);

if (speed > SPEED_LIMIT) {
	Console.WriteLine("Wow that's too fast");
} else {
	Console.WriteLine("Keep doing you");
}
```

# How can we do better ?

First let's remove unecessary variables

```cs
const int SPEED_LIMIT = 42;
int speed;

Console.WriteLine("How fast are you going?");

speed = int.Parse(Console.ReadLine());

if (speed > SPEED_LIMIT) {
	Console.WriteLine("Wow that's too fast");
} else {
	Console.WriteLine("Keep doing you");
}
```

# ... but even better?

Well if a user that is speeding, how do they find out know the speed limit? Besides how can they can't improve if they do not know.

```cs
const int SPEED_LIMIT = 42;
int speed;

Console.WriteLine("How fast are you going?");

speed = int.Parse(Console.ReadLine());

if (speed > SPEED_LIMIT) {
	Console.WriteLine("Wow that's too fast, the speed limit in these parts is {0}", SPEED_LIMIT);
} else {
	Console.WriteLine("Keep doing you");
}
```

This concept is what is known as `output formatting` !! In the above example, the `SPEED_LIMIT` is being inserted where the `{0}` is located. But what happens when we want to insert multiple numbers?

```cs

Console.WriteLine("Wow that's too fast, the speed limit in these parts is {0} and you were going {1}", SPEED_LIMIT, speed);
```

# ............. and BETTER ?

There is too much happening in that line, what if we want to print things on different lines?

```cs

Console.WriteLine("Wow that's too fast !! \n-----------------------\nThe speed limit is: {0} \nYou were going: {1}", SPEED_LIMIT, speed);
```

These are what's known as `escape sequences`, in C# they all start with a `\` and followed by an escape character. Here is a list of all of them

```md
\n - a new line
\t - the next tab
\b - one character back
\r - the beginning of a line
\\ - prints a backslash
\' - prints a single quote
\" - prints a double quote
```

# ............................. and the BEST ????????

What happens if the user enters `123abc` ?

You should see something like ...

```cs
Run-time exception (line 14): Input string was not in a correct format.

Stack Trace:

[System.FormatException: Input string was not in a correct format.]
   at System.Number.StringToNumber(String str, NumberStyles options, NumberBuffer& number, NumberFormatInfo info, Boolean parseDecimal)
   at System.Number.ParseInt32(String s, NumberStyles style, NumberFormatInfo info)
   at System.Int32.Parse(String s)
   at Program.Main() :line 14

```

but how do we prevent this from happening? Let's get into the idea of `input validation` and use the method `TryParse()`

```cs
const int SPEED_LIMIT = 42;
bool successfulConversion;
int speed;

Console.WriteLine("How fast are you going?");
successfulConversion = int.TryParse(Console.ReadLine(), out speed);

if(successfulConversion) {
  // do rest of program
}

```

but how do we prevent the rest of the program from executing if the conversion was not successful?

```cs
const int SPEED_LIMIT = 42;
bool successfulConversion;
int speed;

Console.WriteLine("How fast are you going?");
successfulConversion = int.TryParse(Console.ReadLine(), out speed);

// similar idea to our flowgorithm diamond
if(successfulConversion) {
  // do rest of program
} else {
  // leave program
}
```

now let's plug in the rest of our program

```cs
const int SPEED_LIMIT = 42;
bool successfulConversion;
int speed;

Console.WriteLine("How fast are you going?");
successfulConversion = int.TryParse(Console.ReadLine(), out speed);

if(successfulConversion) {
  if (speed > SPEED_LIMIT) {
    Console.WriteLine("Wow that's too fast !! \n-----------------------\nThe speed limit is: {0} \nYou were going: {1}", SPEED_LIMIT, speed);
  } else {
    Console.WriteLine("Keep doing you");
  }
} else {
  Console.WriteLine("Please put in a valid speed");
}
```

# Exercises

## For those who want more C# practice

Write a program that prints the following names, such that the 2nd name starts on the same column (see below for sample output)

```cs
string fname1 = "Arthur"
string lname1 = "Dent"
string fname2 = "Ford"
string lname2 = "Perfect"
string fname3 = "Marvin"
string lname3 = "Android"

```

Example output

```cs
"Arthur"      "Dent"
"Ford"        "Perfect"
"Marvin"      "Android"
```

## For the brave

Turn your question 2 from lab 1 into a C# Program
