// Given medicine expiry date, print "Expired" if date is past today, else "Valid".

let expiry = new Date('2023-05-01');
let today = new Date('2025-11-01');
let result = (expiry< today) ? "Expired" : "Valid";
console.log(result);