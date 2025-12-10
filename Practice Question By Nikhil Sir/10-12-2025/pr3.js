// 3) let arr = [3, -1, -7, 8, -3, 5];
// Use a for loop to count how many negative numbers are present.


let arr = [3, -1, -7, 8, -3, 5];
let b=0;
for(i=0;i<=arr.length;i++){
    if(arr[i]<0){
        b+=1;
    }
    
}
console.log(b);
