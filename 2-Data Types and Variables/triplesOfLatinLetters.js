function solve(n) {
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            for (let s = 0; s < n; s++) {
                let firstLetter = String.fromCharCode(97 + i);
                let secondLetter = String.fromCharCode(97 + k);
                let thirdLetter = String.fromCharCode(97+ s);

                console.log(firstLetter + secondLetter + thirdLetter);
            }
        }
    }
} solve('3')