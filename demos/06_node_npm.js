// ========================================
// Node.js and npm Demo
// ========================================

console.log("🚀 Node.js and npm Demo\n");

// ========================================
// 1. Node.js Basics
// ========================================

console.log("1️⃣ Node.js Basics:");
console.log("===================");

// Node.js global objects
console.log("Node.js global objects:");
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);
console.log("process.version:", process.version);
console.log("process.platform:", process.platform);
console.log("process.cwd():", process.cwd());

// Node.js built-in modules
const path = require("path");
const fs = require("fs");
const os = require("os");

console.log("\nNode.js built-in modules:");
console.log("Path separator:", path.sep);
console.log("Current directory:", path.resolve("."));
console.log("Home directory:", os.homedir());
console.log("CPU cores:", os.cpus().length);

console.log();

// ========================================
// 2. File System Operations
// ========================================

console.log("2️⃣ File System Operations:");
console.log("===========================");

// Create a temporary file for demonstration
const tempFile = path.join(__dirname, "temp-demo.txt");
const tempContent =
  "Hello from Node.js!\nThis is a temporary file for demonstration.";

try {
  // Write file
  fs.writeFileSync(tempFile, tempContent);
  console.log("✅ File written successfully");

  // Read file
  const readContent = fs.readFileSync(tempFile, "utf8");
  console.log("📖 File content:", readContent);

  // Get file stats
  const stats = fs.statSync(tempFile);
  console.log("📊 File stats:");
  console.log("  Size:", stats.size, "bytes");
  console.log("  Created:", stats.birthtime);
  console.log("  Modified:", stats.mtime);

  // Clean up
  fs.unlinkSync(tempFile);
  console.log("🗑️ Temporary file deleted");
} catch (error) {
  console.error("❌ File operation error:", error.message);
}

console.log();

// ========================================
// 3. Environment Variables
// ========================================

console.log("3️⃣ Environment Variables:");
console.log("==========================");

// Access environment variables
console.log("NODE_ENV:", process.env.NODE_ENV || "not set");
console.log(
  "PATH:",
  process.env.PATH ? process.env.PATH.substring(0, 50) + "..." : "not set"
);

// Set environment variable for this process
process.env.DEMO_VAR = "Hello from demo!";
console.log("DEMO_VAR:", process.env.DEMO_VAR);

console.log();

// ========================================
// 4. Process Management
// ========================================

console.log("4️⃣ Process Management:");
console.log("=======================");

console.log("Process ID:", process.pid);
console.log("Node.js version:", process.version);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);

// Process events
process.on("exit", (code) => {
  console.log(`Process exiting with code: ${code}`);
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error.message);
  process.exit(1);
});

console.log();

// ========================================
// 5. Module System (CommonJS vs ES6)
// ========================================

console.log("5️⃣ Module System:");
console.log("==================");

// CommonJS module (simulated)
const commonJSModule = {
  name: "CommonJS Module",
  version: "1.0.0",
  greet: function (name) {
    return `Hello ${name} from ${this.name}!`;
  },
  add: function (a, b) {
    return a + b;
  },
};

// Simulate require
const myModule = commonJSModule;
console.log("Module loaded:", myModule.name);
console.log("Module version:", myModule.version);
console.log("Greeting:", myModule.greet("Alice"));
console.log("Addition:", myModule.add(5, 3));

console.log();

// ========================================
// 6. Package.json Simulation
// ========================================

console.log("6️⃣ Package.json Simulation:");
console.log("============================");

// Simulate package.json structure
const packageJson = {
  name: "my-node-demo",
  version: "1.0.0",
  description: "A demo Node.js project",
  main: "index.js",
  scripts: {
    start: "node index.js",
    dev: "nodemon index.js",
    test: "jest",
    build: "webpack",
  },
  dependencies: {
    express: "^4.18.2",
    axios: "^1.4.0",
  },
  devDependencies: {
    nodemon: "^2.0.22",
    jest: "^29.5.0",
  },
  keywords: ["demo", "node", "javascript"],
  author: "Your Name",
  license: "MIT",
};

console.log("Package.json structure:");
console.log("Name:", packageJson.name);
console.log("Version:", packageJson.version);
console.log("Main entry:", packageJson.main);
console.log("Scripts:", Object.keys(packageJson.scripts));
console.log("Dependencies:", Object.keys(packageJson.dependencies));
console.log("Dev Dependencies:", Object.keys(packageJson.devDependencies));

console.log();

// ========================================
// 7. npm Commands Simulation
// ========================================

console.log("7️⃣ npm Commands Simulation:");
console.log("============================");

// Simulate npm commands
const npmCommands = {
  init: "npm init -y",
  install: "npm install express",
  installDev: "npm install --save-dev nodemon",
  uninstall: "npm uninstall express",
  update: "npm update",
  audit: "npm audit",
  run: "npm run start",
  list: "npm list",
  outdated: "npm outdated",
};

console.log("Common npm commands:");
Object.entries(npmCommands).forEach(([command, example]) => {
  console.log(`  ${command}: ${example}`);
});

console.log();

// ========================================
// 8. Project Structure Example
// ========================================

console.log("8️⃣ Project Structure Example:");
console.log("==============================");

// Simulate a typical Node.js project structure
const projectStructure = {
  "my-node-app/": {
    "package.json": "Project configuration and dependencies",
    "package-lock.json": "Exact dependency versions",
    "node_modules/": "Installed packages",
    "src/": {
      "index.js": "Main application entry point",
      "routes/": "API route handlers",
      "models/": "Data models",
      "utils/": "Utility functions",
    },
    "public/": "Static files (HTML, CSS, JS)",
    "tests/": "Test files",
    ".env": "Environment variables",
    ".gitignore": "Git ignore rules",
    "README.md": "Project documentation",
  },
};

console.log("Typical Node.js project structure:");
function printStructure(structure, indent = "") {
  Object.entries(structure).forEach(([name, content]) => {
    if (typeof content === "object") {
      console.log(`${indent}📁 ${name}`);
      printStructure(content, indent + "  ");
    } else {
      console.log(`${indent}📄 ${name} - ${content}`);
    }
  });
}

printStructure(projectStructure);

console.log();

// ========================================
// 9. Express.js Example (Simulated)
// ========================================

console.log("9️⃣ Express.js Example (Simulated):");
console.log("===================================");

// Simulate Express.js server
const expressSimulation = {
  createServer: function () {
    return {
      port: 3000,
      routes: [],
      middleware: [],

      use: function (middleware) {
        this.middleware.push(middleware);
        console.log(`🔧 Middleware added: ${middleware.name || "anonymous"}`);
      },

      get: function (path, handler) {
        this.routes.push({ method: "GET", path, handler });
        console.log(`🛣️ Route added: GET ${path}`);
      },

      post: function (path, handler) {
        this.routes.push({ method: "POST", path, handler });
        console.log(`🛣️ Route added: POST ${path}`);
      },

      listen: function (port, callback) {
        this.port = port;
        console.log(`🚀 Server listening on port ${port}`);
        if (callback) callback();
      },
    };
  },
};

// Create and configure server
const app = expressSimulation.createServer();

// Add middleware
app.use({ name: "cors" });
app.use({ name: "json" });

// Add routes
app.get("/", (req, res) => {
  console.log("GET / - Home page requested");
});

app.get("/api/users", (req, res) => {
  console.log("GET /api/users - Users API requested");
});

app.post("/api/users", (req, res) => {
  console.log("POST /api/users - Create user requested");
});

// Start server
app.listen(3000, () => {
  console.log("✅ Express server simulation completed");
});

console.log();

// ========================================
// 10. Practice Exercise
// ========================================

console.log("🔟 Practice Exercise:");
console.log("=====================");

// Create a simple file processor
const fileProcessor = {
  // Read and process a file
  processFile: function (filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const lines = content.split("\n");
      const wordCount = content.split(/\s+/).length;
      const charCount = content.length;

      return {
        lines: lines.length,
        words: wordCount,
        characters: charCount,
        content: content.substring(0, 100) + "...",
      };
    } catch (error) {
      throw new Error(`Failed to process file: ${error.message}`);
    }
  },

  // Create a simple configuration
  createConfig: function (options = {}) {
    return {
      port: options.port || 3000,
      host: options.host || "localhost",
      debug: options.debug || false,
      timeout: options.timeout || 5000,
    };
  },
};

// Use the file processor
try {
  // Create a temporary file for processing
  const demoFile = path.join(__dirname, "demo-content.txt");
  const demoContent = `This is a demo file for processing.
It contains multiple lines of text.
We will count words, lines, and characters.
This demonstrates Node.js file system operations.`;

  fs.writeFileSync(demoFile, demoContent);

  const stats = fileProcessor.processFile(demoFile);
  console.log("File processing results:");
  console.log("Lines:", stats.lines);
  console.log("Words:", stats.words);
  console.log("Characters:", stats.characters);
  console.log("Preview:", stats.content);

  // Clean up
  fs.unlinkSync(demoFile);

  // Create configuration
  const config = fileProcessor.createConfig({ port: 8080, debug: true });
  console.log("\nConfiguration:", config);
} catch (error) {
  console.error("❌ Exercise error:", error.message);
}

console.log();

console.log("✅ Node.js and npm demo completed!");
