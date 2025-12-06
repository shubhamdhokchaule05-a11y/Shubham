// Ask the user for their age and print whether they are child (0–12), teen (13–19), adult (20–59), or senior (60+).

let a =13;

if (a >= 0 && a <= 12) {
    console.log("Child");
}

else if(a >= 13 && a <= 19){
    console.log("Teen");    
}

else if (a >=20 && a <= 59 ){
    console.log("Adult");    
}

else if(a >=60){
    console.log("Senior");
}

else{
    console.log("Your dead");
}