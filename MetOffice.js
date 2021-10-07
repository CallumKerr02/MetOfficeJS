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
      res.send(body.SiteRep.DV.Location);
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




//       locSearch();
//       function locSearch() {
//         const userInput = prompt("Enter Location Name: ");
//         for (const location of siteList) {
//           if (userInput.toLowerCase() === location["name"].toLowerCase()) {
//             got
//               .get(
//                 "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/" +
//                   location["id"] +
//                   "?res=daily&key=" +
//                   APIKey
//               )
//               .json()
//               .then((body) => {
//                 console.log(body.SiteRep.DV.Location);
//               });
//             break;
//           }
//         }
//       }
//     });
// };