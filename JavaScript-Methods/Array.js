/**
 * JavaScript Array Methods Cheat Sheet
 * Commonly used Array methods with examples
 */

// Creating an array
const arr = [1, 2, 3, 4, 5];

// 1. push() - Add element(s) to end
arr.push(6); // [1,2,3,4,5,6]

// 2. pop() - Remove last element
arr.pop(); // [1,2,3,4,5]

// 3. unshift() - Add element(s) to start
arr.unshift(0); // [0,1,2,3,4,5]

// 4. shift() - Remove first element
arr.shift(); // [1,2,3,4,5]

// 5. concat() - Merge arrays
const arr2 = [6, 7];
const merged = arr.concat(arr2); // [1,2,3,4,5,6,7]

// 6. slice() - Copy part of array
const sliced = arr.slice(1, 3); // [2,3]

// 7. splice() - Add/remove elements
arr.splice(2, 1, 'a', 'b'); // [1,2,'a','b',4,5]

// 8. forEach() - Iterate over array
arr.forEach((item, idx) => console.log(item, idx));

// 9. map() - Transform array
const doubled = arr.map(x => x * 2);

// 10. filter() - Filter array
const even = arr.filter(x => typeof x === 'number' && x % 2 === 0);

// 11. reduce() - Accumulate values
const sum = arr.reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);

// 12. find() - Find first matching element
const found = arr.find(x => x === 4);

// 13. findIndex() - Find index of first matching element
const foundIdx = arr.findIndex(x => x === 4);

// 14. includes() - Check if array contains value
const hasFour = arr.includes(4);

// 15. indexOf() - Get index of value
const idx = arr.indexOf(4);

// 16. lastIndexOf() - Get last index of value
const lastIdx = arr.lastIndexOf(4);

// 17. sort() - Sort array
const sorted = arr.slice().sort((a, b) => a - b);

// 18. reverse() - Reverse array
const reversed = arr.slice().reverse();

// 19. join() - Join elements into string
const str = arr.join('-');

// 20. every() - Test if all elements pass condition
const allNumbers = arr.every(x => typeof x === 'number');

// 21. some() - Test if any element passes condition
const hasString = arr.some(x => typeof x === 'string');

// 22. flat() - Flatten nested arrays
const nested = [1, [2, [3]]];
const flat = nested.flat(2); // [1,2,3]

// 23. flatMap() - Map and flatten
const flatMapped = arr.flatMap(x => [x, x * 2]);

// 24. fill() - Fill array with value
const filled = new Array(5).fill(0); // [0,0,0,0,0]

// 25. Array.isArray() - Check if value is array
const isArr = Array.isArray(arr);

// 26. toString() - Convert array to string
const arrStr = arr.toString();

// 27. from() - Create array from iterable
const strArr = Array.from('hello'); // ['h','e','l','l','o']

// 28. of() - Create array from arguments
const arrOf = Array.of(1, 2, 3); // [1,2,3]

// 29. copyWithin() - Copy part of array to another location
const copyArr = [1,2,3,4,5];
copyArr.copyWithin(0, 3); // [4,5,3,4,5]

// 30. entries(), keys(), values() - Get iterators
for (const [idx, val] of arr.entries()) {
    // idx, val
}
for (const key of arr.keys()) {
    // key
}
for (const value of arr.values()) {
    // value
}

// 31. reduceRight() - Reduce from right
const rightSum = arr.reduceRight((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);

// 32. at() - Get element at index
const atIdx = arr.at(-1); // Last element   

// 33. findLast() - Find last matching element
const foundLast = arr.slice().reverse().find(x => x === 4);

// 34. findLastIndex() - Find index of last matching element
const foundLastIdx = arr.slice().reverse().findIndex(x => x === 4);

// 35. with() - Create new array with modified element
const newArr = arr.with(0, 10); // Change first element to 10   

// 36. flat() - Flatten nested arrays
const deeplyNested = [1, [2, [3, [4]]]];
const flatDeep = deeplyNested.flat(3); // [1,2,3,4]

// 37. flatMap() - Map and flatten
const flatMappedExample = arr.flatMap(x => [x, x + 1]); // [1,2,2,3,3,4,4,5,5,6]

// 38. at() - Get element at index
const atExample = arr.at(2); // 3   

// 39. findLast() - Find last matching element
const findLastExample = arr.slice().reverse().find(x => x % 2 === 0); // 4

// 40. findLastIndex() - Find index of last matching element
const findLastIndexExample = arr.slice().reverse().findIndex(x => x % 2 === 0); // 1 (index in reversed array)

// 41. with() - Create new array with modified element
const withExample = arr.with(1, 20); // [1,20,3,4,5]


// Note: Some methods like flat(), flatMap(), at(), findLast(), findLastIndex(), and with() may not be supported in older environments.
// Always check compatibility if targeting older browsers or environments.
// This cheat sheet covers 35 commonly used JavaScript Array methods with brief examples.
// For more details, refer to MDN Web Docs or other JavaScript resources.
