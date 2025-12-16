// JavaScript-Methods/Question-Pattern.js
/**
 * JavaScript Interview Question Patterns Cheat Sheet
 * Common coding patterns and problems with solutions
 */ 

// 1. Function to find pairs with a given sum

function findPairsWithSum(arr, target) {
    const pairs = [];
    const seen = new Set();

    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

// Example usage:
const arr = [2, 4, 3, 5, 7, 8, 9];
const target = 7;
console.log(findPairsWithSum(arr, target)); // Output: [ [4, 3], [2, 5] ]

// when o/p whant is assending order
const arr1 = [2, 4, 3, 5, 7, 8, 9];
const target1 = 8;
const seen = new Set();

for(let num of arr1){
    const total = target1 - num;
    if(seen.has(total)){
        const min = Math.min(num,total);
        const max = Math.max(num,total);
        console.log(`[${min},${max}]`);
    }
    seen.add(num);
}
console.log(seen); // Output: [ [3, 5], [2, 6] ]

// This function finds all unique pairs in an array that sum up to a specific target value.


// 2. write a function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"   

// 3. write a function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// 4. write a function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// another example without using Set
function removeDuplicat (arr) {
    const unique = [];  
    for (let item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }   
    }
    return unique;
}
console.log(removeDuplicat([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// 5. write a function to flatten a nested array
function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]

// one more another example flatten without using flat method
const arr = [ 2, 4, [ 5, 7, 2 ], [ 3, 5, 7 ], 8, 9, [ 9, 8, 5 ] ];
const result = [];
for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
        result.push(...arr[i]);
    }
    else {
        result.push(arr[i]);
    }   
}
console.log(result);// [2,4,5,7,2,3,5,7,8,9,9,8,5]    

// 6. write a function to find the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 7. write a function to check if a string is a palindrome
// A palindrome is a word, phrase, number, or other sequence of 
// characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). 
function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false

// 8. write a function to find the largest number in an array

function findLargestNumber(arr) {
    return Math.max(...arr);
}
console.log(findLargestNumber([1, 3, 7, 0, -5])); // Output: 7     

// 9. write a function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}   
console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(celsiusToFahrenheit(100)); // Output: 212

// 10. write a function to generate Fibonacci sequence up to n terms
function fibonacci(n) {
    const seq = [0, 1];         
    for (let i = 2; i < n; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
    }   
    return seq.slice(0, n);
}   
// Example usage:
console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

// 11. write a function to check if two strings are anagrams
function areAnagrams(str1, str2) {
    const normalize = str => str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}   
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// 12. return true if the given array contains the given value
function containsValue(arr, value) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]===value){
            return true;
        }
    }
    return false;
}
console.log(containsValue([1,2,3,4,5], 3)); // true
console.log(containsValue([1,2,3,4,5], 6)); // false

// 13. write a function to find the second largest number in an array
function findSecondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted[1];
}
console.log(findSecondLargest([1, 3, 7, 0, -5])); // Output: 3

// 14. write a function to check if a number is even or odd
function isEven(num) {
    return num % 2 === 0;
}   
console.log(isEven(4)); // true
console.log(isEven(5)); // false

// 15. write a function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;   
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }   
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log(mergeSortedArrays([1,3,5],[2,4,6])); // Output: [1,2,3,4,5,6]


// 16. write a function to find the GCD of two numbers
function gcd(a, b) {
    while (b) { 
        [a, b] = [b, a % b];
    }   
    return a;
}   
console.log(gcd(48, 18)); // Output: 6

// 17. write a function to convert a number to binary
function toBinary(num) {
    return num.toString(2);
}   
console.log(toBinary(10)); // Output: "1010"

// 18. write a function to find the length of the longest word in a string
function longestWordLength(str) {
    return Math.max(...str.split(' ').map(word => word.length));
} 
console.log(longestWordLength("The quick brown fox jumps over the lazy dog")); // Output: 5  

// 19. write a function to check if a year is a leap year
function isLeapYear(year) {         
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}   
console.log(isLeapYear(2020)); // true

// 20. write a function to generate a random hex color code
function randomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}   
console.log(randomHexColor()); // Example Output: "#3e2f1b"

// 21. write a function to count the number of vowels in a string
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("hello world")); // Output: 3


// Capitalize each word in a string
function capitalizeWords(str) {
    return str
        .split(' ').map(word => word.charAt(0).toUpperCsase() + word.slice(1))
        .join(' ');
}

const input = "hello my name is prashant";
const output = capitalizeWords(input);
console.log(output); // "Hello My Name Is Prashant"


function cap (str){
    return str.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join('');
}

let input = "hello my name is prashant";
const output = cap(input);
console.log(output);



function cap (str){
    return str
       .split('').map(word => word.charAt(0).toUpperCase() + word.slice(1))
       .join('');
}
const input = "hello my name is prashant";
const output = cap(input);
console.log(output);



const stringName = "hello bhai";
const capital = stringName.split(' ')
.map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
console.log(capital);



