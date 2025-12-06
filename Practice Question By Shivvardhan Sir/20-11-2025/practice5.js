//  Check if Character is vowel or Consonant
// take it is a,e,i,o,u (uppercase/lowercase)=print"vowel"
// else = print"consonant"

// let Word ="u";
// if (Word === "a" || Word === "e" || Word === "i" || Word === "o" || Word === "u"){
//         console.log(Word,"Word is vowel in lowercase");       
// }
// else if(Word === "A" || Word === "E" || Word === "I" || Word === "O" || Word === "U"){
//     console.log(Word,"Word is vowel in Uppercase");    
// }
// else{
//     console.log(Word,"Word is Consonant");    
// }


//  Check if Character is vowel or Consonant
// take it is a,e,i,o,u (uppercase/lowercase)=print"vowel"
// else = print"consonant" using switch case

let char ="i";

switch(char){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log(char,"is vowel in lowercase");
        break;
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log(char,"is vowel in Uppercase");
        break;
    default:
        console.log(char,"is Consonant");
}



// let Word ="u";
// switch (true){
// case (Word === "a" || Word === "e" || Word === "i" || Word === "o" || Word === "u"):
//         console.log(Word,"Word is vowel in lowercase");
//         break;  

//  case (Word === "A" || Word === "E" || Word === "I" || Word === "O" || Word === "U"):
//     console.log(Word,"Word is vowel in Uppercase");
//     break;    

// default:
//     console.log(Word,"Word is Consonant");    
// }