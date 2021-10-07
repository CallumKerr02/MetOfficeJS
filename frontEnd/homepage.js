const APIKey = "6e603ffc-5522-49d3-aa02-094f23c9f4fb";
let sites = {};
// document.querySelector("userInput").innerHTML = `...`;

window.onload = function () {
  fetch("/siteList")
    .then((response)=> response.json())

    .then((object) => {
      sites = object;
    });
};

function locationSearch() {
  const userInput = document.getElementById("userInput").value;
  for (const location of sites) {
    if (userInput === location.name) {
      fetch("/forecast?id=" + location.id)
        .then((response) => response.json()) 
        .then((forecast) => {
          document.getElementById("results").innerHTML = "this is the forecast " + forecast.direction; // could be getelementbyid
          console.log(forecast);
        });
    }
  }
}
