// Step 1: Create an Essay
function writeEssay(essay) {
  return new Promise((resolve, reject) => {
    console.log("Creating essay...");
    setTimeout(() => {
      if (essay.content) {
        resolve({ ...essay, id: 1, status: "created" });
      } else {
        reject("Failed to write essay lol");
      }
    }, 3000);
  });
}

// Step 2: Review the Essay
function reviewEssay(essay) {
  return new Promise((resolve, reject) => {
    console.log("Reviewing essay...");
    setTimeout(() => {
      if (essay.status === "created") {
        resolve({ ...essay, status: "reviewed" });
      } else {
        reject("Didn't Review lol");
      }
    }, 3000);
  });
}

// Step 3: Submit the essay
function submitEssay(essay) {
  return new Promise((resolve, reject) => {
    console.log("Submitting Essay on Lea...");
    setTimeout(() => {
      if (essay.status === "reviewed") {
        resolve({ ...essay, status: "submitted" });
      } else {
        reject("Cannot submit essay: Omnivox is down again lol");
      }
    }, 3000);
  });
}

// Chaining the functions
writeEssay({ title: "Humanities Essay", content: "Wow this is an essay" })
  .then((essay) => reviewEssay(essay))
  .then((essay) => submitEssay(essay))
  .then((essay) => console.log("Essay status:", essay.status)) // Should print "submitted"
  .catch((error) => console.error(error));
