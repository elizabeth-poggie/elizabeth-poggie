---
# General Information
category: "User Interfaces"
number: 4
type: "Lab"
title: "Mobile First ™"
created: "2024-04-01"
---

# Overview

- Worth: This lab will count towards the ‘lab’ portion of your final grade at 12.5%
- Due: April 19, 2024 (by ‘end of day’)
- Hand In: A `.zip` file containing your folder (work) onto LEA.
- Late Penalty: Late submissions lose 10% per day to a maximum of 3 days. Nothing is accepted after 3 days and a grade of zero will be given.

# Goal

In this lab we will develop and practice intermediate CSS layout skills by leveraging Flexbox and Responsive CSS Techniques. If you prefer to use CSS Grid, go for it !! The goal is to make your website responsive and adapt for Mobile, Tablet, and Desktop devices building off of what we did last lab.

For those of you who took the time to create maintainable code last lab, you will find this lab relatively quick to do despite seeming like a lot of work. This is by design as most developer's re-use logic they use from previous projects in future work. Think like a lazy person, keep it simple and do more with less :^)

# Part 1) Value Generation (50%)

Building off of your [lab 3](./notes/lab-3-user-interfaces), your website now features an entertainment section emulating TikTok's [homepage](www.tiktok.com/en/). When a user clicks on the "Get Educated" tab of your revised nav bar:

![nav](/assets/notes/W24-user-interfaces/labs/04/New-Nav.png)

They should be redirected to the following page:

![design](/assets/notes/W24-user-interfaces/labs/04/DESKTOP-TikTok.png)

Please note that your solution does not need to be a perfect copy, however, you should aim to make it as close as possible while factoring in your particular brand styling:

![specs](/assets/notes/W24-user-interfaces/labs/03/lab3-specs.png)

Feel free to reuse any branding elements created in Lab 3 for Lab 4, work smarter not harder :^)

## Updated Requirements

- Your navbar must be constantly shown at the top of the viewport. (look up "sticky nav bars")
- Clicking on the logo should take the user to the main page (`#`)
- Clicking on any link other than "Get Educated" should take the user back to the main page (`#`)

# Part 2) Responsive Design (10%)

Implement the following breakpoints:

- Mobile: 594 px and below
- Tablet: 595px to 1076px
- Desktop: 1077px and above

And for each breakpoint, factor in the below layouts ...

# Part 3) Get Educated Page (20%)

Tablet

![design](/assets/notes/W24-user-interfaces/labs/04/TABLET-TikTok.png)

Mobile

![design](/assets/notes/W24-user-interfaces/labs/04/MOBILE-TikTok.png)

# Part 4) Home Page (20%)

Desktop

![design](/assets/notes/W24-user-interfaces/labs/04/DESKTOP-home.png)

Tablet

![design](/assets/notes/W24-user-interfaces/labs/04/TABLET-home.png)

Mobile

![design](/assets/notes/W24-user-interfaces/labs/04/MOBILE-home.png)

# Hints

For the content and styles, re-use the work did for lab 3 to save on time.

For the component you’re working on, begin by getting all the content onto the page before beginning to style it. In other words, do the HTML and then do the CSS. If you get stuck, use Chrome DevTools.

Use this [HEX color picker](https://imagecolorpicker.com/en) if you want to steal colors from TikTok.

For icons, you can look [here](https://www.svgrepo.com/svg/488230/home-3) for SVGs.

# Evaluation Criteria

## Meets Requirements

The task meets all specified requirements as outlined in the given instructions.

Considerations:

- Have you integrated prior task feedback and class discussions into your code?
- Have you thoroughly reviewed all the task details before your final submission to ensure compliance with requirements?
- Have you clarified any ambiguities or uncertainties regarding the task requirements before proceeding with your submission?

Anti-pattern:

- You submit an an incomplete solution

## Code Quality

This aspect evaluates the overall quality of the code. High-quality code should be well-structured and easy to understand.

Considerations:

- Are variable names descriptive and meaningful?
- Are error handling mechanisms informative, providing meaningful feedback to users?
- If modularization is possible, is it implemented effectively, ensuring clear separation of concerns?
- If a design pattern can be leveraged, is it applied correctly and in alignment with the intended use case?

Anti-pattern:

- Submitting unreadable and not well documented code that crashes on error.

## Best Practices

The code follows established coding conventions and standards, promoting scalability, reliability, and maintainability over time.

Considerations:

- Are variable names consistently written in `camelCase` format?
- Does the code maintain consistent indentation and formatting throughout?
- Are comments used effectively to explain complex sections of code or document important decisions?
- Have you minimized code duplication?

Anti-pattern:

- The code does not incorporate any of the material covered in class.

## Logic

The code logic should be clear, concise, and logically sound to ensure proper functioning with minimal complexity. You do more with less.

Considerations:

- Have you optimized your solution to be as simple as possible while still meeting requirements?
- Can any parts of the code be made more concise without sacrificing functionality or readability?

Anti-pattern:

- Proposes impractical or over-engineered solutions that do not meet task requirements

## Bugs

There are no additional defects, errors, or issues present in the code.

Considerations:

- Have you tested your solution, including edge cases, to ensure the program doesn't crash?
- If your solution involves user interaction, have you implemented input validation?

Anti-pattern:

- The code crashes on edge cases and does not provide effective error handling

## Creativity Bonus

The code takes an innovative and original approach. Creativity in software development can manifest in various ways, such as unique interface designs, unconventional problem-solving approaches, innovative algorithms, or novel functionalities that enhance user experience or efficiency.

Considerations:

- Did you demonstrate out-of-the-box thinking?
- Did you incorporate your own touch into the solution?

Anti-pattern:

- Fulfills the minimum requirements without innovation or originality.
- Demonstrates a reluctance to explore new ideas or take calculated risks in problem-solving.
- Fails to incorporate diverse perspectives or consider alternative methods, resulting in stagnation.

## Leadership Bonus

Demonstrates [leadership skills](https://www.amazon.jobs/content/en/our-workplace/leadership-principles).

Considerations:

- Demonstrates understanding of tasks by asking clarifying questions.
- Respectfully challenges decisions in instances of disagreement.
- Consistently supports the success of peers through coaching or mentoring. (not by copy and pasting solutions tho lol, that's plagiarism)
- Enhances the class experience by identifying and suggesting improvements.
- In group activities, you are the go to person to communicate the work to the class.

Anti-pattern:

- Does not accept feedback from their peers or the prof.
- Actively promotes a negative outlook for the class or alienates individuals without offering constructive solutions.
- Avoids taking responsibility for errors or setbacks, deflecting blame onto others or external factors.

## Timely Submission

Ensures punctual submissions.

Considerations:

- Demonstrates awareness of when to seek guidance on tasks, allowing ample time before the deadline.
- Communicates any personal circumstances preventing timely submission.
- Successfully prioritizes tasks, allocating appropriate time to major components versus minor details.
- Avoids scope creep to adhere to deadlines; while creativity is valued, it should not impede timely submission.

Anti-pattern:

- Repeatedly misses deadlines
- Fails to proactively communicate obstacles
