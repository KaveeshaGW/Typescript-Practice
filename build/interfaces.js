"use strict";
// describe an object, naming and parameterizing the object's types, 
// and to compose existing named object types into new ones
let emp = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
let myIceCream = {
    flavor: "vanilla",
    scoops: 2
};
function tooManyScoops(a) {
    if (a.scoops > 4) {
        return a.scoops + " " + "is too many scoops";
    }
    else {
        return "hmm";
    }
}
console.log(tooManyScoops({ flavor: "vanilla", scoops: 3 }));
let my;
my = ['chocolate', 'vanilla', 'strawberry'];
let myStr = my[0];
console.log(myStr);
