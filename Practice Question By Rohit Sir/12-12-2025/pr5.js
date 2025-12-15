// Count how many times a character appears Example string: "banana"  Character: 'a' using while loop.
let string = "banana";
let count = 0;
let i = 0;

while (i < string.length) {
    if (string[i] === "a") {
        count++;
    }
    i++;
}

console.log(count);