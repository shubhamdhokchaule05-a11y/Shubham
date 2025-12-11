// Count how many odd numbers using a for  loop
//    arr = [11, 22, 33, 44, 55, 60]

let arr = [11, 22, 33, 44, 55, 60];
let b=0;

for(i=0;i<arr.length;i++){
    if(i%2!=0){
        b++;
    }
}
console.log(b);
