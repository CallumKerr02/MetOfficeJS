// Met Office API Task :)

const got = require('got');

const prompt = require('prompt-sync');

const APIKey = '6e603ffc-5522-49d3-aa02-094f23c9f4fb';

const grabPromise = async () => {
    got.get(    // async to this code, get this info.
            "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=" + (APIKey)
        )
        .json()
        .then((mainBody => {   // After .get is achieved, this code below is then run. 
            let name = [];
            for (let a of mainBody.Locations.Location){
                name.push(a);
            }
            return name;

        })).then(( name => {
            const userInput = prompt("Name the location: ");
            if (userInput.toLowerCase() === name["name"]);
            
        }));
    // console.log(mainBody);
    

}

grabPromise();
