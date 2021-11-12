Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: `separator Optionalz` Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
   - Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(9); //'19293'
     let tense = ["ram", "sham", "hari"] ;
     tanse.join("HELLO"); //'ramHELLOshamHELLOhari'
     let colors = ["red", "green", "blue"];
     colors.join("black); //  'redblackgreenblackblue'
     ```
   - `join` Accept value that convert in string and join them using that value.

- No it does not mutate the original array

3. `flat`

   - Parameter: `depth` The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(9); //'19293'
     let tense = ["ram", "sham", "hari"] ;
     tanse.join("HELLO"); //'ramHELLOshamHELLOhari'
     let colors = ["red", "green", "blue"];
     colors.join("black); //  'redblackgreenblackblue'
     ```
   - `flat` flat will falt the layer of nesting and take numbers of layer should b flat.

- No it does not mutate the original array

4. `push`

- Parameter: The element(s) to add to the end of the array.
- Return: The new length property of the object upon which the method was called.
  Example:

```js
let numbers = [1, 2, 3];
numbers.push(4); // 4 (4 will addin last)
let tense = ["ram", "sham", "hari"];
tense.push("harion"); //4 (hariom will be add in last)
let colors = ["red", "green", "blue"];
colors.push("white"); // 4 (white will be add in last)
```

- `push` push will add new element to the last of array.
- Yes It will mutate the original array

5. `indexOf`

- Parameter:`searchElement`Element to locate in the array.
- Return: The first index of the element in the array; -1 if not found.

```js
let numbers = [1, 2, 3];
numbers.indexof(3); // 2
let colors = ["red", "green", "blue"];
colors.indexOf("green"); // 1
let sentanceArray = "A quick brown fox jumped over a lazy";
sentanceArray.indexOf("over"); //  25
```

`indexOf` give the indexOf element

- No it does not mutate the original array

6. `lastIndexOf`

- Parameter: Element to locate in the array.
- Return: The last index of the element in the array; -1 if not found.

```js
let colors = ["red", "green", "blue", "green"];
colors.lastIndexOf("green"); // 3
let numbers = [1, 2, 3, 2, 3, 1, 5, 3, 2, 6];
numbers.lastIndexOf(2); // 8
let sentanceArray = "A quick brown fox jumped over a lazy";
sentanceArray.lastIndexOf("a"); // 33
```

- `lastIndexOf` It will give last matchng index of element.
- No it does not mutate the original array

7. `includes`

- Parameter: `searchElement`The value to search for.
- Reruen: A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).
  Note: When comparing strings and characters, includes() is case-sensitive.

```js
var array1 = [1, 2, 3];
array1.includes(2); // true
let pets = ["cat", "dog", "bat"];
pets.includes("cat"); // true
let colors = ["red", "green", "blue"];
colors.includes("end"); // false
```

`includes` give boolean on the basis of value is find or not in that string. output will be true and false

- No it does not mutate the original array.

8. `reverse`

- Parameter: none
- Return: reversed the array index.
  Example:

```js
let numbers = [1, 2, 3];
numbers.reverse(); // [ 3, 2, 1 ]

let colors = ["red", "green", "blue"];
colors.reverse(); // [ "blue", "green", "red" ]

let names = ["Jack", "Harry", "Sam", "Rosy", "Jill"];
names.reverse(); // [ "Jill", "Rosy", "Sam", "Harry", "Jack" ]
```

`reverse` changes the index value of the elements by reversing the elements of the array.

- Yes it mutates the original array

9. `every`

- Parameter: `callbackFn` -function to test for each element, taking three arguments(element, index, array), element-current element being processed in the array. index (Optional)-index of the current element being processed in the array. array (Optional)-array every was called upon. thisArg (Optional) - value to use as this when executing callbackFn.
- Returen: true if the callbackFn function returns a truthy value for every array element, otherwise, false.

```js
let numbers = [1, 2, 3];
let ret = numbers.every(function (number) {
  return number > 0;
}); // true

let numbers = [1, 10, 2, 5, 3, 15, 8, 16];
let ret1 = numbers.every(function (number) {
  return number % 2 === 0;
}); // false

let names = ["Jack", "Harry", "Sam", "Rosy", "Jill"];
let ret2 = names.every(function (name) {
  return name === "J";
}); // false
```

`every` executes the provided callbackFn function once for each element present in the array until it finds the one where callbackFn returns a falsy value. If such an element is found, the every method immediately returns false. Otherwise, if callbackFn returns a truthy value for all elements, every returns true.

- No it does not mutate the original array

10. `shift`

- Parameter: none
- Return: removed element from the array; undefined if the array is empty.
  Example:

```js
let numbers = [1, 2, 3];
numbers.shift(); // 1

let names = ["Jack", "Harry", "Sam", "Rosy", "Jill"];
names.shift(); // "Jack"

let colors = ["red", "green", "blue"];
colors.shift(); // "red"
```

`shift` removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.

- Yes it mutatees the original array

11. `splice`

- Parameter: index at which to start changing the array, deleteCount(optional)-number of elements in the array to remove from start, itemsN(optional)-elements to add to the array, beginning from start.
- Return: array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
  Example:

```js
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // ['Jan', 'Feb', 'March', 'April', 'June']

let months = ["Jan", "Feb", "March", "April", "June"];
months.splice(4, 1, "May"); // ['Jan', 'Feb', 'March', 'April', 'May']

let colors = ["black", "red", "green", "blue"];
colors.splice(2, 1); // [ "black", "red", "blue" ]
```

`splice` changes the content of an array by removing existing elements and/or adding new elements. If you do not specify any elements, splice() will only remove elements from the array.

- Yes it mutates the original array.

12. `find`

- Parameter: callbackFn - Function to execute on each value in the array, taking 3 arguments(element, index, array), element-current element in the array, index (Optional)-index (position) of the current element in the array, array (Optional)-array that find was called on. thisArg (Optional) - object to use as this inside callbackFn.
- Return: value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
  Example:

```js
let months = ["Jan", "March", "April", "June"];
let ret = months.find(function (month) {
  return month === "March";
}); // "March"

let numbers = [1, 10, 2, 5, 3, 15, 8, 16];
let ret1 = numbers.find(function (number) {
  return number > 10;
}); // 15

let numbers = [1, 10, 2, 5, 3, 15, 8, 16];
let ret2 = numbers.find(function (number) {
  return number > 30;
}); // undefined
```

`find`method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

- No it does not mutate the original array.

13. `unshift`

- Parameter: elementN - elements to be added at the start of the array.
- Return: new length property of the object upon which the method was called.
  Example:

```js
let numbers = [1, 2, 3];
numbers.unshift(-2, -1, 0); // [ -2, -1, 0, 1, 2, 3 ]

let names = ["Jack", "Harry", "Sam", "Rosy", "Jill"];
names.unshift("John", "Humpty", "Bella"); // [ "John", "Humpty", "Bella", "Jack", "Harry", "Sam", "Rosy", "Jill" ]

let colors = ["red", "green", "blue"];
colors.unshift(1, 2, 3, undefined, null, {}); // [ 1, 2, 3, undefined, null, {}, "red", "green", "blue" ]
```

`unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.

- Yes it will mutates the original array.

14. `findIndex`

- Parameter: callbackFn - function to execute on each value in the array until the function returns true, indicating that the satisfying element was found. It takes three arguments(element, index, array). element-current element being processed in the array, index (Optional)-index of the current element being processed in the array, array (Optional)-array findIndex() was called upon. thisArg (Optional) - Optional object to use as this when executing callbackFn.
- Return: index of the first element in the array that passes the test.
  Example:

```js
let numbers = [1, 10, 2, 5, 3, 15, 8, 16];
function divisibleBy2(num) {
  return num % 2 === 0;
}
console.log(numbers.findIndex(divisibleBy2)); // 1

let array1 = [5, 12, 8, 130, 44];
function isLargeNumber(element) {
  return element > 13;
}
console.log(array1.findIndex(isLargeNumber)); // 3

let colors = ["red", "green", "blue"];
function color(col) {
  return col === "black";
}
console.log(colors.findIndex(color)); // -1
```

`findIndex` method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

- No it never mutate the array

15. `filter`

- Parameter: callbackFn - function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise, it accepts three arguments(element, index, array), element-current element being processed in the array, index(Optional)-index of the current element being processed in the array, array(Optional)-array on which filter() was called. thisArg(Optional) - Value to use as this when executing callbackFn.
- Return: new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
  Example:

```js
let numbers = [1, 10, 2, 5, 3, 15, 8, 16];
function divisibleBy2(num) {
  return num % 2 === 0;
}
console.log(numbers.filter(divisibleBy2)); // [ 10, 2, 8, 16 ]

let array1 = [5, 12, 8, 130, 44];
function isLargeNumber(element) {
  return element === 200;
}
console.log(array1.filter(isLargeNumber)); // []

let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(words.filter((word) => word.length > 6)); // [ "exuberant", "destruction", "present" ]
```

`filter` It will return same size or small array in by filtering them.

- No it does not mutate the original Array.

16. `flat`

- Parameter: `depth` The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

  - Return: A new array with the sub-array elements concatenated into it.
  - Example:
    ```js
    let numbers = [1, 2, 3];
    numbers.join(9); //'19293'
    let tense = ["ram", "sham", "hari"] ;
    tanse.join("HELLO"); //'ramHELLOshamHELLOhari'
    let colors = ["red", "green", "blue"];
    colors.join("black); //  'redblackgreenblackblue'
    ```
  - `flat` flat will falt the layer of nesting and take numbers of layer should b flat.

- No it does not mutate the original array

17. `forEach`

- Parameter: callbackFn - function to execute on each element. It accepts between one and three arguments, element-current element being processed in the array, index (Optional)-index of element in the array, array (Optional)-array forEach() was called upon. thisArg (Optional) - Value to use as this when executing callbackFn.
- Return: Undefined
  Example:

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (number) {
  console.log(number);
});
/*1
2
3
4
5
6
7
8
9
10 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach(function (number) {
  sum += number;
});
console.log(sum); // 55

let colors = ["red", "green", "blue", "yellow", "orange", "pink"];
colors.forEach(function (color) {
  console.log(color);
});
/* red 
green 
blue 
yellow 
orange 
pink */
```

`forEach` method executes a provided function once per array element.

- No it does not mutate the original array

## ``

18. `map`

- Parameter: callbackFn - function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray. element-current element being processed in the array, index (Optional)-index of element in the array, array (Optional)-array map was called upon.. thisArg (Optional) - Value to use as this when executing callbackFn.
- Return: new array with each element being the result of the callback function.
  Example:

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.map((a) => a * 2)); //  [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array = [];
numbers.map(function (number) {
  if (number % 2 === 0) array.push(number);
  return array;
});
console.log(array); // [ 2, 4, 6, 8, 10 ]

let colors = ["red", "green", "blue", "yellow", "orange", "pink"];
let array1 = [];
colors.map(function (color) {
  if (color.length > 5) array1.push(color);
  return array1;
});
console.log(array1); // [ "yellow", "orange" ]
```

`map` method creates a new array with the results of calling a provided function on every element in this array.

- NO it does not mutate array.

19. `pop`

- Parameter: none
- Return: removed element from the array; undefined if the array is empty.
  Example:

```js
let numbers = [1, 2, 3];
numbers.pop(); // 3

let names = ["Jack", "Harry", "Sam", "Rosy", "Jill"];
names.pop(); // "Jill"

let colors = [];
colors.pop(); // undefined
```

`pop` method removes the last element from an array and returns that element. This method changes the length of the array.

- Yes it will mutates the array

20. `reduce`

- Parameter: callbackFn - function takes four arguments, previousValue (the value resulting from the previous call to callbackfn), currentValue (the value of the current element) currentIndex (Optional), array (the array to traverse) Optional, initialValue (Optional) - value to which previousValue is initialized the first time the callback is called.
- Return: value that results from running the “reducer” callback function to completion over the entire array.
  Example:

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(number); // 55

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = numbers.reduce((acc, num) => {
  return acc + num;
}, "");
console.log(number); // 12345678910

let colors = ["red", "green", "blue", "yellow", "orange", "pink"];
let total = colors.reduce((acc, num) => {
  return acc + num;
}, " ");
console.log(total); // redgreenblueyelloworangepink
```

`reduce` method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

- No it does not mutate the original Array.

21. `slice`

- Parameter: start (Optional) - Zero-based index at which to start extraction, end (Optional) - Zero-based index before which to end extraction.
- Return: new array containing the extracted elements.
  Example:

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice()); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice(2, 4)); // [ 3, 4 ]

let colors = ["red", "green", "blue", "yellow", "orange", "pink"];
console.log(colors.slice(2)); // [ "blue", "yellow", "orange", "pink" ]
```

`slice`

- No it does not mutate the original array.

22. `some`

- Parameter: callbackFn - function to test for each element, taking three arguments, element-current element being processed in the array, index(Optional)-index of the current element being processed in the array, array(Optional)-array some() was called upon. thisArg(Optional) - value to use as this when executing callbackFn.
- Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
  Example:

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = function (element) {
  return element % 2 === 0;
};
console.log(numbers.some(even)); // true

let numbers = [1, 10, 2, 5, 3, 15, 8, 16];
let ret1 = numbers.some(function (number) {
  return number % 2 === 0;
}); // true

let names = ["Jack", "Harry", "Sam", "Rosy", "Jill"];
let ret2 = names.some(function (name) {
  return name === "J";
}); // false
```

`some` method tests whether some element in the array passes the test implemented by the provided function.

- No it will not mutate the original Array.
