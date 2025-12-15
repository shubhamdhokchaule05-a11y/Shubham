// 9. Count digits in a number

let num2 = 98765, count = 0;
do {
    count++;
    num2 = Math.floor(num2 / 10);
} while (num2 > 0);
console.log("Digits =", count);