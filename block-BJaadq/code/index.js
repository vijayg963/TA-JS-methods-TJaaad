// NOTE: You can not use reduce methods to solve this exercise
let allHouseName = got.houses.map((p) => p.people[0]);

function countAllPeople() {
  const peoples = [];
  got.houses.forEach((house) => {
    house.people.forEach((element) => {
      peoples.push(element.name);
    });
  });
  return peoples.length;
}

function peopleByHouses() {
  let peoplesInHouses = {};
  got.houses.forEach((house) => {
    peoplesInHouses[house.name] = house.people.length;
  });

  return peoplesInHouses;
}

function everyone() {
  let peopleNames = [];
  got.houses.forEach((house) => {
    peopleNames = peopleNames.concat(house.people.map((p) => p.name));
  });
  return peopleNames;
}

function nameWithS() {
  let peopleNamesWithS = [];
  got.houses.forEach((house) => {
    peopleNamesWithS = peopleNamesWithS.concat(
      house.people
        .filter((p) => p.name.includes("S") || p.name.includes("s"))
        .map((p) => p.name)
    );
  });
  return peopleNamesWithS;
}

function nameWithA() {
  let peopleNamesWithA = [];
  got.houses.forEach((house) => {
    peopleNamesWithA = peopleNamesWithA.concat(
      house.people
        .filter((p) => p.name.includes("A") || p.name.includes("a"))
        .map((p) => p.name)
    );
  });
  return peopleNamesWithA;
}

function surnameWithS() {
  let peopleNamesWithA = [];
  got.houses.forEach((house) => {
    peopleNamesWithA = peopleNamesWithA.concat(
      house.people
        .filter((p) => {
          const splitName = p.name.split(" ");
          return (
            splitName[splitName.length - 1].startsWith("S") ||
            splitName[splitName.length - 1].startsWith("s")
          );
        })
        .map((p) => p.name)
    );
  });
  return peopleNamesWithA;
}

function surnameWithA() {
  let peopleNamesWithA = [];
  got.houses.forEach((house) => {
    peopleNamesWithA = peopleNamesWithA.concat(
      house.people
        .filter((p) => {
          const splitName = p.name.split(" ");
          return (
            splitName[splitName.length - 1].startsWith("A") ||
            splitName[splitName.length - 1].startsWith("a")
          );
        })
        .map((p) => p.name)
    );
  });
  return peopleNamesWithA;
}

function peopleNameOfAllHouses() {
  let peoplesInHouses = {};
  got.houses.forEach((house) => {
    peoplesInHouses[house.name] = house.people.map((p) => p.name);
  });

  return peoplesInHouses;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
