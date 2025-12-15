
let num = 1234;
let sumDigits = 0;
while (num > 0) {
  sumDigits += num % 10;
  num = Math.floor(num / 10);
}
console.log("Sum =", sumDigits);