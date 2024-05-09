---
# General Information
category: "Intro to Programming"
number: 19
type: "Lecture"
title: "Supplementary Material"
created: "2024-05-09"
---

# What is WPF?

This stands for "Windows Presentation Foundation" and is a UI framework for creating Windows desktop applications.

## Some Examples?

- Flowgorithm
- Visual Studio
- VSCode
- ... and so much more

## Why do i care?

Working with console applications is cool and all however let's bring it to the next level. What are common UI elements that you use on a daily basis?

- Text boxes
- Buttons
- Animations

## How do i get it?

It's built into `.NET` and is compatible with all the C# code you have written so far.

## How is it built?

Uses Extensible Application Markup Language (`XAML`) to create UI Elements.

Take this C# snippet for example:

```cs
Console.WriteLine("Hello World")
```

in `XAML` it would look like this:

```xaml
<Grid>
    <TextBlock>Hello World</TextBlock>
</Grid>
```

## Look familiar?

If you have worked with `yaml` or `html` this will look very similar

# Getting Started

To begin making your own WPF application:

- Navigate to `Visual Studio`
- Select `WPF Application`
- Name your project and select `place solution and project in the same directory`
- Select `.NET 6.0` and then hit `Create`

Now you are ready to go. When you run the app you get a blank screen which is the empty user interface of your project.

## Main Window

Notice that once you open your project, you have a `MainWindow.xaml` and `MainWindow.xaml.cs` file

The `.xaml.cs` file is the "code behind" your user interface `.xaml` file. They work together to create an application

## What does this mean for us?

In our `.xaml` file we are going to be putting things like text boxes and buttons.

In the `.xaml.cs` file we are going to tell what the program to do when those visual elements are interacted with.

## How do i add UI elements to our application?

Open up the `Toolbox` on the left hand side of your application. Here you will notice a bunch of fun elements that you can add to your `.xaml` file. Navigate to the `.xaml` and start by taking a `TextBlock` and dragging it onto the main UI window in the top center view of your application.

Notice that when we drag and drop it onto our form, our `.xaml` is updated to reflect those changes
