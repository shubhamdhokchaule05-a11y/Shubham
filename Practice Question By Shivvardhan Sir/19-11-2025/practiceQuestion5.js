//  find milk price based on fat content
//  if fat =3.0 - 4.0=40rs/litre
// if fat =less than 3.0=35rs/litre
// if fat =more than 4.0=50rs/litre

let fat1 = 4.5;
if (fat1 >= 3.0 && fat1 <= 4.0) {
    console.log("The price of milk is 40rs/litre");
}
else if (fat1 < 3.0) {
    console.log("The price of milk is 35rs/litre");
}
else if (fat1 > 4.0) {
    console.log("The price of milk is 50rs/litre");
}
else {
    console.log("Milk is rejected");
}