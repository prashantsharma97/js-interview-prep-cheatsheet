// 1. Reverse a string using built-in methods
const data = "how are you";
const data2 = data.split(' ')
    .map((word) => {
        return word.split("").reverse().join('');
    })
    .join(' ');
console.log(data2); // woh era uoy
// 2. How to check if an object is an array or not provided some code examples
function isArray(obj) {
    return Array.isArray(obj);
}
console.log(isArray([1, 2, 3])); // true
console.log(isArray({ a: 1 })); // false

// 3. How to emty an array in JavaScript important use cases
// do not reset it to new array and do not use loop to pop elements one by one
let arr = [1, 2, 3, 4, 5];
// Method 1: Using length property
arr.length = 0;
console.log(arr); // [] 

// Method 2: Using splice method
arr = [1, 2, 3, 4, 5];
arr.splice(0, arr.length);
console.log(arr); // []

// Method 3: Using while loop with pop (not recommended for large arrays)
arr = [1, 2, 3, 4, 5];
while (arr.length) {
    arr.pop();
}
console.log(arr); // []


// 4. How to clone an array in JavaScript
const original = [1, 2, 3];
const clone = [...original]; // Using spread operator
console.log(clone); // [1, 2, 3]

// 5. How to find the largest and smallest number in an array
const numbers = [3, 5, 1, 8, -2];
const largest = Math.max(...numbers);
const smallest = Math.min(...numbers);
console.log(`Largest: ${largest}, Smallest: ${smallest}`); // Largest: 8, Smallest: -2

// 6. How to remove duplicates from an array
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums); // [1, 2, 3, 4, 5]

// 7. How to merge two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = arr1.concat(arr2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]     

// 8. How to find the sum of all elements in an array
const arr3 = [1, 2, 3, 4, 5];
const sum = arr3.reduce((acc, val) => acc + val, 0);
console.log(sum); // 15 

// 9. How to find the average of all elements in an array
const arr4 = [1, 2, 3, 4, 5];
const average = arr4.reduce((acc, val) => acc + val, 0) / arr4.length;
console.log(average); // 3  

// 10. How to find all pairs in an array that sum up to a specific target value
const arr11 = [1, 2, 3, 4, 5, 6];
const target1 = 7;
const seen = new Set();
for (let num of arr11) {
    const total = target1 - num;
    if (seen.has(total)) {
        const min = Math.min(num, total);
        const max = Math.max(num, total);
        console.log(`[${min},${max}]`);
    }
    seen.add(num);
}
// Output: [1,6] [2,5] [3,4]

// 11. Write a function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

// 12. Write a function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}   
console.log(isPrime(11)); // true
console.log(isPrime(4)); // false   

// 13. Write a function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 14. How would you check if number is integer.
// Method 1: Using Number.isInteger()
function isInteger(num) {
    return Number.isInteger(num);
}
console.log(isInteger(4)); // true
console.log(isInteger(4.5)); // false

// Method 2: Using modulo operator
function isIntegerMod(num) {
    // return num % 1 === 0;
    if (num % 1 === 0) {
        console.log(`${num} is integer`);
    } else {
        console.log(`${num} is not integer`);
    }
}
isIntegerMod(5); // 5 is integer
isIntegerMod(5.3); // 5.3 is not integer

// 15. Make this work ([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
function duplicateArray(arr) {
    return arr.concat(arr);
}
console.log(duplicateArray([1, 2, 3, 4, 5])); // [1,2,3,4,5,1,2,3,4,5]


// 16. How to check if a string contains only digits
function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}
console.log(containsOnlyDigits("12345")); // true

// 17. How to convert a string to title case
function toTitleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(toTitleCase("hello world from javascript")); // "Hello World From Javascript"

// 18. How to check if two strings are anagrams 
function areAnagrams(str1, str2) {
    const normalize = str => str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent")); // true   

// 19. How to count the occurrences of each character in a string frequency.
const arr = [1, 1, 1, 2, 2, 3];
const k = 2;

const freq = {};

// Step 1: Calculate frequency of each element
arr.forEach(num => {
    freq[num] = (freq[num] || 0) + 1;
});
console.log(freq); // { '1': 3, '2': 2, '3': 1 }

// Step 2: Convert frequency map into an array of [number, frequency]
const freqArray = Object.entries(freq);

// Step 3: Sort by frequency in descending order
freqArray.sort((a, b) => b[1] - a[1]);

// Step 4: Extract the top k elements
const result = freqArray.slice(0, k).map(item => Number(item[0]));

console.log(result); // Output: [1, 2]

// 20. Rotate an array to the right by k steps, where k is non-negative.
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // In case k is greater than array length
    const part1 = arr.slice(-k); // Last k elements
    const part2 = arr.slice(0, n - k);

    return part1.concat(part2);
    //return arr.slice(-k).concat(arr.slice(0, n - k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// 21. Generate the first n numbers of the Fibonacci sequence.
// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... it's a series of 
// numbers where each number is the sum of the two preceding ones.

function generateFibonacci(n) {
    const fib = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(0);
        } else if (i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    return fib;
}

console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 22. Check if two strings are anagrams of each other.  
function areAnagrams(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    // check length firstx
    if (str1.length !== str2.length) {
        return false;
    }
    const shortest = str1.split('').sort().join('');
    const longest = str2.split('').sort().join('');
    return shortest === longest;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false


// 23. OOP – Vehicle, Car, Truck (Inheritance) Create a base class Vehicle, and 
// extend it with Car and Truck, adding unique properties and methods.

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    startEngine() {
      console.log(`${this.make} ${this.model} engine started.`);
    }

    displayInfo() {
      console.log(`Vehicle: ${this.make} ${this.model}, Year: ${this.year}`);
    }
  }

  // Car Class - Inherits from Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, numberOfDoors) {
      super(make, model, year);
      this.numberOfDoors = numberOfDoors;
    }

    openTrunk() {
      console.log(`Opening the trunk of ${this.make} ${this.model}.`);
    }

    displayInfo() {
      super.displayInfo();
      console.log(`Car Type with ${this.numberOfDoors} doors.`);
    }
  }

  // Truck Class - Inherits from Vehicle
  class Truck extends Vehicle {
    constructor(make, model, year, payloadCapacity) {
      super(make, model, year);
      this.payloadCapacity = payloadCapacity;
    }

    loadCargo(weight) {
      if (weight <= this.payloadCapacity) {
        console.log(`Loaded ${weight}kg into the truck.`);
      } else {
        console.log(`Cannot load ${weight}kg. Max capacity is ${this.payloadCapacity}kg.`);
      }
    }

    displayInfo() {
      super.displayInfo();
      console.log(`Truck with payload capacity: ${this.payloadCapacity} kg`);
    }
  }

  // Test the Classes

  console.log("=== Car Object ===");
  const myCar = new Car("Toyota", "Corolla", 2020, 4);
  myCar.startEngine();
  myCar.openTrunk();
  myCar.displayInfo();

  console.log("=== Truck Object ===");
  const myTruck = new Truck("Ford", "F-150", 2019, 1500);
  myTruck.startEngine();
  myTruck.loadCargo(1000);
  myTruck.displayInfo();

// 24. what is Recursion with example 
// Recursion is a programming technique where a function calls itself.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)


let a1=a2=[1,2,3];
a1.length(2); // get a TypeError: a1.length is not a function, if we use a1.length=2; it will work
console.log(a1,a2); // then o/p will be [1,2] [1,2]

let a=b=[1,2,3];
a.push(4);
console.log(a,b); // [1,2,3,4] [1,2,3,4]

// 25. Find dublicates in an array of integers (with inbuilt methods)
const array = [1, 2, 3, 4, 5, 1, 2, 3];
const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
const uniqueDuplicates = [...new Set(duplicates)];
console.log(uniqueDuplicates); // [1, 2, 3]

//26. Find largest elment in an array of integers (without inbuilt methods)
function findLargest(arr) {
    let largest = arr[0];   
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest([3, 5, 7, 2, 8])); // 8

// 27. Find second largest elment in an array of integers (without inbuilt methods)
function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }   
    return secondLargest;
}   
console.log(findSecondLargest([3, 5, 7, 2, 8])); // 7
        
// 28. Find the missing number in an array of integers (without inbuilt methods)
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, val) => acc + val, 0);
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3

// 29. write a function to count the occurrences of each character in a string
function charCount(str) {
    const freq = {};       
    for (let char of str) {
        if (char !== ' ') {
            freq[char] = (freq[char] || 0) + 1;
    }               
    }
    return freq;
}   
console.log(charCount("hello world")); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

// 30. write a function to count occurence of each number in an array
function countOccurrences(arr) {
    const freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
console.log(countOccurrences([1, 2, 2, 3, 4, 4, 5])); // { '1': 1, '2': 2, '3': 1, '4': 2, '5': 1 }