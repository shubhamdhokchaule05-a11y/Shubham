// Use filter to return only the numbers greater than 20 from [10, 25, 5, 40].



let arr = [10, 25, 5, 40];
let filtered = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 20) {
        filtered.push(arr[i]);
    }
}

console.log(filtered);  
