    // signal red-green-yellow based on traffic light color
// red -> stop
// green -> go
// yellow -> go slow
let signal= "blue";

if (signal === "red") {
    console.log("Stop");
}
 else if (signal === "green") {
    console.log("You Can Go");
}
 else if (signal === "yellow") {
    console.log("Go Slow");
}
 else {
    console.log("Signal is off");
}