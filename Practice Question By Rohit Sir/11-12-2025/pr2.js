// Write a program to count how many vowels are in the string "javascript"

let c = "javascript";
let b = 0;
for (let i = 0; i < c.length; i++) {
    let a = c[i].toLowerCase();
    if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u') { b++; }
}
console.log("Vowel count:", b);     