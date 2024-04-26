---
# General Information
category: "Intro to Programming"
number: 17
type: "Lecture"
title: "Arrays && Methods"
created: "2024-04-25"
---

# Course updates

- May 7th 👉 Lab 4 due
- May 7th 👉 Test 3
- Remainder of the class is coasting on the final project (no final exam for this class)

# Intro

When a single variable is a passed to a method, a COPY of that variable is passed and the original variable value WILL NOT CHANGE at the caller method. For example:

```cs
public class Program
{
	public static void Main () {
	    int x = 5; // scope of x
        method(x); // scope of x
        Console.WriteLine(x); // prints x (in this case 5)
	}

	public static void method(int x) { // scope of copy of x
        x = x + 1; // scope of copy of x
        Console.WriteLine(x); // prints the copy of x (in this case 6)
    }
}
```

This should print something like:

```text
6
5
```

HOWEVER, what happens when we pass an array?

```cs
public class Program
{
	public static void Main () {
	    int[] x = {5};
        method(x);
        Console.WriteLine(x[0]);
	}

	public static void method(int[] x) {
        x[0] = x[0] + 1;
        Console.WriteLine(x[0]);
    }
}
```

This time we should see something like:

```text
6
6
```

What is going on here? I thought what happens in the method, stays in the method? Why is the changes in `method()` being reflected in `main()`?

For this, we need to go back to our earlier lectures and understand what's happening under the hood.

## Addresses and Arrays

When i create an array in the `main` method, in the computer it looks something like this:

```text
    x
    |
    |
    V
 _______
|       |
|   5   |
|_______|
    0
```

and when we call `method(x)` this time, instead of copying the variable to the method, what we are doing is copying the ADDRESS of the array!!

```text
    x,  copy of the ADDRESS of x
    |
    |
    V
 _______
|       |
|   5   |
|_______|
    0
```

So that when i run `x[0] = x[0] + 1`, first I am accessing the value in memory from this address at index 0. Next i am incrementing that value up by one, and finally storying the result of that computation back into the array

```text
    x, copy of the ADDRESS of x
    |
    |
    V
 _______
|       |
|   6   |
|_______|
    0
```

So when the method terminates, the address copy is DESTROYED and i am left with the below in my computer:

```text
    x
    |
    |
    V
 _______
|       |
|   6   |
|_______|
    0
```

Which is why i get `6, 6` being printed in my terminal.

# Exercise ❤️

## Question

Write a method that takes an array of numbers as input and returns a new array containing only the even numbers from the original array.

## Solution

```cs
public class Program
{
    public static void Main(string[] args)
    {
        int[] originalNums = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        int[] evenNums = onlyEven(originalNums);

        Console.WriteLine("Original Numbers:");
        print(originalNums);

        // extra space lol
        Console.WriteLine();
        Console.WriteLine("Even Numbers:");
        print(evenNums);
    }

    public static int[] onlyEven(int[] nums)
    {
        int[] newNums = new int[nums.Length];
        int index = 0;
        for (int i=0; i<nums.Length; i++)
        {
            if (nums[i] % 2 == 0)
            {
                newNums[index] = nums[i];
                index++;
            }
        }

        return newNums;
    }

    public static void print(int[] nums)
    {
        for(int i=0; i<nums.Length; i++)
        {
            // this is not scalable, how could we improve it?
            if (nums[i] != 0) {
                Console.Write(nums[i] + " ");
            }
        }
        Console.WriteLine();
    }
}
```

👆 The above solution still isn't perfect tho, what can we do to improve it?

# Another Example

Lets write a method that takes an array as input and modifies the array such that all the elements are reversed.

```cs
public class Program
{
    public static void Main(string[] args)
    {
        int[] nums = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        // print original before modification
        Console.WriteLine("Original Numbers:");
        print(nums);

        // reverse array
        reverse(nums);

        // extra space lol
        Console.WriteLine();
        Console.WriteLine("Reversed Numbers:");
        print(nums);
    }

    public static void reverse(int[] nums)
    {
        int length = nums.Length;
        for (int i = 0; i < length / 2; i++)
        {
            // temp storage to allow easy swapping
            int temp = nums[i];
            nums[i] = nums[length - i - 1];
            nums[length - i - 1] = temp;
        }
    }

    // keep method from previous example cause we are lazy
    // We do not need to re-implement logic that's already accounted for :^)
    public static void print(int[] nums)
    {
        for(int i=0; i<nums.Length; i++)
        {
            Console.Write(nums[i] + " ");
        }
        Console.WriteLine();
    }
}
```

# Lab time

The remainder of the class is meant for students to get a head start on their lab :)
