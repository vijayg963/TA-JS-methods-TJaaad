let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let personsGrade = [];
persons.filter((p) => personsGrade.push(p.grade));

console.log(personsGrade.reduce((accu, cv) => accu + cv) / personsGrade.length);

// Find the average grade of male
let maleFiltered = persons.filter((p) => p.sex === "M");

let peopleGradeMale = [];
maleFiltered.filter((p) => peopleGradeMale.push(p.grade));

let avrageofMalegrad = peopleGradeMale.reduce((accu, cv) => accu + cv);

console.log(avrageofMalegrad / maleFiltered.length);

// Find the average grade of female
let femaleFilter = persons.filter((p) => p.sex === "F");

let peopleGradeFemale = [];
femaleFilter.filter((p) => peopleGradeFemale.push(p.grade));

let avrageofFemalegrade = peopleGradeFemale.reduce((accu, cv) => accu + cv);

console.log(avrageofFemalegrade / femaleFilter.length);

// Find the highest grade
let shortGrade = [...personsGrade].sort((a, b) => b - a);

console.log(shortGrade[0]);

// Find the highest grade in male
let highestGradeMale = [...peopleGradeMale].sort((a, b) => b - a);

console.log(highestGradeMale[0]);

// Find the highest grade in female
let highestGradeFemale = [...peopleGradeFemale].sort((a, b) => a - b);

console.log(highestGradeFemale.pop());

// Find the highest grade for people whose name starts with 'J' or 'P'
let filterPersonwithJp = persons.filter(
  (p) => p.name.startsWith("J") || p.name.startsWith("P")
);

let gradeOfJp = [];
filterPersonwithJp.filter((p) => gradeOfJp.push(p.grade));

gradeOfJp.sort((a, b) => b - a);

console.log(gradeOfJp[0]);

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitObj = fruitBasket.reduce((acc, cv) => {
  if (acc[cv]) {
    acc[cv] = acc[cv] + 1;
  } else {
    acc[cv] = 1;
  }
  return acc;
}, {});

console.log(fruitObj);

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let fruitsArray = Object.keys(fruitObj).reduce((acc, cv) => {
  acc = acc.concat([[cv, fruitObj[cv]]]);
  return acc;
}, []);

console.log(fruitsArray);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
data.reduce((acc, cv) => {
  acc = acc.concat(cv);
  return acc;
}, []);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
console.log(dataTwo.flat(Infinity));

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
