function solve(string, char, nString) {
    let result = string.replace('_', char);
    let output = nString;

    if(nString === result) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
    
}solve('Str_ng', 'I',

'Strong')