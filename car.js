//variables

const makeforType = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";
const makeList = document.getElementById("make-list");
//when page loads
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
//retrieve list of makes 
function getCarMakes(){
fetch(makeforType)
.then((response) => response.json())
.then(data => {
    //create an empy array to store data
    let carMakes = [];
    //Loop through the data and push the makeName to the carMakes array
    for (const element of data.Results) {
        carMakes.sort();
        carMakes.push(element.MakeName);
    }
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

