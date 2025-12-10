// Numbers-Even AND ODD split
// store 10 integers in an array.
// Use a for loop to separate them into two array: one for even numbers and one for odd numbers.
// Print both the array.


let a = [1, 2, 3, 4, 5, 10, 20, 30];

let b = [];
let c = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {

        b.push(a[i]);
    } else {

        c.push(a[i]);

    }
}

console.log("Original:", a);
console.log("Even:", b);
console.log("Odd:", c);

