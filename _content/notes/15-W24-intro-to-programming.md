---
# General Information
category: "Intro to Programming"
number: 15
type: "Lecture"
title: "Methods"
created: "2024-04-14"
---

# What are methods?

Does this look familiar?

```cs
public class Program
{
	public static void Main()
	{
		Console.WriteLine("Hello World");
	}
}
```

## Definitions

A method is a named block of code that performs a task. Sometime it is referenced to as a function.

We call a method in order to execute the code contained in the method definition.

# Why do we care?

Methods are commonly used to break a problem down into small manageable pieces.

## Methods simplify programs

If a specific task is performed in several places in the program, a method can be written once to perform that task. This is known as code reuse and means that you can be lazier with writing programs.

# Examples

## WriteLine

What happens when we run the below?

```cs
Console.WriteLine("Hello World");
```

- We pass the String “Hello World” as input to a method
- The method displays the string on the screen and does not return anything.

## ReadLine

What about this?

```cs
Console.ReadLine();
```

- We pass nothing as input to the method
- The method returns a string containing the user's input from console

## Parse

```cs
string input = Console.ReadLine();
int num = int.Parse(input); // What's happening here?
```

- We pass a string as input to our method called `Parse`
- The method returns an a number

# Varieties

## Void Methods

Some methods take inputs, but return no value:

```cs
Console.WriteLine("Hello World");
```

Some methods take no inputs and return no value.

## Value Methods

Some methods take inputs and return a value.

```cs
int num = int.Parse(input);
```

Some methods take no inputs, but return a value.

# Custom Methods

What happens if I want to create my own methods?

```cs
public static void doNothing() {
    // WIP
}
```

## What is happening here?

- Absolutely nothing
- This is a method that takes no input and returns no result

## How are methods named?

You can name your method as you want except `Main` or any keywords. By convention, always start with lower case letter and use `camelCase`.

## How are they ordered?

It is good practice to either have the `Main` method as the first or last method in the class.

## Observations

`doNothing()` and `Main()` have similar characteristics:

- public: they can be invoked from other classes.
- static: you’ll find out more about this in the future.
- void: they do not return a value.
- parameters: the parenthesis after the method name contain a list of variables, called parameters, where the method stores its argument. `doNothing()` and `Main()` both take no parameters.

# Exercise

Write a method called `myCities` that prints the name of the cities where you have lived (one per line).

```cs
public class Program
{
	public static void Main()
	{
		// @TODO - call method here
	}

	// @TODO - write method here
}
```

To check if it works, call the method `myCities` from the main method and run the program.

# Void Methods

`void` - when used as part of a method header, the keyword void tells the computer that the method does not return anything.

```cs
               👇
public static void doNothing()
```

Can void methods be more more interesting? Yes.

## A Simple Program

```cs
public class Program
{
	public static void Main()
	{
		RickRoll();
	}

	public static void RickRoll()
	{
		Console.WriteLine("Never gonna give you up");
		Console.WriteLine("Never gonna let you down");
		Console.WriteLine("Never gonna run around and desert you");
	}
}
```

and upon running the program I should see:

```text
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
```

# Method calls

There is no limit to how many methods can be called and you can call methods from other methods:

```cs
public class Program
{
	public static void Main()
	{
		RickRoll();
	}

	public static void RickRoll()
	{
		RickRollChorus();
	}

	public static void RickRollChorus()
	{
		Console.WriteLine("Never gonna give you up");
		Console.WriteLine("Never gonna let you down");
		Console.WriteLine("Never gonna run around and desert you");
	}
}
```
