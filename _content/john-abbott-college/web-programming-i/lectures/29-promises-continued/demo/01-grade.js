function poggieMustGrade(assignment) {
  return new Promise(function (resolve, reject) {
    // Set a deadline (Wednesday)
    const deadline = new Date("2024-11-03");

    // simulate a wait period of 3 seconds instead of 3 days
    setTimeout(() => {
      // Get today's date
      const today = new Date();
      if (today <= deadline) {
        resolve({ grade: 0.8, comments: ["blah", "blah"] });
      } else {
        reject(
          `Poggie slept thru her deadline and failed to grade your ${assignment.name}`
        );
      }
    }, 3000);
  });
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

poggieMustGrade({
  name: "Assignment 2",
  content: "some really cool code",
})
  .then((feedback) => {
    return checkGrade(feedback);
  })
  .then((response) => {
    sendPoggieDM(response);
  })
  .catch((error) => {
    console.log(error);
  });
