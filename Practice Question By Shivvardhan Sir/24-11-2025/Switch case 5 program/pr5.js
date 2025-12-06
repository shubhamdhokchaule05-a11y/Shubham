// Given a crop name, use switch to print the planting season

let crop = "wheat";

switch(crop) {
    case "wheat":
        console.log("Planting Season-: Autumn");
        break;
    case "rice":
        console.log("Planting Season-: Summer");
        break;
    case "maize":
        console.log("Planting Season-: Spring");
        break;
    default:
        console.log("Crop not found");
}