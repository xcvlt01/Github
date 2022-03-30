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
