// _______OBJECTS_______ //

// Variables are containers for data values.
// An object is a variable that can have different properties and these properties can have different values.
//The values are written as name:value pairs.

// _______DECLARE AN OBJECT_______ //

const Object = {
  property1,
  property2,
  property3,
};

// example
const Person = {
  name: "Marci",
  age: 30,
  job: "future solidity dev",
};

// _______READING A PROPERTY VALUE FROM AN OBJECT_______ //

const personName = person.name;
console.log(personName); // this will return "Marci"

const personAge = person.age;
console.log(personAge); // this will return 30

const personJob = person.job;
console.log(personJob); // this will return "future solidity dev"

// _______ADD NEW PROPERTY TO OBJECT_______ //

// you can add new properties to an object that already exist
Person.isHuman = false;
console.log(Person); // this should return {name:"Marci",age:30,job:"future solidity dev",isHuman:false}
