---
# General Information
category: "Intro to Programming"
number: 12
type: "Lecture"
title: "Multidimensional Arrays"
created: "2024-03-21T12:17:29Z"
---

# Array vs String

## What prints?

```cs
string s = "cat";
s = s + "s";
Console.WriteLine(s);
```

👉 cats

## What prints?

```cs
char[] letters = {'c', 'a', 't'};
for(int i=0; i<letters.Length; i++) {
    if(letters[i] == 't') {
        letters[i] = 'r';
    }
}
Console.WriteLine(string.Join("", letters));
```

👉 car

## What prints?

```cs
string s = "cat";
for(int i=0; i<s.Length; i++) {
    if(s[i] == 't') {
        s[i] = 'r';
    }
}
Console.WriteLine(s);
```

👉 Compilation error (line ??, col ??): Property or indexer 'string.this[int]' cannot be assigned to -- it is read only

# Mini Quiz

## What does `null` mean?

It means "nothing". the absence of an address.

```cs
int[] nothing = null;
```

What does this look like in the computer?

```text
 nothing
    |
    |
    V
 _______
|       |
|       |
|_______|

```

## What happens when I run `nothing.Length`?

if we try to access information through a variable with value `null`, the code will yell at us.

## What happens when I run `nothing[0]`?

Also errors >:^(

## What is the anatomy of this array?

```cs
int[] nums  = new int[5];
```

How many elements are in the array?

👉 5

What is the value of the variable `nums`?

```cs
Console.WriteLine(nums);
```

the reference to the array/the address in memory of the first element of the array.

What is the value of nums[1]?

```cs
Console.WriteLine(nums[1]);
```

👉 0

# Arrays && Loops && Arithmetic

## What prints?

```cs
int[] nums  = {-4, 4, 2};
int sum = 0;
for(int i = 0; i < nums.Length; i++) {
    if(i%2 == 0) {
        sum = sum + nums[i];
    }
}
Console.WriteLine(sum);
```

👉 -2

## What prints?

```cs
int[] nums  = {-4, 4, 2};
int sum = 0;
for(int i = 0; i < nums.Length; i++) {
    if(nums[i]%2 == 0) {
        sum = sum + nums[i];
    }
}
Console.WriteLine(sum);
```

👉 2

# Another Example

Let's write a program that takes as input an int x. The program should return true if x is an element of a secret array that only the computer knows, false otherwise.

```cs
// Initialize the array
int[] arr = {1,2,3,4,5};

// Get user input
int x;
while (!int.TryParse(Console.ReadLine(), out x))
{
    Console.WriteLine("Invalid input. Try again!");
}

// Set the default result
bool result = false;

// Now try to find a match
for(int i=0; i<arr.Length; i++)
{
    if (arr[i] == x)
    {
        result = true;
        break; // Exit the loop once the first match is found
    }
}

// print result
Console.WriteLine(result);
```

# Multidimensional Arrays

## What are they?

Arrays of arrays

## How are they declared?

```cs
int[,] alsoAlsoMatrix = {
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
};
```

This creates an array of length 3, containing integer arrays. Each element in the array also has a length of 3 :)

```cs
int[,] matrix = new int[3, 2];
```

This creates an array of length 3. Each element is an integer array of length 2. You can think of it as a 3 by 2 matrix.

```cs
int[,] alsoMatrix = new int[3][];
```

This creates an array of length 3. Each element will be an integer array. For the moment the elements are initialized by default to `null`.

## Examples

## Example 1

```cs
int[,] nums = {
    { 1, 2 },
    { 3, 4 }
};
```

What does this look like in the computer?

```text
   nums
    |
    |
    V
 _______     _______
|       |   |       |
|       |   |       | --------> "..."
|_______|   |_______|
    0           1
    |
    |
    V
 _______     _______
|       |   |       |
|   1   |   |   2   |
|_______|   |_______|

```

what happens when we want to change a number?

```cs
nums[0][1] = 42;
```

nums[0] is an array and arrays are mutable (unlike strings) !! the reference stored in nums[0] did not change !!

```text
   nums
    |
    |
    V
 _______     _______
|       |   |       |
|       |   |       | --------> "..."
|_______|   |_______|
    0           1
    |
    |
    V
 _______     _______
|       |   |       |
|   1   |   |  42   |
|_______|   |_______|

```

## Is there a limit to the amount of dimensions of the multi dimensional array?

NO !!!

You can create as many dimensions as you want !!! For example:

```cs
int[,,] cube = new int[3][3][3];
String[,,,] theFourthWall = new String[2][][][];
```

# Exercise

Write a program that takes a 2D `int` array and prints all the elements of the array, one array per line. For example, if given the below code snippet:

```cs
int[,] nums = {
    { 1, 2 },
    { 3, 4 }
};
```

I should see the following printed to my console:

```cs
1 2
3 4
```

HINT: to get the length of 2D arrays use, `GetLength(index #)`

```cs
int[,] nums = {
    { 1, 2 },
    { 3, 4 }
};

for (int i=0; i<nums.GetLength(0); i++) {
    for (int j=0; j<nums.GetLength(1); j++) {
        Console.Write(nums[i,j]);
    }
    Console.WriteLine();
}
```

# Another example

Write a program that takes a 2D integer array as input and two integers i and j. The program should swap the array in position i with the array in position j.

```cs
int[,] array = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

int i = 0; // Position i
int j = 2; // Position j

// Swap arrays at positions i and j
int[] temp = new int[array.GetLength(1)];
for (int k = 0; k < array.GetLength(1); k++) {
    temp[k] = array[i, k];
    array[i, k] = array[j, k];
    array[j, k] = temp[k];
}

// Now print
for (int x=0; x<array.GetLength(0); x++) {
    for (int y=0; y<array.GetLength(1); y++) {
        Console.Write(array[x,y]);
    }
    Console.WriteLine();
}
```
