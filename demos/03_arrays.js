// ========================================
// JavaScript Arrays and Array Methods Demo
// ========================================

console.log("🍎 JavaScript Arrays and Array Methods Demo\n");

// ========================================
// 1. Array Challenge
// ========================================

console.log("1️⃣ Array Challenge:");
console.log("===================");

const food = [
  {
    name: "jam tart",
    type: "pastry",
    isSweet: true,
  },
  {
    name: "Eat Me cake",
    type: "pastry",
    isSweet: true,
  },
  {
    name: "bread-and-butter",
    type: "pastry",
    isSweet: false,
  },
  {
    name: "turtle soup",
    type: "soup",
    isSweet: false,
  },
];

console.log("Original food array:", food);

// Solution: Get names of sweet pastries
const sweetPastryNames = food
  .filter((item) => item.type === "pastry" && item.isSweet)
  .map((item) => item.name);

console.log("Sweet pastry names:", sweetPastryNames);
console.log();

// ========================================
// 2. Essential Array Methods
// ========================================

console.log("2️⃣ Essential Array Methods:");
console.log("============================");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// map() - Transform each element
console.log("📊 map() - Transform each element:");
const doubled = numbers.map((num) => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// filter() - Select elements that match condition
console.log("\n🔍 filter() - Select elements that match condition:");
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Original:", numbers);
console.log("Even numbers:", evenNumbers);

// find() - Find first matching element
console.log("\n🔎 find() - Find first matching element:");
const firstEven = numbers.find((num) => num % 2 === 0);
console.log("First even number:", firstEven);

// some() - Check if any element matches
console.log("\n✅ some() - Check if any element matches:");
const hasEven = numbers.some((num) => num % 2 === 0);
console.log("Has even numbers:", hasEven);

// every() - Check if all elements match
console.log("\n🎯 every() - Check if all elements match:");
const allPositive = numbers.every((num) => num > 0);
console.log("All positive:", allPositive);

console.log();

// ========================================
// 3. Array Method Chaining
// ========================================

console.log("3️⃣ Array Method Chaining:");
console.log("==========================");

const foodItems = [
  { name: "jam tart", type: "pastry", isSweet: true },
  { name: "Eat Me cake", type: "pastry", isSweet: true },
  { name: "bread-and-butter", type: "pastry", isSweet: false },
  { name: "turtle soup", type: "soup", isSweet: false },
];

// Chain filter and map
const sweetPastryNamesChained = foodItems
  .filter((food) => food.type === "pastry" && food.isSweet === true)
  .map((food) => food.name);

console.log("Sweet pastry names (chained):", sweetPastryNamesChained);

// Check if array has a soup
const hasSoup = foodItems.find((food) => food.type === "soup");
console.log("Has soup:", !!hasSoup);

console.log();

// ========================================
// 4. Advanced Array Methods
// ========================================

console.log("4️⃣ Advanced Array Methods:");
console.log("===========================");

// reduce() - The Swiss Army Knife
console.log("🛠️ reduce() - The Swiss Army Knife:");

// Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

// Group by type
const grouped = foodItems.reduce((acc, item) => {
  if (!acc[item.type]) acc[item.type] = [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log("Grouped by type:", grouped);

// Find maximum number
const max = numbers.reduce((acc, num) => Math.max(acc, num), numbers[0]);
console.log("Maximum number:", max);

console.log();

// ========================================
// 5. More Array Methods
// ========================================

console.log("5️⃣ More Array Methods:");
console.log("=======================");

// slice() - Extract portion of array
console.log("✂️ slice() - Extract portion of array:");
const firstThree = fruits.slice(0, 3);
console.log("First three fruits:", firstThree);

// splice() - Remove/add elements
console.log("\n🔧 splice() - Remove/add elements:");
const fruitsCopy = [...fruits];
fruitsCopy.splice(1, 1, "pear"); // Remove 1 element at index 1, add "pear"
console.log("After splice:", fruitsCopy);

// concat() - Combine arrays
console.log("\n🔗 concat() - Combine arrays:");
const vegetables = ["carrot", "lettuce"];
const allFood = fruits.concat(vegetables);
console.log("All food:", allFood);

// includes() - Check if element exists
console.log("\n🔍 includes() - Check if element exists:");
console.log("Fruits include 'apple':", fruits.includes("apple"));
console.log("Fruits include 'mango':", fruits.includes("mango"));

console.log();

// ========================================
// 6. Array Destructuring
// ========================================

console.log("6️⃣ Array Destructuring:");
console.log("========================");

const colors = ["red", "green", "blue", "yellow"];

// Basic destructuring
const [first, second, third] = colors;
console.log("First color:", first);
console.log("Second color:", second);

// Skip elements
const [primary, , tertiary] = colors;
console.log("Primary:", primary);
console.log("Tertiary:", tertiary);

// Rest operator
const [main, ...others] = colors;
console.log("Main color:", main);
console.log("Other colors:", others);

// Default values
const [a, b, c, d, e = "purple"] = colors;
console.log("Default value:", e);

console.log();

// ========================================
// 7. Practice Exercise
// ========================================

console.log("7️⃣ Practice Exercise:");
console.log("======================");

const students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 92, subject: "Math" },
  { name: "Charlie", grade: 78, subject: "Science" },
  { name: "Diana", grade: 95, subject: "Math" },
  { name: "Eve", grade: 88, subject: "Science" },
];

console.log("Students data:", students);

// 1. Get all students with grades above 80
const highAchievers = students.filter((student) => student.grade > 80);
console.log("\n1️⃣ Students with grades above 80:", highAchievers);

// 2. Get the average grade for Math students
const mathStudents = students.filter((student) => student.subject === "Math");
const mathAverage =
  mathStudents.reduce((sum, student) => sum + student.grade, 0) /
  mathStudents.length;
console.log("\n2️⃣ Average grade for Math students:", mathAverage);

// 3. Get a list of unique subjects
const uniqueSubjects = [...new Set(students.map((student) => student.subject))];
console.log("\n3️⃣ Unique subjects:", uniqueSubjects);

// 4. Get the highest grade
const highestGrade = students.reduce(
  (max, student) => Math.max(max, student.grade),
  0
);
console.log("\n4️⃣ Highest grade:", highestGrade);

// 5. Group students by subject
const studentsBySubject = students.reduce((acc, student) => {
  if (!acc[student.subject]) acc[student.subject] = [];
  acc[student.subject].push(student.name);
  return acc;
}, {});
console.log("\n5️⃣ Students grouped by subject:", studentsBySubject);

console.log();

// ========================================
// 8. Advanced Array Operations
// ========================================

console.log("8️⃣ Advanced Array Operations:");
console.log("==============================");

// Flatten nested arrays
const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = nestedArrays.flat();
console.log("Flattened arrays:", flattened);

// Remove duplicates
const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(duplicateNumbers)];
console.log("Unique numbers:", uniqueNumbers);

// Sort arrays
const unsortedFruits = ["banana", "apple", "cherry", "date"];
const sortedFruits = [...unsortedFruits].sort();
console.log("Sorted fruits:", sortedFruits);

// Reverse arrays
const reversedNumbers = [...numbers].reverse();
console.log("Reversed numbers:", reversedNumbers);

console.log();

// ========================================
// 9. Array Performance Tips
// ========================================

console.log("9️⃣ Array Performance Tips:");
console.log("===========================");

// Use for...of for simple iteration
console.log("🔄 for...of loop:");
for (const fruit of fruits) {
  console.log(`  - ${fruit}`);
}

// Use forEach for side effects
console.log("\n📝 forEach for side effects:");
fruits.forEach((fruit, index) => {
  console.log(`  ${index + 1}. ${fruit}`);
});

// Use map/filter/reduce for transformations
console.log("\n⚡ Functional approach:");
const processedFruits = fruits
  .filter((fruit) => fruit.length > 4)
  .map((fruit) => fruit.toUpperCase())
  .reduce((acc, fruit) => acc + fruit + ", ", "");

console.log("Processed fruits:", processedFruits.slice(0, -2));

console.log();

console.log("✅ Arrays demo completed!");
