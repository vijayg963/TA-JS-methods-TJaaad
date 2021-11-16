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

// Create an array peopleName and store value of name key from persons array
let peopleName = [];

persons.forEach((p) => {
  peopleName.push(p.name);
});

console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = [];

persons.forEach((p) => peopleGrade.push(p.grade));

console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = [];

persons.forEach((p) => peopleSex.push(p.sex));

console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let nameFilterPj = peopleName.filter(
  (name) => name.startsWith("J") || name.startsWith("P")
);

console.log(nameFilterPj);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let nameFilterAc = peopleName.filter(
  (name) => name.startsWith("A") || name.startsWith("C")
);
console.log(nameFilterAc);

let filteredLength = nameFilterAc.map((name) => name.length);
console.log(filteredLength);

// Log all the filtered male ('M') in persons array

let males = persons.filter((person) => person.sex === "M");
console.log(males);

// Log all the filtered female ('F') in persons array

let females = persons.filter((person) => person.sex === "F");
console.log(females);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let nameFilterJc = females.filter(
  (female) => female.name.startsWith("J") || female.name.startsWith("C")
);

console.log(nameFilterJc);

// Log all the even numbers from peopleGrade array
let evenGrade = peopleGrade.filter((grade) => grade % 2 === 0);

console.log(evenGrade);

// Find the first name that starts with 'J' in persons array and log the object
let personsFilterJ = persons.filter((person) => person.name.startsWith("J"));

console.log(personsFilterJ);

// Find the first name that starts with 'P' in persons array and log the object
let personsFilterP = persons.filter((person) => person.name.startsWith("P"));

console.log(personsFilterP);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let topGradej = personsFilterJ.filter((person) => person.grade > 10);
let final = topGradej.filter((p) => p.sex === "F");
console.log(final);

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === "F");
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex === "M");

console.log(malePersons);

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((accu, cv) => accu + cv);

console.log(gradeTotal);

// Find the average grade
let averageGradeTotal = gradeTotal / peopleGrade.length;

console.log(averageGradeTotal);

// Find the average grade of male
let averageGradeMale = males.reduce((acc, cv, index, arr) => acc + cv.grade, 0);

console.log(averageGradeMale / males.length);

// Find the average grade of female
let averageGradeFemale = females.reduce(
  (accu, cv, index, arr) => accu + cv.grade,
  0
);

console.log(averageGradeFemale / females.length);

// Find the highest grade

let highestGrade = peopleGrade.sort((a, b) => b - a);

console.log(highestGrade[0]);

// Find the highest grade in male

let highGrade = [];

males.forEach((p) => highGrade.push(p.grade));

highGrade = highGrade.sort((a, b) => b - a);

console.log(highGrade[0]);

// Find the highest grade in female
let highGinfemale = [];

females.forEach((p) => highGinfemale.push(p.grade));

highGinfemale = highGinfemale.sort((a, b) => b - a);

console.log(highGinfemale[0]);

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let ascendingGrade = peopleGrade.sort((a, b) => b - a);

console.log(ascendingGrade);

// Sort the peopleGrade in descending order
let descendingGrade = peopleGrade.sort((a, b) => a - b);

console.log(descendingGrade);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let notMutate = [...peopleGrade].sort((a, b) => b - a);

console.log(notMutate);

// Sort the array peopelName in ascending `ABCD..Za....z`
let nameAscending = [...peopleName].sort();

console.log(nameAscending);

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let nameDescending = [...peopleName].sort((a, b) => (a > b ? -1 : 1));

console.log(nameDescending);
