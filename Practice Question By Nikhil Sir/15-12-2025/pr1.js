// An office works from 9 AM to 6 PM. Write a JavaScript program using a for loop and if condition to:


for (let hour = 0; hour < 24; hour++) {
    if (hour >= 9 && hour < 18) {
        console.log(`${hour}:-> Working`);
    } else if (hour >= 18) {
        console.log(`${hour}:-> Log out...`);
    }
}