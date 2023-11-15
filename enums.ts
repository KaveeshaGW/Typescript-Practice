enum contrat{
    permanent=22,
    intern,
    temp
  }
  
  let empstatus: contrat = contrat.intern;
  
  console.log(empstatus);
  console.log(contrat[empstatus]); //name associated with enum value

  let randomValue: any = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name); 


let randomVue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

//console.log(randomVue.name);  // Error: Object is of type unknown
//randomValue();                  // Error: Object is of type unknown
//randomValue.toUpperCase();      // Error: Object is of type unknown

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
