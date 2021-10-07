// Met Office API Task :)

const got = require("got");
const express = require("express");
const app = express();
const prompt = require("prompt-sync")();
const APIKey = "6e603ffc-5522-49d3-aa02-094f23c9f4fb";

app.get("/forecast", function (req, res) {
  got
    .get(
      "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/" +
        req.query.id +
        "?res=daily&key=" +
        APIKey
    )
    .json()
    
    
    .then((body) => {
      // res.send(body.SiteRep.DV.Location);
      const foo = {direction:body.SiteRep.DV.Location.Period[0].Rep[0].D}
      res.send(foo)
    });
    
});

app.get("/siteList", function (req, res) {
  got
    .get(
      "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=" +
        APIKey
    )
    .json()
    .then((body) => {
      res.send(body.Locations.Location);
    });
});
app.use(express.static("frontend"));

app.listen(3000, function () {
  console.log("Webiste Created");
});

