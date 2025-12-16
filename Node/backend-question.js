// What is Node.js?
// Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript outside the browser, typically on servers.

// What is npm?
// npm is a package manager for Node.js that helps manage dependencies and packages for your projects.

// What is the difference between var, let, and const?
// var is function-scoped.
// let and const are block-scoped.
// const cannot be reassigned, while let and var can.

// What is a callback function?
// A function passed as an argument to another function, executed after some operation has been performed.

// What is a Promise?
// An object representing the eventual completion or failure of an asynchronous operation, with .then(), .catch(), and .finally() methods.

// What is async/await?
// Syntactic sugar for working with Promises. async functions always return a Promise, and await pauses execution until the Promise resolves.

// What is the event loop?
// The mechanism that allows Node.js to perform non-blocking I/O operations by delegating work to the system kernel.

// What is middleware in Express?
// Functions that have access to request and response objects and execute in the request-response cycle.

// What is the difference between require() and import?
// require() is CommonJS syntax (synchronous).

// import is ES6 module syntax (can be async).
// Node.js supports both.

// What is clustering in Node.js?
// A technique to spawn child processes to take advantage of multi-core systems and distribute load.

// What are streams in Node.js?
// Objects that let you read/write data in chunks rather than loading entire content into memory.

// What is the difference between process.nextTick() and setImmediate()?
// process.nextTick() executes before I/O events.
// setImmediate() executes after I/O events in the event loop.

// What is the global object in Node.js?
// The global object in Node.js is global, similar to window in browsers.

// What is __dirname and __filename?
// __dirname gives the current directory path.
// __filename gives the current file path.

// What is the difference between spawn() and fork()?
// spawn() launches a new process.
// fork() is a special case of spawn() used to create child Node.js processes.

// What is Express?
// A minimal and flexible Node.js web application framework for building APIs and web applications.

// What is REST API?
// Representational State Transfer API that uses HTTP requests to perform CRUD operations on resources.

// What is MongoDB?
// A NoSQL document-based database that stores data in JSON-like documents with dynamic schemas.

// What is JWT?
// JSON Web Token - a compact, self-contained way to transmit information securely as JSON objects.
// like for authentication and information exchange.
// when a user logs in, a JWT is created and sent to the client. The client includes this token in the Authorization header for subsequent requests to access protected routes.

// What is CORS?
// Cross-Origin Resource Sharing - a mechanism allowing restricted resources to be accessed from different origins.

// What is the use of package.json?
// A file that contains metadata about the project and lists all dependencies required for the project.

// What is the difference between dependencies and devDependencies?

// dependencies are needed for production.

// devDependencies are only for development (testing, bundling, etc.).

// What is node_modules folder?
// A folder that contains all installed packages and their dependencies in a project.

// What is the purpose of .env file?
// Stores environment variables like API keys, database URLs, and sensitive information securely.

// What is error handling in Node.js?
// Mechanisms to catch and handle errors using try-catch blocks, error callbacks, or Promise rejection handlers.

// What is the difference between throw and return?
// throw stops execution and raises an error.
// return stops execution and returns a value.

// What is garbage collection?
// Automatic memory management that frees up memory by removing objects that are no longer referenced.

// What is the difference between == and ===?
// == performs type coercion.
// === checks both value and type without conversion.

// What is closure in JavaScript?
// A function that has access to variables from its outer scope even after that scope has closed.

// What is hoisting?
// JavaScript's behavior of moving declarations to the top of their scope before code execution.

// What is destructuring?
// Unpacking values from arrays or properties from objects into distinct variables in a concise way.

// What is the spread operator?
// The ... operator that expands arrays or objects into individual elements.

// What is template literals?
// Strings enclosed in backticks ( ) that allow variable interpolation and multi-line strings.

// What is an arrow function?
// A concise way to write functions using the => syntax with implicit return for single expressions.

// What is 'this' in JavaScript?
// 'this' refers to the object that owns the currently executing code.

// What are call(), apply(), and bind()?
// Methods to set the context of 'this'.
// call()/apply() execute immediately.
// bind() returns a new function.

// What is prototypal inheritance?
// A way objects inherit properties and methods from other objects through the prototype chain.

// What is the difference between constructor function and class?
// Classes are syntactic sugar over constructor functions with cleaner syntax and better organization.

// What is the difference between map() and forEach()?
// map() returns a new array.
// forEach() doesn't return anything; map() is chainable.

// What is the filter() method?
// Creates a new array with elements that pass a test function.

// What is reduce() method?
// Reduces an array to a single value by executing a function on each element.

// What is the difference between find() and filter()?
// find() returns the first matching element.
// filter() returns all matching elements as an array.

// What is indexing in MongoDB?
// Creating indexes on fields to speed up query performance.

// What is aggregation in MongoDB?
// Processing data records and returning computed results using aggregation pipeline stages.

// What is the difference between SQL and NoSQL?
// SQL is relational with structured schemas.
// NoSQL is non-relational with flexible schemas.

// What is the purpose of bcrypt?
// A library for hashing passwords securely with salt to prevent unauthorized access.

// What is multer?
// Middleware for handling file uploads in Node.js/Express applications.

// What is testing in Node.js?
// Validating that code works as expected using frameworks like Jest, Mocha, or Vitest.

// What is the difference between unit and integration testing?
// Unit testing checks individual components.
// Integration testing checks how components work together.

// What is Docker?
// A containerization tool that packages applications with all dependencies for consistent deployment across environments.