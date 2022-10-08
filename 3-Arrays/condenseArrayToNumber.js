function solve (input) {
    
    //if it is already condensed
    if (input.length === 1) {
        console.log(`${input}`);
        return;
    }

    let k = []; 
    let totalSum = 0;

    //if the array is bigger than 2 elements
    while (input.length > 2) {
        for (let i = 0; i < input.length - 1; i++) {
            let sum = Number(input[i]) + Number(input[i+1]);
            k.push(sum);
        } //walking through the elements and summing them with each other ex. a b c -> a + b; b + c;

        input = k; //saving the new array here
        k = []; //emptying for the new sums and then the loop starts again until there are only 2 elements
    }

    totalSum = Number(input[0]) + Number(input[1]); //the sum of the 2 elements left
    console.log(totalSum); //the condensed number


} solve([5])
solve([5,0,4,1,2])