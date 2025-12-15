let num = 121;
let temp = num;
let rev = 0;

while (temp > 0) {
  rev = rev * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}

if (num === rev) {
  console.log(num + " is a palindrome");
} else {
  console.log(num + " is not a palindrome");
}