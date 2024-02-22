---
# General Information
category: "Intro to Programming"
number: 3
type: "Lecture"
title: "Variables & Arithmetic"
created: "2024-02-06T12:17:29Z"
link:
  {
    text: "slides",
    href: "/assets/notes/W24-intro-to-programming/slides/03.pdf",
  }
---

# Variables

## Declarations.

- A variable is a named location that stores a value.
- To store a value we first need to declare a variable.
- The following statements declare variables of different types in C#

```cs
string today;
int hour, minutes;
bool isSnowing;
double dollars;
char letter;
```

## Assignments.

- We can use variables to store values with an assignment statement.
- When we make an assignment we update the variable’s value.
- Variables must be initialized (assigned for the first time) before they can be used.

```cs
// declare & initialize
string wow = "wow";

// not legal
int someNumber;
someNumber++;
```

## ‘Equals’.

- `=` is an operation assigning the value on the right hand side to the variable on the left hand side.
- It is NOT a statement of equality !!

```cs
int x, y = 7;
7 = x;           // not legal
3 = y + x;       // not legal
y = x + 3;
```

# Type checking.

A strongly-typed language enforces strict associations between variables and specific data types.
There will be type errors if variable types do not match up as expected in the expression.

```cs
// not legal
int num = "hello there";
char c = 42.00;

// legal
int x = 2;
```

## Implicit type conversion.

- Assigning a small size variable to a larger one
- No loss of information will occur
- Legal, but bad style overall

```cs
// not legal
byte b = 1;
int i = b;
```

## Explicit type conversion.

- Also known as ‘casting’
- Used when store a larger size variable into a smaller one.​ (e.g. going from double to int)
- Will result in lost information

```cs
double x = 42.42;
int y = (int) x;
byte b = (byte) y;
```

## Non-compatible type conversion.

Converting between non-compatible types. Most common scenarios:

- String ⇒ Number
- Number ⇒ String

```cs
string number = "123";
int result = Convert.ToInt32(number);
Console.WriteLine(result);
result = int.Parse(number);
Console.WriteLine(result);
```

What will happen? What will happen if we change `number` to `null`? What about `123abc` ?

# Constants.

Fixed values that the program can not change during execution.

```cs
const bool IS_CUTE = true;
const float PI = 3.14f;         // 🥧 ❤️
```

## Why?

- Create safety in the application.​
- They make widespread changes easier throughout an application.​
- Make applications more self-explanatory / easier to follow.

# Arithmetic operators

## Supported by C#

```cs
// Add two operands
y = y + x;
// Subtract second operand from the first
y = y - x;
// Multiplies both operands
y = y * x;
// Divides numerator by de-numerator
y = y / x;
// Modulus operator and remainder of after an integer division
y = y % x;
// Increment by 1
y++;
// Decrement by 1
x--;
```
