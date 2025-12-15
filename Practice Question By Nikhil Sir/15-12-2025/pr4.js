// Mobile Battery is 100%
// 100% full 
// 50% - charged
// 10 low 
// 0 switch off 
const battery = 60;



    for (let a = 100; a >= 0; a -= 10) {
        if (a === 100) {
            console.log(a,"-full");
        } else if (a === 50) {
            console.log(a,"-charged");
        } else if (a === 10) {
            console.log(a,"-low");
        } else if (a === 0) {
            console.log(a,"-switch off");
        }
    }