function solve(string, char, secondString) {
    let final = string.replace('_',char);
    let result = final === secondString ? 'Matched' : 'Not Matched';
    console.log(result);
}  
solve('Str_ng', 'I','Strong')