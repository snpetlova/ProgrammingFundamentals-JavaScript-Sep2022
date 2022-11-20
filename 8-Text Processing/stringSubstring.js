function stringSubstring(word, text) {

    let textSplited = text.split(' ');

    for (const el of textSplited) {
        if (word.toLocaleLowerCase() === el.toLocaleLowerCase()) {
            return console.log(word);  
        }
    }
    console.log(`${word} not found!`);

} stringSubstring('javascript', 'JavaScript is the best programming language')