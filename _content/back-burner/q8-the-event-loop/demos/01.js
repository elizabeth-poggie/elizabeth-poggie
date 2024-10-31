let arrayOne = [
  { age: 18, id: 1234, program: 420 },
  { age: 19, id: 1456, program: 412 },
  { age: 26, id: 2121, program: 436 },
  { error: true },
];
let arrayTwo = arrayOne.map((x) => {
  return { currentAge: x.age, approximateBirthYear: 2024 - x.age };
});

console.log(arrayTwo);
// [{ currentAge: 18, approximateBirthYear: 2006 },{ currentAge: 19, approximateBirthYear: 2005 },{ currentAge: 26, approximateBirthYear: 1998 },{ currentAge: undefined, approximateBirthYear: NaN }]

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
