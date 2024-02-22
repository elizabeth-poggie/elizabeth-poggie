---
# General Information
category: "Intro to Programming"
number: 8
type: "Lecture"
title: "Loops II"
created: "2024-02-22T12:17:29Z"
# link: { text: "slides", href: "" }
---

# Tracing the 'While' Loop

what prints?

```cs
int i = 1;
while (i<50) {
  Console.WriteLine(i);
  i = i*2;
}
Console.WriteLine("{0} at the end", i);
```

Let's break it down:

```md
➢ Initial value of i: 1
➢ Iteration 1) print: 1. 𝑖 ← 2
➢ Iteration 2) print: 2. 𝑖 ← 4
➢ Iteration 3) print: 4. 𝑖 ← 8
➢ Iteration 4) print: 8. 𝑖 ← 16
➢ Iteration 5) print: 16. 𝑖 ← 32
➢ Iteration 6) print: 32. 𝑖 ← 64
➢ 64 is larger than 50 so the loop ends
➢ print: 64 at the end
```

# Is it prime ?

## What does it mean to be prime?

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is a whole number greater than 1 that cannot be formed by multiplying two smaller natural numbers. Let's break it down into steps:

```md
Is n prime?
➢ Is it divisible by 2? If yes, then it is not prime. Otherwise:
➢ Is it divisible by 3? If yes, then it is not prime. Otherwise:
➢ ...
➢ Is it divisible by n-1? If yes, then it is not prime. Otherwise, it is prime!
```

## How do we implement this?

The % operator in C# is called the "remainder" or "modulus" operator. It returns the remainder of dividing the left operand by the right operand.

- 10 % 3 returns 1 because 10 divided by 3 equals 3 with a remainder of 1.
- 7 % 2 returns 1 because 7 divided by 2 equals 3 with a remainder of 1.

This operator is often used to determine if a number is even or odd. If a number n is divided by 2 and the remainder is 0, then n is even; otherwise, n is odd.

## What does this look in flowgorithm?

## In C#?

```cs
int n = int.Parse(Console.ReadLine());
bool isItPrime = true;
// Step 1) the case where the input(n) is less than or equal to 1
if(n <= 1) {
  isItPrime = false;
}
int d = 2;
// Step 2) loop through all numbers between 2 and n-1.
while(d < n) {
  // Step 3 .... n-1) check if any of them is a divisor of n.
  if(n%d==0) {
    isItPrime = false;
  }
  d++;
}
// Step n) if a divisor was not found, then the number must be prime.
Console.WriteLine(isItPrime);
```

# For Loop Syntax

```cs
for (int i = 1; i <= 42; i++) {
  // some code
}
```

- `int i = 1` is the initializer and it is executed once, before the loop starts.
- `i <= 42` is the the condition and it is checked at the beginning of each iteration. If it evaluates to false, the loop ends. Otherwise, the body is repeated.
- `i++` is the the update and it is executed at the end of each iteration.

## To summarize

- Step 1) The initializer is executed
- Step 2) The condition is checked. If true, the body is executed. Otherwise, the loop ends.
- Step 3) The update is executed and we go back to step 2).

# Warm up !!

Let's write the following in flowgorithm:

```cs
"A computer should output all odd numbers between 30 and 50."
```

## In C#?

```cs
for (int i = 31; i <= 49; i += 2)
{
    Console.WriteLine(i);
}
```

# 'For' VS 'While' Loops

```cs
int i = 0;
while (i < 42) {
  Console.WriteLine("yeet");
  i++;
}
```

```cs
for (int i = 0; i < 42 ; i++) {
  Console.WriteLine("yeet");
}
```

## Similarities

- both start with the initialization of the counter `int i = 0`
- both check the condition `i < 42`
- both increment the counter `i++`

## Differences

- What happens int the for loop, stays in the for loop ==> if you declare the variable in the initializer for the `for` loop, it only exists inside the `for` loop. As opposed to the `while` loop that gives you access to that initializer outside of the loop

# Off by 1 errors

An off-by-one error is a common logic error that occurs when a loop iterates one time too many or too few.
Example: you want your loop to iterate n times and you write the following

## This is executed n-1 times

```cs
for (int i = 1; i < n; i++) {
  // some code
}
```

## This is executed n+1 times

```cs
for (int i = 0; i <= n; i++) {
  // some code
}
```

# Breaking Loops

A `break` statement will cause the program to exit the current loop. For example:

```cs
for (int i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  Console.WriteLine(i);
}
```

What prints?

```md
1 2 3 4
```

# Continuing Loops

A `continue` statement cause the program to skip to the next iteration of the loop. For example

```cs
for (int i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  Console.WriteLine(i);
}
```

What prints?

```md
1 2 3 4 6 7 8 9 10
```

# When to break or continue your loops

Even though, using break and continue gives you more control over the loop execution, they make the code more difficult to read and debug. If you find yourself using them all the time, you are probably doing something more complicated than it needs to be.

Think of them as tools in your toolkit, best used sparingly.

# Nesting Loops

A nested loop is a loop within a loop. This is useful when we are dealing with data with multiple dimensions. For example:

```cs
int num = 0;
for (int a = 0; a < 5 ; a++) {
  for (int b = 0; b < 5 ; b++) {
    for (int c = 0; c < 5 ; c++) {
      for (int d = 0; d < 5 ; d++) {
          for (int e = 0; e < 5 ; e++) {
            num++;
          }
      }
    }
  }
}
Console.WriteLine(num)
```

What prints?

```md
3125
```

Why ??

- a is executed 5 times
- b is executed 5 times
- c is executed 5 times
- d is executed 5 times
- e is executed 5 times

So ...

```md
5 x 5 x 5 x 5 x 5 = 3125
5 ^ 5 = 3125
```

# Drawing shapes

Let's write a program that takes an `int` as input and prints a square. For example, if i input 4, the program should output:

```cs
++++
++++
++++
++++
```

## In Flowgorithm?

## In C# ?

```cs
// Step 1) Prompt for input
Console.Write("Enter the size of the square: ");
int size;

// Step 2) Input validation
while (!int.TryParse(Console.ReadLine(), out size) || size <= 0)
{
  Console.WriteLine("Invalid input. Please enter a positive integer.");
  Console.Write("Enter the size of the square: ");
}

// Step 3) Printing the square
Console.WriteLine("Square of size {0}:", size);
for (int i = 0; i < size; i++)
{
  for (int j = 0; j < size; j++)
  {
    Console.Write("+");
  }
  Console.WriteLine();
}

```

## Why does this work?

- `for (int j = 0; j < size; j++)` draws one line of our square where each line is made of `size` number of `+`s (e.g. 4 pluses)
- `for (int i = 0; i < size; i++)` draws each line `size` times (e.g. 4 rows of pluses)

# Putting it all together

Let's write the following idea in flowgorithm:

```cs
"If I enter 5 integer numbers, the computer should output the sum."
```

## In C# ?

```cs
int sum = 0;
for (int i = 0; i < 5 ; i++) {
	int number;
	bool valid = int.TryParse(Console.ReadLine(), out number);
	while (!valid)
	{
		   Console.WriteLine("not valid lol");
		   valid = int.TryParse(Console.ReadLine(), out number);
	}
	sum = sum + number;
}
Console.WriteLine(sum);
```
