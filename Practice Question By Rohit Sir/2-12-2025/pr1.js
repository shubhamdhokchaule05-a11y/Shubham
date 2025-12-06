// Given an array of registered students, check whether a new student name exists using includes().
// If exists → print “Already Registered”, else → add using push(). 

let student1= ["Shubham", "Yash", "Ram"];
let Student2 = "Rohan";

if (student1.includes(Student2)) {
    console.log("Already Registered");
} else {
    student1.push(Student2);
    console.log("Student Registered:", Student2);
} 