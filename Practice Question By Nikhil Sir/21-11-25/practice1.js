// write a program using switch statement Traffic Light System Input a color.
//  (red/yellow/green) and print the action (stop, slow down, go)


let Traffic = "off";

switch (Traffic) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Traffic Police Nahi ye...tumhi jau Shakta...!");
}
