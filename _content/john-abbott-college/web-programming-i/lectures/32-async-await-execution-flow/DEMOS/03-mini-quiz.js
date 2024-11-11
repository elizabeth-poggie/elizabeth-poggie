// Given jimmy, what shall he become?

let jimmy = null;

// Q1
jimmy = new Promise((resolve, reject) => {
  resolve(2);
});
console.log("Jimmy 1 👉 ", jimmy);

// Q2
fetch("http://cheese.com/brie").then((response) => {
  jimmy = response.json();
});
console.log("Jimmy 2 👉 ", jimmy);

// Q3
async function test() {
  return "cheese";
}
jimmy = test();
console.log("Jimmy 3 👉 ", jimmy);

// Q4
function foo() {
  return new Promise((resolve, reject) => resolve(2));
}
jimmy = foo;
console.log("Jimmy 4 👉 ", jimmy);

// Q5
jimmy = fetch("http://cheese.com/brie");
console.log("Jimmy 5 👉 ", jimmy);
