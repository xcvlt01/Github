// _______CALLING FUNCTIONS FROM OTHER FUNCTIONS_______ //

// calling functions from other functions is a core logic in coding

let number1;
let number2;

function setAndAddNumbers(a, b) {
  // this functions sets the value of the numbers
  // then calls addNumbers() and adds them together
  number1 = a;
  number2 = b;
  addNumbers();
}

function addNumbers() {
  // this function adds the two numbers together and logs the result in the console
  let result = number1 + number2;
  console.log(result);
}

setAndAddNumbers(1, 3); // when you call this function your result in the console will be 4

/// *** EXERCISE 1 *** ///

// 1. Declare 3 global variables (drink1,drink2,drink3)
// 2. Declare a function called setValuesAndCreateArray()
// 3. Declare another function called CreateArray()
// 4. CreateArray() should push all of your variables into an array and log the array in the console.
// 5. setValuesAndCreateArray() should set the values of the variables and should call CreateArray() underneath
// 6. call setValuesAndCreateArray() and check the console
