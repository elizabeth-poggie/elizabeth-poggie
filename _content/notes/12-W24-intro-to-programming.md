---
# General Information
category: "Intro to Programming"
number: 11
type: "Lecture"
title: "Arrays III"
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

the reference to the array/the address in memory of the first element of the array.

What is the value of nums[1]?

👉 0

# Arrays && Arithmetic

## What prints?
