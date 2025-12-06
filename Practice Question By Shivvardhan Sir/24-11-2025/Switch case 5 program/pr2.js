// Given a payment method (cash, card, UPI), use switch to print the billing process.

let paymentMethod = "cash";

switch (paymentMethod) {
    case "cash":
        console.log("Accept cash payment and provide receipt.");
        break;
    case "card":
        console.log("Swipe enter PIN, and provide receipt.");
        break;
    case "UPI":
        console.log("Enter UPI ID and provide receipt.");
        break;
    default:
        console.log("Payment method not recognized");
}