---
# General Information
category: "Intro to Programming"
number: 18
type: "Lecture"
title: "Supplementary Exercises"
created: "2024-04-26"
---

# Intro

These are supplementary exercises for all material covered in class designed to give students as much practice as conceivably possible to prepare them for the final project and Test 3.

As a general rule, try to solve the problems independently before reading the solutions. Programming isn't about memorizing solutions, but rather developing your skills through consistent practice :^)

AS WELL, it's important to note that my solutions may not always be optimal. Problem-solving is inherently a creative process, and alternative approaches, as long as they are logically sound, will receive full marks.

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

# Conditional Statements - Easy Mode

## The Problem

Create a program that prompts the user to enter their exam score and calculates their grade based on the following scale:

- A (90-100)
- B (80-89)
- C (70-79)
- D (60-69)
- F (0-59)

## The Solution

```cs
public class Program
{
    public static void Main()
    {
        // Step 1 - declare variables for storage
        int score;
        char grade;

        // Step 2 - prompt for input
        Console.WriteLine("Plz enter your exam score:");

        // Step 3 - input validation
        while (!int.TryParse(Console.ReadLine(), out score) || score <= 0)
        {
          Console.WriteLine("Invalid input. Please enter a positive integer.");
        }

        // Step 4 - compute the letter grade
        if (score >= 90 && score <= 100)
        {
            grade = 'A';
        }
        else if (score >= 80 && score <= 89)
        {
            grade = 'B';
        }
        else if (score >= 70 && score <= 79)
        {
            grade = 'C';
        }
        else if (score >= 60 && score <= 69)
        {
            grade = 'D';
        }
        else
        {
            grade = 'F';
        }

        // Step 5 - output the result
        Console.WriteLine("Your grade is: " + grade);
    }
}
```

# Conditional Statements - Medium Mode

## The Problem

A company is preparing itself for Halloween. They intend to sell a box of chocolates for `11.99$` (use a constant). The company thought of improving its sales by providing discounts on mass sales as follows:

- 5-9 👉 10% discount
- 10-29 👉 25%
- 30-49 👉 40%
- 50 + 👉 50%

Design a program that asks the user to enter the number of boxes purchased. The program should then display the amount of the discount (if any) and the total amount of the purchase after the discount.

## The Solution

```cs
public class Program
{
    public static void Main()
    {
        // Step 1 - declare constants && variables for storage
        const double pricePerBox = 11.99;
        int boxes;

        // Step 2 - prompt for input
        Console.WriteLine("Welcome to our Halloween Chocolates sale!");
        Console.WriteLine("Each box costs: " + pricePerBox+ "$");
        Console.WriteLine("Please enter the number of boxes you want to purchase:");

        // Step 3 - input validation
        while (!int.TryParse(Console.ReadLine(), out boxes) || boxes <= 0)
        {
          Console.WriteLine("Invalid input. Please enter a positive integer.");
        }

        // Step 4 - compute the total cost BEFORE discount
        double totalCost = boxes * pricePerBox;
        double discount = 0;

        // Step 5 - compute the discount
        if (boxes >= 5 && boxes <= 9)
        {
            discount = totalCost * 0.10;
        }
        else if (boxes >= 10 && boxes <= 29)
        {
            discount = totalCost * 0.25;
        }
        else if (boxes >= 30 && boxes <= 49)
        {
            discount = totalCost * 0.40;
        }
        else if (boxes >= 50)
        {
            discount = totalCost * 0.50;
        }

        // Step 6 - compute the total AFTER discount
        double discountedTotal = totalCost - discount;

        // Step 7 - output the result
        Console.WriteLine("Total cost before discount: " + totalCost.ToString("0.00"));
        Console.WriteLine("Discount applied: " + discount.ToString("0.00"));
        Console.WriteLine("Total cost after discount: " + discountedTotal.ToString("0.00"));
    }
}
```

# Loops

TBD

# Arrays

TBD

# Methods

TBD
