// Calculate Your grade on your percentage
//  if percentage 80-100=A
//  else if percentage 60-80=B
//  else if percentage 40-60=C
//  else if percentage 35-40=D
//  else below 35=fail

let a = 79.99;


if (a >= 80 && a <= 100) {
    console.log("Your grade is A");
}

else if (a >= 60 && a <= 80) {
    console.log("Your grade is B");   
}

else if (a >= 40 && a <= 60) {
    console.log("Your grade is C");
}

else if (a >= 35 && a <= 40) {
    console.log("Your grade is D");
}
else {
    console.log("You have failed");
}       