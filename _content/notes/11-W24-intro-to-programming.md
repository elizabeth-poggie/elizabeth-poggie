---
# General Information
category: "Intro to Programming"
number: 11
type: "Lecture"
title: "Arrays II"
created: "2024-03-14T12:17:29Z"
---

# Intro

Continuing from last lecture, Arrays are the last piece of the puzzle to laying the foundations to computer science. Afterwards we will be able to explore more applications :^)

# Example

Here are a bunch of socks.

```cs
string sock1 = "Nike";
string sock2 = "White";
string sock3 = "Blue";
// ...
```

What happens if i want to add even more socks? That is going to be annoying to type out each unique variable. Instead let's create a drawer to hold all our pairs of socks where each index indicates the position of the socks in the drawer.

It's like a list. A container that has "order".

```cs
string [] drawer = new string[30];
```

## What does this look like in the computer?

Let's draw it.

# Primitive vs Reference Types – Examples

## What prints?

```cs
int x = 5;
int y = x;
x++;
Console.WriteLine(x + " " + y);
```

👉 6 5

## What prints?

```cs
int[] x = {1, 2, 3};
int[] y = x;
y[0] = 4;
Console.WriteLine(x[0] + " " + y[0]);
```

👉 4 4

## Why does this happen?

Arrays don’t store the values of the types, but a reference to the location in memory containing that value. You can think of it as an address which points to where the data is located in memory.

What is happening under the hood?

# Reference types

What is the value of `nums` ?

```cs
string [] nums = {1, 2, 3};
```

Inside of `drawer` is stored the address in memory of where we can find the first element of the array.

```text
 _______     _______     _______
|       |   |       |   |       |
|   1   |   |   2   |   |   3   |
|_______|   |_______|   |_______|
    0           1           2
```

What do you think is going to happen when we print this?

```cs
Console.WriteLine(nums);
```

# Copying Arrays

These statements create an array of three integers and make two different variables, x and y, refer to it.

```cs
int[] x = {1, 2, 3};
int[] y = x;
```

Since both are pointing to the same space in memory, any changes made by either variable will be seen by the other.

What happens if we want to copy the array and not just it's reference? You actually want to copy the array, not just a reference, you need to create a new array.

```cs
int[] someCoolNumbers = {4, 2, 42};
```

What does this look like in the computer?

```text
someCoolNumbers
    |
    |
    V
 _______     _______     _______
|       |   |       |   |       |
|   4   |   |   2   |   |   42  |
|_______|   |_______|   |_______|
    0           1           2
```

What does this look like on the computer?

```cs
int[] someCoolNumbers = {4, 2, 42};
int[] myCoolNumbers = someCoolNumbers;
```

```text
myCoolNumbers,
someCoolNumbers
    |
    |
    V
 _______     _______     _______
|       |   |       |   |       |
|   4   |   |   2   |   |   42  |
|_______|   |_______|   |_______|
    0           1           2
```

What about now?

```cs
int[] someCoolNumbers = {4, 2, 42};
int[] myCoolNumbers = someCoolNumbers;
myCoolNumbers[0] = 420;
```

```text
myCoolNumbers,
someCoolNumbers
    |
    |
    V
 _______     _______     _______
|       |   |       |   |       |
|  420  |   |   2   |   |   42  |
|_______|   |_______|   |_______|
    0           1           2
```

# String Arrays

What does the below look like under the hood?

```cs
string [] drawer = {"Nike", "White"};
```

What is a sentence if not an array of letters? This is actually more precisely what it will look like in memory.

```text
 drawer
    |
    |
    V
 _______     _______
|       |   |       |
|       |   |       | --------> "..."
|_______|   |_______|
    0           1
    |
    |
    V
 _______     _______     _______     _______
|       |   |       |   |       |   |       |
|   N   |   |   I   |   |   K   |   |   E   |
|_______|   |_______|   |_______|   |_______|

```

What happens if we add an "s" to "Nike"?

```cs
drawer[0] = drawer[0] + "s"
```

When we changed the array. Arrays are mutable -> the reference stored in `drawer` did not change!

When We changed the first String of the array. Strings are immutable -> the reference in pets[0] did change!

```text
 drawer
    |
    |
    V
 _______     _______
|       |   |       |
|       |   |       | --------> "..."
|_______|   |_______|
    0           1
    |
    |_____________________________________________
                                                  |
 _______     _______     _______     _______      |
|       |   |       |   |       |   |       |     |
|   N   |   |   I   |   |   K   |   |   E   |     |
|_______|   |_______|   |_______|   |_______|     |
                                                  |
     _____________________________________________|
    |
    V
 _______     _______     _______     _______     _______
|       |   |       |   |       |   |       |   |       |
|   N   |   |   I   |   |   K   |   |   E   |   |   S   |
|_______|   |_______|   |_______|   |_______|   |_______|

```

# Mini Quiz

## What prints?

```cs
int[] num = new int[3];
int sum = num[0] + num[1] + num[2];
Console.WriteLine(sum);
```

## What prints?

```cs
string[] days = new string[7];
int numLettersMonday = days[0].length();
Console.WriteLine(numLettersMonday);
```

# Arrays and Equality

## What prints?

```cs
int[] x = {1,2,3};
int[] y = {1,2,3};
Console.WriteLine(x == y);
```

👉 false. Why? arrays are reference types, which means that when you compare two array variables using the "==", you are comparing their references, not their content.

## What prints?

```cs
int[] x = {1,2,3};
int[] y = {1,2,3};
Console.WriteLine(x.Equals(y));
```

👉 false. Why? It fails for the same reasons as before.

## What prints?

```cs
using System.Linq;
// ...
int[] x = {1,2,3};
int[] y = {1,2,3};
Console.WriteLine(x.SequenceEqual(y));
```

👉 true. Why? To compare the contents of the arrays, you must use auxillary methods provided by other libraries.

NOTE: Before using `SequenceEqual` is useful to import it like `using System.Linq`.

# Examples

## Reverse

Write a void method that reverse the order of the elements of an array.

## Search

Write a method that takes as input an integer array and an int x. The method should return true if x is an element of the array, false otherwise.
