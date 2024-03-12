---
# General Information
category: "Intro to Programming"
number: 9
type: "Lecture"
title: "Loops III & Lab"
created: "2024-03-12T12:17:29Z"
---

# Exercise from last class

Let's write a program that takes an `int` as input and prints an empty square. For example, if i enter the number `4`, i should see:

```cs
++++
+  +
+  +
++++
```

## On the board?

Let's try it.

## In Flowgorithm?

Let's do it.

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

// Step 3) Printing the empty square
Console.WriteLine("Square of size {0}:", size);
for (int i = 1; i <= size; i++)
{
  for (int j = 1; j <= size; j++)
  {
    // print a solid line if i am at the top OR bottom of the box (when i=1 || i=size)
    // print a solid line if i am at the right OR left side of the box (when j=1 || j=size)
    if (i == 1 || i == size || j == 1|| j == size)
    {
        Console.Write("+");
    }
    else
    {
        Console.Write(" ");
    }
  }
  Console.WriteLine();
}
```

# Another Example

Let's write a program that prints the following symbol:

```cs
 + +
+++++
 + +
+++++
 + +
```

## On the board?

Let's try it.

## In Flowgorithm?

Let's do it.

## In C# ?

```cs

// Step 1) Printing the empty square
Console.WriteLine("Printing a # symbol");
for (int i = 1; i <= 5; i++)
{
  for (int j = 1; j <= 5; j++)
  {
	  // Step 2) print a "+" line if i am at the top, middle, or bottom the outer loop
	  //AND i am in the second or fourth iteration of the inner loop
	  if ((i == 1 || i == 3 || i == 5) && (j == 2 || j == 4))
	{
		Console.Write("+");
	}
	// Step 3) print a "+" line if i am at the second or fourth iteration of the loop
	else if (i == 2 || i == 4)
	{
		Console.Write("+");
	}
	// Step 4) if all else fails, print a space :)
	else
	{
		Console.Write(" ");
	}
  }
  Console.WriteLine();
}
```
