/*
    Andrew Ingram
    Learning about Javascript
*/

//Variables are case sensitive
var first = 0;
var str = "Quote";
var bool = true;
var num; 
//x="ten" this is not valid
var x;
var x = 10;
first = 3;
const PI = 3.14;




var a = "string", b = 1, c = 2, result;

result = a + b;
//result = b + a;
//result = b + c + a;
let purchase = true; 

/*if (purchase) {
  console.log("Thank you for your purchase!");
} */

g = 42;
h = typeof g;

var fish = {
    genus: "Melanotaenia",
    species: "M. Boesemani",
    name: "Melvin",
    age: 2,
    about: function(){
        return `Hi, my name is ${this.name}. I'm a ${this.species}!`;
    }};

fish.about(); //"Hi, my name is Melvin. I'm a M.Boesemani!"


var rainbowFish = ["boeseman's", "Red", "Bleher's", "Lake Wanam"];
//rainbowFish[0] = "Neon";
rainbowFish = rainbowFish.concat("Threadfin");
var find = rainbowFish.find("Red");
//find = rainbowFish.find("Catfish");

//rainbowFish.forEach();

console.log(rainbowFish);
console.log(fish.about())