//  Print even numbers up to 10
let a = 2;
do {
    console.log(a);
    a += 2;
}
while (a <= 10);

// 3. Print odd numbers up to 9
let odd = 1;
do {
    console.log(odd);
    odd += 2;

}
while (odd <= 9);


// 4. Print multiplication table of 3
// Print multiplication table of 3
let multiplication = 1;
let multi = 3;

do {
    console.log("multi x multiplication =", multi * multiplication);
    multiplication++;
} while (multiplication <= 10);


// 5. Print countdown from 5

let countdown = 5;

do {
    console.log(countdown);
    countdown--;
}
while (countdown >= 1);

// 6. Sum of first 5 natural number
let first = 1;
let sum = 0;
do {
    sum += first;
    console.log(sum);
    first++;
}
while (first <= 5);



// Factorial of 5 using do...while loop
let num = 5;
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= num);

console.log("Factorial of 5 is: " + factorial);

// 6. Even numbers 1–20
let number = 2;
do {
    console.log(number);
    number += 2;

} while (number <= 20);

// 7. Odd numbers 1–20
let odds = 1;
do {
    console.log(odds);
    odds += 2;

}
while (odds <= 20);

// 8. Count digits in a number




let num2 = 98765, count = 0;
do {
    count++;
    num2 = Math.floor(num2 / 10);
} while (num2 > 0);
console.log("Digits =", count);