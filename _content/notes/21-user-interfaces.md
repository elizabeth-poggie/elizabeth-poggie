---
# General Information
category: "User Interfaces"
number: 21
type: "Lecture"
title: "Form Validation"
created: "2024-03-23"
---

# Important Dates

- Lab 4 (last lab) 👉 due the 19th
- Test 2 (final test) 👉 the 23rd
- Remainder of the class afterwards is coasting on the final project (details on that next week)

# Evaluation Criteria

- You will be evaluated on the last assignment as if you were in an intern at a company. Created by the Director of Engineering & Infrastructure @ MaintainX, I adapted the content for the classroom. Shout out to Omar for wanting a rubric in advance which inspired the idea.

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

Before submitting data to the server, it is important to ensure all required form controls are filled out, in the correct format. This is called client-side form validation, and helps ensure data submitted matches the requirements set forth in the various form controls.

```text
❌ BAD - no input validation ❌

(client) 💻 🗑️ -- POST --> 🗃️ (server)


✅ GOOD - input validation ✅

```

Client-side validation is an initial check and an important feature of good user experience; by catching invalid data on the client-side, the user can fix it straight away.

# Is this enough?

No lol.

client-side validation should not be considered an exhaustive security measure! Your apps should always perform security checks on any form-submitted data on the server-side as well as the client-side, because client-side validation is too easy to bypass
