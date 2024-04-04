---
# General Information
category: "Intro to Programming"
number: 14
type: "Lecture"
title: "Real world Application"
created: "2024-04-04"
---

# Grading Assignments

## Problem statement

You have 100 student assignments to grade and need to give them feedback before their midterm so they know how they can improve in time for the test.

## Solution

Develop an algorithm that allows you to apply feedback in a timely manner while still being generic and applicable to all programming classes. The intent is to be fair to all students irrespective of material and assess their performance at the intern level.

Code is code and code talks.

## Recipe for Success

- Get a director of engineering whose job it is to asses the performance of industry professionals and adapt that for the classroom setting.
- Depending on the error a student did on their assignment, assess what category of error the student's mistake falls in.
- Based on the type of mistake, provide the proper feedback. We need to be fair to all students tho as favoritism is stinky, so feedback should be concise and constructive.

## Let's do it in C#

```cs

// Step 1) Prompt the user
Console.WriteLine("What category of mistake did the student make?");
Console.WriteLine();

// Step 2) What are the options?
Console.WriteLine("Your options:");
Console.WriteLine("1.  Missing Requirement");
Console.WriteLine("2.  Messy code quality");
Console.WriteLine("3.  Does not follow best practices");
Console.WriteLine("4.  Inefficient logic");
Console.WriteLine("5.  Bugs bugs bugs");
Console.WriteLine("6.  Late submission");
Console.WriteLine();
Console.WriteLine("Which option?");

// Step 3) Input validation
int option;
while (!int.TryParse(Console.ReadLine(), out option) || option <= 0)
{
 Console.WriteLine("Invalid input. Please enter a positive integer between 1 and 6.");
}

// Step 4) Now apply the proper feedback
if (option == 1) {
// missing requirement
Console.WriteLine("The task does not meets all specified requirements as outlined in the given instructions.");
} else if (option == 2) {
// quality error
Console.WriteLine("High-quality code should be well-structured and easy to understand.");
} else if (option == 3) {
// quality is crap
Console.WriteLine("The code should follow established coding conventions and standards, promoting scalability, reliability, and maintainability over time.");
} else if (option == 4) {
// logic error
Console.WriteLine("The code logic should be clear, concise, and logically sound to ensure proper functioning with minimal complexity.");
} else if (option == 5) {
// bugs
Console.WriteLine("There should be no additional defects, errors, or issues present in the code.");
} else if (option == 6) {
// late
Console.WriteLine("Late assignment lol");
} else {
// problems for future you
Console.WriteLine("Not yet implemented.");
}
```

# Refactoring

The feedback is generic except might not be helpful if the student makes a specific mistake. For example how can the student know if their logic error is due to code duplication vs improper types? If best practices were not followed how do we know if it's an indentation error vs variable names not being in `camelCase`?

## Let's revise the strategy

- Assess the performance at the per category level.
- Get a computer to check the code quality and lateness. There are 100 assignments to grade and i can't possibly do it in time.
- On my side i can manually handle checking requirement, logic errors and best practices. Let's create macro's to assess that.
- At the moment i will run each of your submissions locally, eventually I will create a testing harness to check for bugs (i'm lazy lol)

# Now let's work some magic

Should you decide to pursue computer science, you will cover the material necessary to create the following scripts in later classes. HOWEVER If you are curious and want to learn it now, u can google it or ChatGPT it (that's what i did lmao).

## Bash Script

Demo

## Apple Script

Demo
