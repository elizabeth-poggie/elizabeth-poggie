---
# General Information
category: "Intro to Programming"
number: 18
type: "Lecture"
title: "Supplementary Exercises"
created: "2024-04-25"
---

# Intro

These are supplementary exercises for all material covered in class designed to give students as much practice as conceivably possible to prepare them for the final project and Test 3.

As a general rule, try to solve the problems independently before reading the solutions. Programming isn't about memorizing solutions ,but rather developing your skills through consistent practice :^)

# Variables - Easy mode

## The Problem

Design a program that converts Celsius (C) temperatures to Fahrenheit (F) temperatures using this formula:

```text
F = 1.8 * C + 32
```

## The Solution

```cs
public class Program
{
    public static void Main()
    {
        // Step 1 - get input && validate it
        Console.WriteLine("Enter the temp in Celsius:");
        double celsius;

        while (!double.TryParse(Console.ReadLine(), out celsius))
        {
          Console.WriteLine("Please enter a valid temperature lol");
        }

        // Step 2 - convert
        double fahrenheit = 1.8 * celsius + 32;

        // Step 3 - output the result
        Console.WriteLine("Fahrenheit equivalent: " + fahrenheit);
    }
}
```

Verify that your specific solution works using [this online calculator](https://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm?arg=90)

# Variables - Hard mode

## The Problem

Write a program that takes a binary number as input, converts it to its decimal equivalent, and then prints the result.

## The Solution

```cs
using System;

public class Program
{
    public static void Main()
    {
        // Step 1 - get input
        Console.WriteLine("Enter a binary number:");
        string binaryInput = Console.ReadLine();


        // Step 2 - convert from binary to decimal
        long decimalValue = 0;
        int exponent = 0;

        for (int i = binaryInput.Length - 1; i >= 0; i--)
        {
            if (binaryInput[i] == '1')
            {
                decimalValue += (long) Math.Pow(2, exponent);
            }
            exponent++;
        }

        // Step 3 - output the result
        Console.WriteLine("Decimal equivalent: " + decimalValue);
    }
}
```

Verify that your specific solution works using [this online calculator](https://www.rapidtables.com/convert/number/binary-to-decimal.html)

# Loops

# Arrays

# Methods
