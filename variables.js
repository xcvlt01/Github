// _______DECLARING A VARIABLE_______ //
let name1;
let number;
let boolean;

// assigning a value to a variable
name1 = "Marci"; // string
number = 1;
boolean = true; // a boolean is a true or false value

// you can log all values in the console
console.log(value);

// _______DECLARING A FUNCTION_______ //

function nameOfFunction(functionArguments) {
  // this is the function body
  // your code goes here
}

// _______CALLING A FUNCTION_______ //

nameOfFunction(theValueYouWantToSetTheVariableTo);

// _______GLOBAL VARIABLES_______ //

// you can declare global variables outside functions, they can be used troughout your whole code
let globalVariable = 1;

function setGlobalVariable(newglobalVariable) {
  globalVariable = newglobalVariable;
  console.log(globalVariable);
}
// when you call this function you can set the variable to a different number(set it to 2)
setGlobalVariable(2);

function addToGlobalVariable() {
  // this is gonna do 2 + 1
  globalVariable + 1;
  console.log(globalVariable);
  // the console returns 3
}

// _______LOCAL VARIABLES_______ //

// local variables can only be declared and used inside a function, they don't exist outside
function createLocalVariable(addValue) {
  let localVariable = "Zsofie";
  console.log(localVariable);
}
console.log(localVariable); // this wont work outside the function, it'll give you an error

/// *** EXERCISE 1 *** ///

// do this in CodePen for now

// 1. Declare a global variable called: band
// 2. Add a string value to band
// 3. Create a function called setNewBand()
// 4. The function should take newBand as an argument
// 5. Set band to newBand inside the function
// 6. Log the value of band in the console
// 7. Call the function with the new band name you want to set it to
// 8. Look at your console if you get the right result

/// *** EXERCISE 2 *** ///

// do this in CodePen for now

// 1. Declare two global variables called: number1 , number2
// 2. Create a function called setNumbers()
// 3. Set the value of number1 to newNumber1, and number2 to newNumber2
// 4. Call setNumbers() with the new numbers you want to set it to
// 5. Create a new function called AddNumbers()
// 6. Add " let result = number1 + number2 " to the function body (no quotation marks!)
// 7. Add console.log(result) after the previous line
// 8. Call AddNumbers()
// 9. Check your console if your result is correct

/// +++  GOOD LUCK WEIRDO (^.^)~  +++ ///
