---
# General Information
category: "Intro to Programming"
number: 10
type: "Lecture"
title: "Arrays I"
created: "2024-03-12T12:17:29Z"
---

# Intro

An array is like a container that holds a fixed number of values of the same type. This values can be access using the same variable name.

The values in the array are called elements. The list of elements is indexed, the order matters.

# Declaration

```cs
type[] variableName;
```

## What is going on here?

- The square brackets indicate that this is an array variable
- All the elements of the array must have this type.

```cs
int[] ids; // Declaring an integer array named 'ids'
double[] rScores; // Declaring a double array named 'rScores'
string[] docs; // Declaring a string array named 'docs'
```

OK so it's been declared, now how do we initialize it?

# Initialization

- The length of the array is established when the array is created and it cannot be changed.
- All the elements of an array must be of the same type.

```cs
// Declaring and initializing an integer array named 'ids'
int[] ids = {1, 2, 3, 4, 5};
// Declaring and initializing a double array named 'rScores'
double[] rScores = {10.5, 20.3, 15.8};
// Declaring and initializing a string array named 'docs'
string[] docs = {"Lab1", "Lab2", "Test1"}
```

- Using curly brackets, we can assign values to all elements in the array at the same time as we declare the array

## Order matters in arrays

Going back to this example, what is the index of "Lab2"? How do we count the elements of an array?

```cs
string[] docs = {"Lab1", "Lab2", "Test1"}
```

We start counting at 0!!

```cs
0. "Lab1"
1. "Lab2"
2. "Test1"
```

In this example, "Lab2" has the index of 1 :^)

## What happens if we do not know what values ahead of time?

We can use the `new` operator to create an array of a certain size. This way, we can then populate the entries one at a time, later in the program.

```cs
// Declaring and initializing an integer array named 'ids' with a length of 5
int[] ids = new int[5];
// Declaring and initializing a double array named 'rScores' with a length of 3
double[] rScores = new double[3];
// Declaring and initializing a string array named 'docs' with a length of 4
string[] docs = new string[4];
```

Notice how the types here are specified after the `new` operator. We are initializing an array of a certain type and then populating it with a collection of elements of that same type.

## Why does it all have to be the same type?

MEMORY !! Arrays in memory are contiguous blocks of memory where each element occupies the same size of memory. This layout allows for efficient random access to elements based on their index.

Think of it like a drawer. Would you store your socks in the fridge? Would you want to store mayo in your backpack? NO !! It's the same idea here.

- Socks are stored in a sock drawer.
- Each particle of mayo is stored in a tub labeled "Mayonnaise"

Let's expand on this idea.

## Populating an array

When you initialize your sock drawer (e.g. purchase a dresser from your favorite local retailer), do you know every pair of socks you are going to put in that drawer prior to purchase? Over the course of your entire lifetime? Realistically no.

Let's define a drawer in C#:

```cs
string[] drawer = new string[30]; // our drawer here has a max capacity of 30 pairs of socks
```

How do we add socks to our drawer? Like this:

```cs
// putting a pair of socks at index 0 of our drawer
drawer[0] = "Black Nike Socks";
// we can toss socks anywhere in drawer, as long as the index we are using is within the capacity of our drawer
drawer[6] = "Checkered Socks";
```

# Default values

As soon as we create an array object and initialize the variable, we are assigning default values to each position in the array. Thus, if we don’t assign any values to the array, it will have the values assigned by default.

SO, if i put no socks in my sock drawer, what is in it?

- Nothing.
- In computer words that would be `null`.

What is `null`?

- It's essentially the absence of a value.
- A `null` value doesn't occupy any memory space.

What are the default values of all arrays?

- For numerical arrays: `0`
- For String arrays: `null`
- For char arrays: the character with ASCII value `0`
- For boolean arrays: `false`

# Accessing an array

Going back to socks, how could i retrieve a pair of socks? using the name of the array variable and the index of the element inside square brackets. For example:

```cs
// What prints? "Black Nike Socks" :)
Console.WriteLine(drawer[0]);
// What prints? "null"; we didn't put socks there yet
Console.WriteLine(drawer[1]);
// What prints? "Checkered Socks" :^)
Console.WriteLine(drawer[6]);
```

For example, if i try to access my drawer at index `1` like `drawer[1]` and there are no socks there,
