function solve (numToBeRounded, prec) {
    if (prec > 15) {
        prec = 15;
    }

    let num = numToBeRounded.toFixed(prec);
    console.log(parseFloat(num));
} solve(10.5,3)