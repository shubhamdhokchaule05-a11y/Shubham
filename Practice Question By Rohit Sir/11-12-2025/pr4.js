const arr = [1, 3, 5, 3, 7, 1, 9];
const b = [];

for (let i = 0; i < arr.length; i++) {
  if (!b.includes(arr[i])) {
    b.push(arr[i]);
  }
}

console.log(b);
