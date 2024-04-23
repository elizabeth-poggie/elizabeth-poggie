---
# General Information
category: "Intro to Programming"
number: 16
type: "Lecture"
title: "Scope && Value Methods"
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

## Q6

Will it run

```cs
public class Program
{
	public static void Main () {
	    int x = 5;
        method();
	}

	public static void method() {
         x = x + 1;
        Console.WriteLine(x);
    }
}
```

```cs
public class Program
{
	public static void Main () {
	    int x = 5; // scope of x
        method(); // scope of x
	}

	public static void method() {
         x = x + 1; // program breaks here
        Console.WriteLine(x);
    }
}
```

👉 NO, `int x` is NOT in scope

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

# Exercise ❤️

As an exercise, write a program that has a method that takes two integers x and y as input. If x is less than y, then the program should print out the "product" of the two integers, otherwise it should print out the "sum" of the two integers.

# Value methods

Compared to void methods, value methods differ in 2 ways:

- They declare the type of the return value.
- They use at least one return statement to provide a return value.

```cs
public static int method() {
    int x = 42;
    return x; // return statement
}
```

A call to this method could look something like this

```cs
int var = method();
```

And if we wanted to make this spicier, we could could allow the method to take arguments:

```cs
public class Program
{
	public static void Main () {
	    int var = method(2); // notice how we are calling the method
	    Console.WriteLine(var);
	}

	public static int method(int num) { // notice the change here
        int x = 42 * num;
        return x;
    }
}
```

# Return statements

The type of the expression MUST match the return type.

If you try to return with no expression or with an expression of the wrong type, then the compiler generates an error.

```cs
// valid cause im return an int
public static int method1() {
    int x = 42;
    return x;
}

// valid cause i'm returning nothing :^)
public static void method2() {
    int x = 42;
    return;
}

// TRASH ❌ does not match the return type and cannot implicitly convert >:^(
public static int method3(double x) {
    x++;
    return x;
}

// TRASH ❌ does not match the return type and cannot implicitly convert >:^(
public static double method4(int x) {
    x++;
    return x;
}
```

# Exercise ❤️

Write a method `reverseConcat` that takes three input parameters of type String (s1,s2,s3). It should return a value of type String equal to the three input Strings concatenated together in reverse order. Call this from your main method and print the result.

```cs
// method call
reverseConcat("!!", "World", "Hello");

// expected output
"HelloWorld!!"
```

# Dead code

## What is it?

Code that appears after a return statement, or somewhere where it can never be executed, is called dead code.

```cs
public static int method() {
    int x = 42;
    return x;
    Console.WriteLine("i will never print 😭"); // dead code
}
```

# Returning and Conditional Statements

If you use return statements inside a conditional statement, you need to make sure that every possible instance of your program will reach a return statement.

```cs
// notice the return statement in each branch
public static int absoluteValue(int x) {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}
```

# Mini quiz 2

## Q1

Will it run?

```cs
public class Program
{
	public static void Main () {
	    int result = executeTrash(42, "yeet");
	    Console.WriteLine(result);
	}

	public static int executeTrash(int x, string y) {
        if (x > 0) {
            return x;
            Console.WriteLine(y);
        } else {
            Console.WriteLine(y + y + y);
            return;
        }
        return x++;
    }
}
```

No lol, the program is going to error our at the `return;` statement and there is a lot of bad practices going on here

```cs
public class Program
{
	public static void Main () {
	    int result = executeTrash(42, "yeet"); // yeet hasn't been cool in a decade
	    Console.WriteLine(result);
	}

	public static int executeTrash(int x, string y) {
        if (x > 0) {
            return x;
            Console.WriteLine(y); // dead code
        } else {
            Console.WriteLine(y + y + y);
            return; // doesn't match return type
        }
        return x++; // dead code
    }
}
```

## Q2

Will it run?

```cs
public class Program
{
	public static void Main () {
	    Console.WriteLine(processTrash(executeTrash(42)));
	}

	public static int executeTrash(int x) {
        x++;
        {
            int y = 42;
            x = x * y;
        }
        return x;
    }

    public static string processTrash(int x) {
        return "Why would you do this lol " + x;
    }
}
```

YES, although a bit hard to follow

# Exercise ❤️

Write a method that computes the cube of a number :^)
