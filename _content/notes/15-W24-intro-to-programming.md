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

## Value Methods

# Custom Methods

It is good practice to either have the main method as the first or last method in the class.
