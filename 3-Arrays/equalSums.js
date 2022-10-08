function solve (array) {

    let foundIndex = 'no';
    
    for (let i = 0; i < array.length; i++) {
        let rightSum = 0;
        let leftSum = 0;
        
        

        for (let left = 0; left < i; left++) {
            leftSum += array[left];
        }

        for (let right = i + 1; right < array.length; right++) {
            rightSum += array[right];
        }

        if (leftSum === rightSum) {
            foundIndex = i;
        } 
    }

    console.log(foundIndex);


} solve([1, 2, 3, 3])