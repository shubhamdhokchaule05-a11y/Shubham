// In 6am to 8am each half hour alarm should ring in for loop in js

for (let hour = 6; hour < 8; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
        console.log(`rings at ${hour}:${minute === 0 ? '00' : minute}`);
    }
}