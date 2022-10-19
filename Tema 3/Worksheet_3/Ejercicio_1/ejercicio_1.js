let arrayNum = [1, 2, 5, 6, 3, 2, 6, 7, 12, 42, 35, 68];
let arrayStr = ["Pedro", "Sara", "Francisco", "Luis", "Álvaro", "Isabel"];

// Find the largest number

let largestNumber = arrayNum.reduce((max, num) => (num > max ? num : max));
console.log(largestNumber);

// Find the largest string

let largestStr = arrayStr.reduce((a, b) => (a.length > b.length ? a : b));
console.log(largestStr);

// Find even numbers

let evenNumbers = arrayNum.filter((num) => num % 2 == 0);
console.log(evenNumbers);

// Find odd numbers

let oddNumbers = arrayNum.filter((num) => num % 2 != 0);
console.log(oddNumbers);

// Find words that contain "is"

let containIs = arrayStr.filter((str) => str.toLowerCase().includes("is"));
console.log(containIs);

// Assert all numbers are divisible by three

let divisibleByThree = arrayNum.filter((num) => num % 3 == 0);
console.log(divisibleByThree);

// Zip two arrays together

let twoArraysTogether = arrayNum.concat(arrayStr);
console.log(twoArraysTogether);

// Sort joined array from smallest to largest

let sortedArray = twoArraysTogether.sort((a, b) => a - b);
console.log(sortedArray);

// Remove the first word in the array

arrayStr.shift();
console.log(arrayStr);

// Place a new word at the start of the array

arrayStr.unshift("Samuel");
console.log(arrayStr);

// Replace some elements

arrayStr.splice(0,3,"Javier","Rebeca","Elena");
console.log(arrayStr);