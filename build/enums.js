"use strict";
var contrat;
(function (contrat) {
    contrat[contrat["permanent"] = 22] = "permanent";
    contrat[contrat["intern"] = 23] = "intern";
    contrat[contrat["temp"] = 24] = "temp";
})(contrat || (contrat = {}));
let empstatus = contrat.intern;
console.log(empstatus);
console.log(contrat[empstatus]); //name associated with enum value
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
console.log(randomValue.name);
let randomVue = 10;
randomValue = true;
randomValue = 'Mateo';
//console.log(randomVue.name);  // Error: Object is of type unknown
//randomValue();                  // Error: Object is of type unknown
//randomValue.toUpperCase();      // Error: Object is of type unknown
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
