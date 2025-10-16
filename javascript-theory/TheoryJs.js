//   JavaScript Interview Questions and Answers
//  Covers: Basics, ES6 +, Functions, Objects, Arrays, Async, OOP, DOM, Misc


// 1. What is JavaScript?
// JavaScript is a high-level, interpreted programming language used to make web pages interactive.

// 2. Difference between var, let, and const?
var a = 1; // function-scoped, can be redeclared and updated
let b = 2; // block-scoped, can be updated but not redeclared in same scope
const c = 3; // block-scoped, cannot be updated or redeclared

// 3. What is hoisting?
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

// 4. What are closures?
// A closure is a function that remembers its outer variables and can access them.
// Example:
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer(); // counter() returns incremented count

// 5. What is the difference between == and ===?
// == compares values after type coercion, === compares both value and type.

// 6. What is a callback function?
// A callback function is a function passed into another function as an argument to be executed later.
// Example:
function greet(name, callback) {
    callback(`Hello, ${name}`);
}
greet('Alice', msg => console.log(msg));

// 7. What is an arrow function?
// Arrow functions provide a shorter syntax and do not have their own 'this'.
// Example:
const sum = (a, b) => a + b;

// 8. What is the 'this' keyword?
// 'this' refers to the object from which the function was called.

// 9. What is event bubbling and event capturing?
// Bubbling: event propagates from child to parent.
// Capturing: event propagates from parent to child.

// 10. What is the difference between null and undefined?
// null: intentional absence of value.
// undefined: variable declared but not assigned a value.

// 11. What is a promise?
// promise is javascript object that hold the result (success/failure) of an asynchronous operation.
// of work that will be completed in the future.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'), 1000);
});
promise.then(console.log);

// 12. What is async/await?
// async/await is syntactic sugar over promises to write asynchronous code in a synchronous manner.
async function fetchData() {
    const data = await promise;
    console.log(data);
}

// 13. What is the spread operator?
// The spread operator (...) allows an iterable to expand in places where multiple elements/arguments are expected.
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1,2,3,4]

// . what is Rest operator?
// The rest operator (...) collects multiple elements into an array.
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
sumAll(1, 2, 3); // 6

// 14. What is destructuring?
// Destructuring allows unpacking values from arrays or properties from objects into distinct variables.
const obj = { x: 1, y: 2 };
const { x, y } = obj;

// 15. What is a prototype?
// Every JS object has a prototype object it inherits methods/properties from.
// Example:
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    console.log(`Hello, ${this.name}`);
};
const p = new Person('Alice');
p.greet(); // Hello, Alice

// 16. What is the difference between call, apply, and bind?
function show() { 
    console.log(this.name); 
}
const user = { name: 'Bob' };
show.call(user); // call: passes arguments individually
show.apply(user); // apply: passes arguments as array
const boundShow = show.bind(user); // bind: returns new function

// 17. What is IIFE (Immediately Invoked Function Expression)?
(function () {
    console.log('IIFE runs!');
})();

// 18. What is the DOM?
// Document Object Model: tree structure representing HTML elements.
// It allows JS to interact with and manipulate web pages.
// Example: document.getElementById('id');


// 19. How to select elements in DOM?
document.getElementById('id');
document.querySelector('.class');

// 20. What is event delegation?
// Attaching a single event listener to a parent to handle events for all children.
// Example:
document.getElementById('parent').addEventListener('click', function (e) {
    if (e.target && e.target.matches('button.child')) {
        console.log('Child button clicked');
    }
});


// 21. What is debouncing and throttling?
// Debouncing: delays function execution until after a pause.
// Throttling: limits function execution to once per interval.

// 22. What is JSON?
// JavaScript Object Notation: lightweight data-interchange format.

// 23. How to deep clone an object?
const clone = JSON.parse(JSON.stringify(obj));
// Note: This method has limitations (e.g., functions, undefined, circular references).

// 24. What is the difference between map, filter, and reduce?
const nums = [1, 2, 3];
nums.map(x => x * 2); // [2,4,6] 
nums.filter(x => x > 1); // [2,3]
nums.reduce((acc, x) => acc + x, 0); // 6

// 25. What is a module?
// A module is a file containing code that can be imported/exported.
// Example (ES6):
// export const pi = 3.14;
// import { pi } from './module.js';


// 26. What is 'use strict'?
// Enables strict mode, catching common coding errors.
'use strict';
// Example: prevents use of undeclared variables.
// x = 10; // Error in strict mode

// 27. What is currying?
// Transforming a function with multiple arguments into a sequence of functions each taking a single argument.
function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

// 28. What is memoization?
// Optimization technique to cache function results.
// Example:
function memoize(fn) {
    const cache = {};
    return function (x) {
        if (cache[x]) return cache[x];
        cache[x] = fn(x);
        return cache[x];
    };
}

// 29. What is the difference between synchronous and asynchronous code?
// Synchronous: executes line by line.
// Asynchronous: executes independently, e.g., setTimeout, Promises.

// 30. What is the event loop?
// Event loop is javaScript's mechanism to handle asynchronous operations such as like,
// callbacks, promises, non-blocking input/output operations. javaScript is single-threaded,
// its means that one statement is executed at a time. but with the help of event loop,
// it can handle multiple operations at a time without blocking the main thread.
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
console.log('End');
// Output: Start, End, Timeout

// 31. What is a generator function?
// Generator functions can pause and resume execution.
// They are defined with function* and use yield.
function* gen() {
    yield 1;
    yield 2;
}
const g = gen();
g.next(); // {value:1, done:false}

// 32. What is the difference between localStorage, sessionStorage, and cookies?
// localStorage:- localStorage is used for storing large amounts of data (around 5-10MB), 
// that doesn’t need to go to the server. It’s great for saving things like user preferences,
// themes, or offline content, and it persists even after the browser is closed.

// sessionStorage:- Session is a concept used on both client and server side —
// In JavaScript, sessionStorage stores data temporarily in browser,
// but in backend systems, session means server-side storage for user data during login.

// cookies:- cookies are used to store small pieces of data (~4KB), often for authentication or 
// session tracking, because they are automatically sent to the server with every HTTP request. 
// Cookies can have an expiry time and are essential for things like login sessions.

// 33. What is the difference between function declaration and function expression?
// declaration is hoisted and can be called before its definition
//Example: 
function foo() { } // declaration

// expression is not hoisted and cannot be called before its definition
//Example:
const bar = function () { }; // expression

// 34. What is the difference between shallow and deep copy?
// Shallow: copies only references.
// Shallow copy is copy top level properties but if there is any nested object 
// or array then its reference will be copied not the actual data.
// Example:
const obj1 = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj1 };
shallowCopy.b.c = 3;
console.log(obj1.b.c); // 3 (affected)

// Deep: Deep copy thats make a new copy of all nested objects/arrays.
// within the object no references is linked to the original object.
// Example:
const obj2 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj2));
deepCopy.b.c = 3;
console.log(obj2.b.c); // 2 (not affected)


// 35. What is the use of Symbol?
const sym = Symbol('desc'); // unique and immutable identifier

// 36. What is optional chaining?
// Optional chaining (?.) it is allows us to safely access deeply nested, 
// properties of an object without throwing errors if a property doesn't exist. It returns undefined instead of crashing.
// Example:
const obj = { prop: { subProp: 42 } };
const val = obj?.prop?.subProp;

// 37. What is nullish coalescing?
// Nullish coalescing (??) is an operator that returns the right-hand value only if the left-hand value is null or undefined.
// 1. Example:
const a = null;
const value = a ?? 'default'; // returns 'a' if not null/undefined
// 2. Example:
const value1 = null;
const value2 = 'fallback';
let result = value1 ?? value2;
// If value1 is null or undefined, then value2 is returned. Otherwise, value1 is returned.
  
// 38. What is the difference between Array.forEach and Array.map?
// forEach: executes function, returns undefined.
// forEach does not return a new array, it simply executes the provided function once for each array element.
// map: executes function, returns new array.
// map creates a new array populated with the results of calling a provided function on every element in the calling array.
// Example:
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // logs 2,4,6
const doubled = numbers.map(num => num * 2); // [2,4,6]


// 39. What is a promise chain?
// A promise chain is a sequence of .then() calls that handle the result of a promise.
const promiseChain = new Promise((resolve) => resolve('Hello'));
promise
    .then(res => res + '!')
    .then(console.log);

// 40. What is the difference between setTimeout and setInterval?
// setTimeout: executes function once after delay.
// setInterval: executes function repeatedly at intervals.
// Example:
setTimeout(() => { }, 1000); // runs once after 1s
setInterval(() => { }, 1000); // runs every 1s

// 41. What is the difference between import and require?
// import is used in ES6 modules, while require is used in CommonJS modules.
// import: ES6 modules, static.
// require: CommonJS, dynamic.

// 42. What is the use of Object.freeze?
// Object.freeze makes an object immutable.
const frozen = Object.freeze({ a: 1 }); // prevents modification

// 43. What is the difference between arrow functions and regular functions?
// Arrow functions do not have their own 'this', cannot be used as constructors.
// Regular functions have their own 'this', can be used as constructors.

// 44. What is the use of Array.from?
// Array.from creates a new array from an array-like or iterable object.
Array.from('abc'); // ['a','b','c']

// 45. What is the difference between splice and slice?
// splice modifies the original array, slice returns a new array.
const arr = [1, 2, 3, 4];
arr.splice(1, 2); // arr is now [1,4]
const newArr = arr.slice(0, 2); // newArr is [1,4], arr remains [1,4]   

// 46. What is the use of Promise.all?
// Promise.all waits for multiple promises to resolve.
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
Promise.all([promise1, promise2]).then(results => { });

// 47. What is the use of async generators?
// Async generators allow yielding promises and using await inside generator functions.
async function* asyncGen() {
    yield await Promise.resolve(1);
}

// 48. What is the use of WeakMap and WeakSet?
// WeakMap/WeakSet hold weak references, do not prevent garbage collection.


// 49. What is the use of Object.assign?
const merged = Object.assign({}, obj1, obj2);

// 50. What is the use of Array.flat?
[1, [2, [3]]].flat(2); // [1,2,3]


// 51. What is the difference between for...in and for...of?
// for...in iterates over enumerable properties (keys).
// for...of iterates over iterable objects (values).
// Example:
const array = ['a', 'b', 'c'];  
for (let index in array) {
    console.log(index); // 0,1,2 (indexes)
}
for (let value of array) {
    console.log(value); // 'a','b','c' (values)
} 

// 52. what is garbage collection?
// Garbage Collection ka matlab hai:
// Automatically unused memory ko clean kar dena — taaki app fast aur efficient chale.
// Garbage Collection is a process where the JavaScript engine automatically removes objects, 
// from memory when they are no longer needed or reachable.
// Example:
let objGarbage = { name: 'temp' };
objGarbage = null; // Now the object is unreachable and can be garbage collected
// Kab Clean Karta Hai?
// Jab object kisi bhi reference se reachable nahi hota, tabhi garbage collector usse clean karta hai.

// 53. What is the difference between event.preventDefault() and event.stopPropagation()?
// event.preventDefault(): Prevents the default action of the event (e.g., following a link).
// event.stopPropagation(): Stops the event from bubbling up to parent elements.
// Example:
document.getElementById('link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevents link navigation
});
document.getElementById('child').addEventListener('click', function (e) {
    e.stopPropagation(); // Stops event from bubbling to parent
}); 

// 54. What is the difference between synchronous and asynchronous functions?
// Synchronous functions block execution until they complete.
// Asynchronous functions allow other code to run while waiting for completion.

// 55. What is the use of the 'new' keyword?
// 'new' creates an instance of a user-defined object type or of one of the built-in object types.
function Car(model) {
    this.model = model;
}
const myCar = new Car('Toyota'); // creates a new Car instance


// 56. What is a higher-order function?
// Theory: A higher-order function is a function that takes another function as an argument or returns a function.
// Example:
function applyOperation(a, b, operation) {
    return operation(a, b);
}
console.log(applyOperation(2, 3, (x, y) => x + y)); // 5

// 57. What is a template literal?
// Theory: Template literals allow embedded expressions and multi-line strings using backticks (`).
// Example:
const user = 'Jane';
console.log(`Hello, ${user}!`);

