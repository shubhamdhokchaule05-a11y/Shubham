// Take a password string and check:
// If length < 6 → print "Weak"
// If length between 6 and 10 → "Medium"
// If length > 10 → "Strong"
// Use if / else if / else.

let password = "Shubham@2005";

if (password.length < 6) {
    console.log("Weak");
}
else if (password.length >= 6 && password.length <= 10) {
    console.log("Medium");
}
else {
    console.log("Strong");
}