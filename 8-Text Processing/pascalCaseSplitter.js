function pascalCaseSplitter(string) {

    let newString = string[0];
    let lower = string.toLowerCase();

    for (let i = 1; i < string.length; i++) {
        let curr = string[i];
        
        if (curr !== lower[i]) {
            newString += ', ';
        }

        newString += curr;
    }
    console.log(newString);
}pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')