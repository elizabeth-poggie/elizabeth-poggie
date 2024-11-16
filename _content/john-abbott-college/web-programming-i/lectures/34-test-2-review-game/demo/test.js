function test() {
  return new Promise((resolve, reject) => {
    console.log("heya");
    setTimeout(() => {
      console.log("hi");
      resolve(42);
    });
  });
}
console.log("Hola");
let jimmy = test();
console.log("yo");
jimmy.then((bob) => console.log(bob));
console.log("hey");
