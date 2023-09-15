/* eslint-disable */
// 1. Use the let keyword in an example function
// 2. Use the const keyword in an example function
// 6. Create a function that calculates the area of a circle. If the radius of the circle is not provided assume that the default radius is 5.
function areaOfCricle(radius = 10) {
  const pi = 3.14;
  let area = pi * radius * radius;
  console.log(area);
}
areaOfCricle();

// 3. Create an arrow function that finds the square of a number
const square = (num) => num * num;
console.log(square(5));

// 4: Create an arrow function that adds two numbers
const sum = (a, b) => a + b;
console.log(sum(5, 6));

// 5. Create a multi-line string and then split the string into the corresponding lines and print the lines
const muliLineString = `Hi,
my
name
is
Aditya`;

muliLineString.split('\n').forEach((line) => {
  console.log(line);
});

// 7. Create a string that prints the name and location of the person in below format:

let person = {
  name: 'Harry Potter',
  location: 'London',
};

console.log(`${person.name} is located in ${person.location}.`);

// 8. Show an example where an array is destructured using destructuring assignment

const colors = ['red', 'green', 'blue'];
const [one, two, three] = colors;
console.log(two);

// 9. Show an example where an object is destructured using destructuring assignment in the function body
// 10. Show an example where a function argument which is an object is destructured inside the parantheses of the function

let displayAddress = (obj) => {
  const { street, colony, pin } = address;
  console.log(
    `Street is ${street}, and colony is ${colony}, with Pin Code: ${pin}`,
  );
};

address = {
  street: '7-c',
  colony: 'Jakkasandra',
  pin: 275101,
};
displayAddress(address);

// 11. Show an example where enhanced object literals is used.

let name = 'Aditya';
let place = 'Bengaluru';
let prsn = { name, place };
console.log(prsn);

// 12. Create a function sum that takes any number of numbers as arguments and calculates the sum of the input numbers using the rest parameter syntax

let sumUsingRestParams = (...nums) => {
  return nums.reduce((acc, current) => acc + current, 0);
};

console.log(sumUsingRestParams(1, 2, 3, 4, 5));

// 13: Use the spread syntax to expand an array of numbers and pass the elements of the array as arguments to the sum function created in the previous example

let arrOfNums = [1, 2, 3, 4, 5];
console.log(sumUsingRestParams(...arrOfNums));

// 14: Use the for..of loop to iterate through all values in an array

for (let num of arrOfNums) {
  console.log(num);
}

// Iterate through all keys of an object using Object.keys

for (let key of Object.keys(address)) {
  console.log(key);
}

// Iterate through all values of an object using Object.values

for (let value of Object.values(address)) {
  console.log(value);
}

// Iterate through all the key / value pairs of an object using Object.entries

for (let [key, value] of Object.entries(address)) {
  console.log(`Key is: ${key} and corresponding value if ${value}`);
}
