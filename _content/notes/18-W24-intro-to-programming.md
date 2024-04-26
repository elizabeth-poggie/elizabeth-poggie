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

# Variables

## Easy

## Medium

## Hard

Write a program that takes a binary number as input, converts it to its decimal equivalent, and then prints the result.

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

## Easy

## Medium

## Hard

# Arrays

## Easy

## Medium

## Hard

# Methods

## Easy

## Medium

## Hard
