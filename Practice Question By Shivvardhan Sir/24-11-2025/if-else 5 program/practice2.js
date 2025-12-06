// Take a temperature in °C and print: 
// "< 0" → "Freezing"
// 0–20 → "Cold"
// 21–30 → "Warm"
// 30 → "Hot"
// using if / else if / else.

let temp = 1;

if (temp < 0) {
    console.log("Freezing");
}
else if (temp >= 0 && temp <= 20) {
    console.log("Cold");
}
else if (temp >= 21 && temp <= 30) {
    console.log("Warm");
}
else {
    console.log("Hot");
}