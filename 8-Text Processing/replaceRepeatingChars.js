function replaceChars(string) {

    let newString = '';
    
    for (let i = 0; i < string.length; i++) {
        const curr = string[i];
        const prev = string[i - 1];

        if (curr !== prev) {
            newString += curr;
        }
    }

    console.log(newString);

}replaceChars('aaaaabbbbbcdddeeeedssaa')