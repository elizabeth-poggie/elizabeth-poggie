---
# General Information
category: "User Interfaces"
number: 21
type: "Lecture"
title: "Form Validation"
created: "2024-04-05"
---

# Course updates

## Important dates

- Solar Eclipse 👉 the 8th (don't come to class, I wont be here lol)
- Guest speaker 👉 the 12th (some questions on this talk will show up on Test 2)
- Lab 4 (last lab) 👉 due the 19th
- Test 2 (final test) 👉 the 23rd
- Remainder of the class afterwards is coasting on the final project (details on that next week)

## Grading Rubric

You will be evaluated on the last assignment as if you were in an intern at a company. Created by the Director of Engineering & Infrastructure @ MaintainX and adapted the content for the classroom, the intent is to set you up for success in your future classes and careers.

Shout out to Omar for wanting a rubric in advance which inspired the idea.

# Form validation

All user interaction requires validation. Users should be prevented from adding garbage as input to prevent unexpected program behavior. To do this with pure html, HTML5 has implemented form controls which allow us to validate user input without JavaScript (or TypeScript).

## Some examples

Specifies whether a form field needs to be filled in before the form can be submitted:

```html
<label for="email">Email:</label>
<!-- notice the required attribute -->
<input type="email" id="email" name="email" required />
```

Specifies the minimum and maximum length of textual data (strings):

```html
<!-- notice minlength and maxlength attributes. What will happen if i enter something thats 22 characters long? -->
<input type="text" id="username" name="username" minlength="4" maxlength="20" />
```

Specifies the minimum and maximum values of numerical input types:

```html
<label for="username">Username:</label>
<!-- notice min and max here. -->
<input type="number" id="quantity" name="quantity" min="1" max="10" />
```

Specifies whether the data needs to be a number, an email address, or some other specific preset type:

```html
<label for="email">Email:</label>
<!-- here the user's input must be formatted as an email address -->
<input type="email" id="email" name="email" />
```

Specifies a regular expression that defines a pattern the entered data needs to follow (advanced):

```html
<label for="postal_code">Postal Code:</label>
<!-- this ensures that the postal code has the proper format -->
<input
  type="text"
  id="postal_code"
  name="postal_code"
  pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
  placeholder="e.g. A1A 1A1"
/>
```

Specifies the increment amounts. (only useful for `type="number"`):

```html
<label for="quantity">Quantity:</label>
<!-- notice how where we increment by 2 -->
<input type="number" id="quantity" name="quantity" step="2" />
```

# Why?

There are three main reasons:

- We want to get the right data, in the right format.
- We want to protect our users' data. (e.g. secure passwords)
- We want to protect ourselves. (e.g. malicious users)

## Validation MATTERS

Before submitting data to the server, it is important to ensure all required form controls are filled out, in the correct format. For example, without input validation the user experience is impacted:

```text
❌ BAD - no input validation ❌

(client) 💻 🗑️ -- POST --> 🗑️ 🗃️ (server wondering why you gave it trash)
```

By factoring in client-side form validation, it helps ensure data submitted matches the expected inputs and or requirements. This improves the user experience because by catching invalid data on the client-side, the user can fix it straight away:

```text
✅ GOOD - input validation ✅

(client) 💻 🗑️ -- 🛑 (nope) -- POST --> 🗃️ (server has no knowledge of the occurrence of trash)
```

Another way to think about this is instead of sending am emotionally driven text to a friend and them wondering why you are being nasty:

```text
❌ BAD - you did not account for your target audience ❌

(you) 🧑 🗑️ -- POST --> 🗑️ 💑 (your loved ones)
```

You can run it by ChatGPT to reformat the text, ensuring it's constructive:

```text
✅ GOOD - you can now refactor what you want to say ✅

(you) 🧑 🗑️ -- 🛑 (ChatGPT) --> 💑 (your loved ones)
```

These principals not only help you maintain relationships with the people you care about, but they also serve to proactively address any errors in form submissions before they occur :^)

## Is this enough?

No lol.

Client-side validation should not be considered an exhaustive security measure! Your apps should always perform security checks on any form-submitted data on the server-side as well as the client-side, because client-side validation is too easy to bypass.

```text
❌ BAD - no server-side input validation ❌

(client) 💻 💣 -- 🤥 (ignorant validator) -- POST --> 💣 🗃️ (server explodes)
```

For those that are more curious about the topic, they can read more about it [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security).

# Other Varieties

In general there are 2 categories of input validation:

- Built-in form validation. (e.g. what's been discussed so far)
- JavaScript validation. (e.g. importing or creating libraries)

## Which one is best?

Well it depends what you care about and what you want to do:

- Built-in form validation 👉 Good performance, not very customizable
- JavaScript validation 👉 Customizable, mediocre performance

# Putting it all together

Let’s create a registration form. Most companies want long-term relationships with their users and to do that they need users to sign up. For example:

```text
First name
 ________________________
|________________________|

Last name
 ________________________
|________________________|

Email Address
 ________________________
|________________________|

Password
 ________________________
|________________________|


 ________________________
|                        |
|        Sign up         |
|           ❤️            |
|________________________|

```

Despite the registration form’s basic appearance, there is a lot to consider. First the HTML form structure:

```html
<form>
  <label for="firstName">First name</label>
  <input type="text" id="firstName" name="firstName" />

  <label for="lastName">Last name</label>
  <input type="text" id="lastName" name="lastName" />

  <label for="email">Email address</label>
  <input type="email" id="email" name="email" />

  <label for="password">Password</label>
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Must be at least 8 characters"
  />
  <input type="submit" value="Sign up ❤️" />
</form>
```

Now how could we factor in input validation to this example? Let's start with the required fields.

```html
<form>
  <label for="firstName">First name</label>
  <input type="text" id="firstName" name="firstName" required />

  <label for="lastName">Last name</label>
  <input type="text" id="lastName" name="lastName" />

  <label for="email">Email address</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Password</label>
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Must be at least 8 characters"
    required
  />
  <input type="submit" value="Sign up ❤️" />
</form>
```

Now how do we display errors to the user if they enter garbage? Well we can indicate the number of current errors in the tab for starters.

```html
<!-- rest of your HTML code -->
<script>
  // Define a variable for errors
  var errors = [];

  // Validate first name
  var firstName = document.getElementById("firstName").value.trim();
  if (firstName === "") {
    errors.push("First name is required.");
  }

  // Validate email
  var email = document.getElementById("email").value.trim();
  if (email === "") {
    errors.push("Email address is required.");
  } else if (!isValidEmail(email)) {
    errors.push("Email address is not valid.");
  }

  // Validate password
  var password = document.getElementById("password").value;
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }

  function signUp() {
    alert("submitted :^)");
  }
  document.title = "(" + this.errors.length + ") " + document.title;
</script>
```

# Exercise

Showing the number of errors is cool and all, however not particularly helpful. A better user experience would be telling the user how they can improve. Follow the example [here](https://www.smashingmagazine.com/2018/10/form-design-patterns-excerpt-a-registration-form/#error-summary) and try to implement an error summary at the bottom of the page :)
