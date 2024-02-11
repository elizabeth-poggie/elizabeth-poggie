---
# General Information
title: "Lecture 4"
subtitle: "Comparison & Conditionals"
date: "2024-02-08T12:17:29Z"
course: "Intro to Programming"
type: "Lecture"
slides: "/assets/notes/W24-intro-to-programming/slides/04.pdf"
---

# Relational Operators

## Intro

Used to check conditions and make comparisons. For example: "Is chicken cheaper than beef?" The result is either `true` or `false`, that is the result is a boolean value.

Expressions containing relational operators are called "boolean expressions" and we use a boolean variable to store the result of a boolean expression.

## RELATIONAL operators

Determines whether specific relationships exists between values. Examples

```cs
// Is x greater than y?
x > y
// Is x less than y?
x < y
// Is x greater than or equal to y?
x >= y
// Is x less than or equal to y?
x <= y
```

Some Examples:

```cs
8 >= 6
true        // Result
```

```cs
8 >= 8
true        // Result
```

NOTE:

- `<=` and `>=` test more than one relationship. If one relationship is true, the expression would be true.
- `>=` checks if the operand on the left side is greater than or equal to the operand on the right side.
- `<=` checks if the operand on the left side is less than or equal to the operand on the right side.

## EQUALITY operator

- Determines whether the two operands are equal to one another.
- Let b be a variable of type boolean, b evaluates to the same value as b

```cs
// Is x equal to y?
x == y
// Is x not equal to y?
x != y
```

Some Examples:

```cs
1 == 1
true        // Result
```

```cs
4 == 2
false       // Result
```

## Relational Operators - Order of Operations

- Relational: `<`, `>`, `<=`, `>=`
- Equality: `==`

You can always use parenthesis () to raise priority

## Common Mistakes

Common error: use a single `=` instead of a double `==`.

- The single `=` is the assignment operator.
- The double `==` is the equality operator.

There is no such thing as ≠, ≥, =<, or => ❌

The two sides of the relational operator need to be comparable.

- `2 == 2.0` is true.
- `2 == “2”` does not compile. ❌

# Logical Operators

## Intro

Logical operators take boolean expressions (i.e. expressions that evaluate to a boolean value) as inputs and produce a result of type boolean

## In C# and Flowgorithm

- NOT `!`
- AND `&&`
- OR `||`

## NOT operator

- NOT is a unary operator: it takes 1 input
- Let `b` be a variable of type boolean, `!b` evaluates to the opposite value of `b`

Some Examples:

```cs
!(2<3)
!true       // Step 1
false       // Result
```

```cs
!(1.0 == 2.0)
!false          // Step 1
true            // Result
```

## AND operator

- AND is a binary operator: it take 2 inputs
- Let `a` and `b` be two variables of type boolean, `a && b` evaluates to true if and only if both `a` and `b` are `true`.

Some Examples:

```cs
(1<2) && true
true && true        // Step 1
true                // Result
```

```cs
(2 == 2) && !(3<5)
true && !true       // Step 1
true && false       // Step 2
false               // Result
```

## OR operator

- OR is a binary operator: it takes 2 inputs
- Let `a` and `b` be two variables of type boolean, `a || b` evaluates to false if and only if both `a` and `b` are `false`

```cs
(1>2) || true
false || true       // Step 1
true                // Result
```

```cs
(2 == 1) || ! (1<2)
false || ! true     // Step 1
false || false      // Step 2
false               // Result
```

## Logical Operators - Order of Operations

From left to right:

- `!`
- `&&`
- `||`

As usual, you can use parenthesis () in order to change the priority.

# Order of Operations

## From left to right ...

- Parenthesis
- `!`
- Typecasting
- Arithmetic
  - `\*`, `/`, `%`
  - `+`, `-`
- Comparison
  - Relational: `<`, `>`, `<=`, `>=`
  - Equality: `==`, `!=`
- Boolean: `&&`, `||`

## For Example ...

What does `false || 1 / (int) 2.0 < 3.5` evaluate to?

```cs
false || 1 / (int) 2.0 < 3.5
false || 1 / 2 < 3.5            // Step 1
false || 0 < 3.5                // Step 2
false || true                   // Step 3
true                            // Result
```

# Conditional Statements

## Why use Conditional statements?

So far all the programs we wrote had a sequential structure. i.e. the statements were executed in the order they appear in the code. A code that has a decision structure is a code that performs specific actions only if a condition exists.

We use conditional statements when we need to make a decision in our code. These are often called Decision or Control Flow structures.

## How can we use Booleans?

To write useful programs, we almost always need to check conditions. We might want to execute certain statements only if something is true. Conditional statement give us this ability

The simplest conditional statement is the `if` statement.

## What is the if statement?

When an if statement is executed, the condition is tested. If the condition is true, the block statements are executed. Otherwise, block statements are skipped.
