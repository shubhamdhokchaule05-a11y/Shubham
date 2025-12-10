// 1) let nums = [12, 5, 8, 130, 44];
// Use a for loop to find the largest number in the array.


let numbs =[12,5,8,130,44];
let b=numbs[2]
for(i=0;i<numbs.length;i++){
    if(b<numbs[i]){
        b=numbs[i]
    }
}
console.log(b);

























// let max = nums[0];
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > max){
//         max = nums[i];
//     }
// }
// console.log(max);