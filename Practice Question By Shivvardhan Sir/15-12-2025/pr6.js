//6.  Factorial of 5 using do...while loop

let num = 5;
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= num);

console.log("Factorial of 5 is: " + factorial);