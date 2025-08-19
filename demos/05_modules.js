// ========================================
// JavaScript Modules Demo
// ========================================

console.log("📦 JavaScript Modules Demo\n");

// Note: This demo shows module concepts
// To run actual ES6 modules, you would need:
// 1. Files with .mjs extension, or
// 2. package.json with "type": "module", or
// 3. HTML with <script type="module">

// ========================================
// 1. Module Structure Example
// ========================================

console.log("1️⃣ Module Structure Example:");
console.log("=============================");

// This would be in a separate file: utils.js
const utilsModule = {
  // Named exports
  formatName: (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  },

  calculateAge: (birthYear) => {
    return new Date().getFullYear() - birthYear;
  },

  // Default export
  Person: class Person {
    constructor(name, birthYear) {
      this.name = name;
      this.birthYear = birthYear;
    }

    getAge() {
      return utilsModule.calculateAge(this.birthYear);
    }
  },
};

// Simulate importing from utils.js
const { formatName, calculateAge } = utilsModule;
const Person = utilsModule.Person;

console.log("Imported functions:");
console.log("Formatted name:", formatName("Alice", "Johnson"));
console.log("Age calculation:", calculateAge(1995));

const person = new Person("Alice", 1995);
console.log(`${person.name} is ${person.getAge()} years old`);

console.log();

// ========================================
// 2. Different Export Styles
// ========================================

console.log("2️⃣ Different Export Styles:");
console.log("============================");

// Simulate different module files
const mathModule = {
  // Named exports
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,

  // Constants
  PI: 3.14159,
  E: 2.71828,
};

const stringModule = {
  // Default export
  default: {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    reverse: (str) => str.split("").reverse().join(""),
    countWords: (str) => str.split(" ").length,
  },
};

// Simulate different import styles
console.log("Named imports:");
const { add, subtract, PI } = mathModule;
console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`10 - 4 = ${subtract(10, 4)}`);
console.log(`PI = ${PI}`);

console.log("\nDefault import:");
const StringUtils = stringModule.default;
console.log("Capitalized:", StringUtils.capitalize("hello world"));
console.log("Reversed:", StringUtils.reverse("javascript"));
console.log("Word count:", StringUtils.countWords("JavaScript is awesome"));

console.log();

// ========================================
// 3. Module Organization
// ========================================

console.log("3️⃣ Module Organization:");
console.log("========================");

// Simulate a more complex module structure
const apiModule = {
  // API configuration
  config: {
    baseUrl: "https://api.example.com",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  },

  // API functions
  async fetchUser(id) {
    console.log(`Fetching user ${id} from ${this.config.baseUrl}`);
    return { id, name: "Alice", email: "alice@example.com" };
  },

  async fetchPosts(userId) {
    console.log(`Fetching posts for user ${userId}`);
    return [
      { id: 1, title: "First Post", userId },
      { id: 2, title: "Second Post", userId },
    ];
  },

  // Utility functions
  formatResponse(data) {
    return {
      success: true,
      data,
      timestamp: new Date().toISOString(),
    };
  },
};

// Simulate importing specific functions
const { fetchUser, fetchPosts, config } = apiModule;

console.log("API Configuration:", config);
console.log(
  "API Functions available:",
  Object.keys(apiModule).filter((key) => typeof apiModule[key] === "function")
);

console.log();

// ========================================
// 4. Module Patterns
// ========================================

console.log("4️⃣ Module Patterns:");
console.log("===================");

// Singleton pattern
const databaseModule = {
  connection: null,

  connect() {
    if (!this.connection) {
      this.connection = {
        host: "localhost",
        port: 5432,
        database: "myapp",
      };
      console.log("Database connected");
    }
    return this.connection;
  },

  query(sql) {
    if (!this.connection) {
      throw new Error("Database not connected");
    }
    console.log(`Executing query: ${sql}`);
    return { rows: [], count: 0 };
  },

  disconnect() {
    this.connection = null;
    console.log("Database disconnected");
  },
};

// Factory pattern
const userFactoryModule = {
  createUser(type, data) {
    switch (type) {
      case "admin":
        return {
          ...data,
          role: "admin",
          permissions: ["read", "write", "delete"],
        };
      case "user":
        return {
          ...data,
          role: "user",
          permissions: ["read"],
        };
      default:
        throw new Error(`Unknown user type: ${type}`);
    }
  },
};

console.log("Singleton pattern:");
const db1 = databaseModule.connect();
const db2 = databaseModule.connect();
console.log("Same connection:", db1 === db2);

console.log("\nFactory pattern:");
const admin = userFactoryModule.createUser("admin", {
  name: "Alice",
  email: "alice@example.com",
});
const user = userFactoryModule.createUser("user", {
  name: "Bob",
  email: "bob@example.com",
});
console.log("Admin:", admin);
console.log("User:", user);

console.log();

// ========================================
// 5. Circular Dependencies
// ========================================

console.log("5️⃣ Circular Dependencies:");
console.log("==========================");

// Simulate circular dependency (this is generally avoided)
const moduleA = {
  name: "Module A",
  getModuleB() {
    return moduleB;
  },
  sayHello() {
    console.log(`Hello from ${this.name}`);
  },
};

const moduleB = {
  name: "Module B",
  getModuleA() {
    return moduleA;
  },
  sayHello() {
    console.log(`Hello from ${this.name}`);
  },
};

console.log("Circular dependency example:");
moduleA.sayHello();
moduleB.sayHello();
console.log("Module A can access Module B:", moduleA.getModuleB().name);
console.log("Module B can access Module A:", moduleB.getModuleA().name);

console.log();

// ========================================
// 6. Dynamic Imports
// ========================================

console.log("6️⃣ Dynamic Imports:");
console.log("====================");

// Simulate dynamic imports
const dynamicModules = {
  math: mathModule,
  string: stringModule,
  api: apiModule,
};

async function loadModule(moduleName) {
  console.log(`Loading module: ${moduleName}`);
  // Simulate async loading
  await new Promise((resolve) => setTimeout(resolve, 100));

  const module = dynamicModules[moduleName];
  if (!module) {
    throw new Error(`Module ${moduleName} not found`);
  }

  return module;
}

// Dynamic import example
async function useDynamicImport() {
  try {
    const math = await loadModule("math");
    console.log("Dynamically loaded math module:", math.add(10, 5));

    const stringUtils = await loadModule("string");
    console.log(
      "Dynamically loaded string module:",
      stringUtils.default.capitalize("hello")
    );
  } catch (error) {
    console.error("Error loading module:", error.message);
  }
}

useDynamicImport();

console.log();

// ========================================
// 7. Practice Exercise
// ========================================

console.log("7️⃣ Practice Exercise:");
console.log("======================");

// Create a module system for a blog application
const blogModules = {
  // User module
  user: {
    createUser({ name, email, role = "user" }) {
      return {
        id: Date.now(),
        name,
        email,
        role,
        createdAt: new Date().toISOString(),
      };
    },

    validateUser(user) {
      return user.name && user.email && user.email.includes("@");
    },
  },

  // Post module
  post: {
    createPost({ title, content, authorId }) {
      return {
        id: Date.now(),
        title,
        content,
        authorId,
        createdAt: new Date().toISOString(),
        likes: 0,
      };
    },

    formatPost(post) {
      return {
        ...post,
        excerpt: post.content.substring(0, 100) + "...",
        formattedDate: new Date(post.createdAt).toLocaleDateString(),
      };
    },
  },

  // Comment module
  comment: {
    createComment({ content, postId, authorId }) {
      return {
        id: Date.now(),
        content,
        postId,
        authorId,
        createdAt: new Date().toISOString(),
      };
    },
  },
};

// Use the modules
console.log("Blog application modules:");

// Create a user
const { createUser, validateUser } = blogModules.user;
const user1 = createUser({
  name: "Alice",
  email: "alice@example.com",
  role: "admin",
});
console.log("Created user:", user1);
console.log("User valid:", validateUser(user1));

// Create a post
const { createPost, formatPost } = blogModules.post;
const post1 = createPost({
  title: "My First Post",
  content:
    "This is a very long post content that will be truncated in the excerpt...",
  authorId: user1.id,
});
console.log("Created post:", post1);
console.log("Formatted post:", formatPost(post1));

// Create a comment
const { createComment } = blogModules.comment;
const comment1 = createComment({
  content: "Great post!",
  postId: post1.id,
  authorId: user1.id,
});
console.log("Created comment:", comment1);

console.log();

// ========================================
// 8. Real-World Module Example
// ========================================

console.log("8️⃣ Real-World Module Example:");
console.log("==============================");

// Simulate a React-like component module
const componentModule = {
  // Component base class
  Component: class Component {
    constructor(props = {}) {
      this.props = props;
      this.state = {};
    }

    setState(newState) {
      this.state = { ...this.state, ...newState };
      console.log("State updated:", this.state);
    }

    render() {
      throw new Error("render() method must be implemented");
    }
  },

  // Utility functions
  createElement(type, props, ...children) {
    return {
      type,
      props: { ...props, children },
      render() {
        console.log(`Rendering ${type} with props:`, props);
        return `Rendered ${type}`;
      },
    };
  },

  // Hooks (simplified)
  useState(initialValue) {
    let state = initialValue;
    const setState = (newValue) => {
      state = newValue;
      console.log("State changed to:", state);
    };
    return [state, setState];
  },
};

// Use the component module
const { Component, createElement, useState } = componentModule;

// Create a simple component
class MyComponent extends Component {
  constructor(props) {
    super(props);
    const [count, setCount] = useState(0);
    this.count = count;
    this.setCount = setCount;
  }

  render() {
    return createElement(
      "div",
      { className: "my-component" },
      createElement("h1", null, `Count: ${this.count}`),
      createElement(
        "button",
        { onClick: () => this.setCount(this.count + 1) },
        "Increment"
      )
    );
  }
}

const myComponent = new MyComponent({ title: "Counter" });
const rendered = myComponent.render();
console.log("Component rendered:", rendered);

console.log();

console.log("✅ Modules demo completed!");
