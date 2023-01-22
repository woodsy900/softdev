//variables

const makeforType = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType";
const makeList = document.getElementById("make-list");
//when page loads
window.addEventListener("load", );
//retrieve list of makes 
async function getMakelist(){
    return fetch(makeforType).then(response => response.json());
}
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
    )

}

function creatOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}