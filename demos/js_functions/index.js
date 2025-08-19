// // To run: `node index.js`

// /**
//  * Functions as first class objects example
//  */

// // returns a function to transform a string to upper or lower case
// const getTransformer = (isUpperCase) => {
//   if (isUpperCase) {
//     return (inputString) => {
//       return inputString.toUpperCase();
//     };
//   }
//   return (inputString) => {
//     return inputString.toLowerCase();
//   };
// };

// // takes a string to transform and a function to transform the string
// const transformString = (stringToTransform, transformer) => {
//   return transformer(stringToTransform);
// };

// // demo functions
// const message = "Hello Inholland";
// console.log(transformString(message, getTransformer(true)));
// console.log(transformString(message, getTransformer(false)));

// /**
//  * `this` example
//  */

// function Car(sound) {
//   this.sound = sound;
//   this.go = () => {
//     console.log(this.sound);
//   };
// }
// const car = new Car("vrooooom!");
// car.go();

// /**
//  * Callback example
//  */

// function fetchData(callback) {
//   console.log("Fetching data...");
//   // Simulate async operation (e.g., API call)
//   setTimeout(() => {
//     const data = { name: "Alice", age: 25 };
//     callback(data); // call the callback when done
//   }, 2000);
// }

// // Use the function
// fetchData((result) => {
//   console.log("Data received:", result);
// });

// console.log("This runs before the data is received");

// const foodItems = [
//   {
//     name: "banana",
//     type: "fruit",
//     isSweet: true,
//   },
//   {
//     name: "apple",
//     type: "fruit",
//     isSweet: true,
//   },
//   {
//     name: "avocado",
//     type: "fruit",
//     isSweet: false,
//   },
//   {
//     name: "carrot",
//     type: "vegetable",
//     isSweet: false,
//   },
// ];

// // get the name of all the sweet fruits
// const sweetFruitNames = foodItems
//   .filter((food) => food.type === "fruit" && food.isSweet === true)
//   .map((food) => food.name);

// console.log(sweetFruitNames);

// // check if the array has a vegetable
// const hasVegetable = foodItems.find((food) => food.type === "vegetable");

// console.log(!!hasVegetable);

// const fruit = {
//   fruitName: "banana",
//   type: "fruit",
//   isSweet: true,
// };

// const { fruitName, isSweet } = fruit;

// console.log(`The ${fruitName} is sweet: `, isSweet);

// const fruits = ["banana", "apple"];
// const [banana, apple] = fruits;

// console.log(`The first fruit is the ${banana}`);

// const baseFruit = { type: "fruit" };
// // spread base fruit properties into apple
// const apple = { ...baseFruit, name: "apple" };
// console.log(`The type of ${apple.name} is ${apple.type}`);
// let fruits = [apple];
// // spread base fruit elements into fruits array and add a new fruit
// fruits = [...fruits, { ...baseFruit, name: "banana" }];

// const printFruit = ({ type = "fruit", isHealthy = true, name } = {}) => {
//   console.log(`The ${name} is of type ${type} and is healthy: ${isHealthy}`);
// };
// printFruit({ name: "mango" });

// const myFunction = () => {
//   console.log("foo!");
// };

// const foo = require("./fruit");
// foo();

// import Fruit, { fruitType, printFruit } from "./fruit.js";
// const apple = new Fruit({ type: fruitType, name: "apple" });
// printFruit(apple);

const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
  greetArrow: () => {
    console.log(`Hello, I'm ${this.name}`);
  },
};

person.greet(); // What will this output?
person.greetArrow(); // What will this output?
