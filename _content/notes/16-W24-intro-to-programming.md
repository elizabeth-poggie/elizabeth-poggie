---
# General Information
category: "Intro to Programming"
number: 16
type: "Lecture"
title: "Methods II"
created: "2024-04-23"
---

# Scope of a variable

A variable only exists inside of the method in which it is declared and it does not exist in any other method.

```cs
public static void method()
{
	string var = "I exist only inside of this method";
	var = "and upon method ending, my existence is terminated";
}
```

In other words, the scope of a variable the part of the code where it exists.

## Example

If i try to run the below code snippet

```cs
public class Program
{
	public static void Main()
	{
		Console.WriteLine(s);
	}
	public static void method()
	{
		string var = "This is my scope";
	}
}
```

I should see the following

```text
ERROR!
/tmp/VwTJp3aEqf.cs(10,21): error CS0103: The name 's' does not exist in the current context
```

## Top down processing

When inside a method:

- a variable starts to exists when it is declared, and
- it ends to exists at the close curly bracket corresponding to the most recent open curly bracket.

```cs
public static void method() { // enter the method
	int num = 42; // variable begins it's life
	num++; // the variable does things during it's existence
} // variable is destroyed, rip variable
```

# Mini Quiz

## Q1

Will it run?

```cs
public static void method() {
    int x = 5;
	int y = 6;
	int z = x + y;
}
```

👉 YES, `int y` is in scope

```cs
public static void method() {
    int x = 5;
	int y = 6; // scope
	int z = x + y; // scope
}
```

## Q2

Will it run?

```cs
public static void method() {
    int x = 5;
	int z = x + y;
	int y = 6;
}
```

👉 NO, `int y` is NOT in scope

```cs
public static void method() {
    int x = 5;
	int z = x + y; // breaks
	int y = 6; // scope
}
```

## Q3

Will it run?

```cs
public static void method() {
    int x = 5;
	{
		int y = 6; // scope
		int z = x + y; // scope
	}
}
```

👉 YES, `int y` is in scope

## Q3

Will it run?

```cs
public static void method() {
    int x = 5;
	{
		int y = 6;
	}
	int z = x + y;
}
```

👉 NO, `int y` is NOT in scope

```cs
public static void method() {
    int x = 5;
	{
		int y = 6; // scope
	}
	int z = x + y; // breaks
}
```

## Q5

will it run?

```cs
public class Program
{
	public static void Main () {
	    int x = 5;
        method();
        int y = 6;
        Console.WriteLine(x+y);
	}

	public static void method() {
        int x = 7;
        int z = 10;
        Console.WriteLine(x+z);
    }
}
```

👉 YES, the program will output `17 11`

# Mini Quiz - Explanations

As with methods, if we declare a variable inside a condition block, such variable only exists inside that block.

```cs
public static void method () {
    int x = 2;
    int y = 3;
    if (x < y) {
        x = x + y; // x and y exist
        int z = 5;
        y = z * x; // x, y, and z all exist
    }
    Console.WriteLine(x + " " + y + " " + z); // code's gonna break here cause "z" is out of scope here lol
}
```

If we declare a variable before the condition block, then we can use the variable inside (and after) the block. Any modification to the value of the variable will apply.

```cs
// v2 method
public static void methodV2 () {
    int x = 2;
    int y = 3;
    if (x < y) {
		x = x + y;
		int z = 5;
		y = z * x;
    }
    Console.WriteLine(x + " " + y); // notice that z no longer exists here
}
```

When i run the above i should see `5 25` printed :^)
