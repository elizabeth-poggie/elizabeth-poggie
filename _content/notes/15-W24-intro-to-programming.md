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

## Definition

A method is a named block of code that performs a task. Sometime it is referenced to as a function.

We call a method in order to execute the code contained in the method definition.

# Why do we care?

Methods are commonly used to break a problem down into small manageable pieces. If a specific task is performed in several places in the program, a method can be written once to perform that task.

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

## Methods within Methods

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

# Method Strat

Using methods can help you eliminate repetitive code. To solve complex problems a common approach is to break it down into sub-problems. Using methods you can focus on each sub-problem in isolation.

This concept is what is known as `divide and conquer`.

# Exercise

Write a program that displays the lyrics of "Never Gonna Give you up" by Rick Astley

## Solution 1

In the main method, write ONE print statement with all the lyrics.

```text
❌ horrible
❌ unreadable
❌ inefficient
```

When we RickRoll with code, we need to optimize the strategy.

## Solution 2

In the main method, write a print statements, one PER LINE.

```text
✅ readable
❌ inefficient
```

"Never Gonna Give you up" contains a total of 34 lines in its lyrics. We can do better.

## Solution 3

To avoid repetition, create methods for the repeated section of the song: one method for the chorus, and one method for the Verse 1. In the main method, write print statements for Intro and Verse 2, and call the methods when necessary. Something like this:

```cs
public class Program
{
	public static void Main()
	{
		// @TODO
	}

	public static void RickRollChorus()
	{
		// @TODO
	}
	public static void RickRollVerseOne()
	{
		// @TODO
	}
}
```

However we can do better. The song has a lot more structure to it.

## Solution 4

Write the following 6 methods:
Intro(), Verse1(), Chorus(), Verse2(), Verse3(), and Outro(). In the main method, call methods in the appropriate order as demonstrated below:

```text
Intro
Verse 1
Chorus
Verse 2
Chorus
Verse 3
Chorus
Chorus
Outro
```

Gorgeous, but we can optimize the strat further

## Solution 5

Write the previous 6 methods AND one additional method, call it RickRoll(), that displays the lyrics in the right order (by calling the other 6 methods).
In the main method, simply call RickRoll().

```cs
public class Program
{
	public static void Main()
	{
		RickRoll();
	}

	public static void RickRoll () {
		Intro();
		Verse1();
		Chorus();
		Verse2();
		Chorus();
		Verse3();
		Chorus();
		Chorus();
		Outro();
	}

	public static void Chorus()
	{
		// @TODO
	}
	public static void Verse1()
	{
		// @TODO
	}
	public static void Verse2()
	{
		// @TODO
	}
	public static void Verse3()
	{
		// @TODO
	}
	public static void Intro()
	{
		// @TODO
	}
	public static void Outro()
	{
		// @TODO
	}
}
```

Perfection. Why?

```text
✅ readable
✅ well organized
✅ efficient
✅ maintainable
✅ easy to generalize
```
