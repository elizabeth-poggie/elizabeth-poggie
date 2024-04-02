---
# General Information
category: "User Interfaces"
number: 19
type: "Lecture"
title: "HTML Forms"
created: "2024-03-23"
---

# Intro

Forms are the primary interactive component of websites. Forms allow users to enter data, which is generally sent to a web server for processing and storage, or used immediately on the browser to update the interface.

For this lecture, we will stick to the basics and in later classes you will cover server-side and client-side JavaScript related logic for forms.

# Basic structure

Forms are made of 4 primarily components:

- One `<form>` container element that wraps all form elements;
- One or more `<input type="">` element where users enter data (e.g., `type=search` for a search bar, or `type=radio` to select one of many options)
- An `<input type=submit>` element or a `<button>` element for triggering the submission;
- `<label>` elements that visually identify `<input>` elements

For example:

```html
<form action="/yeet-data">
  <label for="nameF">Username</label>
  <input type="text" name="nameFirst" id="nameF" />

  <label for="nameL">Password</label>
  <input type="text" name="nameLast" id="nameL" />

  <input type="submit" value="Login in" />
</form>
```

should give the following basic layout:

```text

Username
 ________________________
|________________________|

Password
 ________________________
|________________________|

 ________________________
|                        |
|         Log in         |
|________________________|

```

Look familiar? You can find this snippet of logic implemented on practically every website you have visited today alone. Let's look at each element in detail...

# Form Element

The `<form>` tag is used to create an HTML form for user input:

```html
<form>
  <!-- other stuff -->
</form>
```

However the above example is still useless as it does nothing and sends nothing.

If you want the form to send data, you need to include it's most important attribute `action="..."`, which defines the URL of where to send the data.

```html
<form action="/yeet-data">
  <!-- other stuff -->
</form>
```

The URL usually points to a server-site script, in this case "/yeet-data" which will parse the data (categorize it) and store it. You will explore that fun stuff later on :^) problems for future you!!

However the form is still useless as it still does nothing. How do we fix this? This is where the next most important attribute `method="..."` comes into play, this specifies the HTTP method you intend to use when the form is submitted (GET or POST).

```html
<!-- This will send && receive requests to the current URL declared in the parent form element -->
<form method="get">
  <!-- other stuff -->
</form>
<!-- other stuff -->
<form method="post">
  <!-- other stuff -->
</form>
```

But what does "GET" mean? What does "POST" mean? For now what you need to know is:

- "GET", retries data
- "POST", sends data

Another way to think of this concept is that you want to put a message in an old school envelope,: you're either sending it to a specific address or receiving it from one. Similarly, in our case, the 'address' corresponds to a URL where the 'server' or 'backend' resides, and the 'method' indicates whether we're sending ('POST') or receiving ('GET') data.

```text

✉️ -- POST --> 🗃️ @ url

✉️ <-- GET -- 🗃️ @ url

```

But what does this data look like? Well it depends:

- With a GET method the data is submitted and visible in the URL bar (i.e. to the user).
- With a POST method, the data is encoded in the `html` request body and can be encrypted (with `https`).

As a general rule: always use POST if the form data contains sensitive information.

We always strive to make our info more confidential, especially when it's personal.
This practice ensures that even if someone attempts to intercept your 'POST' request,, they'd need mad IQ skills to decrypt the sensitive info sent to the server. Going back to our message analogy, imagine if someone tried to scan your risque envelopes or screenshot your private texts, your haters would need mad EQ skills to understand the nuances of your communication. (Stay bothered, we love verbal boundaries)

```text
✉️ -- POST -- (your haters) --> ❤️ (your loved ones)
```

What are other relevant attributes? It depends on the use case, the full docs can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes)

Cool, so we have have a way to decide how data is sent and received. We also know how to send it, but now how do we account for user input? Let's get into it :^)

# Input Element

Allowing for user input looks like this:

```html
<input />
```

You will notice that by default, the `input` element creates a basic single-line text field. This is due to the adaptability of the `<input>` element, which can be presented in various formats depending on the `type` attribute. In its default state, the type attribute is set to `type="text"`.

## Text inputs

```html
<!-- Text Input: for short text or alphanumeric data -->
<input type="text" placeholder="I am a cool text input" />

<!-- Password Input: for securely entering passwords -->
<input type="password" placeholder="I contain secrets 🤫" />

<!-- Search Input: for searching within a website or application -->
<input type="search" id="search" name="search" placeholder="Search" />
```

## Select inputs

```html
<!-- Checkbox Input: for selecting multiple options -->
<input type="checkbox" id="option1" name="option1" value="option1" />
<label for="option1">Option 1) Cute cat</label><br />
<input type="checkbox" id="option2" name="option2" value="option2" />
<label for="option2">Option 2) Cute dog</label><br />

<!-- Radio Input: for selecting one option from multiple -->
<input type="radio" id="radio1" name="radioGroup" value="option1" />
<label for="radio1">Option 1</label><br />
<input type="radio" id="radio2" name="radioGroup" value="option2" />
<label for="radio2">Option 2</label><br />

<!-- Submit Button: for submitting form data -->
<input type="submit" value="Submit" />
```

## Numeric inputs (including date && time)

```html
<!-- Number Input: for entering numerical values -->
<input type="number" id="quantity" name="quantity" min="1" max="10" />

<!-- Date Input: for selecting dates -->
<input type="date" id="birthday" name="birthday" />

<!-- Time Input: for selecting times -->
<input type="time" id="appt" name="appt" />
```

## File inputs

```html
<!-- File Input: for uploading files -->
<input type="file" id="fileUpload" name="fileUpload" />
```

## ... and more

Are there more options? [Yes lol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input). Use them wisely depending on the project

# Text area

...

# Putting it all together

```html
<!-- Form which will send a GET request to the current URL -->
<form method="get">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Do you agree to the terms?</legend>
    <label><input type="radio" name="radio" value="yes" />YES</label>
    <label><input type="radio" name="radio" value="no" />Absolutely not</label>
  </fieldset>
</form>
```

# Exercises

- [HTML Forms, Exercises 1 - 2](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_forms1)
- [Form Elements, Exercises 1 - 3](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_form_elements1)
- [Input Types, Exercises 1 - 5](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_form_input_types1)
- [Form Attributes, Exercises 1 - 4](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_form_attributes1)
