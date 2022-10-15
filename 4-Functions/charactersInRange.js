function charactersInRange(firstChar, secondChar){

    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let symbols = [];

    for (let index = start + 1; index < end; index++) {
        symbols.push(String.fromCharCode(index)) 
    } 
    
    console.log(symbols.join(' '));

}charactersInRange(':','#')