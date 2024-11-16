let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hi");
    console.log("C");
  }, 5000);
});
async function test() {
  // return new Promise( (resolve, reject) => {
  let result = await myPromise;
  console.log(result);
  //}
}

console.log("A");
let testReturn = test();
console.log(testReturn);
console.log("B");
