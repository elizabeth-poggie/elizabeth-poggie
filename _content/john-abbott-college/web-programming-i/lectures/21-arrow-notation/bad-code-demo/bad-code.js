// @Fix-me
var student = {
  name: "Your name",
  id: 12345,
  rScore: 90000,
  greet: function (name) {
    console.log("Hey there, " + name + "!");
  },
  reminder: function () {
    console.log(`Did you know that you have a Test Friday?`);
  },
  calculateRScore: function (bonus) {
    // at this fictitious school, the rScore only goes up
    this.rScore += bonus;
  },
};

student.greet();
student.reminder();
student.calculateRScore(42);
console.log(student.rScore);
