// Given a farm vehicle type (tractor, harvester, plow), use switch to print its primary use on the farm.

let vehicle ="tractor";

switch(vehicle){
    case "tractor":
        console.log(vehicle,"Use for Fertilizing fields");
        break;
    case "harvester":
        console.log(vehicle,"Use for Harvesting crops");
        break;
    case "plow":
        console.log(vehicle,"Use for Aerate the soil");       
        break;
    default:
        console.log("Enter Proper Vehicle");
        
}