// _______ARRAYS_______ //

// An array is a collection of values, these are called the elements of the array.
// An array is a special variable, which can hold more than one value.
// Each element has it's own index depending on their place in the order of the array.
// The index always starts from 0.

// _______DECLARING ARRAYS_______ //
let arrayOfMovies = ["Hellraiser", "Alien", "Gremlins"];

// checking indexes of elements
arrayOfMovies[0]; // this will return Hellraiser if you console.log it
arrayOfMovies[1]; // this will return Alien if you console.log it
arrayOfMovies[2]; // this will return Gremlins if you console.log it

// checking the length of an array
let arrayLength = arrayOfMovies.length;
console.log(arrayLength); // this will return 3

// _______ADD NEW ELEMENT TO ARRAY_______ //
let array = [];
array.push("element you want to push"); // this element will be the last one in the array

// example
arrayOfMovies.push("The Shining");
console.log(arrayOfMovies); // this will return "Hellraiser", "Alien", "Gremlins", "The Shining"

// _______REMOVE LAST ELEMENT FROM AN ARRAY_______ //

array.pop(); //this only removes the LAST element of an array and takes no argument

// example
arrayOfMovies.pop();
console.log(arrayOfMovies); // this will return "Hellraiser", "Alien", "Gremlins" since we removed the last element ("The Shining")

// _______JOIN TWO ARRAYS_______ //
// you can join two arrays together into one

let array1 = [1, 2];
let array2 = [3, 4];

let joinedArray = array1.concat(array2);
console.log(joinedArray); // this will return [1,2,3,4]
