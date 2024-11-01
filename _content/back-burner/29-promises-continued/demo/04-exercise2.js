// Step 1: Create an Essay
async function writeEssay(essay) {
  console.log("Creating essay...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  if (essay.content) {
    return { ...essay, id: 1, status: "created" };
  } else {
    throw new Error("Failed to write essay lol");
  }
}

// Step 2: Review the Essay
async function reviewEssay(essay) {
  console.log("Reviewing essay...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  if (essay.status === "created") {
    return { ...essay, status: "reviewed" };
  } else {
    throw new Error("Didn't Review lol");
  }
}

// Step 3: Submit the Essay
async function submitEssay(essay) {
  console.log("Submitting Essay on Lea...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  if (essay.status === "reviewed") {
    return { ...essay, status: "submitted" };
  } else {
    throw new Error("Cannot submit essay: Omnivox is down again lol");
  }
}

try {
  // notice that each call relies on the previous call so we can't use "Promise.all"
  let essay = await writeEssay({
    title: "Humanities Essay",
    content: "Wow this is an essay",
  });
  essay = await reviewEssay(essay);
  essay = await submitEssay(essay);
  console.log("Essay status:", essay.status); // Should print "submitted"
} catch (error) {
  console.error(error.message);
}
