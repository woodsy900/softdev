//variables

const makeforType = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

//retrieve list of makes 
function getCarMakes(){
fetch(makeforType)
.then((response) => response.json())
.then(data => {
    //create an empy array to store data
    let carMakes = [];
    //Loop through the data and push the makeName to the carMakes array
    for (const element of data.Results) {
        
        carMakes.push(element.MakeName);
    }
    carMakes.sort();
    let select = document.getElementById("car-makes");
    //loop  through the car makes array and create an option element for each make
    for (const element of carMakes) {
        let option = document.createElement("option");
            option.value = element;
            option.text = element;
            select.appendChild(option);
        }
    })
    .catch(error => console.log(error));

}




function getOption() {
    let uselect = document.querySelector("#uselect");
    selectElement = document.querySelector('#car-makes');

    /*output = selectElement.value;
    //document.querySelector('.output').textContent = output;
    uselect.textContent = (`${output}`);*/

    }

function getmodel(){ 
    const baseUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/";
    let makeSel = document.querySelector("#car-makes").value;
    const endUrl = "?format=json";

    fetch(baseUrl+makeSel+endUrl)
    .then((response) => response.json())
    .then(data => {
        let carModels = [];
        for (const element of data.Results) {
            carModels.push(element.Model_Name);
        }
        carModels.sort(); //sort the array
        let select = document.getElementById("car-models"); //select the dropdown element by id

        //loop  through the car model array and create an option element for each model
        for (const element of carModels) {
            let moption = document.createElement("option");
                moption.value = element;
                moption.text = element;
                select.appendChild(moption);
            }
        
            console.log(carModels.length)
        })
        .catch(error => console.log(error));
    }


    //get model if model doesn't match blank list and load 


/*const make1 = document.querySelector("car-makes".value);
const make2 = "" ;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"*/


