---
# General Information
category: "Intro to Programming"
number: 2
type: "Lecture"
title: "From Flowgorithm to C#"
created: "2024-02-01T12:17:29Z"
link:
  {
    text: "slides",
    href: "/assets/notes/W24-intro-to-programming/slides/02.pdf",
  }
---

# Creating a Project in Visual Studio

- Step 1) Create a new project, let’s call it “Exercise 1”

- Step 2) Choose C# and select the console app

- Step 3) Configure your new project and enable the option `place solution and project in the same directory`. NOTE: A directory, in computing, is a container used to organize files into a hierarchical structure. It is commonly referred to as a folder in graphical user interfaces. Notice the file path of the location of the project, this is where your work is going to be stored.

- Step 4) Choosing the framework. First select ‘.NET 6.0’ and enable the option ‘Do not use top-level statements’

## Locating a Project

Right click > Open Folder in Explorer

## Why are there so many files?

`Program.cs` is the source code containing our code, however the other files are necessary to make the project work correctly.

## Build-related files

These files might include solution files (`.sln`), project files (`.csproj`), or other files related to the build configuration of the project. (everything stored in `bin/` and `obj/`)

- The `.sln` file (short for solution) stores information about the projects within the solution, their dependencies, build configurations, and other solution-level settings.
- The `.csproj` file (short for project) contains metadata about the project, including references to source code files, assembly references, compiler options, build settings, and other project-specific configurations. In summary, it’s data about data.
- The `bin/` directory (short for binary) typically stores the binary/executable files produced by the build process. In the context of a C# console application, this directory will contain the compiled executable (.exe) file
- The `obj/` directory (short for object) is used as a temporary directory during the build process.

Program.cs: This file typically contains the entry point of the application (in this case, our console application), the Main method. It's where the execution of the program begins.

# Zipping a Project

Compress the whole project to submit on Lea

# Getting in the Code

`Program.cs` is where you write C# code

## What lines of code are statements?

Broadly speaking, there are 3 different kinds of ‘lines’ of code you can write:

- Code that defines where a block starts and ends. These lines either end with an open curly bracket, or the whole line is a single close curly bracket.
- A line of code that does something. These are statements and end with a semi-colon.
- A comment.

## What is a method?

- A method is named sequence of statements
- Usually a method performs a specific task or operation.
- They can also be called “Functions”

We will explore this concept in greater detail later on in this course where we will learn how to make our own methods

## What is a namespace?

- A namespace is a way to organize and encapsulate related classes, interfaces, structures, enums, and other types within a logical and hierarchical structure.
- As C# allows multiple types with the same name as long as they exist in different namespaces, namespaces help avoid naming conflicts in large and complex codebases.
- They are particularly valuable in large projects where numerous developers may contribute, as they help prevent unintentional name clashes and make it easier to understand the purpose and scope of various parts of the codebase.

## What does it mean to ‘use’ a namespace?

- Using a namespace involves referencing and making available the types (classes, interfaces, etc.) defined within that namespace in your code. This simplifies code a lot, making it more readable and reducing redundancy.
- This is particularly important in large projects where there is a lot more going on that we need to manage.

## What about ‘using System’?

- Access to Fundamental Types: The System namespace includes primitive types.
- Console Input/Output Operations: The Console class, which is part of the System namespace, provides methods for reading from and writing to the console. The `Console.WriteLine()` and `Console.ReadLine()` methods, for example, are commonly used in console applications.
- … and so much more! However those details will be explored later on in the course
- In C#, certain fundamental namespaces, including System, are automatically imported into your code by default. This means that you don't always need to explicitly specify using System; in your code for basic functionality. The default inclusion of essential namespaces is part of the language design to simplify the writing of common code and reduce boilerplate.

# Good practice

- In C# you need spaces between keywords
- You can write entire programs on one line if you were really determined, however without tabs and newlines, the program becomes hard to read!
- Some editors automatically format the code, but in general it is good practice to make sure to keep your program organized and easy to read!
- To make your code more readable there are rules about when to have new line, and how to indent things. (see slides for details)

# Program Flow

The computer will execute the statements (inside a method) from top to bottom.

# Modern C#

Since [2022](https://blog.ndepend.com/modern-c-hello-world/), a beginner doesn’t even need to know what a class or a method is to start writing a small working program.

# Exercises

- “Hello World” > `.zip`
- “Hello `<your name>`” but in C# this time
