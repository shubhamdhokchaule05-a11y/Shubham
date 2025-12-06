// Given an animal type on the farm (cow, sheep, chicken), use switch to print the type of feed to provide.

let animal = "cow";

switch(animal){
    case "cow":
        console.log("Grains");
        break;
    case "sheep":
        console.log("Grass and legumes");
        break;
    case "chicken":
        console.log("Grower feed");
        break;
    default:
        console.log("Enter proper Animal");       
}