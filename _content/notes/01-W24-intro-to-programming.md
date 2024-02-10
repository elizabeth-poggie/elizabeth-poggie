---
# General Information
title: "Lecture 1"
subtitle: "Introduction to Programming"
date: "2024-01-30T12:17:29Z"
course: "Intro to Programming"
type: "Lecture"
slides: "/assets/notes/W24-intro-to-programming/slides/01.pdf"
---

# What is programming?

## Introduction

Programming is the process of writing instructions for a computer to follow in order to perform a specific task or solve a problem.

## Languages

How are we writing these instructions? How do we communicate with the computer? We need to use a language that the computer understands.

- Natural languages - English, French, etc (what we understand)
- Formal languages - Designed by people for specific applications. The language follows strict rules. (what the computer understands)

Why do we need language with stricter rules? Why can’t we just tell the computer in plain english to solve a problem for us?

- Ambiguity. People deal with it by using contextual clues and other information, computers don’t do that For example:

## “The lady hit the man with a child”

- A lady hit a man who had a child with him?
- A lady used a child as a weapon to strike a man?
- A lady and a child ganged up to assault a man?

Computers are dumb. Computers don’t understand context and cannot fill in blanks.

## “Break a leg”

Formal languages mean exactly what they say, while natural languages are full of idioms and analogies.

# Programming Languages

For this course we will be looking at C#

## Tools

- The tool to create a C# program is Visual Studio 2022​. Download it [here](https://visualstudio.microsoft.com/vs/community/)
- Install .NET 6.0 [here](https://dotnet.microsoft.com/en-us/download/visual-studio-sdks)

To know what version you need to install, you will have to check your computer! As a general rule:

- x64 is the processor architecture of 64 bits. Most PCs have Intel or AMD processors with 64 bits architecture. Macs prior to 2020 have Intel 64 bit processors. Choose if on a PC or MAC prior to 2020.
- x32 is the processor architecture of 32 bits. More than 10 years old PCs have Intel or AMD processors with 32 bits architecture.
- Arm64 is the processor architecture of that Apple is using on their newer iMac and Mac laptops:

# Why?

But why do we need these tools? How do I know which version to choose?
… For this we need to understand the difference between low level and high level formal languages.

## Low-level vs high-level languages

Low level - Language “spoken” by your computer. For example:

- Machine Language - It is directly understood by the computer. It needs no translation.
- Assembly Language - First step to improve readability of Machine languages. Easier than Machine code, but still pretty difficult to understand.
- They are hardware specific; Programs written in low-level languages cannot run on any computer.

High-level - Programming languages that use English and mathematical symbols in their instructions.

- Easier to read, so used by most programers
- Programs are portable: they can run on different kinds of computers.

## Translation

High-level languages cannot be directly understood by computers. They need to be translated into machine code. This is where our software development tools come into play.

- Step 1) The C# code is compiled by a compiler in an intermediate language (IL) . This IL code is contained in an assembly file with the extension .dll or .exe.
- Step 2) When you run a C# program, the .NET runtime environment (Common Language Runtime or CLR) is responsible for executing it. During runtime as the program is getting executed, the IL is translated into native machine code specific to the underlying hardware and operating system. This process is called Just-in-time Compilation (JIT) because the translation is happening “just in time”.

Both the CLR and JIT compiler know what hardware the computer consists of and compiles IL into a native code that the CPU is comfortable with.

# A programming mindset

We have the tools to talk to computers, now we need to think like computers. And for this we will be using the Flowgorithm tool before we start working towards more complicated topics.

# Variables

## Introduction

A variable is a named location that stores a value. By location we mean a place in the memory of the computer. variables are case sensitive.

## Lifecycle

```md
Declaration --> Initiation --> Manipulation
```

## Why?

- Code readability
- Code generalization
- Temporary storage for partial results

# Exercises

Write a Flowgorithm program that ...

- prints “Hello World”
- prints “Hello `<your name>`”
- ... and does basic math
