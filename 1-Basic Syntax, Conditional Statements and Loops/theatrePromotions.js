function solve (typeDay, age) {
    if (0 <= age && age <= 18) {
        if (typeDay === "Weekday") {
            console.log("12$");
        } else if (typeDay === "Weekend") {
            console.log("15$");
        } else if (typeDay === "Holiday") {
            console.log("5$");
        }
    } else if (18 < age && age <= 64) {
        if (typeDay === "Weekday") {
            console.log("18$");
        } else if (typeDay === "Weekend") {
            console.log("20$");
        } else if (typeDay === "Holiday") {
            console.log("12$");
        }
    } else if (64 < age && age <= 122) {
        if (typeDay === "Weekday") {
            console.log("12$");
        } else if (typeDay === "Weekend") {
            console.log("15$");
        } else if (typeDay === "Holiday") {
            console.log("10$");
        }
    } else {
        console.log("Error!"); 
    }
} solve ('Weekday',

42)
solve('Holiday', -12)