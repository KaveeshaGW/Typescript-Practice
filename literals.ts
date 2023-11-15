// Literal types are written as object, array, function, or constructor type literals 
// and are used to compose new types from other types.

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
//myResult = "failure";       //* Invalid


//numeric literals
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
//diceRoll = 7;    //* Invalid