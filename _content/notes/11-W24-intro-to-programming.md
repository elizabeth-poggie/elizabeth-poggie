---
# General Information
category: "Intro to Programming"
number: 11
type: "Lecture"
title: "Arrays II"
created: "2024-03-19T12:17:29Z"
---

# Intro

Continuing from last lecture, Arrays are the last piece of the puzzle to laying the foundations to computer science. Afterwards we will be able to explore more applications and intermediate topics :^)

# Continuing from last class...

Here are a bunch of socks.

```cs
string sock0 = "Nike";
string sock1 = "White";
string sock2 = "Blue";
// ...
```

What happens if i want to add even more socks? That is going to be annoying to type out each unique variable. Instead let's create a drawer to hold all our pairs of socks where each index indicates the position of the socks in the drawer.

It's like a list. A container that has "order".

```cs
string [] drawer = new string[30];
```

How do we add socks to our drawer? Like this:

```cs
drawer[0] = "Nike";
drawer[1] = "White";
drawer[2] = "Blue";
```

Notice instead of appending a number to our primitive (string) type, we are creating an array with that number now representing an index of where that sock exists in our array.

But what's the difference anyways between these two data types? Let's explore that.

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

👉 0

## What prints?

```cs
string[] days = new string[7];
int numLettersMonday = days[0].Length;
Console.WriteLine(numLettersMonday);
```

👉 Run-time exception (line ??): Object reference not set to an instance of an object.

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

👉 false. Why? It fails for the same reason as before.

## What prints?

```cs
using System.Linq;
// ...
int[] x = {1,2,3};
int[] y = {1,2,3};
Console.WriteLine(x.SequenceEqual(y));
```

👉 true. Why? To compare the contents of the arrays, you must use auxillary methods provided by other libraries.

NOTE: Before using `SequenceEqual` is important to import it like `using System.Linq`.

# Examples

## Reverse

Let's write a program that reverses the order of the elements of an array.

```cs
// Initialize the array
int[] arr = {1,2,3,4,5};

// Initialize counters
int start = 0;
int end = arr.Length - 1;

while (start < end)
{
    // Swap elements at start and end indices
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move towards the center
    start++;
    end--;
}

// Now print
for(int i=0; i<arr.Length; i++)
{
    Console.Write(arr[i] + " ");
}
```
