// Check the largest number among three numbers using if else.

let a = 10;
 b = 20;
 c = 115;
let largest;
if (a > b && a > c) {
    largest = a;
} 
else if (b > a && b > c) {
    largest = b;
}
else {
    largest = c;
}
console.log("The largest number is: " + largest);
