//  Write a JavaScript program using a switch-case statement to calculate the discount on a product based on its price 
//        Apply a 20% discount if the price is ₹10000 or more,
//         a 10% discount if the price is ₹5000 or more,
//         and no discount for prices below ₹1000.

let price =5400;

switch (true) {
    case (price >= 10000):
        console.log(price * 0.20);
        break;
    case (price >= 5000):
        console.log(price * 0.10);
        break;
    case (price <= 1000):
        console.log(price);
        break;
    default:
        console.log("Kabhi Kabhi bhina discount ke kharido");
}