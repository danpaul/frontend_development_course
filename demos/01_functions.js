// ========================================
// JavaScript Functions Demo
// ========================================

console.log("🚀 JavaScript Functions Demo\n");

// ========================================
// 1. Function Basics
// ========================================

console.log("1️⃣ Function Basics:");
console.log("===================");

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log();

// ========================================
// 2. Different Function Syntaxes
// ========================================

console.log("2️⃣ Different Function Syntaxes:");
console.log("===============================");

// Function Declaration (Hoisted)
function addDeclaration(a, b) {
  return a + b;
}

// Function Expression (Not hoisted)
const addExpression = function (a, b) {
  return a + b;
};

// Arrow Function (ES6+)
const addArrow = (a, b) => a + b;

console.log("Function Declaration:", addDeclaration(5, 3)); // 8
console.log("Function Expression:", addExpression(5, 3)); // 8
console.log("Arrow Function:", addArrow(5, 3)); // 8
console.log();

// ========================================
// 3. First-Class Functions & Higher-Order Functions
// ========================================

console.log("3️⃣ First-Class Functions & Higher-Order Functions:");
console.log("=================================================");

// Function that returns a function (Higher-Order Function)
const getTransformer = (isUpperCase) => {
  if (isUpperCase) {
    return (inputString) => {
      return inputString.toUpperCase();
    };
  }
  return (inputString) => {
    return inputString.toLowerCase();
  };
};

// Function that takes a function as parameter
const transformString = (stringToTransform, transformer) => {
  return transformer(stringToTransform);
};

const message = "Hello Inholland";
console.log("Original message:", message);
console.log("Uppercase:", transformString(message, getTransformer(true)));
console.log("Lowercase:", transformString(message, getTransformer(false)));
console.log();

// ========================================
// 4. The 'this' Keyword
// ========================================

console.log("4️⃣ The 'this' Keyword:");
console.log("======================");

function Car(sound) {
  this.sound = sound;

  // Arrow function - 'this' refers to Car instance
  this.go = () => {
    console.log(`  🚗 ${this.sound}`);
  };

  // Regular function - 'this' context can change
  this.stop = function () {
    console.log(`  🛑 ${this.sound} stopping...`);
  };
}

const car = new Car("vrooooom!");
car.go(); // "vrooooom!"
car.stop(); // "vrooooom! stopping..."

// Example showing 'this' context differences
const person = {
  name: "Alice",
  greet: function () {
    console.log(`  👋 Hello, I'm ${this.name}`);
  },
  greetArrow: () => {
    console.log(`  👋 Hello, I'm ${this.name}`); // this.name will be undefined
  },
};

person.greet(); // "Hello, I'm Alice"
person.greetArrow(); // "Hello, I'm undefined"
console.log();

// ========================================
// 5. Practice Exercises
// ========================================

console.log("5️⃣ Practice Exercises:");
console.log("======================");

// Exercise 1: Create a function that returns a function
const createMultiplier = (factor) => {
  return (number) => number * factor;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15

// Exercise 2: Function composition
const compose = (...functions) => {
  return (value) => {
    return functions.reduceRight((result, func) => func(result), value);
  };
};

const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;
const square = (x) => x * x;

const composed = compose(square, multiplyByTwo, addOne);
console.log("Composed function (5):", composed(5)); // ((5 + 1) * 2)² = 144

console.log("\n✅ Functions demo completed!");
