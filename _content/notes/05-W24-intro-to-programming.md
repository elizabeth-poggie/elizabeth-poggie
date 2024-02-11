---
# General Information
title: "Lecture 5"
subtitle: "From Idea to Program"
date: "2024-02-13T12:17:29Z"
course: "Intro to Programming"
type: "Lecture"
---

# Course Updates

Update 1) Moving forward, I will be posting all course materials to this website. I will still be posting links on lea moving forward so you all get the notifications :)

Update 2) Lab 1 is due tonight! Do not forget to submit!

Update 3) For anyone who had issues last class with Visual Studio 2022, I discussed with IT and the problem should be resolved for y'all. Let me know if the problem persists or anyone else that still has trouble accessing the software.

Update 4) Midterm season is coming up (i know you all must be very excited) and given that this is a complementary course, i want to schedule the midterm for this class that’s best for everyone’s schedule. What day works best for you all? The majority vote wins !!

- Thursday, February 22, 2024
- Tuesday, February 27, 2024
- Thursday, February 29, 2024

# Lecture Plan

Last week, I introduced the concepts of relational operators, logical operators, and conditional statements. We left off on order of operations and just started exploring conditional statements.

This Lecture we are going to focus on how to make more efficient programs with these concepts to build what are known as "Selection Control Structures" or (in simpler terms) more complicated "if statements".

# Order of Operations Continued

You can mix `and` , `or` and `not` operations, so it is important to know the order in which they will be evaluated.

For the below examples, lets let `x = true`,` y = false`, `z = false`

## Example 1

```cs
x or y and z
true or false and false       // Step 1) evaluate the AND ( false and false )
true or false                 // Step 2) evaluate the OR ( true or false )
true                          // Result
```

## Example 2

```cs
(x or y) and z
(true or false) and false      // Step 1) evaluate the OR ( true or false )
true and false                 // Step 2) evaluate the AND ( true and false )
false                          // Result
```

## Example 3

```cs
not x and y or z
not true and false or false   // Step 1) evaluate the NOT ( )
false or false and false      // Step 2) evaluate the AND ( false and false )
false or false                // Step 3) evaluate the OR ( false or false )
false                         // Result
```

## Example 4

```cs
not (x and y or z)
not (true and false or false) // Step 1) bracket first
not (true and false or false) // Step 2) evaluate the AND ( true and false )
not (false or false)          // Step 3) evaluate the OR ( false or false )
not (false)                   // Step 3) evaluate the OR ( false or false )
true                          // Result
```

# From Idea to Program (Round 1)

Boolean logic and conditional statements are cool and all, however useless unless we know how we can translate every day problems into vocabulary the computer understands. So how do we go about doing that?

## Idea

"I should make myself a snack if I have bread AND peanut butter."

How do we turn this idea into a program? Tell me how I should make myself a snack.

- Should i put peanut butter on the bread?
- How do i put peanut butter on the bread?
- How do i open the peanut butter jar?
- How do i spread peanut butter?
- What do i use to spread peanut butter?
- What happens if I decide to use my elbow to spread peanut butter? It's a totally valid approach, however would require a lot of energy
- ... So how do ensure we only use energy efficient methods of spreading peanut butter??????

Computers are dumb and need step by step instructions. These instructions need to be direct and precise.

## From Idea to Procedure

First, let's break this statement down into variables.

- `hasBread` represents if I have bread.
- `hasPeanutButter` represents if I have peanut butter.

Next, let's break this down into steps.

- Step 1) `"Do I have bread?"`
- Step 2) `"Do I have peanut butter?"`

Once we have gotten the answers to the above questions, we can launch our `apply peanut butter to bread` strategy !! Besides, why should I want to expend energy trying to make a snack if i do not have access to the materials that makes that snack possible ? (might as well uber eats)

## From Procedure to Flowgorithm

Let's first implement this procedure in flowgorithm.

## From Flowgorithm to Program

Now let's bring this flowgorithm program to C#

```cs
bool hasBread, hasPeanutButter, shouldEatSnack;
string input;

// Step 1) figure out if you have bread
Console.WriteLine("Do you have bread? [y/n]");
input = Console.ReadLine();
if (input.Equals("y")) {
  hasBread = true;
} else {
  hasBread = false;
}

// Step 2) figure out if you have peanut butter
Console.WriteLine("Do you have peanut butter? [y/n]");
input = Console.ReadLine();
if (input.Equals("y")) {
  hasPeanutButter = true;
} else {
  hasPeanutButter = false;
}

// Now decide if we can have a snack
shouldEatSnack = hasBread && hasPeanutButter;

if (shouldEatSnack) {
  Console.WriteLine("Launch `apply peanut butter to bread` strategy && ENJOY");
} else {
  Console.WriteLine("No snack for you.");
}
```

And just like that we have a program :)

# From Idea to Program (Round 2)

## Idea

"I should go outside if it is NOT raining AND if I have finished my work."

## From Idea to Procedure

First, lets turn this statement into variables.

- `isRaining` represents if it is raining outside or not.
- `workCompleted` represents if I have completed my work or not.
- `shouldBeOutside` represents if I should go outside.

Now, let's break it into steps

- Step 1) "Is it raining?"
- Step 2) "Have you finished your work?"

Once we have gotten the answers to the above questions, we can decide whether we should go outside!

## From Procedure to Flowgorithm

Now let's implement this in flowgorithm.

## From Flowgorithm to Program

```cs
bool isRaining, workCompleted, shouldBeOutside;
string input;

// Step 1) Figure out if it is raining
Console.WriteLine("Is it raining? [y/n]");
input = Console.ReadLine();
if (input.Equals("y")) {
  isRaining = true;
} else {
  isRaining = false;
}

// Step 2) Figure out if it our work is done
Console.WriteLine("Have you finished your work? [y/n]");
input = Console.ReadLine();
if (input.Equals("y")) {
  workCompleted = true;
} else {
  workCompleted = false;
}

// Now decide if we should go outside
shouldBeOutside = workCompleted && !isRaining;

if (shouldBeOutside) {
  Console.WriteLine("Enjoy the weather, it's nice out :)");
} else {
  Console.WriteLine("Stay home lol, maybe another day");
}
```

# From Idea to Program (Round 3)

## Idea

Now it's your turn! Develop a Flowgorithm program that determines if someone should get a ticket if their speed is above the speed limit. Once that is done, translate that into C#.

For those that feel confident in their Flowgorithm abilities, you can move directly to C# :)

## What you will need for C#

- Console Output - `Console.WriteLine()`
- Console Input - `Console.ReadLine()`
- Type conversion - `int.Parse()`

## What to think about

- What do we need to figure out in order to decide whether we should give someone a ticket? How do we divide that into steps?
- What variables do we need to declare in our program?
- What is the mathematical `boolean` expression for this idea?

## Expected inputs and outputs

- if someone's speed is above the speed limit, the program should output `"ticket for YOU, be more careful next time"`.
- if someone's speed is under the speed limit, the program should output `"Keep doing what you're doing. Have a lovely day <3"`

# Next Class ...

Input validation, more on constants, && intro to LOOPS
