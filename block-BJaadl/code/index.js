let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

let findLongestWord = words[0];
words.forEach((word) => {
  if (word.length > findLongestWord.length) {
    findLongestWord = word;
    console.log(findLongestWord);
  }
});

// - Convert the above array "words" into an array of length of word instead of word.
let wordNumber = words.map((word) => word.length);
console.log(wordNumber);

// - Create a new array that only contains word with atleast one vowel.

let newArray = [];
function vowelArray(word) {
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      newArray.push(word);
      break;
    }
  }
  return newArray;
}
words.filter(vowelArray);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.

let results = [];

function vowelNotStart(word) {
  if (
    word[0] !== "a" &&
    word[0] !== "e" &&
    word[0] !== "i" &&
    word[0] !== "o" &&
    word[0] !== "u"
  ) {
    results.push(word);
  }
  return results;
}
words.forEach(vowelNotStart);
console.log(results);

// - Create a new array that contianse words not ending with vowel

let newArrayNotVowelEnd = [];
function vowelNotEndArray(word) {
  if (
    word[word.length - 1] !== "a" &&
    word[word.length - 1] !== "e" &&
    word[word.length - 1] !== "i" &&
    word[word.length - 1] !== "o" &&
    word[word.length - 1] !== "u"
  ) {
    newArrayNotVowelEnd.push(word);
  }
  return newArrayNotVowelEnd;
}
words.forEach(vowelNotEndArray);

//

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumAll(sum, cv) {
  return sum + cv;
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let final = [];
numbers.forEach((num) => {
  if (num % 3 === 0) {
    final.push(num);
  }
  return final;
});

console.log(final);

// - Create a new array that contains only even numbers
let evenNumber = [];
numbers.forEach((num) => {
  if (num % 2 === 0) {
    evenNumber.push(num);
  }
  return evenNumber;
});

console.log(evenNumber);

// - Create  a new array that contains only odd numbers.
let oddNumber = [];
numbers.forEach((num) => {
  if (num % 2 !== 0) {
    oddNumber.push(num);
  }
  return oddNumber;
});

console.log(oddNumber);

// - Create a new array that should have true for even number and false for odd numbers.
let booleanNum = numbers.every(() => {
  return evenNumber && oddNumber ? "true" : "false";
});

console.log(booleanNum);

// - Sort the above number in assending order.
let assendingOrder = numbers.sort(function (a, b) {
  return a - b;
});

console.log(assendingOrder);

// - Does sort mutate the original array?
//  yes

// - Find the sum of the numbers in the array.
let sumofArray = numbers.reduce(sumAll);

console.log(sumofArray);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let avrageOf = numbers.reduce((sum, cv) => {
  return (sum + cv) / numbers.length;
});

console.log(avrageOf);

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(words) {
  return (
    words
      .map((word) => word.length)
      .reduce((acc, cv) => {
        return acc + cv;
      }, 0) / words.length
  );
}
