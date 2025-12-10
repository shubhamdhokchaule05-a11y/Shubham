// A class has 5 students.Their exam marks are stored in an array.Write a program using a for loop to calculate the average marks of the class.


let marks =[85,90,78,92,88];

let a =0;

for (let i = 0; i < marks.length; i++) {
    a += marks[i];
}

let average = a / marks.length;

console.log(average);