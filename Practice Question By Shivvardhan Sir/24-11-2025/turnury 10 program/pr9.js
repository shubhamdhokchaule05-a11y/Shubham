// Given the time of day, print "Open" if the time is between 9 AM and 9 PM, else print "Closed".

let time = 12; 
let result = (time >= 9 && time <= 21) ? "Open" : "Closed";
console.log(result);