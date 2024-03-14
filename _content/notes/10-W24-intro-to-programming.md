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
int[] ids = {1, 2, 3, 4, 5}; // Declaring and initializing an integer array named 'ids'
double[] rScores = {10.5, 20.3, 15.8}; // Declaring and initializing a double array named 'rScores'
string[] docs = {"Lab1", "Lab2", "Test1"} // Declaring and initializing a string array named 'docs'
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

- Order matters!! What is the index of “Test1”?

## What happens if we do not know what values ahead of time?
