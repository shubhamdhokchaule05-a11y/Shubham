// - Ask the user for a number N and use a while loop to calculate the sum of numbers from 1 to N.


let n = 5;
let i = 1;
let total = 0;
while (i <= n) {
  total += i;
  i++;
}
console.log("Sum =", total);