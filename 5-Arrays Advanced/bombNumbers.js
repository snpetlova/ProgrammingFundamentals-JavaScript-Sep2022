function bombNumbers(seqOfNumbers, specialBombNumber) {

    let specialNumber = specialBombNumber[0];
    let bombPower = specialBombNumber[1];
    
    while (seqOfNumbers.includes(specialNumber)) {
        let removeFrom = Math.max(0, seqOfNumbers.indexOf(specialNumber) - bombPower);
        let removeTo = bombPower * 2 + 1;
        seqOfNumbers.splice(removeFrom, removeTo);
    }
    
    let res = 0;

    for (const curr of seqOfNumbers) {
        res += curr;
    }
    
    console.log(res);

}bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])