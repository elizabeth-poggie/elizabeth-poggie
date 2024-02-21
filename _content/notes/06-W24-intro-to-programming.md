---
# General Information
category: "Intro to Programming"
number: 6
type: "Lecture"
title: "Input & Outputs"
created: "2024-02-15T12:17:29Z"
link:
  {
    text: "slides",
    href: "/assets/notes/W24-intro-to-programming/slides/06.pdf",
  }
---

# Introduction

All programs take inputs and give outputs. Today let's make our C# programs a bit more interesting.

# From Idea to Program (Round 1)

## Idea

Last class I gave out an exercise. There are many ways to interpret that statement, so let's build on it together.

Our answers to this question may be different depending on how we go about trying to solve this problem :)

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

Well if a user that is speeding, how do they find out know the speed limit? Besides how can they improve if they do not know.

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

# ............................. and BETTER ????????

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

// One-way 'if' statement
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

// Two-way 'if-else' statement, similar idea to the flowgorithm diamond
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

// Nested if statements, what would this look in flowgorithm ?
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

# ............................. but what's the BEST in C# ???

if ... else statements are cleaner solutions compared to nested if statements. These conditional statements are free for you to use in C#

```cs
const int SPEED_LIMIT = 42;
bool successfulConversion;
int speed;

Console.WriteLine("How fast are you going?");
successfulConversion = int.TryParse(Console.ReadLine(), out speed);

if(successfulConversion && speed > SPEED_LIMIT) {
	Console.WriteLine("Wow that's too fast !! \n--------------------\nThe speed limit is: {0} \nYou were going: {1}", SPEED_LIMIT, speed);
} else if (successfulConversion) {
	Console.WriteLine("Keep doing you");
} else {
  Console.WriteLine("please put in a valid speed");
}
```

In just one exercise we have managed to write around 8 programs, now imagine the possibilities with more complex problems. As a general rule, always write comments to describe your solutions to me so i can award partial marks for the correct thought processes and reasoning :)

# From Idea to Program (Round 2)

## Idea

```md
Design a program that asks the user for the number of
women, men, and non-binary registered in a class.

The program should display:

> The total number of students.
> The number and the percentage (%) of women.
> The number and the percentage (%) of men.
> The number and the percentage (%) of non-binary.
```

Example input

```md
women: ?
men: ?
non-binary: ?
```

Example output

```md
Number of students: 42
Number of women and %: "20 total so 47.62% of the class"
Number of females and %: "20 total so 47.62% of the class"
Number of non-binary and %: "2 total so 4.76% of the class"
```

## From Idea to Procedure

What are our variables?

- `numWomen` represents the number of women
- `numMen` represents the number of men
- `numNonBinary` represents the number of non-binary
- `total` represents the total number of students

What's the procedure?

- Step 1) Figure out the number of women
- Step 2) Figure out the number of men
- Step 3) Figure out the number of non-binary
- Step 4) Do some some math
- Step 5) Format the output

## From Procedure to Flowgorithm

Now let's implement this in flowgorithm.

## From Flowgorithm to Program

```cs
int numWomen, numMen, numNonBinary, total;

// first get all the numbers
Console.WriteLine("How many women in class?");
numWomen = int.Parse(Console.ReadLine());
Console.WriteLine("How many men in class?");
numMen = int.Parse(Console.ReadLine());
Console.WriteLine("How many non-binary in class?");
numNonBinary = int.Parse(Console.ReadLine());

// now add them together
total = numWomen + numMen + numNonBinary;

Console.WriteLine("The total number of students is {0}", total);
Console.WriteLine("There are {0} women, so {1}% of the class", numWomen, ((numWomen / total) * 100));
Console.WriteLine("There are {0} men, so {1}% of the class", numMen, ((numMen / total) * 100));
Console.WriteLine("There are {0} non-binary, so {1}% of the class", numNonBinary, ((numNonBinary / total) * 100));
```

oh no !! the percentages are being calculated wrong ... how can we fix this?

We need to do do an explicit type conversion. otherwise we will get another 0 output !!

```cs
int numWomen, numMen, numNonBinary, total;

Console.WriteLine("How many women in class?");
numWomen = int.Parse(Console.ReadLine());
Console.WriteLine("How many men in class?");
numMen = int.Parse(Console.ReadLine());
Console.WriteLine("How many non-binary in class?");
numNonBinary = int.Parse(Console.ReadLine());

total = numWomen + numMen + numNonBinary;

Console.WriteLine("The total number of students is {0}", total);
Console.WriteLine("There are {0} women, so {1}% of the class", numWomen, ((double) numWomen / total) * 100);
Console.WriteLine("There are {0} men, so {1}% of the class", numMen, ((double) numMen / total) * 100);
Console.WriteLine("There are {0} non-binary, so {1}% of the class", numNonBinary, ((double) numNonBinary / total) * 100);

```

# Exercises

## For those who need more C# practice

Factor into the above c# program:

- Input validation
- Format the output to include atleast 1 escape character.
- ... and figure out how to make my code cleaner :^)

## For the Brave

Turn your question 2 from lab 1 into a C# Program
