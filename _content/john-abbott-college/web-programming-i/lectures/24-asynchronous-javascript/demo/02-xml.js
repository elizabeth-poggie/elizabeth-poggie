let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest(); // Install using the command

request.open("GET", requestURL, true);
request.responseType = "text";
request.onload = function () {
  var superHeroes = request.response;
  console.log(superHeroes);
};
request.send();
