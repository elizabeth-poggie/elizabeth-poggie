async function poggieMustGrade(assignment) {
  // Set a deadline (Wednesday)
  const deadline = new Date("2024-11-03");

  // Simulate a wait period of 3 seconds instead of 3 days
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Get today's date
  const today = new Date();
  if (today <= deadline) {
    return { grade: 0.8, comments: ["blah", "blah"] };
  } else {
    throw new Error(
      `Poggie slept thru her deadline and failed to grade your ${assignment.name}`
    );
  }
}

function checkGrade(feedback) {
  console.log(`grade: ${feedback.grade}`);
  feedback.comments.forEach((comment) => {
    console.log(`${comment}`);
  });
  return true;
}

function sendPoggieDM(res) {
  if (res) {
    console.log("wow the student left me on read");
  }
}

try {
  const feedback = await poggieMustGrade({
    name: "Assignment 2",
    content: "some really cool code",
  });
  const response = checkGrade(feedback);
  sendPoggieDM(response);
} catch (error) {
  console.log(error.message);
}
