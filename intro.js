/*
    Andrew Ingram
    Learning about Javascript
*/
/*
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
} 

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


/*var rainbowFish = ["boeseman's", "Red", "Bleher's", "Lake Wanam"];
//rainbowFish[0] = "Neon";
rainbowFish = rainbowFish.concat("Threadfin");
var find = rainbowFish.find("Red");
//find = rainbowFish.find("Catfish");

//rainbowFish.forEach();

console.log(rainbowFish);*/

/*var a = 1;

while (a <= 10 ) {
    console.log(a++)
}

var b=0;
do {
    console.log(b++);
}while(b < 100)

//console.log(fish.about())
var name  = "Tiiimmaaayyy";
sayHello(name);
sayHello();
function sayHello(name = "Bruce"){
    name = name.toLowerCase();
    console.log(`Hello, ${name}`);
}
console.log(name);
scopeTest();

function scopeTest(){
    let x = 10;
    {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}*/

var x;

x = multiplier(3,4);

function multiplier(x, y){
    let newNumber = x * y;
    return newNumber;

}
console.log(x);