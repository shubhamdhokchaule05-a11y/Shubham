// .If the number of items is more than 3, use slice() to extract only the first 3 items and display them.

let items = [10, 20, 30, 40, 50];

if (items.length > 3) {
    let a = items.slice(0, 3);
    console.log("First three items", a);
} 
else {
    console.log("Items", items);
}