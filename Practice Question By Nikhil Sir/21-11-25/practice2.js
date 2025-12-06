//  Wite a program using switch statement movies Ticket Price  like Child  150rs , adult 250rs ,senior 150rs 

let audience = "adult";

switch (audience){
    case "child":
        console.log("movie ticket price -: ₹150");
        break;
    case "adult":
        console.log("movie ticket price -: ₹250");
        break;    
    case "senior":
        console.log("movie ticket price -: ₹150");
        break;       
    default:
        console.log("Check again");
}