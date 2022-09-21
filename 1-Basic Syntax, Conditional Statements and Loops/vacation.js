function solve (groupOfPeople, typeGroup, dayOfTheWeek) {
    let sum = 0;
    if (dayOfTheWeek === "Friday") {
        if (typeGroup === "Students") {
            sum = groupOfPeople * 8.45;
        } else if (typeGroup === "Business") {
            sum = groupOfPeople * 10.90;
        } else if (typeGroup === "Regular") {
            sum = groupOfPeople * 15;
        }
    } else if (dayOfTheWeek === "Saturday") {
        if (typeGroup === "Students") {
            sum = groupOfPeople * 9.80;
        } else if (typeGroup === "Business") {
            sum = groupOfPeople * 15.60;
        } else if (typeGroup === "Regular") {
            sum = groupOfPeople * 20;
        } 
    } else if (dayOfTheWeek === "Sunday") {
        if (typeGroup === "Students") {
            sum = groupOfPeople * 10.46;
        } else if (typeGroup === "Business") {
            sum = groupOfPeople * 16;
        } else if (typeGroup === "Regular") {
            sum = groupOfPeople * 22.50;
        }
    }

    if (typeGroup === "Students" && groupOfPeople >= 30) {
        sum = sum * 0.85;
    }

    if (typeGroup === "Business" && groupOfPeople >= 100) {
        sum = sum - ((sum / groupOfPeople) * 10)
    }

    if (typeGroup === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        sum = sum * 0.95;
    }

    console.log("Total price: " + sum.toFixed(2));

} solve (150,

    "Business",
    
    "Saturday")