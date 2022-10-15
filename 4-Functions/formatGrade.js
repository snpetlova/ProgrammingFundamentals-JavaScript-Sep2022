function formatGrade(grade) {
    let mark = '';
    
    if (grade < 3) {
        mark = "Fail";
    } else if (grade < 3.5) {
        mark = "Poor"
    } else if (grade < 4.5) {
        mark = "Good"
    } else if (grade < 5.5) {
        mark = "Very good"
    } else {
        mark = "Excellent"
    }

    if (mark === "Fail") {
        console.log(`${mark} (2)`);
    } else {
        console.log(`${mark} (${grade.toFixed(2)})`);
    }
} formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)