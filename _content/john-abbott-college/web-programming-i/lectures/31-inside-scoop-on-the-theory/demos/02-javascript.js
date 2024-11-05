// you cant put comments in a json file
const arthur = {
  name: "Arthur Dent",
  age: 42,
  isPanicking: false,
  items: ["blanket", "towel", "coffee"],
  spaceship: undefined, // JSON doesn't support undefined lol
  panic() {
    this.isPanicking = true;
    console.log("AHHHHHHH");
  },
};
