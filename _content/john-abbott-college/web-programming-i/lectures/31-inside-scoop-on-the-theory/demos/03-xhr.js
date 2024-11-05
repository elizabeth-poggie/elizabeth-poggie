// init request
const xhr = new XMLHttpRequest();
// GET ditto
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
// create handler
xhr.onload = function () {
  // ensure status is ok
  if (xhr.status === 200) {
    // Manually parse the JSON
    const data = JSON.parse(xhr.responseText);
    // log data
    console.log(data);
  }
};
// yeet request
xhr.send();
