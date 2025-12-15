// A person plans to exercise 7 days a week, but does not exercise on Sunday.
// Write a JavaScript program using a for loop to:
// Print exercise status for each day
// Skip Sunday using the continue statement

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < days.length; i++) {
    if (days[i] === 'Sunday') {
        continue;
    
        
    }
    console.log(`${days[i]}: Exercise`);
}