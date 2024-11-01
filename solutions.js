// Use `.map()` to iterate over the following array:
// Create a new array where each value is multiplied by 2 and log the new array.
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const multiplyNums = nums.map((currentElement) => {
  return currentElement * 2;
});
console.log(multiplyNums);


// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping);
console.log(secondTopping);


// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};
const {make, model} = car;
console.log(make);
console.log(model);


// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings1 = ['Pineapple', 'Olives', 'Anchovies'];
const duplicateArray = [...pizzaToppings1];
console.log(duplicateArray);


// Duplicate the following object and spread its values into a new variable `myCar`.
// Change the `model` property of `myCar` to 'q7'. Log both objects.

const car2 = {
  make: 'Audi',
  model: 'q5',
};

const myCar = {...car2};
myCar.model = 'q7';
console.log(car2);
console.log(myCar);

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const userProfile = {};
const propertyName = 'username';
userProfile [propertyName] = 'Ashley';
console.log(userProfile);

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
// 1. `cat`
// 2. `white`
// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

function describeAnimal(noun = 'cat', adjective = 'white') {
  console.log(`The ${noun} is ${adjective}.`);
}
describeAnimal();


// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';
console.log(pizza === 'tasty' ? 'yum' : 'yuck');


// Change to 'es', 'fr', etc., or keep it null
// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

const localLangConfig = null;  
const LANG = localLangConfig || 'en';  
console.log('Language setting:', LANG);


// SET WEBSITE THEME
const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.age?.name;
console.log(cat);


