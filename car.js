//variables

const makeforType = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";
const makeList = document.getElementById("make-list");
//when page loads
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
//retrieve list of makes 

fetch(makeforType)
.then((response) => response.json())
.then(data => {
    console.log(data)
})

//add to dropdown list
function updateMakeList(){
    getMakelist().then(function(data){
        //get make name
        for(element in data.message){
        //append to list
         let option = creatOption(element);
         makeList.appendChild(option);
         }
        }
    );
};
function creatOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
};