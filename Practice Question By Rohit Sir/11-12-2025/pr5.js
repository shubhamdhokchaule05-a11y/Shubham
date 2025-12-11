// Convert ["ram", "raj", "komal"] to uppercase using a loop.

let names = ["ram", "raj", "komal"];
let upper = [];

for (let i = 0; i < names.length; i++) {
  upper.push(names[i].toUpperCase());
}

console.log(upper);
