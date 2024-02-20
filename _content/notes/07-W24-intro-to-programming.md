---
# General Information
title: "Lecture 7"
subtitle: "Intro to loops"
date: "2024-02-20T12:17:29Z"
course: "Intro to Programming"
type: "Lecture"
slides: ""
---

# TODO

A Reminder: Test 1 covers lectures 1 - 6 and lab 1, however giving out a lab now for extra practice for those that feel like they ned it and will only be due after the break.

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

# Structuring our loops (to end)

Very often in loops, we will do three things:

- Step 1) Declare and initialize a variable before the loop.
- Step 2) Check a condition before each iteration.
- Step 3) Perform some update step at the end of each iteration.

# Building a (bad) program

## Idea

```cs
"output a welcoming message 5 times."
```

What would the procedure look like? How would this look in Flowgorithm? Let's give it a try.

# Building a (better) program

## Idea

```cs
"output a welcoming message 5 times."
```

## From idea to procedure

What are our variables?

- `counter` represents how many times we have run the loop

What is the procedure?

- Step 1) create and initialize a counter.
- Step 2) create a condition that will eventually end
- Step 3) inside the loop, increment the counter.

How do we make a condition that eventually ends?

- We want the loop to only run FIVE times. Let's make the condition such that if `counter > 5` we exit our loop

## From Procedure to Flowgorithm

Let's try it. What happens if i change the condition? What happens if i change the initial number?

## From Flowgorithm to Program

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
"Guess the number between 1 and 1000. Fail, and the game will never end."
```

## From idea to procedure

How would you try to write this idea without use of loops?

What are we needing to keep track of?

- `secretNumber` - some random number between 1 and 1000

What's the procedure?

- Step 1) Get user input
- Step 2) Create a condition that compares user input with the `secretNumber`
