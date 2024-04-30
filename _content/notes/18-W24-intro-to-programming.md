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

## The problem

Create a program that prompts the user to enter their name, age, and grade. Use variables to store this information and display it back to the user.

## The Solution

```cs
public class Program
{
    public static void Main()
    {
        // Step 1 - declare variables for storage
        int age, grade;

        // Step 2 - Prompt the user to enter their name
        Console.WriteLine("Plz enter your name:");
        string name = Console.ReadLine();

        // Step 3 - Prompt the user to enter their age
        Console.WriteLine("PLz enter your age:");

        while (!int.TryParse(Console.ReadLine(), out age) || age <= 0)
        {
          Console.WriteLine("Invalid input. Please enter a positive integer.");
        }

        // Step 4 - Prompt the user to enter their grade
        Console.WriteLine("Plz enter your grade:");
        while (!int.TryParse(Console.ReadLine(), out grade) || grade <= 0)
        {
          Console.WriteLine("Invalid input. Please enter a positive integer.");
        }

        // Step 5 - output the result
        Console.WriteLine();
        Console.WriteLine("Student Information ");
        Console.WriteLine("*********************");
        Console.WriteLine("Name: " + name);
        Console.WriteLine("Age: " + age);
        Console.WriteLine("Grade: " + grade);
    }
}
```

# Variables - Medium mode

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

# Loops - Easy mode

## The Problem

Write a program that takes two integers as input `n` and `m` and prints out the first `m` multiples of `n` on one line. For example:

```text
n = 2
m = 3

2 4 6
```

```text
n = 3
m = 2

3 6
```

## The Solution

```cs
public class Program
{
    public static void Main()
    {
        // Step 1 - declare variables for storage
        int n, m;

        // Step 2 - prompt for n and validate it
        Console.WriteLine("Give me an n plz");
        while (!int.TryParse(Console.ReadLine(), out n))
        {
          Console.WriteLine("Please give me a valid number lol");
        }

        // Step 3 - prompt for m and validate it
        Console.WriteLine("Give me an m plz");
        while (!int.TryParse(Console.ReadLine(), out m))
        {
          Console.WriteLine("Please give me a valid number lol");
        }

        // Step 4 - output result
        for (int i = 1; i <= m; i++)
        {
            Console.Write((n * i) + " ");
        }

        // Step 5 - indent to the next line when done
        Console.WriteLine();
    }
}
```

# Loops - Medium mode

## The Problem

Write a program that prints the outline of a triangle made up of `*` signs one character at a time:

```text
*
**
* *
*  *
*   *
*    *
*     *
*      *
*       *
**********
```

## The Solution

```cs
public class Program
{
    public static void Main()
    {
        // Step 1 - determine the height of the triangle
        const int height = 10;

        // Step 2 - output the result
        for (int i = 0; i < height; i++)
        {
            for (int j = 0; j <= i; j++)
            {
                if (j == 0 || j == i || i == height - 1)
                {
                    Console.Write("*");
                }
                else
                {
                    Console.Write(" ");
                }
            }
            Console.WriteLine();
        }
    }
}
```

# Loops - Medium mode

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

# Arrays

TBD

# Methods - Easy Mode

## The Problem

Write a method that takes an integer as a parameter and returns true if it's even, and false if it's odd.

## The Solution

```cs
class Program
{
    public static void Main(string[] args)
    {
        int number = 6;

        if (isEven(number)) {
            Console.WriteLine(number + " is even.");
        } else {
            Console.WriteLine(number + " is odd.");
        }
    }

    public static bool isEven(int num)
    {
        return num % 2 == 0;
    }
}
```

# Methods - Medium Mode

## The Problem

Write a method that implements the logic of `mod` (`%`)

## The Solution

```cs
class Program
{
    public static void Main(string[] args)
    {
        int dividend = 10;
        int divisor = 3;
        int result = mod(dividend, divisor);
        Console.WriteLine("Mod of " + dividend + " % " + divisor + " = " + result);
    }

    public static int mod(int dividend, int divisor)
    {
        // Step 1 - check to see if we are trying to divide by 0
        if (divisor == 0)
        {
            throw new DivideByZeroException("Cannot divide by zero.");
        }

        // Step 2 - do math
        int quotient = dividend / divisor;
        int remainder = dividend - (quotient * divisor);

        // Step 3 - get reminder
        return remainder;
    }
}
```

# Methods - Medium Mode

## The Problem

Write a method that takes a string as a parameter and returns the reverse of that string.

## The Solution

```cs
class Program
{
    public static void Main(string[] args)
    {
        string original = "hello";
        string reversed = reverseString(original);
        Console.WriteLine("Reversed string: " + reversed);
    }

    static string reverseString(string str)
    {
        // Step 0 - convert string to character array
        char[] charArray = str.ToCharArray();

        // Step 1 - set counters
        int start = 0;
        int end = str.Length - 1;

        while (start < end)
        {
            // Step 2 - swap characters at start and end
            char temp = charArray[start];
            charArray[start] = charArray[end];
            charArray[end] = temp;

            // Step 3 - shimmy to next
            start++;
            end--;
        }

        // Step 4 - convert to string
        return new string(charArray);
    }
}
```
