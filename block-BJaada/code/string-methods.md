Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: (String data type)
   - Return: upper case in the string (String data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.toUpperCase(); //'ARYA STARK'
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.toUpperCase(); //'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
     let houseName = "Starks";
     houseName.toUpperCase(); //'STARKS'
     ```
   - `toUpperCase` returns the value to Upper case.

3. `toLowerCase`

   - Parameter: (String data type)
   - Return: Lower case in the string (string data type)
   - Example:
     ```js
     let name = "ARYA STARK";
     name.toLowerCase(); // 'arya stark'
     let sentance = "A QUICK BROWN FOX JUMPED OVER A LAZY DOG";
     sentance.toLowerCase(); // 'a quick brown fox jumped over a lazy dog'
     let houseName = "STARKS";
     houseName.toLowerCase(); // "starks"
     ```
   - `toLowerCase` returns the value to Lower case.

4. `trim`

- Parameter: none
- Return: Return will be the remove all white space from left and right.
- Example:
  ```js
  let name = "    ARYA STARK    ";
  name.trim(); // 'ARYA STARK'
  let sentance = "    A QUICK BROWN FOX JUMPED OVER A LAZY DOG    ";
  sentance.trim(); // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
  let houseName = "    STARKS    ";
  houseName.trim(); // "STARKS"
  ```
- `trim` it will remove all wight space from start and end .

5. `trimEnd`

- Parameter: none
- Return: Return will be the remove all white space from the End.
- Example:
  ```js
  let name = "    ARYA STARK    ";
  name.trim(); // '    ARYA STARK'
  let sentance = "    A QUICK BROWN FOX JUMPED OVER A LAZY DOG    ";
  sentance.trim(); // '    A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
  let houseName = "    STARKS    ";
  houseName.trim(); // "    STARKS"
  ```
- `trimEnd` It will remove all white space from the end.

6. `trimStart`

- Parameter: none
- Return: Return will be the remove all white space from the Start.
- Example:
  ```js
  let name = "    ARYA STARK    ";
  name.trim(); // 'ARYA STARK     '
  let sentance = "    A QUICK BROWN FOX JUMPED OVER A LAZY DOG    ";
  sentance.trim(); // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG     '
  let houseName = "    STARKS    ";
  houseName.trim(); // "STARKS     "
  ```
- `trimStart` It will remove all white space from the Start.

7. `concat`

- Parameter: none
- Return: Return will one string by concating other.
- Example:
  ```js
  let name = "ARYA STARK";
  let sentance = "A QUICK BROWN FOX JUMPED OVER A LAZY DOG";
  let houseName = "STARKS";
  name.concat(" line is ", sentance); //'ARYA STARK line is A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
  name.concat(" in house ", housename);
  ```
- `concat` It will concat two or more string.

8. `endsWith`

- Parameter: The characters to be searched for at the end of str.
- Return: true if the given characters are found at the end of the string; otherwise, false.
- Example:

  ```js
  let name = "ARYA STARK";
  name.endsWith("TARK"); // true
  let sentance = "A QUICK BROWN FOX JUMPED OVER A LAZY DOG";
  sentance.endsWith("dog"); // false (js is case sensetive     language).
  let houseName = "STARKS";
  houseName.endsWith("s"); // true
  ```

- `endsWith` It will give true or false on the basis of last word.

9. `includes`

- Parameter: A string to be searched for within name.
- Return: true if the search string is found anywhere within the given string; otherwise, false if not.
- Example:

```js
let name = "Arya stark";
name.includes("stark"); // true
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.includes(fox); // true
let houseName = "Starks";
```

- `includes` It will give true and false with matching any word with string.

10. `indexOf`

- Parameter: accepts a string to be searcher from the given string, fromIndex(optional) the index value within the string at which to begin searching for (default value is 0).
- Return: Index of the first occurrence of searchValue, or -1 if not found.
- Example:

```js
let name = "Arya Stark";
name.indexOf("Arya"); // 0
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.indexOf("over", 12); // 25
sentance.indexOf("lazy"); // 32
let houseName = "Starks";
houseName.indexOf("st"); // -1
```

- `indexOf` It will give the index of any word left to right.

11. `lastIndexOf`

- Parameter:accepts a string to be searcher from the given string, fromIndex(optional) the index value of the last character in the string to begin searching for (default value is +Infinity).
- Return: Index of the first occurrence of searchValue, or -1 if not found.
- Example:

```js
let name = "Arya Stark";
name.lastIndexOf("Arya"); // 0
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.lastIndexOf("over", 32); // 25
let houseName = "Starks";
houseName.latIndexOf("Rk"); // -1
houseName.lastIndexOf("s", -4); // -1
```

- `lastIndexOf` It will give last index of string word match.

12. `padEnd`

- Parameter: Accepts a targetLength(number) of the resulting string once the current string is been padded(if the string value is less it returns the original string), padString(optional) string to pad the current string.
- Return: string of the specified targetLength with the padString applied at the end of the current string(default value is space " ").
- Example:

```js
let name = "Arya";
name.padEnd(10, "."); // "Arya......"
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.padEnd(52); // "A quick brown fox jumped over a lazy dog            "
let houseName = "Starks";
houseName.padEnd(3, "*"); // "Starks"
```

- `padEnd` It will give padding End with specific lenth or string.

13. `padStart`

- Parameter: accepts a targetLength(number) of the resulting string once the current string is been padded(if the string value is less it returns the original string), padString(optional) string to pad the current string.
- Return: string of the specified targetLength with the padString applied at the end of the current string(default value is space " ").
- Example:

```js
let name = "Arya";
name.padStart(15, "."); // "...........Arya"
let sentance = "A quick brown fox jumped over a lazy dog";
sentance.padStart(48); // "        A quick brown fox jumped over a lazy dog"
let houseName = "Starks";
houseName.padStart(4, "*"); // "Starks"
```

- `padStart` It will give padding Starting with specific lenth or string.

14. `repeat`

- Parameter: accepts a count(number) indicating the number of times to repeat the string.
- Return: new string containing the specified number of copies of the given string.
  Example:

```js
let name = "Arya";
name.repeat(5); // "AryaAryaAryaAryaArya"
let sentance = `I'm a programmer`;
sentance.repeat(); // " "
let houseName = "Starks  ";
houseName.repeat(4); // "Starks  Starks  Starks  Starks  "
```

- `repeat` It will repeat and take number how much time.

15. `replace`

- Parameter: accepts a substr(string) the string to be replaced, and replacerFunction(string) the string to be used.
- Return: new string, with some or all matches of a pattern replaced by a replacement.
  Example:

  ```js
  let name = "Arya";
  name.replace("a", "@"); // "Ary@"
  let sentance = `I'm a programmer`;
  sentance.replace("g", ".."); // "I'm a pro..rammer"
  let houseName = "Starks";
  houseName.replace("k", "K"); // "StarKs"
  ```

  - `replace` It will replace the word with new word.

16. `slice`

- Parameter: accepts a beginingIndex(number) at which to begin extraction, endIndex(number) before which to end extraction.
- Return: new string containing the extracted section of the string.
  Example:

```js
let name = "Arya";
name.slice(1); // "rya"
let sentance = `I'm a programmer`;
sentance.slice(5, 15); // " programme"
let houseName = "Starks";
houseName.slice(6, 0); // ""
```

- `slice` It accepts two parameter start and and.

17. `split`

- Parameter: accepts a seperator(optional) pattern describing where each split should occur, limit(optional) non-negative integer specifying a limit on the number of substrings to be included in the array.
- Return: an array of strings, split at each point where the separator occurs in the given string.
- Example:

```js
let name = "Arya";
name.split(" "); // [ "Arya" ]
let sentance = `I'm a programmer`;
sentance.split(" ", 8); // [ "I'm", "a", "programmer" ]
let houseName = "This is just a simple program";
houseName.split(); // [ "This is just a simple program" ]
```

- `split` It will split string into small sabstring which is in array.

18. `substring`

- Parameter: accepts a indexStart(number) first character to include in the returned substring, indexEnd(optional) first character to exclude from the returned substring.
- Return: new string containing the specified part of the given string.
- Example:

```js
let name = "Arya";
name.substring(2); // "ya"
let sentance = `I'm a programmer`;
sentance.substring(5, 18); // " programmer"
let houseName = "Starks";
houseName.substring(6, 0); // "Starks"
```

- `substring` it will take the small portion of string or take start and end value.
