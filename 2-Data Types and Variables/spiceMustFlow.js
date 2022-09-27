function solve(startingYield) {
    let totalAmount = 0;
    let days = 0;

    while (startingYield >= 100) {
        totalAmount += (startingYield - 26);

        if (startingYield >= 26) {
            startingYield -= 10;
            days++
        }

        if (startingYield < 100) {
            totalAmount -= 26;
        }

        if (totalAmount < 0) {
            totalAmount = 0;
        }
    }

    console.log(days);
    console.log(totalAmount);

} solve(450)