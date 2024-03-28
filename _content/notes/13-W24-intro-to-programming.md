---
# General Information
category: "Intro to Programming"
number: 13
type: "Lecture"
title: "Putting it together"
created: "2024-03-25"
updated: "2024-03-28"
---

# What prints?

Part of what makes a great developer is one that can recognize bad code. Let's get into it :)

```cs
Console.WriteLine("Enter a number");
int x = int.Parse(Console.ReadLine()); 	//User enters: 4
if (x % 2 == 0)
    Console.WriteLine("Hello");
else
    Console.WriteLine("Bye");
x += 6;
if (x % 3 == 0)
    Console.WriteLine(x);
else
    Console.WriteLine(x % 3);
x -= 3;
if (x >= 0 && x <= 10)
    Console.WriteLine("In:" + x);
else
    Console.WriteLine("Out:" + x);
```

## The solution

```text
Hello
1
In:7
```

# What prints?

Round 2

```cs
int x = 5;
while (x < 10)
{
    Console.WriteLine(x);
    x++;
    Console.WriteLine(x = x + 1);
    ++x;
    Console.WriteLine(x);
}
```

## The solution

```text
5
7
8
8
10
11
```

# 1D Grid example

Let's write a program that prints out the number of days in each month

## The solution

```cs
int[] days = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

for (int index = 0; index < 12; index++) {
    Console.WriteLine("Month " + (index + 1) + " has " + days[index] + " days.");
}
```

# 2D Grid example

Following up from last class

Let's write a program that takes a 2D integer array and returns and integer array containing the smallest elements in each row. For example if given this:

```cs
int[,] matrix = {
    { 2, 3, 9 },
    { 5, 1, 6 },
    { 8, -1, 9 }
};
```

I should see this as a result:

```cs
{ 2, 1, -1 }
```

## The solution

```cs
int[,] array = {
    { 3, 7, 2 },
    { 8, 1, 5 },
    { 4, 9, 6 }
};

int[] smallestElements = new int[array.GetLength(0)];

for (int i = 0; i < array.GetLength(0); i++) {
    int smallest = array[i, 0];
    for (int j = 1; j < array.GetLength(1); j++) {
        if (array[i, j] < smallest) {
            smallest = array[i, j];
        }
    }
    smallestElements[i] = smallest;
}
```

# Array Example

Let's write a program that takes an array and prints an array where all the elements have been moved up by one position. The element at the end of the array should end up at the beginning. For example:

```cs
// if the initial array is
int[] input = {2,4,6,8,1,2,3};

// ... other stuff

// the program should print a new array
input = {3,2,4,6,8,1,2};
```

## The solution

```cs
int[] input = { 2, 4, 6, 8, 1, 2, 3 };

// Move elements up by one position
int temp = input[input.Length - 1];
for (int i = input.Length - 1; i > 0; i--)
{
    input[i] = input[i - 1];
}
input[0] = temp;

// Print the new array
Console.Write("{ ");
for (int i = 0; i < input.Length; i++)
{
    Console.Write(input[i]);
    if (i < input.Length - 1)
    {
        Console.Write(", ");
    }
}
Console.WriteLine(" }");
```

# Comparing Array Example

Let's write a program that takes two arrays of `string`s and prints the number of indices at which the `string` in both arrays at the same index have the same length. For example:

```cs
// if the two arrays are
string[] array1 = { "cat", "bunny", "house", "puppy" };
string[] array2 = { "cow", "elephant", "dog", "mouse" };

// ... other stuff

// the program should print 2
Console.WriteLine(2);
```

## The solution

```cs
// Initialize arrays
string[] array1 = { "cat", "bunny", "house", "puppy" };
string[] array2 = { "cow", "elephant", "dog", "mouse" };

// Ensure both arrays have the same length before starting
if (array1.Length != array2.Length) {
    Console.WriteLine("Arrays must have the same length to begin.");
} else {
    // Initialize counter
    int count = 0;
    // Iterate through both arrays and count matching lengths
    for (int i = 0; i < array1.Length; i++)
    {
        if (array1[i].Length == array2[i].Length)
        {
            count++;
        }
    }
    Console.WriteLine("The number of strings with the same length is " + count);
}
```

# Comparing Array Example

Let's write a program that takes two `int` arrays and prints `true` is the content of the two arrays is equal. For example:

```cs
// If the 2 arrays are:
int[] array1 = {1,2,3};
int[] array2 = {1,2,3};

// Then the program should print true
Console.WriteLine(true);
```

## The solution

```cs
int[] array1 = { 1, 2, 3 };
int[] array2 = { 1, 2, 3 };

// Initialize result - not guilty until proven otherwise
bool isEqual = true;

// First Check if arrays have the same length
if (array1.Length != array2.Length)
{
    isEqual = false;
} else {
    // Compare each element of the arrays
    for (int i = 0; i < array1.Length; i++)
    {
        // the moment we find discrepancy, set our lad to false
        if (array1[i] != array2[i])
        {
            isEqual = false;
        }
    }
}
// now print the result
Console.WriteLine(isEqual);
```

# Lab 3 Clarifications

The pressure’s on and now you need to cut the right wire to diffuse the bomb. With every wrong wire cut, your luck is tested. Once your luck runs out it’s game over.

Hint: Use nested loops and an array

Getting the winning wire you need to cut:

```cs
Random random = new Random();
// Selecting a random number between 1 and 6
int winningWire = random.Next(1, 7);
```

Calculating your luck:

```cs
// initialize luck between 1 and 6
int luck = random.Next(1, 7);
. . .
// update luck on each incorrect wire cut
luck–-;
```

As a general starting point - Let's think about how to craft our recipe:

```text
Step 1 - initialize the winning wire (if this is ever guess the user wins)
Step 2 - initialize luck (this represents how many wrong guesses the user can input)
Step 3 - Keep getting user input and checking to see if their guess == winningWire. if luck == 0 then they fail.
```
