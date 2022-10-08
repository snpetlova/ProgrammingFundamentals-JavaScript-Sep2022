function solve(array) {

    let longestSeq = [];
    let leftmost = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let currentSeq = [currentNum];

        for (let k = i + 1; k < array.length; k++) {
            let next = Number(array[k]);
            

            if (next === currentNum) {
                currentSeq.push(next)
            } else {
                break;
            }
        }

        if (currentSeq.length > longestSeq.length) {
            longestSeq = [];

            for (let k = 0; k < currentSeq.length; k ++) {
                longestSeq.push(currentSeq[k]);
            } 
        } else if (currentSeq.length === longestSeq.length) {
            if ( i < leftmost) {
                leftmost = i;
            }
        }
        
    }

    console.log(longestSeq.join(' '));
} solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])