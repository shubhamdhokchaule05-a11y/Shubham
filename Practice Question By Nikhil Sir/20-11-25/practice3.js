//  Wite a Program To Check largest of three numbers

let a1 = 34;
let a2 = 44;
let a3 = 55;

if (a1 > a2 && a1 > a3){
    console.log(a1,"This is larger");
    
}

else if( a2 > a1 && a2 > a3){
    console.log(a2,"This is larger");
    
}
else if( a3 > a1 && a3 > a2){
    console.log(a3,"This is larger");
    
}
else{
    console.log("Please enter larger number"); 
}
