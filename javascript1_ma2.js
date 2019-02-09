//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.animalType = function (type) {
    this.type = type;
    console.log("I am a " + this.type);
};

var dog = new Animal("Spot", 4);
dog.animalType("Dog");


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var fifthNumber = numbers.slice(4, 5);


//3. Delete the last number in the array that you created above.
numbers.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

function convertStrawBerriesToBananas(str) {
    var bananaString = str.replace(/strawberry/gmi, "banana").replace(/strawberries/gmi, "bananas");
    return bananaString;
}
var strawBerryString = "Strawberries are a popular part of spring and summer diets throughout America.Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes.They announce the impending arrival of the ruby red berries that so many people crave.Ripe strawberries taste sweet and have only a slight hint of tartness.They are also one of the healthiest fruits around.There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
var bananaString = convertStrawBerriesToBananas(strawBerryString);
console.log(bananaString);

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var deleteArrayBtn = document.getElementById("array-btn");
var footballClubs = ["Manchester United", "Liverpool", "Arsenal", "Tottenham"];

deleteArrayBtn.addEventListener("click", function () {
    footballClubs.length = 0;
    footballClubs.push("Opel");
    footballClubs.push("Audi");
    footballClubs.push("Honda");
    footballClubs.push("Toyota");
    console.log(footballClubs);
});


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var persons = [
    { name: "Frank", age: 30, sex: "Male" },
    { name: "Annelise", age: 36, sex: "Female" },
    { name: "Wes", age: 22, sex: "Male" },
    { name: "Laurel", age: 22, sex: "Female" },
];

function filterByName(person) {
    return person.name === "Wes";
}

var wes = persons.filter(filterByName);

console.log(wes);

//7. Create a simple function that logs the date.

function logToday() {
    var d = new Date();
    var dateString = d.getDate() + ". " + (d.getMonth() + 1) + ". " + d.getFullYear();
    console.log("Today is " + dateString);
}

logToday();
