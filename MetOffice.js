// Met Office API Task :)

const got = require("got");
const express = require('express')
const app = express()
const prompt = require("prompt-sync")();
const APIKey = "6e603ffc-5522-49d3-aa02-094f23c9f4fb";

app.get('/forecast', function (req, res) {
  res.send('Hello World');
})
app.use(express.static('frontend'));
 
app.listen(3000, function(){
  console.log('Webiste Created');

})

class locationName {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

const grabPromise = async () => {
  got
    .get(
      // async to this code, get this info.
      "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=" +
        APIKey
    )
    .json()
    .then((mainBody) => {
      // After .get is achieved, this code below is then run.
      let name = [];
      for (let a of mainBody.Locations.Location) {
        name.push(a);
      }
    //   console.log(name);
      return name;
    })
    .then((name) => {
      for (const printingLocation of name) {
        console.log(printingLocation["name"]);
      }
      const userInput = prompt("Enter Location Name: ");
      for (const location of name) {
        if (userInput.toLowerCase() === location["name"].toLowerCase()) {
          got
            .get(
              "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/" +
                location["id"] +
                "?res=daily&key=" +
                APIKey
            )
            .json()
            .then((body) => {
              console.log(body.SiteRep.DV.Location);
            });
          break;
        }
      }
    });
};

grabPromise();
