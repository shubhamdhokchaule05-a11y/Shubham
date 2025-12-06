// If the array contains the incorrect value 0, find its position using indexOf() and replace it with 100 using splice().

let numbers = [10, 0, 20, 30, 0, 40];
let incorrectValue = 0;
let correctValue = 100;
let index = numbers.indexOf(incorrectValue);
while (index !== -1) {
    numbers.splice(index, 1, correctValue);
    index = numbers.indexOf(incorrectValue, index + 1);
}
console.log("Updated Numbers:", numbers);
