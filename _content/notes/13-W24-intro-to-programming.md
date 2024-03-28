---
# General Information
category: "Intro to Programming"
number: 13
type: "Lecture"
title: "Putting it together"
created: "2024-03-25"
---

# What prints?

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
TBD
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
TBD
```

# Comparing Array Example

Let's write your own method that takes two int arrays as inputs and returns true is the content of the two arrays is equal.
