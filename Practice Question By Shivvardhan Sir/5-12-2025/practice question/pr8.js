// Write a program that takes two numbers and an operator (+, -, *, /) and performs the calculation using a switch statement.

let a =10;
let b=20;
let c = '-';

switch(c){
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '/':
        console.log(a/b);
        break;
    case '%':
        console.log(a%b);
        break;

    default:
        console.log("Please Enter correct operator");
        
        
        
        
                
}