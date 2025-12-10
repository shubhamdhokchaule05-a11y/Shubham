// A cricket teams's scores in 6 matches are stored in an array.Write a program to find the highest score and the lowest score usiung a for loop.

let a =[250,180,210,320,275,190];

let h =a[0];
let l =a[0];

for(let i = 0; i < a.length; i++){
    if(a[i]>h){
        h=a[i]
        console.log(h);     
    }
    if(a[i]<l){
        l=a[i]
        console.log(l);
        
    }
}