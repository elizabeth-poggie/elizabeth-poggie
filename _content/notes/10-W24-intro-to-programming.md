---
# General Information
category: "Intro to Programming"
number: 10
type: "Lecture"
title: "Arrays I"
created: "2024-03-14T12:17:29Z"
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

The length of the array is established when the array is created and it cannot be changed. All the elements of an array must be of the same type. For Example:

```cs
// Declaring and initializing an integer array named 'ids'
int[] ids = {1, 2, 3, 4, 5};
// Declaring and initializing a double array named 'rScores'
double[] rScores = {10.5, 20.3, 15.8};
// Declaring and initializing a string array named 'docs'
string[] docs = {"Lab1", "Lab2", "Test1"}
```

Using curly brackets, we can assign values to all elements in the array at the same time as we declare the array

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

## Why does each element need to be the same type?

MEMORY !! ACCESSIBILITY !! Arrays in memory are contiguous blocks of memory where each element occupies the same size of memory. This structure allows for speedy access to each element based on an element's index.

Think of it like a drawer. Would you store your socks in the fridge? Would you want to store mayo in your backpack? NO !! It's the same idea here.

- Socks are stored in a sock drawer.
- Each particle of mayo is stored in a tub labeled "Mayonnaise"

Let's expand on this idea.

## Populating an array

When you initialize your sock drawer (e.g. purchase a dresser from your favorite local retailer), do you know every pair of socks you are going to put in that drawer prior to purchase? Over the course of your entire lifetime? Realistically no.

Let's define a drawer in C#:

```cs
// our drawer here has a max capacity of 30 pairs of socks
string[] drawer = new string[30];
```

How do we add socks to our drawer? Like this:

```cs
// putting a pair of socks at index 0 of our drawer
drawer[0] = "Black Nike Socks";
// we can toss socks anywhere in drawer, as long as the index we are using is within the capacity of our drawer
drawer[6] = "Checkered Socks";
```

# Default values

As soon as you create an array object and initialize the variable, you are assigning default values to each position in the array. Thus, if you don’t assign any values to the array, it will have the values assigned by default.

SO, if i put no socks in my sock drawer, what's even in the drawer?

- Nothing.
- In computer words that would be `null`.

What is `null`?

- It's essentially the absence of a value.
- A `null` value doesn't occupy any memory space. (e.g. an absence of socks in our case)

What are the default values of all arrays?

- For numerical arrays: `0`
- For String arrays: `null`
- For char arrays: the character with ASCII value `0`
- For boolean arrays: `false`

# Accessing an array

Going back to socks, how could I retrieve a pair of socks? Using the name of the array variable and the index of the element inside square brackets. For example:

```cs
// What prints? "Black Nike Socks" :)
Console.WriteLine(drawer[0]);
// What prints? "null"; we didn't put socks there yet
Console.WriteLine(drawer[1]);
// What prints? "Checkered Socks" :^)
Console.WriteLine(drawer[6]);
```

What happens if we try to access a negative index or one that is greater than the size of the "array minus 1"?

```text
Run-time exception (line ??): Index was outside the bounds of the array.
```

Our program breaks. When we combine arrays && loops together, we can do all sorts of powerful things, however in a lot of ways it's like playing with fire. You need to master the foundations else nothing will work.

Let's get into some examples.

# Examples

## Example 1

How can we get the average R-Score for a program?

```cs
// For simplicity, let's say our program only has 5 students
double[] rScores = new double[5];

// As the students grades are finalized, we can populate our array with the proper values
rScores[0] = 30.1;
rScores[1] = 26.7;
rScores[2] = 32.8;
rScores[3] = 9000;
rScores[4] = 22.3;

// Now lets compute the average r-score
double sum = rScores[0] + rScores[1] + rScores[2] + rScores[3] + rScores[4];
double avg = sum/5.0;

// ... and print
Console.WriteLine(avg);
```

## Example 2

Now let's combine arrays and loops together :)

Going back to the previous example, we can use a for loop to compute the sum of all the elements in the array `rScores` :^)

```cs
double sum = 0;
double avg = 0;
for(int i=0; i<5; i++) {
    sum += rScores[i];
    avg = sum/5.0;
}
```

Its a neat way that you can make repetitive tasks faster !!

But wait, what happens if more students are admitted into the program? You would need to go back into this for loop every time and increase the `5` by 1 every time !! TRASH !! You must think like a lazy programmer.

```cs
double sum = 0;
double avg = 0;
for(int i=0; i<rScores.Length; i++) {
    sum += rScores[i];
    avg = sum/rScores.Length;
}
```

You can access the length of an array using `arrayName.Length`

# Mini Quiz

## Question 1) What will print?

```cs
int[] nums = new int[42];
Console.WriteLine(nums[0]);
```

Output: 0
ProTip: Always initialize your arrays before trying to access them. This way you can avoid unexpected results :^)

## Question 2) What will print?

```cs
string[] profs = {"Poggie", "Helen", "Vik"};
Console.WriteLine(profs[-1]);
```

Output: "Run-time exception (line ??): Index was outside the bounds of the array."
ProTip: Always use an index that is within the bounds of an array.

## Question 3) What will print?

```cs
int size = -3;
string[] profs = new string[size];
profs[0] = "Poggie";
Console.WriteLine(profs[0]);
```

Output: "Run-time exception (line ??)"
ProTip: Always use a positive number to initialize an array

# Real world application

Let's write a program that calculates the annual earnings for a group of students working part-time jobs.

```cs
const int STUDENTS = 5;
const int WEEKS_PER_YEAR = 52;
double payRate;
double grossYearlyIncomesPay;
int[] hours = new int[STUDENTS];

//Getting values
for (int index = 0; index < STUDENTS; index++)
{
	Console.WriteLine("Enter the hours worked per week by Student " + (index + 1) + ":");
	hours[index] = int.Parse(Console.ReadLine());
}
Console.WriteLine("Enter the hourly pay rate for all students");
payRate = double.Parse(Console.ReadLine());

//Output
Console.WriteLine("Here is each student's annual earnings:");
for (int index = 0; index < STUDENTS; index++)
{
	grossYearlyIncome = hours[index] * payRate * WEEKS_PER_YEAR;
	Console.WriteLine("Student #" + (index + 1) + ": $" + grossYearlyIncome);
}
```

# Exercise

Factor in the Quebec Tax rate to this calculation. For example:

```cs
// Calculate Quebec tax deductions (example rates, adjust as needed)
double quebecTaxRate = 0.25; // Example Quebec tax rate (25%)
double quebecTaxDeduction = grossYearlyIncome * quebecTaxRate;
```

What is your net income after taxes? 👀

What happens if you are required to factor in input validation to this problem?
