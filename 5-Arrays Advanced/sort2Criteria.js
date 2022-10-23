//Write a function that orders an array of strings, by their length in ascending order as primary criteria, 
//and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

function sort2Criteria(arr) {

    let sortedArr = arr.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sortedArr.forEach(element => {
        console.log(element); 
    });

}sort2Criteria(['alpha',
'beta',
'gamma'])

