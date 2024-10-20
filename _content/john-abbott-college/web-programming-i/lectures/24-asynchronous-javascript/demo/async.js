console.log("I am a synchronous task");

setTimeout(() => console.log("short timeout"), 0);

Promise.resolve().then(() => console.log("what is a promise?"));

console.log("I am also synchronous");
