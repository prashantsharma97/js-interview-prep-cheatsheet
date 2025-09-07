// JavaScript-Methods/Question-Pattern.js
/**
 * JavaScript Interview Question Pattern
 * Example: Find all pairs in an array that sum up to a specific target value
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

// This function finds all unique pairs in an array that sum up to a specific target value.


// 2. write a function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}   

// 3. write a function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 4. write a function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 5. write a function to flatten a nested array
function flattenArray(arr) {
    return arr.flat(Infinity);
}   
// 6. write a function to find the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
// 7. write a function to check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
// 8. write a function to find the largest number in an array

function findLargestNumber(arr) {
    return Math.max(...arr);
}   

// 9. write a function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}   

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

// 12. write a function to count the occurrences of each character in a string
function charCount(str) {
    const count = {};       
    for (let char of str) {
        if (char !== ' ') {
            count[char] = (count[char] || 0) + 1;
    }               
    }
    return count;
}   

// 13. write a function to find the second largest number in an array
function findSecondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted[1];
}

// 14. write a function to check if a number is even or odd
function isEven(num) {
    return num % 2 === 0;
}   

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


// 16. write a function to find the GCD of two numbers
function gcd(a, b) {
    while (b) { 
        [a, b] = [b, a % b];
    }   
    return a;
}   

// 17. write a function to convert a number to binary
function toBinary(num) {
    return num.toString(2);
}   

// 18. write a function to find the length of the longest word in a string
function longestWordLength(str) {
    return Math.max(...str.split(' ').map(word => word.length));
}   

// 19. write a function to check if a year is a leap year
function isLeapYear(year) {         
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}   

// 20. write a function to generate a random hex color code
function randomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}   

// 21. write a function to count the number of vowels in a string
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}


// Capitalize each word in a string
function capitalizeWords(str) {
    return str
        .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
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
const capital = stringName.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
console.log(capital);
