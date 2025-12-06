// Create a calculator using switch case 
// let a = 10
// let b = 20
// let c = '+,-,*,/'

let a = 10; 
let b = 20;
let c = '+'; 

switch (c) {
    case '+':
        console.log("Addition", a + b);
        break;
    case '-':
        console.log("Subtraction", a - b);
        break;
    case '*':
        console.log("Multiplication", a * b);
        break;
    case '/':
        console.log("Division", a / b);
        break;
    case '%':
        console.log("Modulus", a%b);
        
    default:
        console.log("Not Define");
}   