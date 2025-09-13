// 1. Reverse a string using built-in methods
const data = "how are you";
const data2 = data.split(' ')
    .map((word) => {
        return word.split("").reverse().join('');
    })
console.log(data2.join(" "));

