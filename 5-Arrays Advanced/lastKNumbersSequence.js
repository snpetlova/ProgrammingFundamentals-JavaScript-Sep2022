function lastKNumbersSequence(nLength, kElements) {

    let sequence = [1];

    for (let i = 1; i < nLength; i++){
        let index = Math.max(sequence.length - kElements, 0);

        let lastElements = sequence.slice(index);
        let sum = 0;

        for (const element of lastElements) {
            sum += element;
        }

        sequence.push(sum);
    }

    console.log(sequence.join(' '));

} lastKNumbersSequence(6, 3)

