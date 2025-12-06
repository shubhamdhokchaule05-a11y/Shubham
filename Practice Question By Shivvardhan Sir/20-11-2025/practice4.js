// check a leap year
// write a program to take a year and check. 
// if the year is divisible by 400 =lrap year
// else if divisible by 4 but not 100 = leap year
// else = not a leap year

let year = 2025;


if (year % 4 === 0) {
    console.log(year, " is a leap year");
}
else {
    console.log(year, " is not a leap year");
}