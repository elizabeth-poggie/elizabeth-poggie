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

# Why WPF?

There is a lot of earning potential that comes with learning `WPF`, but first let's take a moment to appreciate why we are not learning other UI applications that are available to us in `.NET`

## Why not ASP.NET?

`ASP.NET` is a web application that runs on multiple UIs however they are

- Browser Limited
- User Interface focused
- Design Driven - get ready for responsive design

For the purposes of this class, the goal is to become better programmers and not better designers.

## Why not MAUI

`MAUI` is a cross platform application and `WPF` is only windows, however `MAUI` is

- Still in it's early stages
- Not as established so little third party packages.
- It's in the process of maturing, however with time it will likely replace `WPF`

If your intent is to be a better cross platform developer, `WPF` will still be a good stepping stone to this type of application later down the line :)

## Why not Windows Forms?

`WinForms` is lame lmao

- It's old
- It's phasing out
- Has limited Power
- and has limited career potential, get ready to become obsolete asap

# Getting Started

To begin making your own WPF application:

- Navigate to `Visual Studio`
- Select `WPF Application`
- Name your project and select `place solution and project in the same directory`
- Select `.NET 6.0` and then hit `Create`

Now you are ready to go. When you run the app you get a blank screen which is the empty user interface of your project.

## Main Window

Notice that once you open your project, you have a `MainWindow.xaml` and `MainWindow.xaml.cs` file. The `.xaml.cs` file is the "code behind" your user interface `.xaml` file. They work together to create an application

## What does this mean for us?

In our `.xaml` file we are going to be putting things like text boxes and buttons. In the `.xaml.cs` file we are going to tell what the program to do when those visual elements are interacted with.

# User Interfaces

## How do i add UI elements to our application?

Open up the `Toolbox` on the left hand side of your application. Here you will notice a bunch of fun elements that you can add to your `.xaml` file. Navigate to the `.xaml` and start by taking a `TextBlock` and dragging it onto the main UI window in the top center view of your application.

Notice that when we drag and drop it onto our form, our `.xaml` is updated to reflect those changes:

```xaml
<Grid>
    <TextBlock HorizontalAlignment="Left" Margin="74,49,0,0" Text="Text Block" TextWrapping="Wrap" VerticalAlignment="Top"/>
</Grid>
```

And that's it. However notice that the sizing and placing of our `TextBlock` is kinda awkward cause it's assumed our preferred placement.

We can do better.

## Making it more complicated

We can also code directly in in the `.xaml` file:

```xaml
<Grid>
    <TextBlock Text="Hello World" FontSize="100" VerticalAlignment="Center" HorizontalAlignment="Center"/>
</Grid>
```

And just like that you can size your element exactly the way you want it to be.

# User Interaction

## How can we alter our TextBlock from behind the scenes?

First let's update the `Name` of our `TextBlock`

```xaml
<Grid>
    <TextBlock Name="tbHello" Text="Hello World" FontSize="100" VerticalAlignment="Center" HorizontalAlignment="Center"/>
</Grid>
```

Now let's head over to our `.xaml.cs` file and in our `public MainWindow()` you can now access the block simply by typing:

```cs
tbHello
```

and by typing a period `.` you now get access to all it's methods and properties. So for example if instead we don't want the text to say `Hello World`, you can update it accordingly:

```cs
tbHello.Text = "Goodbye World! It's been good!"
```

So now when you save and run this, the text will be updated accordingly
