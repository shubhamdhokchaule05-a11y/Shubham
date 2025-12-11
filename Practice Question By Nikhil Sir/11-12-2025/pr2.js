// Reverse an array using a for loop
//    data = [1, 2, 3, 4, 5]


let data = [1, 2, 3, 4, 5];
let b = [];

for (let i = data.length - 1; i >= 0; i--) {
    b.push(data[i]);
}

console.log(b);
