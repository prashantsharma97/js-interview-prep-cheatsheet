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
for(let num of arr11){
    const total = target1 - num;    
    if(seen.has(total)){
        const min = Math.min(num,total);
        const max = Math.max(num,total);
        console.log(`[${min},${max}]`);
    }   
    seen.add(num);
}

// 11. Write a function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}   

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
    if(num % 1 === 0){
       console.log(`${num} is integer`);
    }else{
       console.log(`${num} is not integer`);
    }   
}

// 15. Make this work ([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
function duplicateArray(arr) {
    return arr.concat(arr);
}
console.log(duplicateArray([1,2,3,4,5])); // [1,2,3,4,5,1,2,3,4,5]


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

