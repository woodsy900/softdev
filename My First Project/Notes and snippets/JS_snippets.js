//Dynamic sort an array

///Array looks like below and is called objs 
var objs = [ 
    { first_nom: 'Lazslo', last_nom: 'Jamf'     },
    { first_nom: 'Pig',    last_nom: 'Bodine'   },
    { first_nom: 'Pirate', last_nom: 'Prentice' }
];


function dynamicSort(property) {  //property means a property from the array
    let objs = [ 
        { first_nom: 'Lazslo', last_nom: 'Jamf'     },
        { first_nom: 'Pig',    last_nom: 'Bodine'   },
        { first_nom: 'Pirate', last_nom: 'Prentice' }
    ];
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

//With an array like below 
var People = [
    {Name: "Name", Surname: "Surname"},
    {Name:"AAA", Surname:"ZZZ"},
    {Name: "Name", Surname: "AAA"}
];

//will work when you call it like 

console.log(objs.sort(dynamicSort("first_nom")))
People.sort(dynamicSort("Surname"));
People.sort(dynamicSort("-Surname"));