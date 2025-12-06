// Write a JavaScript program to check if a password has the required minimum 6 length

let a = 123456;
switch (true) {
    case (a.toString().length >= 6):
        console.log("Password is valid");
        break;
    default:
        console.log("Password is not valid");
}