let secret = Math.floor(Math.random() * 10) + 1;
let guess;

while (guess !== secret) {
  guess = parseInt(prompt("Enter your guess (1-10):"));
  if (guess < secret) {
    console.log("Too low! Try again.");
  } else if (guess > secret) {
    console.log("Too high! Try again.");
  } else {
    console.log("Correct! 🎉");
  }
}