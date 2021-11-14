// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"
let sentance = strings.join(" ");

// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");

// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
strings.includes("is");

// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is");

// - Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every((number) => {
  return number % 3 === 0;
});

// -  Sort Array from smallest to largest
function campareFunction(a, b) {
  return a - b;
}

numbers.sort(campareFunction);

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
let largestNumber = numbers[0];
numbers.forEach((number) => {
  largestNumber = largestNumber > number ? largestNumber : number;
});

// - Find longest string in strings

let longestString = strings[0];
strings.forEach((string) => {
  longestString = longestString.length > string.length ? longestString : string;
});
console.log(longestString);

// - Find all the even numbers

numbers.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});

// - Find all the odd numbers

numbers.forEach((number) => {
  if (number % 2 !== 0) {
    console.log(number);
  }
});

// - Place a new word at the start of the array use (unshift)
strings.unshift("This");

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(3, 5));

// - Replace 12 & 18 with 1221 and 1881
// let number12 = numbers.replace(12,1221);
// let number18 = numbers.replace(`18`,`1881`);
numbers.map((num) => {
  if (num === 12) {
    return 1221;
  } else if (num === 18) {
    return 1881;
  } else {
    return num;
  }
});

// - Replace words in strings array with the length of the word

let final = strings.map((elm) => elm.length);

// - Find the sum of the length of words using above question
final.reduce((acc, cv) => acc + cv);

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
var startsWithj = customers.filter((customer) => {
  customer.firstname.startsWith("J");
});

// - Create new array with only first name
var firstnameCustomers = customers.map((customer) => customer.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")
var fullNameCustomers = customers.map((customer) => {
  `${customer.firstname} ${customer.lastname}`;
});

// - Sort the array created above alphabetically
console.log([...fullNameCustomers].sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u")
  ) {
    return true;
  } else {
    return false;
  }
});
