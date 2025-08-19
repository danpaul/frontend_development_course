// ========================================
// JavaScript Destructuring and Spread Syntax Demo
// ========================================

console.log("🎯 JavaScript Destructuring and Spread Syntax Demo\n");

// ========================================
// 1. Object Destructuring
// ========================================

console.log("1️⃣ Object Destructuring:");
console.log("==========================");

const fruit = {
  fruitName: "banana",
  type: "fruit",
  isSweet: true,
  nutrition: {
    calories: 89,
    protein: 1.1,
    fiber: 2.6,
  },
};

// Basic destructuring
const { fruitName, isSweet } = fruit;
console.log("Basic destructuring:");
console.log(`The ${fruitName} is sweet: ${isSweet}`);

// Destructuring with renaming
const { fruitName: fruitNameRenamed, type } = fruit;
console.log(`\nDestructuring with renaming:`);
console.log(`The ${fruitNameRenamed} is of type ${type}`);

// Destructuring with default values
const { fruitName: fruitName2, color = "yellow" } = fruit;
console.log(`\nDestructuring with defaults:`);
console.log(`The ${fruitName2} is ${color}`);

// Nested destructuring
const {
  nutrition: { calories, protein },
} = fruit;
console.log(`\nNested destructuring:`);
console.log(`Calories: ${calories}, Protein: ${protein}g`);

console.log();

// ========================================
// 2. Array Destructuring
// ========================================

console.log("2️⃣ Array Destructuring:");
console.log("========================");

const fruits = ["banana", "apple", "orange", "grape"];
const colors = ["red", "green", "blue", "yellow", "purple"];

// Basic array destructuring
const [first, second, third] = fruits;
console.log("Basic array destructuring:");
console.log(`First fruit: ${first}, Second fruit: ${second}`);

// Skip elements
const [primary, , tertiary] = colors;
console.log(`\nSkip elements:`);
console.log(`Primary: ${primary}, Tertiary: ${tertiary}`);

// Rest operator
const [main, ...others] = colors;
console.log(`\nRest operator:`);
console.log(`Main color: ${main}`);
console.log(`Other colors: ${others.join(", ")}`);

// Default values
const [a, b, c, d, e = "pink"] = colors;
console.log(`\nDefault values:`);
console.log(`Fifth color: ${e}`);

// Swap variables
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log(`\nVariable swapping:`);
console.log(`x: ${x}, y: ${y}`);

console.log();

// ========================================
// 3. Spread Operator with Objects
// ========================================

console.log("3️⃣ Spread Operator with Objects:");
console.log("=================================");

const baseFruit = { type: "fruit", isHealthy: true };

// Spread base fruit properties into apple
const apple = { ...baseFruit, name: "apple" };
console.log("Spread with new properties:");
console.log(`The type of ${apple.name} is ${apple.type}`);

// Override properties
const carrot = { ...baseFruit, type: "vegetable", name: "carrot" };
console.log(`\nOverride properties:`);
console.log(`The type of ${carrot.name} is ${carrot.type}`);

// Merge objects
const fruitDetails = { color: "red", taste: "sweet" };
const completeApple = { ...apple, ...fruitDetails };
console.log(`\nMerge objects:`);
console.log("Complete apple:", completeApple);

// Clone objects
const appleClone = { ...apple };
appleClone.color = "green";
console.log(`\nClone objects:`);
console.log("Original apple:", apple);
console.log("Cloned apple:", appleClone);

console.log();

// ========================================
// 4. Spread Operator with Arrays
// ========================================

console.log("4️⃣ Spread Operator with Arrays:");
console.log("================================");

const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "grape"];

// Combine arrays
const allFruits = [...fruits1, ...fruits2];
console.log("Combine arrays:");
console.log("All fruits:", allFruits);

// Copy array
const fruitsCopy = [...fruits1];
fruitsCopy.push("kiwi");
console.log(`\nCopy array:`);
console.log("Original:", fruits1);
console.log("Copy:", fruitsCopy);

// Insert elements
const moreFruits = ["mango", ...fruits1, "pineapple"];
console.log(`\nInsert elements:`);
console.log("More fruits:", moreFruits);

// Spread in function calls
const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbers);
console.log(`\nSpread in function calls:`);
console.log("Max number:", maxNumber);

console.log();

// ========================================
// 5. Function Parameters with Destructuring
// ========================================

console.log("5️⃣ Function Parameters with Destructuring:");
console.log("===========================================");

// Object destructuring in function parameters
const printFruit = ({ type = "fruit", isHealthy = true, name } = {}) => {
  console.log(`The ${name} is of type ${type} and is healthy: ${isHealthy}`);
};

printFruit({ name: "mango" });
printFruit({ name: "carrot", type: "vegetable" });

// Array destructuring in function parameters
const printFirstTwo = ([first, second, ...rest] = []) => {
  console.log(`First: ${first}, Second: ${second}`);
  if (rest.length > 0) {
    console.log(`Rest: ${rest.join(", ")}`);
  }
};

printFirstTwo(["red", "green", "blue", "yellow"]);

console.log();

// ========================================
// 6. Advanced Destructuring Patterns
// ========================================

console.log("6️⃣ Advanced Destructuring Patterns:");
console.log("====================================");

// Destructuring in loops
const userList = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

console.log("Destructuring in loops:");
for (const { name, email } of userList) {
  console.log(`${name}: ${email}`);
}

// Destructuring with computed properties
const prop = "name";
const { [prop]: userName } = userList[0];
console.log(`\nComputed property destructuring:`);
console.log(`User name: ${userName}`);

// Destructuring function returns
const getUserInfo = () => {
  return {
    name: "Alice",
    age: 25,
    preferences: {
      theme: "dark",
      language: "en",
    },
  };
};

const {
  name: userName2,
  preferences: { theme: userTheme },
} = getUserInfo();
console.log(`\nDestructuring function returns:`);
console.log(`User: ${userName2}, Theme: ${userTheme}`);

console.log();

// ========================================
// 7. Practice Exercise
// ========================================

console.log("7️⃣ Practice Exercise:");
console.log("======================");

const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  preferences: {
    theme: "dark",
    language: "en",
    notifications: {
      email: true,
      push: false,
    },
  },
  posts: [
    { id: 1, title: "First Post", content: "Hello World" },
    { id: 2, title: "Second Post", content: "JavaScript is fun" },
  ],
};

console.log("User data:", user);

// 1. Destructure name and email
const { name: userName3, email: userEmail } = user;
console.log(`\n1️⃣ Name: ${userName3}, Email: ${userEmail}`);

// 2. Destructure nested preferences
const {
  preferences: { theme: userTheme2, language },
} = user;
console.log(`\n2️⃣ Theme: ${userTheme2}, Language: ${language}`);

// 3. Create a new user object with updated preferences
const updatedUser = {
  ...user,
  preferences: {
    ...user.preferences,
    theme: "light",
    notifications: {
      ...user.preferences.notifications,
      push: true,
    },
  },
};
console.log(`\n3️⃣ Updated user preferences:`, updatedUser.preferences);

// 4. Use spread to merge two objects
const additionalInfo = {
  bio: "JavaScript developer",
  location: "Amsterdam",
  skills: ["JavaScript", "React", "Node.js"],
};

const completeUser = { ...user, ...additionalInfo };
console.log(`\n4️⃣ Complete user:`, completeUser);

// 5. Destructure array elements
const [firstPost, secondPost] = user.posts;
console.log(`\n5️⃣ First post title: ${firstPost.title}`);

console.log();

// ========================================
// 8. Real-World Examples
// ========================================

console.log("8️⃣ Real-World Examples:");
console.log("========================");

// API response handling
const apiResponse = {
  success: true,
  data: {
    users: [
      { id: 1, name: "Alice", role: "admin" },
      { id: 2, name: "Bob", role: "user" },
    ],
    total: 2,
  },
  message: "Users retrieved successfully",
};

// Destructure API response
const {
  success,
  data: { users: apiUsers, total },
  message,
} = apiResponse;
console.log("API Response destructuring:");
console.log(`Success: ${success}, Total users: ${total}, Message: ${message}`);

// React-like props destructuring
const componentProps = {
  title: "My Component",
  children: "Some content",
  className: "container",
  onClick: () => console.log("Clicked!"),
};

const MyComponent = ({ title, children, className, ...restProps }) => {
  console.log(`\nReact-like component:`);
  console.log(`Title: ${title}, Class: ${className}`);
  console.log(`Children: ${children}`);
  console.log(`Rest props:`, restProps);
};

MyComponent(componentProps);

// Configuration object destructuring
const config = {
  api: {
    baseUrl: "https://api.example.com",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer token",
    },
  },
  features: {
    darkMode: true,
    notifications: false,
  },
};

const {
  api: { baseUrl, timeout },
  features: { darkMode },
} = config;
console.log(`\nConfiguration destructuring:`);
console.log(
  `API URL: ${baseUrl}, Timeout: ${timeout}ms, Dark mode: ${darkMode}`
);

console.log();

console.log("✅ Destructuring and spread demo completed!");
