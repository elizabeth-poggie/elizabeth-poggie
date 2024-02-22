---
# General Information
category: "Intro to Programming"
number: 7
type: "Lecture"
title: "Loops I"
created: "2024-02-20T12:17:29Z"
# link: { text: "slides", href: "" }
---

# Introduction

A repetition structure causes a statement or set of statements to execute repeatedly. They provide a way to automate repetitive tasks and process data efficiently. These structures are known as "Loops".

## Why ?

This allows a programmer to avoid duplicate code.

- Automation: Loops allow you to automate repetitive tasks by executing the same code multiple times without having to manually write it out each time.
- Efficiency: Instead of writing out the same code multiple times, you can use loops to achieve the same result with less code, making your programs more concise and easier to read.
- Scalability: Loops make it easy to scale your code to handle larger datasets or perform computations on a large number of elements without significantly increasing the complexity of your code.

## Where are loops used?

- Algorithm Design: Loops are fundamental to many algorithms for tasks such as searching and sorting on complex datasets
- Data Processing: Loops are used for processing and manipulating data in various formats, such as text processing, image processing, audio processing, and video processing.
- User Interfaces: Loops are used in graphical user interfaces to continuously monitor user input, update the display, and handle events.
- Artificial Intelligence and Machine Learning: Loops are used for training machine learning models.
- ... and so much more !!

These are just a few examples, however loops are used in nearly every aspect of software development and computational problem-solving. So for anyone entering the realm of computer science, mastering this tool is key.

# While Loop

When I introduced an "if statement", the block of code is executed once, only if the condition evaluates to true.

```cs
if (condition) {
  // some code
}
```

However, what happens if we want the block of code to be repeatedly executed? This is the idea behind the "While" loop.

```cs
while(condition) {
  // some code
}
```

The above block of code is repeatedly executed as long as the condition evaluates to `true`

What does this look like in Flowgorithm? Let's try to see the difference between `if` and `while`

# Infintie loops

Be careful when writing a loop! It is important to make sure that the loop can eventually terminate and not execute forever.

## Structuring While loops (to end)

Very often in loops, we will do three things:

- Step 1) Declare and initialize a variable before the loop.
- Step 2) Check a condition before each iteration.
- Step 3) Perform some update step at the end of each iteration.

# Building a (bad) program

## Idea

```cs
"output a welcoming message 5 times."
```

First, let's think about how this would look if we only used `if` statements. How would this look in Flowgorithm? What about C#? Lets try.

```cs
int i = 0;
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) { // dead end
  Console.WriteLine("HI");
  i = i + 1;
}
```

## Building a (better) program

Let's try this now with ITERATION :^)

What are our variables?

- `counter` represents how many times we have run the loop

What is the procedure?

- Step 1) create and initialize a counter.
- Step 2) create a condition that will eventually end
- Step 3) inside the loop, increment the counter.

How do we make a condition that eventually ends?

- We want the loop to only run FIVE times. Let's make the condition such that if `counter > 5` we exit our loop

## From procedure to Flowgorithm

Let's try it. What happens if i change the condition? What happens if i change the initial number?

## From Flowgorithm to program

Notice how we are testing the outcome of the condition prior to executing any statements

```cs
int i = 0; // Step 1
while (i < 5) { // Step 2
  Console.WriteLine("HI");
  i++; // Step 3
} // ... and loop
```

# Building a (slightly) better program

## Idea

```cs
"Guess the number between 1 and 1000."
"Fail, and the game will never end."
```

## From idea to procedure

How would you try to write this idea without use of loops?

What are we needing to keep track of?

- `secretNumber` - some random number between 1 and 1000

What's the procedure?

- Step 1) Get user input
- Step 2) Create a condition that compares user input with the `secretNumber`
- Step 3) get user input again

## From procedure to Flowgorithm

Let's give it a try. What happens if we enter below 0 and above 1000? How do we prevent the user from entering inputs within those bounds? Let's add an `if` statement.

## From Flowgorithm to program

```cs
int secret = 42;
int guess = int.Parse(Console.ReadLine()); // Step 1
while (guess != secret) { // Step 2
	if (!(guess >= 0 && guess <= 1000)) {
		Console.WriteLine("enter a valid number plz");
	}
    guess = int.Parse(Console.ReadLine()); // Step 3
}
```

How would you improve the above program?

# Exercise

Write the following idea in flowgorithm:

```cs
"If I am playing rock, paper, scissors with a computer"
"I should only be allowed to play a valid move"
```

## What does this look like in C# ?

```cs
string move = Console.ReadLine();
while(move != "rock" && move != "paper" && move != "scissors") {
  Console.WriteLine("Try again lol");
  move = Console.ReadLine();
}
Console.WriteLine("yay!!");
```

# Input Validation

Input validation is the process of ensuring that user input is valid. While loops are a popular choice used to perform input validation.

## Example with TryParse

```cs

int number;
bool valid;
Console.WriteLine("Please enter an integer"); valid = int.TryParse(Console.ReadLine(), out number);
while (!valid)
{
	   Console.WriteLine("Error: number is not valid");
	   valid = int.TryParse(Console.ReadLine(), out number);
}
Console.WriteLine("The number is {0}", number);

```

# For loops

A for loop is a while loop with a built-in counter. the `while` loop and the `for` loops are equivalent. For example, the below methods are equivalent

```cs
int i = 0;
while (i < 5) {
  // some code
  i++;
}
```

```cs
for (int i = 0; i < 5 ; i++) {
  // some code
}
```

which is (again) is just another way of writing this:

```cs
int i = 0;
if(i < 5) {
  i = i + 1;
}
if(i < 5) {
  i = i + 1;
}
if(i < 5) {
  i = i + 1;
}
if(i < 5) {
  i = i + 1;
}
if(i < 5) {
  i = i + 1;
}
if(i < 5) { // dead end
  i = i + 1;
}
```

As a general rule of thumb tho:

- use `for` loops when the condition depends on the value of an integer, and the number of iterations is fixed or easily computable. (when you need a counter, might as well use built in functionality)
- use `while` loops when the number of iterations is indefinite. (input validation, secret number guessing)

# Structuring For loops (to end)

Let's break down the following syntax ...

```cs
for (int i = 0; i < 5 ; i++) {
  // some code
}
```

... i can rewrite this as ...

```cs
for (initializer; condition ; update) {
  // some code
}
```

... let's break it down:

- The `initializer` is executed once, before the loop starts.
- The `condition` is checked at the beginning of each iteration. If it evaluates to false, the loop ends. Otherwise, the body is repeated.
- The `update` is executed at the end of each iteration.

# From bad to best

## Our original idea

```cs
"output a welcoming message 5 times."
```

## If statements (bad)

```cs
int i = 0;
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) {
  Console.WriteLine("HI");
  i = i + 1;
}
if(i < 5) { // dead end
  Console.WriteLine("HI");
  i = i + 1;
}
```

## While Loop in Flowgorithm (not bad)

demo.

## For Loop in Flowgorithm (could do better)

demo.

## While Loop in C# (better)

```cs
int i = 0;
while (i < 5) {
  Console.WriteLine("HI");
  i++;
}
```

## For Loop in C# (best)

```cs
for (int i = 0; i < 5 ; i++) {
  Console.WriteLine("HI");
}
```

# Another program

## Idea

```cs
"A computer should output all even numbers between 1 and 20."
```

## From idea to Flowgorithm

Lets give it a shot.

## From Flowgorithm to program

```cs
for (int i = 2; i <= 20 ; i = i + 2) {
	Console.WriteLine(i);
}
```
