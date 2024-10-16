const student = {
  name: "Your name",
  id: 12345,
  rScore: 90000,
  greet() {
    console.log("Hey there, " + this.name + "!");
  },
  reminder: () => console.log(`Did you know that you have a Test last Friday?`),
  calculateRScore(wow) {
    // at this fictitious school, the r score only goes up
    this.rScore += wow;
  },
};

student.greet();
student.reminder();
student.calculateRScore(42);
console.log(student.rScore);
